import { projectPages } from '@/data/projectPages'
import { getCaseStudyImage } from '@/lib/caseStudy'
import ProtectedCaseStudyImage from '@/components/Work/ProtectedCaseStudyImage'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const activeSlugs = projectPages.map((p) => p.slug).filter((slug) => getCaseStudyImage(slug))

  return activeSlugs.map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const detail = projectPages.find((p) => p.slug === slug)
  const caseStudyImage = getCaseStudyImage(slug)

  if (!detail || !caseStudyImage) notFound()

  const { detailAlt } = detail
  const image = caseStudyImage
  const alt = detailAlt ?? slug

  return (
    <div className="px-8">
      <ProtectedCaseStudyImage src={image} alt={alt} />
    </div>
  )
}
