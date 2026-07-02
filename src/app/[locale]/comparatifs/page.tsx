import type { Metadata } from 'next'
import Link from 'next/link'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { comparisons } from '@/content/geo'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { CtaBanner } from '@/components/sections/ctaBanner'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'comparisons',
    title: dict.geo.comparisonsMetaTitle,
    description: dict.geo.comparisonsMetaDescription,
  })
}

export default async function ComparisonsHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)

  return (
    <>
      <PageHeader kicker={dict.geo.comparisonsMetaTitle} title={dict.geo.comparisonsTitle} subtitle={dict.geo.comparisonsSubtitle} />
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={href(locale, 'comparisons', c.slug)}
                className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7 transition-colors hover:border-[var(--color-ink)]"
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                  {c.title[locale]}
                </h2>
                <p className="mt-3 flex-1 text-[var(--color-ink-2)] text-pretty">{c.intro[locale]}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-ink)]">
                  {dict.common.learnMore}
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={dict.home.finalCtaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
