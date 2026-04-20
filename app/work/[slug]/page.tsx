import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudy, caseStudies } from '@/data/caseStudies'
import CaseStudyPage from '@/components/CaseStudy/CaseStudyPage'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.subtitle,
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()
  return <CaseStudyPage caseStudy={cs} />
}
