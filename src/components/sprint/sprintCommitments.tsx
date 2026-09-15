import type { Locale } from '@/i18n/config'
import { sprintCommitmentIcons, sprintLanding } from '@/content/sprintLanding'

/**
 * What the contract says, as cards, just before the final CTA.
 *
 * ⚠️ THIS IS A REMINDER, NOT A REPEAT (khufu HQ decision cmu0jo1w). Adrien
 * overruled the thin band this used to be: « une vraie section en bande avec des
 * cards ou un truc stylisé qui le rappelle c'est jamais mauvais non ? ». At the
 * scale of a landing he is right — a prospect scans and enters mid-page, and
 * whoever reaches the decision without having read the hero no longer has the
 * promise in front of them.
 *
 * ⛔ WHICH IS WHY IT MUST NOT LOOK LIKE THE HERO. The hero states the FIGURES
 * (7 days, the price, one project at a time) in a hairline row of big numbers.
 * This states what is WRITTEN IN THE CONTRACT, as cards with an icon. Same
 * promise, other angle, other shape. The day it becomes the same object as the
 * hero row, it has stopped being a reminder and is a duplicate, which is the
 * failure mode.
 *
 * ⛔ AND THERE IS EXACTLY ONE OF IT. It lives here, next to the decision, and
 * nowhere else.
 *
 * ⚠️ THREE THINGS ADRIEN FOUND IN PRODUCTION ON 2026-09-15, all fixed here:
 *   1. « il manque 2 cartes, la section fait vide » — four cards in a three-wide
 *      grid left a row with one card and two holes. There are six now, read off
 *      the real contracts (the sources are listed on `commitments` in
 *      sprintLanding.ts), and six fills two rows exactly. ⛔ Keep the count a
 *      multiple of three or change the grid; never ship a ragged row.
 *   2. « il manque une icône » — and it was not an oversight, it was a latent
 *      bug: the icons were held in a record looked up through a three-entry
 *      list of names, so the fourth card silently rendered an empty circle —
 *      no error anywhere, just a blank disc on a live page. `ICONS` below is
 *      keyed by name, and WHICH icon each card wears now lives next to the cards
 *      themselves, in `sprintCommitmentIcons` — so the two lists are read from
 *      one file and `scripts/checkSprintLocales.ts` fails the recipe the moment
 *      they fall out of step. Nothing in the type system can tie a component to
 *      the LENGTH of a copy array, so that check is the guard.
 *   3. « chaque carte répète "Au contrat" alors que c'est le titre de la
 *      section » — the tag is gone, copy included.
 *
 * One line per card. cmu0hv4c holds: no paragraph, no over-explaining.
 */

/**
 * 24×24 stroke icons, drawn here so the section costs no request and no library.
 * Keyed by name rather than by position — see defect 2 above. ⛔ The names are
 * the ones `sprintCommitmentIcons` uses; add an icon here before naming it there.
 */
const ICONS = {
  /** It is yours from day one: a key. */
  ownership: (
    <>
      <circle cx="8" cy="12" r="3.6" />
      <path d="M11.6 12H20.5M17.8 12v3.2M14.6 12v2.4" />
    </>
  ),
  /** Nothing renews on its own: the loop, cut. */
  renewal: (
    <>
      <path d="M19.5 12a7.5 7.5 0 0 1-11.6 6.3M4.5 12a7.5 7.5 0 0 1 11.6-6.3" />
      <path d="M16.6 2.9v3h-3M7.4 21.1v-3h3" />
      <path d="m4 20 16-16" />
    </>
  ),
  /** If the delay is on us: a clock. */
  delay: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2.1" />
    </>
  ),
  /** Confidentiality: a shield, closed. */
  confidentiality: (
    <>
      <path d="M12 3.2 4.8 6v5.6c0 4 2.9 7.3 7.2 8.6 4.3-1.3 7.2-4.6 7.2-8.6V6L12 3.2Z" />
      <path d="M12 10.4v3.4" />
      <circle cx="12" cy="16.2" r=".4" />
    </>
  ),
  /** The scope, written and framed before anything starts. */
  scope: (
    <>
      <path d="M7.5 3.5h-4v4M16.5 3.5h4v4M7.5 20.5h-4v-4M16.5 20.5h4v-4" />
      <path d="M8.2 10h7.6M8.2 14h5" />
    </>
  ),
  /** Five days to check before you accept: a checked box. */
  acceptance: (
    <>
      <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
      <path d="M8 3v3M16 3v3" />
      <path d="m8.6 13.2 2.2 2.2 4.6-4.6" />
    </>
  ),
} as const

export function SprintCommitments({ locale }: { locale: Locale }) {
  const c = sprintLanding.commitments

  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {c.items.map((item, i) => (
        <li
          key={item.title[locale]}
          className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 sm:p-7"
          data-reveal
          style={{ '--reveal-delay': `${(i % 3) * 110}ms` } as React.CSSProperties}
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
              {ICONS[sprintCommitmentIcons[i]]}
            </svg>
          </span>

          <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-balance">
            {item.title[locale]}
          </h3>
          {/* ⛔ No « Au contrat » tag under this: it is the section's own title,
              and repeating it on every card was the third thing Adrien pulled. */}
          <p className="mt-1.5 flex-1 text-sm/[1.55] text-[var(--color-ink-2)] text-pretty">{item.note[locale]}</p>
        </li>
      ))}
    </ul>
  )
}
