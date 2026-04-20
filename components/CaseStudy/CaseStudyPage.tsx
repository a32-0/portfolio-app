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
  const { slug, title, subtitle, client, period, disciplines, overview, metrics, sections, footnote } =
    caseStudy

  const navItems = sections.map((s) => ({ id: s.id, label: s.label }))
  const otherCaseStudies = caseStudyProjects.filter((p) => p.slug !== slug)

  return (
    <div className="bg-white pb-32 pt-40">
      <Container className="px-6 md:px-10">
        {/* Back button */}
        <div className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-black/40 transition-colors hover:text-black"
          >
            ← Work
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-16 max-w-200">
          <p className="mb-6 text-sm text-black/40">
            {client} · {period}
          </p>
          <h1 className="mb-4 font-serif text-5xl italic leading-tight text-black">{title}</h1>
          <p className="mb-8 text-xl text-black/60">{subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full border border-black/15 px-3 py-1 text-sm text-black/60"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-16 border-t border-black/10 pt-12">
          <p className="max-w-200 text-lg leading-relaxed text-black/85">{overview}</p>
        </div>

        {/* Metrics */}
        <div className="mb-20 grid grid-cols-2 gap-8 border-t border-black/10 pt-12 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="mb-1 font-sans text-4xl font-bold text-primary">{m.value}</p>
              <p className="text-sm font-medium text-black">{m.label}</p>
              {m.delta && <p className="mt-0.5 text-xs text-black/40">{m.delta}</p>}
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
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="mb-8">
                  <span className="mb-3 block font-mono text-xs font-medium tracking-widest text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-4xl italic leading-tight text-black">
                    {section.title}
                  </h2>
                </div>

                {section.body && (
                  <div className="space-y-4">
                    {section.body.map((p, i) => (
                      <p key={i} className="leading-relaxed text-black/85">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {section.image && (
                  <div className="my-10 flex aspect-video w-full items-center justify-center rounded-xl bg-black/5">
                    {section.image !== 'placeholder' ? (
                      <Image
                        src={section.image}
                        alt=""
                        width={1200}
                        height={675}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    ) : (
                      <span className="text-sm text-black/20">—</span>
                    )}
                  </div>
                )}

                {section.subsections && (
                  <div className="mt-10 space-y-10">
                    {section.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="mb-4 text-base font-semibold text-black">{sub.title}</h3>
                        <div className="space-y-4">
                          {sub.body.map((p, i) => (
                            <p key={i} className="leading-relaxed text-black/85">
                              {p}
                            </p>
                          ))}
                        </div>
                        {sub.items && (
                          <ul className="mt-6 space-y-3">
                            {sub.items.map((item, i) => (
                              <li key={i} className="flex gap-3 text-black/85">
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="leading-relaxed">{item}</span>
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
              <p className="border-t border-black/10 pt-8 text-sm leading-relaxed text-black/35">
                {footnote}
              </p>
            )}
          </div>
        </div>

        {/* Bottom case study navigation */}
        {otherCaseStudies.length > 0 && (
          <div className="mt-32 border-t border-black/10 pt-16">
            <p className="mb-8 text-sm font-medium uppercase tracking-widest text-black/35">
              More case studies
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherCaseStudies.map((project) => {
                const isVideo =
                  project.coverType === 'video' || project.cover.toLowerCase().endsWith('.mp4')
                return (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-secondary">
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
                    <h3 className="font-serif text-xl leading-snug text-black group-hover:underline">
                      {project.cardTitle}
                    </h3>
                    {project.cardTags && (
                      <p className="mt-2 text-sm text-black/40">{project.cardTags.join(' · ')}</p>
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
