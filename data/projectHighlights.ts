import { projects } from './projects'

export type ProjectHighlight = {
  product: string
  headline: string
  outcomes: string[]
  tags: string[]
}

const highlightMap: Record<string, ProjectHighlight> = {
  'invoice-liverpool': {
    product: 'Liverpool & Multisites Invoicing',
    headline: 'Reducing friction in a high-traffic invoicing platform for retail customers',
    outcomes: [
      'Simplified a legally sensitive, post-purchase flow',
      'Reduced errors through clearer validations and states',
      'Enabled scalable changes via standardized components',
    ],
    tags: ['Enterprise', 'High-traffic', 'Billing', 'Web app', 'Post-purchase', 'B2C'],
  },
  'connect-liverpool': {
    product: 'Connect (Internal Sales Tool)',
    headline: 'Streamlining internal sales workflows for a call-center CRM',
    outcomes: [
      'Improved efficiency for high-volume phone sales',
      'Reduced operational friction across critical flows',
      'Designed scalable patterns for long-term evolution',
    ],
    tags: ['Enterprise', 'Internal tool', 'CRM', 'B2B', 'Sales platform'],
  },
  'whatsapp-liverpool': {
    product: "WhatsApp's Liverpool",
    headline: 'Enabling self-service post-purchase operations through WhatsApp',
    outcomes: [
      'Reduced dependency on human agents',
      'Improved clarity in service, warranty, and order flows',
      'Designed reusable conversational patterns at scale',
    ],
    tags: ['Conversational UX', 'Messaging', 'High-traffic', 'B2C', 'Operations'],
  },
  'ox-logistics': {
    product: 'OX Logistics',
    headline: 'Designing a logistics management platform for last-mile operations',
    outcomes: [
      'Clarified complex delivery and tracking flows',
      'Improved operational visibility for logistics teams',
      'Supported scalable growth through system thinking',
    ],
    tags: ['B2B', 'SaaS', 'Logistics', 'Web app', 'Operations'],
  },
  mait: {
    product: 'Mait',
    headline: 'Helping travelers discover verified local experiences with confidence',
    outcomes: [
      'Framed booking flow around trust and transparency',
      'Elevated host profiles with clearer proof points',
      'Built modular cards to scale categories quickly',
    ],
    tags: ['Travel', 'Marketplace', 'Mobile & web', 'Discovery', 'B2C'],
  },
  doia: {
    product: 'Doia',
    headline: 'Personalized skincare guidance that turns into confident purchases',
    outcomes: [
      'Guided users through skin assessment with clearer steps',
      'Linked recommendations to routines and education',
      'Systematized UI for faster experimentation',
    ],
    tags: ['Ecommerce', 'Personalization', 'Mobile & web', 'B2C', 'Skincare'],
  },
  yuni: {
    product: 'Yuni',
    headline: 'Rental marketplace that keeps peer-to-peer transactions safe and simple',
    outcomes: [
      'Streamlined listing and rental requests with fewer drop-offs',
      'Clarified pricing, deposits, and logistics options',
      'Added trust cues across profiles and messaging',
    ],
    tags: ['C2C', 'Marketplace', 'Web app', 'Mobile', 'Trust & safety'],
  },
}

export function getProjectHighlight(slug: string): ProjectHighlight {
  const custom = highlightMap[slug]
  if (custom) return custom

  const project = projects.find((p) => p.slug === slug)
  const product = project ? `${project.title} — ${project.subtitle}` : slug
  const headline = project ? `${project.subtitle} for ${project.title}` : slug

  return {
    product,
    headline,
    outcomes: [
      'Improved clarity across the journey',
      'Aligned UI components for scalability',
      'Focused on measurable outcomes',
    ],
    tags: project?.year ? [project.subtitle, project.year] : [project?.subtitle ?? 'Case study'],
  }
}
