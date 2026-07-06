/**
 * Blog aggregation. Each article lives in its own file under ./blog/posts/,
 * fully translated into all 10 locales (Record<Locale, Article>). This is the
 * main SEO + GEO growth engine.
 */
import type { Locale } from '@/i18n/config'
import type { Article, ArticleBlock } from './blog/types'
import { post as p_combien_coute_un_saas_2026 } from './blog/posts/combien-coute-un-saas-2026'
import { post as p_combien_coute_app_mobile_2026 } from './blog/posts/combien-coute-app-mobile-2026'
import { post as p_prix_mvp_selon_methode } from './blog/posts/prix-mvp-selon-methode'
import { post as p_cout_cache_mvp_mal_code } from './blog/posts/cout-cache-mvp-mal-code'
import { post as p_forfait_vs_regie } from './blog/posts/forfait-vs-regie'
import { post as p_livrer_une_v1_en_7_jours } from './blog/posts/livrer-une-v1-en-7-jours'
import { post as p_cadrer_perimetre_v1 } from './blog/posts/cadrer-perimetre-v1'
import { post as p_5_fonctionnalites } from './blog/posts/5-fonctionnalites-a-ne-pas-mettre-dans-v1'
import { post as p_livrer_vite_sans_livrer_sale } from './blog/posts/livrer-vite-sans-livrer-sale'
import { post as p_de_l_idee_au_premier_client } from './blog/posts/de-l-idee-au-premier-client-30-jours'
import { post as p_no_code_ou_vrai_code_mvp } from './blog/posts/no-code-ou-vrai-code-mvp'
import { post as p_quand_migrer_de_bubble } from './blog/posts/quand-migrer-de-bubble-vers-du-code'
import { post as p_limites_du_no_code } from './blog/posts/limites-du-no-code'
import { post as p_agence_ai_native } from './blog/posts/agence-ai-native-c-est-quoi'
import { post as p_ia_divise_par_3 } from './blog/posts/ia-divise-par-3-temps-de-dev'
import { post as p_ajouter_fonctionnalite_ia } from './blog/posts/ajouter-fonctionnalite-ia-saas'
import { post as p_coder_avec_ia_2026 } from './blog/posts/coder-avec-ia-2026-hype-vs-realite'
import { post as p_agents_ia_dans_un_produit } from './blog/posts/agents-ia-dans-un-produit'
import { post as p_idee_de_saas_7_questions } from './blog/posts/idee-de-saas-7-questions-avant-de-coder'
import { post as p_valider_une_idee } from './blog/posts/valider-une-idee-avant-d-investir'
import { post as p_lancer_son_saas_en_solo } from './blog/posts/lancer-son-saas-en-solo-quoi-externaliser'
import { post as p_erreurs_qui_tuent_un_produit } from './blog/posts/erreurs-qui-tuent-un-produit'
import { post as p_trouver_ses_10_premiers } from './blog/posts/trouver-ses-10-premiers-utilisateurs'
import { post as p_notre_stack } from './blog/posts/notre-stack-pour-livrer-un-saas-en-une-semaine'
import { post as p_pourquoi_next_js } from './blog/posts/pourquoi-next-js'
import { post as p_react_native_expo } from './blog/posts/react-native-expo-ios-android'
import { post as p_choisir_sa_base_de_donnees } from './blog/posts/choisir-sa-base-de-donnees-saas'
import { post as p_hebergement_saas } from './blog/posts/hebergement-saas-vercel-cloud-run'
import { post as p_developper_ou_externaliser } from './blog/posts/developper-en-interne-ou-externaliser-v1'
import { post as p_cto_ou_agence } from './blog/posts/cto-technique-ou-agence'

export type { Article, ArticleBlock }

const allPosts: Record<Locale, Article>[] = [
  p_combien_coute_un_saas_2026,
  p_combien_coute_app_mobile_2026,
  p_prix_mvp_selon_methode,
  p_cout_cache_mvp_mal_code,
  p_forfait_vs_regie,
  p_livrer_une_v1_en_7_jours,
  p_cadrer_perimetre_v1,
  p_5_fonctionnalites,
  p_livrer_vite_sans_livrer_sale,
  p_de_l_idee_au_premier_client,
  p_no_code_ou_vrai_code_mvp,
  p_quand_migrer_de_bubble,
  p_limites_du_no_code,
  p_agence_ai_native,
  p_ia_divise_par_3,
  p_ajouter_fonctionnalite_ia,
  p_coder_avec_ia_2026,
  p_agents_ia_dans_un_produit,
  p_idee_de_saas_7_questions,
  p_valider_une_idee,
  p_lancer_son_saas_en_solo,
  p_erreurs_qui_tuent_un_produit,
  p_trouver_ses_10_premiers,
  p_notre_stack,
  p_pourquoi_next_js,
  p_react_native_expo,
  p_choisir_sa_base_de_donnees,
  p_hebergement_saas,
  p_developper_ou_externaliser,
  p_cto_ou_agence,
]

const localized = (locale: Locale): Article[] => allPosts.map((p) => p[locale])

export const publishedArticles = (locale: Locale): Article[] =>
  localized(locale)
    .filter((a) => !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

export const getArticle = (locale: Locale, slug: string): Article | undefined =>
  localized(locale).find((a) => a.slug === slug && !a.draft)

/** Stable slug list (from the French source) for generateStaticParams. */
export const articleSlugs = (): string[] =>
  allPosts.map((p) => p.fr).filter((a) => !a.draft).map((a) => a.slug)

/** Slug + real publication date — for accurate sitemap lastModified. */
export const articleDatedSlugs = (): { slug: string; date: string }[] =>
  allPosts.map((p) => p.fr).filter((a) => !a.draft).map((a) => ({ slug: a.slug, date: a.date }))

/** Articles sharing the most tags with `slug` (fallback: most recent), same locale. */
export const relatedArticles = (locale: Locale, slug: string, n = 3): Article[] => {
  const all = publishedArticles(locale)
  const current = all.find((a) => a.slug === slug)
  const others = all.filter((a) => a.slug !== slug)
  if (!current) return others.slice(0, n)
  return others
    .map((a) => ({ a, score: a.tags.filter((t) => current.tags.includes(t)).length }))
    .sort((x, y) => y.score - x.score || (x.a.date < y.a.date ? 1 : -1))
    .slice(0, n)
    .map((s) => s.a)
}

// Blog UI chrome — translated for every locale.
export const blogUi: Record<string, Record<Locale, string>> = {
  navLabel: { fr: 'Blog', en: 'Blog', es: 'Blog', de: 'Blog', it: 'Blog', pt: 'Blog', nl: 'Blog', ar: 'المدوّنة', pl: 'Blog', tr: 'Blog' },
  metaTitle: { fr: 'Le blog', en: 'Blog', es: 'Blog', de: 'Blog', it: 'Blog', pt: 'Blog', nl: 'Blog', ar: 'المدوّنة', pl: 'Blog', tr: 'Blog' },
  metaDescription: {
    fr: 'Idées, méthodes et retours d’expérience sur le produit, la vélocité et le développement AI-native.',
    en: 'Ideas, methods and field notes on product, speed and AI-native development.',
    es: 'Ideas, métodos y experiencias sobre producto, velocidad y desarrollo AI-native.',
    de: 'Ideen, Methoden und Praxiserfahrungen zu Produkt, Geschwindigkeit und AI-native-Entwicklung.',
    it: 'Idee, metodi ed esperienze su prodotto, velocità e sviluppo AI-native.',
    pt: 'Ideias, métodos e experiências sobre produto, velocidade e desenvolvimento AI-native.',
    nl: 'Ideeën, methoden en praktijkervaringen over product, snelheid en AI-native ontwikkeling.',
    ar: 'أفكار وأساليب وتجارب واقعية حول المنتج والسرعة والتطوير المعتمد على الذكاء الاصطناعي.',
    pl: 'Pomysły, metody i doświadczenia dotyczące produktu, szybkości i rozwoju AI-native.',
    tr: 'Ürün, hız ve AI-native geliştirme üzerine fikirler, yöntemler ve saha notları.',
  },
  title: { fr: 'Le blog', en: 'The blog', es: 'El blog', de: 'Der Blog', it: 'Il blog', pt: 'O blog', nl: 'De blog', ar: 'المدوّنة', pl: 'Blog', tr: 'Blog' },
  subtitle: {
    fr: 'Idées, méthodes et retours d’expérience sur le produit, la vélocité et l’IA.',
    en: 'Ideas, methods and field notes on product, speed and AI.',
    es: 'Ideas, métodos y experiencias sobre producto, velocidad e IA.',
    de: 'Ideen, Methoden und Praxiserfahrungen zu Produkt, Geschwindigkeit und KI.',
    it: 'Idee, metodi ed esperienze su prodotto, velocità e IA.',
    pt: 'Ideias, métodos e experiências sobre produto, velocidade e IA.',
    nl: 'Ideeën, methoden en praktijkervaringen over product, snelheid en AI.',
    ar: 'أفكار وأساليب وتجارب واقعية حول المنتج والسرعة والذكاء الاصطناعي.',
    pl: 'Pomysły, metody i doświadczenia dotyczące produktu, szybkości i AI.',
    tr: 'Ürün, hız ve yapay zekâ üzerine fikirler, yöntemler ve saha notları.',
  },
  minRead: { fr: 'min de lecture', en: 'min read', es: 'min de lectura', de: 'Min. Lesezeit', it: 'min di lettura', pt: 'min de leitura', nl: 'min leestijd', ar: 'دقائق قراءة', pl: 'min czytania', tr: 'dk okuma' },
  backToBlog: { fr: 'Tous les articles', en: 'All articles', es: 'Todos los artículos', de: 'Alle Artikel', it: 'Tutti gli articoli', pt: 'Todos os artigos', nl: 'Alle artikelen', ar: 'كل المقالات', pl: 'Wszystkie artykuły', tr: 'Tüm makaleler' },
}
