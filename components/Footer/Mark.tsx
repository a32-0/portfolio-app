import Image from 'next/image'

export default function FooterMark() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 -bottom-8 select-none"
      aria-hidden="true"
      data-footer-mark
    >
      <Image
        src="/icons/catarsis-footer.svg"
        alt="Catarsis logotype"
        width={1600}
        height={246}
        priority
        sizes="100vw"
        className="h-auto w-screen max-w-none"
      />
    </div>
  )
}
