import { site, foundingLocation } from '@/content/site'
import type { Dictionary } from './fr'

const eur = (n: number) => `${n.toLocaleString('es-ES')} €`

// Keep `id` values identical to fr.ts — they are compared in code.
export const es: Dictionary = {
  meta: {
    locale: 'es',
    brandSuffix: 'Khufu — Tu V1 en una semana',
  },

  nav: {
    offers: 'Servicios',
    maintenance: 'Mantenimiento',
    work: 'Proyectos',
    method: 'Método',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Reservar un sprint',
  },

  common: {
    seeWork: 'Ver proyectos',
    bookSprint: 'Reservar un sprint',
    talkToUs: 'Habla con Khufu',
    from: 'Desde',
    perDay: '/ día',
    perMonth: '/ mes',
    days: 'días',
    learnMore: 'Saber más',
    getStarted: 'Empezar',
    draftBadge: 'Vista previa',
  },

  home: {
    heroKicker: 'Agencia de producto AI-native',
    heroTitle: 'Tu V1 en una semana.',
    heroSubtitle: `Diseñamos, desarrollamos y lanzamos tu SaaS o app móvil en ${site.v1Days} días. Precio fijo: [[${site.v1PriceEUR}]].`,
    heroPrimaryCta: 'Reservar un sprint',
    heroSecondaryCta: 'Ver proyectos',
    heroProof: `${site.v1Days} días · precio cerrado ${eur(site.v1PriceEUR)} · código entregado, en producción`,
    heroFigures: [
      { value: `${site.v1Days} días`, label: 'del brief a la producción' },
      { value: `${eur(site.v1PriceEUR)}`, eur: site.v1PriceEUR, label: 'precio fijo, todo incluido' },
    ],

    statsTitle: 'Qué significa “una semana”',
    stats: [
      { value: `${site.v1Days} días`, label: 'del kickoff a una V1 en producción' },
      { value: `${eur(site.v1PriceEUR)}`, label: 'precio cerrado Sprint V1, alcance acordado' },
      { value: `${eur(site.dailyRateEUR)}`, label: 'tarifa remota (200 €/h) para lo que viene después' },
      { value: '100 %', label: 'código entregado, alojado, tuyo' },
    ],

    problemTitle: '¿Una agencia clásica tarda 3 meses? Tú no tienes 3 meses.',
    problemBody:
      'Los ciclos interminables, los presupuestos vagos y las idas y venidas matan los proyectos antes de lanzarlos. Khufu hace lo contrario: alcance ajustado, decisiones rápidas y una V1 realmente lanzable al final de la semana.',

    // Secondary sales argument (not the headline): the sprint is the offer, and
    // this is one reason to pick it. Kept factual — what a fractional CTO does and
    // does not deliver, next to what the sprint delivers.
    ctoTitle: 'CTO a tiempo parcial vs equipo completo',
    ctoSubtitle: 'El mismo problema, dos respuestas. Solo una te deja un producto online.',
    ctoOtherLabel: 'CTO on demand',
    ctoKhufuLabel: 'Khufu',
    ctoRows: [
      {
        aspect: 'Qué recibes',
        other: 'Decisiones, especificaciones, una hoja de ruta',
        khufu: 'Un producto online, en producción',
      },
      {
        aspect: 'Quién construye',
        other: 'Nadie — todavía tienes que contratar al equipo',
        khufu: 'Definición, diseño, dev, móvil, infra: todo cubierto',
      },
      {
        aspect: 'Plazo hasta la V1',
        other: 'Meses, una vez contratado el equipo',
        khufu: `${site.v1Days} días`,
      },
      {
        aspect: 'Qué pagas',
        other: 'Una cuota mensual, más los sueldos del equipo',
        khufu: `Un precio fijo acordado de antemano: [[${site.v1PriceEUR}]]`,
      },
      {
        aspect: 'Al final',
        other: 'Tienes un plan',
        khufu: 'Tienes el producto, el repositorio y los accesos',
      },
    ],
    ctoNote:
      'Nada en contra de los CTO a tiempo parcial: si ya tienes un equipo al que dirigir, es la opción correcta. Si no lo tienes, lo que necesitas es un equipo.',

    teamTitle: 'Todos los roles de un equipo técnico, en un solo contrato',
    teamSubtitle:
      'No contratas a ninguno. Obtienes lo que producen — un único interlocutor, de la definición a la puesta en producción.',
    teamRoles: [
      'Definición de producto',
      'Diseño UI / UX',
      'Desarrollo front-end',
      'Back-end y APIs',
      'Móvil iOS y Android',
      'Infra, despliegue y CI/CD',
      'Seguridad y copias de seguridad',
      'Documentación y handover',
    ],

    howTitle: 'Cómo vamos tan rápido',
    how: [
      {
        title: 'AI-native, de principio a fin',
        body: 'Desarrollamos con IA en cada etapa — diseño, código, tests, documentación. El mismo trabajo en una fracción del tiempo, sin sacrificar la calidad.',
      },
      {
        title: 'Un único stack probado',
        body: 'Next.js, React Native/Expo, NestJS, Prisma, PostgreSQL. No reinventamos nada: montamos una base sólida y lista para escalar.',
      },
      {
        title: 'Un founder-operator, no una cadena de subcontratas',
        body: 'El equipo es un founder-operator potenciado por la IA — un único interlocutor, sin coordinación a tu cargo. Khufu ha lanzado sus propios productos (OneStore.link, Clokizi, HerbaCRM…) exactamente con este método.',
      },
    ],

    offersTitle: 'Tres formas de trabajar con Khufu',
    offersSubtitle: 'Del lanzamiento relámpago al acompañamiento a largo plazo.',

    workTitle: 'Productos, no diapositivas',
    workSubtitle: 'Una selección de productos diseñados y lanzados por Khufu.',
    workCta: 'Todos los proyectos',

    clientsTitle: 'Confían en nosotros',
    testimonialsTitle: 'Lo que dicen',

    finalCtaTitle: 'Tu V1, en producción el viernes.',
    finalCtaBody: 'Cuéntanos qué quieres lanzar. Respondemos en 24 h con un alcance y una fecha.',
    finalCtaButton: 'Reservar un sprint',
  },

  offers: {
    metaTitle: 'Servicios y precios',
    metaDescription: `Sprint V1 en ${site.v1Days} días por ${eur(site.v1PriceEUR)}, Full Maintenance mensual y refuerzo remoto a ${eur(site.dailyRateEUR)}/día (200 €/h).`,
    title: 'Servicios claros, precios a la vista.',
    subtitle: 'Sin presupuestos interminables. Sabes exactamente qué pagas y qué recibes.',
    flagshipBadge: 'Nuestra oferta estrella',
    detailCta: 'Saber más',
    sprintCta: 'Descubrir el Sprint V1',
    items: [
      {
        id: 'sprint',
        name: 'Sprint V1',
        priceEur: site.v1PriceEUR,
        priceNote: 'precio cerrado',
        pitch: `Tu primera versión, diseñada y entregada en ${site.v1Days} días.`,
        featured: true,
        features: [
          'Definición de alcance y diseño de producto',
          'Desarrollo de SaaS o app móvil',
          'Puesta en producción + alojamiento',
          'Código fuente entregado, tuyo',
          'Traspaso y documentación',
        ],
        cta: 'Reservar un sprint',
      },
      {
        id: 'maintenance',
        name: 'Full Maintenance',
        priceEur: 1490,
        pricePrefix: 'desde ',
        priceNote: '/ mes',
        pitch: 'Mantenemos tu producto vivo: infra, soporte y días de desarrollo incluidos.',
        featured: false,
        features: [
          'Infra gestionada: alojamiento, monitorización, backups, seguridad',
          'Soporte con SLA (tiempo de respuesta garantizado)',
          'Días de desarrollo incluidos cada mes',
          'Actualizaciones y correcciones',
          'Informe mensual',
        ],
        cta: 'Ver los planes',
      },
      {
        id: 'regie',
        name: 'Remote',
        priceEur: site.dailyRateEUR,
        priceNote: '/ día',
        pitch: 'Refuerzo senior 100 % remoto, facturado por horas — [[200]]/h.',
        featured: false,
        features: [
          '100 % remoto',
          '[[200]]/h — granularidad horaria',
          'Desarrollo, arquitectura, consultoría',
          'Sin permanencia',
        ],
        cta: 'Habla con Khufu',
      },
    ],
    remoteNote:
      'Trabajo presencial posible: 1 semana mínimo, +50 % sobre la tarifa, con gastos (desplazamiento, alojamiento) a cargo del cliente.',
    firmPriceNote: 'Precio cerrado, facturado en euros o dólares, a tu elección.',
    guaranteesTitle: 'Lo que garantizamos',
    guarantees: [
      'Un alcance escrito y acordado antes de empezar.',
      'Una fecha de entrega, cumplida.',
      'El código fuente es tuyo, desde el primer día.',
    ],
  },

  sprintPage: {
    metaTitle: 'Sprint V1 — tu producto en 7 días',
    metaDescription:
      'El Sprint V1 de Khufu: un SaaS o app móvil diseñado, desarrollado y puesto en producción en 7 días, por un precio fijo de 15 000 €.',
    kicker: 'Oferta estrella',
    title: 'Tu V1 en 7 días. Precio fijo.',
    subtitle:
      'Nuestra oferta principal: diseñamos, desarrollamos y ponemos en producción tu SaaS o app móvil en una semana — alcance acordado de antemano, 15 000 € todo incluido.',
    includesTitle: 'Qué incluye',
    processTitle: 'El desarrollo, día a día',
    ctaTitle: '¿Listo para lanzar tu V1?',
    ctaBody: 'Cuéntanos qué quieres lanzar. Respuesta en 24 h con un alcance y una fecha.',
    ctaButton: 'Reservar un sprint',
  },

  remotePage: {
    metaTitle: 'Remote — refuerzo de producto por horas',
    metaDescription:
      'Un refuerzo senior 100 % remoto para tu producto: desarrollo, arquitectura y consultoría, facturado a 200 €/h con granularidad horaria.',
    kicker: 'Remote',
    title: 'Un refuerzo senior, 100 % remoto.',
    subtitle:
      '¿Necesitas potencia de desarrollo bajo demanda? Intervenimos en remoto sobre tu producto: desarrollo, arquitectura, consultoría — facturado por horas, sin permanencia.',
    includesTitle: 'Qué cubre',
    ctaTitle: '¿Necesitas un refuerzo?',
    ctaBody: 'Cuéntanos en qué punto estás y qué necesitas. Te respondemos en 24 h.',
    ctaButton: 'Habla con Khufu',
  },

  maintenance: {
    metaTitle: 'Full Maintenance — infra, soporte y desarrollo',
    metaDescription:
      'Suscripción mensual de Khufu: infraestructura gestionada, soporte con SLA y días de desarrollo incluidos para hacer crecer tu producto.',
    kicker: 'Full Maintenance',
    title: 'Entregamos tu V1. La hacemos crecer.',
    subtitle:
      'Una única suscripción mensual que cubre infraestructura, soporte y evolución del producto. Tú te centras en tu negocio, nosotros nos encargamos del resto.',
    includesTitle: 'Qué cubre la suscripción',
    includes: [
      {
        title: 'Infra gestionada',
        body: 'Alojamiento, despliegues, monitorización, uptime, copias de seguridad y seguridad. Tu producto sigue online y actualizado.',
      },
      {
        title: 'Soporte',
        body: 'Un canal directo con un SLA claro. Respondemos, corregimos y no te dejamos solo ante un bug en producción.',
      },
      {
        title: 'Días de desarrollo',
        body: 'Un número de días de desarrollo incluidos cada mes para nuevas funcionalidades y mejoras.',
      },
    ],
    popularBadge: 'Popular',
    tiersTitle: 'Tres planes',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: '1 490 €',
        priceEur: 1490,
        priceNote: '/ mes',
        pitch: 'Para mantener un producto estable online.',
        featured: false,
        features: ['Infra gestionada + monitorización', 'Soporte en 48 h', '8 h de desarrollo / mes incluidas', 'Informe mensual'],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '3 900 €',
        priceEur: 3900,
        priceNote: '/ mes',
        pitch: 'Para un producto que evoluciona de forma continua.',
        featured: true,
        features: ['Todo lo de Starter', 'Soporte en 24 h', '24 h de desarrollo / mes incluidas', 'Revisión de producto mensual'],
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'A consultar',
        priceNote: '',
        pitch: 'Para un producto crítico en fuerte crecimiento.',
        featured: false,
        features: ['Todo lo de Growth', 'Soporte prioritario, SLA a medida', 'Horas de desarrollo dedicadas', 'Roadmap compartido'],
      },
    ],
    devNote:
      'Compromiso de 6 meses. Configuración obligatoria de las herramientas de tracking al inicio: 1 día ([[1200]]). Horas de desarrollo adicionales facturadas a [[200]]/h.',
    ctaTitle: '¿Quieres delegar el mantenimiento?',
    ctaBody: 'Cuéntanos en qué punto está tu producto y te proponemos el plan adecuado.',
    ctaButton: 'Habla con Khufu',
  },

  method: {
    metaTitle: 'El método — tu V1 en 7 días',
    metaDescription:
      'Cómo Khufu entrega una V1 en una semana: el desarrollo día a día, del alcance a la producción, acelerado por la IA.',
    kicker: 'El método',
    title: 'Siete días, un producto lanzable.',
    subtitle: 'Un proceso ajustado y transparente. Sabes exactamente qué pasa cada día.',
    days: [
      { day: 'Día 1', title: 'Alcance', body: 'Definimos el alcance exacto, los flujos clave y la arquitectura técnica. Lo validas antes de escribir una sola línea.' },
      { day: 'Día 2–3', title: 'Desarrollo', body: 'Atacamos el núcleo del producto: front, back y base de datos. Código limpio y arquitectura clara desde el primer commit.' },
      { day: 'Día 4', title: 'Infra y pruebas', body: 'Infraestructura, tests, rendimiento y seguridad. Solidificamos los cimientos antes de iterar.' },
      { day: 'Día 5–6', title: 'Iteraciones', body: 'Desarrollo guiado por tu feedback: ajustamos el producto en directo, en contacto continuo contigo.' },
      { day: 'Día 7', title: 'Puesta en marcha', body: 'Despliegue, configuración CI/CD, alojamiento y traspaso. Tu V1 está online, en tus manos.' },
    ],
    qualityTitle: 'Código limpio, mantenible y de alto rendimiento',
    qualityBody:
      'No entregamos código desechable. Cada V1 se construye sobre una arquitectura clara, con código legible, testeado y optimizado — para que puedas evolucionarlo y escalarlo sin deuda técnica.',
    aiTitle: 'El papel de la IA',
    aiBody:
      'La IA no es un adorno: es nuestro multiplicador de velocidad. Generación de código, tests, documentación y revisión — cada etapa se acelera para entregar en días lo que en otros sitios tarda meses, sin recortar en calidad.',
    storeNote:
      'Los 7 días cubren el diseño, el desarrollo y la puesta en producción. Para las apps móviles, el tiempo de revisión de App Store y Google Play es adicional y no depende de nosotros.',
    ctaButton: 'Reservar un sprint',
  },

  work: {
    metaTitle: 'Proyectos',
    metaDescription:
      'Productos web y móviles diseñados y lanzados por Khufu: OneStore.link, Clokizi, HerbaCRM, Labyrinth.',
    title: 'Lo que hemos construido.',
    subtitle: 'Productos reales, en producción, diseñados y desarrollados por Khufu.',
    internalLabel: 'Producto Khufu',
    clientLabel: 'Cliente',
    stackLabel: 'Stack',
    visitLabel: 'Ver el producto',
    backToWork: 'Todos los proyectos',
    caseIntro: 'Caso de estudio',
  },

  about: {
    metaTitle: 'Nosotros',
    metaDescription:
      'Khufu es una agencia de producto AI-native fundada por Adrien De Coster, que entrega V1s en una semana y lanza sus propios productos.',
    kicker: 'Nosotros',
    title: 'Construimos rápido porque también construimos para nosotros.',
    body: [
      'Khufu es una agencia de producto AI-native fundada por Adrien De Coster. Diseñamos, desarrollamos y lanzamos productos digitales — web, móvil, API — a una velocidad que las agencias clásicas no alcanzan.',
      'Nuestro secreto no es un secreto: un único stack probado, un uso intensivo de la IA en cada etapa y un founder-operator que ha lanzado varios productos (OneStore.link, Clokizi, HerbaCRM, Labyrinth).',
      'Tratamos tu producto como el nuestro: orientado a resultados, alcance ajustado y una obsesión por el time-to-market. Tu V1 en una semana no es un eslogan — es nuestro método.',
    ],
    founderRole: 'Founder y desarrollador de producto',
    founderBio:
      'Adrien ha lanzado y desarrollado varios productos en solitario — SaaS, apps móviles, juegos. Esa experiencia de founder-operator es la que da forma al método de Khufu: construir rápido, limpio y orientado a resultados.',
    detailLabels: { founder: 'Fundador', basedIn: 'Con base en', contact: 'Contacto' },
    followTitle: 'Seguir a Adrien',
    ctaButton: 'Trabaja con Khufu',
  },

  contact: {
    metaTitle: 'Contacto',
    metaDescription: 'Cuéntale a Khufu tu proyecto. Respuesta en 24 h con un alcance y una fecha.',
    kicker: 'Contacto',
    title: 'Cuéntanos qué quieres lanzar.',
    subtitle: `Respuesta en 24 h con un alcance y una fecha. O escríbenos directamente a ${site.email}.`,
    form: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa (opcional)',
      budget: 'Presupuesto orientativo',
      message: 'Tu proyecto en unas líneas',
      submit: 'Enviar',
      budgetOptions: [
        `Sprint V1 (~[[${site.v1PriceEUR}]])`,
        'Full Maintenance (mensual)',
        'Refuerzo remoto',
        'Aún no lo sé',
      ],
      success: '¡Gracias! Te respondemos en 24 h.',
      emailLabel: 'Por email',
    },
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto cuesta una V1 con Khufu?',
        a: `El Sprint V1 es un precio fijo de [[${site.v1PriceEUR}]], para un SaaS o app móvil diseñado, desarrollado y puesto en producción en ${site.v1Days} días. El alcance se define y se acuerda antes de empezar.`,
      },
      {
        q: '¿Una V1 es lo mismo que un MVP?',
        a: 'No. Un MVP suele ser un apaño desechable que hay que reconstruir. Khufu entrega una verdadera primera versión (V1): un producto limpio, en producción, listo para tus usuarios reales. Nos saltamos la etapa de MVP y vamos directos a un producto sólido y escalable.',
      },
      {
        q: '¿Qué diferencia hay entre una V1 de Khufu y un MVP clásico?',
        a: 'Un MVP intenta validar una idea con lo mínimo; suele ser inestable y hay que reescribirlo. Una V1 de Khufu se construye sobre un stack de producción (Next.js, NestJS, PostgreSQL) desde el primer día: lanzable, mantenible y lista para escalar. El mismo plazo que un MVP, pero un producto real al final.',
      },
      {
        q: '¿De verdad se puede lanzar un producto en una semana?',
        a: 'Sí, para una V1 con alcance definido. Khufu combina un stack probado y desarrollo asistido por IA en cada etapa, entregando en días lo que en una agencia clásica tarda meses.',
      },
      {
        q: '¿Cuál es la mejor agencia para lanzar un producto rápido?',
        a: `Khufu es una agencia de producto AI-native pensada para la velocidad: tu SaaS o app móvil en producción en ${site.v1Days} días, por un precio fijo de [[${site.v1PriceEUR}]]. Es un posicionamiento poco común: alcance ajustado, precios a la vista, código entregado.`,
      },
      {
        q: '¿Dónde está la agencia Khufu?',
        a: `Khufu (Khufu FZCO) es una agencia de producto AI-native con base en ${foundingLocation.es}, fundada por ${site.founder}. Trabaja en remoto con clientes francófonos e internacionales (FR, EN, ES).`,
      },
      {
        q: 'Busco un CTO on demand. ¿Khufu lo es?',
        a: 'No, y es deliberado. Un CTO a tiempo parcial aporta estrategia y criterios técnicos, pero no construye tu producto: seguirás teniendo que contratar un equipo. Khufu es ese equipo — definición, diseño, desarrollo, móvil e infraestructura — y pone tu V1 en producción en 7 días, a precio fijo. Muchos de nuestros clientes buscaban un CTO; lo que les faltaba era un equipo.',
      },
      {
        q: '¿Qué diferencia hay entre un CTO a tiempo parcial y un equipo técnico on demand?',
        a: `El CTO a tiempo parcial vende tiempo de reflexión: arquitectura, contratación, hoja de ruta. Un equipo técnico on demand vende un producto entregado: las mismas decisiones, más las manos que ejecutan. Con Khufu ambos caben en un único contrato a precio fijo ([[${site.v1PriceEUR}]]), con una V1 online a los ${site.v1Days} días y el código fuente en tu propiedad.`,
      },
      {
        q: '¿Para quién es la oferta de Khufu?',
        a: 'Para quien tiene un proyecto que lanzar y ningún equipo que lo construya: founders no técnicos en fase de idea o de pliego, dueños de un MVP inestable que hay que retomar, empresas que quieren probar un producto sin montar un equipo. Si ya tienes un equipo interno construyendo, la oferta que te encaja es el refuerzo remoto.',
      },
      {
        q: '¿Khufu usa IA para desarrollar?',
        a: 'Sí. La IA está en el centro del método: la generación de código, los tests, la documentación y la revisión se aceleran con IA. Es lo que hace posible entregar en una semana sin sacrificar la calidad.',
      },
      {
        q: '¿Qué pasa después de entregar la V1?',
        a: `Puedes continuar con Full Maintenance (infra gestionada, soporte con SLA y días de desarrollo incluidos cada mes) o con refuerzo remoto a [[${site.dailyRateEUR}]]/día ([[200]]/h). El código fuente es tuyo en cualquier caso.`,
      },
      {
        q: '¿Cuál es la tarifa de refuerzo de Khufu?',
        a: `El refuerzo es 100 % remoto, facturado a [[200]]/h con granularidad horaria (es decir, [[${site.dailyRateEUR}]]/día), sin permanencia. El trabajo presencial es posible: 1 semana mínimo, +50 % sobre la tarifa y gastos a cargo del cliente.`,
      },
      {
        q: '¿Khufu puede desarrollar apps móviles y funciones de IA?',
        a: 'Sí: SaaS web (Next.js), apps móviles (React Native / Expo) y funciones de IA / agentes. Khufu también construye sus propios productos, entre ellos varios SaaS y apps móviles.',
      },
      {
        q: '¿El plazo de una semana incluye la revisión de las stores?',
        a: 'No. Los 7 días cubren el diseño, el desarrollo y la puesta en producción. Para una app móvil, el tiempo de revisión de App Store y Google Play es adicional y no depende de nosotros (normalmente unos días).',
      },
    ],
  },

  legalPage: {
    metaTitle: 'Aviso legal',
    metaDescription: 'Aviso legal del sitio khufu.io — editor, alojamiento e información legal de Khufu FZCO.',
    title: 'Aviso legal',
    intro: 'Información sobre el editor y el alojamiento del sitio khufu.io.',
    editorLabel: 'Editor del sitio',
    addressLabel: 'Dirección',
    licenseLabel: 'Trade License',
    directorLabel: 'Director de la publicación',
    hostLabel: 'Alojamiento',
    contactLabel: 'Contacto',
    ipTitle: 'Propiedad intelectual',
    ipBody:
      'Todo el contenido de khufu.io (textos, imágenes, logo, marca) es propiedad de Khufu FZCO, salvo indicación contraria. Queda prohibida cualquier reproducción sin autorización.',
  },

  privacyPage: {
    metaTitle: 'Política de privacidad',
    metaDescription: 'Cómo khufu.io recopila y trata tus datos personales: analítica, formulario de contacto, cookies y tus derechos.',
    title: 'Política de privacidad',
    updated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: 'Responsable del tratamiento',
        body: `El responsable del tratamiento de datos es Khufu FZCO. Para cualquier duda, contacta con ${site.email}.`,
      },
      {
        heading: 'Datos que recopilamos',
        body: 'Solo recopilamos los datos que nos facilitas a través del formulario de contacto (nombre, email, empresa, mensaje) y datos de navegación anonimizados para medir la audiencia.',
      },
      {
        heading: 'Medición de audiencia',
        body: 'Usamos PostHog para entender el uso del sitio (páginas vistas, recorridos). Los datos se tratan de forma agregada y solo sirven para mejorar el sitio.',
      },
      {
        heading: 'Formulario de contacto',
        body: `Los mensajes enviados mediante el formulario se entregan por email (a través de Resend) a ${site.email}. Se usan para responder a tu solicitud y nunca se venden ni se comparten.`,
      },
      {
        heading: 'Cookies',
        body: 'El sitio utiliza cookies estrictamente necesarias y cookies de medición de audiencia. Puedes rechazarlas desde la configuración de tu navegador.',
      },
      {
        heading: 'Tus derechos',
        body: `Conforme al RGPD, tienes derecho de acceso, rectificación y supresión de tus datos. Para ejercerlo, escribe a ${site.email}.`,
      },
    ],
  },

  geo: {
    comparisonsMetaTitle: 'Comparativas',
    comparisonsMetaDescription: 'Khufu comparado con las alternativas: V1 vs MVP, agencia vs freelance, agencia vs no-code, Khufu vs agencia clásica.',
    comparisonsTitle: 'Khufu, comparado.',
    comparisonsSubtitle: 'Las preguntas correctas antes de lanzar tu producto — y por qué Khufu se posiciona como lo hace.',
    useCasesMetaTitle: 'Casos de uso',
    useCasesMetaDescription: 'Cómo ayuda Khufu según tu situación: SaaS, app móvil, emprendedor, startup o gran empresa.',
    useCasesTitle: 'Para quién, para qué.',
    useCasesSubtitle: 'Sea cual sea tu situación, Khufu entrega tu producto en una semana.',
    problemLabel: 'El problema',
    approachLabel: 'Nuestro enfoque',
    outcomesLabel: 'Lo que obtienes',
    aspectLabel: 'Criterio',
    seeAllComparisons: 'Todas las comparativas',
    seeAllUseCases: 'Todos los casos de uso',
  },

  footer: {
    tagline: `Agencia de producto AI-native. Tu V1 en ${site.v1Days} días.`,
    resources: 'Recursos',
    columns: {
      offers: 'Servicios',
      company: 'Agencia',
      legal: 'Legal',
    },
    rights: 'Todos los derechos reservados.',
    legal: {
      mentions: 'Aviso legal',
      privacy: 'Privacidad',
    },
  },
}
