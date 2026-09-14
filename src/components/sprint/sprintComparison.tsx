import type { Locale } from '@/i18n/config'
import { sprintLanding, type CompareMark } from '@/content/sprintLanding'

/**
 * The alternatives, as a matrix of marks — not a wall of prose.
 *
 * Adrien on the paragraph table this replaces (2026-09-13): « beaucoup beaucoup
 * de texte et de place, très peu de compréhension visuelle, encore une fois faut
 * retravailler le truc ». Every cell is now a glyph plus two or three words, so
 * the column that wins is visible before a single cell is read.
 *
 * ⛔ NOT ONE FIGURE IN HERE, and that is the hard part of the rule (khufu HQ
 * decision cmu0hv4c). The delay is the only axis we can source, and it already
 * has its own chart directly above. A grid of unsourced numbers reads as
 * measured, which makes it worse than the paragraph it replaced — so the cells
 * compare what we can hold: the price shape, who owns the code, who builds, and
 * who pays for an overrun.
 *
 * The mark is never colour alone: `yes` is a check, `mixed` a dash, `no` a
 * cross, each with its own shape and its own text label.
 *
 * ⛔ KHUFU IS THE FIRST COLUMN, not the last. Adrien, 2026-09-14: « Khufu passe
 * en PREMIÈRE colonne, pas en dernière, et c'est elle qui est accentuée ». A
 * comparison is read left to right: last place is where a reader arrives already
 * having decided, and where the eye goes only if it finishes the row. First is
 * the reference the other three are measured against — which is the claim the
 * table exists to make.
 */

const glyph: Record<CompareMark, React.ReactNode> = {
  yes: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  mixed: <path d="M6 12h12" />,
  no: <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />,
}

function Mark({ mark, on = 'light' }: { mark: CompareMark; on?: 'light' | 'accent' }) {
  const tone =
    on === 'accent'
      ? 'stroke-[var(--color-accent-ink)]'
      : mark === 'no'
        ? 'stroke-[color-mix(in_srgb,var(--color-muted)_70%,transparent)]'
        : 'stroke-[var(--color-muted)]'
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`size-[18px] shrink-0 ${tone}`}
      fill="none"
      strokeWidth={mark === 'yes' ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyph[mark]}
    </svg>
  )
}

export function SprintComparison({ locale }: { locale: Locale }) {
  const c = sprintLanding.comparison
  const columns = [
    { key: 'agency', label: c.agency[locale] },
    { key: 'freelance', label: c.freelance[locale] },
    { key: 'noCode', label: c.noCode[locale] },
  ] as const

  return (
    <div data-reveal>
      {/* Mobile: one card per criterion, its four answers in a 2×2 grid. Four
          columns cannot breathe at 390px, and a table that scrolls sideways on a
          landing is a table nobody reads. */}
      <div className="grid gap-3 lg:hidden">
        {c.rows.map((row) => (
          <div
            key={row.aspect[locale]}
            className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-5"
          >
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-muted)] uppercase">
              {row.aspect[locale]}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-accent-soft)] px-3 py-2.5">
                <p className="text-[11px] font-semibold tracking-wide text-[var(--color-accent-ink)] uppercase">
                  {c.khufu[locale]}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]">
                  <Mark mark={row.khufu.mark} on="accent" />
                  {row.khufu.label[locale]}
                </p>
              </div>
              {columns.map((col) => (
                <div key={col.key} className="rounded-[var(--radius-lg)] bg-[var(--color-paper-2)] px-3 py-2.5">
                  <p className="text-[11px] tracking-wide text-[var(--color-muted)] uppercase">{col.label}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-ink-2)]">
                    <Mark mark={row[col.key].mark} />
                    {row[col.key].label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: a real <table> — a comparison IS tabular data, which is how it
          reads to a screen reader and to the engines that scrape this page. */}
      <div className="hidden overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-line)]">
              <th
                scope="col"
                className="w-[24%] px-6 py-5 text-xs font-semibold tracking-[0.14em] text-[var(--color-muted)] uppercase"
              >
                {c.aspectLabel[locale]}
              </th>
              <th
                scope="col"
                className="bg-[var(--color-accent-soft)] px-6 py-5 font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-ink)]"
              >
                {c.khufu[locale]}
              </th>
              {columns.map((col) => (
                <th key={col.key} scope="col" className="px-6 py-5 text-sm font-medium text-[var(--color-muted)]">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row.aspect[locale]} className="border-b border-[var(--color-line)] last:border-b-0">
                <th scope="row" className="px-6 py-5 text-sm font-medium text-[var(--color-ink)]">
                  {row.aspect[locale]}
                </th>
                <td className="bg-[var(--color-accent-soft)] px-6 py-5 text-sm font-semibold text-[var(--color-ink)]">
                  <span className="flex items-center gap-2">
                    <Mark mark={row.khufu.mark} on="accent" />
                    {row.khufu.label[locale]}
                  </span>
                </td>
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-5 text-sm text-[var(--color-ink-2)]">
                    <span className="flex items-center gap-2">
                      <Mark mark={row[col.key].mark} />
                      {row[col.key].label[locale]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-2xl text-sm text-[var(--color-muted)] text-pretty">{c.note[locale]}</p>
    </div>
  )
}
