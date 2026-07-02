export type Testimonial = {
  /** The review text, kept verbatim in its original language (don't rewrite quotes). */
  quote: string
  author: string
  /** Role / company, e.g. "CEO, Flatchr". */
  role?: string
  /** Where the review comes from, e.g. "Malt". */
  source?: string
}

// Real client reviews (Malt) of Adrien, Khufu's founder — kept verbatim.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Nous avons eu la chance de collaborer avec Adrien, un développeur mobile freelance exceptionnel, sur un projet essentiel pour notre entreprise. Adrien a joué un rôle clé dans la correction et l’optimisation de notre application mobile, la rendant parfaitement fonctionnelle et beaucoup plus performante.',
    author: 'Damien',
    role: 'Flatchr',
    source: 'Malt',
  },
  {
    quote:
      'Je ne pouvais pas espérer mieux que la collaboration avec Adrien sur notre projet. Il a su reprendre le code de l’ancien développeur, terminer la mission initiale et s’est montré ultra disponible et fluide dans les échanges. Son profil est excellent et sait répondre avec qualité à tout besoin de développement.',
    author: 'Gatien',
    role: 'Qwenty',
    source: 'Malt',
  },
  {
    quote:
      'Expérience positive avec Adrien pour un projet de développement from scratch d’une appli web Node/ReactJS. L’atout majeur d’Adrien repose dans sa capacité à comprendre le besoin et à le retranscrire de manière concrète dans le cadre du développement. Les initiatives prises sont les bonnes.',
    author: 'David',
    role: 'Bleu Blanc Tech',
    source: 'Malt',
  },
]
