import { footerContent } from '@/data/footer'

export default function FooterMark() {
  return (
    <h2 className="w-full px-6 text-center text-[clamp(3rem,9vw,6rem)] leading-none font-medium tracking-tight text-white md:px-8 lg:px-10">
      {footerContent.contactEmail}
    </h2>
  )
}
