'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import { readInternalSource } from '@/lib/internalSource'

/**
 * Fires one `lead_magnet_viewed` per page load, carrying the magnet slug and,
 * when the visit came from one of our own pages, the surface that sent it.
 * The generic $pageview is already captured by the provider — this event exists
 * so the three angles can be compared as a single view → submit funnel with a
 * breakdown, without parsing URLs.
 */
export function LeadMagnetView({ slug }: { slug: string }) {
  useEffect(() => {
    track('lead_magnet_viewed', { magnet: slug, internal_source: readInternalSource() ?? 'direct' })
  }, [slug])

  return null
}
