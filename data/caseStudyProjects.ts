export type CaseStudyProject = {
  visible: boolean
  slug: string
  title: string
  cover: string
  cardCategory: string
  cardTitle: string
  cardSummary: string
}

const allCaseStudyProjects: CaseStudyProject[] = [
  {
    visible: true,
    slug: 'invoice-liverpool',
    title: 'Invoicing',
    cover: '/images/projects/invoice-liverpool/cover.png',
    cardCategory: 'Invoicing Platform',
    cardTitle: 'Redesigning a mission-critical invoicing journey used by 184K+ monthly users.',
    cardSummary: 'Reducing average session time from 35 minutes to under 3 minutes.',
  },
  {
    visible: true,
    slug: 'connect-liverpool',
    title: 'Connect',
    cover: '/images/projects/connect-liverpool/cover.png',
    cardCategory: 'Contact Center Sales Platform',
    cardTitle:
      "Designing Liverpool's next-generation sales tool for 40+ agents processing up to ~$3M MXN in daily revenue.",
    cardSummary: 'From an undefined brief to a validated, production-ready system.',
  },
  {
    visible: true,
    slug: 'whatsapp-liverpool',
    title: 'WhatsApp',
    cover: '/images/projects/whatsapp-liverpool/cover.png',
    cardCategory: 'WhatsApp Business Platform',
    cardTitle:
      'Transforming an agent-assisted support channel into a scalable self-service product serving ~29K daily users.',
    cardSummary: 'Designed entirely without a traditional interface.',
  },
]

export const caseStudyProjects = allCaseStudyProjects.filter((project) => project.visible)
