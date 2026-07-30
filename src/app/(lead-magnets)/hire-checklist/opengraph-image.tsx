import { hireChecklist } from '@/content/leadMagnets'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = hireChecklist.title

export default function OgImage() {
  return renderOg({
    eyebrow: `${hireChecklist.eyebrow} · free PDF`,
    title: hireChecklist.title,
    footer: `khufu.io/hire-checklist`,
    titleSize: 52,
  })
}
