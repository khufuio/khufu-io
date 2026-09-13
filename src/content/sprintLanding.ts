import type { Locale } from '@/i18n/config'
import { fillLocaleDeep, type LocalizedInput } from '@/i18n/localize'

/**
 * Copy for the Sprint V1 landing page — the destination of PAID traffic
 * (LinkedIn Ads first). It lives here rather than in the locale dictionaries on
 * purpose: the dictionary shape is mirrored by ten files, and this page is long,
 * campaign-specific and will be rewritten as the ads are tuned. Authored in
 * fr/en/es (the languages we sell in); every other locale falls back to French,
 * exactly like `projects.ts`.
 *
 * ⚠️ Every figure on this page must be real. Anything not invoiced, contracted
 * or shipped does not belong here — this is the one page with an ad budget
 * pointed at it, so a made-up number is the most expensive kind of mistake.
 */

/**
 * ⛔ THE ONLY NUMBERS ALLOWED ON THIS PAGE ARE A PRICE OR A DELAY (2026-09-13).
 *
 * No cumulative revenue, no project count, no client count, no "value shipped".
 * The proof here rests on the offer (production on day 7, fixed price, scope
 * settled on day 0), on the three client references, and on past clients being
 * reachable on request — not on activity volume.
 *
 * Figures the page would happily use and that nobody has validated yet, left
 * deliberately unwritten rather than approximated — this is the one page with an
 * ad budget pointed at it, so a fragile number is expensive here:
 *   - PLACEHOLDER: number of V1s actually delivered as a Sprint V1
 *   - PLACEHOLDER: sprint slots available per month (the scarcity lever, absent)
 *   - PLACEHOLDER: measured first-response time, against the "within 24h" claim
 *   - PLACEHOLDER: share of clients who continue past day 7
 * Ask before filling any of these in.
 */

/**
 * Commercial promises that are written but NOT yet in the contract. Both blocks
 * are fully built below and rendered only when their flag is true.
 *
 * Do NOT flip either one until the engagement letter carries the matching
 * clause (khufu HQ todo cmtt6tt9). Advertising a guarantee we cannot honour on
 * paper is a liability, not a conversion lever.
 */
export const sprintLandingFlags: {
  deliveryGuarantee: boolean
  prototypeOffer: boolean
  traqioProduct: boolean
} = {
  // "In production on day 7, or $500/day of delay refunded, capped at $3,500."
  deliveryGuarantee: false,
  // Entry offer: "clickable prototype in 48h — $990".
  prototypeOffer: false,
  /*
   * Traqio as a fourth own-product card. Written and ready, deliberately OFF.
   *
   * ⛔ DO NOT flip this "in anticipation" of the launch. The landing can ship to
   * production before the showcase does, and this page carries an ad budget — a
   * reference pointing at a dead domain is exactly the detail that gets costly.
   *
   * BOTH of these must be true first, checked, not assumed:
   *   1. https://traqio.app answers publicly (the showcase is actually online).
   *      Verified 2026-09-13: it does NOT resolve — curl returns 000.
   *   2. The HQ registry status for slug `traqio` reads `live`.
   *      Verified 2026-09-13: it reads `prelaunch`.
   * Same rule for any other product: `live` in the registry and reachable, or
   * it stays off this page.
   */
  traqioProduct: false,
}

/**
 * Facts for the flagged Traqio card. Traqio is not in `projects.ts` (it has no
 * published case study on the site yet), so the card's few facts live here.
 * Sourced from the HQ registry on 2026-09-13 — no build duration, same rule as
 * the three live products.
 */
export const traqioProduct = {
  name: 'Traqio',
  url: 'https://traqio.app',
  stack: ['NestJS', 'Next.js', 'Cloud Run', 'PostgreSQL'],
} as const

/** Khufu's own products shown on the page, by `projects.ts` slug — see the note below. */
export const sprintProductSlugs = ['onestore-link', 'clokizi', 'herbacrm'] as const
/*
 * NO CLIENT REFERENCES ON THIS PAGE (Adrien, 2026-09-13). Flatchr, Peach Farmer,
 * Tarokai, Mojo and Tim Management were all pulled: decision cmtz6tr7 already
 * ruled the first three out as Sprint proof, and Adrien then ruled the client
 * work as a whole neither accurate nor relevant here. Do not put any of them
 * back.
 *
 * What replaced them are Khufu's own products, which is a stronger claim on this
 * page precisely because it is checkable: we own the repos, the infra and the
 * billing, so the timeline is knowable rather than asserted. All three are
 * `status: live` in the HQ registry (verified 2026-09-13). Anything not `live`
 * stays off — Traqio is `prelaunch` and is NOT production proof.
 *
 * ⛔ NEVER IMPLY THESE WERE BUILT IN SEVEN DAYS. They were not, and the git
 * history says so plainly: Clokizi's repos start 2023-08, HerbaCRM's 2024-01,
 * OneStore.link's 2026-03, all still being committed to. So this block carries
 * NO duration at all. It proves "we build and run our own products in
 * production", which is true; it says nothing about the seven-day format, which
 * is being proven elsewhere. `products.note` states that out loud, because the
 * section directly follows the day-by-day J0→J7 timeline and adjacency alone
 * would otherwise imply it.
 */

/** One localized string in the authoring shape (`LocalizedInput`) or the resolved one. */
type Leaf<T> = T
type Section<T> = {
  hero: {
    ctaLabel: Leaf<T>
    ctaNote: Leaf<T>
    trust: Leaf<T>
  }
  audience: {
    title: Leaf<T>
    subtitle: Leaf<T>
    forTitle: Leaf<T>
    forItems: Leaf<T>[]
    notForTitle: Leaf<T>
    notForItems: Leaf<T>[]
    note: Leaf<T>
  }
  deliverables: {
    title: Leaf<T>
    subtitle: Leaf<T>
    items: { title: Leaf<T>; body: Leaf<T> }[]
  }
  timeline: {
    title: Leaf<T>
    subtitle: Leaf<T>
    dayZero: { day: Leaf<T>; title: Leaf<T>; body: Leaf<T> }
    /** Annotation drawn over day 0 in the schema. */
    scopeLabel: Leaf<T>
    /** Annotation drawn over the day 1 → day 7 bracket. */
    spanLabel: Leaf<T>
    note: Leaf<T>
  }
  /** The three fixed deliverables that come with the price (cmu09gb6 / cmu09gn1). */
  included: {
    title: Leaf<T>
    subtitle: Leaf<T>
    badge: Leaf<T>
    /** `value` is the optional struck-through worth — empty until it can be sourced. */
    items: { title: Leaf<T>; body: Leaf<T>; scope: Leaf<T>; value: Leaf<T> }[]
    note: Leaf<T>
  }
  /** Time-to-production, charted. Delay only — never a price (see the note in the component). */
  delayChart: {
    title: Leaf<T>
    ticks: { zero: Leaf<T>; oneMonth: Leaf<T>; threeMonths: Leaf<T>; sixMonths: Leaf<T> }
    rows: Record<'khufu' | 'agency' | 'hire', { name: Leaf<T>; value: Leaf<T>; note: Leaf<T> }>
    sources: Leaf<T>
  }
  products: {
    title: Leaf<T>
    subtitle: Leaf<T>
    liveLabel: Leaf<T>
    /** Flagged-off Traqio card — see `sprintLandingFlags.traqioProduct`. */
    traqioType: Leaf<T>
    traqioTagline: Leaf<T>
    /** What this block does NOT prove — see the note on `sprintProductSlugs`. */
    note: Leaf<T>
  }
  proof: {
    title: Leaf<T>
    subtitle: Leaf<T>
    dateLabel: Leaf<T>
    priceLabel: Leaf<T>
    codeValue: Leaf<T>
    codeLabel: Leaf<T>
    note: Leaf<T>
  }
  comparison: {
    title: Leaf<T>
    subtitle: Leaf<T>
    aspectLabel: Leaf<T>
    agency: Leaf<T>
    freelance: Leaf<T>
    noCode: Leaf<T>
    khufu: Leaf<T>
    rows: { aspect: Leaf<T>; agency: Leaf<T>; freelance: Leaf<T>; noCode: Leaf<T>; khufu: Leaf<T> }[]
    note: Leaf<T>
  }
  objections: {
    title: Leaf<T>
    subtitle: Leaf<T>
    items: { q: Leaf<T>; a: Leaf<T> }[]
  }
  faq: {
    title: Leaf<T>
    items: { q: Leaf<T>; a: Leaf<T> }[]
  }
  guarantee: {
    title: Leaf<T>
    body: Leaf<T>
    terms: Leaf<T>[]
  }
  prototype: {
    title: Leaf<T>
    body: Leaf<T>
    cta: Leaf<T>
  }
  form: {
    title: Leaf<T>
    body: Leaf<T>
    name: Leaf<T>
    email: Leaf<T>
    project: Leaf<T>
    projectPlaceholder: Leaf<T>
    submit: Leaf<T>
    sending: Leaf<T>
    invalidEmail: Leaf<T>
    successTitle: Leaf<T>
    successBody: Leaf<T>
    privacy: Leaf<T>
    whatsapp: Leaf<T>
  }
  midCta: {
    deliverables: Leaf<T>
    products: Leaf<T>
    objections: Leaf<T>
  }
  finalCta: {
    title: Leaf<T>
    body: Leaf<T>
  }
}

export type SprintLanding = Section<Record<Locale, string>>

const content: Section<LocalizedInput> = {
  hero: {
    ctaLabel: {
      fr: 'Réserver mon sprint',
      en: 'Book my sprint',
      es: 'Reservar mi sprint',
    },
    ctaNote: {
      fr: 'Réponse sous 24 h avec un périmètre écrit, un prix et une date de livraison.',
      en: 'Answer within 24h with a written scope, a price and a delivery date.',
      es: 'Respuesta en 24 h con un alcance escrito, un precio y una fecha de entrega.',
    },
    // Replaces the cumulative-revenue figure that used to sit as a third hero
    // stat (removed 2026-09-13, see site.ts): a qualitative line, since the only
    // numbers allowed on this page are the price and the delay.
    trust: {
      fr: 'Périmètre arrêté au jour 0, date inscrite au contrat, code source à vous.',
      en: 'Scope settled on day 0, date written into the contract, source code yours.',
      es: 'Alcance cerrado el día 0, fecha inscrita en el contrato, código fuente tuyo.',
    },
  },

  audience: {
    title: {
      fr: 'Pour qui c’est — et pour qui ce n’est pas.',
      en: 'Who this is for — and who it isn’t for.',
      es: 'Para quién es — y para quién no.',
    },
    subtitle: {
      fr: 'On refuse les projets qu’on ne peut pas livrer en sept jours. Autant le dire tout de suite.',
      en: 'We turn down the projects we can’t ship in seven days. Better said upfront.',
      es: 'Rechazamos los proyectos que no podemos entregar en siete días. Mejor decirlo ya.',
    },
    forTitle: {
      fr: 'Le Sprint V1 est fait pour vous si…',
      en: 'Sprint V1 is for you if…',
      es: 'El Sprint V1 es para ti si…',
    },
    forItems: [
      {
        fr: 'Vous avez une idée de SaaS ou d’app claire dans votre tête, et personne pour la construire.',
        en: 'You have a clear SaaS or app idea in your head, and nobody to build it.',
        es: 'Tienes clara una idea de SaaS o app y no tienes a nadie para construirla.',
      },
      {
        fr: 'Vous voulez un produit en ligne pour confronter le marché, pas un cahier des charges à rallonge.',
        en: 'You want a product online to face the market, not a sprawling specification document.',
        es: 'Quieres un producto en línea para enfrentarte al mercado, no un pliego interminable.',
      },
      {
        fr: 'Vous pouvez décider vite, seul — sans comité ni triple validation.',
        en: 'You can decide fast, on your own — no committee, no triple sign-off.',
        es: 'Puedes decidir rápido y por tu cuenta: sin comité ni triple validación.',
      },
      {
        fr: 'Vous êtes joignable environ une heure par jour pendant la semaine du sprint pour trancher.',
        en: 'You’re reachable about an hour a day during the sprint week to make calls.',
        es: 'Estás disponible aproximadamente una hora al día durante la semana del sprint para decidir.',
      },
      {
        fr: 'Un prix fixe pour un produit en production vous paraît plus sain qu’un devis révisable.',
        en: 'A fixed price for a shipped product sounds healthier to you than a revisable quote.',
        es: 'Un precio fijo por un producto en producción te parece más sano que un presupuesto revisable.',
      },
    ],
    notForTitle: {
      fr: 'Ce n’est pas pour vous si…',
      en: 'This isn’t for you if…',
      es: 'No es para ti si…',
    },
    notForItems: [
      {
        fr: 'Vous cherchez le moins cher possible : un profil junior coûtera moins et prendra beaucoup plus longtemps.',
        en: 'You’re after the cheapest option: a junior will cost less and take far longer.',
        es: 'Buscas lo más barato posible: un perfil junior costará menos y tardará mucho más.',
      },
      {
        fr: 'Votre périmètre n’est pas arbitrable : si rien ne peut sortir de la V1, sept jours ne suffisent pas.',
        en: 'Your scope isn’t negotiable: if nothing can be cut from the V1, seven days won’t do.',
        es: 'Tu alcance no es negociable: si nada puede salir de la V1, siete días no bastan.',
      },
      {
        fr: 'Vous avez besoin de certifications lourdes (HDS, PCI-DSS, ISO 27001) dès la première version.',
        en: 'You need heavy certifications (HDS, PCI-DSS, ISO 27001) from the very first version.',
        es: 'Necesitas certificaciones pesadas (HDS, PCI-DSS, ISO 27001) desde la primera versión.',
      },
      {
        fr: 'Vous voulez reprendre une base de code existante et volumineuse — c’est du renfort remote, pas un sprint.',
        en: 'You want an existing, sizeable codebase taken over — that’s remote support, not a sprint.',
        es: 'Quieres que retomemos una base de código existente y voluminosa: eso es refuerzo remoto, no un sprint.',
      },
      {
        fr: 'Vous attendez une équipe sur site : Khufu travaille en remote, depuis Dubaï.',
        en: 'You expect an on-site team: Khufu works remotely, from Dubai.',
        es: 'Esperas un equipo presencial: Khufu trabaja en remoto, desde Dubái.',
      },
    ],
    note: {
      fr: 'Si votre projet tombe dans la seconde colonne, dites-le nous quand même : on vous orientera vers la bonne solution, même si ce n’est pas la nôtre.',
      en: 'If your project falls in the second column, tell us anyway: we’ll point you to the right solution, even when it isn’t ours.',
      es: 'Si tu proyecto cae en la segunda columna, cuéntanoslo igual: te orientaremos hacia la solución correcta, aunque no sea la nuestra.',
    },
  },

  deliverables: {
    title: {
      fr: 'Ce que vous avez entre les mains le jour 7.',
      en: 'What you hold in your hands on day 7.',
      es: 'Lo que tienes en las manos el día 7.',
    },
    subtitle: {
      fr: 'Pas un prototype, pas une démo, pas un dépôt Git à déployer vous-même.',
      en: 'Not a prototype, not a demo, not a Git repo left for you to deploy.',
      es: 'No es un prototipo, ni una demo, ni un repositorio que tengas que desplegar tú.',
    },
    items: [
      {
        title: { fr: 'Un produit en production', en: 'A product in production', es: 'Un producto en producción' },
        body: {
          fr: 'Votre SaaS ou votre app est déployé, accessible par vos utilisateurs, à une vraie adresse. C’est le critère de livraison : en ligne, ou pas livré.',
          en: 'Your SaaS or app is deployed, reachable by your users, at a real address. That’s the delivery criterion: live, or not delivered.',
          es: 'Tu SaaS o app está desplegado, accesible para tus usuarios, en una dirección real. Ese es el criterio de entrega: en línea, o no entregado.',
        },
      },
      {
        title: { fr: 'Le code source, à vous', en: 'The source code, yours', es: 'El código fuente, tuyo' },
        body: {
          fr: 'Le dépôt Git vous appartient dès le premier commit. Aucune licence, aucun lock-in, aucune plateforme dont vous dépendriez pour y accéder.',
          en: 'The Git repository is yours from the first commit. No licence, no lock-in, no platform standing between you and your code.',
          es: 'El repositorio Git es tuyo desde el primer commit. Sin licencias, sin lock-in, sin plataformas de por medio.',
        },
      },
      {
        title: { fr: 'Un design fait pour ce produit', en: 'A design made for this product', es: 'Un diseño hecho para este producto' },
        body: {
          fr: 'Interface dessinée pour votre usage, pas un template acheté. Les parcours clés sont finis, pas esquissés.',
          en: 'An interface designed for your use case, not a bought template. The key flows are finished, not sketched.',
          es: 'Una interfaz diseñada para tu caso de uso, no una plantilla comprada. Los flujos clave están terminados, no esbozados.',
        },
      },
      {
        title: { fr: 'Comptes, rôles et accès', en: 'Accounts, roles and access', es: 'Cuentas, roles y accesos' },
        body: {
          fr: 'Inscription, connexion, mots de passe, rôles et permissions — dès que votre produit a des utilisateurs, il a ça.',
          en: 'Sign-up, login, passwords, roles and permissions — as soon as your product has users, it has these.',
          es: 'Registro, inicio de sesión, contraseñas, roles y permisos: en cuanto tu producto tiene usuarios, los tiene.',
        },
      },
      {
        title: { fr: 'Base de données et back-office', en: 'Database and back-office', es: 'Base de datos y back-office' },
        body: {
          fr: 'Un schéma de données propre et l’interface d’administration pour exploiter votre produit sans passer par un développeur.',
          en: 'A clean data model and the admin interface to run your product without going through a developer.',
          es: 'Un modelo de datos limpio y la interfaz de administración para operar tu producto sin pasar por un desarrollador.',
        },
      },
      {
        title: { fr: 'Infrastructure et déploiement', en: 'Infrastructure and deployment', es: 'Infraestructura y despliegue' },
        body: {
          fr: 'Hébergement, intégration continue, déploiement automatisé, sauvegardes et supervision — configurés sur vos propres comptes.',
          en: 'Hosting, continuous integration, automated deployment, backups and monitoring — set up on your own accounts.',
          es: 'Alojamiento, integración continua, despliegue automatizado, copias de seguridad y monitorización, configurados en tus propias cuentas.',
        },
      },
      {
        title: { fr: 'Passation documentée', en: 'Documented handover', es: 'Traspaso documentado' },
        body: {
          fr: 'Documentation technique, transfert de tous les accès et une session de passation. Vous repartez capable d’opérer le produit, ou de le confier à quelqu’un d’autre.',
          en: 'Technical documentation, every access transferred and a handover session. You leave able to run the product — or to hand it to someone else.',
          es: 'Documentación técnica, traspaso de todos los accesos y una sesión de handover. Te vas pudiendo operar el producto, o confiárselo a otra persona.',
        },
      },
    ],
  },

  timeline: {
    title: {
      fr: 'Le déroulé, du jour 0 au jour 7.',
      en: 'The run, from day 0 to day 7.',
      es: 'El desarrollo, del día 0 al día 7.',
    },
    subtitle: {
      fr: 'Sept jours ouvrés, un déroulé identique à chaque sprint. Vous savez ce qui se passe chaque jour.',
      en: 'Seven working days, the same run on every sprint. You know what happens each day.',
      es: 'Siete días hábiles, el mismo recorrido en cada sprint. Sabes qué pasa cada día.',
    },
    dayZero: {
      day: { fr: 'Jour 0', en: 'Day 0', es: 'Día 0' },
      title: { fr: 'Avant que le compteur démarre', en: 'Before the clock starts', es: 'Antes de que arranque el reloj' },
      body: {
        fr: 'Appel de cadrage, périmètre écrit, devis signé. Le sprint ne démarre que quand les trois sont faits — c’est précisément ce qui rend la date tenable.',
        en: 'Scoping call, written scope, signed quote. The sprint only starts once all three are done — that is exactly what makes the date holdable.',
        es: 'Llamada de encuadre, alcance escrito, presupuesto firmado. El sprint solo arranca cuando los tres están hechos: eso es justamente lo que hace sostenible la fecha.',
      },
    },
    scopeLabel: {
      fr: 'Périmètre arrêté',
      en: 'Scope settled',
      es: 'Alcance cerrado',
    },
    spanLabel: {
      fr: '7 jours ouvrés',
      en: '7 working days',
      es: '7 días hábiles',
    },
    note: {
      fr: 'Pendant toute la semaine, vous parlez directement au founder qui écrit le code. Pas de chef de projet intermédiaire, pas de compte rendu qui arrive trois jours après la décision.',
      en: 'All week you talk directly to the founder writing the code. No project manager in between, no status report landing three days after the decision.',
      es: 'Durante toda la semana hablas directamente con el founder que escribe el código. Sin jefe de proyecto de por medio, sin informes que llegan tres días después de la decisión.',
    },
  },

  /*
   * ⛔ THREE ITEMS, NEVER MORE (khufu HQ decisions cmu09gb6 / cmu09gn1 / cmu09j84).
   *
   * Stripe, analytics and light branding were proposed and ruled OUT of this
   * list: they are what a shipped product is made of, and advertising them as a
   * bonus suggests they might not have been included — which lowers the
   * perceived level of a $17k offer. They are answered in ONE FAQ entry
   * instead, in the "obviously it's included" register. Do not move them here.
   *
   * ⚠️ The word is "included". Never "free", never "on the house": on a $17,000
   * sale the word "free" devalues everything standing next to it.
   *
   * ⚠️ Every `scope` line exists to keep its item a FIXED, templated deliverable.
   * If one of them starts reading like something to negotiate, it eats the
   * promise the offer rests on — scope settled on day 0 (cmtt6x3k).
   */
  included: {
    title: {
      fr: 'Ce qui est inclus, et que vous n’aurez pas à acheter ailleurs.',
      en: 'What comes with it — and what you won’t have to buy elsewhere.',
      es: 'Lo que está incluido, y que no tendrás que comprar en otro sitio.',
    },
    subtitle: {
      fr: 'Trois livrables figés, dans le même prix. Pas des options, pas des suppléments à négocier.',
      en: 'Three fixed deliverables, inside the same price. Not options, not add-ons to negotiate.',
      es: 'Tres entregables fijos, dentro del mismo precio. Ni opciones ni extras que negociar.',
    },
    badge: { fr: 'Inclus', en: 'Included', es: 'Incluido' },
    items: [
      {
        title: {
          fr: 'Le site vitrine de votre produit, optimisé SEO et GEO',
          en: 'The showcase site for your product, SEO- and GEO-optimised',
          es: 'El sitio escaparate de tu producto, optimizado para SEO y GEO',
        },
        body: {
          fr: 'Une page de présentation de votre produit, livrée en même temps que lui : balises meta, Open Graph et Twitter cards, sitemap.xml, robots.txt, données structurées JSON-LD, hreflang et llms.txt. Vous ne repartez pas seulement avec un produit, vous repartez avec de quoi le montrer — lisible par Google comme par ChatGPT.',
          en: 'A presentation page for your product, delivered alongside it: meta tags, Open Graph and Twitter cards, sitemap.xml, robots.txt, JSON-LD structured data, hreflang and llms.txt. You don’t just leave with a product, you leave with somewhere to show it — readable by Google and by ChatGPT alike.',
          es: 'Una página de presentación de tu producto, entregada al mismo tiempo que él: etiquetas meta, Open Graph y Twitter cards, sitemap.xml, robots.txt, datos estructurados JSON-LD, hreflang y llms.txt. No te vas solo con un producto: te vas con dónde enseñarlo, legible tanto para Google como para ChatGPT.',
        },
        scope: {
          fr: 'Sur notre gabarit, avec vos textes, vos couleurs et votre logo. Ce n’est pas un site de marque sur mesure : le gabarit est précisément ce qui permet de le livrer dans la semaine sans toucher à la date.',
          en: 'On our template, with your copy, your colours and your logo. It is not a bespoke brand site: the template is exactly what lets us ship it within the week without moving the date.',
          es: 'Sobre nuestra plantilla, con tus textos, tus colores y tu logo. No es un sitio de marca a medida: la plantilla es justamente lo que permite entregarlo dentro de la semana sin tocar la fecha.',
        },
        // See sprintIncluded.tsx: published agency prices for a showcase site
        // run from €300 to €8,000, which is a spread, not a figure. Left empty
        // rather than approximated.
        value: { fr: '', en: '', es: '' },
      },
      {
        title: {
          fr: 'L’infrastructure, le déploiement et la mise en production',
          en: 'Infrastructure, deployment and going live',
          es: 'La infraestructura, el despliegue y la puesta en producción',
        },
        body: {
          fr: 'Hébergement, intégration continue, déploiement automatisé, sauvegardes, nom de domaine et certificats — configurés sur vos propres comptes, à votre nom. Le jour 7, le produit tourne : vous n’avez pas un dépôt Git à faire déployer par quelqu’un d’autre.',
          en: 'Hosting, continuous integration, automated deployment, backups, domain name and certificates — set up on your own accounts, in your name. On day 7 the product runs: you are not left with a Git repository for somebody else to deploy.',
          es: 'Alojamiento, integración continua, despliegue automatizado, copias de seguridad, dominio y certificados, configurados en tus propias cuentas y a tu nombre. El día 7 el producto funciona: no te quedas con un repositorio Git para que lo despliegue otro.',
        },
        scope: {
          fr: 'Sur notre stack standard — Vercel, Google Cloud Run, PostgreSQL. Un hébergeur imposé ou une contrainte d’infrastructure particulière se traite au jour 0, avant que la date soit fixée.',
          en: 'On our standard stack — Vercel, Google Cloud Run, PostgreSQL. A mandated host or a specific infrastructure constraint is settled on day 0, before the date is set.',
          es: 'Sobre nuestro stack estándar: Vercel, Google Cloud Run, PostgreSQL. Un alojamiento impuesto o una restricción de infraestructura concreta se trata el día 0, antes de fijar la fecha.',
        },
        value: { fr: '', en: '', es: '' },
      },
      {
        title: {
          fr: '2 semaines de correctifs après la livraison',
          en: '2 weeks of fixes after delivery',
          es: '2 semanas de correcciones tras la entrega',
        },
        body: {
          fr: 'Pendant les quinze jours qui suivent la mise en production, ce qui ne fonctionne pas conformément au périmètre signé au jour 0 est corrigé — sans facture et sans discussion.',
          en: 'For the fortnight following go-live, anything that does not work as the scope signed on day 0 says it should is fixed — no invoice, no debate.',
          es: 'Durante los quince días siguientes a la puesta en producción, lo que no funcione conforme al alcance firmado el día 0 se corrige, sin factura y sin discusión.',
        },
        scope: {
          fr: 'Ce sont des correctifs, pas deux semaines de développement offertes : une évolution ou une fonctionnalité en plus reste une suite payante — jour de développement, Full Maintenance ou renfort remote.',
          en: 'These are fixes, not two free weeks of development: an evolution or an extra feature remains a paid follow-up — a development day, Full Maintenance or remote support.',
          es: 'Son correcciones, no dos semanas de desarrollo regaladas: una evolución o una funcionalidad extra sigue siendo una continuación de pago — día de desarrollo, Full Maintenance o refuerzo remoto.',
        },
        value: { fr: '', en: '', es: '' },
      },
    ],
    note: {
      fr: 'Ces trois éléments sont dans le prix fixe et dans le contrat. Ils sont volontairement figés : c’est ce qui permet de les livrer dans les sept jours sans déplacer la date.',
      en: 'All three sit inside the fixed price and inside the contract. They are deliberately fixed: that is what makes it possible to ship them within the seven days without moving the date.',
      es: 'Los tres están dentro del precio fijo y dentro del contrato. Están deliberadamente fijados: es lo que permite entregarlos en los siete días sin mover la fecha.',
    },
  },

  products: {
    title: {
      fr: 'Nos propres produits, en production.',
      en: 'Our own products, in production.',
      es: 'Nuestros propios productos, en producción.',
    },
    subtitle: {
      fr: 'Avant de vendre une V1 à quelqu’un d’autre, on en a mis plusieurs en ligne pour nous. On les fait tourner tous les jours.',
      en: 'Before selling a V1 to anyone else, we put several of our own online. We run them every day.',
      es: 'Antes de vender una V1 a otra persona, pusimos varios productos nuestros en línea. Los hacemos funcionar cada día.',
    },
    liveLabel: {
      fr: 'En production',
      en: 'In production',
      es: 'En producción',
    },
    traqioType: {
      fr: 'SaaS web + SDK mobiles',
      en: 'Web SaaS + mobile SDKs',
      es: 'SaaS web + SDK móviles',
    },
    traqioTagline: {
      fr: 'L’attribution d’installs et le ROAS de vos campagnes, sans boîte noire.',
      en: 'Install attribution and campaign ROAS, without the black box.',
      es: 'Atribución de instalaciones y ROAS de campañas, sin caja negra.',
    },
    note: {
      fr: 'Ce sont les produits de Khufu, pas des livrables de sprint. On les a construits, et surtout on les exploite : infrastructure, déploiements, facturation, support, mises à jour. Ils prouvent une chose et une seule — on sait mettre un produit en production et l’y maintenir dans la durée. Pas qu’on l’a fait en sept jours : aucun d’eux n’a été construit en une semaine, et on n’affiche donc aucun délai en face.',
      en: 'These are Khufu’s own products, not sprint deliverables. We built them and, more to the point, we run them: infrastructure, deployments, billing, support, updates. They prove one thing and one only — we can put a product into production and keep it there over time. Not that we did it in seven days: none of them was built in a week, so no timeline is claimed next to them.',
      es: 'Son los productos de Khufu, no entregables de sprint. Los construimos y, sobre todo, los operamos: infraestructura, despliegues, facturación, soporte, actualizaciones. Demuestran una sola cosa: sabemos poner un producto en producción y mantenerlo ahí con el tiempo. No que lo hicimos en siete días: ninguno se construyó en una semana, así que no mostramos ningún plazo al lado.',
    },
  },

  proof: {
    title: {
      fr: 'Ce qu’on peut prouver.',
      en: 'What we can prove.',
      es: 'Lo que podemos demostrar.',
    },
    subtitle: {
      fr: 'Pas de logos empruntés, pas de témoignages anonymes, pas de pourcentage de croissance sorti de nulle part. Des engagements écrits noir sur blanc au contrat, que vous pouvez lire avant de signer.',
      en: 'No borrowed logos, no anonymous testimonials, no growth percentage pulled out of thin air. Commitments written into the contract in black and white, which you can read before you sign.',
      es: 'Sin logos prestados, sin testimonios anónimos, sin porcentajes de crecimiento sacados de la nada. Compromisos escritos negro sobre blanco en el contrato, que puedes leer antes de firmar.',
    },
    dateLabel: {
      fr: 'Une date, pas une fourchette. Elle est inscrite au contrat avant le premier jour.',
      en: 'A date, not a range. It goes into the contract before day one.',
      es: 'Una fecha, no un rango. Queda inscrita en el contrato antes del primer día.',
    },
    priceLabel: {
      fr: 'Un prix, pas un devis. Il est arrêté avant le démarrage et ne bouge pas quand le périmètre bouge.',
      en: 'A price, not a quote. It is settled before we start and doesn’t move when the scope moves.',
      es: 'Un precio, no un presupuesto. Se cierra antes de empezar y no se mueve cuando se mueve el alcance.',
    },
    // Was "past clients reachable on request" until 2026-09-13. Pulled with the
    // client references: the only clients we could have introduced are the ones
    // Adrien ruled out as proof here, so the offer would have been hollow.
    // Replaced by a commitment that is contractual and carries no figure.
    codeValue: {
      fr: 'Le code',
      en: 'The code',
      es: 'El código',
    },
    codeLabel: {
      fr: 'À vous dès le premier commit. Hébergé sur vos comptes, sans licence ni plateforme dont vous dépendriez.',
      en: 'Yours from the first commit. Hosted on your accounts, with no licence and no platform you depend on.',
      es: 'Tuyo desde el primer commit. Alojado en tus cuentas, sin licencias ni plataformas de las que dependas.',
    },
    note: {
      fr: 'Khufu est une société enregistrée à Dubaï (Khufu FZCO, licence 5214). Les factures sont émises en euros ou en dollars, au choix.',
      en: 'Khufu is a company registered in Dubai (Khufu FZCO, licence 5214). Invoices are issued in euros or in dollars, your call.',
      es: 'Khufu es una sociedad registrada en Dubái (Khufu FZCO, licencia 5214). Las facturas se emiten en euros o en dólares, a tu elección.',
    },
  },

  /*
   * ⛔ DELAY ONLY ON THIS CHART — NO PRICE, and not one figure invented.
   *
   * The two third-party numbers are published, dated and cited on the page
   * itself (`sources` below):
   *   - 12 weeks: Apec, « Pratiques de recrutement des cadres » (2023), average
   *     time to hire a cadre in France, all sectors. It is the delay before
   *     somebody STARTS — the build is still ahead, which is why the bar keeps
   *     running past it.
   *   - 3 to 6 months: the range French MVP agencies publish for their own
   *     engagements.
   * A price comparison was deliberately NOT built: nothing defensible could be
   * sourced for what an agency charges or what a developer costs fully loaded,
   * and a fragile number is expensive on the one page carrying an ad budget.
   *
   * ⚠️ The bar widths live in sprintDelayChart.tsx. Change a figure here and you
   * must change it there.
   */
  delayChart: {
    title: {
      fr: 'Combien de temps avant d’être en ligne.',
      en: 'How long before you are live.',
      es: 'Cuánto tiempo antes de estar en línea.',
    },
    ticks: {
      zero: { fr: 'Jour 0', en: 'Day 0', es: 'Día 0' },
      oneMonth: { fr: '1 mois', en: '1 month', es: '1 mes' },
      threeMonths: { fr: '3 mois', en: '3 months', es: '3 meses' },
      sixMonths: { fr: '6 mois', en: '6 months', es: '6 meses' },
    },
    rows: {
      khufu: {
        name: { fr: 'Khufu · Sprint V1', en: 'Khufu · Sprint V1', es: 'Khufu · Sprint V1' },
        value: { fr: '7 jours', en: '7 days', es: '7 días' },
        note: {
          fr: 'Du cadrage à la mise en production. La date est inscrite au contrat avant le premier jour.',
          en: 'From scoping to production. The date goes into the contract before day one.',
          es: 'Del encuadre a la puesta en producción. La fecha se inscribe en el contrato antes del primer día.',
        },
      },
      agency: {
        name: { fr: 'Agence au devis', en: 'Quote-based agency', es: 'Agencia con presupuesto' },
        value: { fr: '3 à 6 mois', en: '3 to 6 months', es: '3 a 6 meses' },
        note: {
          fr: 'La fourchette que les agences françaises de développement de MVP annoncent elles-mêmes pour un accompagnement — cadrage, comités et allers-retours de validation compris.',
          en: 'The range French MVP development agencies publish for their own engagements — scoping, committees and rounds of sign-off included.',
          es: 'El rango que las propias agencias francesas de desarrollo de MVP anuncian para un acompañamiento: encuadre, comités y validaciones incluidos.',
        },
      },
      hire: {
        name: { fr: 'Recruter un développeur', en: 'Hiring a developer', es: 'Contratar a un desarrollador' },
        value: { fr: '12 semaines', en: '12 weeks', es: '12 semanas' },
        note: {
          fr: 'Le délai moyen pour recruter un cadre en France — avant la première ligne de code. Le développement commence après, et la barre continue.',
          en: 'The average time to hire a cadre in France — before the first line of code. Development starts after that, and the bar keeps running.',
          es: 'El plazo medio para contratar a un cuadro en Francia, antes de la primera línea de código. El desarrollo empieza después, y la barra sigue.',
        },
      },
    },
    sources: {
      fr: 'Sources — Recrutement : Apec, « Pratiques de recrutement des cadres » (2023), délai moyen de recrutement d’un cadre en France, tous secteurs : 12 semaines. Agence : fourchette de 3 à 6 mois publiée par les agences françaises de développement de MVP pour leurs propres missions. Les 7 jours ne sont pas une moyenne : c’est le délai que nous inscrivons au contrat.',
      en: 'Sources — Hiring: Apec, “Pratiques de recrutement des cadres” (2023), average time to hire a cadre in France, all sectors: 12 weeks. Agency: the 3-to-6-month range published by French MVP development agencies for their own engagements. The 7 days are not an average: it is the delay we write into the contract.',
      es: 'Fuentes — Contratación: Apec, «Pratiques de recrutement des cadres» (2023), plazo medio para contratar a un cuadro en Francia, todos los sectores: 12 semanas. Agencia: el rango de 3 a 6 meses publicado por las agencias francesas de desarrollo de MVP para sus propios encargos. Los 7 días no son una media: es el plazo que inscribimos en el contrato.',
    },
  },

  comparison: {
    title: {
      fr: 'Les alternatives, comparées honnêtement.',
      en: 'The alternatives, compared honestly.',
      es: 'Las alternativas, comparadas con honestidad.',
    },
    subtitle: {
      fr: 'Vous n’avez pas que cette option. Voici les trois autres, et ce qu’elles font mieux ou moins bien.',
      en: 'This isn’t your only option. Here are the other three, and where each is better or worse.',
      es: 'No es tu única opción. Aquí están las otras tres, y en qué son mejores o peores.',
    },
    aspectLabel: { fr: 'Critère', en: 'Criterion', es: 'Criterio' },
    agency: { fr: 'Agence au devis', en: 'Quote-based agency', es: 'Agencia con presupuesto' },
    freelance: { fr: 'Freelance', en: 'Freelancer', es: 'Freelance' },
    noCode: { fr: 'No-code', en: 'No-code', es: 'No-code' },
    khufu: { fr: 'Khufu · Sprint V1', en: 'Khufu · Sprint V1', es: 'Khufu · Sprint V1' },
    rows: [
      {
        aspect: { fr: 'Délai jusqu’à la production', en: 'Time to production', es: 'Plazo hasta producción' },
        agency: {
          fr: 'Plusieurs mois : cadrage, comités, allers-retours de validation.',
          en: 'Several months: scoping, committees, rounds of sign-off.',
          es: 'Varios meses: encuadre, comités, idas y venidas de validación.',
        },
        freelance: {
          fr: 'Variable : dépend d’une personne et de ses autres missions.',
          en: 'Variable: depends on one person and their other clients.',
          es: 'Variable: depende de una persona y de sus otros encargos.',
        },
        noCode: {
          fr: 'Quelques jours pour la démo, des semaines dès que le besoin sort de l’outil.',
          en: 'Days for the demo, weeks as soon as the need leaves the tool’s box.',
          es: 'Días para la demo, semanas en cuanto la necesidad sale de la herramienta.',
        },
        khufu: {
          fr: '7 jours, date fixée avant le premier jour.',
          en: '7 days, date set before day one.',
          es: '7 días, con la fecha fijada antes del primer día.',
        },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio' },
        agency: {
          fr: 'Devis sur mesure, révisé à chaque mouvement du périmètre.',
          en: 'Bespoke quote, revised every time the scope moves.',
          es: 'Presupuesto a medida, revisado cada vez que se mueve el alcance.',
        },
        freelance: {
          fr: 'Facturé au temps passé : le total se découvre à la fin.',
          en: 'Billed by time spent: you discover the total at the end.',
          es: 'Facturado por tiempo: el total se descubre al final.',
        },
        noCode: {
          fr: 'Licence mensuelle à vie, qui monte avec vos usages.',
          en: 'A monthly licence forever, rising with your usage.',
          es: 'Licencia mensual de por vida, que sube con el uso.',
        },
        khufu: {
          fr: 'Prix fixe, annoncé avant de commencer.',
          en: 'Fixed price, announced before we start.',
          es: 'Precio fijo, anunciado antes de empezar.',
        },
      },
      {
        aspect: { fr: 'Qui construit', en: 'Who builds it', es: 'Quién lo construye' },
        agency: {
          fr: 'Une équipe que vous ne choisissez pas, souvent partagée entre plusieurs comptes.',
          en: 'A team you don’t pick, usually split across several accounts.',
          es: 'Un equipo que no eliges, a menudo repartido entre varias cuentas.',
        },
        freelance: {
          fr: 'Une personne : rarement design, back, mobile et infra dans le même profil.',
          en: 'One person: rarely design, back-end, mobile and infra in the same profile.',
          es: 'Una persona: rara vez diseño, back, mobile e infra en el mismo perfil.',
        },
        noCode: {
          fr: 'Vous, ou un intégrateur, dans les limites de la plateforme.',
          en: 'You, or an integrator, within the platform’s limits.',
          es: 'Tú, o un integrador, dentro de los límites de la plataforma.',
        },
        khufu: {
          fr: 'Le founder, à plein temps sur votre produit pendant la semaine.',
          en: 'The founder, full-time on your product for the week.',
          es: 'El founder, a tiempo completo en tu producto durante la semana.',
        },
      },
      {
        aspect: { fr: 'Propriété du code', en: 'Code ownership', es: 'Propiedad del código' },
        agency: {
          fr: 'Selon le contrat — à vérifier ligne par ligne.',
          en: 'Depends on the contract — check it line by line.',
          es: 'Según el contrato: hay que revisarlo línea por línea.',
        },
        freelance: {
          fr: 'En général à vous, si le contrat le prévoit.',
          en: 'Usually yours, if the contract says so.',
          es: 'Normalmente tuyo, si el contrato lo prevé.',
        },
        noCode: {
          fr: 'Non : le produit vit dans la plateforme et n’en sort pas.',
          en: 'No: the product lives inside the platform and doesn’t leave it.',
          es: 'No: el producto vive dentro de la plataforma y no sale de ahí.',
        },
        khufu: {
          fr: 'À vous, dès le premier commit.',
          en: 'Yours, from the first commit.',
          es: 'Tuyo, desde el primer commit.',
        },
      },
      {
        aspect: { fr: 'Si ça dérape', en: 'If it slips', es: 'Si se desvía' },
        agency: {
          fr: 'Avenant, rallonge, nouveau devis.',
          en: 'Amendment, extension, new quote.',
          es: 'Adenda, ampliación, nuevo presupuesto.',
        },
        freelance: {
          fr: 'Le planning glisse au rythme des autres missions.',
          en: 'The schedule slides at the pace of the other gigs.',
          es: 'La planificación se desplaza al ritmo de los otros encargos.',
        },
        noCode: {
          fr: 'Refonte complète en vrai code, à repayer.',
          en: 'A full rebuild in real code, paid for again.',
          es: 'Reconstrucción completa en código real, a pagar de nuevo.',
        },
        khufu: {
          fr: 'Le prix est fixe : le dépassement est pour nous.',
          en: 'The price is fixed: the overrun is on us.',
          es: 'El precio es fijo: el exceso corre por nuestra cuenta.',
        },
      },
    ],
    note: {
      fr: 'Chaque option est la bonne quelque part. Le no-code est imbattable pour valider une idée sans budget. Un bon freelance au long cours coûte moins cher qu’un sprint si vous n’êtes pas pressé. Le Sprint V1 répond à une situation précise : être en ligne dans sept jours avec un produit qu’on pourra faire grandir.',
      en: 'Every option is the right one somewhere. No-code is unbeatable to validate an idea with no budget. A good freelancer over the long run costs less than a sprint if you’re not in a hurry. Sprint V1 answers one precise situation: being live in seven days with a product you can grow.',
      es: 'Cada opción es la correcta en algún caso. El no-code es imbatible para validar una idea sin presupuesto. Un buen freelance a largo plazo cuesta menos que un sprint si no tienes prisa. El Sprint V1 responde a una situación concreta: estar en línea en siete días con un producto que podrá crecer.',
    },
  },

  objections: {
    title: {
      fr: 'Les trois questions qu’on nous pose à chaque fois.',
      en: 'The three questions we get every single time.',
      es: 'Las tres preguntas que nos hacen siempre.',
    },
    subtitle: {
      fr: 'Autant y répondre ici, avant l’appel.',
      en: 'Might as well answer them here, before the call.',
      es: 'Mejor responderlas aquí, antes de la llamada.',
    },
    items: [
      {
        q: {
          fr: '« Livrer un produit en 7 jours, c’est impossible. »',
          en: '“Shipping a product in 7 days is impossible.”',
          es: '«Entregar un producto en 7 días es imposible.»',
        },
        a: {
          fr: 'C’est impossible avec l’organisation d’une agence classique : un chef de projet, un designer, deux développeurs et trois réunions de validation. Ici, une seule personne tient tous les rôles, amplifiée par l’IA sur la génération de code, les tests et la documentation. Il n’y a ni coordination, ni temps d’attente entre deux étapes. Le périmètre est arbitré avant le jour 1 : on livre le produit qui peut être lancé, pas la totalité de votre roadmap. C’est ce qui rend la date tenable — et c’est aussi pour ça que la section « pas pour vous » existe plus haut.',
          en: 'It is impossible with a classic agency’s org chart: a project manager, a designer, two developers and three sign-off meetings. Here, one person holds every role, amplified by AI on code generation, tests and documentation. There is no coordination overhead and no waiting between steps. The scope is settled before day 1: we ship the product that can launch, not your whole roadmap. That is what makes the date holdable — and it is also why the “not for you” section exists above.',
          es: 'Es imposible con la organización de una agencia clásica: un jefe de proyecto, un diseñador, dos desarrolladores y tres reuniones de validación. Aquí, una sola persona cubre todos los roles, amplificada por la IA en generación de código, pruebas y documentación. No hay coordinación ni esperas entre etapas. El alcance se decide antes del día 1: entregamos el producto que puede lanzarse, no toda tu hoja de ruta. Eso es lo que hace sostenible la fecha, y también por eso existe la sección «no es para ti» más arriba.',
        },
      },
      {
        q: {
          fr: '« Et si ça dérape en cours de semaine ? »',
          en: '“And what if it goes off the rails mid-week?”',
          es: '«¿Y si se tuerce a mitad de semana?»',
        },
        a: {
          fr: 'Le prix est fixe : un dépassement est à notre charge, pas à la vôtre. Le périmètre est écrit et validé avant le jour 1, donc les discussions de la semaine portent sur des arbitrages, jamais sur la facture. Vous parlez au founder tous les jours : un écart se voit le jour même, pas à la livraison. Et si le cadrage montre que votre produit demande plus que sept jours, on vous le dit avant de commencer — c’est le rôle du jour 0.',
          en: 'The price is fixed: an overrun is on us, not on you. The scope is written and approved before day 1, so the week’s conversations are about trade-offs, never about the invoice. You talk to the founder every day: a drift shows up the same day, not at delivery. And if scoping shows your product needs more than seven days, we tell you before we start — that is what day 0 is for.',
          es: 'El precio es fijo: un exceso corre por nuestra cuenta, no por la tuya. El alcance se escribe y se valida antes del día 1, así que las conversaciones de la semana son sobre prioridades, nunca sobre la factura. Hablas con el founder cada día: una desviación se ve el mismo día, no en la entrega. Y si el encuadre muestra que tu producto necesita más de siete días, te lo decimos antes de empezar: para eso está el día 0.',
        },
      },
      {
        q: {
          fr: '« Et après le jour 7, je fais quoi ? »',
          en: '“And after day 7, what do I do?”',
          es: '«¿Y después del día 7, qué hago?»',
        },
        a: {
          fr: 'Le code est à vous et il tourne sur vos propres comptes : vous pouvez continuer seul, recruter, ou confier la suite à n’importe quel prestataire. Si vous préférez ne pas vous en occuper, deux suites existent chez nous — Full Maintenance (infra managée, support avec SLA, jours de développement inclus chaque mois) ou du renfort remote facturé à l’heure. Aucune des deux n’est obligatoire et le sprint ne vous y engage pas : c’est la différence entre un produit livré et un abonnement déguisé.',
          en: 'The code is yours and it runs on your own accounts: you can continue alone, hire, or hand the rest to any provider. If you’d rather not deal with it, we offer two follow-ups — Full Maintenance (managed infra, support with SLA, development days included every month) or remote support billed by the hour. Neither is mandatory and the sprint doesn’t commit you to them: that’s the difference between a delivered product and a disguised subscription.',
          es: 'El código es tuyo y funciona en tus propias cuentas: puedes continuar solo, contratar o confiar el resto a cualquier proveedor. Si prefieres no ocuparte, tenemos dos continuaciones: Full Maintenance (infra gestionada, soporte con SLA, días de desarrollo incluidos cada mes) o refuerzo remoto facturado por horas. Ninguna es obligatoria y el sprint no te compromete: esa es la diferencia entre un producto entregado y una suscripción disfrazada.',
        },
      },
    ],
  },

  faq: {
    title: { fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes' },
    items: [
      {
        q: {
          fr: 'Qu’est-ce qui est inclus dans le prix ?',
          en: 'What’s included in the price?',
          es: '¿Qué incluye el precio?',
        },
        a: {
          fr: 'Le cadrage, le design, le développement, l’infrastructure, la mise en production, le site vitrine du produit, deux semaines de correctifs, la passation et le code source. Pas de frais de dossier, pas de licence Khufu. Les seuls coûts qui restent chez vous sont ceux de vos propres comptes — hébergement, nom de domaine, services tiers — qu’on configure pour vous et qui restent à votre nom.',
          en: 'Scoping, design, development, infrastructure, going live, the product’s showcase site, two weeks of fixes, handover and the source code. No setup fee, no Khufu licence. The only costs left with you are your own accounts — hosting, domain name, third-party services — which we set up for you and which stay in your name.',
          es: 'El encuadre, el diseño, el desarrollo, la infraestructura, la puesta en producción, el sitio escaparate del producto, dos semanas de correcciones, el traspaso y el código fuente. Sin gastos de apertura ni licencia Khufu. Los únicos costes que quedan de tu lado son los de tus propias cuentas —alojamiento, dominio, servicios de terceros—, que configuramos por ti y quedan a tu nombre.',
        },
      },
      {
        // ⛔ ONE question for all four, on purpose (khufu HQ decision cmu09j84).
        // Splitting them, or promoting them to the "included" list, would suggest
        // they might not have been included and lower the perceived level of the
        // offer. Keep the register confident, and keep it short.
        q: {
          fr: 'Le paiement, les analytics, les emails transactionnels et l’identité visuelle sont compris ?',
          en: 'Are payments, analytics, transactional emails and the visual identity included?',
          es: '¿El pago, la analítica, los emails transaccionales y la identidad visual están incluidos?',
        },
        a: {
          fr: 'Oui, évidemment. C’est ce que veut dire livrer un produit en production : si votre produit encaisse, il a Stripe branché ; s’il a des utilisateurs, il a ses emails transactionnels, sa mesure d’audience et une identité cohérente. On ne facture pas en supplément ce qui fait qu’un produit fonctionne.',
          en: 'Yes, obviously. That is what shipping a product to production means: if your product takes payments, Stripe is wired in; if it has users, it has its transactional emails, its analytics and a coherent identity. We don’t bill separately for what makes a product work.',
          es: 'Sí, evidentemente. Eso es lo que significa entregar un producto en producción: si tu producto cobra, lleva Stripe conectado; si tiene usuarios, tiene sus emails transaccionales, su medición de audiencia y una identidad coherente. No facturamos aparte lo que hace que un producto funcione.',
        },
      },
      {
        q: {
          fr: 'Le délai de 7 jours inclut-il la validation des stores ?',
          en: 'Do the 7 days include app store review?',
          es: '¿Los 7 días incluyen la validación de las stores?',
        },
        a: {
          fr: 'Non. Les sept jours couvrent la conception, le développement et la mise en production. Pour une application mobile, le délai de validation de l’App Store et de Google Play s’ajoute et ne dépend pas de nous. On soumet l’application au jour 7 et on gère les retours de validation.',
          en: 'No. The seven days cover design, development and going live. For a mobile app, App Store and Google Play review time comes on top and is outside our control. We submit the app on day 7 and handle the review feedback.',
          es: 'No. Los siete días cubren el diseño, el desarrollo y la puesta en producción. Para una app móvil, el plazo de validación de la App Store y Google Play se suma y no depende de nosotros. Enviamos la app el día 7 y gestionamos las respuestas de la revisión.',
        },
      },
      {
        q: { fr: 'Qui écrit le code ?', en: 'Who writes the code?', es: '¿Quién escribe el código?' },
        a: {
          fr: 'Adrien De Coster, le founder de Khufu, écrit le code de chaque sprint. Khufu est une agence AI-native : un opérateur senior amplifié par l’IA, pas une équipe junior encadrée. C’est la même personne du premier appel à la passation.',
          en: 'Adrien De Coster, Khufu’s founder, writes the code on every sprint. Khufu is an AI-native agency: one senior operator amplified by AI, not a supervised junior team. It’s the same person from the first call to the handover.',
          es: 'Adrien De Coster, el founder de Khufu, escribe el código de cada sprint. Khufu es una agencia AI-native: un operador sénior amplificado por la IA, no un equipo junior supervisado. Es la misma persona desde la primera llamada hasta el traspaso.',
        },
      },
      {
        q: {
          fr: 'Et si je veux changer le périmètre pendant la semaine ?',
          en: 'What if I want to change the scope during the week?',
          es: '¿Y si quiero cambiar el alcance durante la semana?',
        },
        a: {
          fr: 'On échange : ce qui entre doit compenser ce qui sort. Le périmètre garde la même taille, donc la date ne bouge pas. Un ajout qui ne peut rien compenser part en jour de développement après le sprint, à un tarif que vous connaissez déjà.',
          en: 'We swap: whatever comes in has to offset whatever goes out. The scope keeps the same size, so the date doesn’t move. An addition that can’t offset anything becomes a development day after the sprint, at a rate you already know.',
          es: 'Intercambiamos: lo que entra debe compensar lo que sale. El alcance mantiene el mismo tamaño, así que la fecha no se mueve. Un añadido que no compense nada pasa a ser un día de desarrollo después del sprint, a una tarifa que ya conoces.',
        },
      },
      {
        q: {
          fr: 'Vous travaillez avec quelles technologies ?',
          en: 'Which technologies do you work with?',
          es: '¿Con qué tecnologías trabajáis?',
        },
        a: {
          fr: 'Next.js et NestJS pour le web, React Native et Expo pour le mobile, PostgreSQL pour les données, Vercel et Google Cloud Run pour l’hébergement. Des technologies standard et très répandues, choisies pour que n’importe quel développeur puisse reprendre le produit après nous.',
          en: 'Next.js and NestJS for web, React Native and Expo for mobile, PostgreSQL for data, Vercel and Google Cloud Run for hosting. Standard, widely used technologies, chosen so any developer can pick the product up after us.',
          es: 'Next.js y NestJS para web, React Native y Expo para móvil, PostgreSQL para los datos, Vercel y Google Cloud Run para el alojamiento. Tecnologías estándar y muy extendidas, elegidas para que cualquier desarrollador pueda retomar el producto después de nosotros.',
        },
      },
      {
        q: {
          fr: 'Je peux voir ce que vous avez construit ?',
          en: 'Can I see what you have built?',
          es: '¿Puedo ver lo que habéis construido?',
        },
        a: {
          fr: 'Oui, et sans demander : les produits présentés sur cette page sont les nôtres, en ligne et utilisables tout de suite — OneStore.link, Clokizi, HerbaCRM. Vous pouvez créer un compte et juger par vous-même, plutôt que de lire une étude de cas écrite par nous.',
          en: 'Yes, and without asking: the products shown on this page are ours, live and usable right now — OneStore.link, Clokizi, HerbaCRM. You can create an account and judge for yourself, instead of reading a case study we wrote.',
          es: 'Sí, y sin pedirlo: los productos que aparecen en esta página son nuestros, en línea y usables ahora mismo — OneStore.link, Clokizi, HerbaCRM. Puedes crear una cuenta y juzgar por ti mismo, en vez de leer un caso de estudio escrito por nosotros.',
        },
      },
      {
        q: { fr: 'Où est basée l’agence ?', en: 'Where is the agency based?', es: '¿Dónde está la agencia?' },
        a: {
          fr: 'Khufu FZCO est enregistrée à Dubaï, aux Émirats arabes unis (licence 5214), et travaille en remote avec des clients francophones et internationaux, en français, anglais et espagnol.',
          en: 'Khufu FZCO is registered in Dubai, United Arab Emirates (licence 5214), and works remotely with French-speaking and international clients, in French, English and Spanish.',
          es: 'Khufu FZCO está registrada en Dubái, Emiratos Árabes Unidos (licencia 5214), y trabaja en remoto con clientes francófonos e internacionales, en francés, inglés y español.',
        },
      },
      {
        q: { fr: 'Comment ça commence, concrètement ?', en: 'How does it start, concretely?', es: '¿Cómo empieza, en concreto?' },
        a: {
          fr: 'Vous remplissez le formulaire de cette page. On revient sous 24 h avec un périmètre écrit, un prix et une date de livraison. Si ça vous va, vous signez et la semaine est calée. Si ça ne vous va pas, vous ne devez rien.',
          en: 'You fill in the form on this page. We come back within 24h with a written scope, a price and a delivery date. If it works for you, you sign and the week is booked. If it doesn’t, you owe nothing.',
          es: 'Rellenas el formulario de esta página. Volvemos en 24 h con un alcance escrito, un precio y una fecha de entrega. Si te encaja, firmas y la semana queda reservada. Si no te encaja, no debes nada.',
        },
      },
    ],
  },

  guarantee: {
    title: {
      fr: 'En production le jour 7, ou le retard vous est remboursé.',
      en: 'In production on day 7, or the delay is refunded.',
      es: 'En producción el día 7, o te devolvemos el retraso.',
    },
    body: {
      fr: 'Si votre V1 n’est pas en production à la fin du jour 7 pour une raison qui nous incombe, on vous rembourse 500 $ par jour de retard, plafonnés à 3 500 $.',
      en: 'If your V1 isn’t in production at the end of day 7 for a reason that is on us, we refund $500 per day of delay, capped at $3,500.',
      es: 'Si tu V1 no está en producción al final del día 7 por una causa que nos corresponde, te devolvemos 500 $ por día de retraso, con un tope de 3 500 $.',
    },
    terms: [
      {
        fr: 'Le périmètre signé au jour 0 fait foi : un ajout en cours de semaine décale la date d’autant, en accord avec vous.',
        en: 'The scope signed on day 0 is what counts: an addition mid-week moves the date accordingly, with your agreement.',
        es: 'El alcance firmado el día 0 es el que cuenta: un añadido a mitad de semana desplaza la fecha en consecuencia, de acuerdo contigo.',
      },
      {
        fr: 'Les attentes externes ne comptent pas dans le retard : validation App Store ou Google Play, accès à un service tiers, contenu ou décision de votre côté.',
        en: 'External waits don’t count as delay: App Store or Google Play review, access to a third-party service, content or a decision on your side.',
        es: 'Las esperas externas no cuentan como retraso: validación de App Store o Google Play, acceso a un servicio de terceros, contenido o una decisión de tu parte.',
      },
      {
        fr: 'Le remboursement est déduit de la facture finale, ou reversé si la facture est déjà réglée.',
        en: 'The refund is deducted from the final invoice, or paid back if the invoice is already settled.',
        es: 'El reembolso se descuenta de la factura final, o se devuelve si la factura ya está pagada.',
      },
    ],
  },

  prototype: {
    title: {
      fr: 'Pas encore prêt pour un sprint complet ?',
      en: 'Not ready for a full sprint yet?',
      es: '¿Aún no estás listo para un sprint completo?',
    },
    body: {
      fr: 'Prototype cliquable en 48 h — 990 $. Les parcours clés de votre produit, cliquables et testables auprès de vos utilisateurs, en deux jours.',
      en: 'Clickable prototype in 48h — $990. Your product’s key flows, clickable and testable with your users, in two days.',
      es: 'Prototipo clicable en 48 h — 990 $. Los flujos clave de tu producto, clicables y testables con tus usuarios, en dos días.',
    },
    cta: {
      fr: 'Demander le prototype',
      en: 'Request the prototype',
      es: 'Solicitar el prototipo',
    },
  },

  form: {
    title: {
      fr: 'Dites-nous ce que vous voulez lancer.',
      en: 'Tell us what you want to launch.',
      es: 'Cuéntanos qué quieres lanzar.',
    },
    body: {
      fr: 'Réponse sous 24 h avec un périmètre écrit, un prix et une date. Pas de séquence commerciale, pas de relance automatique — une réponse écrite par un humain.',
      en: 'Answer within 24h with a written scope, a price and a date. No sales sequence, no automated follow-ups — a reply written by a human.',
      es: 'Respuesta en 24 h con un alcance escrito, un precio y una fecha. Sin secuencia comercial ni recordatorios automáticos: una respuesta escrita por una persona.',
    },
    name: { fr: 'Nom', en: 'Name', es: 'Nombre' },
    email: { fr: 'Email professionnel', en: 'Work email', es: 'Email profesional' },
    // The form asks for a name, an email and — optionally — the brief. Nothing
    // else: the traffic is cold, paid and mostly on a phone, and every extra row
    // is paid for twice. The company was dropped; it is a question for the call.
    project: {
      fr: 'Ce que vous voulez lancer (optionnel)',
      en: 'What you want to launch (optional)',
      es: 'Qué quieres lanzar (opcional)',
    },
    projectPlaceholder: {
      fr: 'En trois lignes : à quoi sert le produit, pour qui, et ce qui doit absolument marcher le jour du lancement.',
      en: 'In three lines: what the product does, for whom, and what absolutely has to work on launch day.',
      es: 'En tres líneas: para qué sirve el producto, para quién, y qué tiene que funcionar sí o sí el día del lanzamiento.',
    },
    submit: {
      fr: 'Recevoir mon périmètre et ma date',
      en: 'Get my scope and my date',
      es: 'Recibir mi alcance y mi fecha',
    },
    sending: { fr: 'Envoi…', en: 'Sending…', es: 'Enviando…' },
    invalidEmail: {
      fr: 'Merci d’indiquer une adresse email valide.',
      en: 'Please enter a valid email address.',
      es: 'Introduce una dirección de email válida.',
    },
    successTitle: { fr: 'C’est noté.', en: 'Got it.', es: 'Recibido.' },
    successBody: {
      fr: 'On revient vers vous sous 24 h avec un périmètre écrit, un prix et une date de livraison. Si c’est urgent, WhatsApp est plus rapide.',
      en: 'We’ll come back within 24h with a written scope, a price and a delivery date. If it’s urgent, WhatsApp is faster.',
      es: 'Volvemos en 24 h con un alcance escrito, un precio y una fecha de entrega. Si es urgente, WhatsApp es más rápido.',
    },
    privacy: {
      fr: 'Vos informations servent uniquement à répondre à cette demande. Pas de revente, pas de newsletter non sollicitée.',
      en: 'Your details are only used to answer this request. No reselling, no unsolicited newsletter.',
      es: 'Tus datos solo se usan para responder a esta solicitud. Sin reventa ni newsletters no solicitadas.',
    },
    whatsapp: { fr: 'Ou par WhatsApp', en: 'Or on WhatsApp', es: 'O por WhatsApp' },
  },

  midCta: {
    deliverables: {
      fr: 'Réserver mon sprint',
      en: 'Book my sprint',
      es: 'Reservar mi sprint',
    },
    products: {
      fr: 'Parler de mon produit',
      en: 'Talk about my product',
      es: 'Hablar de mi producto',
    },
    objections: {
      fr: 'Obtenir mon périmètre et ma date',
      en: 'Get my scope and my date',
      es: 'Obtener mi alcance y mi fecha',
    },
  },

  finalCta: {
    title: {
      fr: 'Dans sept jours, votre produit peut être en ligne.',
      en: 'Seven days from now, your product can be live.',
      es: 'Dentro de siete días, tu producto puede estar en línea.',
    },
    body: {
      fr: 'Ou vous pouvez encore être en train de comparer des devis. Le formulaire prend deux minutes.',
      en: 'Or you can still be comparing quotes. The form takes two minutes.',
      es: 'O puedes seguir comparando presupuestos. El formulario lleva dos minutos.',
    },
  },
}

/** Fully-populated copy: fr/en/es as authored, every other locale filled from French. */
export const sprintLanding = fillLocaleDeep(content) as unknown as SprintLanding
