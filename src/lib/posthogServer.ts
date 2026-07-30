import { site } from '@/content/site'

/**
 * Server-side PostHog capture.
 *
 * Uses the PUBLIC project key — the same one the browser already carries. It is
 * an ingestion key: write-only, no read access, no account powers. That is the
 * whole point of routing the lead record through here rather than through a
 * provider that would need a privileged key on a public-facing deployment.
 *
 * Captured server-side rather than in the browser so a lead is never lost to an
 * ad-blocker, a failed script or a declined analytics banner. The client event
 * (`lead_magnet_submitted`) still fires for funnel analysis; this one is the
 * business record of a submission the visitor deliberately made.
 */
const HOST = 'https://us.i.posthog.com'

export type LeadCapture = {
  email: string
  magnet: string
  placement?: string
  utm: Record<string, string>
}

/**
 * Record a captured lead. Never throws: the reader already has their guide, and
 * a telemetry failure must not turn a successful capture into an error. Returns
 * whether it landed, so the caller can log a miss.
 */
export async function captureLead(lead: LeadCapture): Promise<boolean> {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!apiKey) {
    console.warn('[lead-magnet] NEXT_PUBLIC_POSTHOG_KEY unset — lead not recorded:', lead.email)
    return false
  }

  try {
    const res = await fetch(`${HOST}/capture/`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        // Distinct from the client's `lead_magnet_submitted`: this one is the
        // record HQ reads to build its lead list, and it is emitted exactly once
        // per capture, server-side.
        event: 'lead_magnet_captured',
        // Same distinct_id the client uses when it identifies, so the anonymous
        // session and the lead are one person rather than two.
        distinct_id: lead.email,
        timestamp: new Date().toISOString(),
        properties: {
          email: lead.email,
          magnet: lead.magnet,
          placement: lead.placement ?? 'unknown',
          signup_page: `${site.url}/${lead.magnet}`,
          ...lead.utm,
          // Person properties, so a lead can be read without replaying events.
          $set: {
            email: lead.email,
            lead_magnet: lead.magnet,
            ...lead.utm,
          },
        },
      }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) {
      console.error('[lead-magnet] LEAD NOT RECORDED:', res.status, await res.text().catch(() => ''))
      return false
    }
    return true
  } catch (e) {
    console.error('[lead-magnet] LEAD NOT RECORDED:', e instanceof Error ? e.message : String(e))
    return false
  }
}
