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
const WHATSAPP_GREEN = '#25d366'

/** WhatsApp glyph — same 24x24 path as the site button (whatsappButton.tsx). */
const WHATSAPP_GLYPH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z'

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

/**
 * wa.me link whose prefilled message names the guide it came from.
 *
 * A PDF cannot carry analytics, so the message itself is the attribution: the
 * first line of the DM says which of the three guides produced the lead.
 */
function whatsappUrl(magnet: LeadMagnet): string {
  const message = `Hi Adrien — I just read the Khufu ${magnet.label} guide and I have a question:`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Full-width WhatsApp pill; the whole shape is the click target, not just the label. */
function whatsappCta(doc: Doc, magnet: LeadMagnet, display: string): void {
  const width = contentWidth(doc)
  const height = 54
  const glyph = 21
  const label = 'Message me on WhatsApp'

  ensureSpace(doc, height + 40)
  const top = doc.y
  doc.save().roundedRect(MARGINS.left, top, width, height, 14).fill(WHATSAPP_GREEN).restore()

  // Centre the glyph + label as one group rather than centring the text alone.
  const labelWidth = doc.font(display).fontSize(14).widthOfString(label)
  const startX = MARGINS.left + (width - (glyph + 12 + labelWidth)) / 2
  doc
    .save()
    .translate(startX, top + (height - glyph) / 2)
    .scale(glyph / 24)
    .path(WHATSAPP_GLYPH)
    .fill(WHITE)
    .restore()
  doc
    .font(display)
    .fontSize(14)
    .fillColor(WHITE)
    .text(label, startX + glyph + 12, top + height / 2 - 7, { width: labelWidth + 4, lineBreak: false })

  doc.link(MARGINS.left, top, width, height, whatsappUrl(magnet))
  doc.y = top + height
  gap(doc, 10)
  paragraph(
    doc,
    `Tap the button — it opens a chat with ${site.whatsappDisplay}, message already written. I read every one myself.`,
    { size: 9.5, color: MUTED, gap: 4 },
  )
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
  doc.y = top + boxHeight + 22

  whatsappCta(doc, magnet, display)
  gap(doc, 10)

  heading3(doc, 'Talk to the person who would build it', display)
  paragraph(
    doc,
    `${site.founder}, founder of Khufu — an AI-native product agency in Dubai. I write the code on every sprint, so the conversation about your product is with the person who builds it.`,
  )
  bulletList(
    doc,
    // WhatsApp is intentionally absent — it is the button above, not a bullet.
    [
      `Email: ${site.email}`,
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
