import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'cto-technique-ou-agence',
    title: 'Faut-il un CTO technique ou une agence pour lancer son produit ?',
    excerpt:
      'CTO à temps plein ou agence pour lancer votre produit ? Coût, délai, engagement et contrôle comparés — et pourquoi recruter trop tôt est un piège.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Décision', 'Founder'],
    body: [
      {
        p: 'Pour lancer une première version, une agence est presque toujours plus rapide et moins engageante que recruter un CTO. Un CTO à temps plein coûte 90 000 à 140 000 €/an chargé, demande 2 à 4 mois de recrutement, et vous engage avant même d’avoir validé le marché. Une agence livre une V1 en production en quelques semaines, à prix fixe, sans engagement long. Le CTO se justifie plus tard — quand la technologie est votre cœur de métier et que le produit est déjà validé.',
      },
      { h2: 'Le vrai coût : CTO vs agence' },
      {
        ul: [
          'CTO salarié : 90 000 – 140 000 €/an chargé, souvent + 5 à 15 % d’equity, + 2 à 4 mois pour trouver le bon profil.',
          'Recrutement raté : 6 à 12 mois perdus et un produit à moitié construit qu’il faut reprendre.',
          'Agence (Khufu) : V1 en production en 7 jours, prix fixe 15 000 €, code source à vous, zéro engagement au-delà.',
        ],
      },
      { h2: 'Délai et time-to-market' },
      {
        p: 'Le temps est la ressource la plus rare d’un founder. Un CTO doit être trouvé, convaincu, onboardé, puis monter une équipe : comptez 4 à 6 mois avant la première ligne de code vraiment utile. Une agence démarre la semaine où vous signez. Chaque mois gagné, c’est un mois de revenus, d’apprentissage et d’avance sur vos concurrents.',
      },
      { h2: 'Engagement et contrôle' },
      {
        p: 'Recruter un CTO, c’est un engagement lourd et difficile à défaire : salaire, equity, lien humain. Se tromper coûte cher, financièrement et émotionnellement. Une agence est un engagement borné : périmètre défini, date de livraison, et vous gardez la propriété du code. Le contrôle du produit reste chez vous — vous décidez, l’agence exécute.',
      },
      {
        quote:
          'Recruter un CTO avant d’avoir validé le marché, c’est financer une équipe pour construire un produit que personne n’a encore acheté.',
      },
      { h2: 'Quand recruter un CTO a vraiment du sens' },
      {
        ul: [
          'La technologie est votre avantage concurrentiel : IA propriétaire, infrastructure complexe, vraie R&D.',
          'Le produit est validé, avec des revenus récurrents et un besoin d’évolution continue.',
          'Vous levez des fonds et les investisseurs attendent un cofondateur technique au capital.',
        ],
      },
      { h2: 'Le bon ordre pour un founder' },
      {
        p: 'Dans la majorité des cas, l’ordre optimal est simple : une agence d’abord pour livrer une V1 et confronter le produit au marché, un CTO ensuite quand la traction justifie une équipe interne. Vous validez avec 15 000 € au lieu de brûler 100 000 € de salaire avant même le premier client. Et entre les deux, une maintenance mensuelle (à partir de 1 490 €/mois) fait évoluer le produit sans recruter trop tôt.',
      },
    ],
  },
  en: {
    slug: 'cto-technique-ou-agence',
    title: 'Do you need a technical CTO or an agency to launch your product?',
    excerpt:
      'Full-time CTO or agency to launch your product? Cost, timeline, commitment and control compared — and why hiring too early is a trap.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Decision', 'Founder'],
    body: [
      {
        p: 'To launch a first version, an agency is almost always faster and less binding than hiring a CTO. A full-time CTO costs €90,000 to €140,000/year fully loaded, takes 2 to 4 months to hire, and commits you before you have even validated the market. An agency ships a production-ready V1 in weeks, at a fixed price, with no long commitment. A CTO makes sense later — once technology is your core business and the product is already validated.',
      },
      { h2: 'The real cost: CTO vs agency' },
      {
        ul: [
          'Salaried CTO: €90,000 – €140,000/year fully loaded, often + 5 to 15% equity, + 2 to 4 months to find the right profile.',
          'A bad hire: 6 to 12 months lost and a half-built product to take over.',
          'Agency (Khufu): production-ready V1 in 7 days, fixed price €15,000, source code is yours, zero commitment beyond that.',
        ],
      },
      { h2: 'Timeline and time-to-market' },
      {
        p: 'Time is a founder’s scarcest resource. A CTO has to be found, convinced, onboarded, then build a team: count 4 to 6 months before the first truly useful line of code. An agency starts the week you sign. Every month saved is a month of revenue, of learning, and of lead over your competitors.',
      },
      { h2: 'Commitment and control' },
      {
        p: 'Hiring a CTO is a heavy, hard-to-undo commitment: salary, equity, a human bond. Getting it wrong is expensive, both financially and emotionally. An agency is a bounded commitment: defined scope, a delivery date, and you keep ownership of the code. Control of the product stays with you — you decide, the agency executes.',
      },
      {
        quote:
          'Hiring a CTO before validating the market means funding a team to build a product no one has bought yet.',
      },
      { h2: 'When hiring a CTO really makes sense' },
      {
        ul: [
          'Technology is your competitive edge: proprietary AI, complex infrastructure, genuine R&D.',
          'The product is validated, with recurring revenue and a need for continuous evolution.',
          'You are raising funds and investors expect a technical co-founder on the cap table.',
        ],
      },
      { h2: 'The right order for a founder' },
      {
        p: 'In most cases, the optimal order is simple: an agency first to ship a V1 and put the product in front of the market, a CTO later once traction justifies an in-house team. You validate with €15,000 instead of burning €100,000 in salary before your first customer. And in between, a monthly maintenance (from €1,490/month) evolves the product without hiring too early.',
      },
    ],
  },
  es: {
    slug: 'cto-technique-ou-agence',
    title: '¿Necesitas un CTO técnico o una agencia para lanzar tu producto?',
    excerpt:
      '¿CTO a tiempo completo o agencia para lanzar tu producto? Coste, plazo, compromiso y control comparados, y por qué contratar demasiado pronto es una trampa.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Decisión', 'Founder'],
    body: [
      {
        p: 'Para lanzar una primera versión, una agencia casi siempre es más rápida y menos comprometedora que contratar a un CTO. Un CTO a tiempo completo cuesta de 90 000 a 140 000 €/año con cargas, exige de 2 a 4 meses de selección y te compromete antes incluso de haber validado el mercado. Una agencia entrega una V1 lista para producción en semanas, a precio fijo y sin compromiso largo. El CTO tiene sentido más tarde, cuando la tecnología es tu núcleo de negocio y el producto ya está validado.',
      },
      { h2: 'El coste real: CTO vs agencia' },
      {
        ul: [
          'CTO en nómina: 90 000 – 140 000 €/año con cargas, a menudo + 5 a 15 % de equity, + 2 a 4 meses para encontrar el perfil adecuado.',
          'Contratación fallida: de 6 a 12 meses perdidos y un producto a medio construir que hay que retomar.',
          'Agencia (Khufu): V1 lista para producción en 7 días, precio fijo 15 000 €, código fuente para ti, cero compromiso más allá.',
        ],
      },
      { h2: 'Plazo y time-to-market' },
      {
        p: 'El tiempo es el recurso más escaso de un founder. A un CTO hay que encontrarlo, convencerlo, incorporarlo y luego montar un equipo: cuenta de 4 a 6 meses antes de la primera línea de código realmente útil. Una agencia empieza la semana en que firmas. Cada mes ganado es un mes de ingresos, de aprendizaje y de ventaja sobre tus competidores.',
      },
      { h2: 'Compromiso y control' },
      {
        p: 'Contratar a un CTO es un compromiso pesado y difícil de deshacer: salario, equity, vínculo humano. Equivocarse sale caro, financiera y emocionalmente. Una agencia es un compromiso acotado: alcance definido, fecha de entrega, y conservas la propiedad del código. El control del producto se queda contigo: tú decides, la agencia ejecuta.',
      },
      {
        quote:
          'Contratar a un CTO antes de validar el mercado es financiar un equipo para construir un producto que nadie ha comprado todavía.',
      },
      { h2: 'Cuándo contratar a un CTO tiene sentido de verdad' },
      {
        ul: [
          'La tecnología es tu ventaja competitiva: IA propia, infraestructura compleja, verdadera I+D.',
          'El producto está validado, con ingresos recurrentes y necesidad de evolución continua.',
          'Estás levantando capital y los inversores esperan un cofundador técnico en el accionariado.',
        ],
      },
      { h2: 'El orden correcto para un founder' },
      {
        p: 'En la mayoría de los casos, el orden óptimo es simple: primero una agencia para entregar una V1 y confrontar el producto con el mercado, y un CTO después, cuando la tracción justifique un equipo interno. Validas con 15 000 € en lugar de quemar 100 000 € en salario antes del primer cliente. Y entre medias, un mantenimiento mensual (desde 1 490 €/mes) hace evolucionar el producto sin contratar demasiado pronto.',
      },
    ],
  },
  de: {
    slug: 'cto-technique-ou-agence',
    title: 'Brauchst du einen technischen CTO oder eine Agentur, um dein Produkt zu launchen?',
    excerpt:
      'Vollzeit-CTO oder Agentur für den Launch deines Produkts? Kosten, Zeit, Bindung und Kontrolle im Vergleich — und warum zu frühes Einstellen eine Falle ist.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Entscheidung', 'Founder'],
    body: [
      {
        p: 'Um eine erste Version zu launchen, ist eine Agentur fast immer schneller und weniger bindend als die Einstellung eines CTO. Ein Vollzeit-CTO kostet 90.000 bis 140.000 €/Jahr voll belastet, braucht 2 bis 4 Monate für die Besetzung und bindet dich, bevor du den Markt überhaupt validiert hast. Eine Agentur liefert eine produktionsreife V1 in wenigen Wochen, zum Festpreis, ohne lange Bindung. Ein CTO lohnt sich später — wenn Technologie dein Kerngeschäft ist und das Produkt bereits validiert ist.',
      },
      { h2: 'Die echten Kosten: CTO vs. Agentur' },
      {
        ul: [
          'Angestellter CTO: 90.000 – 140.000 €/Jahr voll belastet, oft + 5 bis 15 % Equity, + 2 bis 4 Monate, um das richtige Profil zu finden.',
          'Fehlbesetzung: 6 bis 12 Monate verloren und ein halbfertiges Produkt, das übernommen werden muss.',
          'Agentur (Khufu): produktionsreife V1 in 7 Tagen, Festpreis 15.000 €, Quellcode gehört dir, keine Bindung darüber hinaus.',
        ],
      },
      { h2: 'Zeit und Time-to-Market' },
      {
        p: 'Zeit ist die knappste Ressource eines Founders. Ein CTO muss gefunden, überzeugt, eingearbeitet werden und dann ein Team aufbauen: rechne mit 4 bis 6 Monaten bis zur ersten wirklich nützlichen Codezeile. Eine Agentur startet in der Woche, in der du unterschreibst. Jeder gewonnene Monat ist ein Monat Umsatz, Lernen und Vorsprung vor deinen Wettbewerbern.',
      },
      { h2: 'Bindung und Kontrolle' },
      {
        p: 'Einen CTO einzustellen ist eine schwere, schwer rückgängig zu machende Bindung: Gehalt, Equity, menschliche Bindung. Ein Fehler kostet teuer, finanziell und emotional. Eine Agentur ist eine begrenzte Bindung: definierter Umfang, ein Liefertermin, und du behältst das Eigentum am Code. Die Kontrolle über das Produkt bleibt bei dir — du entscheidest, die Agentur führt aus.',
      },
      {
        quote:
          'Einen CTO einzustellen, bevor der Markt validiert ist, heißt ein Team zu finanzieren, um ein Produkt zu bauen, das noch niemand gekauft hat.',
      },
      { h2: 'Wann sich ein CTO wirklich lohnt' },
      {
        ul: [
          'Technologie ist dein Wettbewerbsvorteil: proprietäre KI, komplexe Infrastruktur, echte F&E.',
          'Das Produkt ist validiert, mit wiederkehrenden Umsätzen und Bedarf an kontinuierlicher Weiterentwicklung.',
          'Du sammelst Kapital ein und Investoren erwarten einen technischen Mitgründer im Cap Table.',
        ],
      },
      { h2: 'Die richtige Reihenfolge für einen Founder' },
      {
        p: 'In den meisten Fällen ist die optimale Reihenfolge einfach: zuerst eine Agentur, um eine V1 zu liefern und das Produkt am Markt zu testen, dann ein CTO, sobald die Traktion ein internes Team rechtfertigt. Du validierst mit 15.000 €, statt 100.000 € Gehalt zu verbrennen, bevor der erste Kunde da ist. Und dazwischen entwickelt eine monatliche Wartung (ab 1.490 €/Monat) das Produkt weiter, ohne zu früh einzustellen.',
      },
    ],
  },
  it: {
    slug: 'cto-technique-ou-agence',
    title: 'Serve un CTO tecnico o un’agenzia per lanciare il tuo prodotto?',
    excerpt:
      'CTO a tempo pieno o agenzia per lanciare il tuo prodotto? Costo, tempi, impegno e controllo a confronto, e perché assumere troppo presto è una trappola.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Decisione', 'Founder'],
    body: [
      {
        p: 'Per lanciare una prima versione, un’agenzia è quasi sempre più rapida e meno vincolante che assumere un CTO. Un CTO a tempo pieno costa da 90.000 a 140.000 €/anno caricato, richiede da 2 a 4 mesi di selezione e ti vincola prima ancora di aver validato il mercato. Un’agenzia consegna una V1 pronta per la produzione in poche settimane, a prezzo fisso, senza impegni lunghi. Il CTO ha senso più avanti, quando la tecnologia è il tuo core business e il prodotto è già validato.',
      },
      { h2: 'Il costo reale: CTO vs agenzia' },
      {
        ul: [
          'CTO dipendente: 90.000 – 140.000 €/anno caricato, spesso + 5-15% di equity, + 2-4 mesi per trovare il profilo giusto.',
          'Assunzione sbagliata: da 6 a 12 mesi persi e un prodotto costruito a metà da riprendere.',
          'Agenzia (Khufu): V1 pronta per la produzione in 7 giorni, prezzo fisso 15.000 €, codice sorgente tuo, zero impegno oltre.',
        ],
      },
      { h2: 'Tempi e time-to-market' },
      {
        p: 'Il tempo è la risorsa più scarsa di un founder. Un CTO va trovato, convinto, inserito, poi deve costruire un team: conta da 4 a 6 mesi prima della prima riga di codice davvero utile. Un’agenzia parte la settimana in cui firmi. Ogni mese guadagnato è un mese di ricavi, di apprendimento e di vantaggio sui concorrenti.',
      },
      { h2: 'Impegno e controllo' },
      {
        p: 'Assumere un CTO è un impegno pesante e difficile da sciogliere: stipendio, equity, legame umano. Sbagliare costa caro, finanziariamente ed emotivamente. Un’agenzia è un impegno delimitato: perimetro definito, data di consegna, e mantieni la proprietà del codice. Il controllo del prodotto resta a te: decidi tu, l’agenzia esegue.',
      },
      {
        quote:
          'Assumere un CTO prima di aver validato il mercato significa finanziare un team per costruire un prodotto che nessuno ha ancora comprato.',
      },
      { h2: 'Quando assumere un CTO ha davvero senso' },
      {
        ul: [
          'La tecnologia è il tuo vantaggio competitivo: IA proprietaria, infrastruttura complessa, vera R&S.',
          'Il prodotto è validato, con ricavi ricorrenti e bisogno di evoluzione continua.',
          'Stai raccogliendo capitali e gli investitori si aspettano un cofondatore tecnico nel capitale.',
        ],
      },
      { h2: 'Il giusto ordine per un founder' },
      {
        p: 'Nella maggior parte dei casi, l’ordine ottimale è semplice: prima un’agenzia per consegnare una V1 e confrontare il prodotto con il mercato, poi un CTO quando la trazione giustifica un team interno. Validi con 15.000 € invece di bruciare 100.000 € di stipendio prima del primo cliente. E nel mezzo, una manutenzione mensile (da 1.490 €/mese) fa evolvere il prodotto senza assumere troppo presto.',
      },
    ],
  },
  pt: {
    slug: 'cto-technique-ou-agence',
    title: 'Precisas de um CTO técnico ou de uma agência para lançar o teu produto?',
    excerpt:
      'CTO a tempo inteiro ou agência para lançar o teu produto? Custo, prazo, compromisso e controlo comparados, e por que contratar cedo demais é uma armadilha.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Decisão', 'Founder'],
    body: [
      {
        p: 'Para lançar uma primeira versão, uma agência é quase sempre mais rápida e menos comprometedora do que contratar um CTO. Um CTO a tempo inteiro custa de 90 000 a 140 000 €/ano com encargos, exige de 2 a 4 meses de recrutamento e compromete-te antes mesmo de teres validado o mercado. Uma agência entrega uma V1 pronta para produção em semanas, a preço fixo, sem compromisso longo. O CTO faz sentido mais tarde, quando a tecnologia é o teu core business e o produto já está validado.',
      },
      { h2: 'O custo real: CTO vs agência' },
      {
        ul: [
          'CTO efetivo: 90 000 – 140 000 €/ano com encargos, muitas vezes + 5 a 15% de equity, + 2 a 4 meses para encontrar o perfil certo.',
          'Contratação falhada: de 6 a 12 meses perdidos e um produto meio construído para retomar.',
          'Agência (Khufu): V1 pronta para produção em 7 dias, preço fixo 15 000 €, código-fonte teu, zero compromisso além disso.',
        ],
      },
      { h2: 'Prazo e time-to-market' },
      {
        p: 'O tempo é o recurso mais escasso de um founder. Um CTO tem de ser encontrado, convencido, integrado e depois montar uma equipa: conta com 4 a 6 meses antes da primeira linha de código realmente útil. Uma agência arranca na semana em que assinas. Cada mês ganho é um mês de receitas, de aprendizagem e de avanço sobre os concorrentes.',
      },
      { h2: 'Compromisso e controlo' },
      {
        p: 'Contratar um CTO é um compromisso pesado e difícil de desfazer: salário, equity, ligação humana. Errar sai caro, financeira e emocionalmente. Uma agência é um compromisso delimitado: âmbito definido, data de entrega, e ficas com a propriedade do código. O controlo do produto fica contigo: tu decides, a agência executa.',
      },
      {
        quote:
          'Contratar um CTO antes de validar o mercado é financiar uma equipa para construir um produto que ninguém comprou ainda.',
      },
      { h2: 'Quando contratar um CTO faz mesmo sentido' },
      {
        ul: [
          'A tecnologia é a tua vantagem competitiva: IA proprietária, infraestrutura complexa, verdadeira I&D.',
          'O produto está validado, com receitas recorrentes e necessidade de evolução contínua.',
          'Estás a levantar capital e os investidores esperam um cofundador técnico no capital.',
        ],
      },
      { h2: 'A ordem certa para um founder' },
      {
        p: 'Na maioria dos casos, a ordem ideal é simples: primeiro uma agência para entregar uma V1 e confrontar o produto com o mercado, e um CTO depois, quando a tração justificar uma equipa interna. Validas com 15 000 € em vez de queimar 100 000 € em salário antes do primeiro cliente. E, no meio, uma manutenção mensal (a partir de 1 490 €/mês) faz o produto evoluir sem contratar cedo demais.',
      },
    ],
  },
  nl: {
    slug: 'cto-technique-ou-agence',
    title: 'Heb je een technische CTO of een agency nodig om je product te lanceren?',
    excerpt:
      'Fulltime CTO of agency om je product te lanceren? Kosten, doorlooptijd, binding en controle vergeleken — en waarom te vroeg aannemen een valkuil is.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Beslissing', 'Founder'],
    body: [
      {
        p: 'Om een eerste versie te lanceren is een agency bijna altijd sneller en minder bindend dan een CTO aannemen. Een fulltime CTO kost € 90.000 tot € 140.000/jaar inclusief lasten, vergt 2 tot 4 maanden werving en bindt je nog voordat je de markt hebt gevalideerd. Een agency levert een productieklare V1 in weken, tegen een vaste prijs, zonder lange binding. Een CTO loont later — wanneer technologie je kernactiviteit is en het product al gevalideerd is.',
      },
      { h2: 'De echte kosten: CTO vs agency' },
      {
        ul: [
          'CTO in loondienst: € 90.000 – € 140.000/jaar inclusief lasten, vaak + 5 tot 15% equity, + 2 tot 4 maanden om het juiste profiel te vinden.',
          'Foute aanwerving: 6 tot 12 maanden verloren en een half gebouwd product dat je moet overnemen.',
          'Agency (Khufu): productieklare V1 in 7 dagen, vaste prijs € 15.000, broncode is van jou, geen binding daarbuiten.',
        ],
      },
      { h2: 'Doorlooptijd en time-to-market' },
      {
        p: 'Tijd is de schaarste bron van een founder. Een CTO moet gevonden, overtuigd en ingewerkt worden en dan een team opbouwen: reken op 4 tot 6 maanden voor de eerste echt nuttige regel code. Een agency start de week waarin je tekent. Elke gewonnen maand is een maand omzet, leren en voorsprong op je concurrenten.',
      },
      { h2: 'Binding en controle' },
      {
        p: 'Een CTO aannemen is een zware, moeilijk terug te draaien binding: salaris, equity, een menselijke band. Je vergissen kost veel, financieel en emotioneel. Een agency is een afgebakende binding: gedefinieerde scope, een opleverdatum, en jij houdt het eigendom van de code. De controle over het product blijft bij jou — jij beslist, de agency voert uit.',
      },
      {
        quote:
          'Een CTO aannemen voordat de markt gevalideerd is, betekent een team financieren om een product te bouwen dat niemand nog heeft gekocht.',
      },
      { h2: 'Wanneer een CTO aannemen wél zin heeft' },
      {
        ul: [
          'Technologie is je concurrentievoordeel: eigen AI, complexe infrastructuur, echte R&D.',
          'Het product is gevalideerd, met terugkerende omzet en behoefte aan continue evolutie.',
          'Je haalt kapitaal op en investeerders verwachten een technische medeoprichter in de cap table.',
        ],
      },
      { h2: 'De juiste volgorde voor een founder' },
      {
        p: 'In de meeste gevallen is de optimale volgorde simpel: eerst een agency om een V1 te leveren en het product aan de markt te toetsen, daarna een CTO zodra de tractie een intern team rechtvaardigt. Je valideert met € 15.000 in plaats van € 100.000 aan salaris te verbranden vóór je eerste klant. En tussendoor laat een maandelijks onderhoud (vanaf € 1.490/maand) het product evolueren zonder te vroeg aan te nemen.',
      },
    ],
  },
  ar: {
    slug: 'cto-technique-ou-agence',
    title: 'هل تحتاج إلى CTO تقني أم إلى وكالة لإطلاق منتجك؟',
    excerpt:
      'CTO بدوام كامل أم وكالة لإطلاق منتجك؟ مقارنة بين التكلفة والمدة والالتزام والتحكّم، ولماذا التوظيف المبكر جداً فخّ.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['القرار', 'Founder'],
    body: [
      {
        p: 'لإطلاق نسخة أولى، تكون الوكالة في الغالب أسرع وأقل التزاماً من توظيف CTO. فالـCTO بدوام كامل يكلّف 90 000 إلى 140 000 €/سنة محمّلة بالأعباء، ويستغرق توظيفه من شهرين إلى 4 أشهر، ويُلزمك قبل أن تكون قد تحققت من السوق أصلاً. أما الوكالة فتُسلّم V1 جاهزة للإنتاج خلال أسابيع، بسعر ثابت، ودون التزام طويل. الـCTO يصبح منطقياً لاحقاً — حين تكون التقنية هي جوهر عملك ويكون المنتج قد تم التحقق منه.',
      },
      { h2: 'التكلفة الحقيقية: CTO مقابل وكالة' },
      {
        ul: [
          'CTO موظّف: 90 000 – 140 000 €/سنة محمّلة بالأعباء، وغالباً + 5 إلى 15 % equity، + شهرين إلى 4 أشهر لإيجاد الملف المناسب.',
          'توظيف فاشل: من 6 إلى 12 شهراً ضائعة ومنتج مبني إلى النصف يجب استئنافه.',
          'وكالة (Khufu): V1 جاهزة للإنتاج خلال 7 أيام، بسعر ثابت 15 000 €، والكود المصدري لك، ودون أي التزام بعد ذلك.',
        ],
      },
      { h2: 'المدة والوقت حتى السوق' },
      {
        p: 'الوقت هو أندر مورد لدى الـfounder. الـCTO يجب إيجاده وإقناعه وإدماجه، ثم بناء فريق: احسب من 4 إلى 6 أشهر قبل أول سطر كود مفيد فعلاً. أما الوكالة فتبدأ في الأسبوع الذي توقّع فيه. كل شهر تكسبه هو شهر من الإيرادات والتعلّم والتقدّم على منافسيك.',
      },
      { h2: 'الالتزام والتحكّم' },
      {
        p: 'توظيف CTO التزام ثقيل يصعب التراجع عنه: راتب، وequity، ورابط إنساني. والخطأ فيه مكلف مالياً وعاطفياً. أما الوكالة فالتزام محدود: نطاق معرّف، وموعد تسليم، وتحتفظ أنت بملكية الكود. يبقى التحكّم في المنتج لديك — أنت تقرر والوكالة تنفّذ.',
      },
      {
        quote:
          'توظيف CTO قبل التحقق من السوق يعني تمويل فريق لبناء منتج لم يشتره أحد بعد.',
      },
      { h2: 'متى يكون توظيف CTO منطقياً فعلاً' },
      {
        ul: [
          'التقنية هي ميزتك التنافسية: ذكاء اصطناعي خاص، بنية تحتية معقدة، بحث وتطوير حقيقي.',
          'المنتج تم التحقق منه، بإيرادات متكررة وحاجة إلى تطوّر مستمر.',
          'أنت تجمع تمويلاً والمستثمرون يتوقعون شريكاً مؤسِّساً تقنياً في رأس المال.',
        ],
      },
      { h2: 'الترتيب الصحيح للـfounder' },
      {
        p: 'في معظم الحالات، الترتيب الأمثل بسيط: وكالة أولاً لتسليم V1 ومواجهة المنتج بالسوق، ثم CTO لاحقاً حين تبرّر الجاذبية وجود فريق داخلي. تتحقق بـ15 000 € بدلاً من حرق 100 000 € رواتب قبل أول عميل. وفي المنتصف، صيانة شهرية (بدءاً من 1 490 €/شهر) تطوّر المنتج دون التوظيف المبكر جداً.',
      },
    ],
  },
  pl: {
    slug: 'cto-technique-ou-agence',
    title: 'Czy do uruchomienia produktu potrzebujesz technicznego CTO, czy agencji?',
    excerpt:
      'CTO na pełny etat czy agencja do uruchomienia produktu? Porównanie kosztu, czasu, zobowiązania i kontroli — i dlaczego zatrudnianie za wcześnie to pułapka.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Decyzja', 'Founder'],
    body: [
      {
        p: 'Aby uruchomić pierwszą wersję, agencja jest niemal zawsze szybsza i mniej wiążąca niż zatrudnienie CTO. CTO na pełny etat kosztuje 90 000 do 140 000 €/rok z narzutami, wymaga 2 do 4 miesięcy rekrutacji i wiąże Cię, zanim jeszcze zweryfikujesz rynek. Agencja dostarcza gotową do produkcji V1 w kilka tygodni, w stałej cenie, bez długiego zobowiązania. CTO ma sens później — gdy technologia jest Twoim rdzeniem biznesu, a produkt jest już zweryfikowany.',
      },
      { h2: 'Realny koszt: CTO vs agencja' },
      {
        ul: [
          'CTO na etacie: 90 000 – 140 000 €/rok z narzutami, często + 5 do 15% equity, + 2 do 4 miesięcy na znalezienie właściwego profilu.',
          'Nietrafiona rekrutacja: 6 do 12 miesięcy straconych i w połowie zbudowany produkt do przejęcia.',
          'Agencja (Khufu): gotowa do produkcji V1 w 7 dni, stała cena 15 000 €, kod źródłowy Twój, zero zobowiązań poza tym.',
        ],
      },
      { h2: 'Czas i time-to-market' },
      {
        p: 'Czas to najrzadszy zasób foundera. CTO trzeba znaleźć, przekonać, wdrożyć, a potem zbudować zespół: licz od 4 do 6 miesięcy do pierwszej naprawdę użytecznej linii kodu. Agencja startuje w tygodniu, w którym podpisujesz. Każdy zaoszczędzony miesiąc to miesiąc przychodów, nauki i przewagi nad konkurencją.',
      },
      { h2: 'Zobowiązanie i kontrola' },
      {
        p: 'Zatrudnienie CTO to ciężkie, trudne do cofnięcia zobowiązanie: pensja, equity, ludzka więź. Pomyłka kosztuje drogo, finansowo i emocjonalnie. Agencja to zobowiązanie ograniczone: określony zakres, data dostawy, a własność kodu zostaje przy Tobie. Kontrola nad produktem pozostaje u Ciebie — Ty decydujesz, agencja wykonuje.',
      },
      {
        quote:
          'Zatrudnić CTO przed weryfikacją rynku to finansować zespół, by zbudował produkt, którego nikt jeszcze nie kupił.',
      },
      { h2: 'Kiedy zatrudnienie CTO naprawdę ma sens' },
      {
        ul: [
          'Technologia jest Twoją przewagą konkurencyjną: własne AI, złożona infrastruktura, prawdziwe R&D.',
          'Produkt jest zweryfikowany, z powracającymi przychodami i potrzebą ciągłej ewolucji.',
          'Pozyskujesz finansowanie, a inwestorzy oczekują technicznego współzałożyciela w kapitale.',
        ],
      },
      { h2: 'Właściwa kolejność dla foundera' },
      {
        p: 'W większości przypadków optymalna kolejność jest prosta: najpierw agencja, by dostarczyć V1 i skonfrontować produkt z rynkiem, a CTO później, gdy trakcja uzasadni wewnętrzny zespół. Weryfikujesz za 15 000 € zamiast spalać 100 000 € na pensji przed pierwszym klientem. A pomiędzy, miesięczne utrzymanie (od 1 490 €/miesiąc) rozwija produkt bez zatrudniania za wcześnie.',
      },
    ],
  },
  tr: {
    slug: 'cto-technique-ou-agence',
    title: 'Ürününü başlatmak için teknik bir CTO’ya mı yoksa bir ajansa mı ihtiyacın var?',
    excerpt:
      'Ürününü başlatmak için tam zamanlı CTO mu, ajans mı? Maliyet, süre, bağlılık ve kontrol karşılaştırması — ve neden çok erken işe almak bir tuzak.',
    date: '2025-12-10',
    readingMinutes: 6,
    tags: ['Karar', 'Founder'],
    body: [
      {
        p: 'İlk sürümü başlatmak için bir ajans, neredeyse her zaman bir CTO işe almaktan daha hızlı ve daha az bağlayıcıdır. Tam zamanlı bir CTO, tüm yükleriyle yılda 90.000 ila 140.000 €’ya mal olur, işe alımı 2 ila 4 ay sürer ve daha pazarı doğrulamadan seni bağlar. Bir ajans ise üretime hazır bir V1’i haftalar içinde, sabit fiyata, uzun bağlılık olmadan teslim eder. CTO daha sonra anlam kazanır — teknoloji ana işin olduğunda ve ürün zaten doğrulandığında.',
      },
      { h2: 'Gerçek maliyet: CTO mu ajans mı' },
      {
        ul: [
          'Maaşlı CTO: tüm yükleriyle yılda 90.000 – 140.000 €, çoğu zaman + %5-15 equity, + doğru profili bulmak için 2-4 ay.',
          'Yanlış işe alım: 6 ila 12 ay kayıp ve devralınması gereken yarı inşa edilmiş bir ürün.',
          'Ajans (Khufu): 7 günde üretime hazır V1, sabit fiyat 15.000 €, kaynak kodu senin, bunun ötesinde sıfır bağlılık.',
        ],
      },
      { h2: 'Süre ve pazara çıkış zamanı' },
      {
        p: 'Zaman, bir founder’ın en kıt kaynağıdır. Bir CTO’nun bulunması, ikna edilmesi, oryantasyonu ve ardından bir ekip kurması gerekir: gerçekten yararlı ilk kod satırından önce 4 ila 6 ay hesap et. Bir ajans, imzaladığın hafta başlar. Kazanılan her ay, bir aylık gelir, öğrenme ve rakiplerinin önüne geçme demektir.',
      },
      { h2: 'Bağlılık ve kontrol' },
      {
        p: 'Bir CTO işe almak ağır ve geri döndürmesi zor bir bağlılıktır: maaş, equity, insani bağ. Yanılmak pahalıya patlar, hem mali hem duygusal olarak. Bir ajans ise sınırlı bir bağlılıktır: tanımlı kapsam, bir teslim tarihi ve kodun mülkiyeti sende kalır. Ürünün kontrolü sende kalır — sen karar verirsin, ajans uygular.',
      },
      {
        quote:
          'Pazarı doğrulamadan bir CTO işe almak, henüz kimsenin satın almadığı bir ürünü inşa etmek için bir ekibi finanse etmektir.',
      },
      { h2: 'Bir CTO işe almanın gerçekten mantıklı olduğu durumlar' },
      {
        ul: [
          'Teknoloji senin rekabet avantajın: özel AI, karmaşık altyapı, gerçek Ar-Ge.',
          'Ürün doğrulandı, yinelenen gelir ve sürekli evrim ihtiyacı var.',
          'Fon topluyorsun ve yatırımcılar sermayede teknik bir kurucu ortak bekliyor.',
        ],
      },
      { h2: 'Bir founder için doğru sıra' },
      {
        p: 'Çoğu durumda en iyi sıra basittir: bir V1 teslim edip ürünü pazarla sınamak için önce bir ajans, ardından çekiş bir iç ekibi gerektirdiğinde bir CTO. İlk müşterinden önce 100.000 € maaş yakmak yerine 15.000 € ile doğrularsın. Ve arada, aylık bir bakım (aylık 1.490 €’dan başlayan) çok erken işe almadan ürünü geliştirir.',
      },
    ],
  },
}
