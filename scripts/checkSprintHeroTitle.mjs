/**
 * Counts the lines the /sprint-v1 hero title wraps onto, in all ten locales and
 * across the viewport widths a visitor actually brings.
 *
 * ⚠️ WHY THIS NEEDS A BROWSER. A line count is a property of the RENDERED text —
 * font metrics, the column the grid hands the `<h1>`, the fluid font size at that
 * width — so neither the type-check nor `check:sprint` (which reads the copy as
 * data) can see it. On 2026-09-17 Adrien found « Your V1 in 7 days. Fixed price. »
 * set on three lines, which made the first screen taller and uglier; the other
 * nine locales, most of them longer than English, were never looked at. This is
 * the look, for all ten, every time.
 *
 * Driving: the host's scratch Chrome (`hq browser ensure --need public`) over raw
 * CDP, exactly like captureSprintHero.mjs. Run against a running server:
 *   npm run check:sprint-title -- --origin=http://127.0.0.1:3000
 * `--shot=<dir>` also saves a capture of the hero per locale at 1440 and 390.
 * Exits 1 when a title takes more than MAX_LINES lines at any checked width.
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
const shotDir = flag('shot', '')
const LOCALES = flag('locales', 'fr,en,es,de,it,pt,nl,ar,pl,tr').split(',')
/** Wide desktop → narrow desktop → the lg breakpoint → tablet → phones. */
const WIDTHS = flag('widths', '1920,1440,1280,1100,1024,900,768,600,430,390,360')
  .split(',')
  .map(Number)
/** Two lines is the design: one per sentence, or a balanced pair. */
const MAX_LINES = Number(flag('max', '2'))
const SHOT_WIDTHS = [1440, 390]

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

const setWidth = (width) =>
  send('Emulation.setDeviceMetricsOverride', {
    width,
    height: width < 768 ? 844 : 1000,
    deviceScaleFactor: 1,
    mobile: width < 768,
  })

/*
 * Lines are counted from the text's own boxes, not from `height / line-height`:
 * one client rect per line fragment, grouped by their vertical position.
 * The subtitle is counted alongside: it sits right under the title and shares
 * its column, so the two decide the height of the text column together.
 */
const MEASURE = `(async () => {
  await document.fonts.ready
  const h1 = document.querySelector('.sprint-hero h1')
  if (!h1) return null
  const sub = document.querySelector('.sprint-hero h1 + p')
  // Text nodes only: a range over the element would also return the boxes of
  // the title's inline-block sentences, whose tops are not line tops.
  const countLines = (el) => {
    const tops = new Set()
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const range = document.createRange()
      range.selectNodeContents(node)
      for (const r of range.getClientRects()) if (r.width > 1) tops.add(Math.round(r.top))
    }
    return tops.size
  }
  const hero = document.querySelector('.sprint-hero').getBoundingClientRect()
  return {
    lines: countLines(h1),
    subLines: sub ? countLines(sub) : 0,
    subText: sub ? sub.textContent : '',
    fontSize: parseFloat(getComputedStyle(h1).fontSize),
    column: Math.round(h1.getBoundingClientRect().width),
    hero: Math.round(hero.height),
    // Natural width of each sentence, in em of the title's own font size.
    ems: h1.textContent.split(/(?<=[.。])\\s+/).map((sentence) => {
      const probe = document.createElement('span')
      probe.style.whiteSpace = 'nowrap'
      probe.textContent = sentence
      h1.appendChild(probe)
      const em = probe.getBoundingClientRect().width / parseFloat(getComputedStyle(h1).fontSize)
      probe.remove()
      return Math.round(em * 100) / 100
    }),
  }
})()`

/*
 * ⚠️ THE SITE SHIPS NO ARABIC FACE: Space Grotesk and Inter have no Arabic
 * glyphs, so an Arabic visitor reads the title in their system's fallback
 * (Geeza Pro, Segoe UI, Noto Naskh…). The headless Chrome on the host has NO
 * Arabic font at all and draws tofu boxes, which measure nothing like real
 * text — so a stand-in is loaded for `ar`, the way a visitor's system would.
 */
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
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })

/** results[locale][width] = measure */
const results = {}
for (const locale of LOCALES) {
  results[locale] = {}
  await setWidth(WIDTHS[0])
  await send('Page.navigate', { url: `${origin}/${locale}/sprint-v1` })
  await sleep(4000)
  if (locale === 'ar') await evaluate(ARABIC_STAND_IN)
  for (const width of WIDTHS) {
    await setWidth(width)
    await sleep(250)
    const m = await evaluate(MEASURE)
    if (!m) throw new Error(`.sprint-hero h1 not found on ${origin}/${locale}/sprint-v1`)
    results[locale][width] = m
    if (shotDir && SHOT_WIDTHS.includes(width)) {
      const clip = await evaluate(`(() => {
        const r = document.querySelector('.sprint-hero').getBoundingClientRect()
        return { x: 0, y: r.top + scrollY, width: r.width, height: r.height, scale: 1 }
      })()`)
      const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip })
      fs.mkdirSync(shotDir, { recursive: true })
      fs.writeFileSync(path.join(shotDir, `hero-${locale}-${width}.png`), Buffer.from(shot.data, 'base64'))
    }
  }
}
await send('Target.closeTarget', { targetId: target.id }).catch(() => {})
ws.close()

/* Lines and hero height per locale × width, then font size and column width (en). */
const pad = (s, n) => String(s).padStart(n)
console.log(`lines        ${WIDTHS.map((w) => pad(w, 5)).join('')}`)
for (const locale of LOCALES) {
  console.log(`${locale.padEnd(12)} ${WIDTHS.map((w) => pad(results[locale][w].lines, 5)).join('')}`)
}
console.log(`\nsubtitle     ${WIDTHS.map((w) => pad(w, 5)).join('')}`)
for (const locale of LOCALES) {
  console.log(`${locale.padEnd(12)} ${WIDTHS.map((w) => pad(results[locale][w].subLines, 5)).join('')}`)
}
console.log(`\nhero px      ${WIDTHS.map((w) => pad(w, 5)).join('')}`)
for (const locale of LOCALES) {
  console.log(`${locale.padEnd(12)} ${WIDTHS.map((w) => pad(results[locale][w].hero, 5)).join('')}`)
}
console.log('')
const ref = results[LOCALES.includes('en') ? 'en' : LOCALES[0]]
console.log(`font px      ${WIDTHS.map((w) => pad(Math.round(ref[w].fontSize), 5)).join('')}`)
console.log(`column px    ${WIDTHS.map((w) => pad(ref[w].column, 5)).join('')}`)

if (args.includes('--debug')) {
  for (const locale of LOCALES) {
    const first = results[locale][WIDTHS[0]]
    console.log(`${locale} title sentences (em): ${first.ems.join(' / ')} — subtitle: ${first.subText}`)
  }
}

/*
 * ⚠️ A TITLE THAT LOST ITS SIZE PASSES THE LINE COUNT. When the title's rule
 * is missing from the served CSS (seen with a stale dev bundle), the `<h1>`
 * falls back to 16px and fits on one line everywhere — a green result on a
 * broken page. Nothing on this hero is meant to be set under 28px.
 */
const MIN_FONT_PX = 28
const failures = LOCALES.flatMap((locale) =>
  WIDTHS.flatMap((w) => {
    const m = results[locale][w]
    const out = []
    if (m.lines > MAX_LINES) out.push(`${locale} @${w}px — ${m.lines} lines`)
    if (m.fontSize < MIN_FONT_PX) out.push(`${locale} @${w}px — title at ${m.fontSize}px, its size rule is not applied`)
    return out
  }),
)
if (failures.length) {
  console.error(`\n✗ hero title:\n  ${failures.join('\n  ')}`)
  process.exit(1)
}
console.log(`\n✓ hero title on ≤ ${MAX_LINES} lines in ${LOCALES.length} locales × ${WIDTHS.length} widths`)
