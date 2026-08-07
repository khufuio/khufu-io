import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/getDictionary'
import { PricedText } from '@/components/ui/price'

/**
 * The positioning block: a fractional CTO's deliverable next to ours.
 *
 * Rendered as a real <table> (a comparison IS tabular data — it reads correctly
 * to screen readers and to the generative engines that scrape the page), with a
 * stacked card layout below `md` where three columns can't breathe.
 */
export function CtoComparison({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home

  return (
    <div>
      {/* Mobile: one card per row, the two answers stacked */}
      <div className="grid gap-4 md:hidden">
        {h.ctoRows.map((row) => (
          <div key={row.aspect} className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">{row.aspect}</p>
            <p className="mt-3 text-sm text-[var(--color-muted)] line-through decoration-[var(--color-line)]">
              <span className="font-semibold text-[var(--color-ink-2)] no-underline">{h.ctoOtherLabel} : </span>
              <PricedText text={row.other} locale={locale} />
            </p>
            <p className="mt-2 text-[var(--color-ink)]">
              <span className="font-semibold text-[var(--color-accent-ink)]">{h.ctoKhufuLabel} : </span>
              <PricedText text={row.khufu} locale={locale} />
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: the actual comparison table */}
      <div className="hidden overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-line)]">
              <th scope="col" className="w-1/4 px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {dict.geo.aspectLabel}
              </th>
              <th scope="col" className="px-6 py-5 text-sm font-semibold text-[var(--color-ink-2)]">
                {h.ctoOtherLabel}
              </th>
              <th
                scope="col"
                className="bg-[var(--color-accent-soft)] px-6 py-5 text-sm font-bold text-[var(--color-accent-ink)]"
              >
                {h.ctoKhufuLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {h.ctoRows.map((row) => (
              <tr key={row.aspect} className="border-b border-[var(--color-line)] last:border-b-0">
                <th scope="row" className="px-6 py-5 align-top text-sm font-medium text-[var(--color-muted)]">
                  {row.aspect}
                </th>
                <td className="px-6 py-5 align-top text-[var(--color-ink-2)]">
                  <PricedText text={row.other} locale={locale} />
                </td>
                <td className="bg-[var(--color-accent-soft)] px-6 py-5 align-top font-medium text-[var(--color-ink)]">
                  <PricedText text={row.khufu} locale={locale} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-2xl text-sm text-[var(--color-muted)] text-pretty">{h.ctoNote}</p>
    </div>
  )
}

/** The concrete backing for "a full team": every role the sprint covers. */
export function TeamRoles({ dict }: { dict: Dictionary }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {dict.home.teamRoles.map((role) => (
        <li
          key={role}
          className="flex items-center gap-3 rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white px-5 py-4 font-medium text-[var(--color-ink-2)]"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
          {role}
        </li>
      ))}
    </ul>
  )
}
