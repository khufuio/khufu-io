import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Développer en interne ou externaliser sa V1 ?',
    excerpt:
      'Grille de décision interne vs externalisation pour une première version : coût réel, vitesse, risque, propriété du code. La recommandation selon votre contexte.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Décision', 'Founder'],
    body: [
      {
        p: "Pour une première version, externaliser est presque toujours le bon choix : c'est plus rapide, le coût est fixe et connu à l'avance, et vous ne portez pas le risque de recruter avant d'avoir validé le marché. Développer en interne n'a de sens que si votre produit est votre cœur de métier technique et que vous avez déjà les développeurs seniors pour le faire. Voici la grille de décision, facteur par facteur.",
      },
      { h2: 'Le coût réel, au-delà du salaire' },
      {
        p: "Un développeur full-stack senior coûte 60 000 à 90 000 € par an en salaire chargé, auxquels s'ajoutent le recrutement (2 à 3 mois et souvent 15 à 20 % du salaire en frais), l'équipement, et le temps de montée en charge. Et une seule personne ne suffit pas à couvrir design, back, front et infra. Une V1 externalisée à prix fixe, à 15 000 €, revient à une fraction de ce coût sur les six premiers mois — sans engagement de long terme.",
      },
      {
        ul: [
          "Interne : 5 000 à 8 000 €/mois par développeur, plus les charges annexes, engagé sur la durée.",
          "Freelance : 300 à 700 €/jour, qualité variable, dépendance à une seule personne.",
          "Externalisation à prix fixe : périmètre et budget verrouillés avant de commencer, aucun coût caché.",
        ],
      },
      { h2: 'La vitesse de mise sur le marché' },
      {
        p: "Recruter puis onboarder une équipe interne prend 3 à 6 mois avant la première ligne de code utile. Une équipe externe rodée, avec une stack éprouvée et un développement assisté par l'IA, met une V1 en production en 7 jours. Sur un marché où chaque mois de retard est un mois sans revenus ni retours utilisateurs, cet écart est décisif.",
      },
      { h2: 'Le risque et la propriété du code' },
      {
        p: "Le vrai risque de l'interne, ce n'est pas de mal coder : c'est d'immobiliser du capital et des mois avant même de savoir si le produit intéresse quelqu'un. Un mauvais recrutement se paie six mois. À l'inverse, la crainte légitime de l'externalisation — perdre la maîtrise de son produit — se règle par contrat : exigez le code source complet, sur une stack standard et documentée comme Next.js, NestJS et PostgreSQL, jamais une solution propriétaire dont vous ne pourriez pas sortir.",
      },
      {
        quote:
          "Développer en interne trop tôt, c'est payer une équipe pendant six mois pour découvrir si le marché existe. Externaliser, c'est le découvrir en une semaine.",
      },
      { h2: 'La montée en compétence de votre équipe' },
      {
        p: "C'est le seul vrai argument pour l'interne : chaque ligne écrite en interne fait grandir la connaissance de votre équipe. Mais ce n'est un atout qu'une fois le marché validé et le produit stabilisé. Sur une V1, personne ne sait encore quelles fonctionnalités survivront. Externaliser la V1 puis internaliser progressivement une fois la traction prouvée est souvent le meilleur des deux mondes — à condition, encore une fois, de récupérer un code propre et repris facilement par des développeurs internes.",
      },
      { h2: 'La recommandation, selon votre contexte' },
      {
        ul: [
          "Vous validez une idée non prouvée, sans équipe technique : externalisez la V1 à prix fixe, gardez le capital pour la traction.",
          "Vous avez déjà des développeurs seniors et le produit est votre cœur technique : développez en interne.",
          "Vous avez de la traction mais pas d'équipe : externalisez la V1, puis recrutez pour maintenir et faire évoluer.",
        ],
      },
      {
        p: "Chez Khufu, on livre cette V1 prête pour la production en 7 jours, à prix fixe de 15 000 €, code source à vous, sur une stack que n'importe quelle équipe interne peut reprendre. Vous validez d'abord, vous recrutez ensuite — dans le bon ordre.",
      },
    ],
  },
  en: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Build your V1 in-house or outsource it?',
    excerpt:
      'In-house vs outsourcing decision grid for a first version: real cost, speed, risk, code ownership. The recommendation based on your context.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Decision', 'Founder'],
    body: [
      {
        p: "For a first version, outsourcing is almost always the right call: it is faster, the cost is fixed and known upfront, and you do not carry the risk of hiring before you have validated the market. Building in-house only makes sense if your product is your core technical business and you already have the senior developers to do it. Here is the decision grid, factor by factor.",
      },
      { h2: 'The real cost, beyond salary' },
      {
        p: "A senior full-stack developer costs €60,000 to €90,000 a year in fully loaded salary, on top of which come recruiting (2 to 3 months and often 15 to 20% of salary in fees), equipment, and ramp-up time. And a single person cannot cover design, back end, front end and infra. An outsourced fixed-price V1 at €15,000 costs a fraction of that over the first six months, with no long-term commitment.",
      },
      {
        ul: [
          "In-house: €5,000 to €8,000/month per developer, plus overhead, committed for the long haul.",
          "Freelance: €300 to €700/day, variable quality, dependence on a single person.",
          "Fixed-price outsourcing: scope and budget locked before you start, no hidden costs.",
        ],
      },
      { h2: 'Speed to market' },
      {
        p: "Hiring then onboarding an in-house team takes 3 to 6 months before the first useful line of code. A seasoned external team, with a proven stack and AI-assisted development, ships a V1 to production in 7 days. In a market where every month of delay is a month without revenue or user feedback, that gap is decisive.",
      },
      { h2: 'Risk and code ownership' },
      {
        p: "The real risk of going in-house is not writing bad code: it is tying up capital and months before you even know whether anyone wants the product. A bad hire costs you six months. Conversely, the legitimate fear of outsourcing — losing control of your product — is solved by contract: demand the full source code, on a standard, documented stack like Next.js, NestJS and PostgreSQL, never a proprietary solution you could not walk away from.",
      },
      {
        quote:
          "Building in-house too early means paying a team for six months to find out whether the market exists. Outsourcing means finding out in a week.",
      },
      { h2: 'Upskilling your team' },
      {
        p: "This is the only real argument for in-house: every line written internally grows your team's knowledge. But it is only an asset once the market is validated and the product stabilized. On a V1, nobody yet knows which features will survive. Outsourcing the V1 then gradually bringing it in-house once traction is proven is often the best of both worlds — provided, again, that you get clean code that internal developers can easily take over.",
      },
      { h2: 'The recommendation, based on your context' },
      {
        ul: [
          "You are validating an unproven idea, with no technical team: outsource the fixed-price V1, keep the capital for traction.",
          "You already have senior developers and the product is your technical core: build in-house.",
          "You have traction but no team: outsource the V1, then hire to maintain and grow it.",
        ],
      },
      {
        p: "At Khufu, we ship that production-ready V1 in 7 days, at a fixed price of €15,000, source code yours, on a stack any internal team can take over. You validate first, you hire second — in the right order.",
      },
    ],
  },
  es: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: '¿Desarrollar tu V1 en interno o externalizarla?',
    excerpt:
      'Cuadro de decisión interno vs externalización para una primera versión: coste real, velocidad, riesgo, propiedad del código. La recomendación según tu contexto.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Decisión', 'Founder'],
    body: [
      {
        p: "Para una primera versión, externalizar es casi siempre la decisión correcta: es más rápido, el coste es fijo y conocido de antemano, y no cargas con el riesgo de contratar antes de haber validado el mercado. Desarrollar en interno solo tiene sentido si tu producto es tu núcleo técnico y ya cuentas con los desarrolladores senior para hacerlo. Aquí tienes el cuadro de decisión, factor por factor.",
      },
      { h2: 'El coste real, más allá del salario' },
      {
        p: "Un desarrollador full-stack senior cuesta entre 60.000 y 90.000 € al año de salario con cargas, a lo que se suman la contratación (2 a 3 meses y a menudo un 15 a 20% del salario en gastos), el equipamiento y el tiempo de puesta en marcha. Y una sola persona no basta para cubrir diseño, back, front e infraestructura. Una V1 externalizada a precio fijo, por 15.000 €, cuesta una fracción de eso en los primeros seis meses, sin compromiso a largo plazo.",
      },
      {
        ul: [
          "Interno: de 5.000 a 8.000 €/mes por desarrollador, más los gastos anexos, comprometido a largo plazo.",
          "Freelance: de 300 a 700 €/día, calidad variable, dependencia de una sola persona.",
          "Externalización a precio fijo: alcance y presupuesto cerrados antes de empezar, sin costes ocultos.",
        ],
      },
      { h2: 'La velocidad de salida al mercado' },
      {
        p: "Contratar y luego incorporar un equipo interno lleva de 3 a 6 meses antes de la primera línea de código útil. Un equipo externo rodado, con una stack probada y desarrollo asistido por IA, pone una V1 en producción en 7 días. En un mercado donde cada mes de retraso es un mes sin ingresos ni feedback de usuarios, esa diferencia es decisiva.",
      },
      { h2: 'El riesgo y la propiedad del código' },
      {
        p: "El verdadero riesgo del interno no es programar mal: es inmovilizar capital y meses antes siquiera de saber si el producto le interesa a alguien. Una mala contratación se paga durante seis meses. A la inversa, el temor legítimo a externalizar — perder el control de tu producto — se resuelve por contrato: exige el código fuente completo, sobre una stack estándar y documentada como Next.js, NestJS y PostgreSQL, nunca una solución propietaria de la que no pudieras salir.",
      },
      {
        quote:
          "Desarrollar en interno demasiado pronto es pagar un equipo durante seis meses para descubrir si el mercado existe. Externalizar es descubrirlo en una semana.",
      },
      { h2: 'La mejora de competencias de tu equipo' },
      {
        p: "Es el único argumento real a favor del interno: cada línea escrita internamente hace crecer el conocimiento de tu equipo. Pero solo es una ventaja una vez validado el mercado y estabilizado el producto. En una V1, nadie sabe todavía qué funcionalidades sobrevivirán. Externalizar la V1 y luego internalizar progresivamente una vez probada la tracción suele ser lo mejor de ambos mundos, siempre que, de nuevo, recuperes un código limpio y fácil de retomar por desarrolladores internos.",
      },
      { h2: 'La recomendación, según tu contexto' },
      {
        ul: [
          "Validas una idea no probada, sin equipo técnico: externaliza la V1 a precio fijo, guarda el capital para la tracción.",
          "Ya tienes desarrolladores senior y el producto es tu núcleo técnico: desarrolla en interno.",
          "Tienes tracción pero no equipo: externaliza la V1 y luego contrata para mantener y evolucionar.",
        ],
      },
      {
        p: "En Khufu entregamos esa V1 lista para producción en 7 días, a precio fijo de 15.000 €, con el código fuente para ti, sobre una stack que cualquier equipo interno puede retomar. Primero validas, después contratas, en el orden correcto.",
      },
    ],
  },
  de: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'V1 intern entwickeln oder auslagern?',
    excerpt:
      'Entscheidungsmatrix intern vs. Auslagerung für eine erste Version: echte Kosten, Tempo, Risiko, Code-Eigentum. Die Empfehlung je nach Kontext.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Entscheidung', 'Founder'],
    body: [
      {
        p: "Für eine erste Version ist Auslagern fast immer die richtige Wahl: Es geht schneller, die Kosten sind fix und vorab bekannt, und Sie tragen nicht das Risiko, einzustellen, bevor der Markt validiert ist. Intern zu entwickeln ergibt nur Sinn, wenn Ihr Produkt Ihr technisches Kerngeschäft ist und Sie bereits die Senior-Entwickler dafür haben. Hier ist die Entscheidungsmatrix, Faktor für Faktor.",
      },
      { h2: 'Die echten Kosten, jenseits des Gehalts' },
      {
        p: "Ein Senior-Full-Stack-Entwickler kostet 60.000 bis 90.000 € pro Jahr an vollen Personalkosten, hinzu kommen Recruiting (2 bis 3 Monate und oft 15 bis 20% des Gehalts an Kosten), Ausstattung und Einarbeitungszeit. Und eine einzige Person deckt nicht Design, Back-End, Front-End und Infrastruktur ab. Eine ausgelagerte Festpreis-V1 zu 15.000 € kostet nur einen Bruchteil davon in den ersten sechs Monaten, ohne langfristige Bindung.",
      },
      {
        ul: [
          "Intern: 5.000 bis 8.000 €/Monat pro Entwickler, plus Nebenkosten, langfristig gebunden.",
          "Freelancer: 300 bis 700 €/Tag, schwankende Qualität, Abhängigkeit von einer einzigen Person.",
          "Festpreis-Auslagerung: Umfang und Budget vor dem Start festgelegt, keine versteckten Kosten.",
        ],
      },
      { h2: 'Das Tempo bis zum Markt' },
      {
        p: "Ein internes Team einzustellen und dann einzuarbeiten dauert 3 bis 6 Monate bis zur ersten nützlichen Codezeile. Ein eingespieltes externes Team mit erprobtem Stack und KI-gestützter Entwicklung bringt eine V1 in 7 Tagen in Produktion. In einem Markt, in dem jeder Monat Verzögerung ein Monat ohne Umsatz und ohne Nutzer-Feedback ist, ist dieser Abstand entscheidend.",
      },
      { h2: 'Risiko und Code-Eigentum' },
      {
        p: "Das echte Risiko intern ist nicht schlechter Code: Es ist, Kapital und Monate zu binden, bevor Sie überhaupt wissen, ob jemand das Produkt will. Eine Fehlbesetzung kostet sechs Monate. Umgekehrt lässt sich die berechtigte Angst vor der Auslagerung — die Kontrolle über das Produkt zu verlieren — vertraglich lösen: Fordern Sie den vollständigen Quellcode auf einem standardisierten, dokumentierten Stack wie Next.js, NestJS und PostgreSQL, niemals eine proprietäre Lösung, aus der Sie nicht aussteigen könnten.",
      },
      {
        quote:
          "Zu früh intern zu entwickeln heißt, ein Team sechs Monate zu bezahlen, um herauszufinden, ob der Markt existiert. Auszulagern heißt, es in einer Woche herauszufinden.",
      },
      { h2: 'Der Kompetenzaufbau in Ihrem Team' },
      {
        p: "Das ist das einzige echte Argument für intern: Jede intern geschriebene Zeile lässt das Wissen Ihres Teams wachsen. Aber es ist erst ein Vorteil, wenn der Markt validiert und das Produkt stabilisiert ist. Bei einer V1 weiß noch niemand, welche Funktionen überleben. Die V1 auszulagern und sie dann schrittweise zu internalisieren, sobald die Traktion bewiesen ist, ist oft das Beste aus beiden Welten — vorausgesetzt, Sie erhalten sauberen Code, den interne Entwickler leicht übernehmen können.",
      },
      { h2: 'Die Empfehlung, je nach Kontext' },
      {
        ul: [
          "Sie validieren eine unbewiesene Idee ohne technisches Team: Lagern Sie die Festpreis-V1 aus, behalten Sie das Kapital für die Traktion.",
          "Sie haben bereits Senior-Entwickler und das Produkt ist Ihr technischer Kern: Entwickeln Sie intern.",
          "Sie haben Traktion, aber kein Team: Lagern Sie die V1 aus und stellen Sie dann für Wartung und Weiterentwicklung ein.",
        ],
      },
      {
        p: "Bei Khufu liefern wir diese produktionsreife V1 in 7 Tagen, zum Festpreis von 15.000 €, mit dem Quellcode für Sie, auf einem Stack, den jedes interne Team übernehmen kann. Zuerst validieren, dann einstellen — in der richtigen Reihenfolge.",
      },
    ],
  },
  it: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Sviluppare la tua V1 internamente o esternalizzarla?',
    excerpt:
      'Griglia decisionale interno vs esternalizzazione per una prima versione: costo reale, velocità, rischio, proprietà del codice. La raccomandazione secondo il contesto.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Decisione', 'Founder'],
    body: [
      {
        p: "Per una prima versione, esternalizzare è quasi sempre la scelta giusta: è più rapido, il costo è fisso e noto in anticipo, e non ti carichi del rischio di assumere prima di aver validato il mercato. Sviluppare internamente ha senso solo se il tuo prodotto è il tuo core tecnico e hai già gli sviluppatori senior per farlo. Ecco la griglia decisionale, fattore per fattore.",
      },
      { h2: 'Il costo reale, oltre lo stipendio' },
      {
        p: "Uno sviluppatore full-stack senior costa da 60.000 a 90.000 € l'anno di stipendio con oneri, a cui si aggiungono il recruiting (2 o 3 mesi e spesso il 15-20% dello stipendio in spese), l'attrezzatura e il tempo di avviamento. E una sola persona non basta a coprire design, back-end, front-end e infrastruttura. Una V1 esternalizzata a prezzo fisso, a 15.000 €, costa una frazione di tutto ciò nei primi sei mesi, senza impegni a lungo termine.",
      },
      {
        ul: [
          "Interno: da 5.000 a 8.000 €/mese per sviluppatore, più i costi accessori, impegnato a lungo termine.",
          "Freelance: da 300 a 700 €/giorno, qualità variabile, dipendenza da una sola persona.",
          "Esternalizzazione a prezzo fisso: perimetro e budget bloccati prima di iniziare, nessun costo nascosto.",
        ],
      },
      { h2: 'La velocità di arrivo sul mercato' },
      {
        p: "Assumere e poi inserire un team interno richiede da 3 a 6 mesi prima della prima riga di codice utile. Un team esterno rodato, con uno stack collaudato e sviluppo assistito dall'IA, mette una V1 in produzione in 7 giorni. In un mercato dove ogni mese di ritardo è un mese senza ricavi né feedback degli utenti, questo divario è decisivo.",
      },
      { h2: 'Il rischio e la proprietà del codice' },
      {
        p: "Il vero rischio dell'interno non è programmare male: è immobilizzare capitale e mesi prima ancora di sapere se il prodotto interessa a qualcuno. Un'assunzione sbagliata si paga sei mesi. Al contrario, il timore legittimo dell'esternalizzazione — perdere il controllo del prodotto — si risolve per contratto: esigi il codice sorgente completo, su uno stack standard e documentato come Next.js, NestJS e PostgreSQL, mai una soluzione proprietaria da cui non potresti uscire.",
      },
      {
        quote:
          "Sviluppare internamente troppo presto significa pagare un team per sei mesi per scoprire se il mercato esiste. Esternalizzare significa scoprirlo in una settimana.",
      },
      { h2: 'La crescita delle competenze del tuo team' },
      {
        p: "È l'unico vero argomento a favore dell'interno: ogni riga scritta internamente fa crescere la conoscenza del tuo team. Ma è un vantaggio solo una volta validato il mercato e stabilizzato il prodotto. Su una V1, nessuno sa ancora quali funzionalità sopravviveranno. Esternalizzare la V1 e poi internalizzare progressivamente una volta provata la trazione è spesso il meglio di entrambi i mondi — a condizione, di nuovo, di recuperare un codice pulito e facilmente ripreso da sviluppatori interni.",
      },
      { h2: 'La raccomandazione, secondo il tuo contesto' },
      {
        ul: [
          "Stai validando un'idea non provata, senza team tecnico: esternalizza la V1 a prezzo fisso, tieni il capitale per la trazione.",
          "Hai già sviluppatori senior e il prodotto è il tuo core tecnico: sviluppa internamente.",
          "Hai trazione ma nessun team: esternalizza la V1, poi assumi per manutenere e far evolvere.",
        ],
      },
      {
        p: "In Khufu consegniamo questa V1 pronta per la produzione in 7 giorni, a prezzo fisso di 15.000 €, con il codice sorgente tuo, su uno stack che qualsiasi team interno può riprendere. Prima validi, poi assumi — nell'ordine giusto.",
      },
    ],
  },
  pt: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Desenvolver a sua V1 internamente ou externalizar?',
    excerpt:
      'Grelha de decisão interno vs externalização para uma primeira versão: custo real, velocidade, risco, propriedade do código. A recomendação segundo o contexto.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Decisão', 'Founder'],
    body: [
      {
        p: "Para uma primeira versão, externalizar é quase sempre a escolha certa: é mais rápido, o custo é fixo e conhecido à partida, e não carrega o risco de contratar antes de ter validado o mercado. Desenvolver internamente só faz sentido se o seu produto for o seu núcleo técnico e já tiver os programadores seniores para o fazer. Aqui está a grelha de decisão, fator a fator.",
      },
      { h2: 'O custo real, para além do salário' },
      {
        p: "Um programador full-stack sénior custa entre 60.000 e 90.000 € por ano em salário com encargos, aos quais se somam o recrutamento (2 a 3 meses e muitas vezes 15 a 20% do salário em custos), o equipamento e o tempo de arranque. E uma só pessoa não chega para cobrir design, back-end, front-end e infraestrutura. Uma V1 externalizada a preço fixo, por 15.000 €, custa uma fração disso nos primeiros seis meses, sem compromisso de longo prazo.",
      },
      {
        ul: [
          "Interno: de 5.000 a 8.000 €/mês por programador, mais os custos acessórios, comprometido a longo prazo.",
          "Freelancer: de 300 a 700 €/dia, qualidade variável, dependência de uma só pessoa.",
          "Externalização a preço fixo: âmbito e orçamento fechados antes de começar, sem custos ocultos.",
        ],
      },
      { h2: 'A velocidade de chegada ao mercado' },
      {
        p: "Contratar e depois integrar uma equipa interna leva de 3 a 6 meses antes da primeira linha de código útil. Uma equipa externa rodada, com uma stack comprovada e desenvolvimento assistido por IA, coloca uma V1 em produção em 7 dias. Num mercado onde cada mês de atraso é um mês sem receitas nem feedback de utilizadores, essa diferença é decisiva.",
      },
      { h2: 'O risco e a propriedade do código' },
      {
        p: "O verdadeiro risco do interno não é programar mal: é imobilizar capital e meses antes mesmo de saber se o produto interessa a alguém. Uma má contratação paga-se seis meses. Ao contrário, o receio legítimo da externalização — perder o controlo do produto — resolve-se por contrato: exija o código-fonte completo, numa stack padrão e documentada como Next.js, NestJS e PostgreSQL, nunca uma solução proprietária da qual não pudesse sair.",
      },
      {
        quote:
          "Desenvolver internamente cedo demais é pagar uma equipa durante seis meses para descobrir se o mercado existe. Externalizar é descobri-lo numa semana.",
      },
      { h2: 'O desenvolvimento de competências da sua equipa' },
      {
        p: "É o único argumento real a favor do interno: cada linha escrita internamente faz crescer o conhecimento da sua equipa. Mas só é uma mais-valia depois de validado o mercado e estabilizado o produto. Numa V1, ninguém sabe ainda que funcionalidades vão sobreviver. Externalizar a V1 e depois internalizar progressivamente, uma vez provada a tração, é muitas vezes o melhor dos dois mundos — desde que, mais uma vez, recupere um código limpo e facilmente retomado por programadores internos.",
      },
      { h2: 'A recomendação, segundo o seu contexto' },
      {
        ul: [
          "Está a validar uma ideia não provada, sem equipa técnica: externalize a V1 a preço fixo, guarde o capital para a tração.",
          "Já tem programadores seniores e o produto é o seu núcleo técnico: desenvolva internamente.",
          "Tem tração mas não tem equipa: externalize a V1 e depois contrate para manter e fazer evoluir.",
        ],
      },
      {
        p: "Na Khufu entregamos essa V1 pronta para produção em 7 dias, a preço fixo de 15.000 €, com o código-fonte para si, numa stack que qualquer equipa interna pode retomar. Primeiro valida, depois contrata — pela ordem certa.",
      },
    ],
  },
  nl: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Je V1 in-house bouwen of uitbesteden?',
    excerpt:
      'Beslissingsschema in-house vs uitbesteden voor een eerste versie: werkelijke kosten, snelheid, risico, code-eigendom. De aanbeveling op basis van je context.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Beslissing', 'Founder'],
    body: [
      {
        p: "Voor een eerste versie is uitbesteden bijna altijd de juiste keuze: het is sneller, de kosten zijn vast en vooraf bekend, en je draagt niet het risico van aanwerven voordat je de markt hebt gevalideerd. In-house bouwen is alleen zinvol als je product je technische kernactiviteit is en je al de senior developers ervoor hebt. Hier is het beslissingsschema, factor voor factor.",
      },
      { h2: 'De werkelijke kosten, verder dan het salaris' },
      {
        p: "Een senior full-stack developer kost €60.000 tot €90.000 per jaar aan brutoloon met lasten, waar nog werving bovenop komt (2 tot 3 maanden en vaak 15 tot 20% van het salaris aan kosten), apparatuur en inwerktijd. En één persoon volstaat niet om design, back-end, front-end en infra te dekken. Een uitbestede V1 met vaste prijs, voor €15.000, kost daar een fractie van in de eerste zes maanden, zonder langetermijnverplichting.",
      },
      {
        ul: [
          "In-house: €5.000 tot €8.000/maand per developer, plus bijkomende lasten, langdurig vastgelegd.",
          "Freelance: €300 tot €700/dag, wisselende kwaliteit, afhankelijkheid van één persoon.",
          "Uitbesteden tegen vaste prijs: scope en budget vastgelegd voor de start, geen verborgen kosten.",
        ],
      },
      { h2: 'De snelheid naar de markt' },
      {
        p: "Een intern team aanwerven en vervolgens inwerken kost 3 tot 6 maanden voor de eerste nuttige regel code. Een ingespeeld extern team, met een beproefde stack en AI-ondersteunde ontwikkeling, brengt een V1 in 7 dagen in productie. In een markt waar elke maand vertraging een maand zonder omzet of gebruikersfeedback is, is dat verschil doorslaggevend.",
      },
      { h2: 'Het risico en het code-eigendom' },
      {
        p: "Het echte risico van in-house is niet slecht coderen: het is kapitaal en maanden vastleggen voordat je überhaupt weet of iemand het product wil. Een verkeerde aanwerving kost je zes maanden. Omgekeerd wordt de terechte angst voor uitbesteden — de controle over je product verliezen — opgelost via het contract: eis de volledige broncode, op een standaard en gedocumenteerde stack zoals Next.js, NestJS en PostgreSQL, nooit een propriëtaire oplossing waar je niet uit zou kunnen stappen.",
      },
      {
        quote:
          "Te vroeg in-house bouwen betekent een team zes maanden betalen om te ontdekken of de markt bestaat. Uitbesteden betekent het in een week ontdekken.",
      },
      { h2: 'De competentieopbouw van je team' },
      {
        p: "Dit is het enige echte argument voor in-house: elke intern geschreven regel laat de kennis van je team groeien. Maar het is pas een troef zodra de markt is gevalideerd en het product gestabiliseerd. Bij een V1 weet nog niemand welke functies zullen overleven. De V1 uitbesteden en die daarna geleidelijk internaliseren zodra de tractie bewezen is, is vaak het beste van beide werelden — op voorwaarde, nogmaals, dat je schone code krijgt die interne developers gemakkelijk kunnen overnemen.",
      },
      { h2: 'De aanbeveling, op basis van je context' },
      {
        ul: [
          "Je valideert een onbewezen idee, zonder technisch team: besteed de V1 met vaste prijs uit, houd het kapitaal voor tractie.",
          "Je hebt al senior developers en het product is je technische kern: bouw in-house.",
          "Je hebt tractie maar geen team: besteed de V1 uit en werf daarna aan om te onderhouden en door te ontwikkelen.",
        ],
      },
      {
        p: "Bij Khufu leveren we die productieklare V1 in 7 dagen, tegen een vaste prijs van €15.000, met de broncode voor jou, op een stack die elk intern team kan overnemen. Eerst valideren, dan aanwerven — in de juiste volgorde.",
      },
    ],
  },
  ar: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'تطوير V1 داخليًا أم إسنادها إلى جهة خارجية؟',
    excerpt:
      'شبكة قرار: التطوير الداخلي مقابل الإسناد الخارجي للنسخة الأولى — الكلفة الحقيقية والسرعة والمخاطر وملكية الشيفرة. التوصية بحسب سياقك.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['قرار', 'Founder'],
    body: [
      {
        p: "بالنسبة إلى نسخة أولى، يكون الإسناد الخارجي هو الخيار الصحيح في أغلب الحالات: فهو أسرع، والكلفة ثابتة ومعروفة مسبقًا، ولا تتحمل مخاطرة التوظيف قبل التحقق من السوق. أما التطوير الداخلي فلا معنى له إلا إذا كان منتجك هو جوهر عملك التقني ولديك بالفعل المطورون الكبار لتنفيذه. إليك شبكة القرار، عاملًا بعامل.",
      },
      { h2: 'الكلفة الحقيقية، أبعد من الراتب' },
      {
        p: "يكلّف مطور full-stack كبير من 60000 إلى 90000 € سنويًا كراتب محمّل بالأعباء، تُضاف إليه كلفة التوظيف (من شهرين إلى ثلاثة أشهر وغالبًا 15 إلى 20% من الراتب رسومًا) والتجهيزات ووقت الاندماج. وشخص واحد لا يكفي لتغطية التصميم والـ back-end والـ front-end والبنية التحتية. أما V1 مُسندة خارجيًا بسعر ثابت قدره 15000 € فتكلّف جزءًا يسيرًا من ذلك خلال الأشهر الستة الأولى، دون التزام طويل الأمد.",
      },
      {
        ul: [
          "داخليًا: من 5000 إلى 8000 € شهريًا لكل مطور، إضافة إلى الأعباء الجانبية، والتزام طويل الأمد.",
          "Freelance: من 300 إلى 700 € يوميًا، جودة متفاوتة، واعتماد على شخص واحد.",
          "الإسناد بسعر ثابت: النطاق والميزانية محسومان قبل البدء، ولا كلفة خفية.",
        ],
      },
      { h2: 'سرعة الوصول إلى السوق' },
      {
        p: "يستغرق توظيف فريق داخلي ثم إدماجه من 3 إلى 6 أشهر قبل أول سطر شيفرة مفيد. أما فريق خارجي متمرس، بمنظومة تقنية مُجرّبة وتطوير مدعوم بالذكاء الاصطناعي، فيُطلق V1 في الإنتاج خلال 7 أيام. في سوق يعني فيه كل شهر تأخير شهرًا بلا إيرادات ولا ملاحظات من المستخدمين، يكون هذا الفارق حاسمًا.",
      },
      { h2: 'المخاطر وملكية الشيفرة' },
      {
        p: "المخاطرة الحقيقية في التطوير الداخلي ليست البرمجة السيئة: بل تجميد رأس المال وأشهر من الوقت قبل أن تعرف حتى ما إذا كان المنتج يهمّ أحدًا. التوظيف الخاطئ ثمنه ستة أشهر. في المقابل، الخوف المشروع من الإسناد الخارجي — فقدان السيطرة على منتجك — يُحلّ بالعقد: اشترط الحصول على الشيفرة المصدرية الكاملة، على منظومة قياسية وموثّقة مثل Next.js وNestJS وPostgreSQL، لا على حل مغلق لا يمكنك الخروج منه.",
      },
      {
        quote:
          "التطوير الداخلي مبكرًا جدًا يعني دفع رواتب فريق ستة أشهر لتكتشف ما إذا كان السوق موجودًا. الإسناد الخارجي يعني اكتشاف ذلك في أسبوع.",
      },
      { h2: 'تطوير كفاءات فريقك' },
      {
        p: "هذه هي الحجة الحقيقية الوحيدة لصالح التطوير الداخلي: كل سطر يُكتب داخليًا يُنمّي معرفة فريقك. لكنه لا يصبح ميزة إلا بعد التحقق من السوق واستقرار المنتج. في V1، لا أحد يعرف بعد أي الميزات ستبقى. إسناد V1 خارجيًا ثم استيعابها داخليًا تدريجيًا بعد إثبات الجاذبية هو غالبًا أفضل ما في العالمين — شرط، مرة أخرى، أن تستعيد شيفرة نظيفة يسهل على المطورين الداخليين استلامها.",
      },
      { h2: 'التوصية، بحسب سياقك' },
      {
        ul: [
          "تتحقق من فكرة غير مُثبتة، دون فريق تقني: أسند V1 بسعر ثابت، واحتفظ برأس المال للجاذبية.",
          "لديك بالفعل مطورون كبار والمنتج هو جوهرك التقني: طوّر داخليًا.",
          "لديك جاذبية لكن لا فريق: أسند V1 خارجيًا، ثم وظّف للصيانة والتطوير.",
        ],
      },
      {
        p: "في Khufu نُسلّم هذه V1 الجاهزة للإنتاج خلال 7 أيام، بسعر ثابت قدره 15000 €، والشيفرة المصدرية ملك لك، على منظومة يستطيع أي فريق داخلي استلامها. تتحقق أولًا، ثم توظّف — بالترتيب الصحيح.",
      },
    ],
  },
  pl: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'Zbudować V1 wewnętrznie czy zlecić na zewnątrz?',
    excerpt:
      'Siatka decyzyjna: własny zespół vs outsourcing dla pierwszej wersji — realny koszt, tempo, ryzyko, własność kodu. Rekomendacja zależnie od kontekstu.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Decyzja', 'Founder'],
    body: [
      {
        p: "W przypadku pierwszej wersji outsourcing jest niemal zawsze właściwym wyborem: jest szybszy, koszt jest stały i znany z góry, a Ty nie ponosisz ryzyka zatrudniania, zanim zweryfikujesz rynek. Budowanie wewnętrzne ma sens tylko wtedy, gdy Twój produkt jest Twoim technicznym rdzeniem i masz już do tego starszych programistów. Oto siatka decyzyjna, czynnik po czynniku.",
      },
      { h2: 'Realny koszt, poza pensją' },
      {
        p: "Starszy programista full-stack kosztuje od 60 000 do 90 000 € rocznie w pełnym koszcie zatrudnienia, do czego dochodzą rekrutacja (2 do 3 miesięcy, często 15 do 20% pensji w kosztach), sprzęt i czas wdrożenia. A jedna osoba nie pokryje designu, back-endu, front-endu i infrastruktury. Zlecona V1 w stałej cenie 15 000 € kosztuje ułamek tego w pierwszych sześciu miesiącach, bez długoterminowego zobowiązania.",
      },
      {
        ul: [
          "Wewnętrznie: od 5 000 do 8 000 €/miesiąc na programistę, plus koszty dodatkowe, zobowiązanie na długo.",
          "Freelance: od 300 do 700 €/dzień, zmienna jakość, zależność od jednej osoby.",
          "Outsourcing w stałej cenie: zakres i budżet ustalone przed startem, bez ukrytych kosztów.",
        ],
      },
      { h2: 'Tempo wejścia na rynek' },
      {
        p: "Zatrudnienie, a potem wdrożenie własnego zespołu zajmuje od 3 do 6 miesięcy, zanim powstanie pierwsza użyteczna linia kodu. Zgrany zespół zewnętrzny, z wypróbowanym stackiem i rozwojem wspieranym przez AI, wdraża V1 na produkcję w 7 dni. Na rynku, gdzie każdy miesiąc opóźnienia to miesiąc bez przychodów i bez informacji zwrotnej od użytkowników, ta różnica jest decydująca.",
      },
      { h2: 'Ryzyko i własność kodu' },
      {
        p: "Prawdziwe ryzyko zespołu wewnętrznego to nie zły kod: to zamrożenie kapitału i miesięcy, zanim w ogóle dowiesz się, czy produkt kogoś interesuje. Nietrafiona rekrutacja kosztuje sześć miesięcy. I odwrotnie — uzasadniona obawa przed outsourcingiem, czyli utrata kontroli nad produktem, rozwiązuje się umową: zażądaj pełnego kodu źródłowego, na standardowym i udokumentowanym stacku takim jak Next.js, NestJS i PostgreSQL, nigdy na zamkniętym rozwiązaniu, z którego nie mógłbyś wyjść.",
      },
      {
        quote:
          "Budowanie wewnętrzne zbyt wcześnie to płacenie zespołowi przez sześć miesięcy, by odkryć, czy rynek istnieje. Outsourcing to odkrycie tego w tydzień.",
      },
      { h2: 'Rozwój kompetencji Twojego zespołu' },
      {
        p: "To jedyny prawdziwy argument za zespołem wewnętrznym: każda napisana wewnętrznie linia zwiększa wiedzę Twojego zespołu. Ale staje się atutem dopiero po zweryfikowaniu rynku i ustabilizowaniu produktu. W V1 nikt jeszcze nie wie, które funkcje przetrwają. Zlecenie V1 na zewnątrz, a potem stopniowe przejęcie wewnętrzne po udowodnieniu trakcji, to często najlepsze z obu światów — pod warunkiem, znów, że odzyskasz czysty kod, który wewnętrzni programiści łatwo przejmą.",
      },
      { h2: 'Rekomendacja, zależnie od kontekstu' },
      {
        ul: [
          "Weryfikujesz nieudowodniony pomysł, bez zespołu technicznego: zleć V1 w stałej cenie, zachowaj kapitał na trakcję.",
          "Masz już starszych programistów, a produkt jest Twoim technicznym rdzeniem: buduj wewnętrznie.",
          "Masz trakcję, ale nie masz zespołu: zleć V1, a potem zatrudnij do utrzymania i rozwoju.",
        ],
      },
      {
        p: "W Khufu dostarczamy taką gotową do produkcji V1 w 7 dni, w stałej cenie 15 000 €, z kodem źródłowym dla Ciebie, na stacku, który przejmie każdy wewnętrzny zespół. Najpierw weryfikujesz, potem zatrudniasz — we właściwej kolejności.",
      },
    ],
  },
  tr: {
    slug: 'developper-en-interne-ou-externaliser-v1',
    title: 'V1 sürümünüzü kurum içinde mi geliştirmeli, dışarı mı vermeli?',
    excerpt:
      'İlk sürüm için kurum içi vs dış kaynak karar tablosu: gerçek maliyet, hız, risk, kod sahipliği. Bağlamınıza göre öneri.',
    date: '2025-12-17',
    readingMinutes: 6,
    tags: ['Karar', 'Founder'],
    body: [
      {
        p: "İlk sürüm için dış kaynak neredeyse her zaman doğru seçimdir: daha hızlıdır, maliyet sabittir ve önceden bilinir, üstelik pazarı doğrulamadan işe alma riskini taşımazsınız. Kurum içi geliştirme yalnızca ürününüz teknik olarak işinizin çekirdeğiyse ve bunu yapacak kıdemli geliştiricilere zaten sahipseniz anlamlıdır. İşte etken etken karar tablosu.",
      },
      { h2: 'Maaşın ötesindeki gerçek maliyet' },
      {
        p: "Kıdemli bir full-stack geliştirici, tüm yükleriyle birlikte yılda 60.000 ila 90.000 € maliyet çıkarır; buna işe alım (2 ila 3 ay ve çoğu zaman maaşın %15-20'si kadar masraf), donanım ve uyum süresi eklenir. Üstelik tek kişi tasarımı, back-end'i, front-end'i ve altyapıyı tek başına karşılayamaz. 15.000 € sabit fiyatlı dışarıdan bir V1 ise ilk altı ayda bunun küçük bir kesrine, uzun vadeli taahhüt olmadan mal olur.",
      },
      {
        ul: [
          "Kurum içi: geliştirici başına ayda 5.000 ila 8.000 €, artı yan giderler, uzun vadeli taahhüt.",
          "Freelance: günde 300 ila 700 €, değişken kalite, tek kişiye bağımlılık.",
          "Sabit fiyatlı dış kaynak: kapsam ve bütçe başlamadan kilitli, gizli maliyet yok.",
        ],
      },
      { h2: 'Pazara çıkış hızı' },
      {
        p: "Bir kurum içi ekibi işe alıp ardından uyumlamak, ilk işe yarar kod satırından önce 3 ila 6 ay sürer. Denenmiş bir stack ve yapay zeka destekli geliştirmeyle çalışan tecrübeli bir dış ekip ise bir V1'i 7 günde üretime alır. Her gecikme ayının gelirsiz ve kullanıcı geri bildirimsiz bir ay demek olduğu bir pazarda bu fark belirleyicidir.",
      },
      { h2: 'Risk ve kod sahipliği' },
      {
        p: "Kurum içinin asıl riski kötü kod yazmak değildir: ürünün birilerinin ilgisini çekip çekmediğini bilmeden önce sermayeyi ve ayları bağlamaktır. Yanlış bir işe alım size altı aya mal olur. Buna karşılık, dış kaynağa dair haklı kaygı — ürününüzün kontrolünü kaybetmek — sözleşmeyle çözülür: Next.js, NestJS ve PostgreSQL gibi standart ve belgelenmiş bir stack üzerinde tam kaynak kodunu talep edin, asla içinden çıkamayacağınız tescilli bir çözümü değil.",
      },
      {
        quote:
          "Çok erken kurum içi geliştirmek, pazarın var olup olmadığını öğrenmek için bir ekibe altı ay maaş ödemektir. Dış kaynak ise bunu bir haftada öğrenmektir.",
      },
      { h2: 'Ekibinizin yetkinlik kazanımı' },
      {
        p: "Kurum içi lehine tek gerçek argüman budur: içeride yazılan her satır ekibinizin bilgisini büyütür. Ancak bu, yalnızca pazar doğrulandıktan ve ürün oturduktan sonra bir avantajdır. Bir V1'de hangi özelliklerin hayatta kalacağını henüz kimse bilmez. V1'i dışarı verip, çekiş kanıtlandıktan sonra kademeli olarak içeri almak çoğu zaman iki dünyanın da en iyisidir — yine, kurum içi geliştiricilerin kolayca devralabileceği temiz bir kod geri almanız koşuluyla.",
      },
      { h2: 'Bağlamınıza göre öneri' },
      {
        ul: [
          "Teknik ekibi olmayan, kanıtlanmamış bir fikri doğruluyorsunuz: V1'i sabit fiyatla dışarı verin, sermayeyi çekiş için saklayın.",
          "Zaten kıdemli geliştiricileriniz var ve ürün teknik çekirdeğiniz: kurum içinde geliştirin.",
          "Çekişiniz var ama ekibiniz yok: V1'i dışarı verin, ardından bakım ve geliştirme için işe alın.",
        ],
      },
      {
        p: "Khufu'da bu üretime hazır V1'i 7 günde, 15.000 € sabit fiyatla, kaynak kodu sizin olacak şekilde, herhangi bir kurum içi ekibin devralabileceği bir stack üzerinde teslim ediyoruz. Önce doğrularsınız, sonra işe alırsınız — doğru sırayla.",
      },
    ],
  },
}
