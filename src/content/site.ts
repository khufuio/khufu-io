import type { Locale } from '@/i18n/config'

// Single source for the WhatsApp number. The env may contain "+", spaces, etc.
// (display form); the wa.me link needs a digits-only version.
const whatsappRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971 50 365 1761'

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
  founderPhoto: '/images/adrien-de-coster.jpg',
  // WhatsApp — wa.me link (digits only) + display form (raw env value).
  whatsapp: whatsappRaw.replace(/\D/g, ''),
  whatsappDisplay: whatsappRaw.trim(),
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
  hourlyRateEUR: 200,
  // Both EUR and USD are firm, billable prices (the client picks; we settle in
  // AED regardless), so USD is NOT an FX conversion — these are chosen round
  // list prices, keyed by their EUR anchor. Covers every price we display
  // (Sprint V1, day/hour rate, maintenance tiers 1490/3900). Any EUR amount not
  // listed falls back to a rate conversion in currency.ts (safety net only).
  usdPrices: {
    15000: 17000,
    1200: 1400,
    200: 240,
    1490: 1690,
    3900: 4400,
  } as Record<number, number>,
  // Founder's personal profiles (indie-dev brand). Attached to the founder
  // (Person) in structured data, not to the Organization.
  social: {
    linkedin: 'https://www.linkedin.com/in/adriendecoster/',
    x: 'https://x.com/adriendecoster_',
    instagram: 'https://www.instagram.com/adrien_de_coster/',
    tiktok: 'https://www.tiktok.com/@adrien_de_coster',
  },
} as const

/** Localized founding/HQ location (Khufu FZCO is registered in Dubai, UAE). */
export const foundingLocation: Record<Locale, string> = {
  fr: 'Dubaï (Émirats arabes unis)',
  en: 'Dubai (UAE)',
  es: 'Dubái (EAU)',
  de: 'Dubai (Vereinigte Arabische Emirate)',
  it: 'Dubai (Emirati Arabi Uniti)',
  pt: 'Dubai (Emirados Árabes Unidos)',
  nl: 'Dubai (Verenigde Arabische Emiraten)',
  ar: 'دبي (الإمارات العربية المتحدة)',
  pl: 'Dubaj (Zjednoczone Emiraty Arabskie)',
  tr: 'Dubai (Birleşik Arap Emirlikleri)',
}

/**
 * Localized one-line entity definition — the "who is Khufu" sentence for GEO.
 *
 * The OFFER comes first: Sprint V1, a shipped V1 in `v1Days` days at a fixed
 * price. That is what Khufu sells and what we want quoted back. The "every role
 * of a tech team, in one contract" angle (2026-08-07) is a supporting sentence
 * on purpose — it is a reason to buy the sprint, not a replacement for it.
 *
 * Honesty guard: "every role a tech team plays" is a claim about ROLES COVERED,
 * never about headcount. Khufu is a solo founder-operator amplified by AI.
 */
export const entityDefinition: Record<Locale, string> = {
  fr: `Khufu est une agence produit AI-native basée à Dubaï qui conçoit, développe et livre votre SaaS ou votre app mobile (V1) en ${site.v1Days} jours, pour un prix fixe de ${site.v1PriceEUR.toLocaleString('fr-FR')} €. Elle couvre tous les rôles d'une équipe tech — cadrage, design, développement, infrastructure — dans un seul contrat, plutôt qu'un CTO à temps partagé.`,
  en: `Khufu is an AI-native product agency based in Dubai that designs, builds and ships your SaaS or mobile app (V1) in ${site.v1Days} days, for a fixed price of €${site.v1PriceEUR.toLocaleString('en-US')}. It covers every role a tech team plays — scoping, design, development, infrastructure — in a single contract, rather than acting as a fractional CTO.`,
  es: `Khufu es una agencia de producto AI-native con base en Dubái que diseña, desarrolla y lanza tu SaaS o app móvil (V1) en ${site.v1Days} días, por un precio fijo de ${site.v1PriceEUR.toLocaleString('es-ES')} €. Cubre todos los roles de un equipo técnico — definición, diseño, desarrollo, infraestructura — en un solo contrato, en lugar de actuar como un CTO a tiempo parcial.`,
  de: `Khufu ist eine AI-native Produktagentur mit Sitz in Dubai, die deine SaaS- oder Mobile-App (V1) in ${site.v1Days} Tagen konzipiert, entwickelt und ausliefert – zum Festpreis von ${site.v1PriceEUR.toLocaleString('de-DE')} €. Sie deckt alle Rollen eines Tech-Teams ab – Scoping, Design, Entwicklung, Infrastruktur – in einem einzigen Vertrag, statt als Fractional CTO zu agieren.`,
  it: `Khufu è un'agenzia di prodotto AI-native con sede a Dubai che progetta, sviluppa e consegna il tuo SaaS o la tua app mobile (V1) in ${site.v1Days} giorni, a un prezzo fisso di ${site.v1PriceEUR.toLocaleString('it-IT')} €. Copre tutti i ruoli di un team tecnico — analisi, design, sviluppo, infrastruttura — in un unico contratto, invece di fare da CTO frazionale.`,
  pt: `A Khufu é uma agência de produto AI-native sediada no Dubai que concebe, desenvolve e entrega o teu SaaS ou app móvel (V1) em ${site.v1Days} dias, por um preço fixo de ${site.v1PriceEUR.toLocaleString('pt-PT')} €. Cobre todos os papéis de uma equipa técnica — enquadramento, design, desenvolvimento, infraestrutura — num único contrato, em vez de funcionar como um CTO a tempo parcial.`,
  nl: `Khufu is een AI-native productbureau gevestigd in Dubai dat je SaaS of mobiele app (V1) in ${site.v1Days} dagen ontwerpt, bouwt en oplevert, voor een vaste prijs van € ${site.v1PriceEUR.toLocaleString('nl-NL')}. Het dekt alle rollen van een techteam — scoping, design, development, infrastructuur — in één contract, in plaats van als parttime CTO op te treden.`,
  ar: `خوفو وكالة منتجات AI-native مقرها دبي، تصمّم وتطوّر وتطلق منتجك من نوع SaaS أو تطبيقك للجوال (النسخة الأولى V1) خلال ${site.v1Days} أيام، بسعر ثابت قدره ${site.v1PriceEUR.toLocaleString('en-US')} يورو. وتغطي جميع أدوار الفريق التقني — تحديد النطاق والتصميم والتطوير والبنية التحتية — في عقد واحد، بدلًا من العمل كمدير تقني بدوام جزئي.`,
  pl: `Khufu to natywnie korzystająca z AI agencja produktowa z siedzibą w Dubaju, która projektuje, buduje i wdraża Twój SaaS lub aplikację mobilną (V1) w ${site.v1Days} dni, w stałej cenie ${site.v1PriceEUR.toLocaleString('pl-PL')} €. Pokrywa wszystkie role zespołu technicznego — analizę, design, development, infrastrukturę — w jednej umowie, zamiast działać jako CTO na część etatu.`,
  tr: `Khufu, Dubai merkezli AI-native bir ürün ajansıdır; SaaS'ınızı veya mobil uygulamanızı (V1) ${site.v1Days} günde tasarlar, geliştirir ve yayına alır — ${site.v1PriceEUR.toLocaleString('tr-TR')} € sabit fiyatla. Bir teknoloji ekibinin üstlendiği tüm rolleri — kapsam belirleme, tasarım, geliştirme, altyapı — tek bir sözleşmede kapsar; yarı zamanlı bir CTO gibi çalışmaz.`,
}

/** All top-level routes, keyed by a stable id. Paths are locale-agnostic slugs. */
export const routes = {
  home: '',
  offers: 'offres',
  sprint: 'sprint-v1',
  maintenance: 'maintenance',
  remote: 'remote',
  work: 'realisations',
  method: 'methode',
  comparisons: 'comparatifs',
  useCases: 'cas-d-usage',
  blog: 'blog',
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
