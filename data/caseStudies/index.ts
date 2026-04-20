export { invoiceLiverpool } from './invoice-liverpool'
export { connectLiverpool } from './connect-liverpool'
export { whatsappLiverpool } from './whatsapp-liverpool'
export type { CaseStudy, CaseStudySection, CaseStudySubsection, CaseStudyMetric } from './types'

import { invoiceLiverpool } from './invoice-liverpool'
import { connectLiverpool } from './connect-liverpool'
import { whatsappLiverpool } from './whatsapp-liverpool'

export const caseStudies = [invoiceLiverpool, connectLiverpool, whatsappLiverpool]

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug) ?? null
}
