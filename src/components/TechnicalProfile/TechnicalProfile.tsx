import { Users, type LucideIcon } from 'lucide-react'
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa'
import {
  SiBabel,
  SiBitbucket,
  SiCodeblocks,
  SiFigma,
  SiGit,
  SiGithub,
  SiGulp,
  SiGraphql,
  SiJquery,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenapiinitiative,
  SiPhp,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiXampp,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type SkillGroup = {
  title: string
  icon: LucideIcon
  badges: string[]
  details: string[]
}

type TechCard = {
  name: string
  icon: IconType
  iconClassName: string
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Leadership, Creativity, Teamwork',
    icon: Users,
    badges: ['Leadership', 'Documentation', 'Mentorship', 'Responsive Design'],
    details: [
      'Identify, refactor, and implement solutions across the software development lifecycle.',
      'Create cross-compatible responsive designs and practical documentation/tutorials.',
      'Support peer members through technical collaboration.',
    ],
  },
]

const technologyShowcaseCards: TechCard[] = [
  { name: 'HTML5', icon: FaHtml5, iconClassName: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, iconClassName: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, iconClassName: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, iconClassName: 'text-blue-600' },
  { name: 'React', icon: FaReact, iconClassName: 'text-cyan-500' },
  { name: 'Vue', icon: FaVuejs, iconClassName: 'text-emerald-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, iconClassName: 'text-sky-500' },
  { name: 'Bootstrap', icon: FaBootstrap, iconClassName: 'text-violet-500' },
  { name: 'jQuery', icon: SiJquery, iconClassName: 'text-blue-700' },
  { name: 'Next.js', icon: SiNextdotjs, iconClassName: 'text-foreground' },
  { name: 'WordPress', icon: FaWordpress, iconClassName: 'text-sky-700' },
  { name: 'GraphQL', icon: SiGraphql, iconClassName: 'text-pink-500' },
  {
    name: 'OpenAPI',
    icon: SiOpenapiinitiative,
    iconClassName: 'text-emerald-500',
  },
  { name: 'PHP', icon: SiPhp, iconClassName: 'text-indigo-500' },
  { name: 'Node.js', icon: SiNodedotjs, iconClassName: 'text-green-600' },
]

const toolsDesignShowcaseCards: TechCard[] = [
  { name: 'VS Code', icon: SiCodeblocks, iconClassName: 'text-blue-500' },
  { name: 'Webpack', icon: SiWebpack, iconClassName: 'text-sky-500' },
  { name: 'Git', icon: SiGit, iconClassName: 'text-orange-500' },
  { name: 'GitHub', icon: SiGithub, iconClassName: 'text-foreground' },
  { name: 'Bitbucket', icon: SiBitbucket, iconClassName: 'text-blue-600' },
  { name: 'npm', icon: SiNpm, iconClassName: 'text-red-600' },
  { name: 'Gulp', icon: SiGulp, iconClassName: 'text-pink-500' },
  { name: 'Babel', icon: SiBabel, iconClassName: 'text-yellow-500' },
  { name: 'XAMPP', icon: SiXampp, iconClassName: 'text-orange-600' },
  { name: 'Figma', icon: SiFigma, iconClassName: 'text-violet-500' },
  { name: 'Sketch', icon: SiSketch, iconClassName: 'text-amber-500' },
]

function TechnicalProfile() {
  return (
    <Card className="border-chart-2/25 text-left">
      <CardHeader>
        <CardTitle>Technical Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0 text-sm text-muted-foreground">
        <div className="grid gap-3">
          <div className="flex flex-col gap-4 p-3">
            <p className="mb-3 text-center font-medium text-foreground">
              Technology Showcase
            </p>
            <div className="grid grid-cols-3 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-8">
              {technologyShowcaseCards.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex size-20 items-center justify-center p-3"
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <tech.icon className={`size-10 ${tech.iconClassName}`} />
                  <span className="sr-only">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-3">
            <p className="mb-3 text-center font-medium text-foreground">
              Tools & Design Showcase
            </p>
            <div className="grid grid-cols-3 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-8">
              {toolsDesignShowcaseCards.map((tool) => (
                <div
                  key={tool.name}
                  className="inline-flex size-20 items-center justify-center p-3"
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <tool.icon className={`size-10 ${tool.iconClassName}`} />
                  <span className="sr-only">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg bg-muted p-3">
              <div className="mb-3 flex items-center gap-2">
                <group.icon className="size-4 text-primary" />
                <p className="font-medium text-foreground">{group.title}</p>
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {group.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="space-y-1.5">
                {group.details.map((detail) => (
                  <p className="text-sm" key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TechnicalProfile
