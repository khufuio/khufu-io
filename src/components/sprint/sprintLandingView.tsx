'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'

/**
 * One `sprint_landing_viewed` per page load, carrying the campaign tags already
 * parsed out of the URL.
 *
 * The generic `$pageview` is captured by the provider and holds the same tags in
 * its URL, but a paid landing needs a view → CTA → lead funnel that can be
 * broken down by campaign without anyone writing a URL-parsing expression in
 * PostHog. This is that first step.
 */
export function SprintLandingView({ locale }: { locale: string }) {
  useEffect(() => {
    track('sprint_landing_viewed', { locale, ...campaignProps() })
  }, [locale])

  return null
}
