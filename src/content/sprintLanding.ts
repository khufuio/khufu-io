import type { Locale } from '@/i18n/config'
import type { LocalizedInput } from '@/i18n/localize'

/**
 * Copy for the Sprint V1 landing page — the destination of PAID traffic
 * (LinkedIn Ads first). Written out in ALL TEN locales: fr/en/es are the
 * languages we sell in and the source of every change; the seven others are
 * translations of them (todo cmu8036u, 2026-09-19).
 *
 * ⛔ NO LOCALE FALLS BACK ANY MORE. Until 2026-09-19 the seven non-selling
 * locales were filled from French at build time, so /de … /tr served French and
 * /ar served French in a right-to-left layout — to the ads' own audience
 * (decision cmu805x7: a landing exposed in a locale is really translated in it).
 * `LocalizedInput` now requires every locale, so a string added in fr/en/es
 * alone is a type error. ⚠️ When the FR changes, the nine others change in the
 * same commit — an out-of-date translation is the same bug, just quieter.
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
 * ⚠️ A REWRITE THAT ADDS COPY HERE MUST SAY WHAT IT REMOVES. The 2026-09-14
 * rewrite cut the visitor-facing French copy from 16,426 characters; the
 * 2026-09-15 pass took it to 7,249 (`scripts/measureSprintCopy.ts` prints the
 * current figure — run it before and after). What that pass REMOVED, so the
 * ledger is explicit: the whole `form` section (the page no longer carries a
 * form of its own — the Google booking page collects the same fields), the
 * « founder qui écrit le code » line and its FAQ twin, the « Le formulaire prend
 * deux minutes » line, the day-7 back-office promise, and the hero sequence's
 * per-day labels. What it ADDED: the `system` block that explains the seven days
 * and the `contact` copy for the booking modal.
 *
 * ✅ PASS 5 (2026-09-15) IS A NET REMOVAL — 7,906 → 7,783, 123 characters down.
 * The first pass on this page in a while that pays the ledger instead of owing
 * it. What went, and each one is argued at its own site:
 *   - `hero.clientsPerWeek` — the third hero figure, « 1 », deleted outright;
 *   - the back-office FAQ entry, deleted (a question a [[15000]] buyer does not
 *     ask before a scoping call, and the only block on the page whose STRUCTURE
 *     was an arbitration downwards);
 *   - « Et après le jour 7, je fais quoi ? » merged into « Et après la
 *     livraison ? » — one anxiety, asked twice, now asked once;
 *   - « au contrat » in the day-7 grid and in the delay chart.
 * What was REPLACED rather than removed (roughly no net copy): the system
 * section's closing line, the FAQ's « pas toute votre feuille de route », the
 * scope-change swap rule, and the first « pas vous si ». All four under decision
 * cmu26co1.
 *
 * ⚠️ AND ONE THING GREW, declared because the rule above requires it: `shotAlt`
 * went from 58 to 184 characters. It is the ONLY addition in this pass, and none
 * of it is on screen — it is the hero visual's accessible description, which had
 * to stop naming a product once the capture it described was deleted. Without it
 * a screen reader gets nothing at all from the first screen. The rule exists to
 * stop a shop window silting up into a document; text no sighted visitor reads
 * does not silt. ⛔ That defence does not extend to anything that renders.
 *
 * ⚠️ AND PASS 4 (2026-09-15) RAN IN TWO HALVES; BOTH ARE DECLARED HERE, because
 * the rule above requires it rather than letting copy creep in unannounced.
 *
 * PASS 4b: 7,641 → 7,906, +265 characters ON SCREEN, and this half does NOT hide
 * behind a disclosure. What it ADDED: two cards in the contract section (Adrien
 * read the live page — « il manque 2 cartes, la section fait vide » — and four
 * cards in a three-wide grid left a row with one card and two holes), and eleven
 * characters on the booking note. What it REMOVED: « Encore disponible » under
 * the hero button and the dated CTA label in both places it was built (« Réserver
 * la semaine du {date} »). The trade is deliberate and it is not a wash — a
 * ragged section reads as unfinished on a page selling a €15k engagement, and the
 * two lines removed were the page's only two pieces of manufactured urgency.
 *
 * PASS 4a ADDED 392 CHARACTERS AND REMOVED NONE — 7,249 → 7,641.
 * All of it is `contact.callback`, the net's eleven strings. The defence, and it
 * is a real one rather than an excuse: NONE OF IT IS ON SCREEN BY DEFAULT. The
 * net ships folded inside a `<details>`, so the page a visitor actually reads
 * gained one nine-word question — « Pas disponible sur ces créneaux ? » — and
 * every other string appears only after they ask for it. The rule exists to stop
 * a shop window silting up into a document; copy behind a disclosure does not
 * silt. ⛔ That defence does NOT extend to the rest of the page: anything that
 * renders on arrival still has to pay for itself by removing something.
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
 *     cmu1qo9r). The dates stay COMPUTED (lib/sprintSlots.ts), and so does which
 *     of them are held — one week in two, by rule. ⛔ Still forbidden and not the same thing:
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
 * ⚠️ IT REMOVES A WEEK; IT DOES NOT MARK ONE FULL. That is `isHeldByRule` (one
 * Monday in two, by rule) plus `sprintClosedMondays` for a week closed by hand.
 * Three levers, and this is the only one that makes a date disappear entirely.
 *
 * ⛔ AND NONE OF THE THREE MAY GROW INTO A DEVICE. No "2 places left", no
 * countdown, no week labelled "booked": the page says which weeks are open and
 * which are taken, never by whom, and never how many are left. A false claim
 * here is verifiable by reloading the page two weeks running, on the one page we
 * point an ad budget at.
 */
export const sprintExcludedMondays: readonly string[] = []

/**
 * Weeks closed BY HAND, on top of the rule — the Monday of each, `YYYY-MM-DD`,
 * against an internal note that is NEVER rendered.
 *
 * ⚠️ WHICH WEEKS ARE FULL IS NO LONGER A LIST (2026-09-15, pass 4). Adrien read
 * the live page and found too many weeks open: « je veux environ une sur deux,
 * avec une règle déterministe et cohérente d'une visite à l'autre ». One Monday
 * in two is now held by `isHeldByRule` in lib/sprintSlots.ts — a pure function
 * of the date, so a week reads the same on every visit for ever, and the table
 * can no longer run out or silently re-open a week it once called full.
 *
 * ⚠️ WHY THIS IS TRUE AND NOT A SALES TRICK (khufu HQ decision cmu1qo9r).
 * Adrien holds one week in two for Khufu's OWN products. A week he is building
 * Traqio or Hive TCG in is exactly as unavailable to a client as a week that has
 * been sold, so « complet » is a fact, not a claim. What stays forbidden, and is
 * not what this is: saying a CLIENT took the week, showing a booking counter, or
 * publishing a number of clients. The page says the week is taken. It never says
 * by whom.
 *
 * ⛔ THE COROLLARY IS OPERATIONAL, NOT COSMETIC: a week shown as full must stay
 * unavailable in fact. If a prospect asks for one of these weeks, it is not
 * opened for them on the grounds that it was "only marketing" — that is what
 * keeps the statement true over time, and it is the condition the rule above
 * rests on.
 *
 * ⛔ THIS LIST ONLY EVER CLOSES MORE. It cannot open a week the rule holds —
 * that would be the re-opening the rule exists to prevent. Use it for a week
 * that is genuinely gone and that the rule happened to leave open: a holiday, a
 * sprint actually sold. One line, which is the whole point (Adrien does not want
 * a booking tool to maintain, decision cmu0fugh).
 *
 * ⛔ AND THE STRIP CAN NEVER SHOW FOUR FULL WEEKS. Zero availability is a dead
 * end for a page whose only job is conversion. The rule alone guarantees it by
 * construction — never more than two held weeks in a row — and `sprintSlots`
 * still slides the window forward as a belt for what gets closed here by hand.
 * `scripts/checkSprintSlots.ts` proves both for every day over three years.
 */
export const sprintClosedMondays: Readonly<Record<string, string>> = {}

/**
 * Which icon each contract card wears, in the order the cards are written.
 *
 * ⚠️ IT LIVES HERE, NEXT TO THE CARDS, AND THAT IS THE FIX. The icons used to be
 * picked from a three-entry list held in the component, indexed by position —
 * so when the copy grew to four cards the fourth silently rendered an empty
 * circle, on a live page, with no error anywhere (Adrien found it on
 * 2026-09-15: « il manque une icône »). Keeping the two lists in one file makes
 * the mismatch visible while editing, and `scripts/checkSprintLocales.ts` fails
 * the recipe if they ever differ in length anyway.
 *
 * ⛔ The names must exist in `ICONS` in sprintCommitments.tsx. It is not copy —
 * nothing here is translated — it is the order of the section.
 */
export const sprintCommitmentIcons = [
  'ownership',
  'result',
  'warranty',
  'handover',
  'confidentiality',
  'freedom',
] as const

/**
 * Khufu's own products shown on the page, in FULL SCOPE.
 *
 * ⛔ THE POINT OF THIS SECTION (khufu HQ decision cmu1qkaz). It used to be four
 * browser captures. Adrien: « ça manque pas d'app mobile dans l'exemple ? […] et
 * pour Clokizi et HerbaCRM, comme ils ont des apps compagnons, ça vaut le coup de
 * mettre tout non ? voire même plateforme web + app + showcase non ? genre on
 * montre qu'on fait les produits au complet ». A single capture reads as "they
 * make websites"; a platform, its companion app and its showcase site, of the
 * SAME product, read as "they ship whole products" — which is what a founder
 * with no team is actually buying.
 *
 * ⚠️ ONESTORE LINK IS BACK, 2026-09-15, on Adrien's instruction (« il manque
 * OSL »). That reverses the 2026-09-14 removal, whose reasoning was mine and not
 * his: I dropped it as "a free redirect tool is not a whole product". He wants it
 * shown, so it is shown. Do not pull it again without asking him.
 *
 * NO CLIENT REFERENCES ON THIS PAGE (Adrien, 2026-09-13). Flatchr, Peach Farmer,
 * Tarokai, Mojo and Tim Management were all pulled. Do not put any of them back.
 *
 * ⛔ NEVER IMPLY THESE WERE BUILT IN SEVEN DAYS. They were not, and the git
 * history says so plainly. So this block carries NO duration at all, anywhere,
 * and no paragraph explains it either — the note that used to sit under the cards
 * is gone on Adrien's instruction (2026-09-13): « sur-explicatif, ça perd le côté
 * ambigu qu'on veut mettre en place pour convaincre ». The line to hold is exact
 * and it is not the same as lying: the section SAYS NOTHING about how long these
 * took or who they were built for. Silent, never false.
 *
 * ⚠️ THE STATUS BADGE — SETTLED 2026-09-15 (khufu HQ decision cmu1u7c9). Every
 * product here wears « En production », Hive TCG included. Adrien: « "En
 * production" même pour Hive, tkt ». The badge qualifies the TECHNICAL state of
 * the product — it is built, deployed and running — not its distribution. That
 * replaces the `siteOnly` badge this file used to carry.
 *
 * ⛔ AND THE LIMIT THAT COMES WITH IT IS NOT OPTIONAL. Nothing on this page may
 * say or imply that a product is AVAILABLE, downloadable, open to the public or
 * being sold when it is not: no store button for Hive TCG, no user numbers, no
 * "launched", no traction. The badge, yes. The distribution promise, never.
 *
 * ⛔ AND NO PRODUCT WEARS A STATE OF PROGRESS — SETTLED 2026-09-15 (decision
 * cmu39zpr). Traqio used to declare its platform, its SDKs and its packages as
 * « à venir »; it does not any more, and nothing else may either. Adrien: « on a
 * dit, pas de "à venir" ou autre, on considère tout comme en prod pour Traqio ».
 * The reason is what this whole section is FOR: Traqio sits here as PROOF of
 * what Khufu runs in production, and a surface labelled "coming" turns that
 * proof back into a promise — it weakens precisely the thing it was shown to
 * demonstrate. This supersedes the prelaunch nuance cmu0fqj7 put on Traqio's
 * presentation; the distribution limit above is untouched and still binds.
 */

/**
 * A surface a product ships on. `sdk` and `packages` exist because Traqio is not
 * a showcase site — reducing it to one was the 2026-09-14 mistake Adrien caught:
 * « ne le réduis pas au site vitrine ».
 */
export type SprintSurface = 'web' | 'app' | 'site' | 'sdk' | 'packages'

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
  /**
   * A row of phones, for a product with no web surface to put in a browser frame
   * (replaces `shot` and `appShot`). Three, not two: see the Labyrinth entry.
   */
  phoneShots?: readonly string[]
  /**
   * The surfaces the product ships. Must match what it really runs today.
   *
   * ⛔ ONE LIST, NO SECOND TIER (decision cmu39zpr). There used to be a
   * `soonSurfaces` field rendering « … · à venir » chips for Traqio; it is gone,
   * field, label and all ten locales. A surface either belongs on the card or it
   * does not — a card that grades its own contents argues against itself.
   */
  surfaces: readonly SprintSurface[]
}

export const sprintProducts: readonly SprintProduct[] = [
  {
    key: 'clokizi',
    slug: 'clokizi',
    shot: { image: '/images/sprint/clokizi-web', domain: 'app.clokizi.com' },
    appShot: '/images/sprint/clokizi-app',
    surfaces: ['web', 'app', 'site'],
  },
  {
    key: 'herbacrm',
    slug: 'herbacrm',
    shot: { image: '/images/sprint/herbacrm-web', domain: 'app.herbacrm.com' },
    appShot: '/images/sprint/herbacrm-app',
    surfaces: ['web', 'app', 'site'],
  },
  {
    key: 'traqio',
    name: 'Traqio',
    // ⚠️ THE HOME PAGE, NOT THE PRICING GRID (recaptured 2026-09-15). Adrien found
    // the pricing capture weak, and he was right: a price table is the least
    // distinctive screen any SaaS has. The rebuilt home page shows what the product
    // actually does — three sources disagreeing, then Traqio's reconciled figure.
    // Pass 4 kept this card off the home page because the hero ended on it; pass 5
    // took every capture out of the hero, so no screen appears twice. ⛔ If a
    // capture ever returns to the hero, it must not be this one.
    // Captured with the site's own chrome, cookie banner and scrollbar hidden, and
    // set in Roboto — a face from the site's own `system-ui` stack (what Android
    // visitors get); the headless server has only DejaVu, which no visitor sees.
    shot: { image: '/images/sprint/traqio', domain: 'traqio.app' },
    // ⚠️ FOUR SURFACES AT ONE RANK (decision cmu39zpr, 2026-09-15). The platform,
    // the SDKs and the packages sit next to the site with no suffix and no
    // dimmer chip. Adrien: « on considère tout comme en prod pour Traqio ». They
    // run — that is what the « En production » badge qualifies — and Traqio is on
    // this page as proof, so grading its own surfaces would turn that proof into
    // a promise. ⛔ Do not reintroduce a "coming" tier here or anywhere.
    surfaces: ['web', 'sdk', 'packages', 'site'],
  },
  {
    key: 'hive',
    name: 'Hive TCG',
    shot: { image: '/images/sprint/hive', domain: 'hive-tcg.app' },
    appShot: '/images/sprint/hive-app',
    // ⛔ No store link and no store badge anywhere for this one: the stores are
    // not open. It is in production; it is not distributed. Those differ.
    surfaces: ['app', 'site'],
  },
  {
    key: 'labyrinth',
    slug: 'labyrinth',
    /*
     * No web platform, so the card is a row of phones rather than an empty frame.
     *
     * ⚠️ THREE SMALLER PHONES, NOT TWO TALL ONES (2026-09-15). Adrien: « on peut
     * pas réduire la height des phone frame quitte à ajouter 1 capture de + ? ».
     * Two phones sized to fill the card's width stood 254px tall against 204–234px
     * for a browser frame, so this card set the height of its whole row and pushed
     * every title in it out of line. A phone is tall by nature: the only way to
     * shorten it without shrinking the card into a stamp is to share the width
     * between more of them. Three at a third of the width land UNDER the browser
     * composition's height, and they show three different things — a run, the
     * map ladder, the theme shop — which says « a whole game » better than two.
     * The alignment itself is held by the grid, not by these sizes: see the
     * subgrid note in sprintProductWall.tsx.
     * ⛔ Pick screens that tell something DIFFERENT. The store set also has « You
     * can't see the walls » and « Swipe blind », which are the same gameplay shot
     * as the chest one, and « Three worlds », which is the three-scene triptych
     * pass 4 removed.
     *
     * ⚠️ BOTH CAPTURES WERE REPLACED ON 2026-09-15 and the reason is worth
     * keeping. Adrien: « les captures sont moches, surtout celles de
     * Labyrinth ». He was right and it was worse than ugly: one file was three
     * unrelated game scenes stacked into a single frame, and the other was a
     * gameplay crop with the HUD cut in half by the bottom edge. A capture that
     * looks accidental argues against the thing it is meant to prove.
     * ⛔ THESE ARE THE SCREENS THE GAME PUBLISHES ON THE STORES — its own public
     * surface, and the same rule as every other capture on this page: a real
     * live surface, never a mockup, never a render. Replace one only with
     * another store screen or another real app screen, and if neither is
     * presentable, ship the card without it — an empty frame costs less than a
     * proof that works against us.
     */
    phoneShots: [
      '/images/sprint/labyrinth-app-2',
      '/images/sprint/labyrinth-app',
      '/images/sprint/labyrinth-app-3',
    ],
    surfaces: ['app'],
  },
  {
    key: 'onestore',
    slug: 'onestore-link',
    shot: { image: '/images/sprint/onestore-link', domain: 'onestore.link' },
    surfaces: ['web', 'site'],
  },
]

/** One localized string in the authoring shape (`LocalizedInput`) or the resolved one. */
type Leaf<T> = T

/** How a cell reads in the alternatives matrix — drives the glyph, not just the colour. */
export type CompareMark = 'yes' | 'mixed' | 'no'

type Section<T> = {
  /**
   * The first screen. It SHOWS what a week produces and carries three figures;
   * it does not describe anything.
   *
   * ⛔ NOTHING HERE EXPLAINS THE SLOTS. The strip shows four Mondays and their
   * state — open, or full — and that is all it does. No "a sprint starts on a
   * Monday and we only open four weeks", no availability count, no legend.
   * Adrien, 2026-09-13: « sur-explicatif, ça perd l'avantage des slots ».
   *
   * ⛔ AND THE "FULL" BADGE IS A FACT, not a device (decision cmu1qo9r): it is
   * worn by the one week in two that `isHeldByRule` holds, which are the weeks
   * Adrien blocks for Khufu's own products. The page says a week is taken, never
   * by whom.
   */
  hero: {
    subtitle: Leaf<T>
    /*
     * ⛔ THERE IS NO THIRD FIGURE, AND THERE MUST NOT BE ONE AGAIN (2026-09-15,
     * pass 5). The hero carried « 1 — projet à la fois, le vôtre » next to the
     * delay and the price. Adrien had already queried it once; the pass before
     * this one heard "the wording is wrong" and only rewrote the label, which is
     * the mistake to avoid repeating. The objection was never the wording.
     *
     * TWO REASONS, AND THE SECOND IS THE ONE THAT COSTS MONEY.
     *   1. The row is a scoreboard of what the buyer GETS — seven days, a fixed
     *      price. A third slot spent on how much we can take on is the one number
     *      on it that is about us, and the odd one out on a scoreboard reads as
     *      an apology for the size of the shop. That is decision cmu1u21i's exact
     *      failure mode: we sell the system, never the founder's headcount.
     *   2. "1" set in the display face, at the same weight as the price, is the
     *      page's smallest number in its biggest type. Whatever the label says,
     *      the eye reads the figure first and reads it as our magnitude.
     *
     * ⚠️ AND NOTHING WAS LOST, which is why it could simply go. The claim it
     * carried — you are not queued behind three other projects — is made twice
     * more on this page, both times better than a figure can: by the calendar
     * strip directly underneath (four Mondays, two of them full: shown, dated,
     * verifiable) and by the comparison matrix's « Votre place dans la file /
     * La semaine est à vous ». A figure asserting it a third time added a
     * reading we do not want and no information at all.
     */
    /**
     * The one button of the first screen.
     *
     * ⛔ IT NAMES NO DATE, AND THAT REVERSES decision cmu0fugh's dated label.
     * Adrien, 2026-09-15: « "Réserver la semaine du 5 octobre" présume la date
     * que veut le prospect. L'appel est un cadrage de 30 min, pas la réservation
     * du sprint. » Both halves are right, and the second is the serious one: the
     * button opened a 30-minute scoping call while announcing a week-long
     * engagement, so it over-promised on the way in and under-delivered on the
     * way out. The label now says exactly what pressing it books. The week the
     * visitor is looking at still travels — into the modal's chip, the prefilled
     * WhatsApp message and the analytics — as CONTEXT, never as a commitment.
     *
     * ⛔ AND THE « Encore disponible » LINE UNDER IT IS GONE (Adrien: « je doute
     * du libellé »). « Encore » announces a countdown we do not run, which is
     * the false urgency this page has refused everywhere else; and the state was
     * already written, truthfully, on the chip in the strip just below. A third
     * statement of the same fact, in the one word that made it a device, earned
     * nothing.
     */
    ctaLabel: Leaf<T>
    /**
     * ⛔ NO PRICE IN THIS PROMISE. It used to read « Périmètre, prix et date sous
     * 24 h », which contradicted the offer itself — Adrien, 2026-09-15: « c'est
     * pertinent alors justement prix fixe ? ». He is right: the price is fixed
     * and displayed on the page, so announcing that we will send one in 24h says
     * it is not settled. What comes back in 24h is the SCOPE and the DATE.
     */
    ctaNote: Leaf<T>
    /** Badge under an open date. */
    slotOpen: Leaf<T>
    /**
     * Badge under a held date. ⛔ TRUE BY CONSTRUCTION, never decoration: a week
     * wears this only if `isHeldByRule` holds it, and those are the weeks Adrien
     * blocks for Khufu's own products (decision cmu1qo9r). It says the week is
     * taken and NEVER by whom — no client, no counter, no number.
     */
    slotHeld: Leaf<T>
    /** Alt text of the staged capture. Says what it is, claims nothing about it. */
    shotAlt: Leaf<T>
    /**
     * The address written in the hero frame's address bar.
     *
     * ⛔ IT REPLACED A PROGRESS BAR, and that is the whole point (2026-09-16).
     * The address bar used to hold a pill that filled and turned green — which
     * made THREE progress indicators stacked on one screen: that pill, the wiring
     * across the tiles, and the seven-day rail under the frame. Adrien: « ça fait
     * doublon avec la bar du bas et le stepper en dessous ». It also spent the
     * one place in the drawing that can make a browser look like a browser on a
     * fourth copy of a fact already told twice.
     *
     * ⛔ FICTIONAL, ALWAYS — never a real domain, ours or a client's. The rule it
     * has to keep is the old one: an illustration must not sign itself with a
     * product's name (see the header of sprintBuildSequence.tsx). « votre projet »
     * is the visitor's, which is the opposite of a signature.
     *
     * ⚠️ TRANSLATED, because the visitor has to read it as « my project » in
     * their own language — an English placeholder on /de is a placeholder from
     * someone else's site. Keep the shape `https://www.<something>.com`: the
     * component dims everything up to and including `www.` the way Chrome does,
     * and a string without that prefix simply loses the effect.
     *
     * ⚠️ AR TAKES THE ENGLISH ONE ON PURPOSE. Domain names are Latin-script in
     * this register, and a romanised Arabic word in an address bar reads as a
     * typo rather than as a translation. The line is LTR in the markup for the
     * same reason.
     */
    shotUrl: Leaf<T>
  }
  /**
   * WHERE THE SPEED COMES FROM — the block that replaced « vous parlez au founder
   * qui écrit le code » (khufu HQ decision cmu1u21i).
   *
   * ⚠️ WHY THE OLD LINE HAD TO GO, in Adrien's words (2026-09-14): « tu dis
   * "écrit le code", donc faux, pas pertinent avec notre message. Et dire en gros
   * que je suis solo, c'est pas un argument positif pour 17k USD ». Both halves
   * count. The claim was inaccurate, and "one person" reads as bus factor on a
   * $17k decision — it argued against the sale.
   *
   * ⚠️ AND WHY SOMETHING HAD TO REPLACE IT rather than simply be deleted: without
   * an explanation, "seven days" reads as bluff. This is that explanation, and
   * Adrien asked for it in this exact shape: « une petite infographie du genre
   * système IA complexe, ça peut être vendeur, et justifier encore + le 1 week ».
   *
   * ⛔ THREE THINGS THIS BLOCK MAY NEVER DO, and they are the bounds of cmu1u21i:
   *   1. invent headcount or capacity — no team, no "N sprints at once";
   *   2. present the system as running without a human — the last step is a
   *      person deciding, and it is there because it is true;
   *   3. use developer vocabulary (cmu1qk2g) — the reader is a founder, not an
   *      engineer. « les écrans, les données, la mise en ligne », never « CI ».
   *
   * ⚠️ What stays true and reassuring, said the other way: ONE person to talk to,
   * who decides. That line lives under the timeline, without the word "solo" and
   * without claiming anybody types the code.
   */
  system: {
    title: Leaf<T>
    subtitle: Leaf<T>
    steps: { title: Leaf<T>; note: Leaf<T> }[]
    /** The one sentence allowed here, and it closes the argument. */
    note: Leaf<T>
  }
  /**
   * What the contract says — and ONLY what a reader would not already assume.
   *
   * ⚠️ ITS HISTORY, BECAUSE IT HAS BEEN MOVED AND REWRITTEN SEVERAL TIMES. It was
   * headed « Ce qu'on peut prouver », which Adrien called « vendeur de tapis
   * pourri ». It was then demoted to a thin band, which he overruled (decision
   * cmu0jo1w): « une vraie section en bande avec des cards ou un truc stylisé qui
   * le rappelle c'est jamais mauvais non ? ». He is right at the scale of a
   * landing — a prospect scans and enters mid-page, and whoever reaches the final
   * CTA without having read the hero no longer has the promise in front of them.
   *
   * ⛔ AND ON 2026-09-15 ITS CONTENT CHANGED, which is the part to preserve. It
   * listed the delivery date, the price and the ownership of the code. Adrien:
   * « tu parles du prix dans le contrat, bah oui c'est le concept ». Stating that
   * a fixed-price contract contains the price tells the reader nothing — it
   * spends a card on an axiom. So the rule is now: THIS SECTION ONLY CARRIES WHAT
   * SURPRISES OR REASSURES BEYOND THE OBVIOUS.
   *
   * Every line below is read off the real contracts in
   * ~/code/projects/hq/docs/khufu/contracts/ and nothing else:
   *   - ownership → annexe 1, art. 9.1: the client owns their accounts,
   *     repository and domain FROM DAY ONE; we work through delegated access.
   *   - what is signed is delivered → contrat forfait, art. 1.1 and 1.2: annexe 3
   *     (signed by both parties) is the scope, and we owe an OBLIGATION DE
   *     RÉSULTAT on conformity to it — most development contracts only promise
   *     best efforts, so this one is not an axiom.
   *   - fourteen days of warranty → contrat forfait, art. 7.1 and 7.3: from
   *     acceptance, anything that does not do what annexe 3 says is fixed free.
   *   - delivered with its documentation → contrat forfait, art. 1.3: code on
   *     the client's repository, operations documentation, third-party
   *     components and their licences.
   *   - confidentiality → annexe 1, art. 7.2: during the contract and five years
   *     after.
   *   - you stay free → contrat forfait, art. 7.8.1 and 7.8.2: the end of the
   *     warranty creates no contract and commits the client to nothing; what
   *     follows only exists if they sign it.
   *
   * ⚠️ PASS 6 (2026-09-15) REBUILT THE SIX CARDS — Adrien: « j'aime pas les
   * arguments que tu as mis », then decision cmu36lf6. What went, and why, so
   * nobody puts it back:
   *   - « Si le retard vient de nous — vous résiliez et vous êtes remboursé »
   *     (art. 3.4). Adrien: we do not refund, and « résilier » reads as a
   *     subscription. ⛔ No refund promise, and no « résilier », « reconduction »,
   *     « souscrire » or « abonnement » anywhere in this block.
   *   - « Cinq jours pour vérifier avant d'accepter » (art. 6.2). What the buyer
   *     actually gets after delivery is the fourteen-day warranty of art. 7.1, so
   *     that is the fact shown. ⛔ No five-day acceptance window on the page.
   *   - « Le produit est défini avant de commencer — un ajout est chiffré sous un
   *     jour ». It told the client that asking for something costs extra: the
   *     subtraction rhetoric decision cmu26co1 bans. Replaced by the positive
   *     face of the same contract: what is signed is delivered, as a result.
   *   - « non-sollicitation comprise » on the confidentiality card. That clause
   *     protects US; shown as reassurance it displays a constraint on the client.
   *     It stays in the contract, off the shop window. ⛔ Never show a clause that
   *     binds the client as if it protected them.
   *   - « Rien ne se reconduit tout seul » is kept in substance (art. 7.8.1) but
   *     says the BENEFIT now — « Vous restez libre » — instead of an absence,
   *     which answered a fear the buyer did not have yet.
   * ⛔ NOT ON THE PAGE, deliberately: any volume of « hours of feature
   * adjustment ». Art. 7.2 and 7.3 say the opposite — something more or
   * different is an evolution, billed — and the warranty covers non-conformity
   * only. Until the contract changes, the page says fourteen days of warranty.
   * ⛔ Do not add a line here that is not in those files.
   * ⚠️ And it stays SHORT: cmu0hv4c holds — one line per card, no paragraph.
   *
   * ⚠️ PASS 4 (2026-09-15) FIXED THREE THINGS ADRIEN FOUND IN PRODUCTION, and
   * all three were defects rather than opinions:
   *   1. FOUR CARDS IN A THREE-WIDE GRID. The second row held one card and two
   *      holes, so the section read as unfinished — « il manque 2 cartes, la
   *      section fait vide ». The two above were added, from the contracts, and
   *      six fills two rows exactly. ⛔ Keep the count a multiple of three, or
   *      change the grid; do not leave a ragged row.
   *   2. THE FOURTH CARD HAD NO ICON. The icon table was keyed by POSITION
   *      against a three-entry list, so a fourth item silently rendered an empty
   *      circle. The icons are named in sprintCommitments.tsx, and
   *      `scripts/checkSprintLocales.ts` now fails the recipe if this list and
   *      that one ever fall out of step.
   *   3. EVERY CARD REPEATED « Au contrat » — which is the section's own title,
   *      said once more per card. The tag is deleted.
   */
  commitments: {
    title: Leaf<T>
    items: { title: Leaf<T>; note: Leaf<T> }[]
  }
  /** Khufu's own products. Labels only — see the note on `sprintProducts`. */
  products: {
    title: Leaf<T>
    /**
     * ⛔ ONE BADGE FOR EVERY PRODUCT (khufu HQ decision cmu1u7c9). Adrien,
     * 2026-09-15: « "En production" même pour Hive, tkt ». It qualifies the
     * technical state — built, deployed, running — never the distribution. The
     * `siteOnly` badge this page used to carry is gone.
     */
    liveLabel: Leaf<T>
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
    surfaces: { web: Leaf<T>; app: Leaf<T>; site: Leaf<T>; sdk: Leaf<T>; packages: Leaf<T> }
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
    youLabel: Leaf<T>
    usLabel: Leaf<T>
    /**
     * ⛔ THIS LINE NO LONGER SAYS ANYBODY WRITES THE CODE (decision cmu1u21i).
     * It used to read « Vous parlez au founder qui écrit le code », which was
     * both inaccurate and a solo-founder argument on a $17k page. What replaced
     * it is the half of the claim that is true AND reassuring: one person to
     * talk to, who decides. No « solo », no authorship claim.
     */
    note: Leaf<T>
  }
  /**
   * What is in the box on day 7.
   *
   * ⛔ IT IS NOT AN INVENTORY ANY MORE, and that is the 2026-09-15 change. Adrien:
   * « ça fait liste mais je sais pas si ultra vendeur ». Nine equal cells read as
   * a delivery note — every line weighted the same, nothing to want. So ONE item
   * leads (`lead`, the product actually being live) and the rest support it.
   *
   * ⛔ TWO CORRECTIONS THAT ARE FACTUAL, NOT COSMETIC, and must not be undone:
   *   1. NO BACK-OFFICE IN THE BASE SCOPE. « Données et back-office » was on the
   *      grid and Adrien pulled it: a back-office is not systematic and, depending
   *      on the need, is a project of its own. Promising it here would sell scope
   *      we have not agreed. The honest version is a FAQ answer saying it is
   *      settled on day 0.
   *   2. « à votre adresse » IMPLIED A DOMAIN, therefore a web product. The offer
   *      also sells mobile apps. The lead now covers both — a domain for the web,
   *      a store submission for an app — which is also what the FAQ on store
   *      review already says.
   *
   * ⛔ AND NO ITEM WEARS AN "INCLUDED" CHIP (Adrien, 2026-09-14): « ça implique
   * que les autres le sont pas, c'est dommage ». Badging three of nine turns the
   * other six into an open question, on the one block whose job is to say the box
   * is full.
   */
  day7: {
    title: Leaf<T>
    /** The one thing that sells the block. Rendered large, on its own. */
    lead: { title: Leaf<T>; note: Leaf<T> }
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
   * ⚠️ IT STAYS ON THE PAGE, and that was asked and settled on 2026-09-15: Adrien
   * wondered whether a comparison block belongs on a landing at all. It does —
   * this is where the « why not an agency / a freelancer / a hire » objection gets
   * handled, and the prospect is running it in their head whether or not we write
   * it down. The condition is that it stays COMPACT AND VISUAL, never a wall.
   *
   * Adrien on the paragraph table it replaces: « beaucoup beaucoup de texte et de
   * place, très peu de compréhension visuelle ». ⛔ NOT ONE FIGURE IN HERE: the
   * delay is the chart's job, and it is the only axis we can source. A grid of
   * unsourced numbers reads as measured, which is worse than prose.
   *
   * ⛔ AND NO ROW MAY ARGUE « one person builds it » (decision cmu1u21i). The row
   * that used to answer « Qui construit » with « Le founder » is gone; what
   * replaced it says the thing the buyer actually cares about — whose week it is.
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
  }
  /**
   * Who it is for, and who it is not.
   *
   * ⛔ IT QUALIFIES BY RECOGNITION, NOT BY CONDITIONS — the 2026-09-15 rewrite.
   * Adrien: « tu as bien changé ce qu'il fallait mais pas sûr que ce soit ouf
   * pertinent/vendeur, je te laisse refaire une passe ». The previous lines were
   * criteria a reader had to check themselves against (« Votre périmètre est
   * arbitrable ») — administrative, and nobody nods at an eligibility rule. Each
   * line is now a SITUATION the right prospect recognises as their own in one
   * second: a date staring at them, a launch they can already describe.
   *
   * ⛔ AND THE "NOT FOR YOU" COLUMN CONCEDES NOTHING WE DO NOT OWE. Adrien killed
   * « Vous cherchez le moins cher » (« comparé aux autres possibilités on n'est
   * pas cher ») and « Rien ne peut sortir de la V1 » (« je comprends même pas la
   * phrase moi »). Three lines, each one genuinely disqualifying.
   */
  audience: {
    title: Leaf<T>
    forTitle: Leaf<T>
    forItems: Leaf<T>[]
    notForTitle: Leaf<T>
    notForItems: Leaf<T>[]
  }
  /**
   * ONE question zone on the page, and a DENSE one since 2026-09-15 — Adrien:
   * « ça prend beaucoup de place non ? trop de padding ? ». The tightening is in
   * the component; what belongs here is the rule that no answer grows into a
   * paragraph.
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
  /**
   * The contact modal every CTA opens (khufu HQ note, 2026-09-15).
   *
   * ⚠️ WHY A MODAL AND NOT A SCROLL. Adrien: « les CTA qui t'emmènent juste à la
   * section contact, ça te semble pertinent ? un mec qui voit la page défiler va
   * juste vouloir lire… faudrait pas plutôt un truc style modal qui propose
   * WhatsApp ou form (ou mail) ? ». A button that scrolls asks the visitor to
   * start reading again at a different altitude; a modal answers the click.
   *
   * ⛔ IT IS A BRIEFING, NOT A MENU (2026-09-15, pass 4). The version before this
   * one was a list of options shown at the exact moment intent peaks, which
   * spends the intent on a choice. Everything ABOVE the rule now answers the one
   * question a €15k buyer has — « what am I committing to? »: the week, the
   * thirty minutes, what comes out of them, the hours, and the one fact they
   * cannot discover any other way, that the booking page is in English. That
   * warning is what earns the extra step; without it the modal is a click too
   * many. Everything BELOW the rule is the answer to « not now », and is quiet.
   *
   * ⛔ THREE PATHS, ONE DOMINANT, nothing else:
   *   1. « RÉSERVER UN APPEL DE 30 MIN » — the main path, the most visible thing
   *      in the modal, carrying the week that was clicked. The reasoning is the
   *      part to preserve: « à 15 000 €, la conversion qui compte est une
   *      conversation, pas une adresse e-mail dans une base ; et un rendez-vous à
   *      l'agenda est exactement le registre premium qu'on vend, là où trois
   *      champs anonymes font low-cost. »
   *   2. THE NET, folded under the rule — ONE e-mail field behind a « pas
   *      disponible sur ces créneaux ? » disclosure. ⛔ It is a callback request,
   *      NOT the « nom / prénom / e-mail / votre projet » form that was rejected,
   *      and the difference is the argument: one field, no repeat of a question
   *      the booking page already asks, and the promise runs the other way — we
   *      send slots in their timezone within 24h. It exists because the calendar
   *      mechanically excludes people (10:00–14:00 UTC, never today, 14 days
   *      out), not because more leads are nicer.
   *   3. WhatsApp, tertiary: a link, never a block, and only here — the floating
   *      site-wide bubble is suppressed on this page (see whatsappButton.tsx).
   * ⛔ NOTHING ELSE MAY BE ADDED. « Au-delà, on ne réduit pas le frein, on ajoute
   * de l'hésitation. » A visible mailto row was removed for exactly that reason;
   * the address now appears only when the net's endpoint fails.
   *
   * ⚠️ WHEN THE BOOKING URL IS NOT CONFIGURED, THE NET BECOMES THE MAIN PATH and
   * is rendered as such. The page may never be left without a working CTA, which
   * is the whole reason the booking row is hidden rather than disabled.
   *
   * ⛔ AND NEVER A HOME-MADE CALENDAR (décision d'outillage cmu1uq7l — native
   * Google Workspace booking, never Cal.com or Calendly). Real availability, time
   * zones and cancellations are a product, not a landing-page feature.
   *
   * ⚠️ The brief is never a toll gate: it comes AFTER the contact is recorded.
   */
  contact: {
    title: Leaf<T>
    /** Carries `{date}` — the week the click came from. Never a claim, just a reminder. */
    weekNote: Leaf<T>
    bookLabel: Leaf<T>
    bookNote: Leaf<T>
    /**
     * The one line under the booking button — what the slot is, whose clock it
     * is shown in, and the warning that earns the step.
     *
     * ⚠️ THE BOOKING PAGE IS IN ENGLISH ONLY and the landing says so. Google's
     * appointment schedule has a single description field — there is no way to
     * localise it — so a visitor arriving in one of our ten languages would
     * otherwise hit an English page with no warning. The line is short and it is
     * not an apology.
     *
     * ⛔ IT NO LONGER PUBLISHES OPENING HOURS IN UTC. « 7 j/7, 10 h – 14 h UTC »
     * sat here until Adrien read it in production and called it useless
     * (2026-09-15) — see the note on the copy itself for why he is right, and
     * for the half that had to survive.
     */
    bookingNote: Leaf<T>
    whatsappLabel: Leaf<T>
    close: Leaf<T>
    /** The no-JavaScript route: a plain link to the booking block at the foot of the page. */
    fallback: Leaf<T>
    /**
     * THE NET — one folded e-mail field, in the modal and in the closing block.
     *
     * ⛔ NEVER ADD A FIELD HERE. The moment this copy names a second input it is
     * the form Adrien rejected as « basique et pas premium », and every argument
     * for keeping it stops being true. The name is not asked (the reply asks it),
     * and « where is your project today? » is not asked (the Google booking page
     * already requires it — asking twice teaches a funnel it is not listening).
     *
     * ⚠️ THE PROMISE RUNS FROM US TO THEM, and the copy has to keep it that way:
     * not « laissez vos coordonnées et nous reviendrons vers vous » (they give,
     * they wait) but « je vous envoie des créneaux adaptés à votre fuseau, sous
     * 24 h ». That inversion is the whole difference in register between a
     * callback request and a contact form.
     *
     * ⛔ AND THE 24h IS A PROMISE SOMEONE HAS TO KEEP. Do not lengthen it to be
     * safe and do not shorten it to convert — it is the same commitment the rest
     * of the page makes.
     */
    callback: {
      /** The `<summary>`. A question about THEIR availability, never a field label. */
      link: Leaf<T>
      body: Leaf<T>
      placeholder: Leaf<T>
      submit: Leaf<T>
      sending: Leaf<T>
      done: Leaf<T>
      invalid: Leaf<T>
      /** Precedes the address, and only when the endpoint failed. */
      failed: Leaf<T>
      privacy: Leaf<T>
      /** Accessible name of the single input — never rendered visually. */
      fieldLabel: Leaf<T>
      /** Introduces the address on the no-JavaScript path. */
      mailLabel: Leaf<T>
    }
  }
  /**
   * The foot-of-page booking block — the page's last word, and its no-JavaScript
   * target (`#start`).
   *
   * ⛔ NO FORM OF OURS SITS ON THIS PAGE, and that part of Adrien's instruction
   * stands: « AUCUN formulaire maison sur la landing : le CTA ouvre directement
   * le calendrier. » The booking page already collects first name, last name,
   * e-mail and a required « Where is your project today? » — everything a contact
   * form here would have asked, asked once, on the page that also books the slot.
   *
   * ⚠️ BUT THE PASS THAT READ THAT AS « NO CAPTURE AT ALL » OVER-CORRECTED, and
   * this block is where it was repaired (2026-09-15, pass 4). Deleting every
   * alternative to the call left three things broken at once: the visitor the
   * calendar mechanically excludes (10:00–14:00 UTC is the middle of the night on
   * the US west coast, and a slot is never available today) had no door at all;
   * the ten-locale page pointed every one of them at an English-only scheduler
   * with no second route; and the funnel had NOTHING to compare « appel réservé »
   * against, which made the question unanswerable by anything but opinion.
   *
   * ⛔ WHAT CAME BACK IS ONE FOLDED E-MAIL FIELD, NOT A FORM — read the bounds on
   * `contact.callback` above and in sprintCallback.tsx before touching it. It is
   * folded so the page's first impression is still one button; it asks for one
   * thing; and it promises something in return.
   *
   * ⚠️ AND THIS BLOCK LINKS STRAIGHT TO THE CALENDAR, skipping the modal. A
   * reader who scrolled the whole page has already been briefed by the page
   * itself — the extra step is paid once, by the visitor who clicks mid-read.
   */
  closing: {
    title: Leaf<T>
    body: Leaf<T>
  }
  midCta: {
    products: Leaf<T>
    day7: Leaf<T>
    /**
     * The floating button's label (sprintFloatingCta.tsx). Short on purpose — it
     * sits over the page on a 390px screen. It names the call, like the hero
     * button, because that is what the modal books.
     * Translated in all ten locales, like the modal it opens and the page under it.
     */
    floating: Leaf<T>
  }
  /**
   * ⛔ NO BODY LINE HERE ANY MORE. It read « Le formulaire prend deux minutes. »
   * and Adrien removed it on 2026-09-15: « tu es sûr de ce genre de sentence ? x) ».
   * He is right — it advertises effort at the exact moment the visitor is deciding
   * to spend some, and the form it described no longer exists (it is one field).
   */
  finalCta: {
    title: Leaf<T>
  }
}

export type SprintLanding = Section<Record<Locale, string>>

const content: Section<LocalizedInput> = {
  hero: {
    /* ⚠️ IT NO LONGER STOPS ON « pas une démo » (decision cmu4idzs, 2026-09-19):
       a subtitle never ends on what the product is NOT. The closing clause is the
       one the decision itself validated — « un vrai produit, complet ». */
    subtitle: {
      fr: 'Un SaaS ou une app mobile, en production. Pas une maquette, pas une démo : un vrai produit, complet.',
      en: 'A SaaS or a mobile app, in production. Not a mockup, not a demo: a real, complete product.',
      es: 'Un SaaS o una app móvil, en producción. Ni maqueta ni demo: un producto real y completo.',
      de: 'Ein SaaS oder eine Mobile-App, in Produktion. Kein Mockup, keine Demo: ein echtes, vollständiges Produkt.',
      it: 'Un SaaS o un’app mobile, in produzione. Non un mockup, non una demo: un prodotto vero, completo.',
      pt: 'Um SaaS ou uma app móvel, em produção. Não um mockup, não uma demo: um produto real, completo.',
      nl: 'Een SaaS of een mobiele app, in productie. Geen mockup, geen demo: een echt, compleet product.',
      ar: 'منتج SaaS أو تطبيق للجوال، في الإنتاج. لا تصميم أولي ولا عرض تجريبي: منتج حقيقي ومتكامل.',
      pl: 'SaaS albo aplikacja mobilna, na produkcji. Nie makieta, nie demo: prawdziwy, kompletny produkt.',
      tr: 'Bir SaaS ya da mobil uygulama, canlı ortamda. Bir maket ya da demo değil: gerçek, eksiksiz bir ürün.',
    },
    ctaLabel: {
      fr: 'Réserver mon appel de 30 min',
      en: 'Book my 30-min call',
      es: 'Reservar mi llamada de 30 min',
      de: 'Mein 30-Min.-Gespräch buchen',
      it: 'Prenota la mia call di 30 min',
      pt: 'Reservar a minha chamada de 30 min',
      nl: 'Boek mijn gesprek van 30 min',
      ar: 'احجز مكالمتي لمدة 30 دقيقة',
      pl: 'Umów rozmowę (30 min)',
      tr: '30 dakikalık görüşmemi ayırt',
    },
    ctaNote: {
      fr: 'Périmètre et date confirmés sous 24 h.',
      en: 'Scope and date confirmed within 24h.',
      es: 'Alcance y fecha confirmados en 24 h.',
      de: 'Umfang und Termin innerhalb von 24 h bestätigt.',
      it: 'Ambito e data confermati entro 24 h.',
      pt: 'Âmbito e data confirmados em 24 h.',
      nl: 'Scope en datum bevestigd binnen 24 u.',
      ar: 'تأكيد النطاق والتاريخ خلال 24 ساعة.',
      pl: 'Zakres i termin potwierdzone w ciągu 24 h.',
      tr: 'Kapsam ve tarih 24 saat içinde teyit edilir.',
    },
    slotOpen: {
      fr: 'Disponible',
      en: 'Open',
      es: 'Disponible',
      de: 'Frei',
      it: 'Disponibile',
      pt: 'Disponível',
      nl: 'Beschikbaar',
      ar: 'متاح',
      pl: 'Wolny',
      tr: 'Müsait',
    },
    slotHeld: {
      fr: 'Complet',
      en: 'Full',
      es: 'Completo',
      de: 'Belegt',
      it: 'Al completo',
      pt: 'Esgotado',
      nl: 'Volgeboekt',
      ar: 'محجوز',
      pl: 'Zajęty',
      tr: 'Dolu',
    },
    /*
     * ⚠️ IT DESCRIBES THE DIAGRAM, NOT A PRODUCT (2026-09-15, pass 5). It used to
     * be the alt text of the Traqio capture the sequence ended on; that capture
     * is gone, so this is now the ONLY accessible description of the whole first
     * screen's visual. A screen reader that gets nothing here gets nothing at all
     * from the hero. ⛔ Never name a product in it again — the sequence is an
     * illustration and must not sign itself with one.
     */
    shotAlt: {
      fr: 'Un produit complet qui s’assemble puis passe en production : les écrans, l’app, le site, les comptes, les données, les paiements, les e-mails, les services connectés et l’hébergement.',
      en: 'A complete product assembling itself, then going into production: the screens, the app, the site, accounts, data, payments, e-mails, connected services and hosting.',
      es: 'Un producto completo que se ensambla y pasa a producción: las pantallas, la app, el sitio, las cuentas, los datos, los pagos, los correos, los servicios conectados y el alojamiento.',
      de: 'Ein vollständiges Produkt, das sich zusammensetzt und dann in Produktion geht: die Screens, die App, die Website, Konten, Daten, Zahlungen, E-Mails, angebundene Dienste und Hosting.',
      it: 'Un prodotto completo che si assembla e poi va in produzione: le schermate, l’app, il sito, gli account, i dati, i pagamenti, le e-mail, i servizi collegati e l’hosting.',
      pt: 'Um produto completo que se monta e depois entra em produção: os ecrãs, a app, o site, as contas, os dados, os pagamentos, os e-mails, os serviços ligados e o alojamento.',
      nl: 'Een compleet product dat in elkaar valt en daarna in productie gaat: de schermen, de app, de website, accounts, data, betalingen, e-mails, gekoppelde diensten en hosting.',
      ar: 'منتج متكامل يُبنى ثم يُطلق في الإنتاج: الشاشات، والتطبيق، والموقع، والحسابات، والبيانات، والمدفوعات، والرسائل الإلكترونية، والخدمات المتصلة، والاستضافة.',
      pl: 'Kompletny produkt, który składa się w całość i trafia na produkcję: ekrany, aplikacja, strona, konta, dane, płatności, e-maile, zintegrowane usługi i hosting.',
      tr: 'Kendini bir araya getirip canlıya çıkan eksiksiz bir ürün: ekranlar, uygulama, site, hesaplar, veriler, ödemeler, e-postalar, bağlı servisler ve barındırma.',
    },
    /*
     * ⚠️ THE TEN ARE WRITTEN OUT rather than left to the French fallback: this is
     * the one string on the page a visitor reads as belonging to THEM, so a
     * German page showing « votre-projet » would hand it back to us. Each is the
     * same idea — « your project » — in the locale's own words, Latin script and
     * `.com` throughout so it stays a credible address everywhere (see the type).
     */
    shotUrl: {
      fr: 'https://www.votre-projet.com',
      en: 'https://www.your-project.com',
      es: 'https://www.tu-proyecto.com',
      de: 'https://www.ihr-projekt.com',
      it: 'https://www.tuo-progetto.com',
      pt: 'https://www.seu-projeto.com',
      nl: 'https://www.jouw-project.com',
      ar: 'https://www.your-project.com',
      pl: 'https://www.twoj-projekt.com',
      tr: 'https://www.projeniz.com',
    },
  },

  system: {
    title: {
      fr: 'D’où vient la vitesse.',
      en: 'Where the speed comes from.',
      es: 'De dónde viene la velocidad.',
      de: 'Woher die Geschwindigkeit kommt.',
      it: 'Da dove viene la velocità.',
      pt: 'De onde vem a velocidade.',
      nl: 'Waar de snelheid vandaan komt.',
      ar: 'من أين تأتي السرعة.',
      pl: 'Skąd bierze się szybkość.',
      tr: 'Hız nereden geliyor.',
    },
    subtitle: {
      fr: 'Le même travail, conduit en parallèle au lieu d’être fait à la suite.',
      en: 'The same work, run in parallel instead of one thing after another.',
      es: 'El mismo trabajo, en paralelo en vez de uno detrás de otro.',
      de: 'Dieselbe Arbeit, parallel erledigt statt nacheinander.',
      it: 'Lo stesso lavoro, portato avanti in parallelo invece che un pezzo dopo l’altro.',
      pt: 'O mesmo trabalho, conduzido em paralelo em vez de uma coisa a seguir à outra.',
      nl: 'Hetzelfde werk, parallel uitgevoerd in plaats van na elkaar.',
      ar: 'العمل نفسه، يُنجَز بالتوازي بدلًا من أن يُنجَز خطوةً بعد خطوة.',
      pl: 'Ta sama praca, prowadzona równolegle zamiast krok po kroku.',
      tr: 'Aynı iş, art arda yapılmak yerine paralel yürütülüyor.',
    },
    steps: [
      {
        title: {
          fr: 'Le projet est découpé',
          en: 'The project is cut up',
          es: 'El proyecto se divide',
          de: 'Das Projekt wird aufgeteilt',
          it: 'Il progetto viene suddiviso',
          pt: 'O projeto é dividido',
          nl: 'Het project wordt opgedeeld',
          ar: 'تقسيم المشروع',
          pl: 'Projekt zostaje podzielony',
          tr: 'Proje parçalara bölünür',
        },
        note: {
          fr: 'en chantiers qui n’ont pas besoin de s’attendre',
          en: 'into pieces that don’t have to wait for each other',
          es: 'en partes que no tienen que esperarse entre sí',
          de: 'in Arbeitspakete, die nicht aufeinander warten müssen',
          it: 'in cantieri che non devono aspettarsi a vicenda',
          pt: 'em frentes que não precisam de esperar umas pelas outras',
          nl: 'in onderdelen die niet op elkaar hoeven te wachten',
          ar: 'إلى أجزاء يتقدّم كلٌّ منها باستقلال عن الآخر',
          pl: 'na części, które nie muszą na siebie czekać',
          tr: 'birbirini beklemesi gerekmeyen iş kalemlerine',
        },
      },
      {
        title: {
          fr: 'Plusieurs agents avancent en même temps',
          en: 'Several agents move at once',
          es: 'Varios agentes avanzan a la vez',
          de: 'Mehrere Agenten arbeiten gleichzeitig',
          it: 'Più agenti avanzano insieme',
          pt: 'Vários agentes avançam ao mesmo tempo',
          nl: 'Meerdere agents werken tegelijk',
          ar: 'عدة وكلاء يعملون في آنٍ واحد',
          pl: 'Kilku agentów pracuje jednocześnie',
          tr: 'Birden fazla ajan aynı anda ilerler',
        },
        note: {
          fr: 'les écrans, les données, le site, la mise en ligne',
          en: 'the screens, the data, the site, going live',
          es: 'las pantallas, los datos, el sitio, la puesta en línea',
          de: 'die Screens, die Daten, die Website, der Go-live',
          it: 'le schermate, i dati, il sito, la messa online',
          pt: 'os ecrãs, os dados, o site, a entrada em funcionamento',
          nl: 'de schermen, de data, de website, de livegang',
          ar: 'الشاشات، والبيانات، والموقع، والإطلاق',
          pl: 'ekrany, dane, strona, uruchomienie',
          tr: 'ekranlar, veriler, site, yayına alma',
        },
      },
      {
        title: {
          fr: 'Tout est vérifié automatiquement',
          en: 'Everything is checked automatically',
          es: 'Todo se verifica automáticamente',
          de: 'Alles wird automatisch geprüft',
          it: 'Tutto viene verificato in automatico',
          pt: 'Tudo é verificado automaticamente',
          nl: 'Alles wordt automatisch gecontroleerd',
          ar: 'كل شيء يُفحص تلقائيًا',
          pl: 'Wszystko sprawdzane automatycznie',
          tr: 'Her şey otomatik olarak doğrulanır',
        },
        note: {
          fr: 'à chaque étape, pas à la fin',
          en: 'at every step, not at the end',
          es: 'en cada paso, no al final',
          de: 'bei jedem Schritt, nicht erst am Ende',
          it: 'a ogni passaggio, non alla fine',
          pt: 'a cada etapa, não no fim',
          nl: 'bij elke stap, niet pas aan het eind',
          ar: 'في كل مرحلة، لا في النهاية',
          pl: 'na każdym etapie, a nie na końcu',
          tr: 'sonunda değil, her adımda',
        },
      },
      {
        title: {
          fr: 'Un humain tranche',
          en: 'A human decides',
          es: 'Una persona decide',
          de: 'Ein Mensch entscheidet',
          it: 'Una persona decide',
          pt: 'Uma pessoa decide',
          nl: 'Een mens beslist',
          ar: 'إنسان يحسم القرار',
          pl: 'Decyduje człowiek',
          tr: 'Son kararı bir insan verir',
        },
        note: {
          fr: 'rien ne part en ligne sans validation',
          en: 'nothing goes live without sign-off',
          es: 'nada se publica sin validación',
          de: 'nichts geht ohne Freigabe online',
          it: 'niente va online senza approvazione',
          pt: 'nada vai para o ar sem validação',
          nl: 'niets gaat live zonder akkoord',
          ar: 'كل إطلاق يمرّ أولًا بموافقة بشرية',
          pl: 'nic nie trafia online bez akceptacji',
          tr: 'onay olmadan hiçbir şey yayına çıkmaz',
        },
      },
    ],
    /*
     * ⛔ IT NO LONGER READS « C’est ce qui tient les sept jours. Pas des nuits
     * blanches. » (2026-09-15, pass 5). Adrien doubted the line; he is right, and
     * the fault is decision cmu1u21i's again. Denying all-nighters ARGUES ABOUT A
     * PERSON'S ENDURANCE — it invites the reader to picture somebody at a desk at
     * 3am and then asks them to believe he is not there. We sell a system, so the
     * closer has to be evidence the system exists, not a promise about a body.
     *
     * ⚠️ THE FIGURE IS DERIVED, NEVER TYPED. `{count}` is replaced at render with
     * `sprintProducts.length` — the very cards the next section shows. So the
     * number cannot drift from what the page displays two screens later, and a
     * product added to or removed from the wall corrects this sentence on its own.
     * `scripts/checkSprintLocales.ts` fails the recipe if a locale loses the token.
     * ⛔ Do not spell the number out in words in any locale: a literal is exactly
     * the figure that goes stale and turns into a false claim.
     *
     * ⛔ AND IT CLAIMS NO DURATION, which is the line the products section draws
     * and this sentence sits two screens above it. It says the METHOD is the one
     * that put those products in production — true, and checkable by scrolling.
     * It does NOT say they were built in a week, and it must never be edited into
     * saying so.
     */
    /*
     * ⛔ AND IT NO LONGER SAYS WHOSE THE PRODUCTS ARE (2026-09-15). It read « les
     * {count} produits Khufu ». Adrien: saying the products are ours tells the
     * reader, without meaning to, that none of them is a client's — and that
     * ambiguity is ours to keep. The sentence is still exactly true: the same
     * process put {count} products into production. It claims no client either.
     * ⛔ Do not put the owner back (« nos », « Khufu », « maison »), and do not
     * swing the other way into implying clients: we remove a precision, we do not
     * add a claim. No definite article for the same reason — « les {count}
     * produits » points at a known set, and the only known set is ours.
     */
    note: {
      fr: 'Un process rodé : c’est celui qui a mis {count} produits en production.',
      en: 'A proven process: it is the one that has put {count} products into production.',
      es: 'Un proceso rodado: es el que ha puesto {count} productos en producción.',
      de: 'Ein eingespielter Prozess: derselbe, der {count} Produkte in Produktion gebracht hat.',
      it: 'Un processo collaudato: è quello che ha portato {count} prodotti in produzione.',
      pt: 'Um processo comprovado: é o que colocou {count} produtos em produção.',
      nl: 'Een beproefd proces: hetzelfde dat {count} producten in productie heeft gebracht.',
      ar: 'منهجية مجرَّبة: هي نفسها التي أطلقت {count} منتجات في الإنتاج.',
      pl: 'Sprawdzony proces: to on wprowadził produkty na produkcję — do tej pory {count}.',
      tr: 'Oturmuş bir süreç: {count} ürünü canlıya taşıyan süreç bu.',
    },
  },

  commitments: {
    title: {
      fr: 'Ce qui est écrit au contrat.',
      en: 'What the contract says.',
      es: 'Lo que dice el contrato.',
      de: 'Was im Vertrag steht.',
      it: 'Cosa c’è scritto nel contratto.',
      pt: 'O que está escrito no contrato.',
      nl: 'Wat er in het contract staat.',
      ar: 'ما ينصّ عليه العقد.',
      pl: 'Co jest zapisane w umowie.',
      tr: 'Sözleşmede yazanlar.',
    },
    items: [
      /* Annexe 1, art. 9.1. */
      {
        title: {
          fr: 'Tout est chez vous dès le premier jour',
          en: 'Everything is yours from day one',
          es: 'Todo es tuyo desde el primer día',
          de: 'Alles gehört dir, ab dem ersten Tag',
          it: 'Tutto è tuo dal primo giorno',
          pt: 'Tudo é seu desde o primeiro dia',
          nl: 'Alles is van jou, vanaf dag één',
          ar: 'كل شيء ملكك من اليوم الأول',
          pl: 'Wszystko należy do Ciebie od pierwszego dnia',
          tr: 'İlk günden her şey sizin',
        },
        note: {
          fr: 'vos comptes, votre domaine, votre code — on y travaille avec des accès que vous donnez',
          en: 'your accounts, your domain, your code — we work through access you grant',
          es: 'tus cuentas, tu dominio, tu código: trabajamos con accesos que tú concedes',
          de: 'deine Konten, deine Domain, dein Code — wir arbeiten mit Zugängen, die du uns gibst',
          it: 'i tuoi account, il tuo dominio, il tuo codice — lavoriamo con gli accessi che ci dai tu',
          pt: 'as suas contas, o seu domínio, o seu código — trabalhamos com os acessos que nos concede',
          nl: 'jouw accounts, jouw domein, jouw code — we werken met de toegang die jij geeft',
          ar: 'حساباتك، ونطاقك، وشيفرتك — نعمل عليها بصلاحيات تمنحها أنت',
          pl: 'Twoje konta, Twoja domena, Twój kod — pracujemy na dostępach, które nam przyznajesz',
          tr: 'hesaplarınız, alan adınız, kodunuz — sizin verdiğiniz erişimlerle çalışırız',
        },
      },
      /* Contrat forfait, art. 1.1 and 1.2 — obligation de résultat on annexe 3. */
      {
        title: {
          fr: 'Ce qui est signé est livré',
          en: 'What is signed is delivered',
          es: 'Lo que se firma se entrega',
          de: 'Was unterschrieben ist, wird geliefert',
          it: 'Ciò che si firma viene consegnato',
          pt: 'O que é assinado é entregue',
          nl: 'Wat getekend is, wordt geleverd',
          ar: 'ما يُوقَّع يُسلَّم',
          pl: 'Co podpisane, to dostarczone',
          tr: 'İmzalanan teslim edilir',
        },
        note: {
          fr: 'une obligation de résultat : le produit fait tout ce que décrit la spécification signée ensemble',
          en: 'an obligation of result: the product does everything the specification we signed together describes',
          es: 'una obligación de resultado: el producto hace todo lo que describe la especificación firmada juntos',
          de: 'eine Erfolgspflicht: Das Produkt kann alles, was die gemeinsam unterschriebene Spezifikation beschreibt',
          it: 'un’obbligazione di risultato: il prodotto fa tutto ciò che descrive la specifica firmata insieme',
          pt: 'uma obrigação de resultado: o produto faz tudo o que descreve a especificação assinada em conjunto',
          nl: 'een resultaatsverbintenis: het product doet alles wat de samen getekende specificatie beschrijft',
          ar: 'التزام بتحقيق النتيجة: المنتج ينفّذ كل ما تصفه المواصفات التي وقّعناها معًا',
          pl: 'zobowiązanie rezultatu: produkt robi wszystko, co opisuje wspólnie podpisana specyfikacja',
          tr: 'sonuç yükümlülüğü: ürün, birlikte imzaladığımız spesifikasyonda yazan her şeyi yapar',
        },
      },
      /* Contrat forfait, art. 7.1 and 7.3. */
      {
        title: {
          fr: 'Quatorze jours de garantie',
          en: 'Fourteen days of warranty',
          es: 'Catorce días de garantía',
          de: 'Vierzehn Tage Gewährleistung',
          it: 'Quattordici giorni di garanzia',
          pt: 'Catorze dias de garantia',
          nl: 'Veertien dagen garantie',
          ar: 'أربعة عشر يومًا من الضمان',
          pl: 'Czternaście dni gwarancji',
          tr: 'On dört gün garanti',
        },
        note: {
          fr: 'après votre validation, tout écart avec la spécification est corrigé sans frais',
          en: 'once you sign off, anything that departs from the specification is fixed at no cost',
          es: 'tras tu validación, cualquier desviación de la especificación se corrige sin coste',
          de: 'nach deiner Abnahme wird jede Abweichung von der Spezifikation kostenlos behoben',
          it: 'dopo la tua approvazione, ogni scostamento dalla specifica viene corretto senza costi',
          pt: 'após a sua validação, qualquer desvio face à especificação é corrigido sem custos',
          nl: 'na jouw goedkeuring wordt elke afwijking van de specificatie kosteloos verholpen',
          ar: 'بعد موافقتك، يُصحَّح أي اختلاف عن المواصفات دون أي تكلفة',
          pl: 'po Twoim odbiorze każde odstępstwo od specyfikacji poprawiamy bezpłatnie',
          tr: 'onayınızdan sonra spesifikasyondan her sapma ücretsiz düzeltilir',
        },
      },
      /* Contrat forfait, art. 1.3. */
      {
        title: {
          fr: 'Livré avec sa documentation',
          en: 'Delivered with its documentation',
          es: 'Entregado con su documentación',
          de: 'Geliefert mit Dokumentation',
          it: 'Consegnato con la sua documentazione',
          pt: 'Entregue com a sua documentação',
          nl: 'Geleverd met documentatie',
          ar: 'يُسلَّم مع توثيقه',
          pl: 'Dostarczony z dokumentacją',
          tr: 'Dokümantasyonuyla teslim',
        },
        note: {
          fr: 'le code sur votre dépôt, la documentation d’exploitation, les composants tiers et leurs licences',
          en: 'the code on your repository, the operations documentation, third-party components and their licences',
          es: 'el código en tu repositorio, la documentación de operación, los componentes de terceros y sus licencias',
          de: 'der Code in deinem Repository, die Betriebsdokumentation, Drittkomponenten und ihre Lizenzen',
          it: 'il codice nel tuo archivio, la documentazione operativa, i componenti di terze parti e le loro licenze',
          pt: 'o código no seu repositório, a documentação de operação, os componentes de terceiros e as respetivas licenças',
          nl: 'de code in jouw repository, de beheerdocumentatie, externe componenten en hun licenties',
          ar: 'الشيفرة في مستودعك، ووثائق التشغيل، والمكوّنات الخارجية وتراخيصها',
          pl: 'kod w Twoim repozytorium, dokumentacja eksploatacyjna, komponenty zewnętrzne i ich licencje',
          tr: 'kod sizin deponuzda, işletim dokümantasyonu, üçüncü taraf bileşenler ve lisansları',
        },
      },
      /* Annexe 1, art. 7.2 — and only 7.2: see the ledger on the type. */
      {
        title: {
          fr: 'Votre projet reste confidentiel',
          en: 'Your project stays confidential',
          es: 'Tu proyecto sigue siendo confidencial',
          de: 'Dein Projekt bleibt vertraulich',
          it: 'Il tuo progetto resta riservato',
          pt: 'O seu projeto permanece confidencial',
          nl: 'Je project blijft vertrouwelijk',
          ar: 'مشروعك يبقى سريًّا',
          pl: 'Twój projekt pozostaje poufny',
          tr: 'Projeniz gizli kalır',
        },
        note: {
          fr: 'pendant le contrat, et cinq ans après sa fin',
          en: 'for the length of the contract, and five years after it ends',
          es: 'durante el contrato, y cinco años después de su fin',
          de: 'während der Vertragslaufzeit und fünf Jahre darüber hinaus',
          it: 'per tutta la durata del contratto, e per cinque anni dopo la sua fine',
          pt: 'durante o contrato, e cinco anos após o seu fim',
          nl: 'tijdens het contract, en vijf jaar na afloop',
          ar: 'طوال مدة العقد، ولخمس سنوات بعد انتهائه',
          pl: 'przez cały czas trwania umowy i pięć lat po jej zakończeniu',
          tr: 'sözleşme boyunca ve bitiminden sonra beş yıl',
        },
      },
      /* Contrat forfait, art. 7.8.1 and 7.8.2. */
      {
        title: {
          fr: 'Vous restez libre',
          en: 'You stay free',
          es: 'Sigues siendo libre',
          de: 'Du bleibst frei',
          it: 'Resti libero',
          pt: 'Continua livre',
          nl: 'Je blijft vrij',
          ar: 'تبقى حرًّا في قرارك',
          pl: 'Zachowujesz swobodę',
          tr: 'Özgürlüğünüz sizde kalır',
        },
        note: {
          fr: 'après la garantie, rien ne vous engage : la suite avec nous n’existe que si vous la signez',
          en: 'after the warranty nothing binds you: anything further with us exists only if you sign it',
          es: 'tras la garantía nada te compromete: lo que siga con nosotros solo existe si lo firmas',
          de: 'nach der Gewährleistung bindet dich nichts: Eine weitere Zusammenarbeit gibt es nur, wenn du sie unterschreibst',
          it: 'dopo la garanzia nulla ti vincola: il seguito con noi esiste solo se lo firmi',
          pt: 'após a garantia, nada o vincula: a continuação connosco só existe se a assinar',
          nl: 'na de garantie zit je nergens aan vast: een vervolg met ons bestaat alleen als jij het tekent',
          ar: 'بعد الضمان لا شيء يُلزمك: أي تعاون لاحق معنا يكون فقط إذا وقّعته',
          pl: 'po okresie gwarancji nic Cię nie wiąże: dalsza współpraca istnieje tylko wtedy, gdy ją podpiszesz',
          tr: 'garantiden sonra sizi hiçbir şey bağlamaz: bizimle devam, yalnızca siz imzalarsanız var olur',
        },
      },
    ],
  },

  products: {
    title: {
      fr: 'Quelques exemples.',
      en: 'A few examples.',
      es: 'Algunos ejemplos.',
      de: 'Einige Beispiele.',
      it: 'Qualche esempio.',
      pt: 'Alguns exemplos.',
      nl: 'Enkele voorbeelden.',
      ar: 'بعض الأمثلة.',
      pl: 'Kilka przykładów.',
      tr: 'Birkaç örnek.',
    },
    liveLabel: {
      fr: 'En production',
      en: 'In production',
      es: 'En producción',
      de: 'In Produktion',
      it: 'In produzione',
      pt: 'Em produção',
      nl: 'In productie',
      ar: 'في الإنتاج',
      pl: 'Na produkcji',
      tr: 'Canlıda',
    },
    surfaces: {
      web: {
        fr: 'Plateforme web',
        en: 'Web platform',
        es: 'Plataforma web',
        de: 'Web-Plattform',
        it: 'Piattaforma web',
        pt: 'Plataforma web',
        nl: 'Webplatform',
        ar: 'منصة ويب',
        pl: 'Platforma webowa',
        tr: 'Web platformu',
      },
      app: {
        fr: 'App mobile',
        en: 'Mobile app',
        es: 'App móvil',
        de: 'Mobile-App',
        it: 'App mobile',
        pt: 'App móvel',
        nl: 'Mobiele app',
        ar: 'تطبيق جوال',
        pl: 'Aplikacja mobilna',
        tr: 'Mobil uygulama',
      },
      site: {
        fr: 'Site vitrine',
        en: 'Showcase site',
        es: 'Sitio escaparate',
        de: 'Website',
        it: 'Sito vetrina',
        pt: 'Site de apresentação',
        nl: 'Website',
        ar: 'موقع تعريفي',
        pl: 'Strona produktu',
        tr: 'Tanıtım sitesi',
      },
      sdk: {
        fr: 'SDK',
        en: 'SDKs',
        es: 'SDK',
        de: 'SDK',
        it: 'SDK',
        pt: 'SDK',
        nl: 'SDK',
        ar: 'SDK',
        pl: 'SDK',
        tr: 'SDK',
      },
      packages: {
        fr: 'Packages',
        en: 'Packages',
        es: 'Paquetes',
        de: 'Packages',
        it: 'Pacchetti',
        pt: 'Pacotes',
        nl: 'Packages',
        ar: 'حِزم',
        pl: 'Pakiety',
        tr: 'Paketler',
      },
    },
    taglines: {
      traqio: {
        fr: 'L’attribution d’installs et le ROAS, sans boîte noire.',
        en: 'Install attribution and ROAS, without the black box.',
        es: 'Atribución de instalaciones y ROAS, sin caja negra.',
        de: 'Install-Attribution und ROAS, ohne Blackbox.',
        it: 'Attribuzione delle installazioni e ROAS, senza scatola nera.',
        pt: 'Atribuição de instalações e ROAS, sem caixa negra.',
        nl: 'Install-attributie en ROAS, zonder black box.',
        ar: 'إسناد التثبيتات وROAS، دون صندوق أسود.',
        pl: 'Atrybucja instalacji i ROAS, bez czarnej skrzynki.',
        tr: 'Kara kutu olmadan, yükleme atfı ve ROAS.',
      },
      hive: {
        fr: 'Le jeu de cartes à collectionner qui se joue sur une ruche.',
        en: 'The collectible card game played on a hive.',
        es: 'El juego de cartas coleccionables que se juega sobre una colmena.',
        de: 'Das Sammelkartenspiel, das auf einem Bienenstock gespielt wird.',
        it: 'Il gioco di carte collezionabili che si gioca su un alveare.',
        pt: 'O jogo de cartas colecionáveis que se joga numa colmeia.',
        nl: 'Het verzamelkaartspel dat op een bijenkorf wordt gespeeld.',
        ar: 'لعبة البطاقات القابلة للجمع التي تُلعب على خلية نحل.',
        pl: 'Kolekcjonerska gra karciana rozgrywana na ulu.',
        tr: 'Bir kovan üzerinde oynanan koleksiyon kart oyunu.',
      },
    },
    shotAlt: {
      fr: 'Le produit {name}, en ligne.',
      en: 'The {name} product, live.',
      es: 'El producto {name}, en línea.',
      de: 'Das Produkt {name}, online.',
      it: 'Il prodotto {name}, online.',
      pt: 'O produto {name}, online.',
      nl: 'Het product {name}, online.',
      ar: 'منتج {name}، على الإنترنت.',
      pl: 'Produkt {name}, online.',
      tr: '{name} ürünü, yayında.',
    },
    appShotAlt: {
      fr: 'L’application mobile {name}.',
      en: 'The {name} mobile app.',
      es: 'La aplicación móvil {name}.',
      de: 'Die Mobile-App {name}.',
      it: 'L’app mobile {name}.',
      pt: 'A app móvel {name}.',
      nl: 'De mobiele app {name}.',
      ar: 'تطبيق الجوال {name}.',
      pl: 'Aplikacja mobilna {name}.',
      tr: '{name} mobil uygulaması.',
    },
  },

  /*
   * ⚠️ /ar DAY RANGES ARE WRAPPED IN A BIDI ISOLATE (U+2066 … U+2069). Two
   * surfaces read them: the desktop schema prints the label as-is, and the
   * mobile tile keeps only its digits and dash (sprintTimeline.tsx). Written in
   * words (« 2 و3 ») the tile showed « 23 »; written bare (« 2–3 ») the RTL
   * paragraph flips it to « 3–2 ». The isolate keeps the range LTR inside the
   * Arabic line and leaves the tile its « 2–3 ».
   */
  timeline: {
    title: {
      fr: 'La semaine.',
      en: 'The week.',
      es: 'La semana.',
      de: 'Die Woche.',
      it: 'La settimana.',
      pt: 'A semana.',
      nl: 'De week.',
      ar: 'الأسبوع.',
      pl: 'Tydzień.',
      tr: 'Hafta.',
    },
    subtitle: {
      fr: 'Du lundi au dimanche. Le même déroulé à chaque sprint.',
      en: 'Monday to Sunday. The same run on every sprint.',
      es: 'De lunes a domingo. El mismo recorrido en cada sprint.',
      de: 'Von Montag bis Sonntag. Bei jedem Sprint derselbe Ablauf.',
      it: 'Dal lunedì alla domenica. Lo stesso svolgimento a ogni sprint.',
      pt: 'De segunda a domingo. O mesmo processo em cada sprint.',
      nl: 'Van maandag tot zondag. Bij elke sprint hetzelfde verloop.',
      ar: 'من الاثنين إلى الأحد. المسار نفسه في كل سبرينت.',
      pl: 'Od poniedziałku do niedzieli. Ten sam przebieg w każdym sprincie.',
      tr: 'Pazartesiden pazara. Her sprintte aynı akış.',
    },
    dayZero: {
      day: {
        fr: 'Jour 0',
        en: 'Day 0',
        es: 'Día 0',
        de: 'Tag 0',
        it: 'Giorno 0',
        pt: 'Dia 0',
        nl: 'Dag 0',
        ar: 'اليوم 0',
        pl: 'Dzień 0',
        tr: '0. gün',
      },
      weekday: {
        fr: 'avant le lundi',
        en: 'before the Monday',
        es: 'antes del lunes',
        de: 'vor dem Montag',
        it: 'prima del lunedì',
        pt: 'antes da segunda-feira',
        nl: 'vóór de maandag',
        ar: 'قبل يوم الاثنين',
        pl: 'przed poniedziałkiem',
        tr: 'pazartesiden önce',
      },
      title: {
        fr: 'Périmètre écrit et signé',
        en: 'Scope written and signed',
        es: 'Alcance escrito y firmado',
        de: 'Umfang schriftlich festgelegt und unterschrieben',
        it: 'Ambito scritto e firmato',
        pt: 'Âmbito escrito e assinado',
        nl: 'Scope op papier en getekend',
        ar: 'نطاق مكتوب وموقَّع',
        pl: 'Zakres spisany i podpisany',
        tr: 'Kapsam yazılı ve imzalı',
      },
      body: {
        fr: 'Cahier des charges, échanges sur le projet, devis signé.',
        en: 'Your brief, the conversations about the project, the signed quote.',
        es: 'Tu pliego de condiciones, los intercambios sobre el proyecto, el presupuesto firmado.',
        de: 'Lastenheft, Gespräche zum Projekt, unterschriebenes Angebot.',
        it: 'Il tuo capitolato, gli scambi sul progetto, il preventivo firmato.',
        pt: 'Caderno de encargos, conversas sobre o projeto, orçamento assinado.',
        nl: 'Je briefing, de gesprekken over het project, de getekende offerte.',
        ar: 'دفتر الشروط، والنقاشات حول المشروع، وعرض السعر الموقَّع.',
        pl: 'Twój brief, rozmowy o projekcie, podpisana wycena.',
        tr: 'İhtiyaç dokümanınız, proje üzerine görüşmeler, imzalı teklif.',
      },
    },
    days: [
      {
        day: {
          fr: 'Jour 1',
          en: 'Day 1',
          es: 'Día 1',
          de: 'Tag 1',
          it: 'Giorno 1',
          pt: 'Dia 1',
          nl: 'Dag 1',
          ar: 'اليوم 1',
          pl: 'Dzień 1',
          tr: '1. gün',
        },
        weekday: {
          fr: 'lundi matin',
          en: 'Monday morning',
          es: 'lunes por la mañana',
          de: 'Montagmorgen',
          it: 'lunedì mattina',
          pt: 'segunda de manhã',
          nl: 'maandagochtend',
          ar: 'صباح الاثنين',
          pl: 'poniedziałek rano',
          tr: 'pazartesi sabahı',
        },
        title: {
          fr: 'Fondations',
          en: 'Foundations',
          es: 'Cimientos',
          de: 'Fundament',
          it: 'Fondamenta',
          pt: 'Fundações',
          nl: 'Fundamenten',
          ar: 'الأساسات',
          pl: 'Fundamenty',
          tr: 'Temeller',
        },
        body: {
          fr: 'Le soir, le produit existe et tourne.',
          en: 'By the evening the product exists and runs.',
          es: 'Por la noche el producto existe y funciona.',
          de: 'Am Abend existiert das Produkt und läuft.',
          it: 'In serata il prodotto esiste e funziona.',
          pt: 'À noite, o produto existe e funciona.',
          nl: '\'s Avonds bestaat het product en draait het.',
          ar: 'في المساء، المنتج موجود ويعمل.',
          pl: 'Wieczorem produkt istnieje i działa.',
          tr: 'Akşam olduğunda ürün var ve çalışıyor.',
        },
      },
      {
        day: {
          fr: 'Jours 2–3',
          en: 'Days 2–3',
          es: 'Días 2–3',
          de: 'Tage 2–3',
          it: 'Giorni 2–3',
          pt: 'Dias 2–3',
          nl: 'Dagen 2–3',
          ar: 'اليومان \u20662–3\u2069',
          pl: 'Dni 2–3',
          tr: '2.–3. gün',
        },
        weekday: {
          fr: 'mardi, mercredi',
          en: 'Tuesday, Wednesday',
          es: 'martes, miércoles',
          de: 'Dienstag, Mittwoch',
          it: 'martedì, mercoledì',
          pt: 'terça, quarta',
          nl: 'dinsdag, woensdag',
          ar: 'الثلاثاء، الأربعاء',
          pl: 'wtorek, środa',
          tr: 'salı, çarşamba',
        },
        title: {
          fr: 'Le cœur du produit',
          en: 'The core of the product',
          es: 'El corazón del producto',
          de: 'Der Kern des Produkts',
          it: 'Il cuore del prodotto',
          pt: 'O núcleo do produto',
          nl: 'De kern van het product',
          ar: 'قلب المنتج',
          pl: 'Serce produktu',
          tr: 'Ürünün kalbi',
        },
        body: {
          fr: 'Les parcours clés, de bout en bout.',
          en: 'The key flows, end to end.',
          es: 'Los flujos clave, de principio a fin.',
          de: 'Die zentralen Abläufe, von Anfang bis Ende.',
          it: 'I percorsi chiave, dall’inizio alla fine.',
          pt: 'Os percursos-chave, de ponta a ponta.',
          nl: 'De belangrijkste flows, van begin tot eind.',
          ar: 'المسارات الأساسية، من البداية إلى النهاية.',
          pl: 'Kluczowe ścieżki, od początku do końca.',
          tr: 'Temel akışlar, uçtan uca.',
        },
      },
      {
        day: {
          fr: 'Jour 4',
          en: 'Day 4',
          es: 'Día 4',
          de: 'Tag 4',
          it: 'Giorno 4',
          pt: 'Dia 4',
          nl: 'Dag 4',
          ar: 'اليوم 4',
          pl: 'Dzień 4',
          tr: '4. gün',
        },
        weekday: {
          fr: 'jeudi',
          en: 'Thursday',
          es: 'jueves',
          de: 'Donnerstag',
          it: 'giovedì',
          pt: 'quinta',
          nl: 'donderdag',
          ar: 'الخميس',
          pl: 'czwartek',
          tr: 'perşembe',
        },
        title: {
          fr: 'V1 complète, en ligne',
          en: 'Full V1, online',
          es: 'V1 completa, en línea',
          de: 'Vollständige V1, online',
          it: 'V1 completa, online',
          pt: 'V1 completa, online',
          nl: 'Volledige V1, online',
          ar: 'نسخة أولى كاملة، على الإنترنت',
          pl: 'Kompletne V1, online',
          tr: 'Eksiksiz V1, yayında',
        },
        body: {
          fr: 'À une adresse où vous la manipulez.',
          en: 'At an address where you can handle it.',
          es: 'En una dirección donde puedes manejarla.',
          de: 'Unter einer Adresse, unter der du sie ausprobieren kannst.',
          it: 'A un indirizzo dove puoi usarla.',
          pt: 'Num endereço onde a pode experimentar.',
          nl: 'Op een adres waar je ermee aan de slag kunt.',
          ar: 'على عنوان يمكنك فيه تجربتها بنفسك.',
          pl: 'Pod adresem, pod którym możesz je sprawdzić.',
          tr: 'Üzerinde deneyebileceğiniz bir adreste.',
        },
      },
      {
        day: {
          fr: 'Jour 5',
          en: 'Day 5',
          es: 'Día 5',
          de: 'Tag 5',
          it: 'Giorno 5',
          pt: 'Dia 5',
          nl: 'Dag 5',
          ar: 'اليوم 5',
          pl: 'Dzień 5',
          tr: '5. gün',
        },
        weekday: {
          fr: 'vendredi',
          en: 'Friday',
          es: 'viernes',
          de: 'Freitag',
          it: 'venerdì',
          pt: 'sexta',
          nl: 'vrijdag',
          ar: 'الجمعة',
          pl: 'piątek',
          tr: 'cuma',
        },
        title: {
          fr: 'Recette',
          en: 'Acceptance testing',
          es: 'Recepción',
          de: 'Abnahmetest',
          it: 'Collaudo',
          pt: 'Testes de aceitação',
          nl: 'Acceptatietest',
          ar: 'الاختبار والاستلام',
          pl: 'Odbiór',
          tr: 'Kabul testi',
        },
        lanes: {
          you: {
            fr: 'Vous testez, toute la journée.',
            en: 'You test, all day.',
            es: 'Pruebas, todo el día.',
            de: 'Du testest, den ganzen Tag.',
            it: 'Tu testi, tutto il giorno.',
            pt: 'Testa, o dia inteiro.',
            nl: 'Jij test, de hele dag.',
            ar: 'أنت تختبر، طوال اليوم.',
            pl: 'Testujesz przez cały dzień.',
            tr: 'Gün boyu siz test edersiniz.',
          },
          us: {
            fr: 'Hébergement et préparation de la mise en ligne.',
            en: 'Hosting and preparing the go-live.',
            es: 'Alojamiento y preparación de la puesta en línea.',
            de: 'Hosting und Vorbereitung des Go-live.',
            it: 'Hosting e preparazione della messa online.',
            pt: 'Alojamento e preparação da entrada em produção.',
            nl: 'Hosting en voorbereiding van de livegang.',
            ar: 'الاستضافة والتحضير للإطلاق.',
            pl: 'Hosting i przygotowanie uruchomienia.',
            tr: 'Barındırma ve yayına hazırlık.',
          },
        },
      },
      {
        day: {
          fr: 'Jours 6–7',
          en: 'Days 6–7',
          es: 'Días 6–7',
          de: 'Tage 6–7',
          it: 'Giorni 6–7',
          pt: 'Dias 6–7',
          nl: 'Dagen 6–7',
          ar: 'اليومان \u20666–7\u2069',
          pl: 'Dni 6–7',
          tr: '6.–7. gün',
        },
        weekday: {
          fr: 'samedi, dimanche',
          en: 'Saturday, Sunday',
          es: 'sábado, domingo',
          de: 'Samstag, Sonntag',
          it: 'sabato, domenica',
          pt: 'sábado, domingo',
          nl: 'zaterdag, zondag',
          ar: 'السبت، الأحد',
          pl: 'sobota, niedziela',
          tr: 'cumartesi, pazar',
        },
        title: {
          fr: 'Correctifs, puis production',
          en: 'Fixes, then production',
          es: 'Correcciones, y producción',
          de: 'Korrekturen, dann Produktion',
          it: 'Correzioni, poi produzione',
          pt: 'Correções, depois produção',
          nl: 'Correcties, dan productie',
          ar: 'التصحيحات، ثم الإنتاج',
          pl: 'Poprawki, potem produkcja',
          tr: 'Düzeltmeler, ardından canlıya',
        },
        body: {
          fr: 'Vos retours du vendredi, appliqués. Dimanche soir : en ligne.',
          en: 'Friday’s feedback, applied. Sunday evening: live.',
          es: 'Tus comentarios del viernes, aplicados. Domingo por la noche: en línea.',
          de: 'Dein Feedback vom Freitag, umgesetzt. Sonntagabend: online.',
          it: 'I tuoi feedback del venerdì, applicati. Domenica sera: online.',
          pt: 'O seu feedback de sexta, aplicado. Domingo à noite: online.',
          nl: 'Je feedback van vrijdag, verwerkt. Zondagavond: live.',
          ar: 'ملاحظاتك من يوم الجمعة، مطبَّقة. مساء الأحد: على الإنترنت.',
          pl: 'Twoje uwagi z piątku, wdrożone. Niedziela wieczorem: online.',
          tr: 'Cuma günkü geri bildirimleriniz uygulanır. Pazar akşamı: yayında.',
        },
      },
    ],
    scopeLabel: {
      fr: 'Périmètre arrêté',
      en: 'Scope settled',
      es: 'Alcance cerrado',
      de: 'Umfang festgelegt',
      it: 'Ambito definito',
      pt: 'Âmbito fechado',
      nl: 'Scope vastgelegd',
      ar: 'نطاق محسوم',
      pl: 'Zakres zamknięty',
      tr: 'Kapsam kesinleşti',
    },
    spanLabel: {
      fr: '7 jours, lundi → dimanche',
      en: '7 days, Monday → Sunday',
      es: '7 días, lunes → domingo',
      de: '7 Tage, Montag → Sonntag',
      it: '7 giorni, lunedì → domenica',
      pt: '7 dias, segunda → domingo',
      nl: '7 dagen, maandag → zondag',
      ar: '7 أيام، من الاثنين إلى الأحد',
      pl: '7 dni, poniedziałek → niedziela',
      tr: '7 gün, pazartesi → pazar',
    },
    youLabel: {
      fr: 'Vous',
      en: 'You',
      es: 'Tú',
      de: 'Du',
      it: 'Tu',
      pt: 'Você',
      nl: 'Jij',
      ar: 'أنت',
      pl: 'Ty',
      tr: 'Siz',
    },
    usLabel: {
      fr: 'Nous',
      en: 'Us',
      es: 'Nosotros',
      de: 'Wir',
      it: 'Noi',
      pt: 'Nós',
      nl: 'Wij',
      ar: 'نحن',
      pl: 'My',
      tr: 'Biz',
    },
    note: {
      fr: 'Un seul interlocuteur, qui décide, du premier échange à la passation.',
      en: 'One person to talk to, who decides, from the first exchange to the handover.',
      es: 'Un solo interlocutor, que decide, desde el primer contacto hasta el traspaso.',
      de: 'Ein einziger Ansprechpartner, der entscheidet, vom ersten Gespräch bis zur Übergabe.',
      it: 'Un solo interlocutore, che decide, dal primo scambio al passaggio di consegne.',
      pt: 'Um único interlocutor, que decide, do primeiro contacto à passagem de testemunho.',
      nl: 'Eén aanspreekpunt, dat beslist, van het eerste gesprek tot de overdracht.',
      ar: 'محاور واحد، صاحب القرار، من أول تواصل حتى التسليم.',
      pl: 'Jedna osoba do kontaktu, która decyduje — od pierwszej rozmowy po przekazanie.',
      tr: 'İlk görüşmeden devir teslime kadar, karar veren tek bir muhatap.',
    },
  },

  day7: {
    title: {
      fr: 'Ce que vous avez dimanche soir.',
      en: 'What you have on Sunday evening.',
      es: 'Lo que tienes el domingo por la noche.',
      de: 'Was du am Sonntagabend hast.',
      it: 'Cosa hai domenica sera.',
      pt: 'O que tem no domingo à noite.',
      nl: 'Wat je zondagavond hebt.',
      ar: 'ما تملكه مساء الأحد.',
      pl: 'Co masz w niedzielę wieczorem.',
      tr: 'Pazar akşamı elinizde olanlar.',
    },
    lead: {
      title: {
        fr: 'Votre produit, en production',
        en: 'Your product, in production',
        es: 'Tu producto, en producción',
        de: 'Dein Produkt, in Produktion',
        it: 'Il tuo prodotto, in produzione',
        pt: 'O seu produto, em produção',
        nl: 'Je product, in productie',
        ar: 'منتجك، في الإنتاج',
        pl: 'Twój produkt, na produkcji',
        tr: 'Ürününüz, canlıda',
      },
      note: {
        fr: 'Sur votre nom de domaine pour un produit web, soumis aux stores pour une app. Pas un lien de test.',
        en: 'On your own domain for a web product, submitted to the stores for an app. Not a test link.',
        es: 'En tu dominio si es un producto web, enviado a las stores si es una app. No un enlace de prueba.',
        de: 'Auf deiner eigenen Domain bei einem Webprodukt, bei den Stores eingereicht bei einer App. Kein Testlink.',
        it: 'Sul tuo dominio per un prodotto web, inviato agli store per un’app. Non un link di prova.',
        pt: 'No seu domínio para um produto web, submetido às lojas para uma app. Não um link de teste.',
        nl: 'Op je eigen domeinnaam voor een webproduct, ingediend bij de stores voor een app. Geen testlink.',
        ar: 'على نطاقك الخاص لمنتج الويب، ومُرسَل إلى المتاجر للتطبيق. ليس رابط اختبار.',
        pl: 'Na Twojej domenie w przypadku produktu webowego, zgłoszony do sklepów w przypadku aplikacji. Nie link testowy.',
        tr: 'Web ürünüyse kendi alan adınızda, uygulamaysa mağazalara gönderilmiş. Bir test bağlantısı değil.',
      },
    },
    items: [
      {
        title: {
          fr: 'Le code du produit',
          en: 'The product’s code',
          es: 'El código del producto',
          de: 'Der Code des Produkts',
          it: 'Il codice del prodotto',
          pt: 'O código do produto',
          nl: 'De code van het product',
          ar: 'شيفرة المنتج',
          pl: 'Kod produktu',
          tr: 'Ürünün kodu',
        },
        note: {
          fr: 'à vous dès le premier jour',
          en: 'yours from day one',
          es: 'tuyo desde el primer día',
          de: 'gehört dir ab dem ersten Tag',
          it: 'tuo dal primo giorno',
          pt: 'seu desde o primeiro dia',
          nl: 'van jou vanaf dag één',
          ar: 'ملكك من اليوم الأول',
          pl: 'Twój od pierwszego dnia',
          tr: 'ilk günden sizin',
        },
      },
      {
        title: {
          fr: 'Design sur mesure',
          en: 'Bespoke design',
          es: 'Diseño a medida',
          de: 'Individuelles Design',
          it: 'Design su misura',
          pt: 'Design à medida',
          nl: 'Design op maat',
          ar: 'تصميم مخصَّص',
          pl: 'Design na miarę',
          tr: 'Size özel tasarım',
        },
        note: {
          fr: 'dessiné pour votre produit',
          en: 'drawn for your product',
          es: 'diseñado para tu producto',
          de: 'für dein Produkt gestaltet',
          it: 'disegnato per il tuo prodotto',
          pt: 'desenhado para o seu produto',
          nl: 'ontworpen voor jouw product',
          ar: 'مرسوم لمنتجك',
          pl: 'zaprojektowany dla Twojego produktu',
          tr: 'ürününüz için çizildi',
        },
      },
      {
        title: {
          fr: 'Comptes, rôles, accès',
          en: 'Accounts, roles, access',
          es: 'Cuentas, roles, accesos',
          de: 'Konten, Rollen, Zugänge',
          it: 'Account, ruoli, accessi',
          pt: 'Contas, funções, acessos',
          nl: 'Accounts, rollen, toegang',
          ar: 'الحسابات والأدوار والصلاحيات',
          pl: 'Konta, role, dostępy',
          tr: 'Hesaplar, roller, erişimler',
        },
        note: {
          fr: 'inscription, connexion, permissions',
          en: 'sign-up, login, permissions',
          es: 'registro, acceso, permisos',
          de: 'Registrierung, Login, Berechtigungen',
          it: 'registrazione, accesso, permessi',
          pt: 'registo, início de sessão, permissões',
          nl: 'registratie, inloggen, rechten',
          ar: 'التسجيل، وتسجيل الدخول، والأذونات',
          pl: 'rejestracja, logowanie, uprawnienia',
          tr: 'kayıt, giriş, yetkiler',
        },
      },
      {
        title: {
          fr: 'Hébergement et mise en ligne',
          en: 'Hosting and go-live',
          es: 'Alojamiento y puesta en línea',
          de: 'Hosting und Go-live',
          it: 'Hosting e messa online',
          pt: 'Alojamento e entrada em produção',
          nl: 'Hosting en livegang',
          ar: 'الاستضافة والإطلاق',
          pl: 'Hosting i uruchomienie',
          tr: 'Barındırma ve yayına alma',
        },
        note: {
          fr: 'sur vos comptes, à votre nom',
          en: 'on your accounts, in your name',
          es: 'en tus cuentas, a tu nombre',
          de: 'auf deinen Konten, auf deinen Namen',
          it: 'sui tuoi account, a tuo nome',
          pt: 'nas suas contas, em seu nome',
          nl: 'op jouw accounts, op jouw naam',
          ar: 'على حساباتك، باسمك',
          pl: 'na Twoich kontach, na Twoje nazwisko',
          tr: 'sizin hesaplarınızda, sizin adınıza',
        },
      },
      {
        title: {
          fr: 'Site vitrine, SEO et GEO',
          en: 'Showcase site, SEO and GEO',
          es: 'Sitio escaparate, SEO y GEO',
          de: 'Website, SEO und GEO',
          it: 'Sito vetrina, SEO e GEO',
          pt: 'Site de apresentação, SEO e GEO',
          nl: 'Website, SEO en GEO',
          ar: 'موقع تعريفي، SEO وGEO',
          pl: 'Strona produktu, SEO i GEO',
          tr: 'Tanıtım sitesi, SEO ve GEO',
        },
        note: {
          fr: 'de quoi le montrer et le vendre',
          en: 'something to show it and sell it with',
          es: 'algo con lo que mostrarlo y venderlo',
          de: 'um es zu zeigen und zu verkaufen',
          it: 'per mostrarlo e venderlo',
          pt: 'para o mostrar e vender',
          nl: 'om het te tonen en te verkopen',
          ar: 'ما تعرضه به وتبيعه',
          pl: 'coś, czym go pokażesz i sprzedasz',
          tr: 'ürünü göstermek ve satmak için',
        },
      },
      {
        title: {
          fr: 'Passation documentée',
          en: 'Documented handover',
          es: 'Traspaso documentado',
          de: 'Dokumentierte Übergabe',
          it: 'Passaggio di consegne documentato',
          pt: 'Passagem documentada',
          nl: 'Gedocumenteerde overdracht',
          ar: 'تسليم موثَّق',
          pl: 'Udokumentowane przekazanie',
          tr: 'Belgelenmiş devir teslim',
        },
        note: {
          fr: 'docs, accès, session de passation',
          en: 'docs, access, handover session',
          es: 'documentación, accesos, sesión de traspaso',
          de: 'Doku, Zugänge, Übergabetermin',
          it: 'documentazione, accessi, sessione di passaggio',
          pt: 'documentação, acessos, sessão de passagem',
          nl: 'documentatie, toegang, overdrachtssessie',
          ar: 'الوثائق، والصلاحيات، وجلسة تسليم',
          pl: 'dokumentacja, dostępy, sesja przekazania',
          tr: 'dokümanlar, erişimler, devir oturumu',
        },
      },
      {
        title: {
          fr: '2 semaines de correctifs',
          en: '2 weeks of fixes',
          es: '2 semanas de correcciones',
          de: '2 Wochen Korrekturen',
          it: '2 settimane di correzioni',
          pt: '2 semanas de correções',
          nl: '2 weken correcties',
          ar: 'أسبوعان من التصحيحات',
          pl: '2 tygodnie poprawek',
          tr: '2 hafta düzeltme',
        },
        /* ⛔ « au contrat » IS GONE (2026-09-15, pass 5). Adrien: « pourquoi "au
           contrat" ? » — and the answer is that it was a credibility crutch, not
           information. Worse, it was worn by ONE tile in a grid of eight: saying
           it here quietly suggests the seven others are goodwill. Everything in
           this grid is contractual, so nothing in it says so. */
        note: {
          fr: 'après la mise en ligne',
          en: 'after go-live',
          es: 'tras la puesta en línea',
          de: 'nach dem Go-live',
          it: 'dopo la messa online',
          pt: 'após a entrada em produção',
          nl: 'na de livegang',
          ar: 'بعد الإطلاق',
          pl: 'po uruchomieniu',
          tr: 'yayına alındıktan sonra',
        },
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
      de: 'Wie lange es dauert, bis du online bist.',
      it: 'Quanto tempo prima di essere online.',
      pt: 'Quanto tempo até estar online.',
      nl: 'Hoe lang voordat je live bent.',
      ar: 'كم من الوقت قبل أن تكون على الإنترنت.',
      pl: 'Ile czasu do uruchomienia.',
      tr: 'Yayına çıkmak ne kadar sürer.',
    },
    ticks: {
      zero: {
        fr: 'Jour 0',
        en: 'Day 0',
        es: 'Día 0',
        de: 'Tag 0',
        it: 'Giorno 0',
        pt: 'Dia 0',
        nl: 'Dag 0',
        ar: 'اليوم 0',
        pl: 'Dzień 0',
        tr: '0. gün',
      },
      oneMonth: {
        fr: '1 mois',
        en: '1 month',
        es: '1 mes',
        de: '1 Monat',
        it: '1 mese',
        pt: '1 mês',
        nl: '1 maand',
        ar: 'شهر واحد',
        pl: '1 miesiąc',
        tr: '1 ay',
      },
      threeMonths: {
        fr: '3 mois',
        en: '3 months',
        es: '3 meses',
        de: '3 Monate',
        it: '3 mesi',
        pt: '3 meses',
        nl: '3 maanden',
        ar: '3 أشهر',
        pl: '3 miesiące',
        tr: '3 ay',
      },
      sixMonths: {
        fr: '6 mois',
        en: '6 months',
        es: '6 meses',
        de: '6 Monate',
        it: '6 mesi',
        pt: '6 meses',
        nl: '6 maanden',
        ar: '6 أشهر',
        pl: '6 miesięcy',
        tr: '6 ay',
      },
    },
    rows: {
      khufu: {
        name: {
          fr: 'Khufu · Sprint V1',
          en: 'Khufu · Sprint V1',
          es: 'Khufu · Sprint V1',
          de: 'Khufu · Sprint V1',
          it: 'Khufu · Sprint V1',
          pt: 'Khufu · Sprint V1',
          nl: 'Khufu · Sprint V1',
          ar: 'Khufu · Sprint V1',
          pl: 'Khufu · Sprint V1',
          tr: 'Khufu · Sprint V1',
        },
        value: {
          fr: '7 jours',
          en: '7 days',
          es: '7 días',
          de: '7 Tage',
          it: '7 giorni',
          pt: '7 dias',
          nl: '7 dagen',
          ar: '7 أيام',
          pl: '7 dni',
          tr: '7 gün',
        },
        /* Same tic, same cut (pass 5) — but the FACT under it is the whole point
           of the chart, so it is restated as what it means to the buyer instead
           of as where it is written. It also now reads straight against the two
           rows below it, which are explicitly estimates. */
        note: {
          fr: 'Un engagement, pas une estimation.',
          en: 'A commitment, not an estimate.',
          es: 'Un compromiso, no una estimación.',
          de: 'Eine Zusage, keine Schätzung.',
          it: 'Un impegno, non una stima.',
          pt: 'Um compromisso, não uma estimativa.',
          nl: 'Een toezegging, geen schatting.',
          ar: 'التزام، لا تقدير.',
          pl: 'Zobowiązanie, nie szacunek.',
          tr: 'Bir tahmin değil, bir taahhüt.',
        },
      },
      agency: {
        name: {
          fr: 'Agence au devis',
          en: 'Quote-based agency',
          es: 'Agencia con presupuesto',
          de: 'Agentur nach Angebot',
          it: 'Agenzia a preventivo',
          pt: 'Agência por orçamento',
          nl: 'Bureau op offerte',
          ar: 'وكالة بعرض سعر',
          pl: 'Agencja z wyceną',
          tr: 'Teklifle çalışan ajans',
        },
        value: {
          fr: '3 à 6 mois',
          en: '3 to 6 months',
          es: '3 a 6 meses',
          de: '3 bis 6 Monate',
          it: 'da 3 a 6 mesi',
          pt: '3 a 6 meses',
          nl: '3 tot 6 maanden',
          ar: 'من 3 إلى 6 أشهر',
          pl: '3 do 6 miesięcy',
          tr: '3 ila 6 ay',
        },
        note: {
          fr: 'La fourchette que les agences annoncent elles-mêmes.',
          en: 'The range agencies publish for themselves.',
          es: 'El rango que las propias agencias anuncian.',
          de: 'Die Spanne, die Agenturen selbst angeben.',
          it: 'La forbice che le agenzie stesse dichiarano.',
          pt: 'O intervalo que as próprias agências anunciam.',
          nl: 'De marge die bureaus zelf opgeven.',
          ar: 'المدى الذي تعلنه الوكالات نفسها.',
          pl: 'Przedział, który agencje same podają.',
          tr: 'Ajansların kendi açıkladığı aralık.',
        },
      },
      hire: {
        name: {
          fr: 'Recruter un développeur',
          en: 'Hiring a developer',
          es: 'Contratar a un desarrollador',
          de: 'Einen Entwickler einstellen',
          it: 'Assumere uno sviluppatore',
          pt: 'Recrutar um programador',
          nl: 'Een developer aannemen',
          ar: 'توظيف مطوّر',
          pl: 'Zatrudnienie programisty',
          tr: 'Geliştirici işe almak',
        },
        value: {
          fr: '12 semaines',
          en: '12 weeks',
          es: '12 semanas',
          de: '12 Wochen',
          it: '12 settimane',
          pt: '12 semanas',
          nl: '12 weken',
          ar: '12 أسبوعًا',
          pl: '12 tygodni',
          tr: '12 hafta',
        },
        note: {
          fr: 'Avant la première ligne de code. Le développement commence après.',
          en: 'Before the first line of code. Development starts after that.',
          es: 'Antes de la primera línea de código. El desarrollo empieza después.',
          de: 'Bis zur ersten Zeile Code. Die Entwicklung beginnt erst danach.',
          it: 'Prima della prima riga di codice. Lo sviluppo inizia dopo.',
          pt: 'Antes da primeira linha de código. O desenvolvimento começa depois.',
          nl: 'Vóór de eerste regel code. De ontwikkeling begint pas daarna.',
          ar: 'قبل أول سطر من الشيفرة. التطوير يبدأ بعد ذلك.',
          pl: 'Zanim powstanie pierwsza linijka kodu. Rozwój zaczyna się dopiero potem.',
          tr: 'İlk kod satırından önce. Geliştirme bundan sonra başlar.',
        },
      },
    },
    sources: {
      fr: 'Sources — Recrutement : Apec, « Pratiques de recrutement des cadres » (2023), 12 semaines en moyenne, tous secteurs. Agence : fourchette de 3 à 6 mois publiée par les agences françaises de développement de MVP.',
      en: 'Sources — Hiring: Apec, “Pratiques de recrutement des cadres” (2023), 12 weeks on average, all sectors. Agency: the 3-to-6-month range published by French MVP development agencies.',
      es: 'Fuentes — Contratación: Apec, «Pratiques de recrutement des cadres» (2023), 12 semanas de media, todos los sectores. Agencia: el rango de 3 a 6 meses publicado por las agencias francesas de desarrollo de MVP.',
      de: 'Quellen — Einstellung: Apec, „Pratiques de recrutement des cadres“ (2023), durchschnittlich 12 Wochen, alle Branchen. Agentur: die Spanne von 3 bis 6 Monaten, die französische MVP-Entwicklungsagenturen veröffentlichen.',
      it: 'Fonti — Assunzione: Apec, «Pratiques de recrutement des cadres» (2023), 12 settimane in media, tutti i settori. Agenzia: forbice da 3 a 6 mesi pubblicata dalle agenzie francesi di sviluppo MVP.',
      pt: 'Fontes — Recrutamento: Apec, «Pratiques de recrutement des cadres» (2023), 12 semanas em média, todos os setores. Agência: intervalo de 3 a 6 meses publicado pelas agências francesas de desenvolvimento de MVP.',
      nl: 'Bronnen — Werving: Apec, ‘Pratiques de recrutement des cadres’ (2023), gemiddeld 12 weken, alle sectoren. Bureau: de marge van 3 tot 6 maanden die Franse MVP-ontwikkelbureaus publiceren.',
      ar: 'المصادر — التوظيف: Apec، «Pratiques de recrutement des cadres» (2023)، 12 أسبوعًا في المتوسط، جميع القطاعات. الوكالة: مدى من 3 إلى 6 أشهر تعلنه الوكالات الفرنسية لتطوير MVP.',
      pl: 'Źródła — Rekrutacja: Apec, „Pratiques de recrutement des cadres” (2023), średnio 12 tygodni, wszystkie sektory. Agencja: przedział od 3 do 6 miesięcy publikowany przez francuskie agencje tworzące MVP.',
      tr: 'Kaynaklar — İşe alım: Apec, “Pratiques de recrutement des cadres” (2023), tüm sektörlerde ortalama 12 hafta. Ajans: Fransız MVP geliştirme ajanslarının yayımladığı 3 ila 6 aylık aralık.',
    },
  },

  comparison: {
    title: {
      fr: 'Les alternatives.',
      en: 'The alternatives.',
      es: 'Las alternativas.',
      de: 'Die Alternativen.',
      it: 'Le alternative.',
      pt: 'As alternativas.',
      nl: 'De alternatieven.',
      ar: 'البدائل.',
      pl: 'Alternatywy.',
      tr: 'Alternatifler.',
    },
    aspectLabel: {
      fr: 'Critère',
      en: 'Criterion',
      es: 'Criterio',
      de: 'Kriterium',
      it: 'Criterio',
      pt: 'Critério',
      nl: 'Criterium',
      ar: 'المعيار',
      pl: 'Kryterium',
      tr: 'Kriter',
    },
    agency: {
      fr: 'Agence',
      en: 'Agency',
      es: 'Agencia',
      de: 'Agentur',
      it: 'Agenzia',
      pt: 'Agência',
      nl: 'Bureau',
      ar: 'وكالة',
      pl: 'Agencja',
      tr: 'Ajans',
    },
    freelance: {
      fr: 'Freelance',
      en: 'Freelancer',
      es: 'Freelance',
      de: 'Freelancer',
      it: 'Freelance',
      pt: 'Freelancer',
      nl: 'Freelancer',
      ar: 'مستقل',
      pl: 'Freelancer',
      tr: 'Freelancer',
    },
    noCode: {
      fr: 'No-code',
      en: 'No-code',
      es: 'No-code',
      de: 'No-Code',
      it: 'No-code',
      pt: 'No-code',
      nl: 'No-code',
      ar: 'No-code',
      pl: 'No-code',
      tr: 'No-code',
    },
    khufu: {
      fr: 'Khufu',
      en: 'Khufu',
      es: 'Khufu',
      de: 'Khufu',
      it: 'Khufu',
      pt: 'Khufu',
      nl: 'Khufu',
      ar: 'Khufu',
      pl: 'Khufu',
      tr: 'Khufu',
    },
    rows: [
      {
        aspect: {
          fr: 'Prix',
          en: 'Price',
          es: 'Precio',
          de: 'Preis',
          it: 'Prezzo',
          pt: 'Preço',
          nl: 'Prijs',
          ar: 'السعر',
          pl: 'Cena',
          tr: 'Fiyat',
        },
        agency: { mark: 'mixed', label: {
          fr: 'Devis révisable',
          en: 'Revisable quote',
          es: 'Presupuesto revisable',
          de: 'Angebot mit Nachträgen',
          it: 'Preventivo rivedibile',
          pt: 'Orçamento revisível',
          nl: 'Herzienbare offerte',
          ar: 'عرض سعر قابل للتعديل',
          pl: 'Wycena do zmiany',
          tr: 'Değişebilen teklif',
        } },
        freelance: { mark: 'mixed', label: {
          fr: 'Au temps passé',
          en: 'By time spent',
          es: 'Por tiempo',
          de: 'Nach Aufwand',
          it: 'A tempo',
          pt: 'Ao tempo gasto',
          nl: 'Op uurbasis',
          ar: 'حسب الوقت المستغرق',
          pl: 'Za przepracowany czas',
          tr: 'Harcanan süreye göre',
        } },
        noCode: { mark: 'no', label: {
          fr: 'Licence à vie',
          en: 'Licence forever',
          es: 'Licencia de por vida',
          de: 'Lizenz auf Dauer',
          it: 'Licenza a vita',
          pt: 'Licença para sempre',
          nl: 'Levenslange licentie',
          ar: 'رسوم ترخيص دائمة',
          pl: 'Licencja na zawsze',
          tr: 'Ömür boyu lisans',
        } },
        khufu: { mark: 'yes', label: {
          fr: 'Fixe',
          en: 'Fixed',
          es: 'Fijo',
          de: 'Fest',
          it: 'Fisso',
          pt: 'Fixo',
          nl: 'Vast',
          ar: 'ثابت',
          pl: 'Stała',
          tr: 'Sabit',
        } },
      },
      {
        aspect: {
          fr: 'Le code est à vous',
          en: 'The code is yours',
          es: 'El código es tuyo',
          de: 'Der Code gehört dir',
          it: 'Il codice è tuo',
          pt: 'O código é seu',
          nl: 'De code is van jou',
          ar: 'الشيفرة ملكك',
          pl: 'Kod należy do Ciebie',
          tr: 'Kod sizin',
        },
        agency: { mark: 'mixed', label: {
          fr: 'Selon contrat',
          en: 'Per contract',
          es: 'Según contrato',
          de: 'Je nach Vertrag',
          it: 'Secondo contratto',
          pt: 'Conforme contrato',
          nl: 'Volgens contract',
          ar: 'حسب العقد',
          pl: 'Zależnie od umowy',
          tr: 'Sözleşmeye göre',
        } },
        freelance: { mark: 'mixed', label: {
          fr: 'En général',
          en: 'Usually',
          es: 'En general',
          de: 'Meistens',
          it: 'In genere',
          pt: 'Em geral',
          nl: 'Meestal',
          ar: 'غالبًا',
          pl: 'Zwykle',
          tr: 'Genellikle',
        } },
        noCode: { mark: 'no', label: {
          fr: 'Non',
          en: 'No',
          es: 'No',
          de: 'Nein',
          it: 'No',
          pt: 'Não',
          nl: 'Nee',
          ar: 'لا',
          pl: 'Nie',
          tr: 'Hayır',
        } },
        khufu: { mark: 'yes', label: {
          fr: 'Oui',
          en: 'Yes',
          es: 'Sí',
          de: 'Ja',
          it: 'Sì',
          pt: 'Sim',
          nl: 'Ja',
          ar: 'نعم',
          pl: 'Tak',
          tr: 'Evet',
        } },
      },
      {
        /*
         * ⛔ THIS ROW REPLACED « Qui construit » / « Le founder » (cmu1u21i). The
         * old one argued the seller's org chart; this one answers the question
         * the buyer is actually asking — am I queued behind other projects?
         */
        aspect: {
          fr: 'Votre place dans la file',
          en: 'Your place in the queue',
          es: 'Tu lugar en la cola',
          de: 'Dein Platz in der Warteschlange',
          it: 'Il tuo posto in coda',
          pt: 'O seu lugar na fila',
          nl: 'Je plek in de wachtrij',
          ar: 'موقعك في الطابور',
          pl: 'Twoje miejsce w kolejce',
          tr: 'Sıradaki yeriniz',
        },
        agency: { mark: 'mixed', label: {
          fr: 'Un projet parmi d’autres',
          en: 'One project among many',
          es: 'Un proyecto entre otros',
          de: 'Ein Projekt unter vielen',
          it: 'Un progetto tra tanti',
          pt: 'Um projeto entre outros',
          nl: 'Eén project van de vele',
          ar: 'مشروع بين مشاريع أخرى',
          pl: 'Jeden projekt z wielu',
          tr: 'Birçok projeden biri',
        } },
        freelance: { mark: 'mixed', label: {
          fr: 'En parallèle d’autres clients',
          en: 'Alongside other clients',
          es: 'En paralelo a otros clientes',
          de: 'Parallel zu anderen Kunden',
          it: 'In parallelo ad altri clienti',
          pt: 'Em paralelo com outros clientes',
          nl: 'Naast andere klanten',
          ar: 'بالتوازي مع عملاء آخرين',
          pl: 'Równolegle z innymi klientami',
          tr: 'Başka müşterilerle paralel',
        } },
        noCode: { mark: 'mixed', label: {
          fr: 'Vous, sur votre temps',
          en: 'You, on your own time',
          es: 'Tú, en tu tiempo',
          de: 'Du, in deiner Freizeit',
          it: 'Tu, nel tuo tempo',
          pt: 'Você, no seu tempo',
          nl: 'Jij, in je eigen tijd',
          ar: 'أنت، في وقتك الخاص',
          pl: 'Ty, w swoim wolnym czasie',
          tr: 'Siz, kendi zamanınızda',
        } },
        khufu: { mark: 'yes', label: {
          fr: 'La semaine est à vous',
          en: 'The week is yours',
          es: 'La semana es tuya',
          de: 'Die Woche gehört dir',
          it: 'La settimana è tua',
          pt: 'A semana é sua',
          nl: 'De week is van jou',
          ar: 'الأسبوع لك',
          pl: 'Tydzień należy do Ciebie',
          tr: 'Hafta sizin',
        } },
      },
      {
        aspect: {
          fr: 'Si ça dérape',
          en: 'If it slips',
          es: 'Si se desvía',
          de: 'Wenn es aus dem Ruder läuft',
          it: 'Se si sfora',
          pt: 'Se derrapar',
          nl: 'Als het ontspoort',
          ar: 'إذا خرج عن المسار',
          pl: 'Gdy coś się przesunie',
          tr: 'İşler kayarsa',
        },
        agency: { mark: 'no', label: {
          fr: 'Avenant',
          en: 'Amendment',
          es: 'Adenda',
          de: 'Nachtrag',
          it: 'Variante al contratto',
          pt: 'Adenda ao contrato',
          nl: 'Meerwerk',
          ar: 'ملحق عقد',
          pl: 'Aneks',
          tr: 'Ek sözleşme',
        } },
        freelance: { mark: 'no', label: {
          fr: 'Le planning glisse',
          en: 'The schedule slides',
          es: 'La planificación se desplaza',
          de: 'Der Zeitplan verschiebt sich',
          it: 'La tabella di marcia slitta',
          pt: 'O calendário escorrega',
          nl: 'De planning schuift op',
          ar: 'الجدول يتأخر',
          pl: 'Harmonogram się przesuwa',
          tr: 'Takvim kayar',
        } },
        noCode: { mark: 'no', label: {
          fr: 'Tout à refaire',
          en: 'Rebuild it all',
          es: 'Rehacerlo todo',
          de: 'Alles neu bauen',
          it: 'Tutto da rifare',
          pt: 'Tudo por refazer',
          nl: 'Alles opnieuw bouwen',
          ar: 'إعادة كل شيء',
          pl: 'Wszystko od nowa',
          tr: 'Her şey baştan',
        } },
        khufu: { mark: 'yes', label: {
          fr: 'C’est pour nous',
          en: 'It’s on us',
          es: 'Corre por nuestra cuenta',
          de: 'Geht auf uns',
          it: 'È a carico nostro',
          pt: 'Fica por nossa conta',
          nl: 'Voor onze rekening',
          ar: 'على حسابنا',
          pl: 'Na nasz koszt',
          tr: 'Maliyeti bize ait',
        } },
      },
    ],
    /*
     * ⛔ NO NOTE UNDER THE MATRIX ANY MORE (2026-09-15). It read « Le no-code
     * suffit pour valider une idée sans budget. Un bon freelance coûte moins cher
     * si vous n'êtes pas pressé. » Adrien: « pourquoi tu vends un truc
     * concurrent ?! ». It was the one line on the page that RECOMMENDED an
     * alternative, placed right after the block whose whole job is to rule those
     * alternatives out — so it cancelled the block. The « not for everyone »
     * nuance lives in `audience`, which qualifies the VISITOR without praising
     * the other side. ⛔ No line on this page may speak well of an alternative.
     */
  },

  audience: {
    /* ⚠️ IT USED TO READ « Pour qui, et pour qui pas. », a title ending on a
       negation (decision cmu4idzs). The frank no is untouched: it lives in the
       two columns, whose headings still say « C'est vous si » / « Ce n'est pas
       vous si ». Only the heading over them stopped ending on « pas ». */
    title: {
      fr: 'À qui s’adresse le sprint.',
      en: 'Who the sprint is for.',
      es: 'Para quién es el sprint.',
      de: 'Für wen der Sprint gemacht ist.',
      it: 'A chi si rivolge lo sprint.',
      pt: 'A quem se destina o sprint.',
      nl: 'Voor wie de sprint bedoeld is.',
      ar: 'لمن صُمِّم هذا السبرينت.',
      pl: 'Dla kogo jest sprint.',
      tr: 'Sprint kimin için.',
    },
    forTitle: {
      fr: 'C’est vous si',
      en: 'This is you if',
      es: 'Eres tú si',
      de: 'Das bist du, wenn',
      it: 'Fa per te se',
      pt: 'É para si se',
      nl: 'Dit ben jij als',
      ar: 'هذا أنت إذا',
      pl: 'To Ty, jeśli',
      tr: 'Sizsiniz, eğer',
    },
    forItems: [
      {
        fr: 'Vous avez une date : un salon, une levée, un client qui attend.',
        en: 'You have a date: a trade show, a raise, a client waiting.',
        es: 'Tienes una fecha: una feria, una ronda, un cliente esperando.',
        de: 'du einen Termin hast: eine Messe, eine Finanzierungsrunde, einen Kunden, der wartet.',
        it: 'Hai una data: una fiera, un round di investimento, un cliente che aspetta.',
        pt: 'Tem uma data: uma feira, uma ronda de investimento, um cliente à espera.',
        nl: 'Je hebt een datum: een beurs, een investeringsronde, een klant die wacht.',
        ar: 'لديك موعد محدد: معرض، جولة تمويل، عميل ينتظر.',
        pl: 'Masz termin: targi, rundę finansowania, klienta, który czeka.',
        tr: 'Bir tarihiniz var: bir fuar, bir yatırım turu, bekleyen bir müşteri.',
      },
      {
        fr: 'Vous savez déjà ce que le produit doit faire au lancement.',
        en: 'You already know what the product has to do at launch.',
        es: 'Ya sabes qué tiene que hacer el producto al lanzarse.',
        de: 'du schon weißt, was das Produkt zum Launch können muss.',
        it: 'Sai già cosa deve fare il prodotto al lancio.',
        pt: 'Já sabe o que o produto tem de fazer no lançamento.',
        nl: 'Je weet al wat het product bij de lancering moet kunnen.',
        ar: 'تعرف مسبقًا ما يجب أن يفعله المنتج عند إطلاقه.',
        pl: 'Wiesz już, co produkt ma robić w dniu startu.',
        tr: 'Ürünün lansmanda ne yapması gerektiğini zaten biliyorsunuz.',
      },
      {
        fr: 'Vous préférez un prix affiché à un devis qui se discute.',
        en: 'You’d rather have a posted price than a quote to argue over.',
        es: 'Prefieres un precio publicado a un presupuesto que se negocia.',
        de: 'dir ein veröffentlichter Preis lieber ist als ein Angebot, über das verhandelt wird.',
        it: 'Preferisci un prezzo dichiarato a un preventivo da negoziare.',
        pt: 'Prefere um preço anunciado a um orçamento para negociar.',
        nl: 'Je kiest liever een vaste prijs dan een offerte waarover onderhandeld wordt.',
        ar: 'تفضّل سعرًا معلنًا على عرض سعر قابل للمساومة.',
        pl: 'Wolisz jawną cenę niż wycenę do negocjacji.',
        tr: 'Pazarlığı yapılan bir teklif yerine açık bir fiyatı tercih ediyorsunuz.',
      },
      {
        fr: 'Vous répondez à une question dans la journée, pas la semaine suivante.',
        en: 'You answer a question the same day, not the following week.',
        es: 'Respondes una pregunta el mismo día, no la semana siguiente.',
        de: 'du eine Frage am selben Tag beantwortest, nicht erst in der Woche darauf.',
        it: 'Rispondi a una domanda in giornata, non la settimana dopo.',
        pt: 'Responde a uma pergunta no próprio dia, não na semana seguinte.',
        nl: 'Je beantwoordt een vraag dezelfde dag, niet de week erna.',
        ar: 'تجيب عن السؤال في اليوم نفسه، لا في الأسبوع التالي.',
        pl: 'Odpowiadasz na pytanie tego samego dnia, a nie w kolejnym tygodniu.',
        tr: 'Bir soruyu ertesi hafta değil, aynı gün yanıtlıyorsunuz.',
      },
    ],
    notForTitle: {
      fr: 'Ce n’est pas vous si',
      en: 'This isn’t you if',
      es: 'No eres tú si',
      de: 'Das bist du nicht, wenn',
      it: 'Non fa per te se',
      pt: 'Não é para si se',
      nl: 'Dit ben jij niet als',
      ar: 'هذا ليس أنت إذا',
      pl: 'To nie Ty, jeśli',
      tr: 'Siz değilsiniz, eğer',
    },
    notForItems: [
      /* ⚠️ A FRANK NO, AND IT STAYS ONE (cmu26co1). Adrien's instruction on the
         amputation sweep protected this block by name: refusing a project is not
         lowering the offer, and the two must not be confused. What changed is
         only the direction of the sentence — it used to say the visitor's product
         had « pas de version réduite qui tienne debout », which describes us
         shrinking their idea until it fits our week. It now says their project is
         bigger than this offer, which is the same no without the amputation. */
      {
        fr: 'Votre projet demande plusieurs mois de construction : ce n’est pas un sprint.',
        en: 'Your project needs months of building: this is not a sprint.',
        es: 'Tu proyecto necesita meses de construcción: esto no es un sprint.',
        de: 'dein Projekt mehrere Monate Entwicklung braucht: Das ist kein Sprint.',
        it: 'Il tuo progetto richiede mesi di costruzione: non è uno sprint.',
        pt: 'O seu projeto exige vários meses de construção: isso não é um sprint.',
        nl: 'Je project vraagt maanden bouwwerk: dat is geen sprint.',
        ar: 'مشروعك يتطلب عدة أشهر من البناء: هذا ليس سبرينت.',
        pl: 'Twój projekt wymaga wielu miesięcy budowy: to nie jest sprint.',
        tr: 'Projeniz aylarca geliştirme gerektiriyor: bu bir sprint değil.',
      },
      {
        fr: 'Chaque décision passe par un comité, sur plusieurs semaines.',
        en: 'Every decision goes through a committee, over several weeks.',
        es: 'Cada decisión pasa por un comité, durante varias semanas.',
        de: 'jede Entscheidung über Wochen durch ein Gremium geht.',
        it: 'Ogni decisione passa da un comitato, nell’arco di settimane.',
        pt: 'Cada decisão passa por um comité, ao longo de várias semanas.',
        nl: 'Elke beslissing gaat wekenlang langs een comité.',
        ar: 'كل قرار يمرّ عبر لجنة، على مدى عدة أسابيع.',
        pl: 'Każda decyzja przechodzi przez komitet, przez kilka tygodni.',
        tr: 'Her karar haftalar süren bir kuruldan geçiyor.',
      },
      {
        fr: 'Personne chez vous ne peut trancher pendant la semaine.',
        en: 'Nobody on your side can settle a question during the week.',
        es: 'Nadie de tu lado puede decidir durante la semana.',
        de: 'bei dir niemand während der Woche entscheiden kann.',
        it: 'Nessuno da parte tua può decidere durante la settimana.',
        pt: 'Ninguém do seu lado pode decidir durante a semana.',
        nl: 'Niemand bij jou kan tijdens de week knopen doorhakken.',
        ar: 'لا أحد لديك يستطيع الحسم خلال الأسبوع.',
        pl: 'Nikt po Twojej stronie nie może rozstrzygać w trakcie tygodnia.',
        tr: 'Hafta boyunca sizin tarafınızda karar verebilecek kimse yok.',
      },
    ],
  },

  faq: {
    title: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked questions',
      es: 'Preguntas frecuentes',
      de: 'Häufige Fragen',
      it: 'Domande frequenti',
      pt: 'Perguntas frequentes',
      nl: 'Veelgestelde vragen',
      ar: 'الأسئلة الشائعة',
      pl: 'Najczęstsze pytania',
      tr: 'Sık sorulan sorular',
    },
    items: [
      {
        q: {
          fr: '« Livrer en 7 jours, c’est impossible. »',
          en: '“Shipping in 7 days is impossible.”',
          es: '«Entregar en 7 días es imposible.»',
          de: '„In 7 Tagen liefern? Unmöglich.“',
          it: '«Consegnare in 7 giorni è impossibile.»',
          pt: '«Entregar em 7 dias é impossível.»',
          nl: '‘Opleveren in 7 dagen, dat is onmogelijk.’',
          ar: '«الإطلاق في 7 أيام مستحيل.»',
          pl: '„Dostarczyć w 7 dni? To niemożliwe.”',
          tr: '“7 günde teslim etmek imkânsız.”',
        },
        /*
         * ⛔ THIS ANSWER NO LONGER SAYS « une seule personne tient tous les rôles »
         * (decision cmu1u21i). It pointed at the solo founder, which is both the
         * wrong argument and a weak one. It now points at the system, which is
         * what actually explains the delay.
         *
         * ⛔ AND ITS LAST SENTENCE IS GONE — « On livre le produit qui peut être
         * lancé, pas toute votre feuille de route » (decision cmu26co1). Adrien:
         * « bah non… on livre tout, faut arrêter de rabaisser l’offre ». He is
         * right and it was the single most expensive sentence on the page: the
         * answer spent three clauses building a feat, then took it back in the
         * fourth. A buyer at [[15000]] who is told they get "the launchable part,
         * not the plan" has been handed a reason to negotiate, and a V1 sold as
         * an amputation is an MVP with a premium price on it.
         * ⛔ Day 0 DEFINES the product with the client. It does not cut it down,
         * and no sentence on this page may suggest that it does.
         */
        a: {
          fr: 'Avec une agence, oui : quatre personnes et trois réunions de validation. Ici le travail est découpé et mené en parallèle par un système d’agents, sous supervision humaine, et le produit est défini avec vous avant le jour 1. Ce qui est défini est livré en entier, en production, dimanche soir.',
          en: 'With an agency, yes: four people and three sign-off meetings. Here the work is cut up and run in parallel by a system of agents, under human supervision, and the product is defined with you before day 1. What is defined is delivered whole, in production, on Sunday evening.',
          es: 'Con una agencia, sí: cuatro personas y tres reuniones de validación. Aquí el trabajo se divide y avanza en paralelo mediante un sistema de agentes, con supervisión humana, y el producto se define contigo antes del día 1. Lo que se define se entrega entero, en producción, el domingo por la noche.',
          de: 'Mit einer Agentur, ja: vier Leute und drei Abstimmungsmeetings. Hier wird die Arbeit aufgeteilt und von einem System aus Agenten parallel erledigt, unter menschlicher Aufsicht, und das Produkt wird vor Tag 1 mit dir definiert. Was definiert ist, wird vollständig geliefert, in Produktion, am Sonntagabend.',
          it: 'Con un’agenzia, sì: quattro persone e tre riunioni di approvazione. Qui il lavoro viene suddiviso e portato avanti in parallelo da un sistema di agenti, sotto supervisione umana, e il prodotto viene definito con te prima del giorno 1. Ciò che è definito viene consegnato per intero, in produzione, domenica sera.',
          pt: 'Com uma agência, sim: quatro pessoas e três reuniões de validação. Aqui o trabalho é dividido e conduzido em paralelo por um sistema de agentes, sob supervisão humana, e o produto é definido consigo antes do dia 1. O que é definido é entregue por inteiro, em produção, no domingo à noite.',
          nl: 'Met een bureau wel: vier mensen en drie goedkeuringsvergaderingen. Hier wordt het werk opgedeeld en parallel uitgevoerd door een systeem van agents, onder menselijk toezicht, en wordt het product vóór dag 1 samen met jou gedefinieerd. Wat gedefinieerd is, wordt volledig opgeleverd, in productie, op zondagavond.',
          ar: 'مع وكالة، نعم: أربعة أشخاص وثلاثة اجتماعات للموافقة. هنا يُقسَّم العمل ويُنجَز بالتوازي عبر منظومة من الوكلاء، تحت إشراف بشري، ويُحدَّد المنتج معك قبل اليوم 1. وما يُحدَّد يُسلَّم كاملًا، في الإنتاج، مساء الأحد.',
          pl: 'W agencji tak: cztery osoby i trzy spotkania akceptacyjne. Tutaj praca jest dzielona i prowadzona równolegle przez system agentów, pod nadzorem człowieka, a produkt definiujemy razem z Tobą przed dniem 1. To, co zdefiniowane, zostaje dostarczone w całości, na produkcji, w niedzielę wieczorem.',
          tr: 'Bir ajansla, evet: dört kişi ve üç onay toplantısı. Burada iş parçalara bölünür ve insan denetiminde bir ajan sistemi tarafından paralel yürütülür; ürün de 1. günden önce sizinle birlikte tanımlanır. Tanımlanan ne varsa eksiksiz, canlıda, pazar akşamı teslim edilir.',
        },
      },
      {
        q: {
          fr: '« Et si ça dérape en cours de semaine ? »',
          en: '“What if it goes off the rails mid-week?”',
          es: '«¿Y si se tuerce a mitad de semana?»',
          de: '„Und wenn es mitten in der Woche aus dem Ruder läuft?“',
          it: '«E se a metà settimana qualcosa va storto?»',
          pt: '«E se algo derrapar a meio da semana?»',
          nl: '‘En als het halverwege de week ontspoort?’',
          ar: '«وماذا لو خرج المشروع عن المسار في منتصف الأسبوع؟»',
          pl: '„A jeśli w połowie tygodnia coś pójdzie nie tak?”',
          tr: '“Ya hafta ortasında işler raydan çıkarsa?”',
        },
        a: {
          fr: 'Le prix est fixe : le dépassement est pour nous. Vous avez un point chaque jour, donc un écart se voit le jour même. Et si le cadrage montre qu’il faut plus de sept jours, on vous le dit avant de commencer.',
          en: 'The price is fixed: the overrun is on us. You get a check-in every day, so a drift shows up the same day. And if scoping shows it needs more than seven days, we tell you before we start.',
          es: 'El precio es fijo: el exceso corre por nuestra cuenta. Tienes un punto cada día, así que una desviación se ve el mismo día. Y si el encuadre muestra que hacen falta más de siete días, te lo decimos antes de empezar.',
          de: 'Der Preis ist fest: Mehraufwand geht auf uns. Du bekommst jeden Tag ein Update, eine Abweichung fällt also noch am selben Tag auf. Und wenn die Planung zeigt, dass mehr als sieben Tage nötig sind, sagen wir es dir, bevor wir anfangen.',
          it: 'Il prezzo è fisso: lo sforamento è a carico nostro. Hai un aggiornamento ogni giorno, quindi uno scostamento si vede il giorno stesso. E se l’analisi iniziale mostra che servono più di sette giorni, te lo diciamo prima di cominciare.',
          pt: 'O preço é fixo: a derrapagem fica por nossa conta. Tem um ponto de situação todos os dias, por isso um desvio vê-se no próprio dia. E se o enquadramento mostrar que são precisos mais de sete dias, dizemos-lhe antes de começar.',
          nl: 'De prijs is vast: een overschrijding is voor onze rekening. Je krijgt elke dag een update, dus een afwijking zie je dezelfde dag nog. En als uit de voorbereiding blijkt dat er meer dan zeven dagen nodig zijn, zeggen we je dat voordat we beginnen.',
          ar: 'السعر ثابت: أي تجاوز على حسابنا. لديك نقطة متابعة كل يوم، فأي انحراف يظهر في اليوم نفسه. وإذا أظهر التأطير أن المشروع يحتاج إلى أكثر من سبعة أيام، نخبرك بذلك قبل أن نبدأ.',
          pl: 'Cena jest stała: przekroczenie idzie na nasz koszt. Codziennie masz krótki status, więc każde odchylenie widać tego samego dnia. A jeśli na etapie ustalania zakresu okaże się, że potrzeba więcej niż siedmiu dni, mówimy Ci o tym przed startem.',
          tr: 'Fiyat sabit: aşım bize ait. Her gün bir durum görüşmesi yaparsınız, dolayısıyla bir sapma aynı gün görülür. Kapsam çalışması yedi günden fazlası gerektiğini gösterirse, bunu başlamadan önce size söyleriz.',
        },
      },
      {
        /*
         * ⚠️ ONE QUESTION WHERE THERE WERE TWO (2026-09-15, pass 5). « Et après le
         * jour 7, je fais quoi ? » sat directly above « Et après les deux semaines
         * de correctifs ? » — the same anxiety asked twice, a fortnight apart,
         * which made the reader climb a staircase to get one answer. The first
         * was also the weaker: it asked what the buyer should DO and answered
         * with what they GET. Merged, nothing is lost and one entry goes.
         *
         * The fear underneath is the last one before signing and it is not about
         * the build: « je me retrouve seul au jour 21 ». Adrien asked for the
         * bridge on 2026-09-14 — the tone is reassuring and factual, never a
         * pitch, and nothing here may be invented: the tiers, the scope and the
         * commitment are read off /maintenance and nothing else.
         * ⚠️ « à partir de » is exact: [[1490]] is the Starter tier, and Growth
         * and Scale sit above it. Do not write a price this page cannot source.
         */
        q: {
          fr: '« Et après la livraison ? »',
          en: '“And after delivery?”',
          es: '«¿Y después de la entrega?»',
          de: '„Und nach der Lieferung?“',
          it: '«E dopo la consegna?»',
          pt: '«E depois da entrega?»',
          nl: '‘En na de oplevering?’',
          ar: '«وماذا بعد التسليم؟»',
          pl: '„A co po dostarczeniu?”',
          tr: '“Peki teslimattan sonra?”',
        },
        a: {
          fr: 'Deux semaines de correctifs suivent la mise en ligne, et le produit tourne déjà sur vos comptes, à votre nom. Ensuite vous n’êtes obligé à rien : il est à vous et tourne sans nous. Si vous préférez ne pas le porter seul, Full Maintenance prend la suite — hébergement, support et jours de développement compris chaque mois, à partir de [[1490]] par mois, engagement 6 mois.',
          en: 'Two weeks of fixes follow the go-live, and the product already runs on your own accounts, in your name. After that you are tied to nothing: it is yours and runs without us. If you would rather not carry it alone, Full Maintenance takes over — hosting, support and development days included every month, from [[1490]] a month, on a 6-month commitment.',
          es: 'Dos semanas de correcciones siguen a la puesta en línea, y el producto ya funciona en tus cuentas, a tu nombre. Después no estás obligado a nada: es tuyo y funciona sin nosotros. Si prefieres no llevarlo solo, Full Maintenance toma el relevo — alojamiento, soporte y días de desarrollo incluidos cada mes, desde [[1490]] al mes, con compromiso de 6 meses.',
          de: 'Auf den Go-live folgen zwei Wochen Korrekturen, und das Produkt läuft bereits auf deinen Konten, auf deinen Namen. Danach bist du zu nichts verpflichtet: Es gehört dir und läuft ohne uns. Wenn du es lieber nicht allein betreuen willst, übernimmt Full Maintenance — Hosting, Support und Entwicklungstage jeden Monat inklusive, ab [[1490]] pro Monat, bei 6 Monaten Laufzeit.',
          it: 'Due settimane di correzioni seguono la messa online, e il prodotto gira già sui tuoi account, a tuo nome. Dopo non sei vincolato a nulla: è tuo e funziona senza di noi. Se preferisci non gestirlo da solo, Full Maintenance prende il testimone — hosting, supporto e giornate di sviluppo incluse ogni mese, a partire da [[1490]] al mese, con impegno di 6 mesi.',
          pt: 'Duas semanas de correções seguem-se à entrada em produção, e o produto já funciona nas suas contas, em seu nome. Depois não fica obrigado a nada: é seu e funciona sem nós. Se preferir não o gerir sozinho, a Full Maintenance assume a continuação — alojamento, suporte e dias de desenvolvimento incluídos todos os meses, a partir de [[1490]] por mês, com compromisso de 6 meses.',
          nl: 'Op de livegang volgen twee weken correcties, en het product draait dan al op jouw accounts, op jouw naam. Daarna ben je nergens toe verplicht: het is van jou en draait zonder ons. Wil je het liever niet alleen dragen, dan neemt Full Maintenance het over — hosting, support en ontwikkeldagen elke maand inbegrepen, vanaf [[1490]] per maand, met een looptijd van 6 maanden.',
          ar: 'أسبوعان من التصحيحات يليان الإطلاق، والمنتج يعمل أصلًا على حساباتك، باسمك. بعد ذلك لا شيء يُلزمك: المنتج ملكك ويعمل من دوننا. وإذا فضّلت ألّا تحمله وحدك، تتولّى Full Maintenance المهمة — الاستضافة والدعم وأيام تطوير مشمولة كل شهر، ابتداءً من [[1490]] شهريًا، بالتزام لمدة 6 أشهر.',
          pl: 'Po uruchomieniu masz dwa tygodnie poprawek, a produkt działa już na Twoich kontach, na Twoje nazwisko. Potem nic Cię nie zobowiązuje: produkt jest Twój i działa bez nas. Jeśli wolisz nie utrzymywać go samodzielnie, pałeczkę przejmuje Full Maintenance — hosting, wsparcie i dni rozwoju w każdym miesiącu, od [[1490]] miesięcznie, przy zobowiązaniu na 6 miesięcy.',
          tr: 'Yayına almanın ardından iki hafta düzeltme gelir ve ürün zaten sizin hesaplarınızda, sizin adınıza çalışır. Sonrasında hiçbir yükümlülüğünüz yok: ürün sizindir ve bizsiz çalışır. Tek başınıza taşımak istemezseniz Full Maintenance devralır — her ay barındırma, destek ve geliştirme günleri dahil, aylık [[1490]]’dan başlayan fiyatlarla, 6 aylık taahhütle.',
        },
        linkLabel: {
          fr: 'Voir Full Maintenance',
          en: 'See Full Maintenance',
          es: 'Ver Full Maintenance',
          de: 'Full Maintenance ansehen',
          it: 'Scopri Full Maintenance',
          pt: 'Ver Full Maintenance',
          nl: 'Bekijk Full Maintenance',
          ar: 'اطّلع على Full Maintenance',
          pl: 'Zobacz Full Maintenance',
          tr: 'Full Maintenance’ı inceleyin',
        },
        linkRoute: 'maintenance',
      },
      {
        q: {
          fr: 'Qu’est-ce qui est inclus dans le prix ?',
          en: 'What’s included in the price?',
          es: '¿Qué incluye el precio?',
          de: 'Was ist im Preis enthalten?',
          it: 'Cosa è incluso nel prezzo?',
          pt: 'O que está incluído no preço?',
          nl: 'Wat zit er in de prijs?',
          ar: 'ما المشمول في السعر؟',
          pl: 'Co jest wliczone w cenę?',
          tr: 'Fiyata neler dahil?',
        },
        a: {
          fr: 'Tout ce qui est listé plus haut. Le site vitrine est livré sur notre gabarit avec vos textes et vos couleurs, l’hébergement sur nos outils habituels, et les deux semaines sont des correctifs — une évolution reste une prestation à part. Les seuls coûts qui restent chez vous sont ceux de vos propres comptes, à votre nom.',
          en: 'Everything listed above. The showcase site ships on our template with your copy and colours, the hosting on the tools we always use, and the two weeks are fixes — an evolution remains separate work. The only costs left with you are your own accounts, in your name.',
          es: 'Todo lo listado arriba. El sitio escaparate se entrega sobre nuestra plantilla con tus textos y colores, el alojamiento sobre las herramientas que usamos siempre, y las dos semanas son correcciones: una evolución sigue siendo un trabajo aparte. Los únicos costes que quedan de tu lado son los de tus propias cuentas, a tu nombre.',
          de: 'Alles, was oben aufgeführt ist. Die Website wird auf unserer Vorlage mit deinen Texten und Farben geliefert, das Hosting auf unseren bewährten Tools, und die zwei Wochen sind Korrekturen — eine Weiterentwicklung bleibt ein separater Auftrag. Die einzigen Kosten, die bei dir bleiben, sind die deiner eigenen Konten, auf deinen Namen.',
          it: 'Tutto ciò che è elencato sopra. Il sito vetrina viene consegnato sul nostro modello con i tuoi testi e i tuoi colori, l’hosting sui nostri strumenti abituali, e le due settimane sono di correzioni — un’evoluzione resta una prestazione a parte. Gli unici costi che restano a te sono quelli dei tuoi account, a tuo nome.',
          pt: 'Tudo o que está listado acima. O site de apresentação é entregue no nosso modelo com os seus textos e as suas cores, o alojamento nas nossas ferramentas habituais, e as duas semanas são de correções — uma evolução continua a ser um serviço à parte. Os únicos custos que ficam do seu lado são os das suas próprias contas, em seu nome.',
          nl: 'Alles wat hierboven staat. De website wordt geleverd op ons sjabloon met jouw teksten en kleuren, de hosting op de tools die we altijd gebruiken, en de twee weken zijn correcties — een uitbreiding blijft een aparte opdracht. De enige kosten die bij jou blijven, zijn die van je eigen accounts, op jouw naam.',
          ar: 'كل ما هو مذكور أعلاه. الموقع التعريفي يُسلَّم على قالبنا بنصوصك وألوانك، والاستضافة على أدواتنا المعتادة، والأسبوعان مخصَّصان للتصحيحات — أما أي تطوير جديد فيبقى خدمة منفصلة. التكاليف الوحيدة التي تبقى عليك هي تكاليف حساباتك الخاصة، باسمك.',
          pl: 'Wszystko, co wymieniono powyżej. Strona produktu powstaje na naszym szablonie, z Twoimi tekstami i kolorami, hosting na narzędziach, których zawsze używamy, a dwa tygodnie to poprawki — rozbudowa to osobna usługa. Jedyne koszty po Twojej stronie to Twoje własne konta, na Twoje nazwisko.',
          tr: 'Yukarıda listelenen her şey. Tanıtım sitesi sizin metinleriniz ve renklerinizle şablonumuz üzerinde teslim edilir, barındırma her zaman kullandığımız araçlarla yapılır ve iki hafta düzeltme içindir — yeni bir geliştirme ayrı bir hizmettir. Sizde kalan tek maliyet, sizin adınıza açılmış kendi hesaplarınızın maliyetidir.',
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
          de: 'Sind Zahlungen, Analytics, E-Mails und die visuelle Identität enthalten?',
          it: 'Pagamenti, analytics, e-mail e identità visiva sono inclusi?',
          pt: 'Pagamentos, analytics, e-mails e identidade visual estão incluídos?',
          nl: 'Zijn betalingen, analytics, e-mails en de visuele identiteit inbegrepen?',
          ar: 'هل الدفع والتحليلات والرسائل الإلكترونية والهوية البصرية مشمولة؟',
          pl: 'Płatności, analityka, e-maile i identyfikacja wizualna są w cenie?',
          tr: 'Ödeme, analitik, e-postalar ve görsel kimlik dahil mi?',
        },
        a: {
          fr: 'Oui, évidemment. C’est ce que veut dire livrer un produit en production.',
          en: 'Yes, obviously. That is what shipping a product to production means.',
          es: 'Sí, evidentemente. Eso es lo que significa entregar un producto en producción.',
          de: 'Ja, selbstverständlich. Genau das heißt es, ein Produkt in Produktion zu liefern.',
          it: 'Sì, ovviamente. È questo che significa consegnare un prodotto in produzione.',
          pt: 'Sim, evidentemente. É isso que significa entregar um produto em produção.',
          nl: 'Ja, vanzelfsprekend. Dat is wat het betekent om een product in productie op te leveren.',
          ar: 'نعم، بالطبع. هذا هو معنى تسليم منتج في الإنتاج.',
          pl: 'Tak, oczywiście. Właśnie to znaczy dostarczyć produkt na produkcję.',
          tr: 'Evet, elbette. Bir ürünü canlıya teslim etmek zaten bu demek.',
        },
      },
      {
        /*
         * The stack, answered as a FEAR and not as a curiosity — which is why it
         * is a FAQ line and no longer a section. A founder buying a V1 is not
         * buying Next.js; what they are buying is the certainty of not being
         * locked in, so that is what this answers.
         */
        q: {
          fr: 'Je serai prisonnier de votre techno ?',
          en: 'Will I be locked into your technology?',
          es: '¿Quedaré atrapado en vuestra tecnología?',
          de: 'Bin ich dann an eure Technik gebunden?',
          it: 'Resterò prigioniero della vostra tecnologia?',
          pt: 'Vou ficar preso à vossa tecnologia?',
          nl: 'Zit ik dan vast aan jullie technologie?',
          ar: 'هل سأبقى مقيّدًا بتقنيتكم؟',
          pl: 'Czy będę uzależniony od Waszej technologii?',
          tr: 'Teknolojinize bağımlı mı kalırım?',
        },
        a: {
          fr: 'Non. Technologies standards et très répandues, code livré, aucune licence Khufu : n’importe quel développeur peut reprendre le produit après nous.',
          en: 'No. Standard, widely used technologies, the code delivered, no Khufu licence: any developer can pick the product up after us.',
          es: 'No. Tecnologías estándar y muy extendidas, el código entregado, sin licencia Khufu: cualquier desarrollador puede retomar el producto después de nosotros.',
          de: 'Nein. Standardtechnologien, weit verbreitet, Code übergeben, keine Khufu-Lizenz: Jeder Entwickler kann das Produkt nach uns übernehmen.',
          it: 'No. Tecnologie standard e molto diffuse, codice consegnato, nessuna licenza Khufu: qualsiasi sviluppatore può riprendere il prodotto dopo di noi.',
          pt: 'Não. Tecnologias standard e muito difundidas, código entregue, nenhuma licença Khufu: qualquer programador pode retomar o produto depois de nós.',
          nl: 'Nee. Standaard en wijdverspreide technologieën, de code wordt overgedragen, geen Khufu-licentie: elke developer kan het product na ons overnemen.',
          ar: 'لا. تقنيات معيارية وواسعة الانتشار، والشيفرة مُسلَّمة لك، ولا ترخيص من Khufu: أي مطوّر يستطيع استلام المنتج بعدنا.',
          pl: 'Nie. Standardowe, powszechnie używane technologie, przekazany kod, żadnej licencji Khufu: każdy programista może przejąć produkt po nas.',
          tr: 'Hayır. Standart ve yaygın teknolojiler, teslim edilen kod, hiçbir Khufu lisansı yok: bizden sonra herhangi bir geliştirici ürünü devralabilir.',
        },
      },
      {
        q: {
          fr: 'Le délai inclut-il la validation des stores ?',
          en: 'Do the 7 days include app store review?',
          es: '¿El plazo incluye la validación de las stores?',
          de: 'Ist die Prüfung durch die Stores in den 7 Tagen enthalten?',
          it: 'I tempi includono l’approvazione degli store?',
          pt: 'O prazo inclui a aprovação das lojas?',
          nl: 'Valt de goedkeuring door de stores binnen de 7 dagen?',
          ar: 'هل تشمل المدة مراجعة المتاجر؟',
          pl: 'Czy termin obejmuje weryfikację w sklepach?',
          tr: 'Süreye mağaza onayı dahil mi?',
        },
        a: {
          fr: 'Non. Les sept jours couvrent la conception, le développement et la mise en production. La validation App Store et Google Play s’ajoute et ne dépend pas de nous : on soumet au jour 7 et on gère les retours.',
          en: 'No. The seven days cover design, development and going live. App Store and Google Play review comes on top and is outside our control: we submit on day 7 and handle the feedback.',
          es: 'No. Los siete días cubren el diseño, el desarrollo y la puesta en producción. La validación de App Store y Google Play se suma y no depende de nosotros: enviamos el día 7 y gestionamos las respuestas.',
          de: 'Nein. Die sieben Tage umfassen Konzeption, Entwicklung und Go-live. Die Prüfung durch App Store und Google Play kommt hinzu und liegt nicht in unserer Hand: Wir reichen an Tag 7 ein und kümmern uns um die Rückmeldungen.',
          it: 'No. I sette giorni coprono progettazione, sviluppo e messa in produzione. L’approvazione di App Store e Google Play si aggiunge e non dipende da noi: inviamo il giorno 7 e gestiamo i riscontri.',
          pt: 'Não. Os sete dias cobrem a conceção, o desenvolvimento e a entrada em produção. A aprovação da App Store e do Google Play acresce e não depende de nós: submetemos no dia 7 e tratamos das respostas.',
          nl: 'Nee. De zeven dagen omvatten het ontwerp, de ontwikkeling en de livegang. De goedkeuring door App Store en Google Play komt daarbovenop en hangt niet van ons af: we dienen in op dag 7 en handelen de feedback af.',
          ar: 'لا. الأيام السبعة تغطي التصميم والتطوير والإطلاق في الإنتاج. مراجعة App Store وGoogle Play تُضاف إليها ولا تتوقف علينا: نرسل التطبيق في اليوم 7 ونتولّى الردود.',
          pl: 'Nie. Siedem dni obejmuje projektowanie, rozwój i uruchomienie na produkcji. Weryfikacja w App Store i Google Play dochodzi do tego i nie zależy od nas: zgłaszamy aplikację w dniu 7 i obsługujemy uwagi.',
          tr: 'Hayır. Yedi gün; tasarımı, geliştirmeyi ve canlıya almayı kapsar. App Store ve Google Play onayı buna eklenir ve bize bağlı değildir: 7. gün başvuruyu yapar, gelen geri bildirimleri biz yönetiriz.',
        },
      },
      {
        q: {
          fr: 'Et si je veux changer le périmètre pendant la semaine ?',
          en: 'What if I want to change the scope during the week?',
          es: '¿Y si quiero cambiar el alcance durante la semana?',
          de: 'Und wenn ich den Umfang während der Woche ändern will?',
          it: 'E se voglio cambiare l’ambito durante la settimana?',
          pt: 'E se eu quiser mudar o âmbito durante a semana?',
          nl: 'En als ik de scope tijdens de week wil aanpassen?',
          ar: 'وماذا لو أردت تغيير النطاق خلال الأسبوع؟',
          pl: 'A jeśli zechcę zmienić zakres w trakcie tygodnia?',
          tr: 'Hafta içinde kapsamı değiştirmek istersem?',
        },
        /* ⛔ IT USED TO READ « Ce qui entre compense ce qui sort » (cmu26co1). That
           is a swap rule, and a swap rule tells a buyer that asking for one thing
           costs them another — the amputation reflex again, planted at the exact
           moment they are imagining working with us. What replaces it is what the
           contract actually says (art. 4.1/4.2, and the contract card says it
           too): an addition is priced and only happens on a yes. The signed
           product still lands on Sunday either way, which is the reassurance the
           old sentence was reaching for without giving anything up. */
        a: {
          fr: 'Vous le demandez, on le chiffre sous un jour, et c’est fait si vous validez. Le produit défini au départ, lui, est en ligne dimanche soir quoi qu’il arrive.',
          en: 'You ask, we price it within a day, and it happens if you say yes. The product defined at the start is live on Sunday evening either way.',
          es: 'Tú lo pides, lo presupuestamos en un día y se hace si lo validas. El producto definido al principio está en línea el domingo por la noche pase lo que pase.',
          de: 'Du fragst an, wir bepreisen es innerhalb eines Tages, und es wird umgesetzt, wenn du zustimmst. Das anfangs definierte Produkt ist am Sonntagabend so oder so online.',
          it: 'Lo chiedi, lo quotiamo entro un giorno, e si fa se approvi. Il prodotto definito all’inizio, invece, è online domenica sera in ogni caso.',
          pt: 'Pede, orçamentamos em menos de um dia, e fica feito se validar. O produto definido à partida, esse, está online no domingo à noite aconteça o que acontecer.',
          nl: 'Je vraagt het, wij prijzen het binnen een dag, en het gebeurt als jij akkoord gaat. Het product dat aan het begin is vastgelegd, staat zondagavond hoe dan ook online.',
          ar: 'تطلبه، فنحدّد تكلفته خلال يوم، ويُنفَّذ إذا وافقت. أما المنتج المحدَّد منذ البداية فيكون على الإنترنت مساء الأحد في كل الأحوال.',
          pl: 'Zgłaszasz to, wyceniamy w ciągu dnia, a realizujemy, jeśli zaakceptujesz. Produkt zdefiniowany na starcie i tak jest online w niedzielę wieczorem.',
          tr: 'Siz talep edersiniz, biz bir gün içinde fiyatlandırırız ve onaylarsanız yapılır. Başta tanımlanan ürün ise her durumda pazar akşamı yayındadır.',
        },
      },
      {
        /*
         * ⛔ THIS QUESTION USED TO BE « Qui écrit le code ? » AND IT IS GONE
         * (decision cmu1u21i). Adrien: « tu dis "écrit le code", donc faux ».
         * What replaced it keeps the half that is true and reassuring — one
         * person to talk to, who decides — without the word "solo" and without
         * claiming anybody types it by hand.
         */
        q: {
          fr: 'Qui est mon interlocuteur ?',
          en: 'Who am I dealing with?',
          es: '¿Quién es mi interlocutor?',
          de: 'Wer ist mein Ansprechpartner?',
          it: 'Chi è il mio interlocutore?',
          pt: 'Quem é o meu interlocutor?',
          nl: 'Wie is mijn aanspreekpunt?',
          ar: 'من هو محاوري؟',
          pl: 'Kto jest moją osobą kontaktową?',
          tr: 'Muhatabım kim olacak?',
        },
        a: {
          fr: 'Adrien De Coster, le founder de Khufu, du premier échange à la passation. Une seule personne à qui parler, et qui décide : pas de chef de projet qui relaie, pas d’interlocuteur qui change en cours de semaine.',
          en: 'Adrien De Coster, Khufu’s founder, from the first exchange to the handover. One person to talk to, who decides: no project manager relaying, no change of contact mid-week.',
          es: 'Adrien De Coster, el founder de Khufu, desde el primer contacto hasta el traspaso. Una sola persona con quien hablar, y que decide: sin jefe de proyecto que hace de intermediario, sin cambios de interlocutor a mitad de semana.',
          de: 'Adrien De Coster, der Gründer von Khufu, vom ersten Gespräch bis zur Übergabe. Eine einzige Person, mit der du sprichst und die entscheidet: kein Projektmanager dazwischen, kein Wechsel des Ansprechpartners mitten in der Woche.',
          it: 'Adrien De Coster, il founder di Khufu, dal primo scambio al passaggio di consegne. Una sola persona con cui parlare, e che decide: nessun project manager che fa da tramite, nessun cambio di interlocutore a metà settimana.',
          pt: 'Adrien De Coster, o founder da Khufu, do primeiro contacto à passagem de testemunho. Uma única pessoa com quem falar, e que decide: nenhum gestor de projeto como intermediário, nenhuma troca de interlocutor a meio da semana.',
          nl: 'Adrien De Coster, de oprichter van Khufu, van het eerste gesprek tot de overdracht. Eén persoon om mee te praten, en die beslist: geen projectmanager als tussenpersoon, geen wisseling van aanspreekpunt halverwege de week.',
          ar: 'Adrien De Coster، مؤسس Khufu، من أول تواصل حتى التسليم. شخص واحد تتحدث إليه، وهو صاحب القرار: لا مدير مشروع ينقل الرسائل، ولا تغيير للمحاور في منتصف الأسبوع.',
          pl: 'Adrien De Coster, założyciel Khufu, od pierwszej rozmowy po przekazanie. Jedna osoba do rozmowy, która decyduje: bez kierownika projektu jako pośrednika, bez zmiany osoby kontaktowej w połowie tygodnia.',
          tr: 'Khufu’nun kurucusu Adrien De Coster, ilk görüşmeden devir teslime kadar. Konuşacağınız ve karar veren tek bir kişi: aracılık eden bir proje yöneticisi yok, hafta ortasında değişen bir muhatap yok.',
        },
      },
      {
        q: {
          fr: 'Où est basée l’agence ?',
          en: 'Where is the agency based?',
          es: '¿Dónde está la agencia?',
          de: 'Wo sitzt die Agentur?',
          it: 'Dove ha sede l’agenzia?',
          pt: 'Onde está sediada a agência?',
          nl: 'Waar is het bureau gevestigd?',
          ar: 'أين مقر الوكالة؟',
          pl: 'Gdzie ma siedzibę agencja?',
          tr: 'Ajans nerede?',
        },
        a: {
          fr: 'Khufu FZCO, enregistrée à Dubaï (licence 5214). 100 % remote, en français, anglais et espagnol.',
          en: 'Khufu FZCO, registered in Dubai (licence 5214). Fully remote, in French, English and Spanish.',
          es: 'Khufu FZCO, registrada en Dubái (licencia 5214). 100 % remoto, en francés, inglés y español.',
          de: 'Khufu FZCO, eingetragen in Dubai (Lizenz 5214). 100 % remote, auf Französisch, Englisch und Spanisch.',
          it: 'Khufu FZCO, registrata a Dubai (licenza 5214). 100% da remoto, in francese, inglese e spagnolo.',
          pt: 'Khufu FZCO, registada no Dubai (licença 5214). 100% remoto, em francês, inglês e espanhol.',
          nl: 'Khufu FZCO, geregistreerd in Dubai (licentie 5214). 100% remote, in het Frans, Engels en Spaans.',
          ar: 'Khufu FZCO، مسجّلة في دبي (الرخصة 5214). نعمل عن بُعد بالكامل، بالفرنسية والإنجليزية والإسبانية.',
          pl: 'Khufu FZCO, zarejestrowana w Dubaju (licencja 5214). W 100% zdalnie, po francusku, angielsku i hiszpańsku.',
          tr: 'Khufu FZCO, Dubai’de kayıtlı (lisans 5214). Tamamen uzaktan; Fransızca, İngilizce ve İspanyolca.',
        },
      },
    ],
  },

  contact: {
    title: {
      fr: 'Parlons de votre projet.',
      en: 'Let’s talk about your project.',
      es: 'Hablemos de tu proyecto.',
      de: 'Lass uns über dein Projekt sprechen.',
      it: 'Parliamo del tuo progetto.',
      pt: 'Vamos falar do seu projeto.',
      nl: 'Laten we het over je project hebben.',
      ar: 'لنتحدث عن مشروعك.',
      pl: 'Porozmawiajmy o Twoim projekcie.',
      tr: 'Projenizi konuşalım.',
    },
    weekNote: {
      fr: 'Semaine du {date}',
      en: 'Week of {date}',
      es: 'Semana del {date}',
      de: 'Woche vom {date}',
      it: 'Settimana del {date}',
      pt: 'Semana de {date}',
      nl: 'Week van {date}',
      ar: 'أسبوع {date}',
      pl: 'Tydzień od {date}',
      tr: '{date} haftası',
    },
    bookLabel: {
      fr: 'Réserver un appel de 30 min',
      en: 'Book a 30-min call',
      es: 'Reservar una llamada de 30 min',
      de: '30-Min.-Gespräch buchen',
      it: 'Prenota una call di 30 min',
      pt: 'Reservar uma chamada de 30 min',
      nl: 'Boek een gesprek van 30 min',
      ar: 'احجز مكالمة لمدة 30 دقيقة',
      pl: 'Umów rozmowę (30 min)',
      tr: '30 dakikalık görüşme ayırtın',
    },
    /* ⚠️ EXACT, and read off the real appointment schedule (« Sprint V1 —
       30 min », Google Meet generated automatically, Mon→Fri 10:00–14:00 UTC,
       30-minute slots, minimum 24h notice). ⛔ Do not write a duration or a
       channel the schedule does not offer: a button that contradicts the booking
       page is the one discrepancy a prospect notices immediately. ⛔ And do not
       restate the opening hours or the 24h notice here — Google's page already
       shows both, and duplicating them adds copy that can only go stale. */
    bookNote: {
      fr: 'Visio de 30 minutes. On cadre votre projet, vous repartez avec une date.',
      en: 'A 30-minute video call. We scope your project, you leave with a date.',
      es: 'Videollamada de 30 minutos. Encuadramos tu proyecto y te vas con una fecha.',
      de: 'Videocall von 30 Minuten. Wir stecken dein Projekt ab, du gehst mit einem Termin raus.',
      it: 'Videochiamata di 30 minuti. Inquadriamo il tuo progetto e ne esci con una data.',
      pt: 'Videochamada de 30 minutos. Enquadramos o seu projeto e sai com uma data.',
      nl: 'Een videogesprek van 30 minuten. We bakenen je project af en je gaat weg met een datum.',
      ar: 'مكالمة فيديو لمدة 30 دقيقة. نؤطّر مشروعك، وتخرج بتاريخ محدد.',
      pl: '30-minutowa wideorozmowa. Ustalamy zakres projektu, a Ty wychodzisz z konkretną datą.',
      tr: '30 dakikalık görüntülü görüşme. Projenizin kapsamını belirleriz, siz de bir tarihle ayrılırsınız.',
    },
    /* ⚠️ THIS LINE REPLACED « 7 j/7, 10 h – 14 h UTC · La page de réservation est
       en anglais. », which Adrien read in production and called useless
       (2026-09-15). He is right about the first half and it was worse than
       useless: opening hours published in UTC ask the reader to do arithmetic
       before they know whether to care, and the answer for a good part of the
       world is "the middle of my night", which is a reason to leave rather than
       a reason to book. The real availability is on the booking page, in the
       visitor's own clock.
       ⛔ WHAT IT KEEPS, AND THAT HALF IS NOT NEGOTIABLE: the page is in English.
       That is the one thing a visitor cannot discover before landing on it, it
       is the reason the modal step is allowed to exist at all, and dropping it
       drops a French, Turkish or Arabic reader onto a scheduler they did not
       expect. ⛔ And do not restate the 24h notice, the 14-day horizon or the
       hours: Google enforces and displays all three, in the visitor's timezone,
       and a second copy here can only drift. */
    bookingNote: {
      fr: 'Créneaux de 30 min, affichés dans votre fuseau horaire. La page de réservation est en anglais.',
      en: '30-minute slots, shown in your own timezone. The booking page is in English.',
      es: 'Franjas de 30 min, en tu zona horaria. La página de reserva está en inglés.',
      de: '30-Minuten-Slots, in deiner Zeitzone angezeigt. Die Buchungsseite ist auf Englisch.',
      it: 'Fasce da 30 min, mostrate nel tuo fuso orario. La pagina di prenotazione è in inglese.',
      pt: 'Horários de 30 min, apresentados no seu fuso horário. A página de reserva está em inglês.',
      nl: 'Slots van 30 min, getoond in jouw tijdzone. De boekingspagina is in het Engels.',
      ar: 'مواعيد مدتها 30 دقيقة، معروضة بتوقيتك المحلي. صفحة الحجز باللغة الإنجليزية.',
      pl: 'Terminy po 30 min, wyświetlane w Twojej strefie czasowej. Strona rezerwacji jest po angielsku.',
      tr: '30 dakikalık aralıklar, kendi saat diliminizde gösterilir. Rezervasyon sayfası İngilizcedir.',
    },
    whatsappLabel: {
      fr: 'Ou écrivez-nous sur WhatsApp',
      en: 'Or message us on WhatsApp',
      es: 'O escríbenos por WhatsApp',
      de: 'Oder schreib uns auf WhatsApp',
      it: 'Oppure scrivici su WhatsApp',
      pt: 'Ou escreva-nos pelo WhatsApp',
      nl: 'Of stuur ons een bericht op WhatsApp',
      ar: 'أو راسلنا عبر WhatsApp',
      pl: 'Albo napisz do nas na WhatsAppie',
      tr: 'Ya da bize WhatsApp’tan yazın',
    },
    close: {
      fr: 'Fermer',
      en: 'Close',
      es: 'Cerrar',
      de: 'Schließen',
      it: 'Chiudi',
      pt: 'Fechar',
      nl: 'Sluiten',
      ar: 'إغلاق',
      pl: 'Zamknij',
      tr: 'Kapat',
    },
    fallback: {
      fr: 'Prendre rendez-vous',
      en: 'Book a call',
      es: 'Reservar una cita',
      de: 'Termin vereinbaren',
      it: 'Prendi appuntamento',
      pt: 'Marcar uma reunião',
      nl: 'Afspraak maken',
      ar: 'احجز موعدًا',
      pl: 'Umów spotkanie',
      tr: 'Görüşme ayırtın',
    },
    /* ⚠️ THE SUMMARY ASKS ABOUT THEIR CALENDAR, NOT ABOUT THEIR WILLINGNESS.
       « Pas disponible sur ces créneaux ? » names the real obstacle — 10 h – 14 h
       UTC is the middle of the night for a good part of the world — where « pas
       encore prêt ? » would suggest they are hesitating about the offer, which
       is the last thing to suggest to a buyer at this price.
       ⛔ Never « Laissez-nous vos coordonnées » in any of the ten locales: that
       is the sentence that makes this a form again. */
    callback: {
      link: {
        fr: 'Pas disponible sur ces créneaux ?',
        en: 'None of these times work?',
        es: '¿No te va bien ninguno de esos horarios?',
        de: 'Keiner dieser Termine passt?',
        it: 'Nessuno di questi orari ti va bene?',
        pt: 'Nenhum destes horários lhe serve?',
        nl: 'Past geen van deze tijden?',
        ar: 'هذه المواعيد لا تناسبك؟',
        pl: 'Żaden z tych terminów Ci nie pasuje?',
        tr: 'Bu saatler size uymuyor mu?',
      },
      /* ⛔ The direction of the promise is load-bearing: WE send, THEY receive.
         And « votre fuseau » is the concrete reason this exists — do not trade it
         for a vaguer « on vous recontacte ». */
      body: {
        fr: 'Laissez votre e-mail : je vous envoie des créneaux adaptés à votre fuseau horaire, sous 24 h.',
        en: 'Leave your e-mail and I will send you times that fit your own timezone, within 24 hours.',
        es: 'Déjanos tu correo y te enviamos horarios que encajen con tu zona horaria, en menos de 24 h.',
        de: 'Hinterlass deine E-Mail: Ich schicke dir innerhalb von 24 h Termine, die zu deiner Zeitzone passen.',
        it: 'Lascia la tua e-mail: ti invio orari adatti al tuo fuso orario, entro 24 h.',
        pt: 'Deixe o seu e-mail: envio-lhe horários adaptados ao seu fuso horário, em 24 h.',
        nl: 'Laat je e-mail achter: ik stuur je binnen 24 u tijden die in jouw tijdzone passen.',
        ar: 'اترك بريدك الإلكتروني: أرسل إليك مواعيد تناسب منطقتك الزمنية، خلال 24 ساعة.',
        pl: 'Zostaw swój e-mail: w ciągu 24 h wyślę Ci terminy dopasowane do Twojej strefy czasowej.',
        tr: 'E-postanızı bırakın: 24 saat içinde size kendi saat diliminize uygun saatler göndereyim.',
      },
      placeholder: {
        fr: 'vous@entreprise.com',
        en: 'you@company.com',
        es: 'tu@empresa.com',
        de: 'du@firma.com',
        it: 'tu@azienda.com',
        pt: 'voce@empresa.com',
        nl: 'jij@bedrijf.com',
        ar: 'you@company.com',
        pl: 'ty@firma.pl',
        tr: 'siz@sirketiniz.com',
      },
      /* ⚠️ The button says what the visitor GETS, never « Envoyer » — a verb that
         describes their effort instead of our answer. */
      submit: {
        fr: 'Recevoir des créneaux',
        en: 'Get available times',
        es: 'Recibir horarios',
        de: 'Termine erhalten',
        it: 'Ricevi gli orari',
        pt: 'Receber horários',
        nl: 'Ontvang beschikbare tijden',
        ar: 'استلم المواعيد المتاحة',
        pl: 'Otrzymaj terminy',
        tr: 'Uygun saatleri alın',
      },
      sending: {
        fr: 'Envoi…',
        en: 'Sending…',
        es: 'Enviando…',
        de: 'Wird gesendet…',
        it: 'Invio…',
        pt: 'A enviar…',
        nl: 'Verzenden…',
        ar: 'جارٍ الإرسال…',
        pl: 'Wysyłanie…',
        tr: 'Gönderiliyor…',
      },
      done: {
        fr: 'C’est noté. Vous avez ma réponse sous 24 h.',
        en: 'Noted. You will have my reply within 24 hours.',
        es: 'Anotado. Tendrás mi respuesta en menos de 24 h.',
        de: 'Notiert. Du hast meine Antwort innerhalb von 24 h.',
        it: 'Ricevuto. Avrai la mia risposta entro 24 h.',
        pt: 'Registado. Terá a minha resposta em 24 h.',
        nl: 'Genoteerd. Je hebt mijn antwoord binnen 24 u.',
        ar: 'تم التسجيل. ستصلك إجابتي خلال 24 ساعة.',
        pl: 'Zapisane. Odpowiem w ciągu 24 h.',
        tr: 'Not edildi. Yanıtım 24 saat içinde sizde.',
      },
      invalid: {
        fr: 'Cette adresse e-mail ne semble pas valide.',
        en: 'That e-mail address does not look valid.',
        es: 'Ese correo no parece válido.',
        de: 'Diese E-Mail-Adresse scheint ungültig zu sein.',
        it: 'Questo indirizzo e-mail non sembra valido.',
        pt: 'Este endereço de e-mail não parece válido.',
        nl: 'Dit e-mailadres lijkt niet geldig.',
        ar: 'يبدو أن عنوان البريد الإلكتروني هذا غير صالح.',
        pl: 'Ten adres e-mail wygląda na nieprawidłowy.',
        tr: 'Bu e-posta adresi geçerli görünmüyor.',
      },
      failed: {
        fr: 'L’envoi n’a pas abouti. Écrivez-nous directement :',
        en: 'That did not go through. Write to us directly:',
        es: 'No se ha podido enviar. Escríbenos directamente:',
        de: 'Das hat nicht geklappt. Schreib uns direkt:',
        it: 'L’invio non è andato a buon fine. Scrivici direttamente:',
        pt: 'O envio não foi concluído. Escreva-nos diretamente:',
        nl: 'Verzenden is mislukt. Schrijf ons rechtstreeks:',
        ar: 'تعذّر الإرسال. راسلنا مباشرة:',
        pl: 'Nie udało się wysłać. Napisz do nas bezpośrednio:',
        tr: 'Gönderilemedi. Bize doğrudan yazın:',
      },
      /* ⚠️ True as written, and it has to stay true: the address goes to an inbox
         to be answered, not to a list. There is no CRM and no database behind
         this field (see api/sprint-callback/route.ts). */
      privacy: {
        fr: 'Votre adresse sert à cette réponse, à rien d’autre.',
        en: 'Your address is used for that reply and nothing else.',
        es: 'Tu dirección se usa para esa respuesta y nada más.',
        de: 'Deine Adresse wird nur für diese Antwort verwendet.',
        it: 'Il tuo indirizzo serve solo per questa risposta.',
        pt: 'O seu endereço serve apenas para esta resposta.',
        nl: 'Je adres wordt alleen voor dit antwoord gebruikt.',
        ar: 'يُستخدم عنوانك لهذا الرد فقط.',
        pl: 'Twój adres posłuży wyłącznie do tej odpowiedzi.',
        tr: 'Adresiniz yalnızca bu yanıt için kullanılır.',
      },
      fieldLabel: {
        fr: 'Votre adresse e-mail',
        en: 'Your e-mail address',
        es: 'Tu dirección de correo',
        de: 'Deine E-Mail-Adresse',
        it: 'Il tuo indirizzo e-mail',
        pt: 'O seu endereço de e-mail',
        nl: 'Je e-mailadres',
        ar: 'عنوان بريدك الإلكتروني',
        pl: 'Twój adres e-mail',
        tr: 'E-posta adresiniz',
      },
      mailLabel: {
        fr: 'Écrivez-nous :',
        en: 'Write to us:',
        es: 'Escríbenos:',
        de: 'Schreib uns:',
        it: 'Scrivici:',
        pt: 'Escreva-nos:',
        nl: 'Schrijf ons:',
        ar: 'راسلنا:',
        pl: 'Napisz do nas:',
        tr: 'Bize yazın:',
      },
    },
  },

  closing: {
    title: {
      fr: 'Trente minutes pour savoir si c’est faisable.',
      en: 'Thirty minutes to find out whether it is doable.',
      es: 'Treinta minutos para saber si es viable.',
      de: 'Dreißig Minuten, um zu wissen, ob es machbar ist.',
      it: 'Trenta minuti per capire se è fattibile.',
      pt: 'Trinta minutos para saber se é viável.',
      nl: 'Dertig minuten om te weten of het haalbaar is.',
      ar: 'ثلاثون دقيقة لتعرف إن كان مشروعك قابلًا للتنفيذ.',
      pl: 'Trzydzieści minut, by sprawdzić, czy to wykonalne.',
      tr: 'Yapılabilir olup olmadığını öğrenmek için otuz dakika.',
    },
    body: {
      fr: 'On regarde votre projet ensemble et vous repartez avec un périmètre et une date.',
      en: 'We look at your project together and you leave with a scope and a date.',
      es: 'Miramos tu proyecto juntos y te vas con un alcance y una fecha.',
      de: 'Wir schauen uns dein Projekt gemeinsam an, und du gehst mit Umfang und Termin raus.',
      it: 'Guardiamo insieme il tuo progetto e ne esci con un ambito e una data.',
      pt: 'Analisamos o seu projeto em conjunto e sai com um âmbito e uma data.',
      nl: 'We bekijken je project samen en je gaat weg met een scope en een datum.',
      ar: 'ننظر في مشروعك معًا، وتخرج بنطاق وتاريخ.',
      pl: 'Razem przyglądamy się Twojemu projektowi, a Ty wychodzisz z zakresem i datą.',
      tr: 'Projenize birlikte bakarız, siz de bir kapsam ve bir tarihle ayrılırsınız.',
    },
  },

  midCta: {
    products: {
      fr: 'Parler de mon produit',
      en: 'Talk about my product',
      es: 'Hablar de mi producto',
      de: 'Über mein Produkt sprechen',
      it: 'Parlare del mio prodotto',
      pt: 'Falar do meu produto',
      nl: 'Over mijn product praten',
      ar: 'تحدّث عن منتجي',
      pl: 'Chcę omówić mój produkt',
      tr: 'Ürünümü konuşalım',
    },
    day7: {
      fr: 'Cadrer mon projet',
      en: 'Scope my project',
      es: 'Encuadrar mi proyecto',
      de: 'Mein Projekt abstecken',
      it: 'Inquadrare il mio progetto',
      pt: 'Enquadrar o meu projeto',
      nl: 'Mijn project afbakenen',
      ar: 'أطّر مشروعي',
      pl: 'Chcę ustalić zakres projektu',
      tr: 'Projemin kapsamını belirleyelim',
    },
    floating: {
      fr: 'Réserver un appel',
      en: 'Book a call',
      es: 'Reservar una llamada',
      de: 'Gespräch buchen',
      it: 'Prenota una call',
      pt: 'Reservar uma chamada',
      nl: 'Boek een gesprek',
      ar: 'احجز مكالمة',
      pl: 'Umów rozmowę',
      tr: 'Görüşme ayırtın',
    },
  },

  finalCta: {
    title: {
      fr: 'Dans sept jours, votre produit peut être en ligne.',
      en: 'Seven days from now, your product can be live.',
      es: 'Dentro de siete días, tu producto puede estar en línea.',
      de: 'In sieben Tagen kann dein Produkt online sein.',
      it: 'Tra sette giorni, il tuo prodotto può essere online.',
      pt: 'Daqui a sete dias, o seu produto pode estar online.',
      nl: 'Over zeven dagen kan je product online zijn.',
      ar: 'خلال سبعة أيام، يمكن أن يكون منتجك على الإنترنت.',
      pl: 'Za siedem dni Twój produkt może być online.',
      tr: 'Yedi gün sonra ürününüz yayında olabilir.',
    },
  },
}

export const sprintLanding: SprintLanding = content
