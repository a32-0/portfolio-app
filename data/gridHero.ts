export type SnapshotItem = {
  id: string
  slug: string
  href?: string
  variant: 'card' | 'media'
  heightClass: string
}

export type GridHeroSection = {
  id: string
  title: string
  description: string
  columns: SnapshotItem[][]
}

export const gridHeroSection: GridHeroSection = {
  id: 'additional-snapshots',
  title: 'Additional snapshots',
  description: 'A curated set of screens and diagrams from projects.',
  columns: [
    [
      {
        id: 'snapshot-ox-logistics-card',
        slug: 'ox-logistics',
        href: '/work/ox-logistics',
        variant: 'card',
        heightClass: 'h-96',
      },
      {
        id: 'snapshot-immersio',
        slug: 'immersio',
        variant: 'media',
        heightClass: 'h-[839px]',
      },
      {
        id: 'snapshot-mait',
        slug: 'mait',
        variant: 'media',
        heightClass: 'h-[1136px]',
      },
      {
        id: 'snapshot-toma1',
        slug: 'toma1',
        variant: 'media',
        heightClass: 'h-[481px]',
      },
    ],
    [
      {
        id: 'snapshot-cyberpuerta',
        slug: 'cyberpuerta',
        variant: 'media',
        heightClass: 'h-[861px]',
      },
      {
        id: 'snapshot-binca',
        slug: 'binca',
        variant: 'media',
        heightClass: 'h-[459px]',
      },
      {
        id: 'snapshot-yuni',
        slug: 'yuni',
        variant: 'media',
        heightClass: 'h-[1243px]',
      },
    ],
  ],
}
