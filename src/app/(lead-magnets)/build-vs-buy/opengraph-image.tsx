import { buildVsBuy } from '@/content/leadMagnets'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = buildVsBuy.title

export default function OgImage() {
  return renderOg({
    eyebrow: `${buildVsBuy.eyebrow} · free PDF`,
    title: buildVsBuy.title,
    footer: `khufu.io/build-vs-buy`,
    titleSize: 52,
  })
}
