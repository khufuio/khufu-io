import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: "Lancer son SaaS en solo : quoi externaliser (et quoi garder)",
    excerpt:
      "En solo, externalisez le build de la V1 et l’infra ; gardez la vision produit, la relation client et la distribution. Le guide pour éviter la dépendance.",
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Founder', 'Solo'],
    body: [
      {
        p: "En solo, la règle est simple : externalisez ce qui est un moyen, gardez ce qui est votre avantage. Le build de votre V1 et l’infrastructure sont des moyens — confiez-les à qui va plus vite que vous. La vision produit, la relation client et la distribution sont votre avantage — ne les déléguez jamais. Le vrai risque du founder solo n’est pas de manquer de temps, c’est de devenir dépendant de choix qu’il ne maîtrise plus.",
      },
      { h2: "Ce qu’il faut externaliser" },
      {
        p: "Certaines briques n’ont aucune valeur différenciante : elles doivent juste être solides, rapides à mettre en place et invisibles pour l’utilisateur. Les faire soi-même en solo, c’est brûler des semaines sur un terrain où vous n’avez aucun avantage.",
      },
      {
        ul: [
          "Le build de la V1 : un forfait à prix fixe (chez Khufu, une V1 en production en 7 jours pour 15 000 €, code source à vous) vous fait gagner des mois face à un recrutement ou un apprentissage from scratch.",
          "L’infrastructure : hébergement, base de données, CI/CD, monitoring. Des plateformes comme Vercel ou Cloud Run gèrent le gros du travail — inutile de réinventer un DevOps maison.",
          "Les briques commoditisées : authentification, paiement, emails transactionnels. On les branche, on ne les recode pas de zéro.",
        ],
      },
      { h2: "Ce qu’il faut absolument garder" },
      {
        p: "Ce qui fait vivre ou mourir votre SaaS ne se sous-traite pas. Ce sont les trois choses que personne ne peut porter à votre place, et celles qui décident si vous aurez des clients dans six mois.",
      },
      {
        ul: [
          "La vision produit : quel problème vous résolvez, pour qui, et ce que vous refusez de faire. C’est votre boussole — un prestataire exécute, il ne décide pas à votre place.",
          "La relation client : parlez à vos utilisateurs vous-même. Le support, les entretiens, l’onboarding des premiers clients sont votre meilleure source d’apprentissage, pas une corvée à déléguer.",
          "La distribution : SEO, contenu, ventes, communauté. Un bon produit sans canal d’acquisition ne se vend pas tout seul — c’est votre travail numéro un après le lancement.",
        ],
      },
      {
        quote:
          "Externalisez la construction, jamais la direction : un prestataire peut coder votre produit en une semaine, mais personne ne peut avoir votre vision à votre place.",
      },
      { h2: "Externaliser sans devenir dépendant" },
      {
        p: "Déléguer le build ne veut pas dire perdre le contrôle. La dépendance se prévient dès le premier jour, en posant des conditions claires sur ce que vous récupérez et sur qui peut reprendre le travail après.",
      },
      {
        ul: [
          "Exigez le code source et une stack standard (Next.js, NestJS, Prisma, PostgreSQL) : n’importe quel dev pourra reprendre, vous n’êtes prisonnier de personne.",
          "Fuyez le lock-in no-code : un produit qui gagne des utilisateurs finit toujours par se cogner aux limites de Bubble ou Webflow, et vous force à tout réécrire.",
          "Gardez la maîtrise des accès : domaine, comptes cloud, dépôt Git et paiement à votre nom, jamais à celui du prestataire.",
        ],
      },
      { h2: "La règle : moyen ou avantage ?" },
      {
        p: "Avant chaque décision, posez-vous une seule question : est-ce un moyen ou mon avantage ? Si c’est un moyen, externalisez-le pour aller plus vite. Si c’est votre avantage, gardez-le et investissez-y votre temps. Un founder solo ne gagne pas en faisant tout — il gagne en concentrant ses rares heures là où lui seul peut faire la différence.",
      },
    ],
  },
  en: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Launching a SaaS solo: what to outsource (and what to keep)',
    excerpt:
      'As a solo founder, outsource the V1 build and the infra; keep product vision, customer relationships and distribution. The guide to avoiding dependency.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Founder', 'Solo'],
    body: [
      {
        p: 'Going solo, the rule is simple: outsource what is a means, keep what is your edge. Your V1 build and your infrastructure are means — hand them to whoever moves faster than you. Product vision, customer relationships and distribution are your edge — never delegate them. The real risk for a solo founder is not running out of time, it is becoming dependent on choices they no longer control.',
      },
      { h2: 'What to outsource' },
      {
        p: 'Some building blocks carry no differentiating value: they just need to be solid, quick to set up and invisible to the user. Doing them yourself as a solo founder means burning weeks on ground where you have no advantage.',
      },
      {
        ul: [
          'The V1 build: a fixed-price package (at Khufu, a production V1 in 7 days for €15,000, source code yours) saves you months versus hiring or learning from scratch.',
          'Infrastructure: hosting, database, CI/CD, monitoring. Platforms like Vercel or Cloud Run handle the heavy lifting — no need to reinvent a homemade DevOps setup.',
          'Commoditised blocks: authentication, payments, transactional emails. You plug them in, you do not recode them from scratch.',
        ],
      },
      { h2: 'What you absolutely must keep' },
      {
        p: 'What makes or breaks your SaaS cannot be subcontracted. These are the three things no one can carry for you, and the ones that decide whether you have customers in six months.',
      },
      {
        ul: [
          'Product vision: which problem you solve, for whom, and what you refuse to build. It is your compass — a vendor executes, it does not decide for you.',
          'Customer relationships: talk to your users yourself. Support, interviews and onboarding your first customers are your best source of learning, not a chore to delegate.',
          'Distribution: SEO, content, sales, community. A great product with no acquisition channel does not sell itself — it is your number-one job after launch.',
        ],
      },
      {
        quote:
          'Outsource the building, never the direction: a vendor can code your product in a week, but no one can have your vision for you.',
      },
      { h2: 'Outsourcing without becoming dependent' },
      {
        p: 'Delegating the build does not mean losing control. Dependency is prevented from day one, by setting clear terms on what you get back and on who can take over the work afterwards.',
      },
      {
        ul: [
          'Demand the source code and a standard stack (Next.js, NestJS, Prisma, PostgreSQL): any developer can take over, and you are captive to no one.',
          'Avoid no-code lock-in: a product that gains users always ends up hitting the limits of Bubble or Webflow, forcing you to rewrite everything.',
          'Keep control of the access: domain, cloud accounts, Git repository and payments in your name, never the vendor’s.',
        ],
      },
      { h2: 'The rule: a means or an edge?' },
      {
        p: 'Before every decision, ask yourself one question: is this a means or my edge? If it is a means, outsource it to move faster. If it is your edge, keep it and invest your time in it. A solo founder does not win by doing everything — they win by focusing their scarce hours where they alone can make the difference.',
      },
    ],
  },
  es: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Lanzar un SaaS en solitario: qué externalizar (y qué conservar)',
    excerpt:
      'En solitario, externaliza el desarrollo de la V1 y la infra; conserva la visión de producto, la relación con el cliente y la distribución. Evita la dependencia.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Fundador', 'En solitario'],
    body: [
      {
        p: 'En solitario, la regla es simple: externaliza lo que es un medio y conserva lo que es tu ventaja. El desarrollo de tu V1 y la infraestructura son medios: confíalos a quien va más rápido que tú. La visión de producto, la relación con el cliente y la distribución son tu ventaja: nunca las delegues. El verdadero riesgo del fundador en solitario no es quedarse sin tiempo, es volverse dependiente de decisiones que ya no controla.',
      },
      { h2: 'Qué externalizar' },
      {
        p: 'Algunos bloques no aportan ningún valor diferenciador: solo tienen que ser sólidos, rápidos de montar e invisibles para el usuario. Hacerlos tú mismo en solitario es quemar semanas en un terreno donde no tienes ninguna ventaja.',
      },
      {
        ul: [
          'El desarrollo de la V1: un paquete de precio fijo (en Khufu, una V1 en producción en 7 días por 15 000 €, con el código fuente para ti) te ahorra meses frente a contratar o aprender desde cero.',
          'La infraestructura: hosting, base de datos, CI/CD, monitorización. Plataformas como Vercel o Cloud Run se encargan del grueso del trabajo; no hace falta reinventar un DevOps casero.',
          'Los bloques ya estandarizados: autenticación, pagos, emails transaccionales. Se conectan, no se programan desde cero.',
        ],
      },
      { h2: 'Qué debes conservar sí o sí' },
      {
        p: 'Lo que hace vivir o morir a tu SaaS no se subcontrata. Son las tres cosas que nadie puede sostener por ti, y las que deciden si tendrás clientes dentro de seis meses.',
      },
      {
        ul: [
          'La visión de producto: qué problema resuelves, para quién y qué te niegas a hacer. Es tu brújula: un proveedor ejecuta, no decide por ti.',
          'La relación con el cliente: habla tú mismo con tus usuarios. El soporte, las entrevistas y el onboarding de los primeros clientes son tu mejor fuente de aprendizaje, no una tarea que delegar.',
          'La distribución: SEO, contenido, ventas, comunidad. Un buen producto sin canal de captación no se vende solo; es tu trabajo número uno tras el lanzamiento.',
        ],
      },
      {
        quote:
          'Externaliza la construcción, nunca la dirección: un proveedor puede programar tu producto en una semana, pero nadie puede tener tu visión por ti.',
      },
      { h2: 'Externalizar sin volverte dependiente' },
      {
        p: 'Delegar el desarrollo no significa perder el control. La dependencia se previene desde el primer día, fijando condiciones claras sobre lo que recuperas y sobre quién puede retomar el trabajo después.',
      },
      {
        ul: [
          'Exige el código fuente y un stack estándar (Next.js, NestJS, Prisma, PostgreSQL): cualquier desarrollador podrá retomarlo y no quedas prisionero de nadie.',
          'Huye del lock-in del no-code: un producto que gana usuarios acaba siempre chocando con los límites de Bubble o Webflow, y te obliga a reescribirlo todo.',
          'Mantén el control de los accesos: dominio, cuentas cloud, repositorio Git y pagos a tu nombre, nunca al del proveedor.',
        ],
      },
      { h2: 'La regla: ¿medio o ventaja?' },
      {
        p: 'Antes de cada decisión, hazte una sola pregunta: ¿es un medio o mi ventaja? Si es un medio, externalízalo para ir más rápido. Si es tu ventaja, consérvalo e invierte tu tiempo en ello. Un fundador en solitario no gana haciéndolo todo: gana concentrando sus escasas horas donde solo él puede marcar la diferencia.',
      },
    ],
  },
  de: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Ein SaaS im Alleingang starten: was auslagern (und was behalten)',
    excerpt:
      'Als Solo-Gründer lagerst du den V1-Build und die Infra aus; Produktvision, Kundenbeziehung und Distribution behältst du. So vermeidest du Abhängigkeit.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Gründer', 'Solo'],
    body: [
      {
        p: 'Im Alleingang lautet die Regel einfach: Lagere aus, was ein Mittel ist, und behalte, was dein Vorteil ist. Der Build deiner V1 und die Infrastruktur sind Mittel — übergib sie an jemanden, der schneller ist als du. Produktvision, Kundenbeziehung und Distribution sind dein Vorteil — delegiere sie niemals. Das echte Risiko des Solo-Gründers ist nicht der Zeitmangel, sondern die Abhängigkeit von Entscheidungen, die er nicht mehr kontrolliert.',
      },
      { h2: 'Was du auslagern solltest' },
      {
        p: 'Manche Bausteine haben keinen differenzierenden Wert: Sie müssen nur solide, schnell aufgesetzt und für den Nutzer unsichtbar sein. Sie im Alleingang selbst zu bauen, heißt Wochen auf einem Feld zu verbrennen, auf dem du keinen Vorteil hast.',
      },
      {
        ul: [
          'Der V1-Build: Ein Festpreis-Paket (bei Khufu eine Produktions-V1 in 7 Tagen für 15 000 €, Quellcode gehört dir) spart dir Monate gegenüber Einstellen oder Lernen von Grund auf.',
          'Die Infrastruktur: Hosting, Datenbank, CI/CD, Monitoring. Plattformen wie Vercel oder Cloud Run übernehmen die Hauptarbeit — kein Grund, ein eigenes DevOps neu zu erfinden.',
          'Standardisierte Bausteine: Authentifizierung, Zahlungen, transaktionale E-Mails. Man bindet sie an, man programmiert sie nicht von null.',
        ],
      },
      { h2: 'Was du unbedingt behalten musst' },
      {
        p: 'Was über Leben und Tod deines SaaS entscheidet, lässt sich nicht auslagern. Es sind die drei Dinge, die niemand für dich tragen kann, und die darüber entscheiden, ob du in sechs Monaten Kunden hast.',
      },
      {
        ul: [
          'Die Produktvision: welches Problem du löst, für wen und was du bewusst nicht bauen willst. Sie ist dein Kompass — ein Dienstleister führt aus, er entscheidet nicht für dich.',
          'Die Kundenbeziehung: sprich selbst mit deinen Nutzern. Support, Interviews und das Onboarding der ersten Kunden sind deine beste Lernquelle, keine lästige Pflicht zum Delegieren.',
          'Die Distribution: SEO, Content, Vertrieb, Community. Ein gutes Produkt ohne Akquisekanal verkauft sich nicht von selbst — das ist nach dem Launch deine Aufgabe Nummer eins.',
        ],
      },
      {
        quote:
          'Lagere den Bau aus, nie die Richtung: Ein Dienstleister kann dein Produkt in einer Woche programmieren, aber niemand kann deine Vision für dich haben.',
      },
      { h2: 'Auslagern, ohne abhängig zu werden' },
      {
        p: 'Den Build zu delegieren heißt nicht, die Kontrolle zu verlieren. Abhängigkeit verhinderst du ab dem ersten Tag, indem du klare Bedingungen setzt: was du zurückbekommst und wer die Arbeit danach übernehmen kann.',
      },
      {
        ul: [
          'Verlange den Quellcode und einen Standard-Stack (Next.js, NestJS, Prisma, PostgreSQL): Jeder Entwickler kann übernehmen, du bist von niemandem abhängig.',
          'Meide No-Code-Lock-in: Ein Produkt, das Nutzer gewinnt, stößt irgendwann an die Grenzen von Bubble oder Webflow und zwingt dich, alles neu zu schreiben.',
          'Behalte die Kontrolle über die Zugänge: Domain, Cloud-Konten, Git-Repository und Zahlungen auf deinen Namen, nie auf den des Dienstleisters.',
        ],
      },
      { h2: 'Die Regel: Mittel oder Vorteil?' },
      {
        p: 'Stell dir vor jeder Entscheidung eine einzige Frage: Ist das ein Mittel oder mein Vorteil? Ist es ein Mittel, lagere es aus, um schneller zu sein. Ist es dein Vorteil, behalte es und investiere deine Zeit hinein. Ein Solo-Gründer gewinnt nicht, indem er alles macht — er gewinnt, indem er seine knappen Stunden dort bündelt, wo nur er den Unterschied machen kann.',
      },
    ],
  },
  it: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Lanciare un SaaS da soli: cosa esternalizzare (e cosa tenere)',
    excerpt:
      'Da solo, esternalizza lo sviluppo della V1 e l’infra; tieni visione di prodotto, relazione con il cliente e distribuzione. La guida per evitare la dipendenza.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Founder', 'Solo'],
    body: [
      {
        p: 'Da soli, la regola è semplice: esternalizza ciò che è un mezzo, tieni ciò che è il tuo vantaggio. Lo sviluppo della tua V1 e l’infrastruttura sono mezzi — affidali a chi va più veloce di te. La visione di prodotto, la relazione con il cliente e la distribuzione sono il tuo vantaggio — non delegarli mai. Il vero rischio del founder solo non è restare senza tempo, è diventare dipendente da scelte che non controlla più.',
      },
      { h2: 'Cosa esternalizzare' },
      {
        p: 'Alcuni blocchi non hanno alcun valore differenziante: devono solo essere solidi, rapidi da mettere in piedi e invisibili per l’utente. Farli da soli significa bruciare settimane su un terreno dove non hai alcun vantaggio.',
      },
      {
        ul: [
          'Lo sviluppo della V1: un pacchetto a prezzo fisso (in Khufu, una V1 in produzione in 7 giorni a 15 000 €, con il codice sorgente tuo) ti fa guadagnare mesi rispetto ad assumere o imparare da zero.',
          'L’infrastruttura: hosting, database, CI/CD, monitoraggio. Piattaforme come Vercel o Cloud Run gestiscono il grosso del lavoro — inutile reinventare un DevOps fatto in casa.',
          'I blocchi ormai standardizzati: autenticazione, pagamenti, email transazionali. Si collegano, non si riscrivono da zero.',
        ],
      },
      { h2: 'Cosa devi assolutamente tenere' },
      {
        p: 'Ciò che fa vivere o morire il tuo SaaS non si dà in appalto. Sono le tre cose che nessuno può portare al posto tuo, e quelle che decidono se avrai clienti tra sei mesi.',
      },
      {
        ul: [
          'La visione di prodotto: quale problema risolvi, per chi e cosa ti rifiuti di fare. È la tua bussola — un fornitore esegue, non decide al posto tuo.',
          'La relazione con il cliente: parla tu stesso con i tuoi utenti. Supporto, interviste e onboarding dei primi clienti sono la tua migliore fonte di apprendimento, non una scocciatura da delegare.',
          'La distribuzione: SEO, contenuti, vendite, community. Un buon prodotto senza canale di acquisizione non si vende da solo — è il tuo lavoro numero uno dopo il lancio.',
        ],
      },
      {
        quote:
          'Esternalizza la costruzione, mai la direzione: un fornitore può programmare il tuo prodotto in una settimana, ma nessuno può avere la tua visione al posto tuo.',
      },
      { h2: 'Esternalizzare senza diventare dipendente' },
      {
        p: 'Delegare lo sviluppo non significa perdere il controllo. La dipendenza si previene dal primo giorno, ponendo condizioni chiare su ciò che riprendi e su chi può portare avanti il lavoro dopo.',
      },
      {
        ul: [
          'Pretendi il codice sorgente e uno stack standard (Next.js, NestJS, Prisma, PostgreSQL): qualsiasi sviluppatore potrà subentrare e non sei prigioniero di nessuno.',
          'Evita il lock-in del no-code: un prodotto che guadagna utenti finisce sempre per scontrarsi con i limiti di Bubble o Webflow, costringendoti a riscrivere tutto.',
          'Mantieni il controllo degli accessi: dominio, account cloud, repository Git e pagamenti a tuo nome, mai a quello del fornitore.',
        ],
      },
      { h2: 'La regola: mezzo o vantaggio?' },
      {
        p: 'Prima di ogni decisione, poniti una sola domanda: è un mezzo o il mio vantaggio? Se è un mezzo, esternalizzalo per andare più veloce. Se è il tuo vantaggio, tienilo e investici il tuo tempo. Un founder solo non vince facendo tutto — vince concentrando le sue poche ore dove solo lui può fare la differenza.',
      },
    ],
  },
  pt: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Lançar um SaaS a solo: o que terceirizar (e o que manter)',
    excerpt:
      'A solo, terceirize o desenvolvimento da V1 e a infra; mantenha a visão de produto, a relação com o cliente e a distribuição. O guia para evitar a dependência.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Fundador', 'Solo'],
    body: [
      {
        p: 'A solo, a regra é simples: terceirize o que é um meio e mantenha o que é a sua vantagem. O desenvolvimento da sua V1 e a infraestrutura são meios — confie-os a quem vai mais rápido do que você. A visão de produto, a relação com o cliente e a distribuição são a sua vantagem — nunca as delegue. O verdadeiro risco do fundador solo não é ficar sem tempo, é tornar-se dependente de decisões que já não controla.',
      },
      { h2: 'O que terceirizar' },
      {
        p: 'Alguns blocos não têm nenhum valor diferenciador: só precisam de ser sólidos, rápidos de montar e invisíveis para o utilizador. Fazê-los sozinho é queimar semanas num terreno onde você não tem vantagem nenhuma.',
      },
      {
        ul: [
          'O desenvolvimento da V1: um pacote de preço fixo (na Khufu, uma V1 em produção em 7 dias por 15 000 €, com o código-fonte seu) poupa-lhe meses face a contratar ou aprender do zero.',
          'A infraestrutura: hosting, base de dados, CI/CD, monitorização. Plataformas como Vercel ou Cloud Run tratam do grosso do trabalho — não há por que reinventar um DevOps caseiro.',
          'Os blocos já padronizados: autenticação, pagamentos, emails transacionais. Ligam-se, não se reescrevem do zero.',
        ],
      },
      { h2: 'O que deve manter a todo o custo' },
      {
        p: 'O que faz o seu SaaS viver ou morrer não se subcontrata. São as três coisas que ninguém pode carregar por si, e as que decidem se terá clientes daqui a seis meses.',
      },
      {
        ul: [
          'A visão de produto: que problema resolve, para quem e o que se recusa a fazer. É a sua bússola — um prestador executa, não decide por si.',
          'A relação com o cliente: fale você mesmo com os seus utilizadores. O suporte, as entrevistas e o onboarding dos primeiros clientes são a sua melhor fonte de aprendizagem, não uma tarefa para delegar.',
          'A distribuição: SEO, conteúdo, vendas, comunidade. Um bom produto sem canal de aquisição não se vende sozinho — é o seu trabalho número um após o lançamento.',
        ],
      },
      {
        quote:
          'Terceirize a construção, nunca a direção: um prestador pode programar o seu produto numa semana, mas ninguém pode ter a sua visão por si.',
      },
      { h2: 'Terceirizar sem se tornar dependente' },
      {
        p: 'Delegar o desenvolvimento não significa perder o controlo. A dependência previne-se logo no primeiro dia, definindo condições claras sobre o que recupera e sobre quem pode retomar o trabalho depois.',
      },
      {
        ul: [
          'Exija o código-fonte e uma stack padrão (Next.js, NestJS, Prisma, PostgreSQL): qualquer programador poderá retomar e você não fica preso a ninguém.',
          'Fuja do lock-in do no-code: um produto que ganha utilizadores acaba sempre por embater nos limites do Bubble ou do Webflow, obrigando-o a reescrever tudo.',
          'Mantenha o controlo dos acessos: domínio, contas cloud, repositório Git e pagamentos em seu nome, nunca no do prestador.',
        ],
      },
      { h2: 'A regra: meio ou vantagem?' },
      {
        p: 'Antes de cada decisão, faça a si mesmo uma única pergunta: isto é um meio ou a minha vantagem? Se for um meio, terceirize-o para ir mais rápido. Se for a sua vantagem, mantenha-o e invista aí o seu tempo. Um fundador solo não ganha fazendo tudo — ganha concentrando as suas poucas horas onde só ele pode fazer a diferença.',
      },
    ],
  },
  nl: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Solo een SaaS lanceren: wat uitbesteden (en wat houden)',
    excerpt:
      'Als solo-founder besteed je de V1-build en de infra uit; productvisie, klantrelatie en distributie houd je zelf. De gids om afhankelijkheid te vermijden.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Oprichter', 'Solo'],
    body: [
      {
        p: 'Solo is de regel simpel: besteed uit wat een middel is, houd wat je voorsprong is. De build van je V1 en de infrastructuur zijn middelen — geef ze aan wie sneller is dan jij. Productvisie, klantrelatie en distributie zijn je voorsprong — delegeer die nooit. Het echte risico van de solo-founder is niet tijdgebrek, maar afhankelijk worden van keuzes die hij niet meer beheerst.',
      },
      { h2: 'Wat je moet uitbesteden' },
      {
        p: 'Sommige bouwstenen hebben geen onderscheidende waarde: ze moeten alleen solide zijn, snel op te zetten en onzichtbaar voor de gebruiker. Ze zelf bouwen als solo-founder betekent weken verbranden op een terrein waar je geen enkel voordeel hebt.',
      },
      {
        ul: [
          'De V1-build: een vaste prijs (bij Khufu een productie-V1 in 7 dagen voor € 15.000, broncode van jou) bespaart je maanden tegenover aanwerven of vanaf nul leren.',
          'De infrastructuur: hosting, database, CI/CD, monitoring. Platformen als Vercel of Cloud Run doen het meeste werk — geen reden om een zelfgebouwde DevOps opnieuw uit te vinden.',
          'De gestandaardiseerde bouwstenen: authenticatie, betalingen, transactionele e-mails. Je koppelt ze aan, je codeert ze niet vanaf nul.',
        ],
      },
      { h2: 'Wat je absoluut moet houden' },
      {
        p: 'Wat je SaaS doet leven of sterven, besteed je niet uit. Dit zijn de drie dingen die niemand voor jou kan dragen, en die bepalen of je over zes maanden klanten hebt.',
      },
      {
        ul: [
          'De productvisie: welk probleem je oplost, voor wie, en wat je weigert te bouwen. Het is je kompas — een leverancier voert uit, hij beslist niet voor jou.',
          'De klantrelatie: praat zelf met je gebruikers. Support, interviews en de onboarding van je eerste klanten zijn je beste leerbron, geen klus om te delegeren.',
          'De distributie: SEO, content, sales, community. Een goed product zonder acquisitiekanaal verkoopt zichzelf niet — dat is je taak nummer één na de lancering.',
        ],
      },
      {
        quote:
          'Besteed de bouw uit, nooit de richting: een leverancier kan je product in een week coderen, maar niemand kan jouw visie voor je hebben.',
      },
      { h2: 'Uitbesteden zonder afhankelijk te worden' },
      {
        p: 'De build delegeren betekent niet de controle verliezen. Afhankelijkheid voorkom je vanaf dag één, door heldere voorwaarden te stellen over wat je terugkrijgt en over wie het werk daarna kan overnemen.',
      },
      {
        ul: [
          'Eis de broncode en een standaardstack (Next.js, NestJS, Prisma, PostgreSQL): elke developer kan het overnemen en je zit bij niemand vast.',
          'Vermijd no-code-lock-in: een product dat gebruikers wint, botst uiteindelijk altijd tegen de grenzen van Bubble of Webflow en dwingt je alles te herschrijven.',
          'Houd de controle over de toegangen: domein, cloud-accounts, Git-repository en betalingen op jouw naam, nooit op die van de leverancier.',
        ],
      },
      { h2: 'De regel: middel of voorsprong?' },
      {
        p: 'Stel jezelf voor elke beslissing één vraag: is dit een middel of mijn voorsprong? Is het een middel, besteed het dan uit om sneller te gaan. Is het je voorsprong, houd het dan en investeer er je tijd in. Een solo-founder wint niet door alles te doen — hij wint door zijn schaarse uren te bundelen waar alleen hij het verschil kan maken.',
      },
    ],
  },
  ar: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'إطلاق SaaS بمفردك: ما الذي تُسنده لغيرك (وما الذي تحتفظ به)',
    excerpt:
      'بمفردك، أسند بناء الـ V1 والبنية التحتية إلى غيرك، واحتفظ برؤية المنتج وعلاقة العميل والتوزيع. دليلك لتجنّب الاعتماد على الآخرين.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['مؤسس', 'منفرد'],
    body: [
      {
        p: 'عندما تعمل بمفردك، تكون القاعدة بسيطة: أسند ما هو وسيلة إلى غيرك، واحتفظ بما هو ميزتك. بناء الـ V1 والبنية التحتية وسيلتان — سلّمهما لمن هو أسرع منك. أما رؤية المنتج وعلاقة العميل والتوزيع فهي ميزتك — لا تفوّضها أبدًا. الخطر الحقيقي على المؤسس المنفرد ليس نقص الوقت، بل أن يصبح معتمدًا على قرارات لم يعد يتحكم فيها.',
      },
      { h2: 'ما الذي يجب إسناده إلى غيرك' },
      {
        p: 'بعض المكونات لا تحمل أي قيمة تميّزك: يكفي أن تكون متينة وسريعة الإعداد وغير مرئية للمستخدم. أن تبنيها بنفسك بمفردك يعني إحراق أسابيع في ميدان لا تملك فيه أي أفضلية.',
      },
      {
        ul: [
          'بناء الـ V1: باقة بسعر ثابت (في Khufu، نسخة V1 جاهزة للإنتاج خلال 7 أيام مقابل 15,000 €، والكود المصدري ملك لك) توفّر عليك أشهرًا مقارنةً بالتوظيف أو التعلّم من الصفر.',
          'البنية التحتية: الاستضافة وقاعدة البيانات وCI/CD والمراقبة. منصات مثل Vercel أو Cloud Run تتولّى الجزء الأكبر من العمل — لا داعي لإعادة اختراع نظام DevOps خاص.',
          'المكونات القياسية الجاهزة: المصادقة والمدفوعات ورسائل البريد الإلكتروني المعاملاتية. تربطها فحسب، ولا تعيد برمجتها من الصفر.',
        ],
      },
      { h2: 'ما الذي يجب أن تحتفظ به حتمًا' },
      {
        p: 'ما يحدد حياة أو موت الـ SaaS الخاص بك لا يُسنَد إلى مقاول. هذه هي الأمور الثلاثة التي لا يستطيع أحد أن يحملها عنك، وهي التي تقرّر ما إذا كان لديك عملاء بعد ستة أشهر.',
      },
      {
        ul: [
          'رؤية المنتج: أي مشكلة تحلّها، ولمن، وما الذي ترفض بناءه. إنها بوصلتك — المزوّد ينفّذ ولا يقرّر بدلًا منك.',
          'علاقة العميل: تحدّث بنفسك إلى مستخدميك. الدعم والمقابلات وتهيئة أوائل العملاء هي أفضل مصدر للتعلّم، لا مهمة تُفوَّض.',
          'التوزيع: SEO والمحتوى والمبيعات والمجتمع. المنتج الجيد بلا قناة اكتساب لا يبيع نفسه — إنه مهمّتك رقم واحد بعد الإطلاق.',
        ],
      },
      {
        quote:
          'أسند البناء إلى غيرك، لكن لا تُسند التوجيه أبدًا: يمكن لمزوّد أن يبرمج منتجك في أسبوع، لكن لا أحد يستطيع أن يحمل رؤيتك بدلًا منك.',
      },
      { h2: 'الإسناد دون أن تصبح معتمدًا' },
      {
        p: 'تفويض البناء لا يعني فقدان السيطرة. يُمنَع الاعتماد منذ اليوم الأول، بوضع شروط واضحة حول ما تستردّه ومَن يستطيع متابعة العمل بعد ذلك.',
      },
      {
        ul: [
          'اشترط الحصول على الكود المصدري وحزمة تقنية قياسية (Next.js، NestJS، Prisma، PostgreSQL): أي مطوّر سيتمكن من المتابعة، ولن تكون أسيرًا لأحد.',
          'ابتعد عن قيد الـ no-code: المنتج الذي يكسب مستخدمين ينتهي دائمًا إلى الاصطدام بحدود Bubble أو Webflow، ويجبرك على إعادة كتابة كل شيء.',
          'احتفظ بالسيطرة على الصلاحيات: النطاق وحسابات السحابة ومستودع Git والمدفوعات باسمك، لا باسم المزوّد.',
        ],
      },
      { h2: 'القاعدة: وسيلة أم ميزة؟' },
      {
        p: 'قبل كل قرار، اسأل نفسك سؤالًا واحدًا: هل هذا وسيلة أم ميزتي؟ إن كان وسيلة، فأسنده لتتحرك أسرع. وإن كان ميزتك، فاحتفظ به واستثمر وقتك فيه. المؤسس المنفرد لا ينتصر بأن يفعل كل شيء — بل ينتصر بتركيز ساعاته النادرة حيث لا يستطيع أحد سواه أن يصنع الفرق.',
      },
    ],
  },
  pl: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Uruchamianie SaaS w pojedynkę: co zlecić (a co zachować)',
    excerpt:
      'Solo zleć budowę V1 i infrastrukturę; zachowaj wizję produktu, relację z klientem i dystrybucję. Przewodnik, jak uniknąć uzależnienia od dostawcy.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Założyciel', 'Solo'],
    body: [
      {
        p: 'W pojedynkę zasada jest prosta: zleć to, co jest środkiem, a zachowaj to, co jest twoją przewagą. Budowa V1 i infrastruktura to środki — powierz je komuś, kto jest szybszy od ciebie. Wizja produktu, relacja z klientem i dystrybucja to twoja przewaga — nigdy ich nie deleguj. Prawdziwym ryzykiem solowego founderа nie jest brak czasu, lecz uzależnienie od decyzji, których już nie kontroluje.',
      },
      { h2: 'Co zlecić na zewnątrz' },
      {
        p: 'Niektóre elementy nie mają żadnej wartości wyróżniającej: muszą być tylko solidne, szybkie do postawienia i niewidoczne dla użytkownika. Robienie ich samemu w pojedynkę to spalanie tygodni na terenie, na którym nie masz żadnej przewagi.',
      },
      {
        ul: [
          'Budowa V1: pakiet w stałej cenie (w Khufu produkcyjna V1 w 7 dni za 15 000 €, kod źródłowy należy do ciebie) oszczędza ci miesiące w porównaniu z rekrutacją lub nauką od zera.',
          'Infrastruktura: hosting, baza danych, CI/CD, monitoring. Platformy takie jak Vercel czy Cloud Run wykonują większość pracy — nie ma po co wymyślać własnego DevOps na nowo.',
          'Elementy standardowe: uwierzytelnianie, płatności, e-maile transakcyjne. Podłączasz je, nie kodujesz od zera.',
        ],
      },
      { h2: 'Co musisz bezwzględnie zachować' },
      {
        p: 'Tego, co decyduje o życiu lub śmierci twojego SaaS, nie zleca się podwykonawcy. To trzy rzeczy, których nikt nie udźwignie za ciebie, i te, które przesądzają, czy za sześć miesięcy będziesz mieć klientów.',
      },
      {
        ul: [
          'Wizja produktu: jaki problem rozwiązujesz, dla kogo i czego świadomie nie chcesz budować. To twój kompas — dostawca wykonuje, nie decyduje za ciebie.',
          'Relacja z klientem: rozmawiaj z użytkownikami osobiście. Wsparcie, wywiady i onboarding pierwszych klientów to twoje najlepsze źródło wiedzy, a nie obowiązek do oddelegowania.',
          'Dystrybucja: SEO, treści, sprzedaż, społeczność. Dobry produkt bez kanału pozyskiwania nie sprzedaje się sam — to twoje zadanie numer jeden po starcie.',
        ],
      },
      {
        quote:
          'Zleć budowę, nigdy kierunek: dostawca może zakodować twój produkt w tydzień, ale nikt nie może mieć twojej wizji za ciebie.',
      },
      { h2: 'Zlecać, nie uzależniając się' },
      {
        p: 'Delegowanie budowy nie oznacza utraty kontroli. Uzależnieniu zapobiegasz od pierwszego dnia, ustalając jasne warunki: co odbierasz i kto może przejąć pracę później.',
      },
      {
        ul: [
          'Wymagaj kodu źródłowego i standardowego stacku (Next.js, NestJS, Prisma, PostgreSQL): każdy programista będzie mógł przejąć projekt, a ty nie jesteś niczyim więźniem.',
          'Uciekaj od lock-inu no-code: produkt, który zdobywa użytkowników, zawsze w końcu uderza w ograniczenia Bubble czy Webflow i zmusza cię do przepisania wszystkiego.',
          'Zachowaj kontrolę nad dostępami: domena, konta chmurowe, repozytorium Git i płatności na twoje nazwisko, nigdy na nazwisko dostawcy.',
        ],
      },
      { h2: 'Zasada: środek czy przewaga?' },
      {
        p: 'Przed każdą decyzją zadaj sobie jedno pytanie: czy to środek, czy moja przewaga? Jeśli środek — zleć go, by działać szybciej. Jeśli twoja przewaga — zachowaj ją i zainwestuj w nią swój czas. Solowy founder nie wygrywa, robiąc wszystko — wygrywa, skupiając swoje nieliczne godziny tam, gdzie tylko on może zrobić różnicę.',
      },
    ],
  },
  tr: {
    slug: 'lancer-son-saas-en-solo-quoi-externaliser',
    title: 'Tek başına SaaS başlatmak: neyi dışarıya verin (ve neyi elde tutun)',
    excerpt:
      'Tek başınaysanız V1 geliştirmeyi ve altyapıyı dışarıya verin; ürün vizyonunu, müşteri ilişkisini ve dağıtımı elde tutun. Bağımlılıktan kaçınma rehberi.',
    date: '2026-02-11',
    readingMinutes: 5,
    tags: ['Kurucu', 'Solo'],
    body: [
      {
        p: 'Tek başınaysanız kural basittir: bir araç olan şeyi dışarıya verin, avantajınız olan şeyi elde tutun. V1 geliştirmeniz ve altyapınız birer araçtır — sizden hızlı olana bırakın. Ürün vizyonu, müşteri ilişkisi ve dağıtım ise avantajınızdır — bunları asla devretmeyin. Solo kurucunun gerçek riski zaman kıtlığı değil, artık kontrol edemediği kararlara bağımlı hale gelmektir.',
      },
      { h2: 'Neyi dışarıya vermeli' },
      {
        p: 'Bazı yapı taşları hiçbir ayırt edici değer taşımaz: yalnızca sağlam, hızlı kurulan ve kullanıcı için görünmez olmaları yeterlidir. Bunları tek başına kendiniz yapmak, hiçbir avantajınızın olmadığı bir sahada haftalar yakmak demektir.',
      },
      {
        ul: [
          'V1 geliştirme: sabit fiyatlı bir paket (Khufu’da 7 günde üretime hazır bir V1, 15.000 €, kaynak kodu size ait) işe alım ya da sıfırdan öğrenmeye kıyasla size aylar kazandırır.',
          'Altyapı: barındırma, veritabanı, CI/CD, izleme. Vercel veya Cloud Run gibi platformlar işin büyük kısmını üstlenir — kendi DevOps’unuzu yeniden icat etmenize gerek yok.',
          'Standartlaşmış yapı taşları: kimlik doğrulama, ödemeler, işlemsel e-postalar. Bunları bağlarsınız, sıfırdan yazmazsınız.',
        ],
      },
      { h2: 'Kesinlikle elde tutmanız gerekenler' },
      {
        p: 'SaaS’ınızı yaşatan ya da öldüren şey taşerona verilmez. Bunlar kimsenin sizin yerinize taşıyamayacağı üç şeydir ve altı ay sonra müşteriniz olup olmayacağına karar verenlerdir.',
      },
      {
        ul: [
          'Ürün vizyonu: hangi sorunu, kimin için çözdüğünüz ve neyi yapmayı reddettiğiniz. Bu sizin pusulanızdır — bir tedarikçi uygular, sizin yerinize karar vermez.',
          'Müşteri ilişkisi: kullanıcılarınızla bizzat konuşun. Destek, görüşmeler ve ilk müşterilerin onboarding’i en iyi öğrenme kaynağınızdır, devredilecek bir angarya değil.',
          'Dağıtım: SEO, içerik, satış, topluluk. İyi bir ürün, edinim kanalı olmadan kendini satmaz — lansmandan sonraki bir numaralı işiniz budur.',
        ],
      },
      {
        quote:
          'İnşayı dışarıya verin, yönü asla: bir tedarikçi ürününüzü bir haftada kodlayabilir, ama kimse sizin vizyonunuza sizin yerinize sahip olamaz.',
      },
      { h2: 'Bağımlı olmadan dışarıya vermek' },
      {
        p: 'Geliştirmeyi devretmek kontrolü kaybetmek demek değildir. Bağımlılık, ilk günden itibaren önlenir: neyi geri aldığınıza ve işi sonradan kimin devralabileceğine dair net koşullar koyarak.',
      },
      {
        ul: [
          'Kaynak kodunu ve standart bir stack’i (Next.js, NestJS, Prisma, PostgreSQL) talep edin: herhangi bir geliştirici devralabilir, kimseye mahkûm olmazsınız.',
          'No-code lock-in’den kaçının: kullanıcı kazanan bir ürün eninde sonunda Bubble veya Webflow’un sınırlarına toslar ve her şeyi yeniden yazmanıza yol açar.',
          'Erişimlerin kontrolünü elde tutun: alan adı, bulut hesapları, Git deposu ve ödemeler sizin adınıza olsun, asla tedarikçinin adına değil.',
        ],
      },
      { h2: 'Kural: araç mı, avantaj mı?' },
      {
        p: 'Her karardan önce kendinize tek bir soru sorun: bu bir araç mı yoksa avantajım mı? Araçsa, daha hızlı gitmek için dışarıya verin. Avantajınızsa, elde tutun ve zamanınızı ona yatırın. Solo kurucu her şeyi yaparak kazanmaz — kıt saatlerini yalnızca kendisinin fark yaratabileceği yere odaklayarak kazanır.',
      },
    ],
  },
}
