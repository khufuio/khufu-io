import type { Locale } from '@/i18n/config'
import type { RouteKey } from './site'

export type L = Record<Locale, string>

export type ComparisonRow = { aspect: L; khufu: L; other: L }

export type Comparison = {
  slug: string
  metaTitle: L
  metaDescription: L
  title: L
  intro: L
  khufuLabel: L
  otherLabel: L
  rows: ComparisonRow[]
  conclusion: L
  cta: RouteKey
}

export type UseCase = {
  slug: string
  metaTitle: L
  metaDescription: L
  persona: L
  title: L
  intro: L
  problems: L[]
  approach: L
  outcomes: L[]
  cta: RouteKey
}

// ── Comparisons (/comparatifs/[slug]) ────────────────────────────────────────
export const comparisons: Comparison[] = [
  {
    slug: 'v1-vs-mvp',
    metaTitle: { fr: 'V1 vs MVP : quelle différence ?', en: 'V1 vs MVP: what’s the difference?', es: 'V1 vs MVP: ¿qué diferencia?' },
    metaDescription: {
      fr: 'V1 ou MVP ? La différence entre un MVP jetable et une vraie première version prête pour la production, et pourquoi Khufu livre une V1.',
      en: 'V1 or MVP? The difference between a throwaway MVP and a real production-ready first version, and why Khufu ships a V1.',
      es: '¿V1 o MVP? La diferencia entre un MVP desechable y una primera versión lista para producción, y por qué Khufu entrega una V1.',
    },
    title: { fr: 'V1 vs MVP', en: 'V1 vs MVP', es: 'V1 vs MVP' },
    intro: {
      fr: 'Un MVP cherche à tester une idée avec le strict minimum, souvent au prix d’un code jetable. Une V1 Khufu est une vraie première version, propre et prête pour la production dès le premier jour. Même délai, mais un produit qui dure.',
      en: 'An MVP tries to test an idea with the bare minimum, often at the cost of throwaway code. A Khufu V1 is a real first version, clean and production-ready from day one. Same timeline, but a product that lasts.',
      es: 'Un MVP intenta validar una idea con lo mínimo, a menudo con código desechable. Una V1 de Khufu es una primera versión real, limpia y lista para producción desde el primer día. El mismo plazo, pero un producto que perdura.',
    },
    khufuLabel: { fr: 'V1 (Khufu)', en: 'V1 (Khufu)', es: 'V1 (Khufu)' },
    otherLabel: { fr: 'MVP classique', en: 'Classic MVP', es: 'MVP clásico' },
    rows: [
      {
        aspect: { fr: 'Objectif', en: 'Goal', es: 'Objetivo' },
        khufu: { fr: 'Lancer un vrai produit utilisable', en: 'Ship a real, usable product', es: 'Lanzar un producto real y usable' },
        other: { fr: 'Tester une idée au minimum', en: 'Test an idea, bare minimum', es: 'Validar una idea al mínimo' },
      },
      {
        aspect: { fr: 'Qualité du code', en: 'Code quality', es: 'Calidad del código' },
        khufu: { fr: 'Stack de production, maintenable', en: 'Production stack, maintainable', es: 'Stack de producción, mantenible' },
        other: { fr: 'Souvent jetable, à réécrire', en: 'Often throwaway, to rewrite', es: 'A menudo desechable, a reescribir' },
      },
      {
        aspect: { fr: 'Après le lancement', en: 'After launch', es: 'Después del lanzamiento' },
        khufu: { fr: 'Évolue et scale sans dette', en: 'Evolves and scales, no debt', es: 'Evoluciona y escala, sin deuda' },
        other: { fr: 'Refonte souvent nécessaire', en: 'Often needs a rebuild', es: 'Suele requerir rehacerlo' },
      },
      {
        aspect: { fr: 'Délai', en: 'Timeline', es: 'Plazo' },
        khufu: { fr: '7 jours', en: '7 days', es: '7 días' },
        other: { fr: 'Semaines à mois', en: 'Weeks to months', es: 'Semanas a meses' },
      },
    ],
    conclusion: {
      fr: 'Chez Khufu, on skip l’étape MVP : on va directement à une V1 solide, en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'At Khufu, we skip the MVP stage: we go straight to a solid V1 in 7 days, for a fixed price of €15,000.',
      es: 'En Khufu nos saltamos la etapa de MVP: vamos directos a una V1 sólida en 7 días, por un precio fijo de 15 000 €.',
    },
    cta: 'sprint',
  },
  {
    slug: 'agence-vs-freelance',
    metaTitle: { fr: 'Agence vs freelance pour lancer un produit', en: 'Agency vs freelancer to launch a product', es: 'Agencia vs freelance para lanzar un producto' },
    metaDescription: {
      fr: 'Agence ou freelance pour lancer votre SaaS ou app mobile ? Avantages, risques et pourquoi une agence produit AI-native comme Khufu combine le meilleur des deux.',
      en: 'Agency or freelancer to launch your SaaS or mobile app? Pros, risks, and why an AI-native product agency like Khufu combines the best of both.',
      es: '¿Agencia o freelance para lanzar tu SaaS o app móvil? Ventajas, riesgos y por qué una agencia AI-native como Khufu combina lo mejor de ambos.',
    },
    title: { fr: 'Agence vs freelance', en: 'Agency vs freelancer', es: 'Agencia vs freelance' },
    intro: {
      fr: 'Un freelance est flexible mais limité en capacité et en couverture (design, back, mobile, infra). Une agence classique couvre tout mais est lente et chère. Khufu combine les deux : la vitesse d’un solo, la couverture full-stack d’une agence.',
      en: 'A freelancer is flexible but limited in capacity and coverage (design, back, mobile, infra). A classic agency covers everything but is slow and expensive. Khufu combines both: the speed of a solo, the full-stack coverage of an agency.',
      es: 'Un freelance es flexible pero limitado en capacidad y cobertura (diseño, back, móvil, infra). Una agencia clásica lo cubre todo pero es lenta y cara. Khufu combina ambos: la velocidad de un solo, la cobertura full-stack de una agencia.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu' },
    otherLabel: { fr: 'Freelance seul', en: 'Solo freelancer', es: 'Freelance solo' },
    rows: [
      {
        aspect: { fr: 'Couverture', en: 'Coverage', es: 'Cobertura' },
        khufu: { fr: 'Design, front, back, mobile, infra', en: 'Design, front, back, mobile, infra', es: 'Diseño, front, back, móvil, infra' },
        other: { fr: 'Une spécialité à la fois', en: 'One specialty at a time', es: 'Una especialidad a la vez' },
      },
      {
        aspect: { fr: 'Délai', en: 'Timeline', es: 'Plazo' },
        khufu: { fr: 'V1 en 7 jours', en: 'V1 in 7 days', es: 'V1 en 7 días' },
        other: { fr: 'Dépend de sa dispo', en: 'Depends on availability', es: 'Según disponibilidad' },
      },
      {
        aspect: { fr: 'Continuité', en: 'Continuity', es: 'Continuidad' },
        khufu: { fr: 'Maintenance & support en option', en: 'Maintenance & support available', es: 'Mantenimiento y soporte opcionales' },
        other: { fr: 'Risque d’indisponibilité', en: 'Risk of unavailability', es: 'Riesgo de indisponibilidad' },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio' },
        khufu: { fr: 'Forfait clair, 15 000 €', en: 'Clear flat fee, €15,000', es: 'Precio cerrado, 15 000 €' },
        other: { fr: 'TJM variable', en: 'Variable day rate', es: 'Tarifa variable' },
      },
    ],
    conclusion: {
      fr: 'Pour lancer vite et bien sans multiplier les prestataires, Khufu offre la couverture d’une agence à la vitesse d’un indépendant.',
      en: 'To launch fast and well without juggling providers, Khufu offers agency coverage at freelancer speed.',
      es: 'Para lanzar rápido y bien sin multiplicar proveedores, Khufu ofrece la cobertura de una agencia a la velocidad de un freelance.',
    },
    cta: 'sprint',
  },
  {
    slug: 'agence-vs-no-code',
    metaTitle: { fr: 'Agence vs no-code : que choisir ?', en: 'Agency vs no-code: which to choose?', es: 'Agencia vs no-code: ¿qué elegir?' },
    metaDescription: {
      fr: 'No-code ou développement sur-mesure ? Les limites du no-code pour un vrai produit, et quand une agence comme Khufu est le bon choix.',
      en: 'No-code or custom development? The limits of no-code for a real product, and when an agency like Khufu is the right choice.',
      es: '¿No-code o desarrollo a medida? Los límites del no-code para un producto real y cuándo una agencia como Khufu es la opción correcta.',
    },
    title: { fr: 'Agence vs no-code', en: 'Agency vs no-code', es: 'Agencia vs no-code' },
    intro: {
      fr: 'Le no-code est parfait pour un prototype ou un outil interne simple. Mais dès que le produit doit scaler, s’intégrer finement ou vous appartenir vraiment, il montre ses limites. Khufu livre du code sur-mesure, à vous, aussi vite qu’un no-code.',
      en: 'No-code is great for a prototype or a simple internal tool. But as soon as the product needs to scale, integrate deeply or truly be yours, it hits limits. Khufu ships custom code, yours, as fast as no-code.',
      es: 'El no-code es ideal para un prototipo o una herramienta interna simple. Pero en cuanto el producto necesita escalar, integrarse a fondo o ser realmente tuyo, muestra sus límites. Khufu entrega código a medida, tuyo, tan rápido como el no-code.',
    },
    khufuLabel: { fr: 'Khufu (sur-mesure)', en: 'Khufu (custom)', es: 'Khufu (a medida)' },
    otherLabel: { fr: 'No-code', en: 'No-code', es: 'No-code' },
    rows: [
      {
        aspect: { fr: 'Scalabilité', en: 'Scalability', es: 'Escalabilidad' },
        khufu: { fr: 'Sans limite technique', en: 'No technical ceiling', es: 'Sin techo técnico' },
        other: { fr: 'Plafonne vite', en: 'Hits a ceiling fast', es: 'Techo rápido' },
      },
      {
        aspect: { fr: 'Propriété', en: 'Ownership', es: 'Propiedad' },
        khufu: { fr: 'Code source à vous', en: 'Source code is yours', es: 'Código fuente tuyo' },
        other: { fr: 'Dépendant de la plateforme', en: 'Locked to the platform', es: 'Atado a la plataforma' },
      },
      {
        aspect: { fr: 'Personnalisation', en: 'Customization', es: 'Personalización' },
        khufu: { fr: 'Totale', en: 'Total', es: 'Total' },
        other: { fr: 'Limitée aux briques dispo', en: 'Limited to available blocks', es: 'Limitada a los bloques' },
      },
      {
        aspect: { fr: 'Coûts récurrents', en: 'Recurring costs', es: 'Costes recurrentes' },
        khufu: { fr: 'Hébergement maîtrisé', en: 'Controlled hosting', es: 'Alojamiento controlado' },
        other: { fr: 'Abonnements qui grimpent', en: 'Subscriptions that climb', es: 'Suscripciones que suben' },
      },
    ],
    conclusion: {
      fr: 'Le no-code pour valider une idée, Khufu pour construire le vrai produit — sans repartir de zéro.',
      en: 'No-code to validate an idea, Khufu to build the real product — without starting over.',
      es: 'No-code para validar una idea, Khufu para construir el producto real — sin empezar de cero.',
    },
    cta: 'sprint',
  },
  {
    slug: 'khufu-vs-agence-classique',
    metaTitle: { fr: 'Khufu vs agence classique', en: 'Khufu vs a classic agency', es: 'Khufu vs agencia clásica' },
    metaDescription: {
      fr: 'Pourquoi choisir Khufu plutôt qu’une agence web classique : 7 jours au lieu de 3 mois, prix fixe affiché, code livré et approche AI-native.',
      en: 'Why choose Khufu over a classic web agency: 7 days instead of 3 months, a fixed public price, code delivered and an AI-native approach.',
      es: 'Por qué elegir Khufu en lugar de una agencia web clásica: 7 días en vez de 3 meses, precio fijo público, código entregado y enfoque AI-native.',
    },
    title: { fr: 'Khufu vs agence classique', en: 'Khufu vs classic agency', es: 'Khufu vs agencia clásica' },
    intro: {
      fr: 'Une agence classique met souvent 3 mois, avec des devis flous et des allers-retours interminables. Khufu inverse tout : périmètre net, prix affiché, et une V1 en production en 7 jours grâce à une approche AI-native.',
      en: 'A classic agency often takes 3 months, with vague quotes and endless back-and-forth. Khufu flips it: tight scope, public price, and a V1 in production in 7 days thanks to an AI-native approach.',
      es: 'Una agencia clásica suele tardar 3 meses, con presupuestos vagos e idas y venidas interminables. Khufu lo invierte: alcance claro, precio público y una V1 en producción en 7 días gracias a un enfoque AI-native.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu' },
    otherLabel: { fr: 'Agence classique', en: 'Classic agency', es: 'Agencia clásica' },
    rows: [
      {
        aspect: { fr: 'Délai de livraison', en: 'Delivery time', es: 'Plazo de entrega' },
        khufu: { fr: '7 jours', en: '7 days', es: '7 días' },
        other: { fr: '2 à 4 mois', en: '2 to 4 months', es: '2 a 4 meses' },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio' },
        khufu: { fr: 'Fixe et affiché (15 000 €)', en: 'Fixed and public (€15,000)', es: 'Fijo y público (15 000 €)' },
        other: { fr: 'Devis flou, souvent 40k+', en: 'Vague quote, often €40k+', es: 'Presupuesto vago, a menudo 40k+' },
      },
      {
        aspect: { fr: 'Méthode', en: 'Method', es: 'Método' },
        khufu: { fr: 'AI-native, périmètre serré', en: 'AI-native, tight scope', es: 'AI-native, alcance ajustado' },
        other: { fr: 'Cycles longs, réunions', en: 'Long cycles, meetings', es: 'Ciclos largos, reuniones' },
      },
      {
        aspect: { fr: 'Le code', en: 'The code', es: 'El código' },
        khufu: { fr: 'À vous, dès le jour 1', en: 'Yours, from day 1', es: 'Tuyo, desde el día 1' },
        other: { fr: 'Souvent verrouillé', en: 'Often locked in', es: 'A menudo bloqueado' },
      },
    ],
    conclusion: {
      fr: 'Même exigence de qualité, sans les 3 mois ni le devis flou : Khufu livre votre produit en une semaine.',
      en: 'The same quality bar, without the 3 months or the vague quote: Khufu ships your product in one week.',
      es: 'La misma exigencia de calidad, sin los 3 meses ni el presupuesto vago: Khufu entrega tu producto en una semana.',
    },
    cta: 'sprint',
  },
]

// ── Use cases (/cas-d-usage/[slug]) ──────────────────────────────────────────
export const useCases: UseCase[] = [
  {
    slug: 'lancer-un-saas',
    metaTitle: { fr: 'Lancer un SaaS en 1 semaine', en: 'Launch a SaaS in one week', es: 'Lanzar un SaaS en una semana' },
    metaDescription: {
      fr: 'Comment lancer un SaaS rapidement : Khufu conçoit, développe et met en production votre SaaS en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'How to launch a SaaS fast: Khufu designs, builds and ships your SaaS in 7 days, for a fixed price of €15,000.',
      es: 'Cómo lanzar un SaaS rápido: Khufu diseña, desarrolla y pone en producción tu SaaS en 7 días, por un precio fijo de 15 000 €.',
    },
    persona: { fr: 'SaaS', en: 'SaaS', es: 'SaaS' },
    title: { fr: 'Lancer votre SaaS', en: 'Launch your SaaS', es: 'Lanzar tu SaaS' },
    intro: {
      fr: 'Vous avez une idée de SaaS et vous voulez la mettre entre les mains d’utilisateurs sans attendre des mois. Khufu conçoit et développe votre SaaS — auth, paiement, dashboard, base de données — et le met en production en une semaine.',
      en: 'You have a SaaS idea and want it in users’ hands without waiting months. Khufu designs and builds your SaaS — auth, payments, dashboard, database — and ships it to production in one week.',
      es: 'Tienes una idea de SaaS y quieres ponerla en manos de usuarios sin esperar meses. Khufu diseña y desarrolla tu SaaS — auth, pagos, dashboard, base de datos — y lo pone en producción en una semana.',
    },
    problems: [
      { fr: 'Des mois de dev avant le moindre utilisateur', en: 'Months of dev before a single user', es: 'Meses de desarrollo antes del primer usuario' },
      { fr: 'Des devis d’agence à 40k+ et flous', en: 'Vague agency quotes at €40k+', es: 'Presupuestos de agencia de 40k+ y vagos' },
      { fr: 'Un no-code qui plafonne dès la croissance', en: 'No-code that caps out on growth', es: 'No-code que se estanca al crecer' },
    ],
    approach: {
      fr: 'On cadre le périmètre au jour 1, on développe sur une stack éprouvée (Next.js, NestJS, PostgreSQL), et on livre un SaaS en production, à vous, en 7 jours.',
      en: 'We scope on day 1, build on a proven stack (Next.js, NestJS, PostgreSQL), and deliver a production SaaS, yours, in 7 days.',
      es: 'Definimos el alcance el día 1, desarrollamos sobre un stack probado (Next.js, NestJS, PostgreSQL) y entregamos un SaaS en producción, tuyo, en 7 días.',
    },
    outcomes: [
      { fr: 'Un SaaS lançable en 7 jours', en: 'A launchable SaaS in 7 days', es: 'Un SaaS lanzable en 7 días' },
      { fr: 'Code source à vous, prêt à scaler', en: 'Source code yours, ready to scale', es: 'Código fuente tuyo, listo para escalar' },
      { fr: 'Prix fixe : 15 000 €', en: 'Fixed price: €15,000', es: 'Precio fijo: 15 000 €' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'lancer-une-app-mobile',
    metaTitle: { fr: 'Lancer une app mobile en 1 semaine', en: 'Launch a mobile app in one week', es: 'Lanzar una app móvil en una semana' },
    metaDescription: {
      fr: 'Comment lancer une app mobile rapidement : Khufu développe votre app iOS et Android (React Native / Expo) et la prépare pour les stores en 7 jours.',
      en: 'How to launch a mobile app fast: Khufu builds your iOS and Android app (React Native / Expo) and gets it store-ready in 7 days.',
      es: 'Cómo lanzar una app móvil rápido: Khufu desarrolla tu app iOS y Android (React Native / Expo) y la deja lista para las stores en 7 días.',
    },
    persona: { fr: 'App mobile', en: 'Mobile app', es: 'App móvil' },
    title: { fr: 'Lancer votre app mobile', en: 'Launch your mobile app', es: 'Lanzar tu app móvil' },
    intro: {
      fr: 'Vous voulez une app iOS et Android sans monter une équipe mobile. Khufu conçoit et développe votre app en React Native / Expo et la prépare pour la publication sur l’App Store et Google Play en une semaine.',
      en: 'You want an iOS and Android app without hiring a mobile team. Khufu designs and builds your app in React Native / Expo and gets it ready for the App Store and Google Play in one week.',
      es: 'Quieres una app iOS y Android sin montar un equipo móvil. Khufu diseña y desarrolla tu app en React Native / Expo y la deja lista para la App Store y Google Play en una semana.',
    },
    problems: [
      { fr: 'Recruter iOS + Android coûte cher et prend du temps', en: 'Hiring iOS + Android is slow and costly', es: 'Contratar iOS + Android es lento y caro' },
      { fr: 'Deux bases de code à maintenir', en: 'Two codebases to maintain', es: 'Dos bases de código que mantener' },
      { fr: 'Le time-to-market s’allonge', en: 'Time-to-market keeps slipping', es: 'El time-to-market se alarga' },
    ],
    approach: {
      fr: 'Une seule base React Native / Expo pour iOS et Android, développée assistée par l’IA, avec le backend et les intégrations nécessaires — prête pour les stores en 7 jours.',
      en: 'A single React Native / Expo codebase for iOS and Android, AI-assisted, with the backend and integrations you need — store-ready in 7 days.',
      es: 'Una sola base React Native / Expo para iOS y Android, asistida por IA, con el backend e integraciones necesarios — lista para las stores en 7 días.',
    },
    outcomes: [
      { fr: 'Une app iOS + Android prête pour les stores', en: 'An iOS + Android app, store-ready', es: 'Una app iOS + Android lista para las stores' },
      { fr: 'Une seule base de code, maintenable', en: 'A single, maintainable codebase', es: 'Una sola base de código, mantenible' },
      { fr: 'Prix fixe : 15 000 €', en: 'Fixed price: €15,000', es: 'Precio fijo: 15 000 €' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'entrepreneur-premier-produit',
    metaTitle: { fr: 'Entrepreneur : lancer votre premier produit', en: 'Founder: launch your first product', es: 'Emprendedor: lanzar tu primer producto' },
    metaDescription: {
      fr: 'Vous êtes entrepreneur et lancez votre premier produit ? Khufu transforme votre idée en produit lançable en 7 jours, prix fixe, sans équipe technique.',
      en: 'A founder launching your first product? Khufu turns your idea into a launchable product in 7 days, fixed price, with no tech team.',
      es: '¿Emprendedor lanzando tu primer producto? Khufu convierte tu idea en un producto lanzable en 7 días, precio fijo, sin equipo técnico.',
    },
    persona: { fr: 'Nouvel entrepreneur', en: 'New founder', es: 'Nuevo emprendedor' },
    title: { fr: 'Votre premier produit, lancé', en: 'Your first product, launched', es: 'Tu primer producto, lanzado' },
    intro: {
      fr: 'Vous avez une idée mais pas d’équipe technique. Plutôt que de chercher un CTO ou d’apprendre à coder, Khufu transforme votre idée en produit réel, en production, en une semaine — pour un prix que vous connaissez à l’avance.',
      en: 'You have an idea but no tech team. Instead of hunting for a CTO or learning to code, Khufu turns your idea into a real product, in production, in one week — for a price you know upfront.',
      es: 'Tienes una idea pero no un equipo técnico. En lugar de buscar un CTO o aprender a programar, Khufu convierte tu idea en un producto real, en producción, en una semana — por un precio que conoces de antemano.',
    },
    problems: [
      { fr: 'Pas d’équipe ni de compétences techniques', en: 'No team or technical skills', es: 'Sin equipo ni conocimientos técnicos' },
      { fr: 'Peur de dépenser trop pour un premier essai', en: 'Fear of overspending on a first try', es: 'Miedo a gastar de más en un primer intento' },
      { fr: 'Besoin d’aller vite pour tester le marché', en: 'Need to move fast to test the market', es: 'Necesidad de ir rápido para probar el mercado' },
    ],
    approach: {
      fr: 'On vous accompagne du cadrage à la mise en production. Vous gardez la vision, on s’occupe de tout le reste — design, dev, hébergement — en 7 jours.',
      en: 'We guide you from scoping to production. You keep the vision, we handle everything else — design, dev, hosting — in 7 days.',
      es: 'Te acompañamos del alcance a la producción. Tú mantienes la visión, nosotros nos ocupamos del resto — diseño, desarrollo, alojamiento — en 7 días.',
    },
    outcomes: [
      { fr: 'Un produit en ligne pour tester votre marché', en: 'A live product to test your market', es: 'Un producto online para probar tu mercado' },
      { fr: 'Un budget maîtrisé, connu d’avance', en: 'A controlled, upfront budget', es: 'Un presupuesto controlado y conocido' },
      { fr: 'Le code et le produit vous appartiennent', en: 'The code and product are yours', es: 'El código y el producto son tuyos' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'startup-valider-vite',
    metaTitle: { fr: 'Startup : valider votre produit vite', en: 'Startup: validate your product fast', es: 'Startup: valida tu producto rápido' },
    metaDescription: {
      fr: 'Startup qui doit valider vite ? Khufu livre une V1 en production en 7 jours pour tester votre marché avant de lever ou de recruter une équipe.',
      en: 'A startup that must validate fast? Khufu ships a production V1 in 7 days to test your market before raising or hiring a team.',
      es: '¿Una startup que debe validar rápido? Khufu entrega una V1 en producción en 7 días para probar tu mercado antes de levantar o contratar equipo.',
    },
    persona: { fr: 'Startup', en: 'Startup', es: 'Startup' },
    title: { fr: 'Valider vite, avant de scaler', en: 'Validate fast, before scaling', es: 'Validar rápido, antes de escalar' },
    intro: {
      fr: 'Une startup vit et meurt sur sa vitesse d’exécution. Plutôt que de brûler des mois de runway à recruter, Khufu livre une V1 en production en 7 jours pour mettre votre hypothèse à l’épreuve du marché.',
      en: 'A startup lives and dies on execution speed. Instead of burning months of runway hiring, Khufu ships a production V1 in 7 days to put your hypothesis to the market test.',
      es: 'Una startup vive y muere por su velocidad de ejecución. En lugar de quemar meses de runway contratando, Khufu entrega una V1 en producción en 7 días para poner tu hipótesis a prueba en el mercado.',
    },
    problems: [
      { fr: 'Le runway se consume vite', en: 'Runway burns fast', es: 'El runway se consume rápido' },
      { fr: 'Recruter une équipe prend des mois', en: 'Hiring a team takes months', es: 'Contratar equipo lleva meses' },
      { fr: 'Il faut des preuves pour lever', en: 'You need traction to raise', es: 'Necesitas tracción para levantar' },
    ],
    approach: {
      fr: 'On livre une V1 solide et mesurable (analytics inclus) en une semaine. Vous testez, vous apprenez, et vous itérez en régie ou en maintenance ensuite.',
      en: 'We ship a solid, measurable V1 (analytics included) in one week. You test, you learn, then iterate on a day rate or maintenance afterwards.',
      es: 'Entregamos una V1 sólida y medible (analítica incluida) en una semana. Pruebas, aprendes y luego iteras por horas o en mantenimiento.',
    },
    outcomes: [
      { fr: 'Une V1 mesurable en 7 jours', en: 'A measurable V1 in 7 days', es: 'Una V1 medible en 7 días' },
      { fr: 'Des preuves pour convaincre investisseurs et users', en: 'Proof for investors and users', es: 'Pruebas para inversores y usuarios' },
      { fr: 'Une base propre pour scaler ensuite', en: 'A clean base to scale from', es: 'Una base limpia para escalar' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'grande-entreprise-tester-un-produit',
    metaTitle: { fr: 'Grande entreprise : tester un produit vite', en: 'Enterprise: test a product fast', es: 'Gran empresa: probar un producto rápido' },
    metaDescription: {
      fr: 'Grande entreprise qui veut tester un nouveau produit sans mobiliser l’IT ? Khufu livre un prototype en production en 7 jours, hors des cycles internes.',
      en: 'A large company wanting to test a new product without tying up IT? Khufu ships a production prototype in 7 days, outside internal cycles.',
      es: '¿Una gran empresa que quiere probar un producto sin movilizar a TI? Khufu entrega un prototipo en producción en 7 días, fuera de los ciclos internos.',
    },
    persona: { fr: 'Grande entreprise', en: 'Enterprise', es: 'Gran empresa' },
    title: { fr: 'Tester un produit, hors des cycles internes', en: 'Test a product, outside internal cycles', es: 'Probar un producto, fuera de los ciclos internos' },
    intro: {
      fr: 'Les cycles internes d’une grande entreprise sont longs et l’IT est souvent saturée. Khufu agit comme une cellule d’innovation externe : on livre un produit ou un prototype en production en 7 jours, pour valider une idée sans mobiliser vos équipes.',
      en: 'Internal cycles at a large company are slow and IT is often overloaded. Khufu acts as an external innovation unit: we ship a product or prototype to production in 7 days, to validate an idea without tying up your teams.',
      es: 'Los ciclos internos de una gran empresa son lentos y TI suele estar saturada. Khufu actúa como una célula de innovación externa: entregamos un producto o prototipo en producción en 7 días, para validar una idea sin movilizar a tus equipos.',
    },
    problems: [
      { fr: 'Cycles internes longs, IT saturée', en: 'Slow internal cycles, overloaded IT', es: 'Ciclos internos lentos, TI saturada' },
      { fr: 'Difficile de tester une idée rapidement', en: 'Hard to test an idea quickly', es: 'Difícil probar una idea rápido' },
      { fr: 'Coûts et lourdeur des grands projets', en: 'Cost and weight of big projects', es: 'Coste y pesadez de los grandes proyectos' },
    ],
    approach: {
      fr: 'On travaille comme une équipe produit externe, agile et cadrée : périmètre défini, livraison en 7 jours, puis passage de relais à vos équipes ou maintenance par Khufu.',
      en: 'We work as an external product team, agile and scoped: defined scope, delivery in 7 days, then handover to your teams or maintenance by Khufu.',
      es: 'Trabajamos como un equipo de producto externo, ágil y acotado: alcance definido, entrega en 7 días, y luego traspaso a tus equipos o mantenimiento por Khufu.',
    },
    outcomes: [
      { fr: 'Un prototype ou produit en production en 7 jours', en: 'A prototype or product in production in 7 days', es: 'Un prototipo o producto en producción en 7 días' },
      { fr: 'Une idée validée sans mobiliser l’IT', en: 'An idea validated without tying up IT', es: 'Una idea validada sin movilizar a TI' },
      { fr: 'Un passage de relais propre', en: 'A clean handover', es: 'Un traspaso limpio' },
    ],
    cta: 'sprint',
  },
]

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug)
export const getUseCase = (slug: string) => useCases.find((u) => u.slug === slug)
