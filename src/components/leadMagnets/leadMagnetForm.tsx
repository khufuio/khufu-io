'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'
import { track, identifyLead } from '@/lib/analytics'
import { pdfPath } from '@/content/leadMagnets'

type Status = 'idle' | 'sending' | 'success'

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

/**
 * Carry the ad tags from the URL onto the lead itself.
 *
 * PostHog stores them session-side, but the Resend contact is what tells us
 * later which creative produced a paid sprint. Without this hop the chain breaks
 * exactly where it matters: attributable on arrival, anonymous at the outcome.
 */
function readUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim()
    if (value) out[key] = value.slice(0, 120)
  }
  return out
}

/**
 * The single conversion point of a lead magnet page: email in, PDF out.
 *
 * The download link is handed over client-side as soon as the submission is
 * accepted, whether or not the email actually went out. A delivery problem
 * (Resend key missing, sender domain unverified, spam filter) then costs us the
 * nurture sequence, never the reader's download — which is the promise on the
 * button.
 */
export function LeadMagnetForm({
  slug,
  buttonLabel = 'Send me the PDF',
  placement,
}: {
  slug: string
  buttonLabel?: string
  /** Which form on the page converted — there are two, top and bottom. */
  placement: 'hero' | 'footer'
}) {
  const [status, setStatus] = useState<Status>('idle')
  // Whether the email actually went out — the success copy should not promise
  // an inbox delivery that the API just told us failed.
  const [emailed, setEmailed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const download = pdfPath(slug)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email') ?? '').trim()
    // Honeypot: a real user never fills a hidden field. Silently succeed so a
    // bot gets no signal about why nothing arrived.
    const trap = String(data.get('company_website') ?? '')

    if (!isEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)

    if (trap) {
      setStatus('success')
      return
    }

    setStatus('sending')
    const utm = readUtm()
    identifyLead(email, { lead_magnet: slug, ...utm })
    track('lead_magnet_submitted', { magnet: slug, placement, ...utm })

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, slug, placement, utm }),
      })
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; reason?: string }
      if (res.ok && body.ok) {
        setEmailed(true)
        track('lead_magnet_delivered', { magnet: slug, placement })
      } else {
        track('lead_magnet_delivery_failed', { magnet: slug, placement, reason: body.reason ?? res.status })
      }
    } catch {
      track('lead_magnet_delivery_failed', { magnet: slug, placement, reason: 'network' })
    }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-6 sm:p-7">
        <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-accent-ink)]">
          Here it is.
        </p>
        <p className="mt-2 text-[var(--color-ink-2)]">
          {emailed
            ? 'A copy is on its way to your inbox — check your spam folder if it has not arrived in a few minutes. Or just take it now:'
            : 'Your copy is ready — grab it here:'}
        </p>
        <a
          href={download}
          download
          onClick={() => track('lead_magnet_download_clicked', { magnet: slug, placement })}
          className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-ink)]"
        >
          Download the PDF
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 shadow-[0_1px_2px_rgba(14,14,16,0.04)] sm:p-7"
    >
      <label htmlFor={`email-${placement}`} className="block text-sm font-medium text-[var(--color-ink)]">
        Where should I send it?
      </label>
      <input
        id={`email-${placement}`}
        name="email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="you@company.com"
        aria-describedby={error ? `email-error-${placement}` : undefined}
        className={cn(
          'mt-2 w-full rounded-[var(--radius-lg)] border bg-white px-4 py-3 text-[16px] text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-accent)]',
          error ? 'border-[#b4232a]' : 'border-[var(--color-line)]',
        )}
      />

      {/* Honeypot — visually hidden, never announced, never autofilled. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`company-website-${placement}`}>Company website</label>
        <input id={`company-website-${placement}`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p id={`email-error-${placement}`} className="mt-2 text-sm text-[#b4232a]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-ink)] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : buttonLabel}
      </button>

      <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
        Free, no account needed. A few follow-up emails about shipping V1s — unsubscribe in one click.
      </p>
    </form>
  )
}
