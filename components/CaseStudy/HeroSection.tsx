import SectionLabel from './SectionLabel'
import CaseStudyMedia from './CaseStudyMedia'

type Props = {
  badge: string
  title: string
  intro: string
  media: {
    src: string
    alt: string
    type?: 'image' | 'video'
  }
}

export default function HeroSection({ badge, title, intro, media }: Props) {
  return (
    <section className="relative flex flex-col gap-8 overflow-hidden rounded-[2rem] bg-[#fff7fb] px-6 py-8 md:px-10 md:py-12">
      <div className="flex flex-col gap-6">
        <SectionLabel label={badge} />
        <h1 className="text-6xl font-bold tracking-tight text-[#f03bb1] md:text-8xl">{title}</h1>
        <p className="max-w-4xl text-xl tracking-tight text-black md:text-2xl">{intro}</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
        <CaseStudyMedia
          src={media.src}
          alt={media.alt}
          type={media.type}
          priority
          className="max-h-[70svh] object-cover"
        />
      </div>
    </section>
  )
}
