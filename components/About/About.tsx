import { about } from '@/data/about'

export default function About() {
  return (
    <section id="about">
      {about.map((description) => (
        <div key={description.title} className="text-right gap-2 flex-col flex text-white mt-30">
          <h1 className="uppercase font-light text-2xl text-quaternary">About</h1>
          <p className="text-4xl font-normal">{description.title}</p>
        </div>
      ))}
    </section>
  )
}
