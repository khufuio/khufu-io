import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

/**
 * What is in the box on day 7.
 *
 * ⛔ IT IS NOT AN INVENTORY ANY MORE, and that is the 2026-09-15 rebuild. Adrien:
 * « ça fait liste mais je sais pas si ultra vendeur, je te laisse aviser ». He is
 * right about the failure: nine identical cells weight every line the same, so
 * "your product is live" read exactly like "documented handover" — nothing to
 * want, and a delivery note where a promise belonged.
 *
 * So the block has a FOCAL POINT and a supporting grid. The one thing a buyer is
 * actually paying for — the product in production, on their own domain or in the
 * stores — takes the accented panel; the rest is what comes with it, in a denser
 * grid that reads as "and all of this too" rather than as nine equal claims.
 *
 * ⛔ TWO CORRECTIONS THAT ARE FACTUAL, NOT COSMETIC, AND MUST NOT BE UNDONE:
 *   1. NO BACK-OFFICE IN THE BASE SCOPE. « Données et back-office » sat on the old
 *      grid and Adrien pulled it: a back-office is not systematic and, depending
 *      on the need, is a real piece of work. Promising it here sells scope nobody
 *      agreed. The question is answered honestly in the FAQ instead — it is
 *      settled on day 0, in writing.
 *   2. « à votre adresse » IMPLIED A DOMAIN, therefore a web product, on a page
 *      that also sells mobile apps. The lead now covers both — a domain for the
 *      web, a store submission for an app — which is also exactly what the FAQ on
 *      store review already says. ⛔ Do not shorten it back to an "address".
 *
 * ⛔ AND NO ITEM WEARS AN "INCLUDED" CHIP. Three of them did, and Adrien removed
 * them on 2026-09-14: « ça implique que les autres le sont pas, c'est dommage ».
 * Badging three of nine turns the other six into an open question, on the one
 * block whose entire job is to say the box is full. Decisions cmu09gb6 and
 * cmu09gn1 are still honoured — those three are still here — they simply do not
 * wear a label the others lack.
 *
 * ⛔ ONE LINE PER ITEM. A sentence that wants to grow back here belongs in the FAQ.
 */

/** 24×24 stroke icons, drawn here so the block costs no request and no library. */
const icons: Record<string, React.ReactNode> = {
  live: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
    </>
  ),
  code: <path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4" />,
  design: (
    <>
      <path d="M4 20c0-2.2 1.8-4 4-4 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2H4Z" />
      <path d="m10.5 16.5 8-8a2.1 2.1 0 0 0-3-3l-8 8" />
    </>
  ),
  users: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
    </>
  ),
  infra: (
    <>
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5 5" />
    </>
  ),
  handover: (
    <>
      <path d="M6.5 3.5h7l4.5 4.5v12h-11.5z" />
      <path d="M13.5 3.5V8H18" />
    </>
  ),
  fixes: (
    <>
      <path d="M12 3.5 5 6.2v6c0 4 2.9 7.1 7 8.3 4.1-1.2 7-4.3 7-8.3v-6L12 3.5Z" />
      <path d="m9.2 11.8 2 2 3.6-3.6" />
    </>
  ),
}

/** The supporting items, in the order the copy declares them. */
const order = ['code', 'design', 'users', 'infra', 'seo', 'handover', 'fixes']

export function SprintDay7({ locale }: { locale: Locale }) {
  const c = sprintLanding.day7

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
      {/* The focal point. Accented, larger, and alone — a visitor who reads one
          thing in this section has to read this one. */}
      <div
        className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-6 sm:p-8"
        data-reveal
      >
        <span
          aria-hidden
          className="flex size-12 items-center justify-center rounded-full bg-white/70"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-6 stroke-[var(--color-accent-ink)]"
            fill="none"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icons.live}
          </svg>
        </span>
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-[length:clamp(1.4rem,3.4vw,1.9rem)]/[1.1] font-bold tracking-[-0.02em] text-balance text-[var(--color-accent-ink)]">
          {c.lead.title[locale]}
        </h3>
        <p className="mt-2.5 text-[15px]/[1.55] text-[var(--color-ink-2)] text-pretty">{c.lead.note[locale]}</p>
      </div>

      {/* And everything that comes with it. Denser on purpose: this is the "and
          all of this too" beat, not seven more promises of equal weight. */}
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {c.items.map((item, i) => (
          <li
            key={item.title[locale]}
            /* ⚠️ THE LAST CELL SPANS THE REST OF ITS ROW at every breakpoint.
               Seven items in a three-column grid leave two empty cells, and an
               empty cell here is not neutral: the grid's own line colour shows
               through as a grey block, which reads as a missing deliverable on
               the one section whose job is to say the box is full. */
            className="flex flex-col bg-white p-4 last:col-span-2 sm:p-5 sm:last:col-span-3 lg:last:col-span-2 xl:last:col-span-3"
            data-reveal
            style={{ '--reveal-delay': `${(i % 3) * 80}ms` } as React.CSSProperties}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="size-5 shrink-0 stroke-[var(--color-accent)]"
              fill="none"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icons[order[i]]}
            </svg>
            <h3 className="mt-3 text-[13px] font-semibold text-balance sm:text-sm">{item.title[locale]}</h3>
            <p className="mt-0.5 text-[11px]/[1.45] text-[var(--color-muted)] text-pretty sm:text-xs/[1.5]">
              {item.note[locale]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
