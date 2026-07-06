'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return
    let url = window.origin + pathname
    const qs = searchParams?.toString()
    if (qs) url += `?${qs}`
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

  useEffect(() => {
    if (!key || posthog.__loaded) return
    posthog.init(key, {
      // Proxied through our own domain (see next.config rewrites); dashboard host is
      // constant — both hardcoded on purpose (only the project key varies per env).
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      capture_pageview: false, // handled manually for App Router client navigation
      capture_pageleave: true,
      person_profiles: 'identified_only',
      defaults: '2025-05-24',
    })
  }, [key])

  if (!key) return <>{children}</>

  return (
    <PHProvider client={posthog}>
      <PageViewTracker />
      {children}
    </PHProvider>
  )
}
