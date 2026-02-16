import Container from '@/components/Container'
import Hero from '@/components/Hero'
import GridHero from '@/components/Work/GridHero'
import Grid from '@/components/Work/Grid'
import About from '@/components/About/About'
import Certificates from '@/components/About/Certificates'
import Technologies from '@/components/About/Technologies'
import Background from '@/components/Background'
import Experience from '@/components/About/Experience'
import Marquee from '@/components/About/Marquee'

export default function Home() {
  return (
    <main className="flex flex-col gap-30">
      <Container className="flex flex-col gap-25">
        <Hero />
        <Grid />
        <About />
      </Container>
      <Certificates />
      <Container className="flex flex-col gap-25">
        <Technologies />
        <GridHero />
      </Container>
    </main>
  )
}
