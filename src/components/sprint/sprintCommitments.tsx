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
  /** Everything is yours from day one: a key. */
  ownership: (
    <>
      <circle cx="8" cy="12" r="3.6" />
      <path d="M11.6 12H20.5M17.8 12v3.2M14.6 12v2.4" />
    </>
  ),
  /** What is signed is delivered: a signed page, ticked. */
  result: (
    <>
      <path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5L14 3.5Z" />
      <path d="M14 3.5v5h5" />
      <path d="m8.8 14.2 2.1 2.1 4.3-4.3" />
    </>
  ),
  /** Fourteen days of warranty: a shield, checked. */
  warranty: (
    <>
      <path d="M12 3.2 4.8 6v5.6c0 4 2.9 7.3 7.2 8.6 4.3-1.3 7.2-4.6 7.2-8.6V6L12 3.2Z" />
      <path d="m8.9 12.2 2.2 2.2 4-4" />
    </>
  ),
  /** Delivered with its documentation: code brackets on a page. */
  handover: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="m10 9.5-2.5 2.5 2.5 2.5M14 9.5l2.5 2.5-2.5 2.5" />
    </>
  ),
  /** Your project stays confidential: a closed padlock. */
  confidentiality: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.5v2" />
    </>
  ),
  /** You stay free: an open path out of a frame. */
  freedom: (
    <>
      <path d="M10 4.5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4" />
      <path d="M13.5 8 17.5 12l-4 4M17.5 12H9" />
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
