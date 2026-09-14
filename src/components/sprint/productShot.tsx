/**
 * A real product capture, lightly staged in a browser frame.
 *
 * The one visual object of the page, reused by the hero and by every product
 * card — which is what makes four different products read as one system rather
 * than as a patchwork: same chrome, same radius, same shadow, same ratio.
 *
 * ⚠️ PERFORMANCE. Plain <picture> rather than next/image on purpose: the files
 * are pre-encoded (AVIF ~18 kB, WebP fallback) and served straight from
 * `public/`, so the hero's LCP image needs no optimizer round-trip. `width` and
 * `height` are always set and the box carries its aspect ratio, so nothing here
 * can shift layout (this page measures CLS 0).
 *
 * ⛔ The captures are of sites that are ONLINE, taken on 2026-09-14. Replace a
 * file only with a fresh capture of the same live site — never a mockup, never a
 * design that is not published. And nothing next to them may state or imply a
 * build duration (see the note on `sprintProducts` in sprintLanding.ts).
 */
export const SHOT_WIDTH = 1200
export const SHOT_HEIGHT = 650

export function ProductShot({
  src,
  alt,
  domain,
  tone = 'light',
  priority = false,
  sizes,
  className,
}: {
  /** Path without extension — `/images/sprint/clokizi`. */
  src: string
  alt: string
  /** Shown in the frame's address bar. */
  domain: string
  /** `dark` inverts the chrome so the frame sits on the dark products section. */
  tone?: 'light' | 'dark'
  /** The hero's capture only: eager + high priority, it is the LCP element. */
  priority?: boolean
  sizes?: string
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <figure
      className={`sprint-shot ${dark ? 'sprint-shot--dark' : ''} ${className ?? ''}`}
      data-tone={tone}
    >
      <div className="sprint-shot-bar" aria-hidden>
        <span className="sprint-shot-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="sprint-shot-url">{domain}</span>
      </div>
      <picture>
        <source srcSet={`${src}.avif`} type="image/avif" />
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.webp`}
          alt={alt}
          width={SHOT_WIDTH}
          height={SHOT_HEIGHT}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          className="sprint-shot-img"
        />
      </picture>
    </figure>
  )
}
