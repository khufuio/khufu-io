/**
 * The week, drawn instead of described.
 *
 * Three things the offer rests on that a list of cards could not say, and the
 * schema draws all three (khufu HQ decision cmu0fbad):
 *   1. The clock only starts once the scope is settled — so the segment before
 *      day 1 is dashed, and the annotation above it says why.
 *   2. FRIDAY RUNS ON TWO TRACKS AT ONCE. The rail splits: a second lane rises
 *      above it, labelled "Vous", and rejoins. Adrien on the previous version,
 *      where Friday was one column of prose: « ça fait penser que nous on fait
 *      rien ». The client's testing day costs no production day precisely
 *      BECAUSE the technical track runs underneath it, and that is a drawing,
 *      not a paragraph.
 *   3. The booked week is ONE continuous span under a single bracket, and the
 *      last node is the only filled one — production is the only delivery
 *      criterion, so it is the only node drawn as arrived.
 *
 * ⛔ NO TIME OF DAY. The 06:00 UTC kickoff stays in the contract and off this
 * page (Adrien: « ça peut faire peur de dire 6am à quelqu'un »). Monday morning,
 * or nothing.
 *
 * ⚠️ EVERY DAY WEARS THE SAME OBJECT: a left rule and a "who" badge over its
 * line. That shape was Friday's alone until 2026-09-14, when Adrien validated it
 * and extended it: « le FORMAT du jour 5 — bordure gauche + badge d'acteur — est
 * validé : applique-le à TOUS les jours, pour la cohérence ». A badge on one day
 * out of eight reads as an exception; on all of them it reads as a column, and
 * the visitor sees at a glance that the week is ours and Friday is theirs. Day 0
 * is the client's — their brief, their answers — so it wears "Vous".
 *
 * ⚠️ The tag sits on its OWN line, never inline with the title — inline it pushed
 * the whole text block sideways, which is the layout bug Adrien reported.
 *
 * A server component: the SVG and the text ship as finished markup, and the
 * motion is CSS reacting to the `data-in` attribute the page's single observer
 * sets. Nothing animates anything but `opacity`, `transform` and
 * `stroke-dashoffset`, so the section cannot move layout.
 */
export type SprintTimelineStep = {
  /** Short label drawn on the node — "Jour 5". */
  day: string
  /** The calendar underneath it — "vendredi". This is what makes the week real. */
  weekday: string
  title: string
  /** The single-track days. Mutually exclusive with `lanes`. */
  body?: string
  /** Friday only: the two tracks that run at the same time. */
  lanes?: { you: string; us: string }
  /** Whose day it is, for the badge over `body`. Ignored when `lanes` is set. */
  actor?: 'you' | 'us'
}

/**
 * The digits of a day label — "Jours 2–3" → "2–3" — for the mobile calendar
 * tile, which shows the number and lets the weekday carry the word. The labels
 * are authored in French and filled from it for every untranslated locale, so
 * the digits are always ASCII; if a future label somehow carries none, the tile
 * falls back to the whole string rather than rendering empty.
 */
function dayNumbers(day: string): string {
  const digits = day.replace(/[^0-9\u2013-]/g, '').replace(/^-|-$/g, '')
  return digits || day
}

/** Six equal columns, so the SVG nodes sit exactly on the HTML grid's centres. */
const COLUMN_WIDTH = 200
const nodeX = (index: number): number => COLUMN_WIDTH / 2 + index * COLUMN_WIDTH

export function SprintTimeline({
  steps,
  scopeLabel,
  spanLabel,
  youLabel,
  usLabel,
  weekLetters,
}: {
  steps: SprintTimelineStep[]
  /** Annotation over day 0 — e.g. "Périmètre arrêté". */
  scopeLabel: string
  /** Annotation over the day 1 → day 7 bracket — e.g. "7 jours, lundi → dimanche". */
  spanLabel: string
  /** The client's track on Friday. */
  youLabel: string
  /** Ours, running underneath it. */
  usLabel: string
  /** Monday → Sunday, one narrow letter each, localized. Small screens only. */
  weekLetters: string[]
}) {
  const width = steps.length * COLUMN_WIDTH
  const first = nodeX(0)
  const last = nodeX(steps.length - 1)
  const clockStart = nodeX(1)
  const splitIndex = steps.findIndex((s) => s.lanes)
  const splitX = splitIndex >= 0 ? nodeX(splitIndex) : null

  return (
    <div data-reveal>
      {/* ---------------- Desktop: the horizontal schema ---------------- */}
      <div className="hidden lg:block">
        <svg
          viewBox={`0 0 ${width} 150`}
          className="w-full"
          role="img"
          aria-label={`${scopeLabel} — ${spanLabel}`}
        >
          {/* Annotation over day 0: the scope is settled before anything runs. */}
          <text
            x={first}
            y={20}
            textAnchor="middle"
            className="font-[family-name:var(--font-display)] text-[13px] font-medium"
            fill="var(--color-muted)"
            data-fade
            style={{ '--fade-delay': '150ms' } as React.CSSProperties}
          >
            {scopeLabel}
          </text>
          <line
            x1={first}
            y1={32}
            x2={first}
            y2={96}
            stroke="var(--color-line)"
            strokeWidth={1}
            data-fade
            style={{ '--fade-delay': '150ms' } as React.CSSProperties}
          />

          {/* Bracket over day 1 → day 7: the span written into the contract. */}
          <text
            x={(clockStart + last) / 2}
            y={20}
            textAnchor="middle"
            className="font-[family-name:var(--font-display)] text-[13px] font-semibold"
            fill="var(--color-accent-ink)"
            data-fade
            style={{ '--fade-delay': '900ms' } as React.CSSProperties}
          >
            {spanLabel}
          </text>
          <path
            d={`M${clockStart} 46 V34 H${last} V46`}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1.25}
            pathLength={1}
            data-draw
            style={{ '--draw-delay': '250ms' } as React.CSSProperties}
          />

          {/* Before the clock starts: drawn, but dashed. */}
          <line
            x1={first}
            y1={96}
            x2={clockStart}
            y2={96}
            stroke="var(--color-muted)"
            strokeWidth={1}
            strokeDasharray="3 5"
            data-fade
            style={{ '--fade-delay': '150ms' } as React.CSSProperties}
          />

          {/* The seven days themselves — the track that is ours all week. */}
          <path
            d={`M${clockStart} 96 H${last}`}
            fill="none"
            stroke="var(--color-muted)"
            strokeWidth={1}
            pathLength={1}
            data-draw
            style={{ '--draw-delay': '250ms' } as React.CSSProperties}
          />

          {/* Friday's second track: it rises off the rail, carries the client's
              day, and rejoins. The whole argument of the week, drawn once. */}
          {splitX !== null && (
            <g data-fade style={{ '--fade-delay': '1100ms' } as React.CSSProperties}>
              <path
                d={`M${splitX - 78} 96 C${splitX - 46} 96 ${splitX - 46} 66 ${splitX - 14} 66 H${splitX + 14} C${splitX + 46} 66 ${splitX + 46} 96 ${splitX + 78} 96`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.25}
                pathLength={1}
                data-draw
                style={{ '--draw-delay': '1100ms' } as React.CSSProperties}
              />
              <circle cx={splitX} cy={66} r={4.5} fill="var(--color-accent)" />
              <text
                x={splitX}
                y={56}
                textAnchor="middle"
                className="text-[11px] font-semibold tracking-[0.14em]"
                fill="var(--color-accent-ink)"
              >
                {youLabel.toUpperCase()}
              </text>
              <text
                x={splitX}
                y={116}
                textAnchor="middle"
                className="text-[11px] tracking-[0.14em]"
                fill="var(--color-muted)"
              >
                {usLabel.toUpperCase()}
              </text>
            </g>
          )}

          {steps.map((step, i) => {
            const x = nodeX(i)
            const isDelivery = i === steps.length - 1
            const accent = i === 0 || isDelivery || Boolean(step.lanes)
            return (
              <g
                key={step.day}
                data-fade
                style={{ '--fade-delay': `${250 + i * 130}ms` } as React.CSSProperties}
              >
                <circle
                  cx={x}
                  cy={96}
                  r={5}
                  fill={isDelivery ? 'var(--color-accent)' : 'var(--color-paper)'}
                  stroke={accent ? 'var(--color-accent)' : 'var(--color-muted)'}
                  strokeWidth={1.25}
                />
                <text
                  x={x}
                  y={step.lanes ? 134 : 122}
                  textAnchor="middle"
                  className="font-[family-name:var(--font-display)] text-[13px] font-semibold"
                  fill={isDelivery || step.lanes ? 'var(--color-accent-ink)' : 'var(--color-ink-2)'}
                >
                  {step.day}
                </text>
                <text
                  x={x}
                  y={step.lanes ? 148 : 138}
                  textAnchor="middle"
                  className="text-[11px]"
                  fill="var(--color-muted)"
                >
                  {step.weekday}
                </text>
              </g>
            )
          })}
        </svg>

        {/* What happens on each day, in the columns the schema's nodes sit on. */}
        <ol className="mt-6 grid grid-cols-6 gap-x-5">
          {steps.map((step, i) => (
            <li
              key={step.day}
              className={`border-t pt-4 ${step.lanes ? 'border-[var(--color-accent)]' : 'border-[var(--color-line)]'}`}
              data-reveal
              style={{ '--reveal-delay': `${300 + i * 110}ms` } as React.CSSProperties}
            >
              <h3 className="text-sm font-semibold text-balance">{step.title}</h3>
              <Lanes step={step} youLabel={youLabel} usLabel={usLabel} />
            </li>
          ))}
        </ol>
      </div>

      {/* ---------------- Mobile / tablet: the same run, vertical ---------------- */}
      <WeekStrip letters={weekLetters} youLabel={youLabel} />

      <ol className="flex flex-col gap-6 lg:hidden">
        {steps.map((step, i) => {
          const isDelivery = i === steps.length - 1
          const accent = i === 0 || isDelivery || Boolean(step.lanes)
          return (
            <li
              key={step.day}
              className="relative pl-14"
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              {/* One rail segment per step, from this tile down to the next, so
                  the rail stops on the last one instead of running past it.
                  `-bottom-6` spans the list's `gap-6`. */}
              {!isDelivery && (
                <span
                  aria-hidden
                  className="absolute top-10 -bottom-6 left-[19px] w-px bg-[var(--color-line)]"
                  data-rail-y
                />
              )}
              {/* The day as a calendar tile rather than a bullet: the column of
                  them is what turns this list into a week on a phone, and it
                  carries the label the text line used to repeat. */}
              <span
                aria-hidden
                // A day range is a number, so it stays LTR: in Arabic the bidi
                // algorithm otherwise flips "2–3" into "3–2".
                dir="ltr"
                className={`absolute top-0 left-0 flex size-10 items-center justify-center rounded-[11px] font-[family-name:var(--font-display)] text-sm font-bold ${
                  isDelivery
                    ? 'bg-[var(--color-accent)] text-white'
                    : accent
                      ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]'
                      : 'bg-[var(--color-paper-2)] text-[var(--color-muted)]'
                }`}
              >
                {dayNumbers(step.day)}
              </span>
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-muted)] uppercase">
                <span className="sr-only">{step.day} · </span>
                {step.weekday}
              </p>
              <h3 className="mt-0.5 font-semibold">{step.title}</h3>
              <Lanes step={step} youLabel={youLabel} usLabel={usLabel} />
            </li>
          )
        })}
      </ol>

      {/* The two annotations the desktop schema carries, as text on small screens. */}
      <p className="mt-7 text-sm text-[var(--color-muted)] lg:hidden">
        <span className="font-medium text-[var(--color-ink-2)]">{scopeLabel}</span> · {spanLabel}
      </p>
    </div>
  )
}

/**
 * Who does what on a day: a left rule, a badge, and the line it labels.
 *
 * Friday is the only day with TWO of them — that is the whole argument of the
 * week, and drawing the client's track next to ours is what stops the reader
 * thinking we sit it out (Adrien, on the version where Friday was one column of
 * prose: « ça fait penser que nous on fait rien »). Every other day has one, and
 * having one is what makes Friday's two legible as an exception.
 *
 * The tag sits above its line, never inline with it: inline, the badge shifted
 * the text block it was meant to label.
 */
function Lanes({
  step,
  youLabel,
  usLabel,
}: {
  step: SprintTimelineStep
  youLabel: string
  usLabel: string
}) {
  const rows = step.lanes
    ? [
        { label: youLabel, text: step.lanes.you, accent: true },
        { label: usLabel, text: step.lanes.us, accent: false },
      ]
    : step.body
      ? [{ label: step.actor === 'you' ? youLabel : usLabel, text: step.body, accent: step.actor === 'you' }]
      : []
  if (!rows.length) return null
  return (
    <div className="mt-3 flex flex-col gap-2.5">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`border-l-2 pl-3 ${row.accent ? 'border-[var(--color-accent)]' : 'border-[var(--color-line)]'}`}
        >
          <p
            className={`text-[10px] font-semibold tracking-[0.14em] uppercase ${
              row.accent ? 'text-[var(--color-accent-ink)]' : 'text-[var(--color-muted)]'
            }`}
          >
            {row.label}
          </p>
          <p className="mt-0.5 text-xs/[1.55] text-[var(--color-ink-2)] text-pretty sm:text-sm/[1.55] lg:text-xs/[1.6]">
            {row.text}
          </p>
        </div>
      ))}
    </div>
  )
}

/**
 * The week as one object, for small screens — the two lanes the desktop schema
 * draws on its rail, flattened into a calendar.
 *
 * It exists because of the acceptance criterion for this page: at 390×844 no
 * screen may be nothing but text, and the vertical run below is a list. Seven
 * cells, our track running under all of them, the client's track over Friday
 * alone, and Sunday filled because that is the day it goes live.
 *
 * The letters are computed from `Intl` by the page, so they are right in all ten
 * locales and cost no copy.
 */
function WeekStrip({ letters, youLabel }: { letters: string[]; youLabel: string }) {
  /** Friday is the shared day, Sunday is go-live — both indexed from Monday. */
  const FRIDAY = 4
  const SUNDAY = 6

  return (
    <div className="mb-9 lg:hidden" data-reveal>
      <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--color-accent-ink)] uppercase">
        {youLabel}
      </p>
      {/* ⛔ NOTHING LABELS THE LOWER RAIL. Adrien, 2026-09-14: « supprime le
          libellé "NOUS" de la bande (il n'apparaît pas sur les jours précédents,
          donc il n'a pas de sens isolé) ». The upper mark is the one that has to
          be read — it is the client's single day. */}
      <div className="mt-1.5 grid grid-cols-7 gap-1" aria-hidden>
        <span className="col-start-5 h-1.5 rounded-full bg-[var(--color-accent)]" />
      </div>

      <ul className="mt-2 grid grid-cols-7 gap-1">
        {letters.map((letter, i) => (
          <li
            key={i}
            className={`flex h-9 items-center justify-center rounded-[7px] text-[11px] font-semibold uppercase ${
              i === SUNDAY
                ? 'bg-[var(--color-accent)] text-white'
                : i === FRIDAY
                  ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]'
                  : 'bg-[var(--color-paper-2)] text-[var(--color-muted)]'
            }`}
          >
            {letter}
          </li>
        ))}
      </ul>

      <div className="mt-2 grid grid-cols-7 gap-1" aria-hidden>
        <span className="col-span-7 h-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-muted)_32%,transparent)]" />
      </div>
    </div>
  )
}
