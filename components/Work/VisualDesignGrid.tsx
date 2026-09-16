import { visualDesignItems, type VisualDesignItem } from '@/data/visualDesign'
import VisualDesignCard from './VisualDesignCard'

export default function VisualDesignGrid() {
  const columns = visualDesignItems.reduce<[VisualDesignItem[], VisualDesignItem[]]>(
    (acc, item, index) => {
      acc[index % 2].push(item)
      return acc
    },
    [[], []]
  )

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-12">
      <div className="inline-flex w-full flex-col items-start justify-start gap-12 lg:flex-row">
        {columns.map((column, columnIndex) => (
          <div
            key={`visual-design-column-${columnIndex + 1}`}
            className="inline-flex w-full flex-1 flex-col items-start justify-start gap-12"
          >
            {column.map((item) => (
              <VisualDesignCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
