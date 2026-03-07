type Props = {
  label: string
}

export default function CaseStudyLabel({ label }: Props) {
  return (
    <div className="inline-flex rounded-2xl bg-primary px-6 py-3 text-base uppercase tracking-tight text-white">
      {label}
    </div>
  )
}
