import { ArrowDown, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Intro() {
  return (
    <section aria-labelledby="intro-title" className="flex flex-col gap-8 pt-10 md:pt-20">
      <div className="flex flex-col gap-5">
        <h1
          id="intro-title"
          className="text-4xl font-medium tracking-tight text-balance text-foreground md:text-6xl"
        >
          Senior Frontend Developer
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
          7+ years building SPA to enterprise web applications, with 80+ WordPress custom themes
          and landing pages delivered.
        </p>
        <p className="max-w-prose text-base leading-relaxed text-pretty text-muted-foreground">
          Experience spans logistics, e-commerce, content, bond lease management, and document
          review management systems. Strengths include modern frontend architecture, design
          systems, API integration, team mentorship, and cross-functional delivery.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="px-4">
          <a href="mailto:markcev0@gmail.com">
            <Mail data-icon="inline-start" />
            Email me
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg" className="px-4">
          <a href="#projects">
            <ArrowDown data-icon="inline-start" />
            View projects
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Intro
