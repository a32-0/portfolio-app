import Image from 'next/image'
import { PLACEHOLDER_IMAGE, type VisualDesignItem } from '@/data/visualDesign'

type Props = {
  item: VisualDesignItem
}

export default function VisualDesignCard({ item }: Props) {
  const { title, image, width, height } = item

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
      <div className="w-full overflow-hidden bg-secondary">
        {image === PLACEHOLDER_IMAGE ? (
          <div className="w-full" style={{ aspectRatio: `${width} / ${height}` }} />
        ) : (
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            sizes="(max-width: 1024px) 100vw, (max-width: 1264px) 50vw, 576px"
            quality={90}
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="inline-flex w-full items-center justify-start">
        <p className="text-sm font-normal text-secondary">{title}</p>
      </div>
    </div>
  )
}
