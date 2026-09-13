/**
 * Multi-page branded A4 PDF — the reading copy of a long document (the referral
 * agreements). Single column, generous leading, page numbers.
 *
 * This is the reading format only. The version a lawyer marks up is the DOCX;
 * see contractDocx.ts.
 */
import PDFDocument from 'pdfkit'
import {
  ACCENT,
  BODY,
  BODY_BOLD,
  BODY_ITALIC,
  displayFont,
  INK,
  INK_2,
  LINE,
  MUTED,
  PAPER_2,
  WARN,
  WARN_SOFT,
  WHITE,
} from './brand'
import { parseMarkdown, plain, type Block, type Inline } from './markdown'
import { drawInlines, flowInlines, measureInlines, plainText, type Doc } from './pdfText'

const PAGE = { width: 595.28, height: 841.89 }
const M = { top: 66, bottom: 64, left: 62, right: 62 }
const BAND_H = 78
const CONTENT_WIDTH = PAGE.width - M.left - M.right

type Options = {
  /** Short label printed in the accent band and every footer. */
  kicker: string
  pageLabel: (current: number, total: number) => string
}

export async function buildDocumentPdf(source: string, options: Options): Promise<{ pdf: Buffer; pages: number }> {
  const blocks = parseMarkdown(source)
  const h1 = blocks.find((b) => b.kind === 'heading' && b.level === 1)
  const title = h1 && h1.kind === 'heading' ? plain(h1.inlines) : options.kicker

  const doc = new PDFDocument({
    size: [PAGE.width, PAGE.height],
    margins: M,
    autoFirstPage: false,
    bufferPages: true,
    info: { Title: title, Author: 'Adrien De Coster', Subject: options.kicker, Keywords: 'Khufu, referral, apporteur' },
  })

  const chunks: Buffer[] = []
  doc.on('data', (chunk: Buffer) => chunks.push(chunk))
  const done = new Promise<Buffer>((resolve, reject) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)
  })

  let display = BODY_BOLD
  const font = displayFont()
  if (font) {
    doc.registerFont('Display', font)
    display = 'Display'
  }

  const bottom = (): number => PAGE.height - M.bottom
  const ensure = (height: number): void => {
    if (doc.y + height > bottom()) doc.addPage()
  }
  const bodyStyle = { size: 9.6, color: INK_2, lineGap: 3 }

  // ---- title band (first page only) --------------------------------------
  doc.addPage()
  doc.save().rect(0, 0, PAGE.width, BAND_H).fill(ACCENT).restore()
  doc.save().roundedRect(M.left, 19, 40, 40, 11).fill(WHITE).restore()
  doc.font(display).fontSize(25).fillColor(ACCENT).text('K', M.left + 10, 29, { lineBreak: false })
  doc
    .font(display)
    .fontSize(14)
    .fillColor(WHITE)
    .text('KHUFU', M.left + 53, 31, { characterSpacing: 4, lineBreak: false })
  doc
    .font(BODY_BOLD)
    .fontSize(8)
    .fillColor('#cfc6ff')
    .text(plainText([{ text: options.kicker.toUpperCase() }]), PAGE.width / 2, 35, {
      width: PAGE.width / 2 - M.right,
      align: 'right',
      characterSpacing: 2,
      lineBreak: false,
    })
  doc.y = BAND_H + 30

  /** The warning box's inner blocks, drawn from the current y. */
  const drawQuote = (target: Doc, inner: Block[], x: number, width: number): void => {
    for (const b of inner) {
      if (b.kind === 'heading') {
        flowInlines(target, b.inlines, x, width, { size: 11.5, color: WARN, face: BODY_BOLD, lineGap: 1.5 })
        target.y += 8
      } else if (b.kind === 'paragraph') {
        flowInlines(target, b.inlines, x, width, { size: 9.2, color: INK_2, lineGap: 2.6 })
        target.y += 7
      }
    }
  }

  /** Exact height of some drawing, obtained by running it on a discarded document. */
  const probeHeight = (draw: (target: Doc) => void): number => {
    const probe = new PDFDocument({ size: [PAGE.width, PAGE.height], margins: M })
    probe.on('data', () => {})
    if (font) probe.registerFont('Display', font)
    const start = probe.y
    draw(probe)
    const height = probe.y - start
    probe.end()
    return height
  }

  const renderBlocks = (list: Block[], x: number, width: number): void => {
    for (const block of list) {
      switch (block.kind) {
        case 'heading': {
          if (block.level === 1) {
            const style = { size: 24, color: INK, face: display, lineGap: 2 }
            ensure(measureInlines(doc, block.inlines, width, style) + 16)
            flowInlines(doc, block.inlines, x, width, style)
            doc.y += 16
            break
          }
          const size = block.level === 2 ? 15 : 12
          const style = { size, color: INK, face: display, lineGap: 1.5 }
          const height = measureInlines(doc, block.inlines, width, style)
          // Keep an article heading with the first lines of its article.
          ensure(height + 54)
          doc.y += 12
          doc.save().rect(x, doc.y + 4, 14, 2).fill(ACCENT).restore()
          doc.y += 10
          flowInlines(doc, block.inlines, x, width, style)
          doc.y += 9
          break
        }
        case 'paragraph': {
          const height = measureInlines(doc, block.inlines, width, bodyStyle)
          ensure(Math.min(height, 46))
          flowInlines(doc, block.inlines, x, width, bodyStyle)
          doc.y += 9
          break
        }
        case 'list': {
          const indent = 16
          block.items.forEach((item, i) => {
            const height = measureInlines(doc, item, width - indent, bodyStyle)
            ensure(Math.min(height, 46))
            const top = doc.y
            doc
              .font(BODY_BOLD)
              .fontSize(9.6)
              .fillColor(ACCENT)
              .text(block.ordered ? `${i + 1}.` : '•', x, top, { width: indent, lineBreak: false })
            doc.y = top
            flowInlines(doc, item, x + indent, width - indent, bodyStyle)
            doc.y += 6
          })
          doc.y += 5
          break
        }
        case 'table': {
          const pad = 7
          const weights = block.head.map((_, i) =>
            Math.max(plain(block.head[i]).length, ...block.rows.map((r) => plain(r[i] ?? []).length), 1),
          )
          const total = weights.reduce((a, b) => a + b, 0)
          const ratios = weights.map((w) => Math.min(0.74, Math.max(0.2, w / total)))
          const sum = ratios.reduce((a, b) => a + b, 0)
          const widths = ratios.map((r) => (width * r) / sum)

          const row = (cells: Inline[][], style: typeof bodyStyle & { face?: string }, bg?: string): void => {
            // Minimum height so a "Signature:" row leaves room to actually sign.
            const height = Math.max(
              Math.max(...cells.map((c, i) => measureInlines(doc, c, widths[i] - pad * 2, style))) + pad * 2,
              32,
            )
            ensure(height)
            const top = doc.y
            if (bg) doc.save().rect(x, top, width, height).fill(bg).restore()
            let cx = x
            cells.forEach((c, i) => {
              drawInlines(doc, c, cx + pad, top + pad, widths[i] - pad * 2, style)
              cx += widths[i]
            })
            doc.y = top + height
            doc.save().moveTo(x, doc.y).lineTo(x + width, doc.y).lineWidth(0.6).stroke(LINE).restore()
          }

          doc.y += 4
          row(block.head, { ...bodyStyle, size: 9, color: INK, face: BODY_BOLD }, PAPER_2)
          block.rows.forEach((r) => row(r, { ...bodyStyle, size: 9 }))
          doc.y += 12
          break
        }
        case 'quote': {
          // The kit uses a blockquote for one thing: the "not reviewed by a
          // lawyer" warning. Render it as a warning box, not as an indent.
          const pad = 14
          const inner = width - pad * 2
          // Measured on a throwaway document rather than by summing estimated
          // heights: a mixed-weight paragraph measures taller than it draws, and
          // the slack is visible as dead space inside a shaded box.
          const boxHeight = probeHeight((probe) => drawQuote(probe, block.blocks, x + pad, inner)) + pad * 2
          ensure(boxHeight + 10)
          const top = doc.y
          doc.save().roundedRect(x, top, width, boxHeight, 8).fill(WARN_SOFT).restore()
          doc.save().rect(x, top, 3, boxHeight).fill(WARN).restore()
          doc.y = top + pad
          drawQuote(doc, block.blocks, x + pad, inner)
          doc.y = top + boxHeight + 16
          break
        }
        case 'hr': {
          ensure(20)
          doc.y += 6
          doc.save().moveTo(x, doc.y).lineTo(x + width, doc.y).lineWidth(0.7).stroke(LINE).restore()
          doc.y += 14
          break
        }
      }
    }
  }

  renderBlocks(blocks, M.left, CONTENT_WIDTH)

  // ---- footers -----------------------------------------------------------
  const range = doc.bufferedPageRange()
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i)
    const y = PAGE.height - 44
    // Draw below the bottom margin without provoking pdfkit's auto page break.
    const keep = doc.page.margins.bottom
    doc.page.margins.bottom = 0
    doc.save().moveTo(M.left, y - 11).lineTo(PAGE.width - M.right, y - 11).lineWidth(0.6).stroke(LINE).restore()
    doc
      .font(BODY_ITALIC)
      .fontSize(8)
      .fillColor(MUTED)
      .text(plainText([{ text: `${title} · khufu.io` }]), M.left, y, { width: CONTENT_WIDTH - 90, lineBreak: false })
    doc
      .font(BODY)
      .fontSize(8)
      .fillColor(INK)
      .text(options.pageLabel(i - range.start + 1, range.count), PAGE.width - M.right - 90, y, {
        width: 90,
        align: 'right',
        lineBreak: false,
      })
    doc.page.margins.bottom = keep
  }

  const pages = range.count
  doc.end()
  return { pdf: await done, pages }
}
