import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'Les 5 fonctionnalités à NE PAS mettre dans votre V1',
    excerpt:
      'Cinq fonctionnalités qu’on croit indispensables mais qui plombent une V1 — rôles complexes, i18n, analytics maison, notifications, personnalisation — et pourquoi les reporter.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Produit'],
    body: [
      {
        p: 'La plupart des V1 échouent non par manque de fonctionnalités, mais par excès. Cinq briques semblent indispensables et pourtant plombent presque toujours une première version : les rôles et permissions complexes, l’internationalisation prématurée, le dashboard analytics maison, les notifications multi-canal et la personnalisation poussée. Les reporter, ce n’est pas bâcler — c’est livrer plus vite et apprendre plus tôt. Voici pourquoi.',
      },
      { h2: '1. Les rôles et permissions complexes' },
      {
        p: 'Un système de rôles fin (admin, manager, éditeur, lecteur, permissions par ressource) représente des semaines de travail et une source de bugs sans fin. En V1, vous avez rarement plus de deux types d’utilisateurs. Commencez par un simple booléen admin / utilisateur, et ajoutez la granularité quand un vrai client la réclame — pas avant.',
      },
      {
        ul: [
          'Deux rôles suffisent presque toujours en V1 : celui qui administre, celui qui utilise.',
          'Un modèle de permissions fin est difficile à défaire une fois en place.',
          'La sécurité critique (qui accède à quoi) se traite simplement, pas avec dix rôles.',
        ],
      },
      { h2: '2. L’internationalisation prématurée' },
      {
        p: 'Traduire une interface qui va changer dix fois dans le mois est un gâchis : chaque écran retouché, ce sont autant de chaînes à re-traduire. Tant que vous n’avez pas validé le produit sur un seul marché, une seule langue suffit.',
      },
      {
        ul: [
          'Concevez propre (textes externalisés) sans traduire réellement.',
          'Ajoutez les langues une fois le product-market fit trouvé, marché par marché.',
          'Un i18n prématuré fige des libellés qui vont encore bouger.',
        ],
      },
      { h2: '3. Le dashboard analytics maison' },
      {
        p: 'Construire ses propres graphiques, agrégations et exports prend facilement une à deux semaines — pour réinventer ce que des outils font mieux. En V1, un outil analytics prêt à l’emploi (PostHog, Plausible…) branché en une heure vous donne 90 % de l’information utile, sans une ligne de code à maintenir.',
      },
      { h2: '4. Les notifications multi-canal' },
      {
        p: 'Email + push + SMS + in-app, avec préférences par canal et par type d’événement : c’est un produit à part entière. En V1, un seul canal transactionnel — l’email — couvre l’essentiel. Le reste attend d’avoir des utilisateurs qui le demandent vraiment.',
      },
      { h2: '5. La personnalisation poussée' },
      {
        p: 'Thèmes, tableaux de bord réarrangeables, préférences fines : séduisant sur le papier, mais personne ne personnalise un produit qu’il n’utilise pas encore. Offrez un défaut excellent ; la personnalisation viendra quand vous saurez ce que les gens veulent réellement ajuster.',
      },
      {
        quote:
          'Une V1 ne gagne pas en ajoutant des fonctionnalités, mais en supprimant tout ce qui n’est pas indispensable pour apprendre.',
      },
      { h2: 'Reporter n’est pas renoncer' },
      {
        p: 'Chacune de ces fonctionnalités a sa place — plus tard, quand des utilisateurs réels la justifient. Le rôle d’une V1 est de valider le problème et le parcours cœur, pas de tout couvrir. C’est cette discipline de périmètre qui permet de livrer une V1 prête pour la production en 7 jours, à prix fixe de 15 000 €, sur une base que vous ferez évoluer sans dette.',
      },
    ],
  },
  en: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'The 5 features you should NOT put in your V1',
    excerpt:
      'Five features you think are essential but that sink a V1 — complex roles, i18n, homemade analytics, notifications, personalization — and why to postpone them.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Product'],
    body: [
      {
        p: 'Most V1s fail not from a lack of features, but from too many. Five building blocks look essential yet almost always sink a first version: complex roles and permissions, premature internationalization, a homemade analytics dashboard, multi-channel notifications, and heavy personalization. Postponing them is not cutting corners — it is shipping faster and learning sooner. Here is why.',
      },
      { h2: '1. Complex roles and permissions' },
      {
        p: 'A fine-grained role system (admin, manager, editor, viewer, per-resource permissions) means weeks of work and an endless source of bugs. In a V1 you rarely have more than two types of users. Start with a simple admin / user boolean, and add granularity when a real customer asks for it — not before.',
      },
      {
        ul: [
          'Two roles are almost always enough in a V1: the one who administers, the one who uses.',
          'A fine-grained permission model is hard to undo once it is in place.',
          'Critical security (who accesses what) is handled simply, not with ten roles.',
        ],
      },
      { h2: '2. Premature internationalization' },
      {
        p: 'Translating an interface that will change ten times this month is a waste: every reworked screen means that many strings to re-translate. Until you have validated the product on a single market, one language is enough.',
      },
      {
        ul: [
          'Build it clean (externalized strings) without actually translating.',
          'Add languages once you have product-market fit, market by market.',
          'Premature i18n freezes labels that are still going to move.',
        ],
      },
      { h2: '3. The homemade analytics dashboard' },
      {
        p: 'Building your own charts, aggregations and exports easily takes one to two weeks — to reinvent what dedicated tools do better. In a V1, an off-the-shelf analytics tool (PostHog, Plausible…) plugged in within an hour gives you 90% of the useful information, with no code to maintain.',
      },
      { h2: '4. Multi-channel notifications' },
      {
        p: 'Email + push + SMS + in-app, with per-channel and per-event preferences: that is a product in its own right. In a V1, a single transactional channel — email — covers the essentials. The rest waits until you have users who genuinely ask for it.',
      },
      { h2: '5. Heavy personalization' },
      {
        p: 'Themes, rearrangeable dashboards, fine-grained preferences: appealing on paper, but nobody personalizes a product they are not using yet. Offer an excellent default; personalization will come once you know what people actually want to tune.',
      },
      {
        quote:
          'A V1 does not win by adding features, but by removing everything that is not essential to learning.',
      },
      { h2: 'Postponing is not giving up' },
      {
        p: 'Each of these features has its place — later, when real users justify it. The job of a V1 is to validate the problem and the core journey, not to cover everything. It is that scope discipline that lets us ship a production-ready V1 in 7 days, at a fixed price of €15,000, on a foundation you can grow without debt.',
      },
    ],
  },
  es: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'Las 5 funcionalidades que NO debes poner en tu V1',
    excerpt:
      'Cinco funcionalidades que crees imprescindibles pero que hunden una V1 — roles complejos, i18n, analytics casero, notificaciones, personalización — y por qué aplazarlas.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Producto'],
    body: [
      {
        p: 'La mayoría de las V1 fracasan no por falta de funcionalidades, sino por exceso. Cinco piezas parecen imprescindibles y sin embargo casi siempre hunden una primera versión: los roles y permisos complejos, la internacionalización prematura, el dashboard de analytics casero, las notificaciones multicanal y la personalización avanzada. Aplazarlas no es hacer chapuzas — es entregar más rápido y aprender antes. Aquí está el porqué.',
      },
      { h2: '1. Los roles y permisos complejos' },
      {
        p: 'Un sistema de roles fino (admin, manager, editor, lector, permisos por recurso) supone semanas de trabajo y una fuente inagotable de bugs. En una V1 rara vez tienes más de dos tipos de usuarios. Empieza con un simple booleano admin / usuario y añade granularidad cuando un cliente real la pida — no antes.',
      },
      {
        ul: [
          'Dos roles casi siempre bastan en una V1: el que administra y el que usa.',
          'Un modelo de permisos fino es difícil de deshacer una vez implantado.',
          'La seguridad crítica (quién accede a qué) se resuelve de forma simple, no con diez roles.',
        ],
      },
      { h2: '2. La internacionalización prematura' },
      {
        p: 'Traducir una interfaz que va a cambiar diez veces en el mes es un desperdicio: cada pantalla retocada son otras tantas cadenas que re-traducir. Mientras no hayas validado el producto en un solo mercado, un solo idioma basta.',
      },
      {
        ul: [
          'Diseña limpio (textos externalizados) sin traducir de verdad.',
          'Añade idiomas una vez encontrado el product-market fit, mercado a mercado.',
          'Un i18n prematuro congela etiquetas que todavía van a moverse.',
        ],
      },
      { h2: '3. El dashboard de analytics casero' },
      {
        p: 'Construir tus propios gráficos, agregaciones y exportaciones lleva fácilmente una o dos semanas — para reinventar lo que herramientas dedicadas hacen mejor. En una V1, una herramienta de analytics lista para usar (PostHog, Plausible…) conectada en una hora te da el 90 % de la información útil, sin una línea de código que mantener.',
      },
      { h2: '4. Las notificaciones multicanal' },
      {
        p: 'Email + push + SMS + in-app, con preferencias por canal y por tipo de evento: eso es un producto en sí mismo. En una V1, un único canal transaccional — el email — cubre lo esencial. El resto espera a que haya usuarios que lo pidan de verdad.',
      },
      { h2: '5. La personalización avanzada' },
      {
        p: 'Temas, dashboards reordenables, preferencias finas: atractivo sobre el papel, pero nadie personaliza un producto que aún no usa. Ofrece un valor por defecto excelente; la personalización llegará cuando sepas qué quiere ajustar la gente de verdad.',
      },
      {
        quote:
          'Una V1 no gana añadiendo funcionalidades, sino eliminando todo lo que no es imprescindible para aprender.',
      },
      { h2: 'Aplazar no es renunciar' },
      {
        p: 'Cada una de estas funcionalidades tiene su lugar — más tarde, cuando usuarios reales la justifican. El papel de una V1 es validar el problema y el recorrido central, no cubrirlo todo. Es esa disciplina de alcance la que permite entregar una V1 lista para producción en 7 días, a precio fijo de 15 000 €, sobre una base que harás crecer sin deuda.',
      },
    ],
  },
  de: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'Die 5 Funktionen, die NICHT in Ihre V1 gehören',
    excerpt:
      'Fünf Funktionen, die man für unverzichtbar hält, die aber eine V1 ausbremsen — komplexe Rollen, i18n, eigenes Analytics, Notifications, Personalisierung — und warum man sie verschieben sollte.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Produkt'],
    body: [
      {
        p: 'Die meisten V1s scheitern nicht an zu wenigen Funktionen, sondern an zu vielen. Fünf Bausteine wirken unverzichtbar und bremsen doch fast immer eine erste Version aus: komplexe Rollen und Berechtigungen, verfrühte Internationalisierung, ein selbstgebautes Analytics-Dashboard, Multi-Channel-Benachrichtigungen und umfangreiche Personalisierung. Sie zu verschieben ist kein Pfusch — es bedeutet schneller liefern und früher lernen. Hier ist der Grund.',
      },
      { h2: '1. Komplexe Rollen und Berechtigungen' },
      {
        p: 'Ein feingranulares Rollensystem (Admin, Manager, Editor, Leser, Berechtigungen pro Ressource) bedeutet Wochen an Arbeit und eine endlose Fehlerquelle. In einer V1 haben Sie selten mehr als zwei Nutzertypen. Beginnen Sie mit einem einfachen Admin / Nutzer-Boolean und fügen Sie Granularität hinzu, wenn ein echter Kunde danach fragt — nicht vorher.',
      },
      {
        ul: [
          'Zwei Rollen reichen in einer V1 fast immer: die, die administriert, und die, die nutzt.',
          'Ein feingranulares Berechtigungsmodell lässt sich schwer rückgängig machen, wenn es einmal steht.',
          'Kritische Sicherheit (wer worauf zugreift) löst man einfach, nicht mit zehn Rollen.',
        ],
      },
      { h2: '2. Verfrühte Internationalisierung' },
      {
        p: 'Eine Oberfläche zu übersetzen, die sich diesen Monat zehnmal ändert, ist Verschwendung: jeder überarbeitete Screen bedeutet ebenso viele Strings zum Neu-Übersetzen. Solange Sie das Produkt nicht auf einem einzigen Markt validiert haben, reicht eine Sprache.',
      },
      {
        ul: [
          'Bauen Sie sauber (ausgelagerte Texte), ohne wirklich zu übersetzen.',
          'Fügen Sie Sprachen hinzu, sobald Sie Product-Market-Fit haben, Markt für Markt.',
          'Verfrühtes i18n friert Labels ein, die sich noch bewegen werden.',
        ],
      },
      { h2: '3. Das selbstgebaute Analytics-Dashboard' },
      {
        p: 'Eigene Diagramme, Aggregationen und Exporte zu bauen, dauert leicht ein bis zwei Wochen — um neu zu erfinden, was dedizierte Tools besser können. In einer V1 gibt Ihnen ein fertiges Analytics-Tool (PostHog, Plausible…), in einer Stunde angebunden, 90 % der nützlichen Information, ohne eine Zeile Code zu warten.',
      },
      { h2: '4. Multi-Channel-Benachrichtigungen' },
      {
        p: 'E-Mail + Push + SMS + In-App, mit Präferenzen pro Kanal und pro Ereignistyp: das ist ein eigenständiges Produkt. In einer V1 deckt ein einziger transaktionaler Kanal — die E-Mail — das Wesentliche ab. Der Rest wartet, bis Sie Nutzer haben, die ihn wirklich verlangen.',
      },
      { h2: '5. Umfangreiche Personalisierung' },
      {
        p: 'Themes, umsortierbare Dashboards, feingranulare Präferenzen: auf dem Papier verlockend, aber niemand personalisiert ein Produkt, das er noch nicht nutzt. Bieten Sie einen exzellenten Standard; die Personalisierung kommt, wenn Sie wissen, was die Leute wirklich anpassen wollen.',
      },
      {
        quote:
          'Eine V1 gewinnt nicht durch das Hinzufügen von Funktionen, sondern durch das Entfernen von allem, was zum Lernen nicht unverzichtbar ist.',
      },
      { h2: 'Verschieben heißt nicht aufgeben' },
      {
        p: 'Jede dieser Funktionen hat ihren Platz — später, wenn echte Nutzer sie rechtfertigen. Die Aufgabe einer V1 ist es, das Problem und den Kern-Journey zu validieren, nicht alles abzudecken. Genau diese Scope-Disziplin erlaubt es, eine produktionsreife V1 in 7 Tagen zu liefern, zum Festpreis von 15.000 €, auf einer Basis, die Sie ohne Schulden ausbauen.',
      },
    ],
  },
  it: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'Le 5 funzionalità da NON mettere nella tua V1',
    excerpt:
      'Cinque funzionalità che credi indispensabili ma che affossano una V1 — ruoli complessi, i18n, analytics fatto in casa, notifiche, personalizzazione — e perché rimandarle.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Prodotto'],
    body: [
      {
        p: 'La maggior parte delle V1 fallisce non per mancanza di funzionalità, ma per eccesso. Cinque tasselli sembrano indispensabili eppure affossano quasi sempre una prima versione: i ruoli e permessi complessi, l’internazionalizzazione prematura, il dashboard analytics fatto in casa, le notifiche multicanale e la personalizzazione spinta. Rimandarle non è fare le cose male — è consegnare più in fretta e imparare prima. Ecco perché.',
      },
      { h2: '1. I ruoli e permessi complessi' },
      {
        p: 'Un sistema di ruoli fine (admin, manager, editor, lettore, permessi per risorsa) significa settimane di lavoro e una fonte infinita di bug. In una V1 raramente hai più di due tipi di utenti. Parti da un semplice booleano admin / utente e aggiungi granularità quando un cliente vero la chiede — non prima.',
      },
      {
        ul: [
          'Due ruoli bastano quasi sempre in una V1: chi amministra e chi usa.',
          'Un modello di permessi fine è difficile da disfare una volta in piedi.',
          'La sicurezza critica (chi accede a cosa) si gestisce in modo semplice, non con dieci ruoli.',
        ],
      },
      { h2: '2. L’internazionalizzazione prematura' },
      {
        p: 'Tradurre un’interfaccia che cambierà dieci volte nel mese è uno spreco: ogni schermata ritoccata sono altrettante stringhe da ri-tradurre. Finché non hai validato il prodotto su un solo mercato, una sola lingua basta.',
      },
      {
        ul: [
          'Progetta pulito (testi esternalizzati) senza tradurre davvero.',
          'Aggiungi le lingue una volta trovato il product-market fit, mercato per mercato.',
          'Un i18n prematuro congela etichette che devono ancora cambiare.',
        ],
      },
      { h2: '3. Il dashboard analytics fatto in casa' },
      {
        p: 'Costruire i propri grafici, aggregazioni ed export richiede facilmente una o due settimane — per reinventare ciò che strumenti dedicati fanno meglio. In una V1, uno strumento di analytics pronto all’uso (PostHog, Plausible…) collegato in un’ora ti dà il 90 % dell’informazione utile, senza una riga di codice da mantenere.',
      },
      { h2: '4. Le notifiche multicanale' },
      {
        p: 'Email + push + SMS + in-app, con preferenze per canale e per tipo di evento: è un prodotto a sé. In una V1, un solo canale transazionale — l’email — copre l’essenziale. Il resto aspetta di avere utenti che lo chiedono davvero.',
      },
      { h2: '5. La personalizzazione spinta' },
      {
        p: 'Temi, dashboard riordinabili, preferenze fini: allettante sulla carta, ma nessuno personalizza un prodotto che non usa ancora. Offri un default eccellente; la personalizzazione arriverà quando saprai cosa la gente vuole davvero regolare.',
      },
      {
        quote:
          'Una V1 non vince aggiungendo funzionalità, ma togliendo tutto ciò che non è indispensabile per imparare.',
      },
      { h2: 'Rimandare non è rinunciare' },
      {
        p: 'Ognuna di queste funzionalità ha il suo posto — più tardi, quando utenti reali la giustificano. Il ruolo di una V1 è validare il problema e il percorso centrale, non coprire tutto. È questa disciplina di perimetro che permette di consegnare una V1 pronta per la produzione in 7 giorni, a prezzo fisso di 15.000 €, su una base che farai crescere senza debito.',
      },
    ],
  },
  pt: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'As 5 funcionalidades que NÃO deve pôr na sua V1',
    excerpt:
      'Cinco funcionalidades que julga indispensáveis mas que afundam uma V1 — papéis complexos, i18n, analytics caseiro, notificações, personalização — e porquê adiá-las.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Produto'],
    body: [
      {
        p: 'A maioria das V1 falha não por falta de funcionalidades, mas por excesso. Cinco peças parecem indispensáveis e no entanto quase sempre afundam uma primeira versão: os papéis e permissões complexos, a internacionalização prematura, o dashboard de analytics caseiro, as notificações multicanal e a personalização avançada. Adiá-las não é fazer mal feito — é entregar mais rápido e aprender mais cedo. Eis porquê.',
      },
      { h2: '1. Os papéis e permissões complexos' },
      {
        p: 'Um sistema de papéis fino (admin, gestor, editor, leitor, permissões por recurso) representa semanas de trabalho e uma fonte inesgotável de bugs. Numa V1 raramente tem mais de dois tipos de utilizadores. Comece com um simples booleano admin / utilizador e acrescente granularidade quando um cliente real a pedir — não antes.',
      },
      {
        ul: [
          'Dois papéis quase sempre chegam numa V1: o que administra e o que usa.',
          'Um modelo de permissões fino é difícil de desfazer depois de implementado.',
          'A segurança crítica (quem acede a quê) resolve-se de forma simples, não com dez papéis.',
        ],
      },
      { h2: '2. A internacionalização prematura' },
      {
        p: 'Traduzir uma interface que vai mudar dez vezes no mês é um desperdício: cada ecrã retocado são outras tantas cadeias para re-traduzir. Enquanto não tiver validado o produto num único mercado, uma só língua chega.',
      },
      {
        ul: [
          'Desenhe limpo (textos externalizados) sem traduzir de facto.',
          'Acrescente línguas assim que tiver product-market fit, mercado a mercado.',
          'Um i18n prematuro congela rótulos que ainda vão mudar.',
        ],
      },
      { h2: '3. O dashboard de analytics caseiro' },
      {
        p: 'Construir os próprios gráficos, agregações e exportações leva facilmente uma a duas semanas — para reinventar o que ferramentas dedicadas fazem melhor. Numa V1, uma ferramenta de analytics pronta a usar (PostHog, Plausible…) ligada numa hora dá-lhe 90 % da informação útil, sem uma linha de código para manter.',
      },
      { h2: '4. As notificações multicanal' },
      {
        p: 'Email + push + SMS + in-app, com preferências por canal e por tipo de evento: isso é um produto por si só. Numa V1, um único canal transacional — o email — cobre o essencial. O resto espera até ter utilizadores que o peçam a sério.',
      },
      { h2: '5. A personalização avançada' },
      {
        p: 'Temas, dashboards reordenáveis, preferências finas: apelativo no papel, mas ninguém personaliza um produto que ainda não usa. Ofereça um padrão excelente; a personalização virá quando souber o que as pessoas querem mesmo ajustar.',
      },
      {
        quote:
          'Uma V1 não ganha adicionando funcionalidades, mas removendo tudo o que não é indispensável para aprender.',
      },
      { h2: 'Adiar não é desistir' },
      {
        p: 'Cada uma destas funcionalidades tem o seu lugar — mais tarde, quando utilizadores reais a justificam. O papel de uma V1 é validar o problema e o percurso central, não cobrir tudo. É essa disciplina de âmbito que permite entregar uma V1 pronta para produção em 7 dias, a preço fixo de 15 000 €, sobre uma base que fará crescer sem dívida.',
      },
    ],
  },
  nl: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'De 5 functies die je NIET in je V1 moet stoppen',
    excerpt:
      'Vijf functies die je onmisbaar waant maar die een V1 verzuipen — complexe rollen, i18n, zelfgebouwde analytics, notificaties, personalisatie — en waarom je ze uitstelt.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Product'],
    body: [
      {
        p: 'De meeste V1"s falen niet door een gebrek aan functies, maar door te veel. Vijf bouwstenen lijken onmisbaar en verzuipen toch bijna altijd een eerste versie: complexe rollen en rechten, voortijdige internationalisatie, een zelfgebouwd analytics-dashboard, multichannel-notificaties en zware personalisatie. Ze uitstellen is geen slordig werk — het is sneller leveren en eerder leren. Hier is waarom.',
      },
      { h2: '1. Complexe rollen en rechten' },
      {
        p: 'Een fijnmazig rollensysteem (admin, manager, editor, lezer, rechten per resource) betekent weken werk en een eindeloze bron van bugs. In een V1 heb je zelden meer dan twee soorten gebruikers. Begin met een simpele admin / gebruiker-boolean en voeg granulariteit toe wanneer een echte klant erom vraagt — niet eerder.',
      },
      {
        ul: [
          'Twee rollen volstaan bijna altijd in een V1: wie beheert en wie gebruikt.',
          'Een fijnmazig rechtenmodel is moeilijk ongedaan te maken zodra het staat.',
          'Kritieke beveiliging (wie waar bij kan) los je simpel op, niet met tien rollen.',
        ],
      },
      { h2: '2. Voortijdige internationalisatie' },
      {
        p: 'Een interface vertalen die deze maand tien keer verandert, is verspilling: elk aangepast scherm betekent evenveel strings om opnieuw te vertalen. Zolang je het product niet op één markt hebt gevalideerd, volstaat één taal.',
      },
      {
        ul: [
          'Bouw netjes (geëxternaliseerde teksten) zonder echt te vertalen.',
          'Voeg talen toe zodra je product-market fit hebt, markt voor markt.',
          'Voortijdige i18n bevriest labels die nog gaan bewegen.',
        ],
      },
      { h2: '3. Het zelfgebouwde analytics-dashboard' },
      {
        p: 'Je eigen grafieken, aggregaties en exports bouwen kost al snel één tot twee weken — om opnieuw uit te vinden wat specifieke tools beter doen. In een V1 geeft een kant-en-klare analytics-tool (PostHog, Plausible…), binnen een uur aangesloten, je 90 % van de nuttige informatie, zonder een regel code om te onderhouden.',
      },
      { h2: '4. Multichannel-notificaties' },
      {
        p: 'E-mail + push + sms + in-app, met voorkeuren per kanaal en per gebeurtenistype: dat is een product op zich. In een V1 dekt één transactioneel kanaal — e-mail — het essentiële. De rest wacht tot je gebruikers hebt die er echt om vragen.',
      },
      { h2: '5. Zware personalisatie' },
      {
        p: 'Thema’s, herschikbare dashboards, fijnmazige voorkeuren: aantrekkelijk op papier, maar niemand personaliseert een product dat hij nog niet gebruikt. Bied een uitstekende standaard; de personalisatie komt wanneer je weet wat mensen echt willen bijstellen.',
      },
      {
        quote:
          'Een V1 wint niet door functies toe te voegen, maar door alles weg te laten wat niet onmisbaar is om te leren.',
      },
      { h2: 'Uitstellen is niet opgeven' },
      {
        p: 'Elk van deze functies heeft zijn plek — later, wanneer echte gebruikers ze rechtvaardigen. De taak van een V1 is het probleem en de kernflow valideren, niet alles afdekken. Juist die scope-discipline maakt het mogelijk om een productieklare V1 in 7 dagen te leveren, tegen een vaste prijs van € 15.000, op een basis die je zonder schuld laat groeien.',
      },
    ],
  },
  ar: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'الميزات الخمس التي يجب ألا تضعها في V1',
    excerpt:
      'خمس ميزات تظنها ضرورية لكنها تُثقل V1 — الأدوار المعقّدة، i18n، لوحة تحليلات منزلية، الإشعارات، التخصيص — ولماذا يجب تأجيلها.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'المنتج'],
    body: [
      {
        p: 'معظم إصدارات V1 لا تفشل بسبب نقص الميزات، بل بسبب فرط الميزات. خمس لبنات تبدو ضرورية ومع ذلك تُثقل غالبًا أول إصدار: الأدوار والأذونات المعقّدة، والتدويل المبكّر، ولوحة التحليلات المنزلية، والإشعارات متعددة القنوات، والتخصيص المتقدّم. تأجيلها ليس تهاونًا — بل تسليم أسرع وتعلّم أبكر. إليك السبب.',
      },
      { h2: '1. الأدوار والأذونات المعقّدة' },
      {
        p: 'نظام أدوار دقيق (admin، مدير، محرّر، قارئ، أذونات لكل مورد) يعني أسابيع من العمل ومصدرًا لا ينتهي للأخطاء. في V1 نادرًا ما يكون لديك أكثر من نوعين من المستخدمين. ابدأ بقيمة منطقية بسيطة admin / مستخدم، وأضِف الدقّة عندما يطلبها عميل حقيقي — لا قبل ذلك.',
      },
      {
        ul: [
          'دوران يكفيان غالبًا في V1: من يُدير ومن يستخدم.',
          'نموذج أذونات دقيق يصعب التراجع عنه بعد تثبيته.',
          'الأمان الحرج (من يصل إلى ماذا) يُعالَج ببساطة، لا بعشرة أدوار.',
        ],
      },
      { h2: '2. التدويل المبكّر' },
      {
        p: 'ترجمة واجهة ستتغيّر عشر مرات خلال الشهر إهدار: كل شاشة تُعدَّل تعني سلاسل نصية جديدة لإعادة ترجمتها. ما دمت لم تتحقق من المنتج في سوق واحدة، تكفي لغة واحدة.',
      },
      {
        ul: [
          'صمّم بشكل نظيف (نصوص مُخرَجة خارجيًا) دون ترجمة فعلية.',
          'أضِف اللغات بعد إيجاد الـ product-market fit، سوقًا بعد سوق.',
          'i18n المبكّر يُجمّد عناوين ما زالت ستتغيّر.',
        ],
      },
      { h2: '3. لوحة التحليلات المنزلية' },
      {
        p: 'بناء رسومك البيانية وتجميعاتك وعمليات التصدير الخاصة بك يستغرق بسهولة أسبوعًا إلى أسبوعين — لإعادة اختراع ما تفعله أدوات مخصّصة بشكل أفضل. في V1، أداة تحليلات جاهزة (PostHog، Plausible…) موصولة في ساعة تمنحك 90% من المعلومة المفيدة، دون سطر كود واحد للصيانة.',
      },
      { h2: '4. الإشعارات متعددة القنوات' },
      {
        p: 'بريد إلكتروني + push + SMS + داخل التطبيق، مع تفضيلات لكل قناة ولكل نوع حدث: هذا منتج قائم بذاته. في V1، قناة معاملاتية واحدة — البريد الإلكتروني — تغطّي الأساسي. الباقي ينتظر وجود مستخدمين يطلبونه فعلًا.',
      },
      { h2: '5. التخصيص المتقدّم' },
      {
        p: 'سمات، لوحات قابلة لإعادة الترتيب، تفضيلات دقيقة: مغرٍ على الورق، لكن لا أحد يخصّص منتجًا لا يستخدمه بعد. قدّم إعدادًا افتراضيًا ممتازًا؛ سيأتي التخصيص عندما تعرف ما يريد الناس ضبطه فعلًا.',
      },
      {
        quote:
          'لا تربح V1 بإضافة الميزات، بل بحذف كل ما ليس ضروريًا للتعلّم.',
      },
      { h2: 'التأجيل ليس تخليًا' },
      {
        p: 'لكل ميزة من هذه الميزات مكانها — لاحقًا، حين يبرّرها مستخدمون حقيقيون. دور V1 هو التحقق من المشكلة والمسار الأساسي، لا تغطية كل شيء. هذا الانضباط في النطاق هو ما يتيح تسليم V1 جاهزة للإنتاج في 7 أيام، بسعر ثابت قدره 15,000 يورو، على قاعدة تُطوّرها دون دين.',
      },
    ],
  },
  pl: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: '5 funkcji, których NIE powinieneś umieszczać w V1',
    excerpt:
      'Pięć funkcji, które uważasz za niezbędne, a które topią V1 — złożone role, i18n, własny analytics, powiadomienia, personalizacja — i dlaczego je odłożyć.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Produkt'],
    body: [
      {
        p: 'Większość V1 upada nie z braku funkcji, lecz z ich nadmiaru. Pięć klocków wydaje się niezbędnych, a jednak niemal zawsze topi pierwszą wersję: złożone role i uprawnienia, przedwczesna internacjonalizacja, własny dashboard analityczny, powiadomienia wielokanałowe i zaawansowana personalizacja. Odłożenie ich to nie partactwo — to szybsze dostarczenie i wcześniejsza nauka. Oto dlaczego.',
      },
      { h2: '1. Złożone role i uprawnienia' },
      {
        p: 'Drobiazgowy system ról (admin, manager, edytor, czytelnik, uprawnienia per zasób) to tygodnie pracy i niekończące się źródło bugów. W V1 rzadko masz więcej niż dwa typy użytkowników. Zacznij od prostego boolean admin / użytkownik i dodaj granularność, gdy poprosi o nią prawdziwy klient — nie wcześniej.',
      },
      {
        ul: [
          'Dwie role prawie zawsze wystarczają w V1: ten, kto administruje, i ten, kto używa.',
          'Drobiazgowy model uprawnień trudno cofnąć, gdy już stoi.',
          'Krytyczne bezpieczeństwo (kto ma do czego dostęp) rozwiązuje się prosto, nie dziesięcioma rolami.',
        ],
      },
      { h2: '2. Przedwczesna internacjonalizacja' },
      {
        p: 'Tłumaczenie interfejsu, który zmieni się dziesięć razy w tym miesiącu, to marnotrawstwo: każdy przerobiony ekran to tyle samo ciągów do ponownego przetłumaczenia. Dopóki nie zwalidowałeś produktu na jednym rynku, jeden język wystarczy.',
      },
      {
        ul: [
          'Buduj czysto (teksty wyniesione na zewnątrz) bez faktycznego tłumaczenia.',
          'Dodaj języki po znalezieniu product-market fit, rynek po rynku.',
          'Przedwczesne i18n zamraża etykiety, które jeszcze będą się zmieniać.',
        ],
      },
      { h2: '3. Własny dashboard analityczny' },
      {
        p: 'Budowa własnych wykresów, agregacji i eksportów zajmuje łatwo tydzień lub dwa — by wymyślić na nowo to, co dedykowane narzędzia robią lepiej. W V1 gotowe narzędzie analityczne (PostHog, Plausible…) podłączone w godzinę daje ci 90 % przydatnej informacji, bez linijki kodu do utrzymania.',
      },
      { h2: '4. Powiadomienia wielokanałowe' },
      {
        p: 'E-mail + push + SMS + in-app, z preferencjami per kanał i per typ zdarzenia: to osobny produkt. W V1 jeden kanał transakcyjny — e-mail — pokrywa to, co najważniejsze. Reszta czeka, aż będziesz mieć użytkowników, którzy naprawdę o to poproszą.',
      },
      { h2: '5. Zaawansowana personalizacja' },
      {
        p: 'Motywy, przestawialne dashboardy, drobiazgowe preferencje: kuszące na papierze, ale nikt nie personalizuje produktu, którego jeszcze nie używa. Zaoferuj doskonałą wartość domyślną; personalizacja przyjdzie, gdy dowiesz się, co ludzie naprawdę chcą dostroić.',
      },
      {
        quote:
          'V1 nie wygrywa dodawaniem funkcji, lecz usuwaniem wszystkiego, co nie jest niezbędne do nauki.',
      },
      { h2: 'Odłożyć to nie zrezygnować' },
      {
        p: 'Każda z tych funkcji ma swoje miejsce — później, gdy uzasadnią ją prawdziwi użytkownicy. Rolą V1 jest zwalidowanie problemu i głównej ścieżki, a nie pokrycie wszystkiego. To właśnie ta dyscyplina zakresu pozwala dostarczyć gotową do produkcji V1 w 7 dni, w stałej cenie 15 000 €, na bazie, którą rozwiniesz bez długu.',
      },
    ],
  },
  tr: {
    slug: '5-fonctionnalites-a-ne-pas-mettre-dans-v1',
    title: 'V1"inize koymamanız gereken 5 özellik',
    excerpt:
      'Vazgeçilmez sandığınız ama bir V1"i batıran beş özellik — karmaşık roller, i18n, ev yapımı analytics, bildirimler, kişiselleştirme — ve neden ertelemeniz gerektiği.',
    date: '2026-05-13',
    readingMinutes: 6,
    tags: ['V1', 'Ürün'],
    body: [
      {
        p: 'Çoğu V1 özellik eksikliğinden değil, fazlalığından başarısız olur. Beş yapı taşı vazgeçilmez görünür ama ilk sürümü neredeyse her zaman batırır: karmaşık roller ve izinler, erken internationalization, ev yapımı analytics paneli, çok kanallı bildirimler ve ileri düzey kişiselleştirme. Bunları ertelemek özensizlik değildir — daha hızlı teslim etmek ve daha erken öğrenmektir. İşte nedeni.',
      },
      { h2: '1. Karmaşık roller ve izinler' },
      {
        p: 'İnce ayrımlı bir rol sistemi (admin, yönetici, editör, okuyucu, kaynak başına izinler) haftalarca iş ve bitmek bilmez bir hata kaynağı demektir. Bir V1"de nadiren ikiden fazla kullanıcı türünüz olur. Basit bir admin / kullanıcı boolean’ıyla başlayın ve gerçek bir müşteri istediğinde ayrıntı ekleyin — daha önce değil.',
      },
      {
        ul: [
          'V1"de neredeyse her zaman iki rol yeterlidir: yöneten ve kullanan.',
          'İnce ayrımlı bir izin modeli bir kez kurulunca geri almak zordur.',
          'Kritik güvenlik (kim neye erişiyor) basitçe çözülür, on rolle değil.',
        ],
      },
      { h2: '2. Erken internationalization' },
      {
        p: 'Bu ay on kez değişecek bir arayüzü çevirmek israftır: elden geçen her ekran, yeniden çevrilecek o kadar metin demektir. Ürünü tek bir pazarda doğrulamadığınız sürece tek dil yeter.',
      },
      {
        ul: [
          'Temiz kurun (metinleri dışa alın) ama gerçekten çevirmeyin.',
          'Dilleri product-market fit’i bulunca ekleyin, pazar pazar.',
          'Erken i18n, hâlâ değişecek etiketleri dondurur.',
        ],
      },
      { h2: '3. Ev yapımı analytics paneli' },
      {
        p: 'Kendi grafiklerinizi, toplulaştırmalarınızı ve dışa aktarımlarınızı yapmak kolayca bir ila iki hafta alır — üstelik özel araçların daha iyi yaptığı şeyi yeniden icat etmek için. Bir V1"de, bir saatte bağlanan hazır bir analytics aracı (PostHog, Plausible…) yararlı bilginin %90"ını verir, bakımı gereken tek satır kod olmadan.',
      },
      { h2: '4. Çok kanallı bildirimler' },
      {
        p: 'E-posta + push + SMS + uygulama içi, kanal ve olay türü başına tercihlerle: bu başlı başına bir üründür. Bir V1"de tek bir işlemsel kanal — e-posta — temel olanı karşılar. Gerisi, bunu gerçekten isteyen kullanıcılarınız olana kadar bekler.',
      },
      { h2: '5. İleri düzey kişiselleştirme' },
      {
        p: 'Temalar, yeniden düzenlenebilir paneller, ince tercihler: kâğıt üzerinde çekici, ama kimse henüz kullanmadığı bir ürünü kişiselleştirmez. Mükemmel bir varsayılan sunun; kişiselleştirme, insanların gerçekte neyi ayarlamak istediğini öğrendiğinizde gelir.',
      },
      {
        quote:
          'Bir V1 özellik ekleyerek değil, öğrenmek için vazgeçilmez olmayan her şeyi çıkararak kazanır.',
      },
      { h2: 'Ertelemek vazgeçmek değildir' },
      {
        p: 'Bu özelliklerin her birinin bir yeri vardır — daha sonra, gerçek kullanıcılar onu haklı çıkardığında. Bir V1"in görevi sorunu ve çekirdek akışı doğrulamaktır, her şeyi kapsamak değil. Üretime hazır bir V1"i 7 günde, 15.000 € sabit fiyatla, borçsuz büyüteceğiniz bir temel üzerinde teslim etmeyi mümkün kılan işte bu kapsam disiplinidir.',
      },
    ],
  },
}
