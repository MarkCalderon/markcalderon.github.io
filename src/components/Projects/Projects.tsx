import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects, type Project } from './projectData'

type ProjectTileProps = {
  project: Project
  featured?: boolean
}

function ProjectTile({ project, featured = false }: ProjectTileProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col gap-5 rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background',
        featured && 'md:grid md:grid-cols-5 md:items-center md:gap-10'
      )}
    >
      <div
        className={cn(
          'overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10',
          featured ? 'aspect-video md:col-span-3' : 'aspect-16/10'
        )}
      >
        <img
          src={project.screenshot}
          alt={`${project.title} website screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          loading={featured ? 'eager' : 'lazy'}
        />
      </div>
      <div className={cn('flex flex-col gap-2', featured && 'md:col-span-2')}>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        <h3
          className={cn(
            'flex items-start gap-1.5 font-medium tracking-tight text-foreground',
            featured ? 'text-2xl' : 'text-lg'
          )}
        >
          {project.title}
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground motion-reduce:transition-none"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </h3>
        <p className="max-w-prose text-sm leading-relaxed text-pretty text-muted-foreground">
          {project.description}
        </p>
      </div>
    </a>
  )
}

function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" aria-labelledby="projects-title" className="flex scroll-mt-8 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 id="projects-title" className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Projects
        </h2>
        <p className="max-w-prose text-base text-muted-foreground">
          A selection of client and production web systems delivered across different industries.
        </p>
      </div>

      <ProjectTile project={featured} featured />

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
