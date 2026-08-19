import type { Locale } from '@/i18n/config'
import { fillLocaleDeep, type LocalizedInput } from '@/i18n/localize'

export type LocalizedText = Record<Locale, string>

export type Project = {
  slug: string
  name: string
  /** Built by Khufu as its own product (vs. client work). */
  internal: boolean
  /** Live URL, if public. */
  url?: string
  year?: number
  /** e.g. "SaaS web", "App mobile", "API + dashboard". */
  type: LocalizedText
  /** One punchy line. */
  tagline: LocalizedText
  /** 2–4 factual sentences — self-sufficient for GEO ingestion. */
  description: LocalizedText
  /** Case-study narrative (optional): the problem being solved. */
  challenge?: LocalizedText
  /** Case-study narrative (optional): how Khufu approached it. */
  approach?: LocalizedText
  /** Named stack — reused for credibility + JSON-LD keywords. */
  stack: string[]
  /** Optional metric lines ("+40% conversion", "10k users"). */
  results?: LocalizedText[]
  /** Screenshot / cover image in /public (e.g. "/images/projects/onestore-link.jpg"). */
  image?: string
  /** Product logo/icon in /public (used on the cover when there's no screenshot, and in the case-study hero). */
  logo?: string
  /** DRAFT: copy to validate/correct with Adrien before it goes live. */
  draft?: boolean
}

// Authoring variant: base languages required, untranslated locales filled from fr.
// French required, other locales optional (filled from fr, translated later).
type FrInput = { fr: string } & Partial<Record<Locale, string>>

type ProjectInput = Omit<Project, 'type' | 'tagline' | 'description' | 'challenge' | 'approach' | 'results'> & {
  type: LocalizedInput
  tagline: LocalizedInput
  description: LocalizedInput
  challenge?: FrInput
  approach?: FrInput
  results?: LocalizedInput[]
}

const projectsData: ProjectInput[] = [
  {
    slug: 'onestore-link',
    name: 'OneStore.link',
    internal: true,
    url: 'https://onestore.link',
    year: 2025,
    image: '/images/projects/onestore-link.webp',
    logo: '/images/products/onestore-link.svg',
    type: { fr: 'SaaS web', en: 'Web SaaS', es: 'SaaS web', de: 'Web-SaaS', it: 'SaaS web', pt: 'SaaS web', nl: 'Web-SaaS', ar: 'SaaS ويب', pl: 'Webowy SaaS', tr: 'Web SaaS' },
    tagline: {
      fr: 'Un lien. Tous les stores.',
      en: 'One link. Every store.',
      es: 'Un enlace. Todas las stores.',
      de: 'Ein Link. Alle Stores.',
      it: 'Un link. Tutti gli store.',
      pt: 'Um link. Todas as lojas.',
      nl: 'Eén link. Alle stores.',
      ar: 'رابط واحد. كل المتاجر.',
      pl: 'Jeden link. Wszystkie sklepy.',
      tr: 'Tek bağlantı. Tüm mağazalar.',
    },
    description: {
      fr: 'OneStore.link crée un lien intelligent unique qui redirige automatiquement les visiteurs iOS et Android vers le bon store — App Store ou Google Play. Sans inscription, gratuit, redirection en moins de 50 ms. Analytics intégrés (PostHog). Conçu et développé par Khufu.',
      en: 'OneStore.link creates a single smart link that automatically routes iOS and Android visitors to the right store — App Store or Google Play. No signup, free, sub-50ms redirect. Built-in analytics (PostHog). Designed and built by Khufu.',
      es: 'OneStore.link crea un único enlace inteligente que redirige automáticamente a los visitantes iOS y Android a la store correcta — App Store o Google Play. Sin registro, gratis, redirección en menos de 50 ms. Analítica integrada (PostHog). Diseñado y desarrollado por Khufu.',
      de: 'OneStore.link erstellt einen einzigen smarten Link, der iOS- und Android-Besucher automatisch zum richtigen Store weiterleitet — App Store oder Google Play. Ohne Anmeldung, kostenlos, Weiterleitung in unter 50 ms. Integrierte Analytics (PostHog). Von Khufu konzipiert und entwickelt.',
      it: 'OneStore.link crea un unico link intelligente che indirizza automaticamente i visitatori iOS e Android allo store giusto — App Store o Google Play. Senza registrazione, gratis, reindirizzamento in meno di 50 ms. Analytics integrati (PostHog). Progettato e sviluppato da Khufu.',
      pt: 'O OneStore.link cria um único link inteligente que encaminha automaticamente os visitantes iOS e Android para a loja certa — App Store ou Google Play. Sem registo, gratuito, redirecionamento em menos de 50 ms. Analytics integrado (PostHog). Concebido e desenvolvido pela Khufu.',
      nl: 'OneStore.link maakt één slimme link die iOS- en Android-bezoekers automatisch naar de juiste store leidt — App Store of Google Play. Zonder registratie, gratis, doorverwijzing in minder dan 50 ms. Ingebouwde analytics (PostHog). Ontworpen en gebouwd door Khufu.',
      ar: 'ينشئ OneStore.link رابطًا ذكيًا واحدًا يوجّه زوّار iOS وAndroid تلقائيًا إلى المتجر الصحيح — App Store أو Google Play. بدون تسجيل، مجاني، إعادة توجيه في أقل من 50 ms. تحليلات مدمجة (PostHog). صُمّم وطُوّر بواسطة Khufu.',
      pl: 'OneStore.link tworzy jeden inteligentny link, który automatycznie kieruje użytkowników iOS i Android do właściwego sklepu — App Store lub Google Play. Bez rejestracji, za darmo, przekierowanie w mniej niż 50 ms. Wbudowana analityka (PostHog). Zaprojektowany i stworzony przez Khufu.',
      tr: 'OneStore.link, iOS ve Android ziyaretçilerini otomatik olarak doğru mağazaya — App Store veya Google Play — yönlendiren tek bir akıllı bağlantı oluşturur. Kayıt gerektirmez, ücretsiz, 50 ms altında yönlendirme. Yerleşik analitik (PostHog). Khufu tarafından tasarlandı ve geliştirildi.',
    },
    challenge: {
      fr: 'Envoyer un utilisateur vers le bon store depuis un seul lien est étonnamment pénible : un lien App Store ne fonctionne pas sur Android, et inversement. Résultat, des utilisateurs perdus au moment le plus critique — juste avant le téléchargement.',
      en: "Sending a user to the right store from a single link is surprisingly painful: an App Store link doesn't work on Android, and vice versa. The result: users lost at the most critical moment — right before the download.",
      es: 'Enviar a un usuario a la tienda correcta desde un único enlace es sorprendentemente complicado: un enlace de App Store no funciona en Android, y viceversa. El resultado: usuarios perdidos en el momento más crítico, justo antes de la descarga.',
      de: 'Einen Nutzer über einen einzigen Link in den richtigen Store zu leiten, ist erstaunlich mühsam: Ein App-Store-Link funktioniert nicht auf Android und umgekehrt. Die Folge: verlorene Nutzer im kritischsten Moment — kurz vor dem Download.',
      it: 'Portare un utente allo store giusto da un unico link è sorprendentemente complicato: un link App Store non funziona su Android, e viceversa. Il risultato: utenti persi nel momento più critico — proprio prima del download.',
      pt: 'Enviar um utilizador para a loja certa a partir de um único link é surpreendentemente complicado: um link da App Store não funciona no Android, e vice-versa. O resultado: utilizadores perdidos no momento mais crítico — mesmo antes do download.',
      nl: 'Een gebruiker via één enkele link naar de juiste store sturen is verrassend lastig: een App Store-link werkt niet op Android, en andersom. Het gevolg: verloren gebruikers op het meest cruciale moment — vlak voor de download.',
      ar: 'إرسال المستخدم إلى المتجر الصحيح من رابط واحد أمر مُتعب بشكل مفاجئ: رابط App Store لا يعمل على Android، والعكس صحيح. والنتيجة: فقدان المستخدمين في أكثر اللحظات حرجًا — قبل التنزيل مباشرةً.',
      pl: 'Skierowanie użytkownika do właściwego sklepu z jednego linku jest zaskakująco uciążliwe: link App Store nie działa na Androidzie i odwrotnie. W efekcie tracisz użytkowników w najbardziej krytycznym momencie — tuż przed pobraniem.',
      tr: 'Bir kullanıcıyı tek bir bağlantıdan doğru mağazaya yönlendirmek şaşırtıcı derecede zahmetlidir: bir App Store bağlantısı Android’de çalışmaz, tam tersi de geçerlidir. Sonuç: en kritik anda — indirmeden hemen önce — kaybedilen kullanıcılar.',
    },
    approach: {
      fr: 'Un lien intelligent unique qui détecte l’OS du visiteur et le redirige automatiquement vers l’App Store ou Google Play en moins de 50 ms. Sans inscription, gratuit, avec des analytics intégrés pour suivre les conversions.',
      en: "A single smart link that detects the visitor's OS and automatically redirects them to the App Store or Google Play in under 50 ms. No signup, free, with built-in analytics to track conversions.",
      es: 'Un único enlace inteligente que detecta el sistema operativo del visitante y lo redirige automáticamente a la App Store o Google Play en menos de 50 ms. Sin registro, gratis y con analítica integrada para seguir las conversiones.',
      de: 'Ein einziger intelligenter Link, der das Betriebssystem des Besuchers erkennt und ihn automatisch in weniger als 50 ms zum App Store oder zu Google Play weiterleitet. Ohne Anmeldung, kostenlos, mit integrierter Analytik zur Verfolgung der Conversions.',
      it: 'Un unico link intelligente che rileva il sistema operativo del visitatore e lo reindirizza automaticamente all’App Store o a Google Play in meno di 50 ms. Senza registrazione, gratuito, con analytics integrate per monitorare le conversioni.',
      pt: 'Um único link inteligente que deteta o sistema operativo do visitante e o redireciona automaticamente para a App Store ou Google Play em menos de 50 ms. Sem registo, gratuito e com analítica integrada para acompanhar as conversões.',
      nl: 'Eén slimme link die het besturingssysteem van de bezoeker detecteert en hem in minder dan 50 ms automatisch doorstuurt naar de App Store of Google Play. Zonder registratie, gratis, met ingebouwde analytics om conversies te volgen.',
      ar: 'رابط ذكي واحد يكتشف نظام تشغيل الزائر ويعيد توجيهه تلقائيًا إلى App Store أو Google Play في أقل من 50 ms. بدون تسجيل، مجانًا، مع تحليلات مدمجة لتتبّع التحويلات.',
      pl: 'Jeden inteligentny link, który wykrywa system operacyjny odwiedzającego i automatycznie przekierowuje go do App Store lub Google Play w mniej niż 50 ms. Bez rejestracji, za darmo, z wbudowaną analityką do śledzenia konwersji.',
      tr: 'Ziyaretçinin işletim sistemini algılayan ve onu 50 ms’den kısa sürede otomatik olarak App Store veya Google Play’e yönlendiren tek bir akıllı bağlantı. Kayıt gerektirmez, ücretsizdir ve dönüşümleri izlemek için yerleşik analitik içerir.',
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'PostHog'],
    results: [
      { fr: 'Redirection < 50 ms', en: 'Sub-50ms redirect', es: 'Redirección < 50 ms', de: 'Weiterleitung < 50 ms', it: 'Reindirizzamento < 50 ms', pt: 'Redirecionamento < 50 ms', nl: 'Doorverwijzing < 50 ms', ar: 'إعادة توجيه < 50 ms', pl: 'Przekierowanie < 50 ms', tr: 'Yönlendirme < 50 ms' },
      { fr: 'Sans inscription', en: 'No signup required', es: 'Sin registro', de: 'Ohne Anmeldung', it: 'Senza registrazione', pt: 'Sem registo', nl: 'Zonder registratie', ar: 'بدون تسجيل', pl: 'Bez rejestracji', tr: 'Kayıt gerektirmez' },
      { fr: 'Gratuit pour toujours', en: 'Free forever', es: 'Gratis para siempre', de: 'Für immer kostenlos', it: 'Gratis per sempre', pt: 'Gratuito para sempre', nl: 'Voor altijd gratis', ar: 'مجاني إلى الأبد', pl: 'Za darmo na zawsze', tr: 'Sonsuza kadar ücretsiz' },
    ],
  },
  {
    slug: 'clokizi',
    name: 'Clokizi',
    internal: true,
    url: 'https://clokizi.com',
    year: 2024,
    image: '/images/projects/clokizi.webp',
    logo: '/images/products/clokizi.png',
    type: { fr: 'SaaS web + app mobile', en: 'Web SaaS + mobile app', es: 'SaaS web + app móvil', de: 'Web-SaaS + Mobile-App', it: 'SaaS web + app mobile', pt: 'SaaS web + app mobile', nl: 'Web-SaaS + mobiele app', ar: 'SaaS ويب + تطبيق جوال', pl: 'Webowy SaaS + aplikacja mobilna', tr: 'Web SaaS + mobil uygulama' },
    tagline: {
      fr: 'Gérez vos équipes terrain en toute simplicité.',
      en: 'Manage your field teams, effortlessly.',
      es: 'Gestiona tus equipos de campo con total simplicidad.',
      de: 'Verwalten Sie Ihre Außendienstteams ganz einfach.',
      it: 'Gestisci le tue squadre sul campo in tutta semplicità.',
      pt: 'Faça a gestão das suas equipas de terreno com toda a simplicidade.',
      nl: 'Beheer je buitendienstteams moeiteloos.',
      ar: 'أدِر فرقك الميدانية بكل بساطة.',
      pl: 'Zarządzaj zespołami w terenie z łatwością.',
      tr: 'Saha ekiplerinizi zahmetsizce yönetin.',
    },
    description: {
      fr: 'Clokizi est la plateforme tout-en-un de gestion d’interventions terrain : planifier les interventions (calendrier, Gantt, liste), répartir les agents et tout suivre en temps réel — du bureau ou du terrain. Application mobile avec pointage GPS. Conçue et développée par Khufu.',
      en: 'Clokizi is the all-in-one field service management platform: schedule jobs (calendar, Gantt, list), dispatch agents and track everything in real time — from the office or the field. Mobile app with GPS check-in. Designed and built by Khufu.',
      es: 'Clokizi es la plataforma todo-en-uno de gestión de intervenciones de campo: planificar intervenciones (calendario, Gantt, lista), asignar agentes y seguirlo todo en tiempo real — desde la oficina o el terreno. App móvil con fichaje GPS. Diseñada y desarrollada por Khufu.',
      de: 'Clokizi ist die All-in-one-Plattform für das Management von Außeneinsätzen: Einsätze planen (Kalender, Gantt, Liste), Mitarbeiter disponieren und alles in Echtzeit verfolgen — vom Büro oder vom Einsatzort aus. Mobile App mit GPS-Zeiterfassung. Von Khufu konzipiert und entwickelt.',
      it: 'Clokizi è la piattaforma all-in-one per la gestione degli interventi sul campo: pianificare gli interventi (calendario, Gantt, lista), assegnare gli agenti e monitorare tutto in tempo reale — dall’ufficio o dal campo. App mobile con timbratura GPS. Progettata e sviluppata da Khufu.',
      pt: 'O Clokizi é a plataforma tudo-em-um para a gestão de intervenções no terreno: planear as intervenções (calendário, Gantt, lista), distribuir os agentes e acompanhar tudo em tempo real — do escritório ou do terreno. Aplicação móvel com marcação de ponto por GPS. Concebida e desenvolvida pela Khufu.',
      nl: 'Clokizi is het alles-in-één platform voor het beheer van buitendienstinterventies: interventies plannen (agenda, Gantt, lijst), medewerkers inplannen en alles in realtime volgen — vanaf kantoor of in het veld. Mobiele app met GPS-inklokken. Ontworpen en gebouwd door Khufu.',
      ar: 'Clokizi هي المنصة الشاملة لإدارة التدخلات الميدانية: جدولة التدخلات (تقويم، Gantt، قائمة)، وتوزيع الفنيين، ومتابعة كل شيء في الوقت الفعلي — من المكتب أو من الميدان. تطبيق جوال مع تسجيل الحضور عبر GPS. صُمّمت وطُوّرت بواسطة Khufu.',
      pl: 'Clokizi to kompleksowa platforma do zarządzania interwencjami w terenie: planowanie interwencji (kalendarz, Gantt, lista), przydzielanie pracowników i śledzenie wszystkiego w czasie rzeczywistym — z biura lub z terenu. Aplikacja mobilna z rejestracją czasu przez GPS. Zaprojektowana i stworzona przez Khufu.',
      tr: 'Clokizi, saha müdahalelerini yönetmek için hepsi bir arada platformdur: müdahaleleri planlayın (takvim, Gantt, liste), sahadaki personeli dağıtın ve her şeyi gerçek zamanlı takip edin — ofisten veya sahadan. GPS ile giriş yapılan mobil uygulama. Khufu tarafından tasarlandı ve geliştirildi.',
    },
    challenge: {
      fr: 'Coordonner des équipes terrain depuis un tableur et des appels devient ingérable dès que le nombre d’interventions grimpe : planning éclaté, agents mal répartis, aucun suivi en temps réel.',
      en: 'Coordinating field teams from a spreadsheet and phone calls becomes unmanageable as soon as the number of jobs grows: scattered scheduling, poorly dispatched agents, no real-time tracking.',
      es: 'Coordinar equipos de campo desde una hoja de cálculo y llamadas se vuelve inmanejable en cuanto crece el número de intervenciones: planificación dispersa, agentes mal asignados, ningún seguimiento en tiempo real.',
      de: 'Außendienstteams über eine Tabelle und Telefonanrufe zu koordinieren, wird unbeherrschbar, sobald die Zahl der Einsätze steigt: zersplitterte Planung, schlecht disponierte Mitarbeiter, keine Verfolgung in Echtzeit.',
      it: 'Coordinare le squadre sul campo con un foglio di calcolo e telefonate diventa ingestibile non appena cresce il numero di interventi: pianificazione frammentata, agenti mal distribuiti, nessun monitoraggio in tempo reale.',
      pt: 'Coordenar equipas de terreno a partir de uma folha de cálculo e chamadas torna-se incontrolável assim que o número de intervenções aumenta: planeamento disperso, agentes mal distribuídos, nenhum acompanhamento em tempo real.',
      nl: 'Buitendienstteams coördineren vanuit een spreadsheet en telefoontjes wordt onbeheersbaar zodra het aantal interventies toeneemt: versnipperde planning, slecht ingedeelde medewerkers, geen realtime opvolging.',
      ar: 'تنسيق الفرق الميدانية عبر جدول بيانات ومكالمات هاتفية يصبح غير قابل للإدارة بمجرد أن يرتفع عدد التدخلات: تخطيط مبعثر، وفنيون موزّعون بشكل سيئ، ولا متابعة في الوقت الفعلي.',
      pl: 'Koordynowanie zespołów w terenie za pomocą arkusza kalkulacyjnego i telefonów staje się niemożliwe do opanowania, gdy tylko rośnie liczba interwencji: rozproszony harmonogram, źle rozdzieleni pracownicy, brak śledzenia w czasie rzeczywistym.',
      tr: 'Saha ekiplerini bir elektronik tablo ve telefon görüşmeleriyle koordine etmek, müdahale sayısı arttığı anda yönetilemez hale gelir: dağınık planlama, kötü dağıtılmış personel ve gerçek zamanlı takibin olmaması.',
    },
    approach: {
      fr: 'Une plateforme web pour planifier et répartir les interventions (calendrier, Gantt, liste), couplée à une application mobile avec pointage GPS — pour que le bureau et le terrain travaillent sur la même information, en direct.',
      en: 'A web platform to schedule and dispatch jobs (calendar, Gantt, list), paired with a mobile app featuring GPS check-in — so the office and the field work on the same information, live.',
      es: 'Una plataforma web para planificar y asignar intervenciones (calendario, Gantt, lista), combinada con una app móvil con fichaje GPS — para que la oficina y el terreno trabajen sobre la misma información, en directo.',
      de: 'Eine Webplattform zum Planen und Disponieren von Einsätzen (Kalender, Gantt, Liste), gekoppelt mit einer mobilen App mit GPS-Zeiterfassung — damit Büro und Einsatzort live mit denselben Informationen arbeiten.',
      it: 'Una piattaforma web per pianificare e assegnare gli interventi (calendario, Gantt, lista), abbinata a un’app mobile con timbratura GPS — così ufficio e campo lavorano sulle stesse informazioni, in diretta.',
      pt: 'Uma plataforma web para planear e distribuir intervenções (calendário, Gantt, lista), combinada com uma aplicação móvel com marcação de ponto por GPS — para que o escritório e o terreno trabalhem sobre a mesma informação, em direto.',
      nl: 'Een webplatform om interventies te plannen en toe te wijzen (agenda, Gantt, lijst), gekoppeld aan een mobiele app met GPS-inklokken — zodat kantoor en veld live met dezelfde informatie werken.',
      ar: 'منصة ويب لتخطيط التدخلات وتوزيعها (تقويم، Gantt، قائمة)، مقترنة بتطبيق جوال مع تسجيل الحضور عبر GPS — كي يعمل المكتب والميدان على المعلومات نفسها، مباشرةً.',
      pl: 'Platforma webowa do planowania i przydzielania interwencji (kalendarz, Gantt, lista), połączona z aplikacją mobilną z rejestracją czasu przez GPS — aby biuro i teren pracowały na tych samych informacjach, na żywo.',
      tr: 'Müdahaleleri planlamak ve dağıtmak için bir web platformu (takvim, Gantt, liste) ve GPS ile giriş özellikli bir mobil uygulama — böylece ofis ve saha aynı bilgi üzerinde, canlı olarak çalışır.',
    },
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'React Native'],
    results: [
      { fr: 'Planning calendrier & Gantt', en: 'Calendar & Gantt scheduling', es: 'Planificación calendario y Gantt', de: 'Planung mit Kalender & Gantt', it: 'Pianificazione calendario e Gantt', pt: 'Planeamento com calendário e Gantt', nl: 'Planning met agenda & Gantt', ar: 'تخطيط بالتقويم وGantt', pl: 'Planowanie w kalendarzu i Gantt', tr: 'Takvim ve Gantt ile planlama' },
      { fr: 'Pointage GPS sur le terrain', en: 'GPS check-in in the field', es: 'Fichaje GPS en el terreno', de: 'GPS-Zeiterfassung im Einsatz', it: 'Timbratura GPS sul campo', pt: 'Marcação de ponto por GPS no terreno', nl: 'GPS-inklokken in het veld', ar: 'تسجيل الحضور عبر GPS في الميدان', pl: 'Rejestracja czasu przez GPS w terenie', tr: 'Sahada GPS ile giriş' },
      { fr: 'Suivi en temps réel', en: 'Real-time tracking', es: 'Seguimiento en tiempo real', de: 'Verfolgung in Echtzeit', it: 'Monitoraggio in tempo reale', pt: 'Acompanhamento em tempo real', nl: 'Volgen in realtime', ar: 'متابعة في الوقت الفعلي', pl: 'Śledzenie w czasie rzeczywistym', tr: 'Gerçek zamanlı takip' },
    ],
  },
  {
    slug: 'herbacrm',
    name: 'HerbaCRM',
    internal: true,
    url: 'https://herbacrm.com',
    year: 2024,
    image: '/images/projects/herbacrm.webp',
    logo: '/images/products/herbacrm.png',
    type: { fr: 'SaaS web (CRM)', en: 'Web SaaS (CRM)', es: 'SaaS web (CRM)', de: 'Web-SaaS (CRM)', it: 'SaaS web (CRM)', pt: 'SaaS web (CRM)', nl: 'Web-SaaS (CRM)', ar: 'SaaS ويب (CRM)', pl: 'Webowy SaaS (CRM)', tr: 'Web SaaS (CRM)' },
    tagline: {
      fr: 'Le CRM des coachs bien-être, nutrition et fitness.',
      en: 'The CRM for wellness, nutrition and fitness coaches.',
      es: 'El CRM para coaches de bienestar, nutrición y fitness.',
      de: 'Das CRM für Wellness-, Ernährungs- und Fitness-Coaches.',
      it: 'Il CRM per coach di benessere, nutrizione e fitness.',
      pt: 'O CRM para coaches de bem-estar, nutrição e fitness.',
      nl: 'De CRM voor wellness-, voedings- en fitnesscoaches.',
      ar: 'نظام CRM لمدربي العافية والتغذية واللياقة.',
      pl: 'CRM dla trenerów wellness, żywienia i fitnessu.',
      tr: 'Wellness, beslenme ve fitness koçları için CRM.',
    },
    description: {
      fr: 'HerbaCRM est la plateforme tout-en-un pour les coachs bien-être, nutrition et fitness : suivi des clients et des challengers, gestion des mesures et des commandes, et génération de revenus récurrents. Conçu et développé par Khufu.',
      en: 'HerbaCRM is the all-in-one platform for wellness, nutrition and fitness coaches: track clients and challengers, manage measurements and orders, and build recurring revenue. Designed and built by Khufu.',
      es: 'HerbaCRM es la plataforma todo-en-uno para coaches de bienestar, nutrición y fitness: seguimiento de clientes y participantes, gestión de mediciones y pedidos, y generación de ingresos recurrentes. Diseñado y desarrollado por Khufu.',
      de: 'HerbaCRM ist die All-in-one-Plattform für Wellness-, Ernährungs- und Fitness-Coaches: Betreuung von Kunden und Challenge-Teilnehmern, Verwaltung von Messwerten und Bestellungen sowie Aufbau wiederkehrender Umsätze. Von Khufu konzipiert und entwickelt.',
      it: 'HerbaCRM è la piattaforma all-in-one per coach di benessere, nutrizione e fitness: monitoraggio di clienti e partecipanti alle challenge, gestione di misurazioni e ordini e creazione di ricavi ricorrenti. Progettato e sviluppato da Khufu.',
      pt: 'O HerbaCRM é a plataforma tudo-em-um para coaches de bem-estar, nutrição e fitness: acompanhamento de clientes e participantes de desafios, gestão de medições e encomendas e geração de receita recorrente. Concebido e desenvolvido pela Khufu.',
      nl: 'HerbaCRM is het alles-in-één platform voor wellness-, voedings- en fitnesscoaches: opvolging van klanten en challengers, beheer van metingen en bestellingen, en opbouw van terugkerende inkomsten. Ontworpen en gebouwd door Khufu.',
      ar: 'HerbaCRM هي المنصة الشاملة لمدربي العافية والتغذية واللياقة: متابعة العملاء والمشاركين في التحديات، وإدارة القياسات والطلبات، وتوليد إيرادات متكررة. صُمّم وطُوّر بواسطة Khufu.',
      pl: 'HerbaCRM to kompleksowa platforma dla trenerów wellness, żywienia i fitnessu: śledzenie klientów i uczestników wyzwań, zarządzanie pomiarami i zamówieniami oraz budowanie powtarzalnych przychodów. Zaprojektowany i stworzony przez Khufu.',
      tr: 'HerbaCRM, wellness, beslenme ve fitness koçları için hepsi bir arada platformdur: müşteri ve challenge katılımcılarının takibi, ölçüm ve sipariş yönetimi ve yinelenen gelir oluşturma. Khufu tarafından tasarlandı ve geliştirildi.',
    },
    challenge: {
      fr: 'Les coachs bien-être jonglent entre messageries, tableurs et outils de paiement pour suivre leurs clients — du temps perdu et des suivis qui passent à la trappe.',
      en: 'Wellness coaches juggle messaging apps, spreadsheets and payment tools to keep track of their clients — wasted time and follow-ups that slip through the cracks.',
      es: 'Los coaches de bienestar hacen malabares entre mensajerías, hojas de cálculo y herramientas de pago para hacer seguimiento de sus clientes — tiempo perdido y seguimientos que se quedan en el tintero.',
      de: 'Wellness-Coaches jonglieren zwischen Messengern, Tabellen und Zahlungstools, um ihre Kunden zu betreuen — verlorene Zeit und Nachverfolgungen, die unter den Tisch fallen.',
      it: 'I coach del benessere destreggiano tra app di messaggistica, fogli di calcolo e strumenti di pagamento per seguire i propri clienti — tempo perso e follow-up che finiscono nel dimenticatoio.',
      pt: 'Os coaches de bem-estar fazem malabarismos entre aplicações de mensagens, folhas de cálculo e ferramentas de pagamento para acompanhar os seus clientes — tempo perdido e acompanhamentos que ficam esquecidos.',
      nl: 'Wellnesscoaches jongleren tussen berichtenapps, spreadsheets en betaaltools om hun klanten op te volgen — verloren tijd en opvolgingen die tussen wal en schip vallen.',
      ar: 'يتنقّل مدربو العافية بين تطبيقات المراسلة وجداول البيانات وأدوات الدفع لمتابعة عملائهم — وقت ضائع ومتابعات تسقط في غياهب النسيان.',
      pl: 'Trenerzy wellness żonglują między komunikatorami, arkuszami kalkulacyjnymi i narzędziami płatniczymi, aby śledzić swoich klientów — stracony czas i pomijane działania następcze.',
      tr: 'Wellness koçları, müşterilerini takip etmek için mesajlaşma uygulamaları, elektronik tablolar ve ödeme araçları arasında gidip gelir — boşa harcanan zaman ve gözden kaçan takipler.',
    },
    approach: {
      fr: 'Un CRM métier pensé pour les coachs : suivi client, programmes et paiements réunis au même endroit, avec une prise en main immédiate. Facturation intégrée via Stripe.',
      en: 'A purpose-built CRM designed for coaches: client tracking, programs and payments brought together in one place, ready to use straight away. Built-in billing via Stripe.',
      es: 'Un CRM especializado pensado para coaches: seguimiento de clientes, programas y pagos reunidos en un solo lugar, con una toma de contacto inmediata. Facturación integrada mediante Stripe.',
      de: 'Ein branchenspezifisches CRM, das für Coaches konzipiert ist: Kundenbetreuung, Programme und Zahlungen an einem Ort vereint, sofort einsatzbereit. Integrierte Abrechnung über Stripe.',
      it: 'Un CRM verticale pensato per i coach: monitoraggio dei clienti, programmi e pagamenti riuniti in un unico posto, con un utilizzo immediato. Fatturazione integrata tramite Stripe.',
      pt: 'Um CRM especializado pensado para coaches: acompanhamento de clientes, programas e pagamentos reunidos num só lugar, com uma adoção imediata. Faturação integrada através do Stripe.',
      nl: 'Een gespecialiseerde CRM ontworpen voor coaches: klantopvolging, programma’s en betalingen samengebracht op één plek, meteen te gebruiken. Ingebouwde facturatie via Stripe.',
      ar: 'نظام CRM متخصص مصمم للمدربين: متابعة العملاء والبرامج والمدفوعات مجتمعة في مكان واحد، مع سهولة استخدام فورية. فوترة مدمجة عبر Stripe.',
      pl: 'Branżowy CRM stworzony z myślą o trenerach: śledzenie klientów, programy i płatności zebrane w jednym miejscu, z natychmiastową obsługą. Wbudowane fakturowanie przez Stripe.',
      tr: 'Koçlar için tasarlanmış sektöre özel bir CRM: müşteri takibi, programlar ve ödemeler tek bir yerde toplanır ve hemen kullanılmaya başlanır. Stripe üzerinden yerleşik faturalandırma.',
    },
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe'],
    results: [
      { fr: 'Suivi clients & mesures', en: 'Client & measurement tracking', es: 'Seguimiento de clientes y mediciones', de: 'Kunden- & Messwertverfolgung', it: 'Monitoraggio clienti e misurazioni', pt: 'Acompanhamento de clientes e medições', nl: 'Klant- & metingopvolging', ar: 'متابعة العملاء والقياسات', pl: 'Śledzenie klientów i pomiarów', tr: 'Müşteri ve ölçüm takibi' },
      { fr: 'Gestion des commandes', en: 'Order management', es: 'Gestión de pedidos', de: 'Bestellverwaltung', it: 'Gestione degli ordini', pt: 'Gestão de encomendas', nl: 'Bestelbeheer', ar: 'إدارة الطلبات', pl: 'Zarządzanie zamówieniami', tr: 'Sipariş yönetimi' },
      { fr: 'Revenus récurrents intégrés', en: 'Built-in recurring revenue', es: 'Ingresos recurrentes integrados', de: 'Integrierte wiederkehrende Umsätze', it: 'Ricavi ricorrenti integrati', pt: 'Receita recorrente integrada', nl: 'Ingebouwde terugkerende inkomsten', ar: 'إيرادات متكررة مدمجة', pl: 'Wbudowane powtarzalne przychody', tr: 'Yerleşik yinelenen gelir' },
    ],
  },
  {
    slug: 'labyrinth',
    name: 'Labyrinth',
    internal: true,
    url: 'https://onestore.link/labyrinth',
    year: 2025,
    image: '/images/projects/labyrinth.webp',
    logo: '/images/products/labyrinth.webp',
    type: { fr: 'App mobile · Jeu', en: 'Mobile app · Game', es: 'App móvil · Juego', de: 'Mobile-App · Spiel', it: 'App mobile · Gioco', pt: 'App mobile · Jogo', nl: 'Mobiele app · Game', ar: 'تطبيق جوال · لعبة', pl: 'Aplikacja mobilna · Gra', tr: 'Mobil uygulama · Oyun' },
    tagline: {
      fr: 'Pirate Treasure — le labyrinthe où chaque chemin cache un trésor.',
      en: 'Pirate Treasure — the maze where every path hides a treasure.',
      es: 'Pirate Treasure — el laberinto donde cada camino esconde un tesoro.',
      de: 'Pirate Treasure — das Labyrinth, in dem jeder Weg einen Schatz verbirgt.',
      it: 'Pirate Treasure — il labirinto dove ogni sentiero nasconde un tesoro.',
      pt: 'Pirate Treasure — o labirinto onde cada caminho esconde um tesouro.',
      nl: 'Pirate Treasure — het doolhof waar elk pad een schat verbergt.',
      ar: 'Pirate Treasure — المتاهة حيث يخفي كل طريق كنزًا.',
      pl: 'Pirate Treasure — labirynt, w którym każda ścieżka skrywa skarb.',
      tr: 'Pirate Treasure — her yolun bir hazine sakladığı labirent.',
    },
    description: {
      fr: 'Labyrinth – Pirate Treasure est un jeu mobile de labyrinthe et de chasse au trésor sur thème pirate, publié sur iOS et Android. Conçu et développé par Khufu.',
      en: 'Labyrinth – Pirate Treasure is a pirate-themed maze and treasure-hunt mobile game, published on iOS and Android. Designed and built by Khufu.',
      es: 'Labyrinth – Pirate Treasure es un juego móvil de laberinto y búsqueda del tesoro con temática pirata, publicado en iOS y Android. Diseñado y desarrollado por Khufu.',
      de: 'Labyrinth – Pirate Treasure ist ein mobiles Labyrinth- und Schatzsuche-Spiel im Piraten-Thema, veröffentlicht für iOS und Android. Von Khufu konzipiert und entwickelt.',
      it: 'Labyrinth – Pirate Treasure è un gioco mobile di labirinti e caccia al tesoro a tema pirata, pubblicato su iOS e Android. Progettato e sviluppato da Khufu.',
      pt: 'Labyrinth – Pirate Treasure é um jogo mobile de labirinto e caça ao tesouro com temática pirata, publicado em iOS e Android. Concebido e desenvolvido pela Khufu.',
      nl: 'Labyrinth – Pirate Treasure is een mobiele doolhof- en schatzoekgame met piratenthema, uitgebracht op iOS en Android. Ontworpen en gebouwd door Khufu.',
      ar: 'Labyrinth – Pirate Treasure هي لعبة جوال للمتاهات والبحث عن الكنوز بطابع القراصنة، منشورة على iOS وAndroid. صُمّمت وطُوّرت بواسطة Khufu.',
      pl: 'Labyrinth – Pirate Treasure to mobilna gra labiryntowa i poszukiwanie skarbów w pirackim klimacie, wydana na iOS i Android. Zaprojektowana i stworzona przez Khufu.',
      tr: 'Labyrinth – Pirate Treasure, korsan temalı bir mobil labirent ve hazine avı oyunudur; iOS ve Android üzerinde yayınlanmıştır. Khufu tarafından tasarlandı ve geliştirildi.',
    },
    stack: ['React Native', 'Expo', 'iOS', 'Android'],
  },

  // ── Client work (internal: false). DRAFT copy — Adrien to confirm the exact
  //    scope/results for each before publishing. Add a logo/screenshot when available.
  {
    slug: 'pandore',
    name: 'Pandore',
    internal: false,
    url: 'https://pandore.io',
    image: '/images/projects/pandore.webp',
    type: { fr: 'Client · SaaS web (BTP)', en: 'Client · Web SaaS (construction)', es: 'Cliente · SaaS web (construcción)', de: 'Kunde · Web-SaaS (Bauwesen)', it: 'Cliente · SaaS web (edilizia)', pt: 'Cliente · SaaS web (construção)', nl: 'Klant · Web-SaaS (bouw)', ar: 'عميل · SaaS ويب (البناء)', pl: 'Klient · Webowy SaaS (budownictwo)', tr: 'Müşteri · Web SaaS (inşaat)' },
    tagline: {
      fr: 'La plateforme de gestion de projets et d’appels d’offres du BTP.',
      en: 'The project- and tender-management platform for construction.',
      es: 'La plataforma de gestión de proyectos y licitaciones para la construcción.',
      de: 'Die Plattform für Projekt- und Ausschreibungsmanagement im Bauwesen.',
      it: 'La piattaforma per la gestione di progetti e gare d’appalto nell’edilizia.',
      pt: 'A plataforma de gestão de projetos e concursos para a construção.',
      nl: 'Het platform voor project- en aanbestedingsbeheer in de bouw.',
      ar: 'منصة إدارة المشاريع والمناقصات في قطاع البناء.',
      pl: 'Platforma do zarządzania projektami i przetargami w budownictwie.',
      tr: 'İnşaat sektörü için proje ve ihale yönetimi platformu.',
    },
    description: {
      fr: 'Pandore est un SaaS de gestion de projets de construction : partage documentaire (DCE, marchés), gestion des lots & budget, appels d’offres, entreprises retenues et signature de marché. Khufu est intervenu sur le développement de la plateforme.',
      en: 'Pandore is a construction project-management SaaS: document sharing (tender files, contracts), lots & budget management, calls for tenders, awarded companies and contract signing. Khufu contributed to the platform’s development.',
      es: 'Pandore es un SaaS de gestión de proyectos de construcción: intercambio documental (pliegos, contratos), gestión de lotes y presupuesto, licitaciones, empresas adjudicatarias y firma de contratos. Khufu participó en el desarrollo de la plataforma.',
      de: 'Pandore ist ein SaaS für das Management von Bauprojekten: Dokumentenaustausch (Ausschreibungsunterlagen, Verträge), Verwaltung von Losen & Budget, Ausschreibungen, ausgewählte Unternehmen und Vertragsunterzeichnung. Khufu war an der Entwicklung der Plattform beteiligt.',
      it: 'Pandore è un SaaS per la gestione di progetti di costruzione: condivisione documentale (documenti di gara, contratti), gestione di lotti e budget, gare d’appalto, imprese aggiudicatarie e firma del contratto. Khufu ha contribuito allo sviluppo della piattaforma.',
      pt: 'O Pandore é um SaaS de gestão de projetos de construção: partilha documental (cadernos de encargos, contratos), gestão de lotes e orçamento, concursos, empresas adjudicatárias e assinatura de contrato. A Khufu participou no desenvolvimento da plataforma.',
      nl: 'Pandore is een SaaS voor het beheer van bouwprojecten: documentdeling (aanbestedingsdossiers, contracten), beheer van percelen & budget, aanbestedingen, gekozen bedrijven en contractondertekening. Khufu werkte mee aan de ontwikkeling van het platform.',
      ar: 'Pandore هو SaaS لإدارة مشاريع البناء: مشاركة المستندات (ملفات المناقصات، العقود)، وإدارة الحصص والميزانية، والمناقصات، والشركات الفائزة، وتوقيع العقود. ساهمت Khufu في تطوير المنصة.',
      pl: 'Pandore to SaaS do zarządzania projektami budowlanymi: udostępnianie dokumentów (dokumentacja przetargowa, umowy), zarządzanie pakietami robót i budżetem, przetargi, wybrane firmy i podpisywanie umów. Khufu uczestniczył w rozwoju platformy.',
      tr: 'Pandore, inşaat projelerini yönetmeye yönelik bir SaaS’tır: belge paylaşımı (ihale dosyaları, sözleşmeler), iş kalemleri ve bütçe yönetimi, ihaleler, seçilen firmalar ve sözleşme imzalama. Khufu, platformun geliştirilmesine katkıda bulundu.',
    },
    challenge: {
      fr: 'Le BTP jongle avec des documents (DCE, marchés), des lots, des budgets et des appels d’offres éparpillés entre mails, tableurs et dossiers. Retrouver la bonne version au bon moment devient un risque projet.',
      en: 'Construction juggles documents (tender files, contracts), lots, budgets and calls for tenders scattered across emails, spreadsheets and folders. Finding the right version at the right moment becomes a project risk.',
      es: 'La construcción hace malabares con documentos (pliegos, contratos), lotes, presupuestos y licitaciones dispersos entre correos, hojas de cálculo y carpetas. Encontrar la versión correcta en el momento adecuado se convierte en un riesgo para el proyecto.',
      de: 'Das Bauwesen jongliert mit Dokumenten (Ausschreibungsunterlagen, Verträgen), Losen, Budgets und Ausschreibungen, die über E-Mails, Tabellen und Ordner verstreut sind. Die richtige Version zum richtigen Zeitpunkt zu finden, wird zum Projektrisiko.',
      it: "L'edilizia si destreggia tra documenti (documenti di gara, contratti), lotti, budget e gare d'appalto sparsi tra email, fogli di calcolo e cartelle. Ritrovare la versione giusta al momento giusto diventa un rischio per il progetto.",
      pt: 'A construção faz malabarismos com documentos (cadernos de encargos, contratos), lotes, orçamentos e concursos espalhados por e-mails, folhas de cálculo e pastas. Encontrar a versão certa no momento certo torna-se um risco para o projeto.',
      nl: 'De bouw jongleert met documenten (aanbestedingsdossiers, contracten), percelen, budgetten en aanbestedingen verspreid over mails, spreadsheets en mappen. De juiste versie op het juiste moment terugvinden wordt een projectrisico.',
      ar: 'يتعامل قطاع البناء مع مستندات (ملفات المناقصات، العقود) وحصص وميزانيات ومناقصات متناثرة بين رسائل البريد وجداول البيانات والمجلدات. ويصبح العثور على النسخة الصحيحة في الوقت المناسب خطرًا على المشروع.',
      pl: 'Budownictwo żongluje dokumentami (dokumentacja przetargowa, umowy), pakietami robót, budżetami i przetargami rozproszonymi między e-mailami, arkuszami i folderami. Odnalezienie właściwej wersji we właściwym momencie staje się ryzykiem projektowym.',
      tr: 'İnşaat sektörü; e-postalar, tablolar ve klasörler arasına dağılmış belgeler (ihale dosyaları, sözleşmeler), iş kalemleri, bütçeler ve ihalelerle boğuşur. Doğru sürümü doğru anda bulmak bir proje riskine dönüşür.',
    },
    approach: {
      fr: 'Khufu est intervenu sur le développement d’un SaaS centralisant le partage documentaire, la gestion des lots et budgets, les appels d’offres et la signature de marché — une source de vérité unique pour tout le chantier.',
      en: 'Khufu contributed to the development of a SaaS that centralizes document sharing, lot and budget management, calls for tenders and contract signing — a single source of truth for the entire project.',
      es: 'Khufu participó en el desarrollo de un SaaS que centraliza el intercambio documental, la gestión de lotes y presupuestos, las licitaciones y la firma de contratos — una única fuente de verdad para toda la obra.',
      de: 'Khufu war an der Entwicklung eines SaaS beteiligt, das Dokumentenaustausch, Los- und Budgetverwaltung, Ausschreibungen und Vertragsunterzeichnung zentralisiert — eine einzige Quelle der Wahrheit für die gesamte Baustelle.',
      it: "Khufu ha contribuito allo sviluppo di un SaaS che centralizza la condivisione documentale, la gestione di lotti e budget, le gare d'appalto e la firma del contratto — un'unica fonte di verità per l'intero cantiere.",
      pt: 'A Khufu participou no desenvolvimento de um SaaS que centraliza a partilha documental, a gestão de lotes e orçamentos, os concursos e a assinatura de contrato — uma única fonte de verdade para toda a obra.',
      nl: 'Khufu werkte mee aan de ontwikkeling van een SaaS die documentdeling, perceel- en budgetbeheer, aanbestedingen en contractondertekening centraliseert — één bron van waarheid voor de hele bouwplaats.',
      ar: 'ساهمت Khufu في تطوير SaaS يوحّد مشاركة المستندات وإدارة الحصص والميزانيات والمناقصات وتوقيع العقود — مصدر حقيقة واحد لكامل المشروع.',
      pl: 'Khufu uczestniczył w rozwoju SaaS-a, który centralizuje udostępnianie dokumentów, zarządzanie pakietami robót i budżetami, przetargi oraz podpisywanie umów — jedno źródło prawdy dla całej budowy.',
      tr: "Khufu, belge paylaşımını, iş kalemi ve bütçe yönetimini, ihaleleri ve sözleşme imzalamayı tek merkezde toplayan bir SaaS'ın geliştirilmesine katkıda bulundu — tüm şantiye için tek bir doğruluk kaynağı.",
    },
    stack: ['React', 'TypeScript', 'Node.js'],
  },
  {
    slug: 'flatchr',
    name: 'Flatchr',
    internal: false,
    url: 'https://www.flatchr.io',
    image: '/images/projects/flatchr.webp',
    type: { fr: 'Client · App mobile', en: 'Client · Mobile app', es: 'Cliente · App móvil', de: 'Kunde · Mobile-App', it: 'Cliente · App mobile', pt: 'Cliente · App mobile', nl: 'Klant · Mobiele app', ar: 'عميل · تطبيق جوال', pl: 'Klient · Aplikacja mobilna', tr: 'Müşteri · Mobil uygulama' },
    tagline: {
      fr: 'Refonte et évolution de l’app mobile Flatchr.',
      en: 'Rebuild and evolution of the Flatchr mobile app.',
      es: 'Rediseño y evolución de la app móvil de Flatchr.',
      de: 'Neuaufbau und Weiterentwicklung der Flatchr-Mobile-App.',
      it: 'Restyling ed evoluzione dell’app mobile Flatchr.',
      pt: 'Redesenho e evolução da app mobile Flatchr.',
      nl: 'Herbouw en doorontwikkeling van de mobiele app van Flatchr.',
      ar: 'إعادة تصميم وتطوير تطبيق Flatchr للجوال.',
      pl: 'Przebudowa i rozwój aplikacji mobilnej Flatchr.',
      tr: 'Flatchr mobil uygulamasının yeniden tasarımı ve geliştirilmesi.',
    },
    description: {
      fr: 'Khufu a repris, mis à niveau et fait évoluer l’application mobile de Flatchr (solution de recrutement / ATS) : refonte, mise à niveau technique, maintenance, corrections et développement de nouvelles fonctionnalités.',
      en: 'Khufu took over, upgraded and grew the Flatchr mobile app (recruitment / ATS solution): rebuild, technical upgrade, maintenance, fixes and new feature development.',
      es: 'Khufu retomó, actualizó e hizo evolucionar la app móvil de Flatchr (solución de reclutamiento / ATS): rediseño, actualización técnica, mantenimiento, correcciones y desarrollo de nuevas funcionalidades.',
      de: 'Khufu hat die Mobile-App von Flatchr (Recruiting-/ATS-Lösung) übernommen, technisch aktualisiert und weiterentwickelt: Neuaufbau, technisches Upgrade, Wartung, Fehlerbehebungen und Entwicklung neuer Funktionen.',
      it: 'Khufu ha ripreso, aggiornato e fatto evolvere l’app mobile di Flatchr (soluzione di recruiting / ATS): restyling, aggiornamento tecnico, manutenzione, correzioni e sviluppo di nuove funzionalità.',
      pt: 'A Khufu assumiu, atualizou e fez evoluir a app mobile da Flatchr (solução de recrutamento / ATS): redesenho, atualização técnica, manutenção, correções e desenvolvimento de novas funcionalidades.',
      nl: 'Khufu heeft de mobiele app van Flatchr (recruitment-/ATS-oplossing) overgenomen, technisch bijgewerkt en doorontwikkeld: herbouw, technische upgrade, onderhoud, bugfixes en ontwikkeling van nieuwe functies.',
      ar: 'تولّت Khufu تطبيق Flatchr للجوال (حل التوظيف / ATS)، وحدّثته تقنيًا وطوّرته: إعادة تصميم، وتحديث تقني، وصيانة، وإصلاحات، وتطوير ميزات جديدة.',
      pl: 'Khufu przejął, zaktualizował i rozwinął aplikację mobilną Flatchr (rozwiązanie rekrutacyjne / ATS): przebudowa, aktualizacja techniczna, utrzymanie, poprawki i tworzenie nowych funkcji.',
      tr: 'Khufu, Flatchr mobil uygulamasını (işe alım / ATS çözümü) devraldı, teknik olarak güncelledi ve geliştirdi: yeniden tasarım, teknik yükseltme, bakım, düzeltmeler ve yeni özellik geliştirme.',
    },
    challenge: {
      fr: 'Une application mobile de recrutement existante à reprendre : dette technique, bugs et performances en berne freinaient les utilisateurs au quotidien.',
      en: 'An existing recruitment mobile app to take over: technical debt, bugs and sluggish performance were slowing users down every day.',
      es: 'Una app móvil de reclutamiento existente que había que retomar: la deuda técnica, los bugs y el bajo rendimiento frenaban a los usuarios a diario.',
      de: 'Eine bestehende Recruiting-Mobile-App zur Übernahme: technische Schulden, Bugs und schwache Performance bremsten die Nutzer im Alltag aus.',
      it: "Un'app mobile di recruiting esistente da riprendere: debito tecnico, bug e prestazioni scadenti frenavano gli utenti ogni giorno.",
      pt: 'Uma app mobile de recrutamento existente para assumir: dívida técnica, bugs e desempenho fraco travavam os utilizadores no dia a dia.',
      nl: 'Een bestaande recruitment-app om over te nemen: technische schuld, bugs en trage prestaties remden gebruikers dagelijks af.',
      ar: 'تطبيق جوال قائم للتوظيف يجب تولّيه: ديون تقنية وأخطاء برمجية وأداء ضعيف كانت تعيق المستخدمين يوميًا.',
      pl: 'Istniejąca mobilna aplikacja rekrutacyjna do przejęcia: dług techniczny, błędy i słaba wydajność każdego dnia spowalniały użytkowników.',
      tr: 'Devralınacak mevcut bir işe alım mobil uygulaması: teknik borç, hatalar ve düşük performans kullanıcıları her gün yavaşlatıyordu.',
    },
    approach: {
      fr: 'Reprise du code existant, refonte et mise à niveau technique, corrections et développement de nouvelles fonctionnalités — pour une app parfaitement fonctionnelle, bien plus performante et maintenue dans la durée.',
      en: "Taking over the existing code, rebuild and technical upgrade, fixes and new feature development — for a perfectly functional app that's far more performant and maintained over time.",
      es: 'Retomamos el código existente, rediseño y actualización técnica, correcciones y desarrollo de nuevas funcionalidades — para una app perfectamente funcional, mucho más rápida y mantenida a lo largo del tiempo.',
      de: 'Übernahme des bestehenden Codes, Neuaufbau und technisches Upgrade, Fehlerbehebungen und Entwicklung neuer Funktionen — für eine einwandfrei funktionierende, deutlich performantere und dauerhaft gewartete App.',
      it: "Ripresa del codice esistente, restyling e aggiornamento tecnico, correzioni e sviluppo di nuove funzionalità — per un'app perfettamente funzionante, molto più performante e mantenuta nel tempo.",
      pt: 'Retomámos o código existente, redesenho e atualização técnica, correções e desenvolvimento de novas funcionalidades — para uma app perfeitamente funcional, muito mais rápida e mantida ao longo do tempo.',
      nl: 'Overname van de bestaande code, herbouw en technische upgrade, bugfixes en ontwikkeling van nieuwe functies — voor een perfect functionerende app die veel sneller is en langdurig onderhouden wordt.',
      ar: 'تولّي الشيفرة القائمة، وإعادة التصميم والتحديث التقني، والإصلاحات وتطوير ميزات جديدة — للحصول على تطبيق يعمل بشكل مثالي، أعلى أداءً بكثير، وتتم صيانته على المدى الطويل.',
      pl: 'Przejęcie istniejącego kodu, przebudowa i aktualizacja techniczna, poprawki oraz tworzenie nowych funkcji — dla aplikacji w pełni funkcjonalnej, znacznie wydajniejszej i utrzymywanej w długim okresie.',
      tr: 'Mevcut kodun devralınması, yeniden tasarım ve teknik yükseltme, düzeltmeler ve yeni özellik geliştirme — kusursuz çalışan, çok daha performanslı ve uzun vadede bakımı sürdürülen bir uygulama için.',
    },
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    slug: 'mojo',
    name: 'Mojo',
    internal: false,
    url: 'https://www.mojo.video',
    image: '/images/projects/mojo.webp',
    type: { fr: 'Client · Plateforme web', en: 'Client · Web platform', es: 'Cliente · Plataforma web', de: 'Kunde · Web-Plattform', it: 'Cliente · Piattaforma web', pt: 'Cliente · Plataforma web', nl: 'Klant · Webplatform', ar: 'عميل · منصة ويب', pl: 'Klient · Platforma webowa', tr: 'Müşteri · Web platformu' },
    tagline: {
      fr: 'La plateforme web de collaboration créative en équipe.',
      en: 'The web platform for team creative collaboration.',
      es: 'La plataforma web de colaboración creativa en equipo.',
      de: 'Die Web-Plattform für kreative Teamzusammenarbeit.',
      it: 'La piattaforma web per la collaborazione creativa in team.',
      pt: 'A plataforma web de colaboração criativa em equipa.',
      nl: 'Het webplatform voor creatieve samenwerking in teams.',
      ar: 'منصة الويب للتعاون الإبداعي ضمن الفريق.',
      pl: 'Platforma webowa do kreatywnej współpracy zespołowej.',
      tr: 'Ekip halinde yaratıcı iş birliği için web platformu.',
    },
    description: {
      fr: 'Khufu a conçu et mis en place la plateforme web de Mojo dédiée au travail collaboratif en équipe sur les créations : gestion des projets, collaboration et déploiement des contenus.',
      en: 'Khufu designed and built Mojo’s web platform for team collaboration on creative content: project management, collaboration and content deployment.',
      es: 'Khufu diseñó e implementó la plataforma web de Mojo para el trabajo colaborativo en equipo sobre las creaciones: gestión de proyectos, colaboración y despliegue de contenidos.',
      de: 'Khufu hat die Web-Plattform von Mojo für die kollaborative Teamarbeit an kreativen Inhalten konzipiert und umgesetzt: Projektmanagement, Zusammenarbeit und Bereitstellung der Inhalte.',
      it: 'Khufu ha progettato e realizzato la piattaforma web di Mojo dedicata al lavoro collaborativo in team sulle creazioni: gestione dei progetti, collaborazione e distribuzione dei contenuti.',
      pt: 'A Khufu concebeu e implementou a plataforma web da Mojo dedicada ao trabalho colaborativo em equipa sobre as criações: gestão de projetos, colaboração e implementação de conteúdos.',
      nl: 'Khufu ontwierp en bouwde het webplatform van Mojo voor collaboratief teamwerk aan creaties: projectbeheer, samenwerking en uitrol van content.',
      ar: 'صمّمت Khufu ونفّذت منصة الويب الخاصة بـ Mojo المخصّصة للعمل التعاوني الجماعي على المحتوى الإبداعي: إدارة المشاريع، والتعاون، ونشر المحتوى.',
      pl: 'Khufu zaprojektował i wdrożył platformę webową Mojo przeznaczoną do zespołowej pracy nad kreacjami: zarządzanie projektami, współpraca i publikacja treści.',
      tr: 'Khufu, Mojo’nun ekip halinde kreatif içerikler üzerinde ortak çalışmaya yönelik web platformunu tasarladı ve hayata geçirdi: proje yönetimi, iş birliği ve içeriklerin yayınlanması.',
    },
    stack: ['Next.js', 'React', 'TypeScript'],
  },
  {
    slug: 'tim-management',
    name: 'Tim Management',
    internal: false,
    year: 2022,
    image: '/images/projects/tim-management.webp',
    type: { fr: 'Client · Plateforme web', en: 'Client · Web platform', es: 'Cliente · Plataforma web', de: 'Kunde · Web-Plattform', it: 'Cliente · Piattaforma web', pt: 'Cliente · Plataforma web', nl: 'Klant · Webplatform', ar: 'عميل · منصة ويب', pl: 'Klient · Platforma webowa', tr: 'Müşteri · Web platformu' },
    tagline: {
      fr: 'Refonte front-end d’une plateforme de gestion de chantiers.',
      en: 'Front-end rebuild of a construction-management platform.',
      es: 'Rediseño del front-end de una plataforma de gestión de obras.',
      de: 'Front-end-Neuaufbau einer Plattform für das Baustellenmanagement.',
      it: 'Ricostruzione del front-end di una piattaforma di gestione cantieri.',
      pt: 'Reconstrução do front-end de uma plataforma de gestão de obras.',
      nl: 'Front-end herbouw van een platform voor werfbeheer.',
      ar: 'إعادة بناء الواجهة الأمامية لمنصة إدارة مواقع البناء.',
      pl: 'Przebudowa front-endu platformy do zarządzania budowami.',
      tr: 'Bir şantiye yönetimi platformunun ön yüzünün yeniden inşası.',
    },
    description: {
      fr: 'Refonte complète du front-end de la plateforme Tim Management (BTP), avec migration de Vue.js vers React. La plateforme gère le suivi et le pointage des intervenants sur les chantiers.',
      en: 'Complete front-end rebuild of the Tim Management platform (construction industry), migrating from Vue.js to React. The platform handles tracking and time-logging of workers across job sites.',
      es: 'Rediseño completo del front-end de la plataforma Tim Management (construcción), con migración de Vue.js a React. La plataforma gestiona el seguimiento y el fichaje de los operarios en las obras.',
      de: 'Vollständiger Front-end-Neuaufbau der Plattform Tim Management (Bauwesen) mit Migration von Vue.js zu React. Die Plattform verwaltet die Nachverfolgung und Zeiterfassung der Mitarbeiter auf den Baustellen.',
      it: 'Ricostruzione completa del front-end della piattaforma Tim Management (edilizia), con migrazione da Vue.js a React. La piattaforma gestisce il monitoraggio e la timbratura degli operatori nei cantieri.',
      pt: 'Reconstrução completa do front-end da plataforma Tim Management (construção), com migração de Vue.js para React. A plataforma gere o acompanhamento e a marcação de ponto dos operários nas obras.',
      nl: 'Volledige front-end herbouw van het platform Tim Management (bouw), met migratie van Vue.js naar React. Het platform beheert de opvolging en tijdregistratie van medewerkers op de werven.',
      ar: 'إعادة بناء كاملة للواجهة الأمامية لمنصة Tim Management (البناء)، مع الانتقال من Vue.js إلى React. تدير المنصة متابعة وتسجيل حضور العاملين في مواقع البناء.',
      pl: 'Całkowita przebudowa front-endu platformy Tim Management (budownictwo), z migracją z Vue.js do React. Platforma zarządza śledzeniem i rejestracją czasu pracy pracowników na budowach.',
      tr: 'Tim Management platformunun (inşaat) ön yüzünün Vue.js’ten React’e geçişle tamamen yeniden inşası. Platform, şantiyelerdeki çalışanların takibini ve giriş kayıtlarını yönetir.',
    },
    challenge: {
      fr: 'Une plateforme de gestion de chantiers dont le front-end (Vue.js) était devenu difficile à faire évoluer, alors qu’elle est centrale pour le suivi et le pointage des intervenants.',
      en: "A construction-management platform whose front-end (Vue.js) had become hard to evolve, even though it's central to tracking and time-logging workers.",
      es: 'Una plataforma de gestión de obras cuyo front-end (Vue.js) se había vuelto difícil de evolucionar, siendo central para el seguimiento y el fichaje de los operarios.',
      de: 'Eine Plattform für das Baustellenmanagement, deren Front-end (Vue.js) schwer weiterzuentwickeln geworden war — obwohl sie zentral für die Nachverfolgung und Zeiterfassung der Mitarbeiter ist.',
      it: 'Una piattaforma di gestione cantieri il cui front-end (Vue.js) era diventato difficile da far evolvere, pur essendo centrale per il monitoraggio e la timbratura degli operatori.',
      pt: 'Uma plataforma de gestão de obras cujo front-end (Vue.js) se tornara difícil de evoluir, apesar de ser central para o acompanhamento e a marcação de ponto dos operários.',
      nl: 'Een platform voor werfbeheer waarvan de front-end (Vue.js) moeilijk te laten evolueren was geworden, terwijl het centraal staat voor de opvolging en tijdregistratie van medewerkers.',
      ar: 'منصة لإدارة مواقع البناء أصبحت واجهتها الأمامية (Vue.js) صعبة التطوير، رغم أنها محورية لمتابعة العاملين وتسجيل حضورهم.',
      pl: 'Platforma do zarządzania budowami, której front-end (Vue.js) stał się trudny do rozwijania, mimo że jest kluczowy dla śledzenia i rejestracji czasu pracy pracowników.',
      tr: 'Ön yüzü (Vue.js) geliştirilmesi zorlaşmış bir şantiye yönetimi platformu — oysa çalışanların takibi ve giriş kaydı için merkezî konumda.',
    },
    approach: {
      fr: 'Refonte complète du front-end avec migration de Vue.js vers React — une base moderne et maintenable, prête à évoluer, sans toucher au métier existant.',
      en: 'A complete front-end rebuild with migration from Vue.js to React — a modern, maintainable base, ready to evolve, without touching the existing business logic.',
      es: 'Rediseño completo del front-end con migración de Vue.js a React — una base moderna y mantenible, lista para evolucionar, sin tocar la lógica de negocio existente.',
      de: 'Vollständiger Front-end-Neuaufbau mit Migration von Vue.js zu React — eine moderne, wartbare Basis, bereit zur Weiterentwicklung, ohne die bestehende Fachlogik anzutasten.',
      it: 'Ricostruzione completa del front-end con migrazione da Vue.js a React — una base moderna e manutenibile, pronta a evolvere, senza toccare la logica di business esistente.',
      pt: 'Reconstrução completa do front-end com migração de Vue.js para React — uma base moderna e sustentável, pronta a evoluir, sem mexer na lógica de negócio existente.',
      nl: 'Volledige front-end herbouw met migratie van Vue.js naar React — een moderne, onderhoudbare basis, klaar om te evolueren, zonder de bestaande businesslogica aan te raken.',
      ar: 'إعادة بناء كاملة للواجهة الأمامية مع الانتقال من Vue.js إلى React — أساس حديث وقابل للصيانة، جاهز للتطور، دون المساس بمنطق العمل القائم.',
      pl: 'Całkowita przebudowa front-endu z migracją z Vue.js do React — nowoczesna, łatwa w utrzymaniu baza, gotowa na rozwój, bez naruszania istniejącej logiki biznesowej.',
      tr: "Vue.js'ten React'e geçişle ön yüzün tamamen yeniden inşası — mevcut iş mantığına dokunmadan, gelişmeye hazır, modern ve bakımı kolay bir temel.",
    },
    stack: ['React', 'Chakra UI', 'SASS', 'Laravel', 'PHP'],
    results: [
      { fr: 'Migration Vue.js → React', en: 'Vue.js → React migration', es: 'Migración Vue.js → React', de: 'Migration Vue.js → React', it: 'Migrazione Vue.js → React', pt: 'Migração Vue.js → React', nl: 'Migratie Vue.js → React', ar: 'الانتقال من Vue.js إلى React', pl: 'Migracja Vue.js → React', tr: 'Vue.js → React geçişi' },
    ],
  },
]

export const projects = fillLocaleDeep(projectsData) as unknown as Project[]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
