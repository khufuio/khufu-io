import Link from 'next/link'
import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { projects } from '@/content/projects'
import { approvedClients } from '@/content/clients'
import { testimonials } from '@/content/testimonials'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { OfferCards } from '@/components/sections/offerCards'
import { ProjectCard } from '@/components/sections/projectCard'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { FaqJsonLd, ReviewsJsonLd } from '@/components/seo/jsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(isLocale(locale) ? locale : 'fr')
  return {
    title: dict.meta.brandSuffix,
    description: dict.home.heroSubtitle,
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const h = dict.home
  const clients = approvedClients()

  // Featured on the home: a mix of SaaS + mobile.
  const featuredProjects = ['peach-farmer', 'onestore-link', 'clokizi']
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p))

  return (
    <>
      <FaqJsonLd items={dict.faq.items.map((i) => ({ q: i.q, a: i.a }))} />
      <ReviewsJsonLd reviews={testimonials.map((t) => ({ quote: t.quote, author: t.author, role: t.role }))} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-ink)]">
            {h.heroKicker}
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[length:var(--text-display)]/[0.98] font-bold tracking-[-0.03em] text-balance">
            {h.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-[var(--color-ink-2)] text-pretty">{h.heroSubtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={href(locale, 'contact')} size="lg">
              {h.heroPrimaryCta}
            </ButtonLink>
            <ButtonLink href={href(locale, 'work')} variant="secondary" size="lg">
              {h.heroSecondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-stretch gap-x-10 gap-y-6">
            {h.heroFigures.map((fig) => (
              <div key={fig.label} className="border-l-2 border-[var(--color-accent)] pl-4">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--color-ink)] sm:text-4xl">
                  {fig.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{fig.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {h.problemTitle}
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{h.problemBody}</p>
          </div>
        </Container>
      </section>

      {/* How we go fast */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-20 sm:py-28">
          <SectionHeading title={h.howTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {h.how.map((card, i) => (
              <div key={card.title} className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-ink)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-[var(--color-ink-2)]">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Offers */}
      <section id="offres">
        <Container className="py-20 sm:py-28">
          <SectionHeading kicker={dict.nav.offers} title={h.offersTitle} subtitle={h.offersSubtitle} />
          <div className="mt-12">
            <OfferCards locale={locale} dict={dict} />
          </div>
          <div className="mt-8">
            <ButtonLink href={href(locale, 'offers')} variant="ghost">
              {dict.common.learnMore} →
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Work */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-20 sm:py-28">
          <SectionHeading kicker={dict.nav.work} title={h.workTitle} subtitle={h.workSubtitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} locale={locale} dict={dict} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={href(locale, 'work')} variant="secondary">
              {h.workCta} →
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Clients — only rendered once agreements are confirmed (approved flag) */}
      {clients.length > 0 && (
        <section>
          <Container className="py-16">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {h.clientsTitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {clients.map((c) =>
                c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={c.slug}
                    src={c.logo}
                    alt={c.name}
                    style={{ height: 36 * (c.logoScale ?? 1) }}
                    className="w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <span
                    key={c.slug}
                    className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink-2)]"
                  >
                    {c.name}
                  </span>
                ),
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Testimonials — hidden until real reviews are added in content/testimonials.ts */}
      {testimonials.length > 0 && (
        <section className="bg-[var(--color-paper-2)]">
          <Container className="py-20 sm:py-28">
            <SectionHeading title={h.testimonialsTitle} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={i} className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7">
                  <blockquote className="flex-1 text-[var(--color-ink-2)] text-pretty">“{t.quote}”</blockquote>
                  <figcaption className="mt-6">
                    <div className="font-medium text-[var(--color-ink)]">{t.author}</div>
                    {t.role && <div className="text-sm text-[var(--color-muted)]">{t.role}</div>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section>
        <Container className="py-20 sm:py-28">
          <SectionHeading title={dict.faq.title} />
          <div className="mt-10">
            <FaqAccordion items={dict.faq.items} />
          </div>
        </Container>
      </section>

      {/* Resources — internal links to comparison / use-case content (GEO) */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="grid gap-5 py-16 sm:py-20 sm:grid-cols-2">
          {[
            { href: href(locale, 'comparisons'), title: dict.geo.comparisonsTitle, sub: dict.geo.comparisonsSubtitle },
            { href: href(locale, 'useCases'), title: dict.geo.useCasesTitle, sub: dict.geo.useCasesSubtitle },
          ].map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-8 transition-colors hover:border-[var(--color-ink)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">{r.title}</h3>
              <p className="mt-2 flex-1 text-[var(--color-ink-2)] text-pretty">{r.sub}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-ink)]">
                {dict.common.learnMore}
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          ))}
        </Container>
      </section>

      {/* Final CTA */}
      <section>
        <Container>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] px-8 py-16 text-center text-[var(--color-paper)] sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {h.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-paper-2)] text-pretty">{h.finalCtaBody}</p>
            <div className="mt-8">
              <ButtonLink href={href(locale, 'contact')} size="lg">
                {h.finalCtaButton}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-[color-mix(in_srgb,var(--color-paper)_60%,transparent)]">{site.email}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
