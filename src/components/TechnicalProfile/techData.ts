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

export type TechCard = {
  name: string
  icon: IconType
  iconClassName: string
}

export const leadership = {
  title: 'Leadership, Creativity, Teamwork',
  badges: ['Leadership', 'Documentation', 'Mentorship', 'Responsive Design'],
  details: [
    'Identify, refactor, and implement solutions across the software development lifecycle.',
    'Create cross-compatible responsive designs and practical documentation/tutorials.',
    'Support peer members through technical collaboration.',
  ],
}

export const technologyShowcaseCards: TechCard[] = [
  { name: 'HTML5', icon: FaHtml5, iconClassName: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, iconClassName: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, iconClassName: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, iconClassName: 'text-blue-600 dark:text-blue-400' },
  { name: 'React', icon: FaReact, iconClassName: 'text-cyan-500' },
  { name: 'Vue', icon: FaVuejs, iconClassName: 'text-emerald-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, iconClassName: 'text-sky-500' },
  { name: 'Bootstrap', icon: FaBootstrap, iconClassName: 'text-violet-500 dark:text-violet-400' },
  { name: 'jQuery', icon: SiJquery, iconClassName: 'text-blue-700 dark:text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, iconClassName: 'text-foreground' },
  { name: 'WordPress', icon: FaWordpress, iconClassName: 'text-sky-700 dark:text-sky-400' },
  { name: 'GraphQL', icon: SiGraphql, iconClassName: 'text-pink-500' },
  {
    name: 'OpenAPI',
    icon: SiOpenapiinitiative,
    iconClassName: 'text-emerald-500',
  },
  { name: 'PHP', icon: SiPhp, iconClassName: 'text-indigo-500 dark:text-indigo-400' },
  { name: 'Node.js', icon: SiNodedotjs, iconClassName: 'text-green-600' },
]

export const toolsDesignShowcaseCards: TechCard[] = [
  { name: 'VS Code', icon: SiCodeblocks, iconClassName: 'text-blue-500' },
  { name: 'Webpack', icon: SiWebpack, iconClassName: 'text-sky-500' },
  { name: 'Git', icon: SiGit, iconClassName: 'text-orange-500' },
  { name: 'GitHub', icon: SiGithub, iconClassName: 'text-foreground' },
  { name: 'Bitbucket', icon: SiBitbucket, iconClassName: 'text-blue-600 dark:text-blue-400' },
  { name: 'npm', icon: SiNpm, iconClassName: 'text-red-600' },
  { name: 'Gulp', icon: SiGulp, iconClassName: 'text-pink-500' },
  { name: 'Babel', icon: SiBabel, iconClassName: 'text-yellow-500' },
  { name: 'XAMPP', icon: SiXampp, iconClassName: 'text-orange-600' },
  { name: 'Figma', icon: SiFigma, iconClassName: 'text-violet-500 dark:text-violet-400' },
  { name: 'Sketch', icon: SiSketch, iconClassName: 'text-amber-500' },
]
