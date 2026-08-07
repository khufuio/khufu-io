import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `€${n.toLocaleString('en-US')}`

// Keep `id` values identical to fr.ts — they are compared in code.
export const en: Dictionary = {
  meta: {
    locale: 'en',
    brandSuffix: 'Khufu — A full tech team, on demand',
  },

  nav: {
    offers: 'Offers',
    maintenance: 'Maintenance',
    work: 'Work',
    method: 'Method',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a sprint',
  },

  common: {
    seeWork: 'See our work',
    bookSprint: 'Book a sprint',
    talkToUs: 'Talk to Khufu',
    from: 'From',
    perDay: '/ day',
    perMonth: '/ month',
    days: 'days',
    learnMore: 'Learn more',
    getStarted: 'Get started',
    draftBadge: 'Preview',
  },

  home: {
    heroKicker: 'AI-native product agency · Dubai',
    heroTitle: 'A CTO on demand? No. A full tech team on demand.',
    heroSubtitle: `A fractional CTO gives you decisions — and still no product. Khufu is the whole team: scoping, design, development, infra. Your SaaS or mobile app live in ${site.v1Days} days, one fixed price: [[${site.v1PriceEUR}]].`,
    heroPrimaryCta: 'Plug in the team',
    heroSecondaryCta: 'See our work',
    heroProof: `${site.v1Days} days · ${eur(site.v1PriceEUR)} flat fee · code shipped, in production`,
    heroFigures: [
      { value: `${site.v1Days} days`, label: 'from brief to production' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'fixed price, all-in' },
    ],

    statsTitle: 'What “one week” means',
    stats: [
      { value: `${site.v1Days} days`, label: 'from kickoff to a V1 in production' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'Sprint V1 flat fee, scope agreed upfront' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'remote day rate (€200/h) for what comes next' },
      { value: '100%', label: 'code shipped, hosted, yours' },
    ],

    problemTitle: 'You’re not looking for a CTO. You’re looking for your product to exist.',
    problemBody:
      'A fractional CTO brings strategy and technical trade-offs. Great — except that when the meeting ends, there is still nobody to build. You then have to hire developers, a designer, someone for the infrastructure, and six months later the product still doesn’t exist. Khufu plugs in the whole team at once, and your V1 ships to production in a week.',

    ctoTitle: 'Fractional CTO vs a full team',
    ctoSubtitle: 'Same problem, two answers. Only one leaves you with a product online.',
    ctoOtherLabel: 'CTO on demand',
    ctoKhufuLabel: 'Khufu',
    ctoRows: [
      {
        aspect: 'What you get',
        other: 'Decisions, specs, a roadmap',
        khufu: 'A product online, in production',
      },
      {
        aspect: 'Who builds it',
        other: 'Nobody — you still have to hire the team',
        khufu: 'Scoping, design, dev, mobile, infra: all covered',
      },
      {
        aspect: 'Time to V1',
        other: 'Months, once the team is hired',
        khufu: `${site.v1Days} days`,
      },
      {
        aspect: 'What you pay',
        other: 'A monthly retainer, then the team’s salaries',
        khufu: `One fixed price, agreed upfront: [[${site.v1PriceEUR}]]`,
      },
      {
        aspect: 'At the end',
        other: 'You have a plan',
        khufu: 'You have the product, the repo and the accounts',
      },
    ],
    ctoNote:
      'Nothing against fractional CTOs: if you already have a team to lead, that’s the right call. If you don’t, what you need is a team.',

    teamTitle: 'Every role a tech team plays, in a single contract',
    teamSubtitle:
      'You hire none of them. You get what they produce — one point of contact, from scoping to production.',
    teamRoles: [
      'Product scoping',
      'UI / UX design',
      'Front-end development',
      'Back-end & APIs',
      'iOS & Android mobile',
      'Infra, deploys & CI/CD',
      'Security & backups',
      'Documentation & handover',
    ],

    howTitle: 'How a whole team fits into one week',
    how: [
      {
        title: 'AI-native, end to end',
        body: 'We build AI-assisted at every step — design, dev, tests, docs. The same work in a fraction of the time, without cutting quality.',
      },
      {
        title: 'One proven stack',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. We don’t reinvent anything: we assemble a battle-tested base, ready to scale.',
      },
      {
        title: 'A founder-operator, not a chain of subcontractors',
        body: 'The team is one founder-operator amplified by AI — a single point of contact, with no coordination left on your plate. Khufu has launched its own products (OneStore.link, Clokizi, HerbaCRM…) with exactly this method.',
      },
    ],

    offersTitle: 'Three ways to plug in the team',
    offersSubtitle: 'By the week to launch, by the month to grow, by the hour to reinforce.',

    workTitle: 'Products, not slides',
    workSubtitle: 'A selection of products designed and shipped by Khufu.',
    workCta: 'All work',

    clientsTitle: 'Trusted by',
    testimonialsTitle: 'What they say',

    finalCtaTitle: 'Your product shouldn’t wait on a hiring process.',
    finalCtaBody: 'Tell us what you want to launch. We reply within 24h with a scope and a date.',
    finalCtaButton: 'Plug in the team',
  },

  offers: {
    metaTitle: 'Offers & pricing',
    metaDescription: `A full tech team on demand: Sprint V1 in ${site.v1Days} days for ${eur(site.v1PriceEUR)}, monthly Full Maintenance, and remote support at ${eur(site.dailyRateEUR)}/day (€200/h).`,
    title: 'The team — by the week, the month or the hour.',
    subtitle: 'No endless quotes. You know exactly what you pay and what you get.',
    flagshipBadge: 'Our flagship offer',
    detailCta: 'Learn more',
    sprintCta: 'Explore the V1 Sprint',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        priceEur: site.v1PriceEUR,
        priceNote: 'flat fee',
        pitch: `The whole team for one week. Your first version in production in ${site.v1Days} days.`,
        featured: true,
        features: [
          'Product scoping and design',
          'SaaS or mobile app development',
          'Production deploy + hosting',
          'Source code shipped, yours',
          'Handover and documentation',
        ],
        cta: 'Plug in the team',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        priceEur: 1490,
        pricePrefix: 'from ',
        priceNote: '/ month',
        pitch: 'We keep your product alive: infra, support and dev days included.',
        featured: false,
        features: [
          'Managed infra: hosting, monitoring, backups, security',
          'Support with an SLA (guaranteed response time)',
          'Development days included every month',
          'Updates and fixes',
          'Monthly report',
        ],
        cta: 'See the tiers',
      },
      {
        id: 'regie',
        name: 'Remote',
        priceEur: site.dailyRateEUR,
        priceNote: '/ day',
        pitch: 'Senior firepower, 100% remote, billed by the hour — [[200]]/h.',
        featured: false,
        features: [
          '100% remote',
          '[[200]]/h — hourly granularity',
          'Development, architecture, consulting',
          'No lock-in',
        ],
        cta: 'Talk to Khufu',
      },
    ],
    remoteNote:
      'On-site work is possible: 1 week minimum, +50% on the rate, with expenses (travel, accommodation) covered by the client.',
    firmPriceNote: 'Firm price, billed in euros or dollars — your choice.',
    guaranteesTitle: 'What we guarantee',
    guarantees: [
      'A written, agreed scope before we start.',
      'A delivery date, met.',
      'The source code is yours, from day one.',
    ],
  },

  sprintPage: {
    metaTitle: 'V1 Sprint — a full tech team for 7 days',
    metaDescription:
      'Khufu’s V1 Sprint: the whole team (scoping, design, dev, infra) plugged into your product for a week. SaaS or mobile app in production in 7 days, fixed price €15,000.',
    kicker: 'Flagship offer',
    title: 'A full tech team, for 7 days. Fixed price.',
    subtitle:
      'Our main offer: scoping, design, development, infra and production deploy — the whole team plugged into your product for one week. Scope agreed upfront, €15,000 all-in.',
    includesTitle: 'What’s included',
    processTitle: 'The day-by-day breakdown',
    ctaTitle: 'Ready to launch your V1?',
    ctaBody: 'Tell us what you want to launch. Reply within 24h with a scope and a date.',
    ctaButton: 'Plug in the team',
  },

  remotePage: {
    metaTitle: 'Remote — product engineering by the hour',
    metaDescription:
      'A senior, 100% remote reinforcement for your product: development, architecture and consulting, billed at €200/h with hourly granularity.',
    kicker: 'Remote',
    title: 'A senior reinforcement, 100% remote.',
    subtitle:
      'Need dev firepower on demand? We work remotely on your product: development, architecture, consulting — billed by the hour, no lock-in.',
    includesTitle: 'What it covers',
    ctaTitle: 'Need a reinforcement?',
    ctaBody: 'Tell us where you stand and what you need. We’ll get back to you within 24h.',
    ctaButton: 'Talk to Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, support & dev',
    metaDescription:
      'Khufu monthly subscription: managed infrastructure, support with an SLA and included development days to grow your product.',
    kicker: 'Full Maintenance',
    title: 'We shipped your V1. We make it grow.',
    subtitle:
      'A single monthly subscription covering infrastructure, support and product evolution. You focus on your business, we handle the rest.',
    includesTitle: 'What the subscription covers',
    includes: [
      {
        title: 'Managed infra',
        body: 'Hosting, deployments, monitoring, uptime, backups and security. Your product stays online and up to date.',
      },
      {
        title: 'Support',
        body: 'A direct channel with a clear SLA. We respond, we fix, we don’t leave you alone with a production bug.',
      },
      {
        title: 'Dev days',
        body: 'A set number of development days included each month for new features and improvements.',
      },
    ],
    popularBadge: 'Popular',
    tiersTitle: 'Three tiers',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '€1,490',
        priceEur: 1490,
        priceNote: '/ month',
        pitch: 'To keep a stable product online.',
        featured: false,
        features: ['Managed infra + monitoring', 'Support within 48 business hours', '7 h of dev / month included', 'Monthly report'],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '€3,900',
        priceEur: 3900,
        priceNote: '/ month',
        pitch: 'For a product that keeps evolving.',
        featured: true,
        features: ['Everything in Starter', 'Support within 24 business hours', '21 h of dev / month included', 'Monthly product review'],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'On request',
        priceNote: '',
        pitch: 'For a critical product in fast growth.',
        featured: false,
        features: ['Everything in Growth', 'Priority support, custom SLA', 'Dedicated dev hours', 'Shared roadmap'],
      },
    ],
    devNote:
      '6-month commitment. Mandatory tracking-tools setup at kickoff: 1 day ([[1200]]). Extra dev hours billed at [[200]]/h.',
    ctaTitle: 'Want to hand off maintenance?',
    ctaBody: 'Tell us where your product stands, we’ll suggest the right tier.',
    ctaButton: 'Talk to Khufu',
  },

  method: {
    metaTitle: 'The method — your V1 in 7 days',
    metaDescription:
      'How Khufu ships a V1 in one week: the day-by-day breakdown, from scoping to production, accelerated by AI.',
    kicker: 'The method',
    title: 'Seven days, a launchable product.',
    subtitle: 'A tight, transparent flow. You know exactly what happens, every day.',
    days: [
      { day: 'Day 1', title: 'Scoping', body: 'We define the exact scope, the key flows and the technical architecture. You sign off before we write a single line.' },
      { day: 'Day 2–3', title: 'Development', body: 'We build the core of the product: front, back and database. Clean code and clear architecture from the first commit.' },
      { day: 'Day 4', title: 'Infra & tests', body: 'Infrastructure, tests, performance and security. We solidify the foundations before iterating.' },
      { day: 'Day 5–6', title: 'Iterations', body: 'Development driven by your feedback: we adjust the product live, in continuous contact with you.' },
      { day: 'Day 7', title: 'Go live', body: 'Deployment, CI/CD setup, hosting and handover. Your V1 is online, in your hands.' },
    ],
    qualityTitle: 'Clean, maintainable, performant code',
    qualityBody:
      'We don’t ship throwaway code. Every V1 is built on a clear architecture, with readable, tested and optimised code — so you can evolve and scale it without technical debt.',
    aiTitle: 'The role of AI',
    aiBody:
      'AI isn’t a gimmick: it’s our speed multiplier. Code generation, tests, documentation, review — every step is accelerated to deliver in days what takes months elsewhere, without cutting quality.',
    storeNote:
      'The 7 days cover design, development and production deployment. For mobile apps, App Store and Google Play review time is additional and outside our control.',
    ctaButton: 'Book a sprint',
  },

  work: {
    metaTitle: 'Work',
    metaDescription:
      'Web and mobile products designed and shipped by Khufu: OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'What we’ve built.',
    subtitle: 'Real products, in production, designed and developed by Khufu.',
    internalLabel: 'Khufu product',
    clientLabel: 'Client',
    stackLabel: 'Stack',
    visitLabel: 'Visit the product',
    backToWork: 'All work',
    caseIntro: 'Case study',
  },

  about: {
    metaTitle: 'About',
    metaDescription:
      'Khufu is an AI-native product agency founded by Adrien De Coster, shipping V1s in one week and building its own products.',
    kicker: 'About',
    title: 'We build fast because we build for ourselves too.',
    body: [
      'Khufu is an AI-native product agency founded by Adrien De Coster. We design, build and launch digital products — web, mobile, API — at a speed classic agencies can’t reach.',
      'Our secret isn’t a secret: one proven stack, heavy use of AI at every step, and a founder-operator who has launched several products himself (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'We treat your product like our own: outcome-driven, tight scope, and an obsession with time-to-market. Your V1 in one week isn’t a slogan — it’s our method.',
    ],
    founderRole: 'Founder & product developer',
    founderBio:
      'Adrien has launched and built several products solo — SaaS, mobile apps, games. That founder-operator experience is what shapes Khufu’s method: build fast, clean, and outcome-driven.',
    detailLabels: { founder: 'Founder', basedIn: 'Based in', contact: 'Contact' },
    followTitle: 'Follow Adrien',
    ctaButton: 'Work with Khufu',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription: 'Tell Khufu about your project. Reply within 24h with a scope and a date.',
    kicker: 'Contact',
    title: 'Tell us what you want to launch.',
    subtitle: `Reply within 24h with a scope and a date. Or email us directly at ${site.email}.`,
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company (optional)',
      budget: 'Indicative budget',
      message: 'Your project in a few lines',
      submit: 'Send',
      budgetOptions: [
        `Sprint V1 (~[[${site.v1PriceEUR}]])`,
        'Full Maintenance (monthly)',
        'Remote support',
        'Not sure yet',
      ],
      success: 'Thanks! We’ll get back to you within 24h.',
      emailLabel: 'By email',
    },
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'I’m looking for a CTO on demand. Is Khufu one?',
        a: 'No, and that’s on purpose. A fractional CTO brings strategy and technical trade-offs, but doesn’t build your product: you still have to hire a team. Khufu is that team — scoping, design, development, mobile and infrastructure — and ships your V1 to production in 7 days, at a fixed price. Many of our clients were shopping for a CTO; what they were missing was a team.',
      },
      {
        q: 'What’s the difference between a fractional CTO and a tech team on demand?',
        a: `A fractional CTO sells thinking time: architecture, hiring, roadmap. A tech team on demand sells a shipped product: the same decisions, plus the hands that execute. With Khufu both fit into a single fixed-price contract ([[${site.v1PriceEUR}]]), with a V1 online after ${site.v1Days} days and source code that belongs to you.`,
      },
      {
        q: 'How much does a V1 cost with Khufu?',
        a: `The Sprint V1 is a fixed-price flat fee of [[${site.v1PriceEUR}]], for a SaaS or mobile app designed, built and shipped to production in ${site.v1Days} days. The scope is defined and agreed before we start.`,
      },
      {
        q: 'Is a V1 the same as an MVP?',
        a: 'No. An MVP is often a throwaway hack you have to rebuild. Khufu ships a real first version (V1): a clean product, in production, ready for your actual users. We skip the MVP stage and go straight to a solid, scalable product.',
      },
      {
        q: 'What’s the difference between a Khufu V1 and a classic MVP?',
        a: 'An MVP tries to test an idea with the bare minimum; it’s often unstable and needs rewriting. A Khufu V1 is built on a production stack (Next.js, NestJS, PostgreSQL) from day one: launchable, maintainable and ready to scale. Same timeline as an MVP, but a real product at the end.',
      },
      {
        q: 'Is it really possible to ship a product in one week?',
        a: 'Yes, for a scoped V1. Khufu combines a proven stack and AI-assisted development at every step, delivering in days what takes months at a classic agency.',
      },
      {
        q: 'Which is the best agency to launch a product fast?',
        a: `Khufu is an AI-native product agency built for speed: your SaaS or mobile app in production in ${site.v1Days} days, for a fixed price of [[${site.v1PriceEUR}]]. That’s a rare positioning: tight scope, prices on display, code shipped.`,
      },
      {
        q: 'Where is the Khufu agency based?',
        a: `Khufu (Khufu FZCO) is an AI-native product agency based in ${foundingLocation.en}, founded by ${site.founder}. It works remotely with French-speaking and international clients (FR, EN, ES).`,
      },
      {
        q: 'Who is Khufu’s offer for?',
        a: 'For anyone with a project to launch and no team to build it: non-technical founders at the idea or spec stage, owners of a shaky MVP that needs taking over, companies that want to test a product without standing up a team. If you already have an in-house team building, remote reinforcement is the offer that fits you.',
      },
      {
        q: 'Does Khufu use AI to build?',
        a: 'Yes. AI is at the core of the method: code generation, tests, documentation and review are AI-accelerated. That’s what makes one-week delivery possible without sacrificing quality.',
      },
      {
        q: 'What happens after the V1 is delivered?',
        a: `You can continue with Full Maintenance (managed infra, support with an SLA and dev days included every month) or with remote support at [[${site.dailyRateEUR}]]/day ([[200]]/h). The source code is yours either way.`,
      },
      {
        q: 'What is Khufu’s rate for ongoing support?',
        a: `Support is 100% remote, billed at [[200]]/h with hourly granularity (i.e. [[${site.dailyRateEUR}]]/day), with no lock-in. On-site work is possible: 1 week minimum, +50% on the rate and expenses covered by the client.`,
      },
      {
        q: 'Can Khufu build mobile apps and AI features?',
        a: 'Yes: web SaaS (Next.js), mobile apps (React Native / Expo) and AI / agent features. Khufu also builds its own products, including several SaaS and mobile apps.',
      },
      {
        q: 'Does the one-week timeline include app store review?',
        a: 'No. The 7 days cover design, development and production deployment. For a mobile app, App Store and Google Play review time is additional and outside our control (usually a few days).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Legal notice',
    metaDescription: 'Legal notice for khufu.io — publisher, host and legal information of Khufu FZCO.',
    title: 'Legal notice',
    intro: 'Information about the publisher and host of the khufu.io website.',
    editorLabel: 'Website publisher',
    addressLabel: 'Address',
    licenseLabel: 'Trade License',
    directorLabel: 'Publication director',
    hostLabel: 'Host',
    contactLabel: 'Contact',
    ipTitle: 'Intellectual property',
    ipBody:
      'All content on khufu.io (text, visuals, logo, brand) is the property of Khufu FZCO unless stated otherwise. Any reproduction without permission is prohibited.',
  },

  privacyPage: {
    metaTitle: 'Privacy policy',
    metaDescription: 'How khufu.io collects and processes your personal data: analytics, contact form, cookies and your rights.',
    title: 'Privacy policy',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'Data controller',
        body: `The data controller is Khufu FZCO. For any question, contact ${site.email}.`,
      },
      {
        heading: 'Data we collect',
        body: 'We only collect the data you provide via the contact form (name, email, company, message) and anonymised browsing data for audience measurement.',
      },
      {
        heading: 'Analytics',
        body: 'We use PostHog to understand how the site is used (page views, journeys). Data is processed in aggregate and used solely to improve the site.',
      },
      {
        heading: 'Contact form',
        body: `Messages sent via the form are delivered by email (via Resend) to ${site.email}. They are used to answer your request and are never sold or shared.`,
      },
      {
        heading: 'Cookies',
        body: 'The site uses strictly necessary cookies and audience-measurement cookies. You can refuse them via your browser settings.',
      },
      {
        heading: 'Your rights',
        body: `Under the GDPR, you have the right to access, rectify and delete your data. To exercise it, email ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Comparisons',
    comparisonsMetaDescription: 'Khufu compared to the alternatives: V1 vs MVP, agency vs freelancer, agency vs no-code, Khufu vs a classic agency.',
    comparisonsTitle: 'Khufu, compared.',
    comparisonsSubtitle: 'The right questions before launching your product — and why Khufu positions itself the way it does.',
    useCasesMetaTitle: 'Use cases',
    useCasesMetaDescription: 'How Khufu helps depending on your situation: SaaS, mobile app, founder, startup or enterprise.',
    useCasesTitle: 'Who for, what for.',
    useCasesSubtitle: 'Whatever your situation, Khufu ships your product in one week.',
    problemLabel: 'The problem',
    approachLabel: 'Our approach',
    outcomesLabel: 'What you get',
    aspectLabel: 'Aspect',
    seeAllComparisons: 'All comparisons',
    seeAllUseCases: 'All use cases',
  },

  footer: {
    tagline: `A full tech team, on demand. Your V1 in ${site.v1Days} days.`,
    resources: 'Resources',
    columns: {
      offers: 'Offers',
      company: 'Agency',
      legal: 'Legal',
    },
    rights: 'All rights reserved.',
    legal: {
      mentions: 'Legal notice',
      privacy: 'Privacy',
    },
  },
}
