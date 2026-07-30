'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

/**
 * Fires one `lead_magnet_viewed` per page load, carrying the magnet slug.
 * The generic $pageview is already captured by the provider — this event exists
 * so the three angles can be compared as a single view → submit funnel with a
 * breakdown, without parsing URLs.
 */
export function LeadMagnetView({ slug }: { slug: string }) {
  useEffect(() => {
    track('lead_magnet_viewed', { magnet: slug })
  }, [slug])

  return null
}
