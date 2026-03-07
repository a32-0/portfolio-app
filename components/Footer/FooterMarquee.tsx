import { footerContent } from '@/data/footer'

export default function FooterMarquee() {
  const mailtoHref = `mailto:${footerContent.contactEmail}`
  const items = Array.from({ length: 3 }, (_, index) => (
    <span key={`${footerContent.contactEmail}-${index}`} className="shrink-0 px-6">
      {footerContent.contactEmail}
    </span>
  ))

  return (
    <div className="w-full overflow-hidden leading-none" aria-label="Contact email">
      <a
        href={mailtoHref}
        aria-label={`Send an email to ${footerContent.contactEmail}`}
        className="block w-full"
      >
        <div
          data-marquee-track
          className="inline-flex min-w-max items-center whitespace-nowrap text-[clamp(4.5rem,10.7vw,200px)] font-medium tracking-tight text-white"
        >
          {items}
        </div>
      </a>
    </div>
  )
}
