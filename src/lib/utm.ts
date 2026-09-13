/**
 * Campaign tags carried from an ad click into our own systems.
 *
 * PostHog stores them session-side, but the lead email is what tells us later
 * which campaign produced a paid sprint. Without this hop the chain breaks
 * exactly where it matters: attributable on arrival, anonymous at the outcome.
 *
 * `li_fat_id` is appended by LinkedIn Ads itself — kept so a click can still be
 * tied back to a campaign when the UTM tags are missing from the creative.
 */
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'li_fat_id'] as const

export type UtmKey = (typeof UTM_KEYS)[number]

export type UtmParams = Partial<Record<UtmKey, string>>

/** Read the campaign tags off the current URL. Empty object on the server. */
export function readUtm(): UtmParams {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const out: UtmParams = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim()
    if (value) out[key] = value.slice(0, 120)
  }
  return out
}

/**
 * Campaign tags plus a coarse `traffic_source` so paid and organic arrivals on
 * the same page stay separable in a funnel even when a creative ships without
 * UTM tags.
 */
export function campaignProps(): UtmParams & { traffic_source: string } {
  const utm = readUtm()
  const paid = Boolean(utm.utm_source || utm.li_fat_id)
  return { ...utm, traffic_source: paid ? (utm.utm_source ?? 'linkedin') : 'organic' }
}
