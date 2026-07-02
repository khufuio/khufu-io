import { site, foundingLocation } from '@/content/site'

const eur = (n: number) => n.toLocaleString('fr-FR')

/**
 * Canonical FR dictionary. The `Dictionary` type is derived from this object,
 * so `en.ts` / `es.ts` must match its shape (see getDictionary).
 */
export const fr = {
  meta: {
    locale: 'fr',
    // Default OG / title suffix
    brandSuffix: 'Khufu — Votre V1 en 1 semaine',
  },

  nav: {
    offers: 'Offres',
    maintenance: 'Maintenance',
    work: 'Réalisations',
    method: 'Méthode',
    about: 'À propos',
    contact: 'Contact',
    cta: 'Réserver un sprint',
  },

  common: {
    seeWork: 'Voir les réalisations',
    bookSprint: 'Réserver un sprint',
    talkToUs: 'Parler à Khufu',
    from: 'À partir de',
    perDay: '/ jour',
    perMonth: '/ mois',
    days: 'jours',
    learnMore: 'En savoir plus',
    getStarted: 'Démarrer',
    draftBadge: 'Aperçu',
  },

  home: {
    // GEO: the H1 states the entity + core promise in one self-sufficient line.
    heroKicker: 'Agence produit AI-native',
    heroTitle: 'Votre V1 en 1 semaine.',
    heroSubtitle: `On conçoit, développe et livre votre SaaS ou votre app mobile en ${site.v1Days} jours. Prix fixe : ${eur(site.v1PriceEUR)} €.`,
    heroPrimaryCta: 'Réserver un sprint',
    heroSecondaryCta: 'Voir les réalisations',
    heroProof: `${site.v1Days} jours · forfait ${eur(site.v1PriceEUR)} € · code livré, en production`,
    heroFigures: [
      { value: `${site.v1Days} jours`, label: 'du brief à la mise en production' },
      { value: `${eur(site.v1PriceEUR)} €`, label: 'prix fixe, tout compris' },
    ],

    statsTitle: 'Ce que “1 semaine” veut dire',
    stats: [
      { value: `${site.v1Days} jours`, label: 'du kickoff à la V1 en production' },
      { value: `${eur(site.v1PriceEUR)} €`, label: 'forfait Sprint V1, périmètre défini à l’avance' },
      { value: `${eur(site.dailyRateEUR)} €`, label: 'TJM remote (200 €/h) pour la suite' },
      { value: '100 %', label: 'code livré, hébergé, à vous' },
    ],

    problemTitle: 'Une agence classique met 3 mois ? Vous n’avez pas 3 mois.',
    problemBody:
      'Les cycles interminables, les devis flous et les allers-retours tuent les projets avant leur lancement. Khufu fait l’inverse : périmètre serré, décisions rapides, et une V1 réellement lançable en fin de semaine.',

    howTitle: 'Comment on va si vite',
    how: [
      {
        title: 'AI-native, de bout en bout',
        body: 'On code assisté par l’IA à chaque étape — design, dev, tests, doc. Le même travail, une fraction du temps, sans sacrifier la qualité.',
      },
      {
        title: 'Une stack unique et rodée',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. On ne réinvente rien : on assemble une base éprouvée, prête à scaler.',
      },
      {
        title: 'Un founder-operator aux commandes',
        body: 'Khufu a lancé ses propres produits (OneStore.link, Clokizi, HerbaCRM…). On construit votre produit comme le nôtre : orienté résultat, pas facturation.',
      },
    ],

    offersTitle: 'Trois façons de travailler avec Khufu',
    offersSubtitle: 'Du lancement éclair à l’accompagnement dans la durée.',

    workTitle: 'Des produits, pas des slides',
    workSubtitle: 'Une sélection de produits conçus et livrés par Khufu.',
    workCta: 'Toutes les réalisations',

    clientsTitle: 'Ils nous font confiance',
    testimonialsTitle: 'Ce qu’ils en disent',

    finalCtaTitle: 'Votre V1, en production vendredi.',
    finalCtaBody: 'Dites-nous ce que vous voulez lancer. On vous répond sous 24 h avec un périmètre et une date.',
    finalCtaButton: 'Réserver un sprint',
  },

  offers: {
    metaTitle: 'Offres & tarifs',
    metaDescription: `Sprint V1 en ${site.v1Days} jours à partir de ${eur(site.v1PriceEUR)} €, Full Maintenance mensuelle, et renfort remote à ${eur(site.dailyRateEUR)} €/jour (200 €/h).`,
    title: 'Des offres nettes, des prix affichés.',
    subtitle: 'Pas de devis à rallonge. Vous savez ce que vous payez et ce que vous recevez.',
    flagshipBadge: 'Notre offre phare',
    detailCta: 'En savoir plus',
    sprintCta: 'Découvrir le Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        price: `${eur(site.v1PriceEUR)} €`,
        priceNote: 'forfait',
        pitch: `Votre première version, conçue et livrée en ${site.v1Days} jours.`,
        featured: false,
        features: [
          'Cadrage et design produit',
          'Développement SaaS ou app mobile',
          'Mise en production + hébergement',
          'Code source livré, à vous',
          'Handover et documentation',
        ],
        cta: 'Réserver un sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        price: 'dès 1 490 €',
        priceNote: '/ mois',
        pitch: 'On garde votre produit vivant : infra, support et jours de dev inclus.',
        featured: true,
        features: [
          'Infra managée : hébergement, monitoring, backups, sécurité',
          'Support avec SLA (temps de réponse garanti)',
          'Jours de développement inclus chaque mois',
          'Mises à jour et corrections',
          'Rapport mensuel',
        ],
        cta: 'Voir les paliers',
      },
      {
        id: 'regie',
        name: 'Remote',
        price: `${eur(site.dailyRateEUR)} €`,
        priceNote: '/ jour',
        pitch: 'Un renfort senior 100 % remote, facturé à l’heure — 200 €/h.',
        featured: false,
        features: [
          '100 % remote',
          '200 €/h — granularité horaire',
          'Développement, architecture, conseil',
          'Sans engagement de durée',
        ],
        cta: 'Parler à Khufu',
      },
    ],
    remoteNote:
      'Régie sur site possible : 1 semaine minimum, +50 % sur le tarif, avec frais (déplacement, logement) à la charge du client.',
    guaranteesTitle: 'Ce qu’on garantit',
    guarantees: [
      'Un périmètre écrit et validé avant de commencer.',
      'Une date de livraison, tenue.',
      'Le code source vous appartient, dès le premier jour.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — votre produit en 7 jours',
    metaDescription:
      'Le Sprint V1 de Khufu : un SaaS ou une app mobile conçu, développé et mis en production en 7 jours, pour un prix fixe de 15 000 €.',
    kicker: 'Offre phare',
    title: 'Votre V1 en 7 jours. Prix fixe.',
    subtitle:
      'Notre offre principale : on conçoit, développe et met en production votre SaaS ou votre app mobile en une semaine — périmètre défini à l’avance, 15 000 € tout compris.',
    includesTitle: 'Ce qui est inclus',
    processTitle: 'Le déroulé, jour par jour',
    ctaTitle: 'Prêt à lancer votre V1 ?',
    ctaBody: 'Dites-nous ce que vous voulez lancer. Réponse sous 24 h avec un périmètre et une date.',
    ctaButton: 'Réserver un sprint',
  },

  remotePage: {
    metaTitle: 'Remote — renfort produit à l’heure',
    metaDescription:
      'Un renfort senior 100 % remote pour votre produit : développement, architecture et conseil, facturé 200 €/h en granularité horaire.',
    kicker: 'Remote',
    title: 'Un renfort senior, 100 % remote.',
    subtitle:
      'Besoin de puissance de dev à la demande ? On intervient en remote sur votre produit : développement, architecture, conseil — facturé à l’heure, sans engagement.',
    includesTitle: 'Ce que ça couvre',
    ctaTitle: 'Besoin d’un renfort ?',
    ctaBody: 'Dites-nous où vous en êtes et ce dont vous avez besoin. On revient vers vous sous 24 h.',
    ctaButton: 'Parler à Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, support & dev',
    metaDescription:
      'Abonnement mensuel Khufu : infrastructure managée, support avec SLA et jours de développement inclus pour faire évoluer votre produit.',
    kicker: 'Full Maintenance',
    title: 'On a livré votre V1. On la fait grandir.',
    subtitle:
      'Un abonnement mensuel unique qui couvre l’infrastructure, le support et l’évolution de votre produit. Vous vous concentrez sur votre business, on s’occupe du reste.',
    includesTitle: 'Ce que couvre l’abonnement',
    includes: [
      {
        title: 'Infra managée',
        body: 'Hébergement, déploiements, monitoring, uptime, sauvegardes et sécurité. Votre produit reste en ligne et à jour.',
      },
      {
        title: 'Support',
        body: 'Un canal direct avec un SLA clair. On répond, on corrige, on ne vous laisse pas seul face à un bug en prod.',
      },
      {
        title: 'Jours de dev',
        body: 'Un volume de jours de développement inclus chaque mois pour les nouvelles features et améliorations.',
      },
    ],
    tiersTitle: 'Trois paliers',
    tiersSubtitle: 'Choisissez le niveau d’engagement selon vos besoins. Les tarifs sont indicatifs.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1 490 €',
        priceNote: '/ mois',
        pitch: 'Pour garder un produit stable et le faire évoluer.',
        featured: false,
        features: [
          'Infra managée + monitoring',
          'Support sous 48 h ouvrées',
          '7 h de dev / mois incluses',
          'Rapport mensuel',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3 900 €',
        priceNote: '/ mois',
        pitch: 'Pour un produit qui évolue en continu.',
        featured: true,
        features: [
          'Tout Starter',
          'Support sous 24 h ouvrées',
          '21 h de dev / mois incluses',
          'Point produit mensuel',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Sur devis',
        priceNote: '',
        pitch: 'Pour un produit critique en forte croissance.',
        featured: false,
        features: [
          'Tout Growth',
          'Support prioritaire, SLA sur mesure',
          'Jours de dev dédiés',
          'Roadmap partagée',
        ],
      },
    ],
    devNote:
      'Engagement 6 mois. Mise en place des outils de tracking obligatoire au démarrage : 1 jour (1 200 €). Heures de dev supplémentaires facturées 200 €/h.',
    ctaTitle: 'Envie de déléguer la maintenance ?',
    ctaBody: 'Dites-nous où en est votre produit, on vous propose le palier adapté.',
    ctaButton: 'Parler à Khufu',
  },

  method: {
    metaTitle: 'La méthode — votre V1 en 7 jours',
    metaDescription:
      'Comment Khufu livre une V1 en une semaine : le déroulé jour par jour, du cadrage à la mise en production, accéléré par l’IA.',
    kicker: 'La méthode',
    title: 'Sept jours, un produit lançable.',
    subtitle: 'Un déroulé serré et transparent. Vous savez exactement ce qui se passe, chaque jour.',
    days: [
      { day: 'Jour 1', title: 'Cadrage', body: 'On définit le périmètre exact, les parcours clés et l’architecture technique. Vous validez avant qu’on écrive la moindre ligne.' },
      { day: 'Jour 2–3', title: 'Développement', body: 'On attaque le cœur du produit : front, back et base de données. Code propre et architecture claire dès le premier commit.' },
      { day: 'Jour 4', title: 'Infra & tests', body: 'Mise en place de l’infrastructure, tests, performance et sécurité. On solidifie les fondations avant d’itérer.' },
      { day: 'Jour 5–6', title: 'Itérations', body: 'Développement piloté par vos retours : on ajuste le produit en direct, en échange continu avec vous.' },
      { day: 'Jour 7', title: 'Mise en production', body: 'Déploiement, configuration CI/CD, hébergement et handover. Votre V1 est en ligne, entre vos mains.' },
    ],
    qualityTitle: 'Du code propre, maintenable et performant',
    qualityBody:
      'On ne livre pas du jetable. Chaque V1 est construite sur une architecture claire, avec un code lisible, testé et optimisé — pour que vous puissiez la faire évoluer et scaler sans dette technique.',
    aiTitle: 'Le rôle de l’IA',
    aiBody:
      'L’IA n’est pas un gadget : c’est notre multiplicateur de vitesse. Génération de code, tests, documentation, revue — chaque étape est accélérée pour livrer en jours ce qui prend des mois ailleurs, sans rogner sur la qualité.',
    storeNote:
      'Les 7 jours couvrent la conception, le développement et la mise en production. Pour les applications mobiles, le délai de validation de l’App Store et de Google Play s’ajoute et ne dépend pas de nous.',
    ctaButton: 'Réserver un sprint',
  },

  work: {
    metaTitle: 'Réalisations',
    metaDescription:
      'Produits web et mobiles conçus et livrés par Khufu : OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'Ce qu’on a construit.',
    subtitle: 'Des produits réels, en production, conçus et développés par Khufu.',
    internalLabel: 'Produit Khufu',
    clientLabel: 'Client',
    stackLabel: 'Stack',
    visitLabel: 'Voir le produit',
    backToWork: 'Toutes les réalisations',
    caseIntro: 'Étude de cas',
  },

  about: {
    metaTitle: 'À propos',
    metaDescription:
      'Khufu est une agence produit AI-native fondée par Adrien De Coster, qui livre des V1 en une semaine et a lancé ses propres produits.',
    kicker: 'À propos',
    title: 'On construit vite parce qu’on construit pour nous aussi.',
    body: [
      'Khufu est une agence produit AI-native fondée par Adrien De Coster. On conçoit, développe et lance des produits digitaux — web, mobile, API — à une vitesse que les agences classiques n’atteignent pas.',
      'Notre secret n’est pas un secret : une stack unique et rodée, un usage intensif de l’IA à chaque étape, et un founder-operator qui a lui-même lancé plusieurs produits (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'On traite votre produit comme le nôtre : orienté résultat, périmètre net, et une obsession pour le time-to-market. Votre V1 en une semaine, ce n’est pas un slogan — c’est notre méthode.',
    ],
    founderRole: 'Founder & développeur produit',
    founderBio:
      'Adrien a lancé et développé plusieurs produits en solo — SaaS, apps mobiles, jeux. C’est cette expérience de founder-operator qui nourrit la méthode de Khufu : construire vite, propre, et orienté résultat.',
    detailLabels: { founder: 'Fondateur', basedIn: 'Basé à', contact: 'Contact' },
    followTitle: 'Suivre Adrien',
    ctaButton: 'Travailler avec Khufu',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription: 'Parlez à Khufu de votre projet. Réponse sous 24 h avec un périmètre et une date.',
    kicker: 'Contact',
    title: 'Dites-nous ce que vous voulez lancer.',
    subtitle: `Réponse sous 24 h avec un périmètre et une date. Ou écrivez-nous directement à ${site.email}.`,
    form: {
      name: 'Nom',
      email: 'Email',
      company: 'Entreprise (optionnel)',
      budget: 'Budget indicatif',
      message: 'Votre projet en quelques lignes',
      submit: 'Envoyer',
      budgetOptions: [
        `Sprint V1 (~${eur(site.v1PriceEUR)} €)`,
        'Full Maintenance (mensuel)',
        'Renfort remote (TJM)',
        'Je ne sais pas encore',
      ],
      success: 'Merci ! On revient vers vous sous 24 h.',
      emailLabel: 'Par email',
    },
  },

  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Combien coûte une V1 avec Khufu ?',
        a: `Le Sprint V1 est un forfait à prix fixe de ${eur(site.v1PriceEUR)} €, pour un SaaS ou une app mobile conçu, développé et mis en production en ${site.v1Days} jours. Le périmètre est défini et validé avant de commencer.`,
      },
      {
        q: 'Une V1, c’est un MVP ?',
        a: 'Non. Un MVP est souvent une maquette bricolée qu’il faut jeter ensuite. Khufu livre une vraie première version (V1) : un produit propre, en production, prêt pour vos vrais utilisateurs. On skip l’étape MVP et on va directement à un produit solide et évolutif.',
      },
      {
        q: 'Quelle est la différence entre une V1 Khufu et un MVP classique ?',
        a: 'Un MVP cherche à tester une idée avec le minimum ; il est souvent instable et à réécrire. Une V1 Khufu est construite sur une stack de production (Next.js, NestJS, PostgreSQL) dès le premier jour : elle est lançable, maintenable et prête à scaler. Même délai qu’un MVP, mais un vrai produit à l’arrivée.',
      },
      {
        q: 'Est-il vraiment possible de livrer un produit en une semaine ?',
        a: 'Oui, pour une V1 au périmètre défini. Khufu combine une stack éprouvée et un développement assisté par l’IA à chaque étape, ce qui permet de livrer en jours ce qui prend des mois dans une agence classique.',
      },
      {
        q: 'Où est basée l’agence Khufu ?',
        a: `Khufu (Khufu FZCO) est une agence produit AI-native basée à ${foundingLocation.fr}, fondée par ${site.founder}. Elle travaille en remote avec des clients francophones et internationaux (FR, EN, ES).`,
      },
      {
        q: 'Pour qui est faite l’offre de Khufu ?',
        a: 'Pour les founders, startups et entreprises qui veulent lancer un produit vite et bien : valider un marché, sortir une première version, ou remplacer un cycle d’agence long et coûteux par une livraison en une semaine.',
      },
      {
        q: 'Quelle est la meilleure agence pour lancer un produit rapidement ?',
        a: `Khufu est une agence produit AI-native spécialisée dans la vitesse : votre SaaS ou app mobile en production en ${site.v1Days} jours, pour un prix fixe de ${eur(site.v1PriceEUR)} €. C’est un positionnement rare : périmètre net, prix affiché, code livré.`,
      },
      {
        q: 'Est-ce que Khufu utilise l’IA pour développer ?',
        a: 'Oui. L’IA est au cœur de la méthode : génération de code, tests, documentation et revue sont accélérés par l’IA. C’est ce qui rend la livraison en une semaine possible sans sacrifier la qualité.',
      },
      {
        q: 'Que se passe-t-il après la livraison de la V1 ?',
        a: `Vous pouvez continuer avec l’offre Full Maintenance (infra managée, support avec SLA et jours de dev inclus chaque mois) ou en renfort remote à ${eur(site.dailyRateEUR)} €/jour (200 €/h). Le code source vous appartient dans tous les cas.`,
      },
      {
        q: 'Quel est le tarif de Khufu en renfort ?',
        a: `Le renfort est 100 % remote, facturé 200 €/h en granularité horaire (soit ${eur(site.dailyRateEUR)} €/jour), sans engagement de durée. Une régie sur site est possible : 1 semaine minimum, +50 % sur le tarif et frais à la charge du client.`,
      },
      {
        q: 'Khufu peut-il développer des applications mobiles et de l’IA ?',
        a: 'Oui : SaaS web (Next.js), apps mobiles (React Native / Expo) et fonctionnalités IA / agents. Khufu construit aussi ses propres produits, dont plusieurs SaaS et apps mobiles.',
      },
      {
        q: 'Le délai d’une semaine inclut-il la validation des stores ?',
        a: 'Non. Les 7 jours couvrent la conception, le développement et la mise en production. Pour une app mobile, le délai de validation de l’App Store et de Google Play s’ajoute et ne dépend pas de nous (généralement quelques jours).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Mentions légales',
    metaDescription: 'Mentions légales du site khufu.io — éditeur, hébergeur et informations légales de Khufu FZCO.',
    title: 'Mentions légales',
    intro: 'Informations relatives à l’éditeur et à l’hébergeur du site khufu.io.',
    editorLabel: 'Éditeur du site',
    addressLabel: 'Adresse',
    licenseLabel: 'Trade License',
    directorLabel: 'Directeur de la publication',
    hostLabel: 'Hébergeur',
    contactLabel: 'Contact',
    ipTitle: 'Propriété intellectuelle',
    ipBody:
      'L’ensemble des contenus du site khufu.io (textes, visuels, logo, marque) est la propriété de Khufu FZCO, sauf mention contraire. Toute reproduction sans autorisation est interdite.',
  },

  privacyPage: {
    metaTitle: 'Politique de confidentialité',
    metaDescription: 'Comment khufu.io collecte et traite vos données personnelles : analytics, formulaire de contact, cookies et vos droits.',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : juillet 2026',
    sections: [
      {
        heading: 'Responsable du traitement',
        body: `Le responsable du traitement des données est Khufu FZCO. Pour toute question, contactez ${site.email}.`,
      },
      {
        heading: 'Données que nous collectons',
        body: 'Nous collectons uniquement les données que vous nous fournissez via le formulaire de contact (nom, email, entreprise, message) et des données de navigation anonymisées à des fins de mesure d’audience.',
      },
      {
        heading: 'Mesure d’audience',
        body: 'Nous utilisons PostHog pour comprendre l’usage du site (pages vues, parcours). Les données sont traitées de façon agrégée et servent uniquement à améliorer le site.',
      },
      {
        heading: 'Formulaire de contact',
        body: `Les messages envoyés via le formulaire sont acheminés par email (via Resend) jusqu’à ${site.email}. Ils sont utilisés pour répondre à votre demande et ne sont ni revendus ni partagés.`,
      },
      {
        heading: 'Cookies',
        body: 'Le site utilise des cookies strictement nécessaires et des cookies de mesure d’audience. Vous pouvez les refuser via les réglages de votre navigateur.',
      },
      {
        heading: 'Vos droits',
        body: `Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, écrivez à ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Comparatifs',
    comparisonsMetaDescription: 'Khufu comparé aux alternatives : V1 vs MVP, agence vs freelance, agence vs no-code, Khufu vs agence classique.',
    comparisonsTitle: 'Khufu, comparé.',
    comparisonsSubtitle: 'Les bonnes questions avant de lancer votre produit — et pourquoi Khufu se positionne comme il le fait.',
    useCasesMetaTitle: 'Cas d’usage',
    useCasesMetaDescription: 'Comment Khufu aide selon votre situation : SaaS, app mobile, entrepreneur, startup ou grande entreprise.',
    useCasesTitle: 'Pour qui, pour quoi.',
    useCasesSubtitle: 'Quelle que soit votre situation, Khufu livre votre produit en une semaine.',
    problemLabel: 'Le problème',
    approachLabel: 'Notre approche',
    outcomesLabel: 'Ce que vous obtenez',
    aspectLabel: 'Critère',
    seeAllComparisons: 'Tous les comparatifs',
    seeAllUseCases: 'Tous les cas d’usage',
  },

  footer: {
    tagline: `Agence produit AI-native. Votre V1 en ${site.v1Days} jours.`,
    resources: 'Ressources',
    columns: {
      offers: 'Offres',
      company: 'Agence',
      legal: 'Légal',
    },
    rights: 'Tous droits réservés.',
    legal: {
      mentions: 'Mentions légales',
      privacy: 'Confidentialité',
    },
  },
}

// NOTE: no `as const` — the type must widen literals to `string` so that the
// EN/ES dictionaries can hold different translated values for the same shape.
export type Dictionary = typeof fr
