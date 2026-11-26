/**
 * Evidence for the Google YouTube API Services audit (todo cmwwexn0): the
 * privacy policy's YouTube section, the homepage footer with the Privacy link,
 * and the legal notice as a PDF.
 *
 * The host's scratch Chrome is headless (no address bar), so each capture gets
 * a caption band at the top carrying the page URL. `--label-origin` is the
 * origin written in that band (default: `--origin`), so a capture of a local
 * production build can be labelled with the URL it will be served at.
 *
 *   npm run capture:youtube-audit -- --origin=http://127.0.0.1:4317 \
 *     --label-origin=https://khufu.io --out=<dir> [--locale=en]
 */
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const origin = flag('origin', 'http://127.0.0.1:3000')
const labelOrigin = flag('label-origin', origin)
const cdp = flag('cdp', 'http://127.0.0.1:9412')
const outDir = flag('out', 'youtube-audit')
const locale = flag('locale', 'en')
const WIDTH = 1440
const HEIGHT = 900

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

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false })

async function open(pathname) {
  await send('Page.navigate', { url: `${origin}${pathname}` })
  await sleep(2500)
  await evaluate('document.fonts.ready.then(() => true)')
  // Reveal-on-scroll sections start hidden; force them visible for a still.
  await evaluate(`(() => {
    const s = document.createElement('style')
    s.textContent = '[data-reveal]{opacity:1 !important;transform:none !important}'
    document.head.appendChild(s)
    return true
  })()`)
}

/** Fixed address-bar-like band; returns its height so content can clear it. */
async function caption(pathname) {
  const url = `${labelOrigin}${pathname}`
  await evaluate(`(() => {
    const band = document.createElement('div')
    band.textContent = ${JSON.stringify(url)}
    band.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:2147483647;height:44px;' +
      'display:flex;align-items:center;padding:0 20px;background:#e8eaed;color:#202124;' +
      'font:15px/1 system-ui,sans-serif;border-bottom:1px solid #c4c7c5;direction:ltr'
    document.body.appendChild(band)
    return true
  })()`)
}

async function shot(file) {
  const { data } = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(outDir, file), Buffer.from(data, 'base64'))
  console.log(`✓ ${path.join(outDir, file)}`)
}

fs.mkdirSync(outDir, { recursive: true })

// 1. Privacy policy, scrolled to the YouTube section.
const privacyPath = `/${locale}/privacy#youtube-api-services`
await open(privacyPath)
await caption(privacyPath)
await evaluate(`(() => {
  const el = document.getElementById('youtube-api-services')
  window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80)
  return true
})()`)
await sleep(400)
await shot('privacy-policy-youtube-section.png')

// 2. Homepage, scrolled so the footer (Privacy link) is in view.
const homePath = `/${locale}`
await open(homePath)
await caption(homePath)
// The page grows as lazy sections mount, so settle on the footer twice.
for (let i = 0; i < 3; i++) {
  await evaluate(`(() => { document.querySelector('footer').scrollIntoView({ block: 'end' }); return true })()`)
  await sleep(800)
}
await shot('homepage-privacy-link-youtube.png')

// 3. Legal notice printed to PDF; Chrome's print header carries the URL.
const legalPath = `/${locale}/mentions-legales`
await open(legalPath)
const { data: pdf } = await send('Page.printToPDF', {
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: `<div style="font-size:9px;width:100%;padding:0 12mm;font-family:sans-serif">${labelOrigin}${legalPath}</div>`,
  footerTemplate: '<div style="font-size:9px;width:100%;text-align:right;padding:0 12mm;font-family:sans-serif"><span class="pageNumber"></span>/<span class="totalPages"></span></div>',
  marginTop: 0.5,
  marginBottom: 0.5,
})
fs.writeFileSync(path.join(outDir, 'terms-of-service.pdf'), Buffer.from(pdf, 'base64'))
console.log(`✓ ${path.join(outDir, 'terms-of-service.pdf')}`)

await fetch(`${cdp}/json/close/${target.id}`)
ws.close()
