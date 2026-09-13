/**
 * Markdown -> a small typed block model the PDF/DOCX/XLSX renderers share.
 *
 * The kit's .md files are the source of truth for the wording; nothing here
 * rewrites content, it only classifies it. Anything marked lexes but is not
 * modelled (raw HTML, code fences) is dropped loudly rather than silently.
 */
import { marked, type Token, type Tokens } from 'marked'

export type Inline = {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  href?: string
}

export type Block =
  | { kind: 'heading'; level: number; inlines: Inline[] }
  | { kind: 'paragraph'; inlines: Inline[] }
  | { kind: 'list'; ordered: boolean; items: Inline[][] }
  | { kind: 'table'; head: Inline[][]; rows: Inline[][][] }
  | { kind: 'quote'; blocks: Block[] }
  | { kind: 'hr' }

type Style = Omit<Inline, 'text'>

/** Source lines are hard-wrapped for readability; a renderer wants one run. */
const unwrap = (s: string): string => s.replace(/\s*\n\s*/g, ' ')

function inlinesOf(tokens: Token[] | undefined, style: Style = {}): Inline[] {
  const out: Inline[] = []
  for (const token of tokens ?? []) {
    switch (token.type) {
      case 'strong':
        out.push(...inlinesOf((token as Tokens.Strong).tokens, { ...style, bold: true }))
        break
      case 'em':
        out.push(...inlinesOf((token as Tokens.Em).tokens, { ...style, italic: true }))
        break
      case 'del':
        out.push(...inlinesOf((token as Tokens.Del).tokens, style))
        break
      case 'link': {
        const link = token as Tokens.Link
        out.push(...inlinesOf(link.tokens, { ...style, href: link.href }))
        break
      }
      case 'codespan':
        out.push({ text: unwrap((token as Tokens.Codespan).text), ...style, code: true })
        break
      case 'br':
        out.push({ text: ' ', ...style })
        break
      case 'escape':
      case 'text': {
        const text = token as Tokens.Text
        if (text.tokens?.length) out.push(...inlinesOf(text.tokens, style))
        else out.push({ text: unwrap(text.text), ...style })
        break
      }
      default:
        if ('text' in token && typeof token.text === 'string') out.push({ text: unwrap(token.text), ...style })
    }
  }
  // Merge adjacent runs that share a style so measurement sees whole words.
  return out.reduce<Inline[]>((acc, run) => {
    const last = acc[acc.length - 1]
    const same =
      last && last.bold === run.bold && last.italic === run.italic && last.code === run.code && last.href === run.href
    if (same) last.text += run.text
    else acc.push({ ...run })
    return acc
  }, [])
}

function blocksOf(tokens: Token[]): Block[] {
  const out: Block[] = []
  for (const token of tokens) {
    switch (token.type) {
      case 'heading': {
        const h = token as Tokens.Heading
        out.push({ kind: 'heading', level: h.depth, inlines: inlinesOf(h.tokens) })
        break
      }
      case 'paragraph': {
        const p = token as Tokens.Paragraph
        out.push({ kind: 'paragraph', inlines: inlinesOf(p.tokens) })
        break
      }
      case 'list': {
        const list = token as Tokens.List
        out.push({
          kind: 'list',
          ordered: list.ordered,
          items: list.items.map((item) => inlinesOf(item.tokens)),
        })
        break
      }
      case 'table': {
        const table = token as Tokens.Table
        out.push({
          kind: 'table',
          head: table.header.map((cell) => inlinesOf(cell.tokens)),
          rows: table.rows.map((row) => row.map((cell) => inlinesOf(cell.tokens))),
        })
        break
      }
      case 'blockquote': {
        const quote = token as Tokens.Blockquote
        out.push({ kind: 'quote', blocks: blocksOf(quote.tokens) })
        break
      }
      case 'hr':
        out.push({ kind: 'hr' })
        break
      case 'space':
        break
      default:
        console.warn(`  ! unmodelled markdown token "${token.type}" dropped`)
    }
  }
  return out
}

export function parseMarkdown(source: string): Block[] {
  return blocksOf(marked.lexer(source, { gfm: true }))
}

export const plain = (inlines: Inline[]): string => inlines.map((i) => i.text).join('')

/** True for a paragraph that is entirely bold — the kit's "lede" convention. */
export const isLede = (block: Block): boolean =>
  block.kind === 'paragraph' && block.inlines.length > 0 && block.inlines.every((i) => i.bold)
