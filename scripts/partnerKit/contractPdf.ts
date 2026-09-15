/**
 * Referral agreements -> A4 PDF, through the khufu client-document pipeline.
 *
 * Every PDF khufu sends to a client or a partner follows one charter:
 * hq/docs/tools/client-documents.md. A self-contained HTML page styled by the ONE
 * house stylesheet (hq/docs/tools/khufu-doc.css, inlined — a relative <link> dies in a
 * scratch dir), printed by headless Chrome over CDP through the ONE entry point,
 * hq/scripts/client-doc-pdf.mjs. No pdfkit, no Word: the previous pdfkit renderer of
 * these contracts was outside that pipeline, which is why it was replaced.
 *
 * The markdown -> HTML step mirrors hq/scripts/khufu-contract-proofs.mjs (letterhead,
 * `.fill` blanks, two-party `.sigwrap`, French spacing). That generator is hard-wired
 * to hq/docs/khufu/contracts and to French party labels, so the partner kit cannot
 * call it as is; folding this renderer into it is the long-term shape.
 *
 * The .md stays the source of the wording; nothing here edits content.
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { marked } from 'marked'
import { REPO_ROOT } from './brand'

/** HQ owns the charter, the stylesheet and the print entry point. */
const HQ_DIR = process.env.HQ_DIR ?? path.join(os.homedir(), 'code/projects/hq')
const HOUSE_CSS_FILE = path.join(HQ_DIR, 'docs/tools/khufu-doc.css')
const PRINT_ENTRY = path.join(HQ_DIR, 'scripts/client-doc-pdf.mjs')
const MARK_SVG = path.join(REPO_ROOT, 'public/brand/khufu-k.svg')

export type ContractLang = 'fr' | 'en'

export type ContractSpec = {
  lang: ContractLang
  /** Eyebrow on the right of the letterhead. */
  type: string
  /** Running header and footer label, so page 3 says what it is page 3 of. */
  label: string
}

const SENDER_LINES = [
  'A2, IFZA Business Park, Dubai Silicon Oasis',
  'Dubai, 341041',
  'United Arab Emirates',
  'hello@khufu.io',
]

const COPY: Record<ContractLang, { status: string; proofnote: string }> = {
  fr: {
    status: 'Projet — relecture juridique',
    proofnote: 'Projet soumis à relecture juridique — ce document n’engage personne.',
  },
  en: {
    status: 'Draft — legal review',
    proofnote: 'Draft submitted for legal review — this document binds no one.',
  },
}

/**
 * One document overrides the house top margin: the running header is drawn in that
 * band, and @page cannot depend on a class (khufu-doc.css §0).
 */
const PAGE_OVERRIDE = `<style>
  @page { size: A4; margin: 20mm 19mm 20mm 19mm; }
  /* GFM autolinks hello@khufu.io; khufu-doc.css styles no links, so Chrome's default blue would print. */
  a { color: inherit; text-decoration: none; }
</style>`

const FILL = 'FILLTOKEN'

const esc = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const inlineMd = (s: string): string =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .split(FILL)
    .join('<span class="fill"></span>')

/**
 * The vector mark. Its <defs> declare a global `.k` rule and tag the glyph `class="k"`;
 * both are renamed, or the rule repaints any `.k` cell of the document.
 */
function markSvg(): string {
  return fs
    .readFileSync(MARK_SVG, 'utf8')
    .trim()
    .replace(/\.k \{/g, '.khufu-k-glyph {')
    .replace(/class="k"/g, 'class="khufu-k-glyph"')
}

/** The `# Title` becomes the title block, the bold line under it the subtitle. */
function splitHead(md: string): { title: string; sub: string; body: string } {
  const lines = md.split('\n')
  const titleAt = lines.findIndex((l) => l.startsWith('# '))
  const title = titleAt >= 0 ? lines[titleAt].slice(2).trim() : ''
  if (titleAt >= 0) lines.splice(titleAt, 1)
  const subAt = lines.findIndex((l) => /^\*\*[^*].*\*\*$/.test(l.trim()))
  const sub = subAt >= 0 ? lines[subAt].trim().slice(2, -2) : ''
  if (subAt >= 0) lines.splice(subAt, 1)
  return { title, sub, body: lines.join('\n') }
}

/**
 * Lift the trailing two-party table off the body and lay it out as `.sigwrap`: the
 * head row names the parties, the middle rows identify them, the last row is the
 * caption under the signing rule. Cells are reused word for word.
 */
function extractSignature(md: string): { body: string; sig: string[][] | null } {
  const lines = md.trimEnd().split('\n')
  let start = lines.length
  while (start > 0 && lines[start - 1].trim().startsWith('|')) start--
  if (start === lines.length) return { body: md, sig: null }
  const rows = lines
    .slice(start)
    .filter((l) => !/^\|[\s|:-]+\|$/.test(l.trim()))
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, '')
        .split('|')
        .map((c) => c.trim()),
    )
  const rest = lines.slice(0, start)
  while (rest.length && ['', '---'].includes(rest[rest.length - 1].trim())) rest.pop()
  return { body: rest.join('\n'), sig: rows }
}

function renderSignature(rows: string[][] | null): string {
  if (!rows || rows.length < 2) return ''
  const [head, ...rest] = rows
  const idents = rest.slice(0, -1)
  const caption = rest[rest.length - 1]
  const column = (i: number): string =>
    `<div><div class="sig-party">${inlineMd(head[i] ?? '')}</div>` +
    `<div class="sig-id">${idents.map((r) => `<div>${inlineMd(r[i] ?? '')}</div>`).join('')}</div>` +
    '<div class="sig-space"></div><div class="sig-rule"></div>' +
    `<div class="sig-cap">${inlineMd(caption[i] ?? '')}</div></div>`
  return `<div class="sigwrap"><div class="sig2">${column(0)}${column(1)}</div></div>`
}

/**
 * French typography: a no-break space before double punctuation and inside
 * guillemets, so a `;` or `:` never starts a line. Body markup only carries
 * `class="…"` attributes, which contain no space-then-punctuation sequence.
 */
const frenchSpacing = (html: string): string => html.replace(/ ([;:!?»])/g, ' $1').replace(/« /g, '« ')

function buildHtml(markdown: string, spec: ContractSpec): string {
  const { title, sub, body } = splitHead(markdown.replace(/_{4,}/g, FILL))
  const { body: prose, sig } = extractSignature(body)

  let html = marked.parse(prose, { async: false, gfm: true })
  // A contract has one heading level: every article, and the parties block, is an h2.
  html = html.replace(/<(\/?)h3>/g, '<$1h2>').split(FILL).join('<span class="fill"></span>')
  let signature = renderSignature(sig)
  if (spec.lang === 'fr') {
    html = frenchSpacing(html)
    signature = frenchSpacing(signature)
  }

  const copy = COPY[spec.lang]
  return `<!DOCTYPE html>
<html lang="${spec.lang}">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<style>
${fs.readFileSync(HOUSE_CSS_FILE, 'utf8')}
</style>
${PAGE_OVERRIDE}
</head>
<body>
<table class="letterhead"><tr>
  <td class="lh-mark">${markSvg()}</td>
  <td><div class="lh-name">Khufu FZCO</div><div class="lh-lines">${SENDER_LINES.map(esc).join('<br>')}</div></td>
  <td class="lh-right"><div class="eyebrow doctype">${esc(spec.type)}</div><div class="lh-date tnum">${esc(copy.status)}</div></td>
</tr></table>
<div class="rule-accent"></div>
<div class="doc-title">${esc(title)}</div>
${sub ? `<div class="doc-sub">${inlineMd(sub)}</div>` : ''}
${html}
${signature}
<div class="proofnote">${esc(copy.proofnote)}</div>
</body>
</html>`
}

/** Render one contract to `pdfPath`; the intermediate HTML is written next to it in a temp dir. */
export function buildContractPdf(markdown: string, spec: ContractSpec, pdfPath: string): string {
  for (const file of [HOUSE_CSS_FILE, PRINT_ENTRY]) {
    if (!fs.existsSync(file)) throw new Error(`khufu document pipeline not found: ${file} (set HQ_DIR)`)
  }
  const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'partner-contract-'))
  const htmlPath = path.join(workDir, `${path.basename(pdfPath, '.pdf')}.html`)
  fs.writeFileSync(htmlPath, buildHtml(markdown, spec))
  execFileSync(
    process.execPath,
    [PRINT_ENTRY, htmlPath, pdfPath, `--foot-label=${spec.label}`, `--head-label=${spec.label}`],
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  return htmlPath
}
