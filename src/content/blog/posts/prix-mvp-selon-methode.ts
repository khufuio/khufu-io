import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'prix-mvp-selon-methode',
    title: "Prix d’un MVP : à quoi s’attendre selon la méthode",
    excerpt:
      "Prix d’un MVP selon la méthode : no-code, freelance, agence ou forfait V1. Fourchettes réelles, coûts cachés et la bonne option selon votre situation.",
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Coûts'],
    body: [
      {
        p: "Le prix d’un MVP va de 3 000 € en no-code à plus de 80 000 € en agence classique, avec un point d’équilibre autour de 15 000 € pour un forfait V1 à prix fixe. Mais le chiffre affiché ne dit rien du coût réel : chaque méthode cache des frais, des risques ou de la dette qui n’apparaissent que plus tard. Voici ce que chaque option coûte vraiment, et laquelle choisir selon votre situation.",
      },
      { h2: 'Les quatre méthodes et leurs fourchettes' },
      {
        ul: [
          "No-code (Bubble, Webflow, Glide…) : 3 000 – 15 000 €. Le plus rapide et le moins cher pour valider une idée simple.",
          "Freelance : 300 – 700 €/jour, soit 12 000 – 50 000 € pour un MVP. Qualité très variable, dépendance à une seule personne.",
          "Agence classique : 40 000 – 100 000 € sur 3 à 6 mois. Process lourd, devis flous, allers-retours interminables.",
          "Forfait V1 à prix fixe (Khufu) : 15 000 €, livré en 7 jours, code source à vous.",
        ],
      },
      { h2: 'Ce que chaque option cache' },
      {
        p: "Le prix d’appel est rarement le prix final. En no-code, les abonnements aux plateformes et plugins gonflent avec le volume, et vous ne récupérez aucun code propre : passer un plafond signifie tout réécrire. Le freelance concentre le risque sur une personne — indisponibilité, code non documenté, départ imprévisible. L’agence classique facture au temps passé : chaque changement de périmètre devient un avenant, et le budget dérape.",
      },
      {
        ul: [
          "No-code : coûts d’abonnement récurrents, plafond technique, aucune propriété du code.",
          "Freelance : dépendance à une personne, qualité inégale, maintenance incertaine.",
          "Agence : délais longs, facturation à l’heure, périmètre qui dérive.",
          "Forfait V1 : périmètre serré à respecter — tout ce qui sort du cadre initial passe en maintenance.",
        ],
      },
      { h2: 'Le vrai coût caché : le temps' },
      {
        p: "Le facteur le plus sous-estimé n’est pas le devis, c’est le time-to-market. Un MVP livré en 6 mois, c’est 6 mois sans utilisateurs, sans retours et sans revenus — pendant qu’un concurrent avance. Un MVP en vrai code, livré en une semaine sur une stack de production (Next.js, NestJS, PostgreSQL), vous fait gagner ce temps sans payer la dette technique du no-code.",
      },
      {
        quote:
          "Le prix d’un MVP ne se mesure pas au devis, mais à ce qu’il coûte de le réécrire — ou d’arriver trop tard.",
      },
      { h2: 'Quelle méthode selon votre situation' },
      {
        ul: [
          "Idée non validée, budget minime : no-code pour tester en quelques jours, en assumant de jeter le prototype ensuite.",
          "Besoin ponctuel et précis, vous savez piloter la technique : un bon freelance peut suffire.",
          "Produit destiné à grandir, vous voulez du code à vous et une mise sur le marché rapide : un forfait V1 à prix fixe (15 000 €, livré en 7 jours) offre le meilleur rapport vitesse/qualité/risque.",
        ],
      },
      {
        p: "Il n’y a pas de méthode universelle : il y a celle qui correspond à votre étape. La question n’est pas « quel est le prix le plus bas », mais « quelle option me coûtera le moins cher dans un an ».",
      },
    ],
  },
  en: {
    slug: 'prix-mvp-selon-methode',
    title: 'MVP pricing: what to expect depending on the method',
    excerpt:
      'MVP pricing by method: no-code, freelance, agency or a fixed-price V1. Real ranges, hidden costs and the right option for your situation.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Costs'],
    body: [
      {
        p: 'An MVP costs anywhere from €3,000 with no-code to over €80,000 with a traditional agency, with a sweet spot around €15,000 for a fixed-price V1. But the sticker price tells you nothing about the real cost: every method hides fees, risks or debt that only surface later. Here is what each option truly costs, and which one to pick based on your situation.',
      },
      { h2: 'The four methods and their price ranges' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): €3,000 – €15,000. The fastest and cheapest way to validate a simple idea.',
          'Freelance: €300 – €700/day, i.e. €12,000 – €50,000 for an MVP. Highly variable quality, reliance on a single person.',
          'Traditional agency: €40,000 – €100,000 over 3 to 6 months. Heavy process, vague quotes, endless back-and-forth.',
          'Fixed-price V1 (Khufu): €15,000, delivered in 7 days, source code yours to keep.',
        ],
      },
      { h2: 'What each option hides' },
      {
        p: 'The entry price is rarely the final price. With no-code, platform and plugin subscriptions balloon with volume, and you get no clean codebase: hitting a ceiling means rewriting everything. Freelance concentrates the risk on one person — unavailability, undocumented code, an unpredictable exit. Traditional agencies bill by the hour: every scope change becomes an addendum, and the budget slips.',
      },
      {
        ul: [
          'No-code: recurring subscription costs, a technical ceiling, no ownership of the code.',
          'Freelance: single-person dependency, uneven quality, uncertain maintenance.',
          'Agency: long timelines, hourly billing, scope creep.',
          'Fixed-price V1: a tight scope to respect — anything outside the initial frame moves to maintenance.',
        ],
      },
      { h2: 'The real hidden cost: time' },
      {
        p: 'The most underestimated factor is not the quote, it is time-to-market. An MVP delivered in 6 months means 6 months with no users, no feedback and no revenue — while a competitor moves ahead. An MVP in real code, delivered in one week on a production stack (Next.js, NestJS, PostgreSQL), buys you that time without paying the technical debt of no-code.',
      },
      {
        quote:
          'The price of an MVP is not measured by the quote, but by what it costs to rewrite it — or to arrive too late.',
      },
      { h2: 'Which method for your situation' },
      {
        ul: [
          'Unvalidated idea, minimal budget: no-code to test within days, accepting you will throw the prototype away afterwards.',
          'A one-off, well-defined need and you can steer the tech: a good freelance may be enough.',
          'A product meant to grow, you want code you own and a fast time-to-market: a fixed-price V1 (€15,000, delivered in 7 days) offers the best speed/quality/risk ratio.',
        ],
      },
      {
        p: 'There is no universal method — there is the one that fits your stage. The question is not “what is the lowest price”, but “which option will cost me the least a year from now”.',
      },
    ],
  },
  es: {
    slug: 'prix-mvp-selon-methode',
    title: 'Precio de un MVP: qué esperar según el método',
    excerpt:
      'Precio de un MVP según el método: no-code, freelance, agencia o V1 a precio fijo. Rangos reales, costes ocultos y la opción adecuada para tu caso.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Costes'],
    body: [
      {
        p: 'Un MVP cuesta desde 3.000 € con no-code hasta más de 80.000 € con una agencia clásica, con un punto de equilibrio en torno a los 15.000 € para una V1 a precio fijo. Pero la cifra anunciada no dice nada del coste real: cada método esconde gastos, riesgos o deuda que solo aparecen después. Esto es lo que cuesta de verdad cada opción, y cuál elegir según tu situación.',
      },
      { h2: 'Los cuatro métodos y sus rangos' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. Lo más rápido y barato para validar una idea simple.',
          'Freelance: 300 – 700 €/día, es decir 12.000 – 50.000 € por un MVP. Calidad muy variable, dependencia de una sola persona.',
          'Agencia clásica: 40.000 – 100.000 € en 3 a 6 meses. Proceso pesado, presupuestos difusos, idas y venidas interminables.',
          'V1 a precio fijo (Khufu): 15.000 €, entregada en 7 días, código fuente para ti.',
        ],
      },
      { h2: 'Lo que esconde cada opción' },
      {
        p: 'El precio de entrada rara vez es el precio final. En no-code, las suscripciones a plataformas y plugins se disparan con el volumen, y no recuperas ningún código limpio: superar un techo significa reescribirlo todo. El freelance concentra el riesgo en una persona: indisponibilidad, código sin documentar, salida imprevisible. La agencia clásica factura por tiempo: cada cambio de alcance se convierte en un anexo, y el presupuesto se descontrola.',
      },
      {
        ul: [
          'No-code: costes de suscripción recurrentes, techo técnico, ninguna propiedad del código.',
          'Freelance: dependencia de una persona, calidad desigual, mantenimiento incierto.',
          'Agencia: plazos largos, facturación por horas, alcance que se descontrola.',
          'V1 a precio fijo: un alcance ajustado que respetar; todo lo que sale del marco inicial pasa a mantenimiento.',
        ],
      },
      { h2: 'El verdadero coste oculto: el tiempo' },
      {
        p: 'El factor más subestimado no es el presupuesto, es el time-to-market. Un MVP entregado en 6 meses son 6 meses sin usuarios, sin feedback y sin ingresos, mientras un competidor avanza. Un MVP en código real, entregado en una semana sobre un stack de producción (Next.js, NestJS, PostgreSQL), te hace ganar ese tiempo sin pagar la deuda técnica del no-code.',
      },
      {
        quote:
          'El precio de un MVP no se mide por el presupuesto, sino por lo que cuesta reescribirlo o llegar demasiado tarde.',
      },
      { h2: 'Qué método según tu situación' },
      {
        ul: [
          'Idea sin validar, presupuesto mínimo: no-code para probar en unos días, asumiendo que luego tirarás el prototipo.',
          'Necesidad puntual y precisa, y sabes dirigir la parte técnica: un buen freelance puede bastar.',
          'Producto pensado para crecer, quieres código propio y salir rápido al mercado: una V1 a precio fijo (15.000 €, entregada en 7 días) ofrece la mejor relación velocidad/calidad/riesgo.',
        ],
      },
      {
        p: 'No hay un método universal: hay el que encaja con tu etapa. La pregunta no es “cuál es el precio más bajo”, sino “cuál opción me costará menos dentro de un año”.',
      },
    ],
  },
  de: {
    slug: 'prix-mvp-selon-methode',
    title: 'MVP-Preis: Was Sie je nach Methode erwartet',
    excerpt:
      'MVP-Preis nach Methode: No-Code, Freelancer, Agentur oder Festpreis-V1. Reale Spannen, versteckte Kosten und die richtige Option für Ihre Lage.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Kosten'],
    body: [
      {
        p: 'Ein MVP kostet zwischen 3.000 € mit No-Code und über 80.000 € bei einer klassischen Agentur, mit einem Sweet Spot um 15.000 € für eine Festpreis-V1. Doch der Angebotspreis sagt nichts über die realen Kosten aus: Jede Methode verbirgt Gebühren, Risiken oder Schulden, die erst später auftauchen. Hier ist, was jede Option wirklich kostet — und welche zu Ihrer Situation passt.',
      },
      { h2: 'Die vier Methoden und ihre Preisspannen' },
      {
        ul: [
          'No-Code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. Am schnellsten und günstigsten, um eine einfache Idee zu validieren.',
          'Freelancer: 300 – 700 €/Tag, also 12.000 – 50.000 € für ein MVP. Stark schwankende Qualität, Abhängigkeit von einer Person.',
          'Klassische Agentur: 40.000 – 100.000 € über 3 bis 6 Monate. Schwerfälliger Prozess, vage Angebote, endloses Hin und Her.',
          'Festpreis-V1 (Khufu): 15.000 €, in 7 Tagen geliefert, Quellcode gehört Ihnen.',
        ],
      },
      { h2: 'Was jede Option verbirgt' },
      {
        p: 'Der Einstiegspreis ist selten der Endpreis. Bei No-Code steigen die Abos für Plattformen und Plugins mit dem Volumen, und Sie erhalten keinen sauberen Code: eine Obergrenze zu überschreiten bedeutet, alles neu zu schreiben. Freelancer bündeln das Risiko auf einer Person — Nichtverfügbarkeit, undokumentierter Code, unvorhersehbarer Abgang. Klassische Agenturen rechnen nach Zeit ab: jede Scope-Änderung wird zum Nachtrag, und das Budget entgleitet.',
      },
      {
        ul: [
          'No-Code: wiederkehrende Abokosten, technische Obergrenze, kein Eigentum am Code.',
          'Freelancer: Abhängigkeit von einer Person, ungleiche Qualität, unsichere Wartung.',
          'Agentur: lange Laufzeiten, Stundenabrechnung, ausufernder Scope.',
          'Festpreis-V1: ein enger Scope, den es einzuhalten gilt — alles außerhalb des ursprünglichen Rahmens geht in die Wartung.',
        ],
      },
      { h2: 'Die wahre versteckte Kostengröße: die Zeit' },
      {
        p: 'Der am meisten unterschätzte Faktor ist nicht das Angebot, sondern die Time-to-Market. Ein in 6 Monaten geliefertes MVP bedeutet 6 Monate ohne Nutzer, ohne Feedback und ohne Umsatz — während ein Wettbewerber vorankommt. Ein MVP in echtem Code, in einer Woche auf einem Produktions-Stack (Next.js, NestJS, PostgreSQL) geliefert, verschafft Ihnen diese Zeit, ohne die technischen Schulden von No-Code zu zahlen.',
      },
      {
        quote:
          'Der Preis eines MVP misst sich nicht am Angebot, sondern daran, was es kostet, es neu zu schreiben — oder zu spät zu kommen.',
      },
      { h2: 'Welche Methode für Ihre Situation' },
      {
        ul: [
          'Unvalidierte Idee, minimales Budget: No-Code, um in wenigen Tagen zu testen — mit der Bereitschaft, den Prototyp danach wegzuwerfen.',
          'Punktueller, klar umrissener Bedarf, und Sie können die Technik steuern: ein guter Freelancer kann reichen.',
          'Ein Produkt, das wachsen soll, Sie wollen eigenen Code und einen schnellen Markteintritt: eine Festpreis-V1 (15.000 €, in 7 Tagen geliefert) bietet das beste Verhältnis aus Tempo, Qualität und Risiko.',
        ],
      },
      {
        p: 'Es gibt keine universelle Methode — es gibt die, die zu Ihrer Phase passt. Die Frage ist nicht „was ist der niedrigste Preis“, sondern „welche Option kostet mich in einem Jahr am wenigsten“.',
      },
    ],
  },
  it: {
    slug: 'prix-mvp-selon-methode',
    title: 'Prezzo di un MVP: cosa aspettarsi in base al metodo',
    excerpt:
      'Prezzo di un MVP per metodo: no-code, freelance, agenzia o V1 a prezzo fisso. Range reali, costi nascosti e l’opzione giusta per la tua situazione.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Costi'],
    body: [
      {
        p: 'Un MVP costa da 3.000 € con il no-code a oltre 80.000 € con un’agenzia classica, con un punto di equilibrio intorno ai 15.000 € per una V1 a prezzo fisso. Ma la cifra dichiarata non dice nulla sul costo reale: ogni metodo nasconde spese, rischi o debito che emergono solo dopo. Ecco quanto costa davvero ciascuna opzione e quale scegliere in base alla tua situazione.',
      },
      { h2: 'I quattro metodi e i loro range' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. Il modo più rapido ed economico per validare un’idea semplice.',
          'Freelance: 300 – 700 €/giorno, ossia 12.000 – 50.000 € per un MVP. Qualità molto variabile, dipendenza da una sola persona.',
          'Agenzia classica: 40.000 – 100.000 € in 3-6 mesi. Processo pesante, preventivi vaghi, botta e risposta infiniti.',
          'V1 a prezzo fisso (Khufu): 15.000 €, consegnata in 7 giorni, codice sorgente tuo.',
        ],
      },
      { h2: 'Cosa nasconde ogni opzione' },
      {
        p: 'Il prezzo iniziale raramente è quello finale. Nel no-code, gli abbonamenti a piattaforme e plugin lievitano con il volume, e non recuperi alcun codice pulito: superare un limite significa riscrivere tutto. Il freelance concentra il rischio su una persona — indisponibilità, codice non documentato, uscita imprevedibile. L’agenzia classica fattura a tempo: ogni cambio di scope diventa un’integrazione, e il budget sfugge di mano.',
      },
      {
        ul: [
          'No-code: costi di abbonamento ricorrenti, tetto tecnico, nessuna proprietà del codice.',
          'Freelance: dipendenza da una persona, qualità diseguale, manutenzione incerta.',
          'Agenzia: tempi lunghi, fatturazione a ore, scope che dilaga.',
          'V1 a prezzo fisso: uno scope stretto da rispettare — tutto ciò che esce dal perimetro iniziale passa in manutenzione.',
        ],
      },
      { h2: 'Il vero costo nascosto: il tempo' },
      {
        p: 'Il fattore più sottovalutato non è il preventivo, è il time-to-market. Un MVP consegnato in 6 mesi sono 6 mesi senza utenti, senza feedback e senza ricavi — mentre un concorrente avanza. Un MVP in codice vero, consegnato in una settimana su uno stack di produzione (Next.js, NestJS, PostgreSQL), ti fa guadagnare quel tempo senza pagare il debito tecnico del no-code.',
      },
      {
        quote:
          'Il prezzo di un MVP non si misura dal preventivo, ma da quanto costa riscriverlo — o arrivare troppo tardi.',
      },
      { h2: 'Quale metodo per la tua situazione' },
      {
        ul: [
          'Idea non validata, budget minimo: no-code per testare in pochi giorni, accettando di buttare poi il prototipo.',
          'Esigenza puntuale e precisa, e sai guidare la parte tecnica: un buon freelance può bastare.',
          'Prodotto destinato a crescere, vuoi codice tuo e un rapido time-to-market: una V1 a prezzo fisso (15.000 €, consegnata in 7 giorni) offre il miglior rapporto velocità/qualità/rischio.',
        ],
      },
      {
        p: 'Non esiste un metodo universale: esiste quello adatto alla tua fase. La domanda non è “qual è il prezzo più basso”, ma “quale opzione mi costerà meno tra un anno”.',
      },
    ],
  },
  pt: {
    slug: 'prix-mvp-selon-methode',
    title: 'Preço de um MVP: o que esperar consoante o método',
    excerpt:
      'Preço de um MVP por método: no-code, freelancer, agência ou V1 a preço fixo. Faixas reais, custos ocultos e a opção certa para a sua situação.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Custos'],
    body: [
      {
        p: 'Um MVP custa de 3.000 € com no-code a mais de 80.000 € com uma agência clássica, com um ponto de equilíbrio em torno de 15.000 € para uma V1 a preço fixo. Mas o valor anunciado nada diz sobre o custo real: cada método esconde despesas, riscos ou dívida que só aparecem mais tarde. Eis o que cada opção custa de facto, e qual escolher consoante a sua situação.',
      },
      { h2: 'Os quatro métodos e as suas faixas' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. O mais rápido e barato para validar uma ideia simples.',
          'Freelancer: 300 – 700 €/dia, ou seja 12.000 – 50.000 € por um MVP. Qualidade muito variável, dependência de uma só pessoa.',
          'Agência clássica: 40.000 – 100.000 € em 3 a 6 meses. Processo pesado, orçamentos vagos, idas e vindas intermináveis.',
          'V1 a preço fixo (Khufu): 15.000 €, entregue em 7 dias, código-fonte é seu.',
        ],
      },
      { h2: 'O que cada opção esconde' },
      {
        p: 'O preço de entrada raramente é o preço final. No no-code, as subscrições de plataformas e plugins disparam com o volume, e não recupera qualquer código limpo: ultrapassar um limite significa reescrever tudo. O freelancer concentra o risco numa pessoa — indisponibilidade, código não documentado, saída imprevisível. A agência clássica factura ao tempo: cada mudança de âmbito torna-se um aditamento, e o orçamento descontrola-se.',
      },
      {
        ul: [
          'No-code: custos de subscrição recorrentes, teto técnico, nenhuma propriedade do código.',
          'Freelancer: dependência de uma pessoa, qualidade desigual, manutenção incerta.',
          'Agência: prazos longos, facturação à hora, âmbito que se descontrola.',
          'V1 a preço fixo: um âmbito apertado a respeitar — tudo o que sai do quadro inicial passa para manutenção.',
        ],
      },
      { h2: 'O verdadeiro custo oculto: o tempo' },
      {
        p: 'O fator mais subestimado não é o orçamento, é o time-to-market. Um MVP entregue em 6 meses são 6 meses sem utilizadores, sem feedback e sem receita — enquanto um concorrente avança. Um MVP em código real, entregue numa semana sobre uma stack de produção (Next.js, NestJS, PostgreSQL), faz-lhe ganhar esse tempo sem pagar a dívida técnica do no-code.',
      },
      {
        quote:
          'O preço de um MVP não se mede pelo orçamento, mas pelo que custa reescrevê-lo — ou chegar tarde demais.',
      },
      { h2: 'Que método para a sua situação' },
      {
        ul: [
          'Ideia não validada, orçamento mínimo: no-code para testar em poucos dias, aceitando deitar fora o protótipo depois.',
          'Necessidade pontual e precisa, e sabe conduzir a parte técnica: um bom freelancer pode bastar.',
          'Produto destinado a crescer, quer código seu e uma entrada rápida no mercado: uma V1 a preço fixo (15.000 €, entregue em 7 dias) oferece a melhor relação velocidade/qualidade/risco.',
        ],
      },
      {
        p: 'Não há método universal: há o que corresponde à sua etapa. A pergunta não é “qual é o preço mais baixo”, mas “que opção me custará menos daqui a um ano”.',
      },
    ],
  },
  nl: {
    slug: 'prix-mvp-selon-methode',
    title: 'Prijs van een MVP: wat te verwachten per methode',
    excerpt:
      'Prijs van een MVP per methode: no-code, freelancer, bureau of V1 tegen vaste prijs. Reële ranges, verborgen kosten en de juiste keuze voor jouw situatie.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Kosten'],
    body: [
      {
        p: 'Een MVP kost tussen 3.000 € met no-code en meer dan 80.000 € bij een klassiek bureau, met een optimum rond 15.000 € voor een V1 tegen vaste prijs. Maar de geadverteerde prijs zegt niets over de werkelijke kosten: elke methode verbergt kosten, risico’s of schuld die pas later opduiken. Dit is wat elke optie echt kost, en welke je kiest afhankelijk van je situatie.',
      },
      { h2: 'De vier methodes en hun ranges' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. Het snelst en goedkoopst om een simpel idee te valideren.',
          'Freelancer: 300 – 700 €/dag, oftewel 12.000 – 50.000 € voor een MVP. Sterk wisselende kwaliteit, afhankelijkheid van één persoon.',
          'Klassiek bureau: 40.000 – 100.000 € over 3 tot 6 maanden. Zwaar proces, vage offertes, eindeloos heen en weer.',
          'V1 tegen vaste prijs (Khufu): 15.000 €, geleverd in 7 dagen, broncode is van jou.',
        ],
      },
      { h2: 'Wat elke optie verbergt' },
      {
        p: 'De instapprijs is zelden de eindprijs. Bij no-code stijgen de abonnementen op platforms en plugins mee met het volume, en krijg je geen schone code: een plafond bereiken betekent alles herschrijven. Freelance concentreert het risico op één persoon — onbeschikbaarheid, ongedocumenteerde code, onvoorspelbaar vertrek. Het klassieke bureau factureert op tijd: elke scopewijziging wordt een addendum, en het budget loopt uit de hand.',
      },
      {
        ul: [
          'No-code: terugkerende abonnementskosten, technisch plafond, geen eigendom van de code.',
          'Freelancer: afhankelijkheid van één persoon, ongelijke kwaliteit, onzeker onderhoud.',
          'Bureau: lange doorlooptijden, facturatie per uur, uitdijende scope.',
          'V1 tegen vaste prijs: een strakke scope om te respecteren — alles buiten het oorspronkelijke kader gaat naar onderhoud.',
        ],
      },
      { h2: 'De echte verborgen kost: tijd' },
      {
        p: 'De meest onderschatte factor is niet de offerte, maar de time-to-market. Een MVP geleverd in 6 maanden betekent 6 maanden zonder gebruikers, zonder feedback en zonder omzet — terwijl een concurrent oprukt. Een MVP in echte code, in één week geleverd op een productiestack (Next.js, NestJS, PostgreSQL), levert je die tijd op zonder de technische schuld van no-code te betalen.',
      },
      {
        quote:
          'De prijs van een MVP meet je niet aan de offerte, maar aan wat het kost om het te herschrijven — of te laat te komen.',
      },
      { h2: 'Welke methode voor jouw situatie' },
      {
        ul: [
          'Ongevalideerd idee, minimaal budget: no-code om in enkele dagen te testen, met de aanvaarding dat je het prototype daarna weggooit.',
          'Eenmalige, duidelijk afgebakende behoefte en je kunt de techniek aansturen: een goede freelancer kan volstaan.',
          'Product dat moet groeien, je wilt eigen code en een snelle time-to-market: een V1 tegen vaste prijs (15.000 €, geleverd in 7 dagen) biedt de beste verhouding snelheid/kwaliteit/risico.',
        ],
      },
      {
        p: 'Er is geen universele methode: er is de methode die past bij jouw fase. De vraag is niet “wat is de laagste prijs”, maar “welke optie kost me over een jaar het minst”.',
      },
    ],
  },
  ar: {
    slug: 'prix-mvp-selon-methode',
    title: 'سعر الـ MVP: ما الذي يمكن توقّعه حسب الطريقة',
    excerpt:
      'سعر الـ MVP حسب الطريقة: no-code ، freelance ، وكالة أو V1 بسعر ثابت. نطاقات واقعية، تكاليف خفية والخيار المناسب لحالتك.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'التكاليف'],
    body: [
      {
        p: 'تتراوح تكلفة الـ MVP من 3٬000 € باستخدام no-code إلى أكثر من 80٬000 € مع وكالة تقليدية، مع نقطة توازن حول 15٬000 € لـ V1 بسعر ثابت. لكن السعر المعلن لا يقول شيئًا عن التكلفة الحقيقية: فكل طريقة تخفي رسومًا أو مخاطر أو ديونًا لا تظهر إلا لاحقًا. إليك ما يكلّفه كل خيار فعليًا، وأيّها تختار حسب حالتك.',
      },
      { h2: 'الطرق الأربع ونطاقات أسعارها' },
      {
        ul: [
          'No-code (Bubble، Webflow، Glide…): 3٬000 – 15٬000 €. الأسرع والأرخص للتحقق من فكرة بسيطة.',
          'Freelance: 300 – 700 € يوميًا، أي 12٬000 – 50٬000 € لـ MVP. جودة متفاوتة جدًا، واعتماد على شخص واحد.',
          'وكالة تقليدية: 40٬000 – 100٬000 € على مدى 3 إلى 6 أشهر. عملية ثقيلة، عروض غامضة، وذهاب وإياب لا ينتهي.',
          'V1 بسعر ثابت (Khufu): 15٬000 €، تُسلّم في 7 أيام، والشفرة المصدرية لك.',
        ],
      },
      { h2: 'ما يخفيه كل خيار' },
      {
        p: 'نادرًا ما يكون سعر الدخول هو السعر النهائي. في no-code، ترتفع اشتراكات المنصات والإضافات مع الحجم، ولا تسترد أي شفرة نظيفة: تجاوز السقف يعني إعادة كتابة كل شيء. الـ freelance يُركّز المخاطر على شخص واحد — عدم توفر، شفرة غير موثّقة، رحيل غير متوقّع. الوكالة التقليدية تحاسب بالوقت: كل تغيير في النطاق يصبح ملحقًا، والميزانية تنفلت.',
      },
      {
        ul: [
          'No-code: تكاليف اشتراك متكررة، سقف تقني، ولا ملكية للشفرة.',
          'Freelance: اعتماد على شخص واحد، جودة غير متساوية، صيانة غير مؤكدة.',
          'وكالة: مدد طويلة، فوترة بالساعة، ونطاق يتمدد.',
          'V1 بسعر ثابت: نطاق محدّد يجب الالتزام به — كل ما يخرج عن الإطار الأولي ينتقل إلى الصيانة.',
        ],
      },
      { h2: 'التكلفة الخفية الحقيقية: الوقت' },
      {
        p: 'أكثر عامل يُستهان به ليس العرض، بل وقت الوصول إلى السوق. الـ MVP الذي يُسلّم في 6 أشهر يعني 6 أشهر بلا مستخدمين، بلا تغذية راجعة وبلا إيرادات — بينما يتقدّم منافس. الـ MVP بشفرة حقيقية، المُسلّم في أسبوع واحد على stack إنتاجي (Next.js، NestJS، PostgreSQL)، يكسبك ذلك الوقت دون دفع الدين التقني لـ no-code.',
      },
      {
        quote:
          'لا يُقاس سعر الـ MVP بالعرض، بل بما يكلّفه إعادة كتابته — أو الوصول متأخرًا جدًا.',
      },
      { h2: 'أي طريقة تناسب حالتك' },
      {
        ul: [
          'فكرة غير متحقّق منها، ميزانية ضئيلة: no-code للاختبار خلال أيام، مع تقبّل التخلّي عن النموذج الأولي لاحقًا.',
          'حاجة محددة ومؤقتة، وتعرف كيف تدير الجانب التقني: قد يكفي freelance جيد.',
          'منتج مُعدّ للنمو، وتريد شفرة تملكها ووصولًا سريعًا إلى السوق: V1 بسعر ثابت (15٬000 €، تُسلّم في 7 أيام) توفّر أفضل نسبة سرعة/جودة/مخاطرة.',
        ],
      },
      {
        p: 'لا توجد طريقة شاملة: توجد الطريقة التي تناسب مرحلتك. السؤال ليس «ما أدنى سعر»، بل «أي خيار سيكلّفني أقل بعد عام».',
      },
    ],
  },
  pl: {
    slug: 'prix-mvp-selon-methode',
    title: 'Cena MVP: czego oczekiwać w zależności od metody',
    excerpt:
      'Cena MVP według metody: no-code, freelancer, agencja lub V1 w stałej cenie. Realne widełki, ukryte koszty i właściwy wybór dla Twojej sytuacji.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Koszty'],
    body: [
      {
        p: 'MVP kosztuje od 3 000 € przy no-code do ponad 80 000 € w klasycznej agencji, z punktem równowagi w okolicach 15 000 € dla V1 w stałej cenie. Ale podana kwota nie mówi nic o realnym koszcie: każda metoda ukrywa opłaty, ryzyka lub dług, które ujawniają się dopiero później. Oto ile naprawdę kosztuje każda opcja i którą wybrać w zależności od sytuacji.',
      },
      { h2: 'Cztery metody i ich widełki' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3 000 – 15 000 €. Najszybszy i najtańszy sposób na walidację prostego pomysłu.',
          'Freelancer: 300 – 700 €/dzień, czyli 12 000 – 50 000 € za MVP. Bardzo zmienna jakość, zależność od jednej osoby.',
          'Klasyczna agencja: 40 000 – 100 000 € przez 3 do 6 miesięcy. Ciężki proces, niejasne wyceny, nieskończone tam i z powrotem.',
          'V1 w stałej cenie (Khufu): 15 000 €, dostarczona w 7 dni, kod źródłowy należy do Ciebie.',
        ],
      },
      { h2: 'Co ukrywa każda opcja' },
      {
        p: 'Cena wejściowa rzadko jest ceną końcową. W no-code subskrypcje platform i pluginów rosną wraz z wolumenem, a nie odzyskujesz żadnego czystego kodu: przekroczenie pułapu oznacza przepisanie wszystkiego. Freelancer koncentruje ryzyko na jednej osobie — niedostępność, nieudokumentowany kod, nieprzewidywalne odejście. Klasyczna agencja rozlicza się za czas: każda zmiana zakresu staje się aneksem, a budżet wymyka się spod kontroli.',
      },
      {
        ul: [
          'No-code: powtarzalne koszty subskrypcji, techniczny pułap, brak własności kodu.',
          'Freelancer: zależność od jednej osoby, nierówna jakość, niepewne utrzymanie.',
          'Agencja: długie terminy, rozliczenie godzinowe, rozrastający się zakres.',
          'V1 w stałej cenie: ściśle określony zakres do przestrzegania — wszystko poza pierwotnymi ramami przechodzi do utrzymania.',
        ],
      },
      { h2: 'Prawdziwy ukryty koszt: czas' },
      {
        p: 'Najbardziej niedoceniany czynnik to nie wycena, lecz time-to-market. MVP dostarczone w 6 miesięcy to 6 miesięcy bez użytkowników, bez informacji zwrotnej i bez przychodów — podczas gdy konkurent posuwa się naprzód. MVP w prawdziwym kodzie, dostarczone w tydzień na produkcyjnym stacku (Next.js, NestJS, PostgreSQL), daje Ci ten czas bez płacenia długu technicznego no-code.',
      },
      {
        quote:
          'Ceny MVP nie mierzy się wyceną, lecz tym, ile kosztuje jego przepisanie — albo przybycie zbyt późno.',
      },
      { h2: 'Która metoda dla Twojej sytuacji' },
      {
        ul: [
          'Niezwalidowany pomysł, minimalny budżet: no-code, aby przetestować w kilka dni, godząc się na wyrzucenie prototypu później.',
          'Jednorazowa, precyzyjna potrzeba i potrafisz sterować techniką: dobry freelancer może wystarczyć.',
          'Produkt mający rosnąć, chcesz własny kod i szybkie wejście na rynek: V1 w stałej cenie (15 000 €, dostarczona w 7 dni) oferuje najlepszy stosunek szybkości, jakości i ryzyka.',
        ],
      },
      {
        p: 'Nie ma uniwersalnej metody — jest ta, która pasuje do Twojego etapu. Pytanie nie brzmi „jaka jest najniższa cena”, lecz „która opcja będzie mnie kosztować najmniej za rok”.',
      },
    ],
  },
  tr: {
    slug: 'prix-mvp-selon-methode',
    title: 'MVP fiyatı: yönteme göre ne beklemeli',
    excerpt:
      'Yönteme göre MVP fiyatı: no-code, freelance, ajans veya sabit fiyatlı V1. Gerçek aralıklar, gizli maliyetler ve durumunuza uygun seçenek.',
    date: '2026-06-17',
    readingMinutes: 6,
    tags: ['MVP', 'Maliyetler'],
    body: [
      {
        p: 'Bir MVP, no-code ile 3.000 €’dan klasik bir ajansla 80.000 €’nun üzerine kadar değişir; sabit fiyatlı bir V1 için denge noktası 15.000 € civarındadır. Ancak ilan edilen fiyat, gerçek maliyet hakkında hiçbir şey söylemez: her yöntem, yalnızca sonradan ortaya çıkan ücretleri, riskleri veya borçları gizler. İşte her seçeneğin gerçekte ne kadara mal olduğu ve durumunuza göre hangisini seçmelisiniz.',
      },
      { h2: 'Dört yöntem ve fiyat aralıkları' },
      {
        ul: [
          'No-code (Bubble, Webflow, Glide…): 3.000 – 15.000 €. Basit bir fikri doğrulamanın en hızlı ve en ucuz yolu.',
          'Freelance: günlük 300 – 700 €, yani bir MVP için 12.000 – 50.000 €. Çok değişken kalite, tek bir kişiye bağımlılık.',
          'Klasik ajans: 3 ila 6 ay boyunca 40.000 – 100.000 €. Ağır süreç, belirsiz teklifler, biteviye gidip gelmeler.',
          'Sabit fiyatlı V1 (Khufu): 15.000 €, 7 günde teslim, kaynak kodu sizin.',
        ],
      },
      { h2: 'Her seçeneğin gizlediği' },
      {
        p: 'Giriş fiyatı nadiren nihai fiyattır. No-code’da platform ve eklenti abonelikleri hacimle birlikte şişer ve temiz bir kod elde edemezsiniz: bir tavana ulaşmak her şeyi yeniden yazmak demektir. Freelance, riski tek bir kişide yoğunlaştırır — müsait olmama, belgelenmemiş kod, öngörülemeyen ayrılık. Klasik ajans zamana göre fatura keser: her kapsam değişikliği bir ek sözleşmeye dönüşür ve bütçe kontrolden çıkar.',
      },
      {
        ul: [
          'No-code: yinelenen abonelik maliyetleri, teknik tavan, kod üzerinde mülkiyet yok.',
          'Freelance: tek kişiye bağımlılık, eşitsiz kalite, belirsiz bakım.',
          'Ajans: uzun süreler, saatlik faturalandırma, genişleyen kapsam.',
          'Sabit fiyatlı V1: uyulması gereken sıkı bir kapsam — ilk çerçevenin dışındaki her şey bakıma geçer.',
        ],
      },
      { h2: 'Gerçek gizli maliyet: zaman' },
      {
        p: 'En çok hafife alınan faktör teklif değil, pazara çıkış süresidir. 6 ayda teslim edilen bir MVP, 6 ay kullanıcısız, geri bildirimsiz ve gelirsiz demektir — bir rakip öne geçerken. Bir üretim stack’inde (Next.js, NestJS, PostgreSQL) bir haftada teslim edilen, gerçek kodla yazılmış bir MVP, no-code’un teknik borcunu ödemeden bu zamanı size kazandırır.',
      },
      {
        quote:
          'Bir MVP’nin fiyatı teklifle değil, onu yeniden yazmanın — ya da çok geç kalmanın — maliyetiyle ölçülür.',
      },
      { h2: 'Durumunuza göre hangi yöntem' },
      {
        ul: [
          'Doğrulanmamış fikir, asgari bütçe: birkaç günde test etmek için no-code; prototipi sonra atmayı göze alarak.',
          'Tek seferlik, net bir ihtiyaç ve tekniği yönetebiliyorsanız: iyi bir freelance yeterli olabilir.',
          'Büyümesi hedeflenen bir ürün, size ait kod ve hızlı pazara çıkış istiyorsanız: sabit fiyatlı bir V1 (15.000 €, 7 günde teslim) en iyi hız/kalite/risk oranını sunar.',
        ],
      },
      {
        p: 'Evrensel bir yöntem yoktur — aşamanıza uygun olan vardır. Soru “en düşük fiyat nedir” değil, “bir yıl sonra bana en az hangi seçenek mal olacak” sorusudur.',
      },
    ],
  },
}
