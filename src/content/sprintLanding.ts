import type { Locale } from '@/i18n/config'
import { fillLocaleDeep, type LocalizedInput } from '@/i18n/localize'

/**
 * Copy for the Sprint V1 landing page — the destination of PAID traffic
 * (LinkedIn Ads first). Authored in fr/en/es (the languages we sell in); every
 * other locale falls back to French, exactly like `projects.ts`.
 *
 * ⛔ THIS PAGE IS DRAWN, NOT WRITTEN (khufu HQ decision cmu0hv4c).
 *
 * Adrien read the previous version in production and took it apart: « trop de
 * texte en mode pavé, ça doit être vendeur, pas un livre à lire », « même moi
 * j'ai la flemme de le lire, alors imagine un prospect », « tu peux pas use +
 * d'infographie ? ». The cause was not any one section: every session on this
 * page had been a WRITING session, each one adding copy and none removing any.
 *
 * Three rules, opposable to any future session:
 *   1. NO WALLS OF TEXT. A block that explains becomes a schema, a timeline, a
 *      visual comparison or a figure. Prose is the last resort, never the first.
 *   2. NO OVER-EXPLAINING. We do not comment our own mechanics — least of all
 *      the slots. The ambiguity IS part of the argument; explaining it kills it.
 *   3. MOBILE FIRST, checked on real screenshots. A screen that is nothing but
 *      text is a failure, not a compromise.
 * And the register stays sober: no heading that sounds like a market stall.
 *
 * ⚠️ A REWRITE THAT ADDS COPY HERE MUST SAY WHAT IT REMOVES. The rewrite of
 * 2026-09-14 cut the visitor-facing French copy from 16,426 characters to the
 * figure `scripts/measureSprintCopy.ts` prints today. Keep measuring.
 *
 * ⚠️ Every figure on this page must be real. Anything not invoiced, contracted
 * or shipped does not belong here — this is the one page with an ad budget
 * pointed at it, so a made-up number is the most expensive kind of mistake.
 * That applies to infographics too: a comparison or a chart without a source
 * reads as measured, which makes it worse than a paragraph, not better.
 */

/**
 * ⛔ THE ONLY NUMBERS ALLOWED ON THIS PAGE ARE A PRICE, A DELAY OR THE ONE
 * CLIENT PER WEEK (which is the calendar itself — decision cmu0fbad).
 *
 * No cumulative revenue, no project count, no client count, no "value shipped".
 *
 * Figures the page would happily use and that nobody has validated, left
 * deliberately unwritten rather than approximated:
 *   - PLACEHOLDER: number of V1s actually delivered as a Sprint V1
 *   - PLACEHOLDER: whether a given Monday is still free. The hero shows the next
 *     start DATES (computed, see lib/sprintSlots.ts) and nothing else. It never
 *     says a week is taken, and since 2026-09-14 it no longer explains the
 *     mechanic either — see the note on `hero` below.
 *   - PLACEHOLDER: measured first-response time, against the "within 24h" claim
 *   - PLACEHOLDER: share of clients who continue past day 7
 * Ask before filling any of these in.
 */

/**
 * Blocks that are written and built below, and rendered only when their flag is
 * true.
 *
 * ⛔ KHUFU SELLS ONE OFFER, WITH NOTHING AROUND IT. Two things used to live here
 * behind a flag and are now DELETED, copy included, so that nobody can flip them
 * back on:
 *   - The J7 delivery guarantee (decision cmu0exke): no penalty, no $500/day, no
 *     $3,500 cap, no equivalent wording — not on this page, not in the contract,
 *     not in the partner kit.
 *   - The "clickable prototype in 48h — $990" entry offer (decision cmu0fcvk).
 *     Adrien: « 0 prototype wesh ! ».
 * Do not reintroduce either one without a new decision replacing those two.
 */
export const sprintLandingFlags: {
  traqioProduct: boolean
} = {
  /*
   * Traqio as a fourth own-product card — ON since khufu HQ decision cmu0fqj7.
   *
   * ⚠️ THE NUANCE THAT MUST SURVIVE, or the proof becomes a lie: what is online
   * is Traqio's SITE. The product itself is still a prelaunch. So the card
   * carries its own status label — never the "in production" one the other three
   * wear — and NOTHING anywhere may imply users, customers or traction.
   */
  traqioProduct: true,
}

/**
 * Weeks to keep out of the booking window — the Monday of each, `YYYY-MM-DD`.
 *
 * A configuration value, deliberately NOT a feature (khufu HQ decision cmu0fugh:
 * Adrien does not want a booking tool to maintain). Add a date here to close a
 * week — holidays, a week actually sold — and the strip simply shows the next
 * Monday instead.
 *
 * ⛔ This is the ONLY lever on the calendar. No "2 places left", no countdown, no
 * week labelled "booked": the page says which weeks are open, it never claims the
 * others are gone. A false claim is verifiable by reloading the page two weeks
 * running, on the one page we point an ad budget at.
 */
export const sprintExcludedMondays: readonly string[] = []

/**
 * Facts for the flagged Traqio card. Traqio is not in `projects.ts` (it has no
 * published case study on the site yet), so the card's few facts live here.
 */
export const traqioProduct = {
  name: 'Traqio',
  url: 'https://traqio.app',
  image: '/images/sprint/traqio',
} as const

/**
 * Khufu's own products shown on the page, by `projects.ts` slug, each with the
 * capture taken of its live site on 2026-09-14 (see `public/images/sprint/`).
 *
 * NO CLIENT REFERENCES ON THIS PAGE (Adrien, 2026-09-13). Flatchr, Peach Farmer,
 * Tarokai, Mojo and Tim Management were all pulled. Do not put any of them back.
 *
 * ⛔ NEVER IMPLY THESE WERE BUILT IN SEVEN DAYS. They were not, and the git
 * history says so plainly. So this block carries NO duration at all, anywhere.
 *
 * ⚠️ AND IT NO LONGER EXPLAINS ITSELF EITHER. The paragraph that used to sit
 * under the cards — « Ce sont les produits de Khufu, pas des livrables de
 * sprint… » — is gone on Adrien's instruction (2026-09-13): « sur-explicatif, ça
 * perd le côté ambigu qu'on veut mettre en place pour convaincre ». The line to
 * hold is exact and it is not the same as lying: the section SAYS NOTHING about
 * how long these took or who they were built for, and no copy anywhere on the
 * page may state or imply that they were delivered to a client in seven days.
 * Silent, never false.
 */
export const sprintProducts = [
  { slug: 'onestore-link', image: '/images/sprint/onestore' },
  { slug: 'clokizi', image: '/images/sprint/clokizi' },
  { slug: 'herbacrm', image: '/images/sprint/herbacrm' },
] as const

/** One localized string in the authoring shape (`LocalizedInput`) or the resolved one. */
type Leaf<T> = T

/** How a cell reads in the alternatives matrix — drives the glyph, not just the colour. */
export type CompareMark = 'yes' | 'mixed' | 'no'

type Section<T> = {
  /**
   * The first screen. It SHOWS the product (a real capture, lightly staged) and
   * carries three figures; it does not describe anything.
   *
   * ⛔ NOTHING HERE EXPLAINS THE SLOTS. The strip shows the next open Mondays,
   * and that is all it does — no "a sprint starts on a Monday and we only open
   * three weeks", no availability count, no colour code. Adrien, 2026-09-13:
   * « sur-explicatif, ça perd l'avantage des slots ». Saying nothing is not the
   * same as lying: no week is ever labelled taken (decision cmu0fugh).
   */
  hero: {
    subtitle: Leaf<T>
    /** Third figure next to the delay and the price — the calendar itself. */
    clientsPerWeek: Leaf<T>
    ctaLabel: Leaf<T>
    /** The dated CTA (decision cmu0fugh) — carries `{date}`. */
    ctaLabelSlot: Leaf<T>
    ctaNote: Leaf<T>
    /** Badge under each date. Every shown week is open — see sprintExcludedMondays. */
    slotOpen: Leaf<T>
    /** Alt text of the staged capture. Says what it is, claims nothing about it. */
    shotAlt: Leaf<T>
  }
  /**
   * The three contractual commitments — a real, styled section, low on the page.
   *
   * ⚠️ ITS HISTORY, BECAUSE IT HAS BEEN MOVED TWICE AND THE REASONING MATTERS.
   * It was a section headed « Ce qu'on peut prouver », which Adrien called
   * « vendeur de tapis pourri ». The 2026-09-14 rewrite demoted it to a thin
   * band under the hero, on the argument that its three figures merely repeated
   * the hero's. Adrien overruled that (decision cmu0jo1w): « une vraie section
   * en bande avec des cards ou un truc stylisé qui le rappelle c'est jamais
   * mauvais non ? ». He is right at the scale of a landing — a prospect scans
   * and enters mid-page, and whoever reaches the final CTA without having read
   * the hero no longer has the promise in front of them. Repeating is a
   * conversion mechanism.
   *
   * ⛔ SO IT REMINDS, IT DOES NOT REPEAT, and those are two different objects:
   *   - the hero states the FIGURES (7 days, the price, one client a week) in a
   *     hairline row. This section states what is WRITTEN IN THE CONTRACT — the
   *     date, the price, the ownership — as cards. Same promise, other angle,
   *     other shape. If it ever becomes the same visual object as the hero row,
   *     it has stopped being a reminder and has become a duplicate.
   *   - it sits just before the final CTA, where a reminder helps someone
   *     decide, and nowhere else. There is no third copy of it on the page.
   * ⚠️ And it stays SHORT: cmu0hv4c holds — one line per card, no paragraph.
   */
  commitments: {
    title: Leaf<T>
    /** The hairline tag at the foot of each card. */
    tag: Leaf<T>
    items: { title: Leaf<T>; note: Leaf<T> }[]
  }
  /** Khufu's own products. Labels only — see the note on `sprintProducts`. */
  products: {
    title: Leaf<T>
    liveLabel: Leaf<T>
    /**
     * Traqio's own status badge. ⛔ NEVER `liveLabel`: its site is online, the
     * product is a prelaunch (decision cmu0fqj7), and those are not the same claim.
     */
    traqioStatus: Leaf<T>
    traqioTagline: Leaf<T>
    /** Alt text pattern for a card capture, carrying `{name}`. */
    shotAlt: Leaf<T>
  }
  /**
   * The week, drawn. khufu HQ decision cmu0fbad: Monday → Sunday, Friday is the
   * client's acceptance-testing day, the weekend applies what they found.
   *
   * ⛔ NO TIME OF DAY, EVER. The 06:00 UTC kickoff is true and stays in the
   * contract; it is off the page on Adrien's instruction (2026-09-13): « il n'a
   * pas à savoir l'heure exacte, et ça peut faire peur de dire 6am ». The page
   * says « lundi matin » or nothing at all.
   *
   * ⛔ NEVER "jours ouvrés" / "working days". Seven working days is nine real
   * ones and wrecks the one claim the offer rests on.
   */
  timeline: {
    title: Leaf<T>
    subtitle: Leaf<T>
    dayZero: { day: Leaf<T>; weekday: Leaf<T>; title: Leaf<T>; body: Leaf<T> }
    /**
     * Day 1 → day 7. `lanes` exists for Friday only: the day runs on TWO tracks
     * at once, and drawing them side by side is the whole point — Adrien on the
     * previous version: « ça fait penser que nous on fait rien ».
     */
    days: {
      day: Leaf<T>
      weekday: Leaf<T>
      title: Leaf<T>
      body?: Leaf<T>
      lanes?: { you: Leaf<T>; us: Leaf<T> }
    }[]
    /** Annotation over day 0 in the schema. */
    scopeLabel: Leaf<T>
    /** Annotation over the day 1 → day 7 bracket. */
    spanLabel: Leaf<T>
    /** Column headers of Friday's two tracks. */
    youLabel: Leaf<T>
    usLabel: Leaf<T>
    note: Leaf<T>
  }
  /**
   * What is in the box on day 7 — one icon grid, four words per line.
   *
   * Merges the two sections that used to say the same thing twice (nine
   * "deliverables" cards of prose, then three "included" cards of more prose,
   * with the showcase site, the infrastructure and the fixes appearing in both).
   * `included: true` keeps the three items decisions cmu09gb6 / cmu09gn1 want
   * advertised as included — as a chip, not as a paragraph. ⚠️ The word is
   * "included", never "free": on a $17,000 sale "free" devalues what stands next
   * to it. The scope guardrails those cards carried now live in ONE faq entry.
   */
  day7: {
    title: Leaf<T>
    badge: Leaf<T>
    items: { title: Leaf<T>; note: Leaf<T>; included?: boolean }[]
  }
  /** Time-to-production, charted. Delay only — never a price (see the component). */
  delayChart: {
    title: Leaf<T>
    ticks: { zero: Leaf<T>; oneMonth: Leaf<T>; threeMonths: Leaf<T>; sixMonths: Leaf<T> }
    rows: Record<'khufu' | 'agency' | 'hire', { name: Leaf<T>; value: Leaf<T>; note: Leaf<T> }>
    sources: Leaf<T>
  }
  /**
   * The alternatives, as a matrix of marks and two-word cells.
   *
   * Adrien on the paragraph table it replaces: « beaucoup beaucoup de texte et
   * de place, très peu de compréhension visuelle ». ⛔ NOT ONE FIGURE IN HERE:
   * the delay is the chart's job, and it is the only axis we can source. A grid
   * of unsourced numbers reads as measured, which is worse than prose.
   */
  comparison: {
    title: Leaf<T>
    aspectLabel: Leaf<T>
    agency: Leaf<T>
    freelance: Leaf<T>
    noCode: Leaf<T>
    khufu: Leaf<T>
    rows: {
      aspect: Leaf<T>
      agency: { mark: CompareMark; label: Leaf<T> }
      freelance: { mark: CompareMark; label: Leaf<T> }
      noCode: { mark: CompareMark; label: Leaf<T> }
      khufu: { mark: CompareMark; label: Leaf<T> }
    }[]
    note: Leaf<T>
  }
  audience: {
    title: Leaf<T>
    forTitle: Leaf<T>
    forItems: Leaf<T>[]
    notForTitle: Leaf<T>
    notForItems: Leaf<T>[]
  }
  /**
   * ONE question zone on the page. The block once titled « Les trois questions
   * qu'on nous pose à chaque fois » sat on top of this one and asked the same
   * things at four times the length — Adrien: « redondant, lourd, prend un max
   * de place ». Its three answers are the first three entries here, shortened.
   */
  faq: {
    title: Leaf<T>
    items: { q: Leaf<T>; a: Leaf<T> }[]
  }
  form: {
    title: Leaf<T>
    body: Leaf<T>
    name: Leaf<T>
    email: Leaf<T>
    project: Leaf<T>
    projectPlaceholder: Leaf<T>
    submit: Leaf<T>
    sending: Leaf<T>
    invalidEmail: Leaf<T>
    successTitle: Leaf<T>
    successBody: Leaf<T>
    privacy: Leaf<T>
    whatsapp: Leaf<T>
  }
  midCta: {
    products: Leaf<T>
    day7: Leaf<T>
  }
  finalCta: {
    title: Leaf<T>
    body: Leaf<T>
  }
}

export type SprintLanding = Section<Record<Locale, string>>

const content: Section<LocalizedInput> = {
  hero: {
    subtitle: {
      fr: 'Un SaaS ou une app mobile, en production. Pas une maquette, pas une démo.',
      en: 'A SaaS or a mobile app, in production. Not a mockup, not a demo.',
      es: 'Un SaaS o una app móvil, en producción. Ni maqueta ni demo.',
    },
    clientsPerWeek: {
      fr: 'client par semaine',
      en: 'client per week',
      es: 'cliente por semana',
    },
    ctaLabel: {
      fr: 'Réserver mon sprint',
      en: 'Book my sprint',
      es: 'Reservar mi sprint',
    },
    ctaLabelSlot: {
      fr: 'Slot du {date} encore disponible',
      en: 'Slot of {date} still open',
      es: 'Slot del {date} aún disponible',
    },
    ctaNote: {
      fr: 'Périmètre, prix et date sous 24 h.',
      en: 'Scope, price and date within 24h.',
      es: 'Alcance, precio y fecha en 24 h.',
    },
    slotOpen: { fr: 'Disponible', en: 'Open', es: 'Disponible' },
    shotAlt: {
      fr: 'Un produit Khufu en ligne, vu dans un navigateur.',
      en: 'A Khufu product online, seen in a browser.',
      es: 'Un producto de Khufu en línea, visto en un navegador.',
    },
  },

  commitments: {
    title: {
      fr: 'Ce qui est écrit au contrat.',
      en: 'What the contract says.',
      es: 'Lo que dice el contrato.',
    },
    tag: { fr: 'Au contrat', en: 'In the contract', es: 'En el contrato' },
    items: [
      {
        title: { fr: 'La date de livraison', en: 'The delivery date', es: 'La fecha de entrega' },
        note: {
          fr: 'fixée avant le premier jour, pas en cours de route',
          en: 'set before day one, not along the way',
          es: 'fijada antes del primer día, no sobre la marcha',
        },
      },
      {
        title: { fr: 'Le prix', en: 'The price', es: 'El precio' },
        note: {
          fr: 'arrêté avant de commencer, il ne bouge pas si le périmètre bouge',
          en: 'settled before we start, it does not move when the scope moves',
          es: 'cerrado antes de empezar, no se mueve si se mueve el alcance',
        },
      },
      {
        title: { fr: 'La propriété du code', en: 'Ownership of the code', es: 'La propiedad del código' },
        note: {
          fr: 'à vous dès le premier commit, sans licence ni lock-in',
          en: 'yours from the first commit, no licence and no lock-in',
          es: 'tuyo desde el primer commit, sin licencia ni lock-in',
        },
      },
    ],
  },

  products: {
    title: { fr: 'Nos produits.', en: 'Our products.', es: 'Nuestros productos.' },
    liveLabel: { fr: 'En production', en: 'In production', es: 'En producción' },
    traqioStatus: { fr: 'Site en ligne', en: 'Site live', es: 'Sitio en línea' },
    traqioTagline: {
      fr: 'L’attribution d’installs et le ROAS, sans boîte noire.',
      en: 'Install attribution and ROAS, without the black box.',
      es: 'Atribución de instalaciones y ROAS, sin caja negra.',
    },
    shotAlt: {
      fr: 'Le site de {name}, en ligne.',
      en: 'The {name} site, live.',
      es: 'El sitio de {name}, en línea.',
    },
  },

  timeline: {
    title: { fr: 'La semaine.', en: 'The week.', es: 'La semana.' },
    subtitle: {
      fr: 'Du lundi au dimanche. Le même déroulé à chaque sprint.',
      en: 'Monday to Sunday. The same run on every sprint.',
      es: 'De lunes a domingo. El mismo recorrido en cada sprint.',
    },
    dayZero: {
      day: { fr: 'Jour 0', en: 'Day 0', es: 'Día 0' },
      weekday: { fr: 'avant le lundi', en: 'before the Monday', es: 'antes del lunes' },
      title: {
        fr: 'Périmètre écrit et signé',
        en: 'Scope written and signed',
        es: 'Alcance escrito y firmado',
      },
      body: {
        fr: 'Cadrage, périmètre, devis. C’est ce qui rend la date tenable.',
        en: 'Scoping, scope, quote. That is what makes the date holdable.',
        es: 'Encuadre, alcance, presupuesto. Eso hace sostenible la fecha.',
      },
    },
    days: [
      {
        day: { fr: 'Jour 1', en: 'Day 1', es: 'Día 1' },
        weekday: { fr: 'lundi matin', en: 'Monday morning', es: 'lunes por la mañana' },
        title: { fr: 'Fondations', en: 'Foundations', es: 'Cimientos' },
        body: {
          fr: 'Le soir, le produit existe et tourne.',
          en: 'By the evening the product exists and runs.',
          es: 'Por la noche el producto existe y funciona.',
        },
      },
      {
        day: { fr: 'Jours 2–3', en: 'Days 2–3', es: 'Días 2–3' },
        weekday: { fr: 'mardi, mercredi', en: 'Tuesday, Wednesday', es: 'martes, miércoles' },
        title: { fr: 'Le cœur du produit', en: 'The core of the product', es: 'El corazón del producto' },
        body: {
          fr: 'Les parcours clés, de bout en bout.',
          en: 'The key flows, end to end.',
          es: 'Los flujos clave, de principio a fin.',
        },
      },
      {
        day: { fr: 'Jour 4', en: 'Day 4', es: 'Día 4' },
        weekday: { fr: 'jeudi', en: 'Thursday', es: 'jueves' },
        title: { fr: 'V1 complète, déployée', en: 'Full V1, deployed', es: 'V1 completa, desplegada' },
        body: {
          fr: 'À une adresse où vous la manipulez.',
          en: 'At an address where you can handle it.',
          es: 'En una dirección donde puedes manejarla.',
        },
      },
      {
        day: { fr: 'Jour 5', en: 'Day 5', es: 'Día 5' },
        weekday: { fr: 'vendredi', en: 'Friday', es: 'viernes' },
        title: { fr: 'Recette', en: 'Acceptance testing', es: 'Recepción' },
        lanes: {
          you: {
            fr: 'Vous testez, toute la journée.',
            en: 'You test, all day.',
            es: 'Pruebas, todo el día.',
          },
          us: {
            fr: 'CI/CD, infra, préparation de la mise en production.',
            en: 'CI/CD, infra, preparing the go-live.',
            es: 'CI/CD, infra, preparación de la puesta en producción.',
          },
        },
      },
      {
        day: { fr: 'Jours 6–7', en: 'Days 6–7', es: 'Días 6–7' },
        weekday: { fr: 'samedi, dimanche', en: 'Saturday, Sunday', es: 'sábado, domingo' },
        title: { fr: 'Correctifs, puis production', en: 'Fixes, then production', es: 'Correcciones, y producción' },
        body: {
          fr: 'Vos retours du vendredi, appliqués. Dimanche soir : en ligne.',
          en: 'Friday’s feedback, applied. Sunday evening: live.',
          es: 'Tus comentarios del viernes, aplicados. Domingo por la noche: en línea.',
        },
      },
    ],
    scopeLabel: { fr: 'Périmètre arrêté', en: 'Scope settled', es: 'Alcance cerrado' },
    spanLabel: {
      fr: '7 jours, lundi → dimanche',
      en: '7 days, Monday → Sunday',
      es: '7 días, lunes → domingo',
    },
    youLabel: { fr: 'Vous', en: 'You', es: 'Tú' },
    usLabel: { fr: 'Nous', en: 'Us', es: 'Nosotros' },
    note: {
      fr: 'Vous parlez au founder qui écrit le code.',
      en: 'You talk to the founder writing the code.',
      es: 'Hablas con el founder que escribe el código.',
    },
  },

  day7: {
    title: { fr: 'Livré le jour 7.', en: 'Delivered on day 7.', es: 'Entregado el día 7.' },
    badge: { fr: 'Inclus', en: 'Included', es: 'Incluido' },
    items: [
      {
        title: { fr: 'Produit en production', en: 'Product in production', es: 'Producto en producción' },
        note: { fr: 'en ligne, à votre adresse', en: 'live, at your address', es: 'en línea, en tu dirección' },
      },
      {
        title: { fr: 'Code source', en: 'Source code', es: 'Código fuente' },
        note: {
          fr: 'à vous dès le premier commit',
          en: 'yours from the first commit',
          es: 'tuyo desde el primer commit',
        },
      },
      {
        title: { fr: 'Design sur mesure', en: 'Bespoke design', es: 'Diseño a medida' },
        note: {
          fr: 'dessiné pour votre produit',
          en: 'drawn for your product',
          es: 'diseñado para tu producto',
        },
      },
      {
        title: { fr: 'Comptes, rôles, accès', en: 'Accounts, roles, access', es: 'Cuentas, roles, accesos' },
        note: {
          fr: 'inscription, connexion, permissions',
          en: 'sign-up, login, permissions',
          es: 'registro, acceso, permisos',
        },
      },
      {
        title: { fr: 'Données et back-office', en: 'Data and back-office', es: 'Datos y back-office' },
        note: {
          fr: 'pour l’exploiter sans développeur',
          en: 'to run it without a developer',
          es: 'para operarlo sin desarrollador',
        },
      },
      {
        title: { fr: 'Infra et déploiement', en: 'Infra and deployment', es: 'Infra y despliegue' },
        note: { fr: 'sur vos comptes, à votre nom', en: 'on your accounts, in your name', es: 'en tus cuentas, a tu nombre' },
        included: true,
      },
      {
        title: { fr: 'Site vitrine, SEO et GEO', en: 'Showcase site, SEO and GEO', es: 'Sitio escaparate, SEO y GEO' },
        note: {
          fr: 'de quoi le montrer et le vendre',
          en: 'something to show it and sell it with',
          es: 'algo con lo que mostrarlo y venderlo',
        },
        included: true,
      },
      {
        title: { fr: 'Passation documentée', en: 'Documented handover', es: 'Traspaso documentado' },
        note: {
          fr: 'docs, accès, session de passation',
          en: 'docs, access, handover session',
          es: 'documentación, accesos, sesión de traspaso',
        },
      },
      {
        title: { fr: '2 semaines de correctifs', en: '2 weeks of fixes', es: '2 semanas de correcciones' },
        note: { fr: 'après la livraison, au contrat', en: 'after delivery, in the contract', es: 'tras la entrega, en el contrato' },
        included: true,
      },
    ],
  },

  /*
   * ⛔ DELAY ONLY ON THIS CHART — NO PRICE, and not one figure invented.
   *
   * The two third-party numbers are published, dated and cited on the page
   * itself (`sources` below):
   *   - 12 weeks: Apec, « Pratiques de recrutement des cadres » (2023), average
   *     time to hire a cadre in France, all sectors — the delay before somebody
   *     STARTS, which is why the bar keeps running past it.
   *   - 3 to 6 months: the range French MVP agencies publish for their own
   *     engagements.
   *
   * ⚠️ The bar widths live in sprintDelayChart.tsx. Change a figure here and you
   * must change it there.
   */
  delayChart: {
    title: {
      fr: 'Combien de temps avant d’être en ligne.',
      en: 'How long before you are live.',
      es: 'Cuánto tiempo antes de estar en línea.',
    },
    ticks: {
      zero: { fr: 'Jour 0', en: 'Day 0', es: 'Día 0' },
      oneMonth: { fr: '1 mois', en: '1 month', es: '1 mes' },
      threeMonths: { fr: '3 mois', en: '3 months', es: '3 meses' },
      sixMonths: { fr: '6 mois', en: '6 months', es: '6 meses' },
    },
    rows: {
      khufu: {
        name: { fr: 'Khufu · Sprint V1', en: 'Khufu · Sprint V1', es: 'Khufu · Sprint V1' },
        value: { fr: '7 jours', en: '7 days', es: '7 días' },
        note: {
          fr: 'Inscrit au contrat avant le premier jour.',
          en: 'Written into the contract before day one.',
          es: 'Inscrito en el contrato antes del primer día.',
        },
      },
      agency: {
        name: { fr: 'Agence au devis', en: 'Quote-based agency', es: 'Agencia con presupuesto' },
        value: { fr: '3 à 6 mois', en: '3 to 6 months', es: '3 a 6 meses' },
        note: {
          fr: 'La fourchette que les agences MVP annoncent elles-mêmes.',
          en: 'The range MVP agencies publish for themselves.',
          es: 'El rango que las propias agencias de MVP anuncian.',
        },
      },
      hire: {
        name: { fr: 'Recruter un développeur', en: 'Hiring a developer', es: 'Contratar a un desarrollador' },
        value: { fr: '12 semaines', en: '12 weeks', es: '12 semanas' },
        note: {
          fr: 'Avant la première ligne de code. Le développement commence après.',
          en: 'Before the first line of code. Development starts after that.',
          es: 'Antes de la primera línea de código. El desarrollo empieza después.',
        },
      },
    },
    sources: {
      fr: 'Sources — Recrutement : Apec, « Pratiques de recrutement des cadres » (2023), 12 semaines en moyenne, tous secteurs. Agence : fourchette de 3 à 6 mois publiée par les agences françaises de développement de MVP.',
      en: 'Sources — Hiring: Apec, “Pratiques de recrutement des cadres” (2023), 12 weeks on average, all sectors. Agency: the 3-to-6-month range published by French MVP development agencies.',
      es: 'Fuentes — Contratación: Apec, «Pratiques de recrutement des cadres» (2023), 12 semanas de media, todos los sectores. Agencia: el rango de 3 a 6 meses publicado por las agencias francesas de desarrollo de MVP.',
    },
  },

  comparison: {
    title: { fr: 'Les alternatives.', en: 'The alternatives.', es: 'Las alternativas.' },
    aspectLabel: { fr: 'Critère', en: 'Criterion', es: 'Criterio' },
    agency: { fr: 'Agence', en: 'Agency', es: 'Agencia' },
    freelance: { fr: 'Freelance', en: 'Freelancer', es: 'Freelance' },
    noCode: { fr: 'No-code', en: 'No-code', es: 'No-code' },
    khufu: { fr: 'Khufu', en: 'Khufu', es: 'Khufu' },
    rows: [
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio' },
        agency: { mark: 'mixed', label: { fr: 'Devis révisable', en: 'Revisable quote', es: 'Presupuesto revisable' } },
        freelance: { mark: 'mixed', label: { fr: 'Au temps passé', en: 'By time spent', es: 'Por tiempo' } },
        noCode: { mark: 'no', label: { fr: 'Licence à vie', en: 'Licence forever', es: 'Licencia de por vida' } },
        khufu: { mark: 'yes', label: { fr: 'Fixe', en: 'Fixed', es: 'Fijo' } },
      },
      {
        aspect: { fr: 'Le code est à vous', en: 'The code is yours', es: 'El código es tuyo' },
        agency: { mark: 'mixed', label: { fr: 'Selon contrat', en: 'Per contract', es: 'Según contrato' } },
        freelance: { mark: 'mixed', label: { fr: 'En général', en: 'Usually', es: 'En general' } },
        noCode: { mark: 'no', label: { fr: 'Non', en: 'No', es: 'No' } },
        khufu: { mark: 'yes', label: { fr: 'Oui', en: 'Yes', es: 'Sí' } },
      },
      {
        aspect: { fr: 'Qui construit', en: 'Who builds it', es: 'Quién lo construye' },
        agency: { mark: 'mixed', label: { fr: 'Équipe partagée', en: 'Shared team', es: 'Equipo compartido' } },
        freelance: { mark: 'mixed', label: { fr: 'Une personne', en: 'One person', es: 'Una persona' } },
        noCode: { mark: 'mixed', label: { fr: 'Vous', en: 'You', es: 'Tú' } },
        khufu: { mark: 'yes', label: { fr: 'Le founder', en: 'The founder', es: 'El founder' } },
      },
      {
        aspect: { fr: 'Si ça dérape', en: 'If it slips', es: 'Si se desvía' },
        agency: { mark: 'no', label: { fr: 'Avenant', en: 'Amendment', es: 'Adenda' } },
        freelance: { mark: 'no', label: { fr: 'Le planning glisse', en: 'The schedule slides', es: 'La planificación se desplaza' } },
        noCode: { mark: 'no', label: { fr: 'Tout à refaire', en: 'Rebuild it all', es: 'Rehacerlo todo' } },
        khufu: { mark: 'yes', label: { fr: 'C’est pour nous', en: 'It’s on us', es: 'Corre por nuestra cuenta' } },
      },
    ],
    note: {
      fr: 'Le no-code suffit pour valider une idée sans budget. Un bon freelance coûte moins cher si vous n’êtes pas pressé.',
      en: 'No-code is enough to validate an idea with no budget. A good freelancer costs less if you are not in a hurry.',
      es: 'El no-code basta para validar una idea sin presupuesto. Un buen freelance cuesta menos si no tienes prisa.',
    },
  },

  audience: {
    title: {
      fr: 'Pour qui, et pour qui pas.',
      en: 'Who it’s for, and who it isn’t.',
      es: 'Para quién es, y para quién no.',
    },
    forTitle: { fr: 'Pour vous si', en: 'For you if', es: 'Para ti si' },
    forItems: [
      { fr: 'Vous décidez seul, et vite.', en: 'You decide alone, and fast.', es: 'Decides solo, y rápido.' },
      { fr: 'Vous avez une date en face de vous.', en: 'You have a date staring at you.', es: 'Tienes una fecha delante.' },
      { fr: 'Votre périmètre est arbitrable.', en: 'Your scope can be cut.', es: 'Tu alcance se puede recortar.' },
      {
        fr: 'Un prix fixe vous rassure plus qu’un devis.',
        en: 'A fixed price reassures you more than a quote.',
        es: 'Un precio fijo te tranquiliza más que un presupuesto.',
      },
    ],
    notForTitle: { fr: 'Pas pour vous si', en: 'Not for you if', es: 'No es para ti si' },
    notForItems: [
      { fr: 'Vous cherchez le moins cher.', en: 'You’re after the cheapest.', es: 'Buscas lo más barato.' },
      { fr: 'Rien ne peut sortir de la V1.', en: 'Nothing can be cut from the V1.', es: 'Nada puede salir de la V1.' },
      {
        fr: 'Il vous faut HDS, PCI-DSS ou ISO 27001.',
        en: 'You need HDS, PCI-DSS or ISO 27001.',
        es: 'Necesitas HDS, PCI-DSS o ISO 27001.',
      },
      {
        fr: 'Vous voulez reprendre une grosse base existante.',
        en: 'You want a large existing codebase taken over.',
        es: 'Quieres retomar una base de código grande.',
      },
    ],
  },

  faq: {
    title: { fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes' },
    items: [
      {
        q: {
          fr: '« Livrer en 7 jours, c’est impossible. »',
          en: '“Shipping in 7 days is impossible.”',
          es: '«Entregar en 7 días es imposible.»',
        },
        a: {
          fr: 'Avec une agence, oui : un chef de projet, un designer, deux développeurs et trois réunions de validation. Ici une seule personne tient tous les rôles, amplifiée par l’IA, et le périmètre est arrêté avant le jour 1. On livre le produit qui peut être lancé, pas toute votre roadmap.',
          en: 'With an agency, yes: a project manager, a designer, two developers and three sign-off meetings. Here one person holds every role, amplified by AI, and the scope is settled before day 1. We ship the product that can launch, not your whole roadmap.',
          es: 'Con una agencia, sí: un jefe de proyecto, un diseñador, dos desarrolladores y tres reuniones de validación. Aquí una sola persona cubre todos los roles, amplificada por la IA, y el alcance se cierra antes del día 1. Entregamos el producto que puede lanzarse, no toda tu hoja de ruta.',
        },
      },
      {
        q: {
          fr: '« Et si ça dérape en cours de semaine ? »',
          en: '“What if it goes off the rails mid-week?”',
          es: '«¿Y si se tuerce a mitad de semana?»',
        },
        a: {
          fr: 'Le prix est fixe : le dépassement est pour nous. Vous parlez au founder tous les jours, donc un écart se voit le jour même. Et si le cadrage montre qu’il faut plus de sept jours, on vous le dit avant de commencer.',
          en: 'The price is fixed: the overrun is on us. You talk to the founder every day, so a drift shows up the same day. And if scoping shows it needs more than seven days, we tell you before we start.',
          es: 'El precio es fijo: el exceso corre por nuestra cuenta. Hablas con el founder cada día, así que una desviación se ve el mismo día. Y si el encuadre muestra que hacen falta más de siete días, te lo decimos antes de empezar.',
        },
      },
      {
        q: {
          fr: '« Et après le jour 7, je fais quoi ? »',
          en: '“And after day 7, what do I do?”',
          es: '«¿Y después del día 7, qué hago?»',
        },
        a: {
          fr: 'Deux semaines de correctifs, puis le code est à vous et tourne sur vos comptes. Vous continuez seul, vous recrutez, ou vous nous gardez en maintenance. Rien n’est obligatoire.',
          en: 'Two weeks of fixes, then the code is yours and runs on your own accounts. You continue alone, you hire, or you keep us on maintenance. Nothing is mandatory.',
          es: 'Dos semanas de correcciones, y luego el código es tuyo y funciona en tus cuentas. Sigues solo, contratas, o nos mantienes en mantenimiento. Nada es obligatorio.',
        },
      },
      {
        q: {
          fr: 'Qu’est-ce qui est inclus dans le prix ?',
          en: 'What’s included in the price?',
          es: '¿Qué incluye el precio?',
        },
        a: {
          fr: 'Tout ce qui est listé plus haut. Le site vitrine est livré sur notre gabarit avec vos textes et vos couleurs, l’infrastructure sur notre stack standard, et les deux semaines sont des correctifs — une évolution reste une prestation à part. Les seuls coûts qui restent chez vous sont ceux de vos propres comptes, à votre nom.',
          en: 'Everything listed above. The showcase site ships on our template with your copy and colours, the infrastructure on our standard stack, and the two weeks are fixes — an evolution remains separate work. The only costs left with you are your own accounts, in your name.',
          es: 'Todo lo listado arriba. El sitio escaparate se entrega sobre nuestra plantilla con tus textos y colores, la infraestructura sobre nuestro stack estándar, y las dos semanas son correcciones: una evolución sigue siendo un trabajo aparte. Los únicos costes que quedan de tu lado son los de tus propias cuentas, a tu nombre.',
        },
      },
      {
        // ⛔ ONE question for all four, on purpose (khufu HQ decision cmu09j84).
        // Splitting them, or promoting them to the day-7 grid, would suggest they
        // might not have been included and lower the perceived level of the offer.
        q: {
          fr: 'Paiement, analytics, emails et identité visuelle sont compris ?',
          en: 'Are payments, analytics, emails and the visual identity included?',
          es: '¿El pago, la analítica, los emails y la identidad visual están incluidos?',
        },
        a: {
          fr: 'Oui, évidemment. C’est ce que veut dire livrer un produit en production.',
          en: 'Yes, obviously. That is what shipping a product to production means.',
          es: 'Sí, evidentemente. Eso es lo que significa entregar un producto en producción.',
        },
      },
      {
        /*
         * The stack, answered as a FEAR and not as a curiosity — which is why it
         * is a FAQ line and no longer a section. Adrien asked whether showing the
         * stack of our own products was relevant; it is not: a founder buying a
         * V1 is not buying Next.js. What they are buying is the certainty of not
         * being locked in, so that is what this answers, and the product cards
         * lost their technology chips at the same time.
         */
        q: {
          fr: 'Je serai prisonnier de votre techno ?',
          en: 'Will I be locked into your technology?',
          es: '¿Quedaré atrapado en vuestra tecnología?',
        },
        a: {
          fr: 'Non. Stack standard et très répandue, code livré, aucune licence Khufu : n’importe quel développeur peut reprendre le produit après nous.',
          en: 'No. A standard, widely used stack, the code delivered, no Khufu licence: any developer can pick the product up after us.',
          es: 'No. Un stack estándar y muy extendido, el código entregado, sin licencia Khufu: cualquier desarrollador puede retomar el producto después de nosotros.',
        },
      },
      {
        q: {
          fr: 'Le délai inclut-il la validation des stores ?',
          en: 'Do the 7 days include app store review?',
          es: '¿El plazo incluye la validación de las stores?',
        },
        a: {
          fr: 'Non. Les sept jours couvrent la conception, le développement et la mise en production. La validation App Store et Google Play s’ajoute et ne dépend pas de nous : on soumet au jour 7 et on gère les retours.',
          en: 'No. The seven days cover design, development and going live. App Store and Google Play review comes on top and is outside our control: we submit on day 7 and handle the feedback.',
          es: 'No. Los siete días cubren el diseño, el desarrollo y la puesta en producción. La validación de App Store y Google Play se suma y no depende de nosotros: enviamos el día 7 y gestionamos las respuestas.',
        },
      },
      {
        q: {
          fr: 'Et si je veux changer le périmètre pendant la semaine ?',
          en: 'What if I want to change the scope during the week?',
          es: '¿Y si quiero cambiar el alcance durante la semana?',
        },
        a: {
          fr: 'Ce qui entre compense ce qui sort. Le périmètre garde la même taille, donc la date ne bouge pas.',
          en: 'Whatever comes in offsets whatever goes out. The scope keeps the same size, so the date doesn’t move.',
          es: 'Lo que entra compensa lo que sale. El alcance mantiene el mismo tamaño, así que la fecha no se mueve.',
        },
      },
      {
        q: { fr: 'Qui écrit le code ?', en: 'Who writes the code?', es: '¿Quién escribe el código?' },
        a: {
          fr: 'Adrien De Coster, le founder de Khufu. La même personne du premier appel à la passation.',
          en: 'Adrien De Coster, Khufu’s founder. The same person from the first call to the handover.',
          es: 'Adrien De Coster, el founder de Khufu. La misma persona desde la primera llamada hasta el traspaso.',
        },
      },
      {
        q: { fr: 'Où est basée l’agence ?', en: 'Where is the agency based?', es: '¿Dónde está la agencia?' },
        a: {
          fr: 'Khufu FZCO, enregistrée à Dubaï (licence 5214). 100 % remote, en français, anglais et espagnol.',
          en: 'Khufu FZCO, registered in Dubai (licence 5214). Fully remote, in French, English and Spanish.',
          es: 'Khufu FZCO, registrada en Dubái (licencia 5214). 100 % remoto, en francés, inglés y español.',
        },
      },
    ],
  },

  form: {
    title: {
      fr: 'Dites-nous ce que vous voulez lancer.',
      en: 'Tell us what you want to launch.',
      es: 'Cuéntanos qué quieres lanzar.',
    },
    body: {
      fr: 'Réponse sous 24 h : un périmètre écrit, un prix, une date.',
      en: 'Answer within 24h: a written scope, a price, a date.',
      es: 'Respuesta en 24 h: un alcance escrito, un precio, una fecha.',
    },
    name: { fr: 'Nom', en: 'Name', es: 'Nombre' },
    email: { fr: 'Email professionnel', en: 'Work email', es: 'Email profesional' },
    // The form asks for a name, an email and — optionally — the brief. Nothing
    // else: the traffic is cold, paid and mostly on a phone, and every extra row
    // is paid for twice.
    project: {
      fr: 'Ce que vous voulez lancer (optionnel)',
      en: 'What you want to launch (optional)',
      es: 'Qué quieres lanzar (opcional)',
    },
    projectPlaceholder: {
      fr: 'En trois lignes : à quoi sert le produit, pour qui, et ce qui doit marcher au lancement.',
      en: 'In three lines: what the product does, for whom, and what has to work at launch.',
      es: 'En tres líneas: para qué sirve el producto, para quién, y qué debe funcionar al lanzar.',
    },
    submit: {
      fr: 'Recevoir mon périmètre et ma date',
      en: 'Get my scope and my date',
      es: 'Recibir mi alcance y mi fecha',
    },
    sending: { fr: 'Envoi…', en: 'Sending…', es: 'Enviando…' },
    invalidEmail: {
      fr: 'Merci d’indiquer une adresse email valide.',
      en: 'Please enter a valid email address.',
      es: 'Introduce una dirección de email válida.',
    },
    successTitle: { fr: 'C’est noté.', en: 'Got it.', es: 'Recibido.' },
    successBody: {
      fr: 'Réponse sous 24 h avec un périmètre, un prix et une date. Si c’est urgent, WhatsApp est plus rapide.',
      en: 'An answer within 24h with a scope, a price and a date. If it’s urgent, WhatsApp is faster.',
      es: 'Respuesta en 24 h con un alcance, un precio y una fecha. Si es urgente, WhatsApp es más rápido.',
    },
    privacy: {
      fr: 'Vos informations servent uniquement à répondre. Pas de revente, pas de newsletter.',
      en: 'Your details are only used to answer. No reselling, no newsletter.',
      es: 'Tus datos solo se usan para responder. Sin reventa ni newsletter.',
    },
    whatsapp: { fr: 'Ou par WhatsApp', en: 'Or on WhatsApp', es: 'O por WhatsApp' },
  },

  midCta: {
    products: { fr: 'Parler de mon produit', en: 'Talk about my product', es: 'Hablar de mi producto' },
    day7: { fr: 'Réserver mon sprint', en: 'Book my sprint', es: 'Reservar mi sprint' },
  },

  finalCta: {
    title: {
      fr: 'Dans sept jours, votre produit peut être en ligne.',
      en: 'Seven days from now, your product can be live.',
      es: 'Dentro de siete días, tu producto puede estar en línea.',
    },
    body: {
      fr: 'Le formulaire prend deux minutes.',
      en: 'The form takes two minutes.',
      es: 'El formulario lleva dos minutos.',
    },
  },
}

/** Fully-populated copy: fr/en/es as authored, every other locale filled from French. */
export const sprintLanding = fillLocaleDeep(content) as unknown as SprintLanding
