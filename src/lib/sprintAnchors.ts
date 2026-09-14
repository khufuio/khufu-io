/**
 * In-page anchors of the Sprint V1 landing.
 *
 * ⛔ THIS MODULE CARRIES NO DIRECTIVE, AND THAT IS THE ENTIRE POINT. These
 * constants are read by SERVER components (the page sets the `id`, the hero
 * builds an `href`) and by CLIENT ones (the CTA builds the same `href`), so they
 * cannot live in a `'use client'` file.
 *
 * ⚠️ THE BUG THIS FIXES REACHED PRODUCTION, so it is worth naming precisely.
 * `SPRINT_FORM_ANCHOR` used to be exported from sprintCta.tsx, which is a client
 * module. A server component importing a value from a client module does not get
 * the value — it gets React's client-reference proxy, and stringifying that proxy
 * into an attribute yields its throwing stub as text. The result, live on
 * khufu.io on 2026-09-15, was
 * `…/sprint-v1#function(){throw Error("Attempted to call SPRINT_FORM_ANCHOR()
 * from the server but SPRINT_FORM_ANCHOR is on the client…")}` in the address bar
 * — and, because the page's own `id` was built from the same proxy, EVERY CTA on
 * the page pointed at an anchor that did not exist. It failed silently: no build
 * error, no runtime error, just buttons that scrolled nowhere.
 *
 * ⛔ SO: never re-export these from a `'use client'` file, and never put a
 * directive at the top of this one. `scripts/checkSprintHtml.ts` fails the build
 * recipe if the rendered HTML ever carries the proxy stub again.
 */

/** The conversion form at the foot of the page — the no-JS fallback target of every CTA. */
export const SPRINT_FORM_ANCHOR = 'start'

/** The day 0 → day 7 run, linkable from a post, an ad or an email. */
export const SPRINT_TIMELINE_ANCHOR = 'deroule'

/** Where the seven days come from — the system diagram (decision cmu1u21i). */
export const SPRINT_SYSTEM_ANCHOR = 'systeme'

/** What is in the box on day 7. */
export const SPRINT_DAY7_ANCHOR = 'livraison'
