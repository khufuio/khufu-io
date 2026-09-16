/**
 * Renders ONE Khufu flyer: a content file in, a one-page A4 PDF out.
 *
 *   npm run flyer -- <content.json> <out.pdf>
 *
 * The chain is the house chain and nothing else: self-contained HTML printed by
 * headless Chrome over CDP through hq/scripts/client-doc-pdf.mjs
 * (hq/docs/tools/client-documents.md). No pdfkit, no LaTeX, no Word — the pdfkit
 * renderer that used to produce the partner one-pagers is exactly what decision
 * cmu3baml rejected.
 *
 * The overflow control is the part that matters. A flyer that spills onto a
 * second page is not a flyer, and Chrome will happily print two pages with exit
 * code 0, so the page count is asserted after the fact — the build fails and the
 * copy gets cut. It never gets fixed by shrinking the type.
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderFlyer, type Flyer } from './flyer/render'

const HQ_DIR = process.env.HQ_DIR ?? path.join(os.homedir(), 'code/projects/hq')
const PRINT_ENTRY = path.join(HQ_DIR, 'scripts/client-doc-pdf.mjs')

function pageCount(pdf: string): number {
  const info = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' })
  const match = /^Pages:\s+(\d+)$/m.exec(info)
  if (!match) throw new Error(`pdfinfo gave no page count for ${pdf}`)
  return Number(match[1])
}

export function buildFlyer(contentFile: string, outPdf: string): void {
  const flyer = JSON.parse(fs.readFileSync(contentFile, 'utf8')) as Flyer
  const html = renderFlyer(flyer)

  const work = fs.mkdtempSync(path.join(os.tmpdir(), `khufu-flyer-${flyer.id}-`))
  try {
    const htmlFile = path.join(work, `${flyer.id}.html`)
    fs.writeFileSync(htmlFile, html)
    fs.mkdirSync(path.dirname(outPdf), { recursive: true })
    // --no-footer: a one-page sheet has nothing to paginate, and the house
    // "X / Y" footer would sit on top of the flyer's own footer band.
    execFileSync('node', [PRINT_ENTRY, htmlFile, outPdf, '--no-footer'], { stdio: 'inherit' })

    const pages = pageCount(outPdf)
    if (pages !== 1) {
      throw new Error(
        `${flyer.id}: the flyer printed ${pages} pages. A flyer is one A4 recto — cut the copy, ` +
          `do not shrink the type.`,
      )
    }
    const { size } = fs.statSync(outPdf)
    console.log(`✓ ${path.basename(outPdf)} — 1 page A4, ${(size / 1024).toFixed(1)} KB`)
  } finally {
    fs.rmSync(work, { recursive: true, force: true })
  }
}

// The CLI only runs when this file IS the entry point — buildPartnerKit.ts
// imports buildFlyer(), and an unguarded CLI would abort that build on argv.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.length !== 2) {
    console.error('usage: npm run flyer -- <content.json> <out.pdf>')
    process.exit(2)
  }
  buildFlyer(path.resolve(args[0]), path.resolve(args[1]))
}
