type Props = {
  title: string
  contacts: string[]
  disclaimer: string
}

export default function ClosingSection({ title, contacts, disclaimer }: Props) {
  return (
    <section className="flex flex-col gap-8 border-t border-black/15 pt-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-5xl tracking-tight text-black">{title}</h2>
        <div className="flex flex-col gap-2 text-base tracking-tight text-black md:items-end">
          {contacts.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <p className="max-w-5xl text-base font-medium tracking-tight text-black/70">{disclaimer}</p>
    </section>
  )
}
