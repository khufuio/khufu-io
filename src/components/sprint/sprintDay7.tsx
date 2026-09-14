import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

/**
 * What is in the box on day 7 — an icon grid, four words a line.
 *
 * ⚠️ THIS ONE BLOCK REPLACES TWO. The page used to carry nine "deliverables"
 * cards of prose and then three "included" cards of more prose, with the
 * showcase site, the infrastructure and the two weeks of fixes written out
 * TWICE. Adrien on the first: « du texte, du texte, du texte, même moi j'ai la
 * flemme de le lire ». On the second: « tu peux pas use + d'infographie ? ».
 *
 * ⛔ SO: one line per item, an icon, and nothing else. A sentence that wants to
 * grow back here belongs in the FAQ. The three items decisions cmu09gb6 and
 * cmu09gn1 want advertised as included carry a chip instead of a paragraph — and
 * the word on that chip is "included", never "free": on a $17,000 sale "free"
 * devalues everything standing next to it.
 *
 * The scope guardrails those cards used to carry (the showcase ships on our
 * template, the infra on our standard stack, two weeks of fixes are not two
 * weeks of development) are NOT lost — they moved into one FAQ answer, which is
 * where a scope question is actually asked. Do not let them creep back up here.
 */

/** 24×24 stroke icons, drawn here so the grid costs no request and no library. */
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
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
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

const order = ['live', 'code', 'design', 'users', 'data', 'infra', 'seo', 'handover', 'fixes']

export function SprintDay7({ locale }: { locale: Locale }) {
  const c = sprintLanding.day7

  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
      {c.items.map((item, i) => (
        <li
          key={item.title[locale]}
          className="flex flex-col bg-white p-5 last:col-span-2 sm:p-6 sm:last:col-span-1"
          data-reveal
          style={{ '--reveal-delay': `${(i % 3) * 90}ms` } as React.CSSProperties}
        >
          <span className="flex items-start justify-between gap-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="size-6 shrink-0 stroke-[var(--color-accent)] sm:size-7"
              fill="none"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icons[order[i]]}
            </svg>
            {item.included && (
              <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-[var(--color-accent-ink)] uppercase">
                {c.badge[locale]}
              </span>
            )}
          </span>
          <h3 className="mt-4 text-sm font-semibold text-balance sm:text-base">{item.title[locale]}</h3>
          <p className="mt-1 text-xs/[1.5] text-[var(--color-muted)] text-pretty sm:text-sm/[1.5]">
            {item.note[locale]}
          </p>
        </li>
      ))}
    </ul>
  )
}
