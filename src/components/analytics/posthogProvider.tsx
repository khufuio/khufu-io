'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { CONSENT_KEY } from '@/lib/consent'

// Inlined at build time. Note when testing a local `next build`: Turbopack only
// substitutes the literal for vars present in the real process env, not for ones
// it loaded from `.env.local` — so verify with the var exported, or PostHog looks
// broken locally while being fine on Vercel.
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

/**
 * Initialise PostHog at module scope, on the client — deliberately NOT in an
 * effect.
 *
 * React runs child effects before the parent's, so a provider that called
 * `posthog.init()` inside its own `useEffect` was always one step behind the
 * pageview tracker it rendered: the tracker fired first, saw `__loaded === false`
 * and bailed, and its dependencies never changed again. The landing `$pageview`
 * of every visit was dropped. On a single-page ad landing, where nobody
 * navigates client-side, that meant no pageview at all — while `$pageleave` and
 * `$autocapture` (wired by posthog-js itself, after init) kept arriving. Hence
 * "active users but zero pageviews".
 *
 * Module scope runs at hydration, before any effect, so init is always first.
 */
function initPostHog(): void {
  if (typeof window === 'undefined' || !KEY || posthog.__loaded) return

  // Read before init, not after: the landing pageview fires during init, so
  // opting out afterwards would still have leaked one event per load.
  const denied = localStorage.getItem(CONSENT_KEY) === 'denied'

  posthog.init(KEY, {
    // Proxied through our own domain (see next.config rewrites); dashboard host is
    // constant — both hardcoded on purpose (only the project key varies per env).
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    // Native App Router support: posthog-js captures the landing pageview at init
    // and patches the history API for client-side navigation. Replaces the
    // hand-rolled usePathname tracker that could never see the first one.
    capture_pageview: 'history_change',
    capture_pageleave: true,
    person_profiles: 'identified_only',
    defaults: '2025-05-24',
    // Opt-out model: capture is ON by default. A returning visitor who declined
    // (banner writes CONSENT_KEY, EU/UK only) starts opted out.
    opt_out_capturing_by_default: denied,
  })
}

initPostHog()

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!KEY) return <>{children}</>

  return <PHProvider client={posthog}>{children}</PHProvider>
}
