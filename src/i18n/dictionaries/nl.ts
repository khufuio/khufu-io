import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `€ ${n.toLocaleString('nl-NL')}`

// Keep `id` values identical to fr.ts — they are compared in code.
export const nl: Dictionary = {
  meta: {
    locale: 'nl',
    brandSuffix: 'Khufu — Jouw V1 in één week',
  },

  nav: {
    offers: 'Diensten',
    maintenance: 'Onderhoud',
    work: 'Projecten',
    method: 'Methode',
    about: 'Over ons',
    contact: 'Contact',
    cta: 'Boek een sprint',
  },

  common: {
    seeWork: 'Bekijk projecten',
    bookSprint: 'Boek een sprint',
    talkToUs: 'Praat met Khufu',
    from: 'Vanaf',
    perDay: '/ dag',
    perMonth: '/ maand',
    days: 'dagen',
    learnMore: 'Meer weten',
    getStarted: 'Aan de slag',
    draftBadge: 'Voorbeeld',
  },

  home: {
    heroKicker: 'AI-native productbureau',
    heroTitle: 'Jouw V1 in één week.',
    heroSubtitle: `We ontwerpen, bouwen en leveren je SaaS of mobiele app in ${site.v1Days} dagen. Vaste prijs: [[${site.v1PriceEUR}]].`,
    heroPrimaryCta: 'Boek een sprint',
    heroSecondaryCta: 'Bekijk projecten',
    heroProof: `${site.v1Days} dagen · vaste prijs ${eur(site.v1PriceEUR)} · code opgeleverd, in productie`,
    heroFigures: [
      { value: `${site.v1Days} dagen`, label: 'van brief tot productie' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'vaste prijs, alles inbegrepen' },
    ],

    statsTitle: 'Wat “één week” betekent',
    stats: [
      { value: `${site.v1Days} dagen`, label: 'van kickoff tot een V1 in productie' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'vaste prijs Sprint V1, scope vooraf afgesproken' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'remote dagtarief (200 €/h) voor wat daarna komt' },
      { value: '100 %', label: 'code opgeleverd, gehost, van jou' },
    ],

    problemTitle: 'Een klassiek bureau doet er 3 maanden over? Jij hebt geen 3 maanden.',
    problemBody:
      'Eindeloze cycli, vage offertes en heen-en-weer gepraat maken projecten kapot voordat ze live gaan. Khufu doet het omgekeerde: strakke scope, snelle beslissingen en een echt lanceerbare V1 aan het eind van de week.',

    // Secondary sales argument (not the headline): the sprint is the offer, and
    // this is one reason to pick it. Kept factual — what a fractional CTO does and
    // does not deliver, next to what the sprint delivers.
    ctoTitle: 'Parttime CTO vs een compleet team',
    ctoSubtitle: 'Hetzelfde probleem, twee antwoorden. Slechts één laat je achter met een product online.',
    ctoOtherLabel: 'CTO on demand',
    ctoKhufuLabel: 'Khufu',
    ctoRows: [
      {
        aspect: 'Wat je krijgt',
        other: 'Beslissingen, specs, een roadmap',
        khufu: 'Een product online, in productie',
      },
      {
        aspect: 'Wie bouwt',
        other: 'Niemand — het team moet je nog aannemen',
        khufu: 'Scoping, design, dev, mobile, infra: alles gedekt',
      },
      {
        aspect: 'Tijd tot de V1',
        other: 'Maanden, zodra het team er is',
        khufu: `${site.v1Days} dagen`,
      },
      {
        aspect: 'Wat je betaalt',
        other: 'Een maandelijkse retainer, plus de salarissen van het team',
        khufu: `Eén vaste prijs, vooraf afgesproken: [[${site.v1PriceEUR}]]`,
      },
      {
        aspect: 'Aan het eind',
        other: 'Je hebt een plan',
        khufu: 'Je hebt het product, de repo en de accounts',
      },
    ],
    ctoNote:
      'Niets ten nadele van parttime CTO’s: heb je al een team om aan te sturen, dan is dat de juiste keuze. Heb je dat niet, dan is een team precies wat je nodig hebt.',

    teamTitle: 'Alle rollen van een techteam, in één contract',
    teamSubtitle:
      'Je neemt er geen enkele aan. Je krijgt wat ze opleveren — één aanspreekpunt, van scoping tot productie.',
    teamRoles: [
      'Productscoping',
      'UI / UX-design',
      'Front-end development',
      'Back-end & API’s',
      'Mobiel iOS & Android',
      'Infra, deploys & CI/CD',
      'Security & back-ups',
      'Documentatie & handover',
    ],

    howTitle: 'Hoe we zo snel gaan',
    how: [
      {
        title: 'AI-native, van begin tot eind',
        body: 'We bouwen AI-ondersteund in elke stap — design, dev, tests, documentatie. Hetzelfde werk in een fractie van de tijd, zonder in te leveren op kwaliteit.',
      },
      {
        title: 'Eén beproefde stack',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. We vinden niets opnieuw uit: we zetten een bewezen basis in elkaar, klaar om te schalen.',
      },
      {
        title: 'Een founder-operator, geen keten van onderaannemers',
        body: 'Het team is één founder-operator versterkt door AI — één aanspreekpunt, geen coördinatie op jouw bord. Khufu heeft zijn eigen producten (OneStore.link, Clokizi, HerbaCRM…) met precies deze methode gelanceerd.',
      },
    ],

    offersTitle: 'Drie manieren om met Khufu te werken',
    offersSubtitle: 'Van een bliksemsnelle lancering tot begeleiding op lange termijn.',

    workTitle: 'Producten, geen slides',
    workSubtitle: 'Een selectie van producten ontworpen en opgeleverd door Khufu.',
    workCta: 'Alle projecten',

    clientsTitle: 'Zij vertrouwen ons',
    testimonialsTitle: 'Wat ze zeggen',

    finalCtaTitle: 'Jouw V1, vrijdag in productie.',
    finalCtaBody: 'Vertel ons wat je wilt lanceren. We antwoorden binnen 24 u met een scope en een datum.',
    finalCtaButton: 'Boek een sprint',
  },

  offers: {
    metaTitle: 'Diensten & prijzen',
    metaDescription: `Sprint V1 in ${site.v1Days} dagen vanaf ${eur(site.v1PriceEUR)}, maandelijkse Full Maintenance en remote versterking à ${eur(site.dailyRateEUR)}/dag (200 €/h).`,
    title: 'Heldere diensten, prijzen zichtbaar.',
    subtitle: 'Geen eindeloze offertes. Je weet precies wat je betaalt en wat je krijgt.',
    flagshipBadge: 'Ons vlaggenschip',
    detailCta: 'Meer weten',
    sprintCta: 'Ontdek de Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        priceEur: site.v1PriceEUR,
        priceNote: 'vaste prijs',
        pitch: `Je eerste versie, ontworpen en opgeleverd in ${site.v1Days} dagen.`,
        featured: true,
        features: [
          'Scoping en productdesign',
          'SaaS- of mobiele-app-ontwikkeling',
          'Livegang + hosting',
          'Broncode opgeleverd, van jou',
          'Overdracht en documentatie',
        ],
        cta: 'Boek een sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        priceEur: 1490,
        pricePrefix: 'vanaf ',
        priceNote: '/ maand',
        pitch: 'We houden je product levend: infra, support en dev-dagen inbegrepen.',
        featured: false,
        features: [
          'Beheerde infra: hosting, monitoring, back-ups, security',
          'Support met SLA (gegarandeerde responstijd)',
          'Ontwikkeldagen inbegrepen elke maand',
          'Updates en fixes',
          'Maandrapport',
        ],
        cta: 'Bekijk de niveaus',
      },
      {
        id: 'regie',
        name: 'Remote',
        priceEur: site.dailyRateEUR,
        priceNote: '/ dag',
        pitch: 'Senior slagkracht, 100 % remote, per uur gefactureerd — [[200]]/h.',
        featured: false,
        features: [
          '100 % remote',
          '[[200]]/h — per uur nauwkeurig',
          'Ontwikkeling, architectuur, advies',
          'Geen contractduur',
        ],
        cta: 'Praat met Khufu',
      },
    ],
    remoteNoteShort: 'Werken op locatie mogelijk, onder voorwaarden.',
    remoteNote:
      'Werken op locatie is mogelijk: minimaal 1 week, +50 % op het tarief, met onkosten (reis, verblijf) voor rekening van de klant.',
    firmPriceNote: 'Vaste prijs, gefactureerd in euro of dollar — jouw keuze.',
    guaranteesTitle: 'Wat we garanderen',
    guarantees: [
      'Een schriftelijke, afgesproken scope voordat we beginnen.',
      'Een leverdatum, gehaald.',
      'De broncode is van jou, vanaf dag één.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — je product in 7 dagen',
    metaDescription:
      'De Sprint V1 van Khufu: een SaaS of mobiele app ontworpen, ontwikkeld en in productie gezet in 7 dagen, voor een vaste prijs van € 15.000.',
    kicker: 'Vlaggenschip',
    title: 'Jouw V1 in 7 dagen. Vaste prijs.',
    subtitle:
      'Onze belangrijkste dienst: we ontwerpen, bouwen en zetten je SaaS of mobiele app in één week in productie — scope vooraf afgesproken, € 15.000 alles inbegrepen.',
    includesTitle: 'Wat inbegrepen is',
    processTitle: 'Het verloop, dag per dag',
    ctaTitle: 'Klaar om je V1 te lanceren?',
    ctaBody: 'Vertel ons wat je wilt lanceren. Antwoord binnen 24 u met een scope en een datum.',
    ctaButton: 'Boek een sprint',
  },

  remotePage: {
    metaTitle: 'Remote — productversterking per uur',
    metaDescription:
      'Een senior, 100 % remote versterking voor je product: ontwikkeling, architectuur en advies, gefactureerd tegen 200 €/h met uurnauwkeurigheid.',
    kicker: 'Remote',
    title: 'Een senior versterking, 100 % remote.',
    subtitle:
      'Behoefte aan dev-slagkracht op afroep? We werken remote aan je product: ontwikkeling, architectuur, advies — per uur gefactureerd, geen contractduur.',
    includesTitle: 'Wat het dekt',
    ctaTitle: 'Versterking nodig?',
    ctaBody: 'Vertel ons waar je staat en wat je nodig hebt. We komen binnen 24 u bij je terug.',
    ctaButton: 'Praat met Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, support & dev',
    metaDescription:
      'Maandelijks abonnement van Khufu: beheerde infrastructuur, support met SLA en inbegrepen ontwikkeldagen om je product te laten groeien.',
    kicker: 'Full Maintenance',
    title: 'We leverden je V1 op. Wij laten hem groeien.',
    subtitle:
      'Eén maandelijks abonnement dat infrastructuur, support en productevolutie dekt. Jij richt je op je business, wij regelen de rest.',
    includesTitle: 'Wat het abonnement dekt',
    includes: [
      {
        title: 'Beheerde infra',
        body: 'Hosting, deployments, monitoring, uptime, back-ups en security. Je product blijft online en up-to-date.',
      },
      {
        title: 'Support',
        body: 'Een direct kanaal met een heldere SLA. We reageren, we fixen, we laten je niet alleen met een bug in productie.',
      },
      {
        title: 'Dev-dagen',
        body: 'Een vast aantal ontwikkeldagen inbegrepen elke maand voor nieuwe features en verbeteringen.',
      },
    ],
    popularBadge: 'Populair',
    tiersTitle: 'Drie niveaus',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '€ 1.490',
        priceEur: 1490,
        priceNote: '/ maand',
        pitch: 'Om een stabiel product online te houden.',
        featured: false,
        features: ['Beheerde infra + monitoring', 'Support binnen 48 uur', '8 u dev / maand inbegrepen', 'Maandrapport'],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '€ 3.900',
        priceEur: 3900,
        priceNote: '/ maand',
        pitch: 'Voor een product dat blijft evolueren.',
        featured: true,
        features: ['Alles van Starter', 'Support binnen 24 uur', '24 u dev / maand inbegrepen', 'Maandelijkse productreview'],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Op aanvraag',
        priceNote: '',
        pitch: 'Voor een kritiek product in sterke groei.',
        featured: false,
        features: ['Alles van Growth', 'Prioritaire support, SLA op maat', 'Toegewijde dev-uren', 'Gedeelde roadmap'],
      },
    ],
    devNote:
      'Verbintenis van 6 maanden. Verplichte setup van tracking-tools bij de kickoff: 1 dag ([[1200]]). Extra dev-uren gefactureerd tegen [[200]]/h.',
    ctaTitle: 'Onderhoud uit handen geven?',
    ctaBody: 'Vertel ons waar je product staat, wij stellen het juiste niveau voor.',
    ctaButton: 'Praat met Khufu',
  },

  method: {
    metaTitle: 'De methode — je V1 in 7 dagen',
    metaDescription:
      'Hoe Khufu een V1 in één week oplevert: het verloop dag per dag, van scoping tot productie, versneld door AI.',
    kicker: 'De methode',
    title: 'Zeven dagen, een lanceerbaar product.',
    subtitle: 'Een strak, transparant verloop. Je weet precies wat er elke dag gebeurt.',
    days: [
      { day: 'Dag 1', title: 'Scoping', body: 'We bepalen de exacte scope, de belangrijkste flows en de technische architectuur. Jij keurt goed voordat we één regel schrijven.' },
      { day: 'Dag 2–3', title: 'Ontwikkeling', body: 'We bouwen de kern van het product: front, back en database. Schone code en heldere architectuur vanaf de eerste commit.' },
      { day: 'Dag 4', title: 'Infra & tests', body: 'Infrastructuur, tests, performance en security. We verstevigen de fundamenten voordat we itereren.' },
      { day: 'Dag 5–6', title: 'Iteraties', body: 'Ontwikkeling gestuurd door jouw feedback: we passen het product live aan, in voortdurend contact met jou.' },
      { day: 'Dag 7', title: 'Livegang', body: 'Deployment, CI/CD-setup, hosting en overdracht. Je V1 staat online, in jouw handen.' },
    ],
    qualityTitle: 'Schone, onderhoudbare en performante code',
    qualityBody:
      'We leveren geen wegwerpcode. Elke V1 is gebouwd op een heldere architectuur, met leesbare, geteste en geoptimaliseerde code — zodat je hem kunt laten evolueren en schalen zonder technische schuld.',
    aiTitle: 'De rol van AI',
    aiBody:
      'AI is geen gimmick: het is onze snelheidsvermenigvuldiger. Codegeneratie, tests, documentatie, review — elke stap wordt versneld om in dagen te leveren wat elders maanden duurt, zonder in te leveren op kwaliteit.',
    storeNote:
      'De 7 dagen dekken design, ontwikkeling en livegang. Voor mobiele apps komt de reviewtijd van de App Store en Google Play erbij en die ligt buiten onze controle.',
    ctaButton: 'Boek een sprint',
  },

  work: {
    metaTitle: 'Projecten',
    metaDescription:
      'Web- en mobiele producten ontworpen en opgeleverd door Khufu: OneStore.link, Clokizi, HerbaCRM, Labyrinth.',
    title: 'Wat we gebouwd hebben.',
    subtitle: 'Echte producten, in productie, ontworpen en ontwikkeld door Khufu.',
    internalLabel: 'Khufu-product',
    clientLabel: 'Klant',
    stackLabel: 'Stack',
    visitLabel: 'Bekijk het product',
    backToWork: 'Alle projecten',
    caseIntro: 'Case study',
  },

  about: {
    metaTitle: 'Over ons',
    metaDescription:
      'Khufu is een AI-native productbureau opgericht door Adrien De Coster, dat V1’s in één week oplevert en zijn eigen producten bouwt.',
    kicker: 'Over ons',
    title: 'We bouwen snel omdat we ook voor onszelf bouwen.',
    body: [
      'Khufu is een AI-native productbureau opgericht door Adrien De Coster. We ontwerpen, bouwen en lanceren digitale producten — web, mobiel, API — met een snelheid die klassieke bureaus niet halen.',
      'Ons geheim is geen geheim: één beproefde stack, intensief gebruik van AI in elke stap, en een founder-operator die zelf meerdere producten heeft gelanceerd (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'We behandelen jouw product als het onze: resultaatgericht, strakke scope en een obsessie met time-to-market. Jouw V1 in één week is geen slogan — het is onze methode.',
    ],
    founderRole: 'Founder & productontwikkelaar',
    founderBio:
      'Adrien heeft in zijn eentje meerdere producten gelanceerd en gebouwd — SaaS, mobiele apps, games. Die founder-operator-ervaring vormt de methode van Khufu: snel bouwen, schoon, en resultaatgericht.',
    detailLabels: { founder: 'Oprichter', basedIn: 'Gevestigd in', contact: 'Contact' },
    followTitle: 'Volg Adrien',
    ctaButton: 'Werk met Khufu',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription: 'Vertel Khufu over je project. Antwoord binnen 24 u met een scope en een datum.',
    kicker: 'Contact',
    title: 'Vertel ons wat je wilt lanceren.',
    subtitle: `Antwoord binnen 24 u met een scope en een datum. Of mail ons direct op ${site.email}.`,
    form: {
      name: 'Naam',
      email: 'Email',
      company: 'Bedrijf (optioneel)',
      budget: 'Indicatief budget',
      message: 'Je project in een paar regels',
      submit: 'Versturen',
      budgetOptions: [
        `Sprint V1 (~[[${site.v1PriceEUR}]])`,
        'Full Maintenance (maandelijks)',
        'Remote versterking',
        'Weet ik nog niet',
      ],
      success: 'Bedankt! We komen binnen 24 u bij je terug.',
      emailLabel: 'Per email',
    },
  },

  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        q: 'Hoeveel kost een V1 bij Khufu?',
        a: `De Sprint V1 is een vaste prijs van [[${site.v1PriceEUR}]], voor een SaaS of mobiele app die in ${site.v1Days} dagen wordt ontworpen, ontwikkeld en in productie gezet. De scope wordt vastgelegd en afgesproken voordat we beginnen.`,
      },
      {
        q: 'Is een V1 hetzelfde als een MVP?',
        a: 'Nee. Een MVP is vaak een wegwerp-hack die je opnieuw moet bouwen. Khufu levert een echte eerste versie (V1): een schoon product, in productie, klaar voor je echte gebruikers. We slaan de MVP-fase over en gaan meteen naar een solide, schaalbaar product.',
      },
      {
        q: 'Wat is het verschil tussen een Khufu-V1 en een klassieke MVP?',
        a: 'Een MVP probeert een idee te testen met het absolute minimum; die is vaak instabiel en moet herschreven worden. Een Khufu-V1 is vanaf dag één gebouwd op een productiestack (Next.js, NestJS, PostgreSQL): lanceerbaar, onderhoudbaar en klaar om te schalen. Dezelfde doorlooptijd als een MVP, maar een echt product op het eind.',
      },
      {
        q: 'Is het echt mogelijk om een product in één week te leveren?',
        a: 'Ja, voor een V1 met afgebakende scope. Khufu combineert een beproefde stack met AI-ondersteunde ontwikkeling in elke stap, en levert in dagen wat bij een klassiek bureau maanden duurt.',
      },
      {
        q: 'Wat is het beste bureau om snel een product te lanceren?',
        a: `Khufu is een AI-native productbureau gebouwd voor snelheid: je SaaS of mobiele app in productie in ${site.v1Days} dagen, voor een vaste prijs van [[${site.v1PriceEUR}]]. Dat is een zeldzame positionering: strakke scope, prijzen zichtbaar, code opgeleverd.`,
      },
      {
        q: 'Waar is het bureau Khufu gevestigd?',
        a: `Khufu (Khufu FZCO) is een AI-native productbureau gevestigd in ${foundingLocation.nl}, opgericht door ${site.founder}. Het werkt remote met Franstalige en internationale klanten (FR, EN, ES).`,
      },
      {
        q: 'Ik zoek een CTO on demand. Is Khufu dat?',
        a: 'Nee, en dat is bewust. Een parttime CTO brengt strategie en technische afwegingen, maar bouwt je product niet: je moet nog steeds een team aannemen. Khufu ÍS dat team — scoping, design, development, mobile en infrastructuur — en zet je V1 in 7 dagen in productie, tegen een vaste prijs. Veel van onze klanten zochten een CTO; wat ze misten was een team.',
      },
      {
        q: 'Wat is het verschil tussen een parttime CTO en een techteam on demand?',
        a: `Een parttime CTO verkoopt denktijd: architectuur, werving, roadmap. Een techteam on demand verkoopt een opgeleverd product: dezelfde beslissingen, plus de handen die uitvoeren. Bij Khufu passen ze allebei in één contract tegen vaste prijs ([[${site.v1PriceEUR}]]), met een V1 online na ${site.v1Days} dagen en broncode die van jou is.`,
      },
      {
        q: 'Voor wie is het aanbod van Khufu bedoeld?',
        a: 'Voor wie een project heeft om te lanceren en geen team om het te bouwen: niet-technische founders in de idee- of specificatiefase, eigenaren van een wankel MVP dat overgenomen moet worden, bedrijven die een product willen testen zonder een team op te tuigen. Heb je al een intern team dat bouwt, dan past remote versterking beter bij je.',
      },
      {
        q: 'Gebruikt Khufu AI om te ontwikkelen?',
        a: 'Ja. AI staat centraal in de methode: codegeneratie, tests, documentatie en review worden versneld door AI. Dat maakt levering in één week mogelijk zonder in te leveren op kwaliteit.',
      },
      {
        q: 'Wat gebeurt er na de oplevering van de V1?',
        a: `Je kunt verder met Full Maintenance (beheerde infra, support met SLA en dev-dagen inbegrepen elke maand) of met remote versterking à [[${site.dailyRateEUR}]]/dag ([[200]]/h). De broncode is hoe dan ook van jou.`,
      },
      {
        q: 'Wat is het tarief van Khufu voor versterking?',
        a: `De versterking is 100 % remote, gefactureerd tegen [[200]]/h met uurnauwkeurigheid (oftewel [[${site.dailyRateEUR}]]/dag), zonder contractduur. Werken op locatie is mogelijk: minimaal 1 week, +50 % op het tarief en onkosten voor rekening van de klant.`,
      },
      {
        q: 'Kan Khufu mobiele apps en AI ontwikkelen?',
        a: 'Ja: web-SaaS (Next.js), mobiele apps (React Native / Expo) en AI- / agent-functies. Khufu bouwt ook zijn eigen producten, waaronder meerdere SaaS en mobiele apps.',
      },
      {
        q: 'Zit de storevalidatie in de doorlooptijd van één week?',
        a: 'Nee. De 7 dagen dekken design, ontwikkeling en livegang. Voor een mobiele app komt de reviewtijd van de App Store en Google Play erbij en die ligt buiten onze controle (meestal enkele dagen).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Juridische vermeldingen',
    metaDescription: 'Juridische vermeldingen van de site khufu.io — uitgever, host en juridische informatie van Khufu FZCO.',
    title: 'Juridische vermeldingen',
    intro: 'Informatie over de uitgever en de host van de site khufu.io.',
    editorLabel: 'Uitgever van de site',
    addressLabel: 'Adres',
    licenseLabel: 'Trade License',
    directorLabel: 'Verantwoordelijke uitgever',
    hostLabel: 'Host',
    contactLabel: 'Contact',
    ipTitle: 'Intellectueel eigendom',
    ipBody:
      'Alle inhoud van khufu.io (teksten, beelden, logo, merk) is eigendom van Khufu FZCO, tenzij anders vermeld. Elke reproductie zonder toestemming is verboden.',
  },

  privacyPage: {
    metaTitle: 'Privacybeleid',
    metaDescription: 'Hoe khufu.io je persoonsgegevens verzamelt en verwerkt: analytics, contactformulier, cookies en je rechten.',
    title: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: juli 2026',
    sections: [
      {
        heading: 'Verwerkingsverantwoordelijke',
        body: `De verwerkingsverantwoordelijke is Khufu FZCO. Voor elke vraag, neem contact op via ${site.email}.`,
      },
      {
        heading: 'Gegevens die we verzamelen',
        body: 'We verzamelen uitsluitend de gegevens die je ons via het contactformulier verstrekt (naam, email, bedrijf, bericht) en geanonimiseerde navigatiegegevens voor publieksmeting.',
      },
      {
        heading: 'Publieksmeting',
        body: 'We gebruiken PostHog om te begrijpen hoe de site gebruikt wordt (paginaweergaven, trajecten). De gegevens worden geaggregeerd verwerkt en dienen uitsluitend om de site te verbeteren.',
      },
      {
        heading: 'Contactformulier',
        body: `Berichten die via het formulier worden verzonden, worden per email (via Resend) bezorgd op ${site.email}. Ze worden gebruikt om je aanvraag te beantwoorden en worden nooit verkocht of gedeeld.`,
      },
      {
        heading: 'Cookies',
        body: 'De site gebruikt strikt noodzakelijke cookies en cookies voor publieksmeting. Je kunt ze weigeren via de instellingen van je browser.',
      },
      {
        heading: 'Je rechten',
        body: `Conform de AVG heb je recht op inzage, rectificatie en verwijdering van je gegevens. Om dit uit te oefenen, mail naar ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Vergelijkingen',
    comparisonsMetaDescription: 'Khufu vergeleken met de alternatieven: V1 vs MVP, bureau vs freelancer, bureau vs no-code, Khufu vs een klassiek bureau.',
    comparisonsTitle: 'Khufu, vergeleken.',
    comparisonsSubtitle: 'De juiste vragen voordat je je product lanceert — en waarom Khufu zich positioneert zoals het doet.',
    useCasesMetaTitle: 'Use cases',
    useCasesMetaDescription: 'Hoe Khufu helpt afhankelijk van je situatie: SaaS, mobiele app, ondernemer, startup of grote onderneming.',
    useCasesTitle: 'Voor wie, waarvoor.',
    useCasesSubtitle: 'Wat je situatie ook is, Khufu levert je product in één week.',
    problemLabel: 'Het probleem',
    approachLabel: 'Onze aanpak',
    outcomesLabel: 'Wat je krijgt',
    aspectLabel: 'Criterium',
    seeAllComparisons: 'Alle vergelijkingen',
    seeAllUseCases: 'Alle use cases',
  },

  footer: {
    tagline: `AI-native productbureau. Jouw V1 in ${site.v1Days} dagen.`,
    resources: 'Bronnen',
    columns: {
      offers: 'Diensten',
      company: 'Bureau',
      legal: 'Juridisch',
    },
    rights: 'Alle rechten voorbehouden.',
    legal: {
      mentions: 'Juridische vermeldingen',
      privacy: 'Privacy',
    },
  },
}
