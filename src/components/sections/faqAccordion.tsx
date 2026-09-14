'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'
import { PricedText } from '@/components/ui/price'

export function FaqAccordion({
  items,
  locale = 'en',
  defaultOpen = 0,
}: {
  items: readonly { q: string; a: string }[]
  locale?: string
  /**
   * Which answer is unfolded on arrival, or `null` for none. Defaults to the
   * first, as everywhere else on the site; the Sprint V1 landing passes `null`
   * so its question zone reads as a list rather than as a paragraph on a phone.
   * Every answer is in the DOM either way, so this changes nothing for crawlers.
   */
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-[var(--color-ink)]">{item.q}</span>
                <span
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-transform',
                    isOpen
                      ? 'rotate-45 bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-paper-2)] text-[var(--color-ink)]',
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div className={cn('grid transition-all', isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[var(--color-ink-2)]">
                  <PricedText text={item.a} locale={locale} />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
