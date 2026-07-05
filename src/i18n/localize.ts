import { locales, defaultLocale, type Locale } from './config'

/**
 * A localized value as authored: the base languages (fr/en/es) are written by
 * hand, any not-yet-translated locale is optional and filled at build time from
 * the default language. Lets us add locales without translating every long-form
 * content field up front.
 */
export type LocalizedInput = { fr: string; en: string; es: string } & Partial<Record<Locale, string>>

function isLocalizedLeaf(value: object): value is Record<string, string> {
  return typeof (value as Record<string, unknown>).fr === 'string'
}

/**
 * Deep-walks a content structure and fills every localized leaf (an object with
 * an `fr` string key) so it has all locales, falling back to `defaultLocale` for
 * any missing one. Returns a fully-populated structure — assert it to the full
 * `Record<Locale, string>` consumer type at the call site.
 */
export function fillLocaleDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((v) => fillLocaleDeep(v)) as unknown as T
  }
  if (value !== null && typeof value === 'object') {
    if (isLocalizedLeaf(value)) {
      const leaf = value as Record<string, string>
      const filled: Record<string, string> = {}
      for (const l of locales) filled[l] = leaf[l] ?? leaf[defaultLocale]
      return filled as unknown as T
    }
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value)) out[k] = fillLocaleDeep(v)
    return out as T
  }
  return value
}
