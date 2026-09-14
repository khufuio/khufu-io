/**
 * The two frames every capture on this page sits in: a browser, and a phone.
 *
 * They are the page's one visual object, reused by the hero and by every product
 * card — which is what makes five unrelated products read as one system rather
 * than as a patchwork: same chrome, same radius, same shadow, same ratio.
 *
 * ⚠️ PERFORMANCE. Plain <picture> rather than next/image on purpose: the files
 * are pre-encoded (AVIF, WebP fallback) and served straight from `public/`, so
 * the hero's LCP image needs no optimizer round-trip. `width` and `height` are
 * always set and the box carries its aspect ratio, so nothing here can shift
 * layout (this page measures CLS 0).
 *
 * ⛔ The captures are of products that are ONLINE, taken on 2026-09-14. Replace a
 * file only with a fresh capture of the same live surface — never a mockup,
 * never a design that is not published. And nothing next to them may state or
 * imply a build duration (see the note on `sprintProducts` in sprintLanding.ts).
 */
export const SHOT_WIDTH = 1200
export const SHOT_HEIGHT = 650

/** Phones are captured at one size too, for the same reason. */
export const PHONE_WIDTH = 560
export const PHONE_HEIGHT = 1180

export function ProductShot({
  src,
  alt,
  domain,
  tone = 'light',
  priority = false,
  sizes,
  className,
  children,
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
  /**
   * Drawn over the capture, inside the frame. The hero's build sequence is the
   * only user. ⚠️ Whatever goes here must never take the image out of the layout
   * or hide it with `opacity: 0` — the image is the LCP element.
   */
  children?: React.ReactNode
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
      <div className="sprint-shot-canvas">
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
        {children}
      </div>
    </figure>
  )
}

/**
 * A phone, for the products that ship a companion app.
 *
 * It exists because of khufu HQ decision cmu1qkaz: a product card showing only a
 * browser reads as "they make websites". The bezel is CSS, so a mobile capture
 * costs exactly one image and no more requests than a browser one.
 *
 * ⚠️ The captures are REAL app screens — from each product's own repo, or from
 * the screens it publishes on the stores. Never a mockup, never a render.
 */
export function PhoneShot({
  src,
  alt,
  tone = 'light',
  sizes,
  className,
}: {
  src: string
  alt: string
  tone?: 'light' | 'dark'
  sizes?: string
  className?: string
}) {
  return (
    <figure className={`sprint-phone ${tone === 'dark' ? 'sprint-phone--dark' : ''} ${className ?? ''}`}>
      <span aria-hidden className="sprint-phone-notch" />
      <picture>
        <source srcSet={`${src}.avif`} type="image/avif" />
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.webp`}
          alt={alt}
          width={PHONE_WIDTH}
          height={PHONE_HEIGHT}
          sizes={sizes}
          loading="lazy"
          decoding="async"
          className="sprint-phone-img"
        />
      </picture>
    </figure>
  )
}
