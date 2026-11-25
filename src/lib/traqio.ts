import { Traqio } from '@traqio/web'
import { CONSENT_KEY } from '@/lib/consent'

/**
 * Traqio Analytics — run IN PARALLEL with PostHog (decision of 2026-11-22, todo
 * traqio cmwr3tlr): same page views, same custom events with the same names and
 * props, so the J+2 / J+9 comparison compares like with like. PostHog is left
 * untouched; this is a second sink, not a replacement.
 *
 * The web key is PUBLIC by construction (it ships in the page) and Traqio only
 * accepts it from the origins declared on it (https://khufu.io,
 * https://www.khufu.io) — so it is hard-coded as a fallback, the same way the
 * booking URL is: a forgotten `NEXT_PUBLIC_*` on Vercel would otherwise silently
 * empty one side of the comparison. The env var overrides it (rotation).
 * Traqio product: khufu.io, id cmwuna511002501s637gdtgmm.
 */
const KEY = process.env.NEXT_PUBLIC_TRAQIO_WEB_KEY || 'tq_web__1LgXgaP1IBTnOFcuflIkOYZrhhPy-r5'

/**
 * First-party path, rewritten to https://api.traqio.app in next.config.ts — the
 * same treatment PostHog gets (`/ingest`), so an ad-blocker that lets one through
 * lets the other through too. Absolute, built from the page's own origin.
 */
const PROXY_PATH = '/tq'

let started = false

/**
 * Start the SDK once, on the client. Page views (landing + history-API route
 * changes), clicks, scroll depth and front-end errors come from `analytics: true`.
 * Same consent model as PostHog (see lib/consent.ts): on by default, never started
 * for a visitor who declined.
 */
export function initTraqio(): void {
  if (typeof window === 'undefined' || started || !KEY) return
  if (localStorage.getItem(CONSENT_KEY) === 'denied') return
  started = true
  void Traqio.init({ sdkKey: KEY, analytics: true, endpoint: `${window.location.origin}${PROXY_PATH}` })
}

/** Mirror of a PostHog custom event — same name, same props. No-op until started. */
export function traqioCapture(event: string, props?: Record<string, unknown>): void {
  if (!started) return
  Traqio.capture(event, props)
}

/**
 * The visitor declined in the banner: stop sending and erase what Traqio holds
 * about this browser (the SDK's only stop switch is `forgetMe`). A later
 * "Accepter" in the same browser does not restart it — the browser is forgotten.
 */
export function traqioOptOut(): void {
  if (!started) return
  started = false
  void Traqio.forgetMe()
}
