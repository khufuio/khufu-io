/**
 * "What comes with it" — the three deliverables a buyer is afraid of having to
 * buy separately (khufu HQ decisions cmu09gb6 and cmu09gn1).
 *
 * ⛔ THREE ITEMS, AND ONLY THESE THREE. Stripe, analytics and light branding
 * were proposed and deliberately kept OUT (decision cmu09j84): they are what a
 * shipped product is made of, and advertising them as a bonus suggests they
 * might not have been included, which lowers the perceived level of a $17k
 * offer. They are answered in one FAQ entry instead, in the "obviously it's
 * included" register.
 *
 * ⚠️ The word is "included", never "free" and never "on the house".
 *
 * ⚠️ Each line is deliberately written as a FIXED, templated deliverable. If any
 * of them reads like something to negotiate, it eats the promise the whole offer
 * rests on — scope settled on day 0 (decision cmtt6x3k) — and the showcase
 * becomes the pretext that derails the week.
 *
 * `value` is the optional struck-through worth of an item. It renders only when
 * the copy carries one, and today none of them does: no public agency price for
 * a showcase site holds up (the published ranges run from €300 to €8,000, which
 * is not a figure, it is a spread). An unsourced number on the one page with an
 * ad budget pointed at it is worse than no number — so the slot exists, and it
 * stays empty until someone can source it.
 */
import type { Locale } from '@/i18n/config'
import { sprintLanding } from '@/content/sprintLanding'

export function SprintIncluded({ locale }: { locale: Locale }) {
  const c = sprintLanding.included

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3">
        {c.items.map((item, i) => (
          <article
            key={item.title[locale]}
            className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7"
            data-reveal
            style={{ '--reveal-delay': `${i * 130}ms` } as React.CSSProperties}
          >
            <div className="flex items-baseline gap-3">
              <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[var(--color-accent-ink)] uppercase">
                {c.badge[locale]}
              </span>
              {item.value[locale] && (
                <span className="text-sm text-[var(--color-muted)] line-through">{item.value[locale]}</span>
              )}
            </div>

            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
              {item.title[locale]}
            </h3>
            <p className="mt-3 flex-1 text-[var(--color-ink-2)] text-pretty">{item.body[locale]}</p>
            <p className="mt-4 border-t border-[var(--color-line)] pt-4 text-sm text-[var(--color-muted)] text-pretty">
              {item.scope[locale]}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-[var(--color-muted)] text-pretty" data-reveal>
        {c.note[locale]}
      </p>
    </div>
  )
}
