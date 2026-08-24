import Hero from '@/components/Hero'
import WorkSection from '@/components/Work/WorkSection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WorkSection />
    </main>
  )
}
