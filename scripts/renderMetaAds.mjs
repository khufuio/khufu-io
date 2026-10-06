/**
 * Render the Sprint V1 Meta ad creatives (ads/meta-sprint-v1) to mp4 + a poster frame.
 *
 *   npm run ads:render                      # every variant
 *   npm run ads:render -- countdown         # one variant
 *   PRICE='$17,000' npm run ads:render      # an English-price cut (one currency per creative)
 *
 * ⚠️ IT BORROWS HQ'S REMOTION, it does not install one. The Remotion toolchain (and the
 * Chrome it drives) already lives in the HQ repo for HQ's motion engine; adding it to
 * this site's package.json would put ~200MB of video tooling in a Next.js deploy. The
 * creative folder gets a `node_modules` symlink to HQ's (gitignored), which is all the
 * bundler and `tsc -p ads/meta-sprint-v1` need to resolve `remotion`.
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

// The frame used as the poster: the moment each variant is most legible on its own.
const VARIANTS = { countdown: 200, 'whole-product': 60, 'web-band': 90 }
const only = process.argv.slice(2)
const price = process.env.PRICE ?? '15 000 €'
const out = path.join(dir, 'out')
fs.mkdirSync(out, { recursive: true })

for (const [id, poster] of Object.entries(VARIANTS)) {
  if (only.length && !only.includes(id)) continue
  const common = [
    path.join(dir, 'index.ts'),
    id,
    '--public-dir', path.join(dir, 'public'),
    '--props', JSON.stringify({ price }),
    ...(chrome ? ['--browser-executable', chrome] : []),
  ]
  execFileSync(bin, ['render', ...common, path.join(out, `${id}.mp4`), '--codec', 'h264', '--crf', '18'], { stdio: 'inherit', cwd: hq })
  execFileSync(bin, ['still', ...common, path.join(out, `${id}-poster.png`), '--frame', String(poster)], { stdio: 'inherit', cwd: hq })
}
