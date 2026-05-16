export type Project = {
  slug: string
  title: string
  cover: string
  coverType?: 'image' | 'video'
  coverWidth?: number
  coverHeight?: number
  featured: boolean
  caseStudy: boolean
  archived: boolean
  cardCategory?: string
  cardTitle?: string
  cardTags?: string[]
}

export const projects: Project[] = [
  {
    slug: 'invoice-liverpool',
    title: 'Invoicing',
    cover: '/images/projects/invoice-liverpool/cover.png',
    featured: true,
    caseStudy: true,
    archived: false,
    cardCategory: 'Invoicing Platform',
    cardTitle:
      'Redesigning a mission-critical invoicing journey used by 184K+ monthly users — reducing average session time from 35 minutes to under 3 minutes.',
    cardTags: ['UX Research', 'Interaction Design', 'UX Writing'],
  },
  {
    slug: 'whatsapp-liverpool',
    title: 'WhatsApp',
    cover: '/images/projects/whatsapp-liverpool/cover.png',
    featured: true,
    caseStudy: true,
    archived: false,
    cardCategory: 'WhatsApp Business Platform',
    cardTitle:
      'Transforming an agent-assisted support channel into a scalable self-service product serving ~29K daily users — designed entirely without a traditional interface.',
    cardTags: ['Conversational UX', 'Product Design', 'UX Research'],
  },
  {
    slug: 'connect-liverpool',
    title: 'Connect',
    cover: '/images/projects/connect-liverpool/cover.png',
    featured: true,
    caseStudy: true,
    archived: false,
    cardCategory: 'Contact Center Sales Platform',
    cardTitle:
      "Designing Liverpool's next-generation sales tool for 40+ agents processing millions in daily revenue — from an undefined brief to a validated, production-ready system.",
    cardTags: ['Systems Design', 'Enterprise', 'UX Research'],
  },
  {
    slug: 'little-lemon',
    title: 'Little Lemon',
    cover: '/images/projects/little-lemon/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'immersio',
    title: 'Immersio',
    cover: '/images/projects/immersio/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'toma1',
    title: 'TOMA1',
    cover: '/images/projects/toma1/cover.png',
    coverWidth: 2880,
    coverHeight: 6086,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'borgatta',
    title: 'Borgatta',
    cover: '/images/projects/borgatta/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'salesforce-liverpool',
    title: 'Salesforce',
    cover: '/images/projects/salesforce-liverpool/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'cyberPuerta',
    title: 'CyberPuerta',
    cover: '/images/projects/cyberpuerta/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'ox-bi',
    title: 'OX BI',
    cover: '/images/projects/ox-bi/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'binca',
    title: 'Binca',
    cover: '/images/projects/binca/cover.png',
    coverWidth: 2880,
    coverHeight: 4112,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'disrupto',
    title: 'Disrupto',
    cover: '/images/projects/disrupto/cover.png',
    coverWidth: 2880,
    coverHeight: 4218,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'yuni',
    title: 'Yuni',
    cover: '/images/projects/yuni/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'nexum',
    title: 'Nexum',
    cover: '/images/projects/nexum/cover.png',
    coverWidth: 2880,
    coverHeight: 2250,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'doia',
    title: 'Doia',
    cover: '/images/projects/doia/cover.png',
    coverWidth: 2880,
    coverHeight: 5562,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'mait',
    title: 'Mait',
    cover: '/images/projects/mait/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'ilum',
    title: 'Ilum Prosperity Sherpas',
    cover: '/images/projects/ilum/cover.png',
    coverWidth: 2880,
    coverHeight: 2354,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'zuma',
    title: 'Zuma Capital',
    cover: '/images/projects/zuma/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'maestro-malta',
    title: 'Maestro Malta',
    cover: '/images/projects/maestro-malta/cover.mp4',
    coverType: 'video',
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'ox-logistics',
    title: 'OX Logistics',
    cover: '/images/projects/ox-logistics/cover.png',
    coverWidth: 1600,
    coverHeight: 1138,
    featured: false,
    caseStudy: false,
    archived: true,
  },
  {
    slug: 'lottery',
    title: 'Lottery',
    cover: '/images/projects/lottery/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
  {
    slug: 'bike',
    title: 'Bike',
    cover: '/images/projects/bike/cover.png',
    featured: false,
    caseStudy: false,
    archived: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const archiveProjects = projects.filter((p) => p.archived)
