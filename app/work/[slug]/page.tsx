import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudy, caseStudies } from '@/data/caseStudies'
import CaseStudyPage from '@/components/CaseStudy/CaseStudyPage'
import { OG_IMAGE, OG_IMAGES, SITE_NAME } from '@/data/metadata'

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
  const url = `/work/${cs.slug}`
  return {
    title: cs.title,
    description: cs.subtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: cs.title,
      description: cs.subtitle,
      images: OG_IMAGES,
    },
    twitter: {
      card: 'summary_large_image',
      title: cs.title,
      description: cs.subtitle,
      images: [OG_IMAGE.url],
    },
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()
  return <CaseStudyPage caseStudy={cs} />
}
