import { projectPages } from '@/data/projectPages'
import { projects } from '@/data/projects'
import { getCaseStudyImage } from '@/lib/caseStudy'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const activeSlugs = projectPages
    .map((p) => p.slug)
    .filter((slug) => getCaseStudyImage(slug))
    .filter((slug) => {
      const base = projects.find((p) => p.slug === slug)
      return base?.isActive !== false
    })

  return activeSlugs.map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const detail = projectPages.find((p) => p.slug === slug)
  const caseStudyImage = getCaseStudyImage(slug)

  const isDisabled = projects.find((p) => p.slug === slug)?.isActive === false
  if (!detail || !caseStudyImage || isDisabled) notFound()

  const { description, detailAlt, link, meta = [] } = detail
  const image = caseStudyImage
  const alt = detailAlt ?? slug

  return (
    <div className="px-8">
      <div className="mx-auto md:flex gap-8 md:items-start">
        <div className="space-y-8 md:sticky md:top-24 md:self-start break-inside-avoid mb-8 w-1/3 3xl:w-1/2">
          <p className="text-base max-w-3xl text-black">{description}</p>
          {link ? (
            <Link
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4 uppercase text-sm"
            >
              {link.label}
            </Link>
          ) : null}
          {meta.length ? (
            <div className="space-y-2 text-sm uppercase text-tertiary">
              {meta.map((item) => (
                <div key={`${item.label}-${item.value}`} className="flex gap-3">
                  <span className="min-w-20 text-secondary">{item.label}:</span>
                  <span className="text-black">{item.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="min-w-0 mb-8 break-inside-avoid w-2/3 3xl:w-1/2">
          <div className="w-full max-w-full overflow-hidden">
            <Image
              src={image}
              alt={alt}
              width={1600}
              height={3200}
              sizes="100vw"
              className="h-auto w-full max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
