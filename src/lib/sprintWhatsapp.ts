import { site } from '@/content/site'
import type { Locale } from '@/i18n/config'

/**
 * The Sprint V1 landing's WhatsApp link, built once and used by both places it
 * appears.
 *
 * ⛔ IT APPEARS IN TWO PLACES AND THEY MUST NOT DIVERGE (2026-09-15, pass 4).
 * WhatsApp was offered inside the contact modal and absent from the contact
 * block at the foot of the page — Adrien: « il est proposé dans la modale mais
 * absent de la zone de contact en bas : incohérent ». He is right, and the
 * asymmetry fell on exactly the wrong visitor: the foot of the page is where
 * someone who read the whole thing arrives, and it offered them one door fewer
 * than the modal shown to someone who clicked after two screens.
 *
 * ⚠️ ONE `wa.me` LINK FOR DESKTOP AND MOBILE, and this is deliberate.
 * `https://wa.me/<number>` opens the app on a phone and falls through to
 * WhatsApp Web on a desktop, on its own. ⛔ Never a `whatsapp://` scheme: it
 * breaks on desktop, which is where a good share of a LinkedIn audience reads.
 *
 * ⚠️ THE WEEK RIDES IN THE MESSAGE, never in a button label — the conversation
 * starts anchored on a date without the page ever presuming the visitor wants
 * that one (see hero.ctaLabel in sprintLanding.ts).
 *
 * ⛔ NO DIRECTIVE IN THIS FILE, same rule as lib/sprintAnchors.ts: the closing
 * block is rendered by a SERVER component and the modal by a client one, so a
 * value shared by the two cannot live in a `'use client'` module.
 *
 * ⚠️ The opener is duplicated from whatsappButton.tsx rather than imported from
 * it: that module is the site-wide floating button, this is the landing's own
 * conversation, and the two messages are allowed to diverge.
 */
const PREFILL: Record<Locale, string> = {
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

/** `wa.me` with the localised opener, and the week when the click carries one. */
export function sprintWhatsappHref(locale: Locale, weekNote?: string): string {
  const text = weekNote ? `${PREFILL[locale]} ${weekNote}` : PREFILL[locale]
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
