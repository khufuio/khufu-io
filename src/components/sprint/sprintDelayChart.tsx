/**
 * "How long before it is online" — the sprint against the two alternatives a
 * founder actually weighs, on the one axis both of them lose: time.
 *
 * ⛔ DELAY ONLY, NO PRICE. A price comparison needs a defensible figure for what
 * an agency charges and what a developer costs fully loaded, and we have none —
 * on the one page with an ad budget pointed at it, an invented number is the
 * most expensive kind of mistake (see the header note in sprintLanding.ts).
 * Both third-party figures below are published, dated and cited on the page:
 *
 *   - Recruitment, 12 weeks: Apec, "Pratiques de recrutement des cadres" (2023)
 *     — average time to hire a French cadre, all sectors. It measures the delay
 *     before somebody STARTS, which is why the bar keeps running afterwards:
 *     the build has not begun at that point.
 *     https://corporate.apec.fr/home/nos-etudes/toutes-nos-etudes/pratiques-de-recrutement-des-cadres-2023.html
 *   - Agency, 3 to 6 months: the range French MVP agencies publish for their own
 *     engagements ("l'accompagnement avec une agence de développement de MVP en
 *     France dure entre 3 et 6 mois").
 *     https://digitalunicorn.fr/agence-developpement-de-mvp-minimum-viable-product/
 *
 * ⚠️ The widths below and the labels in `sprintLanding.ts` describe the same
 * figures. Change one, change the other.
 *
 * A server component: the bars are plain elements with a percentage width, and
 * the fill is a `scaleX` transition CSS runs when the page's observer marks the
 * section in view. Nothing animates width or height, so nothing can shift layout.
 */
import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

/** The axis runs to six months — the far end of the published agency range. */
const SCALE_WEEKS = 26
const WEEKS_PER_MONTH = 4.33

const pct = (weeks: number): string => `${((weeks / SCALE_WEEKS) * 100).toFixed(1)}%`

/** The muted fill every non-Khufu bar uses, solid then fading out. */
const BAR_MUTED = 'color-mix(in srgb, var(--color-muted) 45%, transparent)'

type Row = {
  key: 'khufu' | 'agency' | 'hire'
  /** Solid part of the bar: the figure we can name. */
  solidWeeks: number
  /** Open part: the range's upper half, or "and it keeps running". */
  fadeWeeks: number
}

const rows: Row[] = [
  // 7 days, contractual — the only figure on this chart that is ours.
  { key: 'khufu', solidWeeks: 1, fadeWeeks: 0 },
  // 3 → 6 months.
  { key: 'agency', solidWeeks: 3 * WEEKS_PER_MONTH, fadeWeeks: 3 * WEEKS_PER_MONTH },
  // 12 weeks to sign; the development is still ahead, hence the open end.
  { key: 'hire', solidWeeks: 12, fadeWeeks: SCALE_WEEKS - 12 },
]

const ticks = [
  { weeks: 0, key: 'zero' as const, smallScreen: true },
  // Dropped below `sm`: at 390px it sits 50px from the "day 0" label and the two
  // collide. The axis reads fine with three marks.
  { weeks: WEEKS_PER_MONTH, key: 'oneMonth' as const, smallScreen: false },
  { weeks: 3 * WEEKS_PER_MONTH, key: 'threeMonths' as const, smallScreen: true },
  { weeks: SCALE_WEEKS, key: 'sixMonths' as const, smallScreen: true },
]

/**
 * The whole bar as one gradient: solid up to the figure we can name, then fading
 * out across the open part. The stop is relative to the bar's OWN width, which is
 * why it is recomputed from the two parts rather than reusing `pct`.
 */
function barFill(row: Row): string {
  if (row.fadeWeeks === 0) return `linear-gradient(${BAR_MUTED}, ${BAR_MUTED})`
  const stop = ((row.solidWeeks / (row.solidWeeks + row.fadeWeeks)) * 100).toFixed(1)
  return `linear-gradient(to right, ${BAR_MUTED} ${stop}%, transparent)`
}

export function SprintDelayChart({ locale }: { locale: Locale }) {
  const c = sprintLanding.delayChart

  return (
    <div data-reveal>
      {/* The axis. Labels sit under their tick, the last one pulled back inside
          the box so it can't overflow the container on a narrow screen. */}
      <div className="relative h-8" aria-hidden>
        {ticks.map((tick, i) => (
          <div
            key={tick.key}
            className={`absolute top-0 flex-col items-start ${tick.smallScreen ? 'flex' : 'hidden sm:flex'}`}
            style={{ left: pct(tick.weeks), transform: i === ticks.length - 1 ? 'translateX(-100%)' : undefined }}
          >
            <span className="block h-2 w-px bg-[var(--color-line)]" />
            <span className="mt-1.5 block text-[11px] tracking-wide whitespace-nowrap text-[var(--color-muted)]">
              {c.ticks[tick.key][locale]}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-7 border-t border-[var(--color-line)] pt-7">
        {rows.map((row, i) => {
          const isKhufu = row.key === 'khufu'
          const label = c.rows[row.key]
          return (
            <div key={row.key} data-reveal style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p
                  className={
                    isKhufu
                      ? 'font-[family-name:var(--font-display)] text-base font-bold text-[var(--color-ink)]'
                      : 'text-base text-[var(--color-ink-2)]'
                  }
                >
                  {label.name[locale]}
                </p>
                <p
                  className={`font-[family-name:var(--font-display)] text-sm font-semibold ${
                    isKhufu ? 'text-[var(--color-accent-ink)]' : 'text-[var(--color-muted)]'
                  }`}
                >
                  {label.value[locale]}
                </p>
              </div>

              {/* ⛔ ONE ELEMENT PER BAR, AND NO RAIL BEHIND IT (2026-09-15). The bar
                  used to be two rounded spans butted end to end — the named figure,
                  then the open range — over a 1px rail running the full width.
                  Adrien: « on voit le troncage entre les barres et on voit la line
                  derrière ». Two `rounded-full` ends meeting carve an hourglass
                  pinch at the junction, sub-pixel rounding at 150 %/200 % zoom
                  opens it into a gap, and both spans were semi-transparent, so the
                  rail showed through them. It read as a rendering bug, not as data.
                  Now the solid part and the fade are ONE background on ONE element,
                  so the only rounded ends are the two real ones and there is no
                  junction left to split. ⛔ Do not split it back into two spans, and
                  do not bring back a track under a translucent bar.
                  ⚠️ `mr-auto` keeps it anchored LEFT in /ar too: the axis ticks are
                  placed with a physical `left`, and so is the bar's scale origin. */}
              <div className="mt-3 h-1.5">
                <span
                  aria-hidden
                  data-bar
                  className={`mr-auto block h-1.5 rounded-full ${isKhufu ? 'bg-[var(--color-accent)]' : ''}`}
                  style={
                    {
                      width: pct(row.solidWeeks + row.fadeWeeks),
                      backgroundImage: isKhufu ? undefined : barFill(row),
                      '--bar-delay': `${200 + i * 120}ms`,
                    } as React.CSSProperties
                  }
                />
              </div>

              <p className="mt-2.5 max-w-xl text-sm text-[var(--color-muted)] text-pretty">{label.note[locale]}</p>
            </div>
          )
        })}
      </div>

      {/* Sourced on the page, deliberately: the two figures that are not ours
          are the ones a visitor is entitled to check. */}
      <p className="mt-8 max-w-2xl text-xs/[1.7] text-[var(--color-muted)] text-pretty">{c.sources[locale]}</p>
    </div>
  )
}
