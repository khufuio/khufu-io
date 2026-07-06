import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'limites-du-no-code',
    title: 'Les limites du no-code que personne ne vous dit',
    excerpt:
      'Lock-in, coûts au volume, performance, propriété du code : les limites du no-code rarement annoncées, et pour qui il reste malgré tout un bon choix.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "Le no-code (Bubble, Webflow, Glide…) permet de lancer un produit en quelques jours sans écrire une ligne de code. C’est réel et souvent la bonne décision au tout début. Mais six limites sont rarement annoncées avant de se lancer : le lock-in, les coûts qui explosent au volume, les performances, la personnalisation, la propriété du code et le recrutement. Les connaître à l’avance évite de tout réécrire dans six mois.",
      },
      { h2: 'Le lock-in : vous ne partez jamais vraiment' },
      {
        p: "Un produit no-code vit dans la plateforme. Toute votre logique métier, vos données et vos écrans sont encodés dans un format propriétaire que vous ne pouvez pas exporter proprement. Le jour où la plateforme augmente ses prix, change ses conditions ou ferme une fonctionnalité, vous n’avez aucune porte de sortie : migrer signifie tout reconstruire à zéro.",
      },
      { h2: 'Les coûts explosent avec le succès' },
      {
        p: "Le no-code est bon marché à vide et cher à plein. Le prix suit le nombre d’utilisateurs, de workflows ou d’enregistrements, pas la valeur que vous créez. Un abonnement à 30 €/mois au lancement peut dépasser 2 000 €/mois une fois que le produit décolle — pour la même application.",
      },
      {
        ul: [
          'Facturation à l’usage : plus vous avez de succès, plus vous payez.',
          'Add-ons payants pour des fonctions basiques (SSO, logs, sauvegardes).',
          'Coût de sortie caché : la réécriture complète le jour où vous quittez la plateforme.',
        ],
      },
      { h2: 'Performance, personnalisation et propriété du code' },
      {
        p: "Trois plafonds arrivent ensemble. La performance d’abord : au-delà de quelques milliers d’utilisateurs actifs, les temps de chargement se dégradent et vous ne pouvez pas optimiser ce que vous ne contrôlez pas. La personnalisation ensuite : dès qu’un besoin sort du cadre prévu par la plateforme, vous vous heurtez à un mur. Enfin la propriété : vous ne possédez pas de code source réutilisable, seulement un abonnement.",
      },
      {
        quote:
          'Le no-code fait gagner des semaines au début, et en fait perdre des mois quand il faut scaler.',
      },
      { h2: 'Le recrutement : un marché étroit' },
      {
        p: "Faire évoluer un produit no-code complexe demande des spécialistes de la plateforme, un vivier bien plus petit que celui des développeurs JavaScript ou TypeScript. Vous dépendez d’un profil rare, souvent d’une seule personne, et votre roadmap ralentit dès qu’elle part.",
      },
      { h2: 'Pour qui le no-code reste un bon choix' },
      {
        p: "Le no-code garde tout son sens pour valider une idée non validée, monter un outil interne simple, ou lancer une landing page et des formulaires en quelques jours. Le piège, c’est d’y bâtir un produit destiné à grandir. Avec le développement AI-native, l’argument historique de la vitesse a fondu : Khufu livre une V1 en vrai code, prête pour la production et dont le code source vous appartient, en 7 jours pour 15 000 € — la vitesse du no-code, sans la dette.",
      },
    ],
  },
  en: {
    slug: 'limites-du-no-code',
    title: 'The no-code limits nobody tells you about',
    excerpt:
      'Lock-in, usage-based costs, performance, code ownership: the rarely-mentioned limits of no-code, and who it still makes sense for.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "No-code (Bubble, Webflow, Glide…) lets you launch a product in days without writing a line of code. That is real, and often the right call at the very start. But six limits are rarely disclosed before you commit: lock-in, costs that explode at scale, performance, customization, code ownership and hiring. Knowing them up front saves you from rewriting everything in six months.",
      },
      { h2: 'Lock-in: you never truly leave' },
      {
        p: "A no-code product lives inside the platform. All your business logic, data and screens are encoded in a proprietary format you cannot cleanly export. The day the platform raises prices, changes its terms or shuts down a feature, you have no exit: migrating means rebuilding from scratch.",
      },
      { h2: 'Costs explode with success' },
      {
        p: "No-code is cheap when empty and expensive when full. Pricing tracks the number of users, workflows or records, not the value you create. A €30/month subscription at launch can exceed €2,000/month once the product takes off — for the exact same app.",
      },
      {
        ul: [
          'Usage-based billing: the more successful you are, the more you pay.',
          'Paid add-ons for basic features (SSO, logs, backups).',
          'Hidden exit cost: a full rewrite the day you leave the platform.',
        ],
      },
      { h2: 'Performance, customization and code ownership' },
      {
        p: "Three ceilings arrive together. Performance first: beyond a few thousand active users, load times degrade and you cannot optimize what you do not control. Customization next: the moment a need falls outside what the platform anticipated, you hit a wall. Finally ownership: you own no reusable source code, only a subscription.",
      },
      {
        quote:
          'No-code saves you weeks at the start, and costs you months when it is time to scale.',
      },
      { h2: 'Hiring: a narrow market' },
      {
        p: "Evolving a complex no-code product requires platform specialists, a far smaller pool than JavaScript or TypeScript developers. You depend on a rare profile, often a single person, and your roadmap slows the moment they leave.",
      },
      { h2: 'Who no-code still makes sense for' },
      {
        p: "No-code keeps all its value for validating an unproven idea, building a simple internal tool, or launching a landing page and forms in a few days. The trap is building a product meant to grow. With AI-native development, the historic speed argument has melted away: Khufu ships a real-code V1, production-ready and with source code you own, in 7 days for €15,000 — the speed of no-code, without the debt.",
      },
    ],
  },
  es: {
    slug: 'limites-du-no-code',
    title: 'Los límites del no-code que nadie te cuenta',
    excerpt:
      'Lock-in, costes por volumen, rendimiento, propiedad del código: los límites poco anunciados del no-code y para quién sigue siendo buena opción.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "El no-code (Bubble, Webflow, Glide…) permite lanzar un producto en días sin escribir una línea de código. Es real y a menudo la decisión correcta al principio. Pero seis límites rara vez se anuncian antes de empezar: el lock-in, los costes que se disparan con el volumen, el rendimiento, la personalización, la propiedad del código y la contratación. Conocerlos de antemano evita reescribirlo todo en seis meses.",
      },
      { h2: 'El lock-in: nunca te vas del todo' },
      {
        p: "Un producto no-code vive dentro de la plataforma. Toda tu lógica de negocio, tus datos y tus pantallas están codificados en un formato propietario que no puedes exportar limpiamente. El día que la plataforma sube precios, cambia sus condiciones o cierra una función, no tienes salida: migrar significa reconstruirlo todo desde cero.",
      },
      { h2: 'Los costes se disparan con el éxito' },
      {
        p: "El no-code es barato en vacío y caro a plena carga. El precio sigue el número de usuarios, flujos o registros, no el valor que creas. Una suscripción de 30 €/mes al lanzar puede superar los 2.000 €/mes cuando el producto despega — para la misma aplicación.",
      },
      {
        ul: [
          'Facturación por uso: cuanto más éxito tienes, más pagas.',
          'Complementos de pago para funciones básicas (SSO, logs, copias de seguridad).',
          'Coste de salida oculto: la reescritura completa el día que dejas la plataforma.',
        ],
      },
      { h2: 'Rendimiento, personalización y propiedad del código' },
      {
        p: "Tres techos llegan a la vez. El rendimiento primero: más allá de unos miles de usuarios activos, los tiempos de carga se degradan y no puedes optimizar lo que no controlas. La personalización después: en cuanto una necesidad sale del marco previsto por la plataforma, chocas contra un muro. Por último la propiedad: no posees código fuente reutilizable, solo una suscripción.",
      },
      {
        quote:
          'El no-code te hace ganar semanas al principio y perder meses cuando toca escalar.',
      },
      { h2: 'La contratación: un mercado estrecho' },
      {
        p: "Hacer evolucionar un producto no-code complejo exige especialistas de la plataforma, un mercado mucho más pequeño que el de los desarrolladores JavaScript o TypeScript. Dependes de un perfil escaso, a menudo de una sola persona, y tu roadmap se frena en cuanto se va.",
      },
      { h2: 'Para quién sigue siendo buena opción el no-code' },
      {
        p: "El no-code conserva todo su sentido para validar una idea sin probar, montar una herramienta interna sencilla o lanzar una landing page y formularios en pocos días. La trampa es construir en él un producto pensado para crecer. Con el desarrollo AI-native, el histórico argumento de la velocidad se ha desvanecido: Khufu entrega una V1 en código real, lista para producción y con el código fuente en tu poder, en 7 días por 15.000 € — la velocidad del no-code, sin la deuda.",
      },
    ],
  },
  de: {
    slug: 'limites-du-no-code',
    title: 'Die No-Code-Grenzen, die dir niemand nennt',
    excerpt:
      'Lock-in, volumenabhängige Kosten, Performance, Code-Eigentum: die selten genannten Grenzen von No-Code — und für wen es trotzdem sinnvoll bleibt.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-Code'],
    body: [
      {
        p: "No-Code (Bubble, Webflow, Glide…) erlaubt es, ein Produkt in Tagen zu starten, ohne eine Zeile Code zu schreiben. Das ist real und oft die richtige Entscheidung ganz am Anfang. Doch sechs Grenzen werden vor dem Start selten genannt: Lock-in, Kosten, die mit dem Volumen explodieren, Performance, Anpassbarkeit, Code-Eigentum und Recruiting. Wer sie im Voraus kennt, muss nicht in sechs Monaten alles neu schreiben.",
      },
      { h2: 'Lock-in: Du gehst nie wirklich weg' },
      {
        p: "Ein No-Code-Produkt lebt in der Plattform. Deine gesamte Geschäftslogik, deine Daten und Screens sind in einem proprietären Format codiert, das du nicht sauber exportieren kannst. An dem Tag, an dem die Plattform die Preise erhöht, ihre Bedingungen ändert oder eine Funktion abschaltet, hast du keinen Ausweg: Migrieren heißt, alles von Grund auf neu zu bauen.",
      },
      { h2: 'Kosten explodieren mit dem Erfolg' },
      {
        p: "No-Code ist günstig, wenn leer, und teuer, wenn voll. Der Preis folgt der Zahl der Nutzer, Workflows oder Datensätze, nicht dem Wert, den du schaffst. Ein Abo für 30 €/Monat zum Start kann 2.000 €/Monat übersteigen, sobald das Produkt abhebt — für dieselbe App.",
      },
      {
        ul: [
          'Nutzungsbasierte Abrechnung: je erfolgreicher du bist, desto mehr zahlst du.',
          'Kostenpflichtige Add-ons für Basisfunktionen (SSO, Logs, Backups).',
          'Versteckte Ausstiegskosten: das komplette Neuschreiben an dem Tag, an dem du die Plattform verlässt.',
        ],
      },
      { h2: 'Performance, Anpassbarkeit und Code-Eigentum' },
      {
        p: "Drei Obergrenzen treffen gleichzeitig ein. Zuerst die Performance: jenseits einiger tausend aktiver Nutzer verschlechtern sich die Ladezeiten, und du kannst nicht optimieren, was du nicht kontrollierst. Dann die Anpassbarkeit: sobald ein Bedarf außerhalb des von der Plattform vorgesehenen Rahmens liegt, stößt du an eine Wand. Schließlich das Eigentum: du besitzt keinen wiederverwendbaren Quellcode, nur ein Abo.",
      },
      {
        quote:
          'No-Code spart am Anfang Wochen und kostet Monate, wenn es ans Skalieren geht.',
      },
      { h2: 'Recruiting: ein enger Markt' },
      {
        p: "Ein komplexes No-Code-Produkt weiterzuentwickeln erfordert Plattform-Spezialisten — ein weit kleinerer Pool als der der JavaScript- oder TypeScript-Entwickler. Du hängst von einem seltenen Profil ab, oft von einer einzigen Person, und deine Roadmap bremst, sobald sie geht.",
      },
      { h2: 'Für wen No-Code weiterhin sinnvoll ist' },
      {
        p: "No-Code behält seinen vollen Sinn, um eine unbestätigte Idee zu validieren, ein einfaches internes Tool zu bauen oder eine Landing Page und Formulare in wenigen Tagen zu starten. Die Falle ist, darin ein Produkt zu bauen, das wachsen soll. Mit AI-native Entwicklung ist das historische Geschwindigkeitsargument dahingeschmolzen: Khufu liefert eine V1 in echtem Code, produktionsreif und mit Quellcode, der dir gehört, in 7 Tagen für 15.000 € — die Geschwindigkeit von No-Code, ohne die Schulden.",
      },
    ],
  },
  it: {
    slug: 'limites-du-no-code',
    title: 'I limiti del no-code che nessuno ti dice',
    excerpt:
      'Lock-in, costi a volume, performance, proprietà del codice: i limiti poco dichiarati del no-code e per chi resta comunque una buona scelta.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "Il no-code (Bubble, Webflow, Glide…) permette di lanciare un prodotto in pochi giorni senza scrivere una riga di codice. È reale e spesso la decisione giusta all’inizio. Ma sei limiti vengono raramente dichiarati prima di partire: il lock-in, i costi che esplodono con il volume, le performance, la personalizzazione, la proprietà del codice e le assunzioni. Conoscerli in anticipo evita di riscrivere tutto tra sei mesi.",
      },
      { h2: 'Il lock-in: non te ne vai mai davvero' },
      {
        p: "Un prodotto no-code vive dentro la piattaforma. Tutta la tua logica di business, i tuoi dati e le tue schermate sono codificati in un formato proprietario che non puoi esportare in modo pulito. Il giorno in cui la piattaforma aumenta i prezzi, cambia le condizioni o chiude una funzione, non hai via d’uscita: migrare significa ricostruire tutto da zero.",
      },
      { h2: 'I costi esplodono con il successo' },
      {
        p: "Il no-code è economico a vuoto e caro a pieno. Il prezzo segue il numero di utenti, workflow o record, non il valore che crei. Un abbonamento da 30 €/mese al lancio può superare i 2.000 €/mese quando il prodotto decolla — per la stessa applicazione.",
      },
      {
        ul: [
          'Fatturazione a consumo: più hai successo, più paghi.',
          'Add-on a pagamento per funzioni di base (SSO, log, backup).',
          'Costo di uscita nascosto: la riscrittura completa il giorno in cui lasci la piattaforma.',
        ],
      },
      { h2: 'Performance, personalizzazione e proprietà del codice' },
      {
        p: "Tre tetti arrivano insieme. Prima la performance: oltre qualche migliaio di utenti attivi i tempi di caricamento peggiorano e non puoi ottimizzare ciò che non controlli. Poi la personalizzazione: appena un’esigenza esce dal quadro previsto dalla piattaforma, sbatti contro un muro. Infine la proprietà: non possiedi codice sorgente riutilizzabile, solo un abbonamento.",
      },
      {
        quote:
          'Il no-code ti fa guadagnare settimane all’inizio e perdere mesi quando devi scalare.',
      },
      { h2: 'Le assunzioni: un mercato stretto' },
      {
        p: "Far evolvere un prodotto no-code complesso richiede specialisti della piattaforma, un bacino molto più piccolo di quello degli sviluppatori JavaScript o TypeScript. Dipendi da un profilo raro, spesso da una sola persona, e la tua roadmap rallenta appena se ne va.",
      },
      { h2: 'Per chi il no-code resta una buona scelta' },
      {
        p: "Il no-code mantiene tutto il suo senso per validare un’idea non provata, costruire un semplice tool interno o lanciare una landing page e dei form in pochi giorni. La trappola è costruirci un prodotto destinato a crescere. Con lo sviluppo AI-native l’argomento storico della velocità si è dissolto: Khufu consegna una V1 in codice vero, pronta per la produzione e con il codice sorgente tuo, in 7 giorni per 15.000 € — la velocità del no-code, senza il debito.",
      },
    ],
  },
  pt: {
    slug: 'limites-du-no-code',
    title: 'Os limites do no-code que ninguém te conta',
    excerpt:
      'Lock-in, custos por volume, desempenho, propriedade do código: os limites pouco divulgados do no-code e para quem ainda faz sentido.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "O no-code (Bubble, Webflow, Glide…) permite lançar um produto em dias sem escrever uma linha de código. É real e muitas vezes a decisão certa no início. Mas seis limites raramente são anunciados antes de começar: o lock-in, os custos que explodem com o volume, o desempenho, a personalização, a propriedade do código e a contratação. Conhecê-los com antecedência evita reescrever tudo em seis meses.",
      },
      { h2: 'O lock-in: você nunca sai de verdade' },
      {
        p: "Um produto no-code vive dentro da plataforma. Toda a sua lógica de negócio, seus dados e suas telas estão codificados num formato proprietário que você não pode exportar de forma limpa. No dia em que a plataforma aumenta os preços, muda as condições ou encerra uma função, você não tem saída: migrar significa reconstruir tudo do zero.",
      },
      { h2: 'Os custos explodem com o sucesso' },
      {
        p: "O no-code é barato vazio e caro cheio. O preço segue o número de usuários, workflows ou registros, não o valor que você cria. Uma assinatura de 30 €/mês no lançamento pode passar de 2.000 €/mês quando o produto decola — para o mesmo aplicativo.",
      },
      {
        ul: [
          'Cobrança por uso: quanto mais sucesso, mais você paga.',
          'Add-ons pagos para funções básicas (SSO, logs, backups).',
          'Custo de saída oculto: a reescrita completa no dia em que você deixa a plataforma.',
        ],
      },
      { h2: 'Desempenho, personalização e propriedade do código' },
      {
        p: "Três tetos chegam juntos. Primeiro o desempenho: além de alguns milhares de usuários ativos, os tempos de carregamento se degradam e você não pode otimizar o que não controla. Depois a personalização: assim que uma necessidade sai do quadro previsto pela plataforma, você bate numa parede. Por fim a propriedade: você não possui código-fonte reutilizável, apenas uma assinatura.",
      },
      {
        quote:
          'O no-code faz você ganhar semanas no início e perder meses na hora de escalar.',
      },
      { h2: 'A contratação: um mercado estreito' },
      {
        p: "Fazer evoluir um produto no-code complexo exige especialistas da plataforma, um mercado bem menor que o dos desenvolvedores JavaScript ou TypeScript. Você depende de um perfil raro, muitas vezes de uma única pessoa, e seu roadmap desacelera assim que ela sai.",
      },
      { h2: 'Para quem o no-code continua sendo uma boa escolha' },
      {
        p: "O no-code mantém todo o sentido para validar uma ideia não comprovada, montar uma ferramenta interna simples ou lançar uma landing page e formulários em poucos dias. A armadilha é construir nele um produto destinado a crescer. Com o desenvolvimento AI-native, o histórico argumento da velocidade se dissolveu: a Khufu entrega uma V1 em código real, pronta para produção e com o código-fonte seu, em 7 dias por 15.000 € — a velocidade do no-code, sem a dívida.",
      },
    ],
  },
  nl: {
    slug: 'limites-du-no-code',
    title: 'De no-code-grenzen die niemand je vertelt',
    excerpt:
      'Lock-in, kosten per volume, prestaties, code-eigendom: de zelden genoemde grenzen van no-code — en voor wie het toch een goede keuze blijft.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "No-code (Bubble, Webflow, Glide…) laat je een product in dagen lanceren zonder een regel code te schrijven. Dat is echt en vaak de juiste keuze helemaal aan het begin. Maar zes grenzen worden zelden vermeld voordat je begint: lock-in, kosten die exploderen bij volume, prestaties, maatwerk, code-eigendom en werving. Ze vooraf kennen bespaart je een volledige herbouw over zes maanden.",
      },
      { h2: 'Lock-in: je vertrekt nooit echt' },
      {
        p: "Een no-code-product leeft binnen het platform. Al je bedrijfslogica, je data en je schermen zitten in een propriëtair formaat dat je niet netjes kunt exporteren. De dag dat het platform de prijzen verhoogt, zijn voorwaarden wijzigt of een functie stopzet, heb je geen uitweg: migreren betekent alles vanaf nul opnieuw bouwen.",
      },
      { h2: 'Kosten exploderen met succes' },
      {
        p: "No-code is goedkoop leeg en duur vol. De prijs volgt het aantal gebruikers, workflows of records, niet de waarde die je creëert. Een abonnement van 30 €/maand bij de lancering kan boven de 2.000 €/maand uitkomen zodra het product doorbreekt — voor exact dezelfde app.",
      },
      {
        ul: [
          'Facturering op gebruik: hoe succesvoller je bent, hoe meer je betaalt.',
          'Betaalde add-ons voor basisfuncties (SSO, logs, back-ups).',
          'Verborgen uitstapkosten: de volledige herbouw op de dag dat je het platform verlaat.',
        ],
      },
      { h2: 'Prestaties, maatwerk en code-eigendom' },
      {
        p: "Drie plafonds komen tegelijk. Eerst de prestaties: voorbij een paar duizend actieve gebruikers verslechteren de laadtijden en kun je niet optimaliseren wat je niet beheert. Dan het maatwerk: zodra een behoefte buiten het door het platform voorziene kader valt, loop je tegen een muur. Ten slotte het eigendom: je bezit geen herbruikbare broncode, alleen een abonnement.",
      },
      {
        quote:
          'No-code bespaart je weken aan het begin en kost je maanden wanneer je moet opschalen.',
      },
      { h2: 'Werving: een smalle markt' },
      {
        p: "Een complex no-code-product laten evolueren vraagt platformspecialisten, een veel kleinere vijver dan die van JavaScript- of TypeScript-ontwikkelaars. Je bent afhankelijk van een zeldzaam profiel, vaak van één persoon, en je roadmap vertraagt zodra die vertrekt.",
      },
      { h2: 'Voor wie no-code een goede keuze blijft' },
      {
        p: "No-code behoudt al zijn zin om een onbewezen idee te valideren, een eenvoudige interne tool te bouwen of in een paar dagen een landing page en formulieren te lanceren. De valkuil is er een product in bouwen dat moet groeien. Met AI-native ontwikkeling is het historische snelheidsargument weggesmolten: Khufu levert een V1 in echte code, productieklaar en met broncode die van jou is, in 7 dagen voor 15.000 € — de snelheid van no-code, zonder de schuld.",
      },
    ],
  },
  ar: {
    slug: 'limites-du-no-code',
    title: 'حدود الـ no-code التي لا يخبرك بها أحد',
    excerpt:
      'الاحتجاز داخل المنصة، التكاليف حسب الحجم، الأداء، ملكية الكود: حدود الـ no-code التي نادرًا ما تُعلن، ولمن يبقى خيارًا جيدًا رغم ذلك.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "يتيح لك الـ no-code (Bubble وWebflow وGlide…) إطلاق منتج خلال أيام دون كتابة سطر كود واحد. هذا حقيقي وغالبًا القرار الصحيح في البداية تمامًا. لكن ست حدود نادرًا ما يُعلن عنها قبل الانطلاق: الاحتجاز داخل المنصة، والتكاليف التي تنفجر مع الحجم، والأداء، والتخصيص، وملكية الكود، والتوظيف. معرفتها مسبقًا تجنّبك إعادة كتابة كل شيء بعد ستة أشهر.",
      },
      { h2: 'الاحتجاز داخل المنصة: أنت لا تغادر أبدًا فعليًا' },
      {
        p: "يعيش منتج الـ no-code داخل المنصة. كل منطق عملك وبياناتك وشاشاتك مُرمّزة بصيغة خاصة لا يمكنك تصديرها بشكل نظيف. يوم ترفع المنصة أسعارها أو تغيّر شروطها أو تُغلق ميزة، لن يكون لديك مخرج: الانتقال يعني إعادة بناء كل شيء من الصفر.",
      },
      { h2: 'التكاليف تنفجر مع النجاح' },
      {
        p: "الـ no-code رخيص وهو فارغ وباهظ وهو ممتلئ. يتبع السعر عدد المستخدمين أو المسارات أو السجلات، لا القيمة التي تصنعها. اشتراك بـ 30 €/شهريًا عند الإطلاق قد يتجاوز 2000 €/شهريًا بمجرد أن ينطلق المنتج — للتطبيق نفسه.",
      },
      {
        ul: [
          'فوترة حسب الاستخدام: كلما زاد نجاحك زاد ما تدفعه.',
          'إضافات مدفوعة لوظائف أساسية (SSO، السجلات، النسخ الاحتياطي).',
          'تكلفة خروج خفية: إعادة الكتابة الكاملة يوم تغادر المنصة.',
        ],
      },
      { h2: 'الأداء والتخصيص وملكية الكود' },
      {
        p: "ثلاثة سقوف تصل معًا. الأداء أولًا: بعد بضعة آلاف من المستخدمين النشطين تتدهور أوقات التحميل ولا يمكنك تحسين ما لا تتحكم فيه. ثم التخصيص: بمجرد أن تخرج حاجة عن الإطار الذي تتوقعه المنصة، تصطدم بجدار. وأخيرًا الملكية: لا تملك كودًا مصدريًا قابلًا لإعادة الاستخدام، بل اشتراكًا فقط.",
      },
      {
        quote:
          'الـ no-code يوفّر لك أسابيع في البداية ويكلّفك شهورًا حين يحين وقت التوسّع.',
      },
      { h2: 'التوظيف: سوق ضيقة' },
      {
        p: "تطوير منتج no-code معقّد يتطلب متخصصين في المنصة، وهو حوض أصغر بكثير من حوض مطوّري JavaScript أو TypeScript. تعتمد على ملف نادر، غالبًا على شخص واحد، وتتباطأ خارطة طريقك بمجرد رحيله.",
      },
      { h2: 'لمن يبقى الـ no-code خيارًا جيدًا' },
      {
        p: "يحتفظ الـ no-code بكامل معناه للتحقق من فكرة غير مثبتة، أو بناء أداة داخلية بسيطة، أو إطلاق landing page ونماذج خلال أيام. الفخ هو أن تبني عليه منتجًا مُعدًّا للنمو. مع التطوير AI-native ذابت حجة السرعة التاريخية: تُسلّم Khufu نسخة V1 بكود حقيقي، جاهزة للإنتاج وكودها المصدري ملكك، خلال 7 أيام مقابل 15000 € — سرعة الـ no-code، دون ديونه.",
      },
    ],
  },
  pl: {
    slug: 'limites-du-no-code',
    title: 'Granice no-code, o których nikt ci nie mówi',
    excerpt:
      'Lock-in, koszty od wolumenu, wydajność, własność kodu: rzadko zapowiadane granice no-code i dla kogo mimo wszystko pozostaje dobrym wyborem.',
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "No-code (Bubble, Webflow, Glide…) pozwala uruchomić produkt w kilka dni bez pisania linijki kodu. To prawda i często słuszna decyzja na samym początku. Ale sześć granic rzadko jest zapowiadanych przed startem: lock-in, koszty eksplodujące wraz z wolumenem, wydajność, personalizacja, własność kodu i rekrutacja. Znajomość ich z wyprzedzeniem pozwala uniknąć przepisywania wszystkiego za pół roku.",
      },
      { h2: 'Lock-in: nigdy naprawdę nie odchodzisz' },
      {
        p: "Produkt no-code żyje wewnątrz platformy. Cała twoja logika biznesowa, dane i ekrany są zakodowane w zastrzeżonym formacie, którego nie da się czysto wyeksportować. W dniu, w którym platforma podnosi ceny, zmienia warunki lub zamyka funkcję, nie masz wyjścia: migracja oznacza odbudowę wszystkiego od zera.",
      },
      { h2: 'Koszty eksplodują wraz z sukcesem' },
      {
        p: "No-code jest tani, gdy pusty, i drogi, gdy pełny. Cena zależy od liczby użytkowników, workflowów lub rekordów, a nie od wartości, którą tworzysz. Abonament za 30 €/miesiąc przy starcie może przekroczyć 2000 €/miesiąc, gdy produkt wystrzeli — za tę samą aplikację.",
      },
      {
        ul: [
          'Rozliczenie od użycia: im większy sukces, tym więcej płacisz.',
          'Płatne dodatki do podstawowych funkcji (SSO, logi, kopie zapasowe).',
          'Ukryty koszt wyjścia: pełne przepisanie w dniu, w którym opuszczasz platformę.',
        ],
      },
      { h2: 'Wydajność, personalizacja i własność kodu' },
      {
        p: "Trzy sufity przychodzą razem. Najpierw wydajność: powyżej kilku tysięcy aktywnych użytkowników czasy ładowania się pogarszają, a nie możesz optymalizować tego, czego nie kontrolujesz. Potem personalizacja: gdy tylko potrzeba wykracza poza ramy przewidziane przez platformę, uderzasz w ścianę. Wreszcie własność: nie posiadasz kodu źródłowego wielokrotnego użytku, tylko abonament.",
      },
      {
        quote:
          'No-code oszczędza ci tygodnie na początku i kosztuje miesiące, gdy trzeba skalować.',
      },
      { h2: 'Rekrutacja: wąski rynek' },
      {
        p: "Rozwój złożonego produktu no-code wymaga specjalistów od platformy — puli znacznie mniejszej niż deweloperów JavaScript czy TypeScript. Zależysz od rzadkiego profilu, często od jednej osoby, a twoja roadmapa zwalnia, gdy tylko odejdzie.",
      },
      { h2: 'Dla kogo no-code pozostaje dobrym wyborem' },
      {
        p: "No-code zachowuje pełny sens do walidacji niesprawdzonego pomysłu, zbudowania prostego narzędzia wewnętrznego czy uruchomienia landing page i formularzy w kilka dni. Pułapką jest budowanie na nim produktu, który ma rosnąć. Dzięki rozwojowi AI-native historyczny argument szybkości się rozpłynął: Khufu dostarcza V1 w prawdziwym kodzie, gotową do produkcji i z kodem źródłowym należącym do ciebie, w 7 dni za 15 000 € — szybkość no-code, bez długu.",
      },
    ],
  },
  tr: {
    slug: 'limites-du-no-code',
    title: 'Kimsenin söylemediği no-code sınırları',
    excerpt:
      "Kilitlenme, hacme bağlı maliyetler, performans, kod sahipliği: no-code’un nadiren duyurulan sınırları ve yine de kimin için iyi bir seçim olduğu.",
    date: '2026-04-08',
    readingMinutes: 6,
    tags: ['No-code'],
    body: [
      {
        p: "No-code (Bubble, Webflow, Glide…) tek satır kod yazmadan bir ürünü günler içinde başlatmanı sağlar. Bu gerçek ve çoğu zaman en başta doğru karardır. Ancak başlamadan önce nadiren açıklanan altı sınır var: kilitlenme, hacimle patlayan maliyetler, performans, özelleştirme, kod sahipliği ve işe alım. Bunları önceden bilmek, altı ay sonra her şeyi yeniden yazmaktan kurtarır.",
      },
      { h2: 'Kilitlenme: aslında hiç ayrılmıyorsun' },
      {
        p: "Bir no-code ürünü platformun içinde yaşar. Tüm iş mantığın, verilerin ve ekranların, temiz bir şekilde dışa aktaramayacağın tescilli bir formatta kodlanmıştır. Platform fiyatlarını artırdığı, koşullarını değiştirdiği veya bir özelliği kapattığı gün çıkışın yoktur: taşınmak, her şeyi sıfırdan yeniden inşa etmek demektir.",
      },
      { h2: 'Maliyetler başarıyla birlikte patlar' },
      {
        p: "No-code boşken ucuz, doluyken pahalıdır. Fiyat, yarattığın değeri değil; kullanıcı, workflow veya kayıt sayısını izler. Lansmanda 30 €/ay olan bir abonelik, ürün havalandığında aynı uygulama için 2.000 €/ayı aşabilir.",
      },
      {
        ul: [
          'Kullanıma dayalı faturalama: ne kadar başarılıysan o kadar ödersin.',
          'Temel işlevler için ücretli eklentiler (SSO, loglar, yedeklemeler).',
          'Gizli çıkış maliyeti: platformdan ayrıldığın gün tam yeniden yazım.',
        ],
      },
      { h2: 'Performans, özelleştirme ve kod sahipliği' },
      {
        p: "Üç tavan aynı anda gelir. Önce performans: birkaç bin aktif kullanıcının ötesinde yükleme süreleri bozulur ve kontrol etmediğin şeyi optimize edemezsin. Sonra özelleştirme: bir ihtiyaç platformun öngördüğü çerçevenin dışına çıktığı anda bir duvara toslarsın. Son olarak sahiplik: yeniden kullanılabilir bir kaynak koduna değil, yalnızca bir aboneliğe sahipsin.",
      },
      {
        quote:
          'No-code başta sana haftalar kazandırır, ölçeklenme zamanı geldiğinde aylar kaybettirir.',
      },
      { h2: 'İşe alım: dar bir pazar' },
      {
        p: "Karmaşık bir no-code ürününü geliştirmek platform uzmanları gerektirir; bu, JavaScript veya TypeScript geliştiricilerinden çok daha küçük bir havuzdur. Nadir bir profile, çoğu zaman tek bir kişiye bağımlısın ve o ayrıldığı anda yol haritan yavaşlar.",
      },
      { h2: 'No-code kimin için iyi bir seçim olarak kalıyor' },
      {
        p: "No-code; kanıtlanmamış bir fikri doğrulamak, basit bir dahili araç kurmak veya birkaç günde bir landing page ile formlar yayınlamak için tüm anlamını korur. Tuzak, üzerine büyümesi beklenen bir ürün inşa etmektir. AI-native geliştirmeyle tarihsel hız argümanı eriyip gitti: Khufu, gerçek kodla, üretime hazır ve kaynak kodu sana ait bir V1’i 7 günde 15.000 € karşılığında teslim eder — no-code’un hızı, borcu olmadan.",
      },
    ],
  },
}
