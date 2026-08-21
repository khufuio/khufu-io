import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('tr-TR')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const tr: Dictionary = {
  meta: {
    locale: 'tr',
    brandSuffix: 'Khufu — V1’iniz 1 haftada',
  },

  nav: {
    offers: 'Hizmetler',
    maintenance: 'Bakım',
    work: 'Projeler',
    method: 'Yöntem',
    about: 'Hakkımızda',
    contact: 'İletişim',
    cta: 'Sprint ayırt',
  },

  common: {
    seeWork: 'Projeleri gör',
    bookSprint: 'Sprint ayırt',
    talkToUs: 'Khufu ile konuş',
    from: 'Başlangıç',
    perDay: '/ gün',
    perMonth: '/ ay',
    days: 'gün',
    learnMore: 'Daha fazla bilgi',
    getStarted: 'Başla',
    draftBadge: 'Önizleme',
  },

  home: {
    heroKicker: 'AI-native ürün ajansı',
    heroTitle: 'V1’iniz 1 haftada.',
    heroSubtitle: `SaaS’ınızı veya mobil uygulamanızı ${site.v1Days} günde tasarlar, geliştirir ve yayına alırız. Sabit fiyat: [[${site.v1PriceEUR}]].`,
    heroPrimaryCta: 'Sprint ayırt',
    heroSecondaryCta: 'Projeleri gör',
    heroProof: `${site.v1Days} gün · ${eur(site.v1PriceEUR)} sabit ücret · kod teslim edildi, canlıda`,
    heroFigures: [
      { value: `${site.v1Days} gün`, label: 'brief’ten canlıya' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'sabit fiyat, her şey dahil' },
    ],

    statsTitle: '“1 hafta” ne demek',
    stats: [
      { value: `${site.v1Days} gün`, label: 'kickoff’tan canlıdaki V1’e' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'Sprint V1 sabit ücreti, kapsam önceden belirlenir' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'sonrası için remote günlük ücret (200 €/saat)' },
      { value: '%100', label: 'kod teslim edildi, barındırıldı, sizin' },
    ],

    problemTitle: 'Klasik bir ajans 3 ay mı sürüyor? Sizin 3 ayınız yok.',
    problemBody:
      'Bitmek bilmeyen döngüler, muğlak teklifler ve ileri geri gidip gelmeler projeleri daha lansmandan önce öldürür. Khufu tam tersini yapar: dar kapsam, hızlı kararlar ve hafta sonunda gerçekten yayına alınabilir bir V1.',

    // Secondary sales argument (not the headline): the sprint is the offer, and
    // this is one reason to pick it. Kept factual — what a fractional CTO does and
    // does not deliver, next to what the sprint delivers.
    ctoTitle: 'Yarı zamanlı CTO ile eksiksiz ekip',
    ctoSubtitle: 'Aynı sorun, iki yanıt. Yalnızca biri elinizde yayında bir ürün bırakır.',
    ctoOtherLabel: 'Talep üzerine CTO',
    ctoKhufuLabel: 'Khufu',
    ctoRows: [
      {
        aspect: 'Ne alırsınız',
        other: 'Kararlar, spesifikasyonlar, bir yol haritası',
        khufu: 'Yayında, üretimde bir ürün',
      },
      {
        aspect: 'Kim inşa eder',
        other: 'Kimse — ekibi hâlâ işe almanız gerekir',
        khufu: 'Kapsam, tasarım, geliştirme, mobil, altyapı: hepsi kapsanır',
      },
      {
        aspect: 'V1’e kalan süre',
        other: 'Ekip kurulduktan sonra aylar',
        khufu: `${site.v1Days} gün`,
      },
      {
        aspect: 'Ne ödersiniz',
        other: 'Aylık bir ücret, üstüne ekibin maaşları',
        khufu: `Önceden belirlenmiş tek bir sabit fiyat: [[${site.v1PriceEUR}]]`,
      },
      {
        aspect: 'Sonunda',
        other: 'Elinizde bir plan olur',
        khufu: 'Elinizde ürün, depo ve erişimler olur',
      },
    ],
    ctoNote:
      'Yarı zamanlı CTO’lara karşı bir şeyimiz yok: yönetecek bir ekibiniz zaten varsa doğru tercih odur. Yoksa, ihtiyacınız olan şey bir ekiptir.',

    teamTitle: 'Bir teknoloji ekibinin tüm rolleri, tek bir sözleşmede',
    teamSubtitle:
      'Hiçbirini işe almazsınız. Ürettiklerini alırsınız — kapsam belirlemeden yayına kadar tek muhatap.',
    teamRoles: [
      'Ürün kapsamı belirleme',
      'UI / UX tasarımı',
      'Front-end geliştirme',
      'Back-end ve API’ler',
      'iOS ve Android mobil',
      'Altyapı, dağıtım ve CI/CD',
      'Güvenlik ve yedekleme',
      'Dokümantasyon ve devir',
    ],

    howTitle: 'Bu kadar hızlı nasıl gidiyoruz',
    how: [
      {
        title: 'Baştan sona AI-native',
        body: 'Her aşamada yapay zeka destekli çalışıyoruz — tasarım, geliştirme, testler, dokümantasyon. Aynı iş, zamanın çok küçük bir kısmında, kaliteden ödün vermeden.',
      },
      {
        title: 'Tek ve deneyimli bir stack',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. Hiçbir şeyi yeniden icat etmiyoruz: ölçeklenmeye hazır, kanıtlanmış bir temel bir araya getiriyoruz.',
      },
      {
        title: 'Bir founder-operator, taşeron zinciri değil',
        body: 'Ekip, yapay zekâyla güçlendirilmiş tek bir founder-operator’dür — tek muhatap, sizin üzerinizde hiçbir koordinasyon yükü yok. Khufu kendi ürünlerini (OneStore.link, Clokizi, HerbaCRM…) tam olarak bu yöntemle piyasaya sürdü.',
      },
    ],

    offersTitle: 'Khufu ile çalışmanın üç yolu',
    offersSubtitle: 'Şimşek hızında lansmandan uzun vadeli desteğe.',

    workTitle: 'Slaytlar değil, ürünler',
    workSubtitle: 'Khufu tarafından tasarlanıp yayına alınan ürünlerden bir seçki.',
    workCta: 'Tüm projeler',

    clientsTitle: 'Bize güvenenler',
    testimonialsTitle: 'Onlar ne diyor',

    finalCtaTitle: 'V1’iniz, cuma günü canlıda.',
    finalCtaBody: 'Neyi başlatmak istediğinizi anlatın. 24 saat içinde bir kapsam ve bir tarihle geri döneriz.',
    finalCtaButton: 'Sprint ayırt',
  },

  offers: {
    metaTitle: 'Hizmetler ve fiyatlar',
    metaDescription: `${site.v1Days} günde ${eur(site.v1PriceEUR)}’dan başlayan Sprint V1, aylık Full Maintenance ve ${eur(site.dailyRateEUR)}/gün (200 €/saat) remote destek.`,
    title: 'Net hizmetler, açık fiyatlar.',
    subtitle: 'Bitmek bilmeyen teklifler yok. Ne ödediğinizi ve ne aldığınızı tam olarak bilirsiniz.',
    flagshipBadge: 'Amiral gemisi teklifimiz',
    detailCta: 'Daha fazla bilgi',
    sprintCta: 'Sprint V1’i keşfet',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        priceEur: site.v1PriceEUR,
        priceNote: 'sabit ücret',
        pitch: `İlk versiyonunuz, ${site.v1Days} günde tasarlanıp teslim edilir.`,
        featured: true,
        features: [
          'Kapsam belirleme ve ürün tasarımı',
          'SaaS veya mobil uygulama geliştirme',
          'Yayına alma + barındırma',
          'Kaynak kodu teslim edildi, sizin',
          'Devir ve dokümantasyon',
        ],
        cta: 'Sprint ayırt',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        priceEur: 1490,
        pricePrefix: '1.490 €’dan ',
        priceNote: '/ ay',
        pitch: 'Ürününüzü canlı tutarız: altyapı, destek ve geliştirme günleri dahil.',
        featured: false,
        features: [
          'Yönetilen altyapı: barındırma, izleme, yedekleme, güvenlik',
          'SLA’lı destek (garantili yanıt süresi)',
          'Her ay dahil geliştirme günleri',
          'Güncellemeler ve düzeltmeler',
          'Aylık rapor',
        ],
        cta: 'Paketleri gör',
      },
      {
        id: 'regie',
        name: 'Remote',
        priceEur: site.dailyRateEUR,
        priceNote: '/ gün',
        pitch: 'Kıdemli, %100 remote takviye, saatlik faturalanır — [[200]]/saat.',
        featured: false,
        features: [
          '%100 remote',
          '[[200]]/saat — saatlik ayrıntı',
          'Geliştirme, mimari, danışmanlık',
          'Süre taahhüdü yok',
        ],
        cta: 'Khufu ile konuş',
      },
    ],
    remoteNoteShort: 'Yerinde çalışma mümkün, koşullara bağlı.',
    remoteNote:
      'Yerinde çalışma mümkün: en az 1 hafta, ücrete +%50, masraflar (seyahat, konaklama) müşteriye ait.',
    firmPriceNote: 'Sabit fiyat, euro veya dolar olarak faturalanır — sizin seçiminiz.',
    guaranteesTitle: 'Garanti ettiklerimiz',
    guarantees: [
      'Başlamadan önce yazılı ve onaylanmış bir kapsam.',
      'Bir teslim tarihi, tutulan.',
      'Kaynak kodu, ilk günden itibaren sizindir.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — ürününüz 7 günde',
    metaDescription:
      'Khufu’nun Sprint V1’i: 15.000 € sabit fiyatla, 7 günde tasarlanan, geliştirilen ve yayına alınan bir SaaS veya mobil uygulama.',
    kicker: 'Amiral gemisi teklif',
    title: 'V1’iniz 7 günde. Sabit fiyat.',
    subtitle:
      'Ana teklifimiz: SaaS’ınızı veya mobil uygulamanızı bir haftada tasarlar, geliştirir ve yayına alırız — kapsam önceden belirlenir, 15.000 € her şey dahil.',
    includesTitle: 'Neler dahil',
    processTitle: 'Gün gün akış',
    ctaTitle: 'V1’inizi başlatmaya hazır mısınız?',
    ctaBody: 'Neyi başlatmak istediğinizi anlatın. 24 saat içinde bir kapsam ve bir tarihle yanıt.',
    ctaButton: 'Sprint ayırt',
  },

  remotePage: {
    metaTitle: 'Remote — saatlik ürün takviyesi',
    metaDescription:
      'Ürününüz için kıdemli, %100 remote bir takviye: geliştirme, mimari ve danışmanlık, saatlik ayrıntıyla 200 €/saat faturalanır.',
    kicker: 'Remote',
    title: 'Kıdemli bir takviye, %100 remote.',
    subtitle:
      'İhtiyaç anında geliştirme gücü mü lazım? Ürününüz üzerinde remote çalışırız: geliştirme, mimari, danışmanlık — saatlik faturalanır, taahhüt yok.',
    includesTitle: 'Neleri kapsar',
    ctaTitle: 'Takviyeye mi ihtiyacınız var?',
    ctaBody: 'Nerede olduğunuzu ve neye ihtiyacınız olduğunu anlatın. 24 saat içinde size döneriz.',
    ctaButton: 'Khufu ile konuş',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — altyapı, destek ve geliştirme',
    metaDescription:
      'Khufu aylık aboneliği: ürününüzü büyütmek için yönetilen altyapı, SLA’lı destek ve dahil geliştirme günleri.',
    kicker: 'Full Maintenance',
    title: 'V1’inizi teslim ettik. Şimdi büyütüyoruz.',
    subtitle:
      'Altyapıyı, desteği ve ürün gelişimini kapsayan tek bir aylık abonelik. Siz işinize odaklanın, gerisini biz halledelim.',
    includesTitle: 'Aboneliğin kapsadıkları',
    includes: [
      {
        title: 'Yönetilen altyapı',
        body: 'Barındırma, dağıtımlar, izleme, uptime, yedekler ve güvenlik. Ürününüz çevrimiçi ve güncel kalır.',
      },
      {
        title: 'Destek',
        body: 'Net bir SLA ile doğrudan bir kanal. Yanıt veririz, düzeltiriz, sizi canlıdaki bir bug ile yalnız bırakmayız.',
      },
      {
        title: 'Geliştirme günleri',
        body: 'Yeni özellikler ve iyileştirmeler için her ay dahil belirli sayıda geliştirme günü.',
      },
    ],
    popularBadge: 'Popüler',
    tiersTitle: 'Üç paket',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1.490 €',
        priceEur: 1490,
        priceNote: '/ ay',
        pitch: 'Kararlı bir ürünü çevrimiçi tutmak için.',
        featured: false,
        features: [
          'Yönetilen altyapı + izleme',
          '48 saat içinde destek',
          'Ayda 8 saat geliştirme dahil',
          'Aylık rapor',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3.900 €',
        priceEur: 3900,
        priceNote: '/ ay',
        pitch: 'Sürekli evrilen bir ürün için.',
        featured: true,
        features: [
          'Tüm Starter içeriği',
          '24 saat içinde destek',
          'Ayda 24 saat geliştirme dahil',
          'Aylık ürün değerlendirmesi',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Talep üzerine',
        priceNote: '',
        pitch: 'Hızlı büyüyen, kritik bir ürün için.',
        featured: false,
        features: [
          'Tüm Growth içeriği',
          'Öncelikli destek, özel SLA',
          'Ayrılmış geliştirme günleri',
          'Paylaşılan yol haritası',
        ],
      },
    ],
    devNote:
      '6 ay taahhüt. Başlangıçta takip araçlarının kurulumu zorunlu: 1 gün ([[1200]]). Ek geliştirme saatleri [[200]]/saat faturalanır.',
    ctaTitle: 'Bakımı devretmek mi istiyorsunuz?',
    ctaBody: 'Ürününüzün nerede olduğunu anlatın, size uygun paketi önerelim.',
    ctaButton: 'Khufu ile konuş',
  },

  method: {
    metaTitle: 'Yöntem — V1’iniz 7 günde',
    metaDescription:
      'Khufu bir V1’i bir haftada nasıl teslim eder: kapsamdan yayına, yapay zekayla hızlandırılmış gün gün akış.',
    kicker: 'Yöntem',
    title: 'Yedi gün, yayına alınabilir bir ürün.',
    subtitle: 'Sıkı ve şeffaf bir akış. Her gün tam olarak ne olduğunu bilirsiniz.',
    days: [
      { day: '1. Gün', title: 'Kapsam belirleme', body: 'Tam kapsamı, kritik akışları ve teknik mimariyi tanımlarız. Tek bir satır yazmadan önce siz onaylarsınız.' },
      { day: '2–3. Gün', title: 'Geliştirme', body: 'Ürünün kalbine gireriz: front, back ve veritabanı. İlk commit’ten itibaren temiz kod ve net mimari.' },
      { day: '4. Gün', title: 'Altyapı ve testler', body: 'Altyapı kurulumu, testler, performans ve güvenlik. Yinelemeden önce temelleri sağlamlaştırırız.' },
      { day: '5–6. Gün', title: 'Yinelemeler', body: 'Geri bildirimlerinizle yönlendirilen geliştirme: ürünü sizinle sürekli iletişimde, canlı olarak ayarlarız.' },
      { day: '7. Gün', title: 'Yayına alma', body: 'Dağıtım, CI/CD yapılandırması, barındırma ve devir. V1’iniz çevrimiçi, sizin elinizde.' },
    ],
    qualityTitle: 'Temiz, sürdürülebilir ve performanslı kod',
    qualityBody:
      'Bir kullan-at kod teslim etmiyoruz. Her V1, okunabilir, test edilmiş ve optimize edilmiş kodla net bir mimari üzerine inşa edilir — böylece teknik borç olmadan onu geliştirip ölçekleyebilirsiniz.',
    aiTitle: 'Yapay zekanın rolü',
    aiBody:
      'Yapay zeka bir gösteriş değil: hız çarpanımız. Kod üretimi, testler, dokümantasyon, inceleme — her aşama, başka yerlerde aylar süren işi günlerde teslim etmek için hızlandırılır, kaliteden ödün vermeden.',
    storeNote:
      '7 gün tasarımı, geliştirmeyi ve yayına almayı kapsar. Mobil uygulamalar için App Store ve Google Play onay süresi buna eklenir ve bizim kontrolümüzde değildir.',
    ctaButton: 'Sprint ayırt',
  },

  work: {
    metaTitle: 'Projeler',
    metaDescription:
      'Khufu tarafından tasarlanıp yayına alınan web ve mobil ürünler: OneStore.link, Clokizi, HerbaCRM, Labyrinth.',
    title: 'Neler inşa ettik.',
    subtitle: 'Gerçek ürünler, canlıda, Khufu tarafından tasarlanıp geliştirildi.',
    internalLabel: 'Khufu ürünü',
    clientLabel: 'Müşteri',
    stackLabel: 'Stack',
    visitLabel: 'Ürünü gör',
    backToWork: 'Tüm projeler',
    caseIntro: 'Vaka çalışması',
  },

  about: {
    metaTitle: 'Hakkımızda',
    metaDescription:
      'Khufu, Adrien De Coster tarafından kurulan, V1’leri bir haftada teslim eden ve kendi ürünlerini piyasaya süren AI-native bir ürün ajansıdır.',
    kicker: 'Hakkımızda',
    title: 'Hızlı inşa ediyoruz çünkü kendimiz için de inşa ediyoruz.',
    body: [
      'Khufu, Adrien De Coster tarafından kurulan AI-native bir ürün ajansıdır. Dijital ürünleri — web, mobil, API — klasik ajansların ulaşamadığı bir hızda tasarlar, geliştirir ve piyasaya süreriz.',
      'Sırrımız bir sır değil: tek ve deneyimli bir stack, her aşamada yoğun yapay zeka kullanımı ve kendisi birçok ürün piyasaya sürmüş bir founder-operator (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Ürününüzü kendi ürünümüz gibi ele alırız: sonuca odaklı, net kapsam ve time-to-market saplantısı. V1’iniz bir haftada bir slogan değil — bizim yöntemimiz.',
    ],
    founderRole: 'Founder ve ürün geliştirici',
    founderBio:
      'Adrien birçok ürünü tek başına piyasaya sürdü ve geliştirdi — SaaS, mobil uygulamalar, oyunlar. Khufu’nun yöntemini şekillendiren şey bu founder-operator deneyimidir: hızlı, temiz ve sonuca odaklı inşa etmek.',
    detailLabels: { founder: 'Kurucu', basedIn: 'Merkez', contact: 'İletişim' },
    followTitle: 'Adrien’i takip et',
    ctaButton: 'Khufu ile çalış',
  },

  contact: {
    metaTitle: 'İletişim',
    metaDescription: 'Projenizi Khufu’ya anlatın. 24 saat içinde bir kapsam ve bir tarihle yanıt.',
    kicker: 'İletişim',
    title: 'Neyi başlatmak istediğinizi anlatın.',
    subtitle: `24 saat içinde bir kapsam ve bir tarihle yanıt. Ya da doğrudan ${site.email} adresine yazın.`,
    form: {
      name: 'Ad',
      email: 'Email',
      company: 'Şirket (opsiyonel)',
      budget: 'Tahmini bütçe',
      message: 'Projeniz birkaç satırda',
      submit: 'Gönder',
      budgetOptions: [
        `Sprint V1 (~[[${site.v1PriceEUR}]])`,
        'Full Maintenance (aylık)',
        'Remote takviye (günlük ücret)',
        'Henüz bilmiyorum',
      ],
      success: 'Teşekkürler! 24 saat içinde size döneriz.',
      emailLabel: 'Email ile',
    },
  },

  faq: {
    title: 'Sık sorulan sorular',
    items: [
      {
        q: 'Khufu ile bir V1 ne kadara mal olur?',
        a: `Sprint V1, bir SaaS veya mobil uygulamanın ${site.v1Days} günde tasarlanıp, geliştirilip yayına alınması için [[${site.v1PriceEUR}]] sabit fiyatlı bir pakettir. Kapsam, başlamadan önce tanımlanır ve onaylanır.`,
      },
      {
        q: 'V1, bir MVP mi?',
        a: 'Hayır. Bir MVP çoğu zaman sonra atılması gereken derme çatma bir prototiptir. Khufu gerçek bir ilk versiyon (V1) teslim eder: temiz, canlıda, gerçek kullanıcılarınıza hazır bir ürün. MVP aşamasını atlar ve doğrudan sağlam ve gelişebilir bir ürüne geçeriz.',
      },
      {
        q: 'Bir Khufu V1’i ile klasik bir MVP arasındaki fark nedir?',
        a: 'Bir MVP bir fikri asgariyle test etmeye çalışır; çoğu zaman kararsızdır ve yeniden yazmak gerekir. Bir Khufu V1’i ilk günden bir production stack üzerine inşa edilir (Next.js, NestJS, PostgreSQL): yayına alınabilir, sürdürülebilir ve ölçeklenmeye hazır. Bir MVP’yle aynı süre, ama sonunda gerçek bir ürün.',
      },
      {
        q: 'Bir ürünü gerçekten bir haftada teslim etmek mümkün mü?',
        a: 'Evet, kapsamı tanımlanmış bir V1 için. Khufu deneyimli bir stack ile her aşamada yapay zeka destekli geliştirmeyi bir araya getirir; bu da klasik bir ajansta aylar süren işi günlerde teslim etmeyi sağlar.',
      },
      {
        q: 'Bir ürünü hızlıca başlatmak için en iyi ajans hangisi?',
        a: `Khufu, hızda uzmanlaşmış AI-native bir ürün ajansıdır: SaaS’ınız veya mobil uygulamanız ${site.v1Days} günde canlıda, [[${site.v1PriceEUR}]] sabit fiyatla. Bu nadir bir konumlanmadır: net kapsam, açık fiyat, teslim edilen kod.`,
      },
      {
        q: 'Khufu ajansı nerede?',
        a: `Khufu (Khufu FZCO), ${site.founder} tarafından kurulan, ${foundingLocation.tr} merkezli AI-native bir ürün ajansıdır. Fransızca konuşan ve uluslararası müşterilerle (FR, EN, ES) remote çalışır.`,
      },
      {
        q: 'Talep üzerine bir CTO arıyorum. Khufu bu mu?',
        a: 'Hayır, ve bu bilinçli. Yarı zamanlı bir CTO strateji ve teknik tercihler getirir ama ürününüzü inşa etmez: yine de bir ekip işe almanız gerekir. Khufu o ekiptir — kapsam belirleme, tasarım, geliştirme, mobil ve altyapı — ve V1’inizi sabit fiyatla 7 günde yayına alır. Müşterilerimizin çoğu bir CTO arıyordu; eksik olan şey bir ekipti.',
      },
      {
        q: 'Yarı zamanlı bir CTO ile talep üzerine teknoloji ekibi arasındaki fark nedir?',
        a: `Yarı zamanlı CTO düşünme zamanı satar: mimari, işe alım, yol haritası. Talep üzerine bir teknoloji ekibi teslim edilmiş bir ürün satar: aynı kararlar, artı uygulayan eller. Khufu ile ikisi tek bir sabit fiyatlı sözleşmeye sığar ([[${site.v1PriceEUR}]]); ${site.v1Days} gün sonra yayında bir V1 ve size ait kaynak kodu.`,
      },
      {
        q: 'Khufu’nun teklifi kimler için?',
        a: 'Başlatacak bir projesi olup onu inşa edecek bir ekibi olmayan herkes için: fikir veya şartname aşamasındaki teknik olmayan founder’lar, devralınması gereken sallantılı bir MVP’ye sahip olanlar, ekip kurmadan bir ürünü denemek isteyen şirketler. Halihazırda inşa eden bir iç ekibiniz varsa, size uyan teklif remote takviyedir.',
      },
      {
        q: 'Khufu geliştirmek için yapay zeka kullanıyor mu?',
        a: 'Evet. Yapay zeka yöntemin kalbinde: kod üretimi, testler, dokümantasyon ve inceleme yapay zekayla hızlandırılır. Bir haftada teslimatı kaliteden ödün vermeden mümkün kılan da budur.',
      },
      {
        q: 'V1 teslim edildikten sonra ne olur?',
        a: `Full Maintenance teklifiyle (yönetilen altyapı, SLA’lı destek ve her ay dahil geliştirme günleri) ya da [[${site.dailyRateEUR}]]/gün ([[200]]/saat) remote takviyeyle devam edebilirsiniz. Kaynak kodu her durumda sizindir.`,
      },
      {
        q: 'Khufu’nun takviye ücreti nedir?',
        a: `Takviye %100 remote’tur, saatlik ayrıntıyla [[200]]/saat faturalanır (yani [[${site.dailyRateEUR}]]/gün), süre taahhüdü yoktur. Yerinde çalışma mümkün: en az 1 hafta, ücrete +%50 ve masraflar müşteriye ait.`,
      },
      {
        q: 'Khufu mobil uygulamalar ve yapay zeka geliştirebilir mi?',
        a: 'Evet: web SaaS (Next.js), mobil uygulamalar (React Native / Expo) ve yapay zeka / agent özellikleri. Khufu ayrıca kendi ürünlerini de inşa eder, bunların arasında birçok SaaS ve mobil uygulama vardır.',
      },
      {
        q: 'Bir haftalık süre store onaylarını içeriyor mu?',
        a: 'Hayır. 7 gün tasarımı, geliştirmeyi ve yayına almayı kapsar. Bir mobil uygulama için App Store ve Google Play onay süresi buna eklenir ve bizim kontrolümüzde değildir (genellikle birkaç gün).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Yasal bildirim',
    metaDescription: 'khufu.io sitesinin yasal bildirimi — Khufu FZCO’nun yayıncı, barındırıcı ve yasal bilgileri.',
    title: 'Yasal bildirim',
    intro: 'khufu.io sitesinin yayıncısı ve barındırıcısına ilişkin bilgiler.',
    editorLabel: 'Site yayıncısı',
    addressLabel: 'Adres',
    licenseLabel: 'Trade License',
    directorLabel: 'Yayın yönetmeni',
    hostLabel: 'Barındırıcı',
    contactLabel: 'İletişim',
    ipTitle: 'Fikri mülkiyet',
    ipBody:
      'khufu.io sitesindeki tüm içerikler (metinler, görseller, logo, marka), aksi belirtilmedikçe Khufu FZCO’nun mülkiyetindedir. İzinsiz her türlü çoğaltma yasaktır.',
  },

  privacyPage: {
    metaTitle: 'Gizlilik politikası',
    metaDescription: 'khufu.io kişisel verilerinizi nasıl toplar ve işler: analitik, iletişim formu, çerezler ve haklarınız.',
    title: 'Gizlilik politikası',
    updated: 'Son güncelleme: Temmuz 2026',
    sections: [
      {
        heading: 'Veri sorumlusu',
        body: `Verilerin işlenmesinden sorumlu taraf Khufu FZCO’dur. Her türlü soru için ${site.email} ile iletişime geçin.`,
      },
      {
        heading: 'Topladığımız veriler',
        body: 'Yalnızca iletişim formu aracılığıyla bize sağladığınız verileri (ad, email, şirket, mesaj) ve kitle ölçümü amacıyla anonimleştirilmiş gezinme verilerini toplarız.',
      },
      {
        heading: 'Kitle ölçümü',
        body: 'Sitenin kullanımını anlamak için PostHog kullanırız (görüntülenen sayfalar, kullanıcı yolları). Veriler toplu halde işlenir ve yalnızca siteyi iyileştirmeye hizmet eder.',
      },
      {
        heading: 'İletişim formu',
        body: `Form aracılığıyla gönderilen mesajlar email yoluyla (Resend üzerinden) ${site.email} adresine iletilir. Talebinize yanıt vermek için kullanılır, ne satılır ne de paylaşılır.`,
      },
      {
        heading: 'Çerezler',
        body: 'Site, kesinlikle gerekli çerezler ve kitle ölçümü çerezleri kullanır. Bunları tarayıcınızın ayarlarından reddedebilirsiniz.',
      },
      {
        heading: 'Haklarınız',
        body: `KVKK/GDPR uyarınca, verilerinize erişme, düzeltme ve silme hakkınız vardır. Bunu kullanmak için ${site.email} adresine yazın.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Karşılaştırmalar',
    comparisonsMetaDescription: 'Khufu, alternatiflerle karşılaştırıldı: V1 vs MVP, ajans vs freelancer, ajans vs no-code, Khufu vs klasik ajans.',
    comparisonsTitle: 'Khufu, karşılaştırıldı.',
    comparisonsSubtitle: 'Ürününüzü başlatmadan önce doğru sorular — ve Khufu neden bu şekilde konumlanıyor.',
    useCasesMetaTitle: 'Kullanım senaryoları',
    useCasesMetaDescription: 'Khufu durumunuza göre nasıl yardımcı olur: SaaS, mobil uygulama, girişimci, startup ya da büyük şirket.',
    useCasesTitle: 'Kim için, ne için.',
    useCasesSubtitle: 'Durumunuz ne olursa olsun, Khufu ürününüzü bir haftada teslim eder.',
    problemLabel: 'Sorun',
    approachLabel: 'Yaklaşımımız',
    outcomesLabel: 'Ne elde edersiniz',
    aspectLabel: 'Kriter',
    seeAllComparisons: 'Tüm karşılaştırmalar',
    seeAllUseCases: 'Tüm kullanım senaryoları',
  },

  footer: {
    tagline: `AI-native ürün ajansı. V1’iniz ${site.v1Days} günde.`,
    resources: 'Kaynaklar',
    columns: {
      offers: 'Hizmetler',
      company: 'Ajans',
      legal: 'Yasal',
    },
    rights: 'Tüm hakları saklıdır.',
    legal: {
      mentions: 'Yasal bildirim',
      privacy: 'Gizlilik',
    },
  },
}
