export type Testimonial = {
  /** The review text, kept in its original language (don't translate quotes). */
  quote: string
  author: string
  /** Role / company, e.g. "CEO, Flatchr". */
  role?: string
  /** Where the review comes from, e.g. "Malt". */
  source?: string
}

// Paste real reviews here (e.g. from Malt). The testimonials section on the
// home page stays hidden while this array is empty.
export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Adrien a livré notre app en un temps record, code propre et impeccable.',
  //   author: 'Prénom Nom',
  //   role: 'CEO, Entreprise',
  //   source: 'Malt',
  // },
]
