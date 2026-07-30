import { playbook } from '@/content/leadMagnets'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = playbook.title

export default function OgImage() {
  return renderOg({
    eyebrow: `${playbook.eyebrow} · free PDF`,
    title: playbook.title,
    footer: `khufu.io/playbook`,
    titleSize: 52,
  })
}
