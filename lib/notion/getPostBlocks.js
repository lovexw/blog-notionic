import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'

export async function getPostBlocks(id) {
  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  if (BLOG.previewImagesEnabled) {
    const { getPreviewImageMap } = await import('./previewImages')
    const previewImageMap = await getPreviewImageMap(pageBlock)
    pageBlock.preview_images = previewImageMap
  }
  return pageBlock
}
