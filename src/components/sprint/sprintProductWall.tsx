import type { Locale } from '@/i18n/config'
import { projects } from '@/content/projects'
import { sprintLanding, sprintProducts, type SprintProduct } from '@/content/sprintLanding'
import { PhoneShot, ProductShot } from '@/components/sprint/productShot'

/**
 * Khufu's own products, shown in FULL SCOPE — and the ONE place this page spends
 * dark.
 *
 * ⛔ WHAT THE SECTION ARGUES (khufu HQ decision cmu1qkaz). Not "we have products"
 * — "we ship WHOLE products". Adrien: « pour Clokizi et HerbaCRM, comme ils ont
 * des apps compagnons, ça vaut le coup de mettre tout non ? voire même plateforme
 * web + app + showcase non ? genre on montre qu'on fait les produits au complet ».
 * So a card is a browser AND a phone where the product ships both, and the
 * surfaces are named underneath.
 *
 * ⚠️ THREE THINGS CHANGED ON 2026-09-15, all from Adrien reading the live page:
 *   1. THREE PER ROW, not two: « ça mange la page ».
 *   2. THE CARDS ARE REAL CARDS. « j'ai du mal à différencier les projets entre
 *      les rows — le bloc titre/explication en bas, on peut le confondre avec les
 *      screens en dessous ». He is right, and it was a spacing failure: the gap
 *      between a card's text and the NEXT card's capture was the same as the gap
 *      between that text and its OWN capture, so the eye grouped them wrongly.
 *      Each product now sits in a bordered panel with its own ground, and its
 *      text is tight against its own visuals.
 *   3. ONE BADGE FOR EVERYTHING — « En production » (decision cmu1u7c9, « "En
 *      production" même pour Hive, tkt »). It qualifies the technical state, not
 *      the distribution.
 *
 * ⛔ AND THE LIMIT THAT COMES WITH THAT BADGE IS NOT OPTIONAL: nothing here may
 * say or imply a product is AVAILABLE, downloadable, open or sold when it is not.
 * No store button for Hive TCG, no user counts, no "launched". A surface that
 * exists but is not public is declared in `soonSurfaces` and WEARS ITS SUFFIX —
 * that is how Traqio can show its platform and its SDKs (Adrien: « ne le réduis
 * pas au site vitrine ») while its product is still a prelaunch (cmu0fqj7).
 *
 * ⚠️ WHY DARK HERE AND NOWHERE ELSE. The hero used to be dark simply because it
 * was a hero, which Adrien called correctly: « c'est pas réfléchi ». Dark is a
 * material here: light product captures on a near-black ground read like screens
 * in a dark room, which is exactly the "look at the work" beat the page needs
 * between the offer and the method. It is an accent, not a theme.
 *
 * ⛔ NO PARAGRAPH UNDER THE CARDS, and no duration ANYWHERE. None of these was
 * built in a week, the git history says so, and this block simply SAYS NOTHING
 * about how long any of them took or who they were built for. Silence is allowed
 * here. A claim is not.
 *
 * ⛔ NO TECHNOLOGY CHIPS — a founder buying a V1 is not buying Next.js. What they
 * fear is being locked in, and that is answered in one FAQ line instead.
 *
 * The domains are plain text, not links: an outbound click from a paid visitor is
 * a lost lead.
 */
export function SprintProductWall({ locale }: { locale: Locale }) {
  const c = sprintLanding.products

  const cards = sprintProducts.map((product) => {
    const project = product.slug ? projects.find((p) => p.slug === product.slug) : undefined
    const fallbackTagline = c.taglines[product.key as keyof typeof c.taglines]
    return {
      product,
      name: project?.name ?? product.name ?? product.key,
      tagline: project?.tagline[locale] ?? fallbackTagline?.[locale] ?? '',
    }
  })

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ product, name, tagline }, i) => (
        <article
          key={product.key}
          /* ⚠️ THE PANEL IS THE FIX for « on peut confondre le bloc titre avec les
             screens en dessous ». A visible edge and its own ground bound each
             product, so the caption can never be read as belonging to the capture
             of the card below it. Do not flatten this back to a bare grid cell.

             ⚠️ AND EACH CARD IS A SUBGRID OF FOUR ROWS — visual, title, tagline,
             surfaces (2026-09-15). Before this, a card was a flex column: the
             grid stretched every card of a row to the same height, but INSIDE
             each card the visual set where the title started, so a browser
             without a phone (204px), a browser with one (234px) and a row of
             phones (254px) put three titles on three different lines. Adrien
             read it as the phone cards being « beaucoup plus hautes ». With
             `grid-rows-subgrid` the four rows are shared by the whole row of
             cards, so titles, taglines and chips line up whatever the visual is.
             `gap-y-0` because a subgrid inherits the wall's 20px gap otherwise. */
          className="row-span-4 grid grid-rows-subgrid gap-y-0 rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.035)] p-4 sm:p-5"
          data-reveal
          style={{ '--reveal-delay': `${(i % 3) * 110}ms` } as React.CSSProperties}
        >
          <ProductScope product={product} name={name} locale={locale} />

          {/* Tight against its OWN visuals — this gap is deliberately smaller than
              the gap between two cards, which is what makes the grouping read. */}
          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-[var(--color-paper)]">
              {name}
            </h3>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#4ade80]" />
              {c.liveLabel[locale]}
            </span>
          </div>

          <p className="mt-1.5 text-[13px]/[1.5] text-[color-mix(in_srgb,var(--color-paper)_66%,transparent)] text-pretty">
            {tagline}
          </p>

          {/* The scope, named. This IS the argument of the section, and it costs
              one line. `self-end` keeps the chips on the card's floor so a row of
              three reads as one band rather than as three ragged ends. */}
          <ul className="flex flex-wrap content-end gap-x-1.5 gap-y-1.5 self-end pt-3">
            {product.surfaces.map((surface) => (
              <li
                key={surface}
                className="rounded-full border border-[rgba(255,255,255,0.16)] px-2.5 py-0.5 text-[11px] tracking-wide text-[color-mix(in_srgb,var(--color-paper)_66%,transparent)]"
              >
                {c.surfaces[surface][locale]}
              </li>
            ))}
            {/* ⛔ A NON-PUBLIC SURFACE ALWAYS WEARS ITS SUFFIX. Dashed, dimmer, and
                the word is in the label itself rather than in a legend — a legend
                is a second thing to read, and a chip read alone would claim the
                surface is out. */}
            {product.soonSurfaces?.map((surface) => (
              <li
                key={surface}
                className="rounded-full border border-dashed border-[rgba(255,255,255,0.18)] px-2.5 py-0.5 text-[11px] tracking-wide text-[color-mix(in_srgb,var(--color-paper)_44%,transparent)]"
              >
                {c.surfaces[surface][locale]} · {c.soonSuffix[locale]}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

/**
 * One product's surfaces, composed: the browser frame with the phone overlapping
 * its lower corner, or a row of phones for a product that has no web surface at all.
 *
 * The phone sits OUTSIDE the browser's flow and overlaps it, so the pair reads as
 * one product on two devices rather than as two unrelated captures. Both frames
 * carry their aspect ratio, so the composition reserves its box before either
 * file arrives — this page measures CLS 0 and must keep doing so.
 */
function ProductScope({
  product,
  name,
  locale,
}: {
  product: SprintProduct
  name: string
  locale: Locale
}) {
  const c = sprintLanding.products
  const appAlt = c.appShotAlt[locale].replace('{name}', name)

  /* No web surface: a row of phones rather than an empty browser frame. Each takes
     an equal share of the width, which is what keeps the row SHORTER than a
     browser composition (see the Labyrinth entry in sprintLanding.ts).
     `self-center` sits it in the middle of the shared visual row.
     ⚠️ THE RADIUS WAS RE-CHECKED AT THIS WIDTH: `.sprint-phone` has a fixed
     0.75rem corner, and these phones render at ~90–100px, i.e. 12–13% of their
     width — inside the 10–15% band « trop arrondis » set. Shrink them much further
     and that stops being true. */
  if (!product.shot) {
    return (
      <div className="flex w-full justify-center gap-2.5 self-center sm:gap-3">
        {product.phoneShots?.map((src) => (
          <PhoneShot
            key={src}
            src={src}
            alt={appAlt}
            tone="dark"
            sizes="(min-width: 1024px) 9vw, (min-width: 640px) 14vw, 30vw"
            className="min-w-0 flex-1"
          />
        ))}
      </div>
    )
  }

  return (
    <div className={product.appShot ? 'relative pr-1 pb-8' : ''}>
      <ProductShot
        src={product.shot.image}
        alt={c.shotAlt[locale].replace('{name}', name)}
        domain={product.shot.domain}
        tone="dark"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
      />
      {/* ⚠️ THE POSITIONING LIVES ON THIS WRAPPER, NOT ON THE PHONE. `.sprint-phone`
          sets `position: relative` in globals.css so its notch has something to
          anchor to, and that rule is unlayered — which in Tailwind v4 beats the
          `absolute` utility no matter what order they are written in. Put
          `absolute` on the phone itself and it silently drops below the browser
          frame instead of overlapping it, which is exactly what happened. */}
      {product.appShot && (
        <span className="absolute right-0 bottom-0 block w-[26%] max-w-[5rem]">
          <PhoneShot src={product.appShot} alt={appAlt} tone="dark" sizes="10vw" className="w-full" />
        </span>
      )}
    </div>
  )
}
