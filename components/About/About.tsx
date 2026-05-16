import { aboutSection, type InlineLink } from '@/data/about'

function isInlineLink(node: string | InlineLink): node is InlineLink {
  return typeof node === 'object'
}

export default function About() {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="border-l border-tertiary pl-6 flex flex-col gap-8">
        <p className="text-5xl font-medium font-serif italic text-primary">
          {aboutSection.eyebrow}
        </p>
        <div className="text-4xl font-normal font-sans text-black">
          {aboutSection.body.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-8' : ''}>
              {typeof paragraph === 'string'
                ? paragraph
                : paragraph.map((node, i) =>
                    isInlineLink(node) ? (
                      <a
                        key={i}
                        href={node.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        {node.text}
                      </a>
                    ) : (
                      node
                    )
                  )}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
