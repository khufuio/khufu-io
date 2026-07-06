import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('de-DE')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const de: Dictionary = {
  meta: {
    locale: 'de',
    brandSuffix: 'Khufu — Deine V1 in einer Woche',
  },

  nav: {
    offers: 'Angebote',
    maintenance: 'Wartung',
    work: 'Referenzen',
    method: 'Methode',
    about: 'Über uns',
    contact: 'Kontakt',
    cta: 'Sprint buchen',
  },

  common: {
    seeWork: 'Referenzen ansehen',
    bookSprint: 'Sprint buchen',
    talkToUs: 'Mit Khufu sprechen',
    from: 'Ab',
    perDay: '/ Tag',
    perMonth: '/ Monat',
    days: 'Tage',
    learnMore: 'Mehr erfahren',
    getStarted: 'Loslegen',
    draftBadge: 'Vorschau',
  },

  home: {
    heroKicker: 'AI-native Produktagentur',
    heroTitle: 'Deine V1 in einer Woche.',
    heroSubtitle: `Wir konzipieren, entwickeln und liefern dein SaaS oder deine Mobile-App in ${site.v1Days} Tagen. Festpreis: ${eur(site.v1PriceEUR)}.`,
    heroPrimaryCta: 'Sprint buchen',
    heroSecondaryCta: 'Referenzen ansehen',
    heroProof: `${site.v1Days} Tage · Festpreis ${eur(site.v1PriceEUR)} · Code geliefert, in Produktion`,
    heroFigures: [
      { value: `${site.v1Days} Tage`, label: 'vom Briefing bis zur Produktion' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'Festpreis, alles inklusive' },
    ],

    statsTitle: 'Was „eine Woche“ bedeutet',
    stats: [
      { value: `${site.v1Days} Tage`, label: 'vom Kickoff bis zur V1 in Produktion' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'Sprint-V1-Festpreis, Umfang vorab definiert' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'Remote-Tagessatz (200 €/h) für alles Weitere' },
      { value: '100 %', label: 'Code geliefert, gehostet, dir gehörend' },
    ],

    problemTitle: 'Eine klassische Agentur braucht 3 Monate? Du hast keine 3 Monate.',
    problemBody:
      'Endlose Zyklen, schwammige Angebote und ständiges Hin und Her killen Projekte, bevor sie starten. Khufu macht das Gegenteil: enger Umfang, schnelle Entscheidungen und eine wirklich startklare V1 zum Ende der Woche.',

    howTitle: 'Wie wir so schnell sind',
    how: [
      {
        title: 'AI-native, von Anfang bis Ende',
        body: 'Wir entwickeln KI-gestützt in jedem Schritt — Design, Dev, Tests, Doku. Dieselbe Arbeit in einem Bruchteil der Zeit, ohne Abstriche bei der Qualität.',
      },
      {
        title: 'Ein einziger, erprobter Stack',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. Wir erfinden nichts neu: Wir setzen auf eine kampferprobte Basis, bereit zum Skalieren.',
      },
      {
        title: 'Ein Founder-Operator am Steuer',
        body: 'Khufu hat eigene Produkte gelauncht (OneStore.link, Clokizi, HerbaCRM…). Wir bauen dein Produkt wie unser eigenes: ergebnisorientiert, nicht abrechnungsgetrieben.',
      },
    ],

    offersTitle: 'Drei Wege, mit Khufu zu arbeiten',
    offersSubtitle: 'Vom blitzschnellen Launch bis zur langfristigen Betreuung.',

    workTitle: 'Produkte, keine Slides',
    workSubtitle: 'Eine Auswahl an Produkten, konzipiert und geliefert von Khufu.',
    workCta: 'Alle Referenzen',

    clientsTitle: 'Sie vertrauen uns',
    testimonialsTitle: 'Was sie sagen',

    finalCtaTitle: 'Deine V1, am Freitag in Produktion.',
    finalCtaBody: 'Sag uns, was du launchen willst. Wir antworten innerhalb von 24 h mit Umfang und Termin.',
    finalCtaButton: 'Sprint buchen',
  },

  offers: {
    metaTitle: 'Angebote & Preise',
    metaDescription: `Sprint V1 in ${site.v1Days} Tagen ab ${eur(site.v1PriceEUR)}, monatliche Full Maintenance und Remote-Unterstützung zu ${eur(site.dailyRateEUR)}/Tag (200 €/h).`,
    title: 'Klare Angebote, Preise offen ausgewiesen.',
    subtitle: 'Keine endlosen Angebote. Du weißt genau, was du zahlst und was du bekommst.',
    flagshipBadge: 'Unser Flaggschiff-Angebot',
    detailCta: 'Mehr erfahren',
    sprintCta: 'Den Sprint V1 entdecken',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        price: `${eur(site.v1PriceEUR)}`,
        priceEur: site.v1PriceEUR,
        priceNote: 'Festpreis',
        pitch: `Deine erste Version, konzipiert und geliefert in ${site.v1Days} Tagen.`,
        featured: true,
        features: [
          'Scoping und Produktdesign',
          'SaaS- oder Mobile-App-Entwicklung',
          'Go-Live + Hosting',
          'Quellcode geliefert, dir gehörend',
          'Übergabe und Dokumentation',
        ],
        cta: 'Sprint buchen',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        price: 'ab 1.490 €',
        priceEur: 1490,
        pricePrefix: 'ab ',
        priceNote: '/ Monat',
        pitch: 'Wir halten dein Produkt am Leben: Infra, Support und Dev-Tage inklusive.',
        featured: false,
        features: [
          'Managed Infra: Hosting, Monitoring, Backups, Sicherheit',
          'Support mit SLA (garantierte Reaktionszeit)',
          'Jeden Monat inklusive Entwicklungstage',
          'Updates und Fehlerbehebungen',
          'Monatlicher Report',
        ],
        cta: 'Die Stufen ansehen',
      },
      {
        id: 'regie',
        name: 'Remote',
        price: `${eur(site.dailyRateEUR)}`,
        priceEur: site.dailyRateEUR,
        priceNote: '/ Tag',
        pitch: 'Senior-Verstärkung, 100 % remote, stundenweise abgerechnet — 200 €/h.',
        featured: false,
        features: [
          '100 % remote',
          '200 €/h — stundengenaue Abrechnung',
          'Entwicklung, Architektur, Beratung',
          'Ohne Mindestlaufzeit',
        ],
        cta: 'Mit Khufu sprechen',
      },
    ],
    remoteNote:
      'Einsatz vor Ort möglich: mindestens 1 Woche, +50 % auf den Satz, Spesen (Anreise, Unterkunft) zulasten des Kunden.',
    firmPriceNote: 'Festpreis in Euro.',
    guaranteesTitle: 'Was wir garantieren',
    guarantees: [
      'Ein schriftlich festgelegter und abgestimmter Umfang, bevor wir starten.',
      'Ein Liefertermin, der gehalten wird.',
      'Der Quellcode gehört dir, ab dem ersten Tag.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — dein Produkt in 7 Tagen',
    metaDescription:
      'Der Sprint V1 von Khufu: ein SaaS oder eine Mobile-App, konzipiert, entwickelt und in 7 Tagen in Produktion gebracht, zum Festpreis von 15.000 €.',
    kicker: 'Flaggschiff-Angebot',
    title: 'Deine V1 in 7 Tagen. Festpreis.',
    subtitle:
      'Unser Hauptangebot: Wir konzipieren, entwickeln und bringen dein SaaS oder deine Mobile-App in einer Woche in Produktion — Umfang vorab definiert, 15.000 € alles inklusive.',
    includesTitle: 'Was inklusive ist',
    processTitle: 'Der Ablauf, Tag für Tag',
    ctaTitle: 'Bereit, deine V1 zu launchen?',
    ctaBody: 'Sag uns, was du launchen willst. Antwort innerhalb von 24 h mit Umfang und Termin.',
    ctaButton: 'Sprint buchen',
  },

  remotePage: {
    metaTitle: 'Remote — Produktverstärkung stundenweise',
    metaDescription:
      'Eine Senior-Verstärkung, 100 % remote, für dein Produkt: Entwicklung, Architektur und Beratung, abgerechnet zu 200 €/h stundengenau.',
    kicker: 'Remote',
    title: 'Eine Senior-Verstärkung, 100 % remote.',
    subtitle:
      'Du brauchst Dev-Power auf Abruf? Wir arbeiten remote an deinem Produkt: Entwicklung, Architektur, Beratung — stundenweise abgerechnet, ohne Bindung.',
    includesTitle: 'Was das abdeckt',
    ctaTitle: 'Brauchst du Verstärkung?',
    ctaBody: 'Sag uns, wo du stehst und was du brauchst. Wir melden uns innerhalb von 24 h.',
    ctaButton: 'Mit Khufu sprechen',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — Infra, Support & Dev',
    metaDescription:
      'Monatsabo von Khufu: Managed Infrastructure, Support mit SLA und inklusive Entwicklungstage, um dein Produkt weiterzuentwickeln.',
    kicker: 'Full Maintenance',
    title: 'Wir haben deine V1 geliefert. Wir lassen sie wachsen.',
    subtitle:
      'Ein einziges Monatsabo, das Infrastruktur, Support und die Weiterentwicklung deines Produkts abdeckt. Du konzentrierst dich auf dein Business, wir kümmern uns um den Rest.',
    includesTitle: 'Was das Abo abdeckt',
    includes: [
      {
        title: 'Managed Infra',
        body: 'Hosting, Deployments, Monitoring, Uptime, Backups und Sicherheit. Dein Produkt bleibt online und auf dem neuesten Stand.',
      },
      {
        title: 'Support',
        body: 'Ein direkter Kanal mit klarem SLA. Wir antworten, wir beheben, wir lassen dich mit einem Bug in Produktion nicht allein.',
      },
      {
        title: 'Dev-Tage',
        body: 'Ein festes Kontingent an Entwicklungstagen jeden Monat für neue Features und Verbesserungen.',
      },
    ],
    popularBadge: 'Beliebt',
    tiersTitle: 'Drei Stufen',
    tiersSubtitle: 'Wähle das Engagement-Niveau nach deinem Bedarf. Die Preise sind Richtwerte.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1.490 €',
        priceEur: 1490,
        priceNote: '/ Monat',
        pitch: 'Um ein Produkt stabil und aktuell zu halten.',
        featured: false,
        features: [
          'Managed Infra + Monitoring',
          'Support innerhalb von 48 Arbeitsstunden',
          '7 h Dev / Monat inklusive',
          'Monatlicher Report',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3.900 €',
        priceEur: 3900,
        priceNote: '/ Monat',
        pitch: 'Für ein Produkt, das sich laufend weiterentwickelt.',
        featured: true,
        features: [
          'Alles aus Starter',
          'Support innerhalb von 24 Arbeitsstunden',
          '21 h Dev / Monat inklusive',
          'Monatlicher Produkt-Check',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Auf Anfrage',
        priceNote: '',
        pitch: 'Für ein kritisches Produkt in starkem Wachstum.',
        featured: false,
        features: [
          'Alles aus Growth',
          'Priorisierter Support, individuelles SLA',
          'Dedizierte Dev-Tage',
          'Geteilte Roadmap',
        ],
      },
    ],
    devNote:
      'Laufzeit 6 Monate. Verpflichtende Einrichtung der Tracking-Tools zum Start: 1 Tag (1.200 €). Zusätzliche Dev-Stunden werden mit 200 €/h abgerechnet.',
    ctaTitle: 'Lust, die Wartung abzugeben?',
    ctaBody: 'Sag uns, wo dein Produkt steht, wir schlagen dir die passende Stufe vor.',
    ctaButton: 'Mit Khufu sprechen',
  },

  method: {
    metaTitle: 'Die Methode — deine V1 in 7 Tagen',
    metaDescription:
      'Wie Khufu eine V1 in einer Woche liefert: der Ablauf Tag für Tag, vom Scoping bis zur Produktion, beschleunigt durch KI.',
    kicker: 'Die Methode',
    title: 'Sieben Tage, ein startklares Produkt.',
    subtitle: 'Ein enger, transparenter Ablauf. Du weißt genau, was jeden Tag passiert.',
    days: [
      { day: 'Tag 1', title: 'Scoping', body: 'Wir definieren den exakten Umfang, die zentralen Flows und die technische Architektur. Du gibst frei, bevor wir eine einzige Zeile schreiben.' },
      { day: 'Tag 2–3', title: 'Entwicklung', body: 'Wir gehen den Kern des Produkts an: Front, Back und Datenbank. Sauberer Code und klare Architektur ab dem ersten Commit.' },
      { day: 'Tag 4', title: 'Infra & Tests', body: 'Aufbau der Infrastruktur, Tests, Performance und Sicherheit. Wir festigen das Fundament, bevor wir iterieren.' },
      { day: 'Tag 5–6', title: 'Iterationen', body: 'Entwicklung nach deinem Feedback: Wir passen das Produkt live an, im ständigen Austausch mit dir.' },
      { day: 'Tag 7', title: 'Go-Live', body: 'Deployment, CI/CD-Konfiguration, Hosting und Übergabe. Deine V1 ist online, in deinen Händen.' },
    ],
    qualityTitle: 'Sauberer, wartbarer und performanter Code',
    qualityBody:
      'Wir liefern nichts Wegwerfbares. Jede V1 wird auf einer klaren Architektur gebaut, mit lesbarem, getestetem und optimiertem Code — damit du sie ohne technische Schulden weiterentwickeln und skalieren kannst.',
    aiTitle: 'Die Rolle der KI',
    aiBody:
      'KI ist kein Gimmick: Sie ist unser Geschwindigkeits-Multiplikator. Code-Generierung, Tests, Dokumentation, Review — jeder Schritt wird beschleunigt, um in Tagen zu liefern, wofür andere Monate brauchen, ohne Abstriche bei der Qualität.',
    storeNote:
      'Die 7 Tage umfassen Konzeption, Entwicklung und Go-Live. Bei Mobile-Apps kommt die Prüfzeit von App Store und Google Play hinzu, die nicht in unserer Hand liegt.',
    ctaButton: 'Sprint buchen',
  },

  work: {
    metaTitle: 'Referenzen',
    metaDescription:
      'Web- und Mobile-Produkte, konzipiert und geliefert von Khufu: OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'Was wir gebaut haben.',
    subtitle: 'Echte Produkte, in Produktion, konzipiert und entwickelt von Khufu.',
    internalLabel: 'Khufu-Produkt',
    clientLabel: 'Kunde',
    stackLabel: 'Stack',
    visitLabel: 'Produkt ansehen',
    backToWork: 'Alle Referenzen',
    caseIntro: 'Case Study',
  },

  about: {
    metaTitle: 'Über uns',
    metaDescription:
      'Khufu ist eine AI-native Produktagentur, gegründet von Adrien De Coster, die V1s in einer Woche liefert und eigene Produkte gelauncht hat.',
    kicker: 'Über uns',
    title: 'Wir bauen schnell, weil wir auch für uns selbst bauen.',
    body: [
      'Khufu ist eine AI-native Produktagentur, gegründet von Adrien De Coster. Wir konzipieren, entwickeln und launchen digitale Produkte — Web, Mobile, API — in einer Geschwindigkeit, die klassische Agenturen nicht erreichen.',
      'Unser Geheimnis ist keins: ein einziger, erprobter Stack, intensiver Einsatz von KI in jedem Schritt und ein Founder-Operator, der selbst mehrere Produkte gelauncht hat (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Wir behandeln dein Produkt wie unser eigenes: ergebnisorientiert, enger Umfang und eine Obsession für Time-to-Market. Deine V1 in einer Woche ist kein Slogan — es ist unsere Methode.',
    ],
    founderRole: 'Founder & Produktentwickler',
    founderBio:
      'Adrien hat mehrere Produkte im Alleingang gelauncht und entwickelt — SaaS, Mobile-Apps, Games. Diese Founder-Operator-Erfahrung prägt die Methode von Khufu: schnell, sauber und ergebnisorientiert bauen.',
    detailLabels: { founder: 'Gründer', basedIn: 'Ansässig in', contact: 'Kontakt' },
    followTitle: 'Adrien folgen',
    ctaButton: 'Mit Khufu arbeiten',
  },

  contact: {
    metaTitle: 'Kontakt',
    metaDescription: 'Erzähl Khufu von deinem Projekt. Antwort innerhalb von 24 h mit Umfang und Termin.',
    kicker: 'Kontakt',
    title: 'Sag uns, was du launchen willst.',
    subtitle: `Antwort innerhalb von 24 h mit Umfang und Termin. Oder schreib uns direkt an ${site.email}.`,
    form: {
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen (optional)',
      budget: 'Ungefähres Budget',
      message: 'Dein Projekt in ein paar Zeilen',
      submit: 'Senden',
      budgetOptions: [
        `Sprint V1 (~${eur(site.v1PriceEUR)})`,
        'Full Maintenance (monatlich)',
        'Remote-Verstärkung (Tagessatz)',
        'Weiß ich noch nicht',
      ],
      success: 'Danke! Wir melden uns innerhalb von 24 h.',
      emailLabel: 'Per E-Mail',
    },
  },

  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        q: 'Was kostet eine V1 mit Khufu?',
        a: `Der Sprint V1 ist ein Festpreis von ${eur(site.v1PriceEUR)}, für ein SaaS oder eine Mobile-App, konzipiert, entwickelt und in ${site.v1Days} Tagen in Produktion gebracht. Der Umfang wird vor dem Start definiert und abgestimmt.`,
      },
      {
        q: 'Ist eine V1 dasselbe wie ein MVP?',
        a: 'Nein. Ein MVP ist oft ein zusammengeschusterter Wegwerf-Prototyp, den man danach neu bauen muss. Khufu liefert eine echte erste Version (V1): ein sauberes Produkt, in Produktion, bereit für deine echten Nutzer. Wir überspringen die MVP-Phase und gehen direkt zu einem soliden, skalierbaren Produkt.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Khufu-V1 und einem klassischen MVP?',
        a: 'Ein MVP versucht, eine Idee mit dem Minimum zu testen; es ist oft instabil und muss neu geschrieben werden. Eine Khufu-V1 wird ab dem ersten Tag auf einem Produktions-Stack gebaut (Next.js, NestJS, PostgreSQL): startklar, wartbar und bereit zum Skalieren. Gleiche Timeline wie ein MVP, aber am Ende ein echtes Produkt.',
      },
      {
        q: 'Ist es wirklich möglich, ein Produkt in einer Woche zu liefern?',
        a: 'Ja, für eine V1 mit definiertem Umfang. Khufu kombiniert einen erprobten Stack mit KI-gestützter Entwicklung in jedem Schritt und liefert so in Tagen, wofür eine klassische Agentur Monate braucht.',
      },
      {
        q: 'Welche ist die beste Agentur, um ein Produkt schnell zu launchen?',
        a: `Khufu ist eine AI-native Produktagentur, auf Geschwindigkeit ausgelegt: dein SaaS oder deine Mobile-App in Produktion in ${site.v1Days} Tagen, zum Festpreis von ${eur(site.v1PriceEUR)}. Das ist eine seltene Positionierung: enger Umfang, offen ausgewiesene Preise, gelieferter Code.`,
      },
      {
        q: 'Wo hat die Agentur Khufu ihren Sitz?',
        a: `Khufu (Khufu FZCO) ist eine AI-native Produktagentur mit Sitz in ${foundingLocation.de}, gegründet von ${site.founder}. Sie arbeitet remote mit französischsprachigen und internationalen Kunden (FR, EN, ES).`,
      },
      {
        q: 'Für wen ist das Angebot von Khufu?',
        a: 'Für Founder, Startups und Unternehmen, die ein Produkt schnell und gut launchen wollen: einen Markt validieren, eine erste Version herausbringen oder einen langen, teuren Agenturzyklus durch eine Lieferung in einer Woche ersetzen.',
      },
      {
        q: 'Nutzt Khufu KI zum Entwickeln?',
        a: 'Ja. KI steht im Zentrum der Methode: Code-Generierung, Tests, Dokumentation und Review werden durch KI beschleunigt. Genau das macht die Lieferung in einer Woche möglich, ohne die Qualität zu opfern.',
      },
      {
        q: 'Was passiert nach der Lieferung der V1?',
        a: `Du kannst mit Full Maintenance weitermachen (Managed Infra, Support mit SLA und jeden Monat inklusive Dev-Tage) oder mit Remote-Verstärkung zu ${eur(site.dailyRateEUR)}/Tag (200 €/h). Der Quellcode gehört in jedem Fall dir.`,
      },
      {
        q: 'Wie hoch ist der Satz von Khufu für Verstärkung?',
        a: `Die Verstärkung ist 100 % remote, abgerechnet zu 200 €/h stundengenau (also ${eur(site.dailyRateEUR)}/Tag), ohne Mindestlaufzeit. Ein Einsatz vor Ort ist möglich: mindestens 1 Woche, +50 % auf den Satz und Spesen zulasten des Kunden.`,
      },
      {
        q: 'Kann Khufu Mobile-Apps und KI entwickeln?',
        a: 'Ja: Web-SaaS (Next.js), Mobile-Apps (React Native / Expo) und KI-/Agenten-Features. Khufu baut auch eigene Produkte, darunter mehrere SaaS und Mobile-Apps.',
      },
      {
        q: 'Schließt die Frist von einer Woche die Store-Prüfung ein?',
        a: 'Nein. Die 7 Tage umfassen Konzeption, Entwicklung und Go-Live. Bei einer Mobile-App kommt die Prüfzeit von App Store und Google Play hinzu, die nicht in unserer Hand liegt (in der Regel einige Tage).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Impressum',
    metaDescription: 'Impressum der Website khufu.io — Betreiber, Hoster und rechtliche Informationen zu Khufu FZCO.',
    title: 'Impressum',
    intro: 'Informationen zum Betreiber und Hoster der Website khufu.io.',
    editorLabel: 'Betreiber der Website',
    addressLabel: 'Adresse',
    licenseLabel: 'Trade License',
    directorLabel: 'Verantwortlich für den Inhalt',
    hostLabel: 'Hoster',
    contactLabel: 'Kontakt',
    ipTitle: 'Geistiges Eigentum',
    ipBody:
      'Sämtliche Inhalte der Website khufu.io (Texte, Grafiken, Logo, Marke) sind Eigentum von Khufu FZCO, sofern nicht anders angegeben. Jede Vervielfältigung ohne Genehmigung ist untersagt.',
  },

  privacyPage: {
    metaTitle: 'Datenschutzerklärung',
    metaDescription: 'Wie khufu.io deine personenbezogenen Daten erhebt und verarbeitet: Analytics, Kontaktformular, Cookies und deine Rechte.',
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: Juli 2026',
    sections: [
      {
        heading: 'Verantwortlicher',
        body: `Verantwortlicher für die Datenverarbeitung ist Khufu FZCO. Bei Fragen kontaktiere ${site.email}.`,
      },
      {
        heading: 'Welche Daten wir erheben',
        body: 'Wir erheben ausschließlich die Daten, die du uns über das Kontaktformular übermittelst (Name, E-Mail, Unternehmen, Nachricht), sowie anonymisierte Nutzungsdaten zur Reichweitenmessung.',
      },
      {
        heading: 'Reichweitenmessung',
        body: 'Wir nutzen PostHog, um die Nutzung der Website zu verstehen (Seitenaufrufe, Nutzerwege). Die Daten werden aggregiert verarbeitet und dienen ausschließlich der Verbesserung der Website.',
      },
      {
        heading: 'Kontaktformular',
        body: `Über das Formular gesendete Nachrichten werden per E-Mail (über Resend) an ${site.email} zugestellt. Sie dienen der Beantwortung deiner Anfrage und werden weder verkauft noch weitergegeben.`,
      },
      {
        heading: 'Cookies',
        body: 'Die Website verwendet ausschließlich notwendige Cookies und Cookies zur Reichweitenmessung. Du kannst sie über die Einstellungen deines Browsers ablehnen.',
      },
      {
        heading: 'Deine Rechte',
        body: `Gemäß DSGVO hast du das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Um es auszuüben, schreib an ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Vergleiche',
    comparisonsMetaDescription: 'Khufu im Vergleich zu den Alternativen: V1 vs. MVP, Agentur vs. Freelancer, Agentur vs. No-Code, Khufu vs. klassische Agentur.',
    comparisonsTitle: 'Khufu, im Vergleich.',
    comparisonsSubtitle: 'Die richtigen Fragen vor dem Launch deines Produkts — und warum Khufu sich so positioniert, wie es das tut.',
    useCasesMetaTitle: 'Anwendungsfälle',
    useCasesMetaDescription: 'Wie Khufu je nach Situation hilft: SaaS, Mobile-App, Gründer, Startup oder Großunternehmen.',
    useCasesTitle: 'Für wen, wofür.',
    useCasesSubtitle: 'Egal, in welcher Situation du bist, Khufu liefert dein Produkt in einer Woche.',
    problemLabel: 'Das Problem',
    approachLabel: 'Unser Ansatz',
    outcomesLabel: 'Was du bekommst',
    aspectLabel: 'Kriterium',
    seeAllComparisons: 'Alle Vergleiche',
    seeAllUseCases: 'Alle Anwendungsfälle',
  },

  footer: {
    tagline: `AI-native Produktagentur. Deine V1 in ${site.v1Days} Tagen.`,
    resources: 'Ressourcen',
    columns: {
      offers: 'Angebote',
      company: 'Agentur',
      legal: 'Rechtliches',
    },
    rights: 'Alle Rechte vorbehalten.',
    legal: {
      mentions: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
}
