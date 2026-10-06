/**
 * Captures the live public pages the Sprint V1 Meta ads show as « vitrines »
 * (ads/meta-sprint-v1/public/sprint2), the same way every time.
 *
 * ⚠️ WHY A SCRIPT AND NOT A HAND-TAKEN SCREENSHOT (pass 2, 2026-10-06):
 *   - Traqio's home hero reads « Meta says 40. You got 12. » in display type — a
 *     product's sample figure that a hurried viewer takes for a khufu result
 *     (decision cmu0fqj7). Its /features page says what the product is with no
 *     figure at all, so that is the vitrine the ads show.
 *   - Every one of these sites puts a cookie banner over its first screen. The
 *     script answers it with the site's own « Decline » button (no analytics
 *     recorded for a robot) instead of cropping the banner away (cmu4iehk).
 *   - The French route of each site, since the creative is French.
 *
 * ⛔ The capture is the viewport, whole: 1200×650 CSS px at 2× — the same ratio as
 * the landing's own product frames, so the ad kit's Browser frame shows it uncut.
 *
 * Driving: the host's scratch Chrome (`hq browser ensure --need public`) over raw
 * CDP, like captureSprintPage.mjs:
 *   npm run capture:ad-screens [-- --cdp=http://127.0.0.1:9412]
 */
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}
const cdp = flag('cdp', 'http://127.0.0.1:9412')
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const outDir = path.join(root, 'ads', 'meta-sprint-v1', 'public', 'sprint2')

const TARGETS = [
  { name: 'traqio-site', url: 'https://traqio.app/fr/features' },
  { name: 'herbacrm-site', url: 'https://www.herbacrm.com/fr' },
  { name: 'onestore-site', url: 'https://onestore.link/fr' },
]
const WIDTH = 1200
const HEIGHT = 650

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

// Clicks the banner's refusal button, whatever the site calls it.
const DECLINE = `(() => {
  const words = /^(decline|reject|refuser|tout refuser|non merci)$/i
  const button = [...document.querySelectorAll('button, a')].find((b) => words.test(b.textContent.trim()))
  if (!button) return false
  button.click()
  return true
})()`

/* The host's Chrome has no font carrying the modifier letters of « 1ᵉʳ », which
   Traqio's French copy uses, so they render as tofu boxes. Same stand-in idea as
   captureSprintPage.mjs's Arabic font: every family the page loads gets a Noto
   Sans face for THOSE code points only (unicode-range), so the rest of the page
   keeps its own type and the text is the site's, just made printable. */
const SUPERSCRIPT_STAND_IN = `(async () => {
  const text = 'ᵉʳᵈˢᵗⁿᵒ'
  const css = await (await fetch('https://fonts.googleapis.com/css2?family=Noto+Sans&text=' + encodeURIComponent(text))).text()
  const src = /url\\(([^)]+)\\)/.exec(css)?.[1]
  if (!src) return 'no font'
  const families = new Set([...document.fonts].map((f) => f.family))
  for (const el of [document.body, ...document.querySelectorAll('h1, h2, p')]) families.add(getComputedStyle(el).fontFamily.split(',')[0].trim())
  const style = document.createElement('style')
  style.textContent = [...families]
    .map((family) => '@font-face{font-family:"' + family.replace(/["\']/g, '') + '";src:url(' + src + ');unicode-range:U+1D49,U+02B3,U+1D48,U+02E2,U+1D57,U+207F,U+1D52;}')
    .join('')
  document.head.appendChild(style)
  await document.fonts.ready
  return [...families].join(' | ')
})()`

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setScrollbarsHidden', { hidden: true })
await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 2, mobile: false })
fs.mkdirSync(outDir, { recursive: true })

for (const { name, url } of TARGETS) {
  await send('Page.navigate', { url })
  await sleep(5000)
  const declined = await evaluate(DECLINE)
  await evaluate(SUPERSCRIPT_STAND_IN)
  await sleep(1200)
  await evaluate('window.scrollTo(0, 0)')
  await sleep(300)
  const shot = await send('Page.captureScreenshot', { format: 'webp', quality: 90 })
  const file = path.join(outDir, `${name}.webp`)
  fs.writeFileSync(file, Buffer.from(shot.data, 'base64'))
  console.log(`${name}  ${url}  banner declined: ${declined}  → ${path.relative(root, file)}`)
}
await send('Target.closeTarget', { targetId: target.id }).catch(() => {})
ws.close()
