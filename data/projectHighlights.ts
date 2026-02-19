import { projects } from './projects'

export type ProjectHighlight = {
  cardMeta: string
  cardTitle: string
  cardDescription: string
  cardMetric: string
  cardTitleUnderline?: boolean
}

const highlightMap: Record<string, ProjectHighlight> = {
  'invoice-liverpool': {
    cardMeta: 'Invoicing',
    cardTitle: 'Reducing complexity for 184k+ monthly users',
    cardDescription:
      'Redesigned the end-to-end invoicing experience across channels to make a critical flow clearer, faster, and less error-prone.',
    cardMetric: 'Used by 184k+ users each month.',
  },
  'connect-liverpool': {
    cardMeta: 'Contact Center',
    cardTitle: 'Streamlining sales workflows for 40+ agents',
    cardDescription:
      'Reworked core operational journeys and UI patterns to reduce friction and improve efficiency in a revenue-critical sales channel.',
    cardMetric: 'Supports 40+ agents and ~600k-3.7M MXN daily revenue workflows.',
  },
  'whatsapp-liverpool': {
    cardMeta: 'WhatsApp',
    cardTitle: 'From assisted support to a scalable conversational product',
    cardDescription:
      'Built a reusable conversation framework to reduce agent dependency and scale self-service.',
    cardMetric: 'Serving ~29k customers per day.',
    cardTitleUnderline: true,
  },
  'salesforce-liverpool': {
    cardMeta: 'Salesforce',
    cardTitle: 'Improving internal tools with scalable patterns',
    cardDescription:
      'Optimized Lightning modules used by contact center and store teams, aligning usability, consistency, and design-system governance.',
    cardMetric: 'Used by contact center + store agents across Mexico.',
  },
}

export function getProjectHighlight(slug: string): ProjectHighlight {
  const custom = highlightMap[slug]
  if (custom) return custom

  const project = projects.find((p) => p.slug === slug)
  const title = project?.title ?? slug
  const subtitle = project?.subtitle ?? 'Case study'
  const year = project?.year ? ` · ${project.year}` : ''

  return {
    cardMeta: `${subtitle}${year}`,
    cardTitle: title,
    cardDescription: subtitle,
    cardMetric: project?.year ? `Year: ${project.year}` : 'Additional details coming soon.',
  }
}
