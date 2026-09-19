import type { Locale } from './config'

/**
 * A localized value as authored: EVERY locale written out.
 *
 * ⛔ THERE IS NO FALLBACK ANY MORE (todo cmu8036u, 2026-09-19). This type used
 * to require fr/en/es only and fill the seven others from French at build time,
 * so /de, /it, /pt, /nl, /ar, /pl and /tr served French — /ar in a right-to-left
 * layout — on the page that receives paid traffic. A locale the site declares
 * is a locale the site writes: a missing translation is now a type error, not a
 * silent French paragraph.
 */
export type LocalizedInput = Record<Locale, string>
