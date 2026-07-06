import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Livrer une V1 en 7 jours : la méthode Khufu',
    excerpt:
      "Comment Khufu conçoit, développe et met en production un vrai SaaS en une semaine, à prix fixe. Le déroulé jour par jour, sans langue de bois.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Méthode', 'V1', 'AI-native'],
    body: [
      {
        p: "Livrer une V1 en production en 7 jours n'est pas un argument marketing : c'est une méthode reproductible. Khufu conçoit, développe et déploie un vrai produit — SaaS web ou app mobile — en une semaine calendaire, pour un forfait fixe de 15 000 €, code source livré. La vitesse ne vient pas d'un tour de magie mais de quatre leviers : un périmètre volontairement serré, une stack éprouvée, un développement assisté par IA à chaque étape, et un déploiement continu dès le premier jour. Voici le déroulé, jour par jour.",
      },
      { h2: 'Jour 0 — le cadrage' },
      {
        p: "Avant d'écrire la moindre ligne de code, on fige le périmètre exact de la V1 dans un document court : le problème résolu, les 3 à 5 parcours utilisateurs essentiels, et surtout ce qui est explicitement hors périmètre. Ce document devient le contrat. C'est la décision la plus importante de la semaine : chaque fonctionnalité qu'on retire est un jour qu'on gagne. Pas de dérive de périmètre en cours de route — les idées qui arrivent après le cadrage vont dans le backlog de la V2.",
      },
      { h2: 'Jours 1–2 — design produit et fondations' },
      {
        p: "Les deux premiers jours posent les bases sur lesquelles tout le reste s'appuie. On dessine les écrans clés directement en composants réutilisables, et on branche l'ossature technique.",
      },
      {
        ul: [
          "Design des parcours cœur, pensés en composants dès le départ pour éviter tout retravail.",
          "Mise en place de la stack : Next.js ou React Native/Expo côté front, NestJS, Prisma et PostgreSQL côté back.",
          "Authentification, base de données et infrastructure câblées et sécurisées.",
          "Le squelette du produit est déployé en production dès le soir du jour 2, sur une URL réelle.",
        ],
      },
      { h2: 'Jours 3–5 — développement des parcours cœur' },
      {
        p: "C'est le cœur de la semaine. On développe les fonctionnalités essentielles une à une, en déployant en continu : chaque soir, le produit est testable en ligne, sur des données réelles. Cette boucle courte élimine l'effet tunnel — vous voyez la V1 se construire en direct et vous pouvez réorienter une décision en heures, pas en semaines. Le développement assisté par IA abat le travail d'une petite équipe en une fraction du temps, sans sacrifier la qualité : le code reste typé en TypeScript strict, testé sur les parcours critiques et maintenable.",
      },
      {
        quote:
          "Périmètre serré, décisions rapides, déploiement continu : c'est cette combinaison, pas l'héroïsme, qui rend une semaine suffisante.",
      },
      { h2: 'Jours 6–7 — finitions, tests et mise en production' },
      {
        p: "Les deux derniers jours transforment un produit fonctionnel en produit livrable : tests des parcours critiques, corrections des derniers défauts, soin apporté aux détails d'interface, documentation et handover. Vendredi soir, votre V1 tourne en production, le code source vous appartient entièrement, et vous pouvez la mettre entre les mains de vos premiers utilisateurs.",
      },
      { h2: 'Pourquoi une semaine suffit' },
      {
        p: "Une semaine n'est pas un raccourci qui sacrifie la qualité : c'est ce que permet un périmètre discipliné combiné à des outils modernes. La plupart des projets ne prennent pas des mois parce qu'ils sont complexes, mais parce que le périmètre gonfle, que les décisions traînent et que le code est jeté puis réécrit. En supprimant ces trois sources de gaspillage, sept jours suffisent pour un produit propre, prêt pour la production, et prêt à évoluer — sans dette technique à rembourser plus tard.",
      },
    ],
  },
  en: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Shipping a V1 in 7 days: the Khufu method',
    excerpt:
      "How Khufu designs, builds and ships a real SaaS in one week, at a fixed price. The day-by-day breakdown, no fluff.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Method', 'V1', 'AI-native'],
    body: [
      {
        p: "Shipping a production V1 in 7 days is not a marketing claim: it is a repeatable method. Khufu designs, builds and deploys a real product — web SaaS or mobile app — in one calendar week, for a fixed price of €15,000, with source code handed over. The speed comes from four levers, not magic: a deliberately tight scope, a proven stack, AI-assisted development at every step, and continuous deployment from day one. Here is the day-by-day breakdown.",
      },
      { h2: 'Day 0 — scoping' },
      {
        p: "Before a single line of code, we lock the exact scope of the V1 in a short document: the problem solved, the 3 to 5 essential user journeys, and above all what is explicitly out of scope. That document becomes the contract. It is the most important decision of the week: every feature you cut is a day you gain. No scope creep along the way — ideas that surface after scoping go into the V2 backlog.",
      },
      { h2: 'Days 1–2 — product design and foundations' },
      {
        p: "The first two days lay the base everything else rests on. We design the key screens directly as reusable components, and wire up the technical backbone.",
      },
      {
        ul: [
          "Design of the core journeys, thought through as components from the start to avoid any rework.",
          "Stack setup: Next.js or React Native/Expo on the front, NestJS, Prisma and PostgreSQL on the back.",
          "Authentication, database and infrastructure wired and secured.",
          "The product skeleton is deployed to production by the evening of day 2, on a real URL.",
        ],
      },
      { h2: 'Days 3–5 — building the core journeys' },
      {
        p: "This is the heart of the week. We build the essential features one by one, deploying continuously: every evening, the product is testable online, on real data. This short loop kills the tunnel effect — you watch the V1 take shape live and can redirect a decision in hours, not weeks. AI-assisted development does the work of a small team in a fraction of the time, without sacrificing quality: the code stays strictly typed in TypeScript, tested on critical paths and maintainable.",
      },
      {
        quote:
          "Tight scope, fast decisions, continuous deployment: it is that combination, not heroics, that makes one week enough.",
      },
      { h2: 'Days 6–7 — polish, testing and go-live' },
      {
        p: "The last two days turn a working product into a shippable one: testing the critical paths, fixing the final defects, polishing interface details, documentation and handover. By Friday evening your V1 is running in production, the source code is entirely yours, and you can put it in the hands of your first users.",
      },
      { h2: 'Why one week is enough' },
      {
        p: "One week is not a shortcut that sacrifices quality: it is what a disciplined scope combined with modern tooling makes possible. Most projects do not take months because they are complex, but because scope balloons, decisions drag, and code is thrown away and rewritten. Remove those three sources of waste and seven days are enough for a clean, production-ready product that is ready to grow — with no technical debt to repay later.",
      },
    ],
  },
  es: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Entregar una V1 en 7 días: el método Khufu',
    excerpt:
      "Cómo Khufu diseña, desarrolla y pone en producción un SaaS real en una semana, a precio fijo. El desglose día a día, sin rodeos.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Método', 'V1', 'AI-native'],
    body: [
      {
        p: "Entregar una V1 en producción en 7 días no es un argumento de marketing: es un método repetible. Khufu diseña, desarrolla y despliega un producto real — SaaS web o app móvil — en una semana natural, por un precio fijo de 15 000 €, con el código fuente entregado. La velocidad no viene de la magia sino de cuatro palancas: un alcance deliberadamente ajustado, un stack probado, desarrollo asistido por IA en cada etapa y despliegue continuo desde el primer día. Este es el desglose, día a día.",
      },
      { h2: 'Día 0 — encuadre' },
      {
        p: "Antes de escribir una sola línea de código, fijamos el alcance exacto de la V1 en un documento breve: el problema que se resuelve, los 3 a 5 recorridos de usuario esenciales y, sobre todo, lo que queda explícitamente fuera de alcance. Ese documento se convierte en el contrato. Es la decisión más importante de la semana: cada función que quitas es un día que ganas. Sin desviaciones de alcance por el camino: las ideas que surgen después del encuadre van al backlog de la V2.",
      },
      { h2: 'Días 1–2 — diseño de producto y cimientos' },
      {
        p: "Los dos primeros días asientan la base sobre la que se apoya todo lo demás. Diseñamos las pantallas clave directamente como componentes reutilizables y conectamos la columna vertebral técnica.",
      },
      {
        ul: [
          "Diseño de los recorridos clave, pensados como componentes desde el inicio para evitar cualquier retrabajo.",
          "Montaje del stack: Next.js o React Native/Expo en el front, NestJS, Prisma y PostgreSQL en el back.",
          "Autenticación, base de datos e infraestructura conectadas y aseguradas.",
          "El esqueleto del producto se despliega en producción ya la noche del día 2, en una URL real.",
        ],
      },
      { h2: 'Días 3–5 — desarrollo de los recorridos clave' },
      {
        p: "Es el corazón de la semana. Desarrollamos las funciones esenciales una a una, desplegando de forma continua: cada noche el producto se puede probar en línea, con datos reales. Este bucle corto elimina el efecto túnel: ves la V1 tomar forma en directo y puedes reorientar una decisión en horas, no en semanas. El desarrollo asistido por IA hace el trabajo de un equipo pequeño en una fracción del tiempo, sin sacrificar la calidad: el código sigue tipado en TypeScript estricto, probado en los recorridos críticos y mantenible.",
      },
      {
        quote:
          "Alcance ajustado, decisiones rápidas, despliegue continuo: es esa combinación, no el heroísmo, lo que hace que una semana baste.",
      },
      { h2: 'Días 6–7 — acabados, pruebas y puesta en producción' },
      {
        p: "Los dos últimos días transforman un producto funcional en un producto entregable: pruebas de los recorridos críticos, corrección de los últimos defectos, cuidado de los detalles de interfaz, documentación y traspaso. El viernes por la noche tu V1 corre en producción, el código fuente es enteramente tuyo y puedes ponerlo en manos de tus primeros usuarios.",
      },
      { h2: 'Por qué una semana basta' },
      {
        p: "Una semana no es un atajo que sacrifica la calidad: es lo que permite un alcance disciplinado combinado con herramientas modernas. La mayoría de los proyectos no tardan meses porque sean complejos, sino porque el alcance se hincha, las decisiones se demoran y el código se tira y se reescribe. Elimina esas tres fuentes de desperdicio y siete días bastan para un producto limpio, listo para producción y listo para evolucionar, sin deuda técnica que pagar más tarde.",
      },
    ],
  },
  de: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Eine V1 in 7 Tagen liefern: die Khufu-Methode',
    excerpt:
      "Wie Khufu ein echtes SaaS in einer Woche zum Festpreis konzipiert, entwickelt und in Produktion bringt. Der Ablauf Tag für Tag, ohne Floskeln.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Methode', 'V1', 'AI-native'],
    body: [
      {
        p: "Eine Produktions-V1 in 7 Tagen zu liefern ist kein Marketingversprechen, sondern eine wiederholbare Methode. Khufu konzipiert, entwickelt und deployt ein echtes Produkt — Web-SaaS oder Mobile-App — in einer Kalenderwoche, zum Festpreis von 15.000 €, mit Übergabe des Quellcodes. Das Tempo entsteht nicht durch Magie, sondern durch vier Hebel: einen bewusst engen Scope, einen erprobten Stack, KI-gestützte Entwicklung in jedem Schritt und Continuous Deployment ab dem ersten Tag. Hier ist der Ablauf, Tag für Tag.",
      },
      { h2: 'Tag 0 — Scoping' },
      {
        p: "Vor der ersten Codezeile fixieren wir den genauen Scope der V1 in einem kurzen Dokument: das gelöste Problem, die 3 bis 5 wesentlichen User-Journeys und vor allem, was ausdrücklich außerhalb des Scopes liegt. Dieses Dokument wird zum Vertrag. Es ist die wichtigste Entscheidung der Woche: Jede Funktion, die Sie streichen, ist ein gewonnener Tag. Kein Scope Creep unterwegs — Ideen, die nach dem Scoping auftauchen, wandern in das V2-Backlog.",
      },
      { h2: 'Tage 1–2 — Produktdesign und Fundament' },
      {
        p: "Die ersten beiden Tage legen die Basis, auf der alles Weitere ruht. Wir gestalten die Kernscreens direkt als wiederverwendbare Komponenten und verdrahten das technische Rückgrat.",
      },
      {
        ul: [
          "Design der Kern-Journeys, von Anfang an als Komponenten gedacht, um jedes Nacharbeiten zu vermeiden.",
          "Aufbau des Stacks: Next.js oder React Native/Expo im Frontend, NestJS, Prisma und PostgreSQL im Backend.",
          "Authentifizierung, Datenbank und Infrastruktur verdrahtet und abgesichert.",
          "Das Produktgerüst wird bereits am Abend von Tag 2 in Produktion deployt, auf einer echten URL.",
        ],
      },
      { h2: 'Tage 3–5 — Entwicklung der Kern-Journeys' },
      {
        p: "Das ist das Herzstück der Woche. Wir entwickeln die wesentlichen Funktionen eine nach der anderen und deployen kontinuierlich: Jeden Abend ist das Produkt online testbar, mit echten Daten. Diese kurze Schleife tötet den Tunneleffekt — Sie sehen die V1 live entstehen und können eine Entscheidung in Stunden statt Wochen umlenken. KI-gestützte Entwicklung leistet die Arbeit eines kleinen Teams in einem Bruchteil der Zeit, ohne die Qualität zu opfern: Der Code bleibt strikt in TypeScript typisiert, auf kritischen Pfaden getestet und wartbar.",
      },
      {
        quote:
          "Enger Scope, schnelle Entscheidungen, Continuous Deployment: Diese Kombination, nicht Heldentum, macht eine Woche ausreichend.",
      },
      { h2: 'Tage 6–7 — Feinschliff, Tests und Go-live' },
      {
        p: "Die letzten beiden Tage machen aus einem funktionierenden Produkt ein auslieferbares: Tests der kritischen Pfade, Behebung der letzten Mängel, Feinschliff der Interface-Details, Dokumentation und Handover. Am Freitagabend läuft Ihre V1 in Produktion, der Quellcode gehört ganz Ihnen, und Sie können sie Ihren ersten Nutzern in die Hand geben.",
      },
      { h2: 'Warum eine Woche genügt' },
      {
        p: "Eine Woche ist keine Abkürzung, die Qualität opfert: Sie ist das, was ein disziplinierter Scope kombiniert mit modernem Tooling ermöglicht. Die meisten Projekte dauern nicht Monate, weil sie komplex sind, sondern weil der Scope aufbläht, Entscheidungen sich hinziehen und Code weggeworfen und neu geschrieben wird. Beseitigt man diese drei Quellen der Verschwendung, genügen sieben Tage für ein sauberes, produktionsreifes Produkt, das bereit ist zu wachsen — ohne technische Schulden, die später zu begleichen sind.",
      },
    ],
  },
  it: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Consegnare una V1 in 7 giorni: il metodo Khufu',
    excerpt:
      "Come Khufu progetta, sviluppa e manda in produzione un vero SaaS in una settimana, a prezzo fisso. Il percorso giorno per giorno, senza giri di parole.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Metodo', 'V1', 'AI-native'],
    body: [
      {
        p: "Consegnare una V1 in produzione in 7 giorni non è uno slogan di marketing: è un metodo ripetibile. Khufu progetta, sviluppa e mette online un prodotto vero — SaaS web o app mobile — in una settimana di calendario, per un prezzo fisso di 15.000 €, con il codice sorgente consegnato. La velocità non nasce dalla magia ma da quattro leve: un perimetro volutamente stretto, uno stack collaudato, sviluppo assistito dall'IA in ogni fase e deployment continuo fin dal primo giorno. Ecco il percorso, giorno per giorno.",
      },
      { h2: 'Giorno 0 — inquadramento' },
      {
        p: "Prima di scrivere una sola riga di codice, fissiamo il perimetro esatto della V1 in un documento breve: il problema risolto, i 3-5 percorsi utente essenziali e, soprattutto, ciò che è esplicitamente fuori perimetro. Quel documento diventa il contratto. È la decisione più importante della settimana: ogni funzione che togli è un giorno che guadagni. Nessuna deriva di perimetro lungo la strada: le idee che emergono dopo l'inquadramento vanno nel backlog della V2.",
      },
      { h2: 'Giorni 1–2 — design di prodotto e fondamenta' },
      {
        p: "I primi due giorni posano le basi su cui poggia tutto il resto. Disegniamo le schermate chiave direttamente come componenti riutilizzabili e colleghiamo la struttura tecnica.",
      },
      {
        ul: [
          "Design dei percorsi centrali, pensati come componenti fin dall'inizio per evitare qualsiasi rilavorazione.",
          "Allestimento dello stack: Next.js o React Native/Expo lato front, NestJS, Prisma e PostgreSQL lato back.",
          "Autenticazione, database e infrastruttura collegati e messi in sicurezza.",
          "Lo scheletro del prodotto è in produzione già la sera del giorno 2, su un URL reale.",
        ],
      },
      { h2: 'Giorni 3–5 — sviluppo dei percorsi chiave' },
      {
        p: "È il cuore della settimana. Sviluppiamo le funzioni essenziali una a una, con deployment continuo: ogni sera il prodotto è testabile online, su dati reali. Questo ciclo breve elimina l'effetto tunnel: vedi la V1 prendere forma in diretta e puoi riorientare una decisione in ore, non in settimane. Lo sviluppo assistito dall'IA fa il lavoro di un piccolo team in una frazione del tempo, senza sacrificare la qualità: il codice resta tipizzato in TypeScript stretto, testato sui percorsi critici e manutenibile.",
      },
      {
        quote:
          "Perimetro stretto, decisioni rapide, deployment continuo: è questa combinazione, non l'eroismo, a rendere sufficiente una settimana.",
      },
      { h2: 'Giorni 6–7 — rifiniture, test e messa in produzione' },
      {
        p: "Gli ultimi due giorni trasformano un prodotto funzionante in uno consegnabile: test dei percorsi critici, correzione degli ultimi difetti, cura dei dettagli di interfaccia, documentazione e handover. Venerdì sera la tua V1 gira in produzione, il codice sorgente è interamente tuo e puoi metterlo nelle mani dei tuoi primi utenti.",
      },
      { h2: 'Perché una settimana basta' },
      {
        p: "Una settimana non è una scorciatoia che sacrifica la qualità: è ciò che rende possibile un perimetro disciplinato unito a strumenti moderni. La maggior parte dei progetti non dura mesi perché è complessa, ma perché il perimetro si gonfia, le decisioni si trascinano e il codice viene buttato e riscritto. Elimina queste tre fonti di spreco e sette giorni bastano per un prodotto pulito, pronto per la produzione e pronto a crescere, senza debito tecnico da ripagare in seguito.",
      },
    ],
  },
  pt: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Entregar uma V1 em 7 dias: o método Khufu',
    excerpt:
      "Como a Khufu concebe, desenvolve e coloca em produção um SaaS real numa semana, a preço fixo. O passo a passo dia a dia, sem rodeios.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Método', 'V1', 'AI-native'],
    body: [
      {
        p: "Entregar uma V1 em produção em 7 dias não é um argumento de marketing: é um método repetível. A Khufu concebe, desenvolve e coloca online um produto real — SaaS web ou app mobile — numa semana de calendário, por um preço fixo de 15 000 €, com o código-fonte entregue. A velocidade não vem de magia, mas de quatro alavancas: um escopo deliberadamente enxuto, uma stack comprovada, desenvolvimento assistido por IA em cada etapa e deployment contínuo desde o primeiro dia. Aqui está o passo a passo, dia a dia.",
      },
      { h2: 'Dia 0 — enquadramento' },
      {
        p: "Antes de escrever uma única linha de código, fixamos o escopo exato da V1 num documento curto: o problema resolvido, os 3 a 5 percursos de utilizador essenciais e, sobretudo, o que fica explicitamente fora do escopo. Esse documento torna-se o contrato. É a decisão mais importante da semana: cada funcionalidade que você corta é um dia que você ganha. Sem desvio de escopo pelo caminho — as ideias que surgem depois do enquadramento vão para o backlog da V2.",
      },
      { h2: 'Dias 1–2 — design de produto e fundações' },
      {
        p: "Os dois primeiros dias assentam a base sobre a qual tudo o resto se apoia. Desenhamos os ecrãs-chave diretamente como componentes reutilizáveis e ligamos a espinha dorsal técnica.",
      },
      {
        ul: [
          "Design dos percursos centrais, pensados como componentes desde o início para evitar qualquer retrabalho.",
          "Montagem da stack: Next.js ou React Native/Expo no front, NestJS, Prisma e PostgreSQL no back.",
          "Autenticação, base de dados e infraestrutura ligadas e protegidas.",
          "O esqueleto do produto está em produção já na noite do dia 2, num URL real.",
        ],
      },
      { h2: 'Dias 3–5 — desenvolvimento dos percursos-chave' },
      {
        p: "É o coração da semana. Desenvolvemos as funcionalidades essenciais uma a uma, com deployment contínuo: todas as noites o produto é testável online, com dados reais. Este ciclo curto elimina o efeito túnel — você vê a V1 tomar forma ao vivo e pode reorientar uma decisão em horas, não em semanas. O desenvolvimento assistido por IA faz o trabalho de uma equipa pequena numa fração do tempo, sem sacrificar a qualidade: o código permanece tipado em TypeScript estrito, testado nos percursos críticos e manutenível.",
      },
      {
        quote:
          "Escopo enxuto, decisões rápidas, deployment contínuo: é essa combinação, não o heroísmo, que torna uma semana suficiente.",
      },
      { h2: 'Dias 6–7 — acabamentos, testes e entrada em produção' },
      {
        p: "Os dois últimos dias transformam um produto funcional num produto entregável: testes dos percursos críticos, correção dos últimos defeitos, cuidado com os detalhes de interface, documentação e handover. Na sexta-feira à noite a sua V1 corre em produção, o código-fonte é inteiramente seu e você pode colocá-lo nas mãos dos seus primeiros utilizadores.",
      },
      { h2: 'Por que uma semana basta' },
      {
        p: "Uma semana não é um atalho que sacrifica a qualidade: é o que um escopo disciplinado combinado com ferramentas modernas torna possível. A maioria dos projetos não leva meses por ser complexa, mas porque o escopo incha, as decisões se arrastam e o código é deitado fora e reescrito. Elimine essas três fontes de desperdício e sete dias bastam para um produto limpo, pronto para produção e pronto para evoluir, sem dívida técnica a pagar mais tarde.",
      },
    ],
  },
  nl: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Een V1 in 7 dagen opleveren: de Khufu-methode',
    excerpt:
      "Hoe Khufu een echte SaaS in één week ontwerpt, bouwt en live zet, tegen een vaste prijs. Het verloop dag voor dag, zonder omhaal.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Methode', 'V1', 'AI-native'],
    body: [
      {
        p: "Een productie-V1 in 7 dagen opleveren is geen marketingbelofte: het is een herhaalbare methode. Khufu ontwerpt, bouwt en deployt een echt product — web-SaaS of mobiele app — in één kalenderweek, voor een vaste prijs van € 15.000, met overdracht van de broncode. De snelheid komt niet uit magie maar uit vier hefbomen: een bewust strakke scope, een beproefde stack, AI-ondersteunde ontwikkeling in elke stap en continue deployment vanaf dag één. Hier is het verloop, dag voor dag.",
      },
      { h2: 'Dag 0 — scoping' },
      {
        p: "Voordat er ook maar één regel code wordt geschreven, leggen we de exacte scope van de V1 vast in een kort document: het opgeloste probleem, de 3 tot 5 essentiële gebruikersflows en vooral wat expliciet buiten scope valt. Dat document wordt het contract. Het is de belangrijkste beslissing van de week: elke functie die je schrapt, is een dag die je wint. Geen scope creep onderweg — ideeën die na de scoping opkomen, gaan naar de V2-backlog.",
      },
      { h2: 'Dag 1–2 — productontwerp en fundamenten' },
      {
        p: "De eerste twee dagen leggen de basis waarop al het andere rust. We ontwerpen de belangrijkste schermen direct als herbruikbare componenten en sluiten de technische ruggengraat aan.",
      },
      {
        ul: [
          "Ontwerp van de kernflows, vanaf het begin als componenten gedacht om elk herwerk te vermijden.",
          "Opzet van de stack: Next.js of React Native/Expo aan de front, NestJS, Prisma en PostgreSQL aan de back.",
          "Authenticatie, database en infrastructuur aangesloten en beveiligd.",
          "Het productgeraamte staat al op de avond van dag 2 in productie, op een echte URL.",
        ],
      },
      { h2: 'Dag 3–5 — ontwikkeling van de kernflows' },
      {
        p: "Dit is het hart van de week. We bouwen de essentiële functies een voor een, met continue deployment: elke avond is het product online testbaar, op echte data. Deze korte lus doodt het tunneleffect — je ziet de V1 live vorm krijgen en kunt een beslissing in uren bijsturen, niet in weken. AI-ondersteunde ontwikkeling doet het werk van een klein team in een fractie van de tijd, zonder kwaliteit op te offeren: de code blijft strikt getypeerd in TypeScript, getest op de kritieke paden en onderhoudbaar.",
      },
      {
        quote:
          "Strakke scope, snelle beslissingen, continue deployment: die combinatie, geen heldendom, maakt één week voldoende.",
      },
      { h2: 'Dag 6–7 — afwerking, tests en go-live' },
      {
        p: "De laatste twee dagen maken van een werkend product een leverbaar product: tests van de kritieke paden, oplossen van de laatste gebreken, aandacht voor interfacedetails, documentatie en handover. Vrijdagavond draait je V1 in productie, de broncode is helemaal van jou en je kunt hem in handen van je eerste gebruikers geven.",
      },
      { h2: 'Waarom één week volstaat' },
      {
        p: "Eén week is geen shortcut die kwaliteit opoffert: het is wat een gedisciplineerde scope samen met moderne tooling mogelijk maakt. De meeste projecten duren geen maanden omdat ze complex zijn, maar omdat de scope opzwelt, beslissingen aanslepen en code wordt weggegooid en herschreven. Verwijder die drie bronnen van verspilling en zeven dagen volstaan voor een schoon, productieklaar product dat klaar is om te groeien — zonder technische schuld die later moet worden afbetaald.",
      },
    ],
  },
  ar: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'تسليم نسخة V1 في 7 أيام: منهجية Khufu',
    excerpt:
      "كيف تصمم Khufu وتطوّر وتُطلق منتج SaaS حقيقي في أسبوع واحد بسعر ثابت. التفصيل يومًا بيوم، دون حشو.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['منهجية', 'V1', 'AI-native'],
    body: [
      {
        p: "تسليم نسخة V1 في الإنتاج خلال 7 أيام ليس ادعاءً تسويقيًا، بل منهجية قابلة للتكرار. تصمم Khufu وتطوّر وتنشر منتجًا حقيقيًا — SaaS على الويب أو تطبيق موبايل — في أسبوع تقويمي واحد، بسعر ثابت قدره 15,000 يورو، مع تسليم الكود المصدري. لا تأتي السرعة من السحر بل من أربع ركائز: نطاق ضيق عن قصد، ومجموعة تقنية مُجرّبة، وتطوير مدعوم بالذكاء الاصطناعي في كل خطوة، ونشر مستمر منذ اليوم الأول. إليك التفصيل، يومًا بيوم.",
      },
      { h2: 'اليوم 0 — تحديد النطاق' },
      {
        p: "قبل كتابة أي سطر برمجي، نُثبّت النطاق الدقيق للـ V1 في وثيقة قصيرة: المشكلة التي يحلها المنتج، ومن 3 إلى 5 مسارات مستخدم أساسية، وقبل كل شيء ما هو خارج النطاق صراحةً. تصبح هذه الوثيقة بمثابة العقد. إنه أهم قرار في الأسبوع: كل ميزة تحذفها هي يوم تكسبه. لا انحراف في النطاق خلال الطريق — الأفكار التي تظهر بعد تحديد النطاق تذهب إلى قائمة انتظار V2.",
      },
      { h2: 'اليومان 1–2 — تصميم المنتج والأسس' },
      {
        p: "يضع اليومان الأولان الأساس الذي يرتكز عليه كل ما تبقى. نصمم الشاشات الرئيسية مباشرةً كمكوّنات قابلة لإعادة الاستخدام، ونوصّل العمود الفقري التقني.",
      },
      {
        ul: [
          "تصميم المسارات الأساسية، مصمّمة كمكوّنات منذ البداية لتفادي أي إعادة عمل.",
          "إعداد المجموعة التقنية: Next.js أو React Native/Expo في الواجهة، وNestJS وPrisma وPostgreSQL في الخلفية.",
          "توصيل وتأمين المصادقة وقاعدة البيانات والبنية التحتية.",
          "يُنشر هيكل المنتج في الإنتاج مساء اليوم الثاني على عنوان URL حقيقي.",
        ],
      },
      { h2: 'الأيام 3–5 — تطوير المسارات الأساسية' },
      {
        p: "هذا قلب الأسبوع. نطوّر الميزات الأساسية واحدة تلو الأخرى مع النشر المستمر: كل مساء يكون المنتج قابلًا للاختبار عبر الإنترنت على بيانات حقيقية. تقضي هذه الحلقة القصيرة على تأثير النفق — ترى الـ V1 تتشكل مباشرة ويمكنك إعادة توجيه قرار خلال ساعات لا أسابيع. يؤدي التطوير المدعوم بالذكاء الاصطناعي عمل فريق صغير في جزء يسير من الوقت دون التضحية بالجودة: يبقى الكود مكتوبًا بنوعية صارمة في TypeScript، ومختبَرًا على المسارات الحرجة، وقابلًا للصيانة.",
      },
      {
        quote:
          "نطاق ضيق، وقرارات سريعة، ونشر مستمر: هذا المزيج، وليس البطولات الفردية، هو ما يجعل أسبوعًا واحدًا كافيًا.",
      },
      { h2: 'اليومان 6–7 — اللمسات الأخيرة والاختبار والإطلاق' },
      {
        p: "يحوّل اليومان الأخيران منتجًا يعمل إلى منتج قابل للتسليم: اختبار المسارات الحرجة، وإصلاح العيوب الأخيرة، والعناية بتفاصيل الواجهة، والتوثيق والتسليم. مساء الجمعة تعمل نسخة V1 الخاصة بك في الإنتاج، والكود المصدري ملك لك بالكامل، ويمكنك وضعه بين أيدي مستخدميك الأوائل.",
      },
      { h2: 'لماذا يكفي أسبوع واحد' },
      {
        p: "الأسبوع الواحد ليس اختصارًا يضحي بالجودة، بل هو ما يتيحه نطاق منضبط مقترنًا بأدوات حديثة. معظم المشاريع لا تستغرق أشهرًا لأنها معقدة، بل لأن النطاق يتضخم، والقرارات تتأخر، والكود يُرمى ويُعاد كتابته. أزل هذه المصادر الثلاثة للهدر، وتكفي سبعة أيام لمنتج نظيف وجاهز للإنتاج وجاهز للنمو — دون دين تقني يُسدَّد لاحقًا.",
      },
    ],
  },
  pl: {
    slug: 'livrer-une-v1-en-7-jours',
    title: 'Dostarczyć V1 w 7 dni: metoda Khufu',
    excerpt:
      "Jak Khufu projektuje, buduje i wdraża na produkcję prawdziwy SaaS w tydzień, za stałą cenę. Przebieg dzień po dniu, bez owijania w bawełnę.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Metoda', 'V1', 'AI-native'],
    body: [
      {
        p: "Dostarczenie produkcyjnej V1 w 7 dni to nie hasło marketingowe, lecz powtarzalna metoda. Khufu projektuje, buduje i wdraża prawdziwy produkt — SaaS webowy lub aplikację mobilną — w jeden tydzień kalendarzowy, za stałą cenę 15 000 €, z przekazaniem kodu źródłowego. Szybkość nie bierze się z magii, lecz z czterech dźwigni: celowo wąskiego zakresu, sprawdzonego stacku, wspomaganego przez AI programowania na każdym etapie i ciągłego wdrażania od pierwszego dnia. Oto przebieg, dzień po dniu.",
      },
      { h2: 'Dzień 0 — określenie zakresu' },
      {
        p: "Zanim powstanie choćby jedna linia kodu, zamrażamy dokładny zakres V1 w krótkim dokumencie: rozwiązywany problem, 3 do 5 kluczowych ścieżek użytkownika, a przede wszystkim to, co jest wyraźnie poza zakresem. Ten dokument staje się kontraktem. To najważniejsza decyzja tygodnia: każda funkcja, którą wytniesz, to zyskany dzień. Bez rozrostu zakresu po drodze — pomysły, które pojawiają się po ustaleniu zakresu, trafiają do backlogu V2.",
      },
      { h2: 'Dni 1–2 — projekt produktu i fundamenty' },
      {
        p: "Pierwsze dwa dni kładą podstawę, na której opiera się cała reszta. Projektujemy kluczowe ekrany od razu jako komponenty wielokrotnego użytku i podłączamy techniczny kręgosłup.",
      },
      {
        ul: [
          "Projekt kluczowych ścieżek, pomyślanych jako komponenty od początku, aby uniknąć jakiegokolwiek przerabiania.",
          "Konfiguracja stacku: Next.js lub React Native/Expo na froncie, NestJS, Prisma i PostgreSQL na backendzie.",
          "Uwierzytelnianie, baza danych i infrastruktura podłączone i zabezpieczone.",
          "Szkielet produktu jest wdrożony na produkcję już wieczorem drugiego dnia, pod prawdziwym adresem URL.",
        ],
      },
      { h2: 'Dni 3–5 — budowa kluczowych ścieżek' },
      {
        p: "To serce tygodnia. Budujemy kluczowe funkcje jedną po drugiej, wdrażając w sposób ciągły: każdego wieczoru produkt jest testowalny online, na prawdziwych danych. Ta krótka pętla zabija efekt tunelu — widzisz, jak V1 powstaje na żywo, i możesz zmienić decyzję w godziny, nie tygodnie. Programowanie wspomagane przez AI wykonuje pracę małego zespołu w ułamku czasu, bez poświęcania jakości: kod pozostaje ściśle typowany w TypeScript, przetestowany na ścieżkach krytycznych i łatwy w utrzymaniu.",
      },
      {
        quote:
          "Wąski zakres, szybkie decyzje, ciągłe wdrażanie: to ta kombinacja, a nie bohaterstwo, sprawia, że tydzień wystarcza.",
      },
      { h2: 'Dni 6–7 — dopracowanie, testy i uruchomienie' },
      {
        p: "Ostatnie dwa dni zamieniają działający produkt w produkt gotowy do wydania: testy ścieżek krytycznych, poprawa ostatnich usterek, dopracowanie detali interfejsu, dokumentacja i przekazanie. W piątek wieczorem Twoja V1 działa na produkcji, kod źródłowy należy w całości do Ciebie, a Ty możesz oddać go w ręce pierwszych użytkowników.",
      },
      { h2: 'Dlaczego tydzień wystarcza' },
      {
        p: "Tydzień to nie skrót, który poświęca jakość: to, co umożliwia zdyscyplinowany zakres w połączeniu z nowoczesnymi narzędziami. Większość projektów nie trwa miesiącami dlatego, że są złożone, lecz dlatego, że zakres puchnie, decyzje się wleką, a kod jest wyrzucany i pisany od nowa. Wyeliminuj te trzy źródła marnotrawstwa, a siedem dni wystarczy na czysty, gotowy do produkcji produkt gotowy do rozwoju — bez długu technicznego do spłacenia później.",
      },
    ],
  },
  tr: {
    slug: 'livrer-une-v1-en-7-jours',
    title: '7 günde bir V1 teslim etmek: Khufu yöntemi',
    excerpt:
      "Khufu gerçek bir SaaS ürününü nasıl bir haftada sabit fiyata tasarlar, geliştirir ve canlıya alır. Gün gün akış, lafı dolandırmadan.",
    date: '2026-05-27',
    readingMinutes: 6,
    tags: ['Yöntem', 'V1', 'AI-native'],
    body: [
      {
        p: "Üretimde bir V1'i 7 günde teslim etmek bir pazarlama iddiası değil, tekrarlanabilir bir yöntemdir. Khufu gerçek bir ürünü — web SaaS ya da mobil uygulama — tek bir takvim haftasında tasarlar, geliştirir ve yayına alır; 15.000 € sabit fiyata, kaynak kodu teslim edilerek. Hız sihirden değil, dört kaldıraçtan gelir: bilinçli olarak dar tutulan bir kapsam, denenmiş bir stack, her adımda yapay zeka destekli geliştirme ve ilk günden itibaren sürekli dağıtım. İşte gün gün akış.",
      },
      { h2: '0. Gün — kapsam belirleme' },
      {
        p: "Tek bir satır kod yazılmadan önce V1'in tam kapsamını kısa bir belgede dondururuz: çözülen sorun, 3 ila 5 temel kullanıcı akışı ve her şeyden önce kapsam dışında kalan şeyler açıkça belirtilir. Bu belge sözleşme haline gelir. Haftanın en önemli kararıdır: çıkardığın her özellik, kazandığın bir gündür. Yol boyunca kapsam kayması olmaz — kapsam belirlemeden sonra ortaya çıkan fikirler V2 backlog'una gider.",
      },
      { h2: '1–2. Günler — ürün tasarımı ve temeller' },
      {
        p: "İlk iki gün, geri kalan her şeyin üzerine oturduğu temeli atar. Ana ekranları doğrudan yeniden kullanılabilir bileşenler olarak tasarlar ve teknik omurgayı bağlarız.",
      },
      {
        ul: [
          "Çekirdek akışların tasarımı, her türlü yeniden çalışmayı önlemek için baştan bileşen olarak düşünülür.",
          "Stack kurulumu: ön tarafta Next.js veya React Native/Expo, arka tarafta NestJS, Prisma ve PostgreSQL.",
          "Kimlik doğrulama, veritabanı ve altyapı bağlanır ve güvenceye alınır.",
          "Ürün iskeleti daha 2. günün akşamında gerçek bir URL üzerinde üretime alınır.",
        ],
      },
      { h2: '3–5. Günler — çekirdek akışların geliştirilmesi' },
      {
        p: "Bu haftanın kalbidir. Temel özellikleri tek tek geliştirir, sürekli dağıtım yaparız: her akşam ürün gerçek verilerle çevrimiçi test edilebilir. Bu kısa döngü tünel etkisini yok eder — V1'in canlı olarak şekillendiğini görür ve bir kararı haftalar yerine saatler içinde yeniden yönlendirebilirsin. Yapay zeka destekli geliştirme, küçük bir ekibin işini zamanın çok küçük bir kısmında yapar, kaliteden ödün vermeden: kod TypeScript'te sıkı tiplenmiş, kritik yollarda test edilmiş ve bakımı yapılabilir kalır.",
      },
      {
        quote:
          "Dar kapsam, hızlı kararlar, sürekli dağıtım: bir haftayı yeterli kılan bu birleşimdir, kahramanlık değil.",
      },
      { h2: '6–7. Günler — rötuşlar, testler ve canlıya alma' },
      {
        p: "Son iki gün, çalışan bir ürünü teslim edilebilir bir ürüne dönüştürür: kritik yolların testleri, son kusurların giderilmesi, arayüz detaylarına özen, dokümantasyon ve devir teslim. Cuma akşamı V1'in üretimde çalışıyor, kaynak kod tamamen sana ait ve onu ilk kullanıcılarının eline verebilirsin.",
      },
      { h2: 'Neden bir hafta yeterli' },
      {
        p: "Bir hafta, kaliteden ödün veren bir kısayol değildir: disiplinli bir kapsamın modern araçlarla birleşmesinin mümkün kıldığı şeydir. Çoğu proje karmaşık olduğu için değil, kapsam şiştiği, kararlar uzadığı ve kod atılıp yeniden yazıldığı için aylar sürer. Bu üç israf kaynağını ortadan kaldırın, temiz, üretime hazır ve büyümeye hazır bir ürün için yedi gün yeterlidir — sonradan ödenecek teknik borç olmadan.",
      },
    ],
  },
}
