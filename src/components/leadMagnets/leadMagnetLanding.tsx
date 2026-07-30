import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'
import { pdfPath, type LeadMagnet } from '@/content/leadMagnets'
import { Container } from '@/components/ui/container'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LeadMagnetJsonLd,
  OrganizationJsonLd,
} from '@/components/seo/jsonLd'
import { GuideBlocks } from './guideBlocks'
import { LeadMagnetForm } from './leadMagnetForm'
import { LeadMagnetView } from './leadMagnetView'

/**
 * Shared landing page for every lead magnet. Deliberately chrome-free: no site
 * navigation, one action on the page (email → PDF) repeated twice. Cold ad
 * traffic has one job here, and every extra link is a way to leave.
 */
export function LeadMagnetLanding({ magnet }: { magnet: LeadMagnet }) {
  const freeChapters = magnet.chapters.filter((c) => c.free)
  const url = `${site.url}/${magnet.slug}`

  return (
    <>
      <LeadMagnetView slug={magnet.slug} />
      <OrganizationJsonLd locale="en" />
      <LeadMagnetJsonLd
        name={magnet.title}
        description={magnet.metaDescription}
        url={url}
        pdfUrl={`${site.url}${pdfPath(magnet.slug)}`}
        updated={magnet.updated}
        audience={magnet.audience}
      />
      <FaqJsonLd items={magnet.faq} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Khufu', url: `${site.url}/en` },
          { name: magnet.label, url },
        ]}
      />

      <header className="border-b border-[var(--color-line)]">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/en"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[0.22em] text-[var(--color-ink)]"
          >
            KHUFU
          </Link>
          <span className="text-sm text-[var(--color-muted)]">Your V1, shipped in {site.v1Days} days</span>
        </Container>
      </header>

      <main id="main">
        {/* Hero — the offer and the form, both above the fold on desktop. */}
        <section className="bg-[var(--color-paper-2)]">
          <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                {magnet.eyebrow} · {magnet.pdfPages}-page PDF
              </p>
              {/* Sized between --text-h2 and --text-display: these headlines are long. */}
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-[length:clamp(2.1rem,4.4vw,3.5rem)]/[1.04] font-bold tracking-[-0.03em] text-balance">
                {magnet.title}
              </h1>
              <p className="mt-5 text-lg/[1.6] text-[var(--color-ink-2)] text-pretty">{magnet.subtitle}</p>

              <ul className="mt-8 flex flex-col gap-3">
                {magnet.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--color-ink-2)]">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-ink)]"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-10">
              <LeadMagnetForm slug={magnet.slug} placement="hero" />

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={site.founderPhoto}
                  alt={site.founder}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full object-cover"
                />
                <p className="text-sm text-[var(--color-ink-2)]">
                  Written by {site.founder}, founder of Khufu — an AI-native product agency in Dubai. He writes the
                  code on every sprint.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Intro + who it's for */}
        <section>
          <Container className="max-w-3xl py-14 sm:py-20">
            <div className="flex flex-col gap-5">
              {magnet.intro.map((p) => (
                <p key={p} className="text-[17px]/[1.7] text-[var(--color-ink-2)] text-pretty">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-line)] p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-ink)]">
                Who this is for
              </p>
              <p className="mt-2 text-[var(--color-ink-2)]">{magnet.audience}</p>
            </div>
          </Container>
        </section>

        {/* Outline — every chapter, so the value is visible before the email. */}
        <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)]">
          <Container className="max-w-3xl py-14 sm:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em]">
              What&rsquo;s inside
            </h2>
            <ol className="mt-10 flex flex-col gap-6">
              {magnet.chapters.map((chapter, i) => (
                <li key={chapter.id} className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-ink)]">{chapter.title}</h3>
                    <p className="mt-1 text-[var(--color-ink-2)]">{chapter.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Free chapters, in full — real content for readers, crawlers and generative engines. */}
        {freeChapters.length > 0 && (
          <section>
            <Container className="max-w-3xl py-14 sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                Read {freeChapters.length === 1 ? 'a chapter' : 'two chapters'} before you download
              </p>
              <div className="mt-10 flex flex-col gap-14">
                {freeChapters.map((chapter) => (
                  <article key={chapter.id} id={chapter.id}>
                    <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
                      {chapter.title}
                    </h2>
                    <p className="mt-3 text-[var(--color-muted)]">{chapter.summary}</p>
                    <div className="mt-7">
                      <GuideBlocks blocks={chapter.blocks} />
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* FAQ */}
        <section className="border-t border-[var(--color-line)]">
          <Container className="max-w-3xl py-14 sm:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em]">
              Questions
            </h2>
            <div className="mt-10">
              <FaqAccordion items={magnet.faq} locale="en" />
            </div>
          </Container>
        </section>

        {/* Second and last conversion point */}
        <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
                Get the full {magnet.pdfPages} pages
              </h2>
              <p className="mt-4 text-lg text-[var(--color-paper-2)] text-pretty">{magnet.cta.body}</p>
              <p className="mt-6 text-sm text-[#a3a3ad]">
                {magnet.label} · PDF · free · updated {magnet.updated}
              </p>
            </div>
            <LeadMagnetForm slug={magnet.slug} placement="footer" />
          </Container>
        </section>
      </main>

      <footer className="border-t border-[var(--color-line)]">
        <Container className="flex flex-col gap-3 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legal.entity} · Dubai, UAE
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-[var(--color-ink)]">
              {site.email}
            </a>
            <Link href="/en" className="hover:text-[var(--color-ink)]">
              khufu.io
            </Link>
            <Link href="/en/mentions-legales" className="hover:text-[var(--color-ink)]">
              Legal
            </Link>
            <Link href="/en/confidentialite" className="hover:text-[var(--color-ink)]">
              Privacy
            </Link>
          </nav>
        </Container>
      </footer>
    </>
  )
}
