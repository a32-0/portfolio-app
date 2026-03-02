import FooterLayout from '@/components/Footer/Footer'
import FooterMark from '@/components/Footer/Mark'
import FooterSocial from '@/components/Footer/Social'

export default function FooterSection() {
  return (
    <section className="relative isolate h-screen overflow-hidden bg-primary text-white">
      <FooterLayout>
        <FooterMark />
        <FooterSocial />
      </FooterLayout>
    </section>
  )
}
