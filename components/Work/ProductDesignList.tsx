import { caseStudyProjects } from '@/data/caseStudyProjects'
import ProductDesignCard from './ProductDesignCard'

export default function ProductDesignList() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-12">
      {caseStudyProjects.map((project) => (
        <ProductDesignCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
