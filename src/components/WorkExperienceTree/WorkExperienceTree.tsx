import { Badge } from '@/components/ui/badge'
import { experiences } from './experienceData'

function WorkExperienceTree() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="flex scroll-mt-8 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 id="experience-title" className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Experience
        </h2>
        <p className="max-w-prose text-base text-muted-foreground">
          Growth timeline from current role back to foundation roles.
        </p>
      </div>

      <ol className="flex flex-col">
        {experiences.map((experience, index) => (
          <li
            key={experience.title}
            className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <p className="text-sm text-muted-foreground tabular-nums">{experience.period}</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-wrap items-center gap-2 text-lg font-medium tracking-tight text-foreground">
                  {experience.title}
                  {index === 0 ? <Badge>Current</Badge> : null}
                </h3>
                <p className="text-sm text-foreground/80">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
              <p className="max-w-prose text-sm leading-relaxed text-pretty text-muted-foreground">
                {experience.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default WorkExperienceTree
