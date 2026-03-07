import FooterLayout from '@/components/Footer/FooterLayout'
import FooterMarquee from '@/components/Footer/FooterMarquee'
import FooterSocial from '@/components/Footer/Social'

export default function FooterSection() {
  return (
    <section className="relative isolate h-screen overflow-hidden bg-primary text-white">
      <FooterLayout>
        <FooterMarquee />
        <FooterSocial />
      </FooterLayout>
    </section>
  )
}
