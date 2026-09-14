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
 *   - RESOLVED 2026-09-14, and the resolution is a fact and not a figure: which
 *     Mondays are taken is now stated, because Adrien holds those weeks for
 *     Khufu's own products and a held week is genuinely unsellable (decision
 *     cmu1qo9r). The dates stay COMPUTED (lib/sprintSlots.ts); the held ones are
 *     listed in `sprintHeldMondays`. ⛔ Still forbidden and not the same thing:
 *     saying a CLIENT took a week, a booking counter, a client count.
 *   - PLACEHOLDER: measured first-response time, against the "within 24h" claim
 *   - PLACEHOLDER: share of clients who continue past day 7
 * Ask before filling any of these in.
 */

/**
 * ⛔ KHUFU SELLS ONE OFFER, WITH NOTHING AROUND IT. Two things used to live on
 * this page behind a flag and are now DELETED, copy included, so that nobody can
 * flip them back on:
 *   - The J7 delivery guarantee (decision cmu0exke): no penalty, no $500/day, no
 *     $3,500 cap, no equivalent wording — not on this page, not in the contract,
 *     not in the partner kit.
 *   - The "clickable prototype in 48h — $990" entry offer (decision cmu0fcvk).
 *     Adrien: « 0 prototype wesh ! ».
 * Do not reintroduce either one without a new decision replacing those two.
 */

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
 * The weeks that are HELD, and therefore show as « Complet » on the calendar.
 *
 * ⚠️ WHY THIS IS TRUE AND NOT A SALES TRICK — read before touching it (khufu HQ
 * decision cmu1qo9r). Adrien holds these weeks for Khufu's OWN products. A week
 * he is building Traqio or Hive TCG in is exactly as unavailable to a client as
 * a week that has been sold, so « complet » is a fact, not a claim. What stays
 * forbidden, and is not what this is: saying a CLIENT took the week, showing a
 * booking counter, or publishing a number of clients. The page says the week is
 * taken. It never says by whom.
 *
 * ⛔ THE COROLLARY IS OPERATIONAL, NOT COSMETIC: a week shown as full must stay
 * unavailable in fact. If a prospect asks for one of these weeks, it is not
 * opened for them on the grounds that it was "only marketing" — that is what
 * keeps the statement true over time.
 *
 * The key is the Monday, `YYYY-MM-DD`; the value is an internal note that is
 * NEVER rendered. Delete a line to open that week, add one to close it — one
 * line either way, which is the whole point (Adrien does not want a booking tool
 * to maintain, decision cmu0fugh).
 *
 * The distribution is Jarvis's call (cmu0fugh), and Adrien set its shape on
 * 2026-09-14: of the four Mondays on screen, the 1st, 2nd and 4th are held and
 * the 3rd is open. ⚠️ THE GAP IS DELIBERATELY NOT CONTIGUOUS — his reason, and
 * it is the one to preserve if this list is ever regenerated: a real calendar is
 * never "the near ones are gone and then everything is free", so a hole in the
 * middle reads as a schedule and a block at the front reads as a device.
 *
 * ⛔ AND THE STRIP CAN NEVER SHOW FOUR FULL WEEKS. Zero availability is a dead
 * end for a page whose only job is conversion, so it is the one state the code
 * forbids: `sprintSlots` slides the window forward until an open week is in it
 * (see lib/sprintSlots.ts). The sequence below already guarantees it — every run
 * of four consecutive Mondays contains at least one open one — and
 * `scripts/checkSprintSlots.ts` proves it for every day over several years. The
 * slide is the belt for the day somebody edits this list by hand.
 *
 * ⚠️ TOP THIS UP. It runs out after 2027-04-05, and past that every week shows
 * as open again. That is honest but it is not the intent.
 */
export const sprintHeldMondays: Readonly<Record<string, string>> = {
  '2026-09-21': 'own product',
  '2026-09-28': 'own product',
  '2026-10-12': 'own product',
  '2026-10-19': 'own product',
  '2026-11-02': 'own product',
  '2026-11-16': 'own product',
  '2026-11-23': 'own product',
  '2026-12-07': 'own product',
  '2026-12-21': 'own product',
  '2027-01-04': 'own product',
  '2027-01-11': 'own product',
  '2027-01-25': 'own product',
  '2027-02-08': 'own product',
  '2027-02-15': 'own product',
  '2027-03-01': 'own product',
  '2027-03-15': 'own product',
  '2027-03-22': 'own product',
  '2027-04-05': 'own product',
}

/**
 * Khufu's own products shown on the page, in FULL SCOPE.
 *
 * ⛔ THE POINT OF THIS SECTION CHANGED ON 2026-09-14 (khufu HQ decision
 * cmu1qkaz). It used to be four browser captures. Adrien: « ça manque pas d'app
 * mobile dans l'exemple ? […] et pour Clokizi et HerbaCRM, comme ils ont des
 * apps compagnons, ça vaut le coup de mettre tout non ? voire même plateforme
 * web + app + showcase non ? genre on montre qu'on fait les produits au
 * complet ». A single capture reads as "they make websites"; a platform, its
 * companion app and its showcase site, of the SAME product, read as "they ship
 * whole products" — which is what a founder with no team is actually buying.
 * And an all-web line-up invents the objection "so you can't do apps".
 *
 * NO CLIENT REFERENCES ON THIS PAGE (Adrien, 2026-09-13). Flatchr, Peach Farmer,
 * Tarokai, Mojo and Tim Management were all pulled. Do not put any of them back.
 * OneStore Link was dropped on 2026-09-14 — a free redirect tool is not a whole
 * product, and on the one section arguing scope it argued against itself.
 *
 * ⛔ NEVER IMPLY THESE WERE BUILT IN SEVEN DAYS. They were not, and the git
 * history says so plainly. So this block carries NO duration at all, anywhere,
 * and no paragraph explains it either — the note that used to sit under the
 * cards is gone on Adrien's instruction (2026-09-13): « sur-explicatif, ça perd
 * le côté ambigu qu'on veut mettre en place pour convaincre ». The line to hold
 * is exact and it is not the same as lying: the section SAYS NOTHING about how
 * long these took or who they were built for. Silent, never false.
 *
 * ⛔ AND THE STATUS BADGE IS PER PRODUCT, never a default. `live` is only for a
 * product that is actually in production. Traqio's SITE is online while the
 * product is a prelaunch (decision cmu0fqj7), and Hive TCG's stores are not open
 * yet — both wear `siteOnly`, and nothing anywhere may imply users, customers,
 * revenue or traction for either.
 */
export type SprintSurface = 'web' | 'app' | 'site'

export type SprintProduct = {
  key: string
  /** Name and tagline come from `projects.ts` when the product has an entry there. */
  slug?: string
  /** Used when it does not — `name` plus a tagline under `products.taglines`. */
  name?: string
  /** The browser frame: the web platform where there is one, else the public site. */
  shot?: { image: string; domain: string }
  /** The phone frame, for a product that ships a companion app. */
  appShot?: string
  /** A second phone, for a product with no web surface to put in a browser frame. */
  appShot2?: string
  /** Named under the card. Must match what the product really ships. */
  surfaces: readonly SprintSurface[]
  status: 'live' | 'siteOnly'
}

export const sprintProducts: readonly SprintProduct[] = [
  {
    key: 'clokizi',
    slug: 'clokizi',
    shot: { image: '/images/sprint/clokizi-web', domain: 'app.clokizi.com' },
    appShot: '/images/sprint/clokizi-app',
    surfaces: ['web', 'app', 'site'],
    status: 'live',
  },
  {
    key: 'herbacrm',
    slug: 'herbacrm',
    shot: { image: '/images/sprint/herbacrm-web', domain: 'app.herbacrm.com' },
    appShot: '/images/sprint/herbacrm-app',
    surfaces: ['web', 'app', 'site'],
    status: 'live',
  },
  {
    key: 'hive',
    name: 'Hive TCG',
    shot: { image: '/images/sprint/hive', domain: 'hive-tcg.app' },
    appShot: '/images/sprint/hive-app',
    surfaces: ['app', 'site'],
    // The site is online; the stores are not open yet. Never `live`.
    status: 'siteOnly',
  },
  {
    key: 'labyrinth',
    slug: 'labyrinth',
    // No web surface at all, so the card is two phones rather than an empty frame.
    appShot: '/images/sprint/labyrinth-app',
    appShot2: '/images/sprint/labyrinth-app-2',
    surfaces: ['app'],
    status: 'live',
  },
  {
    key: 'traqio',
    name: 'Traqio',
    shot: { image: '/images/sprint/traqio', domain: 'traqio.app' },
    surfaces: ['site'],
    status: 'siteOnly',
  },
]

/** One localized string in the authoring shape (`LocalizedInput`) or the resolved one. */
type Leaf<T> = T

/** How a cell reads in the alternatives matrix — drives the glyph, not just the colour. */
export type CompareMark = 'yes' | 'mixed' | 'no'

type Section<T> = {
  /**
   * The first screen. It SHOWS the product (a real capture, lightly staged) and
   * carries three figures; it does not describe anything.
   *
   * ⛔ NOTHING HERE EXPLAINS THE SLOTS. The strip shows four Mondays and their
   * state — open, or full — and that is all it does. No "a sprint starts on a
   * Monday and we only open four weeks", no availability count, no legend.
   * Adrien, 2026-09-13: « sur-explicatif, ça perd l'avantage des slots ».
   *
   * ⛔ AND THE "FULL" BADGE IS A FACT, not a device (decision cmu1qo9r): it is
   * worn only by the weeks listed in `sprintHeldMondays`, which Adrien holds for
   * Khufu's own products. The page says a week is taken, never by whom.
   */
  hero: {
    subtitle: Leaf<T>
    /** Third figure next to the delay and the price — the calendar itself. */
    clientsPerWeek: Leaf<T>
    ctaLabel: Leaf<T>
    /**
     * The dated CTA (decision cmu0fugh) — carries `{date}`, and it carries an
     * ACTION. Adrien, 2026-09-14, on the label it replaces: « pas sûr que les
     * CTA du style "Slot du 21 septembre encore disponible" soit vraiment
     * vendeur ». A button says what pressing it does; availability is a state
     * and belongs next to it, not inside it.
     */
    ctaLabelSlot: Leaf<T>
    /** The state, on its own hairline next to the button — never in the label. */
    ctaAvailable: Leaf<T>
    ctaNote: Leaf<T>
    /** Badge under an open date. */
    slotOpen: Leaf<T>
    /**
     * Badge under a held date. ⛔ TRUE BY CONSTRUCTION, never decoration: a week
     * wears this only if it is in `sprintHeldMondays`, and those are weeks
     * Adrien holds for Khufu's own products (decision cmu1qo9r). It says the
     * week is taken and NEVER by whom — no client, no counter, no number.
     */
    slotHeld: Leaf<T>
    /** Alt text of the staged capture. Says what it is, claims nothing about it. */
    shotAlt: Leaf<T>
    /** Day counter of the hero sequence — carries `{n}`. A label, not a caption. */
    buildDay: Leaf<T>
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
     * The badge for a product whose SITE is online while the product itself is
     * not yet out — Traqio is a prelaunch (decision cmu0fqj7) and Hive TCG's
     * stores are not open. ⛔ NEVER `liveLabel` for either: "site live" and "in
     * production" are not the same claim.
     */
    siteOnlyLabel: Leaf<T>
    /** Taglines for the products that have no `projects.ts` entry to read one from. */
    taglines: { traqio: Leaf<T>; hive: Leaf<T> }
    /** Alt text pattern for a card capture, carrying `{name}`. */
    shotAlt: Leaf<T>
    /** Alt text pattern for a card's phone capture, carrying `{name}`. */
    appShotAlt: Leaf<T>
    /**
     * The surfaces a product ships on, named under its card.
     *
     * ⛔ THIS IS WHAT THE SECTION IS FOR (khufu HQ decision cmu1qkaz). Adrien:
     * « genre on montre qu'on fait les produits au complet ». One capture reads
     * as "they make websites"; a platform, a companion app and a showcase site
     * of the SAME product read as "they ship whole products", which is exactly
     * what a founder without a team is buying. ⚠️ It does not lift the ambiguity
     * rule: we SHOW these, we never write that any of them was delivered to a
     * client in seven days.
     */
    surfaces: { web: Leaf<T>; app: Leaf<T>; site: Leaf<T> }
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
     *
     * ⚠️ EVERY DAY CARRIES AN ACTOR BADGE, and that is recent. The rule was
     * Adrien's, 2026-09-14: Friday's shape — a left rule plus a "who" badge —
     * « est validé : applique-le à TOUS les jours, pour la cohérence ». A badge
     * that appears on one day out of eight reads as an exception; on all of them
     * it reads as a column, and the visitor can see at a glance that the week is
     * ours and Friday is theirs.
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
    /**
     * Who a day belongs to. Every day wears one (Adrien, 2026-09-14).
     *
     * ⛔ AND THE BAND ABOVE THE MOBILE RUN NO LONGER CARRIES `usLabel` AT ALL.
     * Adrien: « supprime le libellé "NOUS" de la bande (il n'apparaît pas sur
     * les jours précédents, donc il n'a pas de sens isolé) ». A label naming one
     * track when the other is unnamed labels nothing.
     */
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
   * ⛔ NO "INCLUDED" CHIP ON ANY ITEM, and the reason is Adrien's, 2026-09-14:
   * « ça implique que les autres le sont pas, c'est dommage ». He is right —
   * three badged items out of nine turn the other six into an open question, on
   * the one grid whose entire job is to say the box is full. Everything listed
   * here is included, so nothing is marked. Decisions cmu09gb6 and cmu09gn1 are
   * still honoured: the showcase site, the hosting and the two weeks of fixes
   * are still ON the grid, they simply no longer wear a label the others lack.
   * The scope guardrails those cards carried live in ONE faq entry.
   */
  day7: {
    title: Leaf<T>
    items: { title: Leaf<T>; note: Leaf<T> }[]
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
  /**
   * Who it is for, and who it is not.
   *
   * ⛔ THE "NOT FOR YOU" COLUMN IS THREE LINES AND EACH ONE HAS TO DISQUALIFY.
   * Adrien took the previous three apart on 2026-09-14 and each objection was
   * right: « "Vous cherchez le moins cher" — bah je suis pas d'accord, comparé
   * aux autres possibilités on n'est pas cher » (it conceded a weakness we do
   * not have); « "Rien ne peut sortir de la V1" — je comprends même pas la
   * phrase moi » (a line the reader has to decode filters nobody); and on the
   * facing column, « pas sûr que le "seul" soit pertinent » — deciding ALONE is
   * not the requirement, deciding FAST is.
   *
   * So the three that remain are things a reader recognises about themselves in
   * one second and that genuinely rule the offer out: a product that cannot be
   * reduced to a V1, a brief that needs weeks of committee, and nobody able to
   * settle a question inside the week.
   */
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
    /**
     * `linkLabel` turns the answer into a doorway: the accordion renders it as a
     * link to the route named by `linkRoute`. Exactly ONE entry uses it — the
     * one that answers what happens when the fixes window closes — because a
     * question zone full of links is a navigation menu, not an answer.
     */
    items: { q: Leaf<T>; a: Leaf<T>; linkLabel?: Leaf<T>; linkRoute?: 'maintenance' }[]
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
      fr: 'Réserver la semaine du {date}',
      en: 'Book the week of {date}',
      es: 'Reservar la semana del {date}',
    },
    ctaAvailable: {
      fr: 'Encore disponible',
      en: 'Still open',
      es: 'Aún disponible',
    },
    ctaNote: {
      fr: 'Périmètre, prix et date sous 24 h.',
      en: 'Scope, price and date within 24h.',
      es: 'Alcance, precio y fecha en 24 h.',
    },
    slotOpen: { fr: 'Disponible', en: 'Open', es: 'Disponible' },
    slotHeld: { fr: 'Complet', en: 'Full', es: 'Completo' },
    shotAlt: {
      fr: 'Un produit Khufu en ligne, vu dans un navigateur.',
      en: 'A Khufu product online, seen in a browser.',
      es: 'Un producto de Khufu en línea, visto en un navegador.',
    },
    buildDay: { fr: 'Jour {n}', en: 'Day {n}', es: 'Día {n}' },
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
          fr: 'à vous dès le premier jour, sans licence ni dépendance à nous',
          en: 'yours from day one, no licence and nothing tying you to us',
          es: 'tuyo desde el primer día, sin licencia ni dependencia de nosotros',
        },
      },
    ],
  },

  products: {
    title: { fr: 'Quelques exemples.', en: 'A few examples.', es: 'Algunos ejemplos.' },
    liveLabel: { fr: 'En production', en: 'In production', es: 'En producción' },
    surfaces: {
      web: { fr: 'Plateforme web', en: 'Web platform', es: 'Plataforma web' },
      app: { fr: 'App mobile', en: 'Mobile app', es: 'App móvil' },
      site: { fr: 'Site vitrine', en: 'Showcase site', es: 'Sitio escaparate' },
    },
    siteOnlyLabel: { fr: 'Site en ligne', en: 'Site live', es: 'Sitio en línea' },
    taglines: {
      traqio: {
        fr: 'L’attribution d’installs et le ROAS, sans boîte noire.',
        en: 'Install attribution and ROAS, without the black box.',
        es: 'Atribución de instalaciones y ROAS, sin caja negra.',
      },
      hive: {
        fr: 'Le jeu de cartes à collectionner qui se joue sur une ruche.',
        en: 'The collectible card game played on a hive.',
        es: 'El juego de cartas coleccionables que se juega sobre una colmena.',
      },
    },
    shotAlt: {
      fr: 'Le site de {name}, en ligne.',
      en: 'The {name} site, live.',
      es: 'El sitio de {name}, en línea.',
    },
    appShotAlt: {
      fr: 'L’application mobile {name}.',
      en: 'The {name} mobile app.',
      es: 'La aplicación móvil {name}.',
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
        fr: 'Cahier des charges, échanges sur le projet, devis signé.',
        en: 'Your brief, the conversations about the project, the signed quote.',
        es: 'Tu pliego de condiciones, los intercambios sobre el proyecto, el presupuesto firmado.',
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
        title: { fr: 'V1 complète, en ligne', en: 'Full V1, online', es: 'V1 completa, en línea' },
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
            fr: 'Hébergement et préparation de la mise en ligne.',
            en: 'Hosting and preparing the go-live.',
            es: 'Alojamiento y preparación de la puesta en línea.',
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
    items: [
      {
        title: { fr: 'Produit en production', en: 'Product in production', es: 'Producto en producción' },
        note: { fr: 'en ligne, à votre adresse', en: 'live, at your address', es: 'en línea, en tu dirección' },
      },
      {
        title: { fr: 'Le code du produit', en: 'The product’s code', es: 'El código del producto' },
        note: {
          fr: 'à vous dès le premier jour',
          en: 'yours from day one',
          es: 'tuyo desde el primer día',
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
        title: { fr: 'Hébergement et mise en ligne', en: 'Hosting and go-live', es: 'Alojamiento y puesta en línea' },
        note: { fr: 'sur vos comptes, à votre nom', en: 'on your accounts, in your name', es: 'en tus cuentas, a tu nombre' },
      },
      {
        title: { fr: 'Site vitrine, SEO et GEO', en: 'Showcase site, SEO and GEO', es: 'Sitio escaparate, SEO y GEO' },
        note: {
          fr: 'de quoi le montrer et le vendre',
          en: 'something to show it and sell it with',
          es: 'algo con lo que mostrarlo y venderlo',
        },
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
          fr: 'La fourchette que les agences annoncent elles-mêmes.',
          en: 'The range agencies publish for themselves.',
          es: 'El rango que las propias agencias anuncian.',
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
      { fr: 'Vous avez une date en face de vous.', en: 'You have a date staring at you.', es: 'Tienes una fecha delante.' },
      { fr: 'Votre périmètre est arbitrable.', en: 'Your scope can be cut.', es: 'Tu alcance se puede recortar.' },
      {
        fr: 'Un prix fixe vous rassure plus qu’un devis.',
        en: 'A fixed price reassures you more than a quote.',
        es: 'Un precio fijo te tranquiliza más que un presupuesto.',
      },
      {
        fr: 'Vous pouvez trancher dans la journée.',
        en: 'You can settle a question the same day.',
        es: 'Puedes decidir en el día.',
      },
    ],
    notForTitle: { fr: 'Pas pour vous si', en: 'Not for you if', es: 'No es para ti si' },
    notForItems: [
      {
        fr: 'Votre produit ne tient pas dans une V1, même réduite.',
        en: 'Your product doesn’t fit a V1, not even a trimmed one.',
        es: 'Tu producto no cabe en una V1, ni siquiera recortada.',
      },
      {
        fr: 'Votre cahier des charges passe par un comité, sur plusieurs semaines.',
        en: 'Your brief goes through a committee, over several weeks.',
        es: 'Tu pliego pasa por un comité, durante varias semanas.',
      },
      {
        fr: 'Personne chez vous ne peut trancher dans la semaine.',
        en: 'Nobody on your side can settle a question within the week.',
        es: 'Nadie de tu lado puede decidir dentro de la semana.',
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
          fr: 'Avec une agence, oui : quatre personnes et trois réunions de validation. Ici une seule tient tous les rôles, amplifiée par l’IA, et le périmètre est arrêté avant le jour 1. On livre le produit qui peut être lancé, pas toute votre feuille de route.',
          en: 'With an agency, yes: four people and three sign-off meetings. Here one person holds every role, amplified by AI, and the scope is settled before day 1. We ship the product that can launch, not your whole plan.',
          es: 'Con una agencia, sí: cuatro personas y tres reuniones de validación. Aquí una sola cubre todos los roles, amplificada por la IA, y el alcance se cierra antes del día 1. Entregamos el producto que puede lanzarse, no todo tu plan.',
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
          fr: 'Deux semaines de correctifs sont comprises. Le produit tourne déjà sur vos comptes, à votre nom.',
          en: 'Two weeks of fixes are included. The product already runs on your own accounts, in your name.',
          es: 'Dos semanas de correcciones están incluidas. El producto ya funciona en tus cuentas, a tu nombre.',
        },
      },
      {
        /*
         * The fear this answers is the last one before signing and it is not
         * about the build: « je me retrouve seul au jour 21 ». Adrien asked for
         * the bridge on 2026-09-14 — the tone is reassuring and factual, never
         * a pitch, and nothing here may be invented: the tiers, the scope and
         * the commitment are read off /maintenance and nothing else.
         * ⚠️ « à partir de » is exact: [[1490]] is the Starter tier, and Growth
         * and Scale sit above it. Do not write a price this page cannot source.
         */
        q: {
          fr: 'Et après les deux semaines de correctifs ?',
          en: 'And after the two weeks of fixes?',
          es: '¿Y después de las dos semanas de correcciones?',
        },
        a: {
          fr: 'Vous n’êtes obligé à rien : le produit est à vous et tourne sans nous. Si vous préférez ne pas le porter seul, Full Maintenance prend la suite — hébergement, support et jours de développement compris chaque mois, à partir de [[1490]] par mois, engagement 6 mois.',
          en: 'You are not tied to anything: the product is yours and runs without us. If you would rather not carry it alone, Full Maintenance takes over — hosting, support and development days included every month, from [[1490]] a month, on a 6-month commitment.',
          es: 'No estás obligado a nada: el producto es tuyo y funciona sin nosotros. Si prefieres no llevarlo solo, Full Maintenance toma el relevo — alojamiento, soporte y días de desarrollo incluidos cada mes, desde [[1490]] al mes, con compromiso de 6 meses.',
        },
        linkLabel: {
          fr: 'Voir Full Maintenance',
          en: 'See Full Maintenance',
          es: 'Ver Full Maintenance',
        },
        linkRoute: 'maintenance',
      },
      {
        q: {
          fr: 'Qu’est-ce qui est inclus dans le prix ?',
          en: 'What’s included in the price?',
          es: '¿Qué incluye el precio?',
        },
        a: {
          fr: 'Tout ce qui est listé plus haut. Le site vitrine est livré sur notre gabarit avec vos textes et vos couleurs, l’hébergement sur nos outils habituels, et les deux semaines sont des correctifs — une évolution reste une prestation à part. Les seuls coûts qui restent chez vous sont ceux de vos propres comptes, à votre nom.',
          en: 'Everything listed above. The showcase site ships on our template with your copy and colours, the hosting on the tools we always use, and the two weeks are fixes — an evolution remains separate work. The only costs left with you are your own accounts, in your name.',
          es: 'Todo lo listado arriba. El sitio escaparate se entrega sobre nuestra plantilla con tus textos y colores, el alojamiento sobre las herramientas que usamos siempre, y las dos semanas son correcciones: una evolución sigue siendo un trabajo aparte. Los únicos costes que quedan de tu lado son los de tus propias cuentas, a tu nombre.',
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
          fr: 'Non. Technologies standards et très répandues, code livré, aucune licence Khufu : n’importe quel développeur peut reprendre le produit après nous.',
          en: 'No. Standard, widely used technologies, the code delivered, no Khufu licence: any developer can pick the product up after us.',
          es: 'No. Tecnologías estándar y muy extendidas, el código entregado, sin licencia Khufu: cualquier desarrollador puede retomar el producto después de nosotros.',
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
