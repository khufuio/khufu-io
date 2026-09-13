/**
 * Surfaces of our own site allowed to claim credit for a visit — see
 * `guidePath()` (guides) and `sprintHref()` (the Sprint V1 landing).
 */
const KNOWN_SOURCES = [
  'blog-article',
  'blog-index',
  'footer',
  'header',
  'home-hero',
  'home-offer',
  'home-final',
] as const

export type InternalSource = (typeof KNOWN_SOURCES)[number]

/**
 * Read the `?src=` tag our own links carry onto a landing page.
 *
 * Kept separate from `utm_*` on purpose: the UTM tags belong to the paid
 * campaign that acquired the visitor and must survive a detour through the blog
 * or the home page. This answers a different question — which internal surface
 * sent them — and an ad click simply has no value here.
 *
 * Allow-listed rather than sanitised: the value ends up as an analytics property
 * and in a notification email, and only our own links ever set it, so anything
 * unrecognised is noise (or someone else's) and gets dropped.
 */
export function readInternalSource(): InternalSource | undefined {
  if (typeof window === 'undefined') return undefined
  const value = new URLSearchParams(window.location.search).get('src')?.trim()
  return (KNOWN_SOURCES as readonly string[]).includes(value ?? '')
    ? (value as InternalSource)
    : undefined
}

export function isKnownInternalSource(value: string): value is InternalSource {
  return (KNOWN_SOURCES as readonly string[]).includes(value)
}
