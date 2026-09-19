'use client'

import { useState, useEffect } from 'react'
import posthog from 'posthog-js'
import type { Locale } from '@/i18n/config'
import { CONSENT_EVENT, CONSENT_KEY, REGION_COOKIE, type Consent } from '@/lib/consent'

type Copy = { message: string; accept: string; reject: string }

const copy: Record<Locale, Copy> = {
  fr: { message: 'On utilise des cookies pour mesurer l’audience, améliorer le site et mesurer nos publicités LinkedIn.', accept: 'Accepter', reject: 'Refuser' },
  en: { message: 'We use cookies to measure traffic, improve the site and measure our LinkedIn ads.', accept: 'Accept', reject: 'Decline' },
  es: { message: 'Usamos cookies para medir la audiencia, mejorar el sitio y medir nuestros anuncios en LinkedIn.', accept: 'Aceptar', reject: 'Rechazar' },
  de: { message: 'Wir verwenden Cookies, um die Reichweite zu messen, die Website zu verbessern und unsere LinkedIn-Anzeigen auszuwerten.', accept: 'Akzeptieren', reject: 'Ablehnen' },
  it: { message: 'Usiamo i cookie per misurare il traffico, migliorare il sito e misurare i nostri annunci su LinkedIn.', accept: 'Accetta', reject: 'Rifiuta' },
  pt: { message: 'Usamos cookies para medir o tráfego, melhorar o site e medir os nossos anúncios no LinkedIn.', accept: 'Aceitar', reject: 'Recusar' },
  nl: { message: 'We gebruiken cookies om bezoek te meten, de site te verbeteren en onze LinkedIn-advertenties te meten.', accept: 'Accepteren', reject: 'Weigeren' },
  ar: { message: 'نستخدم ملفات تعريف الارتباط لقياس الزيارات وتحسين الموقع وقياس إعلاناتنا على LinkedIn.', accept: 'قبول', reject: 'رفض' },
  pl: { message: 'Używamy plików cookie, aby mierzyć ruch, ulepszać stronę i mierzyć nasze reklamy na LinkedIn.', accept: 'Akceptuję', reject: 'Odrzuć' },
  tr: { message: 'Trafiği ölçmek, siteyi geliştirmek ve LinkedIn reklamlarımızı ölçmek için çerezleri kullanıyoruz.', accept: 'Kabul et', reject: 'Reddet' },
}

function readCookie(name: string): string | undefined {
  return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))?.[1]
}

/**
 * Cookie-consent banner. Analytics run by default (opt-out model); this banner is
 * shown ONLY to EU/EEA/UK visitors (REGION_COOKIE stamped by the middleware).
 * "Accepter" keeps PostHog on, "Refuser" actually stops it (opt_out_capturing).
 * The LinkedIn Insight Tag listens to the same CONSENT_EVENT and, in this
 * region, only loads on "Accepter" (see lib/linkedin.ts).
 * The choice is stored in localStorage and re-applied on load (see posthogProvider).
 */
export function CookieBanner({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Deferred so SSR output (hidden) matches the first client render. Show only
    // where consent is expected (EU/UK) and the visitor hasn't chosen yet.
    const id = requestAnimationFrame(() => {
      if (readCookie(REGION_COOKIE) === '1' && !localStorage.getItem(CONSENT_KEY)) setVisible(true)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const choose = (consent: Consent) => {
    localStorage.setItem(CONSENT_KEY, consent)
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }))
    // Genuinely gate analytics on the choice — no tracking call on refusal.
    if (consent === 'denied') posthog.opt_out_capturing()
    else posthog.opt_in_capturing()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-50 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(14,14,16,0.35)] backdrop-blur sm:right-auto sm:max-w-md sm:p-5"
    >
      <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{t.message}</p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => choose('granted')}
          className="rounded-[var(--radius-lg)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-ink)]"
        >
          {t.accept}
        </button>
        <button
          onClick={() => choose('denied')}
          className="rounded-[var(--radius-lg)] border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-2)]"
        >
          {t.reject}
        </button>
      </div>
    </div>
  )
}
