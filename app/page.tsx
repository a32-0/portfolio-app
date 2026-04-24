import Container from '@/components/Container'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/Work/SelectedWork'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import About from '@/components/About/About'

export default function Home() {
  return (
    <main className="flex flex-col gap-50">
      <Hero />
      <Container className="flex flex-col gap-50">
        <SelectedWork />
        <DesignPrinciples />
      </Container>
      <About />
    </main>
  )
}
