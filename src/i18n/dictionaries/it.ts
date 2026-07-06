import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('it-IT')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const it: Dictionary = {
  meta: {
    locale: 'it',
    brandSuffix: 'Khufu — La tua V1 in una settimana',
  },

  nav: {
    offers: 'Servizi',
    maintenance: 'Manutenzione',
    work: 'Progetti',
    method: 'Metodo',
    about: 'Chi siamo',
    contact: 'Contatto',
    cta: 'Prenota uno sprint',
  },

  common: {
    seeWork: 'Vedi i progetti',
    bookSprint: 'Prenota uno sprint',
    talkToUs: 'Parla con Khufu',
    from: 'A partire da',
    perDay: '/ giorno',
    perMonth: '/ mese',
    days: 'giorni',
    learnMore: 'Scopri di più',
    getStarted: 'Inizia',
    draftBadge: 'Anteprima',
  },

  home: {
    heroKicker: 'Agenzia di prodotto AI-native',
    heroTitle: 'La tua V1 in una settimana.',
    heroSubtitle: `Progettiamo, sviluppiamo e consegniamo il tuo SaaS o la tua app mobile in ${site.v1Days} giorni. Prezzo fisso: ${eur(site.v1PriceEUR)}.`,
    heroPrimaryCta: 'Prenota uno sprint',
    heroSecondaryCta: 'Vedi i progetti',
    heroProof: `${site.v1Days} giorni · forfait ${eur(site.v1PriceEUR)} · codice consegnato, in produzione`,
    heroFigures: [
      { value: `${site.v1Days} giorni`, label: 'dal brief alla produzione' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'prezzo fisso, tutto incluso' },
    ],

    statsTitle: 'Cosa significa “una settimana”',
    stats: [
      { value: `${site.v1Days} giorni`, label: 'dal kickoff a una V1 in produzione' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'forfait Sprint V1, ambito definito in anticipo' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'tariffa remota (200 €/h) per il seguito' },
      { value: '100 %', label: 'codice consegnato, ospitato, tuo' },
    ],

    problemTitle: 'Un’agenzia classica ci mette 3 mesi? Tu non hai 3 mesi.',
    problemBody:
      'Cicli infiniti, preventivi vaghi e continui rimpalli uccidono i progetti prima del lancio. Khufu fa l’opposto: ambito ristretto, decisioni rapide e una V1 davvero lanciabile entro fine settimana.',

    howTitle: 'Come facciamo così in fretta',
    how: [
      {
        title: 'AI-native, dall’inizio alla fine',
        body: 'Sviluppiamo con l’assistenza dell’IA in ogni fase — design, sviluppo, test, documentazione. Lo stesso lavoro in una frazione del tempo, senza sacrificare la qualità.',
      },
      {
        title: 'Un unico stack collaudato',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. Non reinventiamo nulla: assembliamo una base provata, pronta a scalare.',
      },
      {
        title: 'Un founder-operator al comando',
        body: 'Khufu ha lanciato i suoi prodotti (OneStore.link, Clokizi, HerbaCRM…). Costruiamo il tuo prodotto come il nostro: orientato al risultato, non alla fatturazione.',
      },
    ],

    offersTitle: 'Tre modi di lavorare con Khufu',
    offersSubtitle: 'Dal lancio lampo all’accompagnamento nel tempo.',

    workTitle: 'Prodotti, non slide',
    workSubtitle: 'Una selezione di prodotti progettati e consegnati da Khufu.',
    workCta: 'Tutti i progetti',

    clientsTitle: 'Si fidano di noi',
    testimonialsTitle: 'Cosa ne dicono',

    finalCtaTitle: 'La tua V1, in produzione venerdì.',
    finalCtaBody: 'Dicci cosa vuoi lanciare. Ti rispondiamo entro 24 h con un ambito e una data.',
    finalCtaButton: 'Prenota uno sprint',
  },

  offers: {
    metaTitle: 'Servizi e prezzi',
    metaDescription: `Sprint V1 in ${site.v1Days} giorni a partire da ${eur(site.v1PriceEUR)}, Full Maintenance mensile e supporto remoto a ${eur(site.dailyRateEUR)}/giorno (200 €/h).`,
    title: 'Servizi chiari, prezzi in vista.',
    subtitle: 'Niente preventivi infiniti. Sai esattamente cosa paghi e cosa ricevi.',
    flagshipBadge: 'La nostra offerta di punta',
    detailCta: 'Scopri di più',
    sprintCta: 'Scopri lo Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        price: `${eur(site.v1PriceEUR)}`,
        priceEur: site.v1PriceEUR,
        priceNote: 'forfait',
        pitch: `La tua prima versione, progettata e consegnata in ${site.v1Days} giorni.`,
        featured: true,
        features: [
          'Definizione dell’ambito e design del prodotto',
          'Sviluppo di SaaS o app mobile',
          'Messa in produzione + hosting',
          'Codice sorgente consegnato, tuo',
          'Handover e documentazione',
        ],
        cta: 'Prenota uno sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        price: 'da 1.490 €',
        priceEur: 1490,
        pricePrefix: 'da ',
        priceNote: '/ mese',
        pitch: 'Manteniamo vivo il tuo prodotto: infra, supporto e giornate di sviluppo incluse.',
        featured: false,
        features: [
          'Infra gestita: hosting, monitoraggio, backup, sicurezza',
          'Supporto con SLA (tempo di risposta garantito)',
          'Giornate di sviluppo incluse ogni mese',
          'Aggiornamenti e correzioni',
          'Report mensile',
        ],
        cta: 'Vedi i livelli',
      },
      {
        id: 'regie',
        name: 'Remote',
        price: `${eur(site.dailyRateEUR)}`,
        priceEur: site.dailyRateEUR,
        priceNote: '/ giorno',
        pitch: 'Un rinforzo senior 100 % remoto, fatturato a ore — 200 €/h.',
        featured: false,
        features: [
          '100 % remoto',
          '200 €/h — granularità oraria',
          'Sviluppo, architettura, consulenza',
          'Senza vincoli di durata',
        ],
        cta: 'Parla con Khufu',
      },
    ],
    remoteNote:
      'Lavoro on-site possibile: 1 settimana minimo, +50 % sulla tariffa, con spese (trasferta, alloggio) a carico del cliente.',
    firmPriceNote: 'Prezzo fisso in euro.',
    guaranteesTitle: 'Cosa garantiamo',
    guarantees: [
      'Un ambito scritto e approvato prima di iniziare.',
      'Una data di consegna, rispettata.',
      'Il codice sorgente è tuo, dal primo giorno.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — il tuo prodotto in 7 giorni',
    metaDescription:
      'Lo Sprint V1 di Khufu: un SaaS o un’app mobile progettato, sviluppato e messo in produzione in 7 giorni, per un prezzo fisso di 15.000 €.',
    kicker: 'Offerta di punta',
    title: 'La tua V1 in 7 giorni. Prezzo fisso.',
    subtitle:
      'La nostra offerta principale: progettiamo, sviluppiamo e mettiamo in produzione il tuo SaaS o la tua app mobile in una settimana — ambito definito in anticipo, 15.000 € tutto incluso.',
    includesTitle: 'Cosa è incluso',
    processTitle: 'Lo svolgimento, giorno per giorno',
    ctaTitle: 'Pronto a lanciare la tua V1?',
    ctaBody: 'Dicci cosa vuoi lanciare. Risposta entro 24 h con un ambito e una data.',
    ctaButton: 'Prenota uno sprint',
  },

  remotePage: {
    metaTitle: 'Remote — rinforzo di prodotto a ore',
    metaDescription:
      'Un rinforzo senior 100 % remoto per il tuo prodotto: sviluppo, architettura e consulenza, fatturato a 200 €/h con granularità oraria.',
    kicker: 'Remote',
    title: 'Un rinforzo senior, 100 % remoto.',
    subtitle:
      'Ti serve potenza di sviluppo on demand? Interveniamo in remoto sul tuo prodotto: sviluppo, architettura, consulenza — fatturato a ore, senza vincoli.',
    includesTitle: 'Cosa copre',
    ctaTitle: 'Ti serve un rinforzo?',
    ctaBody: 'Dicci a che punto sei e di cosa hai bisogno. Ti ricontattiamo entro 24 h.',
    ctaButton: 'Parla con Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, supporto e sviluppo',
    metaDescription:
      'Abbonamento mensile Khufu: infrastruttura gestita, supporto con SLA e giornate di sviluppo incluse per far crescere il tuo prodotto.',
    kicker: 'Full Maintenance',
    title: 'Abbiamo consegnato la tua V1. La facciamo crescere.',
    subtitle:
      'Un unico abbonamento mensile che copre infrastruttura, supporto ed evoluzione del prodotto. Tu ti concentri sul tuo business, noi ci occupiamo del resto.',
    includesTitle: 'Cosa copre l’abbonamento',
    includes: [
      {
        title: 'Infra gestita',
        body: 'Hosting, deploy, monitoraggio, uptime, backup e sicurezza. Il tuo prodotto resta online e aggiornato.',
      },
      {
        title: 'Supporto',
        body: 'Un canale diretto con uno SLA chiaro. Rispondiamo, correggiamo, non ti lasciamo solo davanti a un bug in produzione.',
      },
      {
        title: 'Giornate di sviluppo',
        body: 'Un volume di giornate di sviluppo incluse ogni mese per nuove funzionalità e miglioramenti.',
      },
    ],
    popularBadge: 'Popolare',
    tiersTitle: 'Tre livelli',
    tiersSubtitle: 'Scegli il livello di impegno in base alle tue esigenze. I prezzi sono indicativi.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1.490 €',
        priceEur: 1490,
        priceNote: '/ mese',
        pitch: 'Per mantenere un prodotto stabile e farlo evolvere.',
        featured: false,
        features: [
          'Infra gestita + monitoraggio',
          'Supporto entro 48 h lavorative',
          '7 h di sviluppo / mese incluse',
          'Report mensile',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3.900 €',
        priceEur: 3900,
        priceNote: '/ mese',
        pitch: 'Per un prodotto che evolve di continuo.',
        featured: true,
        features: [
          'Tutto Starter',
          'Supporto entro 24 h lavorative',
          '21 h di sviluppo / mese incluse',
          'Revisione di prodotto mensile',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Su preventivo',
        priceNote: '',
        pitch: 'Per un prodotto critico in forte crescita.',
        featured: false,
        features: [
          'Tutto Growth',
          'Supporto prioritario, SLA su misura',
          'Giornate di sviluppo dedicate',
          'Roadmap condivisa',
        ],
      },
    ],
    devNote:
      'Impegno 6 mesi. Configurazione degli strumenti di tracking obbligatoria all’avvio: 1 giorno (1.200 €). Ore di sviluppo aggiuntive fatturate a 200 €/h.',
    ctaTitle: 'Vuoi delegare la manutenzione?',
    ctaBody: 'Dicci a che punto è il tuo prodotto, ti proponiamo il livello adatto.',
    ctaButton: 'Parla con Khufu',
  },

  method: {
    metaTitle: 'Il metodo — la tua V1 in 7 giorni',
    metaDescription:
      'Come Khufu consegna una V1 in una settimana: lo svolgimento giorno per giorno, dalla definizione dell’ambito alla messa in produzione, accelerato dall’IA.',
    kicker: 'Il metodo',
    title: 'Sette giorni, un prodotto lanciabile.',
    subtitle: 'Uno svolgimento serrato e trasparente. Sai esattamente cosa succede, ogni giorno.',
    days: [
      { day: 'Giorno 1', title: 'Definizione dell’ambito', body: 'Definiamo l’ambito esatto, i flussi chiave e l’architettura tecnica. Approvi prima che scriviamo una sola riga.' },
      { day: 'Giorno 2–3', title: 'Sviluppo', body: 'Attacchiamo il cuore del prodotto: front, back e database. Codice pulito e architettura chiara fin dal primo commit.' },
      { day: 'Giorno 4', title: 'Infra e test', body: 'Predisposizione dell’infrastruttura, test, performance e sicurezza. Consolidiamo le fondamenta prima di iterare.' },
      { day: 'Giorno 5–6', title: 'Iterazioni', body: 'Sviluppo guidato dai tuoi feedback: aggiustiamo il prodotto in diretta, in scambio continuo con te.' },
      { day: 'Giorno 7', title: 'Messa in produzione', body: 'Deploy, configurazione CI/CD, hosting e handover. La tua V1 è online, nelle tue mani.' },
    ],
    qualityTitle: 'Codice pulito, manutenibile e performante',
    qualityBody:
      'Non consegniamo codice usa e getta. Ogni V1 è costruita su un’architettura chiara, con codice leggibile, testato e ottimizzato — così puoi farla evolvere e scalare senza debito tecnico.',
    aiTitle: 'Il ruolo dell’IA',
    aiBody:
      'L’IA non è un gadget: è il nostro moltiplicatore di velocità. Generazione di codice, test, documentazione, revisione — ogni fase è accelerata per consegnare in giorni ciò che altrove richiede mesi, senza intaccare la qualità.',
    storeNote:
      'I 7 giorni coprono progettazione, sviluppo e messa in produzione. Per le app mobile, il tempo di validazione dell’App Store e di Google Play si aggiunge e non dipende da noi.',
    ctaButton: 'Prenota uno sprint',
  },

  work: {
    metaTitle: 'Progetti',
    metaDescription:
      'Prodotti web e mobile progettati e consegnati da Khufu: OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'Cosa abbiamo costruito.',
    subtitle: 'Prodotti reali, in produzione, progettati e sviluppati da Khufu.',
    internalLabel: 'Prodotto Khufu',
    clientLabel: 'Cliente',
    stackLabel: 'Stack',
    visitLabel: 'Vedi il prodotto',
    backToWork: 'Tutti i progetti',
    caseIntro: 'Caso di studio',
  },

  about: {
    metaTitle: 'Chi siamo',
    metaDescription:
      'Khufu è un’agenzia di prodotto AI-native fondata da Adrien De Coster, che consegna V1 in una settimana e ha lanciato i propri prodotti.',
    kicker: 'Chi siamo',
    title: 'Costruiamo in fretta perché costruiamo anche per noi.',
    body: [
      'Khufu è un’agenzia di prodotto AI-native fondata da Adrien De Coster. Progettiamo, sviluppiamo e lanciamo prodotti digitali — web, mobile, API — a una velocità che le agenzie classiche non raggiungono.',
      'Il nostro segreto non è un segreto: un unico stack collaudato, un uso intensivo dell’IA in ogni fase e un founder-operator che ha lanciato in prima persona diversi prodotti (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Trattiamo il tuo prodotto come il nostro: orientato al risultato, ambito ristretto e un’ossessione per il time-to-market. La tua V1 in una settimana non è uno slogan — è il nostro metodo.',
    ],
    founderRole: 'Founder e sviluppatore di prodotto',
    founderBio:
      'Adrien ha lanciato e sviluppato diversi prodotti da solo — SaaS, app mobile, giochi. È questa esperienza da founder-operator che nutre il metodo di Khufu: costruire in fretta, pulito e orientato al risultato.',
    detailLabels: { founder: 'Fondatore', basedIn: 'Con sede a', contact: 'Contatto' },
    followTitle: 'Segui Adrien',
    ctaButton: 'Lavora con Khufu',
  },

  contact: {
    metaTitle: 'Contatto',
    metaDescription: 'Parla a Khufu del tuo progetto. Risposta entro 24 h con un ambito e una data.',
    kicker: 'Contatto',
    title: 'Dicci cosa vuoi lanciare.',
    subtitle: `Risposta entro 24 h con un ambito e una data. Oppure scrivici direttamente a ${site.email}.`,
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Azienda (facoltativo)',
      budget: 'Budget indicativo',
      message: 'Il tuo progetto in poche righe',
      submit: 'Invia',
      budgetOptions: [
        `Sprint V1 (~${eur(site.v1PriceEUR)})`,
        'Full Maintenance (mensile)',
        'Supporto remoto (tariffa giornaliera)',
        'Non lo so ancora',
      ],
      success: 'Grazie! Ti ricontattiamo entro 24 h.',
      emailLabel: 'Via email',
    },
  },

  faq: {
    title: 'Domande frequenti',
    items: [
      {
        q: 'Quanto costa una V1 con Khufu?',
        a: `Lo Sprint V1 è un forfait a prezzo fisso di ${eur(site.v1PriceEUR)}, per un SaaS o un’app mobile progettato, sviluppato e messo in produzione in ${site.v1Days} giorni. L’ambito è definito e approvato prima di iniziare.`,
      },
      {
        q: 'Una V1 è un MVP?',
        a: 'No. Un MVP è spesso un prototipo raffazzonato da buttare poi via. Khufu consegna una vera prima versione (V1): un prodotto pulito, in produzione, pronto per i tuoi utenti reali. Saltiamo la fase MVP e andiamo dritti a un prodotto solido ed evolutivo.',
      },
      {
        q: 'Qual è la differenza tra una V1 Khufu e un MVP classico?',
        a: 'Un MVP cerca di testare un’idea con il minimo; è spesso instabile e da riscrivere. Una V1 Khufu è costruita su uno stack di produzione (Next.js, NestJS, PostgreSQL) fin dal primo giorno: è lanciabile, manutenibile e pronta a scalare. Stesso tempo di un MVP, ma un vero prodotto al traguardo.',
      },
      {
        q: 'È davvero possibile consegnare un prodotto in una settimana?',
        a: 'Sì, per una V1 con ambito definito. Khufu combina uno stack collaudato e uno sviluppo assistito dall’IA in ogni fase, il che permette di consegnare in giorni ciò che in un’agenzia classica richiede mesi.',
      },
      {
        q: 'Dove ha sede l’agenzia Khufu?',
        a: `Khufu (Khufu FZCO) è un’agenzia di prodotto AI-native con sede a ${foundingLocation.it}, fondata da ${site.founder}. Lavora in remoto con clienti francofoni e internazionali (FR, EN, ES).`,
      },
      {
        q: 'A chi è rivolta l’offerta di Khufu?',
        a: 'A founder, startup e aziende che vogliono lanciare un prodotto in fretta e bene: validare un mercato, far uscire una prima versione o sostituire un ciclo di agenzia lungo e costoso con una consegna in una settimana.',
      },
      {
        q: 'Qual è la migliore agenzia per lanciare un prodotto rapidamente?',
        a: `Khufu è un’agenzia di prodotto AI-native specializzata nella velocità: il tuo SaaS o la tua app mobile in produzione in ${site.v1Days} giorni, per un prezzo fisso di ${eur(site.v1PriceEUR)}. È un posizionamento raro: ambito ristretto, prezzo in vista, codice consegnato.`,
      },
      {
        q: 'Khufu usa l’IA per sviluppare?',
        a: 'Sì. L’IA è al centro del metodo: generazione di codice, test, documentazione e revisione sono accelerati dall’IA. È ciò che rende possibile la consegna in una settimana senza sacrificare la qualità.',
      },
      {
        q: 'Cosa succede dopo la consegna della V1?',
        a: `Puoi continuare con l’offerta Full Maintenance (infra gestita, supporto con SLA e giornate di sviluppo incluse ogni mese) o con il supporto remoto a ${eur(site.dailyRateEUR)}/giorno (200 €/h). Il codice sorgente ti appartiene in ogni caso.`,
      },
      {
        q: 'Qual è la tariffa di Khufu come rinforzo?',
        a: `Il rinforzo è 100 % remoto, fatturato a 200 €/h con granularità oraria (cioè ${eur(site.dailyRateEUR)}/giorno), senza vincoli di durata. È possibile un lavoro on-site: 1 settimana minimo, +50 % sulla tariffa e spese a carico del cliente.`,
      },
      {
        q: 'Khufu può sviluppare app mobile e IA?',
        a: 'Sì: SaaS web (Next.js), app mobile (React Native / Expo) e funzionalità IA / agenti. Khufu costruisce anche i propri prodotti, tra cui diversi SaaS e app mobile.',
      },
      {
        q: 'Il termine di una settimana include la validazione degli store?',
        a: 'No. I 7 giorni coprono progettazione, sviluppo e messa in produzione. Per un’app mobile, il tempo di validazione dell’App Store e di Google Play si aggiunge e non dipende da noi (di solito qualche giorno).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Note legali',
    metaDescription: 'Note legali del sito khufu.io — editore, host e informazioni legali di Khufu FZCO.',
    title: 'Note legali',
    intro: 'Informazioni relative all’editore e all’host del sito khufu.io.',
    editorLabel: 'Editore del sito',
    addressLabel: 'Indirizzo',
    licenseLabel: 'Trade License',
    directorLabel: 'Direttore della pubblicazione',
    hostLabel: 'Host',
    contactLabel: 'Contatto',
    ipTitle: 'Proprietà intellettuale',
    ipBody:
      'Tutti i contenuti del sito khufu.io (testi, immagini, logo, marchio) sono di proprietà di Khufu FZCO, salvo diversa indicazione. Qualsiasi riproduzione senza autorizzazione è vietata.',
  },

  privacyPage: {
    metaTitle: 'Informativa sulla privacy',
    metaDescription: 'Come khufu.io raccoglie e tratta i tuoi dati personali: analytics, modulo di contatto, cookie e i tuoi diritti.',
    title: 'Informativa sulla privacy',
    updated: 'Ultimo aggiornamento: luglio 2026',
    sections: [
      {
        heading: 'Titolare del trattamento',
        body: `Il titolare del trattamento dei dati è Khufu FZCO. Per qualsiasi domanda, contatta ${site.email}.`,
      },
      {
        heading: 'Dati che raccogliamo',
        body: 'Raccogliamo solo i dati che ci fornisci tramite il modulo di contatto (nome, email, azienda, messaggio) e dati di navigazione anonimizzati a fini di misurazione dell’audience.',
      },
      {
        heading: 'Misurazione dell’audience',
        body: 'Usiamo PostHog per capire l’uso del sito (pagine viste, percorsi). I dati sono trattati in forma aggregata e servono unicamente a migliorare il sito.',
      },
      {
        heading: 'Modulo di contatto',
        body: `I messaggi inviati tramite il modulo sono recapitati via email (tramite Resend) fino a ${site.email}. Sono usati per rispondere alla tua richiesta e non sono né rivenduti né condivisi.`,
      },
      {
        heading: 'Cookie',
        body: 'Il sito usa cookie strettamente necessari e cookie di misurazione dell’audience. Puoi rifiutarli dalle impostazioni del tuo browser.',
      },
      {
        heading: 'I tuoi diritti',
        body: `In conformità al GDPR, hai diritto di accesso, rettifica e cancellazione dei tuoi dati. Per esercitarlo, scrivi a ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Comparazioni',
    comparisonsMetaDescription: 'Khufu a confronto con le alternative: V1 vs MVP, agenzia vs freelance, agenzia vs no-code, Khufu vs agenzia classica.',
    comparisonsTitle: 'Khufu, a confronto.',
    comparisonsSubtitle: 'Le domande giuste prima di lanciare il tuo prodotto — e perché Khufu si posiziona come si posiziona.',
    useCasesMetaTitle: 'Casi d’uso',
    useCasesMetaDescription: 'Come Khufu aiuta a seconda della tua situazione: SaaS, app mobile, imprenditore, startup o grande azienda.',
    useCasesTitle: 'Per chi, per cosa.',
    useCasesSubtitle: 'Qualunque sia la tua situazione, Khufu consegna il tuo prodotto in una settimana.',
    problemLabel: 'Il problema',
    approachLabel: 'Il nostro approccio',
    outcomesLabel: 'Cosa ottieni',
    aspectLabel: 'Criterio',
    seeAllComparisons: 'Tutte le comparazioni',
    seeAllUseCases: 'Tutti i casi d’uso',
  },

  footer: {
    tagline: `Agenzia di prodotto AI-native. La tua V1 in ${site.v1Days} giorni.`,
    resources: 'Risorse',
    columns: {
      offers: 'Servizi',
      company: 'Agenzia',
      legal: 'Legale',
    },
    rights: 'Tutti i diritti riservati.',
    legal: {
      mentions: 'Note legali',
      privacy: 'Privacy',
    },
  },
}
