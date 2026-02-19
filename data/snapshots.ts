export type SnapshotItem = {
  id: string
  slug: string
  variant: 'card' | 'media'
}

export type SnapshotsSection = {
  id: string
  title: string
  description: string
  columns: SnapshotItem[][]
}

export const snapshotsSection: SnapshotsSection = {
  id: 'additional-snapshots',
  title: 'Additional snapshots',
  description: 'A curated set of screens from past projects.',
  columns: [
    [
      {
        id: 'snapshot-ox-logistics-card',
        slug: 'ox-logistics',
        variant: 'card',
      },
      {
        id: 'snapshot-immersio',
        slug: 'immersio',
        variant: 'media',
      },
      {
        id: 'snapshot-mait',
        slug: 'mait',
        variant: 'media',
      },
      {
        id: 'snapshot-toma1',
        slug: 'toma1',
        variant: 'media',
      },
    ],
    [
      {
        id: 'snapshot-cyberpuerta',
        slug: 'cyberpuerta',
        variant: 'media',
      },
      {
        id: 'snapshot-binca',
        slug: 'binca',
        variant: 'media',
      },
      {
        id: 'snapshot-yuni',
        slug: 'yuni',
        variant: 'media',
      },
    ],
  ],
}
