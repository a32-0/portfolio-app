export type Project = {
  slug: string
  title: string
  cover: string
  coverType?: 'image' | 'video'
  featured: boolean
  caseStudy: boolean
  cardCategory?: string
  cardTitle?: string
  cardTags?: string[]
}

export const projects: Project[] = [
  {
    slug: 'whatsapp-liverpool',
    title: 'WhatsApp',
    cover: '/images/projects/whatsapp-liverpool/cover.png',
    featured: true,
    caseStudy: true,
    cardCategory: 'WhatsApp Business Platform',
    cardTitle:
      'Transforming an agent-assisted support channel into a scalable self-service product serving ~29K daily users — designed entirely without a traditional interface.',
    cardTags: ['Conversational UX', 'Product Design', 'UX Research'],
  },
  {
    slug: 'invoice-liverpool',
    title: 'Invoicing',
    cover: '/images/projects/invoice-liverpool/cover.mp4',
    coverType: 'video',
    featured: true,
    caseStudy: true,
    cardCategory: 'Invoicing Platform',
    cardTitle:
      'Redesigning a mission-critical invoicing journey used by 184K+ monthly users — reducing average session time from 35 minutes to under 3 minutes.',
    cardTags: ['UX Research', 'Interaction Design', 'UX Writing'],
  },
  {
    slug: 'connect-liverpool',
    title: 'Connect',
    cover: '/images/projects/connect-liverpool/cover.mp4',
    coverType: 'video',
    featured: true,
    caseStudy: true,
    cardCategory: 'Contact Center Sales Platform',
    cardTitle:
      "Designing Liverpool's next-generation sales tool for 40+ agents processing millions in daily revenue — from an undefined brief to a validated, production-ready system.",
    cardTags: ['Systems Design', 'Enterprise UX', 'Stakeholder Research'],
  },
  {
    slug: 'little-lemon',
    title: 'Little Lemon',
    cover: '/images/projects/little-lemon/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'immersio',
    title: 'Immersio',
    cover: '/images/projects/immersio/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'toma1',
    title: 'TOMA1',
    cover: '/images/projects/toma1/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'cyberpuerta',
    title: 'Cyberpuerta',
    cover: '/images/projects/cyberpuerta/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'ox-bi',
    title: 'OX BI',
    cover: '/images/projects/ox-bi/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'binca',
    title: 'Binca',
    cover: '/images/projects/binca/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'disrupto',
    title: 'Disrupto',
    cover: '/images/projects/disrupto/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'yuni',
    title: 'Yuni',
    cover: '/images/projects/yuni/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'nexum',
    title: 'Nexum',
    cover: '/images/projects/nexum/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'doia',
    title: 'Doia',
    cover: '/images/projects/doia/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'mait',
    title: 'Mait',
    cover: '/images/projects/mait/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'ilum',
    title: 'Ilum Prosperity Sherpas',
    cover: '/images/projects/ilum/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'zuma',
    title: 'Zuma Capital',
    cover: '/images/projects/zuma/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'maestro-malta',
    title: 'Maestro Malta',
    cover: '/images/projects/maestro-malta/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'ox-logistics',
    title: 'OX Logistics',
    cover: '/images/projects/ox-logistics/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'lottery',
    title: 'Lottery',
    cover: '/images/projects/lottery/cover.png',
    featured: false,
    caseStudy: false,
  },
  {
    slug: 'bike',
    title: 'Bike',
    cover: '/images/projects/bike/cover.png',
    featured: false,
    caseStudy: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const archiveProjects = projects.filter((p) => !p.featured)
