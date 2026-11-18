import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import {
  labyrinthPrivacy,
  labyrinthPrivacyFor,
  labyrinthPrivacyLocales,
} from '@/content/labyrinthPrivacy'
import { PolicyBlocks } from '@/components/ui/policyBlocks'

// Blind Labyrinth app privacy policy — the URL the App Store and Play listings
// point to (todo cmwectyu). Locales without a translation render the English
// text, and canonicalise to the English page so they are not duplicates.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = labyrinthPrivacyFor(isLocale(locale) ? locale : defaultLocale)
  const doc = labyrinthPrivacy[loc]
  return buildMetadata({
    locale: loc,
    routeKey: 'labyrinthPrivacy',
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternateLocales: labyrinthPrivacyLocales,
  })
}

export default async function LabyrinthPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<ReactNode> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const loc = labyrinthPrivacyFor(locale)
  const doc = labyrinthPrivacy[loc]

  // A fallback locale reads the English text: mark it as such (and LTR under Arabic).
  const fallback = loc === locale ? {} : { lang: loc, dir: 'ltr' as const }

  return (
    <div {...fallback}>
      <PageHeader kicker="Blind Labyrinth" title={doc.title} subtitle={doc.updated} />
      <section>
        <Container className="py-16 sm:py-20">
          <PolicyBlocks blocks={doc.blocks} />
        </Container>
      </section>
    </div>
  )
}
