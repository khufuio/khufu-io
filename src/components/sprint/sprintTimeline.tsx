/**
 * The week, drawn instead of described.
 *
 * The page already listed the run as cards; what cards could not say is the two
 * things the offer actually rests on, and the schema draws both (khufu HQ
 * decision cmu0fbad):
 *   1. The clock only starts once the scope is settled — so the segment before
 *      day 1 is dashed, and the annotation above it says why.
 *   2. The week is a CALENDAR, not a duration: Monday 06:00 UTC → Sunday, with
 *      the client's own acceptance-testing day (Friday) marked as theirs by a
 *      ring, and production as the only filled node.
 *
 * It is a server component: the SVG and the text ship as finished markup, and
 * the motion is CSS reacting to the `data-in` attribute that the page's single
 * observer sets (see sprintMotion.tsx and the motion block in globals.css).
 * Nothing here animates anything but `opacity`, `transform` and
 * `stroke-dashoffset`, so the section cannot move layout.
 */
export type SprintTimelineStep = {
  /** Short label drawn on the node — "Jour 5". */
  day: string
  /** The calendar underneath it — "vendredi". This is what makes the week real. */
  weekday: string
  title: string
  body: string
  /** The client's day: ringed in the schema, tagged in the column. */
  client?: boolean
}

/** Six equal columns, so the SVG nodes sit exactly on the HTML grid's centres. */
const COLUMN_WIDTH = 200
const nodeX = (index: number): number => COLUMN_WIDTH / 2 + index * COLUMN_WIDTH

export function SprintTimeline({
  steps,
  scopeLabel,
  spanLabel,
  clientLabel,
}: {
  steps: SprintTimelineStep[]
  /** Annotation over day 0 — e.g. "Périmètre arrêté". */
  scopeLabel: string
  /** Annotation over the bracket spanning day 1 → day 7 — e.g. "7 jours, lundi → dimanche". */
  spanLabel: string
  /** Tag on the client's own day — e.g. "Vous". */
  clientLabel: string
}) {
  const width = steps.length * COLUMN_WIDTH
  const first = nodeX(0)
  const last = nodeX(steps.length - 1)
  const clockStart = nodeX(1)

  return (
    <div data-reveal>
      {/* ---------------- Desktop: the horizontal schema ---------------- */}
      <div className="hidden lg:block">
        <svg
          viewBox={`0 0 ${width} 140`}
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
            y2={78}
            stroke="var(--color-line)"
            strokeWidth={1}
            data-fade
            style={{ '--fade-delay': '150ms' } as React.CSSProperties}
          />

          {/* Bracket over day 1 → day 7: the span that is written into the contract. */}
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
            y1={86}
            x2={clockStart}
            y2={86}
            stroke="var(--color-muted)"
            strokeWidth={1}
            strokeDasharray="3 5"
            data-fade
            style={{ '--fade-delay': '150ms' } as React.CSSProperties}
          />

          {/* The seven days themselves. */}
          <path
            d={`M${clockStart} 86 H${last}`}
            fill="none"
            stroke="var(--color-muted)"
            strokeWidth={1}
            pathLength={1}
            data-draw
            style={{ '--draw-delay': '250ms' } as React.CSSProperties}
          />

          {steps.map((step, i) => {
            const x = nodeX(i)
            const isDelivery = i === steps.length - 1
            const accent = i === 0 || isDelivery || step.client
            return (
              <g
                key={step.day}
                data-fade
                style={{ '--fade-delay': `${250 + i * 130}ms` } as React.CSSProperties}
              >
                {/* The client's day wears a ring: it is the only one that asks
                    something of them, and it is an argument, not a constraint. */}
                {step.client && (
                  <circle cx={x} cy={86} r={9.5} fill="none" stroke="var(--color-accent)" strokeWidth={1} opacity={0.4} />
                )}
                <circle
                  cx={x}
                  cy={86}
                  r={5}
                  fill={isDelivery ? 'var(--color-accent)' : 'var(--color-paper)'}
                  stroke={accent ? 'var(--color-accent)' : 'var(--color-muted)'}
                  strokeWidth={1.25}
                />
                <text
                  x={x}
                  y={112}
                  textAnchor="middle"
                  className="font-[family-name:var(--font-display)] text-[13px] font-semibold"
                  fill={isDelivery || step.client ? 'var(--color-accent-ink)' : 'var(--color-ink-2)'}
                >
                  {step.day}
                </text>
                <text
                  x={x}
                  y={130}
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
              className={`border-t pt-4 ${
                step.client ? 'border-[var(--color-accent)]' : 'border-[var(--color-line)]'
              }`}
              data-reveal
              style={{ '--reveal-delay': `${300 + i * 110}ms` } as React.CSSProperties}
            >
              {step.client && (
                <p className="mb-2 inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-[var(--color-accent-ink)] uppercase">
                  {clientLabel}
                </p>
              )}
              <h3 className="text-sm font-semibold text-balance">{step.title}</h3>
              <p className="mt-2 text-xs/[1.6] text-[var(--color-ink-2)] text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* ---------------- Mobile / tablet: the same run, vertical ---------------- */}
      <ol className="flex flex-col gap-8 lg:hidden">
        {steps.map((step, i) => {
          const isDelivery = i === steps.length - 1
          return (
            <li
              key={step.day}
              className="relative pl-8"
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              {/* One rail segment per step, from this node down to the next, so
                  the rail stops exactly on the last node instead of running past
                  it — and draws itself step by step as the list comes into view.
                  `-bottom-8` spans the list's `gap-8`. */}
              {!isDelivery && (
                <span
                  aria-hidden
                  className="absolute top-[9px] -bottom-8 left-[5px] w-px bg-[var(--color-line)]"
                  data-rail-y
                />
              )}
              <span
                aria-hidden
                className={`absolute top-[4px] left-0 size-[11px] rounded-full border-[1.25px] ${
                  isDelivery
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                    : i === 0 || step.client
                      ? 'border-[var(--color-accent)] bg-[var(--color-paper)]'
                      : 'border-[var(--color-muted)] bg-[var(--color-paper)]'
                }`}
              />
              <p
                className={`font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] ${
                  isDelivery || step.client ? 'text-[var(--color-accent-ink)]' : 'text-[var(--color-muted)]'
                }`}
              >
                {step.day} <span className="font-normal text-[var(--color-muted)] normal-case">· {step.weekday}</span>
              </p>
              <h3 className="mt-1 font-semibold">
                {step.title}
                {step.client && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 align-middle text-[10px] font-semibold tracking-[0.14em] text-[var(--color-accent-ink)] uppercase">
                    {clientLabel}
                  </span>
                )}
              </h3>
              <p className="mt-1.5 text-sm/[1.6] text-[var(--color-ink-2)] text-pretty">{step.body}</p>
            </li>
          )
        })}
      </ol>

      {/* The two annotations the desktop schema carries, as text on small screens. */}
      <p className="mt-8 text-sm text-[var(--color-muted)] lg:hidden">
        <span className="font-medium text-[var(--color-ink-2)]">{scopeLabel}</span> · {spanLabel}
      </p>
    </div>
  )
}
