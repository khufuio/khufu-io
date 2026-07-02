import type { Metadata } from 'next'
import Image from 'next/image'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site, foundingLocation } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { SocialLinks } from '@/components/layout/socialLinks'
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
  const L = a.detailLabels

  return (
    <>
      <PageHeader kicker={a.kicker} title={a.title} />

      {/* Founder */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            <div>
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-paper-2)]">
                <Image
                  src={site.founderPhoto}
                  alt={site.founder}
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
              <SocialLinks className="mt-5 flex gap-2.5" />
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
                {site.founder}
              </h2>
              <p className="mt-1 text-[var(--color-accent-ink)]">{a.founderRole}</p>
              <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{a.founderBio}</p>

              <div className="mt-8 space-y-6 text-lg text-[var(--color-ink-2)] text-pretty">
                {a.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{L.founder}</dt>
              <dd className="mt-1 font-medium">{site.founder}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{L.basedIn}</dt>
              <dd className="mt-1 font-medium">{foundingLocation[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{L.contact}</dt>
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
