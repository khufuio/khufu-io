/**
 * Mini-flyer content (JSON) -> one self-contained 4:5 HTML page.
 *
 * The mini-flyer is the Khufu flyer cut down to what a contact reads in ten
 * seconds on a phone, attached to a two-line personal message (todo cmwmtcwu).
 * It is a FORMAT of the flyer template (decision cmu3bcm7), not a second design:
 * it loads khufu-flyer.css first — tokens, display face, eyebrow, brand mark,
 * tick list, indigo callout — and khufu-mini-flyer.css only re-sizes those for a
 * 540x675 css px page (= 1080x1350 at 2x, the 4:5 ratio WhatsApp, LinkedIn and
 * Instagram all show uncropped in a feed or a chat bubble).
 *
 * ⚠️ ONE VOICE: « tu », about the offer. The referral commission is ONE band line,
 * never a section (decision cmu3cor9 applies to the full partner sheet; here the
 * contact may be buyer OR referrer, and only the band speaks to the second).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { CSS_FILE, dataUri, escapeHtml, fontFace, inline, markSvg } from './render'

const MINI_CSS_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), 'khufu-mini-flyer.css')

export type MiniFlyer = {
  /** Output basename, also what the build prints. */
  id: string
  lang: 'fr' | 'en'
  /** Small line opposite the wordmark. */
  tag: string
  eyebrow: string
  title: string
  /** The fixed price — its own figure, never a conversion of the other locale (cmwe3uf4). */
  price: { value: string; label: string }
  /**
   * The /sprint-v1 hero final frame in its `print` tone, a path under public/
   * (decision cmu3dn7u) — `sprint-hero-print-<lang>.png`, shot by
   * `npm run capture:mockups`. The app and site beside it are found by `lang`.
   */
  image: string
  /** 3 or 4 items; the first says the product is built 100 % (cmu4o5km). */
  items: string[]
  /** Amount large, percentage under it (cmu3ckt3); `lead` is the one line beside it. */
  referral: { value: string; caption: string; lead: string }
  footer: { email: string; site: string; legal: string }
}

/**
 * The page background, one colour edge to edge (pass v2, 2026-11-19). The v1
 * split — ink above, paper below, the hero frame straddling the seam — cut the
 * visual in two and was dropped: Adrien asked for one dark and one light page.
 */
export type MiniTheme = 'dark' | 'light'
export const MINI_THEMES: readonly MiniTheme[] = ['dark', 'light']
/** Light since pass v3 (Adrien: « noir c'est bof »); `dark` stays available. */
export const DEFAULT_MINI_THEME: MiniTheme = 'light'

export function renderMiniFlyer(flyer: MiniFlyer, theme: MiniTheme): string {
  if (flyer.items.length < 3 || flyer.items.length > 4) {
    throw new Error(`${flyer.id}: a mini-flyer carries 3 or 4 items, not ${flyer.items.length}`)
  }
  if (!/5214/.test(flyer.footer.legal)) {
    throw new Error(`${flyer.id}: the footer must show the FZCO trade licence 5214 (decision cmtz6zt9)`)
  }
  const { lang } = flyer
  const fonts = fontFace('Inter', 'Inter-var-latin.woff2') + fontFace('Space Grotesk', 'SpaceGrotesk-var-latin.woff2')
  const css = fs.readFileSync(CSS_FILE, 'utf8') + '\n' + fs.readFileSync(MINI_CSS_FILE, 'utf8')
  const items = flyer.items.map((item) => `<li>${inline(item, lang)}</li>`).join('')

  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${escapeHtml(flyer.id)}</title>
<style>${fonts}</style>
<style>${css}</style>
</head><body class="mini theme-${theme}">
<header class="masthead">
  <div class="masthead-top"><span class="brand"><span class="brand-mark" aria-hidden="true">${markSvg()}</span><span class="wordmark">KHUFU</span></span><span class="masthead-tag">${inline(flyer.tag, lang)}</span></div>
  <div class="eyebrow">${inline(flyer.eyebrow, lang)}</div>
  <h1 class="display hero-title">${inline(flyer.title, lang)}</h1>
  <div class="mini-price"><span class="mini-price-value">${inline(flyer.price.value, lang)}</span><span class="mini-price-label">${inline(flyer.price.label, lang)}</span></div>
</header>
<figure class="mini-scene">
  <img class="mini-scene-site" src="${dataUri(`images/captures/sprint-site-${lang}.png`)}" alt="">
  <img class="mini-scene-web" src="${dataUri(flyer.image)}" alt="">
  <img class="mini-scene-app" src="${dataUri(`images/captures/sprint-app-${lang}.png`)}" alt="">
</figure>
<ul class="showcase-list mini-list">${items}</ul>
<section class="callout mini-callout"><div class="callout-figure">
  <div class="callout-value">${inline(flyer.referral.value, lang)}</div>
  <div class="callout-caption">${inline(flyer.referral.caption, lang)}</div></div>
  <div class="callout-body"><p class="callout-title">${inline(flyer.referral.lead, lang)}</p></div>
</section>
<footer class="footer mini-footer">
  <p class="footer-cta"><em>${inline(flyer.footer.email, lang)}</em><span class="mini-site">${inline(flyer.footer.site, lang)}</span></p>
  <div class="footer-legal">${inline(flyer.footer.legal, lang)}</div>
</footer>
</body></html>`
}
