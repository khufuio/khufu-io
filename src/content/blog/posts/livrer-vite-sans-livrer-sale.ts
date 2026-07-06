import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Pourquoi « livrer vite » ne veut pas dire « livrer sale »",
    excerpt:
      "Vitesse et qualité ne s'opposent pas. Voici ce qui rend une V1 rapide et propre — et pourquoi la vraie dette technique vient du flou, pas du délai.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Méthode', 'Qualité'],
    body: [
      {
        p: "« Livrer vite » et « livrer sale » ne sont pas synonymes. La vitesse ne produit pas de la dette technique — c'est le flou qui en produit. Une V1 livrée en 7 jours peut être plus propre qu'un projet étalé sur six mois, à condition de réunir quatre choses : une stack de production, un périmètre serré, un développement assisté par IA et des tests sur les parcours critiques. Voici pourquoi la lenteur n'est pas un gage de qualité.",
      },
      { h2: "L'idée reçue : lent = soigné" },
      {
        p: "On associe la lenteur au sérieux et la vitesse au bâclage. C'est une erreur de raisonnement. Un projet lent n'est pas plus testé, ni mieux architecturé — il est simplement plus long. La plupart des mois perdus ne servent pas à écrire du meilleur code : ils servent à attendre des validations, à refaire des maquettes et à négocier un périmètre qui bouge en permanence.",
      },
      {
        ul: [
          "Un délai long ne garantit ni les tests, ni la relecture, ni la documentation.",
          "Plus un projet dure, plus le périmètre dérive et plus le code accumule des couches contradictoires.",
          "La qualité vient de décisions nettes, pas du nombre de semaines passées dessus.",
        ],
      },
      { h2: "Ce qui rend la vitesse compatible avec la qualité" },
      {
        p: "Une V1 rapide et propre repose sur quatre piliers concrets. Aucun ne consiste à « coder plus vite en tapant plus fort » : ils consistent à supprimer le gaspillage.",
      },
      {
        ul: [
          "Une stack de production éprouvée (Next.js, NestJS, Prisma, PostgreSQL, React Native) : pas de choix technique à débattre, pas de code jetable.",
          "Un périmètre serré : 3 à 5 parcours essentiels validés au jour 0, et un hors-périmètre écrit noir sur blanc.",
          "Un développement assisté par IA : le travail répétitif (boilerplate, types, tests) est généré, l'humain garde les décisions.",
          "Des tests sur les parcours critiques : authentification, paiement, données — ce qui casse cher est couvert.",
        ],
      },
      { h2: "La vraie source de dette, c'est le flou" },
      {
        p: "La dette technique ne naît presque jamais d'un délai court. Elle naît de spécifications floues, de décisions repoussées et d'un périmètre qui change en cours de route. Chaque « on verra plus tard » devient une rustine, et les rustines s'empilent. Un périmètre défini et validé en amont élimine cette source de dette avant même la première ligne de code.",
      },
      {
        quote:
          "Ce n'est pas la vitesse qui crée la dette technique, c'est le flou. Un périmètre clair coûte moins cher qu'un projet lent.",
      },
      { h2: "Vite ET propre, concrètement" },
      {
        p: "Chez Khufu, une V1 est livrée en 7 jours pour un forfait fixe de 15 000 €, sur une stack de production dont le code source vous appartient. La rapidité ne vient pas de raccourcis sur la qualité : elle vient d'un cadrage net, d'une stack maintenable et de l'IA qui absorbe le travail répétitif. Le résultat n'est pas un prototype à réécrire, mais une base sur laquelle on continue de construire — sans dette cachée.",
      },
    ],
  },
  en: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Why \"shipping fast\" doesn't mean \"shipping sloppy\"",
    excerpt:
      "Speed and quality are not opposites. Here is what makes a V1 fast and clean — and why real technical debt comes from vagueness, not from the deadline.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Method', 'Quality'],
    body: [
      {
        p: "\"Shipping fast\" and \"shipping sloppy\" are not the same thing. Speed does not produce technical debt — vagueness does. A V1 shipped in 7 days can be cleaner than a project stretched over six months, provided you combine four things: a production stack, a tight scope, AI-assisted development and tests on the critical paths. Here is why slowness is no guarantee of quality.",
      },
      { h2: "The myth: slow means careful" },
      {
        p: "We associate slowness with seriousness and speed with carelessness. That is a reasoning error. A slow project is not better tested, nor better architected — it is simply longer. Most of the lost months are not spent writing better code: they are spent waiting for approvals, redoing mockups and negotiating a scope that keeps moving.",
      },
      {
        ul: [
          "A long timeline guarantees neither tests, nor code review, nor documentation.",
          "The longer a project runs, the more the scope drifts and the more the code stacks up contradictory layers.",
          "Quality comes from clear decisions, not from the number of weeks spent on them.",
        ],
      },
      { h2: "What makes speed compatible with quality" },
      {
        p: "A fast, clean V1 rests on four concrete pillars. None of them is about \"coding faster by typing harder\": they are about removing waste.",
      },
      {
        ul: [
          "A proven production stack (Next.js, NestJS, Prisma, PostgreSQL, React Native): no tech choice to debate, no throwaway code.",
          "A tight scope: 3 to 5 essential user journeys validated on day 0, and an out-of-scope written down in black and white.",
          "AI-assisted development: repetitive work (boilerplate, types, tests) is generated, humans keep the decisions.",
          "Tests on the critical paths: authentication, payment, data — whatever breaks expensively is covered.",
        ],
      },
      { h2: "The real source of debt is vagueness" },
      {
        p: "Technical debt almost never comes from a short deadline. It comes from vague specs, deferred decisions and a scope that shifts along the way. Every \"we'll see later\" becomes a patch, and patches pile up. A scope defined and validated upfront eliminates that source of debt before the first line of code.",
      },
      {
        quote:
          "It is not speed that creates technical debt, it is vagueness. A clear scope costs less than a slow project.",
      },
      { h2: "Fast AND clean, concretely" },
      {
        p: "At Khufu, a V1 is shipped in 7 days for a fixed price of €15,000, on a production stack whose source code is yours. The speed does not come from cutting corners on quality: it comes from sharp framing, a maintainable stack and AI absorbing the repetitive work. The result is not a prototype to rewrite, but a foundation you keep building on — with no hidden debt.",
      },
    ],
  },
  es: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Por qué \"entregar rápido\" no significa \"entregar mal\"",
    excerpt:
      "Velocidad y calidad no se oponen. Esto es lo que hace que una V1 sea rápida y limpia — y por qué la deuda técnica real nace de la ambigüedad, no del plazo.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Método', 'Calidad'],
    body: [
      {
        p: "\"Entregar rápido\" y \"entregar mal\" no son lo mismo. La velocidad no produce deuda técnica — la produce la ambigüedad. Una V1 entregada en 7 días puede ser más limpia que un proyecto estirado durante seis meses, siempre que se reúnan cuatro cosas: una stack de producción, un alcance ajustado, desarrollo asistido por IA y pruebas en los recorridos críticos. Aquí está por qué la lentitud no garantiza calidad.",
      },
      { h2: "El mito: lento es cuidadoso" },
      {
        p: "Asociamos la lentitud con la seriedad y la velocidad con la chapuza. Es un error de razonamiento. Un proyecto lento no está mejor probado ni mejor arquitecturado — simplemente es más largo. La mayoría de los meses perdidos no se dedican a escribir mejor código: se dedican a esperar validaciones, rehacer maquetas y negociar un alcance que no deja de moverse.",
      },
      {
        ul: [
          "Un plazo largo no garantiza ni las pruebas, ni la revisión, ni la documentación.",
          "Cuanto más dura un proyecto, más se desvía el alcance y más acumula el código capas contradictorias.",
          "La calidad viene de decisiones claras, no del número de semanas dedicadas.",
        ],
      },
      { h2: "Lo que hace la velocidad compatible con la calidad" },
      {
        p: "Una V1 rápida y limpia se apoya en cuatro pilares concretos. Ninguno consiste en \"programar más rápido tecleando más fuerte\": consisten en eliminar el desperdicio.",
      },
      {
        ul: [
          "Una stack de producción probada (Next.js, NestJS, Prisma, PostgreSQL, React Native): sin elección técnica que debatir, sin código desechable.",
          "Un alcance ajustado: 3 a 5 recorridos esenciales validados el día 0, y un fuera de alcance escrito negro sobre blanco.",
          "Desarrollo asistido por IA: el trabajo repetitivo (boilerplate, tipos, pruebas) se genera, el humano conserva las decisiones.",
          "Pruebas en los recorridos críticos: autenticación, pago, datos — lo que se rompe caro está cubierto.",
        ],
      },
      { h2: "La verdadera fuente de deuda es la ambigüedad" },
      {
        p: "La deuda técnica casi nunca nace de un plazo corto. Nace de especificaciones ambiguas, decisiones aplazadas y un alcance que cambia sobre la marcha. Cada \"ya lo veremos\" se convierte en un parche, y los parches se acumulan. Un alcance definido y validado de antemano elimina esa fuente de deuda antes de la primera línea de código.",
      },
      {
        quote:
          "No es la velocidad la que crea la deuda técnica, es la ambigüedad. Un alcance claro cuesta menos que un proyecto lento.",
      },
      { h2: "Rápido Y limpio, en concreto" },
      {
        p: "En Khufu, una V1 se entrega en 7 días por un precio fijo de 15 000 €, sobre una stack de producción cuyo código fuente es tuyo. La rapidez no viene de recortar en calidad: viene de un encuadre nítido, una stack mantenible y la IA que absorbe el trabajo repetitivo. El resultado no es un prototipo que reescribir, sino una base sobre la que se sigue construyendo — sin deuda oculta.",
      },
    ],
  },
  de: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Warum \"schnell liefern\" nicht \"schlampig liefern\" bedeutet",
    excerpt:
      "Geschwindigkeit und Qualität sind kein Widerspruch. Das macht eine V1 schnell und sauber — und warum echte technische Schulden aus Unklarheit entstehen, nicht aus der Frist.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Methode', 'Qualität'],
    body: [
      {
        p: "\"Schnell liefern\" und \"schlampig liefern\" sind nicht dasselbe. Geschwindigkeit erzeugt keine technischen Schulden — Unklarheit tut es. Eine in 7 Tagen gelieferte V1 kann sauberer sein als ein über sechs Monate gestrecktes Projekt, sofern vier Dinge zusammenkommen: ein Produktions-Stack, ein enger Scope, KI-gestützte Entwicklung und Tests auf den kritischen Pfaden. Hier ist, warum Langsamkeit keine Qualitätsgarantie ist.",
      },
      { h2: "Der Mythos: langsam heißt sorgfältig" },
      {
        p: "Wir verbinden Langsamkeit mit Ernsthaftigkeit und Geschwindigkeit mit Pfusch. Das ist ein Denkfehler. Ein langsames Projekt ist nicht besser getestet, noch besser architektiert — es ist einfach länger. Die meisten verlorenen Monate werden nicht mit besserem Code verbracht: sie vergehen mit Warten auf Freigaben, dem Neubau von Mockups und dem Verhandeln eines Scopes, der ständig in Bewegung ist.",
      },
      {
        ul: [
          "Eine lange Laufzeit garantiert weder Tests noch Code-Review noch Dokumentation.",
          "Je länger ein Projekt läuft, desto mehr driftet der Scope und desto mehr widersprüchliche Schichten häuft der Code an.",
          "Qualität kommt aus klaren Entscheidungen, nicht aus der Zahl der investierten Wochen.",
        ],
      },
      { h2: "Was Geschwindigkeit mit Qualität vereinbar macht" },
      {
        p: "Eine schnelle, saubere V1 ruht auf vier konkreten Säulen. Keine davon bedeutet \"schneller programmieren durch härteres Tippen\": sie bedeuten, Verschwendung zu beseitigen.",
      },
      {
        ul: [
          "Ein bewährter Produktions-Stack (Next.js, NestJS, Prisma, PostgreSQL, React Native): keine Tech-Wahl zu debattieren, kein Wegwerf-Code.",
          "Ein enger Scope: 3 bis 5 essenzielle User Journeys an Tag 0 validiert und ein schriftlich fixierter Out-of-Scope.",
          "KI-gestützte Entwicklung: repetitive Arbeit (Boilerplate, Typen, Tests) wird generiert, der Mensch behält die Entscheidungen.",
          "Tests auf den kritischen Pfaden: Authentifizierung, Zahlung, Daten — was teuer bricht, ist abgedeckt.",
        ],
      },
      { h2: "Die wahre Quelle der Schulden ist Unklarheit" },
      {
        p: "Technische Schulden entstehen fast nie aus einer kurzen Frist. Sie entstehen aus unklaren Spezifikationen, aufgeschobenen Entscheidungen und einem Scope, der sich unterwegs verschiebt. Jedes \"sehen wir später\" wird zum Flicken, und Flicken häufen sich. Ein vorab definierter und validierter Scope beseitigt diese Schuldenquelle noch vor der ersten Codezeile.",
      },
      {
        quote:
          "Nicht die Geschwindigkeit erzeugt technische Schulden, sondern die Unklarheit. Ein klarer Scope kostet weniger als ein langsames Projekt.",
      },
      { h2: "Schnell UND sauber, konkret" },
      {
        p: "Bei Khufu wird eine V1 in 7 Tagen zum Festpreis von 15 000 € geliefert, auf einem Produktions-Stack, dessen Quellcode Ihnen gehört. Die Geschwindigkeit kommt nicht durch Abstriche bei der Qualität: sie kommt aus scharfem Framing, einem wartbaren Stack und KI, die die repetitive Arbeit übernimmt. Das Ergebnis ist kein Prototyp zum Neuschreiben, sondern ein Fundament, auf dem weitergebaut wird — ohne versteckte Schulden.",
      },
    ],
  },
  it: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Perché \"consegnare veloce\" non significa \"consegnare male\"",
    excerpt:
      "Velocità e qualità non sono opposte. Ecco cosa rende una V1 veloce e pulita — e perché il vero debito tecnico nasce dalla vaghezza, non dalla scadenza.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Metodo', 'Qualità'],
    body: [
      {
        p: "\"Consegnare veloce\" e \"consegnare male\" non sono la stessa cosa. La velocità non produce debito tecnico — lo produce la vaghezza. Una V1 consegnata in 7 giorni può essere più pulita di un progetto steso su sei mesi, a patto di riunire quattro cose: uno stack di produzione, un perimetro stretto, sviluppo assistito dall'IA e test sui percorsi critici. Ecco perché la lentezza non è una garanzia di qualità.",
      },
      { h2: "Il mito: lento significa curato" },
      {
        p: "Associamo la lentezza alla serietà e la velocità alla sciatteria. È un errore di ragionamento. Un progetto lento non è meglio testato, né meglio architettato — è semplicemente più lungo. La maggior parte dei mesi persi non serve a scrivere codice migliore: serve ad aspettare approvazioni, rifare mockup e negoziare un perimetro che si sposta di continuo.",
      },
      {
        ul: [
          "Una scadenza lunga non garantisce né i test, né la revisione, né la documentazione.",
          "Più un progetto dura, più il perimetro deriva e più il codice accumula strati contraddittori.",
          "La qualità viene da decisioni nette, non dal numero di settimane passate sopra.",
        ],
      },
      { h2: "Cosa rende la velocità compatibile con la qualità" },
      {
        p: "Una V1 veloce e pulita poggia su quattro pilastri concreti. Nessuno consiste nel \"programmare più veloce battendo più forte\": consistono nell'eliminare gli sprechi.",
      },
      {
        ul: [
          "Uno stack di produzione collaudato (Next.js, NestJS, Prisma, PostgreSQL, React Native): nessuna scelta tecnica da discutere, nessun codice usa e getta.",
          "Un perimetro stretto: 3 a 5 percorsi essenziali validati al giorno 0, e un fuori perimetro messo nero su bianco.",
          "Sviluppo assistito dall'IA: il lavoro ripetitivo (boilerplate, tipi, test) è generato, l'umano tiene le decisioni.",
          "Test sui percorsi critici: autenticazione, pagamento, dati — ciò che si rompe caro è coperto.",
        ],
      },
      { h2: "La vera fonte di debito è la vaghezza" },
      {
        p: "Il debito tecnico non nasce quasi mai da una scadenza breve. Nasce da specifiche vaghe, decisioni rimandate e un perimetro che cambia strada facendo. Ogni \"vedremo poi\" diventa una toppa, e le toppe si accumulano. Un perimetro definito e validato a monte elimina questa fonte di debito ancora prima della prima riga di codice.",
      },
      {
        quote:
          "Non è la velocità a creare il debito tecnico, è la vaghezza. Un perimetro chiaro costa meno di un progetto lento.",
      },
      { h2: "Veloce E pulito, in concreto" },
      {
        p: "In Khufu, una V1 è consegnata in 7 giorni per un prezzo fisso di 15 000 €, su uno stack di produzione il cui codice sorgente è tuo. La rapidità non viene da scorciatoie sulla qualità: viene da un inquadramento netto, uno stack manutenibile e l'IA che assorbe il lavoro ripetitivo. Il risultato non è un prototipo da riscrivere, ma una base su cui si continua a costruire — senza debito nascosto.",
      },
    ],
  },
  pt: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Por que \"entregar rápido\" não significa \"entregar mal\"",
    excerpt:
      "Velocidade e qualidade não se opõem. Eis o que torna uma V1 rápida e limpa — e por que a dívida técnica real vem da imprecisão, não do prazo.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Método', 'Qualidade'],
    body: [
      {
        p: "\"Entregar rápido\" e \"entregar mal\" não são a mesma coisa. A velocidade não produz dívida técnica — a imprecisão produz. Uma V1 entregue em 7 dias pode ser mais limpa do que um projeto esticado por seis meses, desde que se reúnam quatro coisas: uma stack de produção, um escopo apertado, desenvolvimento assistido por IA e testes nos percursos críticos. Eis por que a lentidão não é garantia de qualidade.",
      },
      { h2: "O mito: lento é cuidadoso" },
      {
        p: "Associamos a lentidão à seriedade e a velocidade ao desleixo. É um erro de raciocínio. Um projeto lento não está mais bem testado, nem mais bem arquitetado — é simplesmente mais longo. A maioria dos meses perdidos não serve para escrever código melhor: serve para esperar validações, refazer mockups e negociar um escopo que não para de mudar.",
      },
      {
        ul: [
          "Um prazo longo não garante nem os testes, nem a revisão, nem a documentação.",
          "Quanto mais um projeto dura, mais o escopo deriva e mais o código acumula camadas contraditórias.",
          "A qualidade vem de decisões nítidas, não do número de semanas passadas nisso.",
        ],
      },
      { h2: "O que torna a velocidade compatível com a qualidade" },
      {
        p: "Uma V1 rápida e limpa apoia-se em quatro pilares concretos. Nenhum consiste em \"programar mais rápido teclando mais forte\": consistem em eliminar o desperdício.",
      },
      {
        ul: [
          "Uma stack de produção comprovada (Next.js, NestJS, Prisma, PostgreSQL, React Native): sem escolha técnica a debater, sem código descartável.",
          "Um escopo apertado: 3 a 5 percursos essenciais validados no dia 0, e um fora de escopo escrito preto no branco.",
          "Desenvolvimento assistido por IA: o trabalho repetitivo (boilerplate, tipos, testes) é gerado, o humano mantém as decisões.",
          "Testes nos percursos críticos: autenticação, pagamento, dados — o que quebra caro está coberto.",
        ],
      },
      { h2: "A verdadeira fonte de dívida é a imprecisão" },
      {
        p: "A dívida técnica quase nunca nasce de um prazo curto. Nasce de especificações imprecisas, decisões adiadas e um escopo que muda pelo caminho. Cada \"vemos depois\" vira um remendo, e os remendos empilham-se. Um escopo definido e validado à partida elimina essa fonte de dívida antes mesmo da primeira linha de código.",
      },
      {
        quote:
          "Não é a velocidade que cria a dívida técnica, é a imprecisão. Um escopo claro custa menos do que um projeto lento.",
      },
      { h2: "Rápido E limpo, em concreto" },
      {
        p: "Na Khufu, uma V1 é entregue em 7 dias por um preço fixo de 15 000 €, sobre uma stack de produção cujo código-fonte é seu. A rapidez não vem de cortar na qualidade: vem de um enquadramento nítido, de uma stack mantível e da IA que absorve o trabalho repetitivo. O resultado não é um protótipo para reescrever, mas uma base sobre a qual se continua a construir — sem dívida oculta.",
      },
    ],
  },
  nl: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Waarom \"snel opleveren\" niet \"slordig opleveren\" betekent",
    excerpt:
      "Snelheid en kwaliteit staan niet tegenover elkaar. Dit maakt een V1 snel én schoon — en waarom echte technische schuld uit vaagheid komt, niet uit de deadline.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Methode', 'Kwaliteit'],
    body: [
      {
        p: "\"Snel opleveren\" en \"slordig opleveren\" zijn niet hetzelfde. Snelheid produceert geen technische schuld — vaagheid wel. Een in 7 dagen opgeleverde V1 kan schoner zijn dan een project dat over zes maanden is uitgesmeerd, mits je vier dingen samenbrengt: een productie-stack, een strakke scope, AI-ondersteunde ontwikkeling en tests op de kritieke paden. Hier is waarom traagheid geen garantie voor kwaliteit is.",
      },
      { h2: "De mythe: traag betekent zorgvuldig" },
      {
        p: "We verbinden traagheid met ernst en snelheid met slordigheid. Dat is een denkfout. Een traag project is niet beter getest, noch beter gearchitecteerd — het is gewoon langer. De meeste verloren maanden gaan niet op aan betere code: ze gaan op aan wachten op goedkeuringen, mockups opnieuw maken en onderhandelen over een scope die voortdurend beweegt.",
      },
      {
        ul: [
          "Een lange looptijd garandeert noch tests, noch code review, noch documentatie.",
          "Hoe langer een project loopt, hoe meer de scope afdrijft en hoe meer de code tegenstrijdige lagen opstapelt.",
          "Kwaliteit komt uit heldere beslissingen, niet uit het aantal eraan bestede weken.",
        ],
      },
      { h2: "Wat snelheid verenigbaar maakt met kwaliteit" },
      {
        p: "Een snelle, schone V1 rust op vier concrete pijlers. Geen ervan gaat over \"sneller programmeren door harder te typen\": ze gaan over het wegnemen van verspilling.",
      },
      {
        ul: [
          "Een beproefde productie-stack (Next.js, NestJS, Prisma, PostgreSQL, React Native): geen technische keuze om te bediscussiëren, geen wegwerpcode.",
          "Een strakke scope: 3 tot 5 essentiële user journeys gevalideerd op dag 0, en een buiten-scope zwart op wit vastgelegd.",
          "AI-ondersteunde ontwikkeling: repetitief werk (boilerplate, types, tests) wordt gegenereerd, de mens houdt de beslissingen.",
          "Tests op de kritieke paden: authenticatie, betaling, data — wat duur breekt, is gedekt.",
        ],
      },
      { h2: "De echte bron van schuld is vaagheid" },
      {
        p: "Technische schuld komt bijna nooit uit een korte deadline. Ze komt uit vage specificaties, uitgestelde beslissingen en een scope die onderweg verschuift. Elke \"dat zien we later wel\" wordt een lapmiddel, en lapmiddelen stapelen zich op. Een vooraf gedefinieerde en gevalideerde scope schakelt die schuldbron uit nog vóór de eerste regel code.",
      },
      {
        quote:
          "Niet de snelheid creëert technische schuld, maar de vaagheid. Een heldere scope kost minder dan een traag project.",
      },
      { h2: "Snel ÉN schoon, concreet" },
      {
        p: "Bij Khufu wordt een V1 in 7 dagen opgeleverd voor een vaste prijs van € 15.000, op een productie-stack waarvan de broncode van jou is. De snelheid komt niet van bezuinigen op kwaliteit: ze komt van scherpe kadering, een onderhoudbare stack en AI die het repetitieve werk opslokt. Het resultaat is geen prototype om te herschrijven, maar een fundering waarop je blijft bouwen — zonder verborgen schuld.",
      },
    ],
  },
  ar: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "لماذا \"التسليم السريع\" لا يعني \"التسليم الرديء\"",
    excerpt:
      "السرعة والجودة ليستا نقيضين. إليك ما يجعل V1 سريعة ونظيفة — ولماذا ينبع الدَّين التقني الحقيقي من الغموض لا من المهلة.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['المنهجية', 'الجودة'],
    body: [
      {
        p: "\"التسليم السريع\" و\"التسليم الرديء\" ليسا الشيء نفسه. السرعة لا تُنتج دَيناً تقنياً — بل الغموض هو الذي يُنتجه. يمكن أن تكون V1 مُسلَّمة في 7 أيام أنظف من مشروع مُمتد على ستة أشهر، شرط أن تجتمع أربعة أمور: stack إنتاجية، ونطاق محكم، وتطوير مدعوم بالذكاء الاصطناعي، واختبارات على المسارات الحرجة. إليك لماذا البطء ليس ضماناً للجودة.",
      },
      { h2: "الاعتقاد الشائع: البطء يعني الإتقان" },
      {
        p: "نربط البطء بالجدية والسرعة بالإهمال. هذا خطأ في التفكير. المشروع البطيء ليس أكثر اختباراً ولا أفضل هندسةً — إنه ببساطة أطول. معظم الأشهر الضائعة لا تُنفَق في كتابة كود أفضل: بل في انتظار الموافقات، وإعادة صياغة النماذج، والتفاوض على نطاق لا يتوقف عن التغيّر.",
      },
      {
        ul: [
          "المهلة الطويلة لا تضمن الاختبارات، ولا المراجعة، ولا التوثيق.",
          "كلما طال المشروع، انحرف النطاق أكثر وتراكمت في الكود طبقات متناقضة.",
          "الجودة تأتي من قرارات واضحة، لا من عدد الأسابيع المُنفَقة عليها.",
        ],
      },
      { h2: "ما الذي يجعل السرعة متوافقة مع الجودة" },
      {
        p: "ترتكز V1 السريعة والنظيفة على أربع ركائز ملموسة. لا تتعلق أيٌّ منها بـ\"البرمجة أسرع بضرب لوحة المفاتيح بقوة\": بل تتعلق بإزالة الهدر.",
      },
      {
        ul: [
          "stack إنتاجية مُجرَّبة (Next.js, NestJS, Prisma, PostgreSQL, React Native): لا خيار تقني للنقاش، ولا كود قابل للرمي.",
          "نطاق محكم: من 3 إلى 5 مسارات مستخدم أساسية مُصادَق عليها في اليوم 0، وخارج النطاق مكتوب بوضوح.",
          "تطوير مدعوم بالذكاء الاصطناعي: العمل المتكرر (boilerplate، الأنواع، الاختبارات) يُولَّد، والإنسان يحتفظ بالقرارات.",
          "اختبارات على المسارات الحرجة: المصادقة، الدفع، البيانات — ما يتعطّل بكلفة عالية مُغطّى.",
        ],
      },
      { h2: "المصدر الحقيقي للدَّين هو الغموض" },
      {
        p: "الدَّين التقني لا ينشأ تقريباً من مهلة قصيرة. إنه ينشأ من مواصفات غامضة، وقرارات مؤجلة، ونطاق يتغير في منتصف الطريق. كل \"سنرى لاحقاً\" يتحوّل إلى ترقيع، والترقيعات تتراكم. النطاق المُحدَّد والمُصادَق عليه مسبقاً يُزيل هذا المصدر للدَّين قبل أول سطر من الكود.",
      },
      {
        quote:
          "ليست السرعة هي التي تخلق الدَّين التقني، بل الغموض. النطاق الواضح يكلّف أقل من مشروع بطيء.",
      },
      { h2: "سريع ونظيف، بشكل ملموس" },
      {
        p: "في Khufu، تُسلَّم V1 في 7 أيام مقابل سعر ثابت قدره 15,000 €، على stack إنتاجية شيفرتها المصدرية ملك لك. السرعة لا تأتي من اختصارات على حساب الجودة: بل من تأطير واضح، وstack قابلة للصيانة، وذكاء اصطناعي يمتصّ العمل المتكرر. النتيجة ليست نموذجاً أوّلياً لإعادة كتابته، بل أساس تواصل البناء عليه — من دون دَين خفي.",
      },
    ],
  },
  pl: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Dlaczego \"szybko dostarczyć\" nie znaczy \"dostarczyć byle jak\"",
    excerpt:
      "Szybkość i jakość nie są przeciwieństwami. Oto co sprawia, że V1 jest szybka i czysta — i dlaczego prawdziwy dług techniczny bierze się z niejasności, nie z terminu.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Metoda', 'Jakość'],
    body: [
      {
        p: "\"Szybko dostarczyć\" i \"dostarczyć byle jak\" to nie to samo. Szybkość nie tworzy długu technicznego — tworzy go niejasność. V1 dostarczona w 7 dni może być czystsza niż projekt rozciągnięty na sześć miesięcy, pod warunkiem połączenia czterech rzeczy: produkcyjnego stacku, wąskiego zakresu, wspomaganego AI programowania i testów na krytycznych ścieżkach. Oto dlaczego powolność nie jest gwarancją jakości.",
      },
      { h2: "Mit: powoli znaczy starannie" },
      {
        p: "Kojarzymy powolność z powagą, a szybkość z partactwem. To błąd rozumowania. Powolny projekt nie jest lepiej przetestowany ani lepiej zaprojektowany architektonicznie — jest po prostu dłuższy. Większość straconych miesięcy nie idzie na pisanie lepszego kodu: idzie na czekanie na akceptacje, przerabianie makiet i negocjowanie zakresu, który wciąż się zmienia.",
      },
      {
        ul: [
          "Długi termin nie gwarantuje ani testów, ani przeglądu kodu, ani dokumentacji.",
          "Im dłużej trwa projekt, tym bardziej dryfuje zakres i tym więcej sprzecznych warstw nawarstwia się w kodzie.",
          "Jakość bierze się z jasnych decyzji, a nie z liczby spędzonych tygodni.",
        ],
      },
      { h2: "Co godzi szybkość z jakością" },
      {
        p: "Szybka, czysta V1 opiera się na czterech konkretnych filarach. Żaden nie polega na \"szybszym programowaniu przez mocniejsze stukanie w klawiaturę\": polegają na eliminowaniu marnotrawstwa.",
      },
      {
        ul: [
          "Sprawdzony stack produkcyjny (Next.js, NestJS, Prisma, PostgreSQL, React Native): żadnego wyboru technologicznego do przedyskutowania, żadnego kodu na wyrzucenie.",
          "Wąski zakres: od 3 do 5 kluczowych ścieżek użytkownika zatwierdzonych w dniu 0 oraz poza-zakres spisany czarno na białym.",
          "Programowanie wspomagane AI: powtarzalna praca (boilerplate, typy, testy) jest generowana, człowiek zachowuje decyzje.",
          "Testy na krytycznych ścieżkach: uwierzytelnianie, płatność, dane — to, co drogo się psuje, jest pokryte.",
        ],
      },
      { h2: "Prawdziwym źródłem długu jest niejasność" },
      {
        p: "Dług techniczny prawie nigdy nie bierze się z krótkiego terminu. Bierze się z niejasnych specyfikacji, odkładanych decyzji i zakresu, który zmienia się po drodze. Każde \"zobaczymy później\" staje się łatą, a łaty się piętrzą. Zakres zdefiniowany i zatwierdzony z góry eliminuje to źródło długu jeszcze przed pierwszą linią kodu.",
      },
      {
        quote:
          "To nie szybkość tworzy dług techniczny, lecz niejasność. Jasny zakres kosztuje mniej niż powolny projekt.",
      },
      { h2: "Szybko I czysto, konkretnie" },
      {
        p: "W Khufu V1 jest dostarczana w 7 dni za stałą cenę 15 000 €, na produkcyjnym stacku, którego kod źródłowy należy do Ciebie. Szybkość nie bierze się z cięcia na jakości: bierze się z ostrego ramowania, utrzymywalnego stacku i AI, które pochłania powtarzalną pracę. Efektem nie jest prototyp do przepisania, lecz fundament, na którym buduje się dalej — bez ukrytego długu.",
      },
    ],
  },
  tr: {
    slug: 'livrer-vite-sans-livrer-sale',
    title: "Neden \"hızlı teslim etmek\" \"özensiz teslim etmek\" anlamına gelmez",
    excerpt:
      "Hız ve kalite zıt değildir. Bir V1'i hızlı ve temiz yapan şey budur — ve gerçek teknik borç neden süreden değil belirsizlikten gelir.",
    date: '2026-05-06',
    readingMinutes: 6,
    tags: ['Yöntem', 'Kalite'],
    body: [
      {
        p: "\"Hızlı teslim etmek\" ile \"özensiz teslim etmek\" aynı şey değildir. Hız teknik borç üretmez — belirsizlik üretir. 7 günde teslim edilen bir V1, altı aya yayılmış bir projeden daha temiz olabilir; yeter ki dört şey bir araya gelsin: bir üretim stack'i, dar bir kapsam, yapay zekâ destekli geliştirme ve kritik akışlar üzerinde testler. İşte yavaşlığın neden bir kalite garantisi olmadığı.",
      },
      { h2: "Yanlış inanış: yavaş, özenli demektir" },
      {
        p: "Yavaşlığı ciddiyetle, hızı özensizlikle ilişkilendiririz. Bu bir muhakeme hatasıdır. Yavaş bir proje daha iyi test edilmiş ya da daha iyi mimarilenmiş değildir — sadece daha uzundur. Kaybedilen ayların çoğu daha iyi kod yazmaya gitmez: onaylar beklemeye, maketleri yeniden yapmaya ve sürekli değişen bir kapsamı pazarlık etmeye gider.",
      },
      {
        ul: [
          "Uzun bir süre ne testleri, ne kod incelemesini, ne de dokümantasyonu garanti eder.",
          "Bir proje ne kadar uzun sürerse, kapsam o kadar kayar ve kod o kadar çelişkili katmanlar biriktirir.",
          "Kalite net kararlardan gelir, üzerinde geçirilen hafta sayısından değil.",
        ],
      },
      { h2: "Hızı kaliteyle uyumlu kılan şey" },
      {
        p: "Hızlı, temiz bir V1 dört somut sütuna dayanır. Hiçbiri \"klavyeye daha sert basarak daha hızlı kodlamak\" değildir: hepsi israfı ortadan kaldırmakla ilgilidir.",
      },
      {
        ul: [
          "Kanıtlanmış bir üretim stack'i (Next.js, NestJS, Prisma, PostgreSQL, React Native): tartışılacak teknik seçim yok, atılacak kod yok.",
          "Dar bir kapsam: 0. günde onaylanan 3 ila 5 temel kullanıcı akışı ve siyah beyaz yazılmış bir kapsam dışı.",
          "Yapay zekâ destekli geliştirme: tekrarlayan iş (boilerplate, tipler, testler) üretilir, kararları insan tutar.",
          "Kritik akışlar üzerinde testler: kimlik doğrulama, ödeme, veri — pahalıya patlayan ne varsa kapsanır.",
        ],
      },
      { h2: "Borcun gerçek kaynağı belirsizliktir" },
      {
        p: "Teknik borç neredeyse hiçbir zaman kısa bir süreden doğmaz. Belirsiz spesifikasyonlardan, ertelenen kararlardan ve yol boyunca kayan bir kapsamdan doğar. Her \"sonra bakarız\" bir yamaya dönüşür ve yamalar üst üste yığılır. Önceden tanımlanmış ve onaylanmış bir kapsam, bu borç kaynağını daha ilk kod satırından önce ortadan kaldırır.",
      },
      {
        quote:
          "Teknik borcu yaratan hız değil, belirsizliktir. Net bir kapsam, yavaş bir projeden daha ucuza mal olur.",
      },
      { h2: "Hem hızlı HEM temiz, somut olarak" },
      {
        p: "Khufu'da bir V1, kaynak kodu size ait bir üretim stack'i üzerinde, 15.000 € sabit fiyata 7 günde teslim edilir. Hız, kaliteden ödün vermekten gelmez: keskin bir çerçeveleme, bakımı yapılabilir bir stack ve tekrarlayan işi soğuran yapay zekâdan gelir. Sonuç, yeniden yazılacak bir prototip değil, üzerine inşa etmeye devam ettiğiniz bir temeldir — gizli borç olmadan.",
      },
    ],
  },
}
