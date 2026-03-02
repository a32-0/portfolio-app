import { footerContent } from '@/data/footer'

export default function FooterMark() {
  return (
    <div className="w-full text-center leading-none" aria-label="Contact email">
      <h2 className="text-[clamp(4.5rem,10.7vw,200px)] font-medium font-sans tracking-tight text-white">
        {footerContent.contactEmail}
      </h2>
    </div>
  )
}
