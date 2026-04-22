import { aboutSection } from '@/data/about'

export default function About() {
  return (
    <section className="inline-flex w-full flex-col items-start justify-start gap-4 pb-50">
      <p className="text-3xl font-normal font-serif italic text-primary">
        {aboutSection.eyebrow}
      </p>
      <div className="text-5xl self-stretch font-normal font-sans leading-tight text-black">
        {aboutSection.body.map((paragraph, index) => (
          <p key={`${aboutSection.eyebrow}-${index + 1}`} className={index > 0 ? 'mt-8' : ''}>
            {paragraph.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  )
}
