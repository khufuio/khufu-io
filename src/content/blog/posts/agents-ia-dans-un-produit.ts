import type { Locale } from '@/i18n/config'
import type { Article } from '../types'

export const post: Record<Locale, Article> = {
  fr: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Agents IA dans un produit : les cas d’usage qui valent le coup',
    excerpt:
      'Ce qu’est un agent IA dans un produit, les cas d’usage à vraie valeur vs les gadgets, les pièges (coûts, fiabilité, UX) et comment démarrer petit.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['IA', 'Agents', 'Produit'],
    body: [
      {
        p: 'Un agent IA dans un produit, c’est un composant logiciel qui utilise un modèle de langage pour décider d’une suite d’actions et les exécuter (appeler une API, remplir un formulaire, chercher une donnée) au lieu de se contenter de répondre. La bonne question n’est pas « faut-il de l’IA ? » mais « quel travail répétitif l’agent peut-il faire à la place de l’utilisateur, de façon fiable ? ». Voici les cas d’usage qui apportent une vraie valeur, ceux qui sont des gadgets, et les pièges à éviter.',
      },
      { h2: 'Agent, chatbot, automatisation : les différences' },
      {
        p: 'Les trois ne se valent pas. Un chatbot répond à une question. Une automatisation exécute une suite d’étapes fixe et prévisible. Un agent, lui, choisit lui-même les étapes en fonction du contexte, avec un objectif à atteindre. Plus l’autonomie est grande, plus la valeur potentielle est forte — mais plus le risque d’erreur et le coût le sont aussi.',
      },
      { h2: 'Les cas d’usage qui valent le coup' },
      {
        ul: [
          'Support client : trier, qualifier et répondre aux demandes courantes en s’appuyant sur votre documentation, avec passage à un humain quand c’est nécessaire.',
          'Traitement de documents : extraire des données de factures, contrats ou emails et les ranger au bon endroit, sans saisie manuelle.',
          'Assistant interne : interroger vos données métier en langage naturel (« quels clients n’ont pas payé ce mois-ci ? ») au lieu d’écrire une requête.',
          'Onboarding et configuration : guider l’utilisateur et préremplir son espace à partir de quelques informations.',
        ],
      },
      { h2: 'Les gadgets à éviter' },
      {
        p: 'Ajouter un chatbot « magique » qui ne connaît pas vos données, un bouton « générer avec l’IA » qui produit du texte que personne ne relit, ou un agent autonome lâché sur une action irréversible (envoyer de l’argent, supprimer des données) : ce sont des démos, pas des produits. Un bon cas d’usage se reconnaît à une chose simple — l’utilisateur gagne du temps mesurable et fait confiance au résultat.',
      },
      {
        quote:
          'Un agent IA n’a de valeur que s’il fait gagner du temps mesurable sur une tâche que l’utilisateur déteste — le reste, c’est de la démo.',
      },
      { h2: 'Les pièges : coûts, fiabilité, UX' },
      {
        p: 'Trois pièges reviennent systématiquement. Le coût : chaque appel au modèle se paie, et un agent qui « réfléchit » en boucle peut multiplier la facture par dix — il faut plafonner les étapes et mettre du cache. La fiabilité : un modèle se trompe, il faut donc valider ses sorties, garder un humain dans la boucle sur les actions sensibles, et journaliser chaque décision. L’UX : montrez ce que fait l’agent, laissez l’utilisateur corriger, et ne masquez jamais une erreur derrière une phrase confiante.',
      },
      { h2: 'Comment démarrer petit' },
      {
        p: 'Commencez par un seul cas d’usage, mesurable, sur une action réversible. Donnez à l’agent un périmètre étroit et des outils précis plutôt qu’une liberté totale. Mesurez le taux de réussite et le coût par tâche avant d’élargir. C’est exactement l’approche d’une V1 : chez Khufu, on intègre une première brique d’agent utile dans un produit prêt pour la production, livré en 7 jours à prix fixe (15 000 €) — de quoi valider la valeur réelle avant d’investir davantage.',
      },
    ],
  },
  en: {
    slug: 'agents-ia-dans-un-produit',
    title: 'AI agents in a product: the use cases worth building',
    excerpt:
      'What an AI agent in a product is, high-value use cases vs gimmicks, the pitfalls (cost, reliability, UX) and how to start small.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['AI', 'Agents', 'Product'],
    body: [
      {
        p: 'An AI agent in a product is a software component that uses a language model to decide on a sequence of actions and carry them out (call an API, fill a form, look up data) instead of just answering. The right question is not “do we need AI?” but “what repetitive work can the agent do for the user, reliably?”. Here are the use cases that deliver real value, the ones that are gimmicks, and the pitfalls to avoid.',
      },
      { h2: 'Agent, chatbot, automation: the differences' },
      {
        p: 'The three are not equal. A chatbot answers a question. An automation runs a fixed, predictable set of steps. An agent chooses its own steps based on context, with a goal to reach. The more autonomy, the higher the potential value — but the higher the risk of error and the cost, too.',
      },
      { h2: 'The use cases worth it' },
      {
        ul: [
          'Customer support: triage, qualify and answer common requests using your documentation, handing off to a human when needed.',
          'Document processing: extract data from invoices, contracts or emails and file it in the right place, no manual entry.',
          'Internal assistant: query your business data in plain language (“which customers haven’t paid this month?”) instead of writing a query.',
          'Onboarding and setup: guide the user and pre-fill their workspace from a few pieces of information.',
        ],
      },
      { h2: 'The gimmicks to avoid' },
      {
        p: 'Adding a “magic” chatbot that doesn’t know your data, a “generate with AI” button that produces text nobody reads, or an autonomous agent let loose on an irreversible action (send money, delete data): those are demos, not products. A good use case is recognisable by one simple thing — the user saves measurable time and trusts the result.',
      },
      {
        quote:
          'An AI agent is only valuable if it saves measurable time on a task the user hates — the rest is just a demo.',
      },
      { h2: 'The pitfalls: cost, reliability, UX' },
      {
        p: 'Three pitfalls come up every time. Cost: every model call is paid for, and an agent that “thinks” in a loop can multiply the bill tenfold — cap the steps and add caching. Reliability: a model makes mistakes, so validate its outputs, keep a human in the loop on sensitive actions, and log every decision. UX: show what the agent is doing, let the user correct it, and never hide an error behind a confident sentence.',
      },
      { h2: 'How to start small' },
      {
        p: 'Start with a single, measurable use case on a reversible action. Give the agent a narrow scope and precise tools rather than total freedom. Measure the success rate and the cost per task before expanding. That is exactly the V1 approach: at Khufu we ship a first useful agent building block inside a production-ready product, delivered in 7 days at a fixed price (€15,000) — enough to validate real value before investing further.',
      },
    ],
  },
  es: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Agentes de IA en un producto: los casos de uso que valen la pena',
    excerpt:
      'Qué es un agente de IA en un producto, los casos de uso de valor real frente a los gadgets, las trampas (coste, fiabilidad, UX) y cómo empezar pequeño.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['IA', 'Agentes', 'Producto'],
    body: [
      {
        p: 'Un agente de IA en un producto es un componente de software que usa un modelo de lenguaje para decidir una secuencia de acciones y ejecutarlas (llamar a una API, rellenar un formulario, buscar un dato) en lugar de limitarse a responder. La pregunta correcta no es « ¿necesitamos IA? » sino « ¿qué trabajo repetitivo puede hacer el agente por el usuario, de forma fiable? ». Estos son los casos de uso que aportan valor real, los que son gadgets y las trampas que evitar.',
      },
      { h2: 'Agente, chatbot, automatización: las diferencias' },
      {
        p: 'Los tres no son lo mismo. Un chatbot responde a una pregunta. Una automatización ejecuta una serie de pasos fija y previsible. Un agente elige él mismo los pasos según el contexto, con un objetivo que alcanzar. A más autonomía, mayor valor potencial, pero también mayor riesgo de error y mayor coste.',
      },
      { h2: 'Los casos de uso que valen la pena' },
      {
        ul: [
          'Soporte al cliente: clasificar, cualificar y responder las solicitudes habituales apoyándose en tu documentación, con paso a un humano cuando hace falta.',
          'Procesamiento de documentos: extraer datos de facturas, contratos o correos y guardarlos en el sitio correcto, sin entrada manual.',
          'Asistente interno: consultar tus datos de negocio en lenguaje natural (« ¿qué clientes no han pagado este mes? ») en vez de escribir una consulta.',
          'Onboarding y configuración: guiar al usuario y prerrellenar su espacio a partir de unos pocos datos.',
        ],
      },
      { h2: 'Los gadgets que evitar' },
      {
        p: 'Añadir un chatbot « mágico » que no conoce tus datos, un botón « generar con IA » que produce texto que nadie revisa, o un agente autónomo suelto sobre una acción irreversible (enviar dinero, borrar datos): eso son demos, no productos. Un buen caso de uso se reconoce por algo simple: el usuario ahorra tiempo medible y confía en el resultado.',
      },
      {
        quote:
          'Un agente de IA solo tiene valor si ahorra tiempo medible en una tarea que el usuario odia; el resto es una demo.',
      },
      { h2: 'Las trampas: coste, fiabilidad, UX' },
      {
        p: 'Tres trampas aparecen siempre. El coste: cada llamada al modelo se paga, y un agente que « piensa » en bucle puede multiplicar la factura por diez; hay que limitar los pasos y añadir caché. La fiabilidad: un modelo se equivoca, así que valida sus salidas, mantén a un humano en el bucle en las acciones sensibles y registra cada decisión. La UX: muestra lo que hace el agente, deja que el usuario lo corrija y nunca ocultes un error tras una frase segura.',
      },
      { h2: 'Cómo empezar pequeño' },
      {
        p: 'Empieza por un solo caso de uso, medible, sobre una acción reversible. Da al agente un alcance estrecho y herramientas precisas en lugar de libertad total. Mide la tasa de éxito y el coste por tarea antes de ampliar. Es exactamente el enfoque de una V1: en Khufu integramos un primer bloque de agente útil dentro de un producto listo para producción, entregado en 7 días a precio fijo (15 000 €), suficiente para validar el valor real antes de invertir más.',
      },
    ],
  },
  de: {
    slug: 'agents-ia-dans-un-produit',
    title: 'KI-Agenten in einem Produkt: die Anwendungsfälle, die sich lohnen',
    excerpt:
      'Was ein KI-Agent in einem Produkt ist, Anwendungsfälle mit echtem Mehrwert vs. Spielereien, die Fallstricke (Kosten, Zuverlässigkeit, UX) und wie man klein anfängt.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['KI', 'Agenten', 'Produkt'],
    body: [
      {
        p: 'Ein KI-Agent in einem Produkt ist eine Softwarekomponente, die ein Sprachmodell nutzt, um eine Abfolge von Aktionen zu entscheiden und auszuführen (eine API aufrufen, ein Formular ausfüllen, Daten nachschlagen), statt nur zu antworten. Die richtige Frage lautet nicht „Brauchen wir KI?“, sondern „Welche wiederkehrende Arbeit kann der Agent zuverlässig für den Nutzer übernehmen?“. Hier sind die Anwendungsfälle mit echtem Mehrwert, die Spielereien und die Fallstricke, die es zu vermeiden gilt.',
      },
      { h2: 'Agent, Chatbot, Automatisierung: die Unterschiede' },
      {
        p: 'Die drei sind nicht dasselbe. Ein Chatbot beantwortet eine Frage. Eine Automatisierung führt eine feste, vorhersehbare Abfolge von Schritten aus. Ein Agent wählt seine Schritte je nach Kontext selbst und verfolgt dabei ein Ziel. Je mehr Autonomie, desto höher der potenzielle Mehrwert — aber auch das Fehlerrisiko und die Kosten.',
      },
      { h2: 'Die Anwendungsfälle, die sich lohnen' },
      {
        ul: [
          'Kundensupport: gängige Anfragen anhand Ihrer Dokumentation sortieren, qualifizieren und beantworten, mit Übergabe an einen Menschen, wenn nötig.',
          'Dokumentenverarbeitung: Daten aus Rechnungen, Verträgen oder E-Mails extrahieren und am richtigen Ort ablegen, ohne manuelle Eingabe.',
          'Interner Assistent: Ihre Geschäftsdaten in natürlicher Sprache abfragen („welche Kunden haben diesen Monat nicht bezahlt?“) statt eine Abfrage zu schreiben.',
          'Onboarding und Einrichtung: den Nutzer führen und seinen Arbeitsbereich aus wenigen Angaben vorausfüllen.',
        ],
      },
      { h2: 'Die Spielereien, die man vermeiden sollte' },
      {
        p: 'Ein „magischer“ Chatbot, der Ihre Daten nicht kennt, ein „Mit KI generieren“-Button, der Text produziert, den niemand liest, oder ein autonomer Agent, der auf eine unumkehrbare Aktion losgelassen wird (Geld senden, Daten löschen): das sind Demos, keine Produkte. Ein guter Anwendungsfall erkennt man an einer einfachen Sache — der Nutzer spart messbar Zeit und vertraut dem Ergebnis.',
      },
      {
        quote:
          'Ein KI-Agent hat nur Wert, wenn er messbar Zeit bei einer Aufgabe spart, die der Nutzer hasst — der Rest ist nur eine Demo.',
      },
      { h2: 'Die Fallstricke: Kosten, Zuverlässigkeit, UX' },
      {
        p: 'Drei Fallstricke tauchen immer wieder auf. Kosten: Jeder Modellaufruf kostet Geld, und ein Agent, der in Schleife „nachdenkt“, kann die Rechnung verzehnfachen — begrenzen Sie die Schritte und setzen Sie Caching ein. Zuverlässigkeit: Ein Modell macht Fehler, also validieren Sie seine Ausgaben, halten Sie bei sensiblen Aktionen einen Menschen in der Schleife und protokollieren Sie jede Entscheidung. UX: Zeigen Sie, was der Agent tut, lassen Sie den Nutzer korrigieren und verstecken Sie einen Fehler nie hinter einem selbstsicheren Satz.',
      },
      { h2: 'Wie man klein anfängt' },
      {
        p: 'Beginnen Sie mit einem einzigen, messbaren Anwendungsfall bei einer umkehrbaren Aktion. Geben Sie dem Agenten einen engen Rahmen und präzise Werkzeuge statt völliger Freiheit. Messen Sie die Erfolgsquote und die Kosten pro Aufgabe, bevor Sie erweitern. Genau das ist der V1-Ansatz: Bei Khufu integrieren wir einen ersten nützlichen Agenten-Baustein in ein produktionsreifes Produkt, geliefert in 7 Tagen zum Festpreis (15.000 €) — genug, um den echten Mehrwert zu validieren, bevor Sie weiter investieren.',
      },
    ],
  },
  it: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Agenti IA in un prodotto: i casi d’uso che valgono la pena',
    excerpt:
      'Cos’è un agente IA in un prodotto, i casi d’uso a valore reale vs i gadget, le trappole (costi, affidabilità, UX) e come partire in piccolo.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['IA', 'Agenti', 'Prodotto'],
    body: [
      {
        p: 'Un agente IA in un prodotto è un componente software che usa un modello linguistico per decidere una sequenza di azioni ed eseguirle (chiamare un’API, compilare un modulo, cercare un dato) invece di limitarsi a rispondere. La domanda giusta non è « serve l’IA? » ma « quale lavoro ripetitivo può fare l’agente al posto dell’utente, in modo affidabile? ». Ecco i casi d’uso che portano valore reale, quelli che sono gadget e le trappole da evitare.',
      },
      { h2: 'Agente, chatbot, automazione: le differenze' },
      {
        p: 'I tre non sono la stessa cosa. Un chatbot risponde a una domanda. Un’automazione esegue una serie di passi fissa e prevedibile. Un agente sceglie da solo i passi in base al contesto, con un obiettivo da raggiungere. Più autonomia c’è, più alto è il valore potenziale, ma anche il rischio di errore e il costo.',
      },
      { h2: 'I casi d’uso che valgono la pena' },
      {
        ul: [
          'Assistenza clienti: smistare, qualificare e rispondere alle richieste comuni basandosi sulla tua documentazione, con passaggio a un umano quando serve.',
          'Elaborazione di documenti: estrarre dati da fatture, contratti o email e archiviarli nel posto giusto, senza inserimento manuale.',
          'Assistente interno: interrogare i tuoi dati aziendali in linguaggio naturale (« quali clienti non hanno pagato questo mese? ») invece di scrivere una query.',
          'Onboarding e configurazione: guidare l’utente e precompilare il suo spazio a partire da poche informazioni.',
        ],
      },
      { h2: 'I gadget da evitare' },
      {
        p: 'Aggiungere un chatbot « magico » che non conosce i tuoi dati, un pulsante « genera con l’IA » che produce testo che nessuno rilegge, o un agente autonomo lasciato libero su un’azione irreversibile (inviare denaro, cancellare dati): sono demo, non prodotti. Un buon caso d’uso si riconosce da una cosa semplice: l’utente risparmia tempo misurabile e si fida del risultato.',
      },
      {
        quote:
          'Un agente IA ha valore solo se fa risparmiare tempo misurabile su un compito che l’utente detesta — il resto è solo una demo.',
      },
      { h2: 'Le trappole: costi, affidabilità, UX' },
      {
        p: 'Tre trappole tornano sempre. Il costo: ogni chiamata al modello si paga, e un agente che « ragiona » in loop può decuplicare la fattura — occorre limitare i passi e aggiungere una cache. L’affidabilità: un modello sbaglia, quindi valida i suoi output, tieni un umano nel loop sulle azioni sensibili e registra ogni decisione. La UX: mostra cosa fa l’agente, lascia che l’utente lo corregga e non nascondere mai un errore dietro una frase sicura di sé.',
      },
      { h2: 'Come partire in piccolo' },
      {
        p: 'Parti da un solo caso d’uso, misurabile, su un’azione reversibile. Dai all’agente un perimetro stretto e strumenti precisi invece della libertà totale. Misura il tasso di successo e il costo per attività prima di ampliare. È esattamente l’approccio di una V1: in Khufu integriamo un primo blocco di agente utile in un prodotto pronto per la produzione, consegnato in 7 giorni a prezzo fisso (15.000 €), abbastanza per validare il valore reale prima di investire di più.',
      },
    ],
  },
  pt: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Agentes de IA num produto: os casos de uso que valem a pena',
    excerpt:
      'O que é um agente de IA num produto, os casos de uso de valor real vs os gadgets, as armadilhas (custo, fiabilidade, UX) e como começar pequeno.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['IA', 'Agentes', 'Produto'],
    body: [
      {
        p: 'Um agente de IA num produto é um componente de software que usa um modelo de linguagem para decidir uma sequência de ações e executá-las (chamar uma API, preencher um formulário, procurar um dado) em vez de apenas responder. A pergunta certa não é « precisamos de IA? » mas « que trabalho repetitivo pode o agente fazer pelo utilizador, de forma fiável? ». Aqui estão os casos de uso que trazem valor real, os que são gadgets e as armadilhas a evitar.',
      },
      { h2: 'Agente, chatbot, automação: as diferenças' },
      {
        p: 'Os três não são iguais. Um chatbot responde a uma pergunta. Uma automação executa uma série de passos fixa e previsível. Um agente escolhe ele próprio os passos conforme o contexto, com um objetivo a atingir. Quanto mais autonomia, maior o valor potencial, mas também maior o risco de erro e o custo.',
      },
      { h2: 'Os casos de uso que valem a pena' },
      {
        ul: [
          'Suporte ao cliente: triar, qualificar e responder aos pedidos comuns com base na sua documentação, com passagem a um humano quando necessário.',
          'Processamento de documentos: extrair dados de faturas, contratos ou emails e arquivá-los no sítio certo, sem introdução manual.',
          'Assistente interno: consultar os seus dados de negócio em linguagem natural (« que clientes não pagaram este mês? ») em vez de escrever uma consulta.',
          'Onboarding e configuração: guiar o utilizador e preencher previamente o seu espaço a partir de algumas informações.',
        ],
      },
      { h2: 'Os gadgets a evitar' },
      {
        p: 'Adicionar um chatbot « mágico » que não conhece os seus dados, um botão « gerar com IA » que produz texto que ninguém revê, ou um agente autónomo solto sobre uma ação irreversível (enviar dinheiro, apagar dados): isso são demos, não produtos. Um bom caso de uso reconhece-se por uma coisa simples: o utilizador poupa tempo mensurável e confia no resultado.',
      },
      {
        quote:
          'Um agente de IA só tem valor se poupar tempo mensurável numa tarefa que o utilizador detesta — o resto é só uma demo.',
      },
      { h2: 'As armadilhas: custo, fiabilidade, UX' },
      {
        p: 'Três armadilhas voltam sempre. O custo: cada chamada ao modelo paga-se, e um agente que « pensa » em ciclo pode multiplicar a fatura por dez — é preciso limitar os passos e adicionar cache. A fiabilidade: um modelo erra, por isso valide as suas saídas, mantenha um humano no ciclo nas ações sensíveis e registe cada decisão. A UX: mostre o que o agente faz, deixe o utilizador corrigir e nunca esconda um erro atrás de uma frase confiante.',
      },
      { h2: 'Como começar pequeno' },
      {
        p: 'Comece por um único caso de uso, mensurável, sobre uma ação reversível. Dê ao agente um âmbito estreito e ferramentas precisas em vez de liberdade total. Meça a taxa de sucesso e o custo por tarefa antes de expandir. É exatamente a abordagem de uma V1: na Khufu integramos um primeiro bloco de agente útil num produto pronto para produção, entregue em 7 dias a preço fixo (15 000 €), o suficiente para validar o valor real antes de investir mais.',
      },
    ],
  },
  nl: {
    slug: 'agents-ia-dans-un-produit',
    title: 'AI-agents in een product: de use cases die de moeite waard zijn',
    excerpt:
      'Wat een AI-agent in een product is, use cases met echte waarde vs gimmicks, de valkuilen (kosten, betrouwbaarheid, UX) en hoe je klein begint.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['AI', 'Agents', 'Product'],
    body: [
      {
        p: 'Een AI-agent in een product is een softwarecomponent die een taalmodel gebruikt om een reeks acties te bepalen en uit te voeren (een API aanroepen, een formulier invullen, gegevens opzoeken) in plaats van alleen te antwoorden. De juiste vraag is niet „hebben we AI nodig?” maar „welk repetitief werk kan de agent betrouwbaar voor de gebruiker doen?”. Dit zijn de use cases die echte waarde leveren, de gimmicks en de valkuilen die je moet vermijden.',
      },
      { h2: 'Agent, chatbot, automatisering: de verschillen' },
      {
        p: 'De drie zijn niet gelijk. Een chatbot beantwoordt een vraag. Een automatisering voert een vaste, voorspelbare reeks stappen uit. Een agent kiest zelf de stappen op basis van de context, met een doel voor ogen. Hoe meer autonomie, hoe hoger de potentiële waarde — maar ook hoe groter het risico op fouten en de kosten.',
      },
      { h2: 'De use cases die de moeite waard zijn' },
      {
        ul: [
          'Klantenservice: veelvoorkomende verzoeken triëren, kwalificeren en beantwoorden op basis van je documentatie, met overdracht aan een mens wanneer nodig.',
          'Documentverwerking: gegevens uit facturen, contracten of e-mails halen en op de juiste plek opslaan, zonder handmatige invoer.',
          'Interne assistent: je bedrijfsgegevens in gewone taal bevragen („welke klanten hebben deze maand niet betaald?”) in plaats van een query te schrijven.',
          'Onboarding en configuratie: de gebruiker begeleiden en zijn werkruimte vooraf invullen op basis van een paar gegevens.',
        ],
      },
      { h2: 'De gimmicks die je moet vermijden' },
      {
        p: 'Een „magische” chatbot toevoegen die je gegevens niet kent, een „genereren met AI”-knop die tekst produceert die niemand naleest, of een autonome agent losgelaten op een onomkeerbare actie (geld versturen, gegevens verwijderen): dat zijn demo’s, geen producten. Een goede use case herken je aan één simpel ding — de gebruiker bespaart meetbaar tijd en vertrouwt het resultaat.',
      },
      {
        quote:
          'Een AI-agent heeft alleen waarde als hij meetbaar tijd bespaart op een taak die de gebruiker haat — de rest is maar een demo.',
      },
      { h2: 'De valkuilen: kosten, betrouwbaarheid, UX' },
      {
        p: 'Drie valkuilen komen steeds terug. Kosten: elke modelaanroep kost geld, en een agent die in een lus „nadenkt” kan de rekening vertienvoudigen — begrens de stappen en voeg caching toe. Betrouwbaarheid: een model maakt fouten, dus valideer de uitvoer, houd een mens in de lus bij gevoelige acties en log elke beslissing. UX: laat zien wat de agent doet, laat de gebruiker corrigeren en verberg een fout nooit achter een zelfverzekerde zin.',
      },
      { h2: 'Hoe je klein begint' },
      {
        p: 'Begin met één meetbare use case op een omkeerbare actie. Geef de agent een smalle scope en precieze tools in plaats van volledige vrijheid. Meet het slagingspercentage en de kosten per taak voordat je uitbreidt. Dat is precies de V1-aanpak: bij Khufu integreren we een eerste nuttige agent-bouwsteen in een productieklaar product, geleverd in 7 dagen tegen een vaste prijs (€15.000) — genoeg om de echte waarde te valideren voordat je verder investeert.',
      },
    ],
  },
  ar: {
    slug: 'agents-ia-dans-un-produit',
    title: 'وكلاء الذكاء الاصطناعي في المنتج: حالات الاستخدام التي تستحق العناء',
    excerpt:
      'ما هو وكيل الذكاء الاصطناعي في المنتج، حالات الاستخدام ذات القيمة الحقيقية مقابل الحيل، والمزالق (التكلفة، الموثوقية، تجربة المستخدم) وكيف تبدأ صغيرًا.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['الذكاء الاصطناعي', 'الوكلاء', 'المنتج'],
    body: [
      {
        p: 'وكيل الذكاء الاصطناعي في المنتج هو مكوّن برمجي يستخدم نموذجًا لغويًا ليقرر سلسلة من الإجراءات وينفّذها (استدعاء API، ملء نموذج، البحث عن بيانات) بدلًا من الاكتفاء بالإجابة. السؤال الصحيح ليس «هل نحتاج إلى الذكاء الاصطناعي؟» بل «ما العمل المتكرر الذي يمكن للوكيل أن يقوم به نيابة عن المستخدم بشكل موثوق؟». إليك حالات الاستخدام التي تقدّم قيمة حقيقية، وتلك التي هي مجرد حيل، والمزالق التي يجب تجنّبها.',
      },
      { h2: 'الوكيل والمحادثة الآلية والأتمتة: الفروق' },
      {
        p: 'الثلاثة ليست سواء. المحادثة الآلية (chatbot) تجيب على سؤال. الأتمتة تنفّذ سلسلة ثابتة ومتوقّعة من الخطوات. أما الوكيل فيختار خطواته بنفسه حسب السياق، ساعيًا إلى هدف محدد. كلما زادت الاستقلالية زادت القيمة المحتملة، لكن زاد أيضًا خطر الخطأ والتكلفة.',
      },
      { h2: 'حالات الاستخدام التي تستحق العناء' },
      {
        ul: [
          'دعم العملاء: فرز الطلبات الشائعة وتأهيلها والرد عليها اعتمادًا على وثائقك، مع تحويلها إلى إنسان عند الحاجة.',
          'معالجة المستندات: استخراج البيانات من الفواتير أو العقود أو رسائل البريد وترتيبها في المكان الصحيح دون إدخال يدوي.',
          'مساعد داخلي: الاستعلام عن بيانات عملك بلغة طبيعية («أي عملاء لم يدفعوا هذا الشهر؟») بدلًا من كتابة استعلام.',
          'التهيئة والإعداد (onboarding): إرشاد المستخدم وملء مساحته مسبقًا انطلاقًا من بضع معلومات.',
        ],
      },
      { h2: 'الحيل التي يجب تجنّبها' },
      {
        p: 'إضافة chatbot «سحري» لا يعرف بياناتك، أو زر «توليد بالذكاء الاصطناعي» ينتج نصًا لا يراجعه أحد، أو وكيل مستقل يُطلق على إجراء لا رجعة فيه (إرسال أموال، حذف بيانات): هذه عروض توضيحية لا منتجات. حالة الاستخدام الجيدة تُعرف بأمر بسيط — المستخدم يوفّر وقتًا قابلًا للقياس ويثق في النتيجة.',
      },
      {
        quote:
          'لا قيمة لوكيل الذكاء الاصطناعي إلا إذا وفّر وقتًا قابلًا للقياس في مهمة يكرهها المستخدم — وما عدا ذلك مجرد عرض توضيحي.',
      },
      { h2: 'المزالق: التكلفة، الموثوقية، تجربة المستخدم' },
      {
        p: 'ثلاثة مزالق تتكرر دائمًا. التكلفة: كل استدعاء للنموذج له ثمن، والوكيل الذي «يفكّر» في حلقة قد يضاعف الفاتورة عشر مرات — يجب تحديد سقف للخطوات وإضافة تخزين مؤقت (cache). الموثوقية: النموذج يخطئ، لذا تحقّق من مخرجاته، وأبقِ إنسانًا ضمن الحلقة في الإجراءات الحساسة، وسجّل كل قرار. تجربة المستخدم: أظهر ما يفعله الوكيل، ودع المستخدم يصحّح، ولا تُخفِ خطأً خلف جملة واثقة أبدًا.',
      },
      { h2: 'كيف تبدأ صغيرًا' },
      {
        p: 'ابدأ بحالة استخدام واحدة قابلة للقياس على إجراء قابل للتراجع. امنح الوكيل نطاقًا ضيقًا وأدوات دقيقة بدلًا من حرية مطلقة. قِس معدل النجاح والتكلفة لكل مهمة قبل التوسّع. هذا بالضبط نهج الـ V1: في Khufu ندمج أول لبنة وكيل مفيدة داخل منتج جاهز للإنتاج، يُسلَّم في 7 أيام بسعر ثابت (15,000 €) — ما يكفي للتحقق من القيمة الحقيقية قبل الاستثمار أكثر.',
      },
    ],
  },
  pl: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Agenci AI w produkcie: przypadki użycia, które są tego warte',
    excerpt:
      'Czym jest agent AI w produkcie, przypadki użycia o realnej wartości vs gadżety, pułapki (koszt, niezawodność, UX) i jak zacząć od małego.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['AI', 'Agenci', 'Produkt'],
    body: [
      {
        p: 'Agent AI w produkcie to komponent oprogramowania, który używa modelu językowego, aby zdecydować o sekwencji działań i je wykonać (wywołać API, wypełnić formularz, wyszukać dane), zamiast tylko odpowiadać. Właściwe pytanie nie brzmi „czy potrzebujemy AI?”, lecz „jaką powtarzalną pracę agent może wykonać za użytkownika w sposób niezawodny?”. Oto przypadki użycia dające realną wartość, te będące gadżetami oraz pułapki, których należy unikać.',
      },
      { h2: 'Agent, chatbot, automatyzacja: różnice' },
      {
        p: 'Te trzy rzeczy nie są sobie równe. Chatbot odpowiada na pytanie. Automatyzacja wykonuje stały, przewidywalny zestaw kroków. Agent sam wybiera kroki w zależności od kontekstu, dążąc do celu. Im większa autonomia, tym wyższa potencjalna wartość — ale też większe ryzyko błędu i koszt.',
      },
      { h2: 'Przypadki użycia, które są tego warte' },
      {
        ul: [
          'Obsługa klienta: segregowanie, kwalifikowanie i odpowiadanie na typowe zgłoszenia w oparciu o Twoją dokumentację, z przekazaniem do człowieka, gdy trzeba.',
          'Przetwarzanie dokumentów: wyodrębnianie danych z faktur, umów czy e-maili i umieszczanie ich we właściwym miejscu, bez ręcznego wprowadzania.',
          'Asystent wewnętrzny: odpytywanie danych firmowych w języku naturalnym („którzy klienci nie zapłacili w tym miesiącu?”) zamiast pisania zapytania.',
          'Onboarding i konfiguracja: prowadzenie użytkownika i wstępne wypełnianie jego przestrzeni na podstawie kilku informacji.',
        ],
      },
      { h2: 'Gadżety, których należy unikać' },
      {
        p: 'Dodanie „magicznego” chatbota, który nie zna Twoich danych, przycisku „generuj z AI” tworzącego tekst, którego nikt nie sprawdza, albo autonomicznego agenta puszczonego na nieodwracalne działanie (wysłanie pieniędzy, usunięcie danych): to są dema, nie produkty. Dobry przypadek użycia poznasz po jednej prostej rzeczy — użytkownik oszczędza mierzalny czas i ufa wynikowi.',
      },
      {
        quote:
          'Agent AI ma wartość tylko wtedy, gdy oszczędza mierzalny czas w zadaniu, którego użytkownik nienawidzi — reszta to tylko demo.',
      },
      { h2: 'Pułapki: koszt, niezawodność, UX' },
      {
        p: 'Trzy pułapki wracają za każdym razem. Koszt: każde wywołanie modelu kosztuje, a agent, który „myśli” w pętli, może zwielokrotnić rachunek dziesięciokrotnie — ogranicz liczbę kroków i dodaj cache. Niezawodność: model się myli, więc waliduj jego wyniki, trzymaj człowieka w pętli przy wrażliwych działaniach i loguj każdą decyzję. UX: pokaż, co robi agent, pozwól użytkownikowi poprawić i nigdy nie ukrywaj błędu za pewnym siebie zdaniem.',
      },
      { h2: 'Jak zacząć od małego' },
      {
        p: 'Zacznij od jednego, mierzalnego przypadku użycia na odwracalnym działaniu. Daj agentowi wąski zakres i precyzyjne narzędzia zamiast pełnej swobody. Zmierz wskaźnik sukcesu i koszt na zadanie, zanim rozszerzysz. To dokładnie podejście V1: w Khufu integrujemy pierwszy użyteczny klocek agenta w produkcie gotowym do produkcji, dostarczonym w 7 dni w stałej cenie (15 000 €) — na tyle, by zweryfikować realną wartość przed dalszą inwestycją.',
      },
    ],
  },
  tr: {
    slug: 'agents-ia-dans-un-produit',
    title: 'Bir üründe yapay zeka ajanları: değmeye değer kullanım senaryoları',
    excerpt:
      'Bir üründe yapay zeka ajanı nedir, gerçek değer katan kullanım senaryoları ile gösterişten ibaret olanlar, tuzaklar (maliyet, güvenilirlik, UX) ve küçük başlamak.',
    date: '2026-03-04',
    readingMinutes: 6,
    tags: ['Yapay Zeka', 'Ajanlar', 'Ürün'],
    body: [
      {
        p: 'Bir üründe yapay zeka ajanı, yalnızca yanıt vermek yerine bir eylem dizisine karar vermek ve bunları yürütmek (bir API çağırmak, bir form doldurmak, veri aramak) için bir dil modeli kullanan bir yazılım bileşenidir. Doğru soru « yapay zekaya ihtiyacımız var mı? » değil, « ajan, kullanıcı yerine hangi tekrarlayan işi güvenilir bir şekilde yapabilir? » sorusudur. İşte gerçek değer katan kullanım senaryoları, gösterişten ibaret olanlar ve kaçınılması gereken tuzaklar.',
      },
      { h2: 'Ajan, chatbot, otomasyon: farklar' },
      {
        p: 'Üçü eşit değildir. Bir chatbot bir soruyu yanıtlar. Bir otomasyon sabit ve öngörülebilir bir adım dizisini çalıştırır. Bir ajan ise ulaşacağı bir hedefle, adımları bağlama göre kendisi seçer. Özerklik arttıkça potansiyel değer de artar — ama hata riski ve maliyet de artar.',
      },
      { h2: 'Değmeye değer kullanım senaryoları' },
      {
        ul: [
          'Müşteri desteği: yaygın talepleri dokümantasyonunuza dayanarak ayıklamak, nitelendirmek ve yanıtlamak, gerektiğinde bir insana devretmek.',
          'Belge işleme: faturalardan, sözleşmelerden veya e-postalardan veri çıkarıp doğru yere yerleştirmek, elle giriş olmadan.',
          'Dahili asistan: iş verilerinizi doğal dilde sorgulamak (« bu ay hangi müşteriler ödeme yapmadı? ») bir sorgu yazmak yerine.',
          'Onboarding ve kurulum: kullanıcıyı yönlendirmek ve birkaç bilgiden yola çıkarak alanını önceden doldurmak.',
        ],
      },
      { h2: 'Kaçınılması gereken gösterişler' },
      {
        p: 'Verilerinizi bilmeyen « sihirli » bir chatbot eklemek, kimsenin okumadığı metin üreten bir « yapay zeka ile oluştur » düğmesi koymak ya da geri alınamaz bir eyleme (para göndermek, veri silmek) salıverilen özerk bir ajan: bunlar demolardır, ürün değil. İyi bir kullanım senaryosu basit bir şeyden anlaşılır — kullanıcı ölçülebilir zaman kazanır ve sonuca güvenir.',
      },
      {
        quote:
          'Bir yapay zeka ajanının değeri, ancak kullanıcının nefret ettiği bir görevde ölçülebilir zaman kazandırıyorsa vardır — gerisi sadece demodur.',
      },
      { h2: 'Tuzaklar: maliyet, güvenilirlik, UX' },
      {
        p: 'Üç tuzak her seferinde geri gelir. Maliyet: her model çağrısının bir bedeli vardır ve döngü içinde « düşünen » bir ajan faturayı on katına çıkarabilir — adımları sınırlayın ve önbellek (cache) ekleyin. Güvenilirlik: model hata yapar, bu yüzden çıktılarını doğrulayın, hassas eylemlerde döngüde bir insan tutun ve her kararı kaydedin. UX: ajanın ne yaptığını gösterin, kullanıcının düzeltmesine izin verin ve bir hatayı asla kendinden emin bir cümlenin arkasına saklamayın.',
      },
      { h2: 'Nasıl küçük başlanır' },
      {
        p: 'Geri alınabilir bir eylem üzerinde tek, ölçülebilir bir kullanım senaryosuyla başlayın. Ajana tam özgürlük yerine dar bir kapsam ve kesin araçlar verin. Genişletmeden önce başarı oranını ve görev başına maliyeti ölçün. Bu tam olarak V1 yaklaşımıdır: Khufu’da, üretime hazır bir ürünün içine ilk faydalı ajan yapı taşını entegre ediyoruz, 7 günde sabit fiyatla (15.000 €) teslim ediyoruz — daha fazla yatırım yapmadan önce gerçek değeri doğrulamaya yetecek kadar.',
      },
    ],
  },
}
