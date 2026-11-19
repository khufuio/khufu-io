/**
 * Captures the mini-flyer's scene — the hero frame in its `print` tone, the
 * companion app and the showcase site — as transparent PNGs, one set per locale.
 *
 *   npm run dev                      # the stage is a DEV-ONLY route
 *   npm run capture:mockups [-- --origin=http://127.0.0.1:3000 --cdp=http://127.0.0.1:9412]
 *
 * ⚠️ CAPTURED FROM THE REAL COMPONENTS (decision cmu3dn7u), on
 * /[locale]/sprint-v1/mockups: SprintBuildSequence (tone="print") and the two
 * mockups of sprintMockups.tsx. ⛔ Never redraw them in the flyer's HTML.
 *
 * ⚠️ TRANSPARENT, so the flyer can overlap the three objects and cast its own
 * drop shadow on their real outline (rounded corners, the phone's bezel). The
 * page background is cleared and every element outside the stage is hidden
 * (`visibility`, not `display`, so nothing reflows under the clip).
 *
 * ⚠️ FINAL STATE VIA `prefers-reduced-motion: reduce`, like captureSprintHero.mjs:
 * the hero's resting styles ARE its last frame.
 *
 * Out: public/images/captures/sprint-{hero-print,app,site}-<lang>.png.
 * ⛔ `sprint-hero-<lang>.png` (the partner flyer's and the ads' file) is not touched.
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
const scale = Number(flag('scale', '4'))
const only = flag('locale', undefined)
const locales = only ? [only] : ['fr', 'en']
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const outDir = path.join(root, 'public', 'images', 'captures')

/**
 * What each file holds. The hero's seven-day rail hangs OUTSIDE `.sprint-build`
 * (see captureSprintHero.mjs), so its clip is the union with the rail.
 */
const SHOTS = [
  { name: 'hero-print', selectors: ['[data-mockup="hero"] .sprint-shot--hero', '[data-mockup="hero"] .sprint-build-steps'] },
  { name: 'site', selectors: ['.sprint-mock-site'] },
  { name: 'app', selectors: ['.sprint-mock-phone'] },
]
const PAD = 2

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

try {
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 1600, height: 900, deviceScaleFactor: scale, mobile: false })
  await send('Emulation.setScrollbarsHidden', { hidden: true })
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  await send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } })

  for (const locale of locales) {
    const url = `${origin}/${locale}/sprint-v1/mockups`
    await send('Page.navigate', { url })
    // Room for a cold dev compile; the stage itself has nothing to wait for.
    await new Promise((resolve) => setTimeout(resolve, 8000))
    await send('Runtime.evaluate', {
      expression: `(() => {
        const style = document.createElement('style')
        style.textContent = 'html,body{background:transparent !important}' +
          'body *{visibility:hidden !important}' +
          '[data-mockup-stage],[data-mockup-stage] *{visibility:visible !important}'
        document.head.appendChild(style)
        return document.fonts.ready.then(() => true)
      })()`,
      awaitPromise: true,
    })

    for (const shot of SHOTS) {
      const measured = await send('Runtime.evaluate', {
        expression: `(() => {
          const els = ${JSON.stringify(shot.selectors)}.map((s) => document.querySelector(s))
          if (els.some((el) => !el)) return null
          const rects = els.map((el) => el.getBoundingClientRect())
          const left = Math.min(...rects.map((r) => r.left)) - ${PAD}
          const top = Math.min(...rects.map((r) => r.top)) - ${PAD}
          const right = Math.max(...rects.map((r) => r.right)) + ${PAD}
          const bottom = Math.max(...rects.map((r) => r.bottom)) + ${PAD}
          return { x: left + scrollX, y: top + scrollY, width: right - left, height: bottom - top }
        })()`,
        returnByValue: true,
      })
      const clip = measured.result.value
      if (!clip) throw new Error(`${shot.selectors.join(' / ')} not found on ${url} — is \`npm run dev\` up?`)
      const out = path.join(outDir, `sprint-${shot.name}-${locale}.png`)
      const png = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { ...clip, scale: 1 } })
      fs.writeFileSync(out, Buffer.from(png.data, 'base64'))
      console.log(`${path.relative(root, out)} — ${Math.round(clip.width)}×${Math.round(clip.height)} css px @${scale}x`)
    }
  }
} finally {
  ws.close()
  await fetch(`${cdp}/json/close/${target.id}`).catch(() => undefined)
}
