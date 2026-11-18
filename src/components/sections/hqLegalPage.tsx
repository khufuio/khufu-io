import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { defaultLocale, isLocale } from '@/i18n/config'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { PolicyBlocks } from '@/components/ui/policyBlocks'
import { hqLegal, hqLegalLocales, type HqLegalKey } from '@/content/hqLegal'

// Khufu HQ legal pages (privacy, terms, data deletion) for Meta App Review.
// English only: every locale renders the English text and canonicalises to /en.

export function hqLegalMetadata(key: HqLegalKey): Metadata {
  const doc = hqLegal[key]
  const metadata = buildMetadata({
    locale: 'en',
    routeKey: key,
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternateLocales: hqLegalLocales,
  })
  // The metaTitle already ends with « · Khufu »: bypass the layout's `%s · Khufu` template.
  return { ...metadata, title: { absolute: doc.metaTitle } }
}

export function HqLegalPage({ docKey, locale: raw }: { docKey: HqLegalKey; locale: string }): ReactNode {
  const doc = hqLegal[docKey]
  const locale = isLocale(raw) ? raw : defaultLocale
  // Other locales read the English text: mark it as such (and LTR under Arabic).
  const fallback = locale === 'en' ? {} : { lang: 'en', dir: 'ltr' as const }

  return (
    <div {...fallback}>
      <PageHeader kicker="Khufu HQ" title={doc.title} subtitle={doc.updated} />
      <section>
        <Container className="py-16 sm:py-20">
          <PolicyBlocks blocks={doc.blocks} />
        </Container>
      </section>
    </div>
  )
}
