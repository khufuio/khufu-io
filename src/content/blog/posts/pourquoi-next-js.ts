import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'pourquoi-next-js',
    title: "Pourquoi on choisit Next.js pour (presque) tous nos projets",
    excerpt:
      "Les raisons concrètes derrière notre choix de Next.js : App Router, SSR/SSG, DX, écosystème, déploiement — et les cas où on ne le prend pas.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js est le framework qu'on utilise par défaut pour livrer une V1 web en production en 7 jours. La raison est simple : il fait tenir dans un seul outil le rendu serveur, le rendu statique, l'API et le front, avec un déploiement quasi instantané. Résultat : moins de pièces à assembler, moins de décisions à prendre, plus de temps passé sur le produit lui-même. Voici pourquoi, concrètement.",
      },
      { h2: "Un seul framework du front au back" },
      {
        p: "Avec l'App Router, un projet Next.js couvre l'interface, les Server Components, les routes API et l'authentification dans une seule base de code. On n'a pas à câbler trois briques séparées ni à maintenir deux dépôts. Pour un produit à livrer vite, cette unité fait gagner des jours entiers : une seule stack à configurer, tester et déployer.",
      },
      {
        ul: [
          "Server Components : moins de JavaScript envoyé au navigateur, pages plus rapides par défaut.",
          "Routes API intégrées : un backend léger sans serveur séparé à gérer.",
          "React Server Actions : les mutations de données sans écrire d'API REST à la main.",
        ],
      },
      { h2: "SSR et SSG : la performance sans arbitrage" },
      {
        p: "Next.js laisse choisir, page par page, entre rendu serveur (SSR), génération statique (SSG) et rendu incrémental. Une landing marketing part en statique pour un chargement quasi instantané et un SEO solide ; un tableau de bord authentifié part en rendu serveur pour des données fraîches. On ne sacrifie ni la vitesse, ni le référencement, ni la fraîcheur des données — on prend le bon mode au bon endroit.",
      },
      { h2: "La DX qui fait gagner des jours" },
      {
        p: "L'expérience développeur est le vrai accélérateur. Hot reload immédiat, TypeScript de bout en bout, conventions de routing par fichiers, gestion native des images et des polices : chaque détail supprime une décision ou une ligne de configuration. Combinée au développement assisté par IA, cette DX est ce qui rend une V1 en une semaine réaliste plutôt que tendue.",
      },
      {
        quote:
          "Un framework qui unifie front, back et déploiement, c'est trois jours gagnés qu'on remet dans le produit, pas dans la plomberie.",
      },
      { h2: "Un écosystème et un déploiement matures" },
      {
        p: "Next.js n'est pas un pari : c'est React, maintenu par Vercel, avec des dizaines de milliers de projets en production. Le déploiement sur Vercel se fait en une commande, avec preview par branche, CDN mondial et scaling automatique. Pour une API plus lourde, on branche un NestJS + Prisma + PostgreSQL sur Cloud Run — Next.js reste le front et la porte d'entrée.",
      },
      { h2: "Quand on ne choisit pas Next.js" },
      {
        p: "Next.js n'est pas la réponse à tout. Pour une app mobile native, on part sur React Native + Expo. Pour un site 100 % éditorial sans logique applicative, un générateur statique plus léger peut suffire. Et pour un backend lourd (traitements longs, files d'attente, temps réel intensif), on isole un service NestJS dédié plutôt que de tout empiler dans les routes API. Le bon outil dépend du produit — mais pour un SaaS web à livrer vite, Next.js gagne presque à chaque fois.",
      },
    ],
  },
  en: {
    slug: 'pourquoi-next-js',
    title: "Why we choose Next.js for (almost) every project",
    excerpt:
      "The concrete reasons behind our Next.js default: App Router, SSR/SSG, DX, ecosystem, deployment — and the cases where we don't pick it.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js is the framework we reach for by default to ship a production web V1 in 7 days. The reason is simple: it packs server rendering, static rendering, the API and the front end into a single tool, with near-instant deployment. The result: fewer pieces to assemble, fewer decisions to make, more time spent on the product itself. Here is why, concretely.",
      },
      { h2: "One framework from front to back" },
      {
        p: "With the App Router, a Next.js project covers the interface, Server Components, API routes and authentication in one codebase. There is no need to wire three separate parts together or maintain two repositories. For a product you have to ship fast, that unity saves whole days: a single stack to configure, test and deploy.",
      },
      {
        ul: [
          "Server Components: less JavaScript sent to the browser, faster pages by default.",
          "Built-in API routes: a lightweight backend with no separate server to run.",
          "React Server Actions: data mutations without hand-writing a REST API.",
        ],
      },
      { h2: "SSR and SSG: performance with no trade-off" },
      {
        p: "Next.js lets you choose, page by page, between server rendering (SSR), static generation (SSG) and incremental rendering. A marketing landing ships static for near-instant loads and strong SEO; an authenticated dashboard ships server-rendered for fresh data. You sacrifice neither speed, nor search ranking, nor data freshness — you pick the right mode in the right place.",
      },
      { h2: "The DX that saves days" },
      {
        p: "Developer experience is the real accelerator. Instant hot reload, end-to-end TypeScript, file-based routing conventions, native image and font handling: every detail removes a decision or a line of config. Combined with AI-assisted development, that DX is what makes a one-week V1 realistic rather than tense.",
      },
      {
        quote:
          "A framework that unifies front, back and deployment is three days saved that go back into the product, not the plumbing.",
      },
      { h2: "A mature ecosystem and deployment" },
      {
        p: "Next.js is not a gamble: it is React, maintained by Vercel, with tens of thousands of projects in production. Deployment on Vercel takes one command, with per-branch previews, a global CDN and automatic scaling. For a heavier API, we plug a NestJS + Prisma + PostgreSQL service into Cloud Run — Next.js stays the front end and the gateway.",
      },
      { h2: "When we don't choose Next.js" },
      {
        p: "Next.js is not the answer to everything. For a native mobile app, we go with React Native + Expo. For a purely editorial site with no application logic, a lighter static generator can be enough. And for a heavy backend (long jobs, queues, intensive real time), we isolate a dedicated NestJS service rather than stacking everything into API routes. The right tool depends on the product — but for a web SaaS you have to ship fast, Next.js wins almost every time.",
      },
    ],
  },
  es: {
    slug: 'pourquoi-next-js',
    title: "Por qué elegimos Next.js para (casi) todos nuestros proyectos",
    excerpt:
      "Las razones concretas detrás de nuestra elección de Next.js: App Router, SSR/SSG, DX, ecosistema, despliegue — y cuándo no lo elegimos.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js es el framework que usamos por defecto para entregar una V1 web en producción en 7 días. La razón es sencilla: reúne en una sola herramienta el renderizado en servidor, el renderizado estático, la API y el front, con un despliegue casi instantáneo. El resultado: menos piezas que ensamblar, menos decisiones que tomar, más tiempo dedicado al producto en sí. Aquí está el porqué, en concreto.",
      },
      { h2: "Un solo framework del front al back" },
      {
        p: "Con el App Router, un proyecto Next.js cubre la interfaz, los Server Components, las rutas API y la autenticación en una única base de código. No hay que conectar tres bloques separados ni mantener dos repositorios. Para un producto que hay que entregar rápido, esa unidad ahorra días enteros: una sola stack que configurar, probar y desplegar.",
      },
      {
        ul: [
          "Server Components: menos JavaScript enviado al navegador, páginas más rápidas por defecto.",
          "Rutas API integradas: un backend ligero sin un servidor separado que gestionar.",
          "React Server Actions: mutaciones de datos sin escribir una API REST a mano.",
        ],
      },
      { h2: "SSR y SSG: rendimiento sin renuncias" },
      {
        p: "Next.js permite elegir, página por página, entre renderizado en servidor (SSR), generación estática (SSG) y renderizado incremental. Una landing de marketing sale estática para una carga casi instantánea y un SEO sólido; un panel autenticado sale renderizado en servidor para datos frescos. No se sacrifica ni la velocidad, ni el posicionamiento, ni la frescura de los datos: se elige el modo adecuado en el lugar adecuado.",
      },
      { h2: "La DX que hace ganar días" },
      {
        p: "La experiencia de desarrollo es el verdadero acelerador. Hot reload inmediato, TypeScript de extremo a extremo, convenciones de routing por archivos, gestión nativa de imágenes y fuentes: cada detalle elimina una decisión o una línea de configuración. Combinada con el desarrollo asistido por IA, esa DX es lo que hace que una V1 en una semana sea realista en lugar de tensa.",
      },
      {
        quote:
          "Un framework que unifica front, back y despliegue son tres días ganados que se devuelven al producto, no a la fontanería.",
      },
      { h2: "Un ecosistema y un despliegue maduros" },
      {
        p: "Next.js no es una apuesta: es React, mantenido por Vercel, con decenas de miles de proyectos en producción. El despliegue en Vercel se hace con un solo comando, con previews por rama, CDN mundial y escalado automático. Para una API más pesada, conectamos un NestJS + Prisma + PostgreSQL en Cloud Run — Next.js sigue siendo el front y la puerta de entrada.",
      },
      { h2: "Cuándo no elegimos Next.js" },
      {
        p: "Next.js no es la respuesta a todo. Para una app móvil nativa, vamos con React Native + Expo. Para un sitio 100 % editorial sin lógica de aplicación, un generador estático más ligero puede bastar. Y para un backend pesado (procesos largos, colas, tiempo real intensivo), aislamos un servicio NestJS dedicado en lugar de apilarlo todo en las rutas API. La herramienta adecuada depende del producto — pero para un SaaS web que hay que entregar rápido, Next.js gana casi siempre.",
      },
    ],
  },
  de: {
    slug: 'pourquoi-next-js',
    title: "Warum wir Next.js für (fast) jedes Projekt wählen",
    excerpt:
      "Die konkreten Gründe für unsere Next.js-Wahl: App Router, SSR/SSG, DX, Ökosystem, Deployment — und die Fälle, in denen wir es nicht nehmen.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js ist das Framework, das wir standardmäßig einsetzen, um eine produktionsreife Web-V1 in 7 Tagen auszuliefern. Der Grund ist einfach: Es vereint Server-Rendering, statisches Rendering, API und Frontend in einem einzigen Werkzeug, mit nahezu sofortigem Deployment. Das Ergebnis: weniger Teile zum Zusammenbauen, weniger Entscheidungen und mehr Zeit für das Produkt selbst. Hier ist das Warum, ganz konkret.",
      },
      { h2: "Ein Framework vom Front- bis zum Backend" },
      {
        p: "Mit dem App Router deckt ein Next.js-Projekt die Oberfläche, Server Components, API-Routen und Authentifizierung in einer einzigen Codebasis ab. Es müssen keine drei getrennten Bausteine verdrahtet und keine zwei Repositories gepflegt werden. Für ein Produkt, das schnell ausgeliefert werden muss, spart diese Einheit ganze Tage: ein einziger Stack zum Konfigurieren, Testen und Deployen.",
      },
      {
        ul: [
          "Server Components: weniger JavaScript im Browser, standardmäßig schnellere Seiten.",
          "Integrierte API-Routen: ein leichtgewichtiges Backend ohne separaten Server.",
          "React Server Actions: Datenmutationen, ohne eine REST-API von Hand zu schreiben.",
        ],
      },
      { h2: "SSR und SSG: Performance ohne Kompromiss" },
      {
        p: "Next.js lässt die Wahl, Seite für Seite, zwischen Server-Rendering (SSR), statischer Generierung (SSG) und inkrementellem Rendering. Eine Marketing-Landingpage geht statisch für nahezu sofortiges Laden und starkes SEO; ein authentifiziertes Dashboard geht server-gerendert für frische Daten. Man opfert weder Geschwindigkeit noch Ranking noch Datenaktualität — man wählt den richtigen Modus am richtigen Ort.",
      },
      { h2: "Die DX, die Tage spart" },
      {
        p: "Die Developer Experience ist der eigentliche Beschleuniger. Sofortiger Hot Reload, durchgängiges TypeScript, dateibasierte Routing-Konventionen, native Bild- und Font-Verwaltung: Jedes Detail eliminiert eine Entscheidung oder eine Konfigurationszeile. Kombiniert mit KI-gestützter Entwicklung ist diese DX das, was eine V1 in einer Woche realistisch statt angespannt macht.",
      },
      {
        quote:
          "Ein Framework, das Front, Back und Deployment vereint, sind drei gesparte Tage, die ins Produkt zurückfließen, nicht in die Klempnerei.",
      },
      { h2: "Ein ausgereiftes Ökosystem und Deployment" },
      {
        p: "Next.js ist keine Wette: Es ist React, gepflegt von Vercel, mit Zehntausenden Projekten in Produktion. Das Deployment auf Vercel gelingt mit einem Befehl, mit Previews pro Branch, weltweitem CDN und automatischem Scaling. Für eine schwerere API hängen wir einen NestJS + Prisma + PostgreSQL-Dienst an Cloud Run — Next.js bleibt das Frontend und das Einfallstor.",
      },
      { h2: "Wann wir Next.js nicht wählen" },
      {
        p: "Next.js ist nicht die Antwort auf alles. Für eine native Mobile-App setzen wir auf React Native + Expo. Für eine rein redaktionelle Website ohne Anwendungslogik kann ein leichterer statischer Generator genügen. Und für ein schweres Backend (lange Jobs, Warteschlangen, intensives Echtzeit) isolieren wir einen dedizierten NestJS-Dienst, statt alles in die API-Routen zu stapeln. Das richtige Werkzeug hängt vom Produkt ab — aber für ein Web-SaaS, das schnell ausgeliefert werden muss, gewinnt Next.js fast jedes Mal.",
      },
    ],
  },
  it: {
    slug: 'pourquoi-next-js',
    title: "Perché scegliamo Next.js per (quasi) tutti i nostri progetti",
    excerpt:
      "Le ragioni concrete dietro la nostra scelta di Next.js: App Router, SSR/SSG, DX, ecosistema, deploy — e i casi in cui non lo scegliamo.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js è il framework che usiamo di default per consegnare una V1 web in produzione in 7 giorni. Il motivo è semplice: racchiude in un solo strumento il rendering lato server, il rendering statico, l'API e il front, con un deploy quasi istantaneo. Il risultato: meno pezzi da assemblare, meno decisioni da prendere, più tempo dedicato al prodotto stesso. Ecco perché, in concreto.",
      },
      { h2: "Un solo framework dal front al back" },
      {
        p: "Con l'App Router, un progetto Next.js copre l'interfaccia, i Server Components, le route API e l'autenticazione in un'unica base di codice. Non serve collegare tre blocchi separati né mantenere due repository. Per un prodotto da consegnare in fretta, questa unità fa guadagnare giorni interi: un solo stack da configurare, testare e distribuire.",
      },
      {
        ul: [
          "Server Components: meno JavaScript inviato al browser, pagine più veloci per impostazione predefinita.",
          "Route API integrate: un backend leggero senza un server separato da gestire.",
          "React Server Actions: mutazioni dei dati senza scrivere un'API REST a mano.",
        ],
      },
      { h2: "SSR e SSG: performance senza compromessi" },
      {
        p: "Next.js permette di scegliere, pagina per pagina, tra rendering lato server (SSR), generazione statica (SSG) e rendering incrementale. Una landing di marketing parte statica per un caricamento quasi istantaneo e un SEO solido; una dashboard autenticata parte con rendering lato server per dati freschi. Non si sacrifica né la velocità, né il posizionamento, né la freschezza dei dati: si sceglie la modalità giusta nel posto giusto.",
      },
      { h2: "La DX che fa guadagnare giorni" },
      {
        p: "L'esperienza di sviluppo è il vero acceleratore. Hot reload immediato, TypeScript end-to-end, convenzioni di routing basate sui file, gestione nativa di immagini e font: ogni dettaglio elimina una decisione o una riga di configurazione. Combinata con lo sviluppo assistito dall'IA, questa DX è ciò che rende una V1 in una settimana realistica anziché tesa.",
      },
      {
        quote:
          "Un framework che unifica front, back e deploy sono tre giorni guadagnati che tornano nel prodotto, non nell'impiantistica.",
      },
      { h2: "Un ecosistema e un deploy maturi" },
      {
        p: "Next.js non è una scommessa: è React, mantenuto da Vercel, con decine di migliaia di progetti in produzione. Il deploy su Vercel avviene con un solo comando, con preview per branch, CDN mondiale e scaling automatico. Per un'API più pesante, colleghiamo un servizio NestJS + Prisma + PostgreSQL su Cloud Run — Next.js resta il front e la porta d'ingresso.",
      },
      { h2: "Quando non scegliamo Next.js" },
      {
        p: "Next.js non è la risposta a tutto. Per un'app mobile nativa, andiamo su React Native + Expo. Per un sito puramente editoriale senza logica applicativa, un generatore statico più leggero può bastare. E per un backend pesante (processi lunghi, code, tempo reale intensivo), isoliamo un servizio NestJS dedicato invece di impilare tutto nelle route API. Lo strumento giusto dipende dal prodotto — ma per un SaaS web da consegnare in fretta, Next.js vince quasi ogni volta.",
      },
    ],
  },
  pt: {
    slug: 'pourquoi-next-js',
    title: "Por que escolhemos Next.js para (quase) todos os nossos projetos",
    excerpt:
      "As razões concretas por trás da nossa escolha do Next.js: App Router, SSR/SSG, DX, ecossistema, deploy — e os casos em que não o escolhemos.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js é o framework que usamos por padrão para entregar uma V1 web em produção em 7 dias. O motivo é simples: reúne numa única ferramenta a renderização no servidor, a renderização estática, a API e o front, com um deploy quase instantâneo. O resultado: menos peças para montar, menos decisões a tomar, mais tempo dedicado ao produto em si. Eis o porquê, de forma concreta.",
      },
      { h2: "Um único framework do front ao back" },
      {
        p: "Com o App Router, um projeto Next.js cobre a interface, os Server Components, as rotas API e a autenticação numa única base de código. Não é preciso ligar três blocos separados nem manter dois repositórios. Para um produto que deve ser entregue rápido, essa unidade poupa dias inteiros: uma só stack para configurar, testar e implantar.",
      },
      {
        ul: [
          "Server Components: menos JavaScript enviado ao navegador, páginas mais rápidas por padrão.",
          "Rotas API integradas: um backend leve sem um servidor separado para gerir.",
          "React Server Actions: mutações de dados sem escrever uma API REST à mão.",
        ],
      },
      { h2: "SSR e SSG: desempenho sem concessões" },
      {
        p: "O Next.js permite escolher, página por página, entre renderização no servidor (SSR), geração estática (SSG) e renderização incremental. Uma landing de marketing sai estática para um carregamento quase instantâneo e um SEO sólido; um painel autenticado sai renderizado no servidor para dados frescos. Não se sacrifica nem a velocidade, nem o posicionamento, nem a atualidade dos dados: escolhe-se o modo certo no lugar certo.",
      },
      { h2: "A DX que faz ganhar dias" },
      {
        p: "A experiência de desenvolvimento é o verdadeiro acelerador. Hot reload imediato, TypeScript de ponta a ponta, convenções de routing por arquivos, gestão nativa de imagens e fontes: cada detalhe elimina uma decisão ou uma linha de configuração. Combinada com o desenvolvimento assistido por IA, essa DX é o que torna uma V1 numa semana realista em vez de tensa.",
      },
      {
        quote:
          "Um framework que unifica front, back e deploy são três dias ganhos que voltam para o produto, não para o encanamento.",
      },
      { h2: "Um ecossistema e um deploy maduros" },
      {
        p: "Next.js não é uma aposta: é React, mantido pela Vercel, com dezenas de milhares de projetos em produção. O deploy na Vercel faz-se com um único comando, com previews por branch, CDN mundial e escalonamento automático. Para uma API mais pesada, ligamos um serviço NestJS + Prisma + PostgreSQL ao Cloud Run — o Next.js continua a ser o front e a porta de entrada.",
      },
      { h2: "Quando não escolhemos Next.js" },
      {
        p: "Next.js não é a resposta para tudo. Para uma app móvel nativa, vamos de React Native + Expo. Para um site 100 % editorial sem lógica de aplicação, um gerador estático mais leve pode bastar. E para um backend pesado (processos longos, filas, tempo real intensivo), isolamos um serviço NestJS dedicado em vez de empilhar tudo nas rotas API. A ferramenta certa depende do produto — mas para um SaaS web que deve ser entregue rápido, o Next.js vence quase sempre.",
      },
    ],
  },
  nl: {
    slug: 'pourquoi-next-js',
    title: "Waarom we Next.js kiezen voor (bijna) elk project",
    excerpt:
      "De concrete redenen achter onze Next.js-keuze: App Router, SSR/SSG, DX, ecosysteem, deployment — en de gevallen waarin we het niet kiezen.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js is het framework dat we standaard gebruiken om een productieklare web-V1 in 7 dagen op te leveren. De reden is eenvoudig: het bundelt server-rendering, statische rendering, de API en de front-end in één tool, met bijna directe deployment. Het resultaat: minder onderdelen om samen te voegen, minder beslissingen te nemen, meer tijd voor het product zelf. Hier is het waarom, concreet.",
      },
      { h2: "Eén framework van front tot back" },
      {
        p: "Met de App Router dekt een Next.js-project de interface, Server Components, API-routes en authenticatie in één codebase. Je hoeft geen drie losse onderdelen aan elkaar te knopen of twee repositories te onderhouden. Voor een product dat snel opgeleverd moet worden, bespaart die eenheid hele dagen: één stack om te configureren, testen en deployen.",
      },
      {
        ul: [
          "Server Components: minder JavaScript naar de browser, standaard snellere pagina's.",
          "Ingebouwde API-routes: een lichte backend zonder aparte server om te beheren.",
          "React Server Actions: datamutaties zonder met de hand een REST-API te schrijven.",
        ],
      },
      { h2: "SSR en SSG: performance zonder inleveren" },
      {
        p: "Next.js laat je per pagina kiezen tussen server-rendering (SSR), statische generatie (SSG) en incrementele rendering. Een marketinglanding gaat statisch voor bijna directe laadtijden en sterke SEO; een geauthenticeerd dashboard gaat server-gerenderd voor verse data. Je levert noch snelheid, noch ranking, noch data-actualiteit in — je kiest de juiste modus op de juiste plek.",
      },
      { h2: "De DX die dagen bespaart" },
      {
        p: "De developer experience is de echte versneller. Directe hot reload, end-to-end TypeScript, file-based routing-conventies, native beeld- en font-afhandeling: elk detail schrapt een beslissing of een regel configuratie. Gecombineerd met AI-ondersteunde ontwikkeling is die DX wat een V1 in een week realistisch maakt in plaats van gespannen.",
      },
      {
        quote:
          "Een framework dat front, back en deployment verenigt, zijn drie gewonnen dagen die terug in het product gaan, niet in het leidingwerk.",
      },
      { h2: "Een volwassen ecosysteem en deployment" },
      {
        p: "Next.js is geen gok: het is React, onderhouden door Vercel, met tienduizenden projecten in productie. Deployment op Vercel gaat met één commando, met previews per branch, een wereldwijd CDN en automatische scaling. Voor een zwaardere API koppelen we een NestJS + Prisma + PostgreSQL-service aan Cloud Run — Next.js blijft de front-end en de toegangspoort.",
      },
      { h2: "Wanneer we Next.js niet kiezen" },
      {
        p: "Next.js is niet het antwoord op alles. Voor een native mobiele app gaan we voor React Native + Expo. Voor een puur redactionele site zonder applicatielogica kan een lichtere statische generator volstaan. En voor een zware backend (lange taken, wachtrijen, intensieve realtime) isoleren we een aparte NestJS-service in plaats van alles in de API-routes te stapelen. De juiste tool hangt af van het product — maar voor een web-SaaS die snel opgeleverd moet worden, wint Next.js bijna elke keer.",
      },
    ],
  },
  ar: {
    slug: 'pourquoi-next-js',
    title: "لماذا نختار Next.js لـ(شبه) كل مشاريعنا",
    excerpt:
      "الأسباب الملموسة وراء اختيارنا لـ Next.js: App Router و SSR/SSG وتجربة المطوّر والنظام البيئي والنشر — والحالات التي لا نختاره فيها.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js هو إطار العمل الذي نعتمده افتراضيًا لتسليم نسخة V1 ويب جاهزة للإنتاج خلال 7 أيام. السبب بسيط: فهو يجمع في أداة واحدة العرض من الخادم والعرض الثابت وواجهة الـ API والواجهة الأمامية، مع نشر شبه فوري. النتيجة: قطع أقل لتجميعها، وقرارات أقل لاتخاذها، ووقت أكبر مخصّص للمنتج نفسه. إليك السبب، بشكل ملموس.",
      },
      { h2: "إطار واحد من الواجهة الأمامية إلى الخلفية" },
      {
        p: "مع App Router، يغطّي مشروع Next.js الواجهة و Server Components ومسارات الـ API والمصادقة ضمن قاعدة شيفرة واحدة. لا حاجة لربط ثلاث لبنات منفصلة ولا لصيانة مستودعين. بالنسبة لمنتج يجب تسليمه بسرعة، توفّر هذه الوحدة أيامًا كاملة: stack واحد للتهيئة والاختبار والنشر.",
      },
      {
        ul: [
          "Server Components: كمية أقل من JavaScript تُرسَل إلى المتصفح، وصفحات أسرع افتراضيًا.",
          "مسارات API مدمجة: خلفية خفيفة دون خادم منفصل لإدارته.",
          "React Server Actions: تعديلات على البيانات دون كتابة API REST يدويًا.",
        ],
      },
      { h2: "SSR و SSG: الأداء دون مساومة" },
      {
        p: "يتيح Next.js الاختيار، صفحةً صفحةً، بين العرض من الخادم (SSR) والتوليد الثابت (SSG) والعرض التدريجي. صفحة هبوط تسويقية تنطلق ثابتة لتحميل شبه فوري و SEO قوي؛ ولوحة تحكّم مصادَق عليها تنطلق بعرض من الخادم لبيانات محدّثة. لا نضحّي بالسرعة ولا بالترتيب ولا بحداثة البيانات — نختار الوضع المناسب في المكان المناسب.",
      },
      { h2: "تجربة المطوّر التي توفّر أيامًا" },
      {
        p: "تجربة المطوّر هي المسرّع الحقيقي. إعادة تحميل فورية، و TypeScript من الطرف إلى الطرف، وأعراف توجيه قائمة على الملفات، وإدارة أصلية للصور والخطوط: كل تفصيل يلغي قرارًا أو سطر تهيئة. وبالاقتران مع التطوير المدعوم بالذكاء الاصطناعي، هذه التجربة هي ما يجعل نسخة V1 في أسبوع واحد واقعية بدل أن تكون متوترة.",
      },
      {
        quote:
          "إطار يوحّد الواجهة الأمامية والخلفية والنشر يعني ثلاثة أيام مكتسبة تعود إلى المنتج، لا إلى السباكة التقنية.",
      },
      { h2: "نظام بيئي ونشر ناضجان" },
      {
        p: "Next.js ليس مقامرة: إنه React، تصونه Vercel، مع عشرات الآلاف من المشاريع في الإنتاج. يتم النشر على Vercel بأمر واحد، مع معاينات لكل branch و CDN عالمي وتوسّع تلقائي. ولأجل API أثقل، نربط خدمة NestJS + Prisma + PostgreSQL على Cloud Run — ويبقى Next.js هو الواجهة الأمامية وبوابة الدخول.",
      },
      { h2: "متى لا نختار Next.js" },
      {
        p: "Next.js ليس الجواب على كل شيء. لتطبيق موبايل أصلي، نتجه إلى React Native + Expo. ولموقع تحريري بالكامل بلا منطق تطبيقي، قد يكفي مولّد ثابت أخفّ. ولخلفية ثقيلة (معالجات طويلة، طوابير، زمن حقيقي مكثّف)، نعزل خدمة NestJS مخصّصة بدل تكديس كل شيء في مسارات الـ API. الأداة المناسبة تعتمد على المنتج — لكن لأجل SaaS ويب يجب تسليمه بسرعة، يفوز Next.js في كل مرة تقريبًا.",
      },
    ],
  },
  pl: {
    slug: 'pourquoi-next-js',
    title: "Dlaczego wybieramy Next.js do (prawie) każdego projektu",
    excerpt:
      "Konkretne powody naszego wyboru Next.js: App Router, SSR/SSG, DX, ekosystem, wdrożenie — oraz przypadki, w których go nie wybieramy.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js to framework, po który sięgamy domyślnie, aby dostarczyć produkcyjną wersję V1 aplikacji webowej w 7 dni. Powód jest prosty: łączy w jednym narzędziu renderowanie po stronie serwera, renderowanie statyczne, API i front, z niemal natychmiastowym wdrożeniem. Efekt: mniej elementów do złożenia, mniej decyzji do podjęcia, więcej czasu na sam produkt. Oto dlaczego, konkretnie.",
      },
      { h2: "Jeden framework od frontu po backend" },
      {
        p: "Dzięki App Router projekt Next.js obejmuje interfejs, Server Components, trasy API i uwierzytelnianie w jednej bazie kodu. Nie trzeba łączyć trzech osobnych klocków ani utrzymywać dwóch repozytoriów. Dla produktu, który trzeba dostarczyć szybko, ta jedność oszczędza całe dni: jeden stack do skonfigurowania, przetestowania i wdrożenia.",
      },
      {
        ul: [
          "Server Components: mniej JavaScriptu wysyłanego do przeglądarki, domyślnie szybsze strony.",
          "Wbudowane trasy API: lekki backend bez osobnego serwera do obsługi.",
          "React Server Actions: mutacje danych bez ręcznego pisania API REST.",
        ],
      },
      { h2: "SSR i SSG: wydajność bez kompromisów" },
      {
        p: "Next.js pozwala wybrać, strona po stronie, między renderowaniem po stronie serwera (SSR), generowaniem statycznym (SSG) i renderowaniem przyrostowym. Landing marketingowy startuje jako statyczny dla niemal natychmiastowego ładowania i mocnego SEO; uwierzytelniony dashboard startuje z renderowaniem serwerowym dla świeżych danych. Nie poświęca się ani szybkości, ani pozycji w wyszukiwarce, ani aktualności danych — wybiera się właściwy tryb we właściwym miejscu.",
      },
      { h2: "DX, które oszczędza dni" },
      {
        p: "Doświadczenie dewelopera to prawdziwy akcelerator. Natychmiastowy hot reload, TypeScript od początku do końca, konwencje routingu oparte na plikach, natywna obsługa obrazów i czcionek: każdy szczegół usuwa jedną decyzję lub linię konfiguracji. W połączeniu z programowaniem wspieranym przez AI, to właśnie DX sprawia, że V1 w tydzień jest realne, a nie napięte.",
      },
      {
        quote:
          "Framework, który łączy front, back i wdrożenie, to trzy zaoszczędzone dni, które wracają do produktu, a nie do hydrauliki.",
      },
      { h2: "Dojrzały ekosystem i wdrożenie" },
      {
        p: "Next.js to nie hazard: to React, utrzymywany przez Vercel, z dziesiątkami tysięcy projektów w produkcji. Wdrożenie na Vercel odbywa się jednym poleceniem, z podglądami na gałąź, globalnym CDN i automatycznym skalowaniem. Dla cięższego API podłączamy usługę NestJS + Prisma + PostgreSQL na Cloud Run — Next.js pozostaje frontem i bramą wejściową.",
      },
      { h2: "Kiedy nie wybieramy Next.js" },
      {
        p: "Next.js nie jest odpowiedzią na wszystko. Do natywnej aplikacji mobilnej sięgamy po React Native + Expo. Dla w pełni redakcyjnej strony bez logiki aplikacyjnej może wystarczyć lżejszy generator statyczny. A dla ciężkiego backendu (długie zadania, kolejki, intensywny real-time) izolujemy dedykowaną usługę NestJS zamiast upychać wszystko w trasach API. Właściwe narzędzie zależy od produktu — ale dla webowego SaaS, który trzeba dostarczyć szybko, Next.js wygrywa niemal za każdym razem.",
      },
    ],
  },
  tr: {
    slug: 'pourquoi-next-js',
    title: "Neredeyse her projemizde neden Next.js'i seçiyoruz",
    excerpt:
      "Next.js tercihimizin somut nedenleri: App Router, SSR/SSG, DX, ekosistem, dağıtım — ve onu seçmediğimiz durumlar.",
    date: '2026-01-14',
    readingMinutes: 6,
    tags: ['Next.js', 'Tech'],
    body: [
      {
        p: "Next.js, üretime hazır bir web V1'ini 7 günde teslim etmek için varsayılan olarak başvurduğumuz framework'tür. Nedeni basit: sunucu render'ını, statik render'ı, API'yi ve ön yüzü tek bir araçta toplar ve neredeyse anında dağıtım sunar. Sonuç: birleştirilecek daha az parça, alınacak daha az karar ve ürünün kendisine ayrılan daha fazla zaman. İşte nedeni, somut olarak.",
      },
      { h2: "Ön yüzden arka uca tek bir framework" },
      {
        p: "App Router ile bir Next.js projesi; arayüzü, Server Components'i, API rotalarını ve kimlik doğrulamayı tek bir kod tabanında kapsar. Üç ayrı bloğu birbirine bağlamaya ya da iki depoyu sürdürmeye gerek yoktur. Hızlı teslim edilmesi gereken bir ürün için bu bütünlük tam günler kazandırır: yapılandırılacak, test edilecek ve dağıtılacak tek bir stack.",
      },
      {
        ul: [
          "Server Components: tarayıcıya daha az JavaScript, varsayılan olarak daha hızlı sayfalar.",
          "Yerleşik API rotaları: yönetilecek ayrı bir sunucu olmadan hafif bir backend.",
          "React Server Actions: elle REST API yazmadan veri mutasyonları.",
        ],
      },
      { h2: "SSR ve SSG: ödünsüz performans" },
      {
        p: "Next.js, sayfa sayfa, sunucu render'ı (SSR), statik üretim (SSG) ve artımlı render arasında seçim yapmayı sağlar. Bir pazarlama açılış sayfası neredeyse anlık yükleme ve güçlü SEO için statik gider; kimlik doğrulamalı bir panel taze veri için sunucu render'lı gider. Ne hız, ne sıralama, ne de verinin güncelliği feda edilir — doğru yerde doğru mod seçilir.",
      },
      { h2: "Günler kazandıran DX" },
      {
        p: "Geliştirici deneyimi asıl hızlandırıcıdır. Anında hot reload, uçtan uca TypeScript, dosya tabanlı yönlendirme kuralları, yerel görsel ve font yönetimi: her ayrıntı bir kararı veya bir yapılandırma satırını ortadan kaldırır. Yapay zeka destekli geliştirmeyle birleştiğinde, bu DX bir haftada V1'i gergin değil gerçekçi kılan şeydir.",
      },
      {
        quote:
          "Ön yüzü, arka ucu ve dağıtımı birleştiren bir framework, tesisata değil ürüne geri dönen üç kazanılmış gün demektir.",
      },
      { h2: "Olgun bir ekosistem ve dağıtım" },
      {
        p: "Next.js bir kumar değildir: Vercel tarafından sürdürülen, üretimde on binlerce projesi olan React'tir. Vercel'e dağıtım tek komutla yapılır; dal başına önizlemeler, küresel CDN ve otomatik ölçekleme ile. Daha ağır bir API için Cloud Run üzerine bir NestJS + Prisma + PostgreSQL servisi bağlarız — Next.js ön yüz ve giriş kapısı olarak kalır.",
      },
      { h2: "Next.js'i ne zaman seçmeyiz" },
      {
        p: "Next.js her şeyin cevabı değildir. Yerel bir mobil uygulama için React Native + Expo'ya gideriz. Uygulama mantığı olmayan tamamen editoryal bir site için daha hafif bir statik üreteç yeterli olabilir. Ağır bir backend için (uzun işler, kuyruklar, yoğun gerçek zamanlı) her şeyi API rotalarına yığmak yerine ayrı bir NestJS servisi izole ederiz. Doğru araç ürüne bağlıdır — ama hızlı teslim edilmesi gereken bir web SaaS için Next.js neredeyse her seferinde kazanır.",
      },
    ],
  },
}
