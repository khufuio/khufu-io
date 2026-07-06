import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Notre stack pour livrer un SaaS en une semaine',
    excerpt:
      "La stack Khufu détaillée — Next.js, NestJS, Prisma, PostgreSQL, cloud managé — et pourquoi chaque brique sert la vitesse ET la maintenabilité.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Tech'],
    body: [
      {
        p: "Khufu livre un SaaS en production en 7 jours grâce à une stack unique et volontairement figée : Next.js côté front, NestJS côté back, Prisma comme ORM, PostgreSQL en base de données, le tout déployé sur un hébergement cloud managé. Un seul langage — TypeScript — du navigateur jusqu'à la base. Ce n'est pas une mode : chaque brique est retenue parce qu'elle sert deux objectifs en même temps, la vitesse de livraison et la maintenabilité sur le long terme. Voici pourquoi.",
      },
      { h2: 'Une seule stack, un seul langage, du front à la base' },
      {
        p: "La première décision qui fait gagner une semaine, c'est de ne pas avoir à choisir. Khufu utilise la même stack sur chaque projet, avec TypeScript partout : un développeur passe du front au back sans changer de langage, de mental model ni d'outillage. Les types partagés entre le client et le serveur éliminent une catégorie entière de bugs — ceux qui apparaissent quand le front et le back ne sont plus d'accord sur la forme des données.",
      },
      {
        ul: [
          "TypeScript strict du navigateur à la base de données : un seul langage à maîtriser, zéro friction de contexte.",
          "Une stack figée : pas de temps perdu à réévaluer des outils à chaque projet.",
          "Des patterns réutilisables d'un produit à l'autre — auth, paiement, tableaux de bord sont déjà éprouvés.",
        ],
      },
      { h2: 'Next.js : un front rapide, sans dette cachée' },
      {
        p: "Next.js gère le rendu, le routing, l'API et le SEO dans un seul framework. Concrètement, on démarre un produit avec authentification, pages serveur et référencement propre en heures, pas en jours. Et parce que c'est du React standard sur une base ultra-documentée, le code reste lisible et repris facilement par n'importe quel développeur — pas un framework maison que vous seriez seul au monde à comprendre.",
      },
      { h2: 'NestJS, Prisma et PostgreSQL : un back structuré et typé' },
      {
        p: "Côté serveur, NestJS impose une architecture claire — un module par domaine métier — qui évite le plat de spaghetti classique des MVP montés à la va-vite. Prisma génère un client typé à partir du schéma de base : les requêtes sont vérifiées à la compilation, les migrations sont versionnées, et PostgreSQL apporte une base relationnelle solide qui tient la charge de la V1 jusqu'à des dizaines de milliers d'utilisateurs, sans réécriture.",
      },
      {
        ul: [
          "NestJS : structure imposée, donc code maintenable même après six mois d'évolutions.",
          "Prisma : schéma unique, migrations versionnées, requêtes typées — beaucoup moins de bugs de données.",
          "PostgreSQL : la base relationnelle de référence, gratuite, sans limite artificielle.",
        ],
      },
      {
        quote:
          "Une stack figée n'est pas un dogme : c'est ce qui permet de livrer en 7 jours ce que d'autres montent en trois mois, sans accumuler la dette qu'il faudra rembourser plus tard.",
      },
      { h2: 'Hébergement cloud managé : zéro ops, scaling automatique' },
      {
        p: "On déploie sur un hébergement cloud managé (Vercel côté front, Cloud Run côté back) : pas de serveur à administrer, déploiement à chaque commit, mise à l'échelle automatique selon le trafic. Vous ne payez pas un ingénieur DevOps à plein temps pour une V1, et l'infrastructure suit quand le produit décolle. Le déploiement continu est en place dès le premier jour — le produit est en ligne sur une vraie URL le jour 2.",
      },
      { h2: 'Pourquoi ces choix servent la vitesse ET la maintenabilité' },
      {
        p: "La plupart des équipes opposent les deux : aller vite en accumulant de la dette, ou construire proprement en prenant des mois. La stack Khufu refuse ce compromis. Chaque brique est mainstream, documentée et typée, donc rapide à écrire aujourd'hui et facile à reprendre demain. C'est ce qui permet de livrer une V1 prête pour la production en 7 jours, pour un forfait fixe de 15 000 €, avec un code source qui vous appartient et que n'importe quel développeur peut reprendre — pas un prototype à jeter dans six mois.",
      },
    ],
  },

  en: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Our stack for shipping a SaaS in one week',
    excerpt:
      "Khufu's stack in detail — Next.js, NestJS, Prisma, PostgreSQL, managed cloud — and why every layer serves both speed AND maintainability.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Tech'],
    body: [
      {
        p: "Khufu ships a SaaS to production in 7 days thanks to a single, deliberately fixed stack: Next.js on the front end, NestJS on the back end, Prisma as the ORM, PostgreSQL as the database, all deployed on managed cloud hosting. One language — TypeScript — from the browser down to the database. This is not a trend: every layer is chosen because it serves two goals at once, delivery speed and long-term maintainability. Here is why.",
      },
      { h2: 'One stack, one language, from front end to database' },
      {
        p: "The first decision that saves a week is not having to choose. Khufu uses the same stack on every project, with TypeScript everywhere: a developer moves from front end to back end without switching language, mental model or tooling. Types shared between client and server wipe out an entire class of bugs — the ones that appear when the front end and back end no longer agree on the shape of the data.",
      },
      {
        ul: [
          "Strict TypeScript from the browser to the database: one language to master, zero context-switching friction.",
          "A fixed stack: no time wasted re-evaluating tools on every project.",
          "Reusable patterns from one product to the next — auth, payments and dashboards are already battle-tested.",
        ],
      },
      { h2: 'Next.js: a fast front end with no hidden debt' },
      {
        p: "Next.js handles rendering, routing, the API and SEO in a single framework. In practice, we start a product with authentication, server-rendered pages and clean SEO in hours, not days. And because it is standard React on a heavily documented foundation, the code stays readable and easy for any developer to pick up — not a homegrown framework only you would understand.",
      },
      { h2: 'NestJS, Prisma and PostgreSQL: a structured, typed back end' },
      {
        p: "On the server, NestJS enforces a clear architecture — one module per business domain — that avoids the classic spaghetti of MVPs thrown together in a hurry. Prisma generates a typed client from the database schema: queries are checked at compile time, migrations are versioned, and PostgreSQL provides a solid relational database that handles everything from the V1 up to tens of thousands of users without a rewrite.",
      },
      {
        ul: [
          "NestJS: enforced structure, so the code stays maintainable even after six months of changes.",
          "Prisma: single schema, versioned migrations, typed queries — far fewer data bugs.",
          "PostgreSQL: the reference relational database, free, with no artificial limits.",
        ],
      },
      {
        quote:
          "A fixed stack is not dogma: it is what lets us ship in 7 days what others build in three months, without piling up the debt you have to repay later.",
      },
      { h2: 'Managed cloud hosting: zero ops, automatic scaling' },
      {
        p: "We deploy on managed cloud hosting (Vercel on the front end, Cloud Run on the back end): no server to administer, a deploy on every commit, automatic scaling with traffic. You do not pay a full-time DevOps engineer for a V1, and the infrastructure keeps up when the product takes off. Continuous deployment is in place from day one — the product is live on a real URL by day 2.",
      },
      { h2: 'Why these choices serve both speed AND maintainability' },
      {
        p: "Most teams treat the two as opposites: move fast and pile up debt, or build cleanly and take months. The Khufu stack refuses that trade-off. Every layer is mainstream, documented and typed, so it is fast to write today and easy to hand over tomorrow. That is what lets us ship a production-ready V1 in 7 days, for a fixed price of €15,000, with source code you own and any developer can take over — not a prototype to throw away in six months.",
      },
    ],
  },

  es: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Nuestro stack para entregar un SaaS en una semana',
    excerpt:
      "El stack de Khufu en detalle — Next.js, NestJS, Prisma, PostgreSQL, cloud gestionado — y por qué cada pieza sirve a la velocidad Y a la mantenibilidad.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Tecnología'],
    body: [
      {
        p: "Khufu entrega un SaaS en producción en 7 días gracias a un stack único y deliberadamente fijo: Next.js en el front, NestJS en el back, Prisma como ORM, PostgreSQL como base de datos, todo desplegado en un alojamiento cloud gestionado. Un solo lenguaje —TypeScript— desde el navegador hasta la base de datos. No es una moda: cada pieza se elige porque sirve a dos objetivos a la vez, la velocidad de entrega y la mantenibilidad a largo plazo. Aquí está el porqué.",
      },
      { h2: 'Un solo stack, un solo lenguaje, del front a la base de datos' },
      {
        p: "La primera decisión que ahorra una semana es no tener que elegir. Khufu usa el mismo stack en cada proyecto, con TypeScript en todas partes: un desarrollador pasa del front al back sin cambiar de lenguaje, de modelo mental ni de herramientas. Los tipos compartidos entre cliente y servidor eliminan toda una categoría de bugs: los que aparecen cuando el front y el back ya no coinciden en la forma de los datos.",
      },
      {
        ul: [
          "TypeScript estricto del navegador a la base de datos: un solo lenguaje que dominar, cero fricción de contexto.",
          "Un stack fijo: sin tiempo perdido reevaluando herramientas en cada proyecto.",
          "Patrones reutilizables de un producto a otro: auth, pagos y paneles ya están probados.",
        ],
      },
      { h2: 'Next.js: un front rápido, sin deuda oculta' },
      {
        p: "Next.js gestiona el renderizado, el routing, la API y el SEO en un solo framework. En la práctica, arrancamos un producto con autenticación, páginas renderizadas en servidor y un SEO limpio en horas, no en días. Y como es React estándar sobre una base muy documentada, el código sigue siendo legible y fácil de retomar por cualquier desarrollador, no un framework casero que solo tú entenderías.",
      },
      { h2: 'NestJS, Prisma y PostgreSQL: un back estructurado y tipado' },
      {
        p: "En el servidor, NestJS impone una arquitectura clara —un módulo por dominio de negocio— que evita el clásico plato de espaguetis de los MVP montados a las prisas. Prisma genera un cliente tipado a partir del esquema de la base: las consultas se verifican en compilación, las migraciones están versionadas, y PostgreSQL aporta una base relacional sólida que aguanta desde la V1 hasta decenas de miles de usuarios sin reescritura.",
      },
      {
        ul: [
          "NestJS: estructura impuesta, así que el código sigue siendo mantenible incluso tras seis meses de cambios.",
          "Prisma: esquema único, migraciones versionadas, consultas tipadas — muchos menos bugs de datos.",
          "PostgreSQL: la base relacional de referencia, gratuita, sin límites artificiales.",
        ],
      },
      {
        quote:
          "Un stack fijo no es un dogma: es lo que permite entregar en 7 días lo que otros construyen en tres meses, sin acumular la deuda que habrá que pagar después.",
      },
      { h2: 'Alojamiento cloud gestionado: cero ops, escalado automático' },
      {
        p: "Desplegamos en un alojamiento cloud gestionado (Vercel en el front, Cloud Run en el back): sin servidor que administrar, un despliegue en cada commit, escalado automático según el tráfico. No pagas a un ingeniero DevOps a tiempo completo para una V1, y la infraestructura acompaña cuando el producto despega. El despliegue continuo está listo desde el primer día: el producto está en línea en una URL real el día 2.",
      },
      { h2: 'Por qué estas decisiones sirven a la velocidad Y a la mantenibilidad' },
      {
        p: "La mayoría de los equipos las tratan como opuestas: ir rápido acumulando deuda, o construir limpio tardando meses. El stack de Khufu rechaza ese dilema. Cada pieza es mainstream, documentada y tipada, así que es rápida de escribir hoy y fácil de retomar mañana. Eso es lo que permite entregar una V1 lista para producción en 7 días, por un precio fijo de 15 000 €, con un código fuente que es tuyo y que cualquier desarrollador puede retomar, no un prototipo para tirar en seis meses.",
      },
    ],
  },

  de: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Unser Stack, um ein SaaS in einer Woche zu liefern',
    excerpt:
      "Der Khufu-Stack im Detail — Next.js, NestJS, Prisma, PostgreSQL, Managed Cloud — und warum jeder Baustein Tempo UND Wartbarkeit dient.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Technik'],
    body: [
      {
        p: "Khufu bringt ein SaaS in 7 Tagen in Produktion — dank eines einzigen, bewusst festgelegten Stacks: Next.js im Frontend, NestJS im Backend, Prisma als ORM, PostgreSQL als Datenbank, alles auf Managed-Cloud-Hosting deployt. Eine Sprache — TypeScript — vom Browser bis zur Datenbank. Das ist kein Trend: Jeder Baustein wird gewählt, weil er zwei Ziele zugleich erfüllt, Liefergeschwindigkeit und langfristige Wartbarkeit. Hier ist das Warum.",
      },
      { h2: 'Ein Stack, eine Sprache, vom Frontend bis zur Datenbank' },
      {
        p: "Die erste Entscheidung, die eine Woche spart, ist, nicht wählen zu müssen. Khufu nutzt auf jedem Projekt denselben Stack, mit TypeScript überall: Ein Entwickler wechselt vom Frontend ins Backend, ohne Sprache, Denkmodell oder Werkzeuge zu wechseln. Zwischen Client und Server geteilte Typen beseitigen eine ganze Klasse von Bugs — jene, die auftreten, wenn Frontend und Backend sich über die Form der Daten nicht mehr einig sind.",
      },
      {
        ul: [
          "Striktes TypeScript vom Browser bis zur Datenbank: eine Sprache zu beherrschen, null Kontextreibung.",
          "Ein fester Stack: keine Zeit verschwendet, um bei jedem Projekt Werkzeuge neu zu bewerten.",
          "Wiederverwendbare Muster von Produkt zu Produkt — Auth, Zahlung und Dashboards sind bereits erprobt.",
        ],
      },
      { h2: 'Next.js: ein schnelles Frontend ohne versteckte Schulden' },
      {
        p: "Next.js übernimmt Rendering, Routing, API und SEO in einem einzigen Framework. Konkret starten wir ein Produkt mit Authentifizierung, servergerenderten Seiten und sauberem SEO in Stunden, nicht in Tagen. Und weil es Standard-React auf einer stark dokumentierten Basis ist, bleibt der Code lesbar und für jeden Entwickler leicht zu übernehmen — kein Eigenbau-Framework, das nur Sie verstehen würden.",
      },
      { h2: 'NestJS, Prisma und PostgreSQL: ein strukturiertes, typisiertes Backend' },
      {
        p: "Auf dem Server erzwingt NestJS eine klare Architektur — ein Modul pro Fachdomäne — und vermeidet so den klassischen Spaghetti-Code hastig zusammengebauter MVPs. Prisma erzeugt einen typisierten Client aus dem Datenbankschema: Abfragen werden zur Compile-Zeit geprüft, Migrationen sind versioniert, und PostgreSQL liefert eine solide relationale Datenbank, die von der V1 bis zu Zehntausenden Nutzern trägt, ohne Neuschreiben.",
      },
      {
        ul: [
          "NestJS: erzwungene Struktur, damit der Code auch nach sechs Monaten Änderungen wartbar bleibt.",
          "Prisma: ein Schema, versionierte Migrationen, typisierte Abfragen — weit weniger Datenbugs.",
          "PostgreSQL: die relationale Referenzdatenbank, kostenlos, ohne künstliche Grenzen.",
        ],
      },
      {
        quote:
          "Ein fester Stack ist kein Dogma: Er ist das, was uns in 7 Tagen liefern lässt, wofür andere drei Monate brauchen — ohne die Schulden anzuhäufen, die man später zurückzahlen muss.",
      },
      { h2: 'Managed-Cloud-Hosting: null Ops, automatische Skalierung' },
      {
        p: "Wir deployen auf Managed-Cloud-Hosting (Vercel im Frontend, Cloud Run im Backend): kein Server zu administrieren, ein Deploy bei jedem Commit, automatische Skalierung mit dem Traffic. Sie bezahlen keinen Vollzeit-DevOps-Ingenieur für eine V1, und die Infrastruktur zieht mit, wenn das Produkt abhebt. Continuous Deployment steht ab dem ersten Tag — das Produkt ist an Tag 2 unter einer echten URL live.",
      },
      { h2: 'Warum diese Entscheidungen Tempo UND Wartbarkeit dienen' },
      {
        p: "Die meisten Teams behandeln beides als Gegensatz: schnell sein und Schulden anhäufen, oder sauber bauen und Monate brauchen. Der Khufu-Stack lehnt diesen Kompromiss ab. Jeder Baustein ist Mainstream, dokumentiert und typisiert, also heute schnell zu schreiben und morgen leicht zu übergeben. Das lässt uns eine produktionsreife V1 in 7 Tagen liefern, zum Festpreis von 15.000 €, mit Quellcode, der Ihnen gehört und den jeder Entwickler übernehmen kann — kein Prototyp zum Wegwerfen in sechs Monaten.",
      },
    ],
  },

  it: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Il nostro stack per consegnare un SaaS in una settimana',
    excerpt:
      "Lo stack di Khufu in dettaglio — Next.js, NestJS, Prisma, PostgreSQL, cloud gestito — e perché ogni mattone serve alla velocità E alla manutenibilità.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Tecnologia'],
    body: [
      {
        p: "Khufu consegna un SaaS in produzione in 7 giorni grazie a uno stack unico e deliberatamente fisso: Next.js sul front, NestJS sul back, Prisma come ORM, PostgreSQL come database, il tutto distribuito su hosting cloud gestito. Un solo linguaggio — TypeScript — dal browser fino al database. Non è una moda: ogni mattone è scelto perché serve due obiettivi allo stesso tempo, la velocità di consegna e la manutenibilità nel lungo periodo. Ecco perché.",
      },
      { h2: 'Un solo stack, un solo linguaggio, dal front al database' },
      {
        p: "La prima decisione che fa guadagnare una settimana è non dover scegliere. Khufu usa lo stesso stack su ogni progetto, con TypeScript ovunque: uno sviluppatore passa dal front al back senza cambiare linguaggio, modello mentale o strumenti. I tipi condivisi tra client e server eliminano un'intera categoria di bug: quelli che compaiono quando front e back non concordano più sulla forma dei dati.",
      },
      {
        ul: [
          "TypeScript rigoroso dal browser al database: un solo linguaggio da padroneggiare, zero attrito di contesto.",
          "Uno stack fisso: nessun tempo perso a rivalutare gli strumenti a ogni progetto.",
          "Pattern riutilizzabili da un prodotto all'altro: auth, pagamenti e dashboard sono già collaudati.",
        ],
      },
      { h2: 'Next.js: un front veloce, senza debito nascosto' },
      {
        p: "Next.js gestisce rendering, routing, API e SEO in un unico framework. In pratica, avviamo un prodotto con autenticazione, pagine renderizzate lato server e SEO pulito in ore, non in giorni. E poiché è React standard su una base molto documentata, il codice resta leggibile e facile da riprendere per qualsiasi sviluppatore, non un framework fatto in casa che solo tu capiresti.",
      },
      { h2: 'NestJS, Prisma e PostgreSQL: un back strutturato e tipizzato' },
      {
        p: "Sul server, NestJS impone un'architettura chiara — un modulo per dominio di business — che evita il classico piatto di spaghetti degli MVP montati in fretta. Prisma genera un client tipizzato dallo schema del database: le query sono verificate in compilazione, le migrazioni sono versionate, e PostgreSQL offre un database relazionale solido che regge dalla V1 fino a decine di migliaia di utenti, senza riscrittura.",
      },
      {
        ul: [
          "NestJS: struttura imposta, quindi codice manutenibile anche dopo sei mesi di evoluzioni.",
          "Prisma: schema unico, migrazioni versionate, query tipizzate — molti meno bug sui dati.",
          "PostgreSQL: il database relazionale di riferimento, gratuito, senza limiti artificiali.",
        ],
      },
      {
        quote:
          "Uno stack fisso non è un dogma: è ciò che permette di consegnare in 7 giorni quello che altri costruiscono in tre mesi, senza accumulare il debito da ripagare più tardi.",
      },
      { h2: 'Hosting cloud gestito: zero ops, scaling automatico' },
      {
        p: "Distribuiamo su hosting cloud gestito (Vercel sul front, Cloud Run sul back): nessun server da amministrare, un deploy a ogni commit, scaling automatico in base al traffico. Non paghi un ingegnere DevOps a tempo pieno per una V1, e l'infrastruttura tiene il passo quando il prodotto decolla. Il deployment continuo è pronto dal primo giorno: il prodotto è online su un URL reale al giorno 2.",
      },
      { h2: 'Perché queste scelte servono alla velocità E alla manutenibilità' },
      {
        p: "La maggior parte dei team le tratta come opposte: andare veloci accumulando debito, o costruire pulito impiegando mesi. Lo stack di Khufu rifiuta questo compromesso. Ogni mattone è mainstream, documentato e tipizzato, quindi veloce da scrivere oggi e facile da riprendere domani. È ciò che permette di consegnare una V1 pronta per la produzione in 7 giorni, a un prezzo fisso di 15.000 €, con un codice sorgente che è tuo e che qualsiasi sviluppatore può riprendere, non un prototipo da buttare tra sei mesi.",
      },
    ],
  },

  pt: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'A nossa stack para entregar um SaaS numa semana',
    excerpt:
      "A stack da Khufu em detalhe — Next.js, NestJS, Prisma, PostgreSQL, cloud gerido — e porque cada camada serve a velocidade E a manutenibilidade.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Tecnologia'],
    body: [
      {
        p: "A Khufu entrega um SaaS em produção em 7 dias graças a uma stack única e deliberadamente fixa: Next.js no front, NestJS no back, Prisma como ORM, PostgreSQL como base de dados, tudo implantado num alojamento cloud gerido. Uma só linguagem — TypeScript — do navegador até à base de dados. Não é moda: cada camada é escolhida porque serve dois objetivos ao mesmo tempo, a velocidade de entrega e a manutenibilidade a longo prazo. Eis porquê.",
      },
      { h2: 'Uma só stack, uma só linguagem, do front à base de dados' },
      {
        p: "A primeira decisão que poupa uma semana é não ter de escolher. A Khufu usa a mesma stack em cada projeto, com TypeScript em todo o lado: um programador passa do front para o back sem mudar de linguagem, de modelo mental ou de ferramentas. Os tipos partilhados entre cliente e servidor eliminam toda uma categoria de bugs: os que surgem quando o front e o back deixam de concordar sobre a forma dos dados.",
      },
      {
        ul: [
          "TypeScript estrito do navegador à base de dados: uma só linguagem a dominar, zero atrito de contexto.",
          "Uma stack fixa: sem tempo perdido a reavaliar ferramentas em cada projeto.",
          "Padrões reutilizáveis de um produto para outro: auth, pagamentos e dashboards já estão testados.",
        ],
      },
      { h2: 'Next.js: um front rápido, sem dívida escondida' },
      {
        p: "O Next.js trata do rendering, do routing, da API e do SEO num único framework. Na prática, arrancamos um produto com autenticação, páginas renderizadas no servidor e SEO limpo em horas, não em dias. E como é React padrão sobre uma base muito documentada, o código continua legível e fácil de retomar por qualquer programador, não um framework caseiro que só tu entenderias.",
      },
      { h2: 'NestJS, Prisma e PostgreSQL: um back estruturado e tipado' },
      {
        p: "No servidor, o NestJS impõe uma arquitetura clara — um módulo por domínio de negócio — que evita o clássico prato de esparguete dos MVP montados à pressa. O Prisma gera um cliente tipado a partir do esquema da base: as queries são verificadas em compilação, as migrações são versionadas, e o PostgreSQL traz uma base relacional sólida que aguenta da V1 até dezenas de milhares de utilizadores, sem reescrita.",
      },
      {
        ul: [
          "NestJS: estrutura imposta, logo código manutenível mesmo após seis meses de evoluções.",
          "Prisma: esquema único, migrações versionadas, queries tipadas — muito menos bugs de dados.",
          "PostgreSQL: a base relacional de referência, gratuita, sem limites artificiais.",
        ],
      },
      {
        quote:
          "Uma stack fixa não é dogma: é o que permite entregar em 7 dias aquilo que outros constroem em três meses, sem acumular a dívida que se paga mais tarde.",
      },
      { h2: 'Alojamento cloud gerido: zero ops, escalonamento automático' },
      {
        p: "Implantamos num alojamento cloud gerido (Vercel no front, Cloud Run no back): sem servidor para administrar, um deploy a cada commit, escalonamento automático conforme o tráfego. Não pagas um engenheiro DevOps a tempo inteiro para uma V1, e a infraestrutura acompanha quando o produto descola. O deployment contínuo está pronto desde o primeiro dia: o produto está online num URL real ao dia 2.",
      },
      { h2: 'Porque estas escolhas servem a velocidade E a manutenibilidade' },
      {
        p: "A maioria das equipas trata-as como opostas: ir rápido acumulando dívida, ou construir limpo demorando meses. A stack da Khufu recusa esse compromisso. Cada camada é mainstream, documentada e tipada, por isso rápida de escrever hoje e fácil de retomar amanhã. É o que permite entregar uma V1 pronta para produção em 7 dias, por um preço fixo de 15 000 €, com um código-fonte que é teu e que qualquer programador pode retomar, não um protótipo para deitar fora em seis meses.",
      },
    ],
  },

  nl: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Onze stack om een SaaS in één week te leveren',
    excerpt:
      "De stack van Khufu in detail — Next.js, NestJS, Prisma, PostgreSQL, managed cloud — en waarom elke bouwsteen zowel snelheid ALS onderhoudbaarheid dient.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Techniek'],
    body: [
      {
        p: "Khufu levert een SaaS in 7 dagen in productie dankzij één bewust vaste stack: Next.js aan de voorkant, NestJS aan de achterkant, Prisma als ORM, PostgreSQL als database, alles uitgerold op managed cloudhosting. Eén taal — TypeScript — van de browser tot aan de database. Dit is geen trend: elke bouwsteen wordt gekozen omdat hij twee doelen tegelijk dient, leversnelheid en onderhoudbaarheid op lange termijn. Hier is waarom.",
      },
      { h2: 'Eén stack, één taal, van front-end tot database' },
      {
        p: "De eerste beslissing die een week bespaart, is niet hoeven kiezen. Khufu gebruikt op elk project dezelfde stack, met overal TypeScript: een developer schakelt van front-end naar back-end zonder van taal, mentaal model of tooling te wisselen. Types die client en server delen, wissen een hele categorie bugs uit — die welke opduiken wanneer front-end en back-end het niet meer eens zijn over de vorm van de data.",
      },
      {
        ul: [
          "Strikte TypeScript van de browser tot de database: één taal om te beheersen, nul contextwrijving.",
          "Een vaste stack: geen tijd verspild aan het herevalueren van tools bij elk project.",
          "Herbruikbare patronen van het ene product naar het andere — auth, betaling en dashboards zijn al beproefd.",
        ],
      },
      { h2: 'Next.js: een snelle front-end zonder verborgen schuld' },
      {
        p: "Next.js regelt rendering, routing, API en SEO in één framework. In de praktijk starten we een product met authenticatie, server-gerenderde pagina's en nette SEO in uren, niet in dagen. En omdat het standaard React is op een sterk gedocumenteerde basis, blijft de code leesbaar en makkelijk over te nemen door elke developer — geen zelfgebouwd framework dat alleen jij zou begrijpen.",
      },
      { h2: 'NestJS, Prisma en PostgreSQL: een gestructureerde, getypeerde back-end' },
      {
        p: "Op de server dwingt NestJS een heldere architectuur af — één module per businessdomein — die de klassieke spaghetti van haastig in elkaar gezette MVP's vermijdt. Prisma genereert een getypeerde client vanuit het databaseschema: queries worden bij compilatie gecontroleerd, migraties zijn geversioneerd, en PostgreSQL levert een solide relationele database die van de V1 tot tienduizenden gebruikers meegaat, zonder herschrijving.",
      },
      {
        ul: [
          "NestJS: afgedwongen structuur, dus code die onderhoudbaar blijft, zelfs na zes maanden aanpassingen.",
          "Prisma: één schema, geversioneerde migraties, getypeerde queries — veel minder databugs.",
          "PostgreSQL: de relationele referentiedatabase, gratis, zonder kunstmatige limieten.",
        ],
      },
      {
        quote:
          "Een vaste stack is geen dogma: het is wat ons in 7 dagen laat leveren wat anderen in drie maanden bouwen, zonder de schuld op te stapelen die je later moet afbetalen.",
      },
      { h2: 'Managed cloudhosting: nul ops, automatisch schalen' },
      {
        p: "We rollen uit op managed cloudhosting (Vercel aan de front-end, Cloud Run aan de back-end): geen server om te beheren, een deploy bij elke commit, automatisch schalen met het verkeer. Je betaalt geen fulltime DevOps-engineer voor een V1, en de infrastructuur houdt bij wanneer het product doorbreekt. Continue deployment staat vanaf dag één klaar — het product is live op een echte URL op dag 2.",
      },
      { h2: 'Waarom deze keuzes zowel snelheid ALS onderhoudbaarheid dienen' },
      {
        p: "De meeste teams behandelen de twee als tegenpolen: snel gaan en schuld opstapelen, of netjes bouwen en er maanden over doen. De stack van Khufu weigert die afweging. Elke bouwsteen is mainstream, gedocumenteerd en getypeerd, dus vandaag snel te schrijven en morgen makkelijk over te dragen. Dat is wat ons een productieklare V1 in 7 dagen laat leveren, voor een vaste prijs van € 15.000, met broncode die van jou is en die elke developer kan overnemen — geen prototype om over zes maanden weg te gooien.",
      },
    ],
  },

  ar: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'الحزمة التقنية التي نستخدمها لتسليم SaaS في أسبوع واحد',
    excerpt:
      "حزمة Khufu التقنية بالتفصيل — Next.js وNestJS وPrisma وPostgreSQL واستضافة سحابية مُدارة — ولماذا تخدم كل طبقة السرعة وقابلية الصيانة معًا.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'التقنية'],
    body: [
      {
        p: "تُسلّم Khufu منتج SaaS إلى الإنتاج خلال 7 أيام بفضل حزمة تقنية واحدة ثابتة عن قصد: Next.js في الواجهة الأمامية، وNestJS في الخلفية، وPrisma كـ ORM، وPostgreSQL كقاعدة بيانات، وكل ذلك منشور على استضافة سحابية مُدارة. لغة واحدة — TypeScript — من المتصفح حتى قاعدة البيانات. هذا ليس موضة عابرة: كل طبقة تُختار لأنها تخدم هدفين في آنٍ واحد، سرعة التسليم وقابلية الصيانة على المدى الطويل. وإليك السبب.",
      },
      { h2: 'حزمة واحدة، لغة واحدة، من الواجهة حتى قاعدة البيانات' },
      {
        p: "أول قرار يوفّر أسبوعًا هو ألا تضطر إلى الاختيار. تستخدم Khufu الحزمة نفسها في كل مشروع، مع TypeScript في كل مكان: ينتقل المطوّر من الواجهة الأمامية إلى الخلفية دون تغيير اللغة أو النموذج الذهني أو الأدوات. الأنواع المشتركة بين العميل والخادم تقضي على فئة كاملة من الأخطاء — تلك التي تظهر حين لا يتفق الواجهة والخلفية على شكل البيانات.",
      },
      {
        ul: [
          "TypeScript صارم من المتصفح إلى قاعدة البيانات: لغة واحدة لإتقانها، ولا احتكاك في تبديل السياق.",
          "حزمة ثابتة: لا وقت مهدور في إعادة تقييم الأدوات في كل مشروع.",
          "أنماط قابلة لإعادة الاستخدام من منتج إلى آخر — المصادقة والدفع ولوحات التحكم مُجرَّبة مسبقًا.",
        ],
      },
      { h2: 'Next.js: واجهة أمامية سريعة دون ديون خفية' },
      {
        p: "يتولى Next.js العرض والتوجيه وواجهة الـ API وتحسين محركات البحث في إطار عمل واحد. عمليًا، نبدأ منتجًا بمصادقة وصفحات مُقدَّمة من الخادم وتحسين نظيف لمحركات البحث في ساعات، لا في أيام. ولأنه React قياسي على أساس موثَّق بغزارة، يبقى الكود مقروءًا وسهل الاستلام من أي مطوّر — لا إطار عمل منزلي لن يفهمه سواك.",
      },
      { h2: 'NestJS وPrisma وPostgreSQL: خلفية مُهيكلة ومُنمَّطة' },
      {
        p: "على الخادم، يفرض NestJS بنية واضحة — وحدة لكل مجال عمل — تتجنّب طبق السباغيتي المعتاد في منتجات MVP المُجمَّعة على عجل. يولّد Prisma عميلًا مُنمَّطًا من مخطط قاعدة البيانات: تُتحقَّق الاستعلامات وقت التصريف، وتكون عمليات الترحيل مُؤرشَفة بالإصدارات، ويوفّر PostgreSQL قاعدة علائقية متينة تتحمّل من الـ V1 حتى عشرات الآلاف من المستخدمين دون إعادة كتابة.",
      },
      {
        ul: [
          "NestJS: بنية مفروضة، فيبقى الكود قابلًا للصيانة حتى بعد ستة أشهر من التطويرات.",
          "Prisma: مخطط واحد، وعمليات ترحيل مُؤرشَفة، واستعلامات مُنمَّطة — أخطاء بيانات أقل بكثير.",
          "PostgreSQL: قاعدة البيانات العلائقية المرجعية، مجانية، دون حدود مصطنعة.",
        ],
      },
      {
        quote:
          "الحزمة الثابتة ليست عقيدة: إنها ما يتيح لنا أن نسلّم في 7 أيام ما يبنيه الآخرون في ثلاثة أشهر، دون تكديس الديون التي يجب سدادها لاحقًا.",
      },
      { h2: 'استضافة سحابية مُدارة: صفر عمليات تشغيل، توسّع تلقائي' },
      {
        p: "ننشر على استضافة سحابية مُدارة (Vercel للواجهة الأمامية، Cloud Run للخلفية): لا خادم لإدارته، ونشر مع كل commit، وتوسّع تلقائي حسب حركة المرور. لا تدفع لمهندس DevOps بدوام كامل من أجل V1، والبنية التحتية تواكب حين ينطلق المنتج. النشر المستمر جاهز منذ اليوم الأول — المنتج متاح على رابط حقيقي في اليوم الثاني.",
      },
      { h2: 'لماذا تخدم هذه الخيارات السرعة وقابلية الصيانة معًا' },
      {
        p: "تتعامل معظم الفرق مع الأمرين كنقيضين: السرعة مع تكديس الديون، أو البناء النظيف الذي يستغرق أشهرًا. حزمة Khufu ترفض هذه المفاضلة. كل طبقة رائجة وموثَّقة ومُنمَّطة، فهي سريعة الكتابة اليوم وسهلة التسليم غدًا. هذا ما يتيح لنا تسليم V1 جاهزة للإنتاج في 7 أيام، بسعر ثابت قدره 15,000 €، مع كود مصدري تملكه ويمكن لأي مطوّر استلامه — لا نموذجًا أوليًا يُرمى بعد ستة أشهر.",
      },
    ],
  },

  pl: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: 'Nasz stack do dostarczenia SaaS w tydzień',
    excerpt:
      "Stack Khufu w szczegółach — Next.js, NestJS, Prisma, PostgreSQL, zarządzana chmura — i dlaczego każdy element służy zarówno szybkości, JAK i utrzymywalności.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Technologia'],
    body: [
      {
        p: "Khufu dostarcza SaaS na produkcję w 7 dni dzięki jednemu, celowo ustalonemu stackowi: Next.js na froncie, NestJS na backendzie, Prisma jako ORM, PostgreSQL jako baza danych, wszystko wdrożone na zarządzanym hostingu w chmurze. Jeden język — TypeScript — od przeglądarki aż po bazę danych. To nie moda: każdy element jest wybrany, bo służy dwóm celom naraz, szybkości dostarczenia i utrzymywalności w długim okresie. Oto dlaczego.",
      },
      { h2: 'Jeden stack, jeden język, od frontu po bazę danych' },
      {
        p: "Pierwsza decyzja, która oszczędza tydzień, to nie musieć wybierać. Khufu używa tego samego stacku w każdym projekcie, z TypeScriptem wszędzie: programista przechodzi z frontu na backend bez zmiany języka, modelu myślowego czy narzędzi. Typy współdzielone między klientem a serwerem eliminują całą kategorię błędów — te, które pojawiają się, gdy front i backend nie zgadzają się już co do kształtu danych.",
      },
      {
        ul: [
          "Ścisły TypeScript od przeglądarki po bazę danych: jeden język do opanowania, zero tarcia przy zmianie kontekstu.",
          "Ustalony stack: żadnego czasu traconego na ponowną ocenę narzędzi w każdym projekcie.",
          "Wielokrotnie używalne wzorce między produktami — auth, płatności i dashboardy są już sprawdzone.",
        ],
      },
      { h2: 'Next.js: szybki front bez ukrytego długu' },
      {
        p: "Next.js obsługuje renderowanie, routing, API i SEO w jednym frameworku. W praktyce startujemy produkt z uwierzytelnianiem, stronami renderowanymi po stronie serwera i czystym SEO w godziny, nie w dni. A ponieważ to standardowy React na mocno udokumentowanej bazie, kod pozostaje czytelny i łatwy do przejęcia przez każdego programistę — a nie domowy framework, który rozumiałbyś tylko ty.",
      },
      { h2: 'NestJS, Prisma i PostgreSQL: ustrukturyzowany, typowany backend' },
      {
        p: "Na serwerze NestJS wymusza jasną architekturę — jeden moduł na domenę biznesową — co unika klasycznego talerza spaghetti w MVP sklejanych na szybko. Prisma generuje typowanego klienta ze schematu bazy: zapytania są sprawdzane podczas kompilacji, migracje są wersjonowane, a PostgreSQL daje solidną relacyjną bazę, która wytrzymuje od V1 aż po dziesiątki tysięcy użytkowników, bez przepisywania.",
      },
      {
        ul: [
          "NestJS: wymuszona struktura, więc kod pozostaje utrzymywalny nawet po sześciu miesiącach zmian.",
          "Prisma: jeden schemat, wersjonowane migracje, typowane zapytania — dużo mniej błędów danych.",
          "PostgreSQL: referencyjna baza relacyjna, darmowa, bez sztucznych limitów.",
        ],
      },
      {
        quote:
          "Ustalony stack to nie dogmat: to on pozwala dostarczyć w 7 dni to, co inni budują trzy miesiące, bez piętrzenia długu, który trzeba później spłacić.",
      },
      { h2: 'Zarządzany hosting w chmurze: zero ops, automatyczne skalowanie' },
      {
        p: "Wdrażamy na zarządzanym hostingu w chmurze (Vercel na froncie, Cloud Run na backendzie): brak serwera do administrowania, deploy przy każdym commicie, automatyczne skalowanie wraz z ruchem. Nie płacisz inżynierowi DevOps na pełen etat za V1, a infrastruktura nadąża, gdy produkt wystrzeli. Ciągłe wdrażanie jest gotowe od pierwszego dnia — produkt jest online pod prawdziwym URL-em w dniu 2.",
      },
      { h2: 'Dlaczego te wybory służą zarówno szybkości, JAK i utrzymywalności' },
      {
        p: "Większość zespołów traktuje je jako przeciwieństwa: iść szybko i piętrzyć dług, albo budować czysto i tracić miesiące. Stack Khufu odrzuca ten kompromis. Każdy element jest mainstreamowy, udokumentowany i typowany, więc szybki do napisania dziś i łatwy do przekazania jutro. To właśnie pozwala dostarczyć gotową na produkcję V1 w 7 dni, za stałą cenę 15 000 €, z kodem źródłowym, który należy do ciebie i który każdy programista może przejąć — a nie prototyp do wyrzucenia za sześć miesięcy.",
      },
    ],
  },

  tr: {
    slug: 'notre-stack-pour-livrer-un-saas-en-une-semaine',
    title: "Bir SaaS'ı bir haftada teslim etmek için kullandığımız stack",
    excerpt:
      "Khufu stack'i ayrıntılarıyla — Next.js, NestJS, Prisma, PostgreSQL, yönetilen bulut — ve her katmanın neden hem hıza HEM de sürdürülebilirliğe hizmet ettiği.",
    date: '2026-01-21',
    readingMinutes: 6,
    tags: ['Stack', 'Teknoloji'],
    body: [
      {
        p: "Khufu, bir SaaS'ı 7 günde canlıya alır; bunu tek ve bilinçli olarak sabitlenmiş bir stack sayesinde yapar: ön yüzde Next.js, arka yüzde NestJS, ORM olarak Prisma, veritabanı olarak PostgreSQL ve hepsi yönetilen bir bulut barındırmada dağıtılır. Tek bir dil — TypeScript — tarayıcıdan veritabanına kadar. Bu bir moda değil: her katman, aynı anda iki hedefe hizmet ettiği için seçilir, teslim hızı ve uzun vadeli sürdürülebilirlik. İşte nedeni.",
      },
      { h2: "Tek stack, tek dil, ön yüzden veritabanına" },
      {
        p: "Bir hafta kazandıran ilk karar, seçim yapmak zorunda olmamaktır. Khufu her projede aynı stack'i, her yerde TypeScript ile kullanır: bir geliştirici, dil, zihinsel model veya araç değiştirmeden ön yüzden arka yüze geçer. İstemci ile sunucu arasında paylaşılan tipler, bir hata sınıfının tamamını ortadan kaldırır — ön yüz ile arka yüz verinin biçiminde artık uyuşmadığında ortaya çıkanları.",
      },
      {
        ul: [
          "Tarayıcıdan veritabanına katı TypeScript: hakim olunacak tek dil, sıfır bağlam değiştirme sürtünmesi.",
          "Sabit bir stack: her projede araçları yeniden değerlendirmekle kaybedilen zaman yok.",
          "Üründen ürüne yeniden kullanılabilir kalıplar — auth, ödeme ve panolar zaten test edilmiş durumda.",
        ],
      },
      { h2: "Next.js: gizli borcu olmayan hızlı bir ön yüz" },
      {
        p: "Next.js, render'ı, yönlendirmeyi, API'yi ve SEO'yu tek bir framework içinde yönetir. Pratikte, kimlik doğrulama, sunucuda render edilen sayfalar ve temiz SEO ile bir ürünü günler değil saatler içinde başlatırız. Ve son derece iyi belgelenmiş bir temel üzerinde standart React olduğundan, kod okunabilir kalır ve herhangi bir geliştirici tarafından kolayca devralınır — yalnızca sizin anlayacağınız ev yapımı bir framework değil.",
      },
      { h2: "NestJS, Prisma ve PostgreSQL: yapılandırılmış, tiplendirilmiş bir arka yüz" },
      {
        p: "Sunucu tarafında NestJS, net bir mimari dayatır — her iş alanı için bir modül — ve aceleyle birleştirilmiş MVP'lerin klasik spagetti kodundan kaçınır. Prisma, veritabanı şemasından tiplendirilmiş bir istemci üretir: sorgular derleme zamanında denetlenir, migrasyonlar sürümlenir ve PostgreSQL, V1'den on binlerce kullanıcıya kadar yeniden yazmadan dayanan sağlam bir ilişkisel veritabanı sağlar.",
      },
      {
        ul: [
          "NestJS: dayatılan yapı, yani altı ay geliştirmeden sonra bile sürdürülebilir kod.",
          "Prisma: tek şema, sürümlenmiş migrasyonlar, tiplendirilmiş sorgular — çok daha az veri hatası.",
          "PostgreSQL: referans ilişkisel veritabanı, ücretsiz, yapay sınır yok.",
        ],
      },
      {
        quote:
          "Sabit bir stack bir dogma değildir: başkalarının üç ayda kurduğunu 7 günde teslim etmemizi sağlayan şeydir, sonra ödemek zorunda kalacağınız borcu biriktirmeden.",
      },
      { h2: "Yönetilen bulut barındırma: sıfır ops, otomatik ölçekleme" },
      {
        p: "Yönetilen bulut barındırmaya dağıtım yaparız (ön yüzde Vercel, arka yüzde Cloud Run): yönetilecek sunucu yok, her commit'te bir dağıtım, trafiğe göre otomatik ölçekleme. Bir V1 için tam zamanlı bir DevOps mühendisine ödeme yapmazsınız ve ürün patladığında altyapı buna ayak uydurur. Sürekli dağıtım ilk günden hazırdır — ürün 2. günde gerçek bir URL'de yayında olur.",
      },
      { h2: "Bu seçimler neden hem hıza HEM de sürdürülebilirliğe hizmet eder" },
      {
        p: "Çoğu ekip ikisini zıt kutuplar gibi ele alır: hızlı gidip borç biriktirmek ya da temiz kurup aylar harcamak. Khufu stack'i bu ödünleşmeyi reddeder. Her katman ana akım, belgelenmiş ve tiplendirilmiştir, dolayısıyla bugün hızlı yazılır ve yarın kolay devredilir. İşte bu, üretime hazır bir V1'i 7 günde, 15.000 € sabit fiyata teslim etmemizi sağlayan şeydir; size ait olan ve herhangi bir geliştiricinin devralabileceği bir kaynak koduyla — altı ay sonra çöpe atılacak bir prototiple değil.",
      },
    ],
  },
}
