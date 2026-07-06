import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Bien choisir sa base de données pour un SaaS qui va scaler',
    excerpt:
      'PostgreSQL couvre 90 % des besoins d’un SaaS. Quand choisir du relationnel plutôt que du NoSQL, comment penser index, migrations et scaling dès la V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Base de données', 'Tech'],
    body: [
      {
        p: 'Pour un SaaS qui va scaler, le bon choix par défaut est PostgreSQL. Il couvre environ 90 % des besoins d’un produit web ou mobile : données transactionnelles, relations entre entités, recherche, JSON, files d’attente légères, et même une partie du vectoriel pour l’IA. La vraie question n’est presque jamais « relationnel ou NoSQL » — c’est « ai-je une raison précise de ne PAS prendre Postgres ». La plupart du temps, non.',
      },
      { h2: 'PostgreSQL par défaut : pourquoi ça marche 9 fois sur 10' },
      {
        p: 'Un SaaS manipule des données structurées et reliées entre elles : des utilisateurs qui appartiennent à des organisations, des abonnements liés à des factures, des projets liés à des tâches. C’est exactement ce pour quoi les bases relationnelles sont faites. Postgres ajoute à ce socle des super-pouvoirs qui évitent d’empiler des briques : colonnes JSONB pour le semi-structuré, recherche plein texte intégrée, extension pgvector pour les embeddings d’IA, contraintes qui garantissent l’intégrité de vos données.',
      },
      {
        ul: [
          'Transactions ACID : vos paiements et vos données critiques restent cohérents, même en cas de crash.',
          'Un seul système à opérer, sauvegarder et monitorer au lieu de trois — moins de coûts, moins de pannes.',
          'Écosystème mûr : Prisma, migrations, réplication, hébergement managé partout (Cloud Run, Neon, Supabase, RDS).',
          'JSONB quand vous avez besoin de flexibilité, sans renoncer au relationnel pour le reste.',
        ],
      },
      { h2: 'Relationnel vs NoSQL : quand sortir de Postgres' },
      {
        p: 'Le NoSQL (MongoDB, DynamoDB, Firestore) n’est pas « plus moderne », il répond à d’autres contraintes. Vous n’y gagnez que si votre cas d’usage colle vraiment : volumétrie massive à écriture très élevée, schéma réellement imprévisible, ou besoin d’une distribution géographique extrême. Pour un SaaS B2B classique en phase de lancement et de croissance, ces contraintes n’existent pas encore — et adopter du NoSQL trop tôt vous fait payer en complexité ce que vous n’utiliserez jamais.',
      },
      {
        quote:
          'Choisir NoSQL parce que « ça scale » alors qu’on a 200 utilisateurs, c’est optimiser un problème qu’on n’a pas — au prix de ceux qu’on a déjà.',
      },
      { h2: 'Index, migrations, scaling : les trois réflexes à avoir dès la V1' },
      {
        p: 'Une base bien choisie ne suffit pas : ce sont trois habitudes qui décident si votre SaaS tiendra à 10 000 utilisateurs. D’abord les index — une requête qui scanne une table entière est rapide à 100 lignes et catastrophique à 1 million. Indexez les colonnes filtrées et jointes fréquemment, mesurez avec EXPLAIN. Ensuite les migrations : chaque changement de schéma doit être versionné et rejouable (Prisma Migrate), jamais appliqué à la main en production. Enfin le scaling : on monte d’abord verticalement (plus de CPU/RAM), on ajoute des réplicas en lecture, et on ne pense au sharding que très tard — la plupart des SaaS n’y arrivent jamais.',
      },
      {
        ul: [
          'Index : ciblez les colonnes des clauses WHERE, JOIN et ORDER BY ; un mauvais index coûte à l’écriture, un index manquant tue la lecture.',
          'Migrations : versionnées, testées, réversibles — la base évolue avec le produit sans downtime.',
          'Scaling : vertical puis réplicas en lecture ; Postgres tient des millions de lignes sans broncher bien avant qu’on parle de sharding.',
        ],
      },
      { h2: 'Le bon arbitrage pour une V1' },
      {
        p: 'Prendre PostgreSQL dès le départ, modéliser proprement, poser les bons index et versionner les migrations : voilà ce qui évite la réécriture à 12 mois. C’est exactement la fondation qu’on met en place dans nos V1 livrées en 7 jours à 15 000 € — Next.js, NestJS, Prisma et Postgres — une base qui vous suit du premier client au passage à l’échelle, sans dette technique cachée.',
      },
    ],
  },
  en: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Choosing the right database for a SaaS built to scale',
    excerpt:
      'PostgreSQL covers 90% of a SaaS’s needs. When to pick relational over NoSQL, and how to think about indexes, migrations and scaling from V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Database', 'Tech'],
    body: [
      {
        p: 'For a SaaS built to scale, the right default is PostgreSQL. It covers roughly 90% of what a web or mobile product needs: transactional data, relationships between entities, search, JSON, lightweight queues, and even part of the vector workload for AI. The real question is almost never "relational or NoSQL" — it’s "do I have a specific reason NOT to use Postgres". Most of the time, you don’t.',
      },
      { h2: 'PostgreSQL by default: why it works 9 times out of 10' },
      {
        p: 'A SaaS handles structured, interconnected data: users belonging to organizations, subscriptions tied to invoices, projects tied to tasks. That is exactly what relational databases are built for. Postgres layers super-powers on top of that foundation so you don’t have to stack extra tools: JSONB columns for semi-structured data, built-in full-text search, the pgvector extension for AI embeddings, and constraints that guarantee your data stays consistent.',
      },
      {
        ul: [
          'ACID transactions: your payments and critical data stay consistent, even after a crash.',
          'One system to operate, back up and monitor instead of three — lower cost, fewer outages.',
          'Mature ecosystem: Prisma, migrations, replication, managed hosting everywhere (Cloud Run, Neon, Supabase, RDS).',
          'JSONB when you need flexibility, without giving up relational guarantees for the rest.',
        ],
      },
      { h2: 'Relational vs NoSQL: when to leave Postgres' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) isn’t "more modern" — it answers different constraints. It only pays off when your use case genuinely fits: massive write-heavy volume, a truly unpredictable schema, or a need for extreme geographic distribution. For a typical B2B SaaS in its launch and growth phase, those constraints don’t exist yet — and adopting NoSQL too early makes you pay in complexity for something you’ll never use.',
      },
      {
        quote:
          'Picking NoSQL because "it scales" when you have 200 users is optimizing a problem you don’t have — at the expense of the ones you already do.',
      },
      { h2: 'Indexes, migrations, scaling: three reflexes to have from V1' },
      {
        p: 'A well-chosen database isn’t enough: three habits decide whether your SaaS holds up at 10,000 users. First, indexes — a query that scans a whole table is fast at 100 rows and catastrophic at 1 million. Index the columns you filter and join on often, and measure with EXPLAIN. Next, migrations: every schema change must be versioned and replayable (Prisma Migrate), never applied by hand in production. Finally, scaling: go vertical first (more CPU/RAM), add read replicas, and only think about sharding very late — most SaaS never get there.',
      },
      {
        ul: [
          'Indexes: target the columns in WHERE, JOIN and ORDER BY clauses; a bad index costs writes, a missing one kills reads.',
          'Migrations: versioned, tested, reversible — the database evolves with the product without downtime.',
          'Scaling: vertical first, then read replicas; Postgres handles millions of rows long before sharding ever comes up.',
        ],
      },
      { h2: 'The right call for a V1' },
      {
        p: 'Choosing PostgreSQL from day one, modeling cleanly, laying down the right indexes and versioning migrations: that’s what saves you a rewrite at month 12. It’s exactly the foundation we set up in our V1s shipped in 7 days for €15,000 — Next.js, NestJS, Prisma and Postgres — a database that carries you from your first customer to scale, with no hidden technical debt.',
      },
    ],
  },
  es: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Elegir bien la base de datos para un SaaS que va a escalar',
    excerpt:
      'PostgreSQL cubre el 90 % de las necesidades de un SaaS. Cuándo elegir relacional frente a NoSQL, y cómo pensar índices, migraciones y escalado desde la V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Base de datos', 'Tech'],
    body: [
      {
        p: 'Para un SaaS que va a escalar, la opción por defecto correcta es PostgreSQL. Cubre alrededor del 90 % de lo que necesita un producto web o móvil: datos transaccionales, relaciones entre entidades, búsqueda, JSON, colas ligeras e incluso parte de la carga vectorial para la IA. La verdadera pregunta casi nunca es "relacional o NoSQL": es "tengo una razón concreta para NO usar Postgres". La mayoría de las veces, no.',
      },
      { h2: 'PostgreSQL por defecto: por qué funciona 9 de cada 10 veces' },
      {
        p: 'Un SaaS maneja datos estructurados y relacionados entre sí: usuarios que pertenecen a organizaciones, suscripciones vinculadas a facturas, proyectos vinculados a tareas. Es exactamente para lo que se crearon las bases relacionales. Postgres añade sobre esa base superpoderes que evitan apilar herramientas: columnas JSONB para lo semiestructurado, búsqueda de texto completo integrada, la extensión pgvector para los embeddings de IA y restricciones que garantizan la integridad de tus datos.',
      },
      {
        ul: [
          'Transacciones ACID: tus pagos y datos críticos se mantienen coherentes, incluso tras una caída.',
          'Un solo sistema que operar, respaldar y monitorizar en lugar de tres: menos costes, menos caídas.',
          'Ecosistema maduro: Prisma, migraciones, replicación, hosting gestionado en todas partes (Cloud Run, Neon, Supabase, RDS).',
          'JSONB cuando necesitas flexibilidad, sin renunciar a lo relacional para el resto.',
        ],
      },
      { h2: 'Relacional vs NoSQL: cuándo salir de Postgres' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) no es "más moderno", responde a otras restricciones. Solo ganas si tu caso de uso encaja de verdad: volumen masivo con muchísima escritura, un esquema realmente impredecible o necesidad de una distribución geográfica extrema. Para un SaaS B2B típico en fase de lanzamiento y crecimiento, esas restricciones aún no existen, y adoptar NoSQL demasiado pronto te hace pagar en complejidad algo que nunca usarás.',
      },
      {
        quote:
          'Elegir NoSQL porque "escala" cuando tienes 200 usuarios es optimizar un problema que no tienes, a costa de los que ya tienes.',
      },
      { h2: 'Índices, migraciones, escalado: tres reflejos desde la V1' },
      {
        p: 'Una base bien elegida no basta: son tres hábitos los que deciden si tu SaaS aguanta con 10 000 usuarios. Primero, los índices: una consulta que escanea una tabla entera es rápida con 100 filas y catastrófica con 1 millón. Indexa las columnas que filtras y unes con frecuencia, y mide con EXPLAIN. Luego, las migraciones: cada cambio de esquema debe estar versionado y ser reproducible (Prisma Migrate), nunca aplicado a mano en producción. Por último, el escalado: primero vertical (más CPU/RAM), añade réplicas de lectura y piensa en el sharding solo muy tarde; la mayoría de los SaaS nunca llegan ahí.',
      },
      {
        ul: [
          'Índices: apunta a las columnas de las cláusulas WHERE, JOIN y ORDER BY; un mal índice cuesta escritura, uno que falta mata la lectura.',
          'Migraciones: versionadas, probadas, reversibles; la base evoluciona con el producto sin downtime.',
          'Escalado: primero vertical, luego réplicas de lectura; Postgres soporta millones de filas mucho antes de que aparezca el sharding.',
        ],
      },
      { h2: 'La decisión correcta para una V1' },
      {
        p: 'Elegir PostgreSQL desde el primer día, modelar con limpieza, poner los índices adecuados y versionar las migraciones: eso es lo que te evita una reescritura al mes 12. Es exactamente la base que montamos en nuestras V1 entregadas en 7 días por 15 000 € —Next.js, NestJS, Prisma y Postgres—, una base que te acompaña desde tu primer cliente hasta el salto de escala, sin deuda técnica oculta.',
      },
    ],
  },
  de: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Die richtige Datenbank für ein SaaS wählen, das skalieren soll',
    excerpt:
      'PostgreSQL deckt 90 % der Anforderungen eines SaaS ab. Wann relational statt NoSQL, und wie man Indizes, Migrationen und Skalierung ab der V1 denkt.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Datenbank', 'Tech'],
    body: [
      {
        p: 'Für ein SaaS, das skalieren soll, ist die richtige Standardwahl PostgreSQL. Es deckt rund 90 % dessen ab, was ein Web- oder Mobile-Produkt braucht: transaktionale Daten, Beziehungen zwischen Entitäten, Suche, JSON, leichtgewichtige Queues und sogar einen Teil der Vektor-Last für KI. Die eigentliche Frage lautet fast nie "relational oder NoSQL", sondern "habe ich einen konkreten Grund, NICHT Postgres zu nehmen". Meistens nicht.',
      },
      { h2: 'PostgreSQL als Standard: warum es in 9 von 10 Fällen passt' },
      {
        p: 'Ein SaaS verarbeitet strukturierte, miteinander verknüpfte Daten: Nutzer, die zu Organisationen gehören, Abos, die an Rechnungen hängen, Projekte, die mit Aufgaben verbunden sind. Genau dafür sind relationale Datenbanken gemacht. Postgres legt auf dieses Fundament Superkräfte, die das Stapeln zusätzlicher Tools überflüssig machen: JSONB-Spalten für Halbstrukturiertes, integrierte Volltextsuche, die Erweiterung pgvector für KI-Embeddings und Constraints, die die Integrität deiner Daten garantieren.',
      },
      {
        ul: [
          'ACID-Transaktionen: Zahlungen und kritische Daten bleiben konsistent, selbst nach einem Absturz.',
          'Ein System statt drei zum Betreiben, Sichern und Überwachen — weniger Kosten, weniger Ausfälle.',
          'Reifes Ökosystem: Prisma, Migrationen, Replikation, überall managed Hosting (Cloud Run, Neon, Supabase, RDS).',
          'JSONB, wenn du Flexibilität brauchst, ohne für den Rest auf Relationalität zu verzichten.',
        ],
      },
      { h2: 'Relational vs. NoSQL: wann man Postgres verlässt' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) ist nicht "moderner", es beantwortet andere Anforderungen. Es zahlt sich nur aus, wenn dein Anwendungsfall wirklich passt: massives, schreibintensives Volumen, ein wirklich unvorhersehbares Schema oder der Bedarf an extremer geografischer Verteilung. Für ein typisches B2B-SaaS in der Launch- und Wachstumsphase existieren diese Anforderungen noch nicht — und wer NoSQL zu früh einführt, zahlt in Komplexität für etwas, das er nie nutzen wird.',
      },
      {
        quote:
          'NoSQL zu wählen, weil "es skaliert", während man 200 Nutzer hat, heißt ein Problem zu optimieren, das man nicht hat — auf Kosten derer, die man schon hat.',
      },
      { h2: 'Indizes, Migrationen, Skalierung: drei Reflexe ab der V1' },
      {
        p: 'Eine gut gewählte Datenbank reicht nicht: Drei Gewohnheiten entscheiden, ob dein SaaS bei 10.000 Nutzern hält. Erstens Indizes — eine Query, die eine ganze Tabelle scannt, ist bei 100 Zeilen schnell und bei 1 Million katastrophal. Indiziere die Spalten, nach denen du häufig filterst und joinst, und miss mit EXPLAIN. Zweitens Migrationen: Jede Schemaänderung muss versioniert und wiederholbar sein (Prisma Migrate), niemals von Hand in der Produktion angewandt. Drittens Skalierung: zuerst vertikal (mehr CPU/RAM), dann Read-Replicas, und über Sharding denkt man erst sehr spät nach — die meisten SaaS kommen nie dorthin.',
      },
      {
        ul: [
          'Indizes: ziele auf die Spalten in WHERE-, JOIN- und ORDER-BY-Klauseln; ein schlechter Index kostet beim Schreiben, ein fehlender killt das Lesen.',
          'Migrationen: versioniert, getestet, reversibel — die Datenbank entwickelt sich mit dem Produkt ohne Downtime.',
          'Skalierung: zuerst vertikal, dann Read-Replicas; Postgres verkraftet Millionen Zeilen, lange bevor Sharding zum Thema wird.',
        ],
      },
      { h2: 'Die richtige Entscheidung für eine V1' },
      {
        p: 'PostgreSQL von Tag eins wählen, sauber modellieren, die richtigen Indizes setzen und Migrationen versionieren: Das erspart dir das Neuschreiben in Monat 12. Genau dieses Fundament bauen wir in unseren V1s, die wir in 7 Tagen für 15.000 € liefern — Next.js, NestJS, Prisma und Postgres —, eine Datenbank, die dich vom ersten Kunden bis zur Skalierung trägt, ohne versteckte technische Schulden.',
      },
    ],
  },
  it: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Scegliere bene il database per un SaaS destinato a scalare',
    excerpt:
      'PostgreSQL copre il 90% delle esigenze di un SaaS. Quando scegliere il relazionale invece del NoSQL, e come pensare a indici, migrazioni e scaling dalla V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Database', 'Tech'],
    body: [
      {
        p: 'Per un SaaS destinato a scalare, la scelta di default corretta è PostgreSQL. Copre circa il 90% di ciò che serve a un prodotto web o mobile: dati transazionali, relazioni tra entità, ricerca, JSON, code leggere e persino parte del carico vettoriale per l’IA. La vera domanda non è quasi mai "relazionale o NoSQL": è "ho una ragione precisa per NON usare Postgres". Nella maggior parte dei casi, no.',
      },
      { h2: 'PostgreSQL di default: perché funziona 9 volte su 10' },
      {
        p: 'Un SaaS gestisce dati strutturati e collegati tra loro: utenti che appartengono a organizzazioni, abbonamenti legati a fatture, progetti legati a task. È esattamente ciò per cui i database relazionali sono fatti. Postgres aggiunge a questa base dei superpoteri che evitano di impilare strumenti: colonne JSONB per il semi-strutturato, ricerca full-text integrata, l’estensione pgvector per gli embedding dell’IA e vincoli che garantiscono l’integrità dei tuoi dati.',
      },
      {
        ul: [
          'Transazioni ACID: pagamenti e dati critici restano coerenti, anche dopo un crash.',
          'Un solo sistema da gestire, salvare e monitorare invece di tre: meno costi, meno guasti.',
          'Ecosistema maturo: Prisma, migrazioni, replica, hosting gestito ovunque (Cloud Run, Neon, Supabase, RDS).',
          'JSONB quando serve flessibilità, senza rinunciare al relazionale per il resto.',
        ],
      },
      { h2: 'Relazionale vs NoSQL: quando uscire da Postgres' },
      {
        p: 'Il NoSQL (MongoDB, DynamoDB, Firestore) non è "più moderno", risponde ad altri vincoli. Conviene solo se il tuo caso d’uso calza davvero: volumi enormi con scrittura molto intensa, uno schema realmente imprevedibile o la necessità di una distribuzione geografica estrema. Per un tipico SaaS B2B in fase di lancio e crescita, quei vincoli non esistono ancora, e adottare il NoSQL troppo presto ti fa pagare in complessità qualcosa che non userai mai.',
      },
      {
        quote:
          'Scegliere NoSQL perché "scala" quando hai 200 utenti significa ottimizzare un problema che non hai, a scapito di quelli che hai già.',
      },
      { h2: 'Indici, migrazioni, scaling: tre riflessi da avere dalla V1' },
      {
        p: 'Un database ben scelto non basta: sono tre abitudini a decidere se il tuo SaaS regge a 10.000 utenti. Primo, gli indici: una query che scansiona un’intera tabella è veloce a 100 righe e catastrofica a 1 milione. Indicizza le colonne che filtri e unisci di frequente, e misura con EXPLAIN. Poi le migrazioni: ogni cambiamento di schema deve essere versionato e ripetibile (Prisma Migrate), mai applicato a mano in produzione. Infine lo scaling: prima verticale (più CPU/RAM), poi repliche in lettura, e allo sharding si pensa solo molto tardi: la maggior parte dei SaaS non ci arriva mai.',
      },
      {
        ul: [
          'Indici: punta alle colonne delle clausole WHERE, JOIN e ORDER BY; un indice sbagliato costa in scrittura, uno mancante uccide la lettura.',
          'Migrazioni: versionate, testate, reversibili: il database evolve col prodotto senza downtime.',
          'Scaling: prima verticale, poi repliche in lettura; Postgres regge milioni di righe molto prima che si parli di sharding.',
        ],
      },
      { h2: 'La scelta giusta per una V1' },
      {
        p: 'Scegliere PostgreSQL dal primo giorno, modellare in modo pulito, mettere gli indici giusti e versionare le migrazioni: è questo che ti evita una riscrittura al dodicesimo mese. È esattamente la base che mettiamo in piedi nelle nostre V1 consegnate in 7 giorni a 15.000 € — Next.js, NestJS, Prisma e Postgres —, un database che ti accompagna dal primo cliente fino al salto di scala, senza debito tecnico nascosto.',
      },
    ],
  },
  pt: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Escolher bem a base de dados para um SaaS que vai escalar',
    excerpt:
      'O PostgreSQL cobre 90% das necessidades de um SaaS. Quando escolher relacional em vez de NoSQL, e como pensar índices, migrações e escalabilidade desde a V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Base de dados', 'Tech'],
    body: [
      {
        p: 'Para um SaaS que vai escalar, a escolha padrão correta é o PostgreSQL. Ele cobre cerca de 90% do que um produto web ou mobile precisa: dados transacionais, relações entre entidades, pesquisa, JSON, filas leves e até parte da carga vetorial para a IA. A verdadeira pergunta quase nunca é "relacional ou NoSQL": é "tenho uma razão concreta para NÃO usar Postgres". Na maioria das vezes, não.',
      },
      { h2: 'PostgreSQL por padrão: por que funciona 9 em cada 10 vezes' },
      {
        p: 'Um SaaS lida com dados estruturados e relacionados entre si: utilizadores que pertencem a organizações, subscrições ligadas a faturas, projetos ligados a tarefas. É exatamente para isso que as bases relacionais foram feitas. O Postgres acrescenta a essa base superpoderes que evitam empilhar ferramentas: colunas JSONB para o semiestruturado, pesquisa full-text integrada, a extensão pgvector para os embeddings de IA e restrições que garantem a integridade dos teus dados.',
      },
      {
        ul: [
          'Transações ACID: os teus pagamentos e dados críticos mantêm-se coerentes, mesmo após uma falha.',
          'Um único sistema para operar, fazer backup e monitorizar em vez de três: menos custos, menos falhas.',
          'Ecossistema maduro: Prisma, migrações, replicação, hosting gerido em todo o lado (Cloud Run, Neon, Supabase, RDS).',
          'JSONB quando precisas de flexibilidade, sem abrir mão do relacional para o resto.',
        ],
      },
      { h2: 'Relacional vs NoSQL: quando sair do Postgres' },
      {
        p: 'O NoSQL (MongoDB, DynamoDB, Firestore) não é "mais moderno", responde a outras restrições. Só ganhas se o teu caso de uso encaixar mesmo: volume massivo com escrita muito intensa, um esquema realmente imprevisível ou a necessidade de uma distribuição geográfica extrema. Para um SaaS B2B típico em fase de lançamento e crescimento, essas restrições ainda não existem, e adotar NoSQL cedo demais faz-te pagar em complexidade algo que nunca vais usar.',
      },
      {
        quote:
          'Escolher NoSQL porque "escala" quando tens 200 utilizadores é otimizar um problema que não tens, à custa dos que já tens.',
      },
      { h2: 'Índices, migrações, escalabilidade: três reflexos desde a V1' },
      {
        p: 'Uma base bem escolhida não chega: são três hábitos que decidem se o teu SaaS aguenta com 10.000 utilizadores. Primeiro, os índices: uma query que varre uma tabela inteira é rápida com 100 linhas e catastrófica com 1 milhão. Indexa as colunas que filtras e juntas com frequência, e mede com EXPLAIN. Depois, as migrações: cada mudança de esquema deve ser versionada e reproduzível (Prisma Migrate), nunca aplicada à mão em produção. Por fim, a escalabilidade: primeiro vertical (mais CPU/RAM), depois réplicas de leitura, e no sharding só se pensa muito tarde: a maioria dos SaaS nunca lá chega.',
      },
      {
        ul: [
          'Índices: mira nas colunas das cláusulas WHERE, JOIN e ORDER BY; um índice mau custa na escrita, um em falta mata a leitura.',
          'Migrações: versionadas, testadas, reversíveis: a base evolui com o produto sem downtime.',
          'Escalabilidade: primeiro vertical, depois réplicas de leitura; o Postgres aguenta milhões de linhas muito antes de se falar em sharding.',
        ],
      },
      { h2: 'A decisão certa para uma V1' },
      {
        p: 'Escolher PostgreSQL desde o primeiro dia, modelar de forma limpa, pôr os índices certos e versionar as migrações: é isso que te evita uma reescrita ao 12.º mês. É exatamente a base que montamos nas nossas V1 entregues em 7 dias por 15.000 € — Next.js, NestJS, Prisma e Postgres —, uma base que te acompanha do primeiro cliente até ao salto de escala, sem dívida técnica escondida.',
      },
    ],
  },
  nl: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'De juiste database kiezen voor een SaaS die moet schalen',
    excerpt:
      'PostgreSQL dekt 90% van de behoeften van een SaaS. Wanneer relationeel boven NoSQL, en hoe je vanaf de V1 nadenkt over indexen, migraties en schaalbaarheid.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Database', 'Tech'],
    body: [
      {
        p: 'Voor een SaaS die moet schalen is de juiste standaardkeuze PostgreSQL. Het dekt zo’n 90% van wat een web- of mobiel product nodig heeft: transactionele data, relaties tussen entiteiten, zoeken, JSON, lichte queues en zelfs een deel van de vectorbelasting voor AI. De echte vraag is bijna nooit "relationeel of NoSQL", maar "heb ik een concrete reden om GEEN Postgres te nemen". Meestal niet.',
      },
      { h2: 'PostgreSQL als standaard: waarom het 9 van de 10 keer werkt' },
      {
        p: 'Een SaaS verwerkt gestructureerde, onderling verbonden data: gebruikers die bij organisaties horen, abonnementen gekoppeld aan facturen, projecten gekoppeld aan taken. Precies waarvoor relationele databases gemaakt zijn. Postgres legt daar superkrachten bovenop, zodat je geen extra tools hoeft te stapelen: JSONB-kolommen voor het semigestructureerde, ingebouwde full-text search, de pgvector-extensie voor AI-embeddings en constraints die de integriteit van je data garanderen.',
      },
      {
        ul: [
          'ACID-transacties: je betalingen en kritieke data blijven consistent, zelfs na een crash.',
          'Eén systeem om te beheren, back-uppen en monitoren in plaats van drie: minder kosten, minder storingen.',
          'Volwassen ecosysteem: Prisma, migraties, replicatie, overal managed hosting (Cloud Run, Neon, Supabase, RDS).',
          'JSONB wanneer je flexibiliteit nodig hebt, zonder de rest relationeel op te geven.',
        ],
      },
      { h2: 'Relationeel vs NoSQL: wanneer je Postgres verlaat' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) is niet "moderner", het beantwoordt andere eisen. Het loont alleen als je use case er echt bij past: enorm, schrijf-intensief volume, een werkelijk onvoorspelbaar schema of behoefte aan extreme geografische spreiding. Voor een typische B2B-SaaS in de lancerings- en groeifase bestaan die eisen nog niet, en NoSQL te vroeg invoeren laat je in complexiteit betalen voor iets wat je nooit zult gebruiken.',
      },
      {
        quote:
          'NoSQL kiezen omdat "het schaalt" terwijl je 200 gebruikers hebt, is een probleem optimaliseren dat je niet hebt, ten koste van de problemen die je al hebt.',
      },
      { h2: 'Indexen, migraties, schalen: drie reflexen vanaf de V1' },
      {
        p: 'Een goed gekozen database is niet genoeg: drie gewoontes bepalen of je SaaS het houdt bij 10.000 gebruikers. Ten eerste indexen: een query die een hele tabel scant is snel bij 100 rijen en rampzalig bij 1 miljoen. Indexeer de kolommen waarop je vaak filtert en joint, en meet met EXPLAIN. Daarna migraties: elke schemawijziging moet geversioneerd en herspeelbaar zijn (Prisma Migrate), nooit met de hand in productie toegepast. Ten slotte schalen: eerst verticaal (meer CPU/RAM), dan read replicas, en aan sharding denk je pas heel laat: de meeste SaaS komen er nooit.',
      },
      {
        ul: [
          'Indexen: mik op de kolommen in WHERE-, JOIN- en ORDER BY-clausules; een verkeerde index kost bij het schrijven, een ontbrekende doodt het lezen.',
          'Migraties: geversioneerd, getest, omkeerbaar: de database evolueert mee met het product zonder downtime.',
          'Schalen: eerst verticaal, dan read replicas; Postgres verwerkt miljoenen rijen ruim voordat sharding ter sprake komt.',
        ],
      },
      { h2: 'De juiste keuze voor een V1' },
      {
        p: 'PostgreSQL vanaf dag één kiezen, netjes modelleren, de juiste indexen leggen en migraties versioneren: dat bespaart je een herschrijving in maand 12. Het is precies de basis die we opzetten in onze V1"s, geleverd in 7 dagen voor € 15.000 — Next.js, NestJS, Prisma en Postgres —, een database die je meeneemt van je eerste klant tot de opschaling, zonder verborgen technische schuld.',
      },
    ],
  },
  ar: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'اختيار قاعدة البيانات المناسبة لـ SaaS مُعدّ للتوسّع',
    excerpt:
      'يغطّي PostgreSQL نحو 90% من احتياجات أي SaaS. متى تختار العلائقي بدل NoSQL، وكيف تفكّر في الفهارس والترحيلات والتوسّع منذ الـ V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['قاعدة البيانات', 'تقنية'],
    body: [
      {
        p: 'بالنسبة إلى SaaS مُعدّ للتوسّع، الخيار الافتراضي الصحيح هو PostgreSQL. فهو يغطّي نحو 90% مما يحتاجه منتج ويب أو موبايل: البيانات المعاملاتية، والعلاقات بين الكيانات، والبحث، وJSON، والطوابير الخفيفة، وحتى جزءاً من الحِمل الشعاعي الخاص بالذكاء الاصطناعي. السؤال الحقيقي لا يكون تقريباً "علائقي أم NoSQL"، بل "هل لديّ سبب محدّد كي لا أستخدم Postgres". في معظم الأحيان، لا.',
      },
      { h2: 'PostgreSQL كخيار افتراضي: لماذا ينجح 9 مرات من كل 10' },
      {
        p: 'يتعامل الـ SaaS مع بيانات مُهيكلة ومترابطة: مستخدمون ينتمون إلى منظمات، واشتراكات مرتبطة بفواتير، ومشاريع مرتبطة بمهام. هذا بالضبط ما صُمّمت له قواعد البيانات العلائقية. ويضيف Postgres فوق هذا الأساس قدرات خارقة تُغنيك عن تكديس الأدوات: أعمدة JSONB للبيانات شبه المُهيكلة، وبحث نصّي كامل مدمج، وامتداد pgvector لتضمينات الذكاء الاصطناعي، وقيود تضمن سلامة بياناتك.',
      },
      {
        ul: [
          'معاملات ACID: تبقى مدفوعاتك وبياناتك الحرجة متماسكة حتى بعد أي تعطّل.',
          'نظام واحد للتشغيل والنسخ الاحتياطي والمراقبة بدل ثلاثة: تكاليف أقل وأعطال أقل.',
          'منظومة ناضجة: Prisma، والترحيلات، والنسخ المتماثل، واستضافة مُدارة في كل مكان (Cloud Run، Neon، Supabase، RDS).',
          'JSONB عندما تحتاج إلى مرونة، دون التخلّي عن العلائقي في ما تبقّى.',
        ],
      },
      { h2: 'العلائقي مقابل NoSQL: متى تغادر Postgres' },
      {
        p: 'إن NoSQL (MongoDB، DynamoDB، Firestore) ليس "أحدث"، بل يستجيب لقيود مختلفة. لن تكسب منه إلا إذا كانت حالة استخدامك مطابقة فعلاً: حجم هائل بكتابة كثيفة جداً، أو مخطّط غير متوقّع بحق، أو حاجة إلى توزيع جغرافي متطرّف. أما لـ SaaS من نوع B2B في مرحلة الإطلاق والنمو، فهذه القيود لا وجود لها بعد، واعتماد NoSQL مبكّراً يجعلك تدفع تعقيداً مقابل شيء لن تستخدمه أبداً.',
      },
      {
        quote:
          'اختيار NoSQL لأنه "يتوسّع" بينما لديك 200 مستخدم هو تحسين مشكلة لا تملكها، على حساب المشكلات التي تملكها بالفعل.',
      },
      { h2: 'الفهارس والترحيلات والتوسّع: ثلاثة انعكاسات منذ الـ V1' },
      {
        p: 'لا تكفي قاعدة بيانات مختارة جيداً: ثلاث عادات هي التي تقرّر ما إذا كان الـ SaaS الخاص بك سيصمد عند 10,000 مستخدم. أولاً الفهارس: استعلام يمسح جدولاً كاملاً يكون سريعاً عند 100 صف وكارثياً عند مليون. فهرِس الأعمدة التي تُصفّي وتربط عليها كثيراً، وقِس باستخدام EXPLAIN. ثم الترحيلات: يجب أن يكون كل تغيير في المخطّط مُؤرّخاً وقابلاً لإعادة التنفيذ (Prisma Migrate)، ولا يُطبَّق يدوياً في الإنتاج أبداً. وأخيراً التوسّع: عمودياً أولاً (المزيد من CPU/RAM)، ثم نسخ للقراءة، ولا يُفكَّر في التقسيم (sharding) إلا متأخراً جداً: معظم منتجات SaaS لا تصل إليه أبداً.',
      },
      {
        ul: [
          'الفهارس: استهدف أعمدة جُمل WHERE وJOIN وORDER BY؛ فهرس سيّئ يكلّف عند الكتابة، وفهرس مفقود يقتل القراءة.',
          'الترحيلات: مُؤرّخة ومُختبَرة وقابلة للعكس؛ تتطوّر القاعدة مع المنتج دون توقّف للخدمة.',
          'التوسّع: عمودياً أولاً ثم نسخ للقراءة؛ يتحمّل Postgres ملايين الصفوف قبل وقت طويل من الحديث عن sharding.',
        ],
      },
      { h2: 'القرار الصحيح لـ V1' },
      {
        p: 'اختيار PostgreSQL منذ اليوم الأول، والنمذجة النظيفة، ووضع الفهارس الصحيحة، وتأريخ الترحيلات: هذا ما يجنّبك إعادة الكتابة في الشهر الثاني عشر. وهو تماماً الأساس الذي نُرسيه في نُسخ V1 التي نُسلّمها في 7 أيام بسعر 15,000 يورو — Next.js وNestJS وPrisma وPostgres — قاعدة تُرافقك من عميلك الأول حتى الانتقال إلى التوسّع، من دون دَين تقني خفيّ.',
      },
    ],
  },
  pl: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Jak dobrze wybrać bazę danych dla SaaS gotowego na skalowanie',
    excerpt:
      'PostgreSQL pokrywa 90% potrzeb SaaS. Kiedy wybrać relacyjną zamiast NoSQL i jak myśleć o indeksach, migracjach i skalowaniu już od V1.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Baza danych', 'Tech'],
    body: [
      {
        p: 'Dla SaaS gotowego na skalowanie właściwym domyślnym wyborem jest PostgreSQL. Pokrywa około 90% tego, czego potrzebuje produkt webowy lub mobilny: dane transakcyjne, relacje między encjami, wyszukiwanie, JSON, lekkie kolejki, a nawet część obciążenia wektorowego dla AI. Prawdziwe pytanie prawie nigdy nie brzmi "relacyjna czy NoSQL", lecz "czy mam konkretny powód, żeby NIE wybrać Postgresa". W większości przypadków — nie.',
      },
      { h2: 'PostgreSQL domyślnie: dlaczego działa w 9 na 10 przypadków' },
      {
        p: 'SaaS obsługuje dane ustrukturyzowane i powiązane ze sobą: użytkownicy należący do organizacji, subskrypcje powiązane z fakturami, projekty powiązane z zadaniami. To dokładnie to, do czego stworzono bazy relacyjne. Postgres dokłada do tej podstawy supermoce, które pozwalają nie piętrzyć kolejnych narzędzi: kolumny JSONB dla danych półustrukturyzowanych, wbudowane wyszukiwanie pełnotekstowe, rozszerzenie pgvector dla embeddingów AI oraz ograniczenia gwarantujące integralność twoich danych.',
      },
      {
        ul: [
          'Transakcje ACID: twoje płatności i dane krytyczne pozostają spójne, nawet po awarii.',
          'Jeden system do obsługi, backupu i monitoringu zamiast trzech: niższe koszty, mniej awarii.',
          'Dojrzały ekosystem: Prisma, migracje, replikacja, hosting zarządzany wszędzie (Cloud Run, Neon, Supabase, RDS).',
          'JSONB, gdy potrzebujesz elastyczności, bez rezygnowania z relacyjności w pozostałych obszarach.',
        ],
      },
      { h2: 'Relacyjna vs NoSQL: kiedy opuścić Postgresa' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) nie jest "nowocześniejszy", odpowiada na inne ograniczenia. Opłaca się tylko wtedy, gdy twój przypadek użycia naprawdę pasuje: ogromny wolumen z bardzo intensywnym zapisem, naprawdę nieprzewidywalny schemat albo potrzeba ekstremalnej dystrybucji geograficznej. Dla typowego SaaS B2B na etapie startu i wzrostu te ograniczenia jeszcze nie istnieją, a wdrożenie NoSQL zbyt wcześnie każe ci płacić złożonością za coś, czego nigdy nie użyjesz.',
      },
      {
        quote:
          'Wybór NoSQL, bo "się skaluje", gdy masz 200 użytkowników, to optymalizacja problemu, którego nie masz, kosztem tych, które już masz.',
      },
      { h2: 'Indeksy, migracje, skalowanie: trzy odruchy już od V1' },
      {
        p: 'Dobrze wybrana baza to nie wszystko: o tym, czy twój SaaS wytrzyma przy 10 000 użytkowników, decydują trzy nawyki. Po pierwsze indeksy: zapytanie skanujące całą tabelę jest szybkie przy 100 wierszach i katastrofalne przy 1 milionie. Indeksuj kolumny, po których często filtrujesz i łączysz, i mierz za pomocą EXPLAIN. Następnie migracje: każda zmiana schematu musi być wersjonowana i odtwarzalna (Prisma Migrate), nigdy nakładana ręcznie na produkcji. Wreszcie skalowanie: najpierw pionowo (więcej CPU/RAM), potem repliki do odczytu, a o shardingu myśli się dopiero bardzo późno: większość SaaS nigdy do tego nie dochodzi.',
      },
      {
        ul: [
          'Indeksy: celuj w kolumny z klauzul WHERE, JOIN i ORDER BY; zły indeks kosztuje przy zapisie, brakujący zabija odczyt.',
          'Migracje: wersjonowane, testowane, odwracalne: baza ewoluuje wraz z produktem bez downtime.',
          'Skalowanie: najpierw pionowo, potem repliki do odczytu; Postgres obsługuje miliony wierszy na długo przed tym, zanim pojawi się sharding.',
        ],
      },
      { h2: 'Właściwa decyzja dla V1' },
      {
        p: 'Wybór PostgreSQL od pierwszego dnia, czyste modelowanie, założenie właściwych indeksów i wersjonowanie migracji: to właśnie oszczędza ci przepisywania w 12. miesiącu. To dokładnie ten fundament, który budujemy w naszych V1 dostarczanych w 7 dni za 15 000 € — Next.js, NestJS, Prisma i Postgres — baza, która prowadzi cię od pierwszego klienta aż po skalowanie, bez ukrytego długu technicznego.',
      },
    ],
  },
  tr: {
    slug: 'choisir-sa-base-de-donnees-saas',
    title: 'Ölçeklenecek bir SaaS için doğru veritabanını seçmek',
    excerpt:
      'PostgreSQL bir SaaS’in ihtiyaçlarının %90"ını karşılar. Ne zaman NoSQL yerine ilişkisel, ve V1"den itibaren indeksleri, migration’ları ve ölçeklemeyi nasıl düşünmeli.',
    date: '2025-12-31',
    readingMinutes: 6,
    tags: ['Veritabanı', 'Tech'],
    body: [
      {
        p: 'Ölçeklenecek bir SaaS için doğru varsayılan seçim PostgreSQL’dir. Bir web ya da mobil ürünün ihtiyaç duyduğu şeyin yaklaşık %90"ını karşılar: işlemsel veriler, varlıklar arası ilişkiler, arama, JSON, hafif kuyruklar ve hatta AI için vektör yükünün bir kısmı. Asıl soru neredeyse hiçbir zaman "ilişkisel mi NoSQL mi" değildir; "Postgres’i KULLANMAMAK için somut bir nedenim var mı" sorusudur. Çoğu zaman, yok.',
      },
      { h2: 'Varsayılan olarak PostgreSQL: neden 10"da 9 işe yarar' },
      {
        p: 'Bir SaaS, yapılandırılmış ve birbirine bağlı verilerle çalışır: organizasyonlara ait kullanıcılar, faturalara bağlı abonelikler, görevlere bağlı projeler. İlişkisel veritabanları tam da bunun için yaratılmıştır. Postgres bu temele, ek araçlar istiflemekten kurtaran süper güçler ekler: yarı yapılandırılmış veriler için JSONB sütunları, yerleşik tam metin araması, AI embedding’leri için pgvector eklentisi ve verilerinizin bütünlüğünü güvence altına alan kısıtlar.',
      },
      {
        ul: [
          'ACID işlemleri: ödemeleriniz ve kritik verileriniz, bir çökme sonrasında bile tutarlı kalır.',
          'Üç yerine tek bir sistem işletmek, yedeklemek ve izlemek: daha az maliyet, daha az kesinti.',
          'Olgun ekosistem: Prisma, migration’lar, replikasyon, her yerde yönetilen hosting (Cloud Run, Neon, Supabase, RDS).',
          'Esnekliğe ihtiyaç duyduğunuzda JSONB, gerisi için ilişkiselden vazgeçmeden.',
        ],
      },
      { h2: 'İlişkisel vs NoSQL: Postgres’ten ne zaman çıkmalı' },
      {
        p: 'NoSQL (MongoDB, DynamoDB, Firestore) "daha modern" değildir; farklı kısıtlara yanıt verir. Yalnızca kullanım senaryonuz gerçekten uyuyorsa kazandırır: yazma ağırlıklı devasa hacim, gerçekten öngörülemez bir şema ya da aşırı coğrafi dağıtım ihtiyacı. Lansman ve büyüme aşamasındaki tipik bir B2B SaaS için bu kısıtlar henüz yoktur; NoSQL’i çok erken benimsemek, asla kullanmayacağınız bir şey için karmaşıklıkla ödeme yaptırır.',
      },
      {
        quote:
          '200 kullanıcınız varken "ölçekleniyor" diye NoSQL seçmek, sahip olmadığınız bir sorunu, zaten sahip olduklarınızın pahasına optimize etmektir.',
      },
      { h2: 'İndeksler, migration’lar, ölçekleme: V1"den itibaren üç refleks' },
      {
        p: 'İyi seçilmiş bir veritabanı yeterli değildir: SaaS’inizin 10.000 kullanıcıda dayanıp dayanmayacağına üç alışkanlık karar verir. Önce indeksler: bütün bir tabloyu tarayan bir sorgu 100 satırda hızlı, 1 milyonda felakettir. Sık filtreleyip birleştirdiğiniz sütunları indeksleyin ve EXPLAIN ile ölçün. Sonra migration’lar: her şema değişikliği versiyonlanmış ve yeniden çalıştırılabilir olmalı (Prisma Migrate), asla üretimde elle uygulanmamalı. Son olarak ölçekleme: önce dikey (daha fazla CPU/RAM), ardından okuma replikaları ve sharding yalnızca çok geç düşünülür: çoğu SaaS oraya hiç ulaşmaz.',
      },
      {
        ul: [
          'İndeksler: WHERE, JOIN ve ORDER BY yan tümcelerindeki sütunları hedefleyin; kötü bir indeks yazmaya mal olur, eksik bir indeks okumayı öldürür.',
          'Migration’lar: versiyonlanmış, test edilmiş, geri alınabilir: veritabanı, kesinti olmadan ürünle birlikte gelişir.',
          'Ölçekleme: önce dikey, sonra okuma replikaları; Postgres, sharding gündeme gelmeden çok önce milyonlarca satırı kaldırır.',
        ],
      },
      { h2: 'Bir V1 için doğru karar' },
      {
        p: 'İlk günden PostgreSQL’i seçmek, temiz modellemek, doğru indeksleri koymak ve migration’ları versiyonlamak: 12. ayda yeniden yazmaktan sizi kurtaran şey budur. Bu, 7 günde 15.000 €"ya teslim ettiğimiz V1"lerde kurduğumuz temelin ta kendisidir — Next.js, NestJS, Prisma ve Postgres — ilk müşterinizden ölçeğe geçişe kadar sizinle gelen, gizli teknik borcu olmayan bir veritabanı.',
      },
    ],
  },
}
