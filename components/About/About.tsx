import Container from '@/components/Container'
import { aboutSection } from '@/data/about'

export default function About() {
  return (
    <section className="w-full bg-black py-30">
      <Container className="flex flex-col items-center gap-4">
        <p className="text-5xl font-normal font-serif italic text-white">{aboutSection.eyebrow}</p>
        <div className="text-5xl font-normal text-center font-sans text-white leading-14">
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
      </Container>
    </section>
  )
}
