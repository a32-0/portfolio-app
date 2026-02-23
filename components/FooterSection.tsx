import FooterLayout from '@/components/Footer/Footer'
import FooterMark from '@/components/Footer/Mark'
import FooterSocial from '@/components/Footer/Social'

export default function FooterSection() {
  return (
    <section className="footer-color-cycle relative isolate h-screen overflow-hidden text-black">
      <FooterLayout>
        <FooterMark />
        <FooterSocial />
      </FooterLayout>
    </section>
  )
}
