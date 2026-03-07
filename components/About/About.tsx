import { aboutSection } from '@/data/about'

export default function About() {
  return (
    <section className="inline-flex w-full flex-col items-start justify-start gap-4 tracking-tight pb-50">
      <p className="text-2xl font-normal text-tertiary">{aboutSection.eyebrow}</p>
      <div className="self-stretch text-4xl font-normal text-black">
        {aboutSection.body.map((paragraph, index) => (
          <p key={`${aboutSection.eyebrow}-${index + 1}`} className={index > 0 ? 'mt-8' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
