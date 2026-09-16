/**
 * Captures the FINAL frame of the /sprint-v1 hero sequence as a print-ready PNG.
 *
 * ⚠️ WHY THIS EXISTS AND WHY IT IS NOT A DRAWING (decision cmu3dn7u). The partner
 * flyer used to carry a strip of three product captures; Adrien pulled it and
 * asked for the last step of the landing's hero animation instead. The obvious
 * shortcut — redrawing that frame in the flyer's own HTML — was refused on sight:
 * two renderings of one visual diverge at the first change to the landing. So the
 * sheet carries a CAPTURE of the real component, and this script is how it is
 * retaken. Run it again whenever `sprintBuildSequence.tsx` or its CSS changes.
 *
 * ⚠️ THE FINAL STATE IS TAKEN VIA `prefers-reduced-motion: reduce`, not by
 * waiting. The component's own contract (see its header) is that the default
 * styles ARE the end state and the animations are added only under
 * `no-preference` — so reduced motion renders the finished system deterministically,
 * with no chance of catching a frame mid-build. `--motion` waits out the real
 * sequence instead, which is how the two are checked against each other.
 *
 * Driving: the CDP endpoint of the host's scratch Chrome (`hq browser ensure
 * --need public`), spoken over a raw WebSocket — Node 22 ships a global one, so
 * this script has no dependency and the repo gains none.
 */
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const origin = flag('origin', 'http://127.0.0.1:3000')
const locale = flag('locale', 'fr')
const out = path.resolve(flag('out', `sprint-hero-${locale}.png`))
const scale = Number(flag('scale', '3'))
const width = Number(flag('width', '1440'))
const cdp = flag('cdp', 'http://127.0.0.1:9412')
/** Wait out the real animation instead of forcing its end state — a cross-check. */
const motion = args.includes('--motion')

/**
 * ⚠️ THREE SELECTORS, AND EACH ONE WAS ONCE MISSING. The seven-day stepper is
 * absolutely positioned at `bottom: -1.1rem`, so it sits OUTSIDE the box of
 * `.sprint-build` and a clip measured on that element alone silently drops it —
 * the one part of the frame that says « seven days ». And the browser frame
 * (`.sprint-shot--hero`) is wider than `.sprint-build` at desktop width: without
 * it in the union, the frame's right border and its rounded corners were sliced
 * off (the 2026-09-16 ad review, `cmu4iehk`: « c'est rogné »). The clip is the
 * UNION of the three rects, plus a hair of air so the 3px rail is not flush to
 * the crop.
 */
const SELECTORS = ['.sprint-build', '.sprint-build-steps', '.sprint-shot--hero']
const PAD = 3

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

await send('Page.enable')
await send('Runtime.enable')
// The scale is spent ONCE, here. `Page.captureScreenshot`'s own `clip.scale`
// multiplies with this one, so passing both is a silent 9x at scale 3.
await send('Emulation.setDeviceMetricsOverride', { width, height: 1100, deviceScaleFactor: scale, mobile: false })
// ⚠️ SCROLLBARS OFF BEFORE ANYTHING IS MEASURED. `captureBeyondViewport` grows the
// viewport to the whole page at capture time, which removes the vertical
// scrollbar, which widens the layout by its 15px — and the centred container
// slides ~8px right AFTER the clip was measured. Every capture came out with
// extra air on the left and the frame's right border sliced off (`cmu4iehk`).
await send('Emulation.setScrollbarsHidden', { hidden: true })
if (!motion) {
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
}

await send('Page.navigate', { url: `${origin}/${locale}/sprint-v1` })
// The sequence runs ~6s; 16 leaves room for a cold dev compile underneath it.
await new Promise((resolve) => setTimeout(resolve, motion ? 16000 : 6000))

/*
 * ⚠️ THE FRAME'S DROP SHADOW IS TURNED OFF BEFORE THE CROP, and this is not a
 * cosmetic preference. `.sprint-shot--hero` carries an 80px blur offset 34px
 * down, so a clip taken on the element's own box cuts it mid-gradient and the
 * sheet gets a grey band under the picture that looks like a rendering fault.
 * Padding the clip out to clear it instead would drag the hero's headline column
 * into the frame. On paper the 1px border does the job the shadow does on
 * screen, so the shadow simply goes.
 *
 * ⚠️ THE HERO'S BACKDROP GOES TOO — the drifting grid and the halo. The PAD of
 * air around the frame otherwise carries a sliver of grid lines, which reads as
 * a stray edge of another picture once the capture sits on a flyer or an ad.
 */
await send('Runtime.evaluate', {
  expression: `(() => {
    const style = document.createElement('style')
    style.textContent = '.sprint-shot--hero{box-shadow:none !important}' +
      '.sprint-hero-grid,.sprint-hero-glow{display:none !important}'
    document.head.appendChild(style)
  })()`,
})

const measured = await send('Runtime.evaluate', {
  expression: `(() => {
    const els = ${JSON.stringify(SELECTORS)}.map((s) => document.querySelector(s))
    if (els.some((el) => !el)) return null
    const rects = els.map((el) => el.getBoundingClientRect())
    const pad = ${PAD}
    const left = Math.min(...rects.map((r) => r.left)) - pad
    const top = Math.min(...rects.map((r) => r.top)) - pad
    const right = Math.max(...rects.map((r) => r.right)) + pad
    const bottom = Math.max(...rects.map((r) => r.bottom)) + pad
    return { x: left, y: top, width: right - left, height: bottom - top }
  })()`,
  returnByValue: true,
})
const clip = measured.result.value
if (!clip) throw new Error(`${SELECTORS.join(' / ')} not found on ${origin}/${locale}/sprint-v1`)

const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { ...clip, scale: 1 } })
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, Buffer.from(shot.data, 'base64'))
console.log(
  `${out} — ${Math.round(clip.width)}×${Math.round(clip.height)} css px @${scale}x` +
    ` = ${Math.round(clip.width * scale)}×${Math.round(clip.height * scale)} px`,
)
ws.close()
