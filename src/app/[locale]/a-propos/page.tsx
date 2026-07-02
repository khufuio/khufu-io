import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site, foundingLocation } from '@/content/site'
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
    routeKey: 'about',
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const a = dict.about

  return (
    <>
      <PageHeader kicker={a.kicker} title={a.title} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl space-y-6 text-lg text-[var(--color-ink-2)] text-pretty">
            {a.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-14 grid gap-6 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Fondateur</dt>
              <dd className="mt-1 font-medium">{site.founder}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Basé à</dt>
              <dd className="mt-1 font-medium">{foundingLocation[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Contact</dt>
              <dd className="mt-1 font-medium">
                <a href={`mailto:${site.email}`} className="text-[var(--color-accent-ink)] hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={a.ctaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
