import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'cadrer-perimetre-v1',
    title: 'Comment cadrer le périmètre d’une V1 sans se tromper',
    excerpt:
      'La méthode pour cadrer le périmètre d’une V1 : problème résolu, 3 à 5 parcours essentiels, hors-périmètre explicite. Le doc de cadrage comme contrat.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Méthode', 'V1'],
    body: [
      {
        p: 'Cadrer le périmètre d’une V1, c’est écrire noir sur blanc trois choses avant la moindre ligne de code : le problème résolu, les 3 à 5 parcours utilisateurs essentiels, et ce qui est explicitement hors périmètre. Ce document de cadrage devient le contrat du projet. C’est lui qui rend une livraison en 7 jours possible : sans périmètre serré, aucune équipe ne tient le délai.',
      },
      { h2: 'Le doc de cadrage : les trois piliers' },
      {
        p: 'Un bon cadrage tient sur une à deux pages et répond à trois questions, dans cet ordre. Chaque ligne écrite en amont est une décision qu’on ne repasse pas en réunion trois semaines plus tard.',
      },
      {
        ul: [
          'Le problème résolu : une phrase précise sur la douleur utilisateur et la valeur apportée. Si vous ne pouvez pas la formuler simplement, le périmètre n’est pas prêt.',
          'Les 3 à 5 parcours essentiels : les chemins que l’utilisateur doit pouvoir accomplir de bout en bout au lancement (ex. s’inscrire, créer un projet, inviter un membre, payer).',
          'Le hors-périmètre explicite : la liste de ce qu’on ne fait PAS dans la V1. C’est la partie la plus importante et la plus souvent oubliée.',
        ],
      },
      { h2: 'Pourquoi lister ce qui est hors périmètre' },
      {
        p: 'La plupart des projets déraillent non pas sur ce qui est prévu, mais sur ce qui ne l’a jamais été dit. Écrire noir sur blanc « pas de multi-langue, pas de rôles avancés, pas d’export PDF en V1 » transforme un désaccord potentiel en décision assumée. Le hors-périmètre n’enlève rien au produit : il protège le délai et concentre l’effort là où il crée de la valeur.',
      },
      { h2: 'Éviter la dérive de périmètre' },
      {
        p: 'La dérive de périmètre (scope creep) est la première cause de retard et de dépassement de budget. Elle avance rarement d’un bloc : elle s’infiltre par petites idées « rapides » ajoutées en cours de route. La parade tient en une règle simple.',
      },
      {
        ul: [
          'Toute nouvelle idée passe par le doc de cadrage, jamais directement dans le développement.',
          'Une addition implique un arbitrage : soit elle remplace une fonctionnalité existante, soit elle part en V2.',
          'La V2 n’est pas un cimetière, c’est une liste priorisée qui rassure sans polluer la V1.',
        ],
      },
      {
        quote:
          'Un périmètre qu’on ne peut pas dire non à n’est pas un périmètre : c’est une liste de souhaits qui coûtera le double et arrivera deux fois trop tard.',
      },
      { h2: 'Le cadrage comme contrat' },
      {
        p: 'Chez Khufu, le doc de cadrage est signé avant le jour 1 et sert de référence tout au long de la semaine. Il fixe ce qui sera livré, et donc ce qui justifie le prix fixe de 15 000 € pour une V1 prête pour la production en 7 jours. Le client sait exactement ce qu’il reçoit ; l’équipe sait exactement quoi construire. Ce contrat clair est ce qui permet de livrer vite, sans mauvaise surprise ni facturation à l’heure.',
      },
    ],
  },
  en: {
    slug: 'cadrer-perimetre-v1',
    title: 'How to scope a V1 without getting it wrong',
    excerpt:
      'The method to scope a V1: problem solved, 3 to 5 essential journeys, explicit out-of-scope. The scoping doc as a contract.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Method', 'V1'],
    body: [
      {
        p: 'Scoping a V1 means writing down three things before a single line of code: the problem solved, the 3 to 5 essential user journeys, and what is explicitly out of scope. This scoping doc becomes the project contract. It is what makes a 7-day delivery possible: without a tight scope, no team hits the deadline.',
      },
      { h2: 'The scoping doc: three pillars' },
      {
        p: 'A good scope fits on one or two pages and answers three questions, in this order. Every line written up front is a decision you will not reopen in a meeting three weeks later.',
      },
      {
        ul: [
          'The problem solved: one precise sentence about the user pain and the value delivered. If you cannot state it simply, the scope is not ready.',
          'The 3 to 5 essential journeys: the paths the user must complete end to end at launch (e.g. sign up, create a project, invite a member, pay).',
          'The explicit out-of-scope: the list of what you will NOT build in the V1. This is the most important and most often forgotten part.',
        ],
      },
      { h2: 'Why list what is out of scope' },
      {
        p: 'Most projects derail not on what was planned, but on what was never stated. Writing down "no multi-language, no advanced roles, no PDF export in V1" turns a potential disagreement into an owned decision. Out-of-scope removes nothing from the product: it protects the deadline and focuses effort where it creates value.',
      },
      { h2: 'Avoiding scope creep' },
      {
        p: 'Scope creep is the number one cause of delay and budget overrun. It rarely moves in one big step: it seeps in through small "quick" ideas added along the way. The defense fits in one simple rule.',
      },
      {
        ul: [
          'Every new idea goes through the scoping doc, never straight into development.',
          'An addition implies a trade-off: it either replaces an existing feature or moves to V2.',
          'V2 is not a graveyard, it is a prioritized list that reassures without polluting the V1.',
        ],
      },
      {
        quote:
          'A scope you cannot say no to is not a scope: it is a wish list that will cost double and arrive twice too late.',
      },
      { h2: 'Scoping as a contract' },
      {
        p: 'At Khufu, the scoping doc is signed before day 1 and serves as the reference throughout the week. It fixes what will be delivered, and therefore what justifies the fixed price of €15,000 for a production-ready V1 in 7 days. The client knows exactly what they get; the team knows exactly what to build. This clear contract is what lets us ship fast, with no nasty surprises and no hourly billing.',
      },
    ],
  },
  es: {
    slug: 'cadrer-perimetre-v1',
    title: 'Cómo delimitar el alcance de una V1 sin equivocarte',
    excerpt:
      'El método para delimitar una V1: problema resuelto, 3 a 5 recorridos esenciales, fuera de alcance explícito. El documento de alcance como contrato.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Método', 'V1'],
    body: [
      {
        p: 'Delimitar el alcance de una V1 consiste en dejar por escrito tres cosas antes de la primera línea de código: el problema resuelto, los 3 a 5 recorridos de usuario esenciales y lo que queda explícitamente fuera de alcance. Este documento de alcance se convierte en el contrato del proyecto. Es lo que hace posible una entrega en 7 días: sin un alcance ajustado, ningún equipo cumple el plazo.',
      },
      { h2: 'El documento de alcance: tres pilares' },
      {
        p: 'Un buen alcance cabe en una o dos páginas y responde a tres preguntas, en este orden. Cada línea escrita de antemano es una decisión que no volverás a discutir en una reunión tres semanas después.',
      },
      {
        ul: [
          'El problema resuelto: una frase precisa sobre el dolor del usuario y el valor aportado. Si no puedes formularlo con sencillez, el alcance no está listo.',
          'Los 3 a 5 recorridos esenciales: los caminos que el usuario debe poder completar de principio a fin en el lanzamiento (p. ej. registrarse, crear un proyecto, invitar a un miembro, pagar).',
          'El fuera de alcance explícito: la lista de lo que NO se hace en la V1. Es la parte más importante y la que más se olvida.',
        ],
      },
      { h2: 'Por qué enumerar lo que queda fuera de alcance' },
      {
        p: 'La mayoría de los proyectos descarrilan no por lo previsto, sino por lo que nunca se dijo. Dejar por escrito "sin multi-idioma, sin roles avanzados, sin exportación PDF en la V1" convierte un posible desacuerdo en una decisión asumida. El fuera de alcance no quita nada al producto: protege el plazo y concentra el esfuerzo donde crea valor.',
      },
      { h2: 'Evitar la deriva de alcance' },
      {
        p: 'La deriva de alcance (scope creep) es la primera causa de retraso y de sobrecoste. Rara vez avanza de golpe: se infiltra mediante pequeñas ideas "rápidas" añadidas sobre la marcha. La defensa cabe en una regla sencilla.',
      },
      {
        ul: [
          'Toda idea nueva pasa por el documento de alcance, nunca directamente al desarrollo.',
          'Una adición implica un arbitraje: o sustituye una función existente, o pasa a la V2.',
          'La V2 no es un cementerio, es una lista priorizada que tranquiliza sin contaminar la V1.',
        ],
      },
      {
        quote:
          'Un alcance al que no puedes decir que no no es un alcance: es una lista de deseos que costará el doble y llegará dos veces demasiado tarde.',
      },
      { h2: 'El alcance como contrato' },
      {
        p: 'En Khufu, el documento de alcance se firma antes del día 1 y sirve de referencia durante toda la semana. Fija lo que se entregará y, por tanto, lo que justifica el precio fijo de 15.000 € por una V1 lista para producción en 7 días. El cliente sabe exactamente lo que recibe; el equipo sabe exactamente qué construir. Este contrato claro es lo que permite entregar rápido, sin sorpresas desagradables ni facturación por horas.',
      },
    ],
  },
  de: {
    slug: 'cadrer-perimetre-v1',
    title: 'Wie man den Umfang einer V1 richtig abgrenzt',
    excerpt:
      'Die Methode zur Abgrenzung einer V1: gelöstes Problem, 3 bis 5 essenzielle User Journeys, expliziter Out-of-Scope. Das Scoping-Dokument als Vertrag.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Methode', 'V1'],
    body: [
      {
        p: 'Den Umfang einer V1 abzugrenzen bedeutet, drei Dinge vor der ersten Codezeile festzuhalten: das gelöste Problem, die 3 bis 5 essenziellen User Journeys und was explizit außerhalb des Umfangs liegt. Dieses Scoping-Dokument wird zum Projektvertrag. Es macht eine Lieferung in 7 Tagen möglich: ohne engen Umfang hält kein Team den Termin.',
      },
      { h2: 'Das Scoping-Dokument: drei Säulen' },
      {
        p: 'Ein guter Umfang passt auf ein bis zwei Seiten und beantwortet drei Fragen, in dieser Reihenfolge. Jede vorab geschriebene Zeile ist eine Entscheidung, die man drei Wochen später nicht in einem Meeting wieder aufmacht.',
      },
      {
        ul: [
          'Das gelöste Problem: ein präziser Satz über den Schmerz des Nutzers und den gelieferten Wert. Wenn Sie ihn nicht einfach formulieren können, ist der Umfang nicht bereit.',
          'Die 3 bis 5 essenziellen Journeys: die Pfade, die der Nutzer beim Start durchgängig abschließen können muss (z. B. registrieren, ein Projekt anlegen, ein Mitglied einladen, bezahlen).',
          'Der explizite Out-of-Scope: die Liste dessen, was in der V1 NICHT gebaut wird. Das ist der wichtigste und am häufigsten vergessene Teil.',
        ],
      },
      { h2: 'Warum auflisten, was außerhalb des Umfangs liegt' },
      {
        p: 'Die meisten Projekte entgleisen nicht an dem, was geplant war, sondern an dem, was nie gesagt wurde. "Keine Mehrsprachigkeit, keine erweiterten Rollen, kein PDF-Export in der V1" schriftlich festzuhalten verwandelt eine mögliche Meinungsverschiedenheit in eine bewusste Entscheidung. Der Out-of-Scope nimmt dem Produkt nichts weg: er schützt den Termin und bündelt den Aufwand dort, wo er Wert schafft.',
      },
      { h2: 'Scope Creep vermeiden' },
      {
        p: 'Scope Creep ist die häufigste Ursache für Verzögerungen und Budgetüberschreitungen. Er kommt selten in einem großen Schritt: er sickert über kleine "schnelle" Ideen ein, die unterwegs hinzugefügt werden. Die Abwehr passt in eine einfache Regel.',
      },
      {
        ul: [
          'Jede neue Idee läuft über das Scoping-Dokument, nie direkt in die Entwicklung.',
          'Eine Ergänzung bedeutet einen Kompromiss: sie ersetzt entweder eine bestehende Funktion oder wandert in die V2.',
          'Die V2 ist kein Friedhof, sondern eine priorisierte Liste, die beruhigt, ohne die V1 zu verunreinigen.',
        ],
      },
      {
        quote:
          'Ein Umfang, zu dem man nicht Nein sagen kann, ist kein Umfang: es ist eine Wunschliste, die doppelt kostet und doppelt zu spät kommt.',
      },
      { h2: 'Scoping als Vertrag' },
      {
        p: 'Bei Khufu wird das Scoping-Dokument vor Tag 1 unterschrieben und dient die ganze Woche über als Referenz. Es legt fest, was geliefert wird, und damit auch, was den Festpreis von 15.000 € für eine produktionsreife V1 in 7 Tagen rechtfertigt. Der Kunde weiß genau, was er bekommt; das Team weiß genau, was zu bauen ist. Dieser klare Vertrag ist es, der es erlaubt, schnell zu liefern, ohne böse Überraschungen und ohne Abrechnung nach Stunden.',
      },
    ],
  },
  it: {
    slug: 'cadrer-perimetre-v1',
    title: 'Come definire il perimetro di una V1 senza sbagliare',
    excerpt:
      'Il metodo per definire il perimetro di una V1: problema risolto, 3-5 percorsi essenziali, fuori perimetro esplicito. Il documento di scoping come contratto.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Metodo', 'V1'],
    body: [
      {
        p: 'Definire il perimetro di una V1 significa mettere per iscritto tre cose prima della prima riga di codice: il problema risolto, i 3-5 percorsi utente essenziali e ciò che è esplicitamente fuori perimetro. Questo documento di scoping diventa il contratto del progetto. È ciò che rende possibile una consegna in 7 giorni: senza un perimetro stretto, nessun team rispetta la scadenza.',
      },
      { h2: 'Il documento di scoping: tre pilastri' },
      {
        p: 'Un buon perimetro sta in una o due pagine e risponde a tre domande, in questo ordine. Ogni riga scritta in anticipo è una decisione che non si riapre in una riunione tre settimane dopo.',
      },
      {
        ul: [
          'Il problema risolto: una frase precisa sul dolore dell’utente e sul valore fornito. Se non riesci a formularla in modo semplice, il perimetro non è pronto.',
          'I 3-5 percorsi essenziali: i cammini che l’utente deve poter completare dall’inizio alla fine al lancio (es. registrarsi, creare un progetto, invitare un membro, pagare).',
          'Il fuori perimetro esplicito: la lista di ciò che NON si fa nella V1. È la parte più importante e più spesso dimenticata.',
        ],
      },
      { h2: 'Perché elencare ciò che è fuori perimetro' },
      {
        p: 'La maggior parte dei progetti deraglia non su ciò che era previsto, ma su ciò che non è mai stato detto. Mettere per iscritto "niente multilingua, niente ruoli avanzati, niente export PDF nella V1" trasforma un potenziale disaccordo in una decisione assunta. Il fuori perimetro non toglie nulla al prodotto: protegge la scadenza e concentra lo sforzo dove crea valore.',
      },
      { h2: 'Evitare la deriva del perimetro' },
      {
        p: 'La deriva del perimetro (scope creep) è la prima causa di ritardo e di sforamento del budget. Raramente avanza in un solo blocco: si infiltra tramite piccole idee "veloci" aggiunte strada facendo. La difesa sta in una regola semplice.',
      },
      {
        ul: [
          'Ogni nuova idea passa dal documento di scoping, mai direttamente nello sviluppo.',
          'Un’aggiunta implica un compromesso: o sostituisce una funzionalità esistente, o va nella V2.',
          'La V2 non è un cimitero, è una lista prioritizzata che rassicura senza inquinare la V1.',
        ],
      },
      {
        quote:
          'Un perimetro a cui non puoi dire di no non è un perimetro: è una lista di desideri che costerà il doppio e arriverà due volte troppo tardi.',
      },
      { h2: 'Lo scoping come contratto' },
      {
        p: 'In Khufu, il documento di scoping viene firmato prima del giorno 1 e fa da riferimento per tutta la settimana. Fissa ciò che sarà consegnato e quindi ciò che giustifica il prezzo fisso di 15.000 € per una V1 pronta per la produzione in 7 giorni. Il cliente sa esattamente cosa riceve; il team sa esattamente cosa costruire. Questo contratto chiaro è ciò che permette di consegnare in fretta, senza brutte sorprese e senza fatturazione a ore.',
      },
    ],
  },
  pt: {
    slug: 'cadrer-perimetre-v1',
    title: 'Como delimitar o escopo de uma V1 sem errar',
    excerpt:
      'O método para delimitar uma V1: problema resolvido, 3 a 5 jornadas essenciais, fora de escopo explícito. O documento de escopo como contrato.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Método', 'V1'],
    body: [
      {
        p: 'Delimitar o escopo de uma V1 significa colocar por escrito três coisas antes da primeira linha de código: o problema resolvido, as 3 a 5 jornadas de usuário essenciais e o que está explicitamente fora do escopo. Esse documento de escopo torna-se o contrato do projeto. É o que torna possível uma entrega em 7 dias: sem um escopo enxuto, nenhuma equipe cumpre o prazo.',
      },
      { h2: 'O documento de escopo: três pilares' },
      {
        p: 'Um bom escopo cabe em uma ou duas páginas e responde a três perguntas, nesta ordem. Cada linha escrita antecipadamente é uma decisão que você não vai reabrir numa reunião três semanas depois.',
      },
      {
        ul: [
          'O problema resolvido: uma frase precisa sobre a dor do usuário e o valor entregue. Se você não consegue formulá-la de forma simples, o escopo não está pronto.',
          'As 3 a 5 jornadas essenciais: os caminhos que o usuário deve poder concluir de ponta a ponta no lançamento (ex. cadastrar-se, criar um projeto, convidar um membro, pagar).',
          'O fora de escopo explícito: a lista do que NÃO se faz na V1. É a parte mais importante e a mais frequentemente esquecida.',
        ],
      },
      { h2: 'Por que listar o que está fora do escopo' },
      {
        p: 'A maioria dos projetos descarrila não pelo que estava planejado, mas pelo que nunca foi dito. Colocar por escrito "sem multi-idioma, sem papéis avançados, sem exportação PDF na V1" transforma uma possível discordância numa decisão assumida. O fora de escopo não tira nada do produto: protege o prazo e concentra o esforço onde ele cria valor.',
      },
      { h2: 'Evitar a deriva de escopo' },
      {
        p: 'A deriva de escopo (scope creep) é a principal causa de atraso e de estouro de orçamento. Raramente avança de uma vez só: infiltra-se por pequenas ideias "rápidas" adicionadas ao longo do caminho. A defesa cabe numa regra simples.',
      },
      {
        ul: [
          'Toda ideia nova passa pelo documento de escopo, nunca direto para o desenvolvimento.',
          'Uma adição implica um trade-off: ou substitui uma funcionalidade existente, ou vai para a V2.',
          'A V2 não é um cemitério, é uma lista priorizada que tranquiliza sem poluir a V1.',
        ],
      },
      {
        quote:
          'Um escopo ao qual você não consegue dizer não não é um escopo: é uma lista de desejos que vai custar o dobro e chegar duas vezes tarde demais.',
      },
      { h2: 'O escopo como contrato' },
      {
        p: 'Na Khufu, o documento de escopo é assinado antes do dia 1 e serve de referência durante toda a semana. Ele fixa o que será entregue e, portanto, o que justifica o preço fixo de € 15.000 por uma V1 pronta para produção em 7 dias. O cliente sabe exatamente o que recebe; a equipe sabe exatamente o que construir. Esse contrato claro é o que permite entregar rápido, sem surpresas desagradáveis e sem faturamento por hora.',
      },
    ],
  },
  nl: {
    slug: 'cadrer-perimetre-v1',
    title: 'Hoe je de scope van een V1 zonder misstappen afbakent',
    excerpt:
      'De methode om een V1 af te bakenen: opgelost probleem, 3 tot 5 essentiële flows, expliciet buiten scope. Het scopingdocument als contract.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Methode', 'V1'],
    body: [
      {
        p: 'De scope van een V1 afbakenen betekent dat je drie dingen vastlegt vóór de eerste regel code: het opgeloste probleem, de 3 tot 5 essentiële gebruikersflows en wat expliciet buiten scope valt. Dit scopingdocument wordt het contract van het project. Het maakt een oplevering in 7 dagen mogelijk: zonder strakke scope haalt geen enkel team de deadline.',
      },
      { h2: 'Het scopingdocument: drie pijlers' },
      {
        p: 'Een goede scope past op één of twee pagina’s en beantwoordt drie vragen, in deze volgorde. Elke vooraf geschreven regel is een beslissing die je drie weken later niet opnieuw in een vergadering openbreekt.',
      },
      {
        ul: [
          'Het opgeloste probleem: één precieze zin over de pijn van de gebruiker en de geleverde waarde. Kun je die niet eenvoudig formuleren, dan is de scope niet klaar.',
          'De 3 tot 5 essentiële flows: de paden die de gebruiker bij de lancering van begin tot eind moet kunnen doorlopen (bijv. registreren, een project aanmaken, een lid uitnodigen, betalen).',
          'De expliciete buiten-scope: de lijst van wat je in de V1 NIET bouwt. Dit is het belangrijkste en meest vergeten deel.',
        ],
      },
      { h2: 'Waarom vastleggen wat buiten scope valt' },
      {
        p: 'De meeste projecten ontsporen niet op wat gepland was, maar op wat nooit is gezegd. "Geen meertaligheid, geen geavanceerde rollen, geen PDF-export in de V1" op papier zetten verandert een mogelijke onenigheid in een bewuste beslissing. Buiten scope haalt niets weg uit het product: het beschermt de deadline en concentreert de inspanning waar die waarde creëert.',
      },
      { h2: 'Scope creep vermijden' },
      {
        p: 'Scope creep is de belangrijkste oorzaak van vertraging en budgetoverschrijding. Het beweegt zelden in één grote stap: het sijpelt binnen via kleine "snelle" ideeën die onderweg worden toegevoegd. De verdediging past in één eenvoudige regel.',
      },
      {
        ul: [
          'Elk nieuw idee gaat via het scopingdocument, nooit rechtstreeks de ontwikkeling in.',
          'Een toevoeging betekent een afweging: ze vervangt een bestaande functie of gaat naar de V2.',
          'De V2 is geen kerkhof, maar een geprioriteerde lijst die geruststelt zonder de V1 te vervuilen.',
        ],
      },
      {
        quote:
          'Een scope waartegen je geen nee kunt zeggen is geen scope: het is een verlanglijst die het dubbele kost en twee keer te laat komt.',
      },
      { h2: 'Scoping als contract' },
      {
        p: 'Bij Khufu wordt het scopingdocument vóór dag 1 ondertekend en dient het de hele week als referentie. Het legt vast wat er wordt opgeleverd, en dus wat de vaste prijs van € 15.000 voor een productieklare V1 in 7 dagen rechtvaardigt. De klant weet precies wat hij krijgt; het team weet precies wat het moet bouwen. Dit heldere contract maakt het mogelijk om snel te leveren, zonder nare verrassingen en zonder facturatie per uur.',
      },
    ],
  },
  ar: {
    slug: 'cadrer-perimetre-v1',
    title: 'كيف تحدّد نطاق V1 دون أن تخطئ',
    excerpt:
      'منهجية تحديد نطاق V1: المشكلة المحلولة، من 3 إلى 5 مسارات أساسية، وما هو خارج النطاق صراحةً. وثيقة النطاق كعقد.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['منهجية', 'V1'],
    body: [
      {
        p: 'تحديد نطاق V1 يعني تدوين ثلاثة أمور كتابةً قبل أول سطر برمجي: المشكلة المحلولة، ومن 3 إلى 5 مسارات مستخدم أساسية، وما هو خارج النطاق صراحةً. تصبح وثيقة النطاق هذه عقد المشروع. وهي ما يجعل التسليم في 7 أيام ممكناً: فبدون نطاق محكم لا يلتزم أي فريق بالموعد.',
      },
      { h2: 'وثيقة النطاق: ثلاثة أعمدة' },
      {
        p: 'النطاق الجيد يتّسع في صفحة أو صفحتين ويجيب عن ثلاثة أسئلة بهذا الترتيب. كل سطر يُكتب مسبقاً هو قرار لن تعيد فتحه في اجتماع بعد ثلاثة أسابيع.',
      },
      {
        ul: [
          'المشكلة المحلولة: جملة دقيقة عن معاناة المستخدم والقيمة المقدَّمة. إن لم تستطع صياغتها ببساطة، فالنطاق ليس جاهزاً.',
          'المسارات الأساسية من 3 إلى 5: الطرق التي يجب أن يتمكن المستخدم من إكمالها من البداية إلى النهاية عند الإطلاق (مثل التسجيل، إنشاء مشروع، دعوة عضو، الدفع).',
          'خارج النطاق صراحةً: قائمة بما لن يُبنى في V1. هذا هو الجزء الأهم والأكثر نسياناً.',
        ],
      },
      { h2: 'لماذا تُدرِج ما هو خارج النطاق' },
      {
        p: 'معظم المشاريع تنحرف لا بسبب ما خُطّط له، بل بسبب ما لم يُقَل قط. تدوين "لا تعدّد لغات، لا أدوار متقدمة، لا تصدير PDF في V1" يحوّل خلافاً محتملاً إلى قرار متبنّى. خارج النطاق لا يحذف شيئاً من المنتج: بل يحمي الموعد ويركّز الجهد حيث يخلق القيمة.',
      },
      { h2: 'تجنّب زحف النطاق' },
      {
        p: 'زحف النطاق (scope creep) هو السبب الأول للتأخير وتجاوز الميزانية. نادراً ما يتقدم دفعة واحدة: بل يتسلل عبر أفكار "سريعة" صغيرة تُضاف على طول الطريق. الدفاع يتلخص في قاعدة بسيطة.',
      },
      {
        ul: [
          'كل فكرة جديدة تمرّ عبر وثيقة النطاق، لا تدخل التطوير مباشرةً أبداً.',
          'أي إضافة تعني مقايضة: إما أن تحلّ محل ميزة قائمة، أو تنتقل إلى V2.',
          'V2 ليست مقبرة، بل قائمة مرتَّبة بالأولوية تُطمئن دون أن تلوّث V1.',
        ],
      },
      {
        quote:
          'النطاق الذي لا يمكنك أن تقول له لا ليس نطاقاً: إنه قائمة أمنيات ستكلّف الضعف وتصل متأخرة مرتين.',
      },
      { h2: 'النطاق كعقد' },
      {
        p: 'في Khufu، تُوقَّع وثيقة النطاق قبل اليوم الأول وتظل مرجعاً طوال الأسبوع. تحدّد ما سيُسلَّم، وبالتالي ما يبرّر السعر الثابت البالغ 15,000 يورو مقابل V1 جاهزة للإنتاج في 7 أيام. يعرف العميل بالضبط ما يحصل عليه؛ ويعرف الفريق بالضبط ما يبنيه. هذا العقد الواضح هو ما يتيح التسليم بسرعة، دون مفاجآت سيئة ودون فوترة بالساعة.',
      },
    ],
  },
  pl: {
    slug: 'cadrer-perimetre-v1',
    title: 'Jak wyznaczyć zakres V1 i się nie pomylić',
    excerpt:
      'Metoda wyznaczania zakresu V1: rozwiązany problem, 3 do 5 kluczowych ścieżek, jawnie poza zakresem. Dokument zakresu jako kontrakt.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Metoda', 'V1'],
    body: [
      {
        p: 'Wyznaczenie zakresu V1 oznacza spisanie trzech rzeczy przed pierwszą linijką kodu: rozwiązanego problemu, 3 do 5 kluczowych ścieżek użytkownika oraz tego, co jest jawnie poza zakresem. Ten dokument zakresu staje się kontraktem projektu. To on umożliwia dostawę w 7 dni: bez ciasnego zakresu żaden zespół nie dotrzyma terminu.',
      },
      { h2: 'Dokument zakresu: trzy filary' },
      {
        p: 'Dobry zakres mieści się na jednej lub dwóch stronach i odpowiada na trzy pytania, w tej kolejności. Każda linijka spisana z góry to decyzja, do której nie wracasz na spotkaniu trzy tygodnie później.',
      },
      {
        ul: [
          'Rozwiązany problem: jedno precyzyjne zdanie o bólu użytkownika i dostarczanej wartości. Jeśli nie potrafisz go sformułować prosto, zakres nie jest gotowy.',
          'Od 3 do 5 kluczowych ścieżek: drogi, które użytkownik musi móc przejść od początku do końca przy starcie (np. rejestracja, utworzenie projektu, zaproszenie członka, płatność).',
          'Jawnie poza zakresem: lista tego, czego NIE robisz w V1. To najważniejsza i najczęściej pomijana część.',
        ],
      },
      { h2: 'Dlaczego wypisywać, co jest poza zakresem' },
      {
        p: 'Większość projektów wykoleja się nie na tym, co zaplanowano, lecz na tym, czego nigdy nie powiedziano. Spisanie "brak wielojęzyczności, brak zaawansowanych ról, brak eksportu PDF w V1" zamienia potencjalny spór w świadomą decyzję. Poza zakresem niczego nie odbiera produktowi: chroni termin i skupia wysiłek tam, gdzie tworzy wartość.',
      },
      { h2: 'Unikanie pełzania zakresu' },
      {
        p: 'Pełzanie zakresu (scope creep) to główna przyczyna opóźnień i przekroczeń budżetu. Rzadko postępuje jednym dużym krokiem: wsącza się przez małe "szybkie" pomysły dodawane po drodze. Obrona mieści się w jednej prostej zasadzie.',
      },
      {
        ul: [
          'Każdy nowy pomysł przechodzi przez dokument zakresu, nigdy wprost do developmentu.',
          'Dodanie oznacza kompromis: albo zastępuje istniejącą funkcję, albo trafia do V2.',
          'V2 to nie cmentarz, lecz spriorytetyzowana lista, która uspokaja, nie zaśmiecając V1.',
        ],
      },
      {
        quote:
          'Zakres, któremu nie potrafisz powiedzieć nie, nie jest zakresem: to lista życzeń, która będzie kosztować podwójnie i przyjdzie dwa razy za późno.',
      },
      { h2: 'Zakres jako kontrakt' },
      {
        p: 'W Khufu dokument zakresu jest podpisywany przed dniem 1 i służy jako punkt odniesienia przez cały tydzień. Ustala, co zostanie dostarczone, a więc i to, co uzasadnia stałą cenę 15 000 € za gotową do produkcji V1 w 7 dni. Klient wie dokładnie, co dostaje; zespół wie dokładnie, co zbudować. Ten jasny kontrakt jest tym, co pozwala dostarczać szybko, bez przykrych niespodzianek i bez rozliczania godzinowego.',
      },
    ],
  },
  tr: {
    slug: 'cadrer-perimetre-v1',
    title: 'Bir V1"in kapsamı nasıl hatasız belirlenir',
    excerpt:
      'Bir V1"in kapsamını belirleme yöntemi: çözülen sorun, 3 ila 5 temel akış, açıkça kapsam dışı. Sözleşme niteliğindeki kapsam belgesi.',
    date: '2026-05-20',
    readingMinutes: 6,
    tags: ['Yöntem', 'V1'],
    body: [
      {
        p: 'Bir V1"in kapsamını belirlemek, ilk kod satırından önce üç şeyi yazıya dökmek demektir: çözülen sorun, 3 ila 5 temel kullanıcı akışı ve açıkça kapsam dışında olanlar. Bu kapsam belgesi projenin sözleşmesi hâline gelir. 7 günde teslimi mümkün kılan şey odur: sıkı bir kapsam olmadan hiçbir ekip süreye uymaz.',
      },
      { h2: 'Kapsam belgesi: üç sütun' },
      {
        p: 'İyi bir kapsam bir ya da iki sayfaya sığar ve üç soruyu bu sırayla yanıtlar. Önceden yazılan her satır, üç hafta sonra bir toplantıda yeniden açmayacağınız bir karardır.',
      },
      {
        ul: [
          'Çözülen sorun: kullanıcının acısı ve sunulan değer hakkında net bir cümle. Bunu basitçe ifade edemiyorsanız, kapsam hazır değildir.',
          '3 ila 5 temel akış: kullanıcının lansmanda baştan sona tamamlayabilmesi gereken yollar (ör. kaydolma, proje oluşturma, üye davet etme, ödeme).',
          'Açıkça kapsam dışı: V1"de YAPILMAYACAK olanların listesi. Bu en önemli ve en sık unutulan kısımdır.',
        ],
      },
      { h2: 'Kapsam dışında olanları neden listelemeli' },
      {
        p: 'Çoğu proje planlanan şey yüzünden değil, hiç söylenmeyen şey yüzünden raydan çıkar. "V1"de çok dillilik yok, gelişmiş roller yok, PDF dışa aktarımı yok" ifadesini yazıya dökmek olası bir anlaşmazlığı sahiplenilmiş bir karara dönüştürür. Kapsam dışı üründen hiçbir şey eksiltmez: süreyi korur ve çabayı değer yarattığı yere odaklar.',
      },
      { h2: 'Kapsam kaymasını önlemek' },
      {
        p: 'Kapsam kayması (scope creep) gecikmelerin ve bütçe aşımlarının bir numaralı nedenidir. Nadiren tek bir büyük adımla ilerler: yol boyunca eklenen küçük "hızlı" fikirlerle sızar. Savunma tek bir basit kurala sığar.',
      },
      {
        ul: [
          'Her yeni fikir kapsam belgesinden geçer, asla doğrudan geliştirmeye girmez.',
          'Bir ekleme bir ödünleşme gerektirir: ya mevcut bir özelliği değiştirir ya da V2"ye gider.',
          'V2 bir mezarlık değildir; V1"i kirletmeden içini rahatlatan önceliklendirilmiş bir listedir.',
        ],
      },
      {
        quote:
          'Hayır diyemediğiniz bir kapsam kapsam değildir: iki katına mal olacak ve iki kat geç gelecek bir istek listesidir.',
      },
      { h2: 'Sözleşme olarak kapsam' },
      {
        p: 'Khufu’da kapsam belgesi 1. günden önce imzalanır ve hafta boyunca referans olarak kullanılır. Neyin teslim edileceğini, dolayısıyla 7 günde üretime hazır bir V1 için 15.000 € sabit fiyatı neyin gerekçelendirdiğini belirler. Müşteri tam olarak ne aldığını bilir; ekip tam olarak ne inşa edeceğini bilir. Bu net sözleşme, kötü sürprizler olmadan ve saatlik faturalama olmadan hızlı teslim etmeyi mümkün kılan şeydir.',
      },
    ],
  },
}
