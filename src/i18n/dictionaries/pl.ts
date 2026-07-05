import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('pl-PL')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const pl: Dictionary = {
  meta: {
    locale: 'pl',
    brandSuffix: 'Khufu — Twoje V1 w tydzień',
  },

  nav: {
    offers: 'Oferta',
    maintenance: 'Utrzymanie',
    work: 'Realizacje',
    method: 'Metoda',
    about: 'O nas',
    contact: 'Kontakt',
    cta: 'Zarezerwuj sprint',
  },

  common: {
    seeWork: 'Zobacz realizacje',
    bookSprint: 'Zarezerwuj sprint',
    talkToUs: 'Porozmawiaj z Khufu',
    from: 'Od',
    perDay: '/ dzień',
    perMonth: '/ miesiąc',
    days: 'dni',
    learnMore: 'Dowiedz się więcej',
    getStarted: 'Zacznij',
    draftBadge: 'Podgląd',
  },

  home: {
    heroKicker: 'Agencja produktowa AI-native',
    heroTitle: 'Twoje V1 w tydzień.',
    heroSubtitle: `Projektujemy, budujemy i wdrażamy Twój SaaS lub aplikację mobilną w ${site.v1Days} dni. Stała cena: ${eur(site.v1PriceEUR)}.`,
    heroPrimaryCta: 'Zarezerwuj sprint',
    heroSecondaryCta: 'Zobacz realizacje',
    heroProof: `${site.v1Days} dni · ryczałt ${eur(site.v1PriceEUR)} · kod dostarczony, na produkcji`,
    heroFigures: [
      { value: `${site.v1Days} dni`, label: 'od briefu do produkcji' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'stała cena, wszystko wliczone' },
    ],

    statsTitle: 'Co znaczy „jeden tydzień”',
    stats: [
      { value: `${site.v1Days} dni`, label: 'od kickoffu do V1 na produkcji' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'ryczałt Sprint V1, zakres ustalony z góry' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'stawka dzienna remote (200 €/h) na dalszy ciąg' },
      { value: '100 %', label: 'kod dostarczony, hostowany, Twój' },
    ],

    problemTitle: 'Klasyczna agencja potrzebuje 3 miesięcy? Ty nie masz 3 miesięcy.',
    problemBody:
      'Niekończące się cykle, mgliste wyceny i ciągłe uzgodnienia zabijają projekty jeszcze przed startem. Khufu robi odwrotnie: ciasny zakres, szybkie decyzje i V1 naprawdę gotowe do uruchomienia na koniec tygodnia.',

    howTitle: 'Jak działamy tak szybko',
    how: [
      {
        title: 'AI-native, od początku do końca',
        body: 'Kodujemy wspierani przez AI na każdym etapie — design, dev, testy, dokumentacja. Ta sama praca w ułamku czasu, bez utraty jakości.',
      },
      {
        title: 'Jeden sprawdzony stack',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. Niczego nie wymyślamy na nowo: składamy sprawdzoną bazę, gotową do skalowania.',
      },
      {
        title: 'Founder-operator u steru',
        body: 'Khufu wypuściło własne produkty (OneStore.link, Clokizi, HerbaCRM…). Budujemy Twój produkt jak własny: nastawieni na wynik, nie na fakturowanie.',
      },
    ],

    offersTitle: 'Trzy sposoby współpracy z Khufu',
    offersSubtitle: 'Od błyskawicznego startu po wsparcie na dłuższą metę.',

    workTitle: 'Produkty, nie slajdy',
    workSubtitle: 'Wybór produktów zaprojektowanych i dostarczonych przez Khufu.',
    workCta: 'Wszystkie realizacje',

    clientsTitle: 'Zaufali nam',
    testimonialsTitle: 'Co mówią',

    finalCtaTitle: 'Twoje V1, na produkcji w piątek.',
    finalCtaBody: 'Powiedz nam, co chcesz uruchomić. Odpowiadamy w 24 h z zakresem i datą.',
    finalCtaButton: 'Zarezerwuj sprint',
  },

  offers: {
    metaTitle: 'Oferta i cennik',
    metaDescription: `Sprint V1 w ${site.v1Days} dni od ${eur(site.v1PriceEUR)}, miesięczne Full Maintenance i wsparcie remote za ${eur(site.dailyRateEUR)}/dzień (200 €/h).`,
    title: 'Jasna oferta, ceny na widoku.',
    subtitle: 'Żadnych ciągnących się wycen. Wiesz dokładnie, ile płacisz i co dostajesz.',
    flagshipBadge: 'Nasza flagowa oferta',
    detailCta: 'Dowiedz się więcej',
    sprintCta: 'Poznaj Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        price: `${eur(site.v1PriceEUR)}`,
        priceEur: site.v1PriceEUR,
        priceNote: 'ryczałt',
        pitch: `Twoja pierwsza wersja, zaprojektowana i dostarczona w ${site.v1Days} dni.`,
        featured: true,
        features: [
          'Doprecyzowanie zakresu i projekt produktu',
          'Rozwój SaaS lub aplikacji mobilnej',
          'Wdrożenie na produkcję + hosting',
          'Dostarczony kod źródłowy, Twój',
          'Przekazanie i dokumentacja',
        ],
        cta: 'Zarezerwuj sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        price: 'od 1 490 €',
        priceEur: 1490,
        pricePrefix: 'od ',
        priceNote: '/ miesiąc',
        pitch: 'Utrzymujemy Twój produkt przy życiu: infra, wsparcie i dni deweloperskie w cenie.',
        featured: false,
        features: [
          'Zarządzana infra: hosting, monitoring, backupy, bezpieczeństwo',
          'Wsparcie z SLA (gwarantowany czas reakcji)',
          'Dni deweloperskie wliczone co miesiąc',
          'Aktualizacje i poprawki',
          'Raport miesięczny',
        ],
        cta: 'Zobacz progi',
      },
      {
        id: 'regie',
        name: 'Remote',
        price: `${eur(site.dailyRateEUR)}`,
        priceEur: site.dailyRateEUR,
        priceNote: '/ dzień',
        pitch: 'Senioralne wsparcie w 100 % remote, rozliczane godzinowo — 200 €/h.',
        featured: false,
        features: [
          '100 % remote',
          '200 €/h — rozliczenie co godzinę',
          'Rozwój, architektura, doradztwo',
          'Bez zobowiązania czasowego',
        ],
        cta: 'Porozmawiaj z Khufu',
      },
    ],
    remoteNote:
      'Praca stacjonarna możliwa: minimum 1 tydzień, +50 % do stawki, z kosztami (dojazd, nocleg) po stronie klienta.',
    firmPriceNote: 'Ceny stałe w euro. Kwoty podane w dolarach są orientacyjne, według przybliżonego kursu.',
    guaranteesTitle: 'Co gwarantujemy',
    guarantees: [
      'Spisany i zatwierdzony zakres przed startem.',
      'Datę dostawy, dotrzymaną.',
      'Kod źródłowy należy do Ciebie, od pierwszego dnia.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — Twój produkt w 7 dni',
    metaDescription:
      'Sprint V1 od Khufu: SaaS lub aplikacja mobilna zaprojektowana, zbudowana i wdrożona na produkcję w 7 dni, za stałą cenę 15 000 €.',
    kicker: 'Flagowa oferta',
    title: 'Twoje V1 w 7 dni. Stała cena.',
    subtitle:
      'Nasza główna oferta: projektujemy, budujemy i wdrażamy na produkcję Twój SaaS lub aplikację mobilną w tydzień — zakres ustalony z góry, 15 000 € wszystko wliczone.',
    includesTitle: 'Co jest w cenie',
    processTitle: 'Przebieg, dzień po dniu',
    ctaTitle: 'Gotów uruchomić swoje V1?',
    ctaBody: 'Powiedz nam, co chcesz uruchomić. Odpowiedź w 24 h z zakresem i datą.',
    ctaButton: 'Zarezerwuj sprint',
  },

  remotePage: {
    metaTitle: 'Remote — wsparcie produktowe na godziny',
    metaDescription:
      'Senioralne wsparcie w 100 % remote dla Twojego produktu: rozwój, architektura i doradztwo, rozliczane 200 €/h co godzinę.',
    kicker: 'Remote',
    title: 'Senioralne wsparcie, w 100 % remote.',
    subtitle:
      'Potrzebujesz mocy deweloperskiej na żądanie? Działamy w remote na Twoim produkcie: rozwój, architektura, doradztwo — rozliczane godzinowo, bez zobowiązań.',
    includesTitle: 'Co obejmuje',
    ctaTitle: 'Potrzebujesz wsparcia?',
    ctaBody: 'Powiedz nam, na jakim jesteś etapie i czego potrzebujesz. Wrócimy do Ciebie w 24 h.',
    ctaButton: 'Porozmawiaj z Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, wsparcie i dev',
    metaDescription:
      'Miesięczny abonament Khufu: zarządzana infrastruktura, wsparcie z SLA i dni deweloperskie w cenie, aby rozwijać Twój produkt.',
    kicker: 'Full Maintenance',
    title: 'Dostarczyliśmy Twoje V1. Rozwijamy je dalej.',
    subtitle:
      'Jeden miesięczny abonament, który pokrywa infrastrukturę, wsparcie i rozwój produktu. Ty skupiasz się na biznesie, my zajmujemy się resztą.',
    includesTitle: 'Co pokrywa abonament',
    includes: [
      {
        title: 'Zarządzana infra',
        body: 'Hosting, wdrożenia, monitoring, uptime, backupy i bezpieczeństwo. Twój produkt pozostaje online i aktualny.',
      },
      {
        title: 'Wsparcie',
        body: 'Bezpośredni kanał z jasnym SLA. Odpowiadamy, naprawiamy, nie zostawiamy Cię samego z bugiem na produkcji.',
      },
      {
        title: 'Dni deweloperskie',
        body: 'Określona pula dni deweloperskich wliczona co miesiąc na nowe funkcje i usprawnienia.',
      },
    ],
    popularBadge: 'Popularny',
    tiersTitle: 'Trzy progi',
    tiersSubtitle: 'Wybierz poziom zaangażowania dopasowany do potrzeb. Ceny są orientacyjne.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1 490 €',
        priceEur: 1490,
        priceNote: '/ miesiąc',
        pitch: 'Aby utrzymać stabilny produkt i go rozwijać.',
        featured: false,
        features: [
          'Zarządzana infra + monitoring',
          'Wsparcie w 48 h roboczych',
          '7 h dev / miesiąc w cenie',
          'Raport miesięczny',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3 900 €',
        priceEur: 3900,
        priceNote: '/ miesiąc',
        pitch: 'Dla produktu, który stale się rozwija.',
        featured: true,
        features: [
          'Wszystko ze Starter',
          'Wsparcie w 24 h roboczych',
          '21 h dev / miesiąc w cenie',
          'Miesięczny przegląd produktu',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Wycena indywidualna',
        priceNote: '',
        pitch: 'Dla krytycznego produktu w silnym wzroście.',
        featured: false,
        features: [
          'Wszystko z Growth',
          'Wsparcie priorytetowe, SLA na miarę',
          'Dedykowane dni deweloperskie',
          'Współdzielony roadmap',
        ],
      },
    ],
    devNote:
      'Zobowiązanie na 6 miesięcy. Obowiązkowa konfiguracja narzędzi trackingu na starcie: 1 dzień (1 200 €). Dodatkowe godziny dev rozliczane 200 €/h.',
    ctaTitle: 'Chcesz oddać utrzymanie w nasze ręce?',
    ctaBody: 'Powiedz nam, na jakim etapie jest Twój produkt, a zaproponujemy odpowiedni próg.',
    ctaButton: 'Porozmawiaj z Khufu',
  },

  method: {
    metaTitle: 'Metoda — Twoje V1 w 7 dni',
    metaDescription:
      'Jak Khufu dostarcza V1 w tydzień: przebieg dzień po dniu, od doprecyzowania zakresu po produkcję, przyspieszony przez AI.',
    kicker: 'Metoda',
    title: 'Siedem dni, produkt gotowy do startu.',
    subtitle: 'Ciasny i przejrzysty przebieg. Wiesz dokładnie, co dzieje się każdego dnia.',
    days: [
      { day: 'Dzień 1', title: 'Zakres', body: 'Definiujemy dokładny zakres, kluczowe ścieżki i architekturę techniczną. Zatwierdzasz, zanim napiszemy choćby jedną linię.' },
      { day: 'Dzień 2–3', title: 'Rozwój', body: 'Bierzemy się za rdzeń produktu: front, back i bazę danych. Czysty kod i jasna architektura od pierwszego commita.' },
      { day: 'Dzień 4', title: 'Infra i testy', body: 'Konfiguracja infrastruktury, testy, wydajność i bezpieczeństwo. Wzmacniamy fundamenty przed iteracjami.' },
      { day: 'Dzień 5–6', title: 'Iteracje', body: 'Rozwój sterowany Twoim feedbackiem: dostrajamy produkt na żywo, w ciągłym kontakcie z Tobą.' },
      { day: 'Dzień 7', title: 'Wdrożenie na produkcję', body: 'Deployment, konfiguracja CI/CD, hosting i przekazanie. Twoje V1 jest online, w Twoich rękach.' },
    ],
    qualityTitle: 'Czysty, łatwy w utrzymaniu i wydajny kod',
    qualityBody:
      'Nie dostarczamy kodu na wyrzucenie. Każde V1 stoi na jasnej architekturze, z czytelnym, przetestowanym i zoptymalizowanym kodem — abyś mógł je rozwijać i skalować bez długu technicznego.',
    aiTitle: 'Rola AI',
    aiBody:
      'AI to nie gadżet: to nasz mnożnik prędkości. Generowanie kodu, testy, dokumentacja, review — każdy etap jest przyspieszony, aby dostarczyć w dni to, co gdzie indziej zajmuje miesiące, bez cięcia jakości.',
    storeNote:
      '7 dni obejmuje projekt, rozwój i wdrożenie na produkcję. W przypadku aplikacji mobilnych czas weryfikacji w App Store i Google Play dochodzi dodatkowo i nie zależy od nas.',
    ctaButton: 'Zarezerwuj sprint',
  },

  work: {
    metaTitle: 'Realizacje',
    metaDescription:
      'Produkty webowe i mobilne zaprojektowane i dostarczone przez Khufu: OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'Co zbudowaliśmy.',
    subtitle: 'Prawdziwe produkty, na produkcji, zaprojektowane i rozwinięte przez Khufu.',
    internalLabel: 'Produkt Khufu',
    clientLabel: 'Klient',
    stackLabel: 'Stack',
    visitLabel: 'Zobacz produkt',
    backToWork: 'Wszystkie realizacje',
    caseIntro: 'Studium przypadku',
  },

  about: {
    metaTitle: 'O nas',
    metaDescription:
      'Khufu to agencja produktowa AI-native założona przez Adriena De Costera, która dostarcza V1 w tydzień i wypuściła własne produkty.',
    kicker: 'O nas',
    title: 'Budujemy szybko, bo budujemy też dla siebie.',
    body: [
      'Khufu to agencja produktowa AI-native założona przez Adriena De Costera. Projektujemy, budujemy i uruchamiamy produkty cyfrowe — web, mobile, API — z prędkością, jakiej klasyczne agencje nie osiągają.',
      'Nasz sekret to żaden sekret: jeden sprawdzony stack, intensywne użycie AI na każdym etapie i founder-operator, który sam wypuścił kilka produktów (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Traktujemy Twój produkt jak własny: nastawieni na wynik, ciasny zakres i obsesja na punkcie time-to-market. Twoje V1 w tydzień to nie slogan — to nasza metoda.',
    ],
    founderRole: 'Founder i deweloper produktu',
    founderBio:
      'Adrien w pojedynkę wypuścił i rozwinął kilka produktów — SaaS, aplikacje mobilne, gry. To doświadczenie founder-operatora kształtuje metodę Khufu: budować szybko, czysto i pod wynik.',
    detailLabels: { founder: 'Założyciel', basedIn: 'Z siedzibą w', contact: 'Kontakt' },
    followTitle: 'Obserwuj Adriena',
    ctaButton: 'Pracuj z Khufu',
  },

  contact: {
    metaTitle: 'Kontakt',
    metaDescription: 'Opowiedz Khufu o swoim projekcie. Odpowiedź w 24 h z zakresem i datą.',
    kicker: 'Kontakt',
    title: 'Powiedz nam, co chcesz uruchomić.',
    subtitle: `Odpowiedź w 24 h z zakresem i datą. Albo napisz do nas bezpośrednio na ${site.email}.`,
    form: {
      name: 'Imię i nazwisko',
      email: 'Email',
      company: 'Firma (opcjonalnie)',
      budget: 'Orientacyjny budżet',
      message: 'Twój projekt w kilku zdaniach',
      submit: 'Wyślij',
      budgetOptions: [
        `Sprint V1 (~${eur(site.v1PriceEUR)})`,
        'Full Maintenance (miesięcznie)',
        'Wsparcie remote (stawka dzienna)',
        'Jeszcze nie wiem',
      ],
      success: 'Dzięki! Wrócimy do Ciebie w 24 h.',
      emailLabel: 'Mailem',
    },
  },

  faq: {
    title: 'Najczęstsze pytania',
    items: [
      {
        q: 'Ile kosztuje V1 z Khufu?',
        a: `Sprint V1 to ryczałt w stałej cenie ${eur(site.v1PriceEUR)} za SaaS lub aplikację mobilną zaprojektowaną, zbudowaną i wdrożoną na produkcję w ${site.v1Days} dni. Zakres jest zdefiniowany i zatwierdzony przed startem.`,
      },
      {
        q: 'Czy V1 to MVP?',
        a: 'Nie. MVP to często sklecona prowizorka, którą potem trzeba wyrzucić. Khufu dostarcza prawdziwą pierwszą wersję (V1): czysty produkt, na produkcji, gotowy dla Twoich prawdziwych użytkowników. Pomijamy etap MVP i idziemy prosto do solidnego, rozwijalnego produktu.',
      },
      {
        q: 'Jaka jest różnica między V1 od Khufu a klasycznym MVP?',
        a: 'MVP próbuje przetestować pomysł minimalnym nakładem; często jest niestabilne i wymaga przepisania. V1 od Khufu stoi na produkcyjnym stacku (Next.js, NestJS, PostgreSQL) od pierwszego dnia: gotowe do startu, łatwe w utrzymaniu i gotowe do skalowania. Ten sam termin co MVP, ale prawdziwy produkt na końcu.',
      },
      {
        q: 'Czy naprawdę da się dostarczyć produkt w tydzień?',
        a: 'Tak, dla V1 o zdefiniowanym zakresie. Khufu łączy sprawdzony stack i rozwój wspierany przez AI na każdym etapie, co pozwala dostarczyć w dni to, co w klasycznej agencji zajmuje miesiące.',
      },
      {
        q: 'Która agencja jest najlepsza do szybkiego uruchomienia produktu?',
        a: `Khufu to agencja produktowa AI-native wyspecjalizowana w prędkości: Twój SaaS lub aplikacja mobilna na produkcji w ${site.v1Days} dni, za stałą cenę ${eur(site.v1PriceEUR)}. To rzadkie pozycjonowanie: ciasny zakres, ceny na widoku, kod dostarczony.`,
      },
      {
        q: 'Gdzie ma siedzibę agencja Khufu?',
        a: `Khufu (Khufu FZCO) to agencja produktowa AI-native z siedzibą w ${foundingLocation.pl}, założona przez ${site.founder}. Pracuje w remote z klientami francuskojęzycznymi i międzynarodowymi (FR, EN, ES).`,
      },
      {
        q: 'Dla kogo jest oferta Khufu?',
        a: 'Dla founderów, startupów i firm, które chcą uruchomić produkt szybko i dobrze: zwalidować rynek, wypuścić pierwszą wersję albo zastąpić długi i kosztowny cykl agencyjny dostawą w tydzień.',
      },
      {
        q: 'Czy Khufu używa AI do developmentu?',
        a: 'Tak. AI jest sercem metody: generowanie kodu, testy, dokumentacja i review są przyspieszane przez AI. To właśnie sprawia, że dostawa w tydzień jest możliwa bez utraty jakości.',
      },
      {
        q: 'Co dzieje się po dostarczeniu V1?',
        a: `Możesz kontynuować z ofertą Full Maintenance (zarządzana infra, wsparcie z SLA i dni deweloperskie wliczone co miesiąc) albo w formie wsparcia remote za ${eur(site.dailyRateEUR)}/dzień (200 €/h). Kod źródłowy w każdym przypadku należy do Ciebie.`,
      },
      {
        q: 'Jaka jest stawka Khufu za wsparcie?',
        a: `Wsparcie jest w 100 % remote, rozliczane 200 €/h co godzinę (czyli ${eur(site.dailyRateEUR)}/dzień), bez zobowiązania czasowego. Praca stacjonarna jest możliwa: minimum 1 tydzień, +50 % do stawki i koszty po stronie klienta.`,
      },
      {
        q: 'Czy Khufu może tworzyć aplikacje mobilne i AI?',
        a: 'Tak: SaaS webowy (Next.js), aplikacje mobilne (React Native / Expo) oraz funkcje AI / agenty. Khufu buduje też własne produkty, w tym kilka SaaS i aplikacji mobilnych.',
      },
      {
        q: 'Czy termin jednego tygodnia obejmuje weryfikację w store’ach?',
        a: 'Nie. 7 dni obejmuje projekt, rozwój i wdrożenie na produkcję. W przypadku aplikacji mobilnej czas weryfikacji w App Store i Google Play dochodzi dodatkowo i nie zależy od nas (zwykle kilka dni).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Nota prawna',
    metaDescription: 'Nota prawna serwisu khufu.io — wydawca, host i informacje prawne Khufu FZCO.',
    title: 'Nota prawna',
    intro: 'Informacje o wydawcy i hoście serwisu khufu.io.',
    editorLabel: 'Wydawca serwisu',
    addressLabel: 'Adres',
    licenseLabel: 'Trade License',
    directorLabel: 'Redaktor odpowiedzialny',
    hostLabel: 'Host',
    contactLabel: 'Kontakt',
    ipTitle: 'Własność intelektualna',
    ipBody:
      'Całość treści serwisu khufu.io (teksty, grafiki, logo, marka) jest własnością Khufu FZCO, o ile nie zaznaczono inaczej. Wszelkie powielanie bez zgody jest zabronione.',
  },

  privacyPage: {
    metaTitle: 'Polityka prywatności',
    metaDescription: 'Jak khufu.io zbiera i przetwarza Twoje dane osobowe: analityka, formularz kontaktowy, cookies i Twoje prawa.',
    title: 'Polityka prywatności',
    updated: 'Ostatnia aktualizacja: lipiec 2026',
    sections: [
      {
        heading: 'Administrator danych',
        body: `Administratorem danych jest Khufu FZCO. W razie pytań skontaktuj się pod ${site.email}.`,
      },
      {
        heading: 'Dane, które zbieramy',
        body: 'Zbieramy wyłącznie dane, które przekazujesz nam przez formularz kontaktowy (imię i nazwisko, email, firma, wiadomość) oraz zanonimizowane dane nawigacyjne do celów pomiaru ruchu.',
      },
      {
        heading: 'Pomiar ruchu',
        body: 'Używamy PostHog, aby rozumieć korzystanie z serwisu (odsłony, ścieżki). Dane są przetwarzane w formie zagregowanej i służą wyłącznie do ulepszania serwisu.',
      },
      {
        heading: 'Formularz kontaktowy',
        body: `Wiadomości wysłane przez formularz są przekazywane mailem (przez Resend) na ${site.email}. Służą do udzielenia odpowiedzi na Twoje zapytanie i nie są sprzedawane ani udostępniane.`,
      },
      {
        heading: 'Cookies',
        body: 'Serwis używa cookies ściśle niezbędnych oraz cookies pomiaru ruchu. Możesz je odrzucić w ustawieniach swojej przeglądarki.',
      },
      {
        heading: 'Twoje prawa',
        body: `Zgodnie z RODO masz prawo dostępu, sprostowania i usunięcia swoich danych. Aby z niego skorzystać, napisz na ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Porównania',
    comparisonsMetaDescription: 'Khufu w porównaniu z alternatywami: V1 vs MVP, agencja vs freelancer, agencja vs no-code, Khufu vs klasyczna agencja.',
    comparisonsTitle: 'Khufu, w porównaniu.',
    comparisonsSubtitle: 'Właściwe pytania przed uruchomieniem produktu — i dlaczego Khufu pozycjonuje się tak, jak to robi.',
    useCasesMetaTitle: 'Przypadki użycia',
    useCasesMetaDescription: 'Jak Khufu pomaga w zależności od Twojej sytuacji: SaaS, aplikacja mobilna, przedsiębiorca, startup lub duża firma.',
    useCasesTitle: 'Dla kogo, po co.',
    useCasesSubtitle: 'Niezależnie od Twojej sytuacji, Khufu dostarcza Twój produkt w tydzień.',
    problemLabel: 'Problem',
    approachLabel: 'Nasze podejście',
    outcomesLabel: 'Co otrzymujesz',
    aspectLabel: 'Kryterium',
    seeAllComparisons: 'Wszystkie porównania',
    seeAllUseCases: 'Wszystkie przypadki użycia',
  },

  footer: {
    tagline: `Agencja produktowa AI-native. Twoje V1 w ${site.v1Days} dni.`,
    resources: 'Zasoby',
    columns: {
      offers: 'Oferta',
      company: 'Agencja',
      legal: 'Informacje prawne',
    },
    rights: 'Wszelkie prawa zastrzeżone.',
    legal: {
      mentions: 'Nota prawna',
      privacy: 'Prywatność',
    },
  },
}
