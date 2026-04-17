import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type ExperienceNode = {
  year: string
  title: string
  company: string
  timeline: string
  summary: string
}

const experiences: ExperienceNode[] = [
  {
    year: '2026',
    title: 'Senior Developer',
    company: 'Saphyroo · Full-time',
    timeline: 'Feb 2026 - Present · Campbellfield, Victoria, Australia · Remote',
    summary:
      'Architecting legacy-to-modern stack migration, leading UI/UX strategy, API integrations, QA/performance delivery, and AI-driven development rules.',
  },
  {
    year: '2021',
    title: 'Senior Frontend Developer',
    company: 'We Are Dotty! · Full-time',
    timeline: 'Oct 2021 - Jan 2026 · Makati, NCR, Philippines · Remote',
    summary:
      'Department MVP (Q2 2025) and Dottyzens of the Month (June 2022). Delivered enterprise-grade apps across lease management, logistics, document review, digital marketing, and content delivery systems.',
  },
  {
    year: '2019',
    title: 'Team Lead | Front-End Web Developer',
    company: 'Commude Philippines',
    timeline: 'Oct 2019 - Oct 2021 · Metro Manila',
    summary:
      'Built 70+ CMS and landing page projects. Promoted within 6 months. MVP awardee (Jan-Apr 2021). Worked with Commude Japan teams on modern responsive web delivery.',
  },
  {
    year: '2015',
    title: 'Information Communications and Technology Teacher',
    company: 'Seri Mulia Sarjana International School',
    timeline:
      'Jun 2015 - Mar 2019 · 3 yrs 10 mos · Bandar Seri Begawan, Brunei-Muara District, Brunei',
    summary:
      "Awarded Best Class Teacher of the Month (Upper Primary, March 2019), advised SMSIS Tech Kids (Third Place, 2019), and advised SMSIS BICTA students (Young Developers Award, 2016). Taught UK English-based curriculum, served as creative media arts editor, implemented the school's first Student ID system, delivered IT support and peer training, and managed the ICT lab, library management system, PA system, and teaching aid equipment.",
  },
]

function WorkExperienceTree() {
  return (
    <Card className="border-chart-4/25 text-left">
      <CardHeader>
        <CardTitle>Work Experience Tree</CardTitle>
        <CardDescription>
          Growth timeline from current role back to foundation roles.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="relative">
          <div className="absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/70 via-chart-2/60 to-chart-4/70 md:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((experience, index) => {
              const isCurrent = index === 0
              const alignLeft = index % 2 === 0

              return (
                <div key={experience.title} className="relative md:grid md:grid-cols-2">
                  <div
                    className={
                      alignLeft
                        ? 'hidden md:absolute md:left-1/2 md:top-[1.8rem] md:block md:h-px md:w-10 md:-translate-x-full md:bg-border'
                        : 'hidden md:absolute md:left-1/2 md:top-[1.8rem] md:block md:h-px md:w-10 md:bg-border'
                    }
                  />

                  <Badge
                    variant="outline"
                    className="absolute -left-9 top-[1.2rem] z-20 hidden bg-white text-xs md:left-1/2 md:inline-flex md:-translate-x-1/2"
                  >
                    {experience.year}
                  </Badge>

                  <div
                    className={
                      alignLeft
                        ? 'md:col-start-1 md:pr-8'
                        : 'md:col-start-2 md:pl-8'
                    }
                  >
                    <Card
                      size="sm"
                      className={
                        isCurrent
                          ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-background to-chart-2/10'
                          : 'border-border/70 bg-background/95'
                      }
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {experience.title}
                          {isCurrent ? <Badge className="text-xs">Current</Badge> : null}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">{experience.company}</CardDescription>
                        <CardDescription className="text-xs text-muted-foreground">{experience.timeline}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 text-xs text-muted-foreground">
                        {experience.summary}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WorkExperienceTree
