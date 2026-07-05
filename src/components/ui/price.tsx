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
