import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'valider-une-idee-avant-d-investir',
    title: "Comment valider une idée de produit avant d’investir 15 000 €",
    excerpt:
      "Méthodes de validation à faible coût avant de payer une V1 : interviews, landing, pré-vente, faux bouton. Quels signaux valident vraiment.",
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validation'],
    body: [
      {
        p: "Avant de dépenser 15 000 € pour une V1, validez votre idée pour moins de 500 € en une à deux semaines. La règle est simple : un signal ne compte que s’il coûte quelque chose à votre prospect — de l’argent, du temps ou une donnée engageante. Un « super idée ! » gratuit ne vaut rien ; une pré-commande payée, un e-mail laissé pour être prévenu au lancement ou un appel réservé valent de l’or. Voici les quatre méthodes qui marchent, et les pièges à éviter.",
      },
      { h2: 'Les interviews problème (5 à 10 suffisent)' },
      {
        p: "Parlez à 5 à 10 personnes de votre cible avant d’écrire une ligne de code. L’objectif n’est pas de présenter votre solution mais de comprendre le problème : comment le résolvent-elles aujourd’hui, combien ça leur coûte, ce qu’elles ont déjà essayé. Posez des questions sur le passé, jamais sur le futur.",
      },
      {
        ul: [
          'Bon signal : la personne décrit un problème douloureux et récent, et paie déjà pour un contournement bancal.',
          'Mauvais signal : « oui ce serait bien » sur un ton poli. Le conditionnel est un feu rouge.',
          'À faire : demander « raconte-moi la dernière fois que… » plutôt que « est-ce que tu utiliserais… ».',
        ],
      },
      { h2: 'Landing page + pré-inscriptions' },
      {
        p: "Montez une landing page en une journée (Webflow, Framer ou Next.js sur Vercel) qui décrit la promesse, le bénéfice et un seul appel à l’action : laisser son e-mail. Envoyez-y du trafic ciblé — quelques centaines d’euros de publicité ou trois posts dans les bonnes communautés. Le taux de conversion visiteur → e-mail vous dit si le message résonne.",
      },
      {
        p: "Un repère : sur du trafic froid et qualifié, un taux d’inscription de 15 à 30 % est un vrai signal. En dessous de 5 %, votre promesse ou votre cible sont à revoir avant d’investir.",
      },
      { h2: 'La pré-vente : le seul signal qui ne ment pas' },
      {
        p: "Rien ne valide une idée comme un paiement. Proposez la pré-vente à prix réduit (« founding member »), un acompte remboursable, ou une lettre d’intention signée en B2B. Quelqu’un qui sort sa carte avant même que le produit existe vous confirme deux choses : le problème est réel et votre prix tient.",
      },
      {
        quote:
          "Le seul vote qui compte, c’est celui qu’on paie. Tout le reste n’est qu’un compliment poli.",
      },
      { h2: 'Le test du faux bouton (fake door)' },
      {
        p: "Ajoutez sur votre landing un bouton « Acheter » ou « Activer la fonctionnalité » qui mène non pas au produit mais à un message « Bientôt disponible — laissez votre e-mail ». Vous mesurez l’intention réelle, pas l’intention déclarée. C’est éthique tant que personne n’est débité et que l’attente est courte.",
      },
      { h2: 'Quels signaux trompent' },
      {
        ul: [
          'Les félicitations de vos proches : biais affectif, zéro valeur.',
          'Les likes et vues : de l’attention, pas de l’intention d’achat.',
          'Les « je testerais bien » sans passage à l’acte : le déclaratif surestime toujours le réel.',
          'Un sondage massif sans engagement : mille réponses gratuites pèsent moins que dix acomptes.',
        ],
      },
      {
        p: "Une fois le signal payant obtenu, vous n’investissez plus dans le vide. C’est le moment de passer à une vraie V1 en production — chez Khufu, un forfait à prix fixe de 15 000 €, livré en 7 jours — pour transformer une demande validée en produit que vos premiers clients peuvent utiliser tout de suite.",
      },
    ],
  },
  en: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'How to validate a product idea before investing €15,000',
    excerpt:
      'Low-cost ways to validate before paying for a V1: interviews, landing page, pre-sales, fake door. Which signals truly validate an idea.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validation'],
    body: [
      {
        p: "Before spending €15,000 on a V1, validate your idea for under €500 in one to two weeks. The rule is simple: a signal only counts if it costs your prospect something — money, time, or a committing piece of data. A free “great idea!” is worthless; a paid pre-order, an email left to be notified at launch, or a booked call are worth gold. Here are the four methods that work, and the traps to avoid.",
      },
      { h2: 'Problem interviews (5 to 10 are enough)' },
      {
        p: "Talk to 5 to 10 people in your target audience before writing a single line of code. The goal is not to pitch your solution but to understand the problem: how do they solve it today, what does it cost them, what have they already tried. Ask about the past, never about the future.",
      },
      {
        ul: [
          'Good signal: the person describes a painful, recent problem and already pays for a clumsy workaround.',
          "Bad signal: a polite “yeah, that would be nice.” The conditional tense is a red light.",
          "Do this: ask “tell me about the last time you…” rather than “would you use…”",
        ],
      },
      { h2: 'Landing page + pre-registrations' },
      {
        p: "Build a landing page in a day (Webflow, Framer, or Next.js on Vercel) that states the promise, the benefit, and a single call to action: leave an email. Send targeted traffic to it — a few hundred euros of ads or three posts in the right communities. The visitor-to-email conversion rate tells you whether the message resonates.",
      },
      {
        p: "A benchmark: on cold, qualified traffic, a signup rate of 15 to 30% is a real signal. Below 5%, your promise or your audience need rethinking before you invest.",
      },
      { h2: 'Pre-sales: the one signal that never lies' },
      {
        p: "Nothing validates an idea like a payment. Offer a discounted pre-sale (“founding member”), a refundable deposit, or a signed letter of intent in B2B. Someone who pulls out their card before the product even exists confirms two things: the problem is real and your price holds.",
      },
      {
        quote: "The only vote that counts is the one people pay for. Everything else is just a polite compliment.",
      },
      { h2: 'The fake door test' },
      {
        p: "Add a “Buy” or “Enable feature” button on your landing that leads not to the product but to a “Coming soon — leave your email” message. You measure real intent, not stated intent. It is ethical as long as no one is charged and the wait is short.",
      },
      { h2: 'Which signals deceive' },
      {
        ul: [
          'Praise from friends and family: emotional bias, zero value.',
          'Likes and views: attention, not purchase intent.',
          "“I’d try it” with no follow-through: stated intent always overstates the real thing.",
          'A massive survey with no commitment: a thousand free answers weigh less than ten deposits.',
        ],
      },
      {
        p: "Once you have a paying signal, you are no longer investing blindly. That is the moment to move to a real production V1 — at Khufu, a fixed-price package of €15,000, delivered in 7 days — to turn validated demand into a product your first customers can use right away.",
      },
    ],
  },
  es: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'Cómo validar una idea de producto antes de invertir 15 000 €',
    excerpt:
      'Métodos de bajo coste para validar antes de pagar una V1: entrevistas, landing, preventa, botón falso. Qué señales validan de verdad.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validación'],
    body: [
      {
        p: "Antes de gastar 15 000 € en una V1, valida tu idea por menos de 500 € en una o dos semanas. La regla es simple: una señal solo cuenta si le cuesta algo a tu prospecto — dinero, tiempo o un dato comprometedor. Un “¡gran idea!” gratis no vale nada; un pedido pagado por adelantado, un correo dejado para avisar en el lanzamiento o una llamada reservada valen oro. Estos son los cuatro métodos que funcionan y las trampas que evitar.",
      },
      { h2: 'Entrevistas de problema (bastan 5 a 10)' },
      {
        p: "Habla con 5 a 10 personas de tu público objetivo antes de escribir una sola línea de código. El objetivo no es presentar tu solución sino entender el problema: cómo lo resuelven hoy, cuánto les cuesta, qué han intentado ya. Pregunta por el pasado, nunca por el futuro.",
      },
      {
        ul: [
          'Buena señal: la persona describe un problema doloroso y reciente, y ya paga por un apaño torpe.',
          "Mala señal: un “sí, estaría bien” en tono cortés. El condicional es una luz roja.",
          "Haz esto: pregunta “cuéntame la última vez que…” en lugar de “¿usarías…?”",
        ],
      },
      { h2: 'Landing page + preinscripciones' },
      {
        p: "Monta una landing page en un día (Webflow, Framer o Next.js sobre Vercel) que describa la promesa, el beneficio y una sola llamada a la acción: dejar el correo. Envíale tráfico segmentado — unos cientos de euros de publicidad o tres publicaciones en las comunidades adecuadas. La tasa de conversión visitante → correo te dice si el mensaje resuena.",
      },
      {
        p: "Una referencia: con tráfico frío y cualificado, una tasa de registro del 15 al 30 % es una señal real. Por debajo del 5 %, tu promesa o tu público necesitan revisión antes de invertir.",
      },
      { h2: 'La preventa: la única señal que no miente' },
      {
        p: "Nada valida una idea como un pago. Ofrece una preventa con descuento (“founding member”), un anticipo reembolsable o una carta de intención firmada en B2B. Quien saca su tarjeta antes de que el producto exista te confirma dos cosas: el problema es real y tu precio se sostiene.",
      },
      {
        quote: "El único voto que cuenta es el que se paga. Todo lo demás es solo un cumplido cortés.",
      },
      { h2: 'La prueba del botón falso (fake door)' },
      {
        p: "Añade en tu landing un botón “Comprar” o “Activar función” que no lleve al producto sino a un mensaje “Próximamente — deja tu correo”. Mides la intención real, no la declarada. Es ético mientras nadie sea cobrado y la espera sea corta.",
      },
      { h2: 'Qué señales engañan' },
      {
        ul: [
          'Los elogios de tus allegados: sesgo afectivo, valor cero.',
          'Los likes y las vistas: atención, no intención de compra.',
          "Los “lo probaría” sin pasar a la acción: lo declarado siempre sobreestima lo real.",
          'Una encuesta masiva sin compromiso: mil respuestas gratis pesan menos que diez anticipos.',
        ],
      },
      {
        p: "Una vez obtenida la señal de pago, dejas de invertir a ciegas. Es el momento de pasar a una V1 real en producción — en Khufu, un paquete a precio fijo de 15 000 €, entregado en 7 días — para convertir una demanda validada en un producto que tus primeros clientes pueden usar de inmediato.",
      },
    ],
  },
  de: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'Wie du eine Produktidee validierst, bevor du 15.000 € investierst',
    excerpt:
      'Günstige Wege zur Validierung vor der V1: Interviews, Landingpage, Vorverkauf, Fake Door. Welche Signale eine Idee wirklich bestätigen.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validierung'],
    body: [
      {
        p: "Bevor du 15.000 € für eine V1 ausgibst, validiere deine Idee für unter 500 € in ein bis zwei Wochen. Die Regel ist einfach: Ein Signal zählt nur, wenn es deinen Interessenten etwas kostet — Geld, Zeit oder eine verbindliche Angabe. Ein kostenloses „tolle Idee!“ ist wertlos; eine bezahlte Vorbestellung, eine hinterlassene E-Mail für die Startbenachrichtigung oder ein gebuchter Call sind Gold wert. Hier sind die vier Methoden, die funktionieren, und die Fallen, die du meiden solltest.",
      },
      { h2: 'Problem-Interviews (5 bis 10 reichen)' },
      {
        p: "Sprich mit 5 bis 10 Personen deiner Zielgruppe, bevor du eine einzige Zeile Code schreibst. Ziel ist nicht, deine Lösung zu präsentieren, sondern das Problem zu verstehen: Wie lösen sie es heute, was kostet es sie, was haben sie schon probiert. Frag nach der Vergangenheit, nie nach der Zukunft.",
      },
      {
        ul: [
          'Gutes Signal: Die Person beschreibt ein schmerzhaftes, aktuelles Problem und zahlt bereits für einen holprigen Workaround.',
          "Schlechtes Signal: ein höfliches „ja, das wäre schön“. Der Konjunktiv ist eine rote Ampel.",
          "Mach das: Frag „erzähl mir vom letzten Mal, als…“ statt „würdest du… nutzen?“",
        ],
      },
      { h2: 'Landingpage + Vorregistrierungen' },
      {
        p: "Bau in einem Tag eine Landingpage (Webflow, Framer oder Next.js auf Vercel), die das Versprechen, den Nutzen und einen einzigen Call-to-Action beschreibt: die E-Mail hinterlassen. Schick gezielten Traffic darauf — ein paar hundert Euro Werbung oder drei Posts in den richtigen Communities. Die Conversion-Rate Besucher → E-Mail zeigt dir, ob die Botschaft ankommt.",
      },
      {
        p: "Ein Richtwert: Bei kaltem, qualifiziertem Traffic ist eine Anmelderate von 15 bis 30 % ein echtes Signal. Unter 5 % müssen dein Versprechen oder deine Zielgruppe überdacht werden, bevor du investierst.",
      },
      { h2: 'Der Vorverkauf: das einzige Signal, das nie lügt' },
      {
        p: "Nichts validiert eine Idee wie eine Zahlung. Biete einen vergünstigten Vorverkauf an („Founding Member“), eine rückzahlbare Anzahlung oder im B2B eine unterschriebene Absichtserklärung. Wer die Karte zückt, bevor das Produkt überhaupt existiert, bestätigt dir zwei Dinge: Das Problem ist echt und dein Preis hält.",
      },
      {
        quote: "Die einzige Stimme, die zählt, ist die, für die man bezahlt. Alles andere ist nur ein höfliches Kompliment.",
      },
      { h2: 'Der Fake-Door-Test' },
      {
        p: "Füge auf deiner Landingpage einen Button „Kaufen“ oder „Funktion aktivieren“ ein, der nicht zum Produkt führt, sondern zu einer Nachricht „Bald verfügbar — hinterlass deine E-Mail“. Du misst die echte Absicht, nicht die erklärte. Das ist ethisch, solange niemandem etwas berechnet wird und die Wartezeit kurz ist.",
      },
      { h2: 'Welche Signale täuschen' },
      {
        ul: [
          'Lob von Freunden und Familie: emotionale Verzerrung, null Wert.',
          'Likes und Views: Aufmerksamkeit, keine Kaufabsicht.',
          "„Ich würde es probieren“ ohne Handeln: die Aussage überschätzt immer die Realität.",
          'Eine massive Umfrage ohne Verbindlichkeit: tausend kostenlose Antworten wiegen weniger als zehn Anzahlungen.',
        ],
      },
      {
        p: "Sobald du ein zahlendes Signal hast, investierst du nicht mehr ins Blaue. Das ist der Moment, zu einer echten Produktions-V1 überzugehen — bei Khufu ein Festpreis-Paket von 15.000 €, geliefert in 7 Tagen — um validierte Nachfrage in ein Produkt zu verwandeln, das deine ersten Kunden sofort nutzen können.",
      },
    ],
  },
  it: {
    slug: 'valider-une-idee-avant-d-investir',
    title: "Come validare un'idea di prodotto prima di investire 15.000 €",
    excerpt:
      'Metodi a basso costo per validare prima di pagare una V1: interviste, landing, prevendita, pulsante finto. Quali segnali validano davvero.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validazione'],
    body: [
      {
        p: "Prima di spendere 15.000 € per una V1, valida la tua idea con meno di 500 € in una o due settimane. La regola è semplice: un segnale conta solo se costa qualcosa al tuo potenziale cliente — denaro, tempo o un dato impegnativo. Un “grande idea!” gratuito non vale nulla; un preordine pagato, un’email lasciata per essere avvisati al lancio o una call prenotata valgono oro. Ecco i quattro metodi che funzionano e le trappole da evitare.",
      },
      { h2: 'Le interviste sul problema (5 a 10 bastano)' },
      {
        p: "Parla con 5 a 10 persone del tuo target prima di scrivere una sola riga di codice. L’obiettivo non è presentare la tua soluzione ma capire il problema: come lo risolvono oggi, quanto costa loro, cosa hanno già provato. Chiedi del passato, mai del futuro.",
      },
      {
        ul: [
          'Buon segnale: la persona descrive un problema doloroso e recente, e paga già per un rimedio raffazzonato.',
          "Cattivo segnale: un “sì, sarebbe carino” in tono cortese. Il condizionale è un semaforo rosso.",
          "Da fare: chiedi “raccontami l’ultima volta che…” invece di “lo useresti…?”",
        ],
      },
      { h2: 'Landing page + preiscrizioni' },
      {
        p: "Costruisci una landing page in un giorno (Webflow, Framer o Next.js su Vercel) che descriva la promessa, il beneficio e una sola call to action: lasciare l’email. Invia traffico mirato — qualche centinaio di euro di pubblicità o tre post nelle community giuste. Il tasso di conversione visitatore → email ti dice se il messaggio funziona.",
      },
      {
        p: "Un riferimento: su traffico freddo e qualificato, un tasso di iscrizione del 15-30 % è un segnale reale. Sotto il 5 %, la tua promessa o il tuo target vanno rivisti prima di investire.",
      },
      { h2: "La prevendita: l'unico segnale che non mente" },
      {
        p: "Niente valida un’idea come un pagamento. Proponi una prevendita scontata (“founding member”), un acconto rimborsabile o una lettera d’intenti firmata nel B2B. Chi tira fuori la carta prima ancora che il prodotto esista ti conferma due cose: il problema è reale e il tuo prezzo regge.",
      },
      {
        quote: "L’unico voto che conta è quello che si paga. Tutto il resto è solo un complimento cortese.",
      },
      { h2: 'Il test del pulsante finto (fake door)' },
      {
        p: "Aggiungi sulla tua landing un pulsante “Acquista” o “Attiva funzione” che non porta al prodotto ma a un messaggio “Presto disponibile — lascia la tua email”. Misuri l’intenzione reale, non quella dichiarata. È etico finché nessuno viene addebitato e l’attesa è breve.",
      },
      { h2: 'Quali segnali ingannano' },
      {
        ul: [
          'I complimenti di amici e parenti: bias affettivo, valore zero.',
          "I like e le visualizzazioni: attenzione, non intenzione d’acquisto.",
          "I “lo proverei” senza passare all’azione: il dichiarato sovrastima sempre il reale.",
          'Un sondaggio di massa senza impegno: mille risposte gratuite pesano meno di dieci acconti.',
        ],
      },
      {
        p: "Una volta ottenuto il segnale a pagamento, non investi più al buio. È il momento di passare a una vera V1 in produzione — da Khufu, un pacchetto a prezzo fisso di 15.000 €, consegnato in 7 giorni — per trasformare una domanda validata in un prodotto che i tuoi primi clienti possono usare subito.",
      },
    ],
  },
  pt: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'Como validar uma ideia de produto antes de investir 15 000 €',
    excerpt:
      'Métodos de baixo custo para validar antes de pagar uma V1: entrevistas, landing, pré-venda, botão falso. Que sinais validam de verdade.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validação'],
    body: [
      {
        p: "Antes de gastar 15 000 € numa V1, valida a tua ideia por menos de 500 € em uma a duas semanas. A regra é simples: um sinal só conta se custar algo ao teu potencial cliente — dinheiro, tempo ou um dado comprometedor. Um “ótima ideia!” grátis não vale nada; uma pré-encomenda paga, um e-mail deixado para ser avisado no lançamento ou uma call agendada valem ouro. Aqui estão os quatro métodos que funcionam e as armadilhas a evitar.",
      },
      { h2: 'As entrevistas de problema (5 a 10 bastam)' },
      {
        p: "Fala com 5 a 10 pessoas do teu público-alvo antes de escrever uma única linha de código. O objetivo não é apresentar a tua solução mas entender o problema: como o resolvem hoje, quanto lhes custa, o que já tentaram. Pergunta sobre o passado, nunca sobre o futuro.",
      },
      {
        ul: [
          'Bom sinal: a pessoa descreve um problema doloroso e recente, e já paga por um remendo desajeitado.',
          "Mau sinal: um “sim, seria bom” em tom cortês. O condicional é um sinal vermelho.",
          "Faz isto: pergunta “conta-me a última vez que…” em vez de “usarias…?”",
        ],
      },
      { h2: 'Landing page + pré-inscrições' },
      {
        p: "Monta uma landing page num dia (Webflow, Framer ou Next.js na Vercel) que descreva a promessa, o benefício e uma única chamada à ação: deixar o e-mail. Envia-lhe tráfego segmentado — algumas centenas de euros de publicidade ou três posts nas comunidades certas. A taxa de conversão visitante → e-mail diz-te se a mensagem ressoa.",
      },
      {
        p: "Uma referência: em tráfego frio e qualificado, uma taxa de inscrição de 15 a 30 % é um sinal real. Abaixo de 5 %, a tua promessa ou o teu público precisam de revisão antes de investires.",
      },
      { h2: 'A pré-venda: o único sinal que não mente' },
      {
        p: "Nada valida uma ideia como um pagamento. Oferece uma pré-venda com desconto (“founding member”), um sinal reembolsável ou uma carta de intenção assinada no B2B. Quem tira o cartão antes de o produto existir confirma-te duas coisas: o problema é real e o teu preço aguenta.",
      },
      {
        quote: "O único voto que conta é aquele que se paga. Todo o resto é apenas um elogio cortês.",
      },
      { h2: 'O teste do botão falso (fake door)' },
      {
        p: "Adiciona na tua landing um botão “Comprar” ou “Ativar funcionalidade” que não leva ao produto mas a uma mensagem “Em breve — deixa o teu e-mail”. Mede a intenção real, não a declarada. É ético desde que ninguém seja cobrado e a espera seja curta.",
      },
      { h2: 'Que sinais enganam' },
      {
        ul: [
          'Os elogios de amigos e familiares: viés afetivo, valor zero.',
          'Os likes e as visualizações: atenção, não intenção de compra.',
          "Os “eu experimentaria” sem passar à ação: o declarado sobrestima sempre o real.",
          'Um inquérito em massa sem compromisso: mil respostas grátis pesam menos que dez sinais pagos.',
        ],
      },
      {
        p: "Uma vez obtido o sinal pago, deixas de investir às cegas. É o momento de passar a uma V1 real em produção — na Khufu, um pacote a preço fixo de 15 000 €, entregue em 7 dias — para transformar uma procura validada num produto que os teus primeiros clientes podem usar de imediato.",
      },
    ],
  },
  nl: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'Hoe je een productidee valideert voordat je 15.000 € investeert',
    excerpt:
      'Goedkope manieren om te valideren voor je een V1 betaalt: interviews, landingspagina, pre-sale, fake door. Welke signalen echt valideren.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Validatie'],
    body: [
      {
        p: "Voordat je 15.000 € aan een V1 uitgeeft, valideer je je idee voor minder dan 500 € in een tot twee weken. De regel is simpel: een signaal telt alleen als het je prospect iets kost — geld, tijd of een verbindend gegeven. Een gratis “geweldig idee!” is waardeloos; een betaalde pre-order, een achtergelaten e-mail om bij de lancering te worden gewaarschuwd of een geboekte call zijn goud waard. Hier zijn de vier methoden die werken, en de valkuilen die je moet vermijden.",
      },
      { h2: 'Probleeminterviews (5 tot 10 volstaan)' },
      {
        p: "Praat met 5 tot 10 mensen uit je doelgroep voordat je één regel code schrijft. Het doel is niet je oplossing pitchen maar het probleem begrijpen: hoe lossen ze het vandaag op, wat kost het hen, wat hebben ze al geprobeerd. Vraag naar het verleden, nooit naar de toekomst.",
      },
      {
        ul: [
          'Goed signaal: de persoon beschrijft een pijnlijk, recent probleem en betaalt al voor een houterige workaround.',
          "Slecht signaal: een beleefd “ja, dat zou fijn zijn”. De voorwaardelijke tijd is een rood licht.",
          "Doe dit: vraag “vertel me over de laatste keer dat…” in plaats van “zou je… gebruiken?”",
        ],
      },
      { h2: 'Landingspagina + voorinschrijvingen' },
      {
        p: "Bouw in een dag een landingspagina (Webflow, Framer of Next.js op Vercel) die de belofte, het voordeel en één enkele call-to-action beschrijft: een e-mail achterlaten. Stuur er gericht verkeer naartoe — een paar honderd euro advertenties of drie posts in de juiste communities. De conversieratio bezoeker → e-mail vertelt je of de boodschap aanslaat.",
      },
      {
        p: "Een richtlijn: bij koud, gekwalificeerd verkeer is een aanmeldpercentage van 15 tot 30 % een echt signaal. Onder de 5 % moeten je belofte of je doelgroep worden heroverwogen voordat je investeert.",
      },
      { h2: 'De pre-sale: het enige signaal dat nooit liegt' },
      {
        p: "Niets valideert een idee zoals een betaling. Bied een pre-sale met korting aan (“founding member”), een terugbetaalbaar voorschot of een ondertekende intentieverklaring in B2B. Iemand die zijn kaart trekt voordat het product bestaat, bevestigt je twee dingen: het probleem is echt en je prijs houdt stand.",
      },
      {
        quote: "De enige stem die telt, is die waarvoor betaald wordt. Al het andere is slechts een beleefd compliment.",
      },
      { h2: 'De fake door-test' },
      {
        p: "Voeg op je landingspagina een knop “Kopen” of “Functie activeren” toe die niet naar het product leidt maar naar een bericht “Binnenkort beschikbaar — laat je e-mail achter”. Je meet de echte intentie, niet de verklaarde. Het is ethisch zolang niemand wordt afgeschreven en het wachten kort is.",
      },
      { h2: 'Welke signalen misleiden' },
      {
        ul: [
          'Complimenten van vrienden en familie: emotionele bias, nul waarde.',
          'Likes en views: aandacht, geen koopintentie.',
          "“Ik zou het proberen” zonder actie: het verklaarde overschat altijd de realiteit.",
          'Een massale enquête zonder verbintenis: duizend gratis antwoorden wegen minder dan tien voorschotten.',
        ],
      },
      {
        p: "Zodra je een betalend signaal hebt, investeer je niet langer in het wilde weg. Dat is het moment om naar een echte productie-V1 te gaan — bij Khufu een vaste prijs van 15.000 €, geleverd in 7 dagen — om gevalideerde vraag om te zetten in een product dat je eerste klanten meteen kunnen gebruiken.",
      },
    ],
  },
  ar: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'كيف تتحقق من صحة فكرة منتج قبل استثمار 15,000 €',
    excerpt:
      'طرق منخفضة التكلفة للتحقق قبل دفع ثمن V1: مقابلات، صفحة هبوط، بيع مسبق، زر وهمي. أي الإشارات تُثبت الفكرة فعلاً.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'التحقق'],
    body: [
      {
        p: "قبل إنفاق 15,000 € على V1، تحقق من فكرتك بأقل من 500 € خلال أسبوع إلى أسبوعين. القاعدة بسيطة: الإشارة لا تُحتسب إلا إذا كلّفت عميلك المحتمل شيئاً — مالاً أو وقتاً أو بياناً ملزِماً. عبارة “فكرة رائعة!” المجانية لا تساوي شيئاً؛ أما الطلب المسبق المدفوع، أو بريد إلكتروني تُرك للتنبيه عند الإطلاق، أو مكالمة محجوزة فتساوي ذهباً. إليك الطرق الأربع التي تنجح، والفخاخ التي يجب تجنّبها.",
      },
      { h2: 'مقابلات المشكلة (من 5 إلى 10 تكفي)' },
      {
        p: "تحدّث إلى 5 إلى 10 أشخاص من جمهورك المستهدف قبل كتابة سطر واحد من الكود. الهدف ليس عرض حلّك بل فهم المشكلة: كيف يحلّونها اليوم، وكم تكلّفهم، وما الذي جرّبوه بالفعل. اسأل عن الماضي، لا عن المستقبل أبداً.",
      },
      {
        ul: [
          'إشارة جيدة: الشخص يصف مشكلة مؤلمة وحديثة، ويدفع بالفعل مقابل حلّ ملتوٍ.',
          'إشارة سيئة: “نعم، سيكون ذلك جميلاً” بنبرة مجاملة. صيغة الشرط ضوء أحمر.',
          'افعل هذا: اسأل “أخبرني عن آخر مرة…” بدلاً من “هل ستستخدم…؟”',
        ],
      },
      { h2: 'صفحة هبوط + تسجيلات مسبقة' },
      {
        p: "ابنِ صفحة هبوط في يوم واحد (Webflow أو Framer أو Next.js على Vercel) تصف الوعد والفائدة ودعوة واحدة لاتخاذ إجراء: ترك البريد الإلكتروني. وجّه إليها زيارات مستهدفة — بضع مئات من اليوروهات إعلانات أو ثلاثة منشورات في المجتمعات المناسبة. معدّل التحويل من زائر إلى بريد إلكتروني يخبرك إن كانت الرسالة تلقى صدى.",
      },
      {
        p: "مرجع تقريبي: على زيارات باردة ومؤهّلة، معدّل تسجيل من 15 إلى 30 % إشارة حقيقية. وتحت 5 %، يجب مراجعة وعدك أو جمهورك قبل الاستثمار.",
      },
      { h2: 'البيع المسبق: الإشارة الوحيدة التي لا تكذب' },
      {
        p: "لا شيء يُثبت فكرة مثل الدفع. اعرض بيعاً مسبقاً بسعر مخفّض (“founding member”)، أو دفعة مقدّمة قابلة للاسترداد، أو خطاب نوايا موقّعاً في B2B. من يُخرج بطاقته قبل وجود المنتج يؤكد لك أمرين: المشكلة حقيقية وسعرك صامد.",
      },
      {
        quote: "الصوت الوحيد الذي يُحتسب هو الذي يُدفع مقابله. وكل ما عداه مجرد مجاملة مهذّبة.",
      },
      { h2: 'اختبار الزر الوهمي (fake door)' },
      {
        p: "أضف إلى صفحتك زر “شراء” أو “تفعيل الميزة” لا يؤدي إلى المنتج بل إلى رسالة “قريباً — اترك بريدك الإلكتروني”. أنت تقيس النية الحقيقية، لا النية المُعلَنة. وهو أمر أخلاقي ما دام لا يُخصم من أحد وما دام الانتظار قصيراً.",
      },
      { h2: 'أي الإشارات تخدع' },
      {
        ul: [
          'مديح المقرّبين: تحيّز عاطفي، قيمة صفرية.',
          'الإعجابات والمشاهدات: انتباه، لا نية شراء.',
          'عبارات “قد أجرّبه” دون فعل: المُعلَن يبالغ دائماً في تقدير الواقع.',
          'استطلاع واسع دون التزام: ألف إجابة مجانية تزن أقل من عشر دفعات مقدّمة.',
        ],
      },
      {
        p: "بمجرد حصولك على إشارة مدفوعة، لم تعد تستثمر في الفراغ. هذه هي لحظة الانتقال إلى V1 حقيقية في الإنتاج — لدى Khufu، باقة بسعر ثابت قدره 15,000 €، تُسلَّم في 7 أيام — لتحويل طلب مُثبَت إلى منتج يستطيع عملاؤك الأوائل استخدامه فوراً.",
      },
    ],
  },
  pl: {
    slug: 'valider-une-idee-avant-d-investir',
    title: 'Jak zweryfikować pomysł na produkt przed inwestycją 15 000 €',
    excerpt:
      'Tanie sposoby weryfikacji przed zapłatą za V1: wywiady, landing, przedsprzedaż, fałszywy przycisk. Które sygnały naprawdę potwierdzają.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Walidacja'],
    body: [
      {
        p: "Zanim wydasz 15 000 € na V1, zweryfikuj swój pomysł za mniej niż 500 € w jeden do dwóch tygodni. Zasada jest prosta: sygnał liczy się tylko wtedy, gdy coś kosztuje twojego potencjalnego klienta — pieniądze, czas albo zobowiązującą daną. Darmowe „świetny pomysł!” nie jest warte nic; opłacone przedzamówienie, e-mail zostawiony po to, by dostać powiadomienie o premierze, albo zarezerwowana rozmowa są warte złota. Oto cztery metody, które działają, i pułapki, których należy unikać.",
      },
      { h2: 'Wywiady o problemie (5 do 10 wystarczy)' },
      {
        p: "Porozmawiaj z 5 do 10 osobami z twojej grupy docelowej, zanim napiszesz choćby jedną linijkę kodu. Celem nie jest prezentacja twojego rozwiązania, ale zrozumienie problemu: jak rozwiązują go dziś, ile ich to kosztuje, co już próbowali. Pytaj o przeszłość, nigdy o przyszłość.",
      },
      {
        ul: [
          'Dobry sygnał: osoba opisuje bolesny, niedawny problem i już płaci za koślawą obejściową metodę.',
          "Zły sygnał: uprzejme „tak, byłoby fajnie”. Tryb warunkowy to czerwone światło.",
          "Zrób to: pytaj „opowiedz mi o ostatnim razie, gdy…” zamiast „czy użyłbyś…?”",
        ],
      },
      { h2: 'Landing page + wcześniejsze zapisy' },
      {
        p: "Zbuduj landing page w jeden dzień (Webflow, Framer lub Next.js na Vercel), który opisuje obietnicę, korzyść i jedno wezwanie do działania: zostawienie e-maila. Skieruj na niego ukierunkowany ruch — kilkaset euro reklam albo trzy posty w odpowiednich społecznościach. Współczynnik konwersji odwiedzający → e-mail mówi ci, czy przekaz trafia.",
      },
      {
        p: "Punkt odniesienia: przy zimnym, kwalifikowanym ruchu współczynnik zapisów od 15 do 30 % to prawdziwy sygnał. Poniżej 5 % twoja obietnica lub grupa docelowa wymagają przemyślenia przed inwestycją.",
      },
      { h2: 'Przedsprzedaż: jedyny sygnał, który nigdy nie kłamie' },
      {
        p: "Nic nie weryfikuje pomysłu tak jak płatność. Zaproponuj przedsprzedaż ze zniżką („founding member”), zwrotną zaliczkę albo podpisany list intencyjny w B2B. Ktoś, kto wyciąga kartę, zanim produkt w ogóle istnieje, potwierdza ci dwie rzeczy: problem jest realny, a twoja cena się broni.",
      },
      {
        quote: "Jedyny głos, który się liczy, to ten, za który się płaci. Cała reszta to tylko uprzejmy komplement.",
      },
      { h2: 'Test fałszywego przycisku (fake door)' },
      {
        p: "Dodaj na swoim landingu przycisk „Kup” lub „Włącz funkcję”, który nie prowadzi do produktu, lecz do komunikatu „Wkrótce dostępne — zostaw swój e-mail”. Mierzysz prawdziwą intencję, a nie deklarowaną. Jest to etyczne, dopóki nikt nie zostaje obciążony i oczekiwanie jest krótkie.",
      },
      { h2: 'Które sygnały zwodzą' },
      {
        ul: [
          'Pochwały bliskich: uprzedzenie emocjonalne, zerowa wartość.',
          'Polubienia i wyświetlenia: uwaga, a nie intencja zakupu.',
          "„Spróbowałbym” bez przejścia do działania: deklaracja zawsze przecenia rzeczywistość.",
          'Masowa ankieta bez zobowiązania: tysiąc darmowych odpowiedzi waży mniej niż dziesięć zaliczek.',
        ],
      },
      {
        p: "Gdy już masz płacący sygnał, nie inwestujesz w próżnię. To moment, by przejść do prawdziwej produkcyjnej V1 — w Khufu pakiet w stałej cenie 15 000 €, dostarczony w 7 dni — aby przekształcić zweryfikowany popyt w produkt, którego twoi pierwsi klienci mogą używać od razu.",
      },
    ],
  },
  tr: {
    slug: 'valider-une-idee-avant-d-investir',
    title: '15.000 € yatırım yapmadan önce bir ürün fikri nasıl doğrulanır',
    excerpt:
      'Bir V1 için ödeme yapmadan önce düşük maliyetli doğrulama yöntemleri: görüşmeler, landing, ön satış, sahte buton. Hangi sinyaller gerçekten doğrular.',
    date: '2026-02-18',
    readingMinutes: 6,
    tags: ['Founder', 'Doğrulama'],
    body: [
      {
        p: "Bir V1 için 15.000 € harcamadan önce, fikrini bir ila iki hafta içinde 500 €'nin altında doğrula. Kural basit: bir sinyal, ancak potansiyel müşterine bir bedele mal oluyorsa sayılır — para, zaman ya da bağlayıcı bir veri. Bedava bir “harika fikir!” hiçbir şey ifade etmez; ödenmiş bir ön sipariş, lansmanda haberdar edilmek için bırakılmış bir e-posta ya da ayrılmış bir görüşme altın değerindedir. İşte işe yarayan dört yöntem ve kaçınılması gereken tuzaklar.",
      },
      { h2: 'Problem görüşmeleri (5 ila 10 yeterli)' },
      {
        p: "Tek satır kod yazmadan önce hedef kitlenden 5 ila 10 kişiyle konuş. Amaç çözümünü sunmak değil, problemi anlamak: bugün nasıl çözüyorlar, onlara neye mal oluyor, daha önce neyi denediler. Gelecek hakkında değil, hep geçmiş hakkında sor.",
      },
      {
        ul: [
          'İyi sinyal: kişi acı verici ve yakın zamanlı bir problemi anlatıyor ve zaten sakar bir geçici çözüm için para ödüyor.',
          "Kötü sinyal: kibar bir tonda “evet, güzel olurdu”. Şart kipi kırmızı ışıktır.",
          "Şunu yap: “kullanır mıydın…?” yerine “en son ne zaman… anlat bana” diye sor.",
        ],
      },
      { h2: 'Landing page + ön kayıtlar' },
      {
        p: "Bir günde vaadi, faydayı ve tek bir eylem çağrısını anlatan bir landing page kur (Webflow, Framer ya da Vercel üzerinde Next.js): e-posta bırakmak. Ona hedefli trafik gönder — birkaç yüz euroluk reklam ya da doğru topluluklarda üç gönderi. Ziyaretçi → e-posta dönüşüm oranı, mesajın karşılık bulup bulmadığını söyler.",
      },
      {
        p: "Bir ölçüt: soğuk ve nitelikli trafikte %15 ila %30 kayıt oranı gerçek bir sinyaldir. %5'in altında, yatırım yapmadan önce vaadin ya da hedef kitlen yeniden düşünülmelidir.",
      },
      { h2: 'Ön satış: asla yalan söylemeyen tek sinyal' },
      {
        p: "Hiçbir şey bir fikri ödeme kadar doğrulamaz. İndirimli bir ön satış (“founding member”), iade edilebilir bir kapora ya da B2B'de imzalı bir niyet mektubu öner. Ürün daha var olmadan kartını çıkaran biri sana iki şeyi doğrular: problem gerçektir ve fiyatın tutarlıdır.",
      },
      {
        quote: "Sayılan tek oy, uğruna ödeme yapılan oydur. Geri kalan her şey yalnızca kibar bir iltifattır.",
      },
      { h2: 'Sahte buton testi (fake door)' },
      {
        p: "Landing sayfana ürüne değil de “Çok yakında — e-postanı bırak” mesajına götüren bir “Satın al” ya da “Özelliği etkinleştir” butonu ekle. Beyan edilen niyeti değil, gerçek niyeti ölçersin. Kimseden ücret alınmadığı ve bekleme kısa olduğu sürece bu etiktir.",
      },
      { h2: 'Hangi sinyaller yanıltır' },
      {
        ul: [
          'Yakınlarının övgüsü: duygusal önyargı, sıfır değer.',
          'Beğeniler ve görüntülenmeler: dikkat, satın alma niyeti değil.',
          "Eyleme geçmeyen “denerdim” ifadeleri: beyan her zaman gerçeği abartır.",
          'Taahhütsüz büyük bir anket: bin bedava yanıt, on kaporadan daha az ağırlık taşır.',
        ],
      },
      {
        p: "Ödeme yapan bir sinyal elde ettiğinde artık boşluğa yatırım yapmıyorsun. İşte tam da gerçek bir üretim V1'ine geçme anı — Khufu'da 7 günde teslim edilen 15.000 € sabit fiyatlı bir paket — doğrulanmış talebi, ilk müşterilerinin hemen kullanabileceği bir ürüne dönüştürmek için.",
      },
    ],
  },
}
