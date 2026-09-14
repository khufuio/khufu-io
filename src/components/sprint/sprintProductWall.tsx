import type { Locale } from '@/i18n/config'
import { projects } from '@/content/projects'
import {
  sprintLanding,
  sprintLandingFlags,
  sprintProducts,
  traqioProduct,
} from '@/content/sprintLanding'
import { ProductShot } from '@/components/sprint/productShot'

/**
 * Khufu's own products, shown rather than argued about — and the ONE place this
 * page spends dark.
 *
 * ⚠️ WHY DARK HERE AND NOWHERE ELSE. The hero used to be dark simply because it
 * was a hero, which Adrien called correctly: « c'est pas réfléchi ». Dark is a
 * material here: four light product captures on a near-black ground read like
 * screens in a dark room, which is exactly the "look at the work" beat the page
 * needs between the offer and the method. It is an accent, not a theme — do not
 * darken a second section.
 *
 * ⛔ NO PARAGRAPH UNDER THE CARDS, and this is deliberate and recent. The note
 * that used to explain « ce sont les produits de Khufu, pas des livrables de
 * sprint… » is gone on Adrien's instruction (2026-09-13): « sur-explicatif, ça
 * perd le côté ambigu qu'on veut mettre en place pour convaincre ».
 *
 * ⚠️ THE LINE THAT HOLDS, and it is not the same as lying: this block SAYS
 * NOTHING about how long any of these took or who they were built for. No
 * duration, no client, no "delivered in a week" — none of them was, and the git
 * history says so plainly. Silence is allowed here. A claim is not.
 *
 * ⛔ Traqio never wears the "in production" badge: its SITE is live, the product
 * itself is a prelaunch (decision cmu0fqj7), and nothing may imply users,
 * customers, revenue or traction.
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

  const cards = [
    ...sprintProducts
      .map((entry) => {
        const project = projects.find((p) => p.slug === entry.slug)
        return project ? { entry, project } : null
      })
      .filter((v): v is { entry: (typeof sprintProducts)[number]; project: (typeof projects)[number] } => Boolean(v))
      .map(({ entry, project }) => ({
        key: project.slug,
        name: project.name,
        tagline: project.tagline[locale],
        url: project.url,
        image: entry.image,
        status: c.liveLabel[locale],
        live: true,
      })),
    ...(sprintLandingFlags.traqioProduct
      ? [
          {
            key: 'traqio',
            name: traqioProduct.name,
            tagline: c.traqioTagline[locale],
            url: traqioProduct.url,
            image: traqioProduct.image,
            status: c.traqioStatus[locale],
            live: false,
          },
        ]
      : []),
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
      {cards.map((card, i) => (
        <article
          key={card.key}
          data-reveal
          style={{ '--reveal-delay': `${(i % 2) * 120}ms` } as React.CSSProperties}
        >
          <ProductShot
            src={card.image}
            alt={c.shotAlt[locale].replace('{name}', card.name)}
            domain={(card.url ?? '').replace(/^https?:\/\//, '')}
            tone="dark"
            sizes="(min-width: 640px) 46vw, 92vw"
          />
          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-[var(--color-paper)]">
              {card.name}
            </h3>
            {/* Green dot = in production. A product whose site is live but which
                has not launched gets a neutral dot and says so — the two are not
                the same claim. */}
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
              <span
                aria-hidden
                className={`size-1.5 shrink-0 rounded-full ${card.live ? 'bg-[#4ade80]' : 'bg-[color-mix(in_srgb,var(--color-paper)_45%,transparent)]'}`}
              />
              {card.status}
            </span>
          </div>
          <p className="mt-1.5 text-[15px]/[1.5] text-[color-mix(in_srgb,var(--color-paper)_66%,transparent)] text-pretty">
            {card.tagline}
          </p>
        </article>
      ))}
    </div>
  )
}
