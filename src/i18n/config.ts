export const locales = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ar', 'pl', 'tr'] as const

export type Locale = (typeof locales)[number]

/**
 * NOT the language most visitors get — routing negotiates `Accept-Language`
 * (see proxy.ts). This is the FALLBACK when no supported locale matches, and
 * the `x-default` hreflang target. English, so a Japanese or Korean visitor
 * lands on a language they might read rather than on French (decision cmu99n8p).
 */
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  ar: 'العربية',
  pl: 'Polski',
  tr: 'Türkçe',
}

// BCP-47 tags for hreflang / <html lang>. Generic language tags (not region-
// specific) so each locale targets all its speakers — we serve FR/BE/CH/LU,
// Spain + LatAm, etc., and pricing is handled separately by visitor country.
export const localeHrefLang: Record<Locale, string> = {
  fr: 'fr',
  en: 'en',
  es: 'es',
  de: 'de',
  it: 'it',
  pt: 'pt',
  nl: 'nl',
  ar: 'ar',
  pl: 'pl',
  tr: 'tr',
}

// Right-to-left locales need dir="rtl" on <html>.
export const rtlLocales = new Set<Locale>(['ar'])

export function dir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLocales.has(locale) ? 'rtl' : 'ltr'
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
