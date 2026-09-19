'use client'

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import type { Locale } from '@/i18n/config'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { trackLinkedInConversion } from '@/lib/linkedin'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'
import { sprintBookingUrl } from '@/lib/sprintBooking'
import {
  SPRINT_CONTACT_EVENT,
  SPRINT_EVENTS,
  type SprintContactEventDetail,
  type SprintContactPath,
} from '@/lib/sprintContactEvents'
import { SprintCallback, type SprintCallbackCopy } from '@/components/sprint/sprintCallback'
import { SprintWhatsappLink } from '@/components/sprint/sprintWhatsappLink'

/**
 * The contact modal every CTA on the Sprint V1 landing opens.
 *
 * ⚠️ WHY IT EXISTS. Adrien, 2026-09-15: « les CTA qui t'emmènent juste à la
 * section contact, ça te semble pertinent ? un mec qui voit la page défiler va
 * juste vouloir lire… ». He is right about the mechanics: a button that scrolls
 * asks the visitor to resume reading somewhere else on the same page, which is
 * the opposite of answering their click.
 *
 * ⛔ BUT A MODAL THAT ONLY RE-ROUTES *IS* A CLICK TOO MANY, and that is the
 * failure mode this version was rebuilt against. The previous one was a MENU —
 * a button, a rule, another option — presented at the exact moment intent peaks.
 * A menu at peak intent spends the intent on a choice.
 *
 * ⚠️ SO IT IS A BRIEFING, NOT A MENU. Everything above the rule answers one
 * question, the one a €15k buyer actually has before clicking: « what am I
 * committing to? » — the week they clicked, thirty minutes, what comes out of
 * it, when we are available, and the one thing they cannot discover any other
 * way: THE BOOKING PAGE IS IN ENGLISH. That warning is what earns the step. A
 * French, Turkish or Arabic reader dropped without it onto an English-only
 * Google scheduler is a lead lost to surprise, and it reads sloppy on a page
 * selling a €15,000 engagement. Everything below the rule is the answer to "not now",
 * and is deliberately quiet.
 *
 * ⛔ AND THE FOOT OF THE PAGE SKIPS IT. The closing block links straight to the
 * calendar — a reader who scrolled the whole page has already been briefed by
 * the page itself. The step is paid once, by the visitor who clicks mid-read.
 *
 * ⚠️ THE STEP IS ALSO MEASURED, WHICH IS THE POINT. `sprint_contact_dismissed`
 * (with `dwell_ms`) against `sprint_contact_opened` says whether the modal is
 * costing bookings, and `sprint_booking_opened` splits by `surface` so the
 * briefed route and the direct one are comparable. In a month this is an
 * arbitration, not an opinion. ⛔ Do not remove the dismissal event to tidy up.
 *
 * ⛔ THREE PATHS, ONE DOMINANT, AND NO FOURTH:
 *   1. THE CALL — the €15k conversion is a conversation, not an address in a
 *      base, and a slot in a diary is the register the offer is sold in.
 *   2. THE NET — one folded e-mail field. Read sprintCallback.tsx for why it
 *      exists and why it is not the « nom / prénom / e-mail / votre projet »
 *      form that was rejected: it catches the visitor the calendar mechanically
 *      excludes (10:00–14:00 UTC, never today, 14 days out).
 *   3. WhatsApp, tertiary: a link, never a block. It stays HERE and nowhere else
 *      on this page — see the note on the floating button in whatsappButton.tsx.
 *
 * ⚠️ THE BOOKING BUTTON IS ALWAYS THERE, because the URL has a hard-coded
 * fallback (see lib/sprintBooking.ts). The code still handles an empty URL — it
 * hides the button and the net becomes the main path — so that clearing the
 * variable is a safe way to take bookings offline for a week without a deploy of
 * its own. ⛔ Hidden, never disabled: a dead link on paid traffic is worse than
 * a missing one.
 *
 * ⛔ AND NEVER A HOME-MADE CALENDAR (décision d'outillage cmu1uq7l — native
 * Google Workspace appointment schedules, never Cal.com or Calendly). Real
 * availability, time zones and cancellations are a product in their own right.
 *
 * ⚠️ THE INTEGRATION IS A PLAIN LINK, deliberately. ⛔ Not an iframe — a Google
 * scheduler mounted on load costs LCP and CLS on the one page with an ad budget
 * pointed at it (decision cmu093fb).
 *
 * ⚠️ ACCESSIBILITY IS NOT DECORATION ON THIS ONE — it is the page's conversion
 * path, so a keyboard or screen-reader visitor who cannot use it is a lost lead:
 * `role="dialog"` + `aria-modal`, focus moved inside on open and RESTORED to the
 * trigger on close, Escape closes, Tab is trapped, the page behind is inert.
 *
 * ⚠️ AND IT DEGRADES TO THE ANCHOR. Every trigger is a real `<a href="#start">`.
 * With JavaScript off, no handler runs and the browser jumps to the closing
 * block — which carries the booking link and the net for exactly that reason,
 * and why the anchor constant lives in a directive-free module.
 */

export type SprintContactCopy = {
  title: string
  weekNote: string
  bookLabel: string
  bookNote: string
  bookingNote: string
  whatsappLabel: string
  close: string
  fallback: string
  /** The net's own strings — one field, folded. */
  callback: SprintCallbackCopy
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
  /** The reading language, so a trigger need not be handed it twice. */
  locale: Locale
  /** Whether the modal is showing — the floating CTA steps aside while it is. */
  isOpen: boolean
}

const Ctx = createContext<ContactContext | null>(null)

/**
 * Read by every trigger on the page. Outside the provider it returns `null`,
 * which is a legitimate state and not an error: a trigger rendered without a
 * provider stays a plain anchor to the closing block.
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
  week,
  children,
}: {
  locale: Locale
  copy: SprintContactCopy
  /**
   * The week the page is currently selling, for a trigger that has no week of
   * its own — the site header. Context, never a commitment: it names the chip,
   * the prefilled WhatsApp message and the analytics property, and no button
   * label (2026-09-15, see hero.ctaLabel in sprintLanding.ts).
   */
  week?: string
  children: React.ReactNode
}) {
  const [state, setState] = useState<OpenOptions | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  /** The element that opened the modal — focus goes back to it on close. */
  const triggerRef = useRef<HTMLElement | null>(null)
  /** Which path was taken, if any. A close with this still null is a dismissal. */
  const chosenRef = useRef<SprintContactPath | null>(null)
  /** When it opened — `dwell_ms` is what separates a mis-click from a real read. */
  const openedAtRef = useRef(0)
  const titleId = useId()

  const open = useCallback(
    (options: OpenOptions) => {
      // Captured before React repaints: once the dialog mounts and takes focus,
      // document.activeElement is no longer the button that was pressed.
      triggerRef.current = document.activeElement as HTMLElement | null
      chosenRef.current = null
      openedAtRef.current = Date.now()
      setState(options)
      track(SPRINT_EVENTS.contactOpened, {
        placement: options.placement,
        surface: 'modal',
        week: options.week ?? null,
        locale,
        ...campaignProps(),
      })
    },
    [locale],
  )

  const close = useCallback(() => {
    setState((current) => {
      /*
       * ⚠️ THE DISMISSAL EVENT IS THE WHOLE JUSTIFICATION OF THE EXTRA STEP.
       * It fires only when the modal is closed with no path taken — opening the
       * calendar in a new tab and then closing this is NOT a dismissal, which is
       * why `chosenRef` exists. Without this event the "is the modal a click too
       * many?" question can only ever be answered by opinion.
       */
      if (current && !chosenRef.current) {
        track(SPRINT_EVENTS.contactDismissed, {
          placement: current.placement,
          surface: 'modal',
          week: current.week ?? null,
          locale,
          dwell_ms: Date.now() - openedAtRef.current,
          ...campaignProps(),
        })
      }
      return null
    })
    // Restoring focus is what makes the modal usable twice in a row from the
    // keyboard: without it, Tab resumes at the top of the document.
    triggerRef.current?.focus?.()
  }, [locale])

  const markChosen = useCallback((path: SprintContactPath) => {
    chosenRef.current = path
  }, [])

  /*
   * ⚠️ THE SITE HEADER'S CTA OPENS THIS MODAL, AND IT COULD NOT BEFORE.
   *
   * ⛔ THE BUG IT FIXES WAS LIVE AND IT KILLED THE PAGE'S MOST VISIBLE BUTTON.
   * On the landing the header CTA was a `next/link` to `#start`. The first click
   * scrolled to the closing block and put `#start` in the address bar — and
   * every click after that did NOTHING AT ALL: the router sees the same URL and
   * stands down, and the browser does not re-run a hash jump for a hash that has
   * not changed. So the one permanently-visible button on a page carrying an ad
   * budget was dead for the whole rest of the visit, and dead on arrival for
   * anyone landing on a `#start` link. Adrien, 2026-09-15: « le bouton Réserver
   * un sprint du header ne fait RIEN ». Measured in a browser against production
   * before the fix: first click 0 → 7642px, second and third click 0 → 0.
   *
   * The header is rendered by the shared locale layout, outside this provider,
   * so it cannot read the context. It dispatches a window event instead; we
   * answer it here and call `preventDefault()` to say so, which is what tells
   * the header to swallow the anchor jump. Nothing listening — every other page,
   * or JavaScript that never ran — leaves it a plain `<a href="#start">`.
   * ⛔ `scripts/checkSprintHtml.ts` now fails the recipe if the header's CTA
   * stops rendering with its `data-cta` marker, which is the trace of this path.
   */
  useEffect(() => {
    function onRequest(event: Event): void {
      const detail = (event as CustomEvent<SprintContactEventDetail>).detail
      event.preventDefault()
      open({ placement: detail?.placement ?? 'header', week })
    }
    window.addEventListener(SPRINT_CONTACT_EVENT, onRequest)
    return () => window.removeEventListener(SPRINT_CONTACT_EVENT, onRequest)
  }, [open, week])

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
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
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

  const isOpen = state !== null
  const value = useMemo<ContactContext>(
    () => ({ open, href: `#${SPRINT_FORM_ANCHOR}`, locale, isOpen }),
    [open, locale, isOpen],
  )

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
          onChoose={markChosen}
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
  onChoose,
  onClose,
}: {
  ref: React.Ref<HTMLDivElement>
  titleId: string
  locale: Locale
  copy: SprintContactCopy
  options: OpenOptions
  onChoose: (path: SprintContactPath) => void
  onClose: () => void
}) {
  const { placement, week } = options

  /*
   * ⚠️ THE URL IS USED EXACTLY AS CONFIGURED — nothing is appended to it. A
   * Google appointment page owns its own parameters, and guessing at one (a
   * month, a duration) is how a booking link starts 404-ing silently. The week
   * is carried in the WhatsApp message and in the callback instead, where we
   * control the format.
   */
  const bookHref = BOOKING_URL

  /* WhatsApp records itself, inside `SprintWhatsappLink`; this is the booking
     path only. ⛔ Both still call `onChoose`, because a close after a path was
     taken is not a dismissal and the dismissal event is what justifies the
     modal's existence (see the header note). */
  function exit(path: 'booking'): void {
    onChoose(path)
    track(SPRINT_EVENTS.bookingOpened, {
      placement,
      surface: 'modal',
      week: week ?? null,
      locale,
      ...campaignProps(),
    })
    trackLinkedInConversion('bookingOpened')
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
        {/*
         * ⛔ THE WEEK CHIP USED TO SIT HERE AND IT IS GONE (2026-09-15, pass 5).
         * It read « SEMAINE DU 28 SEPTEMBRE », and Adrien: « on ne comprend pas ce
         * que l'info fait là, d'autant qu'on s'apprête à choisir une date dans un
         * calendrier ». He is describing a real contradiction, not a wording
         * problem: this dialog books a THIRTY-MINUTE SCOPING CALL, and the next
         * thing the visitor sees is Google offering them slots that have nothing
         * to do with that date. Two dates, no stated relationship, on the one
         * screen where a €15k buyer is asking « what am I committing to? » — and a
         * pill is the most assertive element available, so it read as a booking
         * already made.
         *
         * ⛔ AND IT WAS NOT TURNED INTO AN EXPLAINING SENTENCE, which was the
         * other option. A sentence explaining why a date is displayed is copy
         * spent justifying the display of something that should not be displayed;
         * the modal's own rule is that it answers what the visitor is committing
         * to, and the week is not part of it. `bookNote` already says the true
         * answer — thirty minutes, and you leave with a date.
         *
         * ⚠️ THE WEEK STILL TRAVELS, exactly as pass 4 established, and removing
         * the chip is what makes that honest rather than contradictory: it is in
         * the prefilled WhatsApp message (a channel where we control the framing),
         * in the callback, and on every analytics event fired from here. Context
         * in the machinery, never a commitment on screen. ⛔ Do not render `week`
         * in this dialog again.
         */}

        {/* 1 — THE BRIEFING AND THE MAIN PATH. What the thirty minutes produce
            comes BEFORE the button, because that is the sentence that makes the
            click worth its step. Rendered only when a booking URL is configured;
            a dead link on paid traffic is worse than a missing one. */}
        {bookHref && (
          <div className="mt-4">
            <p className="text-[15px]/[1.5] text-[var(--color-ink-2)] text-pretty">{copy.bookNote}</p>
            <a
              href={bookHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => exit('booking')}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-ink)]"
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
            {/* Availability, and the one warning the visitor needs before they
                land on an English-only page they cannot change. ⛔ This line is
                the reason the step is allowed to exist — do not move it behind
                the click it is warning about. */}
            <p className="mt-3 text-center text-xs text-[var(--color-muted)] text-pretty">
              {copy.bookingNote}
            </p>
          </div>
        )}

        {/* 2 & 3 — THE "NOT NOW" ZONE, below the rule and deliberately quiet: the
            folded net, then WhatsApp as a single line. ⛔ Nothing else goes here.
            Adrien, 2026-09-15: « au-delà, on ne réduit pas le frein, on ajoute de
            l'hésitation. » */}
        <div className="mt-6 border-t border-[var(--color-line)] pt-5">
          <SprintCallback
            locale={locale}
            copy={copy.callback}
            placement={placement}
            surface="modal"
            week={week}
          />

          {/* ⚠️ THE SAME COMPONENT AS THE ONE AT THE FOOT OF THE PAGE. It used to
              be a link here and nothing there — see sprintWhatsappLink.tsx. */}
          <div className="mt-4">
            <SprintWhatsappLink
              locale={locale}
              label={copy.whatsappLabel}
              weekNote={week ? copy.weekNote.replace('{date}', week) : undefined}
              placement={placement}
              surface="modal"
              onOpen={() => onChoose('whatsapp')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
