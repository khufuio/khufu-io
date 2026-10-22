import type { Metadata } from 'next'
import { defaultLocale, isLocale, localeHrefLang, type Locale } from '@/i18n/config'
import { href, site, sprintHref } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { EmailLink } from '@/components/ui/emailLink'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { BreadcrumbJsonLd, FaqJsonLd, JsonLd } from '@/components/seo/jsonLd'
import {
  fillTokens,
  formatProofDate,
  proofCopy as c,
  proofGap,
  proofProduct,
  proofProducts,
  proofSurfaceLabel,
  proofVerifiedOn,
} from '@/content/proof'

/*
 * /preuve — dated facts, nothing else. Every figure comes from
 * src/content/proof.ts, whose header lists the source of each one and what was
 * left out on purpose (the V1 Scoper, OneStore.link's first day of code).
 */

/** The chart's scale: the longest V1, so the 7-day mark sits where it really falls. */
const SCALE_DAYS = Math.max(...proofProducts.map((p) => p.days))
const OFFER_DAYS = site.v1Days

/** Values every templated string may use — derived from the data, never typed. */
function tokens(locale: Locale): Record<string, string> {
  return {
    osl: proofProduct('onestore-link').duration[locale],
    traqio: proofProduct('traqio').duration[locale],
    clokizi: proofProduct('clokizi').duration[locale],
    herbacrm: proofProduct('herbacrm').duration[locale],
    verified: formatProofDate(locale, proofVerifiedOn, { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : defaultLocale
  return buildMetadata({
    locale: loc,
    routeKey: 'proof',
    title: c.metaTitle[loc],
    description: fillTokens(c.metaDescription[loc], tokens(loc)),
  })
}

export default async function ProofPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = tokens(locale)
  const pageUrl = `${site.url}${href(locale, 'proof')}`

  const faq = c.faq.map((item) => ({ q: item.q[locale], a: fillTokens(item.a[locale], t) }))
  // The references question is drawn as its own block (it carries the page's
  // one email door); the JSON-LD keeps all five.
  const [refsQ] = c.faq.filter((item) => 'ask' in item)
  const visibleFaq = faq.filter((item) => item.q !== refsQ.q[locale])

  const gap = proofGap(locale)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: site.name, url: `${site.url}/${locale}` },
          { name: c.navLabel[locale], url: pageUrl },
        ]}
      />
      <FaqJsonLd items={faq} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#page`,
          url: pageUrl,
          name: c.metaTitle[locale],
          description: fillTokens(c.metaDescription[locale], t),
          inLanguage: localeHrefLang[locale],
          lastReviewed: proofVerifiedOn,
          publisher: { '@id': `${site.url}/#organization` },
          mainEntity: {
            '@type': 'ItemList',
            name: c.chartLabel[locale],
            itemListElement: proofProducts.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: p.name,
                url: p.url,
                applicationCategory: 'BusinessApplication',
                description: `${c.label.duration[locale]}: ${p.duration[locale]}. ${p.scope[locale]}`,
                ...(p.firstCode ? { dateCreated: p.firstCode.iso } : {}),
                creator: { '@id': `${site.url}/#organization` },
              },
            })),
          },
        }}
      />

      <PageHeader kicker={c.kicker[locale]} title={c.title[locale]} subtitle={c.subtitle[locale]} />

      {/* The answer, drawn: every V1 against the offer's 7 days. */}
      <section>
        <Container className="py-14 sm:py-20">
          <figure>
            <figcaption className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {c.chartLabel[locale]}
            </figcaption>
            <div className="relative mt-8">
              {/* The offer's line, at its true place on the scale. */}
              <div
                className="pointer-events-none absolute inset-y-0 z-10 border-s-2 border-dashed border-[var(--color-accent)]"
                style={{ insetInlineStart: `${(OFFER_DAYS / SCALE_DAYS) * 100}%` }}
                aria-hidden
              >
                <span className="absolute -top-6 start-1.5 whitespace-nowrap text-xs font-semibold text-[var(--color-accent-ink)]">
                  {c.offerMark[locale]}
                </span>
              </div>
              <ul className="space-y-5">
                {proofProducts.map((p) => {
                  const under = p.days <= OFFER_DAYS
                  return (
                    <li key={p.slug}>
                      <div className="flex items-baseline justify-between gap-3 text-sm">
                        <span className="font-semibold text-[var(--color-ink)]">{p.name}</span>
                        <span className={under ? 'font-semibold text-[var(--color-accent-ink)]' : 'text-[var(--color-ink-2)]'}>
                          {p.duration[locale]}
                        </span>
                      </div>
                      <div className="mt-1.5 h-3 rounded-full bg-[var(--color-paper-2)]">
                        <div
                          className={
                            under
                              ? 'h-3 min-w-3 rounded-full bg-[var(--color-accent)]'
                              : 'h-3 rounded-full bg-[var(--color-ink-2)]'
                          }
                          style={{ width: `${(p.days / SCALE_DAYS) * 100}%` }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </figure>

          <div className="mt-12 max-w-3xl rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em]">
              {c.gapTitle[locale]}
            </h2>
            <p className="mt-2 text-[var(--color-ink-2)] text-pretty">{gap}</p>
          </div>
        </Container>
      </section>

      {/* One card per V1: what shipped, when the code started, where it is today. */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-14 sm:py-20">
          <ul className="grid gap-5 sm:grid-cols-2">
            {proofProducts.map((p) => (
              <li
                key={p.slug}
                className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                    {p.name}
                  </h2>
                  <p className="text-end">
                    <span className="block text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {c.label.duration[locale]}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-accent-ink)]">
                      {p.duration[locale]}
                    </span>
                  </p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.surfaces.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent-ink)]"
                    >
                      {proofSurfaceLabel[s][locale]}
                    </li>
                  ))}
                </ul>
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-[var(--color-ink)]">{c.label.firstCode[locale]}</dt>
                    <dd className="text-[var(--color-ink-2)]">
                      {p.firstCode ? (
                        <time dateTime={p.firstCode.iso}>
                          {formatProofDate(locale, p.firstCode.date, { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                      ) : (
                        p.noTimestamp?.[locale]
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--color-ink)]">{c.label.scope[locale]}</dt>
                    <dd className="text-[var(--color-ink-2)]">{p.scope[locale]}</dd>
                  </div>
                  {p.after && (
                    <div>
                      <dt className="font-semibold text-[var(--color-ink)]">{c.label.after[locale]}</dt>
                      <dd className="text-[var(--color-ink-2)]">{p.after[locale]}</dd>
                    </div>
                  )}
                </dl>
                <p className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-5 text-sm">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-ink)]">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    {c.live[locale]}
                    {/* A middle dot, not a comma: the Arabic comma is « ، ». */}
                    {p.signupOpen && ` · ${c.signupOpen[locale]}`}
                  </span>
                  <span aria-hidden className="text-[var(--color-muted)]">·</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="font-medium text-[var(--color-accent-ink)] hover:underline"
                  >
                    <bdi>{p.url.replace('https://', '')}</bdi>
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)]">{fillTokens(c.verified[locale], { date: t.verified })}</p>
        </Container>
      </section>

      {/* Former clients: the one thing a page cannot prove, so it is offered. */}
      <section>
        <Container className="py-14 sm:py-20">
          <div className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--color-line)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em]">
                {refsQ.q[locale]}
              </h2>
              <p className="mt-2 text-[var(--color-ink-2)] text-pretty">{refsQ.a[locale]}</p>
            </div>
            {/* Same look as ButtonLink 'secondary'. Not buttonClasses(): it lives in a
                'use client' module, and a server component calling it gets a
                client reference instead of a string (playbook §7). */}
            <EmailLink
              source="proof_references"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full px-5 text-sm font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-line)] ring-inset transition-colors hover:bg-[var(--color-paper-2)]"
            >
              {'ask' in refsQ ? refsQ.ask[locale] : site.email}
            </EmailLink>
          </div>

          <h2 className="mt-16 font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em]">
            {c.faqTitle[locale]}
          </h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion items={visibleFaq} locale={locale} defaultOpen={null} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={c.ctaTitle[locale]}
        body={c.ctaBody[locale]}
        buttonLabel={c.ctaButton[locale]}
        href={sprintHref(locale, 'proof')}
      />
    </>
  )
}
