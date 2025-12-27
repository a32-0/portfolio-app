import FooterBackground from '@/components/Footer/Footer'
import FooterMark from '@/components/Footer/Mark'
import FooterSocial from '@/components/Footer/Social'

export default function FooterSection() {
  return (
    <section className="relative isolate h-screen overflow-hidden text-white" id="contact">
      <FooterBackground />
      <FooterMark />
      <FooterSocial />
    </section>
  )
}
