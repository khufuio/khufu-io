/** Shared blog types. Each locale has its own fully-translated article file. */

export type ArticleBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { quote: string }

export type Article = {
  slug: string
  title: string
  /** One-line summary — used for cards, meta description and BlogPosting JSON-LD. */
  excerpt: string
  /** ISO date (YYYY-MM-DD). */
  date: string
  readingMinutes: number
  tags: string[]
  body: ArticleBlock[]
  /** DRAFT: hidden from listing/sitemap until validated. */
  draft?: boolean
}
