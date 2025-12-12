import { about } from '@/data/about'

export default function About() {
  const paragraphs =
    about.length > 0 ? [about[0].h1, about[0].h2, about[0].h3, about[0].h4].filter(Boolean) : []

  return (
    <section id="about">
      <div className="flex-col flex text-white mt-30 gap-2">
        <h1 className="uppercase font-light text-2xl text-quaternary">About</h1>
        <div className="flex flex-col gap-10">
          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-xl font-light max-w-200">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
