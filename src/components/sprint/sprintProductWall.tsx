import type { Locale } from '@/i18n/config'
import { projects } from '@/content/projects'
import { sprintLanding, sprintProducts, type SprintProduct } from '@/content/sprintLanding'
import { PhoneShot, ProductShot } from '@/components/sprint/productShot'

/**
 * Khufu's own products, shown in FULL SCOPE — and the ONE place this page spends
 * dark.
 *
 * ⛔ WHAT THE SECTION ARGUES, since 2026-09-14 (khufu HQ decision cmu1qkaz). Not
 * "we have products" — "we ship WHOLE products". Adrien: « pour Clokizi et
 * HerbaCRM, comme ils ont des apps compagnons, ça vaut le coup de mettre tout
 * non ? voire même plateforme web + app + showcase non ? genre on montre qu'on
 * fait les produits au complet ». So a card is a browser AND a phone where the
 * product ships both, and the surfaces are named underneath. An all-web line-up
 * also invented an objection we do not have to answer, which is why two mobile
 * products joined the set.
 *
 * ⚠️ WHY DARK HERE AND NOWHERE ELSE. The hero used to be dark simply because it
 * was a hero, which Adrien called correctly: « c'est pas réfléchi ». Dark is a
 * material here: light product captures on a near-black ground read like screens
 * in a dark room, which is exactly the "look at the work" beat the page needs
 * between the offer and the method. It is an accent, not a theme — do not darken
 * a second section.
 *
 * ⛔ NO PARAGRAPH UNDER THE CARDS. The note that used to explain « ce sont les
 * produits de Khufu, pas des livrables de sprint… » is gone on Adrien's
 * instruction (2026-09-13): « sur-explicatif, ça perd le côté ambigu qu'on veut
 * mettre en place pour convaincre ».
 *
 * ⚠️ THE LINE THAT HOLDS, and it is not the same as lying: this block SAYS
 * NOTHING about how long any of these took or who they were built for. No
 * duration, no client, no "delivered in a week" — none of them was, and the git
 * history says so plainly. Silence is allowed here. A claim is not.
 *
 * ⛔ Traqio and Hive TCG never wear the "in production" badge: their SITES are
 * live, the products are not out (decision cmu0fqj7 for Traqio; Hive's stores
 * are not open). Nothing may imply users, customers, revenue or traction.
 *
 * ⛔ NO TECHNOLOGY CHIPS. They were on every card and Adrien asked whether that
 * was relevant; it is not — a founder buying a V1 is not buying Next.js. What
 * they fear is being locked in, and that is answered in one FAQ line instead.
 *
 * The domains are plain text, not links: an outbound click from a paid visitor
 * is a lost lead.
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
    <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12">
      {cards.map(({ product, name, tagline }, i) => (
        <article
          key={product.key}
          data-reveal
          style={{ '--reveal-delay': `${(i % 2) * 120}ms` } as React.CSSProperties}
        >
          <ProductScope product={product} name={name} locale={locale} />
          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-[var(--color-paper)]">
              {name}
            </h3>
            {/* Green dot = in production. A product whose site is live but which
                has not launched gets a neutral dot and says so — the two are not
                the same claim. */}
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
              <span
                aria-hidden
                className={`size-1.5 shrink-0 rounded-full ${
                  product.status === 'live'
                    ? 'bg-[#4ade80]'
                    : 'bg-[color-mix(in_srgb,var(--color-paper)_45%,transparent)]'
                }`}
              />
              {product.status === 'live' ? c.liveLabel[locale] : c.siteOnlyLabel[locale]}
            </span>
          </div>
          <p className="mt-1.5 text-[15px]/[1.5] text-[color-mix(in_srgb,var(--color-paper)_66%,transparent)] text-pretty">
            {tagline}
          </p>
          {/* The scope, named. Three words a surface — this is the whole argument
              of the section and it costs one line. */}
          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
            {product.surfaces.map((surface) => (
              <li
                key={surface}
                className="rounded-full border border-[rgba(255,255,255,0.14)] px-2.5 py-0.5 text-[11px] tracking-wide text-[color-mix(in_srgb,var(--color-paper)_62%,transparent)]"
              >
                {c.surfaces[surface][locale]}
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
 * its lower corner, or two phones for a product that has no web surface at all.
 *
 * The phone sits OUTSIDE the browser's flow and overlaps it, so the pair reads
 * as one product on two devices rather than as two unrelated captures. Both
 * frames carry their aspect ratio, so the composition reserves its box before
 * either file arrives.
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

  // No web surface: two phones side by side rather than an empty browser frame.
  if (!product.shot) {
    return (
      <div className="flex justify-center gap-4 px-6 sm:gap-5">
        {[product.appShot, product.appShot2].filter(Boolean).map((src) => (
          <PhoneShot
            key={src}
            src={src as string}
            alt={appAlt}
            tone="dark"
            sizes="(min-width: 640px) 20vw, 40vw"
            className="w-full max-w-[9.5rem]"
          />
        ))}
      </div>
    )
  }

  return (
    <div className={product.appShot ? 'relative pr-2 pb-10 sm:pr-3 sm:pb-12' : ''}>
      <ProductShot
        src={product.shot.image}
        alt={c.shotAlt[locale].replace('{name}', name)}
        domain={product.shot.domain}
        tone="dark"
        sizes="(min-width: 640px) 46vw, 92vw"
      />
      {/* ⚠️ THE POSITIONING LIVES ON THIS WRAPPER, NOT ON THE PHONE. `.sprint-phone`
          sets `position: relative` in globals.css so its notch has something to
          anchor to, and that rule is unlayered — which in Tailwind v4 beats the
          `absolute` utility no matter what order they are written in. Put
          `absolute` on the phone itself and it silently drops below the browser
          frame instead of overlapping it, which is exactly what happened. */}
      {product.appShot && (
        <span className="absolute right-0 bottom-0 block w-[24%] max-w-[7rem]">
          <PhoneShot src={product.appShot} alt={appAlt} tone="dark" sizes="14vw" className="w-full" />
        </span>
      )}
    </div>
  )
}
