import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hébergement d'un SaaS : Vercel, Cloud Run — quand choisir quoi",
    excerpt:
      "Vercel pour le front Next.js, Cloud Run pour l'API NestJS : coûts, scaling et cas d'usage pour choisir la bonne infra d'hébergement de votre SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infra', 'Tech'],
    body: [
      {
        p: "Pour héberger un SaaS moderne, la combinaison qui gagne le plus souvent : Vercel pour le front Next.js, Cloud Run pour l'API NestJS. Vercel déploie votre front-end sur un réseau edge mondial sans configuration ; Cloud Run fait tourner votre back-end en conteneur, avec scale-to-zero et un contrôle total sur le runtime. Le reste est une question de coûts, de charge et de type de produit. Voici comment trancher.",
      },
      { h2: "Vercel : le front Next.js sans friction" },
      {
        p: "Vercel est la plateforme conçue par les créateurs de Next.js. Un git push suffit : build, déploiement, CDN mondial, HTTPS, preview par branche et rollback instantané sont inclus. Pour un front-end React/Next.js, vous n'avez rien à administrer.",
      },
      {
        ul: [
          "Rendu SSR, ISR et edge functions gérés nativement, au plus près de l'utilisateur.",
          "Preview deployments sur chaque pull request : vous testez avant de merger.",
          "Idéal pour les sites vitrines, les dashboards et le front d'un SaaS.",
          "Limite : l'exécution serveur est pensée pour des fonctions courtes, pas pour un back-end lourd ou des tâches longues.",
        ],
      },
      { h2: "Cloud Run : l'API et les traitements lourds" },
      {
        p: "Cloud Run (Google Cloud) fait tourner n'importe quel conteneur Docker et l'expose en HTTPS. C'est l'endroit naturel pour une API NestJS, une connexion PostgreSQL via Prisma, des jobs, des webhooks ou des traitements IA qui prennent plusieurs secondes. Vous gardez la main sur le runtime, la mémoire et le CPU.",
      },
      {
        ul: [
          "Scale-to-zero : zéro conteneur actif, zéro facture quand personne n'appelle l'API.",
          "Montée en charge automatique jusqu'à des milliers d'instances en cas de pic.",
          "Requêtes jusqu'à 60 minutes : parfait pour les traitements longs et l'IA.",
          "Pas de lock-in fort : un conteneur standard se redéploie ailleurs sans réécriture.",
        ],
      },
      { h2: "Coûts : ce que vous payez vraiment" },
      {
        p: "Les deux plateformes ont un palier gratuit généreux et facturent à l'usage. Concrètement, pour un SaaS qui démarre :",
      },
      {
        ul: [
          "Vercel : gratuit pour un projet perso, puis ~20 $/mois par membre sur l'offre Pro. La facture grimpe avec la bande passante et l'exécution des fonctions.",
          "Cloud Run : facturé à la requête, au CPU et à la mémoire consommés. Un back-end à faible trafic coûte souvent quelques euros par mois grâce au scale-to-zero.",
          "Règle simple : tant que le trafic est faible, l'addition des deux reste sous 50 €/mois. Elle augmente proportionnellement à l'usage, pas par paliers surprises.",
        ],
      },
      {
        quote:
          "La bonne question n'est pas « quelle plateforme est la moins chère », mais « laquelle vous fait livrer et scaler sans y penser ».",
      },
      { h2: "Scaling : à froid, à chaud" },
      {
        p: "Vercel absorbe les pics de trafic front sans configuration : le CDN sert le contenu statique et les fonctions montent automatiquement. Cloud Run gère la même élasticité côté back-end, mais introduit un cold start (le temps de démarrer un conteneur endormi) — quelques centaines de millisecondes, réductible en gardant une instance minimale chaude pour un léger surcoût.",
      },
      { h2: "Quand choisir quoi" },
      {
        ul: [
          "Front-end Next.js, site marketing, dashboard : Vercel, sans hésiter.",
          "API métier, base de données, webhooks, IA, tâches longues : Cloud Run.",
          "SaaS complet : les deux, chacun sur son terrain — c'est la stack qu'on déploie par défaut chez Khufu.",
          "Produit ultra-simple sans back-end propre : Vercel seul peut suffire au départ.",
        ],
      },
      {
        p: "Chez Khufu, cette architecture Vercel + Cloud Run est celle qu'on met en production dans nos V1 livrées en 7 jours à 15 000 € : un front-end rapide, une API qui scale, et une facture d'hébergement qui reste alignée sur votre trafic réel.",
      },
    ],
  },
  en: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hosting a SaaS: Vercel vs Cloud Run — when to choose which",
    excerpt:
      "Vercel for the Next.js front-end, Cloud Run for the NestJS API: costs, scaling and use cases to pick the right hosting infra for your SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infra', 'Tech'],
    body: [
      {
        p: "To host a modern SaaS, the combination that wins most often is Vercel for the Next.js front-end and Cloud Run for the NestJS API. Vercel deploys your front-end to a global edge network with zero config; Cloud Run runs your back-end in a container, with scale-to-zero and full control over the runtime. The rest comes down to cost, load and the type of product. Here is how to decide.",
      },
      { h2: "Vercel: the Next.js front-end without friction" },
      {
        p: "Vercel is the platform built by the creators of Next.js. A git push is enough: build, deployment, global CDN, HTTPS, per-branch previews and instant rollback are all included. For a React/Next.js front-end, there is nothing to administer.",
      },
      {
        ul: [
          "SSR, ISR and edge functions handled natively, as close as possible to the user.",
          "Preview deployments on every pull request: you test before you merge.",
          "Ideal for marketing sites, dashboards and the front-end of a SaaS.",
          "Limit: server execution is designed for short functions, not for a heavy back-end or long-running tasks.",
        ],
      },
      { h2: "Cloud Run: the API and the heavy lifting" },
      {
        p: "Cloud Run (Google Cloud) runs any Docker container and exposes it over HTTPS. It is the natural home for a NestJS API, a PostgreSQL connection through Prisma, jobs, webhooks or AI processing that takes several seconds. You keep control over the runtime, memory and CPU.",
      },
      {
        ul: [
          "Scale-to-zero: no active container, no bill when nobody calls the API.",
          "Automatic scale-up to thousands of instances during a spike.",
          "Requests up to 60 minutes: perfect for long jobs and AI.",
          "No hard lock-in: a standard container redeploys elsewhere without a rewrite.",
        ],
      },
      { h2: "Costs: what you really pay" },
      {
        p: "Both platforms have a generous free tier and bill on usage. Concretely, for a SaaS getting started:",
      },
      {
        ul: [
          "Vercel: free for a personal project, then ~$20/month per member on the Pro plan. The bill rises with bandwidth and function execution.",
          "Cloud Run: billed per request, CPU and memory consumed. A low-traffic back-end often costs a few euros a month thanks to scale-to-zero.",
          "Simple rule: while traffic is low, the two combined stay under €50/month. It grows in proportion to usage, not in surprise tiers.",
        ],
      },
      {
        quote:
          "The right question is not “which platform is cheapest”, but “which one lets you ship and scale without thinking about it”.",
      },
      { h2: "Scaling: cold and hot" },
      {
        p: "Vercel absorbs front-end traffic spikes with no configuration: the CDN serves static content and functions scale automatically. Cloud Run delivers the same elasticity on the back-end, but adds a cold start (the time to wake a sleeping container) — a few hundred milliseconds, reducible by keeping a minimum warm instance for a small extra cost.",
      },
      { h2: "When to choose which" },
      {
        ul: [
          "Next.js front-end, marketing site, dashboard: Vercel, no hesitation.",
          "Business API, database, webhooks, AI, long tasks: Cloud Run.",
          "Full SaaS: both, each on its own turf — this is the stack we deploy by default at Khufu.",
          "Ultra-simple product with no real back-end: Vercel alone can be enough at first.",
        ],
      },
      {
        p: "At Khufu, this Vercel + Cloud Run architecture is the one we ship in our V1s delivered in 7 days for €15,000: a fast front-end, an API that scales, and a hosting bill that stays aligned with your real traffic.",
      },
    ],
  },
  es: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hosting de un SaaS: Vercel o Cloud Run — cuándo elegir cada uno",
    excerpt:
      "Vercel para el front Next.js, Cloud Run para la API NestJS: costes, escalado y casos de uso para elegir la infraestructura de hosting de tu SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infraestructura', 'Tech'],
    body: [
      {
        p: "Para alojar un SaaS moderno, la combinación que gana más a menudo es Vercel para el front-end Next.js y Cloud Run para la API NestJS. Vercel despliega tu front-end en una red edge global sin configuración; Cloud Run ejecuta tu back-end en un contenedor, con scale-to-zero y control total del runtime. El resto es cuestión de coste, carga y tipo de producto. Así se decide.",
      },
      { h2: "Vercel: el front Next.js sin fricción" },
      {
        p: "Vercel es la plataforma creada por los autores de Next.js. Basta un git push: build, despliegue, CDN global, HTTPS, previews por rama y rollback instantáneo van incluidos. Para un front-end React/Next.js no hay nada que administrar.",
      },
      {
        ul: [
          "SSR, ISR y edge functions gestionadas de forma nativa, lo más cerca posible del usuario.",
          "Preview deployments en cada pull request: pruebas antes de hacer merge.",
          "Ideal para sitios de marketing, dashboards y el front-end de un SaaS.",
          "Límite: la ejecución de servidor está pensada para funciones cortas, no para un back-end pesado ni tareas largas.",
        ],
      },
      { h2: "Cloud Run: la API y el trabajo pesado" },
      {
        p: "Cloud Run (Google Cloud) ejecuta cualquier contenedor Docker y lo expone por HTTPS. Es el lugar natural para una API NestJS, una conexión PostgreSQL vía Prisma, jobs, webhooks o procesamientos de IA que tardan varios segundos. Mantienes el control del runtime, la memoria y la CPU.",
      },
      {
        ul: [
          "Scale-to-zero: cero contenedores activos, cero factura cuando nadie llama a la API.",
          "Escalado automático hasta miles de instancias en un pico.",
          "Peticiones de hasta 60 minutos: perfecto para procesos largos e IA.",
          "Sin lock-in fuerte: un contenedor estándar se redespliega en otro sitio sin reescritura.",
        ],
      },
      { h2: "Costes: lo que pagas de verdad" },
      {
        p: "Ambas plataformas tienen un nivel gratuito generoso y facturan por uso. En concreto, para un SaaS que arranca:",
      },
      {
        ul: [
          "Vercel: gratis para un proyecto personal, luego ~20 $/mes por miembro en el plan Pro. La factura sube con el ancho de banda y la ejecución de funciones.",
          "Cloud Run: se factura por petición, CPU y memoria consumidas. Un back-end de bajo tráfico suele costar unos pocos euros al mes gracias a scale-to-zero.",
          "Regla simple: mientras el tráfico sea bajo, la suma de ambos queda por debajo de 50 €/mes. Crece en proporción al uso, no por saltos sorpresa.",
        ],
      },
      {
        quote:
          "La pregunta correcta no es «qué plataforma es más barata», sino «cuál te permite lanzar y escalar sin pensar en ello».",
      },
      { h2: "Escalado: en frío y en caliente" },
      {
        p: "Vercel absorbe los picos de tráfico del front sin configuración: la CDN sirve el contenido estático y las funciones escalan automáticamente. Cloud Run ofrece la misma elasticidad en el back-end, pero introduce un cold start (el tiempo de arrancar un contenedor dormido) — unos cientos de milisegundos, reducibles manteniendo una instancia mínima caliente por un pequeño coste extra.",
      },
      { h2: "Cuándo elegir cada uno" },
      {
        ul: [
          "Front-end Next.js, sitio de marketing, dashboard: Vercel, sin dudarlo.",
          "API de negocio, base de datos, webhooks, IA, tareas largas: Cloud Run.",
          "SaaS completo: ambos, cada uno en su terreno — es la stack que desplegamos por defecto en Khufu.",
          "Producto muy simple sin back-end propio: Vercel sola puede bastar al principio.",
        ],
      },
      {
        p: "En Khufu, esta arquitectura Vercel + Cloud Run es la que ponemos en producción en nuestras V1 entregadas en 7 días por 15 000 €: un front-end rápido, una API que escala y una factura de hosting alineada con tu tráfico real.",
      },
    ],
  },
  de: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Ein SaaS hosten: Vercel oder Cloud Run — wann was wählen",
    excerpt:
      "Vercel für das Next.js-Frontend, Cloud Run für die NestJS-API: Kosten, Skalierung und Anwendungsfälle für die richtige Hosting-Infrastruktur deines SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infrastruktur', 'Tech'],
    body: [
      {
        p: "Um ein modernes SaaS zu hosten, gewinnt am häufigsten die Kombination Vercel für das Next.js-Frontend und Cloud Run für die NestJS-API. Vercel deployt dein Frontend ohne Konfiguration in ein globales Edge-Netzwerk; Cloud Run betreibt dein Backend in einem Container, mit Scale-to-Zero und voller Kontrolle über die Runtime. Der Rest ist eine Frage von Kosten, Last und Produkttyp. So entscheidest du.",
      },
      { h2: "Vercel: das Next.js-Frontend ohne Reibung" },
      {
        p: "Vercel ist die Plattform der Next.js-Macher. Ein git push genügt: Build, Deployment, globales CDN, HTTPS, Previews pro Branch und sofortiges Rollback sind inklusive. Für ein React/Next.js-Frontend gibt es nichts zu administrieren.",
      },
      {
        ul: [
          "SSR, ISR und Edge Functions nativ verarbeitet, so nah wie möglich am Nutzer.",
          "Preview Deployments bei jedem Pull Request: du testest vor dem Merge.",
          "Ideal für Marketing-Sites, Dashboards und das Frontend eines SaaS.",
          "Grenze: die Server-Ausführung ist für kurze Funktionen gedacht, nicht für ein schweres Backend oder lange Tasks.",
        ],
      },
      { h2: "Cloud Run: die API und die schwere Arbeit" },
      {
        p: "Cloud Run (Google Cloud) betreibt jeden Docker-Container und stellt ihn über HTTPS bereit. Es ist der natürliche Ort für eine NestJS-API, eine PostgreSQL-Verbindung über Prisma, Jobs, Webhooks oder KI-Verarbeitung, die mehrere Sekunden dauert. Du behältst die Kontrolle über Runtime, Speicher und CPU.",
      },
      {
        ul: [
          "Scale-to-Zero: kein aktiver Container, keine Rechnung, wenn niemand die API aufruft.",
          "Automatisches Hochskalieren auf Tausende Instanzen bei einem Peak.",
          "Requests bis zu 60 Minuten: perfekt für lange Verarbeitungen und KI.",
          "Kein starkes Lock-in: ein Standard-Container lässt sich ohne Neuschreiben woanders deployen.",
        ],
      },
      { h2: "Kosten: was du wirklich zahlst" },
      {
        p: "Beide Plattformen haben ein großzügiges kostenloses Kontingent und rechnen nach Nutzung ab. Konkret für ein startendes SaaS:",
      },
      {
        ul: [
          "Vercel: kostenlos für ein persönliches Projekt, dann ~20 $/Monat pro Mitglied im Pro-Plan. Die Rechnung steigt mit Bandbreite und Funktionsausführung.",
          "Cloud Run: abgerechnet nach Request, CPU und verbrauchtem Speicher. Ein Backend mit wenig Traffic kostet dank Scale-to-Zero oft nur wenige Euro im Monat.",
          "Einfache Regel: solange der Traffic gering ist, bleibt die Summe beider unter 50 €/Monat. Sie wächst proportional zur Nutzung, nicht in überraschenden Stufen.",
        ],
      },
      {
        quote:
          "Die richtige Frage ist nicht „welche Plattform ist am günstigsten“, sondern „welche lässt dich liefern und skalieren, ohne darüber nachzudenken“.",
      },
      { h2: "Skalierung: kalt und heiß" },
      {
        p: "Vercel fängt Traffic-Spitzen im Frontend ohne Konfiguration ab: das CDN liefert statische Inhalte und die Funktionen skalieren automatisch. Cloud Run bietet dieselbe Elastizität im Backend, führt aber einen Cold Start ein (die Zeit, einen schlafenden Container zu wecken) — einige hundert Millisekunden, reduzierbar, indem man für geringe Zusatzkosten eine minimale warme Instanz hält.",
      },
      { h2: "Wann was wählen" },
      {
        ul: [
          "Next.js-Frontend, Marketing-Site, Dashboard: Vercel, ohne Zögern.",
          "Business-API, Datenbank, Webhooks, KI, lange Tasks: Cloud Run.",
          "Komplettes SaaS: beide, jeweils auf ihrem Terrain — das ist der Stack, den wir bei Khufu standardmäßig deployen.",
          "Ultraeinfaches Produkt ohne eigenes Backend: Vercel allein kann anfangs genügen.",
        ],
      },
      {
        p: "Bei Khufu ist diese Vercel-+-Cloud-Run-Architektur die, die wir in unseren in 7 Tagen für 15 000 € gelieferten V1 in Produktion bringen: ein schnelles Frontend, eine API, die skaliert, und eine Hosting-Rechnung, die sich an deinem realen Traffic orientiert.",
      },
    ],
  },
  it: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hosting di un SaaS: Vercel o Cloud Run — quando scegliere cosa",
    excerpt:
      "Vercel per il front-end Next.js, Cloud Run per l'API NestJS: costi, scaling e casi d'uso per scegliere l'infrastruttura di hosting del tuo SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infrastruttura', 'Tech'],
    body: [
      {
        p: "Per ospitare un SaaS moderno, la combinazione che vince più spesso è Vercel per il front-end Next.js e Cloud Run per l'API NestJS. Vercel distribuisce il tuo front-end su una rete edge globale senza configurazione; Cloud Run esegue il tuo back-end in un container, con scale-to-zero e pieno controllo del runtime. Il resto è una questione di costi, carico e tipo di prodotto. Ecco come decidere.",
      },
      { h2: "Vercel: il front-end Next.js senza attriti" },
      {
        p: "Vercel è la piattaforma creata dagli autori di Next.js. Basta un git push: build, deploy, CDN globale, HTTPS, preview per branch e rollback istantaneo sono inclusi. Per un front-end React/Next.js non c'è nulla da amministrare.",
      },
      {
        ul: [
          "SSR, ISR ed edge functions gestite in modo nativo, il più vicino possibile all'utente.",
          "Preview deployment su ogni pull request: testi prima del merge.",
          "Ideale per siti di marketing, dashboard e il front-end di un SaaS.",
          "Limite: l'esecuzione server è pensata per funzioni brevi, non per un back-end pesante o task lunghi.",
        ],
      },
      { h2: "Cloud Run: l'API e le elaborazioni pesanti" },
      {
        p: "Cloud Run (Google Cloud) esegue qualsiasi container Docker e lo espone via HTTPS. È il posto naturale per un'API NestJS, una connessione PostgreSQL tramite Prisma, job, webhook o elaborazioni AI che richiedono diversi secondi. Mantieni il controllo di runtime, memoria e CPU.",
      },
      {
        ul: [
          "Scale-to-zero: nessun container attivo, nessuna fattura quando nessuno chiama l'API.",
          "Scaling automatico fino a migliaia di istanze durante un picco.",
          "Richieste fino a 60 minuti: perfetto per elaborazioni lunghe e AI.",
          "Nessun lock-in forte: un container standard si ridistribuisce altrove senza riscrittura.",
        ],
      },
      { h2: "Costi: quello che paghi davvero" },
      {
        p: "Entrambe le piattaforme hanno un piano gratuito generoso e fatturano a consumo. In concreto, per un SaaS che parte:",
      },
      {
        ul: [
          "Vercel: gratis per un progetto personale, poi ~20 $/mese per membro sul piano Pro. La fattura sale con la banda e l'esecuzione delle funzioni.",
          "Cloud Run: fatturato per richiesta, CPU e memoria consumate. Un back-end a basso traffico costa spesso pochi euro al mese grazie allo scale-to-zero.",
          "Regola semplice: finché il traffico è basso, la somma dei due resta sotto i 50 €/mese. Cresce in proporzione all'uso, non a scaglioni a sorpresa.",
        ],
      },
      {
        quote:
          "La domanda giusta non è «quale piattaforma costa meno», ma «quale ti fa spedire e scalare senza pensarci».",
      },
      { h2: "Scaling: a freddo e a caldo" },
      {
        p: "Vercel assorbe i picchi di traffico del front senza configurazione: la CDN serve i contenuti statici e le funzioni scalano automaticamente. Cloud Run offre la stessa elasticità sul back-end, ma introduce un cold start (il tempo per avviare un container addormentato) — qualche centinaio di millisecondi, riducibile mantenendo un'istanza minima calda a un piccolo costo aggiuntivo.",
      },
      { h2: "Quando scegliere cosa" },
      {
        ul: [
          "Front-end Next.js, sito di marketing, dashboard: Vercel, senza esitare.",
          "API di business, database, webhook, AI, task lunghi: Cloud Run.",
          "SaaS completo: entrambi, ciascuno sul suo terreno — è lo stack che distribuiamo di default in Khufu.",
          "Prodotto ultra-semplice senza back-end proprio: Vercel da sola può bastare all'inizio.",
        ],
      },
      {
        p: "In Khufu, questa architettura Vercel + Cloud Run è quella che mettiamo in produzione nelle nostre V1 consegnate in 7 giorni a 15 000 €: un front-end veloce, un'API che scala e una fattura di hosting allineata al tuo traffico reale.",
      },
    ],
  },
  pt: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hospedagem de um SaaS: Vercel ou Cloud Run — quando escolher cada um",
    excerpt:
      "Vercel para o front-end Next.js, Cloud Run para a API NestJS: custos, escala e casos de uso para escolher a infraestrutura de hospedagem do seu SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infraestrutura', 'Tech'],
    body: [
      {
        p: "Para hospedar um SaaS moderno, a combinação que vence com mais frequência é Vercel para o front-end Next.js e Cloud Run para a API NestJS. A Vercel implanta o seu front-end numa rede edge global sem configuração; o Cloud Run executa o seu back-end num contêiner, com scale-to-zero e controle total do runtime. O resto é uma questão de custo, carga e tipo de produto. Veja como decidir.",
      },
      { h2: "Vercel: o front-end Next.js sem atrito" },
      {
        p: "A Vercel é a plataforma criada pelos autores do Next.js. Um git push basta: build, deploy, CDN global, HTTPS, previews por branch e rollback instantâneo estão incluídos. Para um front-end React/Next.js não há nada a administrar.",
      },
      {
        ul: [
          "SSR, ISR e edge functions tratados de forma nativa, o mais perto possível do utilizador.",
          "Preview deployments em cada pull request: você testa antes do merge.",
          "Ideal para sites de marketing, dashboards e o front-end de um SaaS.",
          "Limite: a execução no servidor é pensada para funções curtas, não para um back-end pesado ou tarefas longas.",
        ],
      },
      { h2: "Cloud Run: a API e o processamento pesado" },
      {
        p: "O Cloud Run (Google Cloud) executa qualquer contêiner Docker e o expõe via HTTPS. É o lugar natural para uma API NestJS, uma conexão PostgreSQL via Prisma, jobs, webhooks ou processamentos de IA que levam vários segundos. Você mantém o controle do runtime, da memória e da CPU.",
      },
      {
        ul: [
          "Scale-to-zero: zero contêiner ativo, zero fatura quando ninguém chama a API.",
          "Escala automática até milhares de instâncias num pico.",
          "Requisições de até 60 minutos: perfeito para processamentos longos e IA.",
          "Sem lock-in forte: um contêiner padrão é reimplantado em outro lugar sem reescrita.",
        ],
      },
      { h2: "Custos: o que você paga de verdade" },
      {
        p: "Ambas as plataformas têm um nível gratuito generoso e cobram por uso. Na prática, para um SaaS que está começando:",
      },
      {
        ul: [
          "Vercel: grátis para um projeto pessoal, depois ~20 $/mês por membro no plano Pro. A fatura sobe com a banda e a execução das funções.",
          "Cloud Run: cobrado por requisição, CPU e memória consumidas. Um back-end de baixo tráfego costuma custar alguns euros por mês graças ao scale-to-zero.",
          "Regra simples: enquanto o tráfego for baixo, a soma dos dois fica abaixo de 50 €/mês. Cresce proporcionalmente ao uso, não em saltos surpresa.",
        ],
      },
      {
        quote:
          "A pergunta certa não é «qual plataforma é mais barata», mas «qual permite lançar e escalar sem pensar nisso».",
      },
      { h2: "Escala: a frio e a quente" },
      {
        p: "A Vercel absorve os picos de tráfego do front sem configuração: o CDN serve o conteúdo estático e as funções escalam automaticamente. O Cloud Run oferece a mesma elasticidade no back-end, mas introduz um cold start (o tempo de iniciar um contêiner adormecido) — algumas centenas de milissegundos, redutível mantendo uma instância mínima quente por um pequeno custo adicional.",
      },
      { h2: "Quando escolher cada um" },
      {
        ul: [
          "Front-end Next.js, site de marketing, dashboard: Vercel, sem hesitar.",
          "API de negócio, banco de dados, webhooks, IA, tarefas longas: Cloud Run.",
          "SaaS completo: ambos, cada um no seu terreno — é a stack que implantamos por padrão na Khufu.",
          "Produto ultra-simples sem back-end próprio: a Vercel sozinha pode bastar no início.",
        ],
      },
      {
        p: "Na Khufu, esta arquitetura Vercel + Cloud Run é a que colocamos em produção nas nossas V1 entregues em 7 dias por 15 000 €: um front-end rápido, uma API que escala e uma fatura de hospedagem alinhada com o seu tráfego real.",
      },
    ],
  },
  nl: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Een SaaS hosten: Vercel of Cloud Run — wanneer kies je wat",
    excerpt:
      "Vercel voor de Next.js-front-end, Cloud Run voor de NestJS-API: kosten, scaling en use-cases om de juiste hostinginfra voor je SaaS te kiezen.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infrastructuur', 'Tech'],
    body: [
      {
        p: "Om een moderne SaaS te hosten wint meestal de combinatie Vercel voor de Next.js-front-end en Cloud Run voor de NestJS-API. Vercel deployt je front-end zonder configuratie naar een wereldwijd edge-netwerk; Cloud Run draait je back-end in een container, met scale-to-zero en volledige controle over de runtime. De rest is een kwestie van kosten, belasting en producttype. Zo beslis je.",
      },
      { h2: "Vercel: de Next.js-front-end zonder wrijving" },
      {
        p: "Vercel is het platform van de makers van Next.js. Eén git push volstaat: build, deployment, wereldwijde CDN, HTTPS, previews per branch en directe rollback zitten erbij. Voor een React/Next.js-front-end is er niets te beheren.",
      },
      {
        ul: [
          "SSR, ISR en edge functions worden native afgehandeld, zo dicht mogelijk bij de gebruiker.",
          "Preview deployments bij elke pull request: je test vóór de merge.",
          "Ideaal voor marketingsites, dashboards en de front-end van een SaaS.",
          "Beperking: de serveruitvoering is bedoeld voor korte functies, niet voor een zware back-end of lange taken.",
        ],
      },
      { h2: "Cloud Run: de API en het zware werk" },
      {
        p: "Cloud Run (Google Cloud) draait elke Docker-container en stelt die beschikbaar via HTTPS. Het is de natuurlijke plek voor een NestJS-API, een PostgreSQL-verbinding via Prisma, jobs, webhooks of AI-verwerking die meerdere seconden duurt. Je houdt controle over de runtime, het geheugen en de CPU.",
      },
      {
        ul: [
          "Scale-to-zero: geen actieve container, geen rekening wanneer niemand de API aanroept.",
          "Automatisch opschalen naar duizenden instances bij een piek.",
          "Requests tot 60 minuten: perfect voor lange verwerkingen en AI.",
          "Geen sterke lock-in: een standaardcontainer wordt zonder herschrijven elders opnieuw gedeployd.",
        ],
      },
      { h2: "Kosten: wat je echt betaalt" },
      {
        p: "Beide platforms hebben een royale gratis laag en rekenen af op gebruik. Concreet, voor een startende SaaS:",
      },
      {
        ul: [
          "Vercel: gratis voor een persoonlijk project, daarna ~20 $/maand per lid op het Pro-plan. De rekening stijgt met bandbreedte en functie-uitvoering.",
          "Cloud Run: gefactureerd per request, CPU en verbruikt geheugen. Een back-end met weinig verkeer kost dankzij scale-to-zero vaak een paar euro per maand.",
          "Simpele regel: zolang het verkeer laag is, blijft de som van beide onder de 50 €/maand. Hij groeit evenredig met het gebruik, niet in verrassende sprongen.",
        ],
      },
      {
        quote:
          "De juiste vraag is niet „welk platform is het goedkoopst”, maar „welk platform laat je leveren en schalen zonder erover na te denken”.",
      },
      { h2: "Scaling: koud en warm" },
      {
        p: "Vercel vangt verkeerspieken op de front-end zonder configuratie op: de CDN serveert de statische content en de functies schalen automatisch. Cloud Run biedt dezelfde elasticiteit op de back-end, maar introduceert een cold start (de tijd om een slapende container te wekken) — enkele honderden milliseconden, te verkleinen door tegen een kleine meerkost een minimale warme instance aan te houden.",
      },
      { h2: "Wanneer kies je wat" },
      {
        ul: [
          "Next.js-front-end, marketingsite, dashboard: Vercel, zonder twijfel.",
          "Business-API, database, webhooks, AI, lange taken: Cloud Run.",
          "Volledige SaaS: allebei, elk op zijn eigen terrein — dat is de stack die we bij Khufu standaard deployen.",
          "Ultrasimpel product zonder eigen back-end: Vercel alleen kan in het begin volstaan.",
        ],
      },
      {
        p: "Bij Khufu is deze Vercel-+-Cloud-Run-architectuur wat we in productie brengen in onze V1's die we in 7 dagen voor 15 000 € opleveren: een snelle front-end, een API die schaalt, en een hostingrekening die aansluit op je echte verkeer.",
      },
    ],
  },
  ar: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "استضافة تطبيق SaaS: Vercel أم Cloud Run — متى تختار كلاً منهما",
    excerpt:
      "Vercel للواجهة الأمامية Next.js وCloud Run لواجهة NestJS: التكاليف والتوسّع وحالات الاستخدام لاختيار البنية التحتية المناسبة لاستضافة SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['البنية التحتية', 'تقنية'],
    body: [
      {
        p: "لاستضافة تطبيق SaaS حديث، غالبًا ما يكون المزيج الرابح هو Vercel للواجهة الأمامية Next.js وCloud Run لواجهة NestJS الخلفية. تنشر Vercel واجهتك الأمامية على شبكة edge عالمية دون أي إعداد؛ بينما يشغّل Cloud Run الخلفية داخل حاوية مع خاصية scale-to-zero وتحكّم كامل في الـ runtime. أما الباقي فمسألة تكلفة وحِمل ونوع منتج. إليك كيف تحسم القرار.",
      },
      { h2: "Vercel: واجهة Next.js الأمامية دون احتكاك" },
      {
        p: "Vercel هي المنصة التي بناها صنّاع Next.js. يكفي git push واحد: البناء والنشر وشبكة CDN عالمية وHTTPS ومعاينات لكل فرع وتراجع فوري، كلها مضمّنة. بالنسبة لواجهة أمامية React/Next.js لا شيء يحتاج إلى إدارة.",
      },
      {
        ul: [
          "معالجة SSR وISR وedge functions بشكل أصلي، في أقرب نقطة من المستخدم.",
          "Preview deployments على كل pull request: تختبر قبل الدمج.",
          "مثالية للمواقع التعريفية ولوحات التحكم وواجهة SaaS الأمامية.",
          "الحدّ: تنفيذ الخادم مصمَّم لدوال قصيرة، لا لخلفية ثقيلة أو مهام طويلة.",
        ],
      },
      { h2: "Cloud Run: الواجهة الخلفية والمعالجات الثقيلة" },
      {
        p: "يشغّل Cloud Run (من Google Cloud) أي حاوية Docker ويعرضها عبر HTTPS. إنه المكان الطبيعي لواجهة NestJS، ولاتصال PostgreSQL عبر Prisma، وللمهام والـ webhooks ومعالجات الذكاء الاصطناعي التي تستغرق عدة ثوانٍ. تحتفظ بالتحكم في الـ runtime والذاكرة والمعالج.",
      },
      {
        ul: [
          "Scale-to-zero: لا حاوية نشطة ولا فاتورة عندما لا يستدعي أحد الواجهة.",
          "توسّع تلقائي حتى آلاف الحاويات عند الذروة.",
          "طلبات تصل إلى 60 دقيقة: مثالية للمعالجات الطويلة والذكاء الاصطناعي.",
          "لا قيود احتكار قوية: تُعاد الحاوية القياسية للنشر في مكان آخر دون إعادة كتابة.",
        ],
      },
      { h2: "التكاليف: ما تدفعه فعلاً" },
      {
        p: "لدى المنصتين طبقة مجانية سخية وتُحاسبان بحسب الاستخدام. عمليًا، لتطبيق SaaS في بدايته:",
      },
      {
        ul: [
          "Vercel: مجانية لمشروع شخصي، ثم نحو 20 $ شهريًا لكل عضو في خطة Pro. ترتفع الفاتورة مع عرض النطاق وتنفيذ الدوال.",
          "Cloud Run: تُحاسب حسب الطلب والمعالج والذاكرة المستهلكة. غالبًا ما تكلّف خلفية منخفضة الحركة بضعة يوروهات شهريًا بفضل scale-to-zero.",
          "قاعدة بسيطة: ما دامت الحركة منخفضة، يبقى مجموع الاثنين دون 50 € شهريًا. يزيد بتناسب مع الاستخدام، لا عبر قفزات مفاجئة.",
        ],
      },
      {
        quote:
          "السؤال الصحيح ليس «أي منصة أرخص»، بل «أيّهما تجعلك تُطلق وتتوسّع دون أن تفكّر في الأمر».",
      },
      { h2: "التوسّع: على البارد وعلى الساخن" },
      {
        p: "تمتصّ Vercel ذُرى حركة الواجهة الأمامية دون أي إعداد: تخدم شبكة CDN المحتوى الثابت وتتوسّع الدوال تلقائيًا. يوفّر Cloud Run المرونة نفسها في الخلفية، لكنه يضيف cold start (زمن إيقاظ حاوية نائمة) — بضع مئات من الميلي ثانية، يمكن تقليصها بإبقاء حاوية دنيا ساخنة مقابل تكلفة إضافية بسيطة.",
      },
      { h2: "متى تختار كلاً منهما" },
      {
        ul: [
          "واجهة Next.js أمامية أو موقع تسويقي أو لوحة تحكم: Vercel دون تردد.",
          "واجهة أعمال أو قاعدة بيانات أو webhooks أو ذكاء اصطناعي أو مهام طويلة: Cloud Run.",
          "SaaS متكامل: كلاهما، كلٌّ في مجاله — إنها الحزمة التي ننشرها افتراضيًا في Khufu.",
          "منتج بسيط جدًا دون خلفية خاصة: قد تكفي Vercel وحدها في البداية.",
        ],
      },
      {
        p: "في Khufu، معمارية Vercel + Cloud Run هي التي نطلقها في نسخ V1 التي نسلّمها خلال 7 أيام مقابل 15 000 €: واجهة أمامية سريعة، وواجهة خلفية تتوسّع، وفاتورة استضافة تبقى متوافقة مع حركتك الفعلية.",
      },
    ],
  },
  pl: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Hosting SaaS: Vercel czy Cloud Run — kiedy co wybrać",
    excerpt:
      "Vercel dla front-endu Next.js, Cloud Run dla API NestJS: koszty, skalowanie i przypadki użycia, aby wybrać właściwą infrastrukturę hostingu dla SaaS.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Infrastruktura', 'Tech'],
    body: [
      {
        p: "Aby hostować nowoczesny SaaS, najczęściej wygrywa połączenie Vercel dla front-endu Next.js i Cloud Run dla API NestJS. Vercel wdraża twój front-end w globalnej sieci edge bez konfiguracji; Cloud Run uruchamia twój back-end w kontenerze, ze scale-to-zero i pełną kontrolą nad runtime. Reszta to kwestia kosztów, obciążenia i typu produktu. Oto jak zdecydować.",
      },
      { h2: "Vercel: front-end Next.js bez tarcia" },
      {
        p: "Vercel to platforma stworzona przez twórców Next.js. Wystarczy git push: build, wdrożenie, globalny CDN, HTTPS, podglądy per gałąź i natychmiastowy rollback są w zestawie. Dla front-endu React/Next.js nie ma czym administrować.",
      },
      {
        ul: [
          "SSR, ISR i edge functions obsługiwane natywnie, jak najbliżej użytkownika.",
          "Preview deployments przy każdym pull requeście: testujesz przed mergem.",
          "Idealne dla stron marketingowych, dashboardów i front-endu SaaS.",
          "Ograniczenie: wykonanie po stronie serwera jest pomyślane dla krótkich funkcji, nie dla ciężkiego back-endu ani długich zadań.",
        ],
      },
      { h2: "Cloud Run: API i ciężkie przetwarzanie" },
      {
        p: "Cloud Run (Google Cloud) uruchamia dowolny kontener Docker i udostępnia go przez HTTPS. To naturalne miejsce dla API NestJS, połączenia PostgreSQL przez Prisma, zadań, webhooków czy przetwarzania AI trwającego kilka sekund. Zachowujesz kontrolę nad runtime, pamięcią i CPU.",
      },
      {
        ul: [
          "Scale-to-zero: zero aktywnych kontenerów, zero rachunku, gdy nikt nie wywołuje API.",
          "Automatyczne skalowanie do tysięcy instancji podczas szczytu.",
          "Żądania do 60 minut: idealne do długiego przetwarzania i AI.",
          "Bez silnego lock-inu: standardowy kontener wdrożysz gdzie indziej bez przepisywania.",
        ],
      },
      { h2: "Koszty: ile naprawdę płacisz" },
      {
        p: "Obie platformy mają hojny darmowy poziom i rozliczają się za użycie. Konkretnie, dla startującego SaaS:",
      },
      {
        ul: [
          "Vercel: za darmo dla projektu osobistego, potem ~20 $/miesiąc za członka w planie Pro. Rachunek rośnie wraz z przepustowością i wykonaniem funkcji.",
          "Cloud Run: rozliczany za żądanie, CPU i zużytą pamięć. Back-end o niskim ruchu często kosztuje kilka euro miesięcznie dzięki scale-to-zero.",
          "Prosta zasada: dopóki ruch jest niski, suma obu pozostaje poniżej 50 €/miesiąc. Rośnie proporcjonalnie do użycia, nie skokami-niespodziankami.",
        ],
      },
      {
        quote:
          "Właściwe pytanie to nie „która platforma jest najtańsza”, ale „która pozwala ci dostarczać i skalować bez zastanawiania się nad tym”.",
      },
      { h2: "Skalowanie: na zimno i na gorąco" },
      {
        p: "Vercel pochłania szczyty ruchu na front-endzie bez konfiguracji: CDN serwuje treści statyczne, a funkcje skalują się automatycznie. Cloud Run zapewnia tę samą elastyczność po stronie back-endu, ale wprowadza cold start (czas rozbudzenia uśpionego kontenera) — kilkaset milisekund, redukowalny przez utrzymanie minimalnej ciepłej instancji za niewielką dopłatą.",
      },
      { h2: "Kiedy co wybrać" },
      {
        ul: [
          "Front-end Next.js, strona marketingowa, dashboard: Vercel, bez wahania.",
          "API biznesowe, baza danych, webhooki, AI, długie zadania: Cloud Run.",
          "Kompletny SaaS: oba, każdy na swoim terenie — to stack, który wdrażamy domyślnie w Khufu.",
          "Bardzo prosty produkt bez własnego back-endu: sam Vercel może na początku wystarczyć.",
        ],
      },
      {
        p: "W Khufu ta architektura Vercel + Cloud Run to ta, którą wdrażamy produkcyjnie w naszych V1 dostarczanych w 7 dni za 15 000 €: szybki front-end, skalujące się API i rachunek za hosting dopasowany do twojego realnego ruchu.",
      },
    ],
  },
  tr: {
    slug: 'hebergement-saas-vercel-cloud-run',
    title: "Bir SaaS'ı barındırmak: Vercel mı Cloud Run mı — hangisi ne zaman",
    excerpt:
      "Next.js ön yüzü için Vercel, NestJS API için Cloud Run: SaaS'ınız için doğru barındırma altyapısını seçmek üzere maliyetler, ölçeklenme ve kullanım senaryoları.",
    date: '2025-12-24',
    readingMinutes: 6,
    tags: ['Altyapı', 'Teknoloji'],
    body: [
      {
        p: "Modern bir SaaS barındırmak için en sık kazanan kombinasyon, Next.js ön yüzü için Vercel ve NestJS API için Cloud Run'dır. Vercel ön yüzünüzü sıfır yapılandırmayla küresel bir edge ağına dağıtır; Cloud Run arka ucunuzu bir konteynerde, scale-to-zero ve runtime üzerinde tam kontrolle çalıştırır. Gerisi maliyet, yük ve ürün türü meselesidir. Karar vermenin yolu şöyle.",
      },
      { h2: "Vercel: sürtünmesiz Next.js ön yüzü" },
      {
        p: "Vercel, Next.js'i yaratanların kurduğu platformdur. Bir git push yeterlidir: build, dağıtım, küresel CDN, HTTPS, dal başına önizlemeler ve anında geri alma dahildir. Bir React/Next.js ön yüzü için yönetilecek hiçbir şey yoktur.",
      },
      {
        ul: [
          "SSR, ISR ve edge functions yerel olarak, kullanıcıya mümkün olduğunca yakın işlenir.",
          "Her pull request'te preview deployment: merge etmeden önce test edersiniz.",
          "Pazarlama siteleri, dashboard'lar ve bir SaaS'ın ön yüzü için ideal.",
          "Sınır: sunucu yürütmesi kısa fonksiyonlar için tasarlanmıştır, ağır bir arka uç veya uzun görevler için değil.",
        ],
      },
      { h2: "Cloud Run: API ve ağır işlemler" },
      {
        p: "Cloud Run (Google Cloud) herhangi bir Docker konteynerini çalıştırır ve HTTPS üzerinden sunar. Bir NestJS API, Prisma üzerinden bir PostgreSQL bağlantısı, işler, webhook'lar veya birkaç saniye süren AI işlemleri için doğal yerdir. Runtime, bellek ve CPU üzerindeki kontrolü elinizde tutarsınız.",
      },
      {
        ul: [
          "Scale-to-zero: aktif konteyner yok, kimse API'yi çağırmadığında fatura yok.",
          "Bir zirvede binlerce örneğe kadar otomatik ölçeklenme.",
          "60 dakikaya kadar istekler: uzun işlemler ve AI için mükemmel.",
          "Güçlü bir lock-in yok: standart bir konteyner yeniden yazmadan başka yerde tekrar dağıtılır.",
        ],
      },
      { h2: "Maliyetler: gerçekte ne ödüyorsunuz" },
      {
        p: "Her iki platformun da cömert bir ücretsiz katmanı vardır ve kullanıma göre faturalandırır. Somut olarak, yeni başlayan bir SaaS için:",
      },
      {
        ul: [
          "Vercel: kişisel bir proje için ücretsiz, ardından Pro planında üye başına ~20 $/ay. Fatura bant genişliği ve fonksiyon yürütmeyle artar.",
          "Cloud Run: istek, CPU ve tüketilen belleğe göre faturalandırılır. Düşük trafikli bir arka uç, scale-to-zero sayesinde genellikle ayda birkaç euroya mal olur.",
          "Basit kural: trafik düşük olduğu sürece ikisinin toplamı ayda 50 €'nun altında kalır. Kullanımla orantılı büyür, sürpriz kademelerle değil.",
        ],
      },
      {
        quote:
          "Doğru soru „hangi platform daha ucuz” değil, „hangisi düşünmeden ürünü çıkarıp ölçeklendirmeni sağlıyor”dur.",
      },
      { h2: "Ölçeklenme: soğuk ve sıcak" },
      {
        p: "Vercel ön yüz trafik zirvelerini yapılandırmasız karşılar: CDN statik içeriği sunar ve fonksiyonlar otomatik ölçeklenir. Cloud Run arka uçta aynı esnekliği sağlar, ancak bir cold start ekler (uyuyan bir konteyneri uyandırma süresi) — birkaç yüz milisaniye, küçük bir ek maliyetle minimum bir sıcak örnek tutarak azaltılabilir.",
      },
      { h2: "Hangisi ne zaman seçilir" },
      {
        ul: [
          "Next.js ön yüzü, pazarlama sitesi, dashboard: tereddütsüz Vercel.",
          "İş API'si, veritabanı, webhook'lar, AI, uzun görevler: Cloud Run.",
          "Eksiksiz SaaS: her ikisi de, her biri kendi alanında — bu, Khufu'da varsayılan olarak dağıttığımız stack'tir.",
          "Kendi arka ucu olmayan çok basit bir ürün: başlangıçta tek başına Vercel yeterli olabilir.",
        ],
      },
      {
        p: "Khufu'da bu Vercel + Cloud Run mimarisi, 7 günde 15 000 €'ya teslim ettiğimiz V1'lerimizde üretime aldığımız mimaridir: hızlı bir ön yüz, ölçeklenen bir API ve gerçek trafiğinizle uyumlu kalan bir barındırma faturası.",
      },
    ],
  },
}
