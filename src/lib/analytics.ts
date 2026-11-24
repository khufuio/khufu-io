import posthog from 'posthog-js'
import { traqioCapture } from '@/lib/traqio'

/**
 * Safe capture — no-ops on the server. Sends to PostHog (when initialised) AND
 * mirrors the same event, same name and props, to Traqio Analytics (run in
 * parallel for the PostHog comparison, see lib/traqio.ts). The two sinks are
 * independent: one being off never mutes the other. Import only from client
 * components.
 */
export function track(event: string, props?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  traqioCapture(event, props)
  if (!posthog.__loaded) return
  posthog.capture(event, props)
}

/**
 * Attach the anonymous session to an email — used when a lead magnet form is
 * submitted, so the pre-download pageviews stitch to the identified person and
 * the three landing pages stay comparable in a funnel.
 */
export function identifyLead(email: string, props?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  if (!posthog.__loaded) return
  posthog.identify(email, { email, ...props })
}
