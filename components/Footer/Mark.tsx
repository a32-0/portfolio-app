import { footerContent } from '@/data/footer'

export default function FooterMark() {
  return (
    <div className="w-full overflow-hidden pb-6" aria-label="Contact marquee">
      <div
        data-marquee-track
        className="inline-flex min-w-max items-center gap-20 whitespace-nowrap text-[clamp(2.5rem,8vw,30rem)] leading-none font-medium tracking-tight [--marquee-speed:20s]"
      >
        <span>{footerContent.contactEmail}</span>
        <span>{footerContent.contactEmail}</span>
        <span>{footerContent.contactEmail}</span>
      </div>
    </div>
  )
}
