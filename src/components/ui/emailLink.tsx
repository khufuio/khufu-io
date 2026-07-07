'use client'

import { site } from '@/content/site'
import { track } from '@/lib/analytics'

/**
 * Tracked mailto link — emits `email_clicked` with its `source` so email leads
 * are counted alongside the form and WhatsApp. Style-agnostic.
 */
export function EmailLink({
  source,
  className,
  children,
}: {
  source: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={`mailto:${site.email}`}
      onClick={() => track('email_clicked', { source })}
      className={className}
    >
      {children}
    </a>
  )
}
