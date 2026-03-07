export const publishedCaseStudySlugs = ['invoice-liverpool'] as const

export function hasPublishedCaseStudy(slug: string) {
  return publishedCaseStudySlugs.includes(slug as (typeof publishedCaseStudySlugs)[number])
}
