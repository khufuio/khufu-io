/**
 * Geo currency layer. EUR is always the firm, contractual price; USD is shown
 * as an approximate convenience for visitors outside the eurozone.
 *
 * We deliberately support only two currencies (EUR / USD) to keep the copy
 * clean — every quoted amount stays anchored to EUR (see the "firm price" note).
 */

export type Currency = 'EUR' | 'USD'

export const COOKIE_NAME = 'khufu_cur'

// Approximate EUR→USD rate. Kept as a hand-maintained constant on purpose:
// prices are firm in EUR, so USD only needs to be roughly right. Bump manually.
const EUR_TO_USD = 1.09

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
 * placement (e.g. "€15,000" in English, "15 000 €" in French).
 * EUR renders exactly; USD is prefixed with "≈" to signal it's approximate.
 */
export function formatMoney(eurAmount: number, currency: Currency, locale = 'en'): string {
  if (currency === 'EUR') {
    return money(eurAmount, 'EUR', locale)
  }
  return `≈ ${money(roundUsd(eurAmount * EUR_TO_USD), 'USD', locale)}`
}
