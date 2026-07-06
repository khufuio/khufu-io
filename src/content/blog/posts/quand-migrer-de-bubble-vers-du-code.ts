import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Quand faut-il migrer de Bubble vers du vrai code ?',
    excerpt:
      "Factures qui explosent, lenteurs, limites de logique, besoin d'API : les signaux qui montrent qu'il faut quitter Bubble, et comment migrer sans tout casser.",
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migration'],
    body: [
      {
        p: "Il faut migrer de Bubble vers du vrai code quand la plateforme vous coûte plus qu'elle ne vous rapporte : facture mensuelle qui grimpe avec le trafic, pages qui rament, logique métier impossible à modéliser, intégrations bloquées et failles de sécurité que vous ne maîtrisez pas. Le no-code est parfait pour valider une idée ; il devient un frein dès que le produit décolle. Voici les signaux concrets et la méthode pour migrer sans casser ce qui marche.",
      },
      { h2: "Les 5 signaux d'alerte" },
      {
        ul: [
          "Votre facture explose : les plans Bubble se paient à la capacité (workload units). Passé quelques milliers d'utilisateurs actifs, on voit des factures grimper de 100–200 €/mois à 1 000–3 000 €/mois — sans que vous contrôliez la courbe.",
          "Le produit rame : temps de chargement de 3–8 secondes sur les pages à données, workflows qui timeout, utilisateurs qui abandonnent. Vous avez atteint le plafond de performance de la plateforme.",
          "La logique métier coince : dès qu'il faut des calculs complexes, des transactions multi-tables ou des règles conditionnelles fines, vous bricolez des workarounds fragiles qui cassent à chaque modification.",
          "Vous avez besoin d'API et d'intégrations : webhooks fiables, jobs asynchrones, paiements avancés, IA — le connecteur no-code atteint vite ses limites ou coûte un plugin par besoin.",
          "La sécurité vous échappe : vous ne maîtrisez ni le stockage des données, ni les règles d'accès fines, ni la conformité (RGPD, audit). Pour un produit qui traite des données sensibles, c'est rédhibitoire.",
        ],
      },
      { h2: "Le vrai coût de rester trop longtemps" },
      {
        p: "Chaque mois passé au-delà du point de bascule ajoute de la dette : plus de workflows à recréer, plus de données à migrer, plus d'utilisateurs à ne pas perturber. Le no-code fait gagner des semaines au démarrage, mais rester une fois le plafond atteint fait perdre des mois — et abîme l'expérience de vos clients pendant ce temps.",
      },
      {
        quote:
          "Le bon moment pour migrer, c'est quand le no-code vous coûte plus cher à garder qu'à quitter — souvent bien avant qu'on ne l'admette.",
      },
      { h2: "Comment migrer sans tout casser" },
      {
        p: "Une migration réussie n'est jamais un big-bang. On garde Bubble en production pendant qu'on reconstruit à côté, puis on bascule quand la nouvelle version est prête et testée.",
      },
      {
        ul: [
          "Cartographier l'existant : lister les parcours réellement utilisés, les données à conserver, et ce qui peut être abandonné.",
          "Reconstruire sur une stack de production : Next.js, NestJS, Prisma, PostgreSQL — maintenable, testable, et à vous.",
          "Migrer les données via l'API Bubble ou un export, en validant l'intégrité avant la bascule.",
          "Basculer par lots ou d'un coup une fois les parcours critiques vérifiés, puis couper Bubble.",
        ],
      },
      { h2: "Combien de temps, combien ça coûte" },
      {
        p: "Pour un produit no-code arrivé à maturité, une V1 en vrai code propre et prête pour la production se livre en 7 jours, à prix fixe de 15 000 €, code source inclus. Vous récupérez une base qui scale, sans facture qui grimpe avec vos utilisateurs, et sans réécriture à prévoir dans six mois.",
      },
    ],
  },
  en: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'When should you migrate from Bubble to real code?',
    excerpt:
      "Exploding bills, slowness, logic limits, API needs: the signals that it's time to leave Bubble, and how to migrate without breaking what works.",
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migration'],
    body: [
      {
        p: "You should migrate from Bubble to real code when the platform costs you more than it earns you: a monthly bill that climbs with traffic, pages that lag, business logic you can't model, blocked integrations, and security gaps you don't control. No-code is perfect for validating an idea; it becomes a drag the moment the product takes off. Here are the concrete signals and the method to migrate without breaking what already works.",
      },
      { h2: 'The 5 warning signs' },
      {
        ul: [
          'Your bill explodes: Bubble plans are billed by capacity (workload units). Past a few thousand active users, bills routinely climb from €100–200/month to €1,000–3,000/month, with no control over the curve.',
          'The product lags: 3–8 second load times on data-heavy pages, workflows that time out, users who drop off. You have hit the platform performance ceiling.',
          'Business logic breaks down: once you need complex calculations, multi-table transactions, or fine-grained conditional rules, you patch together fragile workarounds that break with every change.',
          'You need APIs and integrations: reliable webhooks, async jobs, advanced payments, AI — the no-code connector hits its limits fast or costs one plugin per need.',
          "Security slips out of your hands: you control neither data storage, nor fine-grained access rules, nor compliance (GDPR, audit). For a product handling sensitive data, that is a deal-breaker.",
        ],
      },
      { h2: 'The real cost of staying too long' },
      {
        p: 'Every month spent past the tipping point adds debt: more workflows to rebuild, more data to migrate, more users not to disrupt. No-code saves you weeks at the start, but staying once you hit the ceiling costs you months — and degrades your customers experience the whole time.',
      },
      {
        quote:
          'The right time to migrate is when no-code costs more to keep than to leave — usually well before anyone admits it.',
      },
      { h2: 'How to migrate without breaking everything' },
      {
        p: 'A successful migration is never a big bang. You keep Bubble in production while you rebuild alongside it, then switch over once the new version is ready and tested.',
      },
      {
        ul: [
          'Map the existing product: list the flows actually used, the data to keep, and what can be dropped.',
          'Rebuild on a production stack: Next.js, NestJS, Prisma, PostgreSQL — maintainable, testable, and yours.',
          'Migrate the data through the Bubble API or an export, validating integrity before the switch.',
          'Cut over in batches or all at once once the critical flows are verified, then shut Bubble down.',
        ],
      },
      { h2: 'How long, how much it costs' },
      {
        p: 'For a mature no-code product, a V1 in clean, production-ready real code ships in 7 days, at a fixed price of €15,000, source code included. You get a base that scales, with no bill climbing alongside your users, and no rewrite to plan six months down the line.',
      },
    ],
  },
  es: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: '¿Cuándo migrar de Bubble a código real?',
    excerpt:
      'Facturas que se disparan, lentitud, límites de lógica, necesidad de API: las señales de que hay que dejar Bubble y cómo migrar sin romper nada.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migración'],
    body: [
      {
        p: "Debes migrar de Bubble a código real cuando la plataforma te cuesta más de lo que te aporta: una factura mensual que sube con el tráfico, páginas que se ralentizan, lógica de negocio imposible de modelar, integraciones bloqueadas y fallos de seguridad que no controlas. El no-code es perfecto para validar una idea; se convierte en un freno en cuanto el producto despega. Estas son las señales concretas y el método para migrar sin romper lo que funciona.",
      },
      { h2: 'Las 5 señales de alerta' },
      {
        ul: [
          'Tu factura se dispara: los planes de Bubble se pagan por capacidad (workload units). Pasados unos miles de usuarios activos, las facturas suelen subir de 100–200 €/mes a 1.000–3.000 €/mes, sin que controles la curva.',
          'El producto se ralentiza: tiempos de carga de 3–8 segundos en páginas con datos, workflows que agotan el tiempo, usuarios que abandonan. Has alcanzado el techo de rendimiento de la plataforma.',
          'La lógica de negocio se atasca: en cuanto necesitas cálculos complejos, transacciones multitabla o reglas condicionales precisas, improvisas soluciones frágiles que se rompen con cada cambio.',
          'Necesitas API e integraciones: webhooks fiables, trabajos asíncronos, pagos avanzados, IA — el conector no-code llega pronto a su límite o cuesta un plugin por necesidad.',
          'La seguridad se te escapa: no controlas ni el almacenamiento de datos, ni las reglas de acceso finas, ni el cumplimiento (RGPD, auditoría). Para un producto que trata datos sensibles, es inaceptable.',
        ],
      },
      { h2: 'El coste real de quedarse demasiado tiempo' },
      {
        p: 'Cada mes más allá del punto de inflexión añade deuda: más workflows que reconstruir, más datos que migrar, más usuarios a los que no perturbar. El no-code te ahorra semanas al principio, pero quedarte una vez alcanzado el techo te hace perder meses — y degrada la experiencia de tus clientes mientras tanto.',
      },
      {
        quote:
          'El momento adecuado para migrar es cuando el no-code cuesta más mantenerlo que abandonarlo — casi siempre mucho antes de que se admita.',
      },
      { h2: 'Cómo migrar sin romperlo todo' },
      {
        p: 'Una migración exitosa nunca es un big-bang. Mantienes Bubble en producción mientras reconstruyes en paralelo y luego cambias cuando la nueva versión está lista y probada.',
      },
      {
        ul: [
          'Cartografiar lo existente: enumerar los flujos realmente usados, los datos a conservar y lo que se puede abandonar.',
          'Reconstruir sobre una stack de producción: Next.js, NestJS, Prisma, PostgreSQL — mantenible, testeable y tuya.',
          'Migrar los datos vía la API de Bubble o una exportación, validando la integridad antes del cambio.',
          'Cambiar por lotes o de golpe una vez verificados los flujos críticos, y luego apagar Bubble.',
        ],
      },
      { h2: 'Cuánto tiempo, cuánto cuesta' },
      {
        p: 'Para un producto no-code que ha madurado, una V1 en código real limpio y listo para producción se entrega en 7 días, a un precio fijo de 15.000 €, código fuente incluido. Recuperas una base que escala, sin factura que suba con tus usuarios y sin reescritura prevista dentro de seis meses.',
      },
    ],
  },
  de: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Wann sollten Sie von Bubble zu echtem Code migrieren?',
    excerpt:
      'Explodierende Rechnungen, Langsamkeit, Logikgrenzen, API-Bedarf: die Signale, Bubble zu verlassen — und wie Sie migrieren, ohne alles zu zerstören.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migration'],
    body: [
      {
        p: 'Sie sollten von Bubble zu echtem Code migrieren, wenn die Plattform Sie mehr kostet, als sie einbringt: eine monatliche Rechnung, die mit dem Traffic steigt, träge Seiten, nicht abbildbare Geschäftslogik, blockierte Integrationen und Sicherheitslücken, die Sie nicht kontrollieren. No-Code ist perfekt, um eine Idee zu validieren; es wird zur Bremse, sobald das Produkt abhebt. Hier sind die konkreten Signale und die Methode, um zu migrieren, ohne das Funktionierende zu zerstören.',
      },
      { h2: 'Die 5 Warnsignale' },
      {
        ul: [
          'Ihre Rechnung explodiert: Bubble-Pläne werden nach Kapazität abgerechnet (workload units). Ab einigen tausend aktiven Nutzern steigen Rechnungen regelmäßig von 100–200 €/Monat auf 1.000–3.000 €/Monat — ohne dass Sie die Kurve kontrollieren.',
          'Das Produkt wird träge: 3–8 Sekunden Ladezeit auf datenlastigen Seiten, Workflows mit Timeout, abspringende Nutzer. Sie haben die Leistungsgrenze der Plattform erreicht.',
          'Die Geschäftslogik hakt: Sobald Sie komplexe Berechnungen, Multi-Tabellen-Transaktionen oder feine Bedingungsregeln brauchen, basteln Sie fragile Workarounds, die bei jeder Änderung brechen.',
          'Sie brauchen APIs und Integrationen: zuverlässige Webhooks, asynchrone Jobs, fortgeschrittene Zahlungen, KI — der No-Code-Connector stößt schnell an Grenzen oder kostet ein Plugin pro Bedarf.',
          'Die Sicherheit entgleitet Ihnen: Sie kontrollieren weder die Datenspeicherung noch feine Zugriffsregeln noch die Compliance (DSGVO, Audit). Für ein Produkt mit sensiblen Daten ist das ein Ausschlusskriterium.',
        ],
      },
      { h2: 'Die realen Kosten, zu lange zu bleiben' },
      {
        p: 'Jeder Monat jenseits des Wendepunkts erhöht die Schuld: mehr Workflows zum Neuaufbau, mehr Daten zum Migrieren, mehr Nutzer, die nicht gestört werden dürfen. No-Code spart Ihnen anfangs Wochen, aber am Limit zu bleiben kostet Sie Monate — und verschlechtert währenddessen die Erfahrung Ihrer Kunden.',
      },
      {
        quote:
          'Der richtige Zeitpunkt zum Migrieren ist, wenn No-Code mehr kostet, es zu behalten als es zu verlassen — meist lange bevor man es zugibt.',
      },
      { h2: 'Wie Sie migrieren, ohne alles zu zerstören' },
      {
        p: 'Eine erfolgreiche Migration ist nie ein Big Bang. Sie halten Bubble in Produktion, während Sie daneben neu aufbauen, und schalten dann um, sobald die neue Version fertig und getestet ist.',
      },
      {
        ul: [
          'Den Bestand kartieren: die tatsächlich genutzten Abläufe, die zu behaltenden Daten und das Verzichtbare auflisten.',
          'Auf einem Produktions-Stack neu aufbauen: Next.js, NestJS, Prisma, PostgreSQL — wartbar, testbar und Ihr Eigentum.',
          'Die Daten über die Bubble-API oder einen Export migrieren und die Integrität vor der Umschaltung prüfen.',
          'In Chargen oder auf einmal umschalten, sobald die kritischen Abläufe verifiziert sind, dann Bubble abschalten.',
        ],
      },
      { h2: 'Wie lange, wie viel es kostet' },
      {
        p: 'Für ein ausgereiftes No-Code-Produkt wird eine V1 in sauberem, produktionsreifem echtem Code in 7 Tagen geliefert, zum Festpreis von 15.000 €, Quellcode inklusive. Sie erhalten eine skalierbare Basis, ohne mit Ihren Nutzern steigende Rechnung und ohne in sechs Monaten anstehende Neuentwicklung.',
      },
    ],
  },
  it: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Quando migrare da Bubble al codice vero?',
    excerpt:
      'Fatture che esplodono, lentezza, limiti di logica, bisogno di API: i segnali che è ora di lasciare Bubble e come migrare senza rompere nulla.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migrazione'],
    body: [
      {
        p: "Devi migrare da Bubble al codice vero quando la piattaforma ti costa più di quanto ti renda: una fattura mensile che sale con il traffico, pagine lente, logica di business impossibile da modellare, integrazioni bloccate e falle di sicurezza che non controlli. Il no-code è perfetto per validare un'idea; diventa un freno appena il prodotto decolla. Ecco i segnali concreti e il metodo per migrare senza rompere ciò che funziona.",
      },
      { h2: 'I 5 segnali di allarme' },
      {
        ul: [
          'La tua fattura esplode: i piani Bubble si pagano a capacità (workload units). Oltre qualche migliaio di utenti attivi, le fatture salgono spesso da 100–200 €/mese a 1.000–3.000 €/mese, senza che tu controlli la curva.',
          'Il prodotto rallenta: tempi di caricamento di 3–8 secondi sulle pagine con dati, workflow che vanno in timeout, utenti che abbandonano. Hai raggiunto il tetto di prestazioni della piattaforma.',
          'La logica di business si inceppa: appena servono calcoli complessi, transazioni multi-tabella o regole condizionali precise, metti insieme workaround fragili che si rompono a ogni modifica.',
          'Ti servono API e integrazioni: webhook affidabili, job asincroni, pagamenti avanzati, IA — il connettore no-code raggiunge presto i suoi limiti o costa un plugin per esigenza.',
          'La sicurezza ti sfugge: non controlli né lo storage dei dati, né le regole di accesso fini, né la conformità (GDPR, audit). Per un prodotto che tratta dati sensibili, è inaccettabile.',
        ],
      },
      { h2: 'Il vero costo di restare troppo a lungo' },
      {
        p: "Ogni mese oltre il punto di svolta aggiunge debito: più workflow da ricostruire, più dati da migrare, più utenti da non disturbare. Il no-code ti fa guadagnare settimane all'inizio, ma restare una volta raggiunto il tetto ti fa perdere mesi — e nel frattempo peggiora l'esperienza dei tuoi clienti.",
      },
      {
        quote:
          'Il momento giusto per migrare è quando il no-code costa più tenerlo che lasciarlo — quasi sempre molto prima di quanto lo si ammetta.',
      },
      { h2: 'Come migrare senza rompere tutto' },
      {
        p: 'Una migrazione riuscita non è mai un big-bang. Tieni Bubble in produzione mentre ricostruisci in parallelo, poi passi alla nuova versione quando è pronta e testata.',
      },
      {
        ul: [
          "Mappare l'esistente: elencare i flussi realmente usati, i dati da conservare e ciò che si può abbandonare.",
          'Ricostruire su uno stack di produzione: Next.js, NestJS, Prisma, PostgreSQL — manutenibile, testabile e tuo.',
          "Migrare i dati tramite l'API di Bubble o un export, validando l'integrità prima del passaggio.",
          'Passare a lotti o tutto in una volta una volta verificati i flussi critici, poi spegnere Bubble.',
        ],
      },
      { h2: 'Quanto tempo, quanto costa' },
      {
        p: 'Per un prodotto no-code ormai maturo, una V1 in codice vero pulito e pronto per la produzione si consegna in 7 giorni, a prezzo fisso di 15.000 €, codice sorgente incluso. Recuperi una base che scala, senza fattura che sale con i tuoi utenti e senza riscrittura da prevedere tra sei mesi.',
      },
    ],
  },
  pt: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Quando migrar do Bubble para código real?',
    excerpt:
      'Faturas que disparam, lentidão, limites de lógica, necessidade de API: os sinais de que é hora de sair do Bubble e como migrar sem quebrar nada.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migração'],
    body: [
      {
        p: 'Você deve migrar do Bubble para código real quando a plataforma custa mais do que rende: uma fatura mensal que sobe com o tráfego, páginas lentas, lógica de negócio impossível de modelar, integrações bloqueadas e falhas de segurança que você não controla. O no-code é perfeito para validar uma ideia; vira um freio assim que o produto decola. Aqui estão os sinais concretos e o método para migrar sem quebrar o que funciona.',
      },
      { h2: 'Os 5 sinais de alerta' },
      {
        ul: [
          'Sua fatura explode: os planos do Bubble são pagos por capacidade (workload units). Passados alguns milhares de usuários ativos, as faturas costumam subir de 100–200 €/mês para 1.000–3.000 €/mês, sem que você controle a curva.',
          'O produto fica lento: tempos de carregamento de 3–8 segundos em páginas com dados, workflows que dão timeout, usuários que abandonam. Você atingiu o teto de desempenho da plataforma.',
          'A lógica de negócio trava: assim que precisa de cálculos complexos, transações multi-tabela ou regras condicionais precisas, você improvisa workarounds frágeis que quebram a cada mudança.',
          'Você precisa de API e integrações: webhooks confiáveis, jobs assíncronos, pagamentos avançados, IA — o conector no-code atinge rápido seus limites ou custa um plugin por necessidade.',
          'A segurança escapa do seu controle: você não controla nem o armazenamento dos dados, nem as regras de acesso finas, nem a conformidade (RGPD, auditoria). Para um produto que trata dados sensíveis, é inaceitável.',
        ],
      },
      { h2: 'O custo real de ficar tempo demais' },
      {
        p: 'Cada mês além do ponto de virada acrescenta dívida: mais workflows para reconstruir, mais dados para migrar, mais usuários a não perturbar. O no-code faz você ganhar semanas no início, mas ficar depois de atingir o teto faz perder meses — e degrada a experiência dos seus clientes nesse tempo.',
      },
      {
        quote:
          'O momento certo para migrar é quando o no-code custa mais para manter do que para deixar — quase sempre bem antes de se admitir.',
      },
      { h2: 'Como migrar sem quebrar tudo' },
      {
        p: 'Uma migração bem-sucedida nunca é um big-bang. Você mantém o Bubble em produção enquanto reconstrói ao lado e depois faz a virada quando a nova versão está pronta e testada.',
      },
      {
        ul: [
          'Mapear o existente: listar os fluxos realmente usados, os dados a conservar e o que pode ser abandonado.',
          'Reconstruir sobre uma stack de produção: Next.js, NestJS, Prisma, PostgreSQL — manutenível, testável e sua.',
          'Migrar os dados via a API do Bubble ou uma exportação, validando a integridade antes da virada.',
          'Virar em lotes ou de uma vez após verificar os fluxos críticos, e então desligar o Bubble.',
        ],
      },
      { h2: 'Quanto tempo, quanto custa' },
      {
        p: 'Para um produto no-code já maduro, uma V1 em código real limpo e pronto para produção é entregue em 7 dias, a preço fixo de 15.000 €, código-fonte incluído. Você recupera uma base que escala, sem fatura que sobe com seus usuários e sem reescrita prevista daqui a seis meses.',
      },
    ],
  },
  nl: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Wanneer migreren van Bubble naar echte code?',
    excerpt:
      'Exploderende facturen, traagheid, logica-limieten, API-behoefte: de signalen om Bubble te verlaten en hoe je migreert zonder iets te breken.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migratie'],
    body: [
      {
        p: "Je moet van Bubble naar echte code migreren wanneer het platform je meer kost dan het oplevert: een maandfactuur die met het verkeer stijgt, trage pagina's, bedrijfslogica die je niet kunt modelleren, geblokkeerde integraties en beveiligingslekken die je niet beheerst. No-code is perfect om een idee te valideren; het wordt een rem zodra het product doorbreekt. Hier zijn de concrete signalen en de methode om te migreren zonder te breken wat werkt.",
      },
      { h2: 'De 5 waarschuwingssignalen' },
      {
        ul: [
          'Je factuur explodeert: Bubble-plannen worden per capaciteit afgerekend (workload units). Voorbij enkele duizenden actieve gebruikers stijgen facturen vaak van 100–200 €/maand naar 1.000–3.000 €/maand, zonder dat je de curve beheerst.',
          "Het product wordt traag: laadtijden van 3–8 seconden op datazware pagina's, workflows die timeouten, gebruikers die afhaken. Je hebt het prestatieplafond van het platform bereikt.",
          'De bedrijfslogica loopt vast: zodra je complexe berekeningen, transacties over meerdere tabellen of fijne voorwaardelijke regels nodig hebt, knutsel je fragiele workarounds die bij elke wijziging breken.',
          "Je hebt API's en integraties nodig: betrouwbare webhooks, asynchrone jobs, geavanceerde betalingen, AI — de no-code connector loopt snel tegen zijn grenzen aan of kost een plugin per behoefte.",
          'De beveiliging ontglipt je: je beheerst noch de dataopslag, noch fijne toegangsregels, noch de compliance (AVG, audit). Voor een product dat gevoelige data verwerkt, is dat een dealbreaker.',
        ],
      },
      { h2: 'De echte kosten van te lang blijven' },
      {
        p: 'Elke maand voorbij het kantelpunt voegt schuld toe: meer workflows om te herbouwen, meer data om te migreren, meer gebruikers om niet te verstoren. No-code bespaart je in het begin weken, maar blijven zodra je het plafond raakt kost je maanden — en verslechtert ondertussen de ervaring van je klanten.',
      },
      {
        quote:
          'Het juiste moment om te migreren is wanneer no-code duurder is om te houden dan om te verlaten — meestal ruim voordat men het toegeeft.',
      },
      { h2: 'Hoe migreren zonder alles te breken' },
      {
        p: 'Een geslaagde migratie is nooit een big bang. Je houdt Bubble in productie terwijl je ernaast herbouwt, en schakelt dan over zodra de nieuwe versie klaar en getest is.',
      },
      {
        ul: [
          'Het bestaande in kaart brengen: de daadwerkelijk gebruikte flows, de te behouden data en wat weg kan.',
          'Herbouwen op een productie-stack: Next.js, NestJS, Prisma, PostgreSQL — onderhoudbaar, testbaar en van jou.',
          'De data migreren via de Bubble-API of een export, met integriteitscontrole vóór de overschakeling.',
          'In batches of in één keer overschakelen zodra de kritieke flows geverifieerd zijn, en dan Bubble uitschakelen.',
        ],
      },
      { h2: 'Hoelang, hoeveel het kost' },
      {
        p: 'Voor een volwassen no-code product wordt een V1 in schone, productieklare echte code in 7 dagen geleverd, tegen een vaste prijs van 15.000 €, broncode inbegrepen. Je krijgt een basis die schaalt, zonder factuur die met je gebruikers meestijgt en zonder herschrijving over zes maanden.',
      },
    ],
  },
  ar: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'متى يجب الانتقال من Bubble إلى الكود الحقيقي؟',
    excerpt:
      'فواتير تتضخم، بطء، حدود في المنطق، حاجة إلى API: العلامات التي تدل على وجوب مغادرة Bubble، وكيفية الانتقال دون كسر ما يعمل.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'الترحيل'],
    body: [
      {
        p: 'يجب الانتقال من Bubble إلى الكود الحقيقي عندما تكلفك المنصة أكثر مما تدره عليك: فاتورة شهرية ترتفع مع حركة المرور، صفحات بطيئة، منطق أعمال يستحيل نمذجته، تكاملات محجوبة، وثغرات أمنية لا تتحكم بها. الـ no-code مثالي للتحقق من فكرة؛ لكنه يصبح عائقًا بمجرد أن ينطلق المنتج. إليك العلامات الملموسة والطريقة للانتقال دون كسر ما يعمل.',
      },
      { h2: 'العلامات التحذيرية الخمس' },
      {
        ul: [
          'فاتورتك تنفجر: تُدفع خطط Bubble حسب السعة (workload units). بعد بضعة آلاف من المستخدمين النشطين، ترتفع الفواتير عادةً من 100–200 يورو/شهر إلى 1000–3000 يورو/شهر، دون أن تتحكم بالمنحنى.',
          'المنتج يتباطأ: أوقات تحميل من 3 إلى 8 ثوانٍ في الصفحات الغنية بالبيانات، workflows تنتهي مهلتها، مستخدمون يغادرون. لقد بلغت سقف أداء المنصة.',
          'منطق الأعمال يتعثر: بمجرد أن تحتاج إلى حسابات معقدة أو معاملات متعددة الجداول أو قواعد شرطية دقيقة، تلجأ إلى حلول التفافية هشة تنكسر مع كل تعديل.',
          'تحتاج إلى API وتكاملات: webhooks موثوقة، مهام غير متزامنة، مدفوعات متقدمة، ذكاء اصطناعي — يبلغ موصّل الـ no-code حدوده بسرعة أو يكلفك plugin لكل حاجة.',
          'الأمن يفلت من يدك: أنت لا تتحكم بتخزين البيانات، ولا بقواعد الوصول الدقيقة، ولا بالامتثال (GDPR، التدقيق). بالنسبة لمنتج يعالج بيانات حساسة، هذا أمر غير مقبول.',
        ],
      },
      { h2: 'التكلفة الحقيقية للبقاء طويلًا' },
      {
        p: 'كل شهر يمضي بعد نقطة التحول يضيف ديونًا: المزيد من الـ workflows لإعادة بنائها، والمزيد من البيانات للترحيل، والمزيد من المستخدمين الذين يجب عدم إزعاجهم. يوفر عليك الـ no-code أسابيع في البداية، لكن البقاء بعد بلوغ السقف يكلفك أشهرًا — ويُفسد تجربة عملائك طوال هذه المدة.',
      },
      {
        quote:
          'الوقت المناسب للترحيل هو حين يكلفك الاحتفاظ بالـ no-code أكثر من مغادرته — وغالبًا قبل أن نعترف بذلك بوقت طويل.',
      },
      { h2: 'كيفية الترحيل دون كسر كل شيء' },
      {
        p: 'الترحيل الناجح ليس أبدًا انتقالًا مفاجئًا. تبقي Bubble في الإنتاج بينما تعيد البناء إلى جانبه، ثم تنتقل عندما تكون النسخة الجديدة جاهزة ومُختبَرة.',
      },
      {
        ul: [
          'رسم خريطة للموجود: سرد المسارات المستخدمة فعليًا، والبيانات التي يجب الاحتفاظ بها، وما يمكن الاستغناء عنه.',
          'إعادة البناء على stack إنتاجية: Next.js وNestJS وPrisma وPostgreSQL — قابلة للصيانة والاختبار وملك لك.',
          'ترحيل البيانات عبر API الخاص بـ Bubble أو عبر تصدير، مع التحقق من سلامتها قبل التبديل.',
          'التبديل على دفعات أو دفعة واحدة بعد التحقق من المسارات الحرجة، ثم إيقاف Bubble.',
        ],
      },
      { h2: 'كم من الوقت، وكم تكلفته' },
      {
        p: 'بالنسبة لمنتج no-code بلغ نضجه، تُسلَّم V1 بكود حقيقي نظيف وجاهز للإنتاج خلال 7 أيام، بسعر ثابت قدره 15000 يورو، مع الكود المصدري. تحصل على قاعدة قابلة للتوسع، دون فاتورة ترتفع مع مستخدميك، ودون إعادة كتابة متوقعة بعد ستة أشهر.',
      },
    ],
  },
  pl: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: 'Kiedy migrować z Bubble do prawdziwego kodu?',
    excerpt:
      'Rosnące rachunki, spowolnienia, limity logiki, potrzeba API: sygnały, że czas opuścić Bubble, i jak zmigrować bez psucia tego, co działa.',
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Migracja'],
    body: [
      {
        p: 'Powinieneś zmigrować z Bubble do prawdziwego kodu, gdy platforma kosztuje cię więcej, niż przynosi: miesięczny rachunek rosnący wraz z ruchem, wolne strony, logika biznesowa niemożliwa do zamodelowania, zablokowane integracje i luki bezpieczeństwa, których nie kontrolujesz. No-code jest idealny do walidacji pomysłu; staje się hamulcem, gdy tylko produkt nabiera rozpędu. Oto konkretne sygnały i metoda, by zmigrować bez psucia tego, co działa.',
      },
      { h2: 'Pięć sygnałów ostrzegawczych' },
      {
        ul: [
          'Twój rachunek eksploduje: plany Bubble rozlicza się według pojemności (workload units). Po kilku tysiącach aktywnych użytkowników rachunki zwykle rosną ze 100–200 €/miesiąc do 1000–3000 €/miesiąc, bez kontroli nad krzywą.',
          'Produkt zwalnia: czasy ładowania 3–8 sekund na stronach z danymi, workflowy z timeoutem, rezygnujący użytkownicy. Osiągnąłeś pułap wydajności platformy.',
          'Logika biznesowa się zacina: gdy potrzebujesz złożonych obliczeń, transakcji wielotabelowych czy precyzyjnych reguł warunkowych, sklejasz kruche obejścia, które psują się przy każdej zmianie.',
          'Potrzebujesz API i integracji: niezawodne webhooki, zadania asynchroniczne, zaawansowane płatności, AI — konektor no-code szybko osiąga granice albo kosztuje jeden plugin na każdą potrzebę.',
          'Bezpieczeństwo wymyka ci się z rąk: nie kontrolujesz ani przechowywania danych, ani precyzyjnych reguł dostępu, ani zgodności (RODO, audyt). Dla produktu przetwarzającego dane wrażliwe to nie do przyjęcia.',
        ],
      },
      { h2: 'Realny koszt zbyt długiego zwlekania' },
      {
        p: 'Każdy miesiąc za punktem przełomu dokłada długu: więcej workflowów do odbudowy, więcej danych do migracji, więcej użytkowników, których nie można zakłócić. No-code oszczędza ci tygodnie na starcie, ale pozostanie po osiągnięciu pułapu kosztuje miesiące — i przez cały ten czas pogarsza doświadczenie twoich klientów.',
      },
      {
        quote:
          'Właściwy moment na migrację to ten, gdy utrzymanie no-code kosztuje więcej niż jego opuszczenie — zwykle na długo, zanim to przyznamy.',
      },
      { h2: 'Jak zmigrować bez psucia wszystkiego' },
      {
        p: 'Udana migracja nigdy nie jest big-bangiem. Trzymasz Bubble na produkcji, budując obok od nowa, a potem przełączasz się, gdy nowa wersja jest gotowa i przetestowana.',
      },
      {
        ul: [
          'Zmapować istniejące: wypisać faktycznie używane przepływy, dane do zachowania i to, co można porzucić.',
          'Odbudować na stacku produkcyjnym: Next.js, NestJS, Prisma, PostgreSQL — łatwym w utrzymaniu, testowalnym i twoim.',
          'Zmigrować dane przez API Bubble lub eksport, weryfikując ich integralność przed przełączeniem.',
          'Przełączyć partiami lub od razu po zweryfikowaniu krytycznych przepływów, a następnie wyłączyć Bubble.',
        ],
      },
      { h2: 'Ile czasu, ile kosztuje' },
      {
        p: 'Dla dojrzałego produktu no-code V1 w czystym, gotowym do produkcji prawdziwym kodzie dostarczamy w 7 dni, w stałej cenie 15 000 €, z kodem źródłowym. Otrzymujesz bazę, która skaluje się, bez rachunku rosnącego wraz z użytkownikami i bez przepisywania planowanego za pół roku.',
      },
    ],
  },
  tr: {
    slug: 'quand-migrer-de-bubble-vers-du-code',
    title: "Bubble'dan gerçek koda ne zaman geçmeli?",
    excerpt:
      "Fırlayan faturalar, yavaşlık, mantık sınırları, API ihtiyacı: Bubble'ı bırakma sinyalleri ve işleyeni bozmadan nasıl göç edilir.",
    date: '2026-04-15',
    readingMinutes: 6,
    tags: ['No-code', 'Geçiş'],
    body: [
      {
        p: "Platform size kazandırdığından fazlasına mal olduğunda Bubble'dan gerçek koda geçmelisiniz: trafikle birlikte artan aylık fatura, yavaşlayan sayfalar, modellenemeyen iş mantığı, engellenen entegrasyonlar ve kontrol edemediğiniz güvenlik açıkları. No-code bir fikri doğrulamak için mükemmeldir; ürün yükselişe geçtiği an bir engele dönüşür. İşte somut sinyaller ve işleyeni bozmadan göç etme yöntemi.",
      },
      { h2: '5 uyarı sinyali' },
      {
        ul: [
          "Faturanız patlıyor: Bubble planları kapasiteye göre faturalanır (workload units). Birkaç bin aktif kullanıcıyı aştığınızda faturalar genellikle 100–200 €/ay seviyesinden 1.000–3.000 €/ay seviyesine çıkar, eğriyi kontrol edemezsiniz.",
          "Ürün yavaşlıyor: veri yoğun sayfalarda 3–8 saniyelik yükleme süreleri, zaman aşımına uğrayan workflow'lar, vazgeçen kullanıcılar. Platformun performans tavanına ulaştınız.",
          'İş mantığı tıkanıyor: karmaşık hesaplamalara, çok tablolu işlemlere veya ince koşullu kurallara ihtiyaç duyduğunuz an, her değişiklikte kırılan kırılgan çözümler uydurursunuz.',
          "API ve entegrasyonlara ihtiyacınız var: güvenilir webhook'lar, asenkron işler, gelişmiş ödemeler, yapay zeka — no-code konektörü sınırlarına hızla dayanır ya da her ihtiyaç için bir plugin masrafı çıkarır.",
          'Güvenlik elinizden kayıyor: ne veri depolamayı, ne ince erişim kurallarını, ne de uyumluluğu (KVKK/GDPR, denetim) kontrol edersiniz. Hassas veri işleyen bir ürün için bu kabul edilemez.',
        ],
      },
      { h2: 'Çok uzun kalmanın gerçek maliyeti' },
      {
        p: "Dönüm noktasının ötesindeki her ay borç ekler: yeniden kurulacak daha çok workflow, göç ettirilecek daha çok veri, rahatsız edilmemesi gereken daha çok kullanıcı. No-code başlangıçta size haftalar kazandırır, ama tavana ulaştıktan sonra kalmak size aylar kaybettirir — ve bu süre boyunca müşterilerinizin deneyimini bozar.",
      },
      {
        quote:
          "Göç etmenin doğru zamanı, no-code'u tutmanın onu bırakmaktan daha pahalı olduğu andır — çoğu zaman bunu itiraf etmemizden çok önce.",
      },
      { h2: 'Her şeyi bozmadan nasıl göç edilir' },
      {
        p: "Başarılı bir göç asla bir big-bang değildir. Yanında yeniden inşa ederken Bubble'ı üretimde tutarsınız, sonra yeni sürüm hazır ve test edilmiş olduğunda geçiş yaparsınız.",
      },
      {
        ul: [
          'Mevcudu haritalayın: gerçekten kullanılan akışları, saklanacak verileri ve terk edilebilecekleri listeleyin.',
          'Üretim stacki üzerine yeniden inşa edin: Next.js, NestJS, Prisma, PostgreSQL — bakımı yapılabilir, test edilebilir ve size ait.',
          "Verileri Bubble API'si veya bir dışa aktarma yoluyla göç ettirin, geçişten önce bütünlüğünü doğrulayın.",
          "Kritik akışlar doğrulandıktan sonra partiler halinde veya tek seferde geçiş yapın, ardından Bubble'ı kapatın.",
        ],
      },
      { h2: 'Ne kadar sürer, ne kadara mal olur' },
      {
        p: "Olgunlaşmış bir no-code ürün için temiz, üretime hazır gerçek kodla bir V1, kaynak kodu dahil, 15.000 € sabit fiyata 7 günde teslim edilir. Kullanıcılarınızla birlikte artan bir fatura olmadan ve altı ay sonra planlanacak bir yeniden yazım olmadan, ölçeklenen bir temel elde edersiniz.",
      },
    ],
  },
}
