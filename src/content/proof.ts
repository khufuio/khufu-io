import { localeHrefLang, type Locale } from '@/i18n/config'
import type { LocalizedInput } from '@/i18n/localize'

/**
 * /preuve — the page every LinkedIn message, email and bio points to. It
 * answers ONE question from a founder about to sign [[15000]]: « vous y arrivez
 * vraiment, en 7 jours ? » (todo cmtt6uhx).
 *
 * ⛔ EVERY FACT ON THIS PAGE HAS ONE OF THREE SOURCES, and nothing else may be
 * added without one (decision cmu0fqj7: no figure, quote or testimonial without
 * a source):
 *   1. The real V1 durations Adrien recorded in decision cmuwqh6x (2026-10-06):
 *      OneStore.link 1 day, Traqio 3 days at most, Clokizi ~3 weeks, HerbaCRM
 *      ~3 weeks. That ruling sends them HERE, « là où le prospect cherche à
 *      vérifier » — and only here: no ad, no product card carries them.
 *   2. Git history, read on 2026-10-22 (`git log --all --reverse`), for the
 *      first day of code. Clokizi: api/web/showcase repos all start 2023-08-02,
 *      the agents' app 2023-08-15. HerbaCRM: web 2024-01-16, showcase
 *      2025-05-15, app 2026-02-23. Traqio: 2026-07-04 14:49 (UTC+7), commits on
 *      07-04, 07-05 and 07-07 — the V1 scope below is the list of those commits.
 *   3. Live checks on 2026-10-22: every product answers 200; traqio.app/signup
 *      is served and POST api.traqio.app/auth/signup validates input (400 on an
 *      empty body, no gate in AuthService.signup) — no account was created;
 *      /auth/providers says google:false, and the site states billing is not
 *      switched on (early access).
 *
 * ⛔ CLOKIZI AND HERBACRM TOOK ~3 WEEKS. Never write 7 days as their history
 * (cmuwqh6x), not even « 7 days with today's tooling ». The page explains the
 * gap (2023/2024, before the current AI tooling) and keeps the real figure.
 *
 * ⛔ WHAT IS DELIBERATELY NOT HERE, and why:
 *   - OneStore.link has no first day of code: its git history opens on
 *     2026-03-13 with 13,694 lines already written, so that commit dates an
 *     import, not a kickoff. The card says « not timestamped » rather than
 *     reconstructing one (brief of cmtt6uhx).
 *   - The « V1 Scoper » public sprint (todo cmtt6tet) is absent: on 2026-10-22
 *     no repo, commit, journal entry or social post mentions it — the todo was
 *     closed on the /sprint-v1 landing's history. Nothing to timestamp, so
 *     nothing is shown. When a public sprint does run, its row goes FIRST.
 *   - Flatchr, Peach Farmer, Tarokai are not proof of the Sprint (cmtt6x3k,
 *     cmtz6uw3): no name, no logo. « Former clients on request » is the most
 *     they get, and the answer says plainly their projects were not sprints.
 *   - « What was cut » is written as « Then » (what came next, or is still
 *     not switched on), and only where git or the live product dates it. Playbook §1 (cmu26co1) bans the rhetoric of amputation on an
 *     offer page; here the reader is checking facts, so the facts stay, in the
 *     neutral form of a sequence. Unsourced rows simply have no such line.
 *
 * ⚠️ `verifiedOn` DATES THE « TODAY » COLUMN. The Traqio line « sign-up open »
 * is true only while it is (cmvgpq9s): re-check traqio.app/signup and bump the
 * date, or remove the words.
 *
 * Copy is authored in all ten locales (no fallback — see i18n/localize.ts).
 */

export const proofVerifiedOn = '2026-10-22'

export type ProofSurface = 'web' | 'app' | 'sdk' | 'showcase'

export type ProofProduct = {
  slug: string
  name: string
  url: string
  /** Bar length on the chart, in days. Approximations are flagged by `bound`. */
  days: number
  bound: 'exact' | 'max' | 'about'
  duration: LocalizedInput
  surfaces: ProofSurface[]
  /** First day of code, from git — with the commit's own offset when known. */
  firstCode?: { date: string; iso: string }
  /** Said instead of a date when there is none to give. */
  noTimestamp?: LocalizedInput
  scope: LocalizedInput
  after?: LocalizedInput
  /** Year the work started, used by the gap explanation. */
  year?: number
  signupOpen?: boolean
}

export const proofProducts: ProofProduct[] = [
  {
    slug: 'onestore-link',
    name: 'OneStore.link',
    url: 'https://onestore.link',
    days: 1,
    bound: 'exact',
    duration: {
      fr: '1 jour',
      en: '1 day',
      es: '1 día',
      de: '1 Tag',
      it: '1 giorno',
      pt: '1 dia',
      nl: '1 dag',
      ar: 'يوم واحد',
      pl: '1 dzień',
      tr: '1 gün',
    },
    surfaces: ['web'],
    noTimestamp: {
      fr: 'Non horodaté : l’historique du code commence avec le code déjà écrit.',
      en: 'Not timestamped: the code history starts with the code already written.',
      es: 'Sin fecha: el historial del código empieza con el código ya escrito.',
      de: 'Nicht datiert: Die Code-Historie beginnt mit bereits geschriebenem Code.',
      it: 'Non datato: la cronologia del codice parte con il codice già scritto.',
      pt: 'Sem data: o histórico do código começa com o código já escrito.',
      nl: 'Niet gedateerd: de codegeschiedenis begint met code die al geschreven was.',
      ar: 'غير مؤرَّخ: يبدأ سجل الشيفرة والشيفرة مكتوبة مسبقًا.',
      pl: 'Bez daty: historia kodu zaczyna się od już napisanego kodu.',
      tr: 'Tarihlenmedi: kod geçmişi, kod zaten yazılmış hâlde başlıyor.',
    },
    scope: {
      fr: 'Un lien unique qui envoie chaque visiteur vers le bon store, App Store ou Google Play. Sans inscription.',
      en: 'One link that sends every visitor to the right store, App Store or Google Play. No sign-up.',
      es: 'Un enlace único que lleva a cada visitante a la tienda correcta, App Store o Google Play. Sin registro.',
      de: 'Ein einziger Link, der jeden Besucher in den richtigen Store schickt, App Store oder Google Play. Ohne Anmeldung.',
      it: 'Un link unico che porta ogni visitatore allo store giusto, App Store o Google Play. Senza registrazione.',
      pt: 'Um link único que leva cada visitante à loja certa, App Store ou Google Play. Sem registo.',
      nl: 'Eén link die elke bezoeker naar de juiste store stuurt, App Store of Google Play. Zonder registratie.',
      ar: 'رابط واحد يوجّه كل زائر إلى المتجر المناسب، App Store أو Google Play. بدون تسجيل.',
      pl: 'Jeden link, który kieruje każdego odwiedzającego do właściwego sklepu, App Store lub Google Play. Bez rejestracji.',
      tr: 'Her ziyaretçiyi doğru mağazaya, App Store veya Google Play’e yönlendiren tek bir bağlantı. Kayıt gerekmez.',
    },
  },
  {
    slug: 'traqio',
    name: 'Traqio',
    url: 'https://traqio.app',
    days: 3,
    bound: 'max',
    duration: {
      fr: '3 jours max',
      en: '3 days at most',
      es: '3 días como máximo',
      de: 'höchstens 3 Tage',
      it: '3 giorni al massimo',
      pt: '3 dias no máximo',
      nl: 'hooguit 3 dagen',
      ar: '3 أيام كحدّ أقصى',
      pl: 'maksymalnie 3 dni',
      tr: 'en fazla 3 gün',
    },
    surfaces: ['web', 'sdk', 'showcase'],
    firstCode: { date: '2026-07-04', iso: '2026-07-04T14:49:34+07:00' },
    year: 2026,
    signupOpen: true,
    scope: {
      fr: 'Attribution et ROAS pour apps mobiles : plateforme web avec tableau de bord, SDK React Native, iOS, Android, Flutter et Unity, inscription, site vitrine en 3 langues avec ses tarifs.',
      en: 'Install attribution and ROAS for mobile apps: web platform with its dashboard, React Native, iOS, Android, Flutter and Unity SDKs, sign-up, and a showcase site in 3 languages with its pricing.',
      es: 'Atribución y ROAS para apps móviles: plataforma web con panel, SDK de React Native, iOS, Android, Flutter y Unity, registro y web corporativa en 3 idiomas con sus precios.',
      de: 'Attribution und ROAS für Mobile-Apps: Web-Plattform mit Dashboard, SDKs für React Native, iOS, Android, Flutter und Unity, Registrierung und eine dreisprachige Website mit Preisen.',
      it: 'Attribuzione e ROAS per app mobili: piattaforma web con dashboard, SDK React Native, iOS, Android, Flutter e Unity, registrazione e sito vetrina in 3 lingue con i prezzi.',
      pt: 'Atribuição e ROAS para apps móveis: plataforma web com painel, SDK React Native, iOS, Android, Flutter e Unity, registo e site institucional em 3 línguas com os preços.',
      nl: 'Attributie en ROAS voor mobiele apps: webplatform met dashboard, SDK’s voor React Native, iOS, Android, Flutter en Unity, registratie en een drietalige website met prijzen.',
      ar: 'إسناد التثبيتات والعائد على الإنفاق الإعلاني لتطبيقات الجوال: منصة ويب بلوحة تحكم، وحِزم SDK لـ React Native وiOS وAndroid وFlutter وUnity، والتسجيل، وموقع تعريفي بثلاث لغات مع الأسعار.',
      pl: 'Atrybucja i ROAS dla aplikacji mobilnych: platforma webowa z panelem, SDK dla React Native, iOS, Androida, Fluttera i Unity, rejestracja oraz strona w 3 językach z cennikiem.',
      tr: 'Mobil uygulamalar için atıf ve ROAS: panelli web platformu, React Native, iOS, Android, Flutter ve Unity SDK’ları, kayıt ve fiyatlarıyla 3 dilde tanıtım sitesi.',
    },
    after: {
      fr: 'Connexion Google et facturation payante : pas encore activées, le produit est en accès anticipé.',
      en: 'Google sign-in and paid billing: not switched on yet, the product is in early access.',
      es: 'Acceso con Google y facturación de pago: aún no activados, el producto está en acceso anticipado.',
      de: 'Google-Login und kostenpflichtige Abrechnung: noch nicht aktiv, das Produkt ist im Early Access.',
      it: 'Accesso con Google e fatturazione a pagamento: non ancora attivi, il prodotto è in accesso anticipato.',
      pt: 'Início de sessão com Google e faturação paga: ainda não ativados, o produto está em acesso antecipado.',
      nl: 'Inloggen met Google en betaalde facturatie: nog niet actief, het product is in early access.',
      ar: 'تسجيل الدخول عبر Google والفوترة المدفوعة: لم تُفعَّل بعد، فالمنتج في مرحلة الوصول المبكر.',
      pl: 'Logowanie przez Google i płatne rozliczenia: jeszcze nie włączone, produkt jest we wczesnym dostępie.',
      tr: 'Google ile giriş ve ücretli faturalandırma: henüz açılmadı, ürün erken erişimde.',
    },
  },
  {
    slug: 'clokizi',
    name: 'Clokizi',
    url: 'https://clokizi.com',
    days: 21,
    bound: 'about',
    duration: {
      fr: '~3 semaines',
      en: '~3 weeks',
      es: '~3 semanas',
      de: '~3 Wochen',
      it: '~3 settimane',
      pt: '~3 semanas',
      nl: '~3 weken',
      ar: 'نحو 3 أسابيع',
      pl: '~3 tygodnie',
      tr: '~3 hafta',
    },
    surfaces: ['web', 'app', 'showcase'],
    firstCode: { date: '2023-08-02', iso: '2023-08-02T13:16:17+07:00' },
    year: 2023,
    scope: {
      fr: 'Plateforme web de gestion d’interventions terrain et site vitrine, démarrés le même jour ; l’app mobile des agents, démarrée 13 jours plus tard.',
      en: 'A web platform for managing field jobs and a showcase site, started the same day; the field agents’ mobile app, started 13 days later.',
      es: 'Plataforma web de gestión de intervenciones y web corporativa, iniciadas el mismo día; la app móvil de los técnicos, iniciada 13 días después.',
      de: 'Web-Plattform für Außendiensteinsätze und Website, am selben Tag begonnen; die mobile App der Techniker, 13 Tage später begonnen.',
      it: 'Piattaforma web per la gestione degli interventi sul campo e sito vetrina, avviati lo stesso giorno; l’app mobile dei tecnici, avviata 13 giorni dopo.',
      pt: 'Plataforma web de gestão de intervenções no terreno e site institucional, iniciados no mesmo dia; a app móvel dos técnicos, iniciada 13 dias depois.',
      nl: 'Webplatform voor buitendienstopdrachten en website, op dezelfde dag gestart; de mobiele app voor de monteurs, 13 dagen later gestart.',
      ar: 'منصة ويب لإدارة التدخلات الميدانية وموقع تعريفي، بدأ العمل عليهما في اليوم نفسه؛ وتطبيق الجوال للفنيين، بدأ بعد 13 يومًا.',
      pl: 'Platforma webowa do zarządzania zleceniami w terenie i strona firmowa, rozpoczęte tego samego dnia; aplikacja mobilna dla techników, rozpoczęta 13 dni później.',
      tr: 'Saha operasyonlarını yönetmek için web platformu ve tanıtım sitesi, aynı gün başladı; saha ekiplerinin mobil uygulaması 13 gün sonra başladı.',
    },
  },
  {
    slug: 'herbacrm',
    name: 'HerbaCRM',
    url: 'https://herbacrm.com',
    days: 21,
    bound: 'about',
    duration: {
      fr: '~3 semaines',
      en: '~3 weeks',
      es: '~3 semanas',
      de: '~3 Wochen',
      it: '~3 settimane',
      pt: '~3 semanas',
      nl: '~3 weken',
      ar: 'نحو 3 أسابيع',
      pl: '~3 tygodnie',
      tr: '~3 hafta',
    },
    surfaces: ['web', 'app', 'showcase'],
    firstCode: { date: '2024-01-16', iso: '2024-01-16T01:19:48+04:00' },
    year: 2024,
    scope: {
      fr: 'L’application web du CRM pour coachs bien-être, nutrition et fitness.',
      en: 'The web app of the CRM for wellness, nutrition and fitness coaches.',
      es: 'La aplicación web del CRM para coaches de bienestar, nutrición y fitness.',
      de: 'Die Web-App des CRM für Wellness-, Ernährungs- und Fitnesscoaches.',
      it: 'L’applicazione web del CRM per coach di benessere, nutrizione e fitness.',
      pt: 'A aplicação web do CRM para coaches de bem-estar, nutrição e fitness.',
      nl: 'De webapp van het CRM voor wellness-, voedings- en fitnesscoaches.',
      ar: 'تطبيق الويب لنظام CRM المخصّص لمدرّبي العافية والتغذية واللياقة.',
      pl: 'Aplikacja webowa CRM dla trenerów wellness, żywienia i fitness.',
      tr: 'Sağlıklı yaşam, beslenme ve fitness koçları için CRM’in web uygulaması.',
    },
    after: {
      fr: 'Le site vitrine (mai 2025), puis l’app mobile (février 2026).',
      en: 'The showcase site (May 2025), then the mobile app (February 2026).',
      es: 'La web corporativa (mayo de 2025) y después la app móvil (febrero de 2026).',
      de: 'Die Website (Mai 2025), danach die mobile App (Februar 2026).',
      it: 'Il sito vetrina (maggio 2025), poi l’app mobile (febbraio 2026).',
      pt: 'O site institucional (maio de 2025) e depois a app móvel (fevereiro de 2026).',
      nl: 'De website (mei 2025), daarna de mobiele app (februari 2026).',
      ar: 'الموقع التعريفي (مايو 2025)، ثم تطبيق الجوال (فبراير 2026).',
      pl: 'Strona firmowa (maj 2025), potem aplikacja mobilna (luty 2026).',
      tr: 'Tanıtım sitesi (Mayıs 2025), ardından mobil uygulama (Şubat 2026).',
    },
  },
]

export const proofSurfaceLabel: Record<ProofSurface, LocalizedInput> = {
  web: {
    fr: 'Plateforme web',
    en: 'Web platform',
    es: 'Plataforma web',
    de: 'Web-Plattform',
    it: 'Piattaforma web',
    pt: 'Plataforma web',
    nl: 'Webplatform',
    ar: 'منصة ويب',
    pl: 'Platforma webowa',
    tr: 'Web platformu',
  },
  app: {
    fr: 'App mobile',
    en: 'Mobile app',
    es: 'App móvil',
    de: 'Mobile App',
    it: 'App mobile',
    pt: 'App móvel',
    nl: 'Mobiele app',
    ar: 'تطبيق جوال',
    pl: 'Aplikacja mobilna',
    tr: 'Mobil uygulama',
  },
  sdk: {
    fr: 'SDK',
    en: 'SDKs',
    es: 'SDK',
    de: 'SDKs',
    it: 'SDK',
    pt: 'SDK',
    nl: 'SDK’s',
    ar: 'حِزم SDK',
    pl: 'SDK',
    tr: 'SDK’lar',
  },
  showcase: {
    fr: 'Site vitrine',
    en: 'Showcase site',
    es: 'Web corporativa',
    de: 'Website',
    it: 'Sito vetrina',
    pt: 'Site institucional',
    nl: 'Website',
    ar: 'موقع تعريفي',
    pl: 'Strona firmowa',
    tr: 'Tanıtım sitesi',
  },
}

export const proofCopy = {
  navLabel: {
    fr: 'Preuve',
    en: 'Proof',
    es: 'Prueba',
    de: 'Nachweis',
    it: 'Prova',
    pt: 'Prova',
    nl: 'Bewijs',
    ar: 'الإثبات',
    pl: 'Dowód',
    tr: 'Kanıt',
  },
  metaTitle: {
    fr: 'Preuve : la durée réelle de chaque V1',
    en: 'Proof: the real duration of every V1',
    es: 'Prueba: la duración real de cada V1',
    de: 'Nachweis: die echte Dauer jeder V1',
    it: 'Prova: la durata reale di ogni V1',
    pt: 'Prova: a duração real de cada V1',
    nl: 'Bewijs: de echte duur van elke V1',
    ar: 'الإثبات: المدة الحقيقية لكل نسخة أولى',
    pl: 'Dowód: rzeczywisty czas każdej V1',
    tr: 'Kanıt: her V1’in gerçek süresi',
  },
  metaDescription: {
    fr: 'OneStore.link en {osl}, Traqio en {traqio}, Clokizi et HerbaCRM en {clokizi}. Les durées réelles de nos V1, datées, et d’anciens clients joignables sur demande.',
    en: 'OneStore.link in {osl}, Traqio in {traqio}, Clokizi and HerbaCRM in {clokizi}. The real durations of our V1s, dated, and former clients you can talk to on request.',
    es: 'OneStore.link en {osl}, Traqio en {traqio}, Clokizi y HerbaCRM en {clokizi}. Las duraciones reales de nuestras V1, fechadas, y antiguos clientes disponibles a petición.',
    de: 'OneStore.link: {osl}, Traqio: {traqio}, Clokizi und HerbaCRM: {clokizi}. Die echte Dauer unserer V1, datiert – und frühere Kunden auf Anfrage erreichbar.',
    it: 'OneStore.link in {osl}, Traqio in {traqio}, Clokizi e HerbaCRM in {clokizi}. Le durate reali delle nostre V1, datate, ed ex clienti contattabili su richiesta.',
    pt: 'OneStore.link em {osl}, Traqio em {traqio}, Clokizi e HerbaCRM em {clokizi}. As durações reais das nossas V1, datadas, e antigos clientes contactáveis a pedido.',
    nl: 'OneStore.link in {osl}, Traqio in {traqio}, Clokizi en HerbaCRM in {clokizi}. De echte duur van onze V1’s, gedateerd, en oud-klanten bereikbaar op verzoek.',
    ar: 'OneStore.link في {osl}، وTraqio في {traqio}، وClokizi وHerbaCRM في {clokizi}. المدد الحقيقية لنسخنا الأولى، مؤرَّخة، مع إمكانية التواصل مع عملاء سابقين عند الطلب.',
    pl: 'OneStore.link w {osl}, Traqio w {traqio}, Clokizi i HerbaCRM w {clokizi}. Rzeczywisty czas naszych V1, z datami, i byli klienci do kontaktu na życzenie.',
    tr: 'OneStore.link: {osl}, Traqio: {traqio}, Clokizi ve HerbaCRM: {clokizi}. V1’lerimizin tarihli gerçek süreleri ve talep üzerine görüşebileceğiniz eski müşteriler.',
  },
  kicker: {
    fr: 'Preuve',
    en: 'Proof',
    es: 'Prueba',
    de: 'Nachweis',
    it: 'Prova',
    pt: 'Prova',
    nl: 'Bewijs',
    ar: 'الإثبات',
    pl: 'Dowód',
    tr: 'Kanıt',
  },
  title: {
    fr: 'Vous y arrivez vraiment, en 7 jours ?',
    en: 'Do you really pull it off in 7 days?',
    es: '¿De verdad lo consiguen en 7 días?',
    de: 'Schafft ihr das wirklich in 7 Tagen?',
    it: 'Ci riuscite davvero, in 7 giorni?',
    pt: 'Conseguem mesmo, em 7 dias?',
    nl: 'Lukt het jullie echt, in 7 dagen?',
    ar: 'هل تنجزونها فعلًا في 7 أيام؟',
    pl: 'Naprawdę dajecie radę w 7 dni?',
    tr: 'Gerçekten 7 günde başarıyor musunuz?',
  },
  subtitle: {
    fr: 'La durée réelle de chacune de nos V1, datée. Y compris les deux qui ont pris trois semaines.',
    en: 'The real duration of each of our V1s, dated. Including the two that took three weeks.',
    es: 'La duración real de cada una de nuestras V1, con fecha. Incluidas las dos que tardaron tres semanas.',
    de: 'Die echte Dauer jeder unserer V1, mit Datum. Auch die zwei, die drei Wochen gedauert haben.',
    it: 'La durata reale di ognuna delle nostre V1, datata. Comprese le due che hanno richiesto tre settimane.',
    pt: 'A duração real de cada uma das nossas V1, datada. Incluindo as duas que levaram três semanas.',
    nl: 'De echte duur van elk van onze V1’s, gedateerd. Ook de twee die drie weken duurden.',
    ar: 'المدة الحقيقية لكل نسخة أولى أطلقناها، بالتاريخ. بما فيها النسختان اللتان استغرقتا ثلاثة أسابيع.',
    pl: 'Rzeczywisty czas każdej z naszych V1, z datą. Także dwóch, które zajęły trzy tygodnie.',
    tr: 'V1’lerimizin her birinin tarihli gerçek süresi. Üç hafta süren ikisi dahil.',
  },
  chartLabel: {
    fr: 'Durée réelle de chaque V1, comparée aux 7 jours de l’offre',
    en: 'Real duration of each V1, against the 7 days of the offer',
    es: 'Duración real de cada V1, frente a los 7 días de la oferta',
    de: 'Echte Dauer jeder V1 im Vergleich zu den 7 Tagen des Angebots',
    it: 'Durata reale di ogni V1, rispetto ai 7 giorni dell’offerta',
    pt: 'Duração real de cada V1, face aos 7 dias da oferta',
    nl: 'Echte duur van elke V1, naast de 7 dagen van het aanbod',
    ar: 'المدة الحقيقية لكل نسخة أولى مقارنةً بالأيام السبعة في العرض',
    pl: 'Rzeczywisty czas każdej V1 na tle 7 dni z oferty',
    tr: 'Her V1’in gerçek süresi, teklifteki 7 günle karşılaştırmalı',
  },
  offerMark: {
    fr: 'L’offre : 7 jours',
    en: 'The offer: 7 days',
    es: 'La oferta: 7 días',
    de: 'Das Angebot: 7 Tage',
    it: 'L’offerta: 7 giorni',
    pt: 'A oferta: 7 dias',
    nl: 'Het aanbod: 7 dagen',
    ar: 'العرض: 7 أيام',
    pl: 'Oferta: 7 dni',
    tr: 'Teklif: 7 gün',
  },
  gapTitle: {
    fr: 'Pourquoi deux V1 ont pris trois semaines',
    en: 'Why two V1s took three weeks',
    es: 'Por qué dos V1 tardaron tres semanas',
    de: 'Warum zwei V1 drei Wochen gedauert haben',
    it: 'Perché due V1 hanno richiesto tre settimane',
    pt: 'Porque duas V1 levaram três semanas',
    nl: 'Waarom twee V1’s drie weken duurden',
    ar: 'لماذا استغرقت نسختان أوليان ثلاثة أسابيع',
    pl: 'Dlaczego dwie V1 zajęły trzy tygodnie',
    tr: 'İki V1 neden üç hafta sürdü',
  },
  gapBody: {
    fr: 'Clokizi et HerbaCRM ont démarré en {clokizi} et {herbacrm}, avant l’outillage IA avec lequel on construit aujourd’hui. Traqio, en {traqio}, a pris 3 jours au plus. On publie les deux chiffres : 7 jours est l’engagement de l’offre, pas l’historique de ces deux produits.',
    en: 'Clokizi and HerbaCRM started in {clokizi} and {herbacrm}, before the AI tooling we build with today. Traqio, in {traqio}, took 3 days at most. We publish both figures: 7 days is what the offer commits to, not the history of those two products.',
    es: 'Clokizi y HerbaCRM empezaron en {clokizi} y {herbacrm}, antes de las herramientas de IA con las que construimos hoy. Traqio, en {traqio}, tardó 3 días como máximo. Publicamos las dos cifras: 7 días es el compromiso de la oferta, no el historial de esos dos productos.',
    de: 'Clokizi und HerbaCRM starteten {clokizi} und {herbacrm}, vor den KI-Werkzeugen, mit denen wir heute bauen. Traqio, {traqio}, dauerte höchstens 3 Tage. Wir veröffentlichen beide Zahlen: 7 Tage sind die Zusage des Angebots, nicht die Geschichte dieser zwei Produkte.',
    it: 'Clokizi e HerbaCRM sono partiti nel {clokizi} e nel {herbacrm}, prima degli strumenti di IA con cui costruiamo oggi. Traqio, nel {traqio}, ha richiesto 3 giorni al massimo. Pubblichiamo entrambe le cifre: 7 giorni è l’impegno dell’offerta, non la storia di quei due prodotti.',
    pt: 'O Clokizi e o HerbaCRM começaram em {clokizi} e {herbacrm}, antes das ferramentas de IA com que construímos hoje. O Traqio, em {traqio}, levou 3 dias no máximo. Publicamos os dois números: 7 dias é o compromisso da oferta, não o histórico desses dois produtos.',
    nl: 'Clokizi en HerbaCRM begonnen in {clokizi} en {herbacrm}, vóór de AI-tools waarmee we vandaag bouwen. Traqio, in {traqio}, duurde hooguit 3 dagen. We publiceren beide cijfers: 7 dagen is de toezegging van het aanbod, niet de geschiedenis van die twee producten.',
    ar: 'بدأ Clokizi وHerbaCRM في {clokizi} و{herbacrm}، قبل أدوات الذكاء الاصطناعي التي نبني بها اليوم. أما Traqio، في {traqio}، فاستغرق 3 أيام كحدّ أقصى. ننشر الرقمين معًا: الأيام السبعة هي التزام العرض، لا تاريخ هذين المنتجين.',
    pl: 'Clokizi i HerbaCRM ruszyły w latach {clokizi} i {herbacrm}, przed narzędziami AI, z którymi budujemy dziś. Traqio ({traqio}) zajęło maksymalnie 3 dni. Publikujemy obie liczby: 7 dni to zobowiązanie oferty, nie historia tych dwóch produktów.',
    tr: 'Clokizi ve HerbaCRM, bugün kullandığımız yapay zekâ araçlarından önce, {clokizi} ve {herbacrm} yılında başladı. Traqio ise {traqio} tarihinde en fazla 3 gün sürdü. İki rakamı da yayınlıyoruz: 7 gün teklifin taahhüdüdür, bu iki ürünün geçmişi değil.',
  },
  label: {
    duration: {
      fr: 'Durée réelle',
      en: 'Real duration',
      es: 'Duración real',
      de: 'Echte Dauer',
      it: 'Durata reale',
      pt: 'Duração real',
      nl: 'Echte duur',
      ar: 'المدة الحقيقية',
      pl: 'Rzeczywisty czas',
      tr: 'Gerçek süre',
    },
    firstCode: {
      fr: 'Premier jour de code',
      en: 'First day of code',
      es: 'Primer día de código',
      de: 'Erster Code-Tag',
      it: 'Primo giorno di codice',
      pt: 'Primeiro dia de código',
      nl: 'Eerste codedag',
      ar: 'أول يوم من كتابة الشيفرة',
      pl: 'Pierwszy dzień kodu',
      tr: 'İlk kod günü',
    },
    scope: {
      fr: 'Périmètre',
      en: 'Scope',
      es: 'Alcance',
      de: 'Umfang',
      it: 'Perimetro',
      pt: 'Âmbito',
      nl: 'Scope',
      ar: 'النطاق',
      pl: 'Zakres',
      tr: 'Kapsam',
    },
    // « Then », not « after the V1 »: git dates when each surface STARTED, not
    // where the V1 ended, so the label claims no boundary it cannot source.
    after: {
      fr: 'Ensuite',
      en: 'Then',
      es: 'Después',
      de: 'Danach',
      it: 'Poi',
      pt: 'Depois',
      nl: 'Daarna',
      ar: 'بعد ذلك',
      pl: 'Potem',
      tr: 'Sonra',
    },
    today: {
      fr: 'Aujourd’hui',
      en: 'Today',
      es: 'Hoy',
      de: 'Heute',
      it: 'Oggi',
      pt: 'Hoje',
      nl: 'Vandaag',
      ar: 'اليوم',
      pl: 'Dziś',
      tr: 'Bugün',
    },
  },
  live: {
    fr: 'En production',
    en: 'In production',
    es: 'En producción',
    de: 'In Produktion',
    it: 'In produzione',
    pt: 'Em produção',
    nl: 'In productie',
    ar: 'قيد التشغيل',
    pl: 'Na produkcji',
    tr: 'Yayında',
  },
  signupOpen: {
    fr: 'inscription ouverte',
    en: 'you can sign up today',
    es: 'registro abierto',
    de: 'Registrierung offen',
    it: 'registrazione aperta',
    pt: 'registo aberto',
    nl: 'registratie open',
    ar: 'التسجيل مفتوح',
    pl: 'rejestracja otwarta',
    tr: 'kayıt açık',
  },
  verified: {
    fr: 'États vérifiés le {date}.',
    en: 'Status checked on {date}.',
    es: 'Estado comprobado el {date}.',
    de: 'Status geprüft am {date}.',
    it: 'Stato verificato il {date}.',
    pt: 'Estado verificado a {date}.',
    nl: 'Status gecontroleerd op {date}.',
    ar: 'تم التحقق من الحالة في {date}.',
    pl: 'Stan sprawdzony {date}.',
    tr: 'Durum {date} tarihinde kontrol edildi.',
  },
  faqTitle: {
    fr: 'Les questions qu’on nous pose',
    en: 'The questions we get asked',
    es: 'Las preguntas que nos hacen',
    de: 'Die Fragen, die man uns stellt',
    it: 'Le domande che ci fanno',
    pt: 'As perguntas que nos fazem',
    nl: 'De vragen die we krijgen',
    ar: 'الأسئلة التي تُطرح علينا',
    pl: 'Pytania, które słyszymy',
    tr: 'Bize sorulan sorular',
  },
  /**
   * Q/R — the format generative engines quote most directly, mirrored in the
   * FAQPage JSON-LD. Tokens: {osl} {traqio} {clokizi} {herbacrm} are each
   * product's duration, {verified} the check date — derived, never typed.
   * ⛔ One answer carries a link (the references email), no more (playbook §3).
   */
  faq: [
    {
      q: {
        fr: 'Vous y arrivez vraiment, en 7 jours ?',
        en: 'Do you really pull it off in 7 days?',
        es: '¿De verdad lo consiguen en 7 días?',
        de: 'Schafft ihr das wirklich in 7 Tagen?',
        it: 'Ci riuscite davvero, in 7 giorni?',
        pt: 'Conseguem mesmo, em 7 dias?',
        nl: 'Lukt het jullie echt, in 7 dagen?',
        ar: 'هل تنجزونها فعلًا في 7 أيام؟',
        pl: 'Naprawdę dajecie radę w 7 dni?',
        tr: 'Gerçekten 7 günde başarıyor musunuz?',
      },
      a: {
        fr: 'Nos deux V1 les plus rapides sont passées sous les 7 jours : OneStore.link en {osl}, Traqio en {traqio}. Clokizi et HerbaCRM, plus anciennes, ont pris {clokizi}.',
        en: 'Our two fastest V1s came in under 7 days: OneStore.link in {osl}, Traqio in {traqio}. Clokizi and HerbaCRM, older, took {clokizi}.',
        es: 'Nuestras dos V1 más rápidas quedaron por debajo de 7 días: OneStore.link en {osl}, Traqio en {traqio}. Clokizi y HerbaCRM, más antiguas, tardaron {clokizi}.',
        de: 'Unsere zwei schnellsten V1 lagen unter 7 Tagen: OneStore.link: {osl}, Traqio: {traqio}. Clokizi und HerbaCRM, älter, brauchten {clokizi}.',
        it: 'Le nostre due V1 più rapide sono rimaste sotto i 7 giorni: OneStore.link in {osl}, Traqio in {traqio}. Clokizi e HerbaCRM, più vecchie, hanno richiesto {clokizi}.',
        pt: 'As nossas duas V1 mais rápidas ficaram abaixo dos 7 dias: OneStore.link em {osl}, Traqio em {traqio}. O Clokizi e o HerbaCRM, mais antigos, levaram {clokizi}.',
        nl: 'Onze twee snelste V1’s bleven onder de 7 dagen: OneStore.link in {osl}, Traqio in {traqio}. Clokizi en HerbaCRM, ouder, duurden {clokizi}.',
        ar: 'جاءت أسرع نسختين أوليين لدينا دون 7 أيام: OneStore.link في {osl}، وTraqio في {traqio}. أما Clokizi وHerbaCRM، وهما أقدم، فاستغرقا {clokizi}.',
        pl: 'Nasze dwie najszybsze V1 zmieściły się poniżej 7 dni: OneStore.link w {osl}, Traqio w {traqio}. Starsze Clokizi i HerbaCRM zajęły {clokizi}.',
        tr: 'En hızlı iki V1’imiz 7 günün altında kaldı: OneStore.link {osl}, Traqio {traqio} sürdü. Daha eski olan Clokizi ve HerbaCRM ise {clokizi} sürdü.',
      },
    },
    {
      q: {
        fr: 'Pourquoi l’offre dit 7 jours si deux produits ont pris trois semaines ?',
        en: 'Why does the offer say 7 days if two products took three weeks?',
        es: '¿Por qué la oferta dice 7 días si dos productos tardaron tres semanas?',
        de: 'Warum sagt das Angebot 7 Tage, wenn zwei Produkte drei Wochen gebraucht haben?',
        it: 'Perché l’offerta dice 7 giorni se due prodotti hanno richiesto tre settimane?',
        pt: 'Porque é que a oferta diz 7 dias se dois produtos levaram três semanas?',
        nl: 'Waarom zegt het aanbod 7 dagen als twee producten drie weken duurden?',
        ar: 'لماذا يقول العرض 7 أيام إذا كان منتجان قد استغرقا ثلاثة أسابيع؟',
        pl: 'Dlaczego oferta mówi 7 dni, skoro dwa produkty zajęły trzy tygodnie?',
        tr: 'İki ürün üç hafta sürdüyse teklif neden 7 gün diyor?',
      },
      a: {
        fr: 'Parce que 7 jours est un engagement daté au contrat, pas une moyenne de notre passé. Ces deux V1 datent d’avant l’outillage IA actuel : on publie leur durée réelle plutôt que de la réécrire.',
        en: 'Because 7 days is a commitment with a date in the contract, not an average of our past. Those two V1s predate today’s AI tooling: we publish their real duration rather than rewrite it.',
        es: 'Porque 7 días es un compromiso con fecha en el contrato, no una media de nuestro pasado. Esas dos V1 son anteriores a las herramientas de IA actuales: publicamos su duración real en lugar de reescribirla.',
        de: 'Weil 7 Tage eine Zusage mit Datum im Vertrag sind, kein Durchschnitt unserer Vergangenheit. Diese zwei V1 stammen aus der Zeit vor den heutigen KI-Werkzeugen: Wir veröffentlichen ihre echte Dauer, statt sie umzuschreiben.',
        it: 'Perché 7 giorni è un impegno con una data nel contratto, non una media del nostro passato. Quelle due V1 precedono gli strumenti di IA attuali: pubblichiamo la loro durata reale invece di riscriverla.',
        pt: 'Porque 7 dias é um compromisso com data no contrato, não uma média do nosso passado. Essas duas V1 são anteriores às ferramentas de IA atuais: publicamos a duração real em vez de a reescrever.',
        nl: 'Omdat 7 dagen een toezegging is met een datum in het contract, geen gemiddelde van ons verleden. Die twee V1’s dateren van vóór de huidige AI-tools: we publiceren hun echte duur in plaats van die te herschrijven.',
        ar: 'لأن الأيام السبعة التزام بتاريخ مكتوب في العقد، لا متوسط لماضينا. هاتان النسختان سابقتان لأدوات الذكاء الاصطناعي الحالية: ننشر مدتهما الحقيقية بدل إعادة كتابتها.',
        pl: 'Bo 7 dni to zobowiązanie z datą w umowie, a nie średnia z naszej przeszłości. Te dwie V1 powstały przed dzisiejszymi narzędziami AI: publikujemy ich rzeczywisty czas, zamiast go przepisywać.',
        tr: 'Çünkü 7 gün, sözleşmeye tarihiyle yazılan bir taahhüttür; geçmişimizin ortalaması değil. Bu iki V1 bugünkü yapay zekâ araçlarından önceye ait: gerçek sürelerini yeniden yazmak yerine yayınlıyoruz.',
      },
    },
    {
      q: {
        fr: 'Ce sont des projets clients ?',
        en: 'Are these client projects?',
        es: '¿Son proyectos de clientes?',
        de: 'Sind das Kundenprojekte?',
        it: 'Sono progetti di clienti?',
        pt: 'São projetos de clientes?',
        nl: 'Zijn dit klantprojecten?',
        ar: 'هل هذه مشاريع لعملاء؟',
        pl: 'Czy to projekty klientów?',
        tr: 'Bunlar müşteri projeleri mi?',
      },
      a: {
        fr: 'Non, ce sont nos propres produits : les seuls dont on peut publier la chronologie complète. Ils sont en ligne, vous pouvez les ouvrir.',
        en: 'No, they are our own products: the only ones whose full timeline we can publish. They are live, you can open them.',
        es: 'No, son nuestros propios productos: los únicos cuya cronología completa podemos publicar. Están en línea, puede abrirlos.',
        de: 'Nein, es sind unsere eigenen Produkte: die einzigen, deren vollständige Chronologie wir veröffentlichen dürfen. Sie sind online, Sie können sie öffnen.',
        it: 'No, sono prodotti nostri: gli unici di cui possiamo pubblicare la cronologia completa. Sono online, può aprirli.',
        pt: 'Não, são produtos nossos: os únicos cuja cronologia completa podemos publicar. Estão online, pode abri-los.',
        nl: 'Nee, het zijn onze eigen producten: de enige waarvan we de volledige tijdlijn kunnen publiceren. Ze staan online, u kunt ze openen.',
        ar: 'لا، إنها منتجاتنا الخاصة: الوحيدة التي يمكننا نشر تسلسلها الزمني كاملًا. وهي متاحة على الإنترنت، يمكنك فتحها.',
        pl: 'Nie, to nasze własne produkty: jedyne, których pełną chronologię możemy opublikować. Działają online, można je otworzyć.',
        tr: 'Hayır, bunlar kendi ürünlerimiz: tüm zaman çizelgesini yayınlayabildiğimiz tek ürünler. Yayındalar, açıp bakabilirsiniz.',
      },
    },
    {
      q: {
        fr: 'Puis-je parler à d’anciens clients avant de signer ?',
        en: 'Can I talk to former clients before signing?',
        es: '¿Puedo hablar con antiguos clientes antes de firmar?',
        de: 'Kann ich vor der Unterschrift mit früheren Kunden sprechen?',
        it: 'Posso parlare con ex clienti prima di firmare?',
        pt: 'Posso falar com antigos clientes antes de assinar?',
        nl: 'Kan ik vóór het tekenen met oud-klanten praten?',
        ar: 'هل يمكنني التحدث مع عملاء سابقين قبل التوقيع؟',
        pl: 'Czy mogę porozmawiać z byłymi klientami przed podpisaniem?',
        tr: 'İmzalamadan önce eski müşterilerle konuşabilir miyim?',
      },
      a: {
        fr: 'Oui, sur demande, avant signature. Leurs projets n’étaient pas des sprints de 7 jours : ils vous parleront de notre façon de livrer, pas de ce délai.',
        en: 'Yes, on request, before you sign. Their projects were not 7-day sprints: they will tell you how we deliver, not about that timeline.',
        es: 'Sí, a petición, antes de firmar. Sus proyectos no fueron sprints de 7 días: le hablarán de cómo entregamos, no de ese plazo.',
        de: 'Ja, auf Anfrage, vor der Unterschrift. Ihre Projekte waren keine 7-Tage-Sprints: Sie erzählen Ihnen, wie wir liefern, nicht von dieser Frist.',
        it: 'Sì, su richiesta, prima della firma. I loro progetti non erano sprint di 7 giorni: le racconteranno come consegniamo, non quella tempistica.',
        pt: 'Sim, a pedido, antes de assinar. Os projetos deles não foram sprints de 7 dias: vão falar-lhe da nossa forma de entregar, não desse prazo.',
        nl: 'Ja, op verzoek, vóór het tekenen. Hun projecten waren geen sprints van 7 dagen: ze vertellen u hoe we leveren, niet over die termijn.',
        ar: 'نعم، عند الطلب وقبل التوقيع. لم تكن مشاريعهم سباقات من 7 أيام: سيحدثونك عن طريقتنا في التسليم، لا عن هذه المدة.',
        pl: 'Tak, na życzenie, przed podpisaniem. Ich projekty nie były 7-dniowymi sprintami: opowiedzą o tym, jak dostarczamy, nie o tym terminie.',
        tr: 'Evet, talep üzerine, imzadan önce. Onların projeleri 7 günlük sprintler değildi: size bu süreyi değil, nasıl teslim ettiğimizi anlatırlar.',
      },
      ask: {
        fr: 'Demander des références',
        en: 'Ask for references',
        es: 'Pedir referencias',
        de: 'Referenzen anfragen',
        it: 'Chiedere referenze',
        pt: 'Pedir referências',
        nl: 'Referenties aanvragen',
        ar: 'طلب مراجع',
        pl: 'Poproś o referencje',
        tr: 'Referans iste',
      },
    },
    {
      q: {
        fr: 'D’où viennent ces dates ?',
        en: 'Where do these dates come from?',
        es: '¿De dónde salen estas fechas?',
        de: 'Woher stammen diese Daten?',
        it: 'Da dove vengono queste date?',
        pt: 'De onde vêm estas datas?',
        nl: 'Waar komen deze data vandaan?',
        ar: 'من أين تأتي هذه التواريخ؟',
        pl: 'Skąd pochodzą te daty?',
        tr: 'Bu tarihler nereden geliyor?',
      },
      a: {
        fr: 'Les durées sont celles que nous avons relevées sur chaque V1. Les premiers jours de code sont lus dans l’historique du code source. Quand une date manque, on l’écrit au lieu de la reconstituer. États vérifiés le {verified}.',
        en: 'The durations are the ones we recorded for each V1. The first days of code are read from the source code history. When a date is missing, we say so instead of reconstructing it. Status checked on {verified}.',
        es: 'Las duraciones son las que registramos en cada V1. Los primeros días de código se leen en el historial del código fuente. Cuando falta una fecha, lo decimos en lugar de reconstruirla. Estado comprobado el {verified}.',
        de: 'Die Dauern sind die, die wir für jede V1 festgehalten haben. Die ersten Code-Tage stammen aus der Historie des Quellcodes. Fehlt ein Datum, sagen wir es, statt es zu rekonstruieren. Status geprüft am {verified}.',
        it: 'Le durate sono quelle che abbiamo registrato per ogni V1. I primi giorni di codice sono letti nella cronologia del codice sorgente. Quando una data manca, lo diciamo invece di ricostruirla. Stato verificato il {verified}.',
        pt: 'As durações são as que registámos em cada V1. Os primeiros dias de código são lidos no histórico do código-fonte. Quando falta uma data, dizemo-lo em vez de a reconstruir. Estado verificado a {verified}.',
        nl: 'De duur is wat we voor elke V1 hebben vastgelegd. De eerste codedagen komen uit de geschiedenis van de broncode. Ontbreekt een datum, dan zeggen we dat in plaats van hem te reconstrueren. Status gecontroleerd op {verified}.',
        ar: 'المدد هي ما سجّلناه لكل نسخة أولى. أما أيام الشيفرة الأولى فمأخوذة من سجل الشيفرة المصدرية. وحين يغيب تاريخ نقول ذلك بدل إعادة تركيبه. تم التحقق من الحالة في {verified}.',
        pl: 'Czasy to te, które zanotowaliśmy dla każdej V1. Pierwsze dni kodu odczytano z historii kodu źródłowego. Gdy brakuje daty, mówimy o tym zamiast ją odtwarzać. Stan sprawdzony {verified}.',
        tr: 'Süreler, her V1 için kaydettiğimiz sürelerdir. İlk kod günleri kaynak kod geçmişinden okunur. Bir tarih eksikse, onu yeniden kurmak yerine eksik olduğunu yazarız. Durum {verified} tarihinde kontrol edildi.',
      },
    },
  ],
  ctaTitle: {
    fr: 'Le même engagement, sur votre produit.',
    en: 'The same commitment, on your product.',
    es: 'El mismo compromiso, para su producto.',
    de: 'Dieselbe Zusage, für Ihr Produkt.',
    it: 'Lo stesso impegno, sul suo prodotto.',
    pt: 'O mesmo compromisso, no seu produto.',
    nl: 'Dezelfde toezegging, voor uw product.',
    ar: 'الالتزام نفسه، على منتجك.',
    pl: 'To samo zobowiązanie, dla Twojego produktu.',
    tr: 'Aynı taahhüt, sizin ürününüz için.',
  },
  ctaBody: {
    fr: 'Une V1 en production en 7 jours, prix fixe, date inscrite au contrat.',
    en: 'A V1 in production in 7 days, fixed price, date written into the contract.',
    es: 'Una V1 en producción en 7 días, precio fijo, fecha escrita en el contrato.',
    de: 'Eine V1 in Produktion in 7 Tagen, Festpreis, Datum im Vertrag.',
    it: 'Una V1 in produzione in 7 giorni, prezzo fisso, data scritta nel contratto.',
    pt: 'Uma V1 em produção em 7 dias, preço fixo, data escrita no contrato.',
    nl: 'Een V1 in productie in 7 dagen, vaste prijs, datum in het contract.',
    ar: 'نسخة أولى قيد التشغيل خلال 7 أيام، بسعر ثابت، وتاريخ مكتوب في العقد.',
    pl: 'V1 na produkcji w 7 dni, stała cena, data wpisana do umowy.',
    tr: '7 günde yayında bir V1, sabit fiyat, sözleşmeye yazılan tarih.',
  },
  ctaButton: {
    fr: 'Voir l’offre Sprint V1',
    en: 'See the Sprint V1 offer',
    es: 'Ver la oferta Sprint V1',
    de: 'Das Sprint-V1-Angebot ansehen',
    it: 'Vedere l’offerta Sprint V1',
    pt: 'Ver a oferta Sprint V1',
    nl: 'Bekijk het Sprint V1-aanbod',
    ar: 'اطّلع على عرض Sprint V1',
    pl: 'Zobacz ofertę Sprint V1',
    tr: 'Sprint V1 teklifini gör',
  },
} as const

/** Replace `{token}` placeholders. A token left in the output is a bug the check script catches. */
export function fillTokens(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => values[key] ?? whole)
}

export function formatProofDate(locale: Locale, isoDate: string, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(localeHrefLang[locale], { ...options, timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`),
  )
}

export function proofProduct(slug: string): ProofProduct {
  const p = proofProducts.find((x) => x.slug === slug)
  if (!p) throw new Error(`proof: no product "${slug}"`)
  return p
}

/** The gap paragraph, its years and month read from the products — never typed. */
export function proofGap(locale: Locale): string {
  const traqio = proofProduct('traqio').firstCode
  return fillTokens(proofCopy.gapBody[locale], {
    clokizi: String(proofProduct('clokizi').year),
    herbacrm: String(proofProduct('herbacrm').year),
    traqio: traqio ? formatProofDate(locale, traqio.date, { month: 'long', year: 'numeric' }) : '',
  })
}
