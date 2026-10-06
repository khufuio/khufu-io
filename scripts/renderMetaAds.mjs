/**
 * Render the Sprint V1 Meta ad creatives (ads/meta-sprint-v1): 3 bases × 3 hooks
 * × 2 ratios = 18 mp4, plus the contact sheet that shows the nine hooks in one PNG.
 *
 *   npm run ads:render                         # everything, into $ADS_OUT
 *   npm run ads:render -- a2 c                 # only hook a2 and the three c hooks
 *   PRICE='$17,000' npm run ads:render         # an English-price cut (one currency per creative)
 *   ADS_OUT=/some/dir npm run ads:render       # default: HQ's scratchpad, pass-2 folder
 *   npm run ads:render -- --check [b2 …]       # stills of every scene, both ratios, into $ADS_OUT/check — no video
 *
 * ⚠️ IT BORROWS HQ'S REMOTION, it does not install one. The Remotion toolchain (and the
 * Chrome it drives) already lives in the HQ repo for HQ's motion engine; adding it to
 * this site's package.json would put ~200MB of video tooling in a Next.js deploy. The
 * creative folder gets a `node_modules` symlink to HQ's (gitignored), which is all the
 * bundler and `tsc -p ads/meta-sprint-v1` need to resolve `remotion`.
 *
 * ⚠️ THE LANDING'S HERO CSS IS COPIED, NOT FORKED. Base A plays the /sprint-v1 hero
 * animation (landingBuild.tsx). Its rules live in src/app/globals.css, a Tailwind
 * entry the ad bundler cannot import, so this script lifts the design tokens and the
 * `.sprint-shot*` / `.sprint-build*` section out of it into
 * ads/meta-sprint-v1/generated/landingHero.css (gitignored) on every run.
 *
 * ⚠️ THE FILES ARE WRITTEN OUTSIDE THE REPO by default — HQ's scratchpad — because the
 * session worktree is recycled and a link into it would die.
 */

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const dir = path.join(root, 'ads', 'meta-sprint-v1')
const hq = process.env.HQ_ROOT ?? path.join(os.homedir(), 'code', 'projects', 'hq')
const bin = path.join(hq, 'node_modules', '.bin', 'remotion')
if (!fs.existsSync(bin)) {
  console.error(`No Remotion at ${bin} — set HQ_ROOT to the HQ checkout.`)
  process.exit(1)
}

const link = path.join(dir, 'node_modules')
if (!fs.existsSync(link)) fs.symlinkSync(path.join(hq, 'node_modules'), link)

const chrome = [
  process.env.HQ_CHROME_BIN,
  '/usr/bin/google-chrome-stable',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].find((p) => p && fs.existsSync(p))

const price = process.env.PRICE ?? '15 000 €'
const out = process.env.ADS_OUT ?? path.join(hq, 'scratchpad', 'khufu-meta-ads-sprint-v1-2026-10-06', 'pass-2')
const BASES = [
  { letter: 'a', id: 'a-countdown' },
  { letter: 'b', id: 'b-apps' },
  { letter: 'c', id: 'c-web-band' },
]
const FORMATS = ['9x16', '4x5']
const HOOKS = [1, 2, 3]
/** The hook I would bet on — see the pass-2 report. Marked on the contact sheet. */
const PICK = 'c1'
/** The contact sheet's frame: one second in, when every hook's last line has landed. */
const HOOK_STILL_FRAME = 30

const check = process.argv.includes('--check')
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const wanted = (hookId) => !only.length || only.some((o) => hookId === o || hookId.startsWith(o))

// ---------------------------------------------------------------- landing CSS
/**
 * Puts every animation of the hero on the AD's clock instead of the wall clock.
 *
 * Remotion renders frames out of order and in parallel tabs, and a running CSS
 * animation follows the wall clock. The way Remotion documents for CSS animations
 * is to pause them and move them with a NEGATIVE delay: a paused animation whose
 * delay is `d - t` shows exactly its state at time t. So each delay the landing
 * declares — `animation-delay` or the delay slot of the `animation` shorthand,
 * including the shorthand's implicit 0s — becomes `calc(d - var(--ad-t))`, and
 * landingBuild.tsx sets `--ad-t` every frame. The keyframes, durations and easings
 * are the landing's own, untouched.
 *
 * (Seeking the animations through the Web Animations API was tried first: the
 * computed style was right, but Chrome painted the seeked elements empty in the
 * frame Remotion captured.)
 */
/** Splits on `sep` outside parentheses — `cubic-bezier(0.2, 0.8, …)` stays one token. */
function splitTop(value, sep) {
  const out = ['']
  let depth = 0
  for (const ch of value) {
    if (ch === '(') depth++
    if (ch === ')') depth--
    if (depth === 0 && sep.test(ch)) out.push('')
    else out[out.length - 1] += ch
  }
  return out.map((p) => p.trim()).filter(Boolean)
}

function onAdClock(css) {
  const shift = (d) => `calc(${d} - var(--ad-t))`
  const TIME = /^-?\d*\.?\d+m?s$/
  return css
    .replace(/animation-delay:\s*([^;]+);/g, (_, d) => `animation-delay: ${shift(d.trim())};`)
    .replace(/([{;\s]animation:)([^;]+);/g, (_, head, value) => {
      const parts = splitTop(value, /,/).map((part) => {
        const tokens = splitTop(part, /\s/)
        const times = tokens.map((t, i) => (TIME.test(t) ? i : -1)).filter((i) => i >= 0)
        if (times.length >= 2) tokens[times[1]] = shift(tokens[times[1]])
        else if (times.length === 1) tokens.splice(times[0] + 1, 0, shift('0s'))
        return tokens.join(' ')
      })
      return `${head} ${parts.join(',\n    ')};`
    })
}

function extractLandingCss() {
  const css = fs.readFileSync(path.join(root, 'src', 'app', 'globals.css'), 'utf8')
  const theme = /@theme\s*\{([\s\S]*?)\n\}/.exec(css)
  const start = css.indexOf('/* ------------------------------------------------------------------ *\n * The browser frame every product capture sits in')
  const end = css.indexOf('/* ------------------------------------------------------------------ *\n * The contact modal')
  if (!theme || start < 0 || end < 0) throw new Error('globals.css changed shape — update extractLandingCss() in scripts/renderMetaAds.mjs')
  const generated = path.join(dir, 'generated')
  fs.mkdirSync(generated, { recursive: true })
  fs.writeFileSync(
    path.join(generated, 'landingHero.css'),
    [
      '/* GENERATED by scripts/renderMetaAds.mjs from src/app/globals.css — do not edit. */',
      `:root {${theme[1]}\n}`,
      // Lowest specificity, first: an element whose animation declares no delay at all
      // still has to sit on the ad's clock.
      ':where(.ad-landing-build *) { animation-delay: calc(0s - var(--ad-t)); }',
      onAdClock(css.slice(start, end)),
      '.ad-landing-build, .ad-landing-build * { animation-play-state: paused !important; }',
      // The ad's own week row is the seven-day rail in base A; the hero's rail under
      // the frame would be a second one (the « doublon » Adrien removed on the landing).
      '.ad-landing-build .sprint-build-steps { display: none; }',
      '',
    ].join('\n'),
  )
}
if (process.argv.includes('--css-only')) {
  extractLandingCss()
  process.exit(0)
}

// ---------------------------------------------------------------- remotion
function remotion(args) {
  execFileSync(bin, args, { stdio: 'inherit', cwd: hq })
}
const browser = chrome ? ['--browser-executable', chrome] : []
function bundle(target) {
  fs.rmSync(target, { recursive: true, force: true })
  remotion(['bundle', path.join(dir, 'index.ts'), '--public-dir', path.join(dir, 'public'), '--out-dir', target])
}
function duration(file) {
  const s = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).toString().trim()
  return `${Number(s).toFixed(1)} s`
}

extractLandingCss()
fs.mkdirSync(out, { recursive: true })
const build = path.join(dir, '.bundle')
bundle(build)

if (check) {
  // One still per scene of each base, in both ratios, for the hooks asked for.
  const SCENES = { 'a-countdown': [30, 110, 200, 330, 380, 430, 600, 700], 'b-apps': [30, 120, 200, 290, 380, 470, 600], 'c-web-band': [30, 140, 230, 320, 400, 480, 600] }
  const dest = path.join(out, 'check')
  fs.mkdirSync(dest, { recursive: true })
  for (const base of BASES) for (const n of HOOKS) {
    const hookId = `${base.letter}${n}`
    if (!wanted(hookId)) continue
    const frames = only.length ? SCENES[base.id] : [30]
    for (const format of FORMATS) for (const frame of frames) {
      remotion(['still', build, `${base.id}-${format}`, path.join(dest, `${hookId}-${format}-${String(frame).padStart(3, '0')}.png`), '--props', JSON.stringify({ price, hook: n }), '--frame', String(frame), ...browser])
    }
  }
  process.exit(0)
}

const durations = {}
const hookStills = path.join(dir, 'public', 'generated', 'hooks')
fs.mkdirSync(hookStills, { recursive: true })
for (const base of BASES) {
  for (const n of HOOKS) {
    const hookId = `${base.letter}${n}`
    if (!wanted(hookId)) continue
    const props = JSON.stringify({ price, hook: n })
    for (const format of FORMATS) {
      const file = path.join(out, `${hookId}-${base.id.slice(2)}-${format}.mp4`)
      remotion(['render', build, `${base.id}-${format}`, file, '--props', props, '--codec', 'h264', '--crf', '22', ...browser])
      durations[hookId] = duration(file)
    }
    remotion(['still', build, `${base.id}-9x16`, path.join(hookStills, `${hookId}.png`), '--props', props, '--frame', String(HOOK_STILL_FRAME), ...browser])
  }
}

// The sheet needs every hook's still, which only exists now — so it gets its own bundle.
if (BASES.every((b) => HOOKS.every((n) => fs.existsSync(path.join(hookStills, `${b.letter}${n}.png`))))) {
  for (const b of BASES) for (const n of HOOKS) {
    const hookId = `${b.letter}${n}`
    if (durations[hookId]) continue
    const file = path.join(out, `${hookId}-${b.id.slice(2)}-9x16.mp4`)
    if (fs.existsSync(file)) durations[hookId] = duration(file)
  }
  const sheetBuild = `${build}-sheet`
  bundle(sheetBuild)
  const labelled = Object.fromEntries(Object.entries(durations).map(([k, v]) => [k, `${v} · 9:16 + 4:5`]))
  remotion(['still', sheetBuild, 'contact-sheet', path.join(out, 'planche-contact-9-hooks.png'), '--props', JSON.stringify({ price, pick: PICK, durations: labelled }), ...browser])
}
console.log(`\n✓ written to ${out}`)
