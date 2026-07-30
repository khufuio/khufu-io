/**
 * Renders each lead magnet to a branded PDF in public/downloads/.
 *
 * The guides are typed content modules (src/content/leadMagnets), so the page
 * and the PDF are generated from one source and cannot drift apart. Run with
 * `npm run pdfs` after editing any guide, and commit the output — the PDFs are
 * static assets served straight from public/, not generated at request time.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'
import { leadMagnets } from '../src/content/leadMagnets/index'
import type { GuideBlock, LeadMagnet } from '../src/content/leadMagnets/types'
import { site } from '../src/content/site'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'public', 'downloads')
const DISPLAY_FONT = path.join(ROOT, 'src', 'assets', 'fonts', 'SpaceGrotesk-700.woff')

const INK = '#0e0e10'
const INK_2 = '#3a3a40'
const MUTED = '#6b6b73'
const ACCENT = '#4c30ff'
const ACCENT_INK = '#3a1fe0'
const ACCENT_SOFT = '#edeaff'
const LINE = '#e6e6e0'
const PAPER_2 = '#f4f4f0'
const WHITE = '#ffffff'

const MARGINS = { top: 76, bottom: 88, left: 64, right: 64 }

type Doc = PDFKit.PDFDocument

/** Body text uses the core fonts; only display headings use the brand face. */
const BODY = 'Helvetica'
const BODY_BOLD = 'Helvetica-Bold'
const BODY_ITALIC = 'Helvetica-Oblique'

function createDoc(magnet: LeadMagnet): { doc: Doc; display: string } {
  const doc = new PDFDocument({
    size: 'A4',
    margins: MARGINS,
    autoFirstPage: false,
    bufferPages: true,
    info: {
      Title: magnet.title,
      Author: site.founder,
      Subject: magnet.subtitle,
      Keywords: `Khufu, Sprint V1, SaaS, MVP, ${magnet.label}`,
    },
  })

  // Space Grotesk is the brand display face. fontkit reads WOFF, but a failure
  // here must not block a build — fall back to the core bold face.
  let display = BODY_BOLD
  try {
    doc.registerFont('Display', DISPLAY_FONT)
    display = 'Display'
  } catch {
    console.warn('  ! display font unavailable, falling back to Helvetica-Bold')
  }
  return { doc, display }
}

const contentWidth = (doc: Doc): number => doc.page.width - MARGINS.left - MARGINS.right
const contentBottom = (doc: Doc): number => doc.page.height - MARGINS.bottom

/** Start a new page when the next block would not fit on the current one. */
function ensureSpace(doc: Doc, height: number): void {
  if (doc.y + height > contentBottom(doc)) doc.addPage()
}

function gap(doc: Doc, amount: number): void {
  doc.y += amount
}

/**
 * Draw below the bottom margin without triggering pdfkit's automatic page
 * break — the documented way to render footers and page numbers.
 */
function outsideMargins(doc: Doc, draw: () => void): void {
  const bottom = doc.page.margins.bottom
  doc.page.margins.bottom = 0
  draw()
  doc.page.margins.bottom = bottom
}

function paragraph(doc: Doc, text: string, opts: { size?: number; color?: string; font?: string; gap?: number } = {}): void {
  doc
    .font(opts.font ?? BODY)
    .fontSize(opts.size ?? 10.5)
    .fillColor(opts.color ?? INK_2)
    .text(text, MARGINS.left, doc.y, { width: contentWidth(doc), align: 'left', lineGap: 3.2 })
  gap(doc, opts.gap ?? 10)
}

function bulletList(doc: Doc, items: string[], ordered: boolean): void {
  const indent = 18
  const width = contentWidth(doc) - indent
  items.forEach((item, i) => {
    const marker = ordered ? `${i + 1}.` : '•'
    const height = doc.font(BODY).fontSize(10.5).heightOfString(item, { width, lineGap: 3.2 })
    ensureSpace(doc, height + 6)
    const top = doc.y
    doc.font(ordered ? BODY_BOLD : BODY).fontSize(10.5).fillColor(ordered ? ACCENT_INK : ACCENT)
    doc.text(marker, MARGINS.left, top, { width: indent, lineBreak: false })
    doc.font(BODY).fontSize(10.5).fillColor(INK_2)
    doc.text(item, MARGINS.left + indent, top, { width, lineGap: 3.2 })
    gap(doc, 7)
  })
  gap(doc, 5)
}

function heading3(doc: Doc, text: string, display: string): void {
  const height = doc.font(display).fontSize(13).heightOfString(text, { width: contentWidth(doc) })
  // Keep a heading with at least a couple of lines of whatever follows it.
  ensureSpace(doc, height + 46)
  gap(doc, 6)
  doc
    .font(display)
    .fontSize(13)
    .fillColor(INK)
    .text(text, MARGINS.left, doc.y, { width: contentWidth(doc), lineGap: 1 })
  gap(doc, 8)
}

function quote(doc: Doc, text: string): void {
  const width = contentWidth(doc) - 22
  const height = doc.font(BODY_ITALIC).fontSize(11.5).heightOfString(text, { width, lineGap: 3.5 })
  ensureSpace(doc, height + 22)
  const top = doc.y
  doc.save().rect(MARGINS.left, top, 3, height).fill(ACCENT).restore()
  doc
    .font(BODY_ITALIC)
    .fontSize(11.5)
    .fillColor(INK)
    .text(text, MARGINS.left + 22, top, { width, lineGap: 3.5 })
  doc.y = top + height
  gap(doc, 16)
}

function callout(doc: Doc, title: string, body: string, display: string): void {
  const pad = 14
  const width = contentWidth(doc) - pad * 2
  const titleHeight = doc.font(display).fontSize(11).heightOfString(title, { width })
  const bodyHeight = doc.font(BODY).fontSize(10).heightOfString(body, { width, lineGap: 3 })
  const boxHeight = titleHeight + bodyHeight + pad * 2 + 6
  ensureSpace(doc, boxHeight + 12)
  const top = doc.y
  doc.save().roundedRect(MARGINS.left, top, contentWidth(doc), boxHeight, 10).fill(ACCENT_SOFT).restore()
  doc
    .font(display)
    .fontSize(11)
    .fillColor(ACCENT_INK)
    .text(title, MARGINS.left + pad, top + pad, { width })
  doc
    .font(BODY)
    .fontSize(10)
    .fillColor(INK_2)
    .text(body, MARGINS.left + pad, top + pad + titleHeight + 6, { width, lineGap: 3 })
  doc.y = top + boxHeight
  gap(doc, 14)
}

function table(doc: Doc, head: string[], rows: string[][], note: string | undefined, display: string): void {
  const width = contentWidth(doc)
  // First column carries the row label and needs the most room; the rest split evenly.
  const firstRatio = head.length <= 3 ? 0.34 : 0.28
  const colWidths = head.map((_, i) => (i === 0 ? width * firstRatio : (width * (1 - firstRatio)) / (head.length - 1)))
  const xs = colWidths.map((_, i) => MARGINS.left + colWidths.slice(0, i).reduce((a, b) => a + b, 0))
  const padX = 7
  const padY = 7

  const rowHeight = (cells: string[], font: string, size: number): number =>
    Math.max(
      ...cells.map((c, i) =>
        doc.font(font).fontSize(size).heightOfString(c, { width: colWidths[i] - padX * 2, lineGap: 2 }),
      ),
    ) + padY * 2

  const drawRow = (cells: string[], font: string, size: number, color: string, bg?: string): void => {
    const h = rowHeight(cells, font, size)
    ensureSpace(doc, h)
    const top = doc.y
    if (bg) doc.save().rect(MARGINS.left, top, width, h).fill(bg).restore()
    cells.forEach((c, i) => {
      doc
        .font(font)
        .fontSize(size)
        .fillColor(color)
        .text(c, xs[i] + padX, top + padY, { width: colWidths[i] - padX * 2, lineGap: 2 })
    })
    doc.y = top + h
    doc.save().moveTo(MARGINS.left, doc.y).lineTo(MARGINS.left + width, doc.y).lineWidth(0.6).stroke(LINE).restore()
  }

  ensureSpace(doc, 90)
  gap(doc, 4)
  drawRow(head, BODY_BOLD, 9.5, INK, PAPER_2)
  rows.forEach((r) => drawRow(r, BODY, 9.5, INK_2))
  gap(doc, 8)
  if (note) {
    doc
      .font(BODY_ITALIC)
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(note, MARGINS.left, doc.y, { width, lineGap: 2 })
    gap(doc, 12)
  }
  // `display` is part of the shared block signature; tables use core fonts only.
  void display
}

function checklist(
  doc: Doc,
  items: { n: number; q: string; why: string; redFlag: string }[],
  display: string,
): void {
  const numWidth = 30
  const width = contentWidth(doc) - numWidth
  for (const item of items) {
    const qHeight = doc.font(display).fontSize(11.5).heightOfString(item.q, { width, lineGap: 2 })
    const whyHeight = doc.font(BODY).fontSize(9.5).heightOfString(item.why, { width: width - 46, lineGap: 2.5 })
    const flagHeight = doc.font(BODY).fontSize(9.5).heightOfString(item.redFlag, { width: width - 46, lineGap: 2.5 })
    // Keep a question and its two annotations together — a split one is unusable.
    ensureSpace(doc, qHeight + whyHeight + flagHeight + 42)

    const top = doc.y
    doc
      .font(display)
      .fontSize(15)
      .fillColor(ACCENT)
      .text(String(item.n), MARGINS.left, top - 2, { width: numWidth - 8, lineBreak: false })
    doc
      .font(display)
      .fontSize(11.5)
      .fillColor(INK)
      .text(item.q, MARGINS.left + numWidth, top, { width, lineGap: 2 })
    doc.y = top + qHeight + 6

    const annotate = (label: string, text: string, color: string): void => {
      const rowTop = doc.y
      doc.font(BODY_BOLD).fontSize(9).fillColor(color)
      doc.text(label, MARGINS.left + numWidth, rowTop, { width: 44, lineBreak: false })
      doc.font(BODY).fontSize(9.5).fillColor(INK_2)
      doc.text(text, MARGINS.left + numWidth + 46, rowTop, { width: width - 46, lineGap: 2.5 })
      gap(doc, 5)
    }
    annotate('Why', item.why, ACCENT_INK)
    annotate('Red flag', item.redFlag, '#b4232a')
    gap(doc, 12)
  }
}

function renderBlocks(doc: Doc, blocks: GuideBlock[], display: string): void {
  for (const block of blocks) {
    if ('h3' in block) heading3(doc, block.h3, display)
    else if ('p' in block) paragraph(doc, block.p)
    else if ('ul' in block) bulletList(doc, block.ul, false)
    else if ('ol' in block) bulletList(doc, block.ol, true)
    else if ('quote' in block) quote(doc, block.quote)
    else if ('callout' in block) callout(doc, block.callout.title, block.callout.body, display)
    else if ('table' in block) table(doc, block.table.head, block.table.rows, block.table.note, display)
    else if ('checklist' in block) checklist(doc, block.checklist, display)
  }
}

function coverPage(doc: Doc, magnet: LeadMagnet, display: string): void {
  doc.addPage()
  const { width, height } = doc.page
  doc.save().rect(0, 0, width, height).fill(ACCENT).restore()

  // Brand mark: white tile with the indigo K, then the letterspaced wordmark.
  doc.save().roundedRect(MARGINS.left, 76, 46, 46, 12).fill(WHITE).restore()
  doc.font(display).fontSize(28).fillColor(ACCENT).text('K', MARGINS.left + 13, 87, { lineBreak: false })
  doc
    .font(display)
    .fontSize(15)
    .fillColor(WHITE)
    .text('KHUFU', MARGINS.left + 62, 93, { characterSpacing: 4, lineBreak: false })

  doc
    .font(BODY_BOLD)
    .fontSize(10)
    .fillColor('#d9d2ff')
    .text(magnet.eyebrow.toUpperCase(), MARGINS.left, 300, { characterSpacing: 2.5, width: contentWidth(doc) })
  gap(doc, 12)
  doc
    .font(display)
    .fontSize(34)
    .fillColor(WHITE)
    .text(magnet.title, MARGINS.left, doc.y, { width: contentWidth(doc) - 30, lineGap: 4 })
  gap(doc, 16)
  doc
    .font(BODY)
    .fontSize(12.5)
    .fillColor('#e5e0ff')
    .text(magnet.subtitle, MARGINS.left, doc.y, { width: contentWidth(doc) - 40, lineGap: 4 })

  outsideMargins(doc, () => {
    doc
      .font(BODY)
      .fontSize(10)
      .fillColor('#cfc6ff')
      .text(
        `${site.url.replace('https://', '')} · ${site.founder} · Updated ${magnet.updated}`,
        MARGINS.left,
        height - 96,
        { width: contentWidth(doc), lineBreak: false },
      )
  })
}

function outlinePage(doc: Doc, magnet: LeadMagnet, display: string): void {
  doc.addPage()
  doc.font(display).fontSize(20).fillColor(INK).text('What this is', MARGINS.left, doc.y, { width: contentWidth(doc) })
  gap(doc, 14)
  for (const p of magnet.intro) paragraph(doc, p, { size: 11 })

  gap(doc, 6)
  callout(doc, 'Who this is for', magnet.audience, display)

  heading3(doc, "What's inside", display)
  magnet.chapters.forEach((chapter, i) => {
    const num = String(i + 1).padStart(2, '0')
    const height = doc.font(BODY).fontSize(10).heightOfString(chapter.summary, { width: contentWidth(doc) - 32 })
    ensureSpace(doc, height + 34)
    const top = doc.y
    doc.font(display).fontSize(10).fillColor(ACCENT).text(num, MARGINS.left, top + 1, { width: 26, lineBreak: false })
    doc
      .font(BODY_BOLD)
      .fontSize(10.5)
      .fillColor(INK)
      .text(chapter.title, MARGINS.left + 32, top, { width: contentWidth(doc) - 32 })
    doc
      .font(BODY)
      .fontSize(10)
      .fillColor(MUTED)
      .text(chapter.summary, MARGINS.left + 32, doc.y + 2, { width: contentWidth(doc) - 32, lineGap: 2 })
    gap(doc, 12)
  })
}

function ctaPage(doc: Doc, magnet: LeadMagnet, display: string): void {
  doc.addPage()
  const width = contentWidth(doc)
  const top = doc.y + 20
  const pad = 26
  const titleHeight = doc.font(display).fontSize(20).heightOfString(magnet.cta.title, { width: width - pad * 2 })
  const bodyHeight = doc.font(BODY).fontSize(11.5).heightOfString(magnet.cta.body, { width: width - pad * 2, lineGap: 4 })
  const boxHeight = titleHeight + bodyHeight + pad * 2 + 14

  doc.save().roundedRect(MARGINS.left, top, width, boxHeight, 16).fill(INK).restore()
  doc
    .font(display)
    .fontSize(20)
    .fillColor(WHITE)
    .text(magnet.cta.title, MARGINS.left + pad, top + pad, { width: width - pad * 2 })
  doc
    .font(BODY)
    .fontSize(11.5)
    .fillColor('#d7d7d2')
    .text(magnet.cta.body, MARGINS.left + pad, top + pad + titleHeight + 12, { width: width - pad * 2, lineGap: 4 })
  doc.y = top + boxHeight + 26

  heading3(doc, 'Talk to the person who would build it', display)
  paragraph(
    doc,
    `${site.founder}, founder of Khufu — an AI-native product agency in Dubai. I write the code on every sprint, so the conversation about your product is with the person who builds it.`,
  )
  bulletList(
    doc,
    [
      `Email: ${site.email}`,
      `WhatsApp: ${site.whatsappDisplay}`,
      `Site: ${site.url}`,
      `LinkedIn: ${site.social.linkedin}`,
      `X: ${site.social.x}`,
    ],
    false,
  )

  gap(doc, 6)
  paragraph(
    doc,
    'Questions about anything in this guide are welcome even if you never hire me — the fastest way to get one answered is a direct message.',
    { size: 10, color: MUTED },
  )
}

/** Header rule + footer with page numbers, drawn on every page but the cover. */
function decoratePages(doc: Doc, magnet: LeadMagnet, display: string): void {
  const range = doc.bufferedPageRange()
  const total = range.count
  for (let i = range.start + 1; i < range.start + total; i++) {
    doc.switchToPage(i)
    const y = doc.page.height - 52
    doc.save().moveTo(MARGINS.left, y - 12).lineTo(doc.page.width - MARGINS.right, y - 12).lineWidth(0.6).stroke(LINE).restore()
    outsideMargins(doc, () => {
      doc
        .font(BODY)
        .fontSize(8.5)
        .fillColor(MUTED)
        .text(`${magnet.title} · khufu.io`, MARGINS.left, y, { width: contentWidth(doc) - 40, lineBreak: false })
      doc
        .font(display)
        .fontSize(8.5)
        .fillColor(INK)
        .text(String(i - range.start + 1), doc.page.width - MARGINS.right - 40, y, {
          width: 40,
          align: 'right',
          lineBreak: false,
        })
    })
  }
}

async function build(magnet: LeadMagnet): Promise<number> {
  const { doc, display } = createDoc(magnet)
  const file = path.join(OUT_DIR, `khufu-${magnet.slug}.pdf`)
  const stream = fs.createWriteStream(file)
  doc.pipe(stream)

  coverPage(doc, magnet, display)
  outlinePage(doc, magnet, display)

  magnet.chapters.forEach((chapter, i) => {
    doc.addPage()
    doc
      .font(BODY_BOLD)
      .fontSize(9)
      .fillColor(ACCENT)
      .text(`CHAPTER ${String(i + 1).padStart(2, '0')}`, MARGINS.left, doc.y, { characterSpacing: 2 })
    gap(doc, 8)
    doc.font(display).fontSize(21).fillColor(INK).text(chapter.title, MARGINS.left, doc.y, {
      width: contentWidth(doc),
      lineGap: 2,
    })
    gap(doc, 8)
    doc.font(BODY).fontSize(10.5).fillColor(MUTED).text(chapter.summary, MARGINS.left, doc.y, {
      width: contentWidth(doc),
      lineGap: 2,
    })
    gap(doc, 18)
    renderBlocks(doc, chapter.blocks, display)
  })

  if (magnet.faq.length > 0) {
    doc.addPage()
    doc.font(display).fontSize(21).fillColor(INK).text('Questions', MARGINS.left, doc.y, { width: contentWidth(doc) })
    gap(doc, 18)
    for (const item of magnet.faq) {
      heading3(doc, item.q, display)
      paragraph(doc, item.a)
    }
  }

  ctaPage(doc, magnet, display)

  const pages = doc.bufferedPageRange().count
  decoratePages(doc, magnet, display)
  doc.end()

  await new Promise<void>((resolve, reject) => {
    stream.on('finish', () => resolve())
    stream.on('error', reject)
  })
  return pages
}

async function main(): Promise<void> {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  for (const magnet of leadMagnets) {
    const pages = await build(magnet)
    const declared = magnet.pdfPages
    const flag = declared === pages ? '' : `  <-- update pdfPages to ${pages}`
    console.log(`✓ khufu-${magnet.slug}.pdf — ${pages} pages (declared ${declared})${flag}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
