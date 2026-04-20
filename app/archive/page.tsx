import type { Metadata } from 'next'

import Container from '@/components/Container'
import Snapshots from '@/components/Work/Snapshots'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'An archive of visual snapshots from product, service, and operational design work.',
}

export default function ArchivePage() {
  return (
    <main className="flex flex-col mt-16 gap-30">
      <Container className="flex flex-col gap-30 pt-8">
        <Snapshots />
      </Container>
    </main>
  )
}
