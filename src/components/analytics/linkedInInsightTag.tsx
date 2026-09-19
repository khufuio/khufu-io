'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, type Consent } from '@/lib/consent'
import { LINKEDIN_PARTNER_ID, linkedInAllowed } from '@/lib/linkedin'

/**
 * LinkedIn Insight Tag, loaded after consent (see `linkedInAllowed`).
 *
 * ⚠️ `lazyOnload`, NOT `afterInteractive`: the script is fetched once the browser
 * is idle, after the load event, so it can never compete with the LCP of a page
 * under ad budget. Retargeting and conversions lose nothing — calls made before
 * it lands are queued by the stub installed below.
 *
 * The stub + partner id are set up here in JS rather than in an inline
 * `<script>`: same effect as LinkedIn's snippet, typed, and no inline script to
 * order against the external one. The `<noscript>` pixel of the official
 * snippet is left out on purpose — without JavaScript there is no consent state
 * to read, so it would fire regardless of the banner.
 */
export function LinkedInInsightTag(): React.JSX.Element | null {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    if (!LINKEDIN_PARTNER_ID) return
    // Deferred like the banner, so the first client render matches SSR.
    const id = requestAnimationFrame(() => setAllowed(linkedInAllowed()))
    const onConsent = (e: Event): void => {
      if ((e as CustomEvent<Consent>).detail === 'granted') setAllowed(true)
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener(CONSENT_EVENT, onConsent)
    }
  }, [])

  useEffect(() => {
    if (!allowed) return
    const ids = (window._linkedin_data_partner_ids ??= [])
    if (!ids.includes(LINKEDIN_PARTNER_ID)) ids.push(LINKEDIN_PARTNER_ID)
    if (!window.lintrk) {
      const queue: unknown[] = []
      window.lintrk = Object.assign((a: string, b: unknown) => void queue.push([a, b]), { q: queue })
    }
  }, [allowed])

  if (!LINKEDIN_PARTNER_ID || !allowed) return null

  return <Script id="linkedin-insight" src="https://snap.licdn.com/li.lms-analytics/insight.min.js" strategy="lazyOnload" />
}
