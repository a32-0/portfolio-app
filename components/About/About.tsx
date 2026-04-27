import { aboutSection } from '@/data/about'

export default function About() {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="border-l border-tertiary pl-6 flex flex-col gap-8">
        <p className="text-5xl font-medium font-serif text-primary">{aboutSection.eyebrow}</p>
        <div className="text-5xl font-normal font-sans text-black">
          {aboutSection.body.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-8' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
