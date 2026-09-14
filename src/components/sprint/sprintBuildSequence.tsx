import { ProductShot } from '@/components/sprint/productShot'

/**
 * The hero's visual: a product being BUILT, day 1 → day 7.
 *
 * ⛔ WHY IT REPLACED A PRODUCT CAPTURE. Adrien, 2026-09-14: « pourquoi en image
 * tu as mis un screen de Clokizi ? tu trouves ça pertinent que ce soit la
 * première image ? on pourrait pas mettre genre un timelapse de day 1 à day 7
 * sur le build d'un produit ? un truc sympa et qui fait direct comprendre
 * l'offre en mode on fast build un truc de fou ». He is right about what the
 * first screen has to do: the offer is not "we have products", it is SPEED OF
 * CONSTRUCTION, and a finished screenshot shows the one thing every agency can
 * also show.
 *
 * ⚠️ IT IS AN ILLUSTRATION OF THE SEQUENCE AND MUST NEVER BE DRESSED AS A
 * RECORDING. No caption dating it, no client, no "sprint of September 2026" —
 * that would be a fabricated record of work, which is a different object from a
 * diagram. What it draws is the SHAPE of a week: a wireframe that fills in,
 * screens that arrive, and a real capture of one of our own products as the
 * day-7 state.
 *
 * ⚠️ PERFORMANCE, AND THE BUDGET IS A HARD ONE (khufu HQ decision cmu093fb —
 * mobile LCP under 2.5 s, CLS under 0.1).
 *   - The LCP element is still the STATIC capture: a pre-encoded AVIF with its
 *     width and height set, eager and high priority, painted on the first frame.
 *     It is never hidden behind `opacity: 0` and never waits on the animation.
 *   - The overlay that plays the sequence is a sibling drawn entirely in CSS on
 *     top of it: no library, no extra request, no image of its own. It animates
 *     `opacity` and `transform` only, so it cannot move layout and cannot shift
 *     the capture underneath it.
 *   - The sequence starts AFTER a delay and plays once, ending on the real
 *     capture. It never loops: a hero that keeps moving competes with the CTA.
 *   - `prefers-reduced-motion: reduce` removes the overlay outright, which
 *     leaves the day-7 state — the finished product — on screen. That is the
 *     correct still, not a degraded one.
 *
 * Everything the sequence needs lives in globals.css under `.sprint-build-*`.
 */

/** The seven steps, as the wireframe blocks that appear on each one. */
const STEPS = 7

export function SprintBuildSequence({
  shot,
  dayLabel,
}: {
  shot: { src: string; alt: string; domain: string }
  /** Carries `{n}` — "Jour {n}". A label on the sequence, never a caption on a record. */
  dayLabel: string
}) {
  return (
    <div className="sprint-build">
      <ProductShot
        src={shot.src}
        alt={shot.alt}
        domain={shot.domain}
        priority
        sizes="(min-width: 1024px) 46vw, 92vw"
        className="sprint-shot--hero"
      >
        {/* The sequence. `aria-hidden` throughout: it says nothing the alt text
            of the capture underneath does not already say, and a screen reader
            walking a wireframe would get noise. */}
        <span aria-hidden className="sprint-build-stage">
          <span className="sprint-build-sheet" />
          <span className="sprint-build-rail" />
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className={`sprint-build-block sprint-build-block--${i + 1}`} />
          ))}
          <span className="sprint-build-phone">
            <span className="sprint-build-phone-bar" />
            <span className="sprint-build-phone-body" />
          </span>
        </span>
      </ProductShot>

      {/* The day counter. Seven stacked labels, one visible at a time — the whole
          step is a CSS `opacity` window, so the markup ships finished and the
          text is right in all ten locales without a single client-side string. */}
      <span aria-hidden className="sprint-build-days">
        {Array.from({ length: STEPS }, (_, i) => (
          <span key={i} className={`sprint-build-day sprint-build-day--${i + 1}`}>
            {dayLabel.replace('{n}', String(i + 1))}
          </span>
        ))}
      </span>
    </div>
  )
}
