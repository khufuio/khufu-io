/**
 * The partner one-pager: exactly one branded A4 page.
 *
 * "One page" is a hard constraint, not a target — a two-page one-pager is a
 * different document. The renderer lays the body out in two columns and, if it
 * still does not fit, retries at a smaller type scale. If even the smallest
 * scale overflows, the build fails rather than shipping a page 2.
 *
 * Layout, top to bottom: an accent header band, the legal identity lines, a
 * full-width hero (the offer in one sentence), a full-width commission table —
 * the block a partner actually reads — then the rest in two columns.
 */
import PDFDocument from 'pdfkit'
import { ACCENT, ACCENT_SOFT, BODY_BOLD, displayFont, INK, INK_2, LINE, MUTED, PAPER_2, WHITE } from './brand'
import { isLede, parseMarkdown, plain, type Block, type Inline } from './markdown'
import { drawInlines, measureInlines, plainText } from './pdfText'

const PAGE = { width: 595.28, height: 841.89 }
const MARGIN = 32
const HEADER_H = 72
const FOOTER_H = 34
const GUTTER = 18

/** Type scales tried in order; the first that fits on one page wins. */
const SCALES = [1, 0.97, 0.94, 0.91, 0.88, 0.85, 0.82, 0.79]

type Table = { head: Inline[][]; rows: Inline[][][] }

type Parts = {
  title: string
  /** Header eyebrow — the part of the H1 after the em dash. */
  kicker: string
  entityLine: string
  contactLine: string
  heroEyebrow: string
  hero: Inline[]
  featureTitle: string
  feature: Table | null
  featureNote: Inline[]
  flow: Block[]
  footerNote: string
}

/**
 * Split the markdown into the fixed furniture and the body that flows into the
 * columns.
 *
 * The shape is the kit's own convention, not guesswork: H1, a meta paragraph
 * whose bold half is the legal entity, a rule, the body, a rule, a closing
 * italic line. Every part degrades to empty if a file stops following it.
 */
function split(source: string): Parts {
  const blocks = parseMarkdown(source)
  const h1 = blocks.find((b) => b.kind === 'heading' && b.level === 1)
  const title = h1 && h1.kind === 'heading' ? plain(h1.inlines) : 'Khufu'
  const firstRule = blocks.findIndex((b) => b.kind === 'hr')
  const meta = blocks.slice(0, firstRule === -1 ? blocks.length : firstRule).find((b) => b.kind === 'paragraph')

  let body = blocks.slice(firstRule + 1).filter((b) => b.kind !== 'hr')

  const last = body[body.length - 1]
  const hasFooterNote = last?.kind === 'paragraph' && last.inlines.every((i) => i.italic)
  const footerNote = hasFooterNote ? plain(last.inlines) : ''
  if (hasFooterNote) body = body.slice(0, -1)

  const drop = new Set<number>()

  // Hero: the first all-bold paragraph, with the heading above it as eyebrow.
  const heroIndex = body.findIndex(isLede)
  let heroEyebrow = ''
  let hero: Inline[] = []
  if (heroIndex !== -1) {
    const block = body[heroIndex]
    hero = block.kind === 'paragraph' ? block.inlines : []
    drop.add(heroIndex)
    const above = body[heroIndex - 1]
    if (above?.kind === 'heading') {
      heroEyebrow = plain(above.inlines)
      drop.add(heroIndex - 1)
    }
  }

  // Feature band: the first table, its heading, and the paragraph under it.
  const tableIndex = body.findIndex((b) => b.kind === 'table')
  let feature: Table | null = null
  let featureTitle = ''
  let featureNote: Inline[] = []
  if (tableIndex !== -1) {
    const block = body[tableIndex]
    if (block.kind === 'table') feature = { head: block.head, rows: block.rows }
    drop.add(tableIndex)
    const above = body[tableIndex - 1]
    if (above?.kind === 'heading') {
      featureTitle = plain(above.inlines)
      drop.add(tableIndex - 1)
    }
    const below = body[tableIndex + 1]
    if (below?.kind === 'paragraph') {
      featureNote = below.inlines
      drop.add(tableIndex + 1)
    }
  }

  return {
    title,
    kicker: title.split(/\s+[—–-]\s+/).slice(1).join(' ') || title,
    entityLine: meta ? plain(meta.inlines.filter((i) => i.bold)) : '',
    contactLine: meta ? plain(meta.inlines.filter((i) => !i.bold)).trim() : '',
    heroEyebrow,
    hero,
    featureTitle,
    feature,
    featureNote,
    flow: body.filter((_, i) => !drop.has(i)),
    footerNote,
  }
}

/**
 * Column widths proportional to the longest cell, floored so a short "15%"
 * column still fits its header on one line.
 */
function columnRatios(head: Inline[][], rows: Inline[][][]): number[] {
  const weights = head.map((_, i) =>
    Math.max(plain(head[i]).length, ...rows.map((r) => plain(r[i] ?? []).length), 1),
  )
  const total = weights.reduce((a, b) => a + b, 0)
  const clamped = weights.map((w) => Math.min(0.7, Math.max(0.24, w / total)))
  const sum = clamped.reduce((a, b) => a + b, 0)
  return clamped.map((r) => r / sum)
}

/** Reserve vertical space; null means "no room left anywhere". */
type Place = (height: number) => number | null

function renderPage(parts: Parts, scale: number): { buffer: Promise<Buffer>; overflow: boolean } {
  const doc = new PDFDocument({
    size: [PAGE.width, PAGE.height],
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    info: {
      Title: parts.title,
      Author: 'Adrien De Coster',
      Subject: parts.kicker,
      Keywords: 'Khufu, partner, referral, apporteur d’affaires, Sprint V1',
    },
  })

  const chunks: Buffer[] = []
  doc.on('data', (chunk: Buffer) => chunks.push(chunk))
  const buffer = new Promise<Buffer>((resolve, reject) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)
  })

  let display = BODY_BOLD
  const font = displayFont()
  if (font) {
    doc.registerFont('Display', font)
    display = 'Display'
  } else {
    console.warn('  ! brand display face unavailable, falling back to Helvetica-Bold')
  }

  const contentWidth = PAGE.width - MARGIN * 2
  const size = (n: number): number => n * scale
  const body = (extra: Partial<{ color: string }> = {}) => ({
    size: size(7.8),
    color: INK_2,
    lineGap: size(1.7),
    ...extra,
  })

  // ---- header band -------------------------------------------------------
  doc.save().rect(0, 0, PAGE.width, HEADER_H).fill(ACCENT).restore()
  doc.save().roundedRect(MARGIN, 16, 40, 40, 11).fill(WHITE).restore()
  doc.font(display).fontSize(26).fillColor(ACCENT).text('K', MARGIN + 10, 26, { lineBreak: false })
  doc
    .font(display)
    .fontSize(15)
    .fillColor(WHITE)
    .text('KHUFU', MARGIN + 54, 28, { characterSpacing: 4.5, lineBreak: false })
  doc
    .font(BODY_BOLD)
    .fontSize(8)
    .fillColor('#cfc6ff')
    .text(plainText([{ text: parts.kicker.toUpperCase() }]), PAGE.width / 2, 32, {
      width: PAGE.width / 2 - MARGIN,
      align: 'right',
      characterSpacing: 2,
      lineBreak: false,
    })

  // ---- identity lines ----------------------------------------------------
  let y = HEADER_H + 11
  doc
    .font(BODY_BOLD)
    .fontSize(size(7.4))
    .fillColor(INK)
    .text(plainText([{ text: parts.entityLine }]), MARGIN, y, { width: contentWidth })
  y = doc.y + 1
  doc
    .font('Helvetica')
    .fontSize(size(7.4))
    .fillColor(MUTED)
    .text(plainText([{ text: parts.contactLine }]), MARGIN, y, { width: contentWidth })
  y = doc.y + 10

  // ---- hero --------------------------------------------------------------
  if (parts.hero.length > 0) {
    doc.save().moveTo(MARGIN, y).lineTo(PAGE.width - MARGIN, y).lineWidth(0.7).stroke(LINE).restore()
    y += 11
    if (parts.heroEyebrow) {
      doc
        .font(BODY_BOLD)
        .fontSize(size(7.2))
        .fillColor(ACCENT)
        .text(plainText([{ text: parts.heroEyebrow.toUpperCase() }]), MARGIN, y, {
          width: contentWidth,
          characterSpacing: 1.8,
        })
      y = doc.y + 5
    }
    y += drawInlines(doc, parts.hero, MARGIN, y, contentWidth, {
      size: size(14),
      color: INK,
      lineGap: size(2),
      face: display,
    })
    y += 13
  }

  /** Head + body rows, drawn wherever `place` finds room. Returns false on overflow. */
  const drawTable = (table: Table, width: number, x: () => number, place: Place): boolean => {
    const ratios = columnRatios(table.head, table.rows)
    const widths = ratios.map((r) => width * r)
    const pad = size(5.5)
    const cell = { size: size(7.2), color: INK_2, lineGap: size(1.4) }
    const headCell = { size: size(7.2), color: INK, face: BODY_BOLD }

    const row = (cells: Inline[][], style: typeof cell | typeof headCell, bg?: string): boolean => {
      const height =
        Math.max(...cells.map((c, i) => measureInlines(doc, c, widths[i] - pad * 2, style))) + pad * 2
      const at = place(height)
      if (at === null) return false
      if (bg) doc.save().rect(x(), at, width, height).fill(bg).restore()
      let cx = x()
      cells.forEach((c, i) => {
        drawInlines(doc, c, cx + pad, at + pad, widths[i] - pad * 2, style)
        cx += widths[i]
      })
      doc.save().moveTo(x(), at + height).lineTo(x() + width, at + height).lineWidth(0.5).stroke(LINE).restore()
      return true
    }

    if (!row(table.head, headCell, PAPER_2)) return false
    return table.rows.every((r) => row(r, cell, ACCENT_SOFT))
  }

  // ---- feature band (full width) ----------------------------------------
  if (parts.feature) {
    if (parts.featureTitle) {
      doc.save().rect(MARGIN, y + 5, 16, 2).fill(ACCENT).restore()
      doc
        .font(display)
        .fontSize(size(10.5))
        .fillColor(INK)
        .text(plainText([{ text: parts.featureTitle }]), MARGIN, y + 12, { width: contentWidth })
      y = doc.y + 6
    }
    const bandTop = y
    drawTable(parts.feature, contentWidth, () => MARGIN, (h) => {
      const at = y
      y += h
      return at
    })
    doc.save().rect(MARGIN - 4, bandTop, 2.5, y - bandTop).fill(ACCENT).restore()
    y += 6
    if (parts.featureNote.length > 0) {
      y += drawInlines(doc, parts.featureNote, MARGIN, y, contentWidth, body({ color: MUTED }))
    }
    y += 11
  }

  // ---- two-column flow ---------------------------------------------------
  const columnWidth = (contentWidth - GUTTER) / 2
  const columnX = [MARGIN, MARGIN + columnWidth + GUTTER]
  const top = y
  const bottom = PAGE.height - FOOTER_H - 12
  const cursor = { column: 0, y: top }
  let overflow = false

  const place: Place = (height) => {
    if (cursor.y + height > bottom) {
      cursor.column += 1
      cursor.y = top
    }
    if (cursor.column > 1) {
      overflow = true
      return null
    }
    const at = cursor.y
    cursor.y += height
    return at
  }
  const x = (): number => columnX[Math.min(cursor.column, 1)]

  /**
   * Height `place` will ask for the first unbreakable chunk of a block — for
   * keep-with-next. Paragraphs and list items are placed whole, so it must be their
   * full height plus the same spacing the flow below adds; anything less lets a
   * heading sit alone at a column foot while its first item jumps to the next column.
   */
  const leadHeight = (block: Block | undefined): number => {
    if (!block) return 0
    if (block.kind === 'paragraph') return measureInlines(doc, block.inlines, columnWidth, body()) + size(7)
    if (block.kind === 'list' && block.items[0]) {
      return measureInlines(doc, block.items[0], columnWidth - size(12), body()) + size(5)
    }
    if (block.kind === 'table') return size(34)
    return 0
  }

  parts.flow.forEach((block, index) => {
    if (overflow) return

    if (block.kind === 'heading') {
      const style = { size: size(10), color: INK, face: display }
      const height = measureInlines(doc, block.inlines, columnWidth, style)
      // A heading alone at the foot of a column is a layout bug, not a page break.
      const at = place(height + size(20) + leadHeight(parts.flow[index + 1]))
      if (at === null) return
      doc.save().rect(x(), at + 5, 16, 2).fill(ACCENT).restore()
      drawInlines(doc, block.inlines, x(), at + 12, columnWidth, style)
      cursor.y = at + height + size(20)
      return
    }

    if (block.kind === 'paragraph') {
      const height = measureInlines(doc, block.inlines, columnWidth, body())
      const at = place(height + size(7))
      if (at === null) return
      drawInlines(doc, block.inlines, x(), at, columnWidth, body())
      return
    }

    if (block.kind === 'list') {
      const indent = size(12)
      block.items.forEach((item, i) => {
        if (overflow) return
        const height = measureInlines(doc, item, columnWidth - indent, body())
        const at = place(height + size(5))
        if (at === null) return
        doc
          .font(BODY_BOLD)
          .fontSize(size(7.8))
          .fillColor(ACCENT)
          .text(block.ordered ? `${i + 1}.` : '•', x(), at, { width: indent, lineBreak: false })
        drawInlines(doc, item, x() + indent, at, columnWidth - indent, body())
      })
      cursor.y += size(5)
      return
    }

    if (block.kind === 'table') {
      if (drawTable(block, columnWidth, x, place)) cursor.y += size(8)
    }
  })

  // Column rule, drawn last so it spans only the flow area.
  doc
    .save()
    .moveTo(MARGIN + columnWidth + GUTTER / 2, top)
    .lineTo(MARGIN + columnWidth + GUTTER / 2, bottom)
    .lineWidth(0.5)
    .stroke(LINE)
    .restore()

  // ---- footer band -------------------------------------------------------
  doc.save().rect(0, PAGE.height - FOOTER_H, PAGE.width, FOOTER_H).fill(INK).restore()
  doc
    .font('Helvetica-Oblique')
    .fontSize(7.6)
    .fillColor('#d7d7d2')
    .text(plainText([{ text: parts.footerNote }]), MARGIN, PAGE.height - FOOTER_H + 10, {
      width: contentWidth - 110,
    })
  doc
    .font(display)
    .fontSize(9)
    .fillColor(WHITE)
    .text('khufu.io', PAGE.width - MARGIN - 100, PAGE.height - FOOTER_H + 13, {
      width: 100,
      align: 'right',
      lineBreak: false,
    })

  doc.end()
  return { buffer, overflow }
}

export async function buildOnePagerPdf(source: string): Promise<{ pdf: Buffer; scale: number }> {
  const parts = split(source)
  for (const scale of SCALES) {
    const { buffer, overflow } = renderPage(parts, scale)
    const pdf = await buffer
    if (!overflow) return { pdf, scale }
  }
  throw new Error(`"${parts.title}" does not fit on one A4 page even at the smallest type scale — cut copy`)
}
