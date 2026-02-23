import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Snapshots from '@/components/Work/Snapshots'
import SelectedWork from '@/components/Work/SelectedWork'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import Certificates from '@/components/About/Certificates'
import Strengths from '@/components/About/Strengths'

export default function Home() {
  return (
    <main>
      <Container className="flex flex-col gap-25">
        <Hero />
        <SelectedWork />
        <DesignPrinciples />
      </Container>
      <Certificates />
      <Container className="flex flex-col gap-25">
        <Strengths />
        <Snapshots />
      </Container>
    </main>
  )
}
