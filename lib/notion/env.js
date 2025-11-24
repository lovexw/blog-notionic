import BLOG from '@/blog.config'

export function requireNotionPageId() {
  const notionPageId =
    BLOG.notionPageId ||
    process.env.NOTION_PAGE_ID ||
    process.env.NEXT_PUBLIC_NOTION_PAGE_ID

  if (!notionPageId) {
    throw new Error(
      'NOTION_PAGE_ID is missing. Please configure it in your environment variables (Build & Runtime) or .env.local.'
    )
  }

  return notionPageId
}
