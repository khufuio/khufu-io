import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'Le vrai coût caché d’un MVP mal codé',
    excerpt:
      'La dette technique chiffrée : un MVP jetable coûte deux fois. Les coûts cachés (réécriture, bugs, sécurité) et comment livrer vite sans dette.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Dette technique'],
    body: [
      {
        p: 'Un MVP mal codé ne coûte pas moins cher : il coûte deux fois. Une première fois pour le construire, une seconde pour le réécrire quand il faut le faire évoluer. La dette technique accumulée pour « aller vite » se rembourse avec intérêts — en réécriture, en bugs, en lenteur et en failles de sécurité. Voici le vrai coût caché, chiffré, et comment livrer vite sans en payer le prix.',
      },
      { h2: 'La dette technique, chiffrée' },
      {
        p: 'La dette technique n’est pas une métaphore : c’est du temps de développement futur que vous empruntez au présent. Un code jetable, bâclé pour tenir une démo, alourdit chaque fonctionnalité suivante. Ce qui prenait un jour en prend trois. Les études du secteur estiment que les équipes passent en moyenne 20 à 40 % de leur temps à gérer de la dette technique plutôt qu’à livrer de la valeur.',
      },
      {
        ul: [
          'Réécriture : reconstruire un MVP jetable coûte souvent plus cher que la V1 initiale, car il faut migrer les données et les utilisateurs sans casse.',
          'Bugs : un code sans tests ni structure multiplie les régressions — chaque correctif en crée un nouveau ailleurs.',
          'Lenteur : une base mal conçue se dégrade dès les premiers milliers d’utilisateurs, et l’optimisation devient un chantier.',
          'Sécurité : injections, fuites de données, authentification bancale — ce qui coûte le plus cher à réparer plus tard.',
        ],
      },
      { h2: 'Pourquoi le « vite et sale » se paie deux fois' },
      {
        p: 'Le raccourci semble rationnel : sortir un MVP en quelques semaines pour valider l’idée. Le problème, c’est que le MVP qui fonctionne devient le produit. Personne ne réécrit un code qui « marche » tant qu’il ne casse pas — jusqu’au jour où il casse, sous la charge d’utilisateurs réels, au pire moment. Vous payez alors la réécriture complète, plus le manque à gagner pendant que le produit est instable.',
      },
      {
        quote:
          'Un MVP jetable coûte deux fois : une fois pour le construire, une fois pour le réécrire quand il faut scaler.',
      },
      { h2: 'Livrer vite SANS créer de dette' },
      {
        p: 'Vitesse et qualité ne s’opposent pas — c’est un faux dilemme. La dette ne vient pas de la rapidité, mais des mauvais raccourcis : pas de tests, pas d’architecture, une stack jetable. Avec une stack de production éprouvée (Next.js, NestJS, Prisma, PostgreSQL) et un développement assisté par IA, on livre une V1 réellement maintenable en une semaine.',
      },
      {
        ul: [
          'Périmètre serré : 3 à 5 parcours essentiels, le reste explicitement hors périmètre.',
          'Stack de production dès le jour 1, pas un prototype à jeter.',
          'Code source à vous, testé et documenté — pas de dépendance ni de boîte noire.',
        ],
      },
      { h2: 'Ce que ça change pour vous' },
      {
        p: 'Chez Khufu, on livre une V1 prête pour la production en 7 jours, à prix fixe de 15 000 €, sur une base saine que vous pouvez faire évoluer sans tout réécrire. Vous gardez la vitesse d’un MVP sans en hériter la dette : le produit que vous montrez à vos premiers utilisateurs est le même que vous ferez scaler ensuite.',
      },
    ],
  },
  en: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'The real hidden cost of a badly coded MVP',
    excerpt:
      'Technical debt in numbers: a throwaway MVP costs twice. The hidden costs (rewrite, bugs, security) and how to ship fast without debt.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Technical debt'],
    body: [
      {
        p: 'A badly coded MVP is not cheaper: it costs twice. Once to build it, and once to rewrite it when the time comes to grow. The technical debt you take on to "move fast" gets repaid with interest — in rewrites, bugs, slowness and security holes. Here is the real hidden cost, in numbers, and how to ship fast without paying for it.',
      },
      { h2: 'Technical debt, in numbers' },
      {
        p: 'Technical debt is not a metaphor: it is future development time you borrow from the present. Throwaway code, rushed to survive a demo, weighs down every feature that follows. What took a day now takes three. Industry studies estimate that teams spend 20 to 40% of their time managing technical debt instead of shipping value.',
      },
      {
        ul: [
          'Rewrite: rebuilding a throwaway MVP often costs more than the original V1, because you have to migrate data and users without breaking anything.',
          'Bugs: code with no tests or structure multiplies regressions — every fix creates a new one somewhere else.',
          'Slowness: a poorly designed foundation degrades from the first few thousand users, and optimization becomes a project of its own.',
          'Security: injections, data leaks, shaky authentication — the most expensive things to fix later.',
        ],
      },
      { h2: 'Why "fast and dirty" gets paid twice' },
      {
        p: 'The shortcut seems rational: ship an MVP in a few weeks to validate the idea. The problem is that the MVP that works becomes the product. Nobody rewrites code that "works" until it breaks — and then it breaks, under real user load, at the worst possible moment. You pay for the full rewrite, plus the lost revenue while the product is unstable.',
      },
      {
        quote:
          'A throwaway MVP costs twice: once to build it, once to rewrite it when you need to scale.',
      },
      { h2: 'Ship fast WITHOUT creating debt' },
      {
        p: 'Speed and quality are not opposites — that is a false dilemma. Debt does not come from speed, but from bad shortcuts: no tests, no architecture, a throwaway stack. With a proven production stack (Next.js, NestJS, Prisma, PostgreSQL) and AI-assisted development, you can ship a genuinely maintainable V1 in one week.',
      },
      {
        ul: [
          'Tight scope: 3 to 5 essential user journeys, everything else explicitly out of scope.',
          'A production stack from day one, not a prototype to throw away.',
          'Source code that is yours, tested and documented — no dependency, no black box.',
        ],
      },
      { h2: 'What this changes for you' },
      {
        p: 'At Khufu, we ship a production-ready V1 in 7 days, at a fixed price of €15,000, on a healthy foundation you can grow without rewriting everything. You keep the speed of an MVP without inheriting its debt: the product you show your first users is the same one you will scale later.',
      },
    ],
  },
  es: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'El verdadero coste oculto de un MVP mal programado',
    excerpt:
      'La deuda técnica en cifras: un MVP desechable cuesta el doble. Los costes ocultos (reescritura, bugs, seguridad) y cómo entregar rápido sin deuda.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Deuda técnica'],
    body: [
      {
        p: 'Un MVP mal programado no sale más barato: cuesta el doble. Una vez para construirlo y otra para reescribirlo cuando hay que hacerlo crecer. La deuda técnica que asumes para «ir rápido» se paga con intereses — en reescrituras, bugs, lentitud y fallos de seguridad. Este es el verdadero coste oculto, en cifras, y cómo entregar rápido sin pagarlo.',
      },
      { h2: 'La deuda técnica, en cifras' },
      {
        p: 'La deuda técnica no es una metáfora: es tiempo de desarrollo futuro que tomas prestado del presente. Un código desechable, hecho deprisa para aguantar una demo, lastra cada funcionalidad siguiente. Lo que tardaba un día tarda tres. Los estudios del sector estiman que los equipos dedican entre un 20 y un 40% de su tiempo a gestionar deuda técnica en lugar de aportar valor.',
      },
      {
        ul: [
          'Reescritura: reconstruir un MVP desechable suele costar más que la V1 inicial, porque hay que migrar datos y usuarios sin romper nada.',
          'Bugs: un código sin tests ni estructura multiplica las regresiones — cada corrección crea otra en otro sitio.',
          'Lentitud: una base mal diseñada se degrada desde los primeros miles de usuarios, y optimizarla se convierte en un proyecto entero.',
          'Seguridad: inyecciones, fugas de datos, autenticación endeble — lo más caro de arreglar más tarde.',
        ],
      },
      { h2: 'Por qué lo «rápido y sucio» se paga dos veces' },
      {
        p: 'El atajo parece racional: sacar un MVP en unas semanas para validar la idea. El problema es que el MVP que funciona se convierte en el producto. Nadie reescribe un código que «funciona» hasta que se rompe — y entonces se rompe, bajo la carga de usuarios reales, en el peor momento. Pagas la reescritura completa, más los ingresos perdidos mientras el producto es inestable.',
      },
      {
        quote:
          'Un MVP desechable cuesta el doble: una vez para construirlo y otra para reescribirlo cuando hay que escalar.',
      },
      { h2: 'Entregar rápido SIN crear deuda' },
      {
        p: 'Velocidad y calidad no se oponen — es un falso dilema. La deuda no viene de la rapidez, sino de los malos atajos: sin tests, sin arquitectura, con una stack desechable. Con una stack de producción probada (Next.js, NestJS, Prisma, PostgreSQL) y desarrollo asistido por IA, se entrega una V1 realmente mantenible en una semana.',
      },
      {
        ul: [
          'Alcance ajustado: de 3 a 5 recorridos esenciales, el resto explícitamente fuera de alcance.',
          'Una stack de producción desde el día 1, no un prototipo para tirar.',
          'Código fuente que es tuyo, testeado y documentado — sin dependencias ni cajas negras.',
        ],
      },
      { h2: 'Lo que esto cambia para ti' },
      {
        p: 'En Khufu entregamos una V1 lista para producción en 7 días, a un precio fijo de 15 000 €, sobre una base sana que puedes hacer crecer sin reescribir todo. Conservas la velocidad de un MVP sin heredar su deuda: el producto que muestras a tus primeros usuarios es el mismo que después escalarás.',
      },
    ],
  },
  de: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'Die wahren versteckten Kosten eines schlecht programmierten MVP',
    excerpt:
      'Technische Schulden in Zahlen: ein Wegwerf-MVP kostet doppelt. Die versteckten Kosten (Rewrite, Bugs, Sicherheit) und wie man schnell ohne Schulden liefert.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Technische Schulden'],
    body: [
      {
        p: 'Ein schlecht programmiertes MVP ist nicht billiger: es kostet doppelt. Einmal, um es zu bauen, und einmal, um es neu zu schreiben, wenn es wachsen soll. Die technischen Schulden, die man aufnimmt, um „schnell zu sein", zahlt man mit Zinsen zurück — in Rewrites, Bugs, Langsamkeit und Sicherheitslücken. Hier sind die wahren versteckten Kosten in Zahlen und wie man schnell liefert, ohne dafür zu zahlen.',
      },
      { h2: 'Technische Schulden in Zahlen' },
      {
        p: 'Technische Schulden sind keine Metapher: es ist zukünftige Entwicklungszeit, die man sich aus der Gegenwart leiht. Wegwerf-Code, hastig für eine Demo geschrieben, belastet jede folgende Funktion. Was einen Tag dauerte, dauert nun drei. Branchenstudien schätzen, dass Teams durchschnittlich 20 bis 40% ihrer Zeit mit dem Verwalten technischer Schulden verbringen, statt Wert zu liefern.',
      },
      {
        ul: [
          'Rewrite: ein Wegwerf-MVP neu zu bauen kostet oft mehr als die ursprüngliche V1, weil man Daten und Nutzer ohne Bruch migrieren muss.',
          'Bugs: Code ohne Tests und Struktur vervielfacht Regressionen — jede Korrektur erzeugt eine neue an anderer Stelle.',
          'Langsamkeit: eine schlecht entworfene Basis verschlechtert sich ab den ersten paar tausend Nutzern, und die Optimierung wird zum eigenen Projekt.',
          'Sicherheit: Injektionen, Datenlecks, wacklige Authentifizierung — das Teuerste, was man später beheben muss.',
        ],
      },
      { h2: 'Warum „schnell und schmutzig" doppelt bezahlt wird' },
      {
        p: 'Die Abkürzung wirkt rational: ein MVP in wenigen Wochen ausliefern, um die Idee zu validieren. Das Problem ist, dass das MVP, das funktioniert, zum Produkt wird. Niemand schreibt Code neu, der „läuft", bis er bricht — und dann bricht er, unter echter Nutzerlast, im schlimmstmöglichen Moment. Man zahlt dann den kompletten Rewrite plus den entgangenen Umsatz, während das Produkt instabil ist.',
      },
      {
        quote:
          'Ein Wegwerf-MVP kostet doppelt: einmal, um es zu bauen, einmal, um es neu zu schreiben, wenn man skalieren muss.',
      },
      { h2: 'Schnell liefern OHNE Schulden zu machen' },
      {
        p: 'Geschwindigkeit und Qualität sind keine Gegensätze — das ist ein falsches Dilemma. Schulden kommen nicht von der Geschwindigkeit, sondern von schlechten Abkürzungen: keine Tests, keine Architektur, ein Wegwerf-Stack. Mit einem bewährten Produktions-Stack (Next.js, NestJS, Prisma, PostgreSQL) und KI-gestützter Entwicklung liefert man in einer Woche eine wirklich wartbare V1.',
      },
      {
        ul: [
          'Enger Scope: 3 bis 5 essenzielle User Journeys, alles andere explizit außerhalb des Scopes.',
          'Ein Produktions-Stack ab Tag 1, kein wegzuwerfender Prototyp.',
          'Quellcode, der Ihnen gehört, getestet und dokumentiert — keine Abhängigkeit, keine Black Box.',
        ],
      },
      { h2: 'Was das für Sie ändert' },
      {
        p: 'Bei Khufu liefern wir eine produktionsreife V1 in 7 Tagen, zum Festpreis von 15.000 €, auf einer gesunden Basis, die Sie ohne kompletten Rewrite ausbauen können. Sie behalten die Geschwindigkeit eines MVP, ohne dessen Schulden zu erben: das Produkt, das Sie Ihren ersten Nutzern zeigen, ist dasselbe, das Sie später skalieren.',
      },
    ],
  },
  it: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'Il vero costo nascosto di un MVP scritto male',
    excerpt:
      'Il debito tecnico in cifre: un MVP usa e getta costa il doppio. I costi nascosti (riscrittura, bug, sicurezza) e come consegnare in fretta senza debito.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Debito tecnico'],
    body: [
      {
        p: 'Un MVP scritto male non costa meno: costa il doppio. Una volta per costruirlo e una per riscriverlo quando bisogna farlo crescere. Il debito tecnico che accumuli per «andare veloce» si ripaga con gli interessi — in riscritture, bug, lentezza e falle di sicurezza. Ecco il vero costo nascosto, in cifre, e come consegnare in fretta senza pagarlo.',
      },
      { h2: 'Il debito tecnico, in cifre' },
      {
        p: 'Il debito tecnico non è una metafora: è tempo di sviluppo futuro che prendi in prestito dal presente. Un codice usa e getta, scritto in fretta per reggere una demo, appesantisce ogni funzionalità successiva. Ciò che richiedeva un giorno ne richiede tre. Gli studi di settore stimano che i team dedicano dal 20 al 40% del loro tempo a gestire debito tecnico invece di produrre valore.',
      },
      {
        ul: [
          'Riscrittura: ricostruire un MVP usa e getta costa spesso più della V1 iniziale, perché bisogna migrare dati e utenti senza rotture.',
          'Bug: un codice senza test né struttura moltiplica le regressioni — ogni correzione ne crea una nuova altrove.',
          'Lentezza: una base mal progettata si degrada dai primi qualche migliaio di utenti, e ottimizzarla diventa un progetto a sé.',
          'Sicurezza: injection, fughe di dati, autenticazione traballante — la cosa più costosa da riparare in seguito.',
        ],
      },
      { h2: 'Perché il «veloce e sporco» si paga due volte' },
      {
        p: 'La scorciatoia sembra razionale: rilasciare un MVP in poche settimane per validare l’idea. Il problema è che l’MVP che funziona diventa il prodotto. Nessuno riscrive un codice che «funziona» finché non si rompe — e poi si rompe, sotto il carico di utenti reali, nel momento peggiore. Paghi allora la riscrittura completa, più il mancato guadagno mentre il prodotto è instabile.',
      },
      {
        quote:
          'Un MVP usa e getta costa il doppio: una volta per costruirlo e una per riscriverlo quando bisogna scalare.',
      },
      { h2: 'Consegnare in fretta SENZA creare debito' },
      {
        p: 'Velocità e qualità non sono in contrasto — è un falso dilemma. Il debito non nasce dalla rapidità, ma dalle cattive scorciatoie: niente test, niente architettura, uno stack usa e getta. Con uno stack di produzione collaudato (Next.js, NestJS, Prisma, PostgreSQL) e sviluppo assistito dall’IA, si consegna una V1 davvero manutenibile in una settimana.',
      },
      {
        ul: [
          'Perimetro stretto: da 3 a 5 percorsi essenziali, il resto esplicitamente fuori perimetro.',
          'Uno stack di produzione dal giorno 1, non un prototipo da buttare.',
          'Codice sorgente tuo, testato e documentato — nessuna dipendenza, nessuna scatola nera.',
        ],
      },
      { h2: 'Cosa cambia per te' },
      {
        p: 'In Khufu consegniamo una V1 pronta per la produzione in 7 giorni, a prezzo fisso di 15.000 €, su una base sana che puoi far crescere senza riscrivere tutto. Mantieni la velocità di un MVP senza ereditarne il debito: il prodotto che mostri ai tuoi primi utenti è lo stesso che scalerai in seguito.',
      },
    ],
  },
  pt: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'O verdadeiro custo oculto de um MVP mal programado',
    excerpt:
      'A dívida técnica em números: um MVP descartável custa o dobro. Os custos ocultos (reescrita, bugs, segurança) e como entregar rápido sem dívida.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Dívida técnica'],
    body: [
      {
        p: 'Um MVP mal programado não sai mais barato: custa o dobro. Uma vez para construí-lo e outra para reescrevê-lo quando é preciso fazê-lo crescer. A dívida técnica que se acumula para «ir rápido» é paga com juros — em reescritas, bugs, lentidão e falhas de segurança. Aqui está o verdadeiro custo oculto, em números, e como entregar rápido sem pagá-lo.',
      },
      { h2: 'A dívida técnica, em números' },
      {
        p: 'A dívida técnica não é uma metáfora: é tempo de desenvolvimento futuro que se toma emprestado do presente. Um código descartável, feito às pressas para aguentar uma demo, pesa sobre cada funcionalidade seguinte. O que levava um dia passa a levar três. Estudos do setor estimam que as equipas passam em média 20 a 40% do seu tempo a gerir dívida técnica em vez de entregar valor.',
      },
      {
        ul: [
          'Reescrita: reconstruir um MVP descartável costuma custar mais do que a V1 inicial, porque é preciso migrar dados e utilizadores sem quebras.',
          'Bugs: um código sem testes nem estrutura multiplica as regressões — cada correção cria uma nova noutro lado.',
          'Lentidão: uma base mal concebida degrada-se desde os primeiros milhares de utilizadores, e otimizá-la torna-se um projeto à parte.',
          'Segurança: injeções, fugas de dados, autenticação frágil — o mais caro de reparar mais tarde.',
        ],
      },
      { h2: 'Porque o «rápido e sujo» se paga duas vezes' },
      {
        p: 'O atalho parece racional: lançar um MVP em poucas semanas para validar a ideia. O problema é que o MVP que funciona torna-se o produto. Ninguém reescreve um código que «funciona» até ele quebrar — e então quebra, sob a carga de utilizadores reais, no pior momento. Paga-se então a reescrita completa, mais a receita perdida enquanto o produto está instável.',
      },
      {
        quote:
          'Um MVP descartável custa o dobro: uma vez para construí-lo e outra para reescrevê-lo quando é preciso escalar.',
      },
      { h2: 'Entregar rápido SEM criar dívida' },
      {
        p: 'Velocidade e qualidade não se opõem — é um falso dilema. A dívida não vem da rapidez, mas dos maus atalhos: sem testes, sem arquitetura, com uma stack descartável. Com uma stack de produção comprovada (Next.js, NestJS, Prisma, PostgreSQL) e desenvolvimento assistido por IA, entrega-se uma V1 realmente sustentável numa semana.',
      },
      {
        ul: [
          'Âmbito apertado: 3 a 5 percursos essenciais, o resto explicitamente fora de âmbito.',
          'Uma stack de produção desde o dia 1, não um protótipo para deitar fora.',
          'Código-fonte que é seu, testado e documentado — sem dependências nem caixas negras.',
        ],
      },
      { h2: 'O que isto muda para si' },
      {
        p: 'Na Khufu entregamos uma V1 pronta para produção em 7 dias, a preço fixo de 15 000 €, sobre uma base sã que pode fazer crescer sem reescrever tudo. Mantém a velocidade de um MVP sem herdar a sua dívida: o produto que mostra aos seus primeiros utilizadores é o mesmo que escalará depois.',
      },
    ],
  },
  nl: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'De echte verborgen kosten van een slecht gecodeerde MVP',
    excerpt:
      'Technische schuld in cijfers: een wegwerp-MVP kost dubbel. De verborgen kosten (herschrijven, bugs, beveiliging) en hoe je snel levert zonder schuld.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Technische schuld'],
    body: [
      {
        p: 'Een slecht gecodeerde MVP is niet goedkoper: hij kost dubbel. Eén keer om hem te bouwen en één keer om hem te herschrijven wanneer hij moet groeien. De technische schuld die je aangaat om «snel te gaan» betaal je met rente terug — in herschrijvingen, bugs, traagheid en beveiligingslekken. Dit zijn de echte verborgen kosten, in cijfers, en hoe je snel levert zonder ervoor te betalen.',
      },
      { h2: 'Technische schuld, in cijfers' },
      {
        p: 'Technische schuld is geen metafoor: het is toekomstige ontwikkeltijd die je uit het heden leent. Wegwerpcode, haastig geschreven om een demo te halen, verzwaart elke volgende functie. Wat een dag kostte, kost er nu drie. Studies uit de sector schatten dat teams gemiddeld 20 tot 40% van hun tijd besteden aan het beheren van technische schuld in plaats van waarde te leveren.',
      },
      {
        ul: [
          'Herschrijven: een wegwerp-MVP opnieuw bouwen kost vaak meer dan de oorspronkelijke V1, omdat je data en gebruikers zonder breuk moet migreren.',
          'Bugs: code zonder tests of structuur vermenigvuldigt regressies — elke fix creëert er een nieuwe elders.',
          'Traagheid: een slecht ontworpen basis verslechtert vanaf de eerste paar duizend gebruikers, en optimaliseren wordt een project op zich.',
          'Beveiliging: injecties, datalekken, wankele authenticatie — het duurst om later te herstellen.',
        ],
      },
      { h2: 'Waarom «snel en vuil» dubbel wordt betaald' },
      {
        p: 'De shortcut lijkt rationeel: een MVP in een paar weken uitbrengen om het idee te valideren. Het probleem is dat de MVP die werkt het product wordt. Niemand herschrijft code die «werkt» totdat hij breekt — en dan breekt hij, onder echte gebruikersbelasting, op het slechtst denkbare moment. Je betaalt dan de volledige herschrijving, plus de gemiste omzet terwijl het product instabiel is.',
      },
      {
        quote:
          'Een wegwerp-MVP kost dubbel: één keer om hem te bouwen, één keer om hem te herschrijven wanneer je moet schalen.',
      },
      { h2: 'Snel leveren ZONDER schuld te maken' },
      {
        p: 'Snelheid en kwaliteit staan niet tegenover elkaar — dat is een vals dilemma. Schuld komt niet van snelheid, maar van slechte shortcuts: geen tests, geen architectuur, een wegwerpstack. Met een bewezen productiestack (Next.js, NestJS, Prisma, PostgreSQL) en AI-ondersteunde ontwikkeling lever je in één week een echt onderhoudbare V1.',
      },
      {
        ul: [
          'Strakke scope: 3 tot 5 essentiële gebruikersflows, de rest expliciet buiten scope.',
          'Een productiestack vanaf dag 1, geen weg te gooien prototype.',
          'Broncode die van jou is, getest en gedocumenteerd — geen afhankelijkheid, geen black box.',
        ],
      },
      { h2: 'Wat dit voor jou verandert' },
      {
        p: 'Bij Khufu leveren we een productieklare V1 in 7 dagen, tegen een vaste prijs van € 15.000, op een gezonde basis die je kunt laten groeien zonder alles te herschrijven. Je houdt de snelheid van een MVP zonder de schuld ervan te erven: het product dat je aan je eerste gebruikers toont, is hetzelfde dat je later opschaalt.',
      },
    ],
  },
  ar: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'التكلفة الخفية الحقيقية لـ MVP سيّئ البرمجة',
    excerpt:
      'الدين التقني بالأرقام: MVP قابل للرمي يكلّف مرتين. التكاليف الخفية (إعادة الكتابة، الأخطاء، الأمان) وكيف تُسلّم بسرعة دون دين.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'الدين التقني'],
    body: [
      {
        p: 'MVP سيّئ البرمجة ليس أرخص: بل يكلّف مرتين. مرة لبنائه ومرة لإعادة كتابته عندما يحين وقت تطويره. الدين التقني الذي تتحمّله من أجل «السرعة» يُسدَّد مع فوائده — في إعادة الكتابة والأخطاء والبطء والثغرات الأمنية. إليك التكلفة الخفية الحقيقية بالأرقام، وكيف تُسلّم بسرعة دون أن تدفع ثمنها.',
      },
      { h2: 'الدين التقني بالأرقام' },
      {
        p: 'الدين التقني ليس استعارة: إنه وقت تطوير مستقبلي تقترضه من الحاضر. الكود القابل للرمي، المكتوب على عجل لينجح في عرض تجريبي، يُثقل كل ميزة تالية. ما كان يستغرق يومًا صار يستغرق ثلاثة. تُقدّر دراسات القطاع أن الفرق تقضي في المتوسط 20 إلى 40% من وقتها في إدارة الدين التقني بدل تقديم القيمة.',
      },
      {
        ul: [
          'إعادة الكتابة: إعادة بناء MVP قابل للرمي تكلّف غالبًا أكثر من V1 الأصلية، لأنه يجب ترحيل البيانات والمستخدمين دون أعطال.',
          'الأخطاء: كود بلا اختبارات ولا بنية يضاعف الانحدارات — كل إصلاح يخلق آخر في مكان مختلف.',
          'البطء: قاعدة سيئة التصميم تتدهور منذ أول بضعة آلاف مستخدم، ويصبح تحسينها مشروعًا قائمًا بذاته.',
          'الأمان: الحقن، تسريبات البيانات، مصادقة هشّة — الأغلى إصلاحًا لاحقًا.',
        ],
      },
      { h2: 'لماذا «السريع والرديء» يُدفع مرتين' },
      {
        p: 'يبدو الاختصار منطقيًا: إطلاق MVP في بضعة أسابيع للتحقق من الفكرة. المشكلة أن الـ MVP الذي يعمل يصبح المنتج. لا أحد يعيد كتابة كود «يعمل» حتى ينهار — ثم ينهار، تحت حمل مستخدمين حقيقيين، في أسوأ لحظة. عندها تدفع ثمن إعادة الكتابة الكاملة، إضافة إلى الإيرادات الضائعة بينما المنتج غير مستقر.',
      },
      {
        quote:
          'MVP قابل للرمي يكلّف مرتين: مرة لبنائه ومرة لإعادة كتابته عندما يجب التوسّع.',
      },
      { h2: 'التسليم بسرعة دون خلق دين' },
      {
        p: 'السرعة والجودة ليستا نقيضين — إنها معضلة زائفة. الدين لا ينشأ من السرعة، بل من الاختصارات السيئة: بلا اختبارات، بلا بنية، بمنصة قابلة للرمي. مع منصة إنتاج مُجرَّبة (Next.js وNestJS وPrisma وPostgreSQL) وتطوير مدعوم بالذكاء الاصطناعي، نُسلّم V1 قابلة للصيانة فعلًا في أسبوع واحد.',
      },
      {
        ul: [
          'نطاق محدّد: من 3 إلى 5 مسارات أساسية، والباقي خارج النطاق صراحة.',
          'منصة إنتاج منذ اليوم الأول، لا نموذج أولي للرمي.',
          'كود مصدري ملك لك، مُختبَر وموثَّق — بلا تبعية ولا صندوق أسود.',
        ],
      },
      { h2: 'ما الذي يتغيّر بالنسبة لك' },
      {
        p: 'في Khufu نُسلّم V1 جاهزة للإنتاج في 7 أيام، بسعر ثابت قدره 15,000 يورو، على قاعدة سليمة يمكنك تطويرها دون إعادة كتابة كل شيء. تحتفظ بسرعة الـ MVP دون أن ترث دينه: المنتج الذي تعرضه على أول مستخدميك هو نفسه الذي ستوسّعه لاحقًا.',
      },
    ],
  },
  pl: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'Prawdziwy ukryty koszt źle napisanego MVP',
    excerpt:
      'Dług techniczny w liczbach: jednorazowe MVP kosztuje podwójnie. Ukryte koszty (przepisanie, bugi, bezpieczeństwo) i jak dostarczyć szybko bez długu.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Dług techniczny'],
    body: [
      {
        p: 'Źle napisane MVP nie jest tańsze: kosztuje podwójnie. Raz, żeby je zbudować, i raz, żeby je przepisać, gdy trzeba je rozwinąć. Dług techniczny, który zaciągasz, żeby «działać szybko», spłacasz z odsetkami — w przepisywaniu, bugach, powolności i lukach bezpieczeństwa. Oto prawdziwy ukryty koszt w liczbach i jak dostarczyć szybko, nie płacąc go.',
      },
      { h2: 'Dług techniczny w liczbach' },
      {
        p: 'Dług techniczny to nie metafora: to przyszły czas developmentu, który pożyczasz z teraźniejszości. Jednorazowy kod, napisany w pośpiechu, by przetrwać demo, obciąża każdą kolejną funkcję. To, co zajmowało dzień, zajmuje teraz trzy. Badania branżowe szacują, że zespoły poświęcają średnio 20 do 40% czasu na zarządzanie długiem technicznym zamiast dostarczać wartość.',
      },
      {
        ul: [
          'Przepisanie: odbudowa jednorazowego MVP często kosztuje więcej niż pierwotna V1, bo trzeba zmigrować dane i użytkowników bez awarii.',
          'Bugi: kod bez testów i struktury mnoży regresje — każda poprawka tworzy nową gdzie indziej.',
          'Powolność: źle zaprojektowana baza degraduje się już od pierwszych kilku tysięcy użytkowników, a optymalizacja staje się osobnym projektem.',
          'Bezpieczeństwo: injection, wycieki danych, chwiejne uwierzytelnianie — najdroższe do naprawienia później.',
        ],
      },
      { h2: 'Dlaczego «szybko i byle jak» płaci się dwa razy' },
      {
        p: 'Skrót wydaje się racjonalny: wypuścić MVP w kilka tygodni, by zwalidować pomysł. Problem w tym, że MVP, które działa, staje się produktem. Nikt nie przepisuje kodu, który «działa», dopóki się nie zepsuje — a potem psuje się, pod obciążeniem prawdziwych użytkowników, w najgorszym momencie. Płacisz wtedy za pełne przepisanie plus utracony przychód, gdy produkt jest niestabilny.',
      },
      {
        quote:
          'Jednorazowe MVP kosztuje podwójnie: raz, żeby je zbudować, raz, żeby je przepisać, gdy trzeba skalować.',
      },
      { h2: 'Dostarczać szybko BEZ tworzenia długu' },
      {
        p: 'Szybkość i jakość nie są przeciwieństwami — to fałszywy dylemat. Dług nie bierze się z szybkości, lecz ze złych skrótów: bez testów, bez architektury, z jednorazowym stackiem. Ze sprawdzonym stackiem produkcyjnym (Next.js, NestJS, Prisma, PostgreSQL) i developmentem wspieranym przez AI dostarczamy naprawdę utrzymywalną V1 w tydzień.',
      },
      {
        ul: [
          'Wąski zakres: od 3 do 5 kluczowych ścieżek użytkownika, reszta wyraźnie poza zakresem.',
          'Stack produkcyjny od dnia 1, nie prototyp do wyrzucenia.',
          'Kod źródłowy należący do Ciebie, przetestowany i udokumentowany — bez zależności i bez czarnej skrzynki.',
        ],
      },
      { h2: 'Co to zmienia dla Ciebie' },
      {
        p: 'W Khufu dostarczamy gotową do produkcji V1 w 7 dni, w stałej cenie 15 000 €, na zdrowej bazie, którą możesz rozwijać bez przepisywania wszystkiego. Zachowujesz szybkość MVP bez dziedziczenia jego długu: produkt, który pokazujesz pierwszym użytkownikom, to ten sam, który później będziesz skalować.',
      },
    ],
  },
  tr: {
    slug: 'cout-cache-mvp-mal-code',
    title: 'Kötü kodlanmış bir MVP’nin gerçek gizli maliyeti',
    excerpt:
      'Rakamlarla teknik borç: tek kullanımlık bir MVP iki kez maliyet çıkarır. Gizli maliyetler (yeniden yazma, hatalar, güvenlik) ve borçsuz hızlı teslim.',
    date: '2026-06-10',
    readingMinutes: 6,
    tags: ['MVP', 'Teknik borç'],
    body: [
      {
        p: 'Kötü kodlanmış bir MVP daha ucuz değildir: iki kez maliyet çıkarır. Bir kez inşa etmek, bir kez de büyütme zamanı geldiğinde yeniden yazmak için. «Hızlı gitmek» adına aldığın teknik borç faiziyle geri ödenir — yeniden yazma, hatalar, yavaşlık ve güvenlik açıkları olarak. İşte rakamlarla gerçek gizli maliyet ve bunu ödemeden nasıl hızlı teslim edilir.',
      },
      { h2: 'Rakamlarla teknik borç' },
      {
        p: 'Teknik borç bir mecaz değildir: gelecekteki geliştirme zamanını bugünden ödünç almaktır. Bir demoyu geçirmek için aceleyle yazılmış tek kullanımlık kod, sonraki her özelliği ağırlaştırır. Bir gün süren iş artık üç gün sürer. Sektör araştırmaları, ekiplerin zamanlarının ortalama %20 ila %40"ını değer üretmek yerine teknik borç yönetmeye harcadığını tahmin ediyor.',
      },
      {
        ul: [
          'Yeniden yazma: tek kullanımlık bir MVP’yi yeniden inşa etmek çoğu zaman ilk V1"den daha pahalıdır, çünkü veri ve kullanıcıları arıza olmadan taşımak gerekir.',
          'Hatalar: testsiz ve yapısız kod regresyonları çoğaltır — her düzeltme başka bir yerde yenisini yaratır.',
          'Yavaşlık: kötü tasarlanmış bir temel ilk birkaç bin kullanıcıdan itibaren bozulur ve optimizasyon başlı başına bir projeye dönüşür.',
          'Güvenlik: enjeksiyonlar, veri sızıntıları, çürük kimlik doğrulama — sonradan onarması en pahalı olanlar.',
        ],
      },
      { h2: 'Neden «hızlı ve baştan savma» iki kez ödenir' },
      {
        p: 'Kısayol mantıklı görünür: fikri doğrulamak için birkaç haftada bir MVP çıkarmak. Sorun şu ki çalışan MVP ürünün kendisi olur. Kimse «çalışan» kodu bozulana kadar yeniden yazmaz — sonra da bozulur, gerçek kullanıcı yükü altında, en kötü anda. O zaman tam yeniden yazmanın bedelini, ürün kararsızken kaybedilen gelirle birlikte ödersin.',
      },
      {
        quote:
          'Tek kullanımlık bir MVP iki kez maliyet çıkarır: bir kez inşa etmek, bir kez de ölçeklenmen gerektiğinde yeniden yazmak için.',
      },
      { h2: 'Borç yaratmadan HIZLI teslim etmek' },
      {
        p: 'Hız ve kalite karşıt değildir — bu sahte bir ikilemdir. Borç hızdan değil, kötü kısayollardan doğar: test yok, mimari yok, tek kullanımlık bir stack. Kanıtlanmış bir üretim stack’i (Next.js, NestJS, Prisma, PostgreSQL) ve yapay zeka destekli geliştirmeyle, gerçekten sürdürülebilir bir V1"i bir haftada teslim ediyoruz.',
      },
      {
        ul: [
          'Dar kapsam: 3 ila 5 temel kullanıcı akışı, geri kalan her şey açıkça kapsam dışı.',
          'İlk günden bir üretim stack’i, atılacak bir prototip değil.',
          'Sana ait, test edilmiş ve belgelenmiş kaynak kod — bağımlılık yok, kara kutu yok.',
        ],
      },
      { h2: 'Bu senin için ne değiştirir' },
      {
        p: 'Khufu’da üretime hazır bir V1"i 7 günde, 15.000 € sabit fiyatla, her şeyi yeniden yazmadan büyütebileceğin sağlam bir temel üzerinde teslim ediyoruz. Bir MVP’nin hızını, borcunu miras almadan korursun: ilk kullanıcılarına gösterdiğin ürün, daha sonra ölçekleyeceğin ürünle aynıdır.',
      },
    ],
  },
}
