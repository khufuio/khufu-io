import { site, entityDefinition } from '@/content/site'
import type { Locale } from '@/i18n/config'

/** Inline a JSON-LD script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input flows in here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * Organization + ProfessionalService graph. This is the primary GEO asset:
 * it tells generative engines exactly who Khufu is, what it sells and for how
 * much, in a machine-readable form.
 */
export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        logo: `${site.url}/brand/khufu-k-white-on-indigo.png`,
        image: `${site.url}/brand/khufu-k-white-on-indigo.png`,
        description: entityDefinition[locale],
        founder: {
          '@type': 'Person',
          name: site.founder,
          jobTitle: 'Founder',
          image: `${site.url}${site.founderPhoto}`,
          sameAs: [site.social.linkedin, site.social.x, site.social.instagram, site.social.tiktok],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'A2, IFZA Business Park, Dubai Silicon Oasis',
          addressLocality: 'Dubai',
          postalCode: '341041',
          addressCountry: 'AE',
        },
        telephone: `+${site.whatsapp}`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: site.email,
            telephone: `+${site.whatsapp}`,
            url: `https://wa.me/${site.whatsapp}`,
            availableLanguage: ['fr', 'en', 'es'],
            areaServed: 'Worldwide',
          },
        ],
        areaServed: ['FR', 'BE', 'CH', 'LU', 'ES', 'AE', 'EU', 'Worldwide'],
        knowsAbout: [
          'SaaS development',
          'Mobile app development',
          'Product development',
          'AI-native software agency',
          'Next.js',
          'React Native',
          'NestJS',
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Sprint V1',
            description: `A SaaS or mobile app designed, built and shipped in ${site.v1Days} days, fixed price.`,
            price: site.v1PriceEUR,
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: 'Remote support',
            description: 'Senior product engineering, 100% remote, billed hourly (€200/h).',
            price: site.dailyRateEUR,
            priceCurrency: 'EUR',
            unitText: 'DAY',
          },
          {
            '@type': 'Offer',
            name: 'Full Maintenance',
            description: 'Monthly subscription: managed infrastructure, support with SLA and included development days.',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: locale,
      },
    ],
  }
  return <JsonLd data={data} />
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: 'P7D',
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
  return <JsonLd data={data} />
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
  return <JsonLd data={data} />
}

/** Real client reviews → Review nodes referencing the organization (no self-serving AggregateRating). */
export function ReviewsJsonLd({ reviews }: { reviews: { quote: string; author: string; role?: string }[] }) {
  if (reviews.length === 0) return null
  const data = {
    '@context': 'https://schema.org',
    '@graph': reviews.map((r) => ({
      '@type': 'Review',
      itemReviewed: { '@type': 'Organization', name: site.name, '@id': `${site.url}/#organization` },
      author: { '@type': 'Person', name: r.role ? `${r.author} — ${r.role}` : r.author },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5, worstRating: 1 },
      reviewBody: r.quote,
    })),
  }
  return <JsonLd data={data} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
  return <JsonLd data={data} />
}
