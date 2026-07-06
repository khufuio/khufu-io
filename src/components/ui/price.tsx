'use client'

import { useSyncExternalStore } from 'react'
import { COOKIE_NAME, formatMoney, type Currency } from '@/lib/currency'

function readCurrencyCookie(): Currency {
  if (typeof document === 'undefined') return 'EUR'
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`))
  return match?.[1] === 'USD' ? 'USD' : 'EUR'
}

// The currency cookie is set once by middleware and stable for the session.
const subscribe = () => () => {}

/**
 * Reads the display currency without an effect: SSR / hydration snapshot is EUR
 * (the firm, crawlable price), then the client swaps to the cookie value.
 */
function useCurrency(): Currency {
  return useSyncExternalStore(subscribe, readCurrencyCookie, () => 'EUR')
}

/**
 * Renders an EUR amount, swapping to an approximate USD figure for visitors
 * outside the eurozone. `title` keeps the firm EUR value on hover.
 */
export function Price({
  eur,
  locale = 'en',
  className,
}: {
  eur: number
  locale?: string
  className?: string
}) {
  const currency = useCurrency()

  return (
    <span className={className} title={currency === 'USD' ? `${eur.toLocaleString(locale)} €` : undefined}>
      {formatMoney(eur, currency, locale)}
    </span>
  )
}

/** Shows its children only to non-eurozone (USD) visitors — the "firm price in EUR" disclaimer. */
export function FirmPriceNote({ children, className }: { children: React.ReactNode; className?: string }) {
  if (useCurrency() !== 'USD') return null
  return <p className={className}>{children}</p>
}

/**
 * Renders a string of prose where prices are written as `[[<eurAmount>]]` tokens
 * (e.g. "Fixed price: [[15000]].") — each token becomes a geo-aware <Price>. Lets
 * copy stay currency-consistent with the headline prices.
 */
export function PricedText({ text, locale = 'en' }: { text: string; locale?: string }) {
  const nodes: React.ReactNode[] = []
  let last = 0
  let key = 0
  for (const m of text.matchAll(/\[\[(\d+)\]\]/g)) {
    const idx = m.index ?? 0
    if (idx > last) nodes.push(text.slice(last, idx))
    nodes.push(<Price key={key++} eur={Number(m[1])} locale={locale} />)
    last = idx + m[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return <>{nodes}</>
}

/**
 * Resolve `[[<eurAmount>]]` tokens to a plain string in the visitor's currency —
 * for places that can't hold a component (e.g. <option> labels).
 */
export function useResolvePrice(): (text: string, locale?: string) => string {
  const currency = useCurrency()
  return (text, locale = 'en') => text.replace(/\[\[(\d+)\]\]/g, (_, n) => formatMoney(Number(n), currency, locale))
}
