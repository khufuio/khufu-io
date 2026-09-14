import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

/**
 * The three contractual commitments, as cards, just before the final CTA.
 *
 * ⚠️ THIS IS A REMINDER, NOT A REPEAT (khufu HQ decision cmu0jo1w). Adrien
 * overruled the thin band this used to be: « une vraie section en bande avec des
 * cards ou un truc stylisé qui le rappelle c'est jamais mauvais non ? ». At the
 * scale of a landing he is right — a prospect scans and enters mid-page, and
 * whoever reaches the form without having read the hero no longer has the
 * promise in front of them.
 *
 * ⛔ WHICH IS WHY IT MUST NOT LOOK LIKE THE HERO. The hero states the FIGURES
 * (7 days, the price, one client a week) in a hairline row of big numbers. This
 * states what is WRITTEN IN THE CONTRACT — the date, the price, the ownership —
 * as cards with an icon and a contract tag. Same promise, other angle, other
 * shape. The day it becomes the same object as the hero row, it has stopped
 * being a reminder and is a duplicate, which is the failure mode.
 *
 * ⛔ AND THERE IS EXACTLY ONE OF IT. It lives here, next to the decision, and
 * nowhere else — there is no copy of it under the hero any more.
 *
 * One line per card. cmu0hv4c holds: no paragraph, no over-explaining.
 */

/**
 * 24×24 stroke icons, drawn here so the section costs no request and no library.
 * Keyed by name rather than held in an array — the order of the cards lives in
 * the copy, and a record keeps the icon attached to the item it illustrates.
 */
const icons: Record<string, React.ReactNode> = {
  // The date: a calendar with the day marked.
  date: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
      <path d="M11 14h2.5" />
    </>
  ),
  // The price: a tag that does not move.
  price: (
    <>
      <path d="M11.3 3.5H20a.5.5 0 0 1 .5.5v8.7a1 1 0 0 1-.3.7l-7.3 7.3a1 1 0 0 1-1.4 0l-7.7-7.7a1 1 0 0 1 0-1.4l7.3-7.3a1 1 0 0 1 .7-.3Z" />
      <circle cx="16.4" cy="7.6" r="1.3" />
    </>
  ),
  // The code: it is yours.
  code: <path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4" />,
}

const order = ['date', 'price', 'code']

export function SprintCommitments({ locale }: { locale: Locale }) {
  const c = sprintLanding.commitments

  return (
    <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
      {c.items.map((item, i) => (
        <li
          key={item.title[locale]}
          className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 sm:p-7"
          data-reveal
          style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
        >
          <span
            aria-hidden
            className="flex size-11 items-center justify-center rounded-full bg-[var(--color-accent-soft)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 stroke-[var(--color-accent-ink)]"
              fill="none"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icons[order[i]]}
            </svg>
          </span>

          <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-balance">
            {item.title[locale]}
          </h3>
          <p className="mt-1.5 flex-1 text-sm/[1.55] text-[var(--color-ink-2)] text-pretty">{item.note[locale]}</p>

          <p className="mt-5 flex items-center gap-2 border-t border-[var(--color-line)] pt-4 text-[10px] font-semibold tracking-[0.14em] text-[var(--color-muted)] uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            {c.tag[locale]}
          </p>
        </li>
      ))}
    </ul>
  )
}
