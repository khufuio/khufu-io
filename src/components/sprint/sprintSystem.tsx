import type { Locale } from '@/i18n/config'
import { sprintLanding, sprintProducts } from '@/content/sprintLanding'

/**
 * Where the speed comes from — the block that REPLACED « vous parlez au founder
 * qui écrit le code » (khufu HQ decision cmu1u21i).
 *
 * ⚠️ WHY THE OLD LINE WENT, in Adrien's words (2026-09-14): « tu dis "écrit le
 * code", donc faux, pas pertinent avec notre message. Et dire en gros que je suis
 * solo, c'est pas un argument positif pour 17k USD je trouve. » Both halves
 * count: the claim was inaccurate, and "one person" reads as bus factor on a $17k
 * decision — it argued against the sale it was meant to close.
 *
 * ⚠️ AND WHY SOMETHING HAD TO TAKE ITS PLACE rather than the line simply being
 * deleted: with no explanation at all, "seven days" reads as bluff. This is that
 * explanation, and Adrien asked for it in this exact shape: « une petite
 * infographie du genre système IA complexe, ça peut être vendeur, et justifier
 * encore + le 1 week ».
 *
 * ⛔ THREE BOUNDS, AND THEY ARE THE BOUNDS OF THE DECISION ITSELF:
 *   1. NO INVENTED HEADCOUNT OR CAPACITY. No team, no "N sprints at once", no
 *      number of agents. The diagram shows a SHAPE of work, never a size.
 *   2. NEVER AUTONOMOUS. The last step is a person deciding, and it is there
 *      because it is true — not as a disclaimer.
 *   3. NO DEVELOPER VOCABULARY (decision cmu1qk2g). The reader is a founder:
 *      « les écrans, les données, la mise en ligne », never « CI » or « repo ».
 *
 * ⚠️ IT IS DRAWN, NOT WRITTEN (cmu0hv4c). The argument is carried by the shape —
 * one input that fans out into parallel tracks and converges on a human — and the
 * words are labels on that shape. If a future pass finds itself adding a sentence
 * here, the sentence belongs in the FAQ.
 *
 * The lanes are `data-reveal`ed one after another so the fan-out is legible as a
 * movement on arrival; with no JavaScript the noscript rule in the page shows
 * them all, which is the finished diagram.
 */
export function SprintSystem({ locale }: { locale: Locale }) {
  const c = sprintLanding.system

  return (
    <div className="sprint-system">
      {/* The spine. On a phone it runs down the left of the steps; from `sm` up it
          becomes the horizontal rail the steps hang off. Drawn with a border on a
          pseudo-element in globals.css so it costs no node and no request. */}
      <ol className="sprint-system-track">
        {c.steps.map((step, i) => (
          <li
            key={step.title[locale]}
            className="sprint-system-step"
            data-reveal
            style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
          >
            <span aria-hidden className="sprint-system-node">
              <svg
                viewBox="0 0 24 24"
                className="size-5 stroke-[var(--color-accent-ink)]"
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {ICONS[i]}
              </svg>
            </span>
            <h3 className="mt-4 text-sm font-semibold text-balance sm:text-[15px]">{step.title[locale]}</h3>
            <p className="mt-1 text-xs/[1.5] text-[var(--color-muted)] text-pretty sm:text-[13px]/[1.5]">
              {step.note[locale]}
            </p>
          </li>
        ))}
      </ol>

      {/* ⚠️ THE CLOSING LINE CARRIES A FIGURE AND THE FIGURE IS DERIVED, never
          typed into the copy (2026-09-15, pass 5). `{count}` becomes the number
          of cards the products section renders two screens below, so the claim
          « N produits en production » is checkable by scrolling and cannot rot when a
          product is added or pulled. Adrien's bound on this retour was explicit:
          a quantity on this page is true and verifiable in the HQ registry, or it
          is not shown at all. A literal here would have been the version that
          goes stale. ⛔ Do not inline the number back into sprintLanding.ts. */}
      <p className="mt-8 text-center text-sm font-medium text-[var(--color-ink-2)] text-pretty sm:text-base">
        {c.note[locale].replace('{count}', String(sprintProducts.length))}
      </p>
    </div>
  )
}

/**
 * One icon per step, in the order the copy declares them. Drawn here so the block
 * costs no request and no library — and keyed by POSITION rather than by name,
 * because the four steps are a sequence, not a set.
 */
const ICONS: React.ReactNode[] = [
  // 1 — the project is cut up: one block splitting into three.
  <>
    <rect key="a" x="3.5" y="9.5" width="6" height="5" rx="1.5" />
    <path key="b" d="M9.5 12h3.5M13 12V6.5h7.5M13 12v5.5h7.5" />
    <rect key="c" x="20.5" y="4.5" width="0.01" height="0.01" />
    <path key="d" d="M17 4.5h3.5v4H17zM17 15.5h3.5v4H17z" />
  </>,
  // 2 — several agents move at once: three parallel tracks running.
  <>
    <path key="a" d="M3.5 6.5h13M3.5 12h17M3.5 17.5h9" />
    <circle key="b" cx="18.5" cy="6.5" r="1.6" />
    <circle key="c" cx="15" cy="17.5" r="1.6" />
  </>,
  // 3 — checked automatically: a tick inside a loop.
  <>
    <path key="a" d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
    <path key="b" d="M20.5 4v4h-4" />
    <path key="c" d="m8.8 12.2 2.2 2.2 4.4-4.4" />
  </>,
  // 4 — a human decides: a person, and the decision leaving them.
  <>
    <circle key="a" cx="9" cy="7.5" r="3.2" />
    <path key="b" d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path key="c" d="M16.5 9.5h4M18.5 7.5l2 2-2 2" />
  </>,
]
