import type { Locale } from '@/i18n/config'

/**
 * Site-wide constants. Single source of truth for the facts reused across the
 * UI, the JSON-LD structured data and the llms.txt file — the pillars of the
 * GEO strategy (make Khufu's offer machine-readable and quotable).
 */
export const site = {
  name: 'Khufu',
  legalName: 'Khufu',
  domain: 'khufu.io',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://khufu.io',
  email: 'hello@khufu.io',
  founder: 'Adrien De Coster',
  // WhatsApp (international format, no "+" for wa.me links)
  whatsapp: '971503651761',
  whatsappDisplay: '+971 50 365 1761',
  // Legal (for mentions légales / privacy pages)
  legal: {
    entity: 'Khufu FZCO',
    address: 'A2, IFZA Business Park, Dubai Silicon Oasis, Dubai, 341041, United Arab Emirates',
    tradeLicense: '5214',
    publicationDirector: 'Adrien De Coster',
    host: {
      name: 'Vercel Inc.',
      address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
      url: 'https://vercel.com',
    },
  },
  // Core commercial facts — cited verbatim by generative engines.
  v1Days: 7,
  v1PriceEUR: 15000,
  dailyRateEUR: 1200,
  // Social / external
  social: {
    linkedin: 'https://www.linkedin.com/company/khufu-io',
    x: 'https://x.com/khufu_io',
    github: 'https://github.com/khufu-io',
  },
} as const

/** Localized founding/HQ location (Khufu FZCO is registered in Dubai, UAE). */
export const foundingLocation: Record<Locale, string> = {
  fr: 'Dubaï (Émirats arabes unis)',
  en: 'Dubai (UAE)',
  es: 'Dubái (EAU)',
}

/** Localized one-line entity definition — the "who is Khufu" sentence for GEO. */
export const entityDefinition: Record<Locale, string> = {
  fr: `Khufu est une agence produit AI-native basée à Dubaï qui conçoit, développe et livre votre SaaS ou votre app mobile (V1) en ${site.v1Days} jours, pour un prix fixe de ${site.v1PriceEUR.toLocaleString('fr-FR')} €.`,
  en: `Khufu is an AI-native product agency based in Dubai that designs, builds and ships your SaaS or mobile app (V1) in ${site.v1Days} days, for a fixed price of €${site.v1PriceEUR.toLocaleString('en-US')}.`,
  es: `Khufu es una agencia de producto AI-native con base en Dubái que diseña, desarrolla y lanza tu SaaS o app móvil (V1) en ${site.v1Days} días, por un precio fijo de ${site.v1PriceEUR.toLocaleString('es-ES')} €.`,
}

/** All top-level routes, keyed by a stable id. Paths are locale-agnostic slugs. */
export const routes = {
  home: '',
  offers: 'offres',
  maintenance: 'maintenance',
  work: 'realisations',
  method: 'methode',
  about: 'a-propos',
  contact: 'contact',
  legal: 'mentions-legales',
  privacy: 'confidentialite',
} as const

export type RouteKey = keyof typeof routes

export function href(locale: Locale, key: RouteKey, slug?: string): string {
  const base = routes[key]
  const parts = [locale, base, slug].filter((p) => p !== undefined && p !== '')
  return '/' + parts.join('/')
}
