import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Combien coûte une app mobile (iOS + Android) en 2026 ?",
    excerpt:
      "Prix et délais d’une app mobile iOS + Android en 2026 : natif vs React Native/Expo, ce qui coûte cher, et les fourchettes réelles.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['App mobile', 'Coûts'],
    body: [
      {
        p: "En 2026, une app mobile disponible sur iOS et Android coûte entre 15 000 € et 120 000 €, selon le périmètre, la méthode et la qualité visée. Le facteur qui pèse le plus lourd n’est ni le design ni le nombre d’écrans : c’est le choix entre développement natif (deux bases de code distinctes) et cross-platform (une seule base de code partagée). Voici les fourchettes réelles, ce qui fait vraiment grimper la facture, et pourquoi une seule base de code iOS + Android peut diviser le budget par deux.",
      },
      { h2: "Les fourchettes de prix en 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…) : 5 000 – 25 000 €. Rapide pour un prototype, mais limité dès qu’il faut des performances, des intégrations natives ou passer la validation des stores.",
          "Freelance : 350 – 700 €/jour, soit 20 000 – 70 000 € pour une première version sur les deux plateformes. Qualité variable et dépendance à une seule personne.",
          "Agence classique en natif (iOS + Android séparés) : 60 000 – 150 000 €, sur 4 à 9 mois. Deux équipes, deux bases de code, deux fois plus de bugs à corriger.",
          "Cross-platform (React Native / Expo) : une seule base de code pour les deux stores, généralement 30 à 50 % moins cher que le natif à périmètre égal.",
          "Forfait V1 à prix fixe (Khufu) : 15 000 €, livré en 7 jours, code source à vous, prêt pour les stores.",
        ],
      },
      { h2: "Natif ou cross-platform : le vrai arbitrage budgétaire" },
      {
        p: "En natif, vous développez deux fois : une app en Swift pour iOS, une app en Kotlin pour Android. Chaque écran, chaque correction, chaque fonctionnalité est écrit et testé deux fois. Le cross-platform avec React Native et Expo repose sur une seule base de code partagée à 85–95 % entre les deux plateformes. Vous divisez le temps de développement, le coût de maintenance et le nombre de bugs — tout en gardant des performances natives pour l’immense majorité des apps.",
      },
      { h2: "Ce qui coûte vraiment cher" },
      {
        ul: [
          "Le backend et les API : synchronisation, comptes utilisateurs, paiements. Souvent la moitié du budget, invisible pour l’utilisateur.",
          "Les fonctionnalités temps réel : chat, notifications push, géolocalisation, suivi en direct.",
          "Les intégrations natives : caméra, Bluetooth, paiements in-app, biométrie.",
          "La publication et la conformité : comptes développeur Apple et Google, revue App Store, RGPD.",
          "La maintenance : mises à jour iOS et Android chaque année, sinon l’app finit par casser.",
        ],
      },
      {
        quote:
          "Une app native, c’est deux fois le code, deux fois les bugs et deux fois la maintenance. Une seule base de code, c’est un seul budget.",
      },
      { h2: "Délais réalistes" },
      {
        p: "Comptez 3 à 6 mois pour une app native complète en agence, et 6 à 12 semaines pour un MVP cross-platform classique. Avec un périmètre serré, une stack éprouvée (React Native, Expo, NestJS) et un développement assisté par IA, une V1 réellement publiable se livre en 7 jours.",
      },
      { h2: "Combien prévoir, concrètement" },
      {
        p: "Pour une app mobile standard (authentification, profil, une ou deux fonctionnalités cœur, notifications, paiement), prévoyez 15 000 € pour une V1 propre en React Native/Expo, publiable sur l’App Store et Google Play. Ajoutez ensuite un budget de maintenance mensuel (à partir de 1 490 €/mois) pour suivre les mises à jour des OS et faire évoluer le produit sans accumuler de dette technique.",
      },
    ],
  },
  en: {
    slug: 'combien-coute-app-mobile-2026',
    title: "How much does a mobile app (iOS + Android) cost in 2026?",
    excerpt:
      "Cost and timelines for an iOS + Android mobile app in 2026: native vs React Native/Expo, what drives the price, and real ranges.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['Mobile app', 'Costs'],
    body: [
      {
        p: "In 2026, a mobile app available on both iOS and Android costs between €15,000 and €120,000, depending on scope, method and the level of quality you aim for. The single biggest factor is neither the design nor the number of screens: it is the choice between native development (two separate codebases) and cross-platform (one shared codebase). Here are the real ranges, what actually inflates the bill, and why one codebase for iOS + Android can cut the budget in half.",
      },
      { h2: "Price ranges in 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): €5,000 – €25,000. Fast for a prototype, but limited as soon as you need performance, native integrations or to pass store review.",
          "Freelance: €350 – €700/day, i.e. €20,000 – €70,000 for a first version on both platforms. Variable quality and reliance on a single person.",
          "Traditional agency going native (iOS + Android separately): €60,000 – €150,000, over 4 to 9 months. Two teams, two codebases, twice as many bugs to fix.",
          "Cross-platform (React Native / Expo): one codebase for both stores, typically 30 to 50% cheaper than native at equal scope.",
          "Fixed-price V1 package (Khufu): €15,000, delivered in 7 days, source code yours, store-ready.",
        ],
      },
      { h2: "Native or cross-platform: the real budget trade-off" },
      {
        p: "With native, you build twice: a Swift app for iOS and a Kotlin app for Android. Every screen, every fix, every feature is written and tested twice. Cross-platform with React Native and Expo runs on a single codebase shared 85–95% between the two platforms. You divide development time, maintenance cost and the number of bugs — while keeping native performance for the vast majority of apps.",
      },
      { h2: "What really costs money" },
      {
        ul: [
          "The backend and APIs: syncing, user accounts, payments. Often half the budget, invisible to the user.",
          "Real-time features: chat, push notifications, geolocation, live tracking.",
          "Native integrations: camera, Bluetooth, in-app payments, biometrics.",
          "Publishing and compliance: Apple and Google developer accounts, App Store review, GDPR.",
          "Maintenance: iOS and Android updates every year, or the app eventually breaks.",
        ],
      },
      {
        quote:
          "A native app is twice the code, twice the bugs and twice the maintenance. A single codebase is a single budget.",
      },
      { h2: "Realistic timelines" },
      {
        p: "Expect 3 to 6 months for a full native app at an agency, and 6 to 12 weeks for a typical cross-platform MVP. With a tight scope, a proven stack (React Native, Expo, NestJS) and AI-assisted development, a genuinely store-ready V1 ships in 7 days.",
      },
      { h2: "What to budget, concretely" },
      {
        p: "For a standard mobile app (authentication, profile, one or two core features, notifications, payment), plan on €15,000 for a clean V1 in React Native/Expo, publishable on the App Store and Google Play. Then add a monthly maintenance budget (from €1,490/month) to keep up with OS updates and grow the product without piling up technical debt.",
      },
    ],
  },
  es: {
    slug: 'combien-coute-app-mobile-2026',
    title: "¿Cuánto cuesta una app móvil (iOS + Android) en 2026?",
    excerpt:
      "Precio y plazos de una app móvil iOS + Android en 2026: nativo vs React Native/Expo, qué encarece el proyecto y rangos reales.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['App móvil', 'Costes'],
    body: [
      {
        p: "En 2026, una app móvil disponible en iOS y Android cuesta entre 15.000 € y 120.000 €, según el alcance, el método y el nivel de calidad buscado. El factor que más pesa no es el diseño ni el número de pantallas: es la elección entre desarrollo nativo (dos bases de código distintas) y cross-platform (una sola base de código compartida). Estos son los rangos reales, lo que realmente dispara la factura y por qué una única base de código iOS + Android puede reducir el presupuesto a la mitad.",
      },
      { h2: "Rangos de precio en 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): 5.000 – 25.000 €. Rápido para un prototipo, pero limitado en cuanto necesitas rendimiento, integraciones nativas o superar la revisión de las stores.",
          "Freelance: 350 – 700 €/día, es decir 20.000 – 70.000 € para una primera versión en ambas plataformas. Calidad variable y dependencia de una sola persona.",
          "Agencia clásica en nativo (iOS + Android por separado): 60.000 – 150.000 €, en 4 a 9 meses. Dos equipos, dos bases de código, el doble de errores que corregir.",
          "Cross-platform (React Native / Expo): una sola base de código para ambas stores, normalmente entre un 30 y un 50 % más barato que el nativo con el mismo alcance.",
          "Paquete V1 a precio fijo (Khufu): 15.000 €, entregado en 7 días, código fuente tuyo, listo para las stores.",
        ],
      },
      { h2: "Nativo o cross-platform: la verdadera decisión de presupuesto" },
      {
        p: "En nativo desarrollas dos veces: una app en Swift para iOS y una app en Kotlin para Android. Cada pantalla, cada corrección, cada funcionalidad se escribe y se prueba dos veces. El cross-platform con React Native y Expo se apoya en una única base de código compartida en un 85–95 % entre ambas plataformas. Divides el tiempo de desarrollo, el coste de mantenimiento y el número de errores, manteniendo un rendimiento nativo para la inmensa mayoría de las apps.",
      },
      { h2: "Lo que de verdad cuesta caro" },
      {
        ul: [
          "El backend y las API: sincronización, cuentas de usuario, pagos. A menudo la mitad del presupuesto, invisible para el usuario.",
          "Las funcionalidades en tiempo real: chat, notificaciones push, geolocalización, seguimiento en directo.",
          "Las integraciones nativas: cámara, Bluetooth, pagos in-app, biometría.",
          "La publicación y el cumplimiento: cuentas de desarrollador de Apple y Google, revisión de la App Store, RGPD.",
          "El mantenimiento: actualizaciones de iOS y Android cada año, o la app acaba rompiéndose.",
        ],
      },
      {
        quote:
          "Una app nativa es el doble de código, el doble de errores y el doble de mantenimiento. Una sola base de código es un solo presupuesto.",
      },
      { h2: "Plazos realistas" },
      {
        p: "Cuenta con 3 a 6 meses para una app nativa completa en agencia, y 6 a 12 semanas para un MVP cross-platform habitual. Con un alcance ajustado, un stack probado (React Native, Expo, NestJS) y desarrollo asistido por IA, una V1 realmente publicable se entrega en 7 días.",
      },
      { h2: "Cuánto prever, en concreto" },
      {
        p: "Para una app móvil estándar (autenticación, perfil, una o dos funciones principales, notificaciones, pago), prevé 15.000 € para una V1 limpia en React Native/Expo, publicable en la App Store y Google Play. Añade después un presupuesto de mantenimiento mensual (desde 1.490 €/mes) para seguir las actualizaciones de los sistemas operativos y hacer evolucionar el producto sin acumular deuda técnica.",
      },
    ],
  },
  de: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Was kostet eine mobile App (iOS + Android) im Jahr 2026?",
    excerpt:
      "Preise und Zeiträume für eine iOS-+-Android-App 2026: nativ vs. React Native/Expo, was teuer wird und realistische Spannen.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['Mobile App', 'Kosten'],
    body: [
      {
        p: "2026 kostet eine mobile App, die auf iOS und Android verfügbar ist, zwischen 15.000 € und 120.000 € – je nach Umfang, Methode und angestrebter Qualität. Der größte Faktor ist weder das Design noch die Zahl der Screens: Es ist die Wahl zwischen nativer Entwicklung (zwei getrennte Codebasen) und Cross-Platform (eine gemeinsame Codebasis). Hier sind die realen Spannen, was die Rechnung wirklich in die Höhe treibt, und warum eine einzige Codebasis für iOS + Android das Budget halbieren kann.",
      },
      { h2: "Preisspannen im Jahr 2026" },
      {
        ul: [
          "No-Code (FlutterFlow, Glide, Bubble…): 5.000 – 25.000 €. Schnell für einen Prototyp, aber begrenzt, sobald Performance, native Integrationen oder die Store-Prüfung nötig werden.",
          "Freelancer: 350 – 700 €/Tag, also 20.000 – 70.000 € für eine erste Version auf beiden Plattformen. Schwankende Qualität und Abhängigkeit von einer einzigen Person.",
          "Klassische Agentur nativ (iOS + Android getrennt): 60.000 – 150.000 €, über 4 bis 9 Monate. Zwei Teams, zwei Codebasen, doppelt so viele Bugs zu beheben.",
          "Cross-Platform (React Native / Expo): eine Codebasis für beide Stores, meist 30 bis 50 % günstiger als nativ bei gleichem Umfang.",
          "Festpreis-V1-Paket (Khufu): 15.000 €, in 7 Tagen geliefert, Quellcode gehört Ihnen, store-fertig.",
        ],
      },
      { h2: "Nativ oder Cross-Platform: die eigentliche Budgetentscheidung" },
      {
        p: "Nativ entwickeln Sie zweimal: eine Swift-App für iOS und eine Kotlin-App für Android. Jeder Screen, jede Korrektur, jedes Feature wird zweimal geschrieben und getestet. Cross-Platform mit React Native und Expo läuft auf einer einzigen Codebasis, die zu 85–95 % zwischen beiden Plattformen geteilt wird. Sie halbieren Entwicklungszeit, Wartungskosten und Bug-Zahl – und behalten für die allermeisten Apps native Performance.",
      },
      { h2: "Was wirklich teuer ist" },
      {
        ul: [
          "Das Backend und die APIs: Synchronisierung, Nutzerkonten, Zahlungen. Oft die Hälfte des Budgets, für den Nutzer unsichtbar.",
          "Echtzeit-Funktionen: Chat, Push-Benachrichtigungen, Geolokalisierung, Live-Tracking.",
          "Native Integrationen: Kamera, Bluetooth, In-App-Zahlungen, Biometrie.",
          "Veröffentlichung und Compliance: Apple- und Google-Entwicklerkonten, App-Store-Prüfung, DSGVO.",
          "Wartung: jährliche iOS- und Android-Updates, sonst geht die App irgendwann kaputt.",
        ],
      },
      {
        quote:
          "Eine native App bedeutet doppelten Code, doppelte Bugs und doppelte Wartung. Eine einzige Codebasis bedeutet ein einziges Budget.",
      },
      { h2: "Realistische Zeiträume" },
      {
        p: "Rechnen Sie mit 3 bis 6 Monaten für eine vollständige native App bei einer Agentur und 6 bis 12 Wochen für ein typisches Cross-Platform-MVP. Mit engem Umfang, bewährtem Stack (React Native, Expo, NestJS) und KI-gestützter Entwicklung wird eine wirklich store-fertige V1 in 7 Tagen geliefert.",
      },
      { h2: "Was konkret einplanen" },
      {
        p: "Für eine Standard-App (Authentifizierung, Profil, ein bis zwei Kernfunktionen, Benachrichtigungen, Zahlung) planen Sie 15.000 € für eine saubere V1 in React Native/Expo, veröffentlichbar im App Store und bei Google Play. Ergänzen Sie danach ein monatliches Wartungsbudget (ab 1.490 €/Monat), um mit den OS-Updates Schritt zu halten und das Produkt weiterzuentwickeln, ohne technische Schulden anzuhäufen.",
      },
    ],
  },
  it: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Quanto costa un’app mobile (iOS + Android) nel 2026?",
    excerpt:
      "Prezzi e tempi di un’app mobile iOS + Android nel 2026: nativo vs React Native/Expo, cosa costa davvero e fasce reali.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['App mobile', 'Costi'],
    body: [
      {
        p: "Nel 2026 un’app mobile disponibile su iOS e Android costa tra 15.000 € e 120.000 €, a seconda del perimetro, del metodo e della qualità richiesta. Il fattore che pesa di più non è il design né il numero di schermate: è la scelta tra sviluppo nativo (due basi di codice distinte) e cross-platform (una sola base di codice condivisa). Ecco le fasce reali, cosa fa davvero lievitare il conto e perché una sola base di codice iOS + Android può dimezzare il budget.",
      },
      { h2: "Le fasce di prezzo nel 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): 5.000 – 25.000 €. Veloce per un prototipo, ma limitato appena servono prestazioni, integrazioni native o superare la revisione degli store.",
          "Freelance: 350 – 700 €/giorno, ovvero 20.000 – 70.000 € per una prima versione su entrambe le piattaforme. Qualità variabile e dipendenza da una sola persona.",
          "Agenzia classica in nativo (iOS + Android separati): 60.000 – 150.000 €, in 4-9 mesi. Due team, due basi di codice, il doppio dei bug da correggere.",
          "Cross-platform (React Native / Expo): una sola base di codice per entrambi gli store, di solito dal 30 al 50 % più economica del nativo a parità di perimetro.",
          "Pacchetto V1 a prezzo fisso (Khufu): 15.000 €, consegnato in 7 giorni, codice sorgente tuo, pronto per gli store.",
        ],
      },
      { h2: "Nativo o cross-platform: la vera scelta di budget" },
      {
        p: "In nativo sviluppi due volte: un’app in Swift per iOS e un’app in Kotlin per Android. Ogni schermata, ogni correzione, ogni funzionalità viene scritta e testata due volte. Il cross-platform con React Native ed Expo si basa su un’unica base di codice condivisa all’85–95 % tra le due piattaforme. Dividi il tempo di sviluppo, il costo di manutenzione e il numero di bug, mantenendo prestazioni native per la stragrande maggioranza delle app.",
      },
      { h2: "Cosa costa davvero" },
      {
        ul: [
          "Il backend e le API: sincronizzazione, account utente, pagamenti. Spesso metà del budget, invisibile all’utente.",
          "Le funzionalità in tempo reale: chat, notifiche push, geolocalizzazione, tracciamento in diretta.",
          "Le integrazioni native: fotocamera, Bluetooth, pagamenti in-app, biometria.",
          "La pubblicazione e la conformità: account sviluppatore Apple e Google, revisione dell’App Store, GDPR.",
          "La manutenzione: aggiornamenti iOS e Android ogni anno, altrimenti l’app prima o poi si rompe.",
        ],
      },
      {
        quote:
          "Un’app nativa è il doppio del codice, il doppio dei bug e il doppio della manutenzione. Una sola base di codice è un solo budget.",
      },
      { h2: "Tempi realistici" },
      {
        p: "Considera 3-6 mesi per un’app nativa completa in agenzia e 6-12 settimane per un tipico MVP cross-platform. Con un perimetro serrato, uno stack collaudato (React Native, Expo, NestJS) e sviluppo assistito dall’IA, una V1 realmente pubblicabile si consegna in 7 giorni.",
      },
      { h2: "Quanto prevedere, in concreto" },
      {
        p: "Per un’app mobile standard (autenticazione, profilo, una o due funzionalità chiave, notifiche, pagamento), prevedi 15.000 € per una V1 pulita in React Native/Expo, pubblicabile su App Store e Google Play. Aggiungi poi un budget di manutenzione mensile (a partire da 1.490 €/mese) per seguire gli aggiornamenti dei sistemi operativi e far evolvere il prodotto senza accumulare debito tecnico.",
      },
    ],
  },
  pt: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Quanto custa uma app móvel (iOS + Android) em 2026?",
    excerpt:
      "Preços e prazos de uma app móvel iOS + Android em 2026: nativo vs React Native/Expo, o que sai caro e faixas reais.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['App móvel', 'Custos'],
    body: [
      {
        p: "Em 2026, uma app móvel disponível em iOS e Android custa entre 15.000 € e 120.000 €, consoante o âmbito, o método e a qualidade pretendida. O fator que mais pesa não é o design nem o número de ecrãs: é a escolha entre desenvolvimento nativo (duas bases de código distintas) e cross-platform (uma única base de código partilhada). Eis as faixas reais, o que realmente dispara a fatura e por que motivo uma só base de código iOS + Android pode reduzir o orçamento para metade.",
      },
      { h2: "As faixas de preço em 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): 5.000 – 25.000 €. Rápido para um protótipo, mas limitado assim que é preciso desempenho, integrações nativas ou passar a revisão das stores.",
          "Freelancer: 350 – 700 €/dia, ou seja 20.000 – 70.000 € para uma primeira versão nas duas plataformas. Qualidade variável e dependência de uma só pessoa.",
          "Agência clássica em nativo (iOS + Android separados): 60.000 – 150.000 €, em 4 a 9 meses. Duas equipas, duas bases de código, o dobro dos bugs a corrigir.",
          "Cross-platform (React Native / Expo): uma única base de código para as duas stores, normalmente 30 a 50 % mais barata do que o nativo com o mesmo âmbito.",
          "Pacote V1 a preço fixo (Khufu): 15.000 €, entregue em 7 dias, código-fonte seu, pronto para as stores.",
        ],
      },
      { h2: "Nativo ou cross-platform: a verdadeira decisão de orçamento" },
      {
        p: "Em nativo, desenvolve duas vezes: uma app em Swift para iOS e uma app em Kotlin para Android. Cada ecrã, cada correção, cada funcionalidade é escrita e testada duas vezes. O cross-platform com React Native e Expo assenta numa única base de código partilhada em 85–95 % entre as duas plataformas. Divide o tempo de desenvolvimento, o custo de manutenção e o número de bugs, mantendo desempenho nativo para a esmagadora maioria das apps.",
      },
      { h2: "O que custa mesmo caro" },
      {
        ul: [
          "O backend e as API: sincronização, contas de utilizador, pagamentos. Muitas vezes metade do orçamento, invisível para o utilizador.",
          "As funcionalidades em tempo real: chat, notificações push, geolocalização, seguimento ao vivo.",
          "As integrações nativas: câmara, Bluetooth, pagamentos in-app, biometria.",
          "A publicação e a conformidade: contas de programador Apple e Google, revisão da App Store, RGPD.",
          "A manutenção: atualizações de iOS e Android todos os anos, caso contrário a app acaba por partir.",
        ],
      },
      {
        quote:
          "Uma app nativa é o dobro do código, o dobro dos bugs e o dobro da manutenção. Uma só base de código é um só orçamento.",
      },
      { h2: "Prazos realistas" },
      {
        p: "Conte com 3 a 6 meses para uma app nativa completa numa agência e 6 a 12 semanas para um MVP cross-platform habitual. Com um âmbito apertado, uma stack comprovada (React Native, Expo, NestJS) e desenvolvimento assistido por IA, uma V1 realmente publicável é entregue em 7 dias.",
      },
      { h2: "Quanto prever, em concreto" },
      {
        p: "Para uma app móvel padrão (autenticação, perfil, uma ou duas funcionalidades centrais, notificações, pagamento), preveja 15.000 € para uma V1 limpa em React Native/Expo, publicável na App Store e no Google Play. Acrescente depois um orçamento de manutenção mensal (a partir de 1.490 €/mês) para acompanhar as atualizações dos sistemas operativos e fazer evoluir o produto sem acumular dívida técnica.",
      },
    ],
  },
  nl: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Wat kost een mobiele app (iOS + Android) in 2026?",
    excerpt:
      "Prijzen en doorlooptijden van een iOS-+-Android-app in 2026: native vs React Native/Expo, wat duur is en realistische ranges.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['Mobiele app', 'Kosten'],
    body: [
      {
        p: "In 2026 kost een mobiele app die op iOS en Android beschikbaar is tussen € 15.000 en € 120.000, afhankelijk van de scope, de methode en de gewenste kwaliteit. De factor die het zwaarst weegt is niet het ontwerp of het aantal schermen: het is de keuze tussen native ontwikkeling (twee aparte codebases) en cross-platform (één gedeelde codebase). Dit zijn de echte ranges, wat de rekening echt opdrijft en waarom één codebase voor iOS + Android het budget kan halveren.",
      },
      { h2: "Prijsranges in 2026" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): € 5.000 – € 25.000. Snel voor een prototype, maar beperkt zodra je prestaties, native integraties of goedkeuring in de stores nodig hebt.",
          "Freelancer: € 350 – € 700/dag, oftewel € 20.000 – € 70.000 voor een eerste versie op beide platforms. Wisselende kwaliteit en afhankelijkheid van één persoon.",
          "Klassiek bureau in native (iOS + Android apart): € 60.000 – € 150.000, over 4 tot 9 maanden. Twee teams, twee codebases, twee keer zoveel bugs om op te lossen.",
          "Cross-platform (React Native / Expo): één codebase voor beide stores, doorgaans 30 tot 50% goedkoper dan native bij gelijke scope.",
          "V1-pakket tegen vaste prijs (Khufu): € 15.000, geleverd in 7 dagen, broncode van jou, klaar voor de stores.",
        ],
      },
      { h2: "Native of cross-platform: de echte budgetafweging" },
      {
        p: "Bij native bouw je twee keer: een Swift-app voor iOS en een Kotlin-app voor Android. Elk scherm, elke fix, elke functie wordt twee keer geschreven en getest. Cross-platform met React Native en Expo draait op één codebase die voor 85–95% wordt gedeeld tussen beide platforms. Je halveert de ontwikkeltijd, de onderhoudskosten en het aantal bugs, terwijl je voor de overgrote meerderheid van apps native prestaties behoudt.",
      },
      { h2: "Wat echt geld kost" },
      {
        ul: [
          "De backend en de API's: synchronisatie, gebruikersaccounts, betalingen. Vaak de helft van het budget, onzichtbaar voor de gebruiker.",
          "Realtime functies: chat, pushmeldingen, geolocatie, live tracking.",
          "Native integraties: camera, Bluetooth, in-app-betalingen, biometrie.",
          "Publicatie en compliance: Apple- en Google-ontwikkelaarsaccounts, App Store-review, AVG.",
          "Onderhoud: elk jaar iOS- en Android-updates, anders gaat de app uiteindelijk stuk.",
        ],
      },
      {
        quote:
          "Een native app is twee keer de code, twee keer de bugs en twee keer het onderhoud. Eén codebase is één budget.",
      },
      { h2: "Realistische doorlooptijden" },
      {
        p: "Reken op 3 tot 6 maanden voor een volledige native app bij een bureau en 6 tot 12 weken voor een typische cross-platform MVP. Met een strakke scope, een beproefde stack (React Native, Expo, NestJS) en AI-ondersteunde ontwikkeling wordt een echt store-klare V1 in 7 dagen opgeleverd.",
      },
      { h2: "Wat concreet te begroten" },
      {
        p: "Voor een standaard mobiele app (authenticatie, profiel, een of twee kernfuncties, meldingen, betaling) begroot je € 15.000 voor een nette V1 in React Native/Expo, publiceerbaar in de App Store en Google Play. Voeg daarna een maandelijks onderhoudsbudget toe (vanaf € 1.490/maand) om de OS-updates bij te houden en het product te laten groeien zonder technische schuld op te stapelen.",
      },
    ],
  },
  ar: {
    slug: 'combien-coute-app-mobile-2026',
    title: "كم تكلفة تطبيق موبايل (iOS + Android) في عام 2026؟",
    excerpt:
      "أسعار ومدد تطوير تطبيق موبايل iOS + Android في 2026: تطوير أصلي مقابل React Native/Expo، وما يرفع التكلفة، ونطاقات واقعية.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['تطبيق موبايل', 'التكاليف'],
    body: [
      {
        p: "في عام 2026، تتراوح تكلفة تطبيق موبايل متاح على iOS و Android بين 15 000 € و 120 000 €، تبعاً للنطاق والمنهجية ومستوى الجودة المطلوب. العامل الأكثر تأثيراً ليس التصميم ولا عدد الشاشات: إنه الاختيار بين التطوير الأصلي (native، قاعدتا شفرة منفصلتان) والتطوير المتعدد المنصات (cross-platform، قاعدة شفرة واحدة مشتركة). إليك النطاقات الواقعية، وما يرفع الفاتورة فعلاً، ولماذا يمكن لقاعدة شفرة واحدة تخدم iOS + Android أن تخفض الميزانية إلى النصف.",
      },
      { h2: "نطاقات الأسعار في عام 2026" },
      {
        ul: [
          "No-code (FlutterFlow، Glide، Bubble…): من 5 000 إلى 25 000 €. سريع للنموذج الأولي، لكنه محدود بمجرد الحاجة إلى الأداء أو التكاملات الأصلية أو اجتياز مراجعة المتاجر.",
          "مستقل (Freelance): من 350 إلى 700 €/اليوم، أي من 20 000 إلى 70 000 € لنسخة أولى على المنصتين. جودة متفاوتة واعتماد على شخص واحد.",
          "وكالة تقليدية بالتطوير الأصلي (iOS و Android منفصلان): من 60 000 إلى 150 000 €، على مدى 4 إلى 9 أشهر. فريقان، قاعدتا شفرة، وضِعف عدد الأخطاء الواجب تصحيحها.",
          "متعدد المنصات (React Native / Expo): قاعدة شفرة واحدة للمتجرين، وعادةً أرخص بنسبة 30 إلى 50 % من الأصلي عند تساوي النطاق.",
          "باقة V1 بسعر ثابت (Khufu): 15 000 €، تُسلَّم خلال 7 أيام، الشفرة المصدرية ملكك، جاهزة للمتاجر.",
        ],
      },
      { h2: "أصلي أم متعدد المنصات: المفاضلة الحقيقية للميزانية" },
      {
        p: "في التطوير الأصلي تبني مرتين: تطبيق بلغة Swift لنظام iOS، وتطبيق بلغة Kotlin لنظام Android. كل شاشة وكل تصحيح وكل ميزة تُكتب وتُختبر مرتين. أما التطوير المتعدد المنصات باستخدام React Native و Expo فيعتمد على قاعدة شفرة واحدة مشتركة بنسبة 85–95 % بين المنصتين. أنت تقسم زمن التطوير وتكلفة الصيانة وعدد الأخطاء، مع الحفاظ على أداء أصلي للغالبية العظمى من التطبيقات.",
      },
      { h2: "ما يكلف كثيراً فعلاً" },
      {
        ul: [
          "الـ backend وواجهات الـ API: المزامنة وحسابات المستخدمين والمدفوعات. غالباً نصف الميزانية، وهو غير مرئي للمستخدم.",
          "ميزات الوقت الفعلي: الدردشة، الإشعارات الفورية، تحديد الموقع، التتبع المباشر.",
          "التكاملات الأصلية: الكاميرا، Bluetooth، المدفوعات داخل التطبيق، القياسات الحيوية.",
          "النشر والامتثال: حسابات مطوري Apple و Google، مراجعة App Store، اللائحة العامة لحماية البيانات (GDPR).",
          "الصيانة: تحديثات iOS و Android كل عام، وإلا فإن التطبيق ينهار في النهاية.",
        ],
      },
      {
        quote:
          "التطبيق الأصلي يعني ضِعف الشفرة وضِعف الأخطاء وضِعف الصيانة. قاعدة شفرة واحدة تعني ميزانية واحدة.",
      },
      { h2: "مدد واقعية" },
      {
        p: "احتسب من 3 إلى 6 أشهر لتطبيق أصلي كامل لدى وكالة، ومن 6 إلى 12 أسبوعاً لنموذج MVP متعدد المنصات نموذجي. مع نطاق محكم، ومجموعة تقنية مُختبرة (React Native، Expo، NestJS)، وتطوير مدعوم بالذكاء الاصطناعي، تُسلَّم نسخة V1 قابلة للنشر فعلاً خلال 7 أيام.",
      },
      { h2: "كم يجب أن ترصد، عملياً" },
      {
        p: "لتطبيق موبايل قياسي (مصادقة، ملف شخصي، ميزة أو ميزتان أساسيتان، إشعارات، دفع)، ارصد 15 000 € لنسخة V1 نظيفة بـ React Native/Expo، قابلة للنشر على App Store و Google Play. ثم أضف ميزانية صيانة شهرية (بدءاً من 1 490 €/الشهر) لمواكبة تحديثات أنظمة التشغيل وتطوير المنتج دون تراكم الديون التقنية.",
      },
    ],
  },
  pl: {
    slug: 'combien-coute-app-mobile-2026',
    title: "Ile kosztuje aplikacja mobilna (iOS + Android) w 2026 roku?",
    excerpt:
      "Ceny i terminy aplikacji mobilnej iOS + Android w 2026: natywnie vs React Native/Expo, co jest drogie i realne widełki.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['Aplikacja mobilna', 'Koszty'],
    body: [
      {
        p: "W 2026 roku aplikacja mobilna dostępna na iOS i Android kosztuje od 15 000 € do 120 000 €, w zależności od zakresu, metody i docelowej jakości. Czynnikiem, który waży najwięcej, nie jest ani design, ani liczba ekranów: to wybór między rozwojem natywnym (dwie odrębne bazy kodu) a cross-platform (jedna wspólna baza kodu). Oto realne widełki, co naprawdę zawyża rachunek i dlaczego jedna baza kodu na iOS + Android może zmniejszyć budżet o połowę.",
      },
      { h2: "Widełki cenowe w 2026 roku" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): 5 000 – 25 000 €. Szybko dla prototypu, ale ograniczone, gdy potrzebna jest wydajność, integracje natywne lub przejście weryfikacji w sklepach.",
          "Freelancer: 350 – 700 €/dzień, czyli 20 000 – 70 000 € za pierwszą wersję na obu platformach. Zmienna jakość i zależność od jednej osoby.",
          "Klasyczna agencja natywnie (iOS + Android osobno): 60 000 – 150 000 €, w 4 do 9 miesięcy. Dwa zespoły, dwie bazy kodu, dwa razy więcej błędów do naprawienia.",
          "Cross-platform (React Native / Expo): jedna baza kodu dla obu sklepów, zwykle o 30 do 50 % tańsza niż natywna przy tym samym zakresie.",
          "Pakiet V1 w stałej cenie (Khufu): 15 000 €, dostarczony w 7 dni, kod źródłowy należy do Ciebie, gotowy do sklepów.",
        ],
      },
      { h2: "Natywnie czy cross-platform: prawdziwy wybór budżetowy" },
      {
        p: "Natywnie budujesz dwa razy: aplikację w Swift na iOS i aplikację w Kotlin na Android. Każdy ekran, każda poprawka, każda funkcja jest pisana i testowana dwukrotnie. Cross-platform z React Native i Expo opiera się na jednej bazie kodu współdzielonej w 85–95 % między obiema platformami. Dzielisz na pół czas rozwoju, koszt utrzymania i liczbę błędów, zachowując natywną wydajność dla zdecydowanej większości aplikacji.",
      },
      { h2: "Co naprawdę kosztuje drogo" },
      {
        ul: [
          "Backend i API: synchronizacja, konta użytkowników, płatności. Często połowa budżetu, niewidoczna dla użytkownika.",
          "Funkcje czasu rzeczywistego: czat, powiadomienia push, geolokalizacja, śledzenie na żywo.",
          "Integracje natywne: aparat, Bluetooth, płatności in-app, biometria.",
          "Publikacja i zgodność: konta deweloperskie Apple i Google, weryfikacja App Store, RODO.",
          "Utrzymanie: coroczne aktualizacje iOS i Android, inaczej aplikacja w końcu przestanie działać.",
        ],
      },
      {
        quote:
          "Aplikacja natywna to dwa razy więcej kodu, dwa razy więcej błędów i dwa razy więcej utrzymania. Jedna baza kodu to jeden budżet.",
      },
      { h2: "Realne terminy" },
      {
        p: "Licz się z 3 do 6 miesięcy na pełną aplikację natywną w agencji i 6 do 12 tygodni na typowe MVP cross-platform. Przy wąskim zakresie, sprawdzonym stacku (React Native, Expo, NestJS) i rozwoju wspieranym przez AI naprawdę gotowa do publikacji wersja V1 powstaje w 7 dni.",
      },
      { h2: "Ile przewidzieć, konkretnie" },
      {
        p: "Dla standardowej aplikacji mobilnej (uwierzytelnianie, profil, jedna lub dwie kluczowe funkcje, powiadomienia, płatność) przewidź 15 000 € na czystą wersję V1 w React Native/Expo, gotową do publikacji w App Store i Google Play. Następnie dodaj miesięczny budżet na utrzymanie (od 1 490 €/miesiąc), aby nadążać za aktualizacjami systemów i rozwijać produkt bez narastania długu technicznego.",
      },
    ],
  },
  tr: {
    slug: 'combien-coute-app-mobile-2026',
    title: "2026’da bir mobil uygulama (iOS + Android) ne kadara mal olur?",
    excerpt:
      "2026’da iOS + Android mobil uygulama fiyatları ve süreleri: native vs React Native/Expo, neyin pahalı olduğu ve gerçek aralıklar.",
    date: '2026-06-24',
    readingMinutes: 6,
    tags: ['Mobil uygulama', 'Maliyetler'],
    body: [
      {
        p: "2026’da hem iOS hem Android’de sunulan bir mobil uygulama, kapsam, yöntem ve hedeflenen kaliteye göre 15.000 € ile 120.000 € arasında maliyete sahiptir. En ağır basan etken ne tasarım ne de ekran sayısıdır: native geliştirme (iki ayrı kod tabanı) ile cross-platform (tek bir ortak kod tabanı) arasındaki seçimdir. İşte gerçek aralıklar, faturayı gerçekten kabartan şeyler ve iOS + Android için tek bir kod tabanının bütçeyi neden yarıya indirebileceği.",
      },
      { h2: "2026’da fiyat aralıkları" },
      {
        ul: [
          "No-code (FlutterFlow, Glide, Bubble…): 5.000 – 25.000 €. Prototip için hızlı, ancak performans, native entegrasyonlar veya mağaza onayından geçmek gerektiğinde sınırlı kalır.",
          "Freelance: 350 – 700 €/gün, yani her iki platformdaki ilk sürüm için 20.000 – 70.000 €. Değişken kalite ve tek bir kişiye bağımlılık.",
          "Native geliştirme yapan klasik ajans (iOS + Android ayrı): 60.000 – 150.000 €, 4 ila 9 ay içinde. İki ekip, iki kod tabanı, düzeltilecek iki kat fazla hata.",
          "Cross-platform (React Native / Expo): her iki mağaza için tek kod tabanı, aynı kapsamda genellikle native’den %30 ila %50 daha ucuz.",
          "Sabit fiyatlı V1 paketi (Khufu): 15.000 €, 7 günde teslim, kaynak kodu sizin, mağazaya hazır.",
        ],
      },
      { h2: "Native mi cross-platform mı: asıl bütçe kararı" },
      {
        p: "Native’de iki kez geliştirirsiniz: iOS için Swift bir uygulama, Android için Kotlin bir uygulama. Her ekran, her düzeltme, her özellik iki kez yazılır ve test edilir. React Native ve Expo ile cross-platform, iki platform arasında %85–95 paylaşılan tek bir kod tabanına dayanır. Geliştirme süresini, bakım maliyetini ve hata sayısını yarıya indirirken uygulamaların büyük çoğunluğu için native performansı korursunuz.",
      },
      { h2: "Gerçekten pahalıya patlayan şeyler" },
      {
        ul: [
          "Backend ve API'ler: senkronizasyon, kullanıcı hesapları, ödemeler. Çoğu zaman bütçenin yarısı, kullanıcıya görünmez.",
          "Gerçek zamanlı özellikler: sohbet, push bildirimleri, konum, canlı takip.",
          "Native entegrasyonlar: kamera, Bluetooth, uygulama içi ödemeler, biyometri.",
          "Yayınlama ve uyumluluk: Apple ve Google geliştirici hesapları, App Store incelemesi, GDPR.",
          "Bakım: her yıl iOS ve Android güncellemeleri, yoksa uygulama eninde sonunda bozulur.",
        ],
      },
      {
        quote:
          "Native bir uygulama, iki kat kod, iki kat hata ve iki kat bakım demektir. Tek bir kod tabanı, tek bir bütçe demektir.",
      },
      { h2: "Gerçekçi süreler" },
      {
        p: "Ajansta tam bir native uygulama için 3 ila 6 ay, tipik bir cross-platform MVP için 6 ila 12 hafta hesaplayın. Dar bir kapsam, kanıtlanmış bir stack (React Native, Expo, NestJS) ve yapay zeka destekli geliştirme ile gerçekten mağazaya hazır bir V1, 7 günde teslim edilir.",
      },
      { h2: "Somut olarak ne kadar öngörmeli" },
      {
        p: "Standart bir mobil uygulama için (kimlik doğrulama, profil, bir ya da iki temel özellik, bildirimler, ödeme), React Native/Expo ile App Store ve Google Play’de yayınlanabilir temiz bir V1 için 15.000 € öngörün. Ardından, işletim sistemi güncellemelerine ayak uydurmak ve teknik borç biriktirmeden ürünü geliştirmek için aylık bir bakım bütçesi (aylık 1.490 €’dan başlayan) ekleyin.",
      },
    ],
  },
}
