import type { Metadata } from 'next'

import Container from '@/components/Container'
import ArchiveGrid from '@/components/Work/ArchiveGrid'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'An archive of visual snapshots from product, service, and operational design work.',
}

export default function ArchivePage() {
  return (
    <main className="flex flex-col pt-16 gap-30 min-h-screen bg-black">
      <Container className="flex flex-col gap-30 pt-8">
        <ArchiveGrid />
      </Container>
    </main>
  )
}
