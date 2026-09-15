'use client'

import type { Locale } from '@/i18n/config'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { SPRINT_EVENTS, type SprintContactSurface } from '@/lib/sprintContactEvents'
import { sprintWhatsappHref } from '@/lib/sprintWhatsapp'
import { WhatsAppGlyph } from '@/components/layout/whatsappButton'

/**
 * WhatsApp, as one line — in the modal AND at the foot of the page.
 *
 * ⚠️ WHY IT IS A COMPONENT AND NOT TWO LINKS (2026-09-15, pass 4). Adrien:
 * « WhatsApp est proposé dans la modale mais absent de la zone de contact en
 * bas : incohérent ». He is right, and the gap fell on the wrong visitor —
 * someone who read the whole page and arrived at the closing block was offered
 * one door FEWER than someone who clicked after two screens. One component, two
 * places, and they cannot drift apart again.
 *
 * ⛔ IT STAYS A LINE, NEVER A BLOCK, in both places. WhatsApp is the tertiary
 * path: the call is the conversion (decision cmu1uq7l — the booking goes through
 * the Google Workspace appointment schedule), the net catches whoever the
 * calendar excludes, and this catches whoever would rather type than book.
 * Giving it a button would put three buttons where the page wants one.
 *
 * ⚠️ IT REPORTS `surface` AND THAT IS NOT COSMETIC. `sprint_whatsapp_opened`
 * split by `surface` is what will say, in a month, whether the foot of the page
 * needed this door or whether the modal was carrying all of it —
 * lib/sprintContactEvents.ts holds the vocabulary and the reason.
 */
export function SprintWhatsappLink({
  locale,
  label,
  weekNote,
  placement,
  surface,
  tone = 'light',
  onOpen,
}: {
  locale: Locale
  label: string
  /** The week, already formatted — it rides in the prefilled message, never in the label. */
  weekNote?: string
  /** Which CTA started the journey. */
  placement: string
  /** Which UI the exit was taken from. */
  surface: SprintContactSurface
  /** `dark` for the closing block, which paints its own near-black ground. */
  tone?: 'light' | 'dark'
  /** The modal uses this to record that a path was taken, so the close is not a dismissal. */
  onOpen?: () => void
}) {
  return (
    <a
      href={sprintWhatsappHref(locale, weekNote)}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        onOpen?.()
        track(SPRINT_EVENTS.whatsappOpened, {
          placement,
          surface,
          week: weekNote ?? null,
          locale,
          ...campaignProps(),
        })
      }}
      className={`inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline ${
        tone === 'dark'
          ? 'text-[color-mix(in_srgb,var(--color-paper)_78%,transparent)]'
          : 'text-[var(--color-ink-2)]'
      }`}
    >
      <WhatsAppGlyph size={16} className="text-[#25D366]" />
      {label}
    </a>
  )
}
