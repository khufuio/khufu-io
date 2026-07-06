import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "De l’idée au premier client payant en 30 jours",
    excerpt:
      "Un plan concret sur 30 jours pour valider votre idée, livrer la V1 en 7 jours, la mettre en ligne et convertir votre premier client payant.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Passer de l’idée au premier client payant en 30 jours est réaliste si vous découpez le mois en quatre phases : valider l’idée (jours 1 à 5), livrer la V1 (jours 6 à 12), la mettre en ligne (jours 13 à 15), puis aller chercher et convertir vos premiers utilisateurs (jours 16 à 30). L’erreur classique n’est pas de coder trop lentement, c’est de coder avant d’avoir parlé à un seul client. Voici le plan, étape par étape.",
      },
      { h2: "Jours 1–5 — valider l’idée avant d’écrire une ligne de code" },
      {
        p: "La validation ne demande pas un produit, elle demande des conversations. Visez 10 à 15 entretiens avec des personnes qui vivent le problème que vous voulez résoudre. Vous cherchez une douleur réelle, récurrente et que les gens paient déjà pour éviter — pas des compliments polis.",
      },
      {
        ul: [
          "Rédigez en une phrase le problème et pour qui vous le résolvez.",
          "Menez 10 à 15 entretiens : quel est le problème, comment le règlent-ils aujourd’hui, combien ça leur coûte.",
          "Testez le prix tout de suite : « paieriez-vous X par mois pour ça ? »",
          "Mettez en ligne une landing page simple et mesurez qui laisse son email.",
        ],
      },
      { h2: "Jours 6–12 — cadrer et livrer la V1 en 7 jours" },
      {
        p: "Une fois le problème confirmé, réduisez le périmètre à l’os : les 3 à 5 parcours indispensables pour que le produit tienne une vraie promesse. Tout le reste attend. C’est exactement le format d’un forfait V1 à prix fixe : chez Khufu, une V1 prête pour la production livrée en 7 jours pour 15 000 €, code source à vous. Vous sortez de cette semaine avec un produit en ligne, pas un prototype jetable.",
      },
      { h2: "Jours 13–15 — mettre en ligne et instrumenter" },
      {
        p: "Mise en production, nom de domaine, paiement branché et analytics en place. Vous ne pouvez pas convertir ce que vous ne mesurez pas : suivez les inscriptions, l’activation et le premier moment de valeur dès le premier utilisateur.",
      },
      {
        ul: [
          "Branchez le paiement dès le départ — même avec un seul plan tarifaire.",
          "Installez un suivi analytics simple : inscription, activation, rétention à J7.",
          "Préparez un onboarding qui amène l’utilisateur à sa première valeur en moins de 5 minutes.",
        ],
      },
      { h2: "Jours 16–30 — trouver les premiers utilisateurs et convertir" },
      {
        p: "La distribution est du travail manuel au début, pas de la publicité. Retournez voir les 10 à 15 personnes interrogées : elles connaissent déjà le problème et vous ont déjà répondu. Contactez-en 5 à 10 nouvelles par jour dans les canaux où votre cible se trouve déjà, faites des démos individuelles, et demandez la vente. Un premier client payant, même à petit prix, vaut plus que 100 inscrits gratuits : c’est la seule preuve que le problème vaut de l’argent.",
      },
      {
        quote:
          "Un client qui paie 20 € vous en apprend plus que cent inscrits gratuits : c’est la seule validation qui compte.",
      },
      {
        p: "En 30 jours, l’objectif n’est pas un produit parfait ni mille utilisateurs. C’est une boucle qui tourne : un vrai produit en ligne, des utilisateurs qui s’en servent, et au moins un client qui paie. À partir de là, chaque euro de maintenance sert à faire grandir un produit qui a déjà prouvé sa valeur.",
      },
    ],
  },
  en: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "From idea to first paying customer in 30 days",
    excerpt:
      "A concrete 30-day plan to validate your idea, ship your V1 in 7 days, launch it and convert your first paying customer.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Going from idea to first paying customer in 30 days is realistic if you split the month into four phases: validate the idea (days 1–5), ship the V1 (days 6–12), launch it (days 13–15), then find and convert your first users (days 16–30). The classic mistake isn’t coding too slowly — it’s coding before you’ve talked to a single customer. Here is the plan, step by step.",
      },
      { h2: "Days 1–5 — validate the idea before writing a line of code" },
      {
        p: "Validation doesn’t require a product, it requires conversations. Aim for 10 to 15 interviews with people who live the problem you want to solve. You’re looking for a real, recurring pain that people already pay to avoid — not polite compliments.",
      },
      {
        ul: [
          "Write, in one sentence, the problem you solve and for whom.",
          "Run 10 to 15 interviews: what is the problem, how do they solve it today, what does it cost them.",
          "Test price right away: “would you pay X per month for this?”",
          "Put up a simple landing page and measure who leaves their email.",
        ],
      },
      { h2: "Days 6–12 — scope and ship the V1 in 7 days" },
      {
        p: "Once the problem is confirmed, cut the scope to the bone: the 3 to 5 essential flows the product needs to keep a real promise. Everything else waits. This is exactly what a fixed-price V1 package is built for: at Khufu, a production-ready V1 shipped in 7 days for €15,000, source code yours to keep. You leave that week with a live product, not a throwaway prototype.",
      },
      { h2: "Days 13–15 — launch and instrument" },
      {
        p: "Go to production, connect a domain, wire up payment and put analytics in place. You can’t convert what you don’t measure: track sign-ups, activation and first moment of value from your very first user.",
      },
      {
        ul: [
          "Wire up payment from day one — even with a single pricing plan.",
          "Install simple analytics: sign-up, activation, day-7 retention.",
          "Design an onboarding that gets the user to first value in under 5 minutes.",
        ],
      },
      { h2: "Days 16–30 — find your first users and convert" },
      {
        p: "Early distribution is manual work, not advertising. Go back to the 10–15 people you interviewed: they already know the problem and have already replied to you. Reach out to 5 to 10 new ones a day in the channels where your target already is, run one-on-one demos, and ask for the sale. One paying customer, even at a low price, is worth more than 100 free sign-ups: it’s the only proof the problem is worth money.",
      },
      {
        quote:
          "A customer who pays €20 teaches you more than a hundred free sign-ups: it’s the only validation that counts.",
      },
      {
        p: "In 30 days, the goal isn’t a perfect product or a thousand users. It’s a loop that spins: a real product live, users using it, and at least one customer paying. From there, every euro of maintenance grows a product that has already proven its value.",
      },
    ],
  },
  es: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "De la idea al primer cliente de pago en 30 días",
    excerpt:
      "Un plan concreto de 30 días para validar tu idea, entregar la V1 en 7 días, lanzarla y convertir a tu primer cliente de pago.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Pasar de la idea al primer cliente de pago en 30 días es realista si divides el mes en cuatro fases: validar la idea (días 1 a 5), entregar la V1 (días 6 a 12), lanzarla (días 13 a 15) y luego buscar y convertir a tus primeros usuarios (días 16 a 30). El error clásico no es programar demasiado lento, es programar antes de hablar con un solo cliente. Este es el plan, paso a paso.",
      },
      { h2: "Días 1–5 — validar la idea antes de escribir una línea de código" },
      {
        p: "La validación no exige un producto, exige conversaciones. Apunta a 10 o 15 entrevistas con personas que viven el problema que quieres resolver. Buscas un dolor real, recurrente y que la gente ya paga por evitar, no cumplidos educados.",
      },
      {
        ul: [
          "Escribe en una frase el problema y para quién lo resuelves.",
          "Haz 10 o 15 entrevistas: cuál es el problema, cómo lo resuelven hoy, cuánto les cuesta.",
          "Prueba el precio de inmediato: «¿pagarías X al mes por esto?»",
          "Publica una landing page sencilla y mide quién deja su email.",
        ],
      },
      { h2: "Días 6–12 — acotar y entregar la V1 en 7 días" },
      {
        p: "Una vez confirmado el problema, reduce el alcance al hueso: los 3 a 5 flujos imprescindibles para que el producto cumpla una promesa real. Todo lo demás espera. Es justo el formato de un paquete V1 a precio fijo: en Khufu, una V1 lista para producción entregada en 7 días por 15 000 €, con el código fuente para ti. Sales de esa semana con un producto en línea, no con un prototipo desechable.",
      },
      { h2: "Días 13–15 — lanzar e instrumentar" },
      {
        p: "Puesta en producción, dominio, pago conectado y analítica en su sitio. No puedes convertir lo que no mides: sigue los registros, la activación y el primer momento de valor desde tu primer usuario.",
      },
      {
        ul: [
          "Conecta el pago desde el primer día, aunque sea con un único plan.",
          "Instala una analítica sencilla: registro, activación, retención a día 7.",
          "Diseña un onboarding que lleve al usuario a su primer valor en menos de 5 minutos.",
        ],
      },
      { h2: "Días 16–30 — encontrar a los primeros usuarios y convertir" },
      {
        p: "Al principio la distribución es trabajo manual, no publicidad. Vuelve a las 10 o 15 personas que entrevistaste: ya conocen el problema y ya te respondieron. Contacta a 5 o 10 nuevas al día en los canales donde tu público ya está, haz demos individuales y pide la venta. Un primer cliente de pago, aunque sea barato, vale más que 100 registros gratis: es la única prueba de que el problema vale dinero.",
      },
      {
        quote:
          "Un cliente que paga 20 € te enseña más que cien registros gratis: es la única validación que cuenta.",
      },
      {
        p: "En 30 días, el objetivo no es un producto perfecto ni mil usuarios. Es un bucle que gira: un producto real en línea, usuarios que lo usan y al menos un cliente que paga. A partir de ahí, cada euro de mantenimiento hace crecer un producto que ya ha demostrado su valor.",
      },
    ],
  },
  de: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Von der Idee zum ersten zahlenden Kunden in 30 Tagen",
    excerpt:
      "Ein konkreter 30-Tage-Plan, um deine Idee zu validieren, die V1 in 7 Tagen zu liefern, sie zu launchen und den ersten zahlenden Kunden zu gewinnen.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Von der Idee zum ersten zahlenden Kunden in 30 Tagen ist realistisch, wenn du den Monat in vier Phasen teilst: Idee validieren (Tag 1–5), V1 liefern (Tag 6–12), launchen (Tag 13–15) und dann deine ersten Nutzer finden und gewinnen (Tag 16–30). Der klassische Fehler ist nicht, zu langsam zu programmieren — sondern zu programmieren, bevor du mit einem einzigen Kunden gesprochen hast. Hier ist der Plan, Schritt für Schritt.",
      },
      { h2: "Tag 1–5 — die Idee validieren, bevor du eine Zeile Code schreibst" },
      {
        p: "Validierung braucht kein Produkt, sie braucht Gespräche. Ziele auf 10 bis 15 Interviews mit Menschen, die das Problem leben, das du lösen willst. Du suchst echten, wiederkehrenden Schmerz, für dessen Vermeidung Leute bereits zahlen — keine höflichen Komplimente.",
      },
      {
        ul: [
          "Schreibe in einem Satz, welches Problem du löst und für wen.",
          "Führe 10 bis 15 Interviews: Was ist das Problem, wie lösen sie es heute, was kostet es sie.",
          "Teste den Preis sofort: „Würdest du X pro Monat dafür zahlen?“",
          "Stelle eine einfache Landing Page online und miss, wer seine E-Mail hinterlässt.",
        ],
      },
      { h2: "Tag 6–12 — die V1 zuschneiden und in 7 Tagen liefern" },
      {
        p: "Sobald das Problem bestätigt ist, kürze den Umfang bis auf den Kern: die 3 bis 5 Abläufe, die das Produkt braucht, um ein echtes Versprechen zu halten. Alles andere wartet. Genau dafür ist ein V1-Paket zum Festpreis gemacht: bei Khufu eine produktionsreife V1, in 7 Tagen geliefert für 15.000 €, Quellcode gehört dir. Du verlässt diese Woche mit einem Live-Produkt, nicht mit einem Wegwerf-Prototyp.",
      },
      { h2: "Tag 13–15 — launchen und instrumentieren" },
      {
        p: "In Produktion gehen, Domain verbinden, Zahlung anbinden und Analytics einrichten. Du kannst nicht konvertieren, was du nicht misst: verfolge Anmeldungen, Aktivierung und den ersten Wertmoment ab deinem allerersten Nutzer.",
      },
      {
        ul: [
          "Binde die Zahlung ab Tag eins an — auch mit nur einem Tarif.",
          "Installiere einfaches Analytics: Anmeldung, Aktivierung, Tag-7-Retention.",
          "Gestalte ein Onboarding, das den Nutzer in unter 5 Minuten zum ersten Wert bringt.",
        ],
      },
      { h2: "Tag 16–30 — die ersten Nutzer finden und gewinnen" },
      {
        p: "Distribution ist am Anfang Handarbeit, keine Werbung. Geh zurück zu den 10 bis 15 Personen, die du interviewt hast: Sie kennen das Problem und haben dir bereits geantwortet. Kontaktiere täglich 5 bis 10 neue in den Kanälen, wo deine Zielgruppe schon ist, mach Einzeldemos und frag nach dem Verkauf. Ein zahlender Kunde, selbst zu niedrigem Preis, ist mehr wert als 100 kostenlose Anmeldungen: er ist der einzige Beweis, dass das Problem Geld wert ist.",
      },
      {
        quote:
          "Ein Kunde, der 20 € zahlt, lehrt dich mehr als hundert kostenlose Anmeldungen: das ist die einzige Validierung, die zählt.",
      },
      {
        p: "In 30 Tagen ist das Ziel kein perfektes Produkt und keine tausend Nutzer. Es ist eine Schleife, die sich dreht: ein echtes Produkt live, Nutzer, die es nutzen, und mindestens ein Kunde, der zahlt. Von da an lässt jeder Euro Wartung ein Produkt wachsen, das seinen Wert bereits bewiesen hat.",
      },
    ],
  },
  it: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Dall’idea al primo cliente pagante in 30 giorni",
    excerpt:
      "Un piano concreto di 30 giorni per validare la tua idea, consegnare la V1 in 7 giorni, lanciarla e convertire il primo cliente pagante.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Passare dall’idea al primo cliente pagante in 30 giorni è realistico se dividi il mese in quattro fasi: validare l’idea (giorni 1–5), consegnare la V1 (giorni 6–12), lanciarla (giorni 13–15) e poi trovare e convertire i primi utenti (giorni 16–30). L’errore classico non è programmare troppo lentamente: è programmare prima di aver parlato con un solo cliente. Ecco il piano, passo dopo passo.",
      },
      { h2: "Giorni 1–5 — validare l’idea prima di scrivere una riga di codice" },
      {
        p: "La validazione non richiede un prodotto, richiede conversazioni. Punta a 10-15 interviste con persone che vivono il problema che vuoi risolvere. Cerchi un dolore reale, ricorrente e che le persone già pagano per evitare, non complimenti di cortesia.",
      },
      {
        ul: [
          "Scrivi in una frase il problema e per chi lo risolvi.",
          "Fai 10-15 interviste: qual è il problema, come lo risolvono oggi, quanto costa loro.",
          "Testa subito il prezzo: «pagheresti X al mese per questo?»",
          "Pubblica una landing page semplice e misura chi lascia la propria email.",
        ],
      },
      { h2: "Giorni 6–12 — definire e consegnare la V1 in 7 giorni" },
      {
        p: "Una volta confermato il problema, riduci il perimetro all’osso: i 3-5 flussi indispensabili perché il prodotto mantenga una promessa reale. Tutto il resto aspetta. È esattamente il formato di un pacchetto V1 a prezzo fisso: in Khufu, una V1 pronta per la produzione consegnata in 7 giorni a 15.000 €, con il codice sorgente tuo. Esci da quella settimana con un prodotto online, non con un prototipo usa e getta.",
      },
      { h2: "Giorni 13–15 — mettere online e strumentare" },
      {
        p: "Messa in produzione, dominio, pagamento collegato e analytics al loro posto. Non puoi convertire ciò che non misuri: traccia iscrizioni, attivazione e primo momento di valore fin dal tuo primo utente.",
      },
      {
        ul: [
          "Collega il pagamento dal primo giorno, anche con un solo piano tariffario.",
          "Installa analytics semplici: iscrizione, attivazione, retention a 7 giorni.",
          "Progetta un onboarding che porti l’utente al primo valore in meno di 5 minuti.",
        ],
      },
      { h2: "Giorni 16–30 — trovare i primi utenti e convertire" },
      {
        p: "All’inizio la distribuzione è lavoro manuale, non pubblicità. Torna dalle 10-15 persone che hai intervistato: conoscono già il problema e ti hanno già risposto. Contattane 5-10 nuove al giorno nei canali dove il tuo pubblico è già presente, fai demo individuali e chiedi la vendita. Un primo cliente pagante, anche a basso prezzo, vale più di 100 iscritti gratuiti: è l’unica prova che il problema vale dei soldi.",
      },
      {
        quote:
          "Un cliente che paga 20 € ti insegna più di cento iscritti gratuiti: è l’unica validazione che conta.",
      },
      {
        p: "In 30 giorni l’obiettivo non è un prodotto perfetto né mille utenti. È un ciclo che gira: un prodotto reale online, utenti che lo usano e almeno un cliente che paga. Da lì, ogni euro di manutenzione fa crescere un prodotto che ha già dimostrato il suo valore.",
      },
    ],
  },
  pt: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Da ideia ao primeiro cliente pagante em 30 dias",
    excerpt:
      "Um plano concreto de 30 dias para validar a sua ideia, entregar a V1 em 7 dias, colocá-la no ar e converter o primeiro cliente pagante.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Ir da ideia ao primeiro cliente pagante em 30 dias é realista se você dividir o mês em quatro fases: validar a ideia (dias 1–5), entregar a V1 (dias 6–12), colocá-la no ar (dias 13–15) e depois buscar e converter os primeiros usuários (dias 16–30). O erro clássico não é programar devagar demais, é programar antes de falar com um único cliente. Aqui está o plano, passo a passo.",
      },
      { h2: "Dias 1–5 — validar a ideia antes de escrever uma linha de código" },
      {
        p: "A validação não exige um produto, exige conversas. Mire em 10 a 15 entrevistas com pessoas que vivem o problema que você quer resolver. Você procura uma dor real, recorrente e que as pessoas já pagam para evitar, não elogios educados.",
      },
      {
        ul: [
          "Escreva em uma frase o problema e para quem você o resolve.",
          "Faça 10 a 15 entrevistas: qual é o problema, como resolvem hoje, quanto lhes custa.",
          "Teste o preço imediatamente: «você pagaria X por mês por isso?»",
          "Publique uma landing page simples e meça quem deixa o email.",
        ],
      },
      { h2: "Dias 6–12 — delimitar e entregar a V1 em 7 dias" },
      {
        p: "Uma vez confirmado o problema, reduza o escopo ao osso: os 3 a 5 fluxos indispensáveis para o produto cumprir uma promessa real. Todo o resto espera. É exatamente o formato de um pacote V1 de preço fixo: na Khufu, uma V1 pronta para produção entregue em 7 dias por 15 000 €, com o código-fonte para você. Você sai dessa semana com um produto no ar, não com um protótipo descartável.",
      },
      { h2: "Dias 13–15 — colocar no ar e instrumentar" },
      {
        p: "Entrada em produção, domínio, pagamento conectado e analytics no lugar. Você não pode converter o que não mede: acompanhe cadastros, ativação e o primeiro momento de valor desde o seu primeiro usuário.",
      },
      {
        ul: [
          "Conecte o pagamento desde o primeiro dia, mesmo com um único plano.",
          "Instale analytics simples: cadastro, ativação, retenção no dia 7.",
          "Projete um onboarding que leve o usuário ao primeiro valor em menos de 5 minutos.",
        ],
      },
      { h2: "Dias 16–30 — encontrar os primeiros usuários e converter" },
      {
        p: "No início, a distribuição é trabalho manual, não publicidade. Volte às 10 a 15 pessoas que você entrevistou: elas já conhecem o problema e já responderam a você. Contate 5 a 10 novas por dia nos canais onde o seu público já está, faça demos individuais e peça a venda. Um primeiro cliente pagante, mesmo barato, vale mais que 100 cadastros grátis: é a única prova de que o problema vale dinheiro.",
      },
      {
        quote:
          "Um cliente que paga 20 € ensina mais que cem cadastros grátis: é a única validação que conta.",
      },
      {
        p: "Em 30 dias, o objetivo não é um produto perfeito nem mil usuários. É um ciclo que gira: um produto real no ar, usuários que o usam e pelo menos um cliente que paga. A partir daí, cada euro de manutenção faz crescer um produto que já provou o seu valor.",
      },
    ],
  },
  nl: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Van idee naar eerste betalende klant in 30 dagen",
    excerpt:
      "Een concreet 30-dagenplan om je idee te valideren, de V1 in 7 dagen te leveren, live te gaan en je eerste betalende klant te converteren.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Van idee naar eerste betalende klant in 30 dagen is realistisch als je de maand in vier fases opdeelt: het idee valideren (dag 1–5), de V1 leveren (dag 6–12), live gaan (dag 13–15) en dan je eerste gebruikers vinden en converteren (dag 16–30). De klassieke fout is niet te traag coderen, maar coderen voordat je met één klant hebt gesproken. Hier is het plan, stap voor stap.",
      },
      { h2: "Dag 1–5 — valideer het idee voordat je een regel code schrijft" },
      {
        p: "Validatie vraagt geen product, het vraagt gesprekken. Mik op 10 tot 15 interviews met mensen die het probleem dat je wilt oplossen echt beleven. Je zoekt een echte, terugkerende pijn waarvoor mensen al betalen om hem te vermijden, geen beleefde complimenten.",
      },
      {
        ul: [
          "Schrijf in één zin welk probleem je oplost en voor wie.",
          "Doe 10 tot 15 interviews: wat is het probleem, hoe lossen ze het nu op, wat kost het hen.",
          "Test de prijs meteen: „zou je hier X per maand voor betalen?”",
          "Zet een eenvoudige landingspagina online en meet wie zijn e-mail achterlaat.",
        ],
      },
      { h2: "Dag 6–12 — de V1 afbakenen en in 7 dagen leveren" },
      {
        p: "Zodra het probleem bevestigd is, snijd de scope tot op het bot: de 3 tot 5 essentiële flows die het product nodig heeft om een echte belofte waar te maken. Al het andere wacht. Dat is precies waarvoor een V1-pakket met vaste prijs is gemaakt: bij Khufu een productieklare V1, geleverd in 7 dagen voor € 15.000, broncode is van jou. Je verlaat die week met een live product, niet met een wegwerpprototype.",
      },
      { h2: "Dag 13–15 — live gaan en meten" },
      {
        p: "In productie gaan, domein koppelen, betaling aansluiten en analytics op orde. Je kunt niet converteren wat je niet meet: volg aanmeldingen, activatie en het eerste waardemoment vanaf je allereerste gebruiker.",
      },
      {
        ul: [
          "Koppel de betaling vanaf dag één, zelfs met één enkel prijsplan.",
          "Installeer eenvoudige analytics: aanmelding, activatie, retentie op dag 7.",
          "Ontwerp een onboarding die de gebruiker in minder dan 5 minuten naar de eerste waarde brengt.",
        ],
      },
      { h2: "Dag 16–30 — je eerste gebruikers vinden en converteren" },
      {
        p: "Distributie is in het begin handwerk, geen advertenties. Ga terug naar de 10 tot 15 mensen die je interviewde: ze kennen het probleem al en hebben je al geantwoord. Benader er dagelijks 5 tot 10 nieuwe in de kanalen waar je doelgroep al zit, doe één-op-één demo’s en vraag om de verkoop. Eén betalende klant, zelfs tegen een lage prijs, is meer waard dan 100 gratis aanmeldingen: het is het enige bewijs dat het probleem geld waard is.",
      },
      {
        quote:
          "Een klant die € 20 betaalt leert je meer dan honderd gratis aanmeldingen: het is de enige validatie die telt.",
      },
      {
        p: "In 30 dagen is het doel geen perfect product of duizend gebruikers. Het is een loop die draait: een echt product live, gebruikers die het gebruiken en minstens één klant die betaalt. Vanaf daar laat elke euro onderhoud een product groeien dat zijn waarde al heeft bewezen.",
      },
    ],
  },
  ar: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "من الفكرة إلى أول عميل يدفع في 30 يوماً",
    excerpt:
      "خطة ملموسة على 30 يوماً للتحقق من فكرتك، وتسليم الـ V1 في 7 أيام، وإطلاقها، وتحويل أول عميل يدفع.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "الانتقال من الفكرة إلى أول عميل يدفع في 30 يوماً أمر واقعي إذا قسّمت الشهر إلى أربع مراحل: التحقق من الفكرة (الأيام 1–5)، وتسليم الـ V1 (الأيام 6–12)، وإطلاقها (الأيام 13–15)، ثم البحث عن أول مستخدمين وتحويلهم (الأيام 16–30). الخطأ الكلاسيكي ليس البرمجة ببطء شديد، بل البرمجة قبل التحدث إلى عميل واحد. إليك الخطة، خطوة بخطوة.",
      },
      { h2: "الأيام 1–5 — التحقق من الفكرة قبل كتابة سطر برمجي واحد" },
      {
        p: "التحقق لا يتطلب منتجاً، بل يتطلب محادثات. استهدف من 10 إلى 15 مقابلة مع أشخاص يعيشون المشكلة التي تريد حلها. أنت تبحث عن ألم حقيقي ومتكرر يدفع الناس المال بالفعل لتجنبه، لا عن مجاملات لبقة.",
      },
      {
        ul: [
          "اكتب في جملة واحدة المشكلة ولمن تحلها.",
          "أجرِ من 10 إلى 15 مقابلة: ما المشكلة، وكيف يحلونها اليوم، وكم تكلفهم.",
          "اختبر السعر فوراً: «هل ستدفع X شهرياً مقابل هذا؟»",
          "انشر صفحة هبوط بسيطة وقِس من يترك بريده الإلكتروني.",
        ],
      },
      { h2: "الأيام 6–12 — تحديد نطاق الـ V1 وتسليمها في 7 أيام" },
      {
        p: "بمجرد تأكيد المشكلة، قلّص النطاق إلى الحد الأدنى: المسارات الثلاثة إلى الخمسة الأساسية التي يحتاجها المنتج للوفاء بوعد حقيقي. كل ما عدا ذلك ينتظر. هذا بالضبط ما صُمّم من أجله حزمة V1 بسعر ثابت: في Khufu، منتج V1 جاهز للإنتاج يُسلَّم في 7 أيام مقابل 15,000 €، والكود المصدري ملك لك. تخرج من ذلك الأسبوع بمنتج على الإنترنت، لا بنموذج أولي يُرمى.",
      },
      { h2: "الأيام 13–15 — الإطلاق والقياس" },
      {
        p: "الانتقال إلى الإنتاج، وربط النطاق، وتوصيل الدفع، ووضع أدوات التحليلات. لا يمكنك تحويل ما لا تقيسه: تابع التسجيلات والتفعيل وأول لحظة قيمة منذ أول مستخدم لك.",
      },
      {
        ul: [
          "وصّل الدفع من اليوم الأول، حتى بخطة تسعير واحدة.",
          "ثبّت أدوات تحليلات بسيطة: التسجيل، التفعيل، الاحتفاظ في اليوم السابع.",
          "صمّم عملية إعداد توصل المستخدم إلى أول قيمة في أقل من 5 دقائق.",
        ],
      },
      { h2: "الأيام 16–30 — إيجاد أول المستخدمين والتحويل" },
      {
        p: "التوزيع في البداية عمل يدوي، لا إعلانات. عُد إلى الـ 10 إلى 15 شخصاً الذين قابلتهم: هم يعرفون المشكلة بالفعل وقد ردّوا عليك بالفعل. تواصل مع 5 إلى 10 جدد يومياً في القنوات التي يتواجد فيها جمهورك أصلاً، وقدّم عروضاً فردية، واطلب البيع. عميل واحد يدفع، حتى بسعر منخفض، أثمن من 100 مسجّل مجاني: إنه الدليل الوحيد على أن المشكلة تستحق المال.",
      },
      {
        quote:
          "عميل يدفع 20 € يعلّمك أكثر من مئة مسجّل مجاني: إنه التحقق الوحيد الذي يهم.",
      },
      {
        p: "في 30 يوماً، الهدف ليس منتجاً مثالياً ولا ألف مستخدم. الهدف حلقة تدور: منتج حقيقي على الإنترنت، ومستخدمون يستعملونه، وعميل واحد على الأقل يدفع. من هناك، كل يورو من الصيانة ينمّي منتجاً أثبت قيمته بالفعل.",
      },
    ],
  },
  pl: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Od pomysłu do pierwszego płacącego klienta w 30 dni",
    excerpt:
      "Konkretny plan na 30 dni: zwaliduj pomysł, dostarcz V1 w 7 dni, uruchom ją i przekonaj pierwszego płacącego klienta.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Przejście od pomysłu do pierwszego płacącego klienta w 30 dni jest realne, jeśli podzielisz miesiąc na cztery fazy: walidacja pomysłu (dni 1–5), dostarczenie V1 (dni 6–12), uruchomienie (dni 13–15), a potem szukanie i konwersja pierwszych użytkowników (dni 16–30). Klasyczny błąd to nie zbyt wolne kodowanie, lecz kodowanie zanim porozmawiasz choćby z jednym klientem. Oto plan, krok po kroku.",
      },
      { h2: "Dni 1–5 — zwaliduj pomysł, zanim napiszesz linijkę kodu" },
      {
        p: "Walidacja nie wymaga produktu, wymaga rozmów. Celuj w 10 do 15 wywiadów z ludźmi, którzy żyją z problemem, który chcesz rozwiązać. Szukasz realnego, powtarzalnego bólu, za którego uniknięcie ludzie już płacą, a nie grzecznościowych komplementów.",
      },
      {
        ul: [
          "Napisz w jednym zdaniu, jaki problem rozwiązujesz i dla kogo.",
          "Przeprowadź 10 do 15 wywiadów: jaki to problem, jak go dziś rozwiązują, ile ich to kosztuje.",
          "Od razu przetestuj cenę: „czy zapłaciłbyś za to X miesięcznie?”",
          "Postaw prostą landing page i mierz, kto zostawia swój e-mail.",
        ],
      },
      { h2: "Dni 6–12 — określ zakres i dostarcz V1 w 7 dni" },
      {
        p: "Gdy problem jest potwierdzony, przytnij zakres do kości: 3 do 5 kluczowych ścieżek, których produkt potrzebuje, by dotrzymać realnej obietnicy. Reszta czeka. To dokładnie format pakietu V1 w stałej cenie: w Khufu gotowa do produkcji V1 dostarczona w 7 dni za 15 000 €, kod źródłowy należy do Ciebie. Kończysz ten tydzień z działającym produktem, a nie jednorazowym prototypem.",
      },
      { h2: "Dni 13–15 — uruchom i mierz" },
      {
        p: "Wdrożenie na produkcję, domena, podpięta płatność i analityka na miejscu. Nie skonwertujesz tego, czego nie mierzysz: śledź rejestracje, aktywację i pierwszy moment wartości od pierwszego użytkownika.",
      },
      {
        ul: [
          "Podepnij płatność od pierwszego dnia, nawet przy jednym planie cenowym.",
          "Zainstaluj prostą analitykę: rejestracja, aktywacja, retencja w dniu 7.",
          "Zaprojektuj onboarding, który doprowadzi użytkownika do pierwszej wartości w mniej niż 5 minut.",
        ],
      },
      { h2: "Dni 16–30 — znajdź pierwszych użytkowników i konwertuj" },
      {
        p: "Na początku dystrybucja to praca ręczna, nie reklama. Wróć do 10 do 15 osób, z którymi rozmawiałeś: znają już problem i już Ci odpowiedziały. Kontaktuj się z 5 do 10 nowymi dziennie w kanałach, gdzie Twoja grupa docelowa już jest, rób demo jeden na jeden i proś o sprzedaż. Jeden płacący klient, nawet za niską cenę, jest wart więcej niż 100 darmowych rejestracji: to jedyny dowód, że problem jest wart pieniędzy.",
      },
      {
        quote:
          "Klient, który płaci 20 €, uczy Cię więcej niż stu darmowych rejestrujących: to jedyna walidacja, która się liczy.",
      },
      {
        p: "W 30 dni celem nie jest doskonały produkt ani tysiąc użytkowników. To pętla, która się kręci: prawdziwy produkt online, użytkownicy, którzy go używają, i co najmniej jeden płacący klient. Od tego momentu każde euro utrzymania rozwija produkt, który już udowodnił swoją wartość.",
      },
    ],
  },
  tr: {
    slug: 'de-l-idee-au-premier-client-30-jours',
    title: "Fikirden ilk ödeme yapan müşteriye 30 günde",
    excerpt:
      "Fikrinizi doğrulamak, V1’i 7 günde teslim etmek, yayına almak ve ilk ödeme yapan müşteriyi dönüştürmek için somut 30 günlük plan.",
    date: '2026-04-29',
    readingMinutes: 6,
    tags: ['Founder', 'Go-to-market'],
    body: [
      {
        p: "Fikirden ilk ödeme yapan müşteriye 30 günde ulaşmak, ayı dört aşamaya bölerseniz gerçekçidir: fikri doğrulamak (gün 1–5), V1’i teslim etmek (gün 6–12), yayına almak (gün 13–15) ve ardından ilk kullanıcıları bulup dönüştürmek (gün 16–30). Klasik hata çok yavaş kod yazmak değil, tek bir müşteriyle konuşmadan kod yazmaktır. İşte plan, adım adım.",
      },
      { h2: "Gün 1–5 — tek satır kod yazmadan fikri doğrulayın" },
      {
        p: "Doğrulama bir ürün gerektirmez, konuşmalar gerektirir. Çözmek istediğiniz sorunu yaşayan kişilerle 10 ila 15 görüşme hedefleyin. İnsanların kaçınmak için zaten para ödediği gerçek, tekrar eden bir acı arıyorsunuz, kibar iltifatlar değil.",
      },
      {
        ul: [
          "Hangi sorunu ve kimin için çözdüğünüzü tek cümlede yazın.",
          "10 ila 15 görüşme yapın: sorun nedir, bugün nasıl çözüyorlar, kendilerine kaça mal oluyor.",
          "Fiyatı hemen test edin: “bunun için ayda X öder misiniz?”",
          "Basit bir landing page yayınlayın ve kimin e-postasını bıraktığını ölçün.",
        ],
      },
      { h2: "Gün 6–12 — V1 kapsamını belirleyin ve 7 günde teslim edin" },
      {
        p: "Sorun doğrulandığında kapsamı iliğine kadar kesin: ürünün gerçek bir sözü tutması için gereken 3 ila 5 temel akış. Geri kalan her şey bekler. Sabit fiyatlı bir V1 paketinin var oluş nedeni tam olarak budur: Khufu’da, 7 günde teslim edilen üretime hazır bir V1, 15.000 € karşılığında, kaynak kodu size ait. O haftadan çöpe atılacak bir prototiple değil, yayında bir ürünle çıkarsınız.",
      },
      { h2: "Gün 13–15 — yayına alın ve ölçümleyin" },
      {
        p: "Üretime geçiş, alan adı, bağlanmış ödeme ve yerine oturmuş analitik. Ölçmediğinizi dönüştüremezsiniz: ilk kullanıcınızdan itibaren kayıtları, aktivasyonu ve ilk değer anını takip edin.",
      },
      {
        ul: [
          "Ödemeyi ilk günden, tek bir fiyat planıyla bile olsa bağlayın.",
          "Basit analitik kurun: kayıt, aktivasyon, 7. gün elde tutma.",
          "Kullanıcıyı 5 dakikadan kısa sürede ilk değere ulaştıran bir onboarding tasarlayın.",
        ],
      },
      { h2: "Gün 16–30 — ilk kullanıcılarınızı bulun ve dönüştürün" },
      {
        p: "Başlangıçta dağıtım reklam değil, el işidir. Görüştüğünüz 10 ila 15 kişiye geri dönün: sorunu zaten biliyorlar ve size zaten yanıt verdiler. Hedef kitlenizin zaten bulunduğu kanallarda her gün 5 ila 10 yeni kişiye ulaşın, birebir demolar yapın ve satışı isteyin. Düşük fiyatta bile olsa ödeme yapan tek bir müşteri, 100 ücretsiz kayıttan daha değerlidir: sorunun paraya değdiğinin tek kanıtıdır.",
      },
      {
        quote:
          "20 € ödeyen bir müşteri size yüz ücretsiz kayıttan daha çok şey öğretir: önemli olan tek doğrulama budur.",
      },
      {
        p: "30 günde hedef mükemmel bir ürün ya da bin kullanıcı değildir. Dönen bir döngüdür: yayında gerçek bir ürün, onu kullanan kullanıcılar ve en az bir ödeme yapan müşteri. Oradan itibaren her euro bakım, değerini zaten kanıtlamış bir ürünü büyütür.",
      },
    ],
  },
}
