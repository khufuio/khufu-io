/**
 * The referral agreements as .docx — the copy a lawyer actually works on.
 *
 * The point of this format is review: Word and Google Docs can comment and
 * track changes on it, which a PDF cannot. So it stays deliberately plain —
 * built-in heading styles, a ubiquitous body face, no embedded brand font, no
 * text boxes — because anything exotic is what breaks a review round-trip.
 */
import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  HeadingLevel,
  PageNumber,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  convertMillimetersToTwip,
} from 'docx'
import { ACCENT, ACCENT_INK, DOCX_BODY_FONT, INK, MUTED, WARN, WARN_SOFT } from './brand'
import { parseMarkdown, plain, type Block, type Inline } from './markdown'

/** docx wants bare hex. */
const hex = (color: string): string => color.replace('#', '').toUpperCase()

const BODY_SIZE = 21 // half-points → 10.5pt

type RunOptions = { size?: number; color?: string; bold?: boolean; italics?: boolean }

const runsOf = (inlines: Inline[], base: RunOptions = {}): TextRun[] =>
  inlines
    .filter((run) => run.text.length > 0)
    .map(
      (run) =>
        new TextRun({
          text: run.text,
          bold: base.bold ?? run.bold,
          italics: base.italics ?? run.italic,
          font: run.code ? 'Consolas' : DOCX_BODY_FONT,
          size: base.size ?? BODY_SIZE,
          color: hex(base.color ?? INK),
        }),
    )

const paragraph = (inlines: Inline[], base: RunOptions = {}): Paragraph =>
  new Paragraph({ children: runsOf(inlines, base), spacing: { after: 140, line: 276 } })

/** A cell's content, one paragraph per cell. */
const cell = (inlines: Inline[], base: RunOptions, fill?: string): TableCell =>
  new TableCell({
    children: [new Paragraph({ children: runsOf(inlines, base), spacing: { before: 60, after: 60 } })],
    shading: fill ? { type: ShadingType.CLEAR, color: 'auto', fill: hex(fill) } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  })

const HAIRLINE = { style: BorderStyle.SINGLE, size: 4, color: 'E6E6E0' }

function table(block: Extract<Block, { kind: 'table' }>): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: HAIRLINE,
      bottom: HAIRLINE,
      left: HAIRLINE,
      right: HAIRLINE,
      insideHorizontal: HAIRLINE,
      insideVertical: HAIRLINE,
    },
    rows: [
      new TableRow({
        tableHeader: true,
        children: block.head.map((c) => cell(c, { bold: true, size: 19 }, '#F4F4F0')),
      }),
      ...block.rows.map((row) => new TableRow({ children: row.map((c) => cell(c, { size: 19 })) })),
    ],
  })
}

/**
 * The blockquote is the "not reviewed by a lawyer" warning. It becomes a
 * single-cell shaded table so it survives as a visual block through a review
 * round-trip — a text box would not.
 */
function warningBox(block: Extract<Block, { kind: 'quote' }>): Table {
  const children: Paragraph[] = []
  for (const inner of block.blocks) {
    if (inner.kind === 'heading') {
      children.push(
        new Paragraph({
          children: runsOf(inner.inlines, { bold: true, color: WARN, size: 24 }),
          spacing: { after: 140 },
        }),
      )
    } else if (inner.kind === 'paragraph') {
      children.push(new Paragraph({ children: runsOf(inner.inlines, { size: 19 }), spacing: { after: 80, line: 264 } }))
    }
  }
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      left: { style: BorderStyle.SINGLE, size: 18, color: hex(WARN) },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children,
            shading: { type: ShadingType.CLEAR, color: 'auto', fill: hex(WARN_SOFT) },
            margins: { top: 200, bottom: 200, left: 220, right: 220 },
          }),
        ],
      }),
    ],
  })
}

export async function buildContractDocx(source: string, kicker: string): Promise<Buffer> {
  const blocks = parseMarkdown(source)
  const h1 = blocks.find((b) => b.kind === 'heading' && b.level === 1)
  const title = h1 && h1.kind === 'heading' ? plain(h1.inlines) : kicker

  const children: (Paragraph | Table)[] = []
  for (const block of blocks) {
    switch (block.kind) {
      case 'heading':
        children.push(
          new Paragraph({
            children: runsOf(block.inlines, {
              bold: true,
              color: block.level === 1 ? INK : ACCENT_INK,
              size: block.level === 1 ? 40 : block.level === 2 ? 28 : 24,
            }),
            heading:
              block.level === 1 ? HeadingLevel.TITLE : block.level === 2 ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2,
            spacing: { before: block.level === 1 ? 0 : 320, after: 160 },
          }),
        )
        break
      case 'paragraph':
        children.push(paragraph(block.inlines))
        break
      case 'list':
        block.items.forEach((item, i) => {
          children.push(
            new Paragraph({
              children: runsOf(item),
              bullet: block.ordered ? undefined : { level: 0 },
              numbering: block.ordered ? { reference: 'ordered', level: 0, instance: 0 } : undefined,
              spacing: { after: 100, line: 276 },
            }),
          )
          void i
        })
        break
      case 'table':
        children.push(table(block))
        children.push(new Paragraph({ text: '', spacing: { after: 160 } }))
        break
      case 'quote':
        children.push(warningBox(block))
        children.push(new Paragraph({ text: '', spacing: { after: 160 } }))
        break
      case 'hr':
        children.push(
          new Paragraph({
            text: '',
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'E6E6E0' } },
            spacing: { before: 160, after: 240 },
          }),
        )
        break
    }
  }

  const document = new Document({
    title,
    creator: 'Adrien De Coster — Khufu FZCO',
    description: kicker,
    numbering: {
      config: [
        {
          reference: 'ordered',
          levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START }],
        },
      ],
    },
    styles: {
      default: {
        document: { run: { font: DOCX_BODY_FONT, size: BODY_SIZE, color: hex(INK) } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: convertMillimetersToTwip(210), height: convertMillimetersToTwip(297) },
            margin: {
              top: convertMillimetersToTwip(22),
              bottom: convertMillimetersToTwip(20),
              left: convertMillimetersToTwip(22),
              right: convertMillimetersToTwip(22),
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: 'KHUFU', bold: true, size: 18, color: hex(ACCENT), characterSpacing: 60 }),
                  new TextRun({ text: `   ${kicker}`, size: 16, color: hex(MUTED) }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: `${title} — `, size: 16, color: hex(MUTED), italics: true }),
                  new TextRun({ children: [PageNumber.CURRENT], size: 16, color: hex(MUTED) }),
                  new TextRun({ text: ' / ', size: 16, color: hex(MUTED) }),
                  new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: hex(MUTED) }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  })

  return Packer.toBuffer(document)
}
