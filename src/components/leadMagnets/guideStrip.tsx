import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import { ui } from '@/i18n/ui'
import { guidePath, leadMagnets } from '@/content/leadMagnets'
import { Container } from '@/components/ui/container'

/**
 * The three guides, listed together. Sits on the blog index, where a reader has
 * already shown they want the long-form version of the offer — the shortest
 * path from organic traffic to a captured lead.
 */
export function GuideStrip({ locale, source }: { locale: Locale; source: string }) {
  return (
    <section className="bg-[var(--color-paper-2)]">
      <Container className="py-16 sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em] text-balance">
          {ui.freeGuides[locale]}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--color-ink-2)] text-pretty">{ui.guidesIntro[locale]}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {leadMagnets.map((magnet) => (
            <Link
              key={magnet.slug}
              href={guidePath(magnet.slug, source)}
              className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-ink)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-ink)]">
                {ui.freeGuide[locale]}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-balance">
                {magnet.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--color-ink-2)] text-pretty">{magnet.subtitle}</p>
              <span className="mt-4 text-xs text-[var(--color-muted)]">
                PDF · {magnet.pdfPages} {ui.pages[locale]} · {ui.inEnglish[locale]}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
