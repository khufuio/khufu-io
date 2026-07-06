import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('pt-PT')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const pt: Dictionary = {
  meta: {
    locale: 'pt',
    brandSuffix: 'Khufu — A sua V1 em 1 semana',
  },

  nav: {
    offers: 'Serviços',
    maintenance: 'Manutenção',
    work: 'Projetos',
    method: 'Método',
    about: 'Sobre',
    contact: 'Contacto',
    cta: 'Reservar um sprint',
  },

  common: {
    seeWork: 'Ver projetos',
    bookSprint: 'Reservar um sprint',
    talkToUs: 'Falar com a Khufu',
    from: 'A partir de',
    perDay: '/ dia',
    perMonth: '/ mês',
    days: 'dias',
    learnMore: 'Saber mais',
    getStarted: 'Começar',
    draftBadge: 'Pré-visualização',
  },

  home: {
    heroKicker: 'Agência de produto AI-native',
    heroTitle: 'A sua V1 em 1 semana.',
    heroSubtitle: `Concebemos, desenvolvemos e lançamos o seu SaaS ou app móvel em ${site.v1Days} dias. Preço fixo: ${eur(site.v1PriceEUR)}.`,
    heroPrimaryCta: 'Reservar um sprint',
    heroSecondaryCta: 'Ver projetos',
    heroProof: `${site.v1Days} dias · valor fixo ${eur(site.v1PriceEUR)} · código entregue, em produção`,
    heroFigures: [
      { value: `${site.v1Days} dias`, label: 'do briefing à produção' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'preço fixo, tudo incluído' },
    ],

    statsTitle: 'O que significa “1 semana”',
    stats: [
      { value: `${site.v1Days} dias`, label: 'do kickoff a uma V1 em produção' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'valor fixo Sprint V1, âmbito definido à partida' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'valor/dia remoto (200 €/h) para o que vem a seguir' },
      { value: '100 %', label: 'código entregue, alojado, seu' },
    ],

    problemTitle: 'Uma agência clássica demora 3 meses? Não tem 3 meses.',
    problemBody:
      'Os ciclos intermináveis, os orçamentos vagos e as idas e vindas matam os projetos antes do lançamento. A Khufu faz o contrário: âmbito apertado, decisões rápidas e uma V1 verdadeiramente lançável ao final da semana.',

    howTitle: 'Como somos tão rápidos',
    how: [
      {
        title: 'AI-native, de ponta a ponta',
        body: 'Programamos com apoio de IA em cada etapa — design, dev, testes, documentação. O mesmo trabalho numa fração do tempo, sem sacrificar a qualidade.',
      },
      {
        title: 'Uma stack única e comprovada',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. Não reinventamos nada: montamos uma base testada e pronta a escalar.',
      },
      {
        title: 'Um founder-operator ao comando',
        body: 'A Khufu já lançou os seus próprios produtos (OneStore.link, Clokizi, HerbaCRM…). Construímos o seu produto como o nosso: orientado a resultados, não à faturação.',
      },
    ],

    offersTitle: 'Três formas de trabalhar com a Khufu',
    offersSubtitle: 'Do lançamento relâmpago ao acompanhamento a longo prazo.',

    workTitle: 'Produtos, não slides',
    workSubtitle: 'Uma seleção de produtos concebidos e lançados pela Khufu.',
    workCta: 'Todos os projetos',

    clientsTitle: 'Confiam em nós',
    testimonialsTitle: 'O que dizem',

    finalCtaTitle: 'A sua V1, em produção na sexta-feira.',
    finalCtaBody: 'Diga-nos o que quer lançar. Respondemos em 24 h com um âmbito e uma data.',
    finalCtaButton: 'Reservar um sprint',
  },

  offers: {
    metaTitle: 'Serviços e preços',
    metaDescription: `Sprint V1 em ${site.v1Days} dias a partir de ${eur(site.v1PriceEUR)}, Full Maintenance mensal e reforço remoto a ${eur(site.dailyRateEUR)}/dia (200 €/h).`,
    title: 'Serviços claros, preços à vista.',
    subtitle: 'Sem orçamentos intermináveis. Sabe exatamente o que paga e o que recebe.',
    flagshipBadge: 'A nossa oferta de referência',
    detailCta: 'Saber mais',
    sprintCta: 'Descobrir o Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        price: `${eur(site.v1PriceEUR)}`,
        priceEur: site.v1PriceEUR,
        priceNote: 'valor fixo',
        pitch: `A sua primeira versão, concebida e entregue em ${site.v1Days} dias.`,
        featured: true,
        features: [
          'Definição de âmbito e design de produto',
          'Desenvolvimento de SaaS ou app móvel',
          'Colocação em produção + alojamento',
          'Código-fonte entregue, seu',
          'Handover e documentação',
        ],
        cta: 'Reservar um sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        price: 'desde 1 490 €',
        priceEur: 1490,
        pricePrefix: 'desde ',
        priceNote: '/ mês',
        pitch: 'Mantemos o seu produto vivo: infra, suporte e dias de dev incluídos.',
        featured: false,
        features: [
          'Infra gerida: alojamento, monitorização, backups, segurança',
          'Suporte com SLA (tempo de resposta garantido)',
          'Dias de desenvolvimento incluídos todos os meses',
          'Atualizações e correções',
          'Relatório mensal',
        ],
        cta: 'Ver os planos',
      },
      {
        id: 'regie',
        name: 'Remote',
        price: `${eur(site.dailyRateEUR)}`,
        priceEur: site.dailyRateEUR,
        priceNote: '/ dia',
        pitch: 'Um reforço sénior 100 % remoto, faturado à hora — 200 €/h.',
        featured: false,
        features: [
          '100 % remoto',
          '200 €/h — granularidade horária',
          'Desenvolvimento, arquitetura, consultoria',
          'Sem compromisso de duração',
        ],
        cta: 'Falar com a Khufu',
      },
    ],
    remoteNote:
      'Trabalho presencial possível: 1 semana mínimo, +50 % sobre o valor, com despesas (deslocação, alojamento) a cargo do cliente.',
    firmPriceNote: 'Preço fixo em euros.',
    guaranteesTitle: 'O que garantimos',
    guarantees: [
      'Um âmbito escrito e validado antes de começar.',
      'Uma data de entrega, cumprida.',
      'O código-fonte é seu, desde o primeiro dia.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — o seu produto em 7 dias',
    metaDescription:
      'O Sprint V1 da Khufu: um SaaS ou app móvel concebido, desenvolvido e colocado em produção em 7 dias, por um preço fixo de 15 000 €.',
    kicker: 'Oferta de referência',
    title: 'A sua V1 em 7 dias. Preço fixo.',
    subtitle:
      'A nossa oferta principal: concebemos, desenvolvemos e colocamos em produção o seu SaaS ou app móvel numa semana — âmbito definido à partida, 15 000 € tudo incluído.',
    includesTitle: 'O que está incluído',
    processTitle: 'O processo, dia a dia',
    ctaTitle: 'Pronto para lançar a sua V1?',
    ctaBody: 'Diga-nos o que quer lançar. Resposta em 24 h com um âmbito e uma data.',
    ctaButton: 'Reservar um sprint',
  },

  remotePage: {
    metaTitle: 'Remote — reforço de produto à hora',
    metaDescription:
      'Um reforço sénior 100 % remoto para o seu produto: desenvolvimento, arquitetura e consultoria, faturado a 200 €/h com granularidade horária.',
    kicker: 'Remote',
    title: 'Um reforço sénior, 100 % remoto.',
    subtitle:
      'Precisa de capacidade de dev a pedido? Intervimos em remoto no seu produto: desenvolvimento, arquitetura, consultoria — faturado à hora, sem compromisso.',
    includesTitle: 'O que abrange',
    ctaTitle: 'Precisa de um reforço?',
    ctaBody: 'Diga-nos em que ponto está e o que precisa. Respondemos em 24 h.',
    ctaButton: 'Falar com a Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, suporte e dev',
    metaDescription:
      'Subscrição mensal da Khufu: infraestrutura gerida, suporte com SLA e dias de desenvolvimento incluídos para fazer crescer o seu produto.',
    kicker: 'Full Maintenance',
    title: 'Entregámos a sua V1. Fazemo-la crescer.',
    subtitle:
      'Uma única subscrição mensal que cobre a infraestrutura, o suporte e a evolução do seu produto. Você foca-se no seu negócio, nós tratamos do resto.',
    includesTitle: 'O que a subscrição cobre',
    includes: [
      {
        title: 'Infra gerida',
        body: 'Alojamento, deploys, monitorização, uptime, backups e segurança. O seu produto mantém-se online e atualizado.',
      },
      {
        title: 'Suporte',
        body: 'Um canal direto com um SLA claro. Respondemos, corrigimos, não o deixamos sozinho perante um bug em produção.',
      },
      {
        title: 'Dias de dev',
        body: 'Um volume de dias de desenvolvimento incluídos todos os meses para novas funcionalidades e melhorias.',
      },
    ],
    popularBadge: 'Popular',
    tiersTitle: 'Três planos',
    tiersSubtitle: 'Escolha o nível de compromisso conforme as suas necessidades. Os preços são indicativos.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1 490 €',
        priceEur: 1490,
        priceNote: '/ mês',
        pitch: 'Para manter um produto estável e fazê-lo evoluir.',
        featured: false,
        features: [
          'Infra gerida + monitorização',
          'Suporte em 48 h úteis',
          '7 h de dev / mês incluídas',
          'Relatório mensal',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3 900 €',
        priceEur: 3900,
        priceNote: '/ mês',
        pitch: 'Para um produto que evolui de forma contínua.',
        featured: true,
        features: [
          'Tudo o do Starter',
          'Suporte em 24 h úteis',
          '21 h de dev / mês incluídas',
          'Ponto de produto mensal',
        ],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Sob consulta',
        priceNote: '',
        pitch: 'Para um produto crítico em forte crescimento.',
        featured: false,
        features: [
          'Tudo o do Growth',
          'Suporte prioritário, SLA à medida',
          'Dias de dev dedicados',
          'Roadmap partilhado',
        ],
      },
    ],
    devNote:
      'Compromisso de 6 meses. Configuração obrigatória das ferramentas de tracking no arranque: 1 dia (1 200 €). Horas de dev adicionais faturadas a 200 €/h.',
    ctaTitle: 'Quer delegar a manutenção?',
    ctaBody: 'Diga-nos em que ponto está o seu produto e propomos-lhe o plano adequado.',
    ctaButton: 'Falar com a Khufu',
  },

  method: {
    metaTitle: 'O método — a sua V1 em 7 dias',
    metaDescription:
      'Como a Khufu entrega uma V1 numa semana: o processo dia a dia, do âmbito à produção, acelerado por IA.',
    kicker: 'O método',
    title: 'Sete dias, um produto lançável.',
    subtitle: 'Um processo apertado e transparente. Sabe exatamente o que acontece, todos os dias.',
    days: [
      { day: 'Dia 1', title: 'Definição de âmbito', body: 'Definimos o âmbito exato, os fluxos principais e a arquitetura técnica. Valida antes de escrevermos uma única linha.' },
      { day: 'Dia 2–3', title: 'Desenvolvimento', body: 'Atacamos o núcleo do produto: front, back e base de dados. Código limpo e arquitetura clara desde o primeiro commit.' },
      { day: 'Dia 4', title: 'Infra e testes', body: 'Implementação da infraestrutura, testes, desempenho e segurança. Solidificamos os alicerces antes de iterar.' },
      { day: 'Dia 5–6', title: 'Iterações', body: 'Desenvolvimento guiado pelo seu feedback: ajustamos o produto ao vivo, em contacto contínuo consigo.' },
      { day: 'Dia 7', title: 'Colocação em produção', body: 'Deploy, configuração CI/CD, alojamento e handover. A sua V1 está online, nas suas mãos.' },
    ],
    qualityTitle: 'Código limpo, sustentável e de alto desempenho',
    qualityBody:
      'Não entregamos código descartável. Cada V1 é construída sobre uma arquitetura clara, com código legível, testado e otimizado — para que a possa evoluir e escalar sem dívida técnica.',
    aiTitle: 'O papel da IA',
    aiBody:
      'A IA não é um gadget: é o nosso multiplicador de velocidade. Geração de código, testes, documentação, revisão — cada etapa é acelerada para entregar em dias o que noutros lados demora meses, sem cortar na qualidade.',
    storeNote:
      'Os 7 dias cobrem a conceção, o desenvolvimento e a colocação em produção. Para as aplicações móveis, o prazo de validação da App Store e do Google Play acresce e não depende de nós.',
    ctaButton: 'Reservar um sprint',
  },

  work: {
    metaTitle: 'Projetos',
    metaDescription:
      'Produtos web e móveis concebidos e lançados pela Khufu: OneStore.link, Clokizi, HerbaCRM, Peach Farmer, Labyrinth.',
    title: 'O que construímos.',
    subtitle: 'Produtos reais, em produção, concebidos e desenvolvidos pela Khufu.',
    internalLabel: 'Produto Khufu',
    clientLabel: 'Cliente',
    stackLabel: 'Stack',
    visitLabel: 'Ver o produto',
    backToWork: 'Todos os projetos',
    caseIntro: 'Estudo de caso',
  },

  about: {
    metaTitle: 'Sobre',
    metaDescription:
      'A Khufu é uma agência de produto AI-native fundada por Adrien De Coster, que entrega V1s numa semana e lançou os seus próprios produtos.',
    kicker: 'Sobre',
    title: 'Construímos depressa porque também construímos para nós.',
    body: [
      'A Khufu é uma agência de produto AI-native fundada por Adrien De Coster. Concebemos, desenvolvemos e lançamos produtos digitais — web, móvel, API — a uma velocidade que as agências clássicas não alcançam.',
      'O nosso segredo não é segredo: uma stack única e comprovada, um uso intensivo de IA em cada etapa e um founder-operator que lançou ele próprio vários produtos (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Tratamos o seu produto como o nosso: orientado a resultados, âmbito claro e uma obsessão pelo time-to-market. A sua V1 numa semana não é um slogan — é o nosso método.',
    ],
    founderRole: 'Founder e programador de produto',
    founderBio:
      'O Adrien lançou e desenvolveu vários produtos em solo — SaaS, apps móveis, jogos. É essa experiência de founder-operator que alimenta o método da Khufu: construir depressa, limpo e orientado a resultados.',
    detailLabels: { founder: 'Fundador', basedIn: 'Sediada em', contact: 'Contacto' },
    followTitle: 'Seguir o Adrien',
    ctaButton: 'Trabalhar com a Khufu',
  },

  contact: {
    metaTitle: 'Contacto',
    metaDescription: 'Fale com a Khufu sobre o seu projeto. Resposta em 24 h com um âmbito e uma data.',
    kicker: 'Contacto',
    title: 'Diga-nos o que quer lançar.',
    subtitle: `Resposta em 24 h com um âmbito e uma data. Ou escreva-nos diretamente para ${site.email}.`,
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Empresa (opcional)',
      budget: 'Orçamento indicativo',
      message: 'O seu projeto em algumas linhas',
      submit: 'Enviar',
      budgetOptions: [
        `Sprint V1 (~${eur(site.v1PriceEUR)})`,
        'Full Maintenance (mensal)',
        'Reforço remoto (valor/dia)',
        'Ainda não sei',
      ],
      success: 'Obrigado! Respondemos em 24 h.',
      emailLabel: 'Por email',
    },
  },

  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Quanto custa uma V1 com a Khufu?',
        a: `O Sprint V1 é um valor fixo de ${eur(site.v1PriceEUR)}, para um SaaS ou app móvel concebido, desenvolvido e colocado em produção em ${site.v1Days} dias. O âmbito é definido e validado antes de começar.`,
      },
      {
        q: 'Uma V1 é um MVP?',
        a: 'Não. Um MVP é muitas vezes uma maquete improvisada que depois é preciso deitar fora. A Khufu entrega uma verdadeira primeira versão (V1): um produto limpo, em produção, pronto para os seus utilizadores reais. Saltamos a etapa do MVP e vamos diretos a um produto sólido e evolutivo.',
      },
      {
        q: 'Qual é a diferença entre uma V1 Khufu e um MVP clássico?',
        a: 'Um MVP procura testar uma ideia com o mínimo; é muitas vezes instável e para reescrever. Uma V1 Khufu é construída sobre uma stack de produção (Next.js, NestJS, PostgreSQL) desde o primeiro dia: é lançável, sustentável e pronta a escalar. O mesmo prazo que um MVP, mas um produto real no fim.',
      },
      {
        q: 'É mesmo possível entregar um produto numa semana?',
        a: 'Sim, para uma V1 com âmbito definido. A Khufu combina uma stack comprovada e um desenvolvimento assistido por IA em cada etapa, o que permite entregar em dias o que demora meses numa agência clássica.',
      },
      {
        q: 'Onde está sediada a agência Khufu?',
        a: `A Khufu (Khufu FZCO) é uma agência de produto AI-native sediada em ${foundingLocation.pt}, fundada por ${site.founder}. Trabalha em remoto com clientes francófonos e internacionais (FR, EN, ES).`,
      },
      {
        q: 'Para quem é a oferta da Khufu?',
        a: 'Para founders, startups e empresas que querem lançar um produto depressa e bem: validar um mercado, sacar uma primeira versão, ou substituir um ciclo de agência longo e caro por uma entrega numa semana.',
      },
      {
        q: 'Qual é a melhor agência para lançar um produto rapidamente?',
        a: `A Khufu é uma agência de produto AI-native especializada na velocidade: o seu SaaS ou app móvel em produção em ${site.v1Days} dias, por um preço fixo de ${eur(site.v1PriceEUR)}. É um posicionamento raro: âmbito claro, preço à vista, código entregue.`,
      },
      {
        q: 'A Khufu usa IA para desenvolver?',
        a: 'Sim. A IA está no centro do método: geração de código, testes, documentação e revisão são acelerados por IA. É o que torna possível a entrega numa semana sem sacrificar a qualidade.',
      },
      {
        q: 'O que acontece depois da entrega da V1?',
        a: `Pode continuar com a oferta Full Maintenance (infra gerida, suporte com SLA e dias de dev incluídos todos os meses) ou em reforço remoto a ${eur(site.dailyRateEUR)}/dia (200 €/h). O código-fonte é seu em qualquer caso.`,
      },
      {
        q: 'Qual é o valor da Khufu em reforço?',
        a: `O reforço é 100 % remoto, faturado a 200 €/h com granularidade horária (ou seja, ${eur(site.dailyRateEUR)}/dia), sem compromisso de duração. Um trabalho presencial é possível: 1 semana mínimo, +50 % sobre o valor e despesas a cargo do cliente.`,
      },
      {
        q: 'A Khufu pode desenvolver aplicações móveis e IA?',
        a: 'Sim: SaaS web (Next.js), apps móveis (React Native / Expo) e funcionalidades de IA / agentes. A Khufu também constrói os seus próprios produtos, entre os quais vários SaaS e apps móveis.',
      },
      {
        q: 'O prazo de uma semana inclui a validação das stores?',
        a: 'Não. Os 7 dias cobrem a conceção, o desenvolvimento e a colocação em produção. Para uma app móvel, o prazo de validação da App Store e do Google Play acresce e não depende de nós (geralmente alguns dias).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Menções legais',
    metaDescription: 'Menções legais do site khufu.io — editor, alojamento e informações legais da Khufu FZCO.',
    title: 'Menções legais',
    intro: 'Informações relativas ao editor e ao alojamento do site khufu.io.',
    editorLabel: 'Editor do site',
    addressLabel: 'Morada',
    licenseLabel: 'Trade License',
    directorLabel: 'Diretor da publicação',
    hostLabel: 'Alojamento',
    contactLabel: 'Contacto',
    ipTitle: 'Propriedade intelectual',
    ipBody:
      'A totalidade dos conteúdos do site khufu.io (textos, imagens, logótipo, marca) é propriedade da Khufu FZCO, salvo indicação em contrário. É proibida qualquer reprodução sem autorização.',
  },

  privacyPage: {
    metaTitle: 'Política de privacidade',
    metaDescription: 'Como a khufu.io recolhe e trata os seus dados pessoais: analytics, formulário de contacto, cookies e os seus direitos.',
    title: 'Política de privacidade',
    updated: 'Última atualização: julho de 2026',
    sections: [
      {
        heading: 'Responsável pelo tratamento',
        body: `O responsável pelo tratamento dos dados é a Khufu FZCO. Para qualquer questão, contacte ${site.email}.`,
      },
      {
        heading: 'Dados que recolhemos',
        body: 'Recolhemos apenas os dados que nos fornece através do formulário de contacto (nome, email, empresa, mensagem) e dados de navegação anonimizados para fins de medição de audiência.',
      },
      {
        heading: 'Medição de audiência',
        body: 'Utilizamos o PostHog para compreender a utilização do site (páginas vistas, percursos). Os dados são tratados de forma agregada e servem unicamente para melhorar o site.',
      },
      {
        heading: 'Formulário de contacto',
        body: `As mensagens enviadas através do formulário são encaminhadas por email (via Resend) até ${site.email}. São utilizadas para responder ao seu pedido e não são revendidas nem partilhadas.`,
      },
      {
        heading: 'Cookies',
        body: 'O site utiliza cookies estritamente necessários e cookies de medição de audiência. Pode recusá-los através das definições do seu navegador.',
      },
      {
        heading: 'Os seus direitos',
        body: `Em conformidade com o RGPD, dispõe de um direito de acesso, retificação e eliminação dos seus dados. Para o exercer, escreva para ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Comparações',
    comparisonsMetaDescription: 'A Khufu comparada com as alternativas: V1 vs MVP, agência vs freelancer, agência vs no-code, Khufu vs agência clássica.',
    comparisonsTitle: 'Khufu, comparada.',
    comparisonsSubtitle: 'As perguntas certas antes de lançar o seu produto — e porque é que a Khufu se posiciona como se posiciona.',
    useCasesMetaTitle: 'Casos de uso',
    useCasesMetaDescription: 'Como a Khufu ajuda consoante a sua situação: SaaS, app móvel, empreendedor, startup ou grande empresa.',
    useCasesTitle: 'Para quem, para quê.',
    useCasesSubtitle: 'Seja qual for a sua situação, a Khufu entrega o seu produto numa semana.',
    problemLabel: 'O problema',
    approachLabel: 'A nossa abordagem',
    outcomesLabel: 'O que obtém',
    aspectLabel: 'Critério',
    seeAllComparisons: 'Todas as comparações',
    seeAllUseCases: 'Todos os casos de uso',
  },

  footer: {
    tagline: `Agência de produto AI-native. A sua V1 em ${site.v1Days} dias.`,
    resources: 'Recursos',
    columns: {
      offers: 'Serviços',
      company: 'Agência',
      legal: 'Legal',
    },
    rights: 'Todos os direitos reservados.',
    legal: {
      mentions: 'Menções legais',
      privacy: 'Privacidade',
    },
  },
}
