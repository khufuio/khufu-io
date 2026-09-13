'use client'

import { useEffect, useRef, useState } from 'react'
import { Price } from '@/components/ui/price'
import { formatMoney, COOKIE_NAME, type Currency } from '@/lib/currency'

/** Same easing as the rest of the page's motion: fast out, long settle, no overshoot. */
const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

const DURATION_MS = 1100

function readCurrency(): Currency {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`))
  return match?.[1] === 'USD' ? 'USD' : 'EUR'
}

/**
 * The fixed price, counted up once when it scrolls into view.
 *
 * Deliberately NOT in the hero: the hero is what LCP is measured on, and a
 * number that animates where a visitor first lands reads as a template effect
 * rather than as care. Here, in the block that argues "a price, not a quote",
 * the count is the argument — the figure settles and then does not move again,
 * which is exactly what the copy next to it promises.
 *
 * Layout is stack-locked: the final string is always rendered, invisible, in the
 * same grid cell, so the box is its final width from the first paint and the
 * count cannot shift a pixel of the page (this page measures CLS 0).
 *
 * Falls back to the plain <Price> — no counting, no observer — for a visitor who
 * asked for reduced motion, and server-side.
 */
export function CountUpPrice({ eur, locale }: { eur: number; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        observer.disconnect()

        const start = performance.now()
        const step = (now: number): void => {
          const progress = Math.min((now - start) / DURATION_MS, 1)
          // Rounded to the hundred while running: the last two digits would
          // otherwise churn for a second, which is the opposite of the point.
          const value = eur * easeOutExpo(progress)
          setShown(progress === 1 ? eur : Math.round(value / 100) * 100)
          if (progress < 1) frame = requestAnimationFrame(step)
        }
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [eur])

  return (
    <span ref={ref} className="inline-grid tabular-nums">
      {/* Sizes the box to the final value, always. */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        <Price eur={eur} locale={locale} />
      </span>
      <span className="col-start-1 row-start-1">
        {shown === null || shown === eur ? (
          <Price eur={eur} locale={locale} />
        ) : (
          <span aria-hidden>{formatMoney(shown, readCurrency(), locale)}</span>
        )}
      </span>
    </span>
  )
}
