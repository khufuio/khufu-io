/**
 * Rich-run text drawing on top of pdfkit, shared by the one-pager and the
 * contract renderers.
 *
 * pdfkit has no concept of a styled run, so a paragraph is drawn as a chain of
 * `continued: true` calls. Height is measured on the concatenated plain text
 * using the widest face present in the paragraph, which over-estimates rather
 * than under-estimates — a layout that breaks a page early is recoverable, one
 * that overflows silently is not.
 */
import { BODY, BODY_BOLD, BODY_BOLD_ITALIC, BODY_ITALIC } from './brand'
import type { Inline } from './markdown'

export type Doc = PDFKit.PDFDocument

export type TextStyle = {
  size: number
  color: string
  lineGap?: number
  /** Force one face for every run — used by headings set in the brand face. */
  face?: string
  align?: 'left' | 'center' | 'right'
  characterSpacing?: number
}

/**
 * Characters that carry meaning on screen but have no glyph in the core fonts'
 * WinAnsi encoding. Mapped rather than dropped so a warning box still reads as
 * a warning box on paper.
 */
const WINANSI_SUBSTITUTIONS: [RegExp, string][] = [
  [/⚠️?/g, ''], // warning sign — the box's colour already says it
  [/☐/g, '[  ]'], // ballot box
  [/☑|✅|✔/g, '[x]'],
  [/→/g, '->'],
  [/[‑‒―]/g, '-'],
  [/[   ]/g, ' '], // narrow/thin/no-break spaces
  [/⁠|️/g, ''],
]

const WINANSI_SAFE =
  /^[ -~ -ÿŒœŠšŸŽžƒˆ˜–—‘’‚“”„†‡•…‰‹›€™\n\t]*$/

const unsupported = new Set<string>()

/** Make a string printable with the core fonts; remember anything still odd. */
export function toWinAnsi(text: string): string {
  let out = text
  for (const [pattern, replacement] of WINANSI_SUBSTITUTIONS) out = out.replace(pattern, replacement)
  if (!WINANSI_SAFE.test(out)) {
    for (const char of out) if (!WINANSI_SAFE.test(char)) unsupported.add(char)
  }
  return out
}

export function reportUnsupported(): void {
  if (unsupported.size > 0) {
    console.warn(`  ! characters with no core-font glyph, left as-is: ${[...unsupported].join(' ')}`)
  }
}

const faceFor = (run: Inline): string => {
  if (run.code) return 'Courier'
  if (run.bold && run.italic) return BODY_BOLD_ITALIC
  if (run.bold) return BODY_BOLD
  if (run.italic) return BODY_ITALIC
  return BODY
}

export const plainText = (inlines: Inline[]): string => toWinAnsi(inlines.map((i) => i.text).join('')).trim()

/**
 * Drop empty runs and the whitespace a substitution can leave behind at the
 * edges (a heading that opened with an emoji, say).
 */
function usableRuns(inlines: Inline[]): Inline[] {
  const runs = inlines.filter((run) => run.text.length > 0).map((run) => ({ ...run }))
  if (runs.length === 0) return runs
  runs[0].text = runs[0].text.replace(/^\s+/, '')
  runs[runs.length - 1].text = runs[runs.length - 1].text.replace(/\s+$/, '')
  return runs.filter((run) => run.text.length > 0)
}

/** Widest face in the paragraph, so the measured height is never too small. */
const measuringFace = (inlines: Inline[], style: TextStyle): string =>
  style.face ?? (inlines.some((i) => i.bold) ? BODY_BOLD : BODY)

export function measureInlines(doc: Doc, inlines: Inline[], width: number, style: TextStyle): number {
  return doc
    .font(measuringFace(inlines, style))
    .fontSize(style.size)
    .heightOfString(plainText(inlines), {
      width,
      lineGap: style.lineGap ?? 0,
      align: style.align ?? 'left',
      characterSpacing: style.characterSpacing ?? 0,
    })
}

/** Draw the runs at (x, y) and return the height consumed. */
export function drawInlines(
  doc: Doc,
  inlines: Inline[],
  x: number,
  y: number,
  width: number,
  style: TextStyle,
): number {
  const height = measureInlines(doc, inlines, width, style)
  const options = {
    width,
    lineGap: style.lineGap ?? 0,
    align: style.align ?? 'left',
    characterSpacing: style.characterSpacing ?? 0,
  }
  const runs = usableRuns(inlines)
  if (runs.length === 0) return 0
  // Only the first call in a `continued` chain may carry position and width —
  // repeating them restarts the wrap box at the current pen position, which is
  // how a styled paragraph ends up bleeding out of its column.
  runs.forEach((run, i) => {
    const font = doc.font(style.face ?? faceFor(run)).fontSize(style.size).fillColor(style.color)
    const continued = i < runs.length - 1
    if (i === 0) font.text(toWinAnsi(run.text), x, y, { ...options, continued })
    else font.text(toWinAnsi(run.text), { continued })
  })
  return height
}

/**
 * Draw the runs at the document's current y and let pdfkit own pagination —
 * long paragraphs flow onto the next page on their own. Afterwards `doc.y` sits
 * below the text, on whatever page it ended on, which is why flowing content
 * must read `doc.y` rather than add a measured height to it.
 */
export function flowInlines(doc: Doc, inlines: Inline[], x: number, width: number, style: TextStyle): void {
  const runs = usableRuns(inlines)
  if (runs.length === 0) return
  const options = {
    width,
    lineGap: style.lineGap ?? 0,
    align: style.align ?? 'left',
    characterSpacing: style.characterSpacing ?? 0,
  }
  runs.forEach((run, i) => {
    const font = doc.font(style.face ?? faceFor(run)).fontSize(style.size).fillColor(style.color)
    const continued = i < runs.length - 1
    if (i === 0) font.text(toWinAnsi(run.text), x, doc.y, { ...options, continued })
    else font.text(toWinAnsi(run.text), { continued })
  })
  doc.x = x
}
