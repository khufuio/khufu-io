'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'
import { PricedText } from '@/components/ui/price'

export function FaqAccordion({
  items,
  locale = 'en',
}: {
  items: readonly { q: string; a: string }[]
  locale?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

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
