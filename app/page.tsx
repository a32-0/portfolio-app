import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Snapshots from '@/components/Work/Snapshots'
import SelectedWork from '@/components/Work/SelectedWork'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import Certificates from '@/components/About/Certificates'
import Strengths from '@/components/About/Strengths'

export default function Home() {
  return (
    <main className="flex flex-col gap-30">
      <Container className="flex flex-col gap-30">
        <Hero />
        <SelectedWork />
        <DesignPrinciples />
      </Container>
      <Certificates />
      <Container className="flex flex-col gap-30">
        <Strengths />
        <Snapshots />
      </Container>
    </main>
  )
}
