/**
 * Geo currency layer. EUR and USD are BOTH firm, billable prices (the client
 * picks their invoicing currency; we settle in AED either way) — so USD is not
 * an FX conversion of EUR. Each headline price has a chosen round figure in both
 * currencies, shown as a plain fixed price (no "≈"): a fixed price and a fixed
 * timeline are the whole point of the agency.
 *
 * We deliberately support only two currencies (EUR / USD) to keep the copy clean.
 */

import { site } from '@/content/site'

export type Currency = 'EUR' | 'USD'

export const COOKIE_NAME = 'khufu_cur'

// Fallback EUR→USD rate — safety net for any EUR amount without a fixed USD list
// price. Every price we currently display is in site.usdPrices, so this is only
// hit if a new amount is introduced; it just needs a broadly-right round number.
const EUR_TO_USD = 1.13

// ISO-3166 alpha-2 countries that transact in EUR (eurozone + de-facto users).
const EUROZONE = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT',
  'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES', 'MC', 'AD', 'SM', 'VA', 'ME', 'XK',
])

/** Pick the display currency from a visitor's ISO country code. */
export function currencyForCountry(country: string | undefined | null): Currency {
  if (!country) return 'EUR'
  return EUROZONE.has(country.toUpperCase()) ? 'EUR' : 'USD'
}

/** Round USD to a "clean" figure so it never looks falsely precise. */
function roundUsd(usd: number): number {
  if (usd >= 10000) return Math.round(usd / 500) * 500
  if (usd >= 1000) return Math.round(usd / 100) * 100
  return Math.round(usd / 10) * 10
}

/**
 * The USD figure for an EUR price: a chosen fixed list price when we have one,
 * otherwise a rate-based fallback (indicative tiers). Exported so structured
 * data (JSON-LD) can advertise the same number the visitor sees.
 */
export function toUsd(eurAmount: number): number {
  return site.usdPrices[eurAmount] ?? roundUsd(eurAmount * EUR_TO_USD)
}

function money(amount: number, currency: Currency, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format an EUR amount in the target currency, honouring each locale's symbol
 * placement (e.g. "€15,000" in English, "15 000 €" in French). USD resolves to
 * its fixed list price (see toUsd), shown as a plain fixed price — no "≈".
 */
export function formatMoney(eurAmount: number, currency: Currency, locale = 'en'): string {
  if (currency === 'EUR') {
    return money(eurAmount, 'EUR', locale)
  }
  return money(toUsd(eurAmount), 'USD', locale)
}

/**
 * Replace `[[<eurAmount>]]` price tokens with the plain EUR-formatted price.
 * Server-safe (no hook) — for metadata and other non-JSX contexts where the
 * geo-aware <Price>/<PricedText> can't run and EUR is the right anchor.
 */
export function stripPriceTokens(text: string, locale = 'en'): string {
  return text.replace(/\[\[(\d+)\]\]/g, (_, n) => formatMoney(Number(n), 'EUR', locale))
}

/**
 * Replace `[[<eurAmount>]]` price tokens with BOTH currencies ("15 000 € / 17 000 $").
 * For machine-readable surfaces (FAQ JSON-LD, llms.txt) where a crawler/LLM can't
 * pick a currency per visitor, so we advertise both firm prices at once.
 */
export function dualPriceTokens(text: string, locale = 'en'): string {
  return text.replace(
    /\[\[(\d+)\]\]/g,
    (_, n) => `${formatMoney(Number(n), 'EUR', locale)} / ${formatMoney(Number(n), 'USD', locale)}`,
  )
}
