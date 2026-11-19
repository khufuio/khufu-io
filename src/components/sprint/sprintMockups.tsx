/**
 * Two still mockups that sit BESIDE the hero frame on print and share material:
 * the companion app on a phone, and the showcase site in a browser.
 *
 * ⚠️ WHY THEY EXIST (mini-flyer pass v3, 2026-11-19). The 4:5 mini-flyer carried
 * the hero frame alone, centred, and Adrien: « la maquette fait vide à gauche et à
 * droite » — with the lead « d'autres mini maquettes genre showcase, phone ». The
 * hero already draws a phone and a site, but as two small tiles INSIDE the web
 * platform; at flyer size they read as decoration, not as « web + iOS/Android +
 * site, all delivered ». These two give each surface its own object, so the scene
 * says it at a glance: platform in the middle, app in front, site behind.
 *
 * ⛔ NOT A PRODUCT. Same bounds as the hero (decision cmu3dn7u, and the header of
 * sprintBuildSequence.tsx): no Traqio, no HerbaCRM, no client — an invented
 * « votre projet », decor figures that mean nothing (no 7, no price, nothing that
 * reads as Khufu's own numbers), and the hero's own fictional address.
 *
 * ⚠️ SAME LANGUAGE AS THE HERO, by construction: the browser is `.sprint-shot`, the
 * phone is `.sprint-phone`, the colours are the landing tokens, the spark line and
 * the green live dot are the hero's. ⛔ If the hero's look changes, re-check these.
 *
 * ⚠️ TEXT, UNLIKE THE HERO, AND ON PURPOSE: the hero forbids copy because a visitor
 * must read the sequence in seconds; a phone and a landing page with no word on
 * them read as wireframes instead (the « NO SKELETON » rule). So each carries a few
 * short labels, translated — FR/EN only, the two languages the print kit ships in.
 *
 * They are captured, never redrawn elsewhere: `npm run capture:mockups` shoots them
 * from the dev-only route /[locale]/sprint-v1/mockups and the flyer composes the
 * PNGs (scripts/flyer/renderMini.ts).
 */

export type MockupLocale = 'fr' | 'en'

type MockupCopy = {
  notifTitle: string
  notifBody: string
  today: string
  feed: [string, string, string]
  feedTime: [string, string, string]
  newItem: string
  brand: string
  nav: [string, string]
  navCta: string
  badge: string
  siteTitle: [string, string]
  siteLead: string
  siteCta: string
  siteRating: string
  features: [string, string, string]
}

/** Every visible word of both mockups. ⛔ Decor only — no claim about Khufu. */
export const MOCKUP_COPY: Record<MockupLocale, MockupCopy> = {
  fr: {
    notifTitle: 'Paiement reçu',
    notifBody: '49,00 € · à l’instant',
    today: 'Aujourd’hui',
    feed: ['Commande payée', 'Nouveau client', 'Avis 5 étoiles'],
    feedTime: ['2 min', '14 min', '1 h'],
    newItem: '+ Nouveau',
    brand: 'votre projet',
    nav: ['Offre', 'Tarifs'],
    navCta: 'Essayer',
    badge: 'Nouveau',
    siteTitle: ['Votre service,', 'en ligne.'],
    siteLead: 'Réservez, payez, suivez — en deux clics.',
    siteCta: 'Commencer',
    siteRating: '4,9/5',
    features: ['Paiement sécurisé', 'Appli iOS et Android', 'Suivi en temps réel'],
  },
  en: {
    notifTitle: 'Payment received',
    notifBody: '$49.00 · just now',
    today: 'Today',
    feed: ['Order paid', 'New customer', '5-star review'],
    feedTime: ['2 min', '14 min', '1 h'],
    newItem: '+ New',
    brand: 'your project',
    nav: ['Product', 'Pricing'],
    navCta: 'Try it',
    badge: 'New',
    siteTitle: ['Your service,', 'online.'],
    siteLead: 'Book, pay, follow up — in two clicks.',
    siteCta: 'Get started',
    siteRating: '4.9/5',
    features: ['Secure payments', 'iOS and Android app', 'Real-time tracking'],
  },
}

/** The hero's green tick, as a 24×24 stroke. */
function Tick({ className }: { className?: string }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

const TAB_ICONS: React.ReactNode[] = [
  <path key="home" d="M4 11.2 12 4.5l8 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-3.8v-5.6H9.3v5.6H5.5A1.5 1.5 0 0 1 4 19Z" />,
  <path key="chart" d="M5 20V12M10 20V6M15 20v-9M20 20V9" />,
  <path key="bell" d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15l1.5-2ZM10 20.5a2 2 0 0 0 4 0" />,
  <>
    <circle key="c" cx="12" cy="8" r="3.5" />
    <path key="p" d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
  </>,
]

/** The companion app, finished and in use: a payment lands while the day's feed fills. */
export function SprintAppMockup({ locale }: { locale: MockupLocale }): React.ReactElement {
  const c = MOCKUP_COPY[locale]
  return (
    <figure className="sprint-phone sprint-mock-phone" aria-hidden>
      <span className="sprint-phone-notch" />
      <span className="sprint-mock-screen" dir="ltr">
        <span className="sprint-mock-status">
          <b>9:41</b>
          <span className="sprint-mock-status-icons">
            <i />
            <i />
            <i />
          </span>
        </span>

        <span className="sprint-mock-notif">
          <span className="sprint-mock-notif-icon">
            <Tick />
          </span>
          <span className="sprint-mock-notif-text">
            <b>{c.notifTitle}</b>
            <span>{c.notifBody}</span>
          </span>
        </span>

        <span className="sprint-mock-head">
          <b>{c.today}</b>
          <span className="sprint-build-avatar sprint-mock-avatar" />
        </span>

        <span className="sprint-mock-kpi">
          <span className="sprint-mock-kpi-num">284</span>
          <span className="sprint-mock-kpi-up">+18%</span>
          <svg className="sprint-mock-kpi-spark" viewBox="0 0 40 12" fill="none" preserveAspectRatio="none">
            <path d="M1 10 8 8l6 2 7-5 6 2 5-4 6-2" />
          </svg>
        </span>

        <span className="sprint-mock-feed">
          {c.feed.map((label, i) => (
            <span key={label} className={`sprint-mock-row sprint-build-row--${i + 1}`}>
              <i className="sprint-build-row-avatar sprint-mock-row-avatar" />
              <span className="sprint-mock-row-text">
                <b>{label}</b>
                <span>{c.feedTime[i]}</span>
              </span>
              <i className="sprint-mock-live" />
            </span>
          ))}
        </span>

        <span className="sprint-mock-button">{c.newItem}</span>

        <span className="sprint-mock-tabs">
          {TAB_ICONS.map((icon, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={i === 0 ? 'is-active' : undefined}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.9}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icon}
            </svg>
          ))}
        </span>
      </span>
    </figure>
  )
}

/** Splits the address the way the hero frame greys it (see splitUrl there). */
function splitUrl(url: string): { scheme: string; host: string } {
  const match = /^(https?:\/\/(?:www\.)?)(.+)$/.exec(url)
  return match ? { scheme: match[1], host: match[2] } : { scheme: '', host: url }
}

/** The showcase site: the page a stranger lands on before they ever open the app. */
export function SprintSiteMockup({ locale, url }: { locale: MockupLocale; url: string }): React.ReactElement {
  const c = MOCKUP_COPY[locale]
  const { scheme, host } = splitUrl(url)
  return (
    <figure className="sprint-shot sprint-mock-site" aria-hidden>
      <div className="sprint-shot-bar">
        <span className="sprint-shot-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="sprint-shot-url sprint-build-url" dir="ltr">
          {scheme ? <span className="sprint-build-url-scheme">{scheme}</span> : null}
          {host}
        </span>
      </div>
      <div className="sprint-mock-page" dir="ltr">
        <span className="sprint-mock-nav">
          <span className="sprint-mock-brand">
            <span className="sprint-build-logo sprint-mock-logo" />
            {c.brand}
          </span>
          <span className="sprint-mock-nav-links">
            {c.nav.map((link) => (
              <span key={link}>{link}</span>
            ))}
            <span className="sprint-mock-nav-cta">{c.navCta}</span>
          </span>
        </span>

        <span className="sprint-mock-hero">
          <span className="sprint-mock-badge">{c.badge}</span>
          <b className="sprint-mock-title">
            {c.siteTitle[0]}
            <br />
            <em>{c.siteTitle[1]}</em>
          </b>
          <span className="sprint-mock-lead">{c.siteLead}</span>
          <span className="sprint-mock-actions">
            <span className="sprint-mock-cta">{c.siteCta}</span>
            <span className="sprint-mock-rating">
              <svg className="sprint-build-stars" viewBox="0 0 60 12" fill="currentColor">
                {Array.from({ length: 5 }, (_, i) => (
                  <path key={i} transform={`translate(${i * 12} 0)`} d="m6 .8 1.6 3.4 3.7.4-2.8 2.5.8 3.7L6 8.9 2.7 10.8l.8-3.7L.7 4.6l3.7-.4Z" />
                ))}
              </svg>
              {c.siteRating}
            </span>
          </span>
        </span>

        <span className="sprint-mock-features">
          {c.features.map((feature) => (
            <span key={feature} className="sprint-mock-feature">
              <Tick className="sprint-mock-tick" />
              {feature}
            </span>
          ))}
        </span>
      </div>
    </figure>
  )
}
