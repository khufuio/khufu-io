import type { Metadata } from 'next'
import Link from 'next/link'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { useCases } from '@/content/geo'
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
    routeKey: 'useCases',
    title: dict.geo.useCasesMetaTitle,
    description: dict.geo.useCasesMetaDescription,
  })
}

export default async function UseCasesHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)

  return (
    <>
      <PageHeader kicker={dict.geo.useCasesMetaTitle} title={dict.geo.useCasesTitle} subtitle={dict.geo.useCasesSubtitle} />
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <Link
                key={u.slug}
                href={href(locale, 'useCases', u.slug)}
                className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7 transition-colors hover:border-[var(--color-ink)]"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-ink)]">
                  {u.persona[locale]}
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em]">
                  {u.title[locale]}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-ink-2)] text-pretty">{u.intro[locale]}</p>
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
