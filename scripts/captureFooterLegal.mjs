/**
 * Evidence for Meta Business Verification (todo cmwyd7h6): the site footer
 * carrying the legal name « KHUFU FZCO » and the trade-licence address, on
 * desktop (1440 px) and mobile (390 px), per locale. Run against a local
 * production build (`next start`) and the host's scratch Chrome.
 *
 *   npm run capture:footer-legal -- --origin=http://127.0.0.1:4318 \
 *     --out=<dir> [--locales=en,fr] [--suffix=v1]
 */
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const origin = flag('origin', 'http://127.0.0.1:3000')
const cdp = flag('cdp', 'http://127.0.0.1:9412')
const outDir = flag('out', 'footer-legal')
const locales = flag('locales', 'en,fr').split(',')
const suffix = flag('suffix', 'v1')
const viewports = [
  { name: 'desktop', width: 1440, height: 900, mobile: false, scale: 1 },
  { name: 'mobile-390', width: 390, height: 844, mobile: true, scale: 2 },
]

const target = await (await fetch(`${cdp}/json/new?about:blank`, { method: 'PUT' })).json()
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  ws.onopen = resolve
  ws.onerror = () => reject(new Error(`cannot reach ${cdp} — run: hq browser ensure --need public`))
})

let seq = 0
const pending = new Map()
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data)
  const slot = pending.get(msg.id)
  if (!slot) return
  pending.delete(msg.id)
  if (msg.error) slot.reject(new Error(JSON.stringify(msg.error)))
  else slot.resolve(msg.result)
}
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++seq
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params }))
  })
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.value

fs.mkdirSync(outDir, { recursive: true })
await send('Page.enable')

const report = []
for (const locale of locales) {
  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.scale,
      mobile: vp.mobile,
    })
    await send('Page.navigate', { url: `${origin}/${locale}` })
    await sleep(2500)
    await evaluate('document.fonts.ready.then(() => true)')
    // Hide the cookie banner and floating WhatsApp button so they do not cover the footer.
    const box = await evaluate(`(() => {
      const s = document.createElement('style')
      s.textContent = '[data-reveal]{opacity:1 !important;transform:none !important}'
      document.head.appendChild(s)
      for (const el of document.querySelectorAll('body *')) {
        const pos = getComputedStyle(el).position
        if ((pos === 'fixed' || pos === 'sticky') && !el.closest('footer')) el.style.display = 'none'
      }
      const footer = document.querySelector('footer')
      footer.scrollIntoView()
      const r = footer.getBoundingClientRect()
      return { x: 0, y: r.top + window.scrollY, width: document.documentElement.clientWidth, height: r.height }
    })()`)
    const line = await evaluate(
      `[...document.querySelectorAll('footer p')].map((p) => p.innerText).find((t) => t.includes('FZCO')) ?? null`,
    )
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { ...box, scale: 1 },
    })
    const file = path.join(outDir, `footer-${locale}-${vp.name}-${suffix}.png`)
    fs.writeFileSync(file, Buffer.from(shot.data, 'base64'))
    report.push({ locale, viewport: vp.name, file: path.resolve(file), line })
  }
}

await fetch(`${cdp}/json/close/${target.id}`).catch(() => undefined)
ws.close()
console.log(JSON.stringify(report, null, 2))
