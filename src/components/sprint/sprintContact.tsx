'use client'

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { site } from '@/content/site'
import type { Locale } from '@/i18n/config'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'
import { sprintBookingUrl } from '@/lib/sprintBooking'
import { WhatsAppGlyph } from '@/components/layout/whatsappButton'

/**
 * The contact modal every CTA on the Sprint V1 landing opens.
 *
 * ⚠️ WHY IT EXISTS. Adrien, 2026-09-15: « les CTA qui t'emmènent juste à la
 * section contact, ça te semble pertinent ? un mec qui voit la page défiler va
 * juste vouloir lire… faudrait pas plutôt un truc style modal qui propose
 * WhatsApp ou form (ou mail) ? ». He is right about the mechanics: a button that
 * scrolls asks the visitor to resume reading somewhere else on the same page,
 * which is the opposite of answering their click.
 *
 * ⛔ THE HIERARCHY IS SETTLED — Adrien, 2026-09-15, deciding rather than leaving
 * the options open. THREE PATHS, ONE DOMINANT:
 *   1. « RÉSERVER 20 MIN » — the main path and the most visible thing here,
 *      carrying the week that was clicked. His reasoning is the part to keep:
 *      « à 15 000 €, la conversion qui compte est une conversation, pas une
 *      adresse e-mail dans une base ; et un rendez-vous à l'agenda est exactement
 *      le registre premium qu'on vend, là où trois champs anonymes font low-cost. »
 *   2. THE NET, one discreet line under it — one field, lead recorded on submit.
 *      It catches everyone not ready to block twenty minutes, i.e. most of cold
 *      paid traffic.
 *   3. WhatsApp, tertiary: a link, never a block.
 * ⛔ NOTHING ELSE. The direct mailto row was cut for the stated reason: « au-delà,
 * on ne réduit pas le frein, on ajoute de l'hésitation. »
 *
 * ⚠️ THE BOOKING BUTTON IS ALWAYS THERE, because the URL has a hard-coded
 * fallback (see lib/sprintBooking.ts). The code still handles an empty URL — it
 * hides the button and promotes the e-mail net to main path — so that clearing
 * the variable is a safe way to take bookings offline for a week without a
 * deploy of its own. ⛔ Hidden, never disabled: a dead link on paid traffic is
 * worse than a missing one.
 *
 * ⛔ AND NEVER A HOME-MADE CALENDAR (décision d'outillage cmu1uq7l — native Google
 * Workspace appointment schedules, never Cal.com or Calendly). Real availability,
 * time zones and cancellations are a product in their own right.
 *
 * ⚠️ THE INTEGRATION IS A PLAIN LINK, deliberately, and it copies what Clokizi's
 * showcase already does (`NEXT_PUBLIC_DEMO_URL`, read on 2026-09-15): an
 * `<a href>` to the calendar.app.google page. ⛔ Not an iframe — a Google
 * scheduler mounted on load costs LCP and CLS on the one page with an ad budget
 * pointed at it (decision cmu093fb).
 *
 * ⚠️ ACCESSIBILITY IS NOT DECORATION ON THIS ONE — it is the page's only
 * conversion path, so a keyboard or screen-reader visitor who cannot use it is a
 * lost lead: `role="dialog"` + `aria-modal`, focus moved inside on open and
 * RESTORED to the trigger on close, Escape closes, Tab is trapped, the page
 * behind is inert to scroll.
 *
 * ⚠️ AND IT DEGRADES TO THE ANCHOR. Every trigger is a real `<a href="#start">`.
 * With JavaScript off, no handler runs and the browser jumps to the form at the
 * foot of the page — which is exactly why that form stays there (the net), and
 * why the anchor constant lives in a directive-free module (lib/sprintAnchors.ts:
 * reading it from a client module is what broke every CTA in production).
 */

export type SprintContactCopy = {
  title: string
  weekNote: string
  bookLabel: string
  bookNote: string
  bookingLangNote: string
  bookingHours: string
  whatsappLabel: string
  close: string
  fallback: string
}

type OpenOptions = {
  /** Which CTA opened it — carried into every event fired from inside. */
  placement: string
  /** The week the click came from, when a dated chip or button opened it. */
  week?: string
}

type ContactContext = {
  open: (options: OpenOptions) => void
  /** The anchor a trigger falls back to when JavaScript never runs. */
  href: string
}

const Ctx = createContext<ContactContext | null>(null)

/**
 * Read by every trigger on the page. Outside the provider it returns `null`,
 * which is a legitimate state and not an error: a trigger rendered without a
 * provider stays a plain anchor to the form.
 */
export function useSprintContact(): ContactContext | null {
  return useContext(Ctx)
}

/* The URL, its fallback and the bounds on what may be restated from the
   booking page all live in the directive-free module that owns it. */
const BOOKING_URL = sprintBookingUrl

export function SprintContactProvider({
  locale,
  copy,
  children,
}: {
  locale: Locale
  copy: SprintContactCopy
  children: React.ReactNode
}) {
  const [state, setState] = useState<OpenOptions | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  /** The element that opened the modal — focus goes back to it on close. */
  const triggerRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  const open = useCallback((options: OpenOptions) => {
    // Captured before React repaints: once the dialog mounts and takes focus,
    // document.activeElement is no longer the button that was pressed.
    triggerRef.current = document.activeElement as HTMLElement | null
    setState(options)
  }, [])

  const close = useCallback(() => {
    setState(null)
    // Restoring focus is what makes the modal usable twice in a row from the
    // keyboard: without it, Tab resumes at the top of the document.
    triggerRef.current?.focus?.()
  }, [])

  useEffect(() => {
    if (!state) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      // The trap: wrap at both ends rather than letting focus escape to the page
      // behind, which is still rendered and still full of links.
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // Focus the dialog itself rather than the input: on a phone, focusing a text
    // field raises the keyboard over the very options we just opened.
    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [state, close])

  const value = useMemo<ContactContext>(() => ({ open, href: `#${SPRINT_FORM_ANCHOR}` }), [open])

  return (
    <Ctx.Provider value={value}>
      {children}
      {state && (
        <SprintContactDialog
          ref={dialogRef}
          titleId={titleId}
          locale={locale}
          copy={copy}
          options={state}
          onClose={close}
        />
      )}
    </Ctx.Provider>
  )
}

function SprintContactDialog({
  ref,
  titleId,
  locale,
  copy,
  options,
  onClose,
}: {
  ref: React.Ref<HTMLDivElement>
  titleId: string
  locale: Locale
  copy: SprintContactCopy
  options: OpenOptions
  onClose: () => void
}) {
  const { placement, week } = options

  /*
   * ⚠️ ONE `wa.me` LINK FOR BOTH DESKTOP AND MOBILE, and this is deliberate.
   * `https://wa.me/<number>` opens the app on a phone and falls through to
   * WhatsApp Web on a desktop, on its own. ⛔ Never a `whatsapp://` scheme: it
   * breaks on desktop, which is where a good share of a LinkedIn audience reads.
   * The week rides in the prefilled message so the conversation starts already
   * anchored on a date.
   */
  const waText = week
    ? `${WHATSAPP_PREFILL[locale]} ${copy.weekNote.replace('{date}', week)}`
    : WHATSAPP_PREFILL[locale]
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waText)}`

  /*
   * ⚠️ THE URL IS USED EXACTLY AS CONFIGURED — nothing is appended to it. A
   * Google appointment page owns its own parameters, and guessing at one (a
   * month, a duration) is how a booking link starts 404-ing silently. The week
   * is carried in the WhatsApp message and in the capture instead, where we
   * control the format.
   */
  const bookHref = BOOKING_URL

  function exit(path: 'booking' | 'whatsapp'): void {
    track(path === 'booking' ? 'sprint_booking_opened' : 'sprint_whatsapp_opened', {
      placement,
      week: week ?? null,
      locale,
      ...campaignProps(),
    })
  }

  return (
    <div className="sprint-modal" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="sprint-modal-panel"
      >
        <button type="button" onClick={onClose} aria-label={copy.close} className="sprint-modal-close">
          <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" strokeWidth={2} strokeLinecap="round">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" />
          </svg>
        </button>

        <h2
          id={titleId}
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] text-balance"
        >
          {copy.title}
        </h2>
        {week && (
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-accent-ink)] uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            {copy.weekNote.replace('{date}', week)}
          </p>
        )}

        {/* 1 — THE MAIN PATH: it opens the calendar. Rendered only when a
            booking URL is configured; a dead link on paid traffic is worse than
            a missing one. */}
        {bookHref && (
          <div className="mt-5">
            <a
              href={bookHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => exit('booking')}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-ink)]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="size-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
              </svg>
              {copy.bookLabel}
            </a>
            <p className="mt-3 text-center text-sm text-[var(--color-ink-2)] text-pretty">{copy.bookNote}</p>
            {/* Availability, and the one warning the visitor needs before they
                land on an English-only page they cannot change. */}
            <p className="mt-2 text-center text-xs text-[var(--color-muted)] text-pretty">
              {copy.bookingHours} · {copy.bookingLangNote}
            </p>
          </div>
        )}

        {/* 2 — WhatsApp, tertiary: a link, never a block. */}
        <div className="mt-5 flex justify-center border-t border-[var(--color-line)] pt-5">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => exit('whatsapp')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-2)] underline-offset-4 hover:underline"
          >
            <WhatsAppGlyph size={16} className="text-[#25D366]" />
            {copy.whatsappLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * The WhatsApp opener, per locale. Duplicated from whatsappButton.tsx rather than
 * exported from it: that module is the site-wide floating button, this is the
 * landing's own conversation, and the two messages are allowed to diverge.
 */
const WHATSAPP_PREFILL: Record<Locale, string> = {
  fr: 'Bonjour Khufu, je veux lancer ma V1 !',
  en: 'Hi Khufu, I want to launch my V1!',
  es: '¡Hola Khufu, quiero lanzar mi V1!',
  de: 'Hallo Khufu, ich möchte meine V1 starten!',
  it: 'Ciao Khufu, voglio lanciare la mia V1!',
  pt: 'Olá Khufu, quero lançar a minha V1!',
  nl: 'Hoi Khufu, ik wil mijn V1 lanceren!',
  ar: 'مرحباً خوفو، أريد إطلاق نسختي الأولى V1!',
  pl: 'Cześć Khufu, chcę uruchomić moje V1!',
  tr: 'Merhaba Khufu, V1’imi başlatmak istiyorum!',
}
