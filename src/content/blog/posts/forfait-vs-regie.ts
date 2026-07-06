import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'forfait-vs-regie',
    title: 'Forfait à prix fixe vs régie : lequel coûte le moins cher ?',
    excerpt:
      'Forfait à prix fixe ou régie au temps passé pour votre V1 ? Où va le risque, quand chacun est pertinent, et pourquoi le prix fixe protège le founder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Coûts', 'Décision'],
    body: [
      {
        p: 'Pour une V1, le forfait à prix fixe revient presque toujours moins cher que la régie, parce qu’il transfère le risque de dérapage — délais, périmètre, bugs — du client vers le prestataire. La régie (facturation au temps passé) ne devient intéressante que lorsque le périmètre est réellement mouvant et que vous pilotez l’équipe vous-même. Voici comment trancher, chiffres à l’appui.',
      },
      { h2: 'Forfait ou régie : deux façons de répartir le risque' },
      {
        p: 'Les deux modèles paient le même travail, mais placent le risque de part et d’autre de la table.',
      },
      {
        ul: [
          'Forfait à prix fixe : un périmètre défini à l’avance, un prix ferme, une date de livraison. Le prestataire absorbe les dépassements.',
          'Régie (au temps passé) : vous payez chaque jour ou chaque heure travaillée, quel que soit le résultat. Le périmètre peut bouger, mais la facture aussi.',
        ],
      },
      { h2: 'Où va vraiment le risque' },
      {
        p: 'En régie, chaque imprévu — un bug tenace, une intégration plus longue que prévu, une hésitation sur une fonctionnalité — se traduit par des heures facturées en plus. C’est vous qui payez la courbe d’apprentissage du prestataire. En forfait, ce même imprévu est déjà couvert : le prix ne bouge pas. Le prestataire est incité à aller vite et à cadrer serré, parce que chaque jour gagné est sa marge.',
      },
      { h2: 'Le calcul réel sur une V1' },
      {
        p: 'Prenons une V1 de SaaS classique. En régie à 500 €/jour, un devis « 40 à 50 jours » se transforme presque toujours en 60 à 70 jours réels : 30 000 à 35 000 € au lieu des 20 000 à 25 000 € annoncés. Le forfait Khufu, lui, est fixé à 15 000 €, livré en 7 jours, code source inclus. Vous connaissez le montant final avant de signer, et il ne bougera pas.',
      },
      {
        quote:
          'En régie, vous financez l’incertitude du prestataire. En forfait, il la finance à votre place.',
      },
      { h2: 'Quand la régie reste pertinente' },
      {
        ul: [
          'Le périmètre est réellement inconnu et se découvre au fil de l’eau (R&D, exploration produit).',
          'Vous avez une équipe interne capable de piloter et prioriser jour après jour.',
          'La mission s’étend sur des mois, avec des priorités qui changent chaque semaine.',
        ],
      },
      { h2: 'Notre parti pris' },
      {
        p: 'Pour lancer une V1 et confronter un produit au marché, le périmètre doit justement être fixe : c’est ce qui rend le forfait à la fois possible et protecteur. La régie a du sens plus tard, quand le produit vit et que vous gérez son évolution en interne — ou via une maintenance mensuelle cadrée (à partir de 1 490 €/mois). Le bon réflexe : forfait pour construire, régie ou maintenance pour faire évoluer.',
      },
    ],
  },
  en: {
    slug: 'forfait-vs-regie',
    title: 'Fixed price vs time and materials: which one costs less?',
    excerpt:
      'Fixed-price package or time-and-materials for your V1? Where the risk sits, when each one fits, and why fixed price protects the founder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Costs', 'Decision'],
    body: [
      {
        p: 'For a V1, a fixed-price package almost always costs less than time and materials, because it shifts the risk of overrun — deadlines, scope, bugs — from the client to the provider. Time and materials (billing by the day or hour) only becomes worthwhile when the scope is genuinely moving and you steer the team yourself. Here is how to decide, with numbers.',
      },
      { h2: 'Fixed price or time and materials: two ways to share the risk' },
      {
        p: 'Both models pay for the same work, but they place the risk on opposite sides of the table.',
      },
      {
        ul: [
          'Fixed price: a scope defined up front, a firm price, a delivery date. The provider absorbs any overrun.',
          'Time and materials: you pay for every day or hour worked, whatever the outcome. The scope can move — but so can the invoice.',
        ],
      },
      { h2: 'Where the risk really goes' },
      {
        p: 'With time and materials, every surprise — a stubborn bug, an integration that takes longer than planned, a hesitation over a feature — turns into extra billed hours. You are the one paying for the provider’s learning curve. With a fixed price, that same surprise is already covered: the price does not move. The provider is incentivised to go fast and scope tightly, because every day saved is their margin.',
      },
      { h2: 'The real math on a V1' },
      {
        p: 'Take a typical SaaS V1. At €500/day on time and materials, a quote of 40 to 50 days almost always becomes 60 to 70 actual days: €30,000 to €35,000 instead of the €20,000 to €25,000 announced. The Khufu package, by contrast, is fixed at €15,000, delivered in 7 days, source code included. You know the final amount before you sign, and it will not move.',
      },
      {
        quote:
          'With time and materials, you fund the provider’s uncertainty. With a fixed price, they fund it for you.',
      },
      { h2: 'When time and materials still makes sense' },
      {
        ul: [
          'The scope is genuinely unknown and discovered as you go (R&D, product exploration).',
          'You have an in-house team able to steer and prioritise day after day.',
          'The engagement runs over months, with priorities that shift every week.',
        ],
      },
      { h2: 'Our take' },
      {
        p: 'To launch a V1 and put a product in front of the market, the scope needs to be fixed — which is exactly what makes a fixed price both possible and protective. Time and materials makes sense later, once the product is live and you manage its evolution in-house — or through a scoped monthly maintenance (from €1,490/month). The rule of thumb: fixed price to build, time and materials or maintenance to evolve.',
      },
    ],
  },
  es: {
    slug: 'forfait-vs-regie',
    title: 'Precio fijo vs por tiempo: ¿cuál cuesta menos?',
    excerpt:
      '¿Paquete a precio fijo o facturación por tiempo para tu V1? Dónde está el riesgo, cuándo conviene cada uno y por qué el precio fijo protege al founder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Costos', 'Decisión'],
    body: [
      {
        p: 'Para una V1, un paquete a precio fijo casi siempre cuesta menos que la facturación por tiempo, porque traslada el riesgo de desvío — plazos, alcance, bugs — del cliente al proveedor. La facturación por tiempo (por día o por hora) solo compensa cuando el alcance realmente cambia y tú mismo diriges al equipo. Así se decide, con cifras.',
      },
      { h2: 'Precio fijo o por tiempo: dos formas de repartir el riesgo' },
      {
        p: 'Ambos modelos pagan el mismo trabajo, pero colocan el riesgo en lados opuestos de la mesa.',
      },
      {
        ul: [
          'Precio fijo: un alcance definido de antemano, un precio firme, una fecha de entrega. El proveedor absorbe los desvíos.',
          'Por tiempo: pagas cada día o cada hora trabajada, sea cual sea el resultado. El alcance puede cambiar, pero la factura también.',
        ],
      },
      { h2: 'Adónde va realmente el riesgo' },
      {
        p: 'Con la facturación por tiempo, cada imprevisto — un bug persistente, una integración más larga de lo previsto, una duda sobre una funcionalidad — se traduce en horas facturadas de más. Eres tú quien paga la curva de aprendizaje del proveedor. Con un precio fijo, ese mismo imprevisto ya está cubierto: el precio no se mueve. El proveedor tiene el incentivo de ir rápido y acotar bien, porque cada día ganado es su margen.',
      },
      { h2: 'El cálculo real en una V1' },
      {
        p: 'Tomemos una V1 de SaaS típica. A 500 €/día por tiempo, un presupuesto de 40 a 50 días casi siempre se convierte en 60 a 70 días reales: 30 000 a 35 000 € en lugar de los 20 000 a 25 000 € anunciados. El paquete de Khufu, en cambio, está fijado en 15 000 €, entregado en 7 días, código fuente incluido. Conoces el importe final antes de firmar, y no se moverá.',
      },
      {
        quote:
          'Con la facturación por tiempo, financias la incertidumbre del proveedor. Con un precio fijo, la financia él por ti.',
      },
      { h2: 'Cuándo la facturación por tiempo sigue teniendo sentido' },
      {
        ul: [
          'El alcance es realmente desconocido y se descubre sobre la marcha (I+D, exploración de producto).',
          'Tienes un equipo interno capaz de dirigir y priorizar día a día.',
          'El proyecto se extiende durante meses, con prioridades que cambian cada semana.',
        ],
      },
      { h2: 'Nuestra postura' },
      {
        p: 'Para lanzar una V1 y confrontar un producto con el mercado, el alcance debe ser fijo: es justo lo que hace que el precio fijo sea posible y protector. La facturación por tiempo tiene sentido más adelante, cuando el producto ya vive y gestionas su evolución internamente, o mediante un mantenimiento mensual acotado (desde 1 490 €/mes). La regla práctica: precio fijo para construir, por tiempo o mantenimiento para evolucionar.',
      },
    ],
  },
  de: {
    slug: 'forfait-vs-regie',
    title: 'Festpreis vs. Aufwand: Was kostet weniger?',
    excerpt:
      'Festpreis-Paket oder Abrechnung nach Aufwand für deine V1? Wo das Risiko liegt, wann was passt und warum der Festpreis den Founder schützt.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Kosten', 'Entscheidung'],
    body: [
      {
        p: 'Für eine V1 kostet ein Festpreis-Paket fast immer weniger als die Abrechnung nach Aufwand, weil es das Risiko von Überschreitungen — Termine, Umfang, Bugs — vom Kunden auf den Dienstleister verlagert. Die Abrechnung nach Aufwand (pro Tag oder Stunde) lohnt sich nur, wenn der Umfang wirklich beweglich ist und du das Team selbst steuerst. So entscheidest du, mit Zahlen.',
      },
      { h2: 'Festpreis oder Aufwand: zwei Wege, das Risiko zu verteilen' },
      {
        p: 'Beide Modelle bezahlen dieselbe Arbeit, aber sie legen das Risiko auf entgegengesetzte Seiten des Tisches.',
      },
      {
        ul: [
          'Festpreis: ein vorab definierter Umfang, ein fester Preis, ein Liefertermin. Der Dienstleister trägt jede Überschreitung.',
          'Nach Aufwand: du zahlst jeden gearbeiteten Tag oder jede Stunde, unabhängig vom Ergebnis. Der Umfang kann sich ändern — die Rechnung aber auch.',
        ],
      },
      { h2: 'Wohin das Risiko wirklich wandert' },
      {
        p: 'Bei Abrechnung nach Aufwand wird jede Überraschung — ein hartnäckiger Bug, eine Integration, die länger dauert als geplant, ein Zögern bei einer Funktion — zu zusätzlich abgerechneten Stunden. Du zahlst die Lernkurve des Dienstleisters. Beim Festpreis ist genau diese Überraschung bereits abgedeckt: Der Preis bewegt sich nicht. Der Dienstleister hat den Anreiz, schnell zu arbeiten und den Umfang eng zu fassen, denn jeder gesparte Tag ist seine Marge.',
      },
      { h2: 'Die echte Rechnung bei einer V1' },
      {
        p: 'Nimm eine typische SaaS-V1. Bei 500 €/Tag nach Aufwand wird aus einem Angebot von 40 bis 50 Tagen fast immer 60 bis 70 tatsächliche Tage: 30.000 bis 35.000 € statt der angekündigten 20.000 bis 25.000 €. Das Khufu-Paket dagegen liegt fest bei 15.000 €, geliefert in 7 Tagen, Quellcode inklusive. Du kennst den Endbetrag vor der Unterschrift, und er bewegt sich nicht.',
      },
      {
        quote:
          'Nach Aufwand finanzierst du die Unsicherheit des Dienstleisters. Beim Festpreis finanziert er sie für dich.',
      },
      { h2: 'Wann Abrechnung nach Aufwand weiterhin sinnvoll ist' },
      {
        ul: [
          'Der Umfang ist wirklich unbekannt und ergibt sich erst nach und nach (F&E, Produkt-Exploration).',
          'Du hast ein internes Team, das Tag für Tag steuern und priorisieren kann.',
          'Das Mandat läuft über Monate, mit Prioritäten, die sich jede Woche ändern.',
        ],
      },
      { h2: 'Unsere Haltung' },
      {
        p: 'Um eine V1 zu starten und ein Produkt am Markt zu testen, muss der Umfang gerade fest sein — genau das macht den Festpreis möglich und schützend. Abrechnung nach Aufwand ergibt später Sinn, wenn das Produkt lebt und du seine Weiterentwicklung intern steuerst — oder über eine klar umrissene monatliche Wartung (ab 1.490 €/Monat). Die Faustregel: Festpreis zum Bauen, Aufwand oder Wartung zum Weiterentwickeln.',
      },
    ],
  },
  it: {
    slug: 'forfait-vs-regie',
    title: 'Prezzo fisso vs a consumo: quale costa meno?',
    excerpt:
      'Pacchetto a prezzo fisso o fatturazione a consumo per la tua V1? Dove sta il rischio, quando conviene ciascuno e perché il prezzo fisso protegge il founder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Costi', 'Decisione'],
    body: [
      {
        p: 'Per una V1, un pacchetto a prezzo fisso costa quasi sempre meno della fatturazione a consumo, perché sposta il rischio di sforamento — tempi, perimetro, bug — dal cliente al fornitore. La fatturazione a consumo (a giornata o a ora) conviene solo quando il perimetro è davvero mobile e sei tu a guidare il team. Ecco come decidere, numeri alla mano.',
      },
      { h2: 'Prezzo fisso o a consumo: due modi di ripartire il rischio' },
      {
        p: 'Entrambi i modelli pagano lo stesso lavoro, ma mettono il rischio su lati opposti del tavolo.',
      },
      {
        ul: [
          'Prezzo fisso: un perimetro definito in anticipo, un prezzo fermo, una data di consegna. Il fornitore assorbe gli sforamenti.',
          'A consumo: paghi ogni giornata o ogni ora lavorata, qualunque sia il risultato. Il perimetro può cambiare, ma anche la fattura.',
        ],
      },
      { h2: 'Dove va davvero il rischio' },
      {
        p: 'Con la fatturazione a consumo, ogni imprevisto — un bug ostinato, un’integrazione più lunga del previsto, un’esitazione su una funzionalità — si traduce in ore fatturate in più. Sei tu a pagare la curva di apprendimento del fornitore. Con un prezzo fisso, quello stesso imprevisto è già coperto: il prezzo non si muove. Il fornitore è incentivato ad andare veloce e a definire un perimetro stretto, perché ogni giorno guadagnato è il suo margine.',
      },
      { h2: 'Il calcolo reale su una V1' },
      {
        p: 'Prendiamo una V1 di SaaS tipica. A 500 €/giorno a consumo, un preventivo di 40-50 giorni diventa quasi sempre 60-70 giorni reali: 30.000-35.000 € invece dei 20.000-25.000 € annunciati. Il pacchetto Khufu, invece, è fissato a 15.000 €, consegnato in 7 giorni, codice sorgente incluso. Conosci l’importo finale prima di firmare, e non si muoverà.',
      },
      {
        quote:
          'A consumo, finanzi l’incertezza del fornitore. A prezzo fisso, la finanzia lui al posto tuo.',
      },
      { h2: 'Quando la fatturazione a consumo ha ancora senso' },
      {
        ul: [
          'Il perimetro è davvero sconosciuto e si scopre strada facendo (R&S, esplorazione di prodotto).',
          'Hai un team interno in grado di guidare e dare priorità giorno dopo giorno.',
          'L’incarico si estende su mesi, con priorità che cambiano ogni settimana.',
        ],
      },
      { h2: 'La nostra posizione' },
      {
        p: 'Per lanciare una V1 e confrontare un prodotto con il mercato, il perimetro deve essere proprio fisso: è esattamente ciò che rende il prezzo fisso possibile e protettivo. La fatturazione a consumo ha senso più avanti, quando il prodotto è vivo e ne gestisci l’evoluzione internamente — o tramite una manutenzione mensile ben definita (da 1.490 €/mese). La regola pratica: prezzo fisso per costruire, a consumo o manutenzione per far evolvere.',
      },
    ],
  },
  pt: {
    slug: 'forfait-vs-regie',
    title: 'Preço fixo vs por tempo: qual custa menos?',
    excerpt:
      'Pacote a preço fixo ou faturação por tempo para a tua V1? Onde está o risco, quando cada um faz sentido e por que o preço fixo protege o founder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Custos', 'Decisão'],
    body: [
      {
        p: 'Para uma V1, um pacote a preço fixo quase sempre custa menos do que a faturação por tempo, porque transfere o risco de derrapagem — prazos, âmbito, bugs — do cliente para o prestador. A faturação por tempo (por dia ou por hora) só compensa quando o âmbito é realmente móvel e és tu a conduzir a equipa. Eis como decidir, com números.',
      },
      { h2: 'Preço fixo ou por tempo: duas formas de repartir o risco' },
      {
        p: 'Ambos os modelos pagam o mesmo trabalho, mas colocam o risco em lados opostos da mesa.',
      },
      {
        ul: [
          'Preço fixo: um âmbito definido à partida, um preço firme, uma data de entrega. O prestador absorve as derrapagens.',
          'Por tempo: pagas cada dia ou cada hora trabalhada, qualquer que seja o resultado. O âmbito pode mudar, mas a fatura também.',
        ],
      },
      { h2: 'Para onde vai realmente o risco' },
      {
        p: 'Com a faturação por tempo, cada imprevisto — um bug persistente, uma integração mais longa do que o previsto, uma hesitação sobre uma funcionalidade — traduz-se em horas faturadas a mais. És tu que pagas a curva de aprendizagem do prestador. Com um preço fixo, esse mesmo imprevisto já está coberto: o preço não se mexe. O prestador tem o incentivo de ir depressa e definir um âmbito apertado, porque cada dia ganho é a sua margem.',
      },
      { h2: 'A conta real numa V1' },
      {
        p: 'Toma uma V1 de SaaS típica. A 500 €/dia por tempo, um orçamento de 40 a 50 dias torna-se quase sempre 60 a 70 dias reais: 30 000 a 35 000 € em vez dos 20 000 a 25 000 € anunciados. O pacote Khufu, por sua vez, está fixado em 15 000 €, entregue em 7 dias, código-fonte incluído. Conheces o montante final antes de assinar, e ele não vai mexer.',
      },
      {
        quote:
          'Por tempo, financias a incerteza do prestador. A preço fixo, é ele que a financia por ti.',
      },
      { h2: 'Quando a faturação por tempo ainda faz sentido' },
      {
        ul: [
          'O âmbito é realmente desconhecido e vai-se descobrindo ao longo do caminho (I&D, exploração de produto).',
          'Tens uma equipa interna capaz de conduzir e priorizar dia após dia.',
          'O projeto estende-se por meses, com prioridades que mudam todas as semanas.',
        ],
      },
      { h2: 'A nossa posição' },
      {
        p: 'Para lançar uma V1 e confrontar um produto com o mercado, o âmbito precisa mesmo de ser fixo: é exatamente o que torna o preço fixo possível e protetor. A faturação por tempo faz sentido mais tarde, quando o produto está vivo e geres a sua evolução internamente — ou através de uma manutenção mensal bem definida (a partir de 1 490 €/mês). A regra prática: preço fixo para construir, por tempo ou manutenção para evoluir.',
      },
    ],
  },
  nl: {
    slug: 'forfait-vs-regie',
    title: 'Vaste prijs vs nacalculatie: wat kost minder?',
    excerpt:
      'Vaste prijs of nacalculatie voor je V1? Waar het risico ligt, wanneer elk model past en waarom een vaste prijs de founder beschermt.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Kosten', 'Beslissing'],
    body: [
      {
        p: 'Voor een V1 is een pakket met vaste prijs bijna altijd goedkoper dan nacalculatie, omdat het het risico op uitloop — deadlines, scope, bugs — van de klant naar de leverancier verschuift. Nacalculatie (afrekenen per dag of uur) loont alleen wanneer de scope echt beweegt en je het team zelf aanstuurt. Zo beslis je, met cijfers.',
      },
      { h2: 'Vaste prijs of nacalculatie: twee manieren om het risico te verdelen' },
      {
        p: 'Beide modellen betalen hetzelfde werk, maar leggen het risico aan tegenovergestelde kanten van de tafel.',
      },
      {
        ul: [
          'Vaste prijs: een vooraf bepaalde scope, een vaste prijs, een opleverdatum. De leverancier absorbeert elke uitloop.',
          'Nacalculatie: je betaalt elke gewerkte dag of elk uur, wat het resultaat ook is. De scope kan bewegen, maar de factuur ook.',
        ],
      },
      { h2: 'Waar het risico echt heen gaat' },
      {
        p: 'Bij nacalculatie vertaalt elke verrassing — een hardnekkige bug, een integratie die langer duurt dan gepland, twijfel over een functie — zich in extra gefactureerde uren. Jij betaalt de leercurve van de leverancier. Bij een vaste prijs is diezelfde verrassing al gedekt: de prijs beweegt niet. De leverancier heeft er belang bij om snel te werken en de scope strak te houden, want elke gewonnen dag is zijn marge.',
      },
      { h2: 'De echte rekensom bij een V1' },
      {
        p: 'Neem een typische SaaS-V1. Bij € 500/dag op nacalculatie wordt een offerte van 40 tot 50 dagen bijna altijd 60 tot 70 werkelijke dagen: € 30.000 tot € 35.000 in plaats van de aangekondigde € 20.000 tot € 25.000. Het Khufu-pakket daarentegen ligt vast op € 15.000, geleverd in 7 dagen, broncode inbegrepen. Je kent het eindbedrag vóór je tekent, en het beweegt niet.',
      },
      {
        quote:
          'Bij nacalculatie financier jij de onzekerheid van de leverancier. Bij een vaste prijs financiert hij die voor jou.',
      },
      { h2: 'Wanneer nacalculatie wél zinvol blijft' },
      {
        ul: [
          'De scope is echt onbekend en wordt gaandeweg ontdekt (R&D, productexploratie).',
          'Je hebt een intern team dat dag na dag kan sturen en prioriteren.',
          'De opdracht loopt over maanden, met prioriteiten die elke week veranderen.',
        ],
      },
      { h2: 'Ons standpunt' },
      {
        p: 'Om een V1 te lanceren en een product aan de markt te toetsen, moet de scope juist vast zijn — precies wat een vaste prijs zowel mogelijk als beschermend maakt. Nacalculatie is later zinvol, wanneer het product leeft en je de evolutie intern beheert — of via een duidelijk afgebakend maandelijks onderhoud (vanaf € 1.490/maand). De vuistregel: vaste prijs om te bouwen, nacalculatie of onderhoud om te laten evolueren.',
      },
    ],
  },
  ar: {
    slug: 'forfait-vs-regie',
    title: 'السعر الثابت مقابل العمل بالوقت: أيهما أقل تكلفة؟',
    excerpt:
      'باقة بسعر ثابت أم فوترة بالوقت لإطلاق V1؟ أين يقع الخطر، ومتى يناسب كل نموذج، ولماذا يحمي السعر الثابت الـfounder.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['التكاليف', 'القرار'],
    body: [
      {
        p: 'بالنسبة إلى V1، تكون الباقة بسعر ثابت أقل تكلفة في الغالب من الفوترة بالوقت، لأنها تنقل خطر التجاوز — المواعيد والنطاق والأخطاء البرمجية — من العميل إلى المزوّد. أما الفوترة بالوقت (باليوم أو بالساعة) فلا تصبح مجدية إلا حين يكون النطاق متغيّراً فعلاً وتتولى أنت قيادة الفريق. إليك كيف تقرر، بالأرقام.',
      },
      { h2: 'السعر الثابت أم العمل بالوقت: طريقتان لتوزيع الخطر' },
      {
        p: 'كلا النموذجين يدفع مقابل العمل نفسه، لكنهما يضعان الخطر على طرفين متقابلين من الطاولة.',
      },
      {
        ul: [
          'السعر الثابت: نطاق محدّد مسبقاً، وسعر ثابت، وموعد تسليم. المزوّد يتحمّل أي تجاوز.',
          'العمل بالوقت: تدفع مقابل كل يوم أو ساعة عمل، أياً كانت النتيجة. النطاق قد يتغيّر، لكن الفاتورة أيضاً.',
        ],
      },
      { h2: 'إلى أين يذهب الخطر فعلاً' },
      {
        p: 'مع الفوترة بالوقت، يتحوّل كل طارئ — خطأ برمجي عنيد، أو تكامل يستغرق وقتاً أطول من المتوقع، أو تردّد بشأن ميزة — إلى ساعات إضافية مفوترة. أنت من يدفع ثمن منحنى تعلّم المزوّد. أما مع السعر الثابت، فهذا الطارئ نفسه مغطّى مسبقاً: السعر لا يتغيّر. والمزوّد لديه حافز للإسراع وضبط النطاق بإحكام، لأن كل يوم يوفّره هو هامش ربحه.',
      },
      { h2: 'الحساب الحقيقي على V1' },
      {
        p: 'لنأخذ V1 نموذجية لمنتج SaaS. بسعر 500 €/يوم بالوقت، غالباً ما يتحوّل عرض من 40 إلى 50 يوماً إلى 60 حتى 70 يوماً فعلياً: أي 30 000 إلى 35 000 € بدلاً من 20 000 إلى 25 000 € المعلنة. أما باقة Khufu فهي محددة عند 15 000 €، تُسلَّم خلال 7 أيام، مع الكود المصدري. تعرف المبلغ النهائي قبل التوقيع، ولن يتغيّر.',
      },
      {
        quote:
          'بالعمل بالوقت، أنت تموّل عدم يقين المزوّد. بالسعر الثابت، هو من يموّله بدلاً عنك.',
      },
      { h2: 'متى يبقى العمل بالوقت مناسباً' },
      {
        ul: [
          'النطاق مجهول فعلاً ويُكتشف تدريجياً (بحث وتطوير، استكشاف المنتج).',
          'لديك فريق داخلي قادر على القيادة وترتيب الأولويات يوماً بعد يوم.',
          'المهمة تمتد لأشهر، بأولويات تتغيّر كل أسبوع.',
        ],
      },
      { h2: 'موقفنا' },
      {
        p: 'لإطلاق V1 ومواجهة المنتج بالسوق، يجب أن يكون النطاق ثابتاً بالضبط: وهذا تحديداً ما يجعل السعر الثابت ممكناً وحامياً. أما العمل بالوقت فيصبح منطقياً لاحقاً، حين يصبح المنتج حياً وتدير تطوّره داخلياً — أو عبر صيانة شهرية محددة (بدءاً من 1 490 €/شهر). القاعدة العملية: السعر الثابت للبناء، والعمل بالوقت أو الصيانة للتطوير.',
      },
    ],
  },
  pl: {
    slug: 'forfait-vs-regie',
    title: 'Stała cena vs rozliczenie za czas: co kosztuje mniej?',
    excerpt:
      'Pakiet w stałej cenie czy rozliczenie za czas dla Twojej V1? Gdzie leży ryzyko, kiedy każdy model pasuje i dlaczego stała cena chroni foundera.',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Koszty', 'Decyzja'],
    body: [
      {
        p: 'W przypadku V1 pakiet w stałej cenie prawie zawsze kosztuje mniej niż rozliczenie za czas, ponieważ przenosi ryzyko przekroczeń — terminów, zakresu, błędów — z klienta na wykonawcę. Rozliczenie za czas (za dzień lub godzinę) opłaca się tylko wtedy, gdy zakres naprawdę się zmienia i sam sterujesz zespołem. Oto jak zdecydować, z liczbami.',
      },
      { h2: 'Stała cena czy za czas: dwa sposoby na podział ryzyka' },
      {
        p: 'Oba modele płacą za tę samą pracę, ale kładą ryzyko po przeciwnych stronach stołu.',
      },
      {
        ul: [
          'Stała cena: zakres ustalony z góry, sztywna cena, termin dostawy. Wykonawca bierze na siebie każde przekroczenie.',
          'Za czas: płacisz za każdy przepracowany dzień lub godzinę, niezależnie od wyniku. Zakres może się zmieniać — ale faktura też.',
        ],
      },
      { h2: 'Dokąd naprawdę idzie ryzyko' },
      {
        p: 'Przy rozliczeniu za czas każda niespodzianka — uporczywy błąd, integracja dłuższa niż zakładano, wahanie co do funkcji — zamienia się w dodatkowe fakturowane godziny. To Ty płacisz za krzywą uczenia się wykonawcy. Przy stałej cenie ta sama niespodzianka jest już pokryta: cena się nie zmienia. Wykonawca ma bodziec, by działać szybko i ciasno definiować zakres, bo każdy zaoszczędzony dzień to jego marża.',
      },
      { h2: 'Realny rachunek dla V1' },
      {
        p: 'Weźmy typową V1 SaaS. Przy 500 €/dzień za czas wycena na 40–50 dni prawie zawsze zamienia się w 60–70 dni rzeczywistych: 30 000 do 35 000 € zamiast zapowiadanych 20 000 do 25 000 €. Pakiet Khufu jest natomiast ustalony na 15 000 €, dostarczony w 7 dni, z kodem źródłowym. Znasz końcową kwotę przed podpisaniem i ona się nie zmieni.',
      },
      {
        quote:
          'Przy rozliczeniu za czas finansujesz niepewność wykonawcy. Przy stałej cenie to on finansuje ją za Ciebie.',
      },
      { h2: 'Kiedy rozliczenie za czas wciąż ma sens' },
      {
        ul: [
          'Zakres jest naprawdę nieznany i odkrywany na bieżąco (R&D, eksploracja produktu).',
          'Masz wewnętrzny zespół zdolny sterować i priorytetyzować dzień po dniu.',
          'Projekt rozciąga się na miesiące, z priorytetami zmieniającymi się co tydzień.',
        ],
      },
      { h2: 'Nasze stanowisko' },
      {
        p: 'Aby wystartować z V1 i skonfrontować produkt z rynkiem, zakres musi być właśnie stały — to dokładnie sprawia, że stała cena jest zarazem możliwa i chroniąca. Rozliczenie za czas ma sens później, gdy produkt żyje i zarządzasz jego rozwojem wewnętrznie — albo przez jasno określone miesięczne utrzymanie (od 1 490 €/miesiąc). Zasada praktyczna: stała cena, by budować, za czas lub utrzymanie, by rozwijać.',
      },
    ],
  },
  tr: {
    slug: 'forfait-vs-regie',
    title: 'Sabit fiyat mı, zaman bazlı mı: hangisi daha ucuz?',
    excerpt:
      'V1’in için sabit fiyatlı paket mi, zaman bazlı faturalama mı? Risk nerede, hangisi ne zaman uygun ve sabit fiyat founder’ı neden korur?',
    date: '2026-06-03',
    readingMinutes: 6,
    tags: ['Maliyet', 'Karar'],
    body: [
      {
        p: 'Bir V1 için sabit fiyatlı paket, neredeyse her zaman zaman bazlı faturalamadan daha ucuza gelir; çünkü aşım riskini — süreler, kapsam, hatalar — müşteriden tedarikçiye kaydırır. Zaman bazlı faturalama (gün veya saat üzerinden) yalnızca kapsam gerçekten değişkense ve ekibi kendin yönetiyorsan işe yarar. İşte rakamlarla nasıl karar verilir.',
      },
      { h2: 'Sabit fiyat mı, zaman bazlı mı: riski paylaşmanın iki yolu' },
      {
        p: 'Her iki model de aynı işin bedelini öder, ama riski masanın karşıt taraflarına koyar.',
      },
      {
        ul: [
          'Sabit fiyat: önceden tanımlı bir kapsam, kesin bir fiyat, bir teslim tarihi. Aşımı tedarikçi üstlenir.',
          'Zaman bazlı: sonuç ne olursa olsun, çalışılan her gün veya saat için ödersin. Kapsam değişebilir — ama fatura da.',
        ],
      },
      { h2: 'Risk gerçekte nereye gider' },
      {
        p: 'Zaman bazlı faturalamada her sürpriz — inatçı bir hata, planlanandan uzun süren bir entegrasyon, bir özellik konusunda tereddüt — fazladan faturalanan saatlere dönüşür. Tedarikçinin öğrenme eğrisini sen ödersin. Sabit fiyatta ise aynı sürpriz zaten kapsanmıştır: fiyat oynamaz. Tedarikçinin hızlı gitmeye ve kapsamı sıkı tutmaya teşviki vardır, çünkü kazandığı her gün onun kârıdır.',
      },
      { h2: 'Bir V1’de gerçek hesap' },
      {
        p: 'Tipik bir SaaS V1’i ele alalım. Zaman bazlı 500 €/gün ile, 40-50 günlük bir teklif neredeyse her zaman gerçekte 60-70 güne dönüşür: duyurulan 20 000-25 000 € yerine 30 000-35 000 €. Khufu paketi ise 15 000 €’ya sabittir, 7 günde teslim edilir, kaynak kodu dahil. Nihai tutarı imzadan önce bilirsin ve oynamaz.',
      },
      {
        quote:
          'Zaman bazlıda tedarikçinin belirsizliğini sen finanse edersin. Sabit fiyatta onu senin yerine o finanse eder.',
      },
      { h2: 'Zaman bazlı faturalama ne zaman hâlâ anlamlıdır' },
      {
        ul: [
          'Kapsam gerçekten bilinmiyor ve yol boyunca keşfediliyor (Ar-Ge, ürün keşfi).',
          'Gün gün yönlendirip önceliklendirebilecek bir iç ekibin var.',
          'İş aylara yayılıyor ve öncelikler her hafta değişiyor.',
        ],
      },
      { h2: 'Bizim duruşumuz' },
      {
        p: 'Bir V1’i piyasaya çıkarıp ürünü pazarla sınamak için kapsamın tam da sabit olması gerekir — sabit fiyatı hem mümkün hem koruyucu kılan da budur. Zaman bazlı faturalama daha sonra, ürün canlıyken ve gelişimini şirket içinde yönetirken — ya da net tanımlı aylık bakımla (aylık 1 490 €’dan başlayan) — anlam kazanır. Pratik kural: inşa etmek için sabit fiyat, geliştirmek için zaman bazlı ya da bakım.',
      },
    ],
  },
}
