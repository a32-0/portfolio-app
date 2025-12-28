import Image from 'next/image'

import { technologySection } from '@/data/technologies'

export default function Technologies() {
  return (
    <section>
      <div className="grid gap-6 text-white lg:grid-cols-[1fr,1.1fr]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-light uppercase text-quaternary">Technologies</p>
          <h2 className="text-4xl font-medium md:text-5xl">{technologySection.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technologySection.categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 p-6"
            >
              <p className="text-base font-semibold">{category.title}</p>
              <ul className="flex flex-wrap items-center gap-3">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-4 text-base font-base"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.name} logo`}
                      width={24}
                      height={24}
                      className="size-5"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
