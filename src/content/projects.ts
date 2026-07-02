import type { Locale } from '@/i18n/config'

export type LocalizedText = Record<Locale, string>

export type Project = {
  slug: string
  name: string
  /** Built by Khufu as its own product (vs. client work). */
  internal: boolean
  /** Live URL, if public. */
  url?: string
  year?: number
  /** e.g. "SaaS web", "App mobile", "API + dashboard". */
  type: LocalizedText
  /** One punchy line. */
  tagline: LocalizedText
  /** 2–4 factual sentences — self-sufficient for GEO ingestion. */
  description: LocalizedText
  /** Named stack — reused for credibility + JSON-LD keywords. */
  stack: string[]
  /** Optional metric lines ("+40% conversion", "10k users"). */
  results?: LocalizedText[]
  /** Screenshot / cover image in /public (e.g. "/images/projects/onestore-link.jpg"). */
  image?: string
  /** Product logo/icon in /public (used on the cover when there's no screenshot, and in the case-study hero). */
  logo?: string
  /** DRAFT: copy to validate/correct with Adrien before it goes live. */
  draft?: boolean
}

export const projects: Project[] = [
  {
    slug: 'onestore-link',
    name: 'OneStore.link',
    internal: true,
    url: 'https://onestore.link',
    year: 2025,
    image: '/images/projects/onestore-link.webp',
    logo: '/images/products/onestore-link.svg',
    type: { fr: 'SaaS web', en: 'Web SaaS', es: 'SaaS web' },
    tagline: {
      fr: 'Un lien. Tous les stores.',
      en: 'One link. Every store.',
      es: 'Un enlace. Todas las stores.',
    },
    description: {
      fr: 'OneStore.link crée un lien intelligent unique qui redirige automatiquement les visiteurs iOS et Android vers le bon store — App Store ou Google Play. Sans inscription, gratuit, redirection en moins de 50 ms. Analytics intégrés (PostHog). Conçu et développé par Khufu.',
      en: 'OneStore.link creates a single smart link that automatically routes iOS and Android visitors to the right store — App Store or Google Play. No signup, free, sub-50ms redirect. Built-in analytics (PostHog). Designed and built by Khufu.',
      es: 'OneStore.link crea un único enlace inteligente que redirige automáticamente a los visitantes iOS y Android a la store correcta — App Store o Google Play. Sin registro, gratis, redirección en menos de 50 ms. Analítica integrada (PostHog). Diseñado y desarrollado por Khufu.',
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'PostHog'],
    results: [
      { fr: 'Redirection < 50 ms', en: 'Sub-50ms redirect', es: 'Redirección < 50 ms' },
      { fr: 'Sans inscription', en: 'No signup required', es: 'Sin registro' },
      { fr: 'Gratuit pour toujours', en: 'Free forever', es: 'Gratis para siempre' },
    ],
  },
  {
    slug: 'clokizi',
    name: 'Clokizi',
    internal: true,
    url: 'https://clokizi.com',
    year: 2024,
    image: '/images/projects/clokizi.webp',
    logo: '/images/products/clokizi.png',
    type: { fr: 'SaaS web + app mobile', en: 'Web SaaS + mobile app', es: 'SaaS web + app móvil' },
    tagline: {
      fr: 'Gérez vos équipes terrain en toute simplicité.',
      en: 'Manage your field teams, effortlessly.',
      es: 'Gestiona tus equipos de campo con total simplicidad.',
    },
    description: {
      fr: 'Clokizi est la plateforme tout-en-un de gestion d’interventions terrain : planifier les interventions (calendrier, Gantt, liste), répartir les agents et tout suivre en temps réel — du bureau ou du terrain. Application mobile avec pointage GPS. Conçue et développée par Khufu.',
      en: 'Clokizi is the all-in-one field service management platform: schedule jobs (calendar, Gantt, list), dispatch agents and track everything in real time — from the office or the field. Mobile app with GPS check-in. Designed and built by Khufu.',
      es: 'Clokizi es la plataforma todo-en-uno de gestión de intervenciones de campo: planificar intervenciones (calendario, Gantt, lista), asignar agentes y seguirlo todo en tiempo real — desde la oficina o el terreno. App móvil con fichaje GPS. Diseñada y desarrollada por Khufu.',
    },
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'React Native'],
  },
  {
    slug: 'herbacrm',
    name: 'HerbaCRM',
    internal: true,
    url: 'https://herbacrm.com',
    year: 2024,
    image: '/images/projects/herbacrm.webp',
    logo: '/images/products/herbacrm.png',
    type: { fr: 'SaaS web (CRM)', en: 'Web SaaS (CRM)', es: 'SaaS web (CRM)' },
    tagline: {
      fr: 'Le CRM des coachs bien-être, nutrition et fitness.',
      en: 'The CRM for wellness, nutrition and fitness coaches.',
      es: 'El CRM para coaches de bienestar, nutrición y fitness.',
    },
    description: {
      fr: 'HerbaCRM est la plateforme tout-en-un pour les coachs bien-être, nutrition et fitness : suivi des clients et des challengers, gestion des mesures et des commandes, et génération de revenus récurrents. Conçu et développé par Khufu.',
      en: 'HerbaCRM is the all-in-one platform for wellness, nutrition and fitness coaches: track clients and challengers, manage measurements and orders, and build recurring revenue. Designed and built by Khufu.',
      es: 'HerbaCRM es la plataforma todo-en-uno para coaches de bienestar, nutrición y fitness: seguimiento de clientes y participantes, gestión de mediciones y pedidos, y generación de ingresos recurrentes. Diseñado y desarrollado por Khufu.',
    },
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe'],
  },
  {
    slug: 'peach-farmer',
    name: 'Peach Farmer',
    internal: false,
    url: 'https://www.peachfarmer.com',
    year: 2024,
    image: '/images/projects/peach-farmer.webp',
    logo: '/images/products/peach-farmer.png',
    type: { fr: 'App mobile · Jeu', en: 'Mobile app · Game', es: 'App móvil · Juego' },
    tagline: {
      fr: 'Le TCG mobile qui transforme tes cartes en vraies expériences IRL.',
      en: 'The mobile TCG that turns your cards into real-life experiences.',
      es: 'El TCG móvil que convierte tus cartas en experiencias reales.',
    },
    description: {
      fr: 'Peach Farmer est un jeu de cartes à collectionner (TCG) sur mobile : les plus belles cartes se transforment en vraies expériences IRL — weekends à Ibiza, festivals, soirées privées. Conçu et développé par Khufu, du jeu au backend temps réel.',
      en: 'Peach Farmer is a mobile trading card game (TCG) where your best cards unlock real-life experiences — Ibiza weekends, festivals, private parties. Designed and built by Khufu, from gameplay to a real-time backend.',
      es: 'Peach Farmer es un juego de cartas coleccionables (TCG) para móvil donde tus mejores cartas se convierten en experiencias reales — fines de semana en Ibiza, festivales, fiestas privadas. Diseñado y desarrollado por Khufu, del juego al backend en tiempo real.',
    },
    stack: ['React Native', 'Expo', 'NestJS', 'PostgreSQL'],
    results: [
      { fr: '+250K téléchargements', en: '250K+ downloads', es: '+250K descargas' },
      { fr: '4,8/5 de note moyenne', en: '4.8/5 average rating', es: '4,8/5 de valoración media' },
      { fr: '12+ events IRL par an', en: '12+ IRL events per year', es: '12+ eventos IRL al año' },
    ],
  },
  {
    slug: 'labyrinth',
    name: 'Labyrinth',
    internal: true,
    url: 'https://onestore.link/labyrinth',
    year: 2025,
    image: '/images/projects/labyrinth.webp',
    logo: '/images/products/labyrinth.webp',
    type: { fr: 'App mobile · Jeu', en: 'Mobile app · Game', es: 'App móvil · Juego' },
    tagline: {
      fr: 'Pirate Treasure — le labyrinthe où chaque chemin cache un trésor.',
      en: 'Pirate Treasure — the maze where every path hides a treasure.',
      es: 'Pirate Treasure — el laberinto donde cada camino esconde un tesoro.',
    },
    description: {
      fr: 'Labyrinth – Pirate Treasure est un jeu mobile de labyrinthe et de chasse au trésor sur thème pirate, publié sur iOS et Android. Conçu et développé par Khufu.',
      en: 'Labyrinth – Pirate Treasure is a pirate-themed maze and treasure-hunt mobile game, published on iOS and Android. Designed and built by Khufu.',
      es: 'Labyrinth – Pirate Treasure es un juego móvil de laberinto y búsqueda del tesoro con temática pirata, publicado en iOS y Android. Diseñado y desarrollado por Khufu.',
    },
    stack: ['React Native', 'Expo', 'iOS', 'Android'],
  },

  // ── Client work (internal: false). DRAFT copy — Adrien to confirm the exact
  //    scope/results for each before publishing. Add a logo/screenshot when available.
  {
    slug: 'pandore',
    name: 'Pandore',
    internal: false,
    url: 'https://pandore.io',
    image: '/images/projects/pandore.webp',
    type: { fr: 'Client · SaaS web (BTP)', en: 'Client · Web SaaS (construction)', es: 'Cliente · SaaS web (construcción)' },
    tagline: {
      fr: 'La plateforme de gestion de projets et d’appels d’offres du BTP.',
      en: 'The project- and tender-management platform for construction.',
      es: 'La plataforma de gestión de proyectos y licitaciones para la construcción.',
    },
    description: {
      fr: 'Pandore est un SaaS de gestion de projets de construction : partage documentaire (DCE, marchés), gestion des lots & budget, appels d’offres, entreprises retenues et signature de marché. Khufu est intervenu sur le développement de la plateforme.',
      en: 'Pandore is a construction project-management SaaS: document sharing (tender files, contracts), lots & budget management, calls for tenders, awarded companies and contract signing. Khufu contributed to the platform’s development.',
      es: 'Pandore es un SaaS de gestión de proyectos de construcción: intercambio documental (pliegos, contratos), gestión de lotes y presupuesto, licitaciones, empresas adjudicatarias y firma de contratos. Khufu participó en el desarrollo de la plataforma.',
    },
    stack: ['React', 'TypeScript', 'Node.js'],
  },
  {
    slug: 'flatchr',
    name: 'Flatchr',
    internal: false,
    url: 'https://www.flatchr.io',
    image: '/images/projects/flatchr.webp',
    type: { fr: 'Client · App mobile', en: 'Client · Mobile app', es: 'Cliente · App móvil' },
    tagline: {
      fr: 'Refonte et évolution de l’app mobile Flatchr.',
      en: 'Rebuild and evolution of the Flatchr mobile app.',
      es: 'Rediseño y evolución de la app móvil de Flatchr.',
    },
    description: {
      fr: 'Khufu a repris, mis à niveau et fait évoluer l’application mobile de Flatchr (solution de recrutement / ATS) : refonte, mise à niveau technique, maintenance, corrections et développement de nouvelles fonctionnalités.',
      en: 'Khufu took over, upgraded and grew the Flatchr mobile app (recruitment / ATS solution): rebuild, technical upgrade, maintenance, fixes and new feature development.',
      es: 'Khufu retomó, actualizó e hizo evolucionar la app móvil de Flatchr (solución de reclutamiento / ATS): rediseño, actualización técnica, mantenimiento, correcciones y desarrollo de nuevas funcionalidades.',
    },
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    slug: 'mojo',
    name: 'Mojo',
    internal: false,
    url: 'https://www.mojo.video',
    image: '/images/projects/mojo.webp',
    type: { fr: 'Client · Plateforme web', en: 'Client · Web platform', es: 'Cliente · Plataforma web' },
    tagline: {
      fr: 'La plateforme web de collaboration créative en équipe.',
      en: 'The web platform for team creative collaboration.',
      es: 'La plataforma web de colaboración creativa en equipo.',
    },
    description: {
      fr: 'Khufu a conçu et mis en place la plateforme web de Mojo dédiée au travail collaboratif en équipe sur les créations : gestion des projets, collaboration et déploiement des contenus.',
      en: 'Khufu designed and built Mojo’s web platform for team collaboration on creative content: project management, collaboration and content deployment.',
      es: 'Khufu diseñó e implementó la plataforma web de Mojo para el trabajo colaborativo en equipo sobre las creaciones: gestión de proyectos, colaboración y despliegue de contenidos.',
    },
    stack: ['Next.js', 'React', 'TypeScript'],
  },
  {
    slug: 'tim-management',
    name: 'Tim Management',
    internal: false,
    year: 2022,
    image: '/images/projects/tim-management.webp',
    type: { fr: 'Client · Plateforme web', en: 'Client · Web platform', es: 'Cliente · Plataforma web' },
    tagline: {
      fr: 'Refonte front-end d’une plateforme de gestion de chantiers.',
      en: 'Front-end rebuild of a construction-management platform.',
      es: 'Rediseño del front-end de una plataforma de gestión de obras.',
    },
    description: {
      fr: 'Refonte complète du front-end de la plateforme Tim Management (BTP), avec migration de Vue.js vers React. La plateforme gère le suivi et le pointage des intervenants sur les chantiers.',
      en: 'Complete front-end rebuild of the Tim Management platform (construction industry), migrating from Vue.js to React. The platform handles tracking and time-logging of workers across job sites.',
      es: 'Rediseño completo del front-end de la plataforma Tim Management (construcción), con migración de Vue.js a React. La plataforma gestiona el seguimiento y el fichaje de los operarios en las obras.',
    },
    stack: ['React', 'Chakra UI', 'SASS', 'Laravel', 'PHP'],
    results: [
      { fr: 'Migration Vue.js → React', en: 'Vue.js → React migration', es: 'Migración Vue.js → React' },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
