import type { Metadata } from 'next'
import { PageLayout } from '@/components/CaseStudy'
import Container from '@/components/Container'
import InvoiceLiverpoolCaseStudy, { caseStudy } from '@/content/caseStudies/invoice-liverpool.mdx'

export const metadata: Metadata = {
  title: caseStudy.metadata.title,
  description: caseStudy.metadata.description,
}

export default function InvoiceLiverpoolPage() {
  return (
    <div className="bg-white pb-24 pt-12">
      <Container className="px-6 md:px-10">
        <PageLayout title={caseStudy.title} eyebrow={caseStudy.eyebrow} navItems={caseStudy.navigation}>
          <InvoiceLiverpoolCaseStudy />
        </PageLayout>
      </Container>
    </div>
  )
}
