'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'
import { site } from '@/content/site'
import type { Locale } from '@/i18n/config'
import { track, identifyLead } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { WhatsAppGlyph, WhatsAppLink } from '@/components/layout/whatsappButton'

type Status = 'idle' | 'sending' | 'success'

/** The form strings, already resolved for the visitor's locale by the page. */
export type SprintFormCopy = {
  title: string
  body: string
  name: string
  email: string
  company: string
  project: string
  projectPlaceholder: string
  submit: string
  sending: string
  invalidEmail: string
  successTitle: string
  successBody: string
  privacy: string
  whatsapp: string
}

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

/**
 * The single conversion point of the Sprint V1 landing: a scoped brief in, a
 * written scope + price + date back within 24h.
 *
 * Posts to the same `/api/contact` endpoint as the contact page — one inbox, one
 * Resend integration — but carries the campaign tags with the lead so the
 * attribution chain survives all the way to the outcome. If the endpoint isn't
 * configured or fails, it falls back to a prefilled mailto: an ad click that
 * reached the form is too expensive to drop on a 501.
 */
export function SprintLeadForm({
  copy,
  locale,
  placement,
}: {
  copy: SprintFormCopy
  locale: Locale
  /** Which of the two forms converted — top of page or bottom. */
  placement: 'hero' | 'footer'
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  function mailtoFallback(fields: { name: string; email: string; company: string; message: string }): void {
    const subject = `[khufu.io] Sprint V1 — ${fields.name}`
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.company && `Company: ${fields.company}`,
      '',
      fields.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fields = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    }
    // Honeypot: a real visitor never fills a hidden field. Succeed silently so a
    // bot gets no signal about why nothing arrived.
    const trap = String(data.get('company_website') ?? '')

    if (!isEmail(fields.email)) {
      setError(copy.invalidEmail)
      return
    }
    setError(null)

    if (trap) {
      setStatus('success')
      return
    }

    setStatus('sending')
    const campaign = campaignProps()
    identifyLead(fields.email, { offer: 'sprint-v1', locale, ...campaign })
    track('sprint_lead_submitted', { placement, locale, ...campaign })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          budget: 'Sprint V1',
          source: `sprint-landing:${placement}`,
          utm: campaign,
        }),
      })
      if (res.ok) {
        setStatus('success')
        return
      }
      // Endpoint not configured (Resend key missing) or refused → mailto.
      // Tracked apart: these leads never reach the inbox on their own.
      track('sprint_lead_fallback', { placement, locale, reason: res.status, ...campaign })
      mailtoFallback(fields)
      setStatus('idle')
    } catch {
      track('sprint_lead_fallback', { placement, locale, reason: 'network', ...campaign })
      mailtoFallback(fields)
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-7">
        <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-accent-ink)]">
          {copy.successTitle}
        </p>
        <p className="mt-3 text-[var(--color-ink-2)]">{copy.successBody}</p>
        <WhatsAppLink
          locale={locale}
          source={`sprint_landing_${placement}_success`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          <WhatsAppGlyph size={18} />
          {site.whatsappDisplay}
        </WhatsAppLink>
      </div>
    )
  }

  const field =
    'w-full rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-4 py-3 text-[16px] text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-accent)]'
  const label = 'mb-1.5 block text-sm font-medium text-[var(--color-ink)]'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 shadow-[0_1px_2px_rgba(14,14,16,0.04)] sm:p-7"
    >
      <div className="grid gap-4">
        <div>
          <label className={label} htmlFor={`name-${placement}`}>
            {copy.name}
          </label>
          <input id={`name-${placement}`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor={`email-${placement}`}>
            {copy.email}
          </label>
          <input
            id={`email-${placement}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-describedby={error ? `email-error-${placement}` : undefined}
            className={cn(field, error && 'border-[#b4232a]')}
          />
          {error && (
            <p id={`email-error-${placement}`} className="mt-2 text-sm text-[#b4232a]">
              {error}
            </p>
          )}
        </div>
        <div>
          <label className={label} htmlFor={`company-${placement}`}>
            {copy.company}
          </label>
          <input id={`company-${placement}`} name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label className={label} htmlFor={`message-${placement}`}>
            {copy.project}
          </label>
          <textarea
            id={`message-${placement}`}
            name="message"
            required
            rows={4}
            placeholder={copy.projectPlaceholder}
            className={cn(field, 'resize-y placeholder:text-[var(--color-muted)]')}
          />
        </div>
      </div>

      {/* Honeypot — visually hidden, never announced, never autofilled. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`company-website-${placement}`}>Company website</label>
        <input id={`company-website-${placement}`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-ink)] disabled:opacity-60"
      >
        {status === 'sending' ? copy.sending : copy.submit}
      </button>

      <p className="mt-3 text-center text-xs text-[var(--color-muted)]">{copy.privacy}</p>

      <div className="mt-4 flex justify-center">
        <WhatsAppLink
          locale={locale}
          source={`sprint_landing_${placement}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
        >
          <WhatsAppGlyph size={16} />
          {copy.whatsapp}
        </WhatsAppLink>
      </div>
    </form>
  )
}
