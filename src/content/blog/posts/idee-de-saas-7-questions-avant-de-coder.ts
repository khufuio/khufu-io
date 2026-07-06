import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "Idée de SaaS : les 7 questions à se poser avant de coder",
    excerpt:
      "Sept questions à trancher avant d'écrire une ligne de code : problème, cible, prix, périmètre V1, différenciation, canal, succès.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Produit'],
    body: [
      {
        p: "Avant d'écrire la moindre ligne de code, sept questions décident si votre idée de SaaS mérite d'exister : quel problème vous résolvez, pour qui, à quel point ces gens sont prêts à payer, quel périmètre pour la V1, en quoi vous êtes différent, par quel canal vous allez acquérir vos premiers clients, et comment vous mesurerez le succès. Y répondre franchement prend une journée. L'ignorer coûte des mois de développement et des dizaines de milliers d'euros sur un produit que personne n'attend.",
      },
      { h2: "Les 7 questions, en une checklist" },
      {
        ul: [
          "Le problème : quel problème concret, fréquent et douloureux résolvez-vous ?",
          "La cible : qui exactement le vit, au point d'y chercher une solution aujourd'hui ?",
          "Le willingness to pay : ces gens paient-ils déjà pour le résoudre, et combien ?",
          "Le périmètre V1 : quels 3 à 5 parcours suffisent à prouver la valeur ?",
          "La différenciation : pourquoi vous plutôt que l'existant ou un tableur ?",
          "Le canal d'acquisition : par où arrivent vos 10 premiers clients ?",
          "La mesure du succès : quel chiffre unique dit que ça marche dans 90 jours ?",
        ],
      },
      { h2: "Le trio qui décide s'il y a un marché" },
      {
        p: "Les trois premières questions valident la demande. Un problème qui vaut un SaaS est fréquent (il revient chaque semaine, pas une fois par an) et douloureux (il coûte du temps, de l'argent ou du stress). La cible doit être assez précise pour que vous puissiez nommer dix personnes concrètes à appeler demain. Et le signal le plus fiable reste le willingness to pay : si vos futurs clients bricolent déjà une solution avec des tableurs, des outils payants ou un prestataire, la douleur est réelle. S'ils n'ont jamais rien déboursé, méfiez-vous.",
      },
      { h2: "Ce que vous construisez vraiment" },
      {
        p: "Les questions 4 et 5 définissent le produit. Le périmètre V1 doit tenir en 3 à 5 parcours essentiels : tout le reste est du bruit qui retarde le lancement. La différenciation, elle, ne se joue pas sur une liste de fonctionnalités mais sur un angle clair — un segment mal servi, une intégration que personne ne fait, une rapidité que les gros ne peuvent pas offrir. Si votre seule réponse est « en mieux », vous n'avez pas encore de différenciation.",
      },
      {
        quote:
          "Coder est la partie facile. La partie chère, c'est de construire pendant six mois quelque chose que personne ne veut acheter.",
      },
      { h2: "Comment vous l'amenez au marché" },
      {
        p: "Les deux dernières questions décident de la survie. Un bon produit sans canal d'acquisition ne trouve pas ses clients : sachez, avant de coder, d'où viennent vos dix premiers (réseau, communautés, SEO, prospection directe, partenariats). Et fixez une seule métrique de succès à 90 jours — clients payants, revenu récurrent, taux de rétention — pour trancher objectivement entre persévérer et pivoter, plutôt que de vous raconter des histoires.",
      },
      {
        p: "Une fois ces sept réponses écrites noir sur blanc, le développement devient simple et rapide. C'est exactement le cadrage qu'on fait chez Khufu avant de livrer une V1 en production en 7 jours, à prix fixe de 15 000 € : un périmètre serré, validé en amont, pour construire uniquement ce qui prouve la valeur — et rien d'autre.",
      },
    ],
  },
  en: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "SaaS idea: the 7 questions to answer before you code",
    excerpt:
      "Seven questions to settle before writing a line of code: problem, target, willingness to pay, V1 scope, differentiation, channel, success.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Product'],
    body: [
      {
        p: "Before you write a single line of code, seven questions decide whether your SaaS idea deserves to exist: what problem you solve, for whom, how much those people will pay, what the V1 scope is, how you are different, which channel brings your first customers, and how you will measure success. Answering them honestly takes a day. Skipping it costs months of development and tens of thousands of euros on a product nobody was waiting for.",
      },
      { h2: "The 7 questions, in one checklist" },
      {
        ul: [
          "The problem: what concrete, frequent and painful problem do you solve?",
          "The target: who exactly lives it, badly enough to seek a solution today?",
          "Willingness to pay: are these people already paying to solve it, and how much?",
          "V1 scope: which 3 to 5 flows are enough to prove the value?",
          "Differentiation: why you rather than the existing tools or a spreadsheet?",
          "Acquisition channel: where do your first 10 customers come from?",
          "Measuring success: what single number says it works within 90 days?",
        ],
      },
      { h2: "The trio that decides whether there is a market" },
      {
        p: "The first three questions validate demand. A problem worth a SaaS is frequent (it comes back every week, not once a year) and painful (it costs time, money or stress). The target must be precise enough that you can name ten concrete people to call tomorrow. And the most reliable signal is willingness to pay: if your future customers already patch together a solution with spreadsheets, paid tools or a contractor, the pain is real. If they have never spent a cent on it, be wary.",
      },
      { h2: "What you are actually building" },
      {
        p: "Questions 4 and 5 define the product. The V1 scope must fit into 3 to 5 essential flows: everything else is noise that delays launch. Differentiation is not about a feature list but about a clear angle — an underserved segment, an integration nobody offers, a speed the big players cannot match. If your only answer is “but better”, you do not have differentiation yet.",
      },
      {
        quote:
          "Coding is the easy part. The expensive part is spending six months building something nobody wants to buy.",
      },
      { h2: "How you bring it to market" },
      {
        p: "The last two questions decide survival. A good product with no acquisition channel never finds its customers: know, before you code, where your first ten come from (network, communities, SEO, direct outreach, partnerships). And set a single 90-day success metric — paying customers, recurring revenue, retention rate — to decide objectively between persevering and pivoting, instead of telling yourself stories.",
      },
      {
        p: "Once those seven answers are written down in black and white, development becomes simple and fast. That is exactly the scoping we run at Khufu before shipping a production V1 in 7 days, at a fixed price of 15,000 EUR: a tight scope, validated up front, to build only what proves the value — and nothing else.",
      },
    ],
  },
  es: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "Idea de SaaS: las 7 preguntas antes de programar",
    excerpt:
      "Siete preguntas que resolver antes de escribir una línea de código: problema, público, disposición a pagar, alcance de la V1, diferenciación, canal, éxito.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Producto'],
    body: [
      {
        p: "Antes de escribir una sola línea de código, siete preguntas deciden si tu idea de SaaS merece existir: qué problema resuelves, para quién, cuánto pagará esa gente, cuál es el alcance de la V1, en qué te diferencias, por qué canal llegan tus primeros clientes y cómo medirás el éxito. Responderlas con honestidad lleva un día. Ignorarlas cuesta meses de desarrollo y decenas de miles de euros en un producto que nadie esperaba.",
      },
      { h2: "Las 7 preguntas, en una checklist" },
      {
        ul: [
          "El problema: ¿qué problema concreto, frecuente y doloroso resuelves?",
          "El público: ¿quién exactamente lo vive, hasta buscar una solución hoy?",
          "La disposición a pagar: ¿esa gente ya paga por resolverlo, y cuánto?",
          "El alcance de la V1: ¿qué 3 a 5 flujos bastan para demostrar el valor?",
          "La diferenciación: ¿por qué tú y no lo existente o una hoja de cálculo?",
          "El canal de adquisición: ¿de dónde salen tus 10 primeros clientes?",
          "La medida del éxito: ¿qué única cifra dice que funciona en 90 días?",
        ],
      },
      { h2: "El trío que decide si hay mercado" },
      {
        p: "Las tres primeras preguntas validan la demanda. Un problema que justifica un SaaS es frecuente (vuelve cada semana, no una vez al año) y doloroso (cuesta tiempo, dinero o estrés). El público debe ser lo bastante preciso como para nombrar a diez personas concretas a las que llamar mañana. Y la señal más fiable es la disposición a pagar: si tus futuros clientes ya improvisan una solución con hojas de cálculo, herramientas de pago o un proveedor, el dolor es real. Si nunca han gastado un céntimo, desconfía.",
      },
      { h2: "Lo que construyes de verdad" },
      {
        p: "Las preguntas 4 y 5 definen el producto. El alcance de la V1 debe caber en 3 a 5 flujos esenciales: todo lo demás es ruido que retrasa el lanzamiento. La diferenciación no se juega en una lista de funciones, sino en un ángulo claro: un segmento mal atendido, una integración que nadie ofrece, una rapidez que los grandes no pueden igualar. Si tu única respuesta es «pero mejor», todavía no tienes diferenciación.",
      },
      {
        quote:
          "Programar es la parte fácil. La parte cara es pasar seis meses construyendo algo que nadie quiere comprar.",
      },
      { h2: "Cómo lo llevas al mercado" },
      {
        p: "Las dos últimas preguntas deciden la supervivencia. Un buen producto sin canal de adquisición nunca encuentra a sus clientes: sabe, antes de programar, de dónde salen tus primeros diez (red de contactos, comunidades, SEO, prospección directa, alianzas). Y fija una única métrica de éxito a 90 días — clientes de pago, ingresos recurrentes, tasa de retención — para decidir con objetividad entre perseverar y pivotar, en lugar de contarte historias.",
      },
      {
        p: "Una vez escritas esas siete respuestas negro sobre blanco, el desarrollo se vuelve simple y rápido. Es exactamente el encuadre que hacemos en Khufu antes de entregar una V1 en producción en 7 días, a precio fijo de 15.000 EUR: un alcance ajustado, validado de antemano, para construir solo lo que demuestra el valor, y nada más.",
      },
    ],
  },
  de: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "SaaS-Idee: die 7 Fragen vor dem Programmieren",
    excerpt:
      "Sieben Fragen, die vor der ersten Codezeile zu klären sind: Problem, Zielgruppe, Zahlungsbereitschaft, V1-Umfang, Differenzierung, Kanal, Erfolg.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Produkt'],
    body: [
      {
        p: "Bevor du eine einzige Zeile Code schreibst, entscheiden sieben Fragen, ob deine SaaS-Idee existieren sollte: welches Problem du löst, für wen, wie viel diese Leute zahlen, wie der V1-Umfang aussieht, worin du dich unterscheidest, über welchen Kanal deine ersten Kunden kommen und wie du den Erfolg misst. Sie ehrlich zu beantworten dauert einen Tag. Sie zu ignorieren kostet Monate an Entwicklung und Zehntausende Euro für ein Produkt, auf das niemand gewartet hat.",
      },
      { h2: "Die 7 Fragen als Checkliste" },
      {
        ul: [
          "Das Problem: welches konkrete, häufige und schmerzhafte Problem löst du?",
          "Die Zielgruppe: wer genau erlebt es, schlimm genug, um heute eine Lösung zu suchen?",
          "Die Zahlungsbereitschaft: zahlen diese Leute schon dafür, und wie viel?",
          "Der V1-Umfang: welche 3 bis 5 Abläufe genügen, um den Wert zu beweisen?",
          "Die Differenzierung: warum du und nicht die bestehenden Tools oder eine Tabelle?",
          "Der Akquisekanal: woher kommen deine ersten 10 Kunden?",
          "Die Erfolgsmessung: welche einzige Zahl zeigt in 90 Tagen, dass es funktioniert?",
        ],
      },
      { h2: "Das Trio, das über einen Markt entscheidet" },
      {
        p: "Die ersten drei Fragen validieren die Nachfrage. Ein Problem, das ein SaaS rechtfertigt, ist häufig (es kommt jede Woche zurück, nicht einmal im Jahr) und schmerzhaft (es kostet Zeit, Geld oder Nerven). Die Zielgruppe muss präzise genug sein, dass du zehn konkrete Personen nennen kannst, die du morgen anrufst. Und das zuverlässigste Signal ist die Zahlungsbereitschaft: wenn deine künftigen Kunden schon eine Lösung mit Tabellen, kostenpflichtigen Tools oder einem Dienstleister zusammenbasteln, ist der Schmerz echt. Haben sie nie einen Cent ausgegeben, sei vorsichtig.",
      },
      { h2: "Was du wirklich baust" },
      {
        p: "Die Fragen 4 und 5 definieren das Produkt. Der V1-Umfang muss in 3 bis 5 wesentliche Abläufe passen: alles andere ist Lärm, der den Start verzögert. Differenzierung entscheidet sich nicht an einer Funktionsliste, sondern an einem klaren Winkel — ein schlecht bedientes Segment, eine Integration, die niemand anbietet, eine Geschwindigkeit, die die Großen nicht bieten können. Wenn deine einzige Antwort „aber besser“ lautet, hast du noch keine Differenzierung.",
      },
      {
        quote:
          "Programmieren ist der leichte Teil. Der teure Teil ist, sechs Monate lang etwas zu bauen, das niemand kaufen will.",
      },
      { h2: "Wie du es auf den Markt bringst" },
      {
        p: "Die letzten beiden Fragen entscheiden über das Überleben. Ein gutes Produkt ohne Akquisekanal findet seine Kunden nie: wisse schon vor dem Programmieren, woher deine ersten zehn kommen (Netzwerk, Communities, SEO, Direktansprache, Partnerschaften). Und lege eine einzige Erfolgskennzahl für 90 Tage fest — zahlende Kunden, wiederkehrender Umsatz, Retention-Rate — um objektiv zwischen Durchhalten und Pivotieren zu entscheiden, statt dir Geschichten zu erzählen.",
      },
      {
        p: "Sobald diese sieben Antworten schwarz auf weiß feststehen, wird die Entwicklung einfach und schnell. Genau dieses Scoping machen wir bei Khufu, bevor wir eine produktive V1 in 7 Tagen liefern, zum Festpreis von 15.000 EUR: ein enger, vorab validierter Umfang, um nur das zu bauen, was den Wert beweist — und nichts anderes.",
      },
    ],
  },
  it: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "Idea di SaaS: le 7 domande prima di programmare",
    excerpt:
      "Sette domande da risolvere prima di scrivere una riga di codice: problema, target, disponibilità a pagare, perimetro V1, differenziazione, canale, successo.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Prodotto'],
    body: [
      {
        p: "Prima di scrivere una sola riga di codice, sette domande decidono se la tua idea di SaaS merita di esistere: quale problema risolvi, per chi, quanto pagheranno quelle persone, qual è il perimetro della V1, in cosa sei diverso, da quale canale arrivano i primi clienti e come misurerai il successo. Rispondere onestamente richiede un giorno. Ignorarle costa mesi di sviluppo e decine di migliaia di euro su un prodotto che nessuno aspettava.",
      },
      { h2: "Le 7 domande, in una checklist" },
      {
        ul: [
          "Il problema: quale problema concreto, frequente e doloroso risolvi?",
          "Il target: chi esattamente lo vive, al punto da cercare una soluzione oggi?",
          "La disponibilità a pagare: quelle persone pagano già per risolverlo, e quanto?",
          "Il perimetro V1: quali 3-5 flussi bastano a dimostrare il valore?",
          "La differenziazione: perché tu e non gli strumenti esistenti o un foglio di calcolo?",
          "Il canale di acquisizione: da dove arrivano i tuoi primi 10 clienti?",
          "La misura del successo: quale singolo numero dice che funziona in 90 giorni?",
        ],
      },
      { h2: "Il trio che decide se c'è un mercato" },
      {
        p: "Le prime tre domande validano la domanda. Un problema che giustifica un SaaS è frequente (torna ogni settimana, non una volta all'anno) e doloroso (costa tempo, denaro o stress). Il target deve essere abbastanza preciso da poter nominare dieci persone concrete da chiamare domani. E il segnale più affidabile è la disponibilità a pagare: se i tuoi futuri clienti già improvvisano una soluzione con fogli di calcolo, strumenti a pagamento o un fornitore, il dolore è reale. Se non hanno mai speso un centesimo, diffida.",
      },
      { h2: "Ciò che costruisci davvero" },
      {
        p: "Le domande 4 e 5 definiscono il prodotto. Il perimetro V1 deve stare in 3-5 flussi essenziali: tutto il resto è rumore che ritarda il lancio. La differenziazione non si gioca su un elenco di funzioni ma su un angolo chiaro — un segmento mal servito, un'integrazione che nessuno offre, una velocità che i grandi non possono eguagliare. Se la tua unica risposta è «ma meglio», non hai ancora una differenziazione.",
      },
      {
        quote:
          "Programmare è la parte facile. La parte costosa è passare sei mesi a costruire qualcosa che nessuno vuole comprare.",
      },
      { h2: "Come lo porti sul mercato" },
      {
        p: "Le ultime due domande decidono la sopravvivenza. Un buon prodotto senza canale di acquisizione non trova mai i suoi clienti: sappi, prima di programmare, da dove arrivano i tuoi primi dieci (rete, community, SEO, contatto diretto, partnership). E fissa una sola metrica di successo a 90 giorni — clienti paganti, ricavi ricorrenti, tasso di retention — per decidere con obiettività tra perseverare e pivotare, invece di raccontarti storie.",
      },
      {
        p: "Una volta scritte quelle sette risposte nero su bianco, lo sviluppo diventa semplice e veloce. È esattamente l'inquadramento che facciamo in Khufu prima di consegnare una V1 in produzione in 7 giorni, a prezzo fisso di 15.000 EUR: un perimetro stretto, validato in anticipo, per costruire solo ciò che dimostra il valore, e nient'altro.",
      },
    ],
  },
  pt: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "Ideia de SaaS: as 7 perguntas antes de programar",
    excerpt:
      "Sete perguntas a resolver antes de escrever uma linha de código: problema, público, disposição a pagar, escopo da V1, diferenciação, canal, sucesso.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Produto'],
    body: [
      {
        p: "Antes de escrever uma única linha de código, sete perguntas decidem se a sua ideia de SaaS merece existir: que problema você resolve, para quem, quanto essas pessoas vão pagar, qual o escopo da V1, no que você se diferencia, por qual canal chegam os primeiros clientes e como vai medir o sucesso. Respondê-las com honestidade leva um dia. Ignorá-las custa meses de desenvolvimento e dezenas de milhares de euros num produto que ninguém esperava.",
      },
      { h2: "As 7 perguntas, numa checklist" },
      {
        ul: [
          "O problema: que problema concreto, frequente e doloroso você resolve?",
          "O público: quem exatamente o vive, a ponto de buscar uma solução hoje?",
          "A disposição a pagar: essas pessoas já pagam para resolvê-lo, e quanto?",
          "O escopo da V1: quais 3 a 5 fluxos bastam para provar o valor?",
          "A diferenciação: por que você e não as ferramentas existentes ou uma planilha?",
          "O canal de aquisição: de onde vêm os seus 10 primeiros clientes?",
          "A medida do sucesso: que único número diz que funciona em 90 dias?",
        ],
      },
      { h2: "O trio que decide se há mercado" },
      {
        p: "As três primeiras perguntas validam a demanda. Um problema que justifica um SaaS é frequente (volta toda semana, não uma vez por ano) e doloroso (custa tempo, dinheiro ou estresse). O público deve ser preciso o bastante para você nomear dez pessoas concretas para ligar amanhã. E o sinal mais confiável é a disposição a pagar: se os seus futuros clientes já improvisam uma solução com planilhas, ferramentas pagas ou um prestador, a dor é real. Se nunca gastaram um centavo, desconfie.",
      },
      { h2: "O que você constrói de verdade" },
      {
        p: "As perguntas 4 e 5 definem o produto. O escopo da V1 deve caber em 3 a 5 fluxos essenciais: todo o resto é ruído que atrasa o lançamento. A diferenciação não se joga numa lista de funções, mas num ângulo claro — um segmento mal atendido, uma integração que ninguém oferece, uma rapidez que os grandes não conseguem igualar. Se a sua única resposta é «mas melhor», você ainda não tem diferenciação.",
      },
      {
        quote:
          "Programar é a parte fácil. A parte cara é passar seis meses construindo algo que ninguém quer comprar.",
      },
      { h2: "Como você o leva ao mercado" },
      {
        p: "As duas últimas perguntas decidem a sobrevivência. Um bom produto sem canal de aquisição nunca encontra seus clientes: saiba, antes de programar, de onde vêm os seus primeiros dez (rede, comunidades, SEO, prospecção direta, parcerias). E defina uma única métrica de sucesso em 90 dias — clientes pagantes, receita recorrente, taxa de retenção — para decidir com objetividade entre perseverar e pivotar, em vez de contar histórias a si mesmo.",
      },
      {
        p: "Uma vez escritas essas sete respostas em preto no branco, o desenvolvimento fica simples e rápido. É exatamente o enquadramento que fazemos na Khufu antes de entregar uma V1 em produção em 7 dias, a preço fixo de 15.000 EUR: um escopo enxuto, validado com antecedência, para construir apenas o que prova o valor, e nada mais.",
      },
    ],
  },
  nl: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "SaaS-idee: de 7 vragen vóór je gaat coderen",
    excerpt:
      "Zeven vragen om te beantwoorden voordat je een regel code schrijft: probleem, doelgroep, betalingsbereidheid, V1-scope, differentiatie, kanaal, succes.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Product'],
    body: [
      {
        p: "Voordat je één regel code schrijft, bepalen zeven vragen of je SaaS-idee mag bestaan: welk probleem je oplost, voor wie, hoeveel die mensen betalen, wat de V1-scope is, waarin je verschilt, via welk kanaal je eerste klanten komen en hoe je succes meet. Ze eerlijk beantwoorden kost een dag. Ze negeren kost maanden ontwikkeling en tienduizenden euro's aan een product waar niemand op wachtte.",
      },
      { h2: "De 7 vragen, in één checklist" },
      {
        ul: [
          "Het probleem: welk concreet, frequent en pijnlijk probleem los je op?",
          "De doelgroep: wie beleeft het precies, erg genoeg om vandaag een oplossing te zoeken?",
          "De betalingsbereidheid: betalen die mensen er al voor, en hoeveel?",
          "De V1-scope: welke 3 tot 5 flows volstaan om de waarde te bewijzen?",
          "De differentiatie: waarom jij en niet de bestaande tools of een spreadsheet?",
          "Het acquisitiekanaal: waar komen je eerste 10 klanten vandaan?",
          "De succesmeting: welk enkel getal zegt dat het werkt binnen 90 dagen?",
        ],
      },
      { h2: "Het trio dat bepaalt of er een markt is" },
      {
        p: "De eerste drie vragen valideren de vraag. Een probleem dat een SaaS rechtvaardigt is frequent (het komt elke week terug, niet één keer per jaar) en pijnlijk (het kost tijd, geld of stress). De doelgroep moet precies genoeg zijn om tien concrete mensen te noemen die je morgen belt. En het betrouwbaarste signaal is de betalingsbereidheid: als je toekomstige klanten al een oplossing in elkaar knutselen met spreadsheets, betaalde tools of een dienstverlener, is de pijn echt. Hebben ze er nooit een cent aan uitgegeven, wees dan op je hoede.",
      },
      { h2: "Wat je echt bouwt" },
      {
        p: "Vragen 4 en 5 definiëren het product. De V1-scope moet in 3 tot 5 essentiële flows passen: al het andere is ruis die de lancering vertraagt. Differentiatie draait niet om een functielijst, maar om een heldere hoek — een slecht bediend segment, een integratie die niemand biedt, een snelheid die de grote spelers niet kunnen evenaren. Als je enige antwoord “maar beter” is, heb je nog geen differentiatie.",
      },
      {
        quote:
          "Coderen is het makkelijke deel. Het dure deel is zes maanden iets bouwen dat niemand wil kopen.",
      },
      { h2: "Hoe je het naar de markt brengt" },
      {
        p: "De laatste twee vragen bepalen het overleven. Een goed product zonder acquisitiekanaal vindt zijn klanten nooit: weet, vóór je gaat coderen, waar je eerste tien vandaan komen (netwerk, communities, SEO, directe benadering, partnerschappen). En stel één succesmetric voor 90 dagen vast — betalende klanten, terugkerende omzet, retentiegraad — om objectief te kiezen tussen doorzetten en pivoteren, in plaats van jezelf verhaaltjes te vertellen.",
      },
      {
        p: "Zodra die zeven antwoorden zwart op wit staan, wordt de ontwikkeling simpel en snel. Dat is precies de scoping die we bij Khufu doen voordat we een V1 in productie leveren in 7 dagen, tegen een vaste prijs van 15.000 EUR: een strakke, vooraf gevalideerde scope, om alleen te bouwen wat de waarde bewijst — en niets anders.",
      },
    ],
  },
  ar: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "فكرة SaaS: الأسئلة السبعة قبل البدء بالبرمجة",
    excerpt:
      "سبعة أسئلة يجب حسمها قبل كتابة سطر برمجي: المشكلة، الجمهور، الاستعداد للدفع، نطاق V1، التمايز، القناة، النجاح.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'المنتج'],
    body: [
      {
        p: "قبل أن تكتب سطرًا برمجيًا واحدًا، تحدد سبعة أسئلة ما إذا كانت فكرة SaaS تستحق الوجود: ما المشكلة التي تحلها، ولمن، وكم سيدفع هؤلاء الأشخاص، وما نطاق V1، وبِمَ تتميز، ومن أي قناة يأتي عملاؤك الأوائل، وكيف ستقيس النجاح. الإجابة عنها بصدق تستغرق يومًا واحدًا. أما تجاهلها فيكلف أشهرًا من التطوير وعشرات الآلاف من اليورو على منتج لم ينتظره أحد.",
      },
      { h2: "الأسئلة السبعة في قائمة تحقق واحدة" },
      {
        ul: [
          "المشكلة: أي مشكلة ملموسة ومتكررة ومؤلمة تحلها؟",
          "الجمهور: من يعيشها بالضبط، لدرجة البحث عن حل اليوم؟",
          "الاستعداد للدفع: هل يدفع هؤلاء الأشخاص بالفعل لحلها، وكم؟",
          "نطاق V1: أي 3 إلى 5 مسارات تكفي لإثبات القيمة؟",
          "التمايز: لماذا أنت وليس الأدوات القائمة أو جدول بيانات؟",
          "قناة الاكتساب: من أين يأتي عملاؤك العشرة الأوائل؟",
          "قياس النجاح: أي رقم واحد يقول إنها تنجح خلال 90 يومًا؟",
        ],
      },
      { h2: "الثلاثي الذي يقرر ما إذا كان هناك سوق" },
      {
        p: "تتحقق الأسئلة الثلاثة الأولى من الطلب. المشكلة التي تستحق SaaS متكررة (تعود كل أسبوع، لا مرة في السنة) ومؤلمة (تكلف وقتًا أو مالًا أو توترًا). ويجب أن يكون الجمهور دقيقًا بما يكفي لتسمية عشرة أشخاص محددين تتصل بهم غدًا. والإشارة الأكثر موثوقية هي الاستعداد للدفع: إذا كان عملاؤك المستقبليون يرتجلون حلًا بالفعل عبر جداول بيانات أو أدوات مدفوعة أو مزوّد خدمة، فالألم حقيقي. أما إن لم ينفقوا سنتًا واحدًا قط، فكن حذرًا.",
      },
      { h2: "ما الذي تبنيه فعلًا" },
      {
        p: "يحدد السؤالان الرابع والخامس المنتج. يجب أن يتسع نطاق V1 لـ 3 إلى 5 مسارات أساسية: وكل ما عدا ذلك ضجيج يؤخر الإطلاق. ولا يتحقق التمايز عبر قائمة ميزات بل عبر زاوية واضحة — شريحة سوق مُهمَلة، أو تكامل لا يقدمه أحد، أو سرعة لا يستطيع الكبار مجاراتها. وإذا كان جوابك الوحيد «لكن أفضل»، فأنت لا تملك تمايزًا بعد.",
      },
      {
        quote:
          "البرمجة هي الجزء السهل. الجزء المكلف هو قضاء ستة أشهر في بناء شيء لا يريد أحد شراءه.",
      },
      { h2: "كيف تطرحه في السوق" },
      {
        p: "يقرر السؤالان الأخيران البقاء. المنتج الجيد بلا قناة اكتساب لا يجد عملاءه أبدًا: اعرف، قبل البرمجة، من أين يأتي عملاؤك العشرة الأوائل (الشبكة، المجتمعات، SEO، التواصل المباشر، الشراكات). وحدد مقياس نجاح واحدًا لمدة 90 يومًا — عملاء يدفعون، إيراد متكرر، معدل احتفاظ — لتقرر بموضوعية بين المثابرة والتحول، بدل أن تروي لنفسك قصصًا.",
      },
      {
        p: "بمجرد كتابة هذه الإجابات السبع بالأبيض والأسود، يصبح التطوير بسيطًا وسريعًا. وهذا بالضبط هو التأطير الذي نقوم به في Khufu قبل تسليم V1 في الإنتاج خلال 7 أيام، بسعر ثابت قدره 15,000 EUR: نطاق محكم، مُتحقَّق منه مسبقًا، لبناء ما يثبت القيمة فقط — ولا شيء آخر.",
      },
    ],
  },
  pl: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "Pomysł na SaaS: 7 pytań przed pisaniem kodu",
    excerpt:
      "Siedem pytań do rozstrzygnięcia przed napisaniem linijki kodu: problem, grupa docelowa, gotowość do zapłaty, zakres V1, wyróżnik, kanał, sukces.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Produkt'],
    body: [
      {
        p: "Zanim napiszesz choćby jedną linijkę kodu, siedem pytań decyduje, czy Twój pomysł na SaaS zasługuje na istnienie: jaki problem rozwiązujesz, dla kogo, ile ci ludzie zapłacą, jaki jest zakres V1, czym się wyróżniasz, jakim kanałem przyjdą pierwsi klienci i jak zmierzysz sukces. Szczera odpowiedź zajmuje dzień. Zignorowanie ich kosztuje miesiące developmentu i dziesiątki tysięcy euro na produkt, na który nikt nie czekał.",
      },
      { h2: "7 pytań w jednej checklistcie" },
      {
        ul: [
          "Problem: jaki konkretny, częsty i bolesny problem rozwiązujesz?",
          "Grupa docelowa: kto dokładnie go przeżywa, na tyle mocno, by dziś szukać rozwiązania?",
          "Gotowość do zapłaty: czy ci ludzie już płacą za jego rozwiązanie, i ile?",
          "Zakres V1: które 3 do 5 ścieżek wystarczy, by udowodnić wartość?",
          "Wyróżnik: dlaczego Ty, a nie istniejące narzędzia albo arkusz kalkulacyjny?",
          "Kanał pozyskiwania: skąd przyjdzie Twoich pierwszych 10 klientów?",
          "Miara sukcesu: jaka jedna liczba mówi, że działa w ciągu 90 dni?",
        ],
      },
      { h2: "Trójka, która decyduje, czy jest rynek" },
      {
        p: "Pierwsze trzy pytania walidują popyt. Problem wart SaaS-a jest częsty (wraca co tydzień, nie raz w roku) i bolesny (kosztuje czas, pieniądze albo stres). Grupa docelowa musi być na tyle precyzyjna, byś mógł wymienić dziesięć konkretnych osób do zadzwonienia jutro. A najbardziej wiarygodnym sygnałem jest gotowość do zapłaty: jeśli Twoi przyszli klienci już sklejają rozwiązanie z arkuszy, płatnych narzędzi albo wykonawcy, ból jest realny. Jeśli nigdy nie wydali ani grosza, zachowaj ostrożność.",
      },
      { h2: "Co naprawdę budujesz" },
      {
        p: "Pytania 4 i 5 definiują produkt. Zakres V1 musi zmieścić się w 3 do 5 kluczowych ścieżkach: cała reszta to szum opóźniający start. Wyróżnik nie rozgrywa się na liście funkcji, lecz na wyraźnym kącie — źle obsługiwany segment, integracja, której nikt nie oferuje, szybkość, której duzi gracze nie dorównają. Jeśli Twoją jedyną odpowiedzią jest „ale lepiej”, nie masz jeszcze wyróżnika.",
      },
      {
        quote:
          "Kodowanie to łatwa część. Droga część to spędzić sześć miesięcy, budując coś, czego nikt nie chce kupić.",
      },
      { h2: "Jak wprowadzasz to na rynek" },
      {
        p: "Ostatnie dwa pytania decydują o przetrwaniu. Dobry produkt bez kanału pozyskiwania nigdy nie znajdzie klientów: wiedz, jeszcze przed pisaniem kodu, skąd przyjdzie Twoich pierwszych dziesięciu (sieć kontaktów, społeczności, SEO, bezpośrednia sprzedaż, partnerstwa). I ustal jedną metrykę sukcesu na 90 dni — płacący klienci, przychód powracający, wskaźnik retencji — by obiektywnie zdecydować między wytrwaniem a pivotem, zamiast opowiadać sobie historyjki.",
      },
      {
        p: "Gdy te siedem odpowiedzi jest już zapisanych czarno na białym, development staje się prosty i szybki. To dokładnie to kadrowanie robimy w Khufu, zanim dostarczymy produkcyjne V1 w 7 dni, w stałej cenie 15 000 EUR: wąski, wcześniej zwalidowany zakres, by budować tylko to, co dowodzi wartości — i nic więcej.",
      },
    ],
  },
  tr: {
    slug: 'idee-de-saas-7-questions-avant-de-coder',
    title: "SaaS fikri: kod yazmadan önce 7 soru",
    excerpt:
      "Bir satır kod yazmadan önce netleştirilecek yedi soru: problem, hedef kitle, ödeme isteği, V1 kapsamı, farklılaşma, kanal, başarı.",
    date: '2026-02-25',
    readingMinutes: 6,
    tags: ['Founder', 'Ürün'],
    body: [
      {
        p: "Tek bir satır kod yazmadan önce, SaaS fikrinizin var olmayı hak edip etmediğine yedi soru karar verir: hangi problemi çözüyorsunuz, kim için, bu insanlar ne kadar ödeyecek, V1 kapsamı nedir, neyle farklısınız, ilk müşterileriniz hangi kanaldan gelecek ve başarıyı nasıl ölçeceksiniz. Bunları dürüstçe yanıtlamak bir gün sürer. Görmezden gelmek ise aylarca geliştirme ve kimsenin beklemediği bir ürüne on binlerce euro maliyet demektir.",
      },
      { h2: "Tek bir kontrol listesinde 7 soru" },
      {
        ul: [
          "Problem: hangi somut, sık ve can yakan problemi çözüyorsunuz?",
          "Hedef kitle: bunu tam olarak kim yaşıyor, bugün çözüm arayacak kadar?",
          "Ödeme isteği: bu insanlar bunu çözmek için zaten ödüyor mu, ne kadar?",
          "V1 kapsamı: değeri kanıtlamak için hangi 3-5 akış yeter?",
          "Farklılaşma: mevcut araçlar ya da bir tablo yerine neden siz?",
          "Edinim kanalı: ilk 10 müşteriniz nereden geliyor?",
          "Başarı ölçütü: 90 günde işe yaradığını hangi tek sayı söyler?",
        ],
      },
      { h2: "Pazar olup olmadığına karar veren üçlü" },
      {
        p: "İlk üç soru talebi doğrular. Bir SaaS'ı hak eden problem sıktır (yılda bir değil, her hafta geri döner) ve can yakar (zaman, para ya da stres götürür). Hedef kitle, yarın arayacağınız on somut kişiyi sayabilecek kadar net olmalı. Ve en güvenilir sinyal ödeme isteğidir: müstakbel müşterileriniz zaten tablolar, ücretli araçlar veya bir tedarikçiyle bir çözümü baştan savma kuruyorsa, acı gerçektir. Hiç bir kuruş harcamamışlarsa, temkinli olun.",
      },
      { h2: "Gerçekte ne inşa ediyorsunuz" },
      {
        p: "4. ve 5. sorular ürünü tanımlar. V1 kapsamı 3-5 temel akışa sığmalı: geri kalan her şey lansmanı geciktiren gürültüdür. Farklılaşma bir özellik listesinde değil, net bir açıda oynanır — yeterince hizmet almayan bir segment, kimsenin sunmadığı bir entegrasyon, büyüklerin yetişemeyeceği bir hız. Tek yanıtınız “ama daha iyi” ise, henüz bir farklılaşmanız yok demektir.",
      },
      {
        quote:
          "Kod yazmak kolay kısım. Pahalı kısım, altı ay boyunca kimsenin satın almak istemediği bir şeyi inşa etmektir.",
      },
      { h2: "Pazara nasıl sunuyorsunuz" },
      {
        p: "Son iki soru hayatta kalmaya karar verir. Edinim kanalı olmayan iyi bir ürün müşterilerini asla bulamaz: kod yazmadan önce, ilk on müşterinizin nereden geleceğini bilin (ağ, topluluklar, SEO, doğrudan iletişim, iş birlikleri). Ve 90 gün için tek bir başarı metriği belirleyin — ödeyen müşteriler, yinelenen gelir, elde tutma oranı — kendinize hikâye anlatmak yerine ısrar etmekle yön değiştirmek arasında nesnel karar vermek için.",
      },
      {
        p: "Bu yedi yanıt siyah beyaz yazıya döküldüğünde, geliştirme basit ve hızlı hale gelir. Bu tam olarak Khufu'da, 15.000 EUR sabit fiyata 7 günde üretimde bir V1 teslim etmeden önce yaptığımız çerçevelemedir: yalnızca değeri kanıtlayanı inşa etmek için önceden doğrulanmış, dar bir kapsam — başka hiçbir şey değil.",
      },
    ],
  },
}
