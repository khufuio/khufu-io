import { ProductShot } from '@/components/sprint/productShot'

/**
 * The hero's visual: a WHOLE PRODUCT being built, then put online.
 *
 * ⛔ WHAT IT SHOWS, AND WHY IT CHANGED ON 2026-09-15. The first version of this
 * sequence drew one screen filling in, and Adrien validated the idea while
 * rejecting what it showed: « beaucoup mieux ! c'est grave ça dans l'idée » — then
 * « Clokizi c'est le + pertinent ? il manque pas l'app et le showcase ? et aussi
 * montrer le côté infra, CD… là je sais pas si vraiment en soi on comprend ». He
 * is right: the offer is not "a screen", it is an ENSEMBLE delivered and put in
 * production, and a wireframe that fills in shows neither the scope nor the
 * go-live.
 *
 * So the sequence has two movements, and both are the argument:
 *   1. THE SCOPE ARRIVES — the web platform lays itself out, the companion app
 *      rises next to it, the showcase site lands under it. Three surfaces, one
 *      product (decision cmu1qkaz, the same claim the examples section makes).
 *   2. IT GOES LIVE — the infrastructure assembles, the pipeline runs and turns
 *      green, the domain lights up. That is the beat that separates "they design
 *      things" from "it is in production on Sunday".
 *
 * ⛔ NOT ONE WORD TO READ. Adrien's bound: « lisible en 5 à 7 secondes, sans texte
 * à lire ». The day counter that used to sit on top is GONE — it was text, in ten
 * locales, on the one object whose job is to be understood without reading. The
 * seven days are now a seven-segment rail that fills, which says the same thing
 * in a glance and costs no copy. Do not put a label back on it.
 *
 * ⚠️ IT IS AN ILLUSTRATION AND MUST NEVER BE DRESSED AS A RECORDING. No caption
 * dating it, no client, no "sprint of September 2026" — that would be a fabricated
 * record of work, which is a different object from a diagram. It draws the SHAPE
 * of a week and ends on a real capture of one of our own products.
 *
 * ⚠️ PERFORMANCE, AND THE BUDGET IS HARD (khufu HQ decision cmu093fb — mobile LCP
 * under 2.5 s, CLS under 0.1):
 *   - The LCP element is still the STATIC capture: a pre-encoded AVIF with its
 *     width and height set, eager and high priority, painted on the first frame.
 *     It is never hidden behind `opacity: 0` and never waits on the animation.
 *   - The overlay is a sibling drawn entirely in CSS on top of it: no library, no
 *     extra request, no image of its own. It animates `opacity` and `transform`
 *     only, so it cannot move layout and cannot shift the capture underneath.
 *   - The sequence plays ONCE and ends on the real capture. It never loops: a
 *     hero that keeps moving competes with the button next to it.
 *   - `prefers-reduced-motion: reduce` removes the overlay outright, which leaves
 *     the finished product on screen. That is the correct still, not a degraded
 *     one.
 *
 * Everything the sequence needs lives in globals.css under `.sprint-build-*`.
 */

/** The seven days, as the segments of the rail that fills. No text, on purpose. */
const STEPS = 7

export function SprintBuildSequence({
  shot,
}: {
  shot: { src: string; alt: string; domain: string }
}) {
  return (
    <div className="sprint-build">
      <ProductShot
        src={shot.src}
        alt={shot.alt}
        domain={shot.domain}
        priority
        sizes="(min-width: 1024px) 46vw, 92vw"
        /* ⚠️ THE ONLY CAPTURE ON THE PAGE WITH A PHONE-SIZED VARIANT, because it
           is the only one that is the LCP element. Lighthouse measured a phone
           pulling the full 1200 px file to paint 390 px of screen; the 720 px
           file is a third of the bytes. See `smallWidth` in productShot.tsx. */
        smallWidth={720}
        className="sprint-shot--hero"
      >
        {/* The sequence. `aria-hidden` throughout: it says nothing the alt text
            of the capture underneath does not already say, and a screen reader
            walking a wireframe would get noise. */}
        <span aria-hidden className="sprint-build-stage">
          <span className="sprint-build-sheet" />

          {/* Movement 1 — the scope. The web platform lays itself out… */}
          <span className="sprint-build-rail" />
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`sprint-build-block sprint-build-block--${i + 1}`} />
          ))}

          {/* …the companion app arrives beside it… */}
          <span className="sprint-build-phone">
            <span className="sprint-build-phone-bar" />
            <span className="sprint-build-phone-body" />
          </span>

          {/* …and the showcase site lands under it. Three surfaces, one product. */}
          <span className="sprint-build-site">
            <span className="sprint-build-site-bar" />
            <span className="sprint-build-site-body" />
          </span>

          {/* Movement 2 — it goes live: the infrastructure assembles, the pipeline
              runs green, the domain lights up. */}
          <span className="sprint-build-deploy">
            <span className="sprint-build-node sprint-build-node--1" />
            <span className="sprint-build-node sprint-build-node--2" />
            <span className="sprint-build-node sprint-build-node--3" />
            <span className="sprint-build-pipe">
              <span className="sprint-build-pipe-fill" />
            </span>
          </span>
          <span className="sprint-build-domain" />
        </span>
      </ProductShot>

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
