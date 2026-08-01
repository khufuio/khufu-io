/** Surfaces allowed to claim credit for a guide visit — see `guidePath()`. */
const KNOWN_SOURCES = ['blog-article', 'blog-index', 'footer'] as const

/**
 * Read the `?src=` tag our own links carry onto a guide landing page.
 *
 * Kept separate from `utm_*` on purpose: the UTM tags belong to the paid
 * campaign that acquired the visitor and must survive a detour through the blog.
 * This answers a different question — which internal surface sent them — and an
 * ad click simply has no value here.
 *
 * Allow-listed rather than sanitised: the value ends up as an analytics property
 * and in a notification email, and only our own links ever set it, so anything
 * unrecognised is noise (or someone else's) and gets dropped.
 */
export function readInternalSource(): string | undefined {
  if (typeof window === 'undefined') return undefined
  const value = new URLSearchParams(window.location.search).get('src')?.trim()
  return (KNOWN_SOURCES as readonly string[]).includes(value ?? '') ? value! : undefined
}

export function isKnownInternalSource(value: string): boolean {
  return (KNOWN_SOURCES as readonly string[]).includes(value)
}
