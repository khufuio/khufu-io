/**
 * Flyer content (JSON) -> one self-contained A4 HTML page.
 *
 * This module knows how each BLOCK TYPE looks. It knows nothing about the
 * partner programme, or about any other target: every word comes from the
 * content file. That separation is the whole point of the template
 * (decision cmu3bcm7) — a new target is a new JSON file, never a new layout.
 *
 * Self-contained on purpose: the stylesheet and both brand faces are inlined as
 * text and base64, because the page is printed from a scratch directory where a
 * relative <link> or <img src> resolves to nothing (hq/docs/tools/client-documents.md).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(HERE, '..', '..')
const CSS_FILE = path.join(HERE, 'khufu-flyer.css')
const FONT_DIR = path.join(REPO_ROOT, 'src', 'assets', 'fonts')

export type Stat = { value: string; label: string }

/**
 * One product frame in a `shots` band.
 *
 * `image` is a path under public/ — the file is inlined, like the fonts, because
 * the sheet prints from a scratch directory where a relative src resolves to
 * nothing. `frame` only picks the chrome drawn around it: a browser bar, or a
 * phone shell.
 */
export type Shot = { image: string; frame: 'browser' | 'phone'; caption: string }

export type Block =
  | { type: 'cards'; title: string; items: { title: string; body: string }[]; note?: string }
  | { type: 'split'; title?: string; columns: { head: string; tone?: 'positive' | 'negative'; items: string[] }[] }
  | { type: 'shots'; title?: string; items: Shot[]; note?: string }
  | { type: 'callout'; value: string; caption: string; title: string; text: string }
  | { type: 'rules'; title: string; items: string[] }

export type Flyer = {
  /** Output basename, also what the build prints. */
  id: string
  lang: 'fr' | 'en'
  /** Small line opposite the wordmark — what this sheet is. */
  tag: string
  hero: { eyebrow: string; title: string; lede: string; stats: Stat[] }
  blocks: Block[]
  footer: { cta: string; contact: string; legal: string }
}

const REQUIRED_BLOCKS: Block['type'][] = ['cards', 'callout', 'rules']

function escapeHtml(value: string): string {
  return value.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string)
}

/**
 * French typography: a narrow no-break space before the double punctuation, and
 * an unbreakable one inside figures and before the currency, so "15 000 €" can
 * never wrap. English keeps its own spacing, so this runs on fr only.
 */
function frenchSpacing(value: string): string {
  return value
    .replace(/ ([;:!?%])/g, ' $1')
    .replace(/« /g, '« ')
    .replace(/ »/g, ' »')
    .replace(/(\d) (\d)/g, '$1 $2')
    .replace(/(\d) ?([€$])/g, '$1 $2')
    .replace(/(\d) (jours?|semaines?|h\b|%)/g, '$1 $2')
}

/**
 * The only inline markup a content file may use: **bold**, *accent*, newline.
 *
 * Content files are written with a plain ASCII apostrophe because that is what
 * survives copy-paste into a JSON file; the typographic one is restored here, so
 * a display face and a text face never disagree about the same word.
 */
function inline(value: string, lang: Flyer['lang']): string {
  const spaced = (lang === 'fr' ? frenchSpacing(value) : value).replace(/'/g, '\u2019')
  return escapeHtml(spaced)
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

const MIME: Record<string, string> = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.avif': 'image/avif' }

/**
 * Inlines an asset from public/ as a data URI.
 *
 * ⚠️ PRINT RESOLUTION IS THE THING TO WATCH, and nothing here can check it: a
 * capture is placed by CSS in millimetres, so the effective DPI is the pixel
 * width divided by the printed width. The product captures are 1200 px wide
 * (web) and 560 px (phone), which stay above 300 dpi up to ~100 mm and ~47 mm
 * respectively. Past that they soften — look at the render, do not trust the
 * file name.
 */
function dataUri(publicPath: string): string {
  const file = path.join(REPO_ROOT, 'public', publicPath)
  const mime = MIME[path.extname(file).toLowerCase()]
  if (!mime) throw new Error(`${publicPath}: a flyer image must be webp, png, jpg or avif`)
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`
}

function renderStats(stats: Stat[], lang: Flyer['lang']): string {
  const cells = stats
    .map(
      (s) =>
        `<div class="stat"><div class="stat-value">${inline(s.value, lang)}</div>` +
        `<div class="stat-label">${inline(s.label, lang)}</div></div>`,
    )
    .join('')
  return `<div class="stats">${cells}</div>`
}

function renderBlock(block: Block, lang: Flyer['lang']): string {
  switch (block.type) {
    case 'cards': {
      const cards = block.items
        .map(
          (item) =>
            `<div class="card"><div class="card-rule"></div>` +
            `<h3 class="card-title">${inline(item.title, lang)}</h3>` +
            `<p class="card-body">${inline(item.body, lang)}</p></div>`,
        )
        .join('')
      const note = block.note ? `<p class="band-note">${inline(block.note, lang)}</p>` : ''
      return `<section class="band"><h2 class="band-title">${inline(block.title, lang)}</h2><div class="cards">${cards}</div>${note}</section>`
    }
    case 'split': {
      const cols = block.columns
        .map((col) => {
          const items = col.items.map((i) => `<li>${inline(i, lang)}</li>`).join('')
          const cls = col.tone === 'negative' ? 'split-col is-negative' : 'split-col'
          return `<div class="${cls}"><div class="split-head">${inline(col.head, lang)}</div><ul class="split-list">${items}</ul></div>`
        })
        .join('')
      const title = block.title ? `<h2 class="band-title">${inline(block.title, lang)}</h2>` : ''
      return `<section class="band">${title}<div class="split">${cols}</div></section>`
    }
    case 'shots': {
      const frames = block.items
        .map((shot) => {
          // A browser bar with dots and no address: the sheet shows what a
          // delivered product LOOKS like, and a real domain would turn the band
          // into a claim about that product rather than about the work.
          const chrome =
            shot.frame === 'browser'
              ? `<div class="shot-bar"><span class="shot-dots"><i></i><i></i><i></i></span><span class="shot-pill"></span></div>`
              : `<div class="shot-notch"></div>`
          return (
            `<figure class="shot shot--${shot.frame}">${chrome}` +
            `<div class="shot-canvas"><img src="${dataUri(shot.image)}" alt=""></div>` +
            `<figcaption class="shot-caption">${inline(shot.caption, lang)}</figcaption></figure>`
          )
        })
        .join('')
      const note = block.note ? `<p class="band-note">${inline(block.note, lang)}</p>` : ''
      // The title is optional here and usually absent: the captions already say
      // what each frame is, and a heading that adds nothing to the picture is
      // the paragraph this band exists to replace.
      const title = block.title ? `<h2 class="band-title">${inline(block.title, lang)}</h2>` : ''
      return `<section class="band">${title}<div class="shots">${frames}</div>${note}</section>`
    }
    case 'callout':
      return (
        `<section class="callout"><div class="callout-figure">` +
        `<div class="callout-value">${inline(block.value, lang)}</div>` +
        `<div class="callout-caption">${inline(block.caption, lang)}</div></div>` +
        `<div class="callout-body"><h2 class="callout-title">${inline(block.title, lang)}</h2>` +
        `<p class="callout-text">${inline(block.text, lang)}</p></div></section>`
      )
    case 'rules': {
      const items = block.items
        .map(
          (text, i) =>
            `<div class="rule-item"><div class="rule-num">${String(i + 1).padStart(2, '0')}</div>` +
            `<p class="rule-text">${inline(text, lang)}</p></div>`,
        )
        .join('')
      return `<section class="band grow"><h2 class="band-title">${inline(block.title, lang)}</h2><div class="rules">${items}</div></section>`
    }
  }
}

function fontFace(family: string, file: string): string {
  const data = fs.readFileSync(path.join(FONT_DIR, file)).toString('base64')
  // Variable faces: one file covers the whole weight range the sheet asks for.
  return `@font-face{font-family:'${family}';font-style:normal;font-weight:100 900;font-display:block;src:url(data:font/woff2;base64,${data}) format('woff2');}`
}

export function renderFlyer(flyer: Flyer): string {
  const present = new Set(flyer.blocks.map((b) => b.type))
  const missing = REQUIRED_BLOCKS.filter((t) => !present.has(t))
  if (missing.length > 0) {
    throw new Error(`${flyer.id}: a Khufu flyer must carry these blocks — missing ${missing.join(', ')}`)
  }
  if (!/5214/.test(flyer.footer.legal)) {
    throw new Error(`${flyer.id}: the footer must show the FZCO trade licence 5214 (decision cmtz6zt9)`)
  }

  const fonts = fontFace('Inter', 'Inter-var-latin.woff2') + fontFace('Space Grotesk', 'SpaceGrotesk-var-latin.woff2')
  const css = fs.readFileSync(CSS_FILE, 'utf8')
  const { hero, footer, lang } = flyer

  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${escapeHtml(flyer.id)}</title>
<style>${fonts}</style>
<style>${css}</style>
</head><body>
<header class="masthead">
  <div class="masthead-top"><span class="wordmark">KHUFU</span><span class="masthead-tag">${inline(flyer.tag, lang)}</span></div>
  <div class="eyebrow">${inline(hero.eyebrow, lang)}</div>
  <h1 class="display hero-title">${inline(hero.title, lang)}</h1>
  <p class="hero-lede">${inline(hero.lede, lang)}</p>
  ${renderStats(hero.stats, lang)}
</header>
${flyer.blocks.map((b) => renderBlock(b, lang)).join('\n')}
<footer class="footer">
  <div><p class="footer-cta">${inline(footer.cta, lang)}</p><p class="footer-contact">${inline(footer.contact, lang)}</p></div>
  <div class="footer-legal">${inline(footer.legal, lang)}</div>
</footer>
</body></html>`
}
