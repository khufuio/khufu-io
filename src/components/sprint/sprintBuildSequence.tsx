/**
 * The hero's visual: a WHOLE SYSTEM being built, wired up, and put into
 * production. It is the first thing an ad visitor judges, and it is the page's
 * only chance to say « ce n'est pas une page, c'est un produit complet » before
 * a word is read.
 *
 * ⛔ IT NO LONGER ENDS ON A SCREENSHOT, AND THAT IS THE POINT (2026-09-15,
 * pass 5). Until now the overlay dissolved after six seconds into a real capture
 * of Traqio. Adrien: « l'écran de produit à la fin n'aide pas à comprendre le
 * process ». He is right, and the diagnosis is worth keeping because it is easy
 * to undo by accident: the sequence spent five seconds making an ARGUMENT — this
 * gets built, then this, then it goes live — and then threw it away to show one
 * screen of one product, which is an ILLUSTRATION. An illustration cannot close a
 * demonstration; it can only interrupt it. The last frame now holds the finished
 * system, lit and live, which is the conclusion of the same sentence the first
 * five seconds were speaking. ⛔ Do not put a product capture back at the end.
 *
 * ⛔ AND THERE IS NO <img> IN THE HERO AT ALL ANY MORE. The capture was the LCP
 * element, so removing it moves LCP onto the `<h1>` — text, which paints sooner
 * than any image can and costs no bytes. `traqio-hero*` (including the 720px
 * variant pass 4 added for exactly this element) is therefore unused and was
 * deleted with it; the products section still carries its own Traqio capture.
 * ⚠️ The consequence to respect: `.sprint-build-canvas` now owns the frame's
 * aspect ratio in CSS, because there is no image to imply it. Remove that and
 * the hero collapses to nothing and then jumps — the one CLS the page has never
 * had.
 *
 * ⚠️ WHAT IT SHOWS, AND WHY THERE IS SO MUCH OF IT. The previous version drew a
 * platform, a phone and a site, and Adrien called it « trop pauvre » with the
 * brief attached: « peuple-la de ce qui compose vraiment un produit livré —
 * infra, paiements, services tiers… ». So the sequence now has three movements:
 *
 *   1. THE SURFACES — the web platform lays itself out, the companion app rises
 *      beside it, the showcase site lands under it. What the buyer SEES.
 *   2. THE SYSTEM — eight tiles light up underneath: accounts, data, payments,
 *      e-mails, connected services, hosting, deployment, monitoring. What the
 *      buyer does not see, has to have, and never thinks to ask for. This is the
 *      movement that turns "a page in a week" into "a product in a week", and it
 *      is the reason the whole sequence exists (decision cmu1u21i: show the
 *      system, never the person).
 *   3. IT GOES LIVE — the wiring runs across the tiles, everything turns green,
 *      the address bar lights. The demonstration closes on a working system.
 *
 * ⛔ NOT ONE WORD TO READ, and the eight tiles are the reason this rule now pays
 * for itself twice. Adrien's bound is « lisible en 5 à 7 secondes, sans texte à
 * lire », and a second rule (cmu1qk2g) forbids developer vocabulary in
 * commercial copy — « paiements », never « webhook Stripe ». Icons satisfy both
 * by construction: there is no jargon to leak because there is no text, and no
 * ten-locale cost for a component that would otherwise carry eight labels. ⛔ Do
 * not label the tiles. The accessible description on the frame is what carries
 * their meaning to a screen reader, and it is the only place it belongs.
 *
 * ⚠️ IT IS AN ILLUSTRATION AND MUST NEVER BE DRESSED AS A RECORDING. No caption
 * dating it, no client, no « sprint de septembre 2026 », and — since the capture
 * went — no real product domain in the address bar either: the URL is a drawn
 * pill with no text, precisely so that a diagram never signs itself with a
 * product's name. It draws the SHAPE of a week.
 *
 * ⚠️ PERFORMANCE, AND THE BUDGET IS HARD (khufu HQ decision cmu093fb — mobile LCP
 * under 2.5 s, CLS under 0.1):
 *   - Zero images, zero requests, zero libraries. The whole thing is CSS plus
 *     eight inline icons that ship with the markup.
 *   - It animates `opacity`, `transform` and colour only — never a geometry
 *     property — so it cannot move layout and cannot shift anything around it.
 *   - The frame reserves its box with `aspect-ratio` before the first frame, so
 *     the hero occupies its final height on paint.
 *   - It plays ONCE and holds on the finished system. It never loops: a hero
 *     that keeps moving competes with the button next to it.
 *   - `prefers-reduced-motion: reduce` gets the FINISHED state, not an empty
 *     frame — the default styles are the end state and the animations are added
 *     only under `no-preference`. That is also what a no-JS visitor sees, since
 *     none of this is scripted.
 *
 * ⛔ NO SKELETON AT THE END, AND NO LOREM IPSUM ANYWHERE (2026-09-15, pass 6).
 * Adrien liked the system tiles (« top ») and caught what sat above them: the
 * platform, the app and the site ended as grey placeholder bars — the sequence
 * closed on a product that LOOKS LIKE IT IS LOADING, the opposite of « in seven
 * days you have a product in production ». He ruled out filler text himself, and
 * his reason is the one to keep: « on va croire que c'est mon site à moi qui est
 * pas fini ». Fake Latin on a sales page reads as OUR unfinished page.
 * So the surfaces now end on LANGUAGE-NEUTRAL INTERFACE: figures that count up
 * and stop on their value, a curve that finishes drawing, a progress ring that
 * closes, status lights, avatars, a rating, a filled button, and a list row that
 * slides in at go-live. Movement that says « it is alive », not « it is loading »,
 * and all of it converges on the same beat the wiring turns green.
 *   - ⚠️ ZERO i18n KEYS. Digits, `+` and `%` read the same in ten locales, and the
 *     stage is forced `dir="ltr"` so /ar does not flip `+18%` into `%18+` — it is
 *     a drawing of an interface, not a sentence.
 *   - ⛔ DECOR FIGURES, NEVER OUR NUMBERS. 284, +18 %, 72 % mean nothing and must
 *     keep meaning nothing: no 7, no 6, no price, no count that could be read as
 *     Khufu's clients, products or days. Change them freely; never make them true.
 *   - ⛔ NO IDENTIFIABLE PRODUCT. Not Traqio's three-source cards, not a client's
 *     dashboard: a generic app bar, three tiles, one curve.
 *   - The counters are CSS: a registered `@property` integer animated into a
 *     `counter()`. A browser without `@property` simply shows the final value.
 *
 * Everything the sequence needs lives in globals.css under `.sprint-build-*`.
 */

/** The seven days, as the segments of the rail that fills. No text, on purpose. */
const STEPS = 7

/**
 * What a delivered product is actually made of, in the order it assembles.
 *
 * ⚠️ THE LIST IS THE ARGUMENT, so it is ordered the way a founder discovers the
 * work rather than the way an engineer would group it: the things they asked for
 * first, the things they find out they needed last. ⛔ Eight is not arbitrary —
 * the row is a single grid line at every width, and a ninth tile makes each one
 * too narrow to read on a 390px screen. Replacing one is fine; adding one is a
 * layout decision, not a content one.
 */
const SYSTEM: { key: string; icon: React.ReactNode }[] = [
  // Accounts, sign-in, permissions.
  { key: 'accounts', icon: <><circle cx="8" cy="12" r="3.2" /><path d="M11.2 12H21M18.5 12v2.8M15.5 12v2" /></> },
  // The data itself.
  {
    key: 'data',
    icon: (
      <>
        <ellipse cx="12" cy="6.2" rx="6.8" ry="2.7" />
        <path d="M5.2 6.2v11.6c0 1.5 3.05 2.7 6.8 2.7s6.8-1.2 6.8-2.7V6.2" />
        <path d="M5.2 12c0 1.5 3.05 2.7 6.8 2.7s6.8-1.2 6.8-2.7" />
      </>
    ),
  },
  // Getting paid.
  { key: 'payments', icon: <><rect x="2.6" y="5.6" width="18.8" height="12.8" rx="2.4" /><path d="M2.6 10.2h18.8" /></> },
  // The e-mails the product sends on its own.
  { key: 'emails', icon: <><rect x="2.6" y="5.2" width="18.8" height="13.6" rx="2.4" /><path d="m3.8 7.2 8.2 5.8 8.2-5.8" /></> },
  // The outside services it talks to.
  {
    key: 'services',
    icon: (
      <>
        <path d="M10.2 14.2a4 4 0 0 1 0-5.66l2-2a4 4 0 0 1 5.66 5.66l-1 1" />
        <path d="M13.8 9.8a4 4 0 0 1 0 5.66l-2 2a4 4 0 0 1-5.66-5.66l1-1" />
      </>
    ),
  },
  // Where it runs.
  { key: 'hosting', icon: <path d="M7.2 18.4h10.3a3.5 3.5 0 0 0 .3-6.98 5.5 5.5 0 0 0-10.5-1.4 4.05 4.05 0 0 0-.1 8.38Z" /> },
  // Shipping a change without taking it down.
  {
    key: 'deploy',
    icon: <><path d="M12 15.8V6.6m0 0-3.4 3.4M12 6.6l3.4 3.4" /><path d="M4.8 15.4v3a2.2 2.2 0 0 0 2.2 2.2h10a2.2 2.2 0 0 0 2.2-2.2v-3" /></>,
  },
  // Knowing it is still up.
  { key: 'monitoring', icon: <path d="M2.6 12h4.1l2.5-6.2 4 12.4 2.5-6.2h5.7" /> },
]

export function SprintBuildSequence({ label }: { label: string }) {
  return (
    <div className="sprint-build">
      {/*
       * ⚠️ THE FRAME IS THE PAGE'S SHARED CHROME, reused by class rather than by
       * component. `ProductShot` is built around an <img> and is the object every
       * product card below uses; the hero has no image any more, so bending that
       * component into an image-less mode would put six live cards at risk for
       * one caller. Borrowing `sprint-shot*` instead keeps the radius, border and
       * shadow literally identical — they are the same rules — with no shared
       * code to break. ⛔ If the frame's look changes, it changes in one place and
       * both still follow.
       *
       * `role="img"` + the label is what replaces the capture's alt text: the
       * sequence is now the only thing in the hero, so a screen reader that gets
       * nothing here gets nothing at all from the first screen.
       */}
      <figure className="sprint-shot sprint-shot--hero" role="img" aria-label={label}>
        <div className="sprint-shot-bar" aria-hidden>
          <span className="sprint-shot-dots">
            <i />
            <i />
            <i />
          </span>
          {/* The address, drawn and wordless — it fills as the product comes up
              and lights green when it is live. ⛔ Never a real domain here. */}
          <span className="sprint-build-url">
            <span className="sprint-build-url-fill" />
          </span>
        </div>

        <div className="sprint-shot-canvas sprint-build-canvas" aria-hidden>
          <span className="sprint-build-stage" dir="ltr">
            {/* Movement 1 — the surfaces. The web platform lays itself out…
                ⚠️ AND IT FILLS WITH A REAL INTERFACE, not grey bars (see
                « NO SKELETON » in the header): an app bar, three figures that
                count up to their value, a curve that finishes drawing. */}
            <span className="sprint-build-rail">
              <span className="sprint-build-logo" />
              <span className="sprint-build-rail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15l1.5-2ZM10 20.5a2 2 0 0 0 4 0" />
                </svg>
              </span>
              <span className="sprint-build-avatar" />
            </span>

            <span className="sprint-build-block sprint-build-block--1">
              <span className="sprint-build-kpi-dot" />
              <span className="sprint-build-num sprint-build-num--1" />
              <svg className="sprint-build-spark" viewBox="0 0 40 12" fill="none" preserveAspectRatio="none">
                <path d="M1 10 8 8l6 2 7-5 6 2 5-4 6-2" pathLength={1} />
              </svg>
            </span>
            <span className="sprint-build-block sprint-build-block--2">
              <span className="sprint-build-kpi-dot sprint-build-kpi-dot--up" />
              <span className="sprint-build-num sprint-build-num--2" />
              <span className="sprint-build-bars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} />
                ))}
              </span>
            </span>
            <span className="sprint-build-block sprint-build-block--3">
              <svg className="sprint-build-ring" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="14" className="sprint-build-ring-track" />
                <circle cx="18" cy="18" r="14" pathLength={100} className="sprint-build-ring-arc" />
              </svg>
              <span className="sprint-build-num sprint-build-num--3" />
            </span>

            <span className="sprint-build-block sprint-build-block--4">
              <svg className="sprint-build-chart" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
                <path className="sprint-build-chart-area" d="M0 34 20 30 40 32 60 24 80 26 100 18 120 20 140 12 160 14 180 7 200 4V40H0Z" />
                <path className="sprint-build-chart-line" d="M0 34 20 30 40 32 60 24 80 26 100 18 120 20 140 12 160 14 180 7 200 4" pathLength={1} />
              </svg>
            </span>

            {/* …the companion app arrives beside it — a list whose last row slides
                in at go-live, the « it is being used » beat… */}
            <span className="sprint-build-phone">
              <span className="sprint-build-phone-bar" />
              <span className="sprint-build-phone-body">
                {Array.from({ length: 3 }, (_, i) => (
                  <span key={i} className={`sprint-build-row sprint-build-row--${i + 1}`}>
                    <i className="sprint-build-row-avatar" />
                    <i className="sprint-build-row-status" />
                  </span>
                ))}
              </span>
            </span>

            {/* …and the showcase site lands under it: a rating and a real button.
                Three surfaces, one product (decision cmu1qkaz, the same claim the
                examples section makes). */}
            <span className="sprint-build-site">
              <svg className="sprint-build-stars" viewBox="0 0 60 12" fill="currentColor">
                {Array.from({ length: 5 }, (_, i) => (
                  <path key={i} transform={`translate(${i * 12} 0)`} d="m6 .8 1.6 3.4 3.7.4-2.8 2.5.8 3.7L6 8.9 2.7 10.8l.8-3.7L.7 4.6l3.7-.4Z" />
                ))}
              </svg>
              <span className="sprint-build-cta" />
            </span>

            {/* Movement 2 — the system underneath. Eight things a delivered
                product has and a delivered page does not. */}
            <span className="sprint-build-system">
              {SYSTEM.map((part, i) => (
                <span key={part.key} className={`sprint-build-tile sprint-build-tile--${i + 1}`}>
                  <svg
                    viewBox="0 0 24 24"
                    className="sprint-build-tile-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {part.icon}
                  </svg>
                  <span className="sprint-build-tile-dot" />
                </span>
              ))}
            </span>

            {/* Movement 3 — it goes live: the wiring runs across the system and
                lands green. ⛔ `scaleX`, never `width` — a width animation here
                would be a layout animation inside the hero. */}
            <span className="sprint-build-wire">
              <span className="sprint-build-wire-fill" />
            </span>
          </span>
        </div>
      </figure>

      {/* The seven days, drawn. One segment lights per day — the whole step is a
          CSS animation on a static list, so the markup ships finished and there
          is not a single string to translate. */}
      <span aria-hidden className="sprint-build-steps">
        {Array.from({ length: STEPS }, (_, i) => (
          <span key={i} className={`sprint-build-step sprint-build-step--${i + 1}`} />
        ))}
      </span>
    </div>
  )
}
