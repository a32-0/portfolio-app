import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="about">
      <div>
        <h3 className="text-2xl text-quaternary uppercase font-light mb-2 ml-7 mt-30">
          Experience
        </h3>
      </div>
      <div className="flex flex-col text-white gap-16">
        {experience.map((experience) => (
          <div key={experience.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {experience.current ? (
                <div className="relative hidden items-center justify-center lg:flex">
                  <div className="live-animation h-4 w-4 rounded-full bg-quaternary"></div>
                  <div className="pulse-animation absolute h-4 w-4 rounded-full bg-quaternary opacity-80"></div>
                </div>
              ) : (
                <div className="hidden h-4 w-4 shrink-0 rounded-full bg-quaternary opacity-40 lg:inline"></div>
              )}
              <h4 className="text-4xl font-medium">
                {experience.role}
                <span className="font-light"> @ {experience.company}</span>
              </h4>
            </div>
            <div className="flex flex-col gap-2 lg:ml-7">
              <p className="max-w-200 font-light text-base">{experience.description}</p>
              <p className="text-base font-light text-[#BDBDBD]">{experience.period}</p>
            </div>
          </div>
        ))}

        <a href="public\docs\UX-Designer_Armando-Rojano.pdf" target="_blank" className="w-fit">
          <p className="pl-7 hover:underline text-[#BDBDBD] hover:text-quaternary uppercase font-light text-base">
            Download resume ↓
          </p>
        </a>
      </div>
    </section>
  )
}
