import { projects } from './projects'

export type SelectedWorkHighlight = {
  cardMeta: string
  cardTitle: string
  cardLead: string
  cardPoints: string[]
  cardMetric?: string
}

const selectedWorkHighlightsMap: Record<string, SelectedWorkHighlight> = {
  'invoice-liverpool': {
    cardMeta: 'Invoicing Flow',
    cardTitle: 'Reducing complexity for 184k+ monthly users',
    cardLead:
      'Redesigned a critical invoicing journey across web and mobile surfaces to reduce friction and operational errors.',
    cardPoints: [
      'Simplified multi-step validation logic.',
      'Improved clarity of fiscal requirements and edge cases.',
      'Reduced cognitive overload through structured hierarchy.',
    ],
    cardMetric: 'Used by 184k+ users each month.',
  },
  'connect-liverpool': {
    cardMeta: 'Contact Center Platform',
    cardTitle: 'Streamlining revenue-critical workflows for 40+ agents',
    cardLead:
      'Reworked core operational journeys within a high-volume sales platform processing ~600k-3.7M MXN daily.',
    cardPoints: [
      'Optimized agent workflows.',
      'Reduced friction across service states.',
      'Improved consistency across internal interface patterns.',
    ],
    cardMetric: 'Supports 40+ agents across Mexico.',
  },
  'whatsapp-liverpool': {
    cardMeta: 'WhatsApp Services',
    cardTitle: 'From assisted support to a scalable conversational product',
    cardLead:
      'Led the transformation of WhatsApp from a manual support extension into a structured conversational product.',
    cardPoints: [
      'Modeled service lifecycle states.',
      'Designed reusable message patterns and tone system.',
      'Structured outbound and inbound orchestration logic.',
      'Migrated improvised flows into a scalable design framework.',
    ],
    cardMetric: 'Serving ~29k customers per day.',
  },
}

export function getSelectedWorkHighlight(slug: string): SelectedWorkHighlight {
  const custom = selectedWorkHighlightsMap[slug]
  if (custom) return custom

  const project = projects.find((p) => p.slug === slug)
  const title = project?.title ?? slug

  return {
    cardMeta: 'Selected project',
    cardTitle: title,
    cardLead: 'Additional project details coming soon.',
    cardPoints: [],
    cardMetric: '',
  }
}
