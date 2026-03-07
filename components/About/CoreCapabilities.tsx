import { coreCapabilitiesSection } from '@/data/coreCapabilities'

export default function CoreCapabilities() {
  const marqueeItems = [...coreCapabilitiesSection.items, ...coreCapabilitiesSection.items]

  return (
    <section className="inline-flex w-full flex-col items-center justify-center gap-4 tracking-tight">
      <h2 className="text-center text-2xl font-normal text-black">
        {coreCapabilitiesSection.title}
      </h2>

      <div className="w-full overflow-hidden">
        <div
          data-marquee-track
          className="inline-flex min-w-max items-center gap-3 whitespace-nowrap [--marquee-speed:24s]"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index + 1}`}
              className="inline-flex items-center justify-center gap-3"
            >
              <p className="text-2xl font-medium text-black">{item.title}</p>
              <p className="text-2xl font-medium uppercase text-black">•</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
