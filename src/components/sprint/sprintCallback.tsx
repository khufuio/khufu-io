'use client'

import { useCallback, useId, useRef, useState } from 'react'
import { site } from '@/content/site'
import type { Locale } from '@/i18n/config'
import { track } from '@/lib/analytics'
import { campaignProps, readUtm } from '@/lib/utm'
import { SPRINT_EVENTS, type SprintContactSurface } from '@/lib/sprintContactEvents'

/**
 * THE NET — the only thing on this page a visitor can leave without booking.
 *
 * ⛔ IT IS A CALLBACK REQUEST, NOT A CONTACT FORM, and the distinction is the
 * whole decision. Adrien rejected « nom / prénom / e-mail / votre projet » as
 * basique et pas premium, and he was right: four anonymous fields are what a
 * €500 landing asks for, they duplicate exactly what the Google booking page
 * already collects, and they are ASYMMETRIC — the visitor hands over a dossier
 * and receives a promise. The pass that followed then over-corrected and deleted
 * every alternative to the call, which is the error this one repairs.
 *
 * ⚠️ WHY A NET HAS TO EXIST AT ALL — three reasons, none of them "more leads":
 *
 *   1. THE CALENDAR MECHANICALLY EXCLUDES PEOPLE. Bookings run 10:00–14:00 UTC,
 *      never the same day, 14 days out (decision cmu1vu88). That is 02:00–06:00
 *      on the US west coast and 18:00–22:00 in Singapore. A visitor reading this
 *      page at 23:00 with real intent has, without this field, no way to act at
 *      the moment the intent exists. That is not reluctance, it is a closed door.
 *   2. THE PAGE SHIPS IN TEN LANGUAGES AND THE BOOKING PAGE IS IN ENGLISH ONLY.
 *      Some share of tr/pl/ar/nl readers will not complete an English scheduler.
 *      They are not lost leads, they are leads with no door.
 *   3. THERE WAS NOTHING TO COMPARE A BOOKING AGAINST. With one path, the funnel
 *      can only report its own success rate. See lib/sprintContactEvents.ts.
 *
 * ⚠️ HOW IT STAYS PREMIUM ANYWAY — the three things that make it not-a-form:
 *   - ONE FIELD. No name: at €15k an address is enough to start a conversation,
 *     and the name arrives in the reply. No "your project": the booking page
 *     already asks « Where is your project today? » and asking it twice is how a
 *     funnel teaches people it is not listening.
 *   - IT IS FOLDED. A `<details>` — the field is the ANSWER to "not now", never
 *     the first thing on screen. The page's first impression is one button.
 *   - THE PROMISE IS INVERTED. Not "leave your details and we will get back to
 *     you" (they give, they wait) but "you get slots in your own timezone, under
 *     24h". We do the work. That is the register the offer is sold in.
 *
 * ⛔ DO NOT ADD A SECOND FIELD HERE. Not a name, not a phone, not a dropdown.
 * The moment this has two fields it is the form that was rejected, and the
 * argument above stops being true.
 *
 * ⚠️ IT DEGRADES. `<details>` opens with no JavaScript at all, and the noscript
 * rule on the page swaps the form for a prefilled mailto (`data-js-only` /
 * `data-nojs-only`) so the folded panel is never an empty box.
 */

export type SprintCallbackCopy = {
  /** The `<summary>` — the "not now" question, never a label. */
  link: string
  body: string
  placeholder: string
  submit: string
  sending: string
  done: string
  invalid: string
  /** Shown only when the endpoint refuses or fails; the mailto follows it. */
  failed: string
  privacy: string
  /** Accessible name of the single input. */
  fieldLabel: string
  /** The rescue link's own label, used by the failure path AND the no-JS path. */
  mailLabel: string
}

type Status = 'idle' | 'sending' | 'done' | 'invalid' | 'failed'

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export function SprintCallback({
  locale,
  copy,
  placement,
  surface,
  week,
  tone = 'light',
}: {
  locale: Locale
  copy: SprintCallbackCopy
  /** The CTA that started the journey — carried through, never rewritten. */
  placement: string
  surface: SprintContactSurface
  week?: string
  /** `dark` is the closing block's ink ground, `light` the modal's paper one. */
  tone?: 'light' | 'dark'
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const fieldId = useId()
  const noteId = useId()
  /** The honeypot's value — read on submit, never shown, never typed by a human. */
  const trapRef = useRef<HTMLInputElement | null>(null)
  /** Guards the reveal event: a `<details>` toggles both ways. */
  const revealedRef = useRef(false)

  const props = useCallback(
    () => ({ placement, surface, week: week ?? null, locale, ...campaignProps() }),
    [placement, surface, week, locale],
  )

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Sprint V1${week ? ` — ${week}` : ''}`,
  )}`

  function onToggle(event: React.SyntheticEvent<HTMLDetailsElement>): void {
    if (!event.currentTarget.open || revealedRef.current) return
    revealedRef.current = true
    track(SPRINT_EVENTS.callbackRevealed, props())
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const value = email.trim()
    if (!isEmail(value)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/sprint-callback', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: value,
          locale,
          week: week ?? '',
          placement,
          surface,
          utm: readUtm(),
          company: trapRef.current?.value ?? '',
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
      /* ⛔ The event fires ONLY after the server said yes. An optimistic capture
         here would report leads that never reached the inbox — the single worst
         thing this instrumentation could do, because it is the number the next
         arbitration is going to be made on. */
      track(SPRINT_EVENTS.callbackRequested, props())
    } catch {
      setStatus('failed')
      track(SPRINT_EVENTS.callbackFailed, props())
    }
  }

  const dark = tone === 'dark'
  const muted = dark ? 'text-[color-mix(in_srgb,var(--color-paper)_62%,transparent)]' : 'text-[var(--color-muted)]'
  const body = dark ? 'text-[color-mix(in_srgb,var(--color-paper)_78%,transparent)]' : 'text-[var(--color-ink-2)]'
  /* Two reds rather than one token: #b42318 is 6.5:1 on paper and unreadable on
     ink, #ff9a90 is 6.9:1 on ink and unreadable on paper. An error message that
     cannot be read is the same as no error message. */
  const danger = dark ? 'text-[#ff9a90]' : 'text-[#b42318]'

  return (
    <details className="sprint-callback" onToggle={onToggle}>
      <summary className={`sprint-callback-summary ${dark ? 'sprint-callback-summary-dark' : ''}`}>
        {copy.link}
      </summary>

      <div className="mt-3">
        <p className={`text-sm/[1.5] text-pretty ${body}`} id={noteId}>
          {copy.body}
        </p>

        {status === 'done' ? (
          /* ⚠️ `role="status"`: the panel replaces itself in place, so a screen
             reader that never saw the change would be left on a form that is no
             longer there. */
          <p
            role="status"
            className={`mt-3 flex items-start gap-2 text-sm font-medium ${dark ? 'text-[var(--color-paper)]' : 'text-[var(--color-accent-ink)]'}`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="mt-[3px] size-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
            {copy.done}
          </p>
        ) : (
          <>
            <form onSubmit={onSubmit} data-js-only className="mt-3 flex flex-col gap-2 sm:flex-row">
              <label htmlFor={fieldId} className="sr-only">
                {copy.fieldLabel}
              </label>
              <input
                id={fieldId}
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'invalid' || status === 'failed') setStatus('idle')
                }}
                placeholder={copy.placeholder}
                autoComplete="email"
                inputMode="email"
                required
                aria-describedby={noteId}
                aria-invalid={status === 'invalid'}
                className={`sprint-callback-input ${dark ? 'sprint-callback-input-dark' : ''}`}
              />
              {/* The honeypot. `tabIndex={-1}` and `aria-hidden` keep it away from
                  keyboards and screen readers; only a form-filling bot finds it. */}
              <input
                ref={trapRef}
                type="text"
                name="company"
                tabIndex={-1}
                aria-hidden
                autoComplete="off"
                className="sprint-callback-trap"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`sprint-callback-submit ${dark ? 'sprint-callback-submit-dark' : ''}`}
              >
                {status === 'sending' ? copy.sending : copy.submit}
              </button>
            </form>

            {status === 'invalid' && (
              <p role="alert" className={`mt-2 text-sm ${danger}`}>
                {copy.invalid}
              </p>
            )}

            {/* ⚠️ THE RESCUE. An ad click that got as far as typing an address is
                far too expensive to drop on a 501 — so a failure hands over a
                prefilled mailto rather than an apology. */}
            {status === 'failed' && (
              <p role="alert" className={`mt-2 text-sm ${body}`}>
                {copy.failed}{' '}
                <a
                  href={mailHref}
                  onClick={() => track(SPRINT_EVENTS.emailFallbackOpened, props())}
                  className="font-medium underline underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
            )}
          </>
        )}

        {/* No JavaScript: the form above is hidden by the page's noscript rule and
            this takes its place, so the folded panel is never an empty box. */}
        <p data-nojs-only className={`mt-3 text-sm ${body}`}>
          {copy.mailLabel}{' '}
          <a href={mailHref} className="font-medium underline underline-offset-4">
            {site.email}
          </a>
        </p>

        <p className={`mt-2 text-xs text-pretty ${muted}`}>{copy.privacy}</p>
      </div>
    </details>
  )
}
