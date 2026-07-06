import posthog from 'posthog-js'

/**
 * Safe PostHog capture — no-ops on the server or before PostHog is initialised
 * (e.g. when NEXT_PUBLIC_POSTHOG_KEY is unset). Import only from client components.
 */
export function track(event: string, props?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  if (!posthog.__loaded) return
  posthog.capture(event, props)
}
