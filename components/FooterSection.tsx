import FooterLayout from '@/components/Footer/Footer'
import FooterMark from '@/components/Footer/Mark'
import FooterSocial from '@/components/Footer/Social'

export default function FooterSection() {
  return (
    <section className="relative isolate h-screen overflow-hidden bg-slate-700 text-white" id="contact">
      <FooterLayout>
        <FooterMark />
        <FooterSocial />
      </FooterLayout>
    </section>
  )
}
