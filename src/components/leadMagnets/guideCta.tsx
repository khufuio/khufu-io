import type { Locale } from '@/i18n/config'
import { ui } from '@/i18n/ui'
import { guidePath, type LeadMagnet } from '@/content/leadMagnets'
import { ButtonLink } from '@/components/ui/button'

/**
 * End-of-article offer: the guide that matches what the reader just read.
 *
 * The three landing pages are chrome-free by design — no nav, one action — so
 * nothing on the site linked to them and organic readers had no way in. This is
 * that way in. It replaces the in-article contact box, which repeated the same
 * copy as the CtaBanner at the bottom of the page word for word.
 */
export function GuideCta({
  locale,
  magnet,
  source,
}: {
  locale: Locale
  magnet: LeadMagnet
  /** Which surface produced the click — read back as the `src` param. */
  source: string
}) {
  return (
    <div className="mt-12 max-w-2xl rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-ink)]">
        {ui.freeGuide[locale]}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
        {magnet.title}
      </h2>
      <p className="mt-2 text-[var(--color-ink-2)] text-pretty">{magnet.subtitle}</p>

      <ul className="mt-5 flex flex-col gap-2">
        {magnet.takeaways.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-[var(--color-ink-2)]">
            <span className="mt-0.5 shrink-0 text-[var(--color-accent-ink)]" aria-hidden>
              •
            </span>
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <ButtonLink href={guidePath(magnet.slug, source)}>{ui.getTheGuide[locale]}</ButtonLink>
        <span className="text-xs text-[var(--color-muted)]">
          PDF · {magnet.pdfPages} {ui.pages[locale]} · {ui.inEnglish[locale]}
        </span>
      </div>
    </div>
  )
}
