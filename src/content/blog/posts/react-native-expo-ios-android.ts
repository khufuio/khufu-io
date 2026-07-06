import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo : iOS et Android avec une seule équipe",
    excerpt:
      "React Native + Expo : livrer iOS et Android avec une seule base de code et une seule équipe. Avantages, limites et quand préférer le natif.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo permet de livrer une app iOS et Android à partir d’une seule base de code, maintenue par une seule équipe. Concrètement, 85 à 95 % du code est partagé entre les deux plateformes : vous écrivez chaque écran une fois, vous corrigez chaque bug une fois, et vous publiez sur l’App Store et Google Play en parallèle. Résultat : un temps de développement et un coût de maintenance divisés par deux par rapport à deux apps natives distinctes, sans sacrifier l’expérience pour l’immense majorité des produits.",
      },
      { h2: "Une base de code, une équipe, deux stores" },
      {
        p: "En natif, vous entretenez deux projets en parallèle : une app en Swift pour iOS, une app en Kotlin pour Android. Deux équipes, deux backlogs, deux fois plus de bugs à reproduire et à corriger. React Native inverse la logique : un seul code TypeScript/React pilote les deux plateformes, avec des composants qui s’appuient sur les vrais éléments d’interface natifs. Une fonctionnalité développée le lundi est disponible sur iOS et Android le même jour.",
      },
      { h2: "Ce qu’Expo apporte concrètement" },
      {
        ul: [
          "Configuration zéro : pas de Xcode ni d’Android Studio à dompter pour démarrer, l’environnement est prêt en minutes.",
          "Over-the-air updates : vous poussez un correctif directement aux utilisateurs sans repasser par la validation des stores.",
          "APIs natives prêtes à l’emploi : caméra, notifications push, biométrie, géolocalisation, paiements in-app.",
          "Builds cloud (EAS) : générer les binaires iOS et Android signés sans machine macOS locale.",
          "Un écosystème mature, utilisé en production par des apps à des millions d’utilisateurs.",
        ],
      },
      { h2: "Les limites : quand ça coince" },
      {
        p: "React Native n’est pas magique. Certaines apps ont des besoins que le cross-platform gère mal, ou moins bien qu’un développement 100 % natif. Les cas à surveiller :",
      },
      {
        ul: [
          "Calcul ou rendu intensif : jeux 3D, montage vidéo, réalité augmentée temps réel.",
          "Fonctionnalités matérielles de pointe ou très spécifiques à une plateforme, sorties avant leur support côté React Native.",
          "Modules natifs personnalisés : dès qu’il faut écrire du Swift ou du Kotlin, vous perdez une partie du bénéfice « une seule équipe ».",
          "Contraintes de performance extrêmes sur des animations complexes, où chaque milliseconde compte.",
        ],
      },
      { h2: "Quand préférer le natif" },
      {
        p: "Le natif reste le bon choix quand la plateforme est le produit : une app qui vit et meurt sur ses performances graphiques, ses capteurs avancés ou une intégration système profonde. Pour un jeu AAA, un outil de création vidéo ou une app qui exploite les toutes dernières APIs d’un OS le jour de leur sortie, deux bases natives se justifient. Pour tout le reste — SaaS mobile, marketplace, app métier, réseau social, outil B2B — React Native + Expo couvre 90 % des besoins réels sans compromis visible.",
      },
      {
        quote:
          "Écrire chaque écran deux fois n’a de sens que si la plateforme est le produit. Sinon, c’est payer deux fois pour le même résultat.",
      },
      { h2: "Ce que ça change pour votre V1" },
      {
        p: "Une seule base de code, c’est aussi un seul budget et un seul calendrier. C’est pourquoi Khufu construit ses apps mobiles sur React Native, Expo et NestJS : une V1 réellement publiable sur l’App Store et Google Play, livrée en 7 jours pour un prix fixe de 15 000 €, code source à vous. Vous validez votre marché sur les deux plateformes en même temps, puis vous faites évoluer le produit avec un budget de maintenance mensuel (à partir de 1 490 €/mois) — sans jamais entretenir deux apps en double.",
      },
    ],
  },
  en: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS and Android with a single team",
    excerpt:
      "React Native + Expo: ship iOS and Android from one codebase with a single team. Advantages, limits, and when to prefer native.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo lets you ship an iOS and Android app from a single codebase, maintained by a single team. In practice, 85 to 95% of the code is shared between the two platforms: you write each screen once, fix each bug once, and publish to the App Store and Google Play in parallel. The result: development time and maintenance cost cut in half compared to two separate native apps, without sacrificing the experience for the vast majority of products.",
      },
      { h2: "One codebase, one team, two stores" },
      {
        p: "With native, you maintain two projects in parallel: a Swift app for iOS and a Kotlin app for Android. Two teams, two backlogs, twice as many bugs to reproduce and fix. React Native flips the logic: a single TypeScript/React codebase drives both platforms, with components built on real native UI elements. A feature developed on Monday is available on iOS and Android the same day.",
      },
      { h2: "What Expo brings, concretely" },
      {
        ul: [
          "Zero config: no Xcode or Android Studio to wrestle with to get started — the environment is ready in minutes.",
          "Over-the-air updates: push a fix straight to users without going back through store review.",
          "Native APIs ready to use: camera, push notifications, biometrics, geolocation, in-app payments.",
          "Cloud builds (EAS): generate signed iOS and Android binaries without a local macOS machine.",
          "A mature ecosystem, used in production by apps with millions of users.",
        ],
      },
      { h2: "The limits: where it strains" },
      {
        p: "React Native is not magic. Some apps have needs that cross-platform handles poorly, or less well than fully native development. The cases to watch:",
      },
      {
        ul: [
          "Compute- or render-heavy work: 3D games, video editing, real-time augmented reality.",
          "Cutting-edge or highly platform-specific hardware features, shipped before React Native supports them.",
          "Custom native modules: as soon as you have to write Swift or Kotlin, you lose part of the single-team benefit.",
          "Extreme performance constraints on complex animations, where every millisecond counts.",
        ],
      },
      { h2: "When to prefer native" },
      {
        p: "Native stays the right call when the platform is the product: an app that lives and dies on its graphics performance, advanced sensors, or deep system integration. For a AAA game, a video-creation tool, or an app that taps the very latest OS APIs on launch day, two native codebases are justified. For everything else — mobile SaaS, marketplace, business app, social network, B2B tool — React Native + Expo covers 90% of real needs with no visible compromise.",
      },
      {
        quote:
          "Writing each screen twice only makes sense when the platform is the product. Otherwise, you are paying twice for the same result.",
      },
      { h2: "What it changes for your V1" },
      {
        p: "A single codebase also means a single budget and a single timeline. That is why Khufu builds its mobile apps on React Native, Expo and NestJS: a genuinely publishable V1 on the App Store and Google Play, delivered in 7 days for a fixed price of €15,000, source code yours. You validate your market on both platforms at once, then grow the product with a monthly maintenance budget (from €1,490/month) — without ever maintaining two duplicate apps.",
      },
    ],
  },
  es: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS y Android con un solo equipo",
    excerpt:
      "React Native + Expo: lanzar iOS y Android desde una sola base de código con un solo equipo. Ventajas, límites y cuándo preferir nativo.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Móvil'],
    body: [
      {
        p: "React Native + Expo permite lanzar una app de iOS y Android a partir de una sola base de código, mantenida por un solo equipo. En la práctica, entre el 85 y el 95 % del código se comparte entre ambas plataformas: escribes cada pantalla una vez, corriges cada error una vez y publicas en la App Store y Google Play en paralelo. El resultado: tiempo de desarrollo y coste de mantenimiento reducidos a la mitad frente a dos apps nativas separadas, sin sacrificar la experiencia para la inmensa mayoría de los productos.",
      },
      { h2: "Una base de código, un equipo, dos stores" },
      {
        p: "En nativo mantienes dos proyectos en paralelo: una app en Swift para iOS y una app en Kotlin para Android. Dos equipos, dos backlogs, el doble de errores que reproducir y corregir. React Native invierte la lógica: una sola base de código en TypeScript/React controla ambas plataformas, con componentes que se apoyan en los elementos de interfaz nativos reales. Una funcionalidad desarrollada el lunes está disponible en iOS y Android el mismo día.",
      },
      { h2: "Lo que aporta Expo, en concreto" },
      {
        ul: [
          "Configuración cero: no hay que domar Xcode ni Android Studio para empezar; el entorno está listo en minutos.",
          "Actualizaciones over-the-air: envías una corrección directamente a los usuarios sin volver a pasar por la revisión de las stores.",
          "APIs nativas listas para usar: cámara, notificaciones push, biometría, geolocalización, pagos in-app.",
          "Builds en la nube (EAS): generar los binarios de iOS y Android firmados sin una máquina macOS local.",
          "Un ecosistema maduro, usado en producción por apps con millones de usuarios.",
        ],
      },
      { h2: "Los límites: cuándo aprieta" },
      {
        p: "React Native no es magia. Algunas apps tienen necesidades que el cross-platform gestiona mal, o peor que un desarrollo 100 % nativo. Los casos a vigilar:",
      },
      {
        ul: [
          "Cálculo o renderizado intensivo: juegos 3D, edición de vídeo, realidad aumentada en tiempo real.",
          "Funciones de hardware de última hora o muy específicas de una plataforma, lanzadas antes de que React Native las soporte.",
          "Módulos nativos personalizados: en cuanto hay que escribir Swift o Kotlin, pierdes parte del beneficio de «un solo equipo».",
          "Restricciones de rendimiento extremas en animaciones complejas, donde cada milisegundo cuenta.",
        ],
      },
      { h2: "Cuándo preferir nativo" },
      {
        p: "El nativo sigue siendo la opción correcta cuando la plataforma es el producto: una app que vive y muere por su rendimiento gráfico, sus sensores avanzados o una integración profunda con el sistema. Para un juego AAA, una herramienta de creación de vídeo o una app que explota las últimas APIs de un sistema operativo el día de su lanzamiento, dos bases nativas se justifican. Para todo lo demás —SaaS móvil, marketplace, app de negocio, red social, herramienta B2B— React Native + Expo cubre el 90 % de las necesidades reales sin compromiso visible.",
      },
      {
        quote:
          "Escribir cada pantalla dos veces solo tiene sentido si la plataforma es el producto. Si no, es pagar dos veces por el mismo resultado.",
      },
      { h2: "Lo que cambia para tu V1" },
      {
        p: "Una sola base de código es también un solo presupuesto y un solo calendario. Por eso Khufu construye sus apps móviles con React Native, Expo y NestJS: una V1 realmente publicable en la App Store y Google Play, entregada en 7 días por un precio fijo de 15.000 €, con el código fuente tuyo. Validas tu mercado en ambas plataformas a la vez y después haces evolucionar el producto con un presupuesto de mantenimiento mensual (desde 1.490 €/mes), sin mantener nunca dos apps duplicadas.",
      },
    ],
  },
  de: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS und Android mit einem einzigen Team",
    excerpt:
      "React Native + Expo: iOS und Android aus einer Codebasis mit einem Team liefern. Vorteile, Grenzen und wann nativ besser ist.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo ermöglicht es, eine iOS- und Android-App aus einer einzigen Codebasis zu liefern, gepflegt von einem einzigen Team. In der Praxis werden 85 bis 95 % des Codes zwischen beiden Plattformen geteilt: Sie schreiben jeden Screen einmal, beheben jeden Bug einmal und veröffentlichen parallel im App Store und bei Google Play. Das Ergebnis: Entwicklungszeit und Wartungskosten halbiert gegenüber zwei getrennten nativen Apps – ohne das Erlebnis für die allermeisten Produkte zu opfern.",
      },
      { h2: "Eine Codebasis, ein Team, zwei Stores" },
      {
        p: "Nativ pflegen Sie zwei Projekte parallel: eine Swift-App für iOS und eine Kotlin-App für Android. Zwei Teams, zwei Backlogs, doppelt so viele Bugs, die reproduziert und behoben werden müssen. React Native dreht die Logik um: Eine einzige TypeScript/React-Codebasis steuert beide Plattformen, mit Komponenten, die auf echten nativen UI-Elementen aufbauen. Ein am Montag entwickeltes Feature ist am selben Tag auf iOS und Android verfügbar.",
      },
      { h2: "Was Expo konkret bringt" },
      {
        ul: [
          "Null Konfiguration: kein Xcode und kein Android Studio zum Bändigen für den Start – die Umgebung ist in Minuten bereit.",
          "Over-the-Air-Updates: Sie schieben eine Korrektur direkt an die Nutzer, ohne erneut durch die Store-Prüfung zu gehen.",
          "Native APIs sofort einsatzbereit: Kamera, Push-Benachrichtigungen, Biometrie, Geolokalisierung, In-App-Zahlungen.",
          "Cloud-Builds (EAS): signierte iOS- und Android-Binärdateien ohne lokale macOS-Maschine erzeugen.",
          "Ein ausgereiftes Ökosystem, in Produktion genutzt von Apps mit Millionen Nutzern.",
        ],
      },
      { h2: "Die Grenzen: wo es hakt" },
      {
        p: "React Native ist keine Magie. Manche Apps haben Anforderungen, die Cross-Platform schlecht abbildet – oder schlechter als eine zu 100 % native Entwicklung. Die Fälle, auf die Sie achten sollten:",
      },
      {
        ul: [
          "Rechen- oder renderintensive Arbeit: 3D-Spiele, Videobearbeitung, Augmented Reality in Echtzeit.",
          "Brandneue oder stark plattformspezifische Hardware-Funktionen, die erscheinen, bevor React Native sie unterstützt.",
          "Eigene native Module: Sobald Sie Swift oder Kotlin schreiben müssen, verlieren Sie einen Teil des Ein-Team-Vorteils.",
          "Extreme Performance-Anforderungen bei komplexen Animationen, wo jede Millisekunde zählt.",
        ],
      },
      { h2: "Wann nativ besser ist" },
      {
        p: "Nativ bleibt die richtige Wahl, wenn die Plattform das Produkt ist: eine App, die von ihrer Grafikleistung, ihren fortgeschrittenen Sensoren oder einer tiefen Systemintegration lebt und stirbt. Für ein AAA-Spiel, ein Videoschnitt-Tool oder eine App, die am Erscheinungstag die allerneusten OS-APIs nutzt, sind zwei native Codebasen gerechtfertigt. Für alles andere – mobiles SaaS, Marktplatz, Business-App, soziales Netzwerk, B2B-Tool – deckt React Native + Expo 90 % der realen Anforderungen ohne sichtbaren Kompromiss ab.",
      },
      {
        quote:
          "Jeden Screen zweimal zu schreiben ergibt nur Sinn, wenn die Plattform das Produkt ist. Sonst zahlen Sie zweimal für dasselbe Ergebnis.",
      },
      { h2: "Was es für Ihre V1 ändert" },
      {
        p: "Eine einzige Codebasis bedeutet auch ein einziges Budget und einen einzigen Zeitplan. Deshalb baut Khufu seine mobilen Apps auf React Native, Expo und NestJS: eine wirklich veröffentlichbare V1 im App Store und bei Google Play, in 7 Tagen geliefert zum Festpreis von 15.000 €, Quellcode gehört Ihnen. Sie validieren Ihren Markt auf beiden Plattformen gleichzeitig und entwickeln das Produkt dann mit einem monatlichen Wartungsbudget weiter (ab 1.490 €/Monat) – ohne jemals zwei doppelte Apps zu pflegen.",
      },
    ],
  },
  it: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS e Android con un solo team",
    excerpt:
      "React Native + Expo: rilasciare iOS e Android da una sola base di codice con un solo team. Vantaggi, limiti e quando preferire il nativo.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo permette di rilasciare un’app iOS e Android a partire da una sola base di codice, gestita da un solo team. In pratica, dall’85 al 95 % del codice è condiviso tra le due piattaforme: scrivi ogni schermata una volta, correggi ogni bug una volta e pubblichi su App Store e Google Play in parallelo. Il risultato: tempo di sviluppo e costo di manutenzione dimezzati rispetto a due app native separate, senza sacrificare l’esperienza per la stragrande maggioranza dei prodotti.",
      },
      { h2: "Una base di codice, un team, due store" },
      {
        p: "In nativo mantieni due progetti in parallelo: un’app in Swift per iOS e un’app in Kotlin per Android. Due team, due backlog, il doppio dei bug da riprodurre e correggere. React Native ribalta la logica: un’unica base di codice TypeScript/React pilota entrambe le piattaforme, con componenti costruiti sui veri elementi di interfaccia nativi. Una funzionalità sviluppata il lunedì è disponibile su iOS e Android lo stesso giorno.",
      },
      { h2: "Cosa porta Expo, in concreto" },
      {
        ul: [
          "Configurazione zero: niente Xcode né Android Studio da domare per iniziare, l’ambiente è pronto in pochi minuti.",
          "Aggiornamenti over-the-air: invii una correzione direttamente agli utenti senza ripassare dalla revisione degli store.",
          "API native pronte all’uso: fotocamera, notifiche push, biometria, geolocalizzazione, pagamenti in-app.",
          "Build in cloud (EAS): generare i binari iOS e Android firmati senza una macchina macOS locale.",
          "Un ecosistema maturo, usato in produzione da app con milioni di utenti.",
        ],
      },
      { h2: "I limiti: quando si inceppa" },
      {
        p: "React Native non è magia. Alcune app hanno esigenze che il cross-platform gestisce male, o peggio di uno sviluppo 100 % nativo. I casi da tenere d’occhio:",
      },
      {
        ul: [
          "Calcolo o rendering intensivo: giochi 3D, montaggio video, realtà aumentata in tempo reale.",
          "Funzioni hardware di ultimissima generazione o molto specifiche di una piattaforma, uscite prima del loro supporto lato React Native.",
          "Moduli nativi personalizzati: appena devi scrivere Swift o Kotlin, perdi parte del vantaggio «un solo team».",
          "Vincoli di prestazioni estremi su animazioni complesse, dove ogni millisecondo conta.",
        ],
      },
      { h2: "Quando preferire il nativo" },
      {
        p: "Il nativo resta la scelta giusta quando la piattaforma è il prodotto: un’app che vive e muore sulle sue prestazioni grafiche, sui suoi sensori avanzati o su un’integrazione di sistema profonda. Per un gioco AAA, uno strumento di creazione video o un’app che sfrutta le ultimissime API di un OS il giorno del lancio, due basi native sono giustificate. Per tutto il resto — SaaS mobile, marketplace, app gestionale, social network, strumento B2B — React Native + Expo copre il 90 % delle esigenze reali senza compromessi visibili.",
      },
      {
        quote:
          "Scrivere ogni schermata due volte ha senso solo se la piattaforma è il prodotto. Altrimenti significa pagare due volte lo stesso risultato.",
      },
      { h2: "Cosa cambia per la tua V1" },
      {
        p: "Una sola base di codice è anche un solo budget e un solo calendario. Per questo Khufu costruisce le sue app mobili su React Native, Expo e NestJS: una V1 realmente pubblicabile su App Store e Google Play, consegnata in 7 giorni a un prezzo fisso di 15.000 €, con il codice sorgente tuo. Convalidi il tuo mercato su entrambe le piattaforme contemporaneamente, poi fai evolvere il prodotto con un budget di manutenzione mensile (a partire da 1.490 €/mese), senza mai mantenere due app duplicate.",
      },
    ],
  },
  pt: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS e Android com uma só equipa",
    excerpt:
      "React Native + Expo: lançar iOS e Android a partir de uma só base de código com uma só equipa. Vantagens, limites e quando preferir nativo.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo permite lançar uma app iOS e Android a partir de uma só base de código, mantida por uma só equipa. Na prática, 85 a 95 % do código é partilhado entre as duas plataformas: escreve cada ecrã uma vez, corrige cada bug uma vez e publica na App Store e no Google Play em paralelo. O resultado: tempo de desenvolvimento e custo de manutenção reduzidos para metade face a duas apps nativas separadas, sem sacrificar a experiência para a esmagadora maioria dos produtos.",
      },
      { h2: "Uma base de código, uma equipa, duas stores" },
      {
        p: "Em nativo, mantém dois projetos em paralelo: uma app em Swift para iOS e uma app em Kotlin para Android. Duas equipas, dois backlogs, o dobro dos bugs a reproduzir e corrigir. O React Native inverte a lógica: uma única base de código TypeScript/React controla as duas plataformas, com componentes assentes nos verdadeiros elementos de interface nativos. Uma funcionalidade desenvolvida na segunda-feira está disponível em iOS e Android no mesmo dia.",
      },
      { h2: "O que o Expo traz, em concreto" },
      {
        ul: [
          "Configuração zero: não há Xcode nem Android Studio para domar ao arrancar, o ambiente está pronto em minutos.",
          "Atualizações over-the-air: envia uma correção diretamente aos utilizadores sem voltar a passar pela revisão das stores.",
          "APIs nativas prontas a usar: câmara, notificações push, biometria, geolocalização, pagamentos in-app.",
          "Builds na cloud (EAS): gerar os binários iOS e Android assinados sem uma máquina macOS local.",
          "Um ecossistema maduro, usado em produção por apps com milhões de utilizadores.",
        ],
      },
      { h2: "Os limites: quando aperta" },
      {
        p: "O React Native não é magia. Algumas apps têm necessidades que o cross-platform gere mal, ou pior do que um desenvolvimento 100 % nativo. Os casos a vigiar:",
      },
      {
        ul: [
          "Cálculo ou renderização intensivos: jogos 3D, edição de vídeo, realidade aumentada em tempo real.",
          "Funções de hardware de última hora ou muito específicas de uma plataforma, lançadas antes do seu suporte no React Native.",
          "Módulos nativos personalizados: assim que é preciso escrever Swift ou Kotlin, perde parte do benefício de «uma só equipa».",
          "Restrições de desempenho extremas em animações complexas, onde cada milissegundo conta.",
        ],
      },
      { h2: "Quando preferir nativo" },
      {
        p: "O nativo continua a ser a escolha certa quando a plataforma é o produto: uma app que vive e morre pelo seu desempenho gráfico, pelos seus sensores avançados ou por uma integração profunda com o sistema. Para um jogo AAA, uma ferramenta de criação de vídeo ou uma app que explora as mais recentes APIs de um SO no dia do lançamento, duas bases nativas justificam-se. Para tudo o resto — SaaS móvel, marketplace, app de negócio, rede social, ferramenta B2B — React Native + Expo cobre 90 % das necessidades reais sem compromisso visível.",
      },
      {
        quote:
          "Escrever cada ecrã duas vezes só faz sentido se a plataforma for o produto. Caso contrário, é pagar duas vezes pelo mesmo resultado.",
      },
      { h2: "O que muda para a sua V1" },
      {
        p: "Uma só base de código é também um só orçamento e um só calendário. É por isso que a Khufu constrói as suas apps móveis em React Native, Expo e NestJS: uma V1 realmente publicável na App Store e no Google Play, entregue em 7 dias por um preço fixo de 15.000 €, com o código-fonte seu. Valida o seu mercado nas duas plataformas ao mesmo tempo e depois faz evoluir o produto com um orçamento de manutenção mensal (a partir de 1.490 €/mês), sem nunca manter duas apps duplicadas.",
      },
    ],
  },
  nl: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS en Android met één team",
    excerpt:
      "React Native + Expo: iOS en Android leveren vanuit één codebase met één team. Voordelen, grenzen en wanneer native beter is.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobiel'],
    body: [
      {
        p: "React Native + Expo maakt het mogelijk om een iOS- en Android-app te leveren vanuit één codebase, onderhouden door één team. In de praktijk wordt 85 tot 95% van de code gedeeld tussen beide platforms: je schrijft elk scherm één keer, lost elke bug één keer op en publiceert parallel in de App Store en Google Play. Het resultaat: ontwikkeltijd en onderhoudskosten gehalveerd ten opzichte van twee losse native apps, zonder de ervaring op te offeren voor de overgrote meerderheid van de producten.",
      },
      { h2: "Eén codebase, één team, twee stores" },
      {
        p: "Bij native onderhoud je twee projecten parallel: een Swift-app voor iOS en een Kotlin-app voor Android. Twee teams, twee backlogs, twee keer zoveel bugs om te reproduceren en op te lossen. React Native draait de logica om: één TypeScript/React-codebase stuurt beide platforms aan, met componenten die bouwen op echte native UI-elementen. Een functie die op maandag wordt ontwikkeld, is diezelfde dag beschikbaar op iOS en Android.",
      },
      { h2: "Wat Expo concreet brengt" },
      {
        ul: [
          "Nul configuratie: geen Xcode of Android Studio om te temmen om te starten, de omgeving is in minuten klaar.",
          "Over-the-air-updates: je pusht een fix rechtstreeks naar gebruikers zonder opnieuw door de store-review te gaan.",
          "Native API's klaar voor gebruik: camera, pushmeldingen, biometrie, geolocatie, in-app-betalingen.",
          "Cloud-builds (EAS): gesigneerde iOS- en Android-binaries genereren zonder lokale macOS-machine.",
          "Een volwassen ecosysteem, in productie gebruikt door apps met miljoenen gebruikers.",
        ],
      },
      { h2: "De grenzen: waar het knelt" },
      {
        p: "React Native is geen magie. Sommige apps hebben behoeften die cross-platform slecht afhandelt, of minder goed dan volledig native ontwikkeling. De gevallen om op te letten:",
      },
      {
        ul: [
          "Reken- of render-intensief werk: 3D-games, videobewerking, augmented reality in realtime.",
          "Gloednieuwe of sterk platformspecifieke hardwarefuncties, uitgebracht voordat React Native ze ondersteunt.",
          "Eigen native modules: zodra je Swift of Kotlin moet schrijven, verlies je een deel van het één-team-voordeel.",
          "Extreme prestatie-eisen bij complexe animaties, waar elke milliseconde telt.",
        ],
      },
      { h2: "Wanneer native beter is" },
      {
        p: "Native blijft de juiste keuze wanneer het platform het product is: een app die leeft en sterft op zijn grafische prestaties, geavanceerde sensoren of een diepe systeemintegratie. Voor een AAA-game, een videocreatietool of een app die op de lanceerdag de allernieuwste OS-API's gebruikt, zijn twee native codebases gerechtvaardigd. Voor al het andere — mobiele SaaS, marktplaats, zakelijke app, sociaal netwerk, B2B-tool — dekt React Native + Expo 90% van de echte behoeften zonder zichtbaar compromis.",
      },
      {
        quote:
          "Elk scherm twee keer schrijven heeft alleen zin als het platform het product is. Anders betaal je twee keer voor hetzelfde resultaat.",
      },
      { h2: "Wat het verandert voor je V1" },
      {
        p: "Eén codebase betekent ook één budget en één planning. Daarom bouwt Khufu zijn mobiele apps op React Native, Expo en NestJS: een echt publiceerbare V1 in de App Store en Google Play, geleverd in 7 dagen voor een vaste prijs van € 15.000, broncode van jou. Je valideert je markt op beide platforms tegelijk en laat het product daarna groeien met een maandelijks onderhoudsbudget (vanaf € 1.490/maand) — zonder ooit twee dubbele apps te onderhouden.",
      },
    ],
  },
  ar: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: نظاما iOS و Android بفريق واحد",
    excerpt:
      "React Native + Expo: إطلاق iOS و Android من قاعدة شفرة واحدة بفريق واحد. المزايا والحدود ومتى يُفضَّل التطوير الأصلي.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'موبايل'],
    body: [
      {
        p: "يتيح لك React Native + Expo إطلاق تطبيق لنظامي iOS و Android انطلاقاً من قاعدة شفرة واحدة، يديرها فريق واحد. عملياً، تُشارَك نسبة 85 إلى 95 % من الشفرة بين المنصتين: تكتب كل شاشة مرة واحدة، وتصحّح كل خطأ مرة واحدة، وتنشر على App Store و Google Play بالتوازي. والنتيجة: خفض زمن التطوير وتكلفة الصيانة إلى النصف مقارنةً بتطبيقين أصليين منفصلين، دون التضحية بالتجربة بالنسبة للغالبية العظمى من المنتجات.",
      },
      { h2: "قاعدة شفرة واحدة، فريق واحد، متجران" },
      {
        p: "في التطوير الأصلي تدير مشروعين بالتوازي: تطبيق بلغة Swift لنظام iOS، وتطبيق بلغة Kotlin لنظام Android. فريقان، قائمتا مهام، وضِعف الأخطاء الواجب إعادة إنتاجها وتصحيحها. أما React Native فيقلب المنطق: قاعدة شفرة واحدة بلغة TypeScript/React تقود المنصتين، بمكوّنات تعتمد على عناصر الواجهة الأصلية الحقيقية. ميزة تُطوَّر يوم الإثنين تصبح متاحة على iOS و Android في اليوم نفسه.",
      },
      { h2: "ما يقدّمه Expo عملياً" },
      {
        ul: [
          "إعداد صفري: لا حاجة لترويض Xcode أو Android Studio للبدء، فالبيئة جاهزة خلال دقائق.",
          "تحديثات over-the-air: تدفع تصحيحاً مباشرةً إلى المستخدمين دون المرور مجدداً بمراجعة المتاجر.",
          "واجهات APIs أصلية جاهزة للاستخدام: الكاميرا، الإشعارات الفورية، القياسات الحيوية، تحديد الموقع، المدفوعات داخل التطبيق.",
          "بناء سحابي (EAS): توليد ملفات iOS و Android الثنائية الموقَّعة دون جهاز macOS محلي.",
          "منظومة ناضجة، مستخدَمة في الإنتاج من تطبيقات لديها ملايين المستخدمين.",
        ],
      },
      { h2: "الحدود: متى يتعثّر" },
      {
        p: "React Native ليس سحراً. بعض التطبيقات لديها احتياجات يتعامل معها التطوير المتعدد المنصات بشكل سيّئ، أو أقل جودة من تطوير أصلي 100 %. الحالات التي يجب الانتباه إليها:",
      },
      {
        ul: [
          "الحوسبة أو التصيير المكثّف: الألعاب ثلاثية الأبعاد، تحرير الفيديو، الواقع المعزَّز في الوقت الفعلي.",
          "ميزات عتاد حديثة جداً أو شديدة الخصوصية بمنصة معينة، تصدر قبل دعمها في React Native.",
          "وحدات أصلية مخصّصة: بمجرد أن يتعيّن عليك كتابة Swift أو Kotlin، تفقد جزءاً من ميزة «الفريق الواحد».",
          "قيود أداء قصوى على الرسوم المتحركة المعقّدة، حيث تهمّ كل جزء من الألف من الثانية.",
        ],
      },
      { h2: "متى يُفضَّل التطوير الأصلي" },
      {
        p: "يبقى التطوير الأصلي الخيار الصحيح عندما تكون المنصة هي المنتج: تطبيق يحيا ويموت بأدائه الرسومي، أو حسّاساته المتقدمة، أو تكامله العميق مع النظام. بالنسبة للعبة AAA، أو أداة إنشاء فيديو، أو تطبيق يستغل أحدث واجهات APIs لنظام تشغيل يوم إطلاقها، تكون قاعدتا شفرة أصليتان مبرَّرتين. أما لكل ما عدا ذلك — SaaS للموبايل، سوق إلكتروني، تطبيق أعمال، شبكة اجتماعية، أداة B2B — فإن React Native + Expo يغطّي 90 % من الاحتياجات الحقيقية دون تنازل ملحوظ.",
      },
      {
        quote:
          "كتابة كل شاشة مرتين لا معنى لها إلا إذا كانت المنصة هي المنتج. وإلا فأنت تدفع مرتين مقابل النتيجة نفسها.",
      },
      { h2: "ما الذي يغيّره هذا لنسخة V1 خاصتك" },
      {
        p: "قاعدة شفرة واحدة تعني أيضاً ميزانية واحدة وجدولاً زمنياً واحداً. لهذا تبني Khufu تطبيقاتها للموبايل على React Native و Expo و NestJS: نسخة V1 قابلة للنشر فعلاً على App Store و Google Play، تُسلَّم خلال 7 أيام بسعر ثابت قدره 15 000 €، والشفرة المصدرية ملكك. تتحقق من سوقك على المنصتين في آنٍ واحد، ثم تطوّر المنتج بميزانية صيانة شهرية (بدءاً من 1 490 €/الشهر) — دون أن تصون أبداً تطبيقين مكرَّرين.",
      },
    ],
  },
  pl: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: iOS i Android z jednym zespołem",
    excerpt:
      "React Native + Expo: dostarczanie iOS i Android z jednej bazy kodu jednym zespołem. Zalety, ograniczenia i kiedy wybrać natywne.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobile'],
    body: [
      {
        p: "React Native + Expo pozwala dostarczyć aplikację na iOS i Android z jednej bazy kodu, utrzymywanej przez jeden zespół. W praktyce od 85 do 95 % kodu jest współdzielone między obiema platformami: każdy ekran piszesz raz, każdy błąd poprawiasz raz, a publikujesz w App Store i Google Play równolegle. Efekt: czas rozwoju i koszt utrzymania zmniejszone o połowę w porównaniu z dwiema osobnymi aplikacjami natywnymi, bez poświęcania jakości doświadczenia w zdecydowanej większości produktów.",
      },
      { h2: "Jedna baza kodu, jeden zespół, dwa sklepy" },
      {
        p: "Natywnie utrzymujesz dwa projekty równolegle: aplikację w Swift na iOS i aplikację w Kotlin na Android. Dwa zespoły, dwa backlogi, dwa razy więcej błędów do odtworzenia i naprawienia. React Native odwraca tę logikę: jedna baza kodu w TypeScript/React steruje obiema platformami, a komponenty opierają się na prawdziwych natywnych elementach interfejsu. Funkcja opracowana w poniedziałek jest dostępna na iOS i Android tego samego dnia.",
      },
      { h2: "Co konkretnie daje Expo" },
      {
        ul: [
          "Zero konfiguracji: nie trzeba oswajać Xcode ani Android Studio, by zacząć — środowisko jest gotowe w kilka minut.",
          "Aktualizacje over-the-air: wysyłasz poprawkę bezpośrednio do użytkowników bez ponownej weryfikacji w sklepach.",
          "Natywne API gotowe do użycia: aparat, powiadomienia push, biometria, geolokalizacja, płatności in-app.",
          "Buildy w chmurze (EAS): generowanie podpisanych binariów iOS i Android bez lokalnej maszyny macOS.",
          "Dojrzały ekosystem, używany produkcyjnie przez aplikacje z milionami użytkowników.",
        ],
      },
      { h2: "Ograniczenia: gdzie się zacina" },
      {
        p: "React Native to nie magia. Niektóre aplikacje mają potrzeby, które cross-platform obsługuje słabo, lub gorzej niż w pełni natywny rozwój. Przypadki, na które warto uważać:",
      },
      {
        ul: [
          "Intensywne obliczenia lub renderowanie: gry 3D, montaż wideo, rozszerzona rzeczywistość w czasie rzeczywistym.",
          "Najnowsze lub silnie zależne od platformy funkcje sprzętowe, wydane zanim React Native je wesprze.",
          "Własne moduły natywne: gdy tylko trzeba napisać Swift lub Kotlin, tracisz część korzyści „jednego zespołu”.",
          "Ekstremalne wymagania wydajnościowe przy złożonych animacjach, gdzie liczy się każda milisekunda.",
        ],
      },
      { h2: "Kiedy wybrać natywne" },
      {
        p: "Natywne pozostaje właściwym wyborem, gdy platforma jest produktem: aplikacja, która żyje i umiera dzięki swojej wydajności graficznej, zaawansowanym czujnikom lub głębokiej integracji z systemem. Dla gry AAA, narzędzia do tworzenia wideo lub aplikacji korzystającej z najnowszych API systemu w dniu premiery, dwie bazy natywne są uzasadnione. W przypadku wszystkiego innego — mobilny SaaS, marketplace, aplikacja biznesowa, sieć społecznościowa, narzędzie B2B — React Native + Expo pokrywa 90 % realnych potrzeb bez widocznego kompromisu.",
      },
      {
        quote:
          "Pisanie każdego ekranu dwa razy ma sens tylko wtedy, gdy platforma jest produktem. W przeciwnym razie płacisz dwa razy za ten sam rezultat.",
      },
      { h2: "Co to zmienia dla twojej V1" },
      {
        p: "Jedna baza kodu to także jeden budżet i jeden harmonogram. Dlatego Khufu buduje swoje aplikacje mobilne na React Native, Expo i NestJS: naprawdę gotowa do publikacji V1 w App Store i Google Play, dostarczona w 7 dni za stałą cenę 15 000 €, z kodem źródłowym dla ciebie. Walidujesz swój rynek na obu platformach jednocześnie, a następnie rozwijasz produkt z miesięcznym budżetem na utrzymanie (od 1 490 €/miesiąc) — nigdy nie utrzymując dwóch zduplikowanych aplikacji.",
      },
    ],
  },
  tr: {
    slug: 'react-native-expo-ios-android',
    title: "React Native + Expo: tek ekiple iOS ve Android",
    excerpt:
      "React Native + Expo: iOS ve Android’i tek kod tabanından tek ekiple yayınlama. Avantajlar, sınırlar ve ne zaman native tercih edilir.",
    date: '2026-01-07',
    readingMinutes: 5,
    tags: ['React Native', 'Mobil'],
    body: [
      {
        p: "React Native + Expo, bir iOS ve Android uygulamasını tek bir kod tabanından, tek bir ekiple yayınlamanızı sağlar. Pratikte kodun %85 ila %95’i iki platform arasında paylaşılır: her ekranı bir kez yazar, her hatayı bir kez düzeltir ve App Store ile Google Play’e paralel olarak yayınlarsınız. Sonuç: iki ayrı native uygulamaya kıyasla geliştirme süresi ve bakım maliyeti yarıya iner; üstelik ürünlerin büyük çoğunluğu için deneyimden ödün vermeden.",
      },
      { h2: "Tek kod tabanı, tek ekip, iki mağaza" },
      {
        p: "Native tarafında iki projeyi paralel yürütürsünüz: iOS için Swift bir uygulama, Android için Kotlin bir uygulama. İki ekip, iki backlog, yeniden üretilip düzeltilecek iki kat fazla hata. React Native bu mantığı tersine çevirir: tek bir TypeScript/React kod tabanı, gerçek native arayüz öğelerine dayanan bileşenlerle iki platformu birden yönetir. Pazartesi geliştirilen bir özellik, aynı gün iOS ve Android’de kullanılabilir olur.",
      },
      { h2: "Expo somut olarak ne getirir" },
      {
        ul: [
          "Sıfır yapılandırma: başlamak için Xcode veya Android Studio ile boğuşmaya gerek yok, ortam dakikalar içinde hazır.",
          "Over-the-air güncellemeler: bir düzeltmeyi mağaza incelemesinden tekrar geçmeden doğrudan kullanıcılara gönderirsiniz.",
          "Kullanıma hazır native API’ler: kamera, push bildirimleri, biyometri, konum, uygulama içi ödemeler.",
          "Bulut derlemeleri (EAS): yerel bir macOS makinesi olmadan imzalı iOS ve Android binary’lerini üretme.",
          "Milyonlarca kullanıcılı uygulamalar tarafından üretimde kullanılan olgun bir ekosistem.",
        ],
      },
      { h2: "Sınırlar: nerede zorlanır" },
      {
        p: "React Native sihir değildir. Bazı uygulamaların, cross-platform yaklaşımının kötü ya da %100 native geliştirmeden daha zayıf yönettiği ihtiyaçları vardır. Dikkat edilecek durumlar:",
      },
      {
        ul: [
          "Yoğun hesaplama veya render: 3B oyunlar, video düzenleme, gerçek zamanlı artırılmış gerçeklik.",
          "React Native destek vermeden önce çıkan, çok yeni ya da platforma çok özgü donanım özellikleri.",
          "Özel native modüller: Swift veya Kotlin yazmanız gerektiği anda, «tek ekip» avantajının bir kısmını kaybedersiniz.",
          "Her milisaniyenin önemli olduğu karmaşık animasyonlarda aşırı performans kısıtları.",
        ],
      },
      { h2: "Ne zaman native tercih edilir" },
      {
        p: "Platformun kendisi ürün olduğunda native doğru seçim olmaya devam eder: grafik performansıyla, gelişmiş sensörleriyle veya derin sistem entegrasyonuyla var olan ya da yok olan bir uygulama. Bir AAA oyun, bir video oluşturma aracı ya da bir işletim sisteminin en yeni API’lerini çıkış günü kullanan bir uygulama için iki native kod tabanı gerekçelidir. Geri kalan her şey için — mobil SaaS, pazar yeri, iş uygulaması, sosyal ağ, B2B aracı — React Native + Expo, görünür bir ödün vermeden gerçek ihtiyaçların %90’ını karşılar.",
      },
      {
        quote:
          "Her ekranı iki kez yazmak yalnızca platform ürünse anlamlıdır. Aksi halde aynı sonuç için iki kez ödeme yaparsınız.",
      },
      { h2: "V1 için ne değiştirir" },
      {
        p: "Tek kod tabanı aynı zamanda tek bütçe ve tek takvim demektir. Bu yüzden Khufu mobil uygulamalarını React Native, Expo ve NestJS üzerine kurar: App Store ve Google Play’de gerçekten yayınlanabilir bir V1, 7 günde 15.000 € sabit fiyatla teslim edilir, kaynak kodu sizindir. Pazarınızı iki platformda aynı anda doğrular, ardından ürünü aylık bir bakım bütçesiyle (aylık 1.490 €’dan başlayan) geliştirirsiniz — hiçbir zaman iki kopya uygulama sürdürmeden.",
      },
    ],
  },
}
