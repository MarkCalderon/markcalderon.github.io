export type ExperienceNode = {
  title: string
  company: string
  period: string
  location: string
  summary: string
  /** Awards and figures from the summary, floated as scenery in the scroll world. */
  highlights: string[]
}

export const experiences: ExperienceNode[] = [
  {
    title: 'Senior Developer',
    company: 'Saphyroo · Full-time',
    period: 'Feb 2026 - Present',
    location: 'Campbellfield, Victoria, Australia · Remote',
    summary:
      'Architecting legacy-to-modern stack migration, leading UI/UX strategy, API integrations, QA/performance delivery, and AI-driven development rules.',
    highlights: [],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'We Are Dotty! · Full-time',
    period: 'Oct 2021 - Jan 2026',
    location: 'Makati, NCR, Philippines · Remote',
    summary:
      'Department MVP (Q2 2025) and Dottyzens of the Month (June 2022). Delivered enterprise-grade apps across lease management, logistics, document review, digital marketing, and content delivery systems.',
    highlights: ['Department MVP, Q2 2025', 'Dottyzens of the Month, June 2022'],
  },
  {
    title: 'Team Lead | Front-End Web Developer',
    company: 'Commude Philippines',
    period: 'Oct 2019 - Oct 2021',
    location: 'Metro Manila',
    summary:
      'Built 70+ CMS and landing page projects. Promoted within 6 months. MVP awardee (Jan-Apr 2021). Worked with Commude Japan teams on modern responsive web delivery.',
    highlights: ['70+ CMS and landing pages', 'MVP, Jan-Apr 2021'],
  },
  {
    title: 'Information Communications and Technology Teacher',
    company: 'Seri Mulia Sarjana International School',
    period: 'Jun 2015 - Mar 2019',
    location: 'Bandar Seri Begawan, Brunei-Muara District, Brunei',
    summary:
      "Awarded Best Class Teacher of the Month (Upper Primary, March 2019), advised SMSIS Tech Kids (Third Place, 2019), and advised SMSIS BICTA students (Young Developers Award, 2016). Taught UK English-based curriculum, served as creative media arts editor, implemented the school's first Student ID system, delivered IT support and peer training, and managed the ICT lab, library management system, PA system, and teaching aid equipment.",
    highlights: ['Best Class Teacher, March 2019', 'Tech Kids Third Place, 2019', 'BICTA Young Developers Award, 2016'],
  },
]
