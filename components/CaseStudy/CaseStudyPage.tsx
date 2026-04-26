import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy } from '@/data/caseStudies/types'
import { featuredProjects } from '@/data/projects'
import Container from '@/components/Container'
import AutoPlayVideo from '@/components/Work/AutoPlayVideo'
import SectionNav from './SectionNav'

type Props = {
  caseStudy: CaseStudy
}

const caseStudyProjects = featuredProjects.filter((p) => p.caseStudy)

export default function CaseStudyPage({ caseStudy }: Props) {
  const { slug, title, subtitle, overview, metrics, sections, footnote } = caseStudy

  const navItems = sections.map((s) => ({ id: s.id, label: s.label }))
  const otherCaseStudies = caseStudyProjects.filter((p) => p.slug !== slug)

  return (
    <div className="bg-white pb-32 pt-40">
      <Container>
        {/* Back button */}
        <div className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-tertiary transition-colors hover:text-black"
          >
            ← Back
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <h1 className="mb-4 font-serif text-5xl italic text-black">{title}</h1>
          <p className="text-xl text-tertiary">{subtitle}</p>
        </div>

        {/* Overview */}
        <div className="mb-16 border-t border-secondary pt-12">
          <p className="text-lg tracking-normal text-black">{overview}</p>
        </div>

        {/* Metrics */}
        <div className="mb-20 grid grid-cols-2 gap-8 border-t border-secondary pt-12 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="mb-1 font-sans text-4xl font-bold text-primary">{m.value}</p>
              <p className="font-medium text-black">{m.label}</p>
              {m.delta && <p className="mt-0.5 text-tertiary">{m.delta}</p>}
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[220px_1fr]">
          {/* Sticky sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-32">
              <SectionNav items={navItems} />
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-24">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="mb-8 font-serif text-4xl italic text-black">{section.title}</h2>

                {section.body && (
                  <div className="space-y-5">
                    {section.body.map((p, i) => (
                      <p key={i} className="text-lg text-black">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {section.image && (
                  <div className="my-10 flex aspect-video w-full items-center justify-center rounded-xl bg-quaternary">
                    {section.image !== 'placeholder' ? (
                      <Image
                        src={section.image}
                        alt=""
                        width={1200}
                        height={675}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    ) : (
                      <span className="text-sm text-secondary">—</span>
                    )}
                  </div>
                )}

                {section.subsections && (
                  <div className="mt-10 space-y-10">
                    {section.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="mb-4 text-xl font-semibold text-black">{sub.title}</h3>
                        <div className="space-y-5">
                          {sub.body.map((p, i) => (
                            <p key={i} className="text-lg text-black">
                              {p}
                            </p>
                          ))}
                        </div>
                        {sub.items && (
                          <ul className="mt-6 space-y-3" role="list">
                            {sub.items.map((item, i) => (
                              <li key={i} className="flex gap-3 text-lg text-black">
                                <span
                                  aria-hidden
                                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                />
                                <span className="">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {footnote && (
              <p className="border-t border-secondary pt-8 text-sm text-tertiary">{footnote}</p>
            )}
          </div>
        </div>

        {/* Bottom case study navigation */}
        {otherCaseStudies.length > 0 && (
          <div className="mt-32 border-t border-secondary pt-16">
            <p className="mb-8 text-sm font-medium text-tertiary">More stories</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherCaseStudies.map((project) => {
                const isVideo =
                  project.coverType === 'video' || project.cover.toLowerCase().endsWith('.mp4')
                return (
                  <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
                    <div className="mb-4 aspect-video w-full overflow-hidden bg-secondary">
                      {isVideo ? (
                        <AutoPlayVideo
                          src={project.cover}
                          title={project.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={project.cover}
                          alt={project.title}
                          width={800}
                          height={450}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <p className="mb-1.5 text-sm font-sans text-primary">{project.cardCategory}</p>
                    <h3 className="font-serif text-xl text-black group-hover:underline">
                      {project.cardTitle}
                    </h3>
                    {project.cardTags && (
                      <p className="mt-2 text-sm text-tertiary">{project.cardTags.join(' · ')}</p>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
