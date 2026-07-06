import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: "Trouver ses 10 premiers utilisateurs quand on n'a pas encore de produit",
    excerpt:
      "Comment décrocher ses 10 premiers utilisateurs sans produit fini : réseau, communautés, DM ciblés, landing et pré-vente. Ce qui marche vraiment.",
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "On ne trouve pas ses 10 premiers utilisateurs avec de la publicité, mais avec des conversations une à une. À ce stade, l'objectif n'est pas la croissance : c'est la preuve. Dix personnes qui vivent réellement le problème, à qui vous parlez directement, valent plus que 10 000 visiteurs anonymes. Voici les tactiques concrètes qui fonctionnent avant même d'avoir un produit fini.",
      },
      { h2: 'Commencez par votre réseau proche' },
      {
        p: "Vos 10 premiers utilisateurs sont presque toujours à moins de deux poignées de main de vous. Ne cherchez pas à passer à l'échelle : listez 30 personnes qui ont probablement le problème que vous résolvez, et contactez-les une par une, personnellement.",
      },
      {
        ul: [
          "Anciens collègues et clients : ils connaissent déjà votre sérieux, la barrière de confiance est levée.",
          "Amis d'amis dans le secteur visé : une intro chaude convertit dix fois mieux qu'un message à froid.",
          "Personnes qui se sont plaintes du problème devant vous : notez-les, ce sont vos meilleurs candidats.",
        ],
      },
      { h2: 'Allez là où votre cible se plaint déjà' },
      {
        p: "Vos futurs utilisateurs discutent déjà de leur problème quelque part : un Slack de secteur, un subreddit, un serveur Discord, un groupe LinkedIn, un forum spécialisé. Ne spammez pas votre lien. Rendez-vous utile, répondez à de vraies questions, et laissez les gens venir demander ce que vous préparez.",
      },
      {
        ul: [
          "Identifiez 3 à 5 communautés où votre cible est active chaque semaine.",
          "Apportez de la valeur pendant deux semaines avant de mentionner quoi que ce soit.",
          "Quand quelqu'un décrit exactement le problème, passez en DM : c'est le signal d'achat le plus fiable.",
        ],
      },
      { h2: 'Envoyez des DM ciblés, pas des messages de masse' },
      {
        p: "Le message froid fonctionne encore, à condition d'être ultra-ciblé et personnel. Envoyez 10 messages sur-mesure plutôt que 500 génériques. Parlez du problème de la personne, jamais de votre produit en premier. Un bon DM pose une question, il ne vend rien.",
      },
      {
        quote:
          "Vos 10 premiers utilisateurs ne s'obtiennent pas à l'échelle. Ils s'obtiennent une conversation à la fois.",
      },
      { h2: 'Testez avec une landing et une pré-vente' },
      {
        p: "Vous n'avez pas besoin d'un produit fini pour tester la demande, seulement d'une promesse claire. Une simple landing page avec un bouton de pré-inscription ou de pré-commande mesure un intérêt réel. Une pré-vente, même symbolique, est le seul vrai test : personne ne sort sa carte pour une idée à laquelle il ne croit pas.",
      },
      {
        ul: [
          "Une page qui décrit le bénéfice, un formulaire d'e-mail, et un appel à l'action unique.",
          "Proposez une offre de lancement à prix réduit aux 10 premiers qui s'engagent.",
          "Un e-mail collecté, c'est de la curiosité ; un paiement, c'est une validation.",
        ],
      },
      { h2: 'Transformez la validation en produit, vite' },
      {
        p: "Une fois ces 10 utilisateurs convaincus, la fenêtre est courte : ils attendent une vraie solution avant de passer à autre chose. C'est là qu'une V1 en production change tout. Chez Khufu, on livre un produit prêt pour la production en 7 jours, à prix fixe de 15 000 €, pour transformer vos premières promesses en usage réel avant que l'élan ne retombe.",
      },
    ],
  },
  en: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: "Finding your first 10 users when you don't have a product yet",
    excerpt:
      "How to land your first 10 users with no finished product: network, communities, targeted DMs, landing page and pre-sales. What actually works.",
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "You don't find your first 10 users with advertising — you find them through one-on-one conversations. At this stage the goal isn't growth, it's proof. Ten people who genuinely live the problem and whom you talk to directly are worth more than 10,000 anonymous visitors. Here are the concrete tactics that work before you even have a finished product.",
      },
      { h2: 'Start with your close network' },
      {
        p: "Your first 10 users are almost always fewer than two handshakes away. Don't try to scale: list 30 people who probably have the problem you solve, and reach out to each of them, personally.",
      },
      {
        ul: [
          'Former colleagues and clients: they already know you deliver, so the trust barrier is gone.',
          'Friends of friends in your target sector: a warm intro converts ten times better than a cold message.',
          'People who have complained about the problem in front of you: write them down, they are your best candidates.',
        ],
      },
      { h2: 'Go where your audience already complains' },
      {
        p: "Your future users are already discussing their problem somewhere: an industry Slack, a subreddit, a Discord server, a LinkedIn group, a niche forum. Don't spam your link. Be useful, answer real questions, and let people come and ask what you're building.",
      },
      {
        ul: [
          'Identify 3 to 5 communities where your audience is active every week.',
          'Add value for two weeks before mentioning anything.',
          "When someone describes exactly the problem, move to DMs: it's the most reliable buying signal.",
        ],
      },
      { h2: 'Send targeted DMs, not mass messages' },
      {
        p: "Cold outreach still works, provided it's hyper-targeted and personal. Send 10 tailored messages rather than 500 generic ones. Talk about the person's problem, never your product first. A good DM asks a question — it sells nothing.",
      },
      {
        quote: "Your first 10 users aren't won at scale. They're won one conversation at a time.",
      },
      { h2: 'Test with a landing page and pre-sales' },
      {
        p: "You don't need a finished product to test demand, just a clear promise. A simple landing page with a pre-signup or pre-order button measures real interest. A pre-sale, even a symbolic one, is the only true test: nobody pulls out their card for an idea they don't believe in.",
      },
      {
        ul: [
          'A page that describes the benefit, an email form, and a single call to action.',
          'Offer a discounted launch deal to the first 10 who commit.',
          'A collected email is curiosity; a payment is validation.',
        ],
      },
      { h2: 'Turn validation into a product, fast' },
      {
        p: "Once those 10 users are convinced, the window is short: they expect a real solution before they move on. This is where a production V1 changes everything. At Khufu we ship a production-ready product in 7 days, at a fixed price of €15,000, to turn your first promises into real usage before the momentum fades.",
      },
    ],
  },
  es: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Cómo conseguir tus 10 primeros usuarios cuando aún no tienes producto',
    excerpt:
      'Cómo lograr tus 10 primeros usuarios sin producto terminado: red, comunidades, DM dirigidos, landing y preventa. Lo que de verdad funciona.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "No consigues tus 10 primeros usuarios con publicidad, sino con conversaciones uno a uno. En esta etapa el objetivo no es el crecimiento: es la prueba. Diez personas que viven realmente el problema y con las que hablas directamente valen más que 10.000 visitantes anónimos. Estas son las tácticas concretas que funcionan antes incluso de tener un producto terminado.",
      },
      { h2: 'Empieza por tu red cercana' },
      {
        p: "Tus 10 primeros usuarios casi siempre están a menos de dos apretones de manos de ti. No intentes escalar: haz una lista de 30 personas que probablemente tengan el problema que resuelves y contáctalas una a una, en persona.",
      },
      {
        ul: [
          'Antiguos colegas y clientes: ya conocen tu seriedad, la barrera de confianza está superada.',
          'Amigos de amigos en el sector objetivo: una presentación cálida convierte diez veces mejor que un mensaje en frío.',
          'Personas que se han quejado del problema delante de ti: apúntalas, son tus mejores candidatos.',
        ],
      },
      { h2: 'Ve donde tu público ya se queja' },
      {
        p: "Tus futuros usuarios ya hablan de su problema en algún sitio: un Slack del sector, un subreddit, un servidor de Discord, un grupo de LinkedIn, un foro especializado. No hagas spam con tu enlace. Sé útil, responde a preguntas reales y deja que la gente venga a preguntar qué estás preparando.",
      },
      {
        ul: [
          'Identifica de 3 a 5 comunidades donde tu público esté activo cada semana.',
          'Aporta valor durante dos semanas antes de mencionar nada.',
          'Cuando alguien describa exactamente el problema, pasa al DM: es la señal de compra más fiable.',
        ],
      },
      { h2: 'Envía DM dirigidos, no mensajes masivos' },
      {
        p: "El mensaje en frío todavía funciona, siempre que sea muy dirigido y personal. Envía 10 mensajes a medida en lugar de 500 genéricos. Habla del problema de la persona, nunca de tu producto primero. Un buen DM plantea una pregunta, no vende nada.",
      },
      {
        quote: 'Tus 10 primeros usuarios no se ganan a escala. Se ganan una conversación a la vez.',
      },
      { h2: 'Prueba con una landing y una preventa' },
      {
        p: "No necesitas un producto terminado para probar la demanda, solo una promesa clara. Una simple landing page con un botón de preinscripción o pre-pedido mide un interés real. Una preventa, aunque sea simbólica, es la única prueba de verdad: nadie saca la tarjeta por una idea en la que no cree.",
      },
      {
        ul: [
          'Una página que describa el beneficio, un formulario de e-mail y una única llamada a la acción.',
          'Ofrece una promoción de lanzamiento con descuento a los 10 primeros que se comprometan.',
          'Un e-mail recogido es curiosidad; un pago es validación.',
        ],
      },
      { h2: 'Convierte la validación en producto, rápido' },
      {
        p: "Una vez convencidos esos 10 usuarios, la ventana es corta: esperan una solución real antes de pasar a otra cosa. Aquí es donde una V1 en producción lo cambia todo. En Khufu entregamos un producto listo para producción en 7 días, a un precio fijo de 15.000 €, para convertir tus primeras promesas en uso real antes de que el impulso se apague.",
      },
    ],
  },
  de: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Die ersten 10 Nutzer finden, wenn du noch kein Produkt hast',
    excerpt:
      'So gewinnst du deine ersten 10 Nutzer ohne fertiges Produkt: Netzwerk, Communities, gezielte DMs, Landingpage und Vorverkauf. Was wirklich funktioniert.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Deine ersten 10 Nutzer findest du nicht mit Werbung, sondern durch Einzelgespräche. In dieser Phase ist das Ziel nicht Wachstum, sondern Beweis. Zehn Menschen, die das Problem wirklich erleben und mit denen du direkt sprichst, sind mehr wert als 10.000 anonyme Besucher. Hier sind die konkreten Taktiken, die funktionieren, bevor du überhaupt ein fertiges Produkt hast.",
      },
      { h2: 'Beginne mit deinem engen Netzwerk' },
      {
        p: "Deine ersten 10 Nutzer sind fast immer weniger als zwei Händedrücke entfernt. Versuche nicht zu skalieren: Liste 30 Personen auf, die wahrscheinlich das Problem haben, das du löst, und sprich jede einzeln und persönlich an.",
      },
      {
        ul: [
          'Ehemalige Kollegen und Kunden: Sie kennen deine Zuverlässigkeit bereits, die Vertrauensbarriere ist weg.',
          'Freunde von Freunden in der Zielbranche: Eine warme Vorstellung konvertiert zehnmal besser als eine kalte Nachricht.',
          'Personen, die sich vor dir über das Problem beschwert haben: Notiere sie, sie sind deine besten Kandidaten.',
        ],
      },
      { h2: 'Geh dorthin, wo sich deine Zielgruppe bereits beschwert' },
      {
        p: "Deine künftigen Nutzer sprechen bereits irgendwo über ihr Problem: ein Branchen-Slack, ein Subreddit, ein Discord-Server, eine LinkedIn-Gruppe, ein Fachforum. Spamme nicht deinen Link. Sei nützlich, beantworte echte Fragen und lass die Leute kommen und fragen, was du entwickelst.",
      },
      {
        ul: [
          'Identifiziere 3 bis 5 Communities, in denen deine Zielgruppe jede Woche aktiv ist.',
          'Liefere zwei Wochen lang Mehrwert, bevor du irgendetwas erwähnst.',
          'Wenn jemand genau das Problem beschreibt, wechsle in die DM: Das ist das zuverlässigste Kaufsignal.',
        ],
      },
      { h2: 'Sende gezielte DMs, keine Massennachrichten' },
      {
        p: "Kaltakquise funktioniert noch, sofern sie hochgradig gezielt und persönlich ist. Sende 10 maßgeschneiderte Nachrichten statt 500 generischer. Sprich über das Problem der Person, niemals zuerst über dein Produkt. Eine gute DM stellt eine Frage, sie verkauft nichts.",
      },
      {
        quote: 'Deine ersten 10 Nutzer gewinnst du nicht in der Masse. Du gewinnst sie ein Gespräch nach dem anderen.',
      },
      { h2: 'Teste mit einer Landingpage und einem Vorverkauf' },
      {
        p: "Du brauchst kein fertiges Produkt, um die Nachfrage zu testen, nur ein klares Versprechen. Eine einfache Landingpage mit einem Button zur Vorregistrierung oder Vorbestellung misst echtes Interesse. Ein Vorverkauf, selbst ein symbolischer, ist der einzige echte Test: Niemand zückt seine Karte für eine Idee, an die er nicht glaubt.",
      },
      {
        ul: [
          'Eine Seite, die den Nutzen beschreibt, ein E-Mail-Formular und ein einziger Call-to-Action.',
          'Biete den ersten 10, die sich verpflichten, ein rabattiertes Launch-Angebot.',
          'Eine gesammelte E-Mail ist Neugier; eine Zahlung ist Validierung.',
        ],
      },
      { h2: 'Verwandle Validierung schnell in ein Produkt' },
      {
        p: "Sobald diese 10 Nutzer überzeugt sind, ist das Fenster kurz: Sie erwarten eine echte Lösung, bevor sie weiterziehen. Genau hier verändert eine Produktions-V1 alles. Bei Khufu liefern wir in 7 Tagen ein produktionsreifes Produkt zum Festpreis von 15.000 €, um deine ersten Zusagen in echte Nutzung zu verwandeln, bevor der Schwung nachlässt.",
      },
    ],
  },
  it: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Trovare i tuoi primi 10 utenti quando non hai ancora un prodotto',
    excerpt:
      'Come ottenere i tuoi primi 10 utenti senza un prodotto finito: rete, community, DM mirati, landing e prevendita. Ciò che funziona davvero.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "I tuoi primi 10 utenti non li trovi con la pubblicità, ma con conversazioni uno a uno. In questa fase l'obiettivo non è la crescita: è la prova. Dieci persone che vivono davvero il problema e con cui parli direttamente valgono più di 10.000 visitatori anonimi. Ecco le tattiche concrete che funzionano ancora prima di avere un prodotto finito.",
      },
      { h2: 'Parti dalla tua rete più vicina' },
      {
        p: "I tuoi primi 10 utenti sono quasi sempre a meno di due strette di mano da te. Non cercare di scalare: elenca 30 persone che probabilmente hanno il problema che risolvi e contattale una a una, personalmente.",
      },
      {
        ul: [
          'Ex colleghi e clienti: conoscono già la tua affidabilità, la barriera della fiducia è superata.',
          "Amici di amici nel settore target: una presentazione calda converte dieci volte meglio di un messaggio a freddo.",
          'Persone che si sono lamentate del problema davanti a te: annotale, sono i tuoi migliori candidati.',
        ],
      },
      { h2: 'Vai dove il tuo pubblico già si lamenta' },
      {
        p: "I tuoi futuri utenti parlano già del loro problema da qualche parte: uno Slack di settore, un subreddit, un server Discord, un gruppo LinkedIn, un forum specializzato. Non fare spam con il tuo link. Renditi utile, rispondi a domande vere e lascia che siano le persone a chiederti cosa stai costruendo.",
      },
      {
        ul: [
          'Individua da 3 a 5 community in cui il tuo pubblico è attivo ogni settimana.',
          'Porta valore per due settimane prima di menzionare qualsiasi cosa.',
          'Quando qualcuno descrive esattamente il problema, passa ai DM: è il segnale di acquisto più affidabile.',
        ],
      },
      { h2: 'Invia DM mirati, non messaggi di massa' },
      {
        p: "Il messaggio a freddo funziona ancora, a patto che sia ultra-mirato e personale. Invia 10 messaggi su misura invece di 500 generici. Parla del problema della persona, mai prima del tuo prodotto. Un buon DM pone una domanda, non vende nulla.",
      },
      {
        quote: 'I tuoi primi 10 utenti non si conquistano su scala. Si conquistano una conversazione alla volta.',
      },
      { h2: 'Testa con una landing e una prevendita' },
      {
        p: "Non ti serve un prodotto finito per testare la domanda, solo una promessa chiara. Una semplice landing page con un pulsante di preiscrizione o preordine misura un interesse reale. Una prevendita, anche simbolica, è l'unico vero test: nessuno tira fuori la carta per un'idea in cui non crede.",
      },
      {
        ul: [
          "Una pagina che descrive il beneficio, un modulo e-mail e un'unica call to action.",
          'Offri un lancio scontato ai primi 10 che si impegnano.',
          "Un'e-mail raccolta è curiosità; un pagamento è validazione.",
        ],
      },
      { h2: 'Trasforma la validazione in prodotto, in fretta' },
      {
        p: "Una volta convinti questi 10 utenti, la finestra è breve: si aspettano una soluzione reale prima di passare ad altro. È qui che una V1 in produzione cambia tutto. In Khufu consegniamo un prodotto pronto per la produzione in 7 giorni, a prezzo fisso di 15.000 €, per trasformare le tue prime promesse in utilizzo reale prima che lo slancio svanisca.",
      },
    ],
  },
  pt: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Como conseguir os seus 10 primeiros utilizadores quando ainda não tem produto',
    excerpt:
      'Como obter os seus 10 primeiros utilizadores sem produto terminado: rede, comunidades, DMs direcionadas, landing e pré-venda. O que funciona mesmo.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Não encontra os seus 10 primeiros utilizadores com publicidade, mas com conversas individuais. Nesta fase, o objetivo não é o crescimento: é a prova. Dez pessoas que vivem realmente o problema e com quem fala diretamente valem mais do que 10.000 visitantes anónimos. Aqui estão as táticas concretas que funcionam antes mesmo de ter um produto terminado.",
      },
      { h2: 'Comece pela sua rede próxima' },
      {
        p: "Os seus 10 primeiros utilizadores estão quase sempre a menos de dois apertos de mão de si. Não tente escalar: liste 30 pessoas que provavelmente têm o problema que resolve e contacte cada uma, pessoalmente.",
      },
      {
        ul: [
          'Antigos colegas e clientes: já conhecem a sua seriedade, a barreira de confiança está ultrapassada.',
          'Amigos de amigos no setor-alvo: uma apresentação quente converte dez vezes melhor do que uma mensagem a frio.',
          'Pessoas que se queixaram do problema à sua frente: anote-as, são os seus melhores candidatos.',
        ],
      },
      { h2: 'Vá onde o seu público já se queixa' },
      {
        p: "Os seus futuros utilizadores já falam do seu problema nalgum lado: um Slack do setor, um subreddit, um servidor Discord, um grupo de LinkedIn, um fórum especializado. Não faça spam com o seu link. Seja útil, responda a perguntas reais e deixe que as pessoas venham perguntar o que está a construir.",
      },
      {
        ul: [
          'Identifique 3 a 5 comunidades onde o seu público está ativo todas as semanas.',
          'Traga valor durante duas semanas antes de mencionar seja o que for.',
          'Quando alguém descrever exatamente o problema, passe para DM: é o sinal de compra mais fiável.',
        ],
      },
      { h2: 'Envie DMs direcionadas, não mensagens em massa' },
      {
        p: "A mensagem a frio ainda funciona, desde que seja ultra-direcionada e pessoal. Envie 10 mensagens à medida em vez de 500 genéricas. Fale do problema da pessoa, nunca do seu produto primeiro. Uma boa DM faz uma pergunta, não vende nada.",
      },
      {
        quote: 'Os seus 10 primeiros utilizadores não se conquistam em escala. Conquistam-se uma conversa de cada vez.',
      },
      { h2: 'Teste com uma landing e uma pré-venda' },
      {
        p: "Não precisa de um produto terminado para testar a procura, apenas de uma promessa clara. Uma simples landing page com um botão de pré-inscrição ou pré-encomenda mede um interesse real. Uma pré-venda, mesmo simbólica, é o único teste verdadeiro: ninguém tira o cartão por uma ideia em que não acredita.",
      },
      {
        ul: [
          'Uma página que descreve o benefício, um formulário de e-mail e um único apelo à ação.',
          'Ofereça uma promoção de lançamento com desconto aos 10 primeiros que se comprometerem.',
          'Um e-mail recolhido é curiosidade; um pagamento é validação.',
        ],
      },
      { h2: 'Transforme a validação em produto, depressa' },
      {
        p: "Uma vez convencidos esses 10 utilizadores, a janela é curta: esperam uma solução real antes de seguir em frente. É aqui que uma V1 em produção muda tudo. Na Khufu entregamos um produto pronto para produção em 7 dias, a preço fixo de 15.000 €, para transformar as suas primeiras promessas em uso real antes de o impulso desaparecer.",
      },
    ],
  },
  nl: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Je eerste 10 gebruikers vinden als je nog geen product hebt',
    excerpt:
      'Hoe je je eerste 10 gebruikers binnenhaalt zonder afgewerkt product: netwerk, communities, gerichte DMs, landingspagina en voorverkoop. Wat echt werkt.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Je vindt je eerste 10 gebruikers niet met advertenties, maar met een-op-een gesprekken. In deze fase is het doel geen groei, maar bewijs. Tien mensen die het probleem echt ervaren en met wie je rechtstreeks praat, zijn meer waard dan 10.000 anonieme bezoekers. Dit zijn de concrete tactieken die werken nog voordat je een afgewerkt product hebt.",
      },
      { h2: 'Begin bij je nabije netwerk' },
      {
        p: "Je eerste 10 gebruikers zijn bijna altijd minder dan twee handdrukken van je verwijderd. Probeer niet te schalen: maak een lijst van 30 mensen die waarschijnlijk het probleem hebben dat je oplost, en benader ze een voor een, persoonlijk.",
      },
      {
        ul: [
          'Oud-collega\'s en klanten: ze kennen je betrouwbaarheid al, de vertrouwensdrempel is weg.',
          'Vrienden van vrienden in de doelsector: een warme introductie converteert tien keer beter dan een koud bericht.',
          'Mensen die zich over het probleem hebben beklaagd waar jij bij was: noteer ze, dat zijn je beste kandidaten.',
        ],
      },
      { h2: 'Ga waar je doelgroep al klaagt' },
      {
        p: "Je toekomstige gebruikers praten al ergens over hun probleem: een sector-Slack, een subreddit, een Discord-server, een LinkedIn-groep, een gespecialiseerd forum. Spam je link niet. Wees nuttig, beantwoord echte vragen en laat mensen zelf komen vragen wat je bouwt.",
      },
      {
        ul: [
          'Identificeer 3 tot 5 communities waar je doelgroep elke week actief is.',
          'Lever twee weken lang waarde voordat je iets vermeldt.',
          'Als iemand precies het probleem beschrijft, ga dan over op DM: dat is het betrouwbaarste koopsignaal.',
        ],
      },
      { h2: 'Stuur gerichte DMs, geen massaberichten' },
      {
        p: "Koude benadering werkt nog, mits die ultra-gericht en persoonlijk is. Stuur 10 op maat gemaakte berichten in plaats van 500 generieke. Praat over het probleem van de persoon, nooit eerst over je product. Een goede DM stelt een vraag, hij verkoopt niets.",
      },
      {
        quote: 'Je eerste 10 gebruikers win je niet op schaal. Je wint ze een gesprek per keer.',
      },
      { h2: 'Test met een landingspagina en een voorverkoop' },
      {
        p: "Je hebt geen afgewerkt product nodig om de vraag te testen, alleen een duidelijke belofte. Een eenvoudige landingspagina met een knop voor voorinschrijving of voorbestelling meet echte interesse. Een voorverkoop, zelfs een symbolische, is de enige echte test: niemand trekt zijn kaart voor een idee waar hij niet in gelooft.",
      },
      {
        ul: [
          'Een pagina die het voordeel beschrijft, een e-mailformulier en één enkele call-to-action.',
          'Bied de eerste 10 die zich vastleggen een gereduceerde lanceringsdeal.',
          'Een verzameld e-mailadres is nieuwsgierigheid; een betaling is validatie.',
        ],
      },
      { h2: 'Zet validatie snel om in een product' },
      {
        p: "Zodra die 10 gebruikers overtuigd zijn, is het venster kort: ze verwachten een echte oplossing voordat ze verdergaan. Hier verandert een productie-V1 alles. Bij Khufu leveren we in 7 dagen een productieklaar product tegen een vaste prijs van 15.000 €, om je eerste toezeggingen om te zetten in echt gebruik voordat het momentum wegebt.",
      },
    ],
  },
  ar: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'كيف تجد أول 10 مستخدمين لك قبل أن يكون لديك منتج',
    excerpt:
      'كيف تحصل على أول 10 مستخدمين دون منتج جاهز: الشبكة، المجتمعات، الرسائل المباشرة المستهدفة، صفحة الهبوط والبيع المسبق. ما ينجح فعلاً.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "لا تجد أول 10 مستخدمين لك عبر الإعلانات، بل عبر محادثات فردية. في هذه المرحلة الهدف ليس النمو، بل الإثبات. عشرة أشخاص يعيشون المشكلة فعلاً وتتحدث إليهم مباشرة أثمن من 10,000 زائر مجهول. إليك التكتيكات الملموسة التي تنجح حتى قبل أن يكون لديك منتج جاهز.",
      },
      { h2: 'ابدأ من شبكتك القريبة' },
      {
        p: "أول 10 مستخدمين لك يكونون دائماً تقريباً على بُعد أقل من مصافحتين منك. لا تحاول التوسّع: ضع قائمة بـ 30 شخصاً يعانون على الأرجح من المشكلة التي تحلّها، وتواصل مع كل واحد منهم شخصياً.",
      },
      {
        ul: [
          'الزملاء والعملاء السابقون: يعرفون جديّتك مسبقاً، فحاجز الثقة قد زال.',
          'أصدقاء الأصدقاء في القطاع المستهدف: التعريف الدافئ يحوّل عشر مرات أفضل من الرسالة الباردة.',
          'الأشخاص الذين اشتكوا من المشكلة أمامك: دوّنهم، فهم أفضل مرشحيك.',
        ],
      },
      { h2: 'اذهب حيث يشتكي جمهورك بالفعل' },
      {
        p: "مستخدموك المستقبليون يتحدثون بالفعل عن مشكلتهم في مكان ما: Slack خاص بالقطاع، أو subreddit، أو خادم Discord، أو مجموعة LinkedIn، أو منتدى متخصص. لا ترسل رابطك كسبام. كن مفيداً، أجب عن أسئلة حقيقية، ودع الناس يأتون ليسألوا عمّا تبنيه.",
      },
      {
        ul: [
          'حدّد من 3 إلى 5 مجتمعات يكون فيها جمهورك نشطاً كل أسبوع.',
          'قدّم قيمة لمدة أسبوعين قبل أن تذكر أي شيء.',
          'عندما يصف أحدهم المشكلة تماماً، انتقل إلى الرسائل المباشرة: إنها أوثق إشارة شراء.',
        ],
      },
      { h2: 'أرسل رسائل مباشرة مستهدفة، لا رسائل جماعية' },
      {
        p: "لا تزال الرسالة الباردة تنجح، بشرط أن تكون فائقة الاستهداف وشخصية. أرسل 10 رسائل مصمّمة خصيصاً بدلاً من 500 رسالة عامة. تحدّث عن مشكلة الشخص، لا عن منتجك أولاً أبداً. الرسالة الجيدة تطرح سؤالاً، لا تبيع شيئاً.",
      },
      {
        quote: 'أول 10 مستخدمين لك لا يُكسبون على نطاق واسع. يُكسبون محادثة واحدة في كل مرة.',
      },
      { h2: 'اختبر عبر صفحة هبوط وبيع مسبق' },
      {
        p: "لست بحاجة إلى منتج جاهز لاختبار الطلب، بل فقط إلى وعد واضح. صفحة هبوط بسيطة بزر تسجيل مسبق أو طلب مسبق تقيس اهتماماً حقيقياً. البيع المسبق، ولو رمزياً، هو الاختبار الحقيقي الوحيد: لا أحد يُخرج بطاقته لفكرة لا يؤمن بها.",
      },
      {
        ul: [
          'صفحة تصف الفائدة، ونموذج بريد إلكتروني، ودعوة واحدة للفعل.',
          'اعرض صفقة إطلاق مخفّضة لأول 10 أشخاص يلتزمون.',
          'البريد الإلكتروني المجمَّع فضول؛ والدفع تحقُّق.',
        ],
      },
      { h2: 'حوّل التحقّق إلى منتج بسرعة' },
      {
        p: "بمجرد اقتناع هؤلاء الـ 10 مستخدمين، تكون النافذة ضيقة: يتوقعون حلاً حقيقياً قبل أن ينتقلوا إلى غيرك. هنا تُغيّر V1 جاهزة للإنتاج كل شيء. في Khufu نُسلّم منتجاً جاهزاً للإنتاج خلال 7 أيام بسعر ثابت قدره 15,000 €، لتحويل وعودك الأولى إلى استخدام فعلي قبل أن يتلاشى الزخم.",
      },
    ],
  },
  pl: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Jak znaleźć pierwszych 10 użytkowników, gdy nie masz jeszcze produktu',
    excerpt:
      'Jak zdobyć pierwszych 10 użytkowników bez gotowego produktu: sieć kontaktów, społeczności, celowane DM, landing i przedsprzedaż. Co naprawdę działa.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Pierwszych 10 użytkowników nie znajdziesz dzięki reklamie, lecz dzięki rozmowom jeden na jeden. Na tym etapie celem nie jest wzrost, ale dowód. Dziesięć osób, które naprawdę doświadczają problemu i z którymi rozmawiasz bezpośrednio, jest warte więcej niż 10 000 anonimowych odwiedzających. Oto konkretne taktyki, które działają, zanim jeszcze masz gotowy produkt.",
      },
      { h2: 'Zacznij od bliskiej sieci kontaktów' },
      {
        p: "Twoich pierwszych 10 użytkowników prawie zawsze dzieli od ciebie mniej niż dwa uściski dłoni. Nie próbuj skalować: wypisz 30 osób, które prawdopodobnie mają problem, który rozwiązujesz, i skontaktuj się z każdą osobiście.",
      },
      {
        ul: [
          'Byli współpracownicy i klienci: znają już twoją rzetelność, bariera zaufania zniknęła.',
          'Znajomi znajomych w docelowej branży: ciepłe polecenie konwertuje dziesięć razy lepiej niż zimna wiadomość.',
          'Osoby, które narzekały na problem przy tobie: zapisz je, to twoi najlepsi kandydaci.',
        ],
      },
      { h2: 'Idź tam, gdzie twoja grupa docelowa już narzeka' },
      {
        p: "Twoi przyszli użytkownicy już gdzieś rozmawiają o swoim problemie: branżowy Slack, subreddit, serwer Discord, grupa na LinkedIn, wyspecjalizowane forum. Nie spamuj swoim linkiem. Bądź pomocny, odpowiadaj na prawdziwe pytania i pozwól ludziom samym zapytać, co budujesz.",
      },
      {
        ul: [
          'Wskaż 3 do 5 społeczności, w których twoja grupa docelowa jest aktywna co tydzień.',
          'Dostarczaj wartość przez dwa tygodnie, zanim cokolwiek wspomnisz.',
          'Gdy ktoś opisze dokładnie problem, przejdź do DM: to najbardziej wiarygodny sygnał zakupu.',
        ],
      },
      { h2: 'Wysyłaj celowane DM, nie masowe wiadomości' },
      {
        p: "Zimna wiadomość wciąż działa, pod warunkiem że jest ultra-celowana i osobista. Wyślij 10 dopasowanych wiadomości zamiast 500 ogólnych. Mów o problemie danej osoby, nigdy najpierw o swoim produkcie. Dobry DM zadaje pytanie, niczego nie sprzedaje.",
      },
      {
        quote: 'Pierwszych 10 użytkowników nie zdobywa się na skalę. Zdobywa się ich jedna rozmowa na raz.',
      },
      { h2: 'Testuj za pomocą landingu i przedsprzedaży' },
      {
        p: "Nie potrzebujesz gotowego produktu, aby przetestować popyt, wystarczy jasna obietnica. Prosta landing page z przyciskiem wstępnej rejestracji lub przedzamówienia mierzy realne zainteresowanie. Przedsprzedaż, nawet symboliczna, to jedyny prawdziwy test: nikt nie wyciąga karty dla pomysłu, w który nie wierzy.",
      },
      {
        ul: [
          'Strona opisująca korzyść, formularz e-mail i jedno wezwanie do działania.',
          'Zaproponuj zniżkową ofertę startową pierwszym 10 osobom, które się zdecydują.',
          'Zebrany e-mail to ciekawość; płatność to walidacja.',
        ],
      },
      { h2: 'Szybko zamień walidację w produkt' },
      {
        p: "Gdy tych 10 użytkowników jest już przekonanych, okno jest krótkie: oczekują prawdziwego rozwiązania, zanim pójdą dalej. To tutaj produkcyjne V1 zmienia wszystko. W Khufu dostarczamy gotowy do produkcji produkt w 7 dni, w stałej cenie 15 000 €, aby zamienić twoje pierwsze obietnice w realne użycie, zanim zapał opadnie.",
      },
    ],
  },
  tr: {
    slug: 'trouver-ses-10-premiers-utilisateurs',
    title: 'Henüz ürününüz yokken ilk 10 kullanıcınızı bulmak',
    excerpt:
      'Bitmiş bir ürün olmadan ilk 10 kullanıcınızı nasıl edinirsiniz: ağınız, topluluklar, hedefli DM\'ler, landing ve ön satış. Gerçekten işe yarayanlar.',
    date: '2026-01-28',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "İlk 10 kullanıcınızı reklamlarla değil, birebir konuşmalarla bulursunuz. Bu aşamada amaç büyüme değil, kanıttır. Sorunu gerçekten yaşayan ve doğrudan konuştuğunuz on kişi, 10.000 anonim ziyaretçiden daha değerlidir. İşte bitmiş bir ürününüz olmadan bile işe yarayan somut taktikler.",
      },
      { h2: 'Yakın çevrenizden başlayın' },
      {
        p: "İlk 10 kullanıcınız neredeyse her zaman sizden iki el sıkışmadan daha yakındır. Ölçeklenmeye çalışmayın: çözdüğünüz soruna muhtemelen sahip olan 30 kişiyi listeleyin ve her birine tek tek, kişisel olarak ulaşın.",
      },
      {
        ul: [
          'Eski meslektaşlar ve müşteriler: ciddiyetinizi zaten biliyorlar, güven engeli ortadan kalktı.',
          'Hedef sektördeki arkadaş arkadaşları: sıcak bir tanıştırma, soğuk bir mesajdan on kat daha iyi dönüşür.',
          'Sorundan sizin yanınızda şikayet eden kişiler: onları not edin, en iyi adaylarınız onlar.',
        ],
      },
      { h2: 'Hedef kitlenizin zaten şikayet ettiği yere gidin' },
      {
        p: "Gelecekteki kullanıcılarınız sorunlarını zaten bir yerde konuşuyor: bir sektör Slack\'i, bir subreddit, bir Discord sunucusu, bir LinkedIn grubu, uzmanlaşmış bir forum. Bağlantınızı spam yapmayın. Faydalı olun, gerçek sorulara yanıt verin ve insanların ne inşa ettiğinizi kendilerinin sormasına izin verin.",
      },
      {
        ul: [
          'Hedef kitlenizin her hafta aktif olduğu 3 ila 5 topluluk belirleyin.',
          'Herhangi bir şeyden bahsetmeden önce iki hafta boyunca değer katın.',
          'Biri sorunu tam olarak tarif ettiğinde DM\'e geçin: bu en güvenilir satın alma sinyalidir.',
        ],
      },
      { h2: 'Toplu mesaj değil, hedefli DM gönderin' },
      {
        p: "Soğuk mesaj, aşırı hedefli ve kişisel olmak kaydıyla hâlâ işe yarar. 500 genel mesaj yerine 10 özel mesaj gönderin. Kişinin sorunundan bahsedin, asla önce ürününüzden değil. İyi bir DM bir soru sorar, hiçbir şey satmaz.",
      },
      {
        quote: 'İlk 10 kullanıcınız ölçekle kazanılmaz. Her seferinde bir konuşmayla kazanılır.',
      },
      { h2: 'Bir landing ve ön satışla test edin' },
      {
        p: "Talebi test etmek için bitmiş bir ürüne değil, yalnızca net bir vaade ihtiyacınız var. Ön kayıt veya ön sipariş butonu olan basit bir landing page gerçek ilgiyi ölçer. Sembolik bile olsa bir ön satış, tek gerçek testtir: kimse inanmadığı bir fikir için kartını çıkarmaz.",
      },
      {
        ul: [
          'Faydayı anlatan bir sayfa, bir e-posta formu ve tek bir eylem çağrısı.',
          'Taahhüt eden ilk 10 kişiye indirimli bir lansman teklifi sunun.',
          'Toplanan bir e-posta meraktır; bir ödeme doğrulamadır.',
        ],
      },
      { h2: 'Doğrulamayı hızlıca ürüne dönüştürün' },
      {
        p: "Bu 10 kullanıcı ikna olduğunda pencere dardır: başka bir şeye geçmeden önce gerçek bir çözüm beklerler. İşte burada üretime hazır bir V1 her şeyi değiştirir. Khufu\'da, ivme sönmeden ilk sözlerinizi gerçek kullanıma dönüştürmek için 7 günde, 15.000 € sabit fiyatla üretime hazır bir ürün teslim ediyoruz.",
      },
    ],
  },
}
