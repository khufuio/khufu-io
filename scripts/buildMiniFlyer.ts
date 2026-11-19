/**
 * Renders ONE Khufu mini-flyer: a content file in, a 4:5 PDF and a 1080x1350 PNG out.
 *
 *   npm run mini-flyer -- <content.json> <out.pdf> [dark|light]   # the PNG lands beside it
 *
 * The theme paints the whole page one colour (default: dark).
 *
 * Same house chain as buildFlyer.ts — self-contained HTML printed by headless
 * Chrome through hq/scripts/client-doc-pdf.mjs — called as a module rather than a
 * CLI, because the CLI only knows A4 and this page is 540x675 css px.
 *
 * The PNG is rasterised FROM the PDF (pdftoppm at 2x, cropped to 1080x1350), not screenshotted
 * separately: one rendering, two files, so the image someone receives on WhatsApp
 * can never differ from the PDF they receive by mail.
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { MINI_THEMES, renderMiniFlyer, type MiniFlyer, type MiniTheme } from './flyer/renderMini'

const HQ_DIR = process.env.HQ_DIR ?? path.join(os.homedir(), 'code/projects/hq')
const PRINT_MODULE = path.join(HQ_DIR, 'scripts/client-doc-pdf.mjs')

/**
 * 540x675 css px at 96 css px per inch — almost. ⚠️ Chrome quantises the paper
 * (measured: 675/96 in comes out 507.12pt tall, not 506.25) and starts the page
 * box ~1px down, which printed a white hairline across the top of the ink
 * masthead. 7.02in prints 505.92pt — a hair under 675 css px, still 4:5 to
 * three decimals — and the body (674px) then covers the page edge to edge.
 */
const PAPER = { width: 540 / 96, height: 7.02 }
const NO_MARGIN = { top: 0, right: 0, bottom: 0, left: 0 }
/**
 * 2x of 540x675 css px. ⚠️ Rasterised a hair LARGER (193 dpi -> ~1085x1356) and
 * cropped to the centre, never scaled to 1080x1350: the quantised paper is under
 * 1350 px tall at 192 dpi, and stretching it to 1350 pulled two rows of the
 * blank outside the page into the PNG — a grey line along the bottom edge. Every
 * edge band is a full-bleed background, so the 2-3 px trimmed per side carry
 * nothing.
 */
const PNG_SIZE = { width: 1080, height: 1350 }
const PNG_DPI = 193
const PNG_CROP = { x: 2, y: 3 }

type PrintFn = (
  html: string,
  pdf: string,
  opts: { footer: boolean; paper: typeof PAPER; margin: typeof NO_MARGIN },
) => Promise<unknown>

function pageCount(pdf: string): number {
  const info = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' })
  const match = /^Pages:\s+(\d+)$/m.exec(info)
  if (!match) throw new Error(`pdfinfo gave no page count for ${pdf}`)
  return Number(match[1])
}

async function buildMiniFlyer(contentFile: string, outPdf: string, theme: MiniTheme): Promise<void> {
  const flyer = JSON.parse(fs.readFileSync(contentFile, 'utf8')) as MiniFlyer
  const { printDocToPdf } = (await import(pathToFileURL(PRINT_MODULE).href)) as { printDocToPdf: PrintFn }

  const work = fs.mkdtempSync(path.join(os.tmpdir(), `khufu-mini-${flyer.id}-`))
  try {
    const htmlFile = path.join(work, `${flyer.id}.html`)
    fs.writeFileSync(htmlFile, renderMiniFlyer(flyer, theme))
    fs.mkdirSync(path.dirname(outPdf), { recursive: true })
    await printDocToPdf(htmlFile, outPdf, { footer: false, paper: PAPER, margin: NO_MARGIN })

    const pages = pageCount(outPdf)
    if (pages !== 1) {
      throw new Error(`${flyer.id}: the mini-flyer printed ${pages} pages — cut the copy, do not shrink the type.`)
    }

    const pngBase = outPdf.replace(/\.pdf$/, '')
    execFileSync('pdftoppm', [
      '-r', String(PNG_DPI),
      '-x', String(PNG_CROP.x), '-y', String(PNG_CROP.y),
      '-W', String(PNG_SIZE.width), '-H', String(PNG_SIZE.height),
      '-png', '-singlefile', outPdf, pngBase])
    console.log(`✓ ${path.basename(outPdf)} + ${path.basename(pngBase)}.png — 4:5, 1080x1350, ${theme}`)
  } finally {
    fs.rmSync(work, { recursive: true, force: true })
  }
}

function isTheme(value: string): value is MiniTheme {
  return (MINI_THEMES as readonly string[]).includes(value)
}

const args = process.argv.slice(2)
const theme = args[2] ?? 'dark'
if (args.length < 2 || args.length > 3 || !isTheme(theme)) {
  console.error(`usage: npm run mini-flyer -- <content.json> <out.pdf> [${MINI_THEMES.join('|')}]`)
  process.exit(2)
}
buildMiniFlyer(path.resolve(args[0]), path.resolve(args[1]), theme).catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
