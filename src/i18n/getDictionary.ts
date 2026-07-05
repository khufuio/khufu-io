import 'server-only'
import type { Locale } from './config'
import { fr, type Dictionary } from './dictionaries/fr'
import { en } from './dictionaries/en'
import { es } from './dictionaries/es'
import { de } from './dictionaries/de'
import { it } from './dictionaries/it'
import { pt } from './dictionaries/pt'
import { nl } from './dictionaries/nl'
import { ar } from './dictionaries/ar'
import { pl } from './dictionaries/pl'
import { tr } from './dictionaries/tr'

// Partial: locales without a translated dictionary yet fall back to French.
const dictionaries: Partial<Record<Locale, Dictionary>> = { fr, en, es, de, it, pt, nl, ar, pl, tr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? fr
}

export type { Dictionary }
