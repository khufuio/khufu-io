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
 * Traqio's product is still a prelaunch (decision cmu0fqj7) — which is exactly
 * why its non-public surfaces are declared in `soonSurfaces` and labelled as
 * such, rather than sitting silently next to the public ones.
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
  /** Surfaces that are PUBLIC. Must match what the product really ships today. */
  surfaces: readonly SprintSurface[]
  /**
   * Surfaces that are BUILT BUT NOT PUBLIC YET. Rendered with their own label so
   * the card can show the real scope of a prelaunch without claiming it is out
   * (Traqio — decision cmu0fqj7). ⛔ Never move one of these into `surfaces` to
   * make a card look fuller.
   */
  soonSurfaces?: readonly SprintSurface[]
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
    // ⚠️ The site is public; the platform, the SDKs and the packages are built
    // and not open yet. Declared, never dressed as live (decision cmu0fqj7).
    surfaces: ['site'],
    soonSurfaces: ['web', 'sdk', 'packages'],
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
    /**
     * Suffix on a surface that EXISTS BUT IS NOT PUBLIC — Traqio's platform, its
     * SDKs and its packages. It is what lets the card show the real scope of a
     * prelaunch without claiming it is out (decision cmu0fqj7). ⛔ Never drop the
     * suffix to make a card look fuller.
     */
    soonSuffix: Leaf<T>
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
     * ⚠️ Authored in fr/en/es and falling back to French like every other string
     * in this file: the modal it opens and the page under it are in French in
     * the seven other locales, so a German button there would be the odd one out.
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
    subtitle: {
      fr: 'Un SaaS ou une app mobile, en production. Pas une maquette, pas une démo.',
      en: 'A SaaS or a mobile app, in production. Not a mockup, not a demo.',
      es: 'Un SaaS o una app móvil, en producción. Ni maqueta ni demo.',
    },
    ctaLabel: {
      fr: 'Réserver mon appel de 30 min',
      en: 'Book my 30-min call',
      es: 'Reservar mi llamada de 30 min',
    },
    ctaNote: {
      fr: 'Périmètre et date confirmés sous 24 h.',
      en: 'Scope and date confirmed within 24h.',
      es: 'Alcance y fecha confirmados en 24 h.',
    },
    slotOpen: { fr: 'Disponible', en: 'Open', es: 'Disponible' },
    slotHeld: { fr: 'Complet', en: 'Full', es: 'Completo' },
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
    },
  },

  system: {
    title: {
      fr: 'D’où vient la vitesse.',
      en: 'Where the speed comes from.',
      es: 'De dónde viene la velocidad.',
    },
    subtitle: {
      fr: 'Le même travail, conduit en parallèle au lieu d’être fait à la suite.',
      en: 'The same work, run in parallel instead of one thing after another.',
      es: 'El mismo trabajo, en paralelo en vez de uno detrás de otro.',
    },
    steps: [
      {
        title: { fr: 'Le projet est découpé', en: 'The project is cut up', es: 'El proyecto se divide' },
        note: {
          fr: 'en chantiers qui n’ont pas besoin de s’attendre',
          en: 'into pieces that don’t have to wait for each other',
          es: 'en partes que no tienen que esperarse entre sí',
        },
      },
      {
        title: {
          fr: 'Plusieurs agents avancent en même temps',
          en: 'Several agents move at once',
          es: 'Varios agentes avanzan a la vez',
        },
        note: {
          fr: 'les écrans, les données, le site, la mise en ligne',
          en: 'the screens, the data, the site, going live',
          es: 'las pantallas, los datos, el sitio, la puesta en línea',
        },
      },
      {
        title: {
          fr: 'Tout est vérifié automatiquement',
          en: 'Everything is checked automatically',
          es: 'Todo se verifica automáticamente',
        },
        note: {
          fr: 'à chaque étape, pas à la fin',
          en: 'at every step, not at the end',
          es: 'en cada paso, no al final',
        },
      },
      {
        title: { fr: 'Un humain tranche', en: 'A human decides', es: 'Una persona decide' },
        note: {
          fr: 'rien ne part en ligne sans validation',
          en: 'nothing goes live without sign-off',
          es: 'nada se publica sin validación',
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
    },
  },

  commitments: {
    title: {
      fr: 'Ce qui est écrit au contrat.',
      en: 'What the contract says.',
      es: 'Lo que dice el contrato.',
    },
    items: [
      /* Annexe 1, art. 9.1. */
      {
        title: {
          fr: 'Tout est chez vous dès le premier jour',
          en: 'Everything is yours from day one',
          es: 'Todo es tuyo desde el primer día',
        },
        note: {
          fr: 'vos comptes, votre domaine, votre code — on y travaille avec des accès que vous donnez',
          en: 'your accounts, your domain, your code — we work through access you grant',
          es: 'tus cuentas, tu dominio, tu código: trabajamos con accesos que tú concedes',
        },
      },
      /* Contrat forfait, art. 1.1 and 1.2 — obligation de résultat on annexe 3. */
      {
        title: {
          fr: 'Ce qui est signé est livré',
          en: 'What is signed is delivered',
          es: 'Lo que se firma se entrega',
        },
        note: {
          fr: 'une obligation de résultat : le produit fait tout ce que décrit la spécification signée ensemble',
          en: 'an obligation of result: the product does everything the specification we signed together describes',
          es: 'una obligación de resultado: el producto hace todo lo que describe la especificación firmada juntos',
        },
      },
      /* Contrat forfait, art. 7.1 and 7.3. */
      {
        title: {
          fr: 'Quatorze jours de garantie',
          en: 'Fourteen days of warranty',
          es: 'Catorce días de garantía',
        },
        note: {
          fr: 'après votre validation, tout écart avec la spécification est corrigé sans frais',
          en: 'once you sign off, anything that departs from the specification is fixed at no cost',
          es: 'tras tu validación, cualquier desviación de la especificación se corrige sin coste',
        },
      },
      /* Contrat forfait, art. 1.3. */
      {
        title: {
          fr: 'Livré avec sa documentation',
          en: 'Delivered with its documentation',
          es: 'Entregado con su documentación',
        },
        note: {
          fr: 'le code sur votre dépôt, la documentation d’exploitation, les composants tiers et leurs licences',
          en: 'the code on your repository, the operations documentation, third-party components and their licences',
          es: 'el código en tu repositorio, la documentación de operación, los componentes de terceros y sus licencias',
        },
      },
      /* Annexe 1, art. 7.2 — and only 7.2: see the ledger on the type. */
      {
        title: {
          fr: 'Votre projet reste confidentiel',
          en: 'Your project stays confidential',
          es: 'Tu proyecto sigue siendo confidencial',
        },
        note: {
          fr: 'pendant le contrat, et cinq ans après sa fin',
          en: 'for the length of the contract, and five years after it ends',
          es: 'durante el contrato, y cinco años después de su fin',
        },
      },
      /* Contrat forfait, art. 7.8.1 and 7.8.2. */
      {
        title: { fr: 'Vous restez libre', en: 'You stay free', es: 'Sigues siendo libre' },
        note: {
          fr: 'après la garantie, rien ne vous engage : la suite avec nous n’existe que si vous la signez',
          en: 'after the warranty nothing binds you: anything further with us exists only if you sign it',
          es: 'tras la garantía nada te compromete: lo que siga con nosotros solo existe si lo firmas',
        },
      },
    ],
  },

  products: {
    title: { fr: 'Quelques exemples.', en: 'A few examples.', es: 'Algunos ejemplos.' },
    liveLabel: { fr: 'En production', en: 'In production', es: 'En producción' },
    soonSuffix: { fr: 'à venir', en: 'coming', es: 'próximamente' },
    surfaces: {
      web: { fr: 'Plateforme web', en: 'Web platform', es: 'Plataforma web' },
      app: { fr: 'App mobile', en: 'Mobile app', es: 'App móvil' },
      site: { fr: 'Site vitrine', en: 'Showcase site', es: 'Sitio escaparate' },
      sdk: { fr: 'SDK', en: 'SDKs', es: 'SDK' },
      packages: { fr: 'Packages', en: 'Packages', es: 'Paquetes' },
    },
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
      fr: 'Le produit {name}, en ligne.',
      en: 'The {name} product, live.',
      es: 'El producto {name}, en línea.',
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
      fr: 'Un seul interlocuteur, qui décide, du premier échange à la passation.',
      en: 'One person to talk to, who decides, from the first exchange to the handover.',
      es: 'Un solo interlocutor, que decide, desde el primer contacto hasta el traspaso.',
    },
  },

  day7: {
    title: {
      fr: 'Ce que vous avez dimanche soir.',
      en: 'What you have on Sunday evening.',
      es: 'Lo que tienes el domingo por la noche.',
    },
    lead: {
      title: {
        fr: 'Votre produit, en production',
        en: 'Your product, in production',
        es: 'Tu producto, en producción',
      },
      note: {
        fr: 'Sur votre nom de domaine pour un produit web, soumis aux stores pour une app. Pas un lien de test.',
        en: 'On your own domain for a web product, submitted to the stores for an app. Not a test link.',
        es: 'En tu dominio si es un producto web, enviado a las stores si es una app. No un enlace de prueba.',
      },
    },
    items: [
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
        /* ⛔ « au contrat » IS GONE (2026-09-15, pass 5). Adrien: « pourquoi "au
           contrat" ? » — and the answer is that it was a credibility crutch, not
           information. Worse, it was worn by ONE tile in a grid of eight: saying
           it here quietly suggests the seven others are goodwill. Everything in
           this grid is contractual, so nothing in it says so. */
        note: { fr: 'après la mise en ligne', en: 'after go-live', es: 'tras la puesta en línea' },
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
        /* Same tic, same cut (pass 5) — but the FACT under it is the whole point
           of the chart, so it is restated as what it means to the buyer instead
           of as where it is written. It also now reads straight against the two
           rows below it, which are explicitly estimates. */
        note: {
          fr: 'Un engagement, pas une estimation.',
          en: 'A commitment, not an estimate.',
          es: 'Un compromiso, no una estimación.',
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
        /*
         * ⛔ THIS ROW REPLACED « Qui construit » / « Le founder » (cmu1u21i). The
         * old one argued the seller's org chart; this one answers the question
         * the buyer is actually asking — am I queued behind other projects?
         */
        aspect: { fr: 'Votre place dans la file', en: 'Your place in the queue', es: 'Tu lugar en la cola' },
        agency: { mark: 'mixed', label: { fr: 'Un projet parmi d’autres', en: 'One project among many', es: 'Un proyecto entre otros' } },
        freelance: { mark: 'mixed', label: { fr: 'En parallèle d’autres clients', en: 'Alongside other clients', es: 'En paralelo a otros clientes' } },
        noCode: { mark: 'mixed', label: { fr: 'Vous, sur votre temps', en: 'You, on your own time', es: 'Tú, en tu tiempo' } },
        khufu: { mark: 'yes', label: { fr: 'La semaine est à vous', en: 'The week is yours', es: 'La semana es tuya' } },
      },
      {
        aspect: { fr: 'Si ça dérape', en: 'If it slips', es: 'Si se desvía' },
        agency: { mark: 'no', label: { fr: 'Avenant', en: 'Amendment', es: 'Adenda' } },
        freelance: { mark: 'no', label: { fr: 'Le planning glisse', en: 'The schedule slides', es: 'La planificación se desplaza' } },
        noCode: { mark: 'no', label: { fr: 'Tout à refaire', en: 'Rebuild it all', es: 'Rehacerlo todo' } },
        khufu: { mark: 'yes', label: { fr: 'C’est pour nous', en: 'It’s on us', es: 'Corre por nuestra cuenta' } },
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
    title: {
      fr: 'Pour qui, et pour qui pas.',
      en: 'Who it’s for, and who it isn’t.',
      es: 'Para quién es, y para quién no.',
    },
    forTitle: { fr: 'C’est vous si', en: 'This is you if', es: 'Eres tú si' },
    forItems: [
      {
        fr: 'Vous avez une date : un salon, une levée, un client qui attend.',
        en: 'You have a date: a trade show, a raise, a client waiting.',
        es: 'Tienes una fecha: una feria, una ronda, un cliente esperando.',
      },
      {
        fr: 'Vous savez déjà ce que le produit doit faire au lancement.',
        en: 'You already know what the product has to do at launch.',
        es: 'Ya sabes qué tiene que hacer el producto al lanzarse.',
      },
      {
        fr: 'Vous préférez un prix affiché à un devis qui se discute.',
        en: 'You’d rather have a posted price than a quote to argue over.',
        es: 'Prefieres un precio publicado a un presupuesto que se negocia.',
      },
      {
        fr: 'Vous répondez à une question dans la journée, pas la semaine suivante.',
        en: 'You answer a question the same day, not the following week.',
        es: 'Respondes una pregunta el mismo día, no la semana siguiente.',
      },
    ],
    notForTitle: { fr: 'Ce n’est pas vous si', en: 'This isn’t you if', es: 'No eres tú si' },
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
      },
      {
        fr: 'Chaque décision passe par un comité, sur plusieurs semaines.',
        en: 'Every decision goes through a committee, over several weeks.',
        es: 'Cada decisión pasa por un comité, durante varias semanas.',
      },
      {
        fr: 'Personne chez vous ne peut trancher pendant la semaine.',
        en: 'Nobody on your side can settle a question during the week.',
        es: 'Nadie de tu lado puede decidir durante la semana.',
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
        },
      },
      {
        q: {
          fr: '« Et si ça dérape en cours de semaine ? »',
          en: '“What if it goes off the rails mid-week?”',
          es: '«¿Y si se tuerce a mitad de semana?»',
        },
        a: {
          fr: 'Le prix est fixe : le dépassement est pour nous. Vous avez un point chaque jour, donc un écart se voit le jour même. Et si le cadrage montre qu’il faut plus de sept jours, on vous le dit avant de commencer.',
          en: 'The price is fixed: the overrun is on us. You get a check-in every day, so a drift shows up the same day. And if scoping shows it needs more than seven days, we tell you before we start.',
          es: 'El precio es fijo: el exceso corre por nuestra cuenta. Tienes un punto cada día, así que una desviación se ve el mismo día. Y si el encuadre muestra que hacen falta más de siete días, te lo decimos antes de empezar.',
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
        },
        a: {
          fr: 'Deux semaines de correctifs suivent la mise en ligne, et le produit tourne déjà sur vos comptes, à votre nom. Ensuite vous n’êtes obligé à rien : il est à vous et tourne sans nous. Si vous préférez ne pas le porter seul, Full Maintenance prend la suite — hébergement, support et jours de développement compris chaque mois, à partir de [[1490]] par mois, engagement 6 mois.',
          en: 'Two weeks of fixes follow the go-live, and the product already runs on your own accounts, in your name. After that you are tied to nothing: it is yours and runs without us. If you would rather not carry it alone, Full Maintenance takes over — hosting, support and development days included every month, from [[1490]] a month, on a 6-month commitment.',
          es: 'Dos semanas de correcciones siguen a la puesta en línea, y el producto ya funciona en tus cuentas, a tu nombre. Después no estás obligado a nada: es tuyo y funciona sin nosotros. Si prefieres no llevarlo solo, Full Maintenance toma el relevo — alojamiento, soporte y días de desarrollo incluidos cada mes, desde [[1490]] al mes, con compromiso de 6 meses.',
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
         * is a FAQ line and no longer a section. A founder buying a V1 is not
         * buying Next.js; what they are buying is the certainty of not being
         * locked in, so that is what this answers.
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
        },
        a: {
          fr: 'Adrien De Coster, le founder de Khufu, du premier échange à la passation. Une seule personne à qui parler, et qui décide : pas de chef de projet qui relaie, pas d’interlocuteur qui change en cours de semaine.',
          en: 'Adrien De Coster, Khufu’s founder, from the first exchange to the handover. One person to talk to, who decides: no project manager relaying, no change of contact mid-week.',
          es: 'Adrien De Coster, el founder de Khufu, desde el primer contacto hasta el traspaso. Una sola persona con quien hablar, y que decide: sin jefe de proyecto que hace de intermediario, sin cambios de interlocutor a mitad de semana.',
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

  contact: {
    title: {
      fr: 'Parlons de votre projet.',
      en: 'Let’s talk about your project.',
      es: 'Hablemos de tu proyecto.',
    },
    weekNote: {
      fr: 'Semaine du {date}',
      en: 'Week of {date}',
      es: 'Semana del {date}',
    },
    bookLabel: {
      fr: 'Réserver un appel de 30 min',
      en: 'Book a 30-min call',
      es: 'Reservar una llamada de 30 min',
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
    },
    whatsappLabel: {
      fr: 'Ou écrivez-nous sur WhatsApp',
      en: 'Or message us on WhatsApp',
      es: 'O escríbenos por WhatsApp',
    },
    close: { fr: 'Fermer', en: 'Close', es: 'Cerrar' },
    fallback: {
      fr: 'Prendre rendez-vous',
      en: 'Book a call',
      es: 'Reservar una cita',
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
      },
      /* ⛔ The direction of the promise is load-bearing: WE send, THEY receive.
         And « votre fuseau » is the concrete reason this exists — do not trade it
         for a vaguer « on vous recontacte ». */
      body: {
        fr: 'Laissez votre e-mail : je vous envoie des créneaux adaptés à votre fuseau horaire, sous 24 h.',
        en: 'Leave your e-mail and I will send you times that fit your own timezone, within 24 hours.',
        es: 'Déjanos tu correo y te enviamos horarios que encajen con tu zona horaria, en menos de 24 h.',
      },
      placeholder: {
        fr: 'vous@entreprise.com',
        en: 'you@company.com',
        es: 'tu@empresa.com',
      },
      /* ⚠️ The button says what the visitor GETS, never « Envoyer » — a verb that
         describes their effort instead of our answer. */
      submit: {
        fr: 'Recevoir des créneaux',
        en: 'Get available times',
        es: 'Recibir horarios',
      },
      sending: { fr: 'Envoi…', en: 'Sending…', es: 'Enviando…' },
      done: {
        fr: 'C’est noté. Vous avez ma réponse sous 24 h.',
        en: 'Noted. You will have my reply within 24 hours.',
        es: 'Anotado. Tendrás mi respuesta en menos de 24 h.',
      },
      invalid: {
        fr: 'Cette adresse e-mail ne semble pas valide.',
        en: 'That e-mail address does not look valid.',
        es: 'Ese correo no parece válido.',
      },
      failed: {
        fr: 'L’envoi n’a pas abouti. Écrivez-nous directement :',
        en: 'That did not go through. Write to us directly:',
        es: 'No se ha podido enviar. Escríbenos directamente:',
      },
      /* ⚠️ True as written, and it has to stay true: the address goes to an inbox
         to be answered, not to a list. There is no CRM and no database behind
         this field (see api/sprint-callback/route.ts). */
      privacy: {
        fr: 'Votre adresse sert à cette réponse, à rien d’autre.',
        en: 'Your address is used for that reply and nothing else.',
        es: 'Tu dirección se usa para esa respuesta y nada más.',
      },
      fieldLabel: {
        fr: 'Votre adresse e-mail',
        en: 'Your e-mail address',
        es: 'Tu dirección de correo',
      },
      mailLabel: {
        fr: 'Écrivez-nous :',
        en: 'Write to us:',
        es: 'Escríbenos:',
      },
    },
  },

  closing: {
    title: {
      fr: 'Trente minutes pour savoir si c’est faisable.',
      en: 'Thirty minutes to find out whether it is doable.',
      es: 'Treinta minutos para saber si es viable.',
    },
    body: {
      fr: 'On regarde votre projet ensemble et vous repartez avec un périmètre et une date.',
      en: 'We look at your project together and you leave with a scope and a date.',
      es: 'Miramos tu proyecto juntos y te vas con un alcance y una fecha.',
    },
  },

  midCta: {
    products: { fr: 'Parler de mon produit', en: 'Talk about my product', es: 'Hablar de mi producto' },
    day7: { fr: 'Cadrer mon projet', en: 'Scope my project', es: 'Encuadrar mi proyecto' },
    floating: { fr: 'Réserver un appel', en: 'Book a call', es: 'Reservar una llamada' },
  },

  finalCta: {
    title: {
      fr: 'Dans sept jours, votre produit peut être en ligne.',
      en: 'Seven days from now, your product can be live.',
      es: 'Dentro de siete días, tu producto puede estar en línea.',
    },
  },
}

/** Fully-populated copy: fr/en/es as authored, every other locale filled from French. */
export const sprintLanding = fillLocaleDeep(content) as unknown as SprintLanding
