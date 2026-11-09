import { Badge } from '@/components/ui/badge'
import {
  leadership,
  technologyShowcaseCards,
  toolsDesignShowcaseCards,
  type TechCard,
} from './techData'

type TechGroupProps = {
  title: string
  items: TechCard[]
}

function TechGroup({ title, items }: TechGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
          >
            <item.icon aria-hidden="true" className={`size-4 shrink-0 ${item.iconClassName}`} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechnicalProfile() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="flex scroll-mt-8 flex-col gap-10">
      <h2 id="skills-title" className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        Technical profile
      </h2>

      <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="flex flex-col gap-10">
          <TechGroup title="Languages & frameworks" items={technologyShowcaseCards} />
          <TechGroup title="Tools & design" items={toolsDesignShowcaseCards} />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-muted-foreground">{leadership.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {leadership.badges.map((badge) => (
              <Badge key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
          </div>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-pretty text-foreground/80">
            {leadership.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechnicalProfile
