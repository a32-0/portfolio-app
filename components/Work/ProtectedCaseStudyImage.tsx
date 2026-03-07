'use client'

import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export default function ProtectedCaseStudyImage({ src, alt }: Props) {
  const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <div
      className="relative mx-auto mb-8 w-full max-w-[1200px] overflow-hidden select-none"
      onContextMenu={preventDefault}
      onDragStart={preventDefault}
      onCopy={preventDefault}
      onCut={preventDefault}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={3200}
        sizes="(max-width: 1200px) 100vw, 1200px"
        className="h-auto w-full pointer-events-none"
        draggable={false}
        priority
      />
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  )
}
