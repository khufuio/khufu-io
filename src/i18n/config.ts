export const locales = ['fr', 'en', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
}

// BCP-47 tags for hreflang / <html lang>.
export const localeHrefLang: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en',
  es: 'es',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
