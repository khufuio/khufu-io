'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import { PricedText } from '@/components/ui/price'

export type FaqAccordionItem = {
  q: string
  a: string
  /** Optional doorway at the foot of the answer — label plus where it goes. */
  link?: { href: string; label: string }
}

/**
 * The question zone, shared by the home page, /offres, the lead-magnet landings
 * and /sprint-v1.
 *
 * ⚠️ THE MARKER IS A CHEVRON, and it is not a free choice. It was a + turning
 * into a ×, which Adrien rejected on 2026-09-14 in favour of the classic
 * up/down chevron. The reason it matters beyond taste: a × means "close / this
 * goes away", which is the wrong promise on a row that only folds — a chevron
 * says which way the content is about to move and nothing else.
 *
 * Accessibility is carried by the button, not by the glyph: `aria-expanded`
 * states the real thing, the chevron is `aria-hidden` decoration, and the row is
 * a full-width target at least 44px tall on a phone. The rotation sits inside
 * `motion-safe`, so a visitor who asked for less motion gets the flip with no
 * animation rather than no feedback.
 */
export function FaqAccordion({
  items,
  locale = 'en',
  defaultOpen = 0,
}: {
  items: readonly FaqAccordionItem[]
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
                className="flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-[var(--color-ink)]">{item.q}</span>
                <span
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full motion-safe:transition-transform',
                    isOpen
                      ? 'rotate-180 bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-paper-2)] text-[var(--color-ink)]',
                  )}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9.5 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>
            <div className={cn('grid transition-all', isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[var(--color-ink-2)]">
                  <PricedText text={item.a} locale={locale} />
                </p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-ink)] hover:underline"
                    // Folded rows stay in the DOM for crawlers; keeping their
                    // link out of the tab order stops the keyboard walking into
                    // an answer nobody has opened.
                    tabIndex={isOpen ? undefined : -1}
                  >
                    {item.link.label}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
