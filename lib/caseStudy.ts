import { existsSync } from 'node:fs'
import path from 'node:path'

export function getCaseStudyImage(slug: string): string | null {
  const filePath = path.join(process.cwd(), 'public', 'images', 'projects', slug, 'casestudy.png')
  return existsSync(filePath) ? `/images/projects/${slug}/casestudy.png` : null
}
