import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: "Comment l'IA divise par 3 le temps de développement",
    excerpt:
      "L'IA divise par 3 le temps de développement en automatisant scaffolding, tests, refactoring, doc et exploration — sans sacrifier la qualité.",
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Méthode'],
    body: [
      {
        p: "L'IA divise par trois le temps de développement en automatisant le travail répétitif — génération de code (scaffolding), écriture des tests, refactoring, documentation et exploration technique — pendant que l'humain garde les décisions qui comptent : le jugement produit et l'architecture. Concrètement, ce qui demandait trois semaines se livre aujourd'hui en une. Voici où le gain est réel, ce que l'IA ne remplace pas, et comment ne rien lâcher sur la qualité.",
      },
      { h2: "Où l'IA fait réellement gagner du temps" },
      {
        p: "Le gain ne vient pas d'un développeur qui tape plus vite : il vient de la suppression du travail à faible valeur. Sur un projet type, cinq postes concentrent l'essentiel des heures économisées.",
      },
      {
        ul: [
          "Scaffolding : générer la structure d'un module, les routes, les modèles Prisma et le CRUD de base en minutes au lieu de plusieurs heures.",
          "Tests : produire les tests unitaires et d'intégration des parcours critiques, y compris les cas limites qu'on oublie souvent.",
          "Refactoring : renommer, extraire et réorganiser du code sur des dizaines de fichiers d'un coup, sans erreur de recopie.",
          "Documentation : générer README, commentaires et docstrings à jour au moment où le code est écrit, pas six mois plus tard.",
          "Exploration : comparer deux approches techniques ou comprendre une librairie inconnue en quelques minutes plutôt qu'une demi-journée de lecture.",
        ],
      },
      { h2: "Ce que l'IA ne remplace pas" },
      {
        p: "L'accélération s'arrête là où commencent les décisions irréversibles. L'IA génère du code plausible, pas forcément du code juste : c'est à l'humain de trancher ce qui coûte cher à réparer plus tard.",
      },
      {
        ul: [
          "Le jugement produit : décider quelles fonctionnalités méritent d'exister, lesquelles couper, et ce qui compte vraiment pour l'utilisateur.",
          "L'architecture : choisir le modèle de données, les frontières entre modules et les compromis de scalabilité qui engagent le projet sur des années.",
          "Les arbitrages de sécurité et de données : authentification, permissions, paiements — là où une erreur se paie en incidents, pas en tickets.",
        ],
      },
      {
        quote:
          "L'IA écrit le code trois fois plus vite ; elle ne décide pas à votre place ce qu'il faut construire. Le goulot d'étranglement n'est plus la frappe, c'est le jugement.",
      },
      { h2: "Comment garder la qualité" },
      {
        p: "Diviser le temps par trois n'a aucun intérêt si l'on multiplie les bugs par trois. La vitesse ne tient que si elle est encadrée par quelques garde-fous non négociables.",
      },
      {
        ul: [
          "Relecture humaine systématique : tout code généré est lu et compris avant d'être committé, jamais collé à l'aveugle.",
          "Tests sur les parcours critiques : ce qui casse cher (auth, paiement, données) est couvert, quelle que soit la vitesse.",
          "Stack éprouvée : Next.js, NestJS, Prisma, PostgreSQL, React Native — un terrain connu où l'IA se trompe moins et où les erreurs se voient vite.",
          "TypeScript strict et lint : le compilateur attrape une grande partie de ce que l'IA laisse passer.",
        ],
      },
      { h2: "Ce que ça change concrètement" },
      {
        p: "Diviser le temps de développement par trois, ce n'est pas coder plus vite pour coder plus : c'est raccourcir le délai entre une idée et sa confrontation au marché. C'est ce qui permet à Khufu de livrer une V1 en production en 7 jours pour un forfait fixe de 15 000 €, sur une stack maintenable dont le code vous appartient. L'IA absorbe le répétitif ; le temps gagné est réinvesti là où il crée de la valeur — les décisions produit et la qualité.",
      },
    ],
  },
  en: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'How AI cuts development time by a factor of 3',
    excerpt:
      'AI cuts development time roughly 3x by automating scaffolding, tests, refactoring, docs and exploration — while humans keep product judgment and architecture.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Method'],
    body: [
      {
        p: "AI cuts development time by roughly three by automating the repetitive work — code generation (scaffolding), writing tests, refactoring, documentation and technical exploration — while humans keep the decisions that matter: product judgment and architecture. Concretely, what used to take three weeks now ships in one. Here is where the gain is real, what AI does not replace, and how to hold the line on quality.",
      },
      { h2: 'Where AI genuinely saves time' },
      {
        p: "The gain does not come from a developer typing faster: it comes from removing low-value work. On a typical project, five areas concentrate most of the hours saved.",
      },
      {
        ul: [
          "Scaffolding: generate a module's structure, routes, Prisma models and basic CRUD in minutes instead of hours.",
          "Tests: produce unit and integration tests for the critical paths, including the edge cases people often forget.",
          "Refactoring: rename, extract and reorganize code across dozens of files at once, with no copy-paste errors.",
          "Documentation: generate READMEs, comments and docstrings while the code is being written, not six months later.",
          "Exploration: compare two technical approaches or understand an unfamiliar library in minutes rather than half a day of reading.",
        ],
      },
      { h2: 'What AI does not replace' },
      {
        p: "The acceleration stops where irreversible decisions begin. AI generates plausible code, not necessarily correct code: it is up to humans to settle what is expensive to fix later.",
      },
      {
        ul: [
          "Product judgment: deciding which features deserve to exist, which to cut, and what actually matters to the user.",
          "Architecture: choosing the data model, the boundaries between modules and the scalability trade-offs that commit the project for years.",
          "Security and data trade-offs: authentication, permissions, payments — where a mistake is paid in incidents, not in tickets.",
        ],
      },
      {
        quote:
          "AI writes code three times faster; it does not decide for you what to build. The bottleneck is no longer typing, it is judgment.",
      },
      { h2: 'How to keep quality high' },
      {
        p: "Cutting time by three is worthless if you multiply bugs by three. Speed only holds if a few non-negotiable guardrails frame it.",
      },
      {
        ul: [
          "Systematic human review: every generated line is read and understood before it is committed, never pasted blindly.",
          "Tests on the critical paths: whatever breaks expensively (auth, payment, data) is covered, whatever the speed.",
          "A proven stack: Next.js, NestJS, Prisma, PostgreSQL, React Native — familiar ground where AI errs less and mistakes show up fast.",
          "Strict TypeScript and linting: the compiler catches much of what AI lets slip through.",
        ],
      },
      { h2: 'What it changes concretely' },
      {
        p: "Cutting development time by three is not about coding faster to code more: it is about shortening the delay between an idea and its meeting with the market. That is what lets Khufu ship a production V1 in 7 days for a fixed price of €15,000, on a maintainable stack whose code is yours. AI absorbs the repetitive work; the time saved is reinvested where it creates value — product decisions and quality.",
      },
    ],
  },
  es: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'Cómo la IA divide entre 3 el tiempo de desarrollo',
    excerpt:
      'La IA divide entre 3 el tiempo de desarrollo automatizando scaffolding, pruebas, refactorización, documentación y exploración, sin sacrificar la calidad.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Método'],
    body: [
      {
        p: "La IA divide entre tres el tiempo de desarrollo automatizando el trabajo repetitivo — generación de código (scaffolding), escritura de pruebas, refactorización, documentación y exploración técnica — mientras el humano conserva las decisiones que importan: el juicio de producto y la arquitectura. En concreto, lo que exigía tres semanas hoy se entrega en una. Esto es dónde la ganancia es real, qué no reemplaza la IA y cómo no ceder en calidad.",
      },
      { h2: 'Dónde la IA hace ganar tiempo de verdad' },
      {
        p: "La ganancia no viene de un desarrollador que teclea más rápido: viene de eliminar el trabajo de bajo valor. En un proyecto típico, cinco áreas concentran la mayoría de las horas ahorradas.",
      },
      {
        ul: [
          "Scaffolding: generar la estructura de un módulo, las rutas, los modelos Prisma y el CRUD básico en minutos en lugar de horas.",
          "Pruebas: producir las pruebas unitarias y de integración de los recorridos críticos, incluidos los casos límite que se suelen olvidar.",
          "Refactorización: renombrar, extraer y reorganizar código en decenas de archivos de una vez, sin errores de copiado.",
          "Documentación: generar README, comentarios y docstrings al día en el momento en que se escribe el código, no seis meses después.",
          "Exploración: comparar dos enfoques técnicos o entender una librería desconocida en minutos en lugar de media jornada de lectura.",
        ],
      },
      { h2: 'Lo que la IA no reemplaza' },
      {
        p: "La aceleración se detiene donde empiezan las decisiones irreversibles. La IA genera código plausible, no necesariamente código correcto: le toca al humano decidir lo que sale caro reparar más tarde.",
      },
      {
        ul: [
          "El juicio de producto: decidir qué funcionalidades merecen existir, cuáles cortar y qué importa de verdad al usuario.",
          "La arquitectura: elegir el modelo de datos, las fronteras entre módulos y los compromisos de escalabilidad que comprometen el proyecto durante años.",
          "Los arbitrajes de seguridad y datos: autenticación, permisos, pagos — donde un error se paga en incidentes, no en tickets.",
        ],
      },
      {
        quote:
          "La IA escribe el código tres veces más rápido; no decide por ti qué construir. El cuello de botella ya no es teclear, es el juicio.",
      },
      { h2: 'Cómo mantener la calidad' },
      {
        p: "Dividir el tiempo entre tres no sirve de nada si multiplicas los errores por tres. La velocidad solo se sostiene si la enmarcan unas cuantas barreras innegociables.",
      },
      {
        ul: [
          "Revisión humana sistemática: todo código generado se lee y se entiende antes de confirmarlo, nunca se pega a ciegas.",
          "Pruebas en los recorridos críticos: lo que se rompe caro (autenticación, pago, datos) está cubierto, sea cual sea la velocidad.",
          "Una stack probada: Next.js, NestJS, Prisma, PostgreSQL, React Native — terreno conocido donde la IA se equivoca menos y los errores se ven pronto.",
          "TypeScript estricto y linting: el compilador atrapa gran parte de lo que la IA deja pasar.",
        ],
      },
      { h2: 'Lo que cambia en concreto' },
      {
        p: "Dividir entre tres el tiempo de desarrollo no consiste en programar más rápido para programar más: consiste en acortar el plazo entre una idea y su confrontación con el mercado. Es lo que permite a Khufu entregar una V1 en producción en 7 días por un precio fijo de 15 000 €, sobre una stack mantenible cuyo código es tuyo. La IA absorbe lo repetitivo; el tiempo ganado se reinvierte donde crea valor — las decisiones de producto y la calidad.",
      },
    ],
  },
  de: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'Wie KI die Entwicklungszeit auf ein Drittel senkt',
    excerpt:
      'KI drittelt die Entwicklungszeit durch Automatisierung von Scaffolding, Tests, Refactoring, Doku und Exploration — ohne Abstriche bei der Qualität.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Methode'],
    body: [
      {
        p: "KI senkt die Entwicklungszeit auf ein Drittel, indem sie die repetitive Arbeit automatisiert — Codegenerierung (Scaffolding), das Schreiben von Tests, Refactoring, Dokumentation und technische Exploration — während der Mensch die entscheidenden Weichenstellungen behält: das Produkturteil und die Architektur. Konkret: Was früher drei Wochen brauchte, wird heute in einer geliefert. Hier ist, wo der Gewinn real ist, was KI nicht ersetzt und wie man bei der Qualität keinen Zentimeter nachgibt.",
      },
      { h2: 'Wo KI wirklich Zeit spart' },
      {
        p: "Der Gewinn kommt nicht von einem Entwickler, der schneller tippt: er kommt aus dem Wegfall von Arbeit mit geringem Wert. In einem typischen Projekt bündeln fünf Bereiche den Großteil der eingesparten Stunden.",
      },
      {
        ul: [
          "Scaffolding: die Struktur eines Moduls, Routen, Prisma-Modelle und das Basis-CRUD in Minuten statt Stunden erzeugen.",
          "Tests: Unit- und Integrationstests für die kritischen Pfade erstellen, inklusive der Randfälle, die man oft vergisst.",
          "Refactoring: über Dutzende Dateien hinweg auf einmal umbenennen, extrahieren und umstrukturieren, ohne Kopierfehler.",
          "Dokumentation: README, Kommentare und Docstrings aktuell halten, während der Code entsteht — nicht sechs Monate später.",
          "Exploration: zwei technische Ansätze vergleichen oder eine unbekannte Bibliothek in Minuten verstehen statt in einem halben Lesetag.",
        ],
      },
      { h2: 'Was KI nicht ersetzt' },
      {
        p: "Die Beschleunigung endet dort, wo irreversible Entscheidungen beginnen. KI erzeugt plausiblen Code, nicht zwangsläufig korrekten Code: es ist am Menschen zu entscheiden, was später teuer zu reparieren ist.",
      },
      {
        ul: [
          "Das Produkturteil: entscheiden, welche Funktionen existieren dürfen, welche gestrichen werden und was für den Nutzer wirklich zählt.",
          "Die Architektur: das Datenmodell, die Grenzen zwischen Modulen und die Skalierungs-Kompromisse wählen, die das Projekt über Jahre binden.",
          "Sicherheits- und Datenabwägungen: Authentifizierung, Berechtigungen, Zahlungen — wo ein Fehler in Vorfällen bezahlt wird, nicht in Tickets.",
        ],
      },
      {
        quote:
          "KI schreibt Code dreimal schneller; sie entscheidet nicht für Sie, was zu bauen ist. Der Engpass ist nicht mehr das Tippen, sondern das Urteil.",
      },
      { h2: 'Wie man die Qualität hält' },
      {
        p: "Die Zeit zu dritteln ist wertlos, wenn man die Fehler verdreifacht. Geschwindigkeit trägt nur, wenn einige nicht verhandelbare Leitplanken sie rahmen.",
      },
      {
        ul: [
          "Systematische menschliche Prüfung: jede generierte Zeile wird gelesen und verstanden, bevor sie committet wird — nie blind eingefügt.",
          "Tests auf den kritischen Pfaden: was teuer bricht (Auth, Zahlung, Daten), ist abgedeckt, egal bei welcher Geschwindigkeit.",
          "Ein bewährter Stack: Next.js, NestJS, Prisma, PostgreSQL, React Native — bekanntes Terrain, wo KI seltener irrt und Fehler schnell auffallen.",
          "Striktes TypeScript und Linting: der Compiler fängt vieles ab, was KI durchrutschen lässt.",
        ],
      },
      { h2: 'Was sich konkret ändert' },
      {
        p: "Die Entwicklungszeit zu dritteln bedeutet nicht, schneller zu programmieren, um mehr zu programmieren: es bedeutet, die Zeit zwischen einer Idee und ihrer Konfrontation mit dem Markt zu verkürzen. Genau das erlaubt es Khufu, eine Produktions-V1 in 7 Tagen zum Festpreis von 15 000 € zu liefern, auf einem wartbaren Stack, dessen Code Ihnen gehört. KI übernimmt das Repetitive; die gewonnene Zeit wird dort reinvestiert, wo sie Wert schafft — bei den Produktentscheidungen und der Qualität.",
      },
    ],
  },
  it: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: "Come l'IA divide per 3 il tempo di sviluppo",
    excerpt:
      "L'IA divide per 3 il tempo di sviluppo automatizzando scaffolding, test, refactoring, documentazione ed esplorazione, senza sacrificare la qualità.",
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Metodo'],
    body: [
      {
        p: "L'IA divide per tre il tempo di sviluppo automatizzando il lavoro ripetitivo — generazione di codice (scaffolding), scrittura dei test, refactoring, documentazione ed esplorazione tecnica — mentre l'umano tiene le decisioni che contano: il giudizio di prodotto e l'architettura. In concreto, ciò che richiedeva tre settimane oggi si consegna in una. Ecco dove il guadagno è reale, cosa l'IA non sostituisce e come non cedere sulla qualità.",
      },
      { h2: "Dove l'IA fa davvero guadagnare tempo" },
      {
        p: "Il guadagno non viene da uno sviluppatore che digita più veloce: viene dall'eliminazione del lavoro a basso valore. In un progetto tipico, cinque aree concentrano la maggior parte delle ore risparmiate.",
      },
      {
        ul: [
          "Scaffolding: generare la struttura di un modulo, le rotte, i modelli Prisma e il CRUD di base in minuti anziché in ore.",
          "Test: produrre i test unitari e di integrazione dei percorsi critici, inclusi i casi limite che spesso si dimenticano.",
          "Refactoring: rinominare, estrarre e riorganizzare il codice su decine di file in una volta, senza errori di ricopiatura.",
          "Documentazione: generare README, commenti e docstring aggiornati nel momento in cui il codice viene scritto, non sei mesi dopo.",
          "Esplorazione: confrontare due approcci tecnici o capire una libreria sconosciuta in minuti invece che in mezza giornata di lettura.",
        ],
      },
      { h2: "Ciò che l'IA non sostituisce" },
      {
        p: "L'accelerazione si ferma dove iniziano le decisioni irreversibili. L'IA genera codice plausibile, non necessariamente codice corretto: spetta all'umano decidere ciò che costa caro riparare più tardi.",
      },
      {
        ul: [
          "Il giudizio di prodotto: decidere quali funzionalità meritano di esistere, quali tagliare e cosa conta davvero per l'utente.",
          "L'architettura: scegliere il modello dei dati, i confini tra i moduli e i compromessi di scalabilità che impegnano il progetto per anni.",
          "Gli arbitraggi di sicurezza e dati: autenticazione, permessi, pagamenti — dove un errore si paga in incidenti, non in ticket.",
        ],
      },
      {
        quote:
          "L'IA scrive il codice tre volte più veloce; non decide al posto tuo cosa costruire. Il collo di bottiglia non è più la digitazione, è il giudizio.",
      },
      { h2: 'Come mantenere la qualità' },
      {
        p: "Dividere il tempo per tre non serve a nulla se moltiplichi i bug per tre. La velocità regge solo se la incorniciano alcune barriere non negoziabili.",
      },
      {
        ul: [
          "Revisione umana sistematica: ogni riga generata viene letta e compresa prima di essere committata, mai incollata alla cieca.",
          "Test sui percorsi critici: ciò che si rompe caro (autenticazione, pagamento, dati) è coperto, qualunque sia la velocità.",
          "Uno stack collaudato: Next.js, NestJS, Prisma, PostgreSQL, React Native — terreno noto dove l'IA sbaglia meno e gli errori si vedono presto.",
          "TypeScript rigoroso e linting: il compilatore intercetta gran parte di ciò che l'IA lascia passare.",
        ],
      },
      { h2: 'Cosa cambia in concreto' },
      {
        p: "Dividere per tre il tempo di sviluppo non significa programmare più veloce per programmare di più: significa accorciare il tempo tra un'idea e il suo confronto con il mercato. È ciò che permette a Khufu di consegnare una V1 in produzione in 7 giorni a un prezzo fisso di 15 000 €, su uno stack manutenibile il cui codice è tuo. L'IA assorbe il ripetitivo; il tempo guadagnato si reinveste dove crea valore — le decisioni di prodotto e la qualità.",
      },
    ],
  },
  pt: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'Como a IA divide por 3 o tempo de desenvolvimento',
    excerpt:
      'A IA divide por 3 o tempo de desenvolvimento automatizando scaffolding, testes, refatoração, documentação e exploração, sem sacrificar a qualidade.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Método'],
    body: [
      {
        p: "A IA divide por três o tempo de desenvolvimento automatizando o trabalho repetitivo — geração de código (scaffolding), escrita de testes, refatoração, documentação e exploração técnica — enquanto o humano mantém as decisões que importam: o julgamento de produto e a arquitetura. Em concreto, o que exigia três semanas hoje é entregue em uma. Eis onde o ganho é real, o que a IA não substitui e como não ceder na qualidade.",
      },
      { h2: 'Onde a IA faz ganhar tempo de verdade' },
      {
        p: "O ganho não vem de um programador que teclea mais rápido: vem da eliminação do trabalho de baixo valor. Num projeto típico, cinco áreas concentram a maior parte das horas poupadas.",
      },
      {
        ul: [
          "Scaffolding: gerar a estrutura de um módulo, as rotas, os modelos Prisma e o CRUD básico em minutos em vez de horas.",
          "Testes: produzir os testes unitários e de integração dos percursos críticos, incluindo os casos limite que costumam ser esquecidos.",
          "Refatoração: renomear, extrair e reorganizar código em dezenas de ficheiros de uma vez, sem erros de cópia.",
          "Documentação: gerar README, comentários e docstrings atualizados no momento em que o código é escrito, não seis meses depois.",
          "Exploração: comparar duas abordagens técnicas ou entender uma biblioteca desconhecida em minutos em vez de meia jornada de leitura.",
        ],
      },
      { h2: 'O que a IA não substitui' },
      {
        p: "A aceleração para onde começam as decisões irreversíveis. A IA gera código plausível, não necessariamente código correto: cabe ao humano decidir o que sai caro reparar mais tarde.",
      },
      {
        ul: [
          "O julgamento de produto: decidir que funcionalidades merecem existir, quais cortar e o que realmente importa ao utilizador.",
          "A arquitetura: escolher o modelo de dados, as fronteiras entre módulos e os compromissos de escalabilidade que comprometem o projeto durante anos.",
          "Os arbítrios de segurança e dados: autenticação, permissões, pagamentos — onde um erro se paga em incidentes, não em tickets.",
        ],
      },
      {
        quote:
          "A IA escreve o código três vezes mais rápido; não decide por ti o que construir. O gargalo já não é teclar, é o julgamento.",
      },
      { h2: 'Como manter a qualidade' },
      {
        p: "Dividir o tempo por três não serve de nada se multiplicares os bugs por três. A velocidade só se sustém se algumas barreiras inegociáveis a enquadrarem.",
      },
      {
        ul: [
          "Revisão humana sistemática: todo código gerado é lido e compreendido antes de ser committado, nunca colado às cegas.",
          "Testes nos percursos críticos: o que quebra caro (autenticação, pagamento, dados) está coberto, seja qual for a velocidade.",
          "Uma stack comprovada: Next.js, NestJS, Prisma, PostgreSQL, React Native — terreno conhecido onde a IA erra menos e os erros aparecem depressa.",
          "TypeScript estrito e linting: o compilador apanha grande parte do que a IA deixa passar.",
        ],
      },
      { h2: 'O que muda em concreto' },
      {
        p: "Dividir por três o tempo de desenvolvimento não é programar mais rápido para programar mais: é encurtar o prazo entre uma ideia e o seu confronto com o mercado. É o que permite à Khufu entregar uma V1 em produção em 7 dias por um preço fixo de 15 000 €, sobre uma stack mantível cujo código é seu. A IA absorve o repetitivo; o tempo ganho é reinvestido onde cria valor — as decisões de produto e a qualidade.",
      },
    ],
  },
  nl: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'Hoe AI de ontwikkeltijd door 3 deelt',
    excerpt:
      'AI deelt de ontwikkeltijd door 3 door scaffolding, tests, refactoring, documentatie en exploratie te automatiseren — zonder in te leveren op kwaliteit.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Methode'],
    body: [
      {
        p: "AI deelt de ontwikkeltijd door drie door het repetitieve werk te automatiseren — codegeneratie (scaffolding), het schrijven van tests, refactoring, documentatie en technische exploratie — terwijl de mens de beslissingen houdt die ertoe doen: het productoordeel en de architectuur. Concreet: wat vroeger drie weken kostte, wordt nu in één opgeleverd. Hier is waar de winst echt is, wat AI niet vervangt en hoe je geen duimbreed toegeeft op kwaliteit.",
      },
      { h2: 'Waar AI echt tijd bespaart' },
      {
        p: "De winst komt niet van een ontwikkelaar die sneller typt: ze komt van het wegnemen van werk met lage waarde. In een typisch project bundelen vijf gebieden het grootste deel van de bespaarde uren.",
      },
      {
        ul: [
          "Scaffolding: de structuur van een module, de routes, de Prisma-modellen en de basis-CRUD in minuten genereren in plaats van uren.",
          "Tests: unit- en integratietests voor de kritieke paden produceren, inclusief de randgevallen die men vaak vergeet.",
          "Refactoring: in één keer hernoemen, extraheren en herstructureren over tientallen bestanden, zonder overtypfouten.",
          "Documentatie: README's, commentaar en docstrings actueel genereren op het moment dat de code wordt geschreven, niet zes maanden later.",
          "Exploratie: twee technische aanpakken vergelijken of een onbekende bibliotheek in minuten begrijpen in plaats van een halve dag lezen.",
        ],
      },
      { h2: 'Wat AI niet vervangt' },
      {
        p: "De versnelling stopt waar onomkeerbare beslissingen beginnen. AI genereert plausibele code, niet noodzakelijk correcte code: het is aan de mens om te beslissen wat later duur is om te herstellen.",
      },
      {
        ul: [
          "Het productoordeel: beslissen welke functies mogen bestaan, welke te schrappen en wat er werkelijk toe doet voor de gebruiker.",
          "De architectuur: het datamodel kiezen, de grenzen tussen modules en de schaalbaarheidscompromissen die het project jarenlang vastleggen.",
          "De afwegingen rond veiligheid en data: authenticatie, rechten, betalingen — waar een fout in incidenten wordt betaald, niet in tickets.",
        ],
      },
      {
        quote:
          "AI schrijft code drie keer sneller; ze beslist niet voor jou wat je moet bouwen. Het knelpunt is niet langer het typen, maar het oordeel.",
      },
      { h2: 'Hoe je de kwaliteit hoog houdt' },
      {
        p: "De tijd door drie delen is waardeloos als je de bugs met drie vermenigvuldigt. Snelheid houdt alleen stand als enkele niet-onderhandelbare vangrails haar omkaderen.",
      },
      {
        ul: [
          "Systematische menselijke review: elke gegenereerde regel wordt gelezen en begrepen voordat hij wordt gecommit, nooit blind geplakt.",
          "Tests op de kritieke paden: wat duur breekt (auth, betaling, data) is gedekt, ongeacht de snelheid.",
          "Een beproefde stack: Next.js, NestJS, Prisma, PostgreSQL, React Native — bekend terrein waar AI minder fouten maakt en fouten snel opvallen.",
          "Strikte TypeScript en linting: de compiler vangt veel op van wat AI laat glippen.",
        ],
      },
      { h2: 'Wat het concreet verandert' },
      {
        p: "De ontwikkeltijd door drie delen gaat niet over sneller programmeren om meer te programmeren: het gaat over het verkorten van de tijd tussen een idee en de confrontatie met de markt. Dat is wat Khufu in staat stelt om een productie-V1 in 7 dagen op te leveren voor een vaste prijs van € 15.000, op een onderhoudbare stack waarvan de code van jou is. AI slokt het repetitieve op; de gewonnen tijd wordt geherinvesteerd waar ze waarde creëert — de productbeslissingen en de kwaliteit.",
      },
    ],
  },
  ar: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'كيف يقلّص الذكاء الاصطناعي زمن التطوير إلى الثلث',
    excerpt:
      'يقلّص الذكاء الاصطناعي زمن التطوير إلى نحو الثلث عبر أتمتة scaffolding والاختبارات وإعادة الهيكلة والتوثيق والاستكشاف — دون التنازل عن الجودة.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'المنهجية'],
    body: [
      {
        p: 'يقسم الذكاء الاصطناعي زمن التطوير على ثلاثة عبر أتمتة العمل المتكرر — توليد الكود (scaffolding)، وكتابة الاختبارات، وإعادة الهيكلة (refactoring)، والتوثيق، والاستكشاف التقني — بينما يحتفظ الإنسان بالقرارات المهمة: الحكم على المنتج والهندسة المعمارية. عملياً، ما كان يتطلب ثلاثة أسابيع يُسلَّم اليوم في أسبوع واحد. إليك أين يكون المكسب حقيقياً، وما لا يستبدله الذكاء الاصطناعي، وكيف لا تتنازل عن الجودة.',
      },
      { h2: 'أين يوفّر الذكاء الاصطناعي الوقت فعلاً' },
      {
        p: 'المكسب لا يأتي من مطوّر يكتب أسرع: بل من إزالة العمل قليل القيمة. في مشروع نموذجي، تتركّز معظم الساعات الموفَّرة في خمسة مجالات.',
      },
      {
        ul: [
          'Scaffolding: توليد بنية وحدة، والمسارات، ونماذج Prisma، وعمليات CRUD الأساسية في دقائق بدل ساعات.',
          'الاختبارات: إنتاج اختبارات الوحدة والتكامل للمسارات الحرجة، بما فيها الحالات الحدّية التي كثيراً ما تُنسى.',
          'إعادة الهيكلة: إعادة التسمية والاستخراج وإعادة التنظيم عبر عشرات الملفات دفعة واحدة، دون أخطاء نسخ.',
          'التوثيق: توليد ملفات README والتعليقات وdocstrings محدَّثة لحظة كتابة الكود، لا بعد ستة أشهر.',
          'الاستكشاف: مقارنة نهجين تقنيين أو فهم مكتبة غير معروفة في دقائق بدل نصف يوم من القراءة.',
        ],
      },
      { h2: 'ما لا يستبدله الذكاء الاصطناعي' },
      {
        p: 'يتوقف التسريع حيث تبدأ القرارات غير القابلة للتراجع. يولّد الذكاء الاصطناعي كوداً معقولاً، لا كوداً صحيحاً بالضرورة: يبقى على الإنسان أن يحسم ما يكلّف إصلاحه غالياً لاحقاً.',
      },
      {
        ul: [
          'الحكم على المنتج: تقرير أي الميزات تستحق الوجود، وأيها يُحذَف، وما يهمّ المستخدم فعلاً.',
          'الهندسة المعمارية: اختيار نموذج البيانات، والحدود بين الوحدات، ومقايضات القابلية للتوسّع التي تُلزم المشروع لسنوات.',
          'مقايضات الأمان والبيانات: المصادقة، والصلاحيات، والمدفوعات — حيث يُدفع ثمن الخطأ حوادثَ لا تذاكرَ.',
        ],
      },
      {
        quote:
          'يكتب الذكاء الاصطناعي الكود أسرع بثلاث مرات؛ لكنه لا يقرّر عنك ما يجب بناؤه. لم يعد عنق الزجاجة هو الكتابة، بل الحكم.',
      },
      { h2: 'كيف تحافظ على الجودة' },
      {
        p: 'تقسيم الوقت على ثلاثة لا قيمة له إذا ضاعفت الأخطاء ثلاث مرات. لا تصمد السرعة إلا إذا أطّرتها بضعة حواجز غير قابلة للتفاوض.',
      },
      {
        ul: [
          'مراجعة بشرية منهجية: يُقرأ كل سطر مُولَّد ويُفهَم قبل اعتماده (commit)، ولا يُلصَق أبداً بشكل أعمى.',
          'اختبارات على المسارات الحرجة: ما يتعطّل بكلفة عالية (المصادقة، الدفع، البيانات) مُغطّى، مهما بلغت السرعة.',
          'stack مُجرَّبة: Next.js, NestJS, Prisma, PostgreSQL, React Native — أرض معروفة يخطئ فيها الذكاء الاصطناعي أقل وتظهر فيها الأخطاء بسرعة.',
          'TypeScript صارم وأدوات lint: يلتقط المُترجِم جزءاً كبيراً مما يتركه الذكاء الاصطناعي يمرّ.',
        ],
      },
      { h2: 'ما الذي يتغيّر عملياً' },
      {
        p: 'تقسيم زمن التطوير على ثلاثة ليس برمجةً أسرع لبرمجة أكثر: بل تقصير المدة بين الفكرة ومواجهتها للسوق. هذا ما يتيح لـ Khufu تسليم V1 في الإنتاج خلال 7 أيام مقابل سعر ثابت قدره 15,000 €، على stack قابلة للصيانة شيفرتها ملك لك. يمتصّ الذكاء الاصطناعي العمل المتكرر؛ والوقت المُوفَّر يُعاد استثماره حيث يخلق القيمة — قرارات المنتج والجودة.',
      },
    ],
  },
  pl: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: 'Jak AI dzieli czas developmentu przez 3',
    excerpt:
      'AI dzieli czas developmentu przez 3, automatyzując scaffolding, testy, refactoring, dokumentację i eksplorację — bez utraty jakości.',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Metoda'],
    body: [
      {
        p: "AI dzieli czas developmentu przez trzy, automatyzując powtarzalną pracę — generowanie kodu (scaffolding), pisanie testów, refactoring, dokumentację i eksplorację techniczną — podczas gdy człowiek zachowuje decyzje, które się liczą: osąd produktowy i architekturę. Konkretnie: to, co wymagało trzech tygodni, dziś dostarcza się w jednym. Oto gdzie zysk jest realny, czego AI nie zastępuje i jak nie ustąpić ani na krok w kwestii jakości.",
      },
      { h2: 'Gdzie AI naprawdę oszczędza czas' },
      {
        p: "Zysk nie bierze się z programisty, który szybciej stuka w klawiaturę: bierze się z usunięcia pracy o niskiej wartości. W typowym projekcie pięć obszarów skupia większość zaoszczędzonych godzin.",
      },
      {
        ul: [
          "Scaffolding: wygenerowanie struktury modułu, tras, modeli Prisma i podstawowego CRUD w minuty zamiast godzin.",
          "Testy: wytworzenie testów jednostkowych i integracyjnych dla krytycznych ścieżek, w tym przypadków brzegowych, o których często się zapomina.",
          "Refactoring: zmiana nazw, wyodrębnianie i reorganizacja kodu w dziesiątkach plików naraz, bez błędów przepisywania.",
          "Dokumentacja: generowanie aktualnych README, komentarzy i docstringów w chwili pisania kodu, a nie sześć miesięcy później.",
          "Eksploracja: porównanie dwóch podejść technicznych lub zrozumienie nieznanej biblioteki w minuty zamiast pół dnia czytania.",
        ],
      },
      { h2: 'Czego AI nie zastępuje' },
      {
        p: "Przyspieszenie kończy się tam, gdzie zaczynają się nieodwracalne decyzje. AI generuje prawdopodobny kod, niekoniecznie poprawny: to człowiek rozstrzyga, co drogo naprawić później.",
      },
      {
        ul: [
          "Osąd produktowy: decydowanie, które funkcje zasługują na istnienie, które wyciąć i co naprawdę liczy się dla użytkownika.",
          "Architektura: wybór modelu danych, granic między modułami i kompromisów skalowalności, które wiążą projekt na lata.",
          "Kompromisy bezpieczeństwa i danych: uwierzytelnianie, uprawnienia, płatności — gdzie za błąd płaci się incydentami, nie zgłoszeniami.",
        ],
      },
      {
        quote:
          "AI pisze kod trzy razy szybciej; nie decyduje za ciebie, co zbudować. Wąskim gardłem nie jest już pisanie, lecz osąd.",
      },
      { h2: 'Jak utrzymać jakość' },
      {
        p: "Podzielenie czasu przez trzy jest bezwartościowe, jeśli pomnożysz błędy przez trzy. Szybkość utrzymuje się tylko wtedy, gdy obramowuje ją kilka nienegocjowalnych barier ochronnych.",
      },
      {
        ul: [
          "Systematyczny przegląd przez człowieka: każda wygenerowana linia jest czytana i zrozumiana przed commitem, nigdy wklejana na ślepo.",
          "Testy na krytycznych ścieżkach: to, co drogo się psuje (uwierzytelnianie, płatność, dane), jest pokryte, niezależnie od szybkości.",
          "Sprawdzony stack: Next.js, NestJS, Prisma, PostgreSQL, React Native — znany teren, gdzie AI myli się rzadziej, a błędy szybko widać.",
          "Ścisły TypeScript i linting: kompilator wyłapuje dużą część tego, co AI przepuszcza.",
        ],
      },
      { h2: 'Co to zmienia konkretnie' },
      {
        p: "Podzielenie czasu developmentu przez trzy nie polega na szybszym programowaniu, by programować więcej: polega na skróceniu czasu między pomysłem a jego zderzeniem z rynkiem. To właśnie pozwala Khufu dostarczyć produkcyjną V1 w 7 dni za stałą cenę 15 000 €, na utrzymywalnym stacku, którego kod należy do ciebie. AI pochłania to, co powtarzalne; zaoszczędzony czas jest reinwestowany tam, gdzie tworzy wartość — w decyzje produktowe i jakość.",
      },
    ],
  },
  tr: {
    slug: 'ia-divise-par-3-temps-de-dev',
    title: "Yapay zekâ geliştirme süresini nasıl 3'e böler",
    excerpt:
      "Yapay zekâ; scaffolding, test, refactoring, dokümantasyon ve keşfi otomatikleştirerek geliştirme süresini 3'e böler — kaliteden ödün vermeden.",
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['AI-native', 'Yöntem'],
    body: [
      {
        p: "Yapay zekâ, tekrarlayan işi otomatikleştirerek geliştirme süresini üçe böler — kod üretimi (scaffolding), test yazımı, refactoring, dokümantasyon ve teknik keşif — insan ise önemli kararları elinde tutar: ürün muhakemesi ve mimari. Somut olarak, üç hafta gerektiren iş bugün bir haftada teslim ediliyor. İşte kazancın gerçek olduğu yerler, yapay zekânın neyin yerini almadığı ve kaliteden nasıl bir milim taviz verilmeyeceği.",
      },
      { h2: 'Yapay zekâ gerçekten nerede zaman kazandırır' },
      {
        p: "Kazanç, daha hızlı yazan bir geliştiriciden gelmez: düşük değerli işin ortadan kalkmasından gelir. Tipik bir projede, kazanılan saatlerin çoğu beş alanda toplanır.",
      },
      {
        ul: [
          "Scaffolding: bir modülün yapısını, rotaları, Prisma modellerini ve temel CRUD'u saatler yerine dakikalar içinde üretmek.",
          "Testler: kritik akışların birim ve entegrasyon testlerini, çoğu zaman unutulan sınır durumları dâhil üretmek.",
          "Refactoring: onlarca dosyada tek seferde yeniden adlandırma, çıkarma ve yeniden düzenleme — kopyalama hatası olmadan.",
          "Dokümantasyon: README, yorumlar ve docstring'leri kod yazılırken güncel üretmek, altı ay sonra değil.",
          "Keşif: iki teknik yaklaşımı karşılaştırmak ya da bilinmeyen bir kütüphaneyi yarım günlük okuma yerine dakikalar içinde anlamak.",
        ],
      },
      { h2: 'Yapay zekânın yerini almadığı şeyler' },
      {
        p: "Hızlanma, geri döndürülemez kararların başladığı yerde durur. Yapay zekâ makul kod üretir, ille de doğru kod değil: sonradan pahalıya tamir edilecek şeye karar vermek insana kalır.",
      },
      {
        ul: [
          "Ürün muhakemesi: hangi özelliklerin var olmayı hak ettiğine, hangilerinin kesileceğine ve kullanıcı için gerçekten neyin önemli olduğuna karar vermek.",
          "Mimari: veri modelini, modüller arasındaki sınırları ve projeyi yıllarca bağlayan ölçeklenebilirlik ödünleşimlerini seçmek.",
          "Güvenlik ve veri ödünleşimleri: kimlik doğrulama, izinler, ödemeler — bir hatanın bedelinin tiketle değil olaylarla ödendiği yer.",
        ],
      },
      {
        quote:
          "Yapay zekâ kodu üç kat daha hızlı yazar; ne inşa edeceğine senin yerine karar vermez. Darboğaz artık yazmak değil, muhakemedir.",
      },
      { h2: 'Kalite nasıl korunur' },
      {
        p: "Süreyi üçe bölmek, hataları üçe katlıyorsan hiçbir işe yaramaz. Hız, ancak birkaç pazarlıksız koruma bandı onu çerçevelediğinde ayakta kalır.",
      },
      {
        ul: [
          "Sistematik insan incelemesi: üretilen her satır commit edilmeden önce okunur ve anlaşılır, asla körü körüne yapıştırılmaz.",
          "Kritik akışlarda testler: pahalıya patlayan ne varsa (kimlik doğrulama, ödeme, veri) hız ne olursa olsun kapsanır.",
          "Kanıtlanmış bir stack: Next.js, NestJS, Prisma, PostgreSQL, React Native — yapay zekânın daha az yanıldığı ve hataların çabuk görüldüğü bilinen zemin.",
          "Katı TypeScript ve linting: derleyici, yapay zekânın kaçırdığının büyük bölümünü yakalar.",
        ],
      },
      { h2: 'Somut olarak neyi değiştirir' },
      {
        p: "Geliştirme süresini üçe bölmek, daha çok kodlamak için daha hızlı kodlamak değildir: bir fikir ile onun pazarla buluşması arasındaki süreyi kısaltmaktır. Khufu'nun üretim V1'ini, kodu size ait bakımı yapılabilir bir stack üzerinde, 15.000 € sabit fiyata 7 günde teslim etmesini sağlayan da budur. Yapay zekâ tekrarlayanı soğurur; kazanılan zaman değer yarattığı yere — ürün kararlarına ve kaliteye — yeniden yatırılır.",
      },
    ],
  },
}
