// Cookie-consent model.
//
// Behaviour: analytics runs BY DEFAULT (opt-out model). The banner is shown only
// to EU/EEA/UK visitors (where an analytics banner is expected); elsewhere we
// never show it and just track. "Refuser" genuinely stops PostHog
// (opt_out_capturing); "Accepter" keeps it on. The choice is stored in
// localStorage under CONSENT_KEY and re-applied on every load.
export type Consent = 'granted' | 'denied'

export const CONSENT_KEY = 'khufu-consent'
export const CONSENT_EVENT = 'khufu-consent-change'
// Stamped by the middleware from the visitor's country: '1' = show the banner.
export const REGION_COOKIE = 'khufu_consent_region'

// EU/EEA + UK — the jurisdictions where an opt-in/opt-out analytics banner is
// expected. Everywhere else (US opt-out regime, UAE, APAC…) we don't show it.
const CONSENT_COUNTRIES = new Set([
  // EU-27
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'IS', 'LI', 'NO',
  // UK
  'GB',
])

/** Whether a visitor from this ISO country code should see the consent banner. */
export function needsConsent(country: string | null | undefined): boolean {
  return !!country && CONSENT_COUNTRIES.has(country.toUpperCase())
}
