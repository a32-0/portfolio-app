import { footerContent } from '@/data/footer'

export default function FooterMark() {
  return (
    <h2 className="w-full text-center text-[clamp(3rem,10.7vw,154px)] leading-none font-medium tracking-tight">
      {footerContent.contactEmail}
    </h2>
  )
}
