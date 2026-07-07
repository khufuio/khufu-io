'use client'

import { useRef, useState } from 'react'
import { site } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { cn } from '@/lib/cn'
import { track } from '@/lib/analytics'
import { WhatsAppGlyph } from '@/components/layout/whatsappButton'
import { PricedText, useResolvePrice } from '@/components/ui/price'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Posts to /api/contact (Resend). If the endpoint isn't configured yet (501)
// or fails, falls back to a prefilled mailto so no lead is ever lost.
export function ContactForm({ dict }: { dict: Dictionary }) {
  const f = dict.contact.form
  const [budget, setBudget] = useState<string>(f.budgetOptions[0])
  // `budget` keeps the raw option (with any [[price]] token) as a stable key;
  // `resolvedBudget` is what we actually send (token → visitor's currency).
  const resolvedBudget = useResolvePrice()(budget, dict.meta.locale)
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  // Opens WhatsApp with a message personalised by the selected request type.
  function openWhatsApp() {
    const form = formRef.current
    const name = form ? String(new FormData(form).get('name') ?? '') : ''
    const message = form ? String(new FormData(form).get('message') ?? '') : ''
    const text = [
      name ? `${name} — ${resolvedBudget}` : resolvedBudget,
      message,
    ]
      .filter(Boolean)
      .join('\n')
    track('whatsapp_clicked', { locale: dict.meta.locale, source: 'contact_form' })
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  function mailtoFallback(fields: { name: string; email: string; company: string; message: string }) {
    const subject = `[khufu.io] ${fields.name} — ${resolvedBudget}`
    const body = [
      `Nom: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.company && `Entreprise: ${fields.company}`,
      `Budget: ${resolvedBudget}`,
      '',
      fields.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fields = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      company: String(data.get('company') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...fields, budget: resolvedBudget }),
      })
      if (res.ok) {
        track('contact_form_submitted', { budget: resolvedBudget })
        setStatus('success')
        return
      }
      // Endpoint not configured (e.g. Resend key missing) → mailto fallback.
      // Tracked separately: these leads never hit `contact_form_submitted`.
      track('contact_form_fallback', { budget: resolvedBudget, reason: 'endpoint' })
      mailtoFallback(fields)
      setStatus('idle')
    } catch {
      track('contact_form_fallback', { budget: resolvedBudget, reason: 'network' })
      mailtoFallback(fields)
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-8">
        <p className="text-lg font-medium text-[var(--color-accent-ink)]">{f.success}</p>
      </div>
    )
  }

  const field =
    'w-full rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-accent)]'
  const label = 'mb-1.5 block text-sm font-medium text-[var(--color-ink)]'

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            {f.name}
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            {f.email}
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="company">
          {f.company}
        </label>
        <input id="company" name="company" className={field} autoComplete="organization" />
      </div>

      <div>
        <span className={label}>{f.budget}</span>
        <div className="flex flex-wrap gap-2">
          {f.budgetOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setBudget(opt)}
              aria-pressed={budget === opt}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                budget === opt
                  ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]'
                  : 'border-[var(--color-line)] text-[var(--color-ink-2)] hover:border-[var(--color-ink)]',
              )}
            >
              <PricedText text={opt} locale={dict.meta.locale} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          {f.message}
        </label>
        <textarea id="message" name="message" required rows={5} className={cn(field, 'resize-y')} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-ink)] disabled:opacity-60"
        >
          {status === 'sending' ? '…' : f.submit}
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          <WhatsAppGlyph size={18} />
          WhatsApp
        </button>
      </div>
    </form>
  )
}
