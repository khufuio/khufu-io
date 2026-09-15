/**
 * The attribution register as a real spreadsheet.
 *
 * attribution-tracker.csv stays the source of truth — it is versionable and
 * readable without a tool. This build turns it into the thing you actually type
 * into: frozen header, real column widths, dates that sort as dates, and
 * dropdowns on the enumerated columns so a status can never be misspelled.
 *
 * The allowed values and the per-column help are read out of
 * attribution-tracker.md, so the doc and the dropdowns cannot disagree.
 */
import ExcelJS from 'exceljs'
import { ACCENT, ACCENT_SOFT, INK, LINE, PAPER_2 } from './brand'
import { parseMarkdown, plain, type Block, type Inline } from './markdown'

/** Rows of validation applied beyond the data, so new lines keep the dropdowns. */
const VALIDATED_ROWS = 500

const DATE_COLUMNS = new Set([
  'offer_presented_on',
  'registered_on',
  'expires_on',
  'contract_signed_on',
  'collected_on',
  'commission_paid_on',
])
const MONEY_COLUMNS = new Set(['deal_amount', 'commission_due', 'collected_amount'])

/** Column widths in characters — prose columns get room, dates get exactly enough. */
const WIDTHS: Record<string, number> = {
  partner_name: 20,
  partner_company: 28,
  lead_name: 20,
  lead_company: 26,
  lead_email: 28,
  offer_presented_on: 15,
  offer_confirmed: 13,
  commission_rate_pct: 10,
  registered_on: 13,
  expires_on: 13,
  status: 19,
  contract_signed_on: 15,
  deal_amount: 13,
  currency: 10,
  commission_due: 14,
  collected_on: 13,
  collected_amount: 15,
  commission_paid_on: 16,
  commission_invoice_ref: 20,
  notes: 60,
}

/** RFC 4180 enough for this file: quoted fields, doubled quotes, embedded commas. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else quoted = false
      } else field += char
    } else if (char === '"') quoted = true
    else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (char !== '\r') field += char
  }
  if (field !== '' || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ''))
}

const codeValues = (inlines: Inline[]): string[] => inlines.filter((i) => i.code).map((i) => i.text.trim())

/**
 * Columns whose allowed values are listed inline in the doc's column table.
 * `status` is not here — its values come from the state-machine table instead.
 */
const ENUMERATED = new Set(['offer_confirmed', 'currency'])

/** Everything the .md says about the register, keyed for the spreadsheet build. */
type Doc = {
  blocks: Block[]
  help: Map<string, string>
  allowed: Map<string, string[]>
}

function readDoc(markdown: string): Doc {
  const blocks = parseMarkdown(markdown)
  const help = new Map<string, string>()
  const allowed = new Map<string, string[]>()

  // "Les colonnes": first cell is the column name, second its description.
  const columnsTable = blocks.find(
    (b): b is Extract<Block, { kind: 'table' }> => b.kind === 'table' && b.rows.every((r) => codeValues(r[0]).length === 1),
  )
  for (const row of columnsTable?.rows ?? []) {
    const name = codeValues(row[0])[0]
    if (!name) continue
    help.set(name, plain(row[1] ?? []))
    // Only these columns are enumerations. Inferring it from "the description
    // lists code values" is too loose: expires_on's description quotes a
    // formula in backticks and would grow a dropdown of its own formula.
    if (ENUMERATED.has(name)) {
      const values = codeValues(row[1] ?? [])
      if (values.length > 1) allowed.set(name, values)
    }
  }

  // The table under the heading that names `status` holds the state machine.
  const statusHeading = blocks.findIndex((b) => b.kind === 'heading' && /status|état/i.test(plain(b.inlines)))
  const statusTable = blocks.slice(statusHeading + 1).find((b) => b.kind === 'table')
  if (statusTable?.kind === 'table') {
    const states = statusTable.rows.map((r) => codeValues(r[0])[0]).filter((v): v is string => Boolean(v))
    if (states.length > 0) allowed.set('status', states)
  }

  return { blocks, help, allowed }
}

const hex = (color: string): string => `FF${color.replace('#', '').toUpperCase()}`

/**
 * Range-level data validation. exceljs implements it but does not declare it on
 * Worksheet, and the per-cell API it does declare is what emits the overlapping
 * ranges described below.
 */
const rangeValidations = (
  sheet: ExcelJS.Worksheet,
): { add: (range: string, validation: ExcelJS.DataValidation) => void } =>
  (sheet as unknown as { dataValidations: { add: (range: string, validation: ExcelJS.DataValidation) => void } })
    .dataValidations

function buildLeadsSheet(book: ExcelJS.Workbook, csv: string[][], doc: Doc): void {
  const sheet = book.addWorksheet('Leads', {
    views: [{ state: 'frozen', ySplit: 1 }],
    properties: { defaultRowHeight: 18 },
  })
  const [header, ...body] = csv

  sheet.columns = header.map((name) => ({ key: name, width: WIDTHS[name] ?? 18 }))

  const head = sheet.getRow(1)
  header.forEach((name, i) => {
    const cell = head.getCell(i + 1)
    cell.value = name
    cell.font = { bold: true, size: 10, color: { argb: hex(INK) } }
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hex(PAPER_2) } }
    cell.alignment = { vertical: 'middle' }
    cell.border = { bottom: { style: 'medium', color: { argb: hex(ACCENT) } } }
    const help = doc.help.get(name)
    // The column's own documentation, one hover away from where it is typed.
    if (help) cell.note = { texts: [{ text: help }] }
  })
  head.height = 22

  body.forEach((row, r) => {
    const line = sheet.getRow(r + 2)
    header.forEach((name, c) => {
      const raw = row[c] ?? ''
      const cell = line.getCell(c + 1)
      if (raw === '') return
      if (DATE_COLUMNS.has(name) && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        // Stored as a real date (UTC noon avoids a timezone rollover to D-1).
        cell.value = new Date(`${raw}T12:00:00Z`)
      } else if (MONEY_COLUMNS.has(name) || name === 'commission_rate_pct') {
        const n = Number(raw)
        cell.value = Number.isFinite(n) ? n : raw
      } else cell.value = raw
    })
  })

  // Formats and validation run past the data so new rows behave the same.
  header.forEach((name, i) => {
    const column = sheet.getColumn(i + 1)
    if (DATE_COLUMNS.has(name)) column.numFmt = 'yyyy-mm-dd'
    else if (MONEY_COLUMNS.has(name)) column.numFmt = '#,##0.00'
    else if (name === 'commission_rate_pct') column.numFmt = '0"%"'
    if (name === 'notes') column.alignment = { wrapText: true, vertical: 'top' }

    const values = doc.allowed.get(name)
    if (!values) return
    // Added as one range, not cell by cell: exceljs groups per-cell validations
    // by string-sorted address, which emits overlapping ranges (F10:F500 and
    // F2:F500) that Excel flags as repairable content.
    rangeValidations(sheet).add(`${column.letter}2:${column.letter}${VALIDATED_ROWS}`, {
      type: 'list',
      allowBlank: true,
      formulae: [`"${values.join(',')}"`],
      showErrorMessage: true,
      errorStyle: 'error',
      errorTitle: 'Valeur non autorisée',
      error: `Valeurs possibles : ${values.join(', ')}`,
    })
  })

  sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: header.length } }
}

/** Rough line count for a merged cell, which Excel will not auto-fit. */
const rowHeightFor = (text: string, widthInChars: number): number =>
  Math.max(16, Math.ceil(text.length / widthInChars || 1) * 13 + 5)

function buildReadmeSheet(book: ExcelJS.Workbook, doc: Doc): void {
  const sheet = book.addWorksheet('Lisez-moi', { views: [{ showGridLines: false }] })
  const widths = [26, 48, 54]
  sheet.columns = widths.map((width) => ({ width }))
  const merged = widths.reduce((a, b) => a + b, 0)
  let r = 1

  const write = (
    values: string[],
    style: { bold?: boolean; size?: number; color?: string; fill?: string; wrap?: boolean; merge?: boolean },
  ): void => {
    const row = sheet.getRow(r)
    values.forEach((value, i) => {
      const cell = row.getCell(i + 1)
      cell.value = value
      cell.font = { bold: style.bold, size: style.size ?? 10, color: { argb: hex(style.color ?? INK) } }
      cell.alignment = { wrapText: style.wrap ?? true, vertical: 'top' }
      if (style.fill) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hex(style.fill) } }
      if (style.fill) cell.border = { bottom: { style: 'thin', color: { argb: hex(LINE) } } }
    })
    if (style.merge && values.length === 1) sheet.mergeCells(r, 1, r, widths.length)
    if (style.merge && values.length === 2) sheet.mergeCells(r, 2, r, widths.length)
    const width = style.merge ? merged : widths[0]
    row.height = rowHeightFor(values.join(' '), width * (style.size && style.size > 12 ? 0.6 : 1))
    r++
  }

  for (const block of doc.blocks) {
    switch (block.kind) {
      case 'heading':
        r++
        write([plain(block.inlines)], {
          bold: true,
          size: block.level === 1 ? 16 : 12,
          color: block.level === 1 ? INK : ACCENT,
          merge: true,
        })
        break
      case 'paragraph':
        write([plain(block.inlines)], { merge: true })
        break
      case 'list':
        block.items.forEach((item, i) => {
          write([`${block.ordered ? `${i + 1}.` : '•'} ${plain(item)}`], { merge: true })
        })
        break
      case 'table': {
        const columns = block.head.length
        write(
          block.head.map((c) => plain(c)),
          { bold: true, fill: PAPER_2, merge: columns === 2 },
        )
        for (const row of block.rows) {
          write(
            row.map((c) => plain(c)),
            { fill: ACCENT_SOFT, merge: columns === 2 },
          )
        }
        r++
        break
      }
      case 'hr':
        r++
        break
    }
  }
}

export async function buildTrackerXlsx(csvText: string, markdown: string): Promise<Buffer> {
  const doc = readDoc(markdown)
  const book = new ExcelJS.Workbook()
  book.creator = 'Adrien De Coster — Khufu FZCO'
  book.created = new Date()
  book.title = 'Khufu — registre d’attribution des leads partenaires'

  buildLeadsSheet(book, parseCsv(csvText), doc)
  buildReadmeSheet(book, doc)

  const out = await book.xlsx.writeBuffer()
  return Buffer.from(out)
}
