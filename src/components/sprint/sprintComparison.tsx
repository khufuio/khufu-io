import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

/**
 * The honest comparison: the three alternatives a founder is actually weighing
 * (quote-based agency, freelancer, no-code) next to the sprint.
 *
 * A real <table>, like `ctoComparison` — a comparison IS tabular data, which is
 * how it reads to a screen reader and to the generative engines that scrape this
 * page. Below `lg` the four columns can't breathe, so each criterion becomes a
 * card with its four answers stacked.
 */
export function SprintComparison({ locale }: { locale: Locale }) {
  const c = sprintLanding.comparison
  const alternatives = [
    { key: 'agency', label: c.agency[locale] },
    { key: 'freelance', label: c.freelance[locale] },
    { key: 'noCode', label: c.noCode[locale] },
  ] as const

  return (
    <div>
      {/* Mobile / tablet: one card per criterion */}
      <div className="grid gap-4 lg:hidden">
        {c.rows.map((row) => (
          <div
            key={row.aspect[locale]}
            className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {row.aspect[locale]}
            </p>
            <dl className="mt-4 flex flex-col gap-3">
              {alternatives.map((alt) => (
                <div key={alt.key}>
                  <dt className="text-sm font-semibold text-[var(--color-ink-2)]">{alt.label}</dt>
                  <dd className="text-sm text-[var(--color-muted)]">{row[alt.key][locale]}</dd>
                </div>
              ))}
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-accent-soft)] p-4">
                <dt className="text-sm font-bold text-[var(--color-accent-ink)]">{c.khufu[locale]}</dt>
                <dd className="text-sm font-medium text-[var(--color-ink)]">{row.khufu[locale]}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop: the actual comparison table */}
      <div className="hidden overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-line)]">
              <th
                scope="col"
                className="w-[15%] px-5 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]"
              >
                {c.aspectLabel[locale]}
              </th>
              {alternatives.map((alt) => (
                <th key={alt.key} scope="col" className="px-5 py-5 text-sm font-semibold text-[var(--color-ink-2)]">
                  {alt.label}
                </th>
              ))}
              <th
                scope="col"
                className="bg-[var(--color-accent-soft)] px-5 py-5 text-sm font-bold text-[var(--color-accent-ink)]"
              >
                {c.khufu[locale]}
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row.aspect[locale]} className="border-b border-[var(--color-line)] last:border-b-0">
                <th scope="row" className="px-5 py-5 align-top text-sm font-medium text-[var(--color-muted)]">
                  {row.aspect[locale]}
                </th>
                {alternatives.map((alt) => (
                  <td key={alt.key} className="px-5 py-5 align-top text-sm text-[var(--color-ink-2)]">
                    {row[alt.key][locale]}
                  </td>
                ))}
                <td className="bg-[var(--color-accent-soft)] px-5 py-5 align-top text-sm font-medium text-[var(--color-ink)]">
                  {row.khufu[locale]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-3xl text-sm text-[var(--color-muted)] text-pretty">{c.note[locale]}</p>
    </div>
  )
}
