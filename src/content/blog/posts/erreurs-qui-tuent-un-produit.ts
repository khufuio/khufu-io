import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Les erreurs qui tuent un produit avant même son lancement',
    excerpt:
      'Cinq erreurs classiques tuent un produit avant son lancement — périmètre trop large, sur-ingénierie, pas de cible, aucun retour user, trop lent — et comment les éviter.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Founder', 'Produit'],
    body: [
      {
        p: 'La plupart des produits ne meurent pas face à la concurrence ni à cause d’un bug : ils meurent avant même leur lancement, tués par cinq erreurs évitables — un périmètre trop large, la sur-ingénierie, l’absence de cible claire, un produit construit sans jamais parler aux utilisateurs, et un délai de mise en marché trop long. Les repérer tôt vaut plus que n’importe quelle fonctionnalité.',
      },
      { h2: 'Un périmètre trop large' },
      {
        p: 'L’erreur numéro un. On veut tout mettre dans la première version, et le lancement recule de mois en mois. Chaque fonctionnalité ajoutée, c’est du temps, des bugs et de la complexité en plus — pour un produit que personne n’a encore validé. Une V1 devrait résoudre un seul problème, très bien.',
      },
      {
        ul: [
          'Listez toutes les fonctionnalités imaginées, puis coupez-en 70 %. Ce qui reste est votre vraie V1.',
          'Gardez uniquement les 3 à 5 parcours utilisateurs indispensables au problème résolu.',
          'Tout le reste part dans un backlog « après le lancement » — pas dans la V1.',
        ],
      },
      { h2: 'La sur-ingénierie prématurée' },
      {
        p: 'Construire pour un million d’utilisateurs quand on en a zéro est un piège classique. Microservices, architecture ultra-scalable, abstractions à tout-va : autant de temps investi dans des problèmes que vous n’aurez peut-être jamais. Une stack simple et éprouvée — Next.js, NestJS, PostgreSQL — encaisse largement vos premiers milliers d’utilisateurs. On optimise quand le succès l’exige, pas avant.',
      },
      { h2: 'Pas de cible claire, aucun contact avec les utilisateurs' },
      {
        p: 'Un produit « pour tout le monde » n’est un produit pour personne. Sans cible précise, chaque décision devient un pari : quelles fonctionnalités, quel ton, quel prix ? Pire, beaucoup de founders construisent des mois durant sans jamais montrer leur produit à un seul utilisateur réel — et découvrent trop tard qu’ils ont résolu un problème qui n’existait pas.',
      },
      {
        ul: [
          'Définissez un utilisateur type précis : rôle, problème, contexte, budget.',
          'Parlez à 10 utilisateurs cibles avant d’écrire la première ligne de code.',
          'Remontrez-leur le produit chaque semaine — leurs réactions valent plus que votre intuition.',
        ],
      },
      {
        quote:
          'Un produit pour tout le monde n’est un produit pour personne. Une cible étroite, c’est un produit qui frappe juste.',
      },
      { h2: 'Trop de temps avant le lancement' },
      {
        p: 'Chaque mois passé à construire dans le silence est un mois sans revenus, sans retours et sans apprentissage. Le marché ne récompense pas le produit le plus complet, mais celui qui apprend le plus vite. C’est toute la logique d’une V1 livrée en production en 7 jours à prix fixe (15 000 € chez Khufu) : sortir un vrai produit rapidement, le confronter à de vrais utilisateurs, puis itérer sur des faits plutôt que sur des suppositions.',
      },
      {
        p: 'Ces cinq erreurs ont un dénominateur commun : construire trop, trop longtemps, sans preuve. Resserrez le périmètre, simplifiez la technique, choisissez une cible, parlez-lui, et lancez vite. Le reste, vous l’apprendrez du marché.',
      },
    ],
  },
  en: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'The mistakes that kill a product before it even launches',
    excerpt:
      'Five classic mistakes kill a product before launch — scope too broad, over-engineering, no clear target, no user feedback, too slow — and how to avoid them.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Founder', 'Product'],
    body: [
      {
        p: 'Most products don’t die facing competition or because of a bug: they die before they even launch, killed by five avoidable mistakes — a scope that is too broad, over-engineering, the lack of a clear target, a product built without ever talking to users, and a time-to-market that is too long. Spotting them early is worth more than any feature.',
      },
      { h2: 'A scope that is too broad' },
      {
        p: 'The number-one mistake. You want to put everything into the first version, and the launch keeps slipping month after month. Every added feature is more time, more bugs and more complexity — for a product no one has validated yet. A V1 should solve one problem, very well.',
      },
      {
        ul: [
          'List every feature you can imagine, then cut 70% of them. What remains is your real V1.',
          'Keep only the 3 to 5 user journeys essential to the problem you solve.',
          'Everything else goes into a "post-launch" backlog — not into the V1.',
        ],
      },
      { h2: 'Premature over-engineering' },
      {
        p: 'Building for a million users when you have zero is a classic trap. Microservices, ultra-scalable architecture, abstractions everywhere: all time invested in problems you may never have. A simple, proven stack — Next.js, NestJS, PostgreSQL — easily handles your first few thousand users. You optimize when success demands it, not before.',
      },
      { h2: 'No clear target, no contact with users' },
      {
        p: 'A product "for everyone" is a product for no one. Without a precise target, every decision becomes a bet: which features, which tone, which price? Worse, many founders build for months without ever showing their product to a single real user — and find out too late that they solved a problem that didn’t exist.',
      },
      {
        ul: [
          'Define a precise target user: role, problem, context, budget.',
          'Talk to 10 target users before writing the first line of code.',
          'Show them the product every week — their reactions are worth more than your intuition.',
        ],
      },
      {
        quote:
          'A product for everyone is a product for no one. A narrow target is a product that hits home.',
      },
      { h2: 'Too much time before launch' },
      {
        p: 'Every month spent building in silence is a month without revenue, without feedback and without learning. The market doesn’t reward the most complete product, but the one that learns fastest. That is the whole logic of a V1 shipped to production in 7 days at a fixed price (€15,000 at Khufu): release a real product quickly, put it in front of real users, then iterate on facts rather than assumptions.',
      },
      {
        p: 'These five mistakes share one common denominator: building too much, for too long, without proof. Tighten the scope, simplify the tech, pick a target, talk to it, and launch fast. The rest, you’ll learn from the market.',
      },
    ],
  },
  es: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Los errores que matan un producto antes incluso de lanzarlo',
    excerpt:
      'Cinco errores clásicos matan un producto antes del lanzamiento — alcance demasiado amplio, sobreingeniería, sin público, sin feedback, demasiado lento — y cómo evitarlos.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Fundador', 'Producto'],
    body: [
      {
        p: 'La mayoría de los productos no mueren frente a la competencia ni por un bug: mueren antes incluso de lanzarse, víctimas de cinco errores evitables — un alcance demasiado amplio, la sobreingeniería, la falta de un público claro, un producto construido sin hablar nunca con los usuarios y un tiempo de salida al mercado demasiado largo. Detectarlos a tiempo vale más que cualquier funcionalidad.',
      },
      { h2: 'Un alcance demasiado amplio' },
      {
        p: 'El error número uno. Se quiere meter todo en la primera versión y el lanzamiento se retrasa mes tras mes. Cada funcionalidad añadida es más tiempo, más bugs y más complejidad — para un producto que nadie ha validado todavía. Una V1 debería resolver un solo problema, muy bien.',
      },
      {
        ul: [
          'Enumera todas las funciones imaginadas y luego elimina el 70 %. Lo que queda es tu verdadera V1.',
          'Conserva solo los 3 a 5 recorridos de usuario imprescindibles para el problema que resuelves.',
          'Todo lo demás va a un backlog "después del lanzamiento", no a la V1.',
        ],
      },
      { h2: 'La sobreingeniería prematura' },
      {
        p: 'Construir para un millón de usuarios cuando tienes cero es una trampa clásica. Microservicios, arquitectura ultraescalable, abstracciones por todas partes: tiempo invertido en problemas que quizá nunca tengas. Un stack simple y probado — Next.js, NestJS, PostgreSQL — soporta de sobra tus primeros miles de usuarios. Se optimiza cuando el éxito lo exige, no antes.',
      },
      { h2: 'Sin público claro, sin contacto con los usuarios' },
      {
        p: 'Un producto "para todo el mundo" es un producto para nadie. Sin un público preciso, cada decisión se vuelve una apuesta: qué funciones, qué tono, qué precio. Peor aún, muchos founders construyen durante meses sin mostrar jamás su producto a un solo usuario real — y descubren demasiado tarde que resolvieron un problema que no existía.',
      },
      {
        ul: [
          'Define un usuario tipo preciso: rol, problema, contexto, presupuesto.',
          'Habla con 10 usuarios objetivo antes de escribir la primera línea de código.',
          'Muéstrales el producto cada semana — sus reacciones valen más que tu intuición.',
        ],
      },
      {
        quote:
          'Un producto para todo el mundo es un producto para nadie. Un público estrecho es un producto que da en el blanco.',
      },
      { h2: 'Demasiado tiempo antes del lanzamiento' },
      {
        p: 'Cada mes construyendo en silencio es un mes sin ingresos, sin feedback y sin aprendizaje. El mercado no premia al producto más completo, sino al que aprende más rápido. Esa es toda la lógica de una V1 entregada en producción en 7 días a precio fijo (15 000 € en Khufu): sacar un producto real rápidamente, ponerlo frente a usuarios reales y luego iterar sobre hechos en lugar de suposiciones.',
      },
      {
        p: 'Estos cinco errores comparten un denominador común: construir demasiado, durante demasiado tiempo, sin pruebas. Ajusta el alcance, simplifica la técnica, elige un público, háblale y lanza rápido. El resto lo aprenderás del mercado.',
      },
    ],
  },
  de: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Die Fehler, die ein Produkt schon vor dem Launch töten',
    excerpt:
      'Fünf klassische Fehler töten ein Produkt vor dem Launch — zu breiter Scope, Over-Engineering, keine Zielgruppe, kein Nutzer-Feedback, zu langsam — und wie du sie vermeidest.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Gründer', 'Produkt'],
    body: [
      {
        p: 'Die meisten Produkte sterben nicht an der Konkurrenz oder an einem Bug: Sie sterben schon vor dem Launch, getötet von fünf vermeidbaren Fehlern — einem zu breiten Scope, Over-Engineering, fehlender klarer Zielgruppe, einem Produkt, das gebaut wird, ohne je mit Nutzern zu sprechen, und einer zu langen Time-to-Market. Sie früh zu erkennen ist mehr wert als jedes Feature.',
      },
      { h2: 'Ein zu breiter Scope' },
      {
        p: 'Der Fehler Nummer eins. Man will alles in die erste Version packen, und der Launch verschiebt sich Monat für Monat. Jedes zusätzliche Feature bedeutet mehr Zeit, mehr Bugs und mehr Komplexität — für ein Produkt, das noch niemand validiert hat. Eine V1 sollte ein einziges Problem lösen, dafür sehr gut.',
      },
      {
        ul: [
          'Liste alle denkbaren Features auf und streiche dann 70 %. Was übrig bleibt, ist deine echte V1.',
          'Behalte nur die 3 bis 5 Nutzerpfade, die für das gelöste Problem unverzichtbar sind.',
          'Alles andere kommt in ein "Nach dem Launch"-Backlog — nicht in die V1.',
        ],
      },
      { h2: 'Verfrühtes Over-Engineering' },
      {
        p: 'Für eine Million Nutzer zu bauen, wenn man null hat, ist eine klassische Falle. Microservices, ultraskalierbare Architektur, Abstraktionen überall: alles Zeit, die in Probleme fließt, die du vielleicht nie hast. Ein einfacher, bewährter Stack — Next.js, NestJS, PostgreSQL — verkraftet deine ersten paar Tausend Nutzer mühelos. Optimiert wird, wenn der Erfolg es verlangt, nicht vorher.',
      },
      { h2: 'Keine klare Zielgruppe, kein Kontakt zu Nutzern' },
      {
        p: 'Ein Produkt "für alle" ist ein Produkt für niemanden. Ohne präzise Zielgruppe wird jede Entscheidung zur Wette: welche Features, welcher Ton, welcher Preis? Schlimmer noch, viele Gründer bauen monatelang, ohne ihr Produkt je einem einzigen echten Nutzer zu zeigen — und merken zu spät, dass sie ein Problem gelöst haben, das es gar nicht gab.',
      },
      {
        ul: [
          'Definiere einen präzisen Ziel-Nutzer: Rolle, Problem, Kontext, Budget.',
          'Sprich mit 10 Zielnutzern, bevor du die erste Zeile Code schreibst.',
          'Zeig ihnen das Produkt jede Woche — ihre Reaktionen sind mehr wert als deine Intuition.',
        ],
      },
      {
        quote:
          'Ein Produkt für alle ist ein Produkt für niemanden. Eine enge Zielgruppe ist ein Produkt, das trifft.',
      },
      { h2: 'Zu viel Zeit bis zum Launch' },
      {
        p: 'Jeder Monat, den man still im Verborgenen baut, ist ein Monat ohne Umsatz, ohne Feedback und ohne Lernen. Der Markt belohnt nicht das vollständigste Produkt, sondern das, das am schnellsten lernt. Genau das ist die Logik einer V1, die in 7 Tagen zum Festpreis in Produktion geht (15 000 € bei Khufu): schnell ein echtes Produkt herausbringen, es echten Nutzern vorsetzen und dann auf Basis von Fakten statt Annahmen iterieren.',
      },
      {
        p: 'Diese fünf Fehler haben einen gemeinsamen Nenner: zu viel bauen, zu lange, ohne Beweis. Enge den Scope ein, vereinfache die Technik, wähle eine Zielgruppe, sprich mit ihr und launche schnell. Den Rest lernst du vom Markt.',
      },
    ],
  },
  it: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Gli errori che uccidono un prodotto ancor prima del lancio',
    excerpt:
      'Cinque errori classici uccidono un prodotto prima del lancio — scope troppo ampio, over-engineering, nessun target, nessun feedback, troppo lento — e come evitarli.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Fondatore', 'Prodotto'],
    body: [
      {
        p: 'La maggior parte dei prodotti non muore davanti alla concorrenza né per un bug: muore ancor prima del lancio, uccisa da cinque errori evitabili — uno scope troppo ampio, l’over-engineering, l’assenza di un target chiaro, un prodotto costruito senza mai parlare con gli utenti e un time-to-market troppo lungo. Individuarli presto vale più di qualsiasi funzionalità.',
      },
      { h2: 'Uno scope troppo ampio' },
      {
        p: 'L’errore numero uno. Si vuole mettere tutto nella prima versione e il lancio slitta mese dopo mese. Ogni funzionalità aggiunta è più tempo, più bug e più complessità — per un prodotto che nessuno ha ancora validato. Una V1 dovrebbe risolvere un solo problema, ma molto bene.',
      },
      {
        ul: [
          'Elenca tutte le funzionalità immaginate, poi tagliane il 70 %. Ciò che resta è la tua vera V1.',
          'Tieni solo i 3-5 percorsi utente indispensabili al problema che risolvi.',
          'Tutto il resto va in un backlog "dopo il lancio", non nella V1.',
        ],
      },
      { h2: 'L’over-engineering prematuro' },
      {
        p: 'Costruire per un milione di utenti quando ne hai zero è una trappola classica. Microservizi, architettura ultra-scalabile, astrazioni ovunque: tutto tempo investito in problemi che forse non avrai mai. Uno stack semplice e collaudato — Next.js, NestJS, PostgreSQL — regge senza problemi le tue prime migliaia di utenti. Si ottimizza quando il successo lo richiede, non prima.',
      },
      { h2: 'Nessun target chiaro, nessun contatto con gli utenti' },
      {
        p: 'Un prodotto "per tutti" è un prodotto per nessuno. Senza un target preciso, ogni decisione diventa una scommessa: quali funzionalità, quale tono, quale prezzo? Peggio ancora, molti founder costruiscono per mesi senza mai mostrare il prodotto a un solo utente reale — e scoprono troppo tardi di aver risolto un problema che non esisteva.',
      },
      {
        ul: [
          'Definisci un utente tipo preciso: ruolo, problema, contesto, budget.',
          'Parla con 10 utenti target prima di scrivere la prima riga di codice.',
          'Mostra loro il prodotto ogni settimana — le loro reazioni valgono più della tua intuizione.',
        ],
      },
      {
        quote:
          'Un prodotto per tutti è un prodotto per nessuno. Un target ristretto è un prodotto che colpisce nel segno.',
      },
      { h2: 'Troppo tempo prima del lancio' },
      {
        p: 'Ogni mese passato a costruire in silenzio è un mese senza ricavi, senza feedback e senza apprendimento. Il mercato non premia il prodotto più completo, ma quello che impara più in fretta. È tutta la logica di una V1 messa in produzione in 7 giorni a prezzo fisso (15.000 € da Khufu): far uscire velocemente un prodotto reale, metterlo davanti a utenti reali e poi iterare sui fatti anziché sulle supposizioni.',
      },
      {
        p: 'Questi cinque errori hanno un denominatore comune: costruire troppo, troppo a lungo, senza prove. Restringi lo scope, semplifica la tecnica, scegli un target, parlaci e lancia in fretta. Il resto lo imparerai dal mercato.',
      },
    ],
  },
  pt: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Os erros que matam um produto antes mesmo do lançamento',
    excerpt:
      'Cinco erros clássicos matam um produto antes do lançamento — escopo amplo demais, sobre-engenharia, sem público, sem feedback, lento demais — e como evitá-los.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Fundador', 'Produto'],
    body: [
      {
        p: 'A maioria dos produtos não morre diante da concorrência nem por causa de um bug: morre antes mesmo de lançar, vítima de cinco erros evitáveis — um escopo amplo demais, a sobre-engenharia, a falta de um público claro, um produto construído sem nunca falar com os usuários e um tempo de lançamento longo demais. Detectá-los cedo vale mais do que qualquer funcionalidade.',
      },
      { h2: 'Um escopo amplo demais' },
      {
        p: 'O erro número um. Quer-se colocar tudo na primeira versão, e o lançamento é adiado mês após mês. Cada funcionalidade adicionada é mais tempo, mais bugs e mais complexidade — para um produto que ninguém validou ainda. Uma V1 deveria resolver um único problema, muito bem.',
      },
      {
        ul: [
          'Liste todas as funcionalidades imaginadas e depois corte 70 %. O que sobra é a sua verdadeira V1.',
          'Mantenha apenas os 3 a 5 fluxos de usuário indispensáveis ao problema que você resolve.',
          'Todo o resto vai para um backlog "depois do lançamento", não para a V1.',
        ],
      },
      { h2: 'A sobre-engenharia prematura' },
      {
        p: 'Construir para um milhão de usuários quando você tem zero é uma armadilha clássica. Microsserviços, arquitetura ultraescalável, abstrações por toda parte: tudo tempo investido em problemas que talvez você nunca tenha. Um stack simples e comprovado — Next.js, NestJS, PostgreSQL — aguenta de sobra seus primeiros milhares de usuários. Otimiza-se quando o sucesso exige, não antes.',
      },
      { h2: 'Sem público claro, sem contato com os usuários' },
      {
        p: 'Um produto "para todo mundo" é um produto para ninguém. Sem um público preciso, cada decisão vira uma aposta: quais funcionalidades, qual tom, qual preço? Pior ainda, muitos founders constroem durante meses sem nunca mostrar o produto a um único usuário real — e descobrem tarde demais que resolveram um problema que não existia.',
      },
      {
        ul: [
          'Defina um usuário-tipo preciso: papel, problema, contexto, orçamento.',
          'Fale com 10 usuários-alvo antes de escrever a primeira linha de código.',
          'Mostre o produto a eles toda semana — as reações deles valem mais que a sua intuição.',
        ],
      },
      {
        quote:
          'Um produto para todo mundo é um produto para ninguém. Um público estreito é um produto que acerta em cheio.',
      },
      { h2: 'Tempo demais antes do lançamento' },
      {
        p: 'Cada mês construindo em silêncio é um mês sem receita, sem feedback e sem aprendizado. O mercado não recompensa o produto mais completo, mas o que aprende mais rápido. É toda a lógica de uma V1 colocada em produção em 7 dias por preço fixo (15.000 € na Khufu): lançar um produto real rapidamente, colocá-lo diante de usuários reais e depois iterar sobre fatos em vez de suposições.',
      },
      {
        p: 'Esses cinco erros têm um denominador comum: construir demais, por tempo demais, sem prova. Aperte o escopo, simplifique a técnica, escolha um público, fale com ele e lance rápido. O resto, você aprende com o mercado.',
      },
    ],
  },
  nl: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'De fouten die een product doden nog voor de lancering',
    excerpt:
      'Vijf klassieke fouten doden een product vóór de lancering — te brede scope, over-engineering, geen doelgroep, geen feedback, te traag — en hoe je ze vermijdt.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Oprichter', 'Product'],
    body: [
      {
        p: 'De meeste producten sterven niet aan de concurrentie of aan een bug: ze sterven nog voor de lancering, gedood door vijf vermijdbare fouten — een te brede scope, over-engineering, het ontbreken van een duidelijke doelgroep, een product dat gebouwd wordt zonder ooit met gebruikers te praten, en een te lange time-to-market. Ze vroeg herkennen is meer waard dan welke feature dan ook.',
      },
      { h2: 'Een te brede scope' },
      {
        p: 'De fout nummer één. Je wilt alles in de eerste versie stoppen, en de lancering schuift maand na maand op. Elke toegevoegde feature betekent meer tijd, meer bugs en meer complexiteit — voor een product dat nog niemand heeft gevalideerd. Een V1 zou één probleem moeten oplossen, en dat heel goed.',
      },
      {
        ul: [
          'Lijst alle bedachte features op en schrap er dan 70 %. Wat overblijft, is je echte V1.',
          'Houd alleen de 3 tot 5 gebruikersflows die onmisbaar zijn voor het probleem dat je oplost.',
          'Al de rest gaat naar een "na de lancering"-backlog — niet in de V1.',
        ],
      },
      { h2: 'Voortijdige over-engineering' },
      {
        p: 'Bouwen voor een miljoen gebruikers terwijl je er nul hebt, is een klassieke valkuil. Microservices, ultraschaalbare architectuur, overal abstracties: allemaal tijd geïnvesteerd in problemen die je misschien nooit krijgt. Een eenvoudige, beproefde stack — Next.js, NestJS, PostgreSQL — verwerkt je eerste paar duizend gebruikers moeiteloos. Je optimaliseert wanneer succes het vereist, niet eerder.',
      },
      { h2: 'Geen duidelijke doelgroep, geen contact met gebruikers' },
      {
        p: 'Een product "voor iedereen" is een product voor niemand. Zonder een precieze doelgroep wordt elke beslissing een gok: welke features, welke toon, welke prijs? Erger nog, veel oprichters bouwen maandenlang zonder hun product ooit aan één echte gebruiker te tonen — en ontdekken te laat dat ze een probleem hebben opgelost dat niet bestond.',
      },
      {
        ul: [
          'Definieer een precieze doelgebruiker: rol, probleem, context, budget.',
          'Praat met 10 doelgebruikers voordat je de eerste regel code schrijft.',
          'Laat hen het product elke week zien — hun reacties zijn meer waard dan je intuïtie.',
        ],
      },
      {
        quote:
          'Een product voor iedereen is een product voor niemand. Een smalle doelgroep is een product dat raak is.',
      },
      { h2: 'Te veel tijd voor de lancering' },
      {
        p: 'Elke maand die je in stilte bouwt, is een maand zonder omzet, zonder feedback en zonder leren. De markt beloont niet het meest complete product, maar het product dat het snelst leert. Dat is de hele logica van een V1 die in 7 dagen tegen een vaste prijs in productie gaat (15.000 € bij Khufu): snel een echt product uitbrengen, het aan echte gebruikers voorleggen en dan itereren op feiten in plaats van aannames.',
      },
      {
        p: 'Deze vijf fouten hebben één gemene deler: te veel bouwen, te lang, zonder bewijs. Versmal de scope, vereenvoudig de techniek, kies een doelgroep, praat ermee en lanceer snel. De rest leer je van de markt.',
      },
    ],
  },
  ar: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'الأخطاء التي تقتل المنتج قبل إطلاقه',
    excerpt:
      'خمسة أخطاء كلاسيكية تقتل المنتج قبل إطلاقه — نطاق واسع جداً، هندسة مفرطة، لا جمهور واضح، لا ملاحظات من المستخدمين، بطء شديد — وكيفية تجنبها.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['المؤسس', 'المنتج'],
    body: [
      {
        p: 'معظم المنتجات لا تموت بسبب المنافسة ولا بسبب خلل برمجي: بل تموت قبل إطلاقها، تقتلها خمسة أخطاء يمكن تفاديها — نطاق واسع جداً، والهندسة المفرطة، وغياب جمهور واضح، ومنتج يُبنى دون التحدث إلى المستخدمين إطلاقاً، ووقت طويل جداً للوصول إلى السوق. اكتشافها مبكراً أثمن من أي ميزة.',
      },
      { h2: 'نطاق واسع جداً' },
      {
        p: 'الخطأ الأول. تريد وضع كل شيء في النسخة الأولى، فيتأجل الإطلاق شهراً بعد شهر. كل ميزة إضافية تعني وقتاً أطول وأخطاءً أكثر وتعقيداً أكبر — لمنتج لم يتحقق منه أحد بعد. يجب أن تحل النسخة V1 مشكلة واحدة فقط، ولكن بإتقان.',
      },
      {
        ul: [
          'اكتب كل الميزات التي تخيلتها ثم احذف 70% منها. ما يتبقى هو نسختك V1 الحقيقية.',
          'احتفظ فقط بمسارات المستخدم الأساسية من 3 إلى 5 الضرورية للمشكلة التي تحلها.',
          'كل ما تبقى يذهب إلى قائمة "بعد الإطلاق"، لا إلى V1.',
        ],
      },
      { h2: 'الهندسة المفرطة المبكرة' },
      {
        p: 'البناء لمليون مستخدم بينما لديك صفر فخّ كلاسيكي. Microservices، وبنية فائقة القابلية للتوسع، وتجريدات في كل مكان: كلها وقت مستثمر في مشكلات قد لا تواجهها أبداً. حزمة تقنية بسيطة ومجرَّبة — Next.js وNestJS وPostgreSQL — تتحمل بسهولة آلاف مستخدميك الأوائل. تُحسِّن الأداء حين يتطلب النجاح ذلك، لا قبله.',
      },
      { h2: 'لا جمهور واضح ولا تواصل مع المستخدمين' },
      {
        p: 'المنتج "للجميع" هو منتج لا أحد. من دون جمهور محدد، يتحول كل قرار إلى مقامرة: أي ميزات، أي نبرة، أي سعر؟ والأسوأ أن كثيراً من المؤسسين يبنون شهوراً دون أن يعرضوا منتجهم على مستخدم حقيقي واحد — ثم يكتشفون بعد فوات الأوان أنهم حلّوا مشكلة غير موجودة.',
      },
      {
        ul: [
          'حدد مستخدماً نموذجياً دقيقاً: الدور، والمشكلة، والسياق، والميزانية.',
          'تحدث إلى 10 مستخدمين مستهدفين قبل كتابة أول سطر برمجي.',
          'اعرض عليهم المنتج كل أسبوع — ردود أفعالهم أثمن من حدسك.',
        ],
      },
      {
        quote:
          'المنتج للجميع هو منتج لا أحد. الجمهور الضيّق هو منتج يصيب الهدف.',
      },
      { h2: 'وقت طويل جداً قبل الإطلاق' },
      {
        p: 'كل شهر تقضيه في البناء صامتاً هو شهر بلا إيرادات ولا ملاحظات ولا تعلّم. السوق لا يكافئ المنتج الأكثر اكتمالاً، بل الأسرع تعلّماً. هذا هو منطق نسخة V1 تُطلق في الإنتاج خلال 7 أيام بسعر ثابت (15,000 € لدى Khufu): إخراج منتج حقيقي بسرعة، وعرضه على مستخدمين حقيقيين، ثم التكرار بناءً على وقائع لا على افتراضات.',
      },
      {
        p: 'لهذه الأخطاء الخمسة قاسم مشترك: البناء أكثر مما يجب، ولوقت أطول مما يجب، بلا دليل. ضيّق النطاق، وبسّط التقنية، واختر جمهوراً، وتحدث إليه، وأطلق بسرعة. أما الباقي، فستتعلمه من السوق.',
      },
    ],
  },
  pl: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Błędy, które zabijają produkt jeszcze przed premierą',
    excerpt:
      'Pięć klasycznych błędów zabija produkt przed premierą — zbyt szeroki zakres, over-engineering, brak grupy docelowej, brak feedbacku, zbyt wolno — i jak ich uniknąć.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Założyciel', 'Produkt'],
    body: [
      {
        p: 'Większość produktów nie umiera w starciu z konkurencją ani przez błąd w kodzie: umierają jeszcze przed premierą, zabite przez pięć błędów do uniknięcia — zbyt szeroki zakres, over-engineering, brak jasnej grupy docelowej, produkt budowany bez rozmowy z użytkownikami i zbyt długi czas wejścia na rynek. Wykrycie ich wcześnie jest warte więcej niż jakakolwiek funkcja.',
      },
      { h2: 'Zbyt szeroki zakres' },
      {
        p: 'Błąd numer jeden. Chce się wcisnąć wszystko do pierwszej wersji, a premiera przesuwa się miesiąc po miesiącu. Każda dodana funkcja to więcej czasu, więcej bugów i więcej złożoności — dla produktu, którego nikt jeszcze nie zweryfikował. V1 powinna rozwiązywać jeden problem, ale bardzo dobrze.',
      },
      {
        ul: [
          'Wypisz wszystkie wymyślone funkcje, a potem wytnij 70 %. To, co zostanie, to twoja prawdziwa V1.',
          'Zostaw tylko 3 do 5 ścieżek użytkownika niezbędnych dla rozwiązywanego problemu.',
          'Cała reszta trafia do backlogu "po premierze", a nie do V1.',
        ],
      },
      { h2: 'Przedwczesny over-engineering' },
      {
        p: 'Budowanie dla miliona użytkowników, gdy masz zero, to klasyczna pułapka. Mikroserwisy, ultraskalowalna architektura, abstrakcje wszędzie: to czas zainwestowany w problemy, których być może nigdy nie napotkasz. Prosty, sprawdzony stack — Next.js, NestJS, PostgreSQL — bez trudu udźwignie twoje pierwsze tysiące użytkowników. Optymalizuje się, gdy wymaga tego sukces, nie wcześniej.',
      },
      { h2: 'Brak jasnej grupy docelowej, brak kontaktu z użytkownikami' },
      {
        p: 'Produkt "dla wszystkich" to produkt dla nikogo. Bez precyzyjnej grupy docelowej każda decyzja staje się zakładem: jakie funkcje, jaki ton, jaka cena? Co gorsza, wielu founderów buduje miesiącami, nie pokazując produktu ani jednemu prawdziwemu użytkownikowi — i za późno odkrywa, że rozwiązali problem, który nie istniał.',
      },
      {
        ul: [
          'Zdefiniuj precyzyjnego użytkownika docelowego: rola, problem, kontekst, budżet.',
          'Porozmawiaj z 10 docelowymi użytkownikami, zanim napiszesz pierwszą linijkę kodu.',
          'Pokazuj im produkt co tydzień — ich reakcje są warte więcej niż twoja intuicja.',
        ],
      },
      {
        quote:
          'Produkt dla wszystkich to produkt dla nikogo. Wąska grupa docelowa to produkt, który trafia w sedno.',
      },
      { h2: 'Zbyt dużo czasu przed premierą' },
      {
        p: 'Każdy miesiąc budowania w ciszy to miesiąc bez przychodów, bez feedbacku i bez nauki. Rynek nie nagradza najbardziej kompletnego produktu, lecz ten, który uczy się najszybciej. Na tym polega cała logika V1 wdrażanej na produkcję w 7 dni w stałej cenie (15 000 € w Khufu): szybko wypuścić prawdziwy produkt, postawić go przed prawdziwymi użytkownikami, a potem iterować na faktach, a nie na założeniach.',
      },
      {
        p: 'Te pięć błędów ma wspólny mianownik: budować za dużo, za długo, bez dowodów. Zawęź zakres, uprość technikę, wybierz grupę docelową, rozmawiaj z nią i wypuść szybko. Reszty nauczysz się od rynku.',
      },
    ],
  },
  tr: {
    slug: 'erreurs-qui-tuent-un-produit',
    title: 'Bir ürünü daha lansmandan önce öldüren hatalar',
    excerpt:
      'Beş klasik hata bir ürünü lansmandan önce öldürür — çok geniş kapsam, aşırı mühendislik, net hedef yok, kullanıcı geri bildirimi yok, çok yavaş — ve bunlardan nasıl kaçınılır.',
    date: '2026-02-04',
    readingMinutes: 6,
    tags: ['Kurucu', 'Ürün'],
    body: [
      {
        p: 'Çoğu ürün rekabet karşısında ya da bir hata yüzünden ölmez: daha lansmandan önce ölür; önlenebilir beş hata yüzünden — çok geniş bir kapsam, aşırı mühendislik, net bir hedef kitlenin olmayışı, kullanıcılarla hiç konuşmadan inşa edilen bir ürün ve çok uzun bir pazara çıkış süresi. Bunları erken fark etmek, herhangi bir özellikten daha değerlidir.',
      },
      { h2: 'Çok geniş bir kapsam' },
      {
        p: 'Bir numaralı hata. Her şeyi ilk sürüme koymak istenir ve lansman aydan aya ertelenir. Eklenen her özellik daha fazla zaman, daha fazla hata ve daha fazla karmaşıklık demektir — henüz kimsenin doğrulamadığı bir ürün için. Bir V1 tek bir sorunu, çok iyi biçimde çözmelidir.',
      },
      {
        ul: [
          'Hayal ettiğin tüm özellikleri listele, sonra %70"ini kes. Geriye kalan senin gerçek V1"indir.',
          'Yalnızca çözdüğün soruna vazgeçilmez olan 3 ila 5 kullanıcı akışını tut.',
          'Geri kalan her şey "lansmandan sonra" backlog’una gider, V1"e değil.',
        ],
      },
      { h2: 'Erken aşırı mühendislik' },
      {
        p: 'Sıfır kullanıcın varken bir milyon kullanıcı için inşa etmek klasik bir tuzaktır. Microservices, aşırı ölçeklenebilir mimari, her yerde soyutlamalar: hepsi belki hiç yaşamayacağın sorunlara yatırılan zaman. Basit ve kanıtlanmış bir stack — Next.js, NestJS, PostgreSQL — ilk birkaç bin kullanıcını rahatça kaldırır. Başarı gerektirdiğinde optimize edersin, öncesinde değil.',
      },
      { h2: 'Net hedef yok, kullanıcılarla temas yok' },
      {
        p: '"Herkes için" bir ürün, hiç kimse için bir üründür. Net bir hedef olmadan her karar bir kumara dönüşür: hangi özellikler, hangi ton, hangi fiyat? Daha kötüsü, birçok kurucu aylarca inşa eder ama ürününü tek bir gerçek kullanıcıya bile göstermez — ve var olmayan bir sorunu çözdüklerini çok geç anlar.',
      },
      {
        ul: [
          'Net bir hedef kullanıcı tanımla: rol, sorun, bağlam, bütçe.',
          'İlk kod satırını yazmadan önce 10 hedef kullanıcıyla konuş.',
          'Ürünü onlara her hafta göster — tepkileri sezgilerinden daha değerlidir.',
        ],
      },
      {
        quote:
          'Herkes için bir ürün, hiç kimse için bir üründür. Dar bir hedef, tam isabet eden bir üründür.',
      },
      { h2: 'Lansmandan önce çok fazla zaman' },
      {
        p: 'Sessizce inşa ederek geçirilen her ay, gelirsiz, geri bildirimsiz ve öğrenmesiz bir aydır. Pazar en eksiksiz ürünü değil, en hızlı öğreneni ödüllendirir. 7 günde sabit fiyatla (Khufu’da 15.000 €) canlıya alınan bir V1"in tüm mantığı budur: gerçek bir ürünü hızlıca çıkarmak, onu gerçek kullanıcıların önüne koymak, sonra varsayımlar yerine gerçekler üzerinden yinelemek.',
      },
      {
        p: 'Bu beş hatanın ortak bir paydası var: kanıt olmadan çok fazla, çok uzun süre inşa etmek. Kapsamı daralt, tekniği sadeleştir, bir hedef seç, onunla konuş ve hızlı lanse et. Gerisini pazardan öğrenirsin.',
      },
    ],
  },
}
