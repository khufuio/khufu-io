import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "C’est quoi une agence « AI-native » et pourquoi ça change les prix",
    excerpt:
      "Une agence AI-native intègre l’IA à chaque étape — design, dev, tests, doc. Résultat : des délais et des prix divisés, sans sacrifier la qualité.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Coûts'],
    body: [
      {
        p: "Une agence AI-native est une agence qui utilise l'intelligence artificielle à chaque étape de la production — design, développement, tests, documentation — et pas seulement comme un gadget à la marge. La conséquence directe : là où une agence classique facture 3 à 6 mois de travail, une agence AI-native livre un vrai produit en une semaine. Chez Khufu, cela se traduit par une V1 en production en 7 jours, à prix fixe de 15 000 €.",
      },
      { h2: "AI-native, ce que ça veut dire concrètement" },
      {
        p: "« AI-native » ne signifie pas « on a branché ChatGPT sur un coin du process ». Cela veut dire que l'IA est présente à chaque maillon de la chaîne, comme un multiplicateur de vélocité pour l'équipe :",
      },
      {
        ul: [
          "Design : génération rapide de maquettes et de composants d'interface prêts à coder.",
          "Développement : écriture, refactoring et revue de code assistés, sur une vraie stack de production (Next.js, NestJS, Prisma, PostgreSQL).",
          "Tests : génération de cas de tests et détection de régressions en continu.",
          "Documentation : specs, README et documentation technique produits au fil de l'eau, pas six mois après.",
        ],
      },
      { h2: "Pourquoi ça fait chuter les délais et les prix" },
      {
        p: "Le coût d'un logiciel, c'est surtout du temps humain. Une agence classique facture des jours-hommes : plus le projet traîne, plus la facture grossit. En AI-native, l'IA absorbe les tâches répétitives et à faible valeur — le boilerplate, les tests, la doc — et laisse l'humain se concentrer sur l'architecture, les décisions produit et la qualité. On compresse le temps sans compresser la réflexion.",
      },
      {
        quote:
          "L'IA ne remplace pas l'ingénieur : elle supprime les heures perdues. C'est ce temps économisé qui divise le prix, pas la qualité qu'on rognerait.",
      },
      { h2: "La différence avec une agence classique" },
      {
        p: "Une agence traditionnelle repose sur un modèle au temps passé : devis flous, allers-retours interminables, équipes en cascade et facturation à l'heure. Son intérêt économique est que le projet dure. Une agence AI-native inverse la logique : périmètre serré, déploiement continu, prix fixe connu d'avance. Son intérêt est de livrer vite et bien.",
      },
      {
        ul: [
          "Délai : 3 à 6 mois pour une agence classique, contre 7 jours pour une V1 AI-native.",
          "Prix : 40 000 à 150 000 € au temps passé, contre un forfait fixe de 15 000 €.",
          "Risque : le dérapage de périmètre est porté par le client en classique, par le prestataire en prix fixe.",
        ],
      },
      { h2: "La qualité n'est pas sacrifiée — au contraire" },
      {
        p: "L'objection habituelle : « plus vite = moins bien ». C'est faux quand l'IA sert à élever le standard, pas à bâcler. Le code repose sur une stack éprouvée et maintenable, les tests sont générés en continu et la documentation suit. Vous récupérez le code source, sans dette technique cachée. La vitesse vient du process, pas de raccourcis sur la qualité. Et pour faire évoluer le produit ensuite, une maintenance mensuelle démarre à 1 490 €/mois.",
      },
    ],
  },
  en: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "What is an “AI-native” agency, and why it changes the price",
    excerpt:
      "An AI-native agency embeds AI at every stage — design, dev, testing, docs. The result: timelines and prices cut sharply, without sacrificing quality.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Cost'],
    body: [
      {
        p: "An AI-native agency uses artificial intelligence at every stage of production — design, development, testing, documentation — and not just as a gimmick on the side. The direct consequence: where a traditional agency bills 3 to 6 months of work, an AI-native agency ships a real product in one week. At Khufu, that means a production V1 in 7 days, at a fixed price of €15,000.",
      },
      { h2: "AI-native: what it actually means" },
      {
        p: "“AI-native” does not mean “we bolted ChatGPT onto a corner of the process.” It means AI is present at every link in the chain, as a velocity multiplier for the team:",
      },
      {
        ul: [
          "Design: fast generation of mockups and UI components ready to code.",
          "Development: assisted code writing, refactoring and review, on a real production stack (Next.js, NestJS, Prisma, PostgreSQL).",
          "Testing: continuous test-case generation and regression detection.",
          "Documentation: specs, README and technical docs produced along the way, not six months later.",
        ],
      },
      { h2: "Why it slashes timelines and prices" },
      {
        p: "The cost of software is mostly human time. A traditional agency bills man-days: the longer the project drags on, the bigger the invoice. In an AI-native model, AI absorbs the repetitive, low-value tasks — boilerplate, tests, docs — and lets humans focus on architecture, product decisions and quality. You compress the time without compressing the thinking.",
      },
      {
        quote:
          "AI does not replace the engineer: it removes the wasted hours. That saved time is what divides the price — not quality being cut.",
      },
      { h2: "The difference with a traditional agency" },
      {
        p: "A traditional agency runs on a time-and-materials model: vague quotes, endless back-and-forth, waterfall teams and hourly billing. Its economic interest is that the project lasts. An AI-native agency flips the logic: tight scope, continuous deployment, a fixed price known upfront. Its interest is to ship fast and well.",
      },
      {
        ul: [
          "Timeline: 3 to 6 months for a traditional agency, versus 7 days for an AI-native V1.",
          "Price: €40,000 to €150,000 on time-and-materials, versus a fixed €15,000 package.",
          "Risk: scope creep is carried by the client in the classic model, by the provider under fixed price.",
        ],
      },
      { h2: "Quality is not sacrificed — quite the opposite" },
      {
        p: "The usual objection: “faster = worse.” That is false when AI is used to raise the bar, not to cut corners. The code sits on a proven, maintainable stack, tests are generated continuously and documentation follows. You get the source code, with no hidden technical debt. Speed comes from the process, not from shortcuts on quality. And to grow the product afterwards, monthly maintenance starts at €1,490/month.",
      },
    ],
  },
  es: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "Qué es una agencia « AI-native » y por qué cambia los precios",
    excerpt:
      "Una agencia AI-native integra la IA en cada etapa — diseño, desarrollo, pruebas, documentación. El resultado: plazos y precios reducidos, sin sacrificar calidad.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Costes'],
    body: [
      {
        p: "Una agencia AI-native es una agencia que usa la inteligencia artificial en cada etapa de la producción — diseño, desarrollo, pruebas, documentación — y no solo como un adorno al margen. La consecuencia directa: donde una agencia clásica factura de 3 a 6 meses de trabajo, una agencia AI-native entrega un producto real en una semana. En Khufu, eso se traduce en una V1 en producción en 7 días, a precio fijo de 15 000 €.",
      },
      { h2: "AI-native: lo que significa en concreto" },
      {
        p: "« AI-native » no significa « hemos enchufado ChatGPT en una esquina del proceso ». Significa que la IA está presente en cada eslabón de la cadena, como un multiplicador de velocidad para el equipo:",
      },
      {
        ul: [
          "Diseño: generación rápida de maquetas y componentes de interfaz listos para programar.",
          "Desarrollo: escritura, refactorización y revisión de código asistidas, sobre un stack de producción real (Next.js, NestJS, Prisma, PostgreSQL).",
          "Pruebas: generación de casos de prueba y detección de regresiones de forma continua.",
          "Documentación: especificaciones, README y documentación técnica producidos sobre la marcha, no seis meses después.",
        ],
      },
      { h2: "Por qué reduce plazos y precios" },
      {
        p: "El coste de un software es sobre todo tiempo humano. Una agencia clásica factura jornadas: cuanto más se alarga el proyecto, más crece la factura. En AI-native, la IA absorbe las tareas repetitivas y de bajo valor — el boilerplate, las pruebas, la documentación — y deja que el humano se centre en la arquitectura, las decisiones de producto y la calidad. Se comprime el tiempo sin comprimir la reflexión.",
      },
      {
        quote:
          "La IA no reemplaza al ingeniero: elimina las horas perdidas. Es ese tiempo ahorrado lo que divide el precio, no la calidad que se recortaría.",
      },
      { h2: "La diferencia con una agencia clásica" },
      {
        p: "Una agencia tradicional se basa en un modelo por tiempo empleado: presupuestos difusos, idas y venidas interminables, equipos en cascada y facturación por horas. Su interés económico es que el proyecto dure. Una agencia AI-native invierte la lógica: alcance ajustado, despliegue continuo, precio fijo conocido de antemano. Su interés es entregar rápido y bien.",
      },
      {
        ul: [
          "Plazo: de 3 a 6 meses para una agencia clásica, frente a 7 días para una V1 AI-native.",
          "Precio: de 40 000 a 150 000 € por tiempo empleado, frente a un forfait fijo de 15 000 €.",
          "Riesgo: la desviación de alcance la asume el cliente en el modelo clásico, y el proveedor con el precio fijo.",
        ],
      },
      { h2: "La calidad no se sacrifica — al contrario" },
      {
        p: "La objeción habitual: « más rápido = peor ». Es falso cuando la IA sirve para elevar el estándar, no para chapucear. El código se apoya en un stack probado y mantenible, las pruebas se generan de forma continua y la documentación sigue el ritmo. Recuperas el código fuente, sin deuda técnica oculta. La velocidad viene del proceso, no de atajos en la calidad. Y para hacer evolucionar el producto después, un mantenimiento mensual arranca en 1 490 €/mes.",
      },
    ],
  },
  de: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "Was ist eine „AI-native“ Agentur und warum sie die Preise verändert",
    excerpt:
      "Eine AI-native Agentur bindet KI in jede Phase ein — Design, Entwicklung, Tests, Doku. Das Ergebnis: drastisch kürzere Zeiten und Preise, ohne Qualitätsverlust.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Kosten'],
    body: [
      {
        p: "Eine AI-native Agentur nutzt künstliche Intelligenz in jeder Produktionsphase — Design, Entwicklung, Tests, Dokumentation — und nicht nur als Spielerei am Rand. Die direkte Folge: Wo eine klassische Agentur 3 bis 6 Monate Arbeit abrechnet, liefert eine AI-native Agentur ein echtes Produkt in einer Woche. Bei Khufu bedeutet das eine V1 in Produktion in 7 Tagen, zum Festpreis von 15.000 €.",
      },
      { h2: "AI-native: was es konkret bedeutet" },
      {
        p: "„AI-native“ heißt nicht „wir haben ChatGPT an eine Ecke des Prozesses geklemmt“. Es heißt, dass KI an jedem Glied der Kette präsent ist, als Geschwindigkeits-Multiplikator für das Team:",
      },
      {
        ul: [
          "Design: schnelle Erzeugung von Mockups und UI-Komponenten, bereit zum Coden.",
          "Entwicklung: assistiertes Schreiben, Refactoring und Review von Code, auf einem echten Produktions-Stack (Next.js, NestJS, Prisma, PostgreSQL).",
          "Tests: kontinuierliche Generierung von Testfällen und Erkennung von Regressionen.",
          "Dokumentation: Specs, README und technische Doku entstehen laufend, nicht erst sechs Monate später.",
        ],
      },
      { h2: "Warum das Zeiten und Preise drückt" },
      {
        p: "Die Kosten von Software sind vor allem menschliche Zeit. Eine klassische Agentur rechnet Personentage ab: je länger das Projekt sich zieht, desto größer die Rechnung. Im AI-native Modell übernimmt die KI die repetitiven, gering wertigen Aufgaben — Boilerplate, Tests, Doku — und lässt den Menschen sich auf Architektur, Produktentscheidungen und Qualität konzentrieren. Man komprimiert die Zeit, ohne das Denken zu komprimieren.",
      },
      {
        quote:
          "KI ersetzt nicht den Ingenieur: sie beseitigt die verlorenen Stunden. Diese eingesparte Zeit teilt den Preis — nicht eine Qualität, die man beschneiden würde.",
      },
      { h2: "Der Unterschied zur klassischen Agentur" },
      {
        p: "Eine traditionelle Agentur beruht auf einem Modell nach Aufwand: unklare Angebote, endloses Hin und Her, Wasserfall-Teams und Stundenabrechnung. Ihr wirtschaftliches Interesse ist, dass das Projekt dauert. Eine AI-native Agentur dreht die Logik um: enger Scope, kontinuierliches Deployment, im Voraus bekannter Festpreis. Ihr Interesse ist, schnell und gut zu liefern.",
      },
      {
        ul: [
          "Zeit: 3 bis 6 Monate bei einer klassischen Agentur, gegenüber 7 Tagen für eine AI-native V1.",
          "Preis: 40.000 bis 150.000 € nach Aufwand, gegenüber einem Festpaket von 15.000 €.",
          "Risiko: Scope Creep trägt im klassischen Modell der Kunde, beim Festpreis der Dienstleister.",
        ],
      },
      { h2: "Qualität wird nicht geopfert — im Gegenteil" },
      {
        p: "Der übliche Einwand: „schneller = schlechter“. Das ist falsch, wenn KI genutzt wird, um den Standard zu heben, nicht um zu pfuschen. Der Code ruht auf einem bewährten, wartbaren Stack, Tests werden laufend generiert und die Dokumentation zieht mit. Sie erhalten den Quellcode, ohne versteckte technische Schuld. Die Geschwindigkeit kommt aus dem Prozess, nicht aus Abkürzungen bei der Qualität. Und um das Produkt danach weiterzuentwickeln, startet eine monatliche Wartung ab 1.490 €/Monat.",
      },
    ],
  },
  it: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "Cos’è un’agenzia « AI-native » e perché cambia i prezzi",
    excerpt:
      "Un’agenzia AI-native integra l’IA in ogni fase — design, sviluppo, test, documentazione. Il risultato: tempi e prezzi ridotti, senza sacrificare la qualità.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Costi'],
    body: [
      {
        p: "Un'agenzia AI-native è un'agenzia che usa l'intelligenza artificiale in ogni fase della produzione — design, sviluppo, test, documentazione — e non solo come gadget ai margini. La conseguenza diretta: dove un'agenzia classica fattura 3-6 mesi di lavoro, un'agenzia AI-native consegna un prodotto reale in una settimana. Da Khufu, questo si traduce in una V1 in produzione in 7 giorni, a prezzo fisso di 15.000 €.",
      },
      { h2: "AI-native: cosa significa concretamente" },
      {
        p: "« AI-native » non significa « abbiamo collegato ChatGPT a un angolo del processo ». Significa che l'IA è presente in ogni anello della catena, come moltiplicatore di velocità per il team:",
      },
      {
        ul: [
          "Design: generazione rapida di mockup e componenti d'interfaccia pronti da programmare.",
          "Sviluppo: scrittura, refactoring e revisione del codice assistiti, su uno stack di produzione reale (Next.js, NestJS, Prisma, PostgreSQL).",
          "Test: generazione di casi di test e rilevamento di regressioni in continuo.",
          "Documentazione: specifiche, README e documentazione tecnica prodotti lungo il percorso, non sei mesi dopo.",
        ],
      },
      { h2: "Perché abbatte tempi e prezzi" },
      {
        p: "Il costo di un software è soprattutto tempo umano. Un'agenzia classica fattura giornate-uomo: più il progetto si trascina, più cresce la fattura. In AI-native, l'IA assorbe i compiti ripetitivi e a basso valore — il boilerplate, i test, la documentazione — e lascia che l'umano si concentri su architettura, decisioni di prodotto e qualità. Si comprime il tempo senza comprimere il ragionamento.",
      },
      {
        quote:
          "L'IA non sostituisce l'ingegnere: elimina le ore perse. È questo tempo risparmiato a dividere il prezzo, non la qualità che si taglierebbe.",
      },
      { h2: "La differenza con un'agenzia classica" },
      {
        p: "Un'agenzia tradizionale si basa su un modello a tempo speso: preventivi vaghi, andirivieni infiniti, team a cascata e fatturazione a ore. Il suo interesse economico è che il progetto duri. Un'agenzia AI-native ribalta la logica: perimetro stretto, deploy continuo, prezzo fisso noto in anticipo. Il suo interesse è consegnare in fretta e bene.",
      },
      {
        ul: [
          "Tempo: 3-6 mesi per un'agenzia classica, contro 7 giorni per una V1 AI-native.",
          "Prezzo: da 40.000 a 150.000 € a tempo speso, contro un forfait fisso di 15.000 €.",
          "Rischio: lo sforamento del perimetro è a carico del cliente nel modello classico, del fornitore con il prezzo fisso.",
        ],
      },
      { h2: "La qualità non è sacrificata — anzi" },
      {
        p: "L'obiezione abituale: « più veloce = peggio ». È falso quando l'IA serve a alzare lo standard, non a raffazzonare. Il codice poggia su uno stack collaudato e manutenibile, i test sono generati in continuo e la documentazione segue. Ottieni il codice sorgente, senza debito tecnico nascosto. La velocità viene dal processo, non da scorciatoie sulla qualità. E per far evolvere il prodotto in seguito, una manutenzione mensile parte da 1.490 €/mese.",
      },
    ],
  },
  pt: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "O que é uma agência « AI-native » e por que ela muda os preços",
    excerpt:
      "Uma agência AI-native integra a IA em cada etapa — design, desenvolvimento, testes, documentação. O resultado: prazos e preços reduzidos, sem sacrificar a qualidade.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Custos'],
    body: [
      {
        p: "Uma agência AI-native é uma agência que usa a inteligência artificial em cada etapa da produção — design, desenvolvimento, testes, documentação — e não apenas como um enfeite à margem. A consequência direta: onde uma agência clássica fatura de 3 a 6 meses de trabalho, uma agência AI-native entrega um produto real em uma semana. Na Khufu, isso se traduz em uma V1 em produção em 7 dias, a preço fixo de 15.000 €.",
      },
      { h2: "AI-native: o que significa na prática" },
      {
        p: "« AI-native » não significa « conectamos o ChatGPT a um canto do processo ». Significa que a IA está presente em cada elo da cadeia, como um multiplicador de velocidade para a equipe:",
      },
      {
        ul: [
          "Design: geração rápida de mockups e componentes de interface prontos para programar.",
          "Desenvolvimento: escrita, refatoração e revisão de código assistidas, sobre um stack de produção real (Next.js, NestJS, Prisma, PostgreSQL).",
          "Testes: geração de casos de teste e detecção de regressões de forma contínua.",
          "Documentação: especificações, README e documentação técnica produzidos ao longo do caminho, não seis meses depois.",
        ],
      },
      { h2: "Por que isso reduz prazos e preços" },
      {
        p: "O custo de um software é sobretudo tempo humano. Uma agência clássica fatura dias-homem: quanto mais o projeto se arrasta, maior a fatura. No modelo AI-native, a IA absorve as tarefas repetitivas e de baixo valor — o boilerplate, os testes, a documentação — e deixa o humano se concentrar na arquitetura, nas decisões de produto e na qualidade. Comprime-se o tempo sem comprimir a reflexão.",
      },
      {
        quote:
          "A IA não substitui o engenheiro: ela elimina as horas perdidas. É esse tempo economizado que divide o preço, não a qualidade que seria cortada.",
      },
      { h2: "A diferença para uma agência clássica" },
      {
        p: "Uma agência tradicional se apoia em um modelo por tempo gasto: orçamentos vagos, idas e vindas intermináveis, equipes em cascata e faturamento por hora. Seu interesse econômico é que o projeto dure. Uma agência AI-native inverte a lógica: escopo enxuto, deploy contínuo, preço fixo conhecido de antemão. Seu interesse é entregar rápido e bem.",
      },
      {
        ul: [
          "Prazo: 3 a 6 meses para uma agência clássica, contra 7 dias para uma V1 AI-native.",
          "Preço: de 40.000 a 150.000 € por tempo gasto, contra um pacote fixo de 15.000 €.",
          "Risco: o desvio de escopo é suportado pelo cliente no modelo clássico, e pelo prestador no preço fixo.",
        ],
      },
      { h2: "A qualidade não é sacrificada — pelo contrário" },
      {
        p: "A objeção habitual: « mais rápido = pior ». É falso quando a IA serve para elevar o padrão, não para fazer nas coxas. O código se apoia em um stack testado e sustentável, os testes são gerados de forma contínua e a documentação acompanha. Você recebe o código-fonte, sem dívida técnica oculta. A velocidade vem do processo, não de atalhos na qualidade. E para evoluir o produto depois, uma manutenção mensal começa em 1.490 €/mês.",
      },
    ],
  },
  nl: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "Wat is een “AI-native” bureau en waarom het de prijzen verandert",
    excerpt:
      "Een AI-native bureau verweeft AI in elke fase — design, dev, tests, documentatie. Het resultaat: fors kortere doorlooptijden en prijzen, zonder kwaliteitsverlies.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Kosten'],
    body: [
      {
        p: "Een AI-native bureau is een bureau dat kunstmatige intelligentie in elke fase van de productie inzet — design, ontwikkeling, tests, documentatie — en niet alleen als speeltje aan de zijlijn. Het directe gevolg: waar een klassiek bureau 3 tot 6 maanden werk factureert, levert een AI-native bureau een echt product in één week. Bij Khufu betekent dat een V1 in productie in 7 dagen, tegen een vaste prijs van 15.000 €.",
      },
      { h2: "AI-native: wat het concreet betekent" },
      {
        p: "“AI-native” betekent niet “we hebben ChatGPT aan een hoekje van het proces geplakt”. Het betekent dat AI aanwezig is in elke schakel van de keten, als snelheidsvermenigvuldiger voor het team:",
      },
      {
        ul: [
          "Design: snelle generatie van mockups en UI-componenten, klaar om te coderen.",
          "Ontwikkeling: ondersteund schrijven, refactoren en reviewen van code, op een echte productiestack (Next.js, NestJS, Prisma, PostgreSQL).",
          "Tests: continue generatie van testcases en detectie van regressies.",
          "Documentatie: specs, README en technische documentatie die onderweg ontstaan, niet zes maanden later.",
        ],
      },
      { h2: "Waarom het doorlooptijden en prijzen laat kelderen" },
      {
        p: "De kostprijs van software is vooral menselijke tijd. Een klassiek bureau factureert mandagen: hoe langer het project aansleept, hoe hoger de factuur. In een AI-native model neemt AI de repetitieve, laagwaardige taken over — boilerplate, tests, documentatie — en laat het de mens focussen op architectuur, productbeslissingen en kwaliteit. Je comprimeert de tijd zonder het denken te comprimeren.",
      },
      {
        quote:
          "AI vervangt de engineer niet: het schrapt de verloren uren. Die bespaarde tijd deelt de prijs — niet kwaliteit die je zou wegsnijden.",
      },
      { h2: "Het verschil met een klassiek bureau" },
      {
        p: "Een traditioneel bureau draait op een model van bestede tijd: vage offertes, eindeloos heen en weer, watervalteams en facturatie per uur. Zijn economisch belang is dat het project lang duurt. Een AI-native bureau keert de logica om: strakke scope, continue deployment, vaste prijs die vooraf bekend is. Zijn belang is om snel en goed te leveren.",
      },
      {
        ul: [
          "Doorlooptijd: 3 tot 6 maanden voor een klassiek bureau, tegenover 7 dagen voor een AI-native V1.",
          "Prijs: 40.000 tot 150.000 € op bestede tijd, tegenover een vast pakket van 15.000 €.",
          "Risico: scope creep wordt in het klassieke model door de klant gedragen, bij vaste prijs door de dienstverlener.",
        ],
      },
      { h2: "De kwaliteit wordt niet opgeofferd — integendeel" },
      {
        p: "Het gebruikelijke bezwaar: “sneller = slechter”. Dat is onjuist wanneer AI dient om de lat hoger te leggen, niet om te knoeien. De code rust op een beproefde, onderhoudbare stack, tests worden continu gegenereerd en de documentatie volgt. Je krijgt de broncode, zonder verborgen technische schuld. De snelheid komt uit het proces, niet uit shortcuts op kwaliteit. En om het product daarna te laten groeien, start maandelijks onderhoud vanaf 1.490 €/maand.",
      },
    ],
  },
  ar: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "ما هي وكالة « AI-native » ولماذا تغيّر الأسعار",
    excerpt:
      "وكالة AI-native تدمج الذكاء الاصطناعي في كل مرحلة — التصميم والتطوير والاختبار والتوثيق. النتيجة: مدد وأسعار أقل بكثير، دون التضحية بالجودة.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'التكاليف'],
    body: [
      {
        p: "وكالة AI-native هي وكالة تستخدم الذكاء الاصطناعي في كل مرحلة من مراحل الإنتاج — التصميم والتطوير والاختبار والتوثيق — وليس كأداة هامشية فقط. والنتيجة المباشرة: حيث تفوتر الوكالة التقليدية 3 إلى 6 أشهر من العمل، تسلّم وكالة AI-native منتجًا حقيقيًا في أسبوع واحد. لدى Khufu، يترجم ذلك إلى V1 في الإنتاج خلال 7 أيام، بسعر ثابت قدره 15,000 €.",
      },
      { h2: "AI-native: ماذا يعني ذلك عمليًا" },
      {
        p: "لا تعني « AI-native » أننا « وصلنا ChatGPT بزاوية من العملية ». بل تعني أن الذكاء الاصطناعي حاضر في كل حلقة من السلسلة، كمضاعِف للسرعة لدى الفريق:",
      },
      {
        ul: [
          "التصميم: توليد سريع للنماذج ومكونات الواجهة الجاهزة للبرمجة.",
          "التطوير: كتابة وإعادة هيكلة ومراجعة الكود بمساعدة الذكاء الاصطناعي، على منصة إنتاج حقيقية (Next.js، NestJS، Prisma، PostgreSQL).",
          "الاختبار: توليد حالات الاختبار وكشف التراجعات بشكل مستمر.",
          "التوثيق: المواصفات وملفات README والتوثيق التقني تُنتَج أثناء العمل، لا بعد ستة أشهر.",
        ],
      },
      { h2: "لماذا يخفض المدد والأسعار" },
      {
        p: "تكلفة البرمجيات هي في الأساس وقت بشري. الوكالة التقليدية تفوتر أيام العمل: كلما طال المشروع، كبرت الفاتورة. في نموذج AI-native، يمتص الذكاء الاصطناعي المهام المتكررة والمنخفضة القيمة — الشيفرة النمطية والاختبارات والتوثيق — ويترك للإنسان التركيز على البنية وقرارات المنتج والجودة. نضغط الوقت دون أن نضغط التفكير.",
      },
      {
        quote:
          "الذكاء الاصطناعي لا يحل محل المهندس: بل يزيل الساعات الضائعة. هذا الوقت الموفَّر هو ما يقسم السعر، لا الجودة التي قد نقتطع منها.",
      },
      { h2: "الفرق مع الوكالة التقليدية" },
      {
        p: "تقوم الوكالة التقليدية على نموذج الوقت المستهلك: عروض أسعار غامضة، وذهاب وإياب لا ينتهي، وفرق متتالية، وفوترة بالساعة. مصلحتها الاقتصادية أن يطول المشروع. أما وكالة AI-native فتقلب المنطق: نطاق ضيق، ونشر مستمر، وسعر ثابت معروف مسبقًا. مصلحتها أن تسلّم بسرعة وبجودة.",
      },
      {
        ul: [
          "المدة: من 3 إلى 6 أشهر للوكالة التقليدية، مقابل 7 أيام لـ V1 من نوع AI-native.",
          "السعر: من 40,000 إلى 150,000 € بالوقت المستهلك، مقابل باقة ثابتة قدرها 15,000 €.",
          "المخاطر: انزلاق النطاق يتحمله العميل في النموذج التقليدي، ويتحمله المزود في السعر الثابت.",
        ],
      },
      { h2: "الجودة لا يُضحّى بها — بل العكس" },
      {
        p: "الاعتراض المعتاد: « أسرع = أسوأ ». هذا خاطئ عندما يُستخدَم الذكاء الاصطناعي لرفع المعيار، لا للتسرّع. يقوم الكود على منصة مجرَّبة وقابلة للصيانة، وتُولَّد الاختبارات باستمرار، ويواكب التوثيق. تحصل على الشيفرة المصدرية، دون دين تقني خفي. السرعة تأتي من العملية، لا من اختصارات على حساب الجودة. ولتطوير المنتج بعد ذلك، تبدأ الصيانة الشهرية من 1,490 € شهريًا.",
      },
    ],
  },
  pl: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "Czym jest agencja „AI-native” i dlaczego zmienia ceny",
    excerpt:
      "Agencja AI-native wplata SI w każdy etap — design, dev, testy, dokumentacja. Efekt: mocno skrócone terminy i ceny, bez utraty jakości.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Koszty'],
    body: [
      {
        p: "Agencja AI-native to agencja, która wykorzystuje sztuczną inteligencję na każdym etapie produkcji — design, rozwój, testy, dokumentacja — a nie tylko jako gadżet na marginesie. Bezpośredni skutek: tam gdzie klasyczna agencja fakturuje 3 do 6 miesięcy pracy, agencja AI-native dostarcza prawdziwy produkt w tydzień. W Khufu przekłada się to na V1 na produkcji w 7 dni, za stałą cenę 15 000 €.",
      },
      { h2: "AI-native: co to oznacza w praktyce" },
      {
        p: "„AI-native” nie znaczy „podpięliśmy ChatGPT do rogu procesu”. Znaczy, że SI jest obecna w każdym ogniwie łańcucha, jako mnożnik prędkości dla zespołu:",
      },
      {
        ul: [
          "Design: szybkie generowanie makiet i komponentów interfejsu gotowych do kodowania.",
          "Rozwój: wspomagane pisanie, refaktoryzacja i przegląd kodu, na prawdziwym stacku produkcyjnym (Next.js, NestJS, Prisma, PostgreSQL).",
          "Testy: ciągłe generowanie przypadków testowych i wykrywanie regresji.",
          "Dokumentacja: specyfikacje, README i dokumentacja techniczna powstające na bieżąco, a nie sześć miesięcy później.",
        ],
      },
      { h2: "Dlaczego skraca terminy i obniża ceny" },
      {
        p: "Koszt oprogramowania to przede wszystkim czas ludzki. Klasyczna agencja fakturuje osobodni: im dłużej ciągnie się projekt, tym większy rachunek. W modelu AI-native SI wchłania zadania powtarzalne i o niskiej wartości — boilerplate, testy, dokumentację — i pozwala człowiekowi skupić się na architekturze, decyzjach produktowych i jakości. Kompresujemy czas, nie kompresując myślenia.",
      },
      {
        quote:
          "SI nie zastępuje inżyniera: usuwa stracone godziny. To ten zaoszczędzony czas dzieli cenę — a nie jakość, którą mielibyśmy okroić.",
      },
      { h2: "Różnica wobec klasycznej agencji" },
      {
        p: "Tradycyjna agencja opiera się na modelu za poświęcony czas: mgliste wyceny, niekończące się odsyłanie w tę i z powrotem, zespoły kaskadowe i rozliczanie godzinowe. Jej interes ekonomiczny to trwanie projektu. Agencja AI-native odwraca logikę: wąski zakres, ciągły deployment, stała cena znana z góry. Jej interes to dostarczyć szybko i dobrze.",
      },
      {
        ul: [
          "Termin: 3 do 6 miesięcy dla klasycznej agencji, wobec 7 dni dla V1 AI-native.",
          "Cena: od 40 000 do 150 000 € za poświęcony czas, wobec stałego pakietu 15 000 €.",
          "Ryzyko: rozrost zakresu ponosi klient w modelu klasycznym, a dostawca przy cenie stałej.",
        ],
      },
      { h2: "Jakość nie jest poświęcana — wręcz przeciwnie" },
      {
        p: "Typowe zastrzeżenie: „szybciej = gorzej”. To fałsz, gdy SI służy podniesieniu standardu, a nie partaczeniu. Kod opiera się na sprawdzonym, utrzymywalnym stacku, testy są generowane na bieżąco, a dokumentacja nadąża. Otrzymujesz kod źródłowy, bez ukrytego długu technicznego. Prędkość bierze się z procesu, nie ze skrótów na jakości. A żeby rozwijać produkt później, comiesięczne utrzymanie startuje od 1 490 €/miesiąc.",
      },
    ],
  },
  tr: {
    slug: 'agence-ai-native-c-est-quoi',
    title: "„AI-native” ajans nedir ve neden fiyatları değiştirir",
    excerpt:
      "AI-native bir ajans yapay zekâyı her aşamaya katar — tasarım, geliştirme, test, dokümantasyon. Sonuç: kalite düşmeden çok daha kısa süreler ve düşük fiyatlar.",
    date: '2026-04-01',
    readingMinutes: 6,
    tags: ['AI-native', 'Maliyet'],
    body: [
      {
        p: "AI-native bir ajans, yapay zekâyı üretimin her aşamasında — tasarım, geliştirme, test, dokümantasyon — kullanan ve onu yalnızca kenarda bir aksesuar olarak görmeyen bir ajanstır. Doğrudan sonuç: klasik bir ajansın 3 ila 6 aylık iş faturaladığı yerde, AI-native bir ajans gerçek bir ürünü bir haftada teslim eder. Khufu'da bu, 7 günde üretimde bir V1 anlamına gelir, 15.000 € sabit fiyatla.",
      },
      { h2: "AI-native: somut olarak ne demek" },
      {
        p: "„AI-native”, „ChatGPT'yi sürecin bir köşesine bağladık” demek değildir. Yapay zekânın zincirin her halkasında bulunduğu, ekip için bir hız çarpanı olduğu anlamına gelir:",
      },
      {
        ul: [
          "Tasarım: kodlamaya hazır maketlerin ve arayüz bileşenlerinin hızlı üretimi.",
          "Geliştirme: gerçek bir üretim yığını üzerinde (Next.js, NestJS, Prisma, PostgreSQL) destekli kod yazımı, refactoring ve inceleme.",
          "Test: sürekli test senaryosu üretimi ve regresyon tespiti.",
          "Dokümantasyon: spesifikasyonlar, README ve teknik dokümantasyon yol boyunca üretilir, altı ay sonra değil.",
        ],
      },
      { h2: "Neden süreleri ve fiyatları düşürür" },
      {
        p: "Yazılımın maliyeti çoğunlukla insan zamanıdır. Klasik bir ajans adam-gün faturalar: proje ne kadar uzarsa, fatura o kadar büyür. AI-native modelde yapay zekâ tekrarlı ve düşük değerli işleri — boilerplate, testler, dokümantasyon — üstlenir ve insanın mimariye, ürün kararlarına ve kaliteye odaklanmasını sağlar. Düşünceyi sıkıştırmadan zamanı sıkıştırırsınız.",
      },
      {
        quote:
          "Yapay zekâ mühendisin yerini almaz: kaybedilen saatleri ortadan kaldırır. Fiyatı bölen şey bu kazanılan zamandır, kısılacak kalite değil.",
      },
      { h2: "Klasik ajansla fark" },
      {
        p: "Geleneksel bir ajans, harcanan zaman modeline dayanır: belirsiz teklifler, bitmeyen gidiş gelişler, şelale ekipleri ve saatlik faturalama. Ekonomik çıkarı projenin uzamasıdır. AI-native bir ajans mantığı tersine çevirir: dar kapsam, sürekli dağıtım, önceden bilinen sabit fiyat. Çıkarı hızlı ve iyi teslim etmektir.",
      },
      {
        ul: [
          "Süre: klasik ajans için 3 ila 6 ay, AI-native bir V1 için 7 güne karşı.",
          "Fiyat: harcanan zamanla 40.000 ila 150.000 €, buna karşı 15.000 € sabit paket.",
          "Risk: kapsam kayması klasik modelde müşteri tarafından, sabit fiyatta ise tedarikçi tarafından üstlenilir.",
        ],
      },
      { h2: "Kaliteden ödün verilmez — tam tersine" },
      {
        p: "Alışılmış itiraz: „daha hızlı = daha kötü”. Yapay zekâ standardı yükseltmek için kullanıldığında, baştan savma yapmak için değil, bu yanlıştır. Kod kanıtlanmış, bakımı yapılabilir bir yığına dayanır, testler sürekli üretilir ve dokümantasyon buna ayak uydurur. Gizli teknik borç olmadan kaynak kodu size kalır. Hız süreçten gelir, kaliteden kısılan yollardan değil. Ve ürünü sonrasında geliştirmek için, aylık bakım 1.490 €/ay'dan başlar.",
      },
    ],
  },
}
