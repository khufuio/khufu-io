import { site, entityDefinition, href } from '@/content/site'
import { toUsd } from '@/lib/currency'
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
            // Both currencies are firm, billable list prices — advertise each.
            priceSpecification: [
              { '@type': 'PriceSpecification', price: site.v1PriceEUR, priceCurrency: 'EUR' },
              { '@type': 'PriceSpecification', price: toUsd(site.v1PriceEUR), priceCurrency: 'USD' },
            ],
          },
          {
            '@type': 'Offer',
            name: 'Remote support',
            description: `Senior product engineering, 100% remote, billed hourly (€${site.hourlyRateEUR}/h or $${toUsd(site.hourlyRateEUR)}/h).`,
            priceSpecification: [
              { '@type': 'UnitPriceSpecification', price: site.dailyRateEUR, priceCurrency: 'EUR', unitText: 'DAY' },
              { '@type': 'UnitPriceSpecification', price: toUsd(site.dailyRateEUR), priceCurrency: 'USD', unitText: 'DAY' },
            ],
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

/** BlogPosting for an article — helps search + generative engines cite it. */
export function ArticleJsonLd({
  headline,
  description,
  url,
  image,
  datePublished,
  locale,
}: {
  headline: string
  description: string
  url: string
  image?: string
  datePublished: string
  locale: Locale
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    mainEntityOfPage: url,
    ...(image && { image }),
    datePublished,
    dateModified: datePublished,
    inLanguage: locale,
    // Named author = E-E-A-T signal for search + citation by generative engines.
    author: {
      '@type': 'Person',
      name: site.founder,
      url: `${site.url}${href(locale, 'about')}`,
    },
    publisher: { '@id': `${site.url}/#organization` },
  }
  return <JsonLd data={data} />
}

/** Service node for an offer — makes the productized service machine-readable. */
export function ServiceJsonLd({
  name,
  description,
  priceEUR,
}: {
  name: string
  description: string
  priceEUR?: number
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: 'Worldwide',
    ...(priceEUR
      ? {
          offers: {
            '@type': 'Offer',
            // EUR and USD are both firm, billable list prices — advertise each.
            priceSpecification: [
              { '@type': 'PriceSpecification', price: priceEUR, priceCurrency: 'EUR' },
              { '@type': 'PriceSpecification', price: toUsd(priceEUR), priceCurrency: 'USD' },
            ],
          },
        }
      : {}),
  }
  return <JsonLd data={data} />
}

/**
 * A downloadable guide: the Article a search engine ranks, plus the free
 * DigitalDocument a generative engine can cite and link to. Both point at the
 * same landing page so the offer stays attached to Khufu.
 */
export function LeadMagnetJsonLd({
  name,
  description,
  url,
  pdfUrl,
  updated,
  audience,
}: {
  name: string
  description: string
  url: string
  pdfUrl: string
  updated: string
  audience: string
}) {
  const author = {
    '@type': 'Person',
    name: site.founder,
    url: `${site.url}${href('en', 'about')}`,
  }
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: name,
        description,
        url,
        mainEntityOfPage: url,
        inLanguage: 'en',
        datePublished: updated,
        dateModified: updated,
        author,
        publisher: { '@id': `${site.url}/#organization` },
        audience: { '@type': 'Audience', audienceType: audience },
        isAccessibleForFree: true,
      },
      {
        '@type': 'DigitalDocument',
        '@id': `${url}#pdf`,
        name,
        description,
        url: pdfUrl,
        encodingFormat: 'application/pdf',
        inLanguage: 'en',
        dateModified: updated,
        author,
        publisher: { '@id': `${site.url}/#organization` },
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
      },
    ],
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
