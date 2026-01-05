import Container from '@/components/Container'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import GridHero from '@/components/Work/GridHero'
import Grid from '@/components/Work/Grid'
import About from '@/components/About/About'
import Experience from '@/components/About/Experience'
import Certificates from '@/components/About/Certificates'
import Technologies from '@/components/About/Technologies'
import Marquee from '@/components/About/Marquee'

export default function Home() {
  return (
    <main className="flex flex-col gap-30">
      <Container className="flex flex-col gap-30">
        <Hero />
      </Container>
      <div className="flex flex-col gap-20 3xl:gap-60">
        <GridHero />
        <Grid />
      </div>
      <Background>
        <div className="flex flex-col gap-30">
          <Container className="flex flex-col gap-30">
            <About />
            <Experience />
            <Certificates />
            <Technologies />
          </Container>
          <Marquee />
        </div>
      </Background>
    </main>
  )
}
