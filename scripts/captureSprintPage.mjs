/**
 * Captures the WHOLE /sprint-v1 page per locale, at a desktop and a phone width,
 * and reports the two things a translation breaks without any test noticing:
 * a page that scrolls sideways, and the direction the page was actually laid
 * out in.
 *
 * ⚠️ WHY IT EXISTS (todo cmu8036u, 2026-09-19). Seven locales were translated in
 * one pass; the copy check reads them as data and the build only proves they
 * compile. Whether German overflows a chip or Arabic renders right-to-left is a
 * property of the RENDERED page, so the only proof is to look at it — this
 * produces the images to look at, the same way every time.
 *
 * Driving: the host's scratch Chrome (`hq browser ensure --need public`) over raw
 * CDP, like checkSprintHeroTitle.mjs. Run against a running server:
 *   npm run capture:sprint-page -- --origin=http://127.0.0.1:3000 --out=<dir> --locales=ar,de,tr
 * Writes `<out>/sprint-<locale>-<width>-<nn>.png`, one tile per `--tile` px (1400). Exits 1 when a page overflows
 * horizontally or an RTL locale was not served `dir="rtl"`.
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
const outDir = flag('out', 'sprint-captures')
const LOCALES = flag('locales', 'fr,en,es,de,it,pt,nl,ar,pl,tr').split(',')
const WIDTHS = flag('widths', '1440,390').split(',').map(Number)
/** Tile height in CSS px — about one and a half screens. */
const TILE = Number(flag('tile', '1400'))
const RTL = new Set(['ar'])

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

/* Same stand-in as checkSprintHeroTitle.mjs: the host's Chrome has no Arabic
   font at all, and tofu boxes say nothing about how the page really reads. */
const ARABIC_STAND_IN = `(async () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=block'
  document.head.appendChild(link)
  await new Promise((resolve) => { link.onload = resolve; link.onerror = resolve })
  const style = document.createElement('style')
  style.textContent = ':root{--font-display:var(--font-space-grotesk),"Noto Sans Arabic",sans-serif !important;' +
    '--font-sans:var(--font-inter),"Noto Sans Arabic",sans-serif !important}'
  document.head.appendChild(style)
  await document.fonts.load('700 40px "Noto Sans Arabic"', 'نسختك')
  await document.fonts.ready
})()`

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setScrollbarsHidden', { hidden: true })
// Reduced motion serves every section in its finished state (globals.css).
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
fs.mkdirSync(outDir, { recursive: true })

const problems = []
for (const locale of LOCALES) {
  for (const width of WIDTHS) {
    const mobile = width < 768
    await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 1000, deviceScaleFactor: 1, mobile })
    await send('Page.navigate', { url: `${origin}/${locale}/sprint-v1` })
    await sleep(4000)
    if (locale === 'ar') await evaluate(ARABIC_STAND_IN)
    const m = await evaluate(`({
      dir: document.documentElement.dir,
      lang: document.documentElement.lang,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      height: document.documentElement.scrollHeight,
    })`)
    const expectedDir = RTL.has(locale) ? 'rtl' : 'ltr'
    if ((m.dir || 'ltr') !== expectedDir) problems.push(`${locale} — <html dir="${m.dir}">, expected ${expectedDir}`)
    if (m.overflow > 0) problems.push(`${locale} @${width} — page scrolls sideways by ${m.overflow}px`)
    // Sliced into screen-sized tiles: one 13,000px image is downscaled past
    // legibility by any viewer, and a tile is what a visitor sees at once anyway.
    let tile = 0
    for (let y = 0; y < m.height; y += TILE) {
      const shot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true,
        clip: { x: 0, y, width, height: Math.min(TILE, m.height - y), scale: 1 },
      })
      const name = `sprint-${locale}-${width}-${String(++tile).padStart(2, '0')}.png`
      fs.writeFileSync(path.join(outDir, name), Buffer.from(shot.data, 'base64'))
    }
    console.log(`${locale} @${width}  lang=${m.lang} dir=${m.dir || 'ltr'} overflow=${m.overflow}px height=${m.height}px → ${tile} tiles`)
  }
}
await send('Target.closeTarget', { targetId: target.id }).catch(() => {})
ws.close()

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s):`)
  for (const p of problems) console.error(`   ${p}`)
  process.exit(1)
}
console.log(`\n✓ ${LOCALES.length} locale(s) × ${WIDTHS.length} width(s): no sideways scroll, direction as declared`)
