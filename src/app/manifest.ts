import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Khufu — Votre V1 en 1 semaine',
    short_name: site.name,
    description: 'Agence produit AI-native. Votre V1 en 7 jours.',
    start_url: '/fr',
    display: 'standalone',
    background_color: '#fbfbf9',
    theme_color: '#4c30ff',
    icons: [{ src: '/icon', sizes: '512x512', type: 'image/png' }],
  }
}
