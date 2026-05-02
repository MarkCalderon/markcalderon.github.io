import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import imgPah from '@/assets/projects/philippine-adventure-holidays.png'
import imgBarambah from '@/assets/projects/barambah-organics.png'
import imgPryce from '@/assets/projects/pryce-gardens.png'
import imgUoc from '@/assets/projects/uoc-world.png'
import imgOgawa from '@/assets/projects/ogawa-group.png'

type Project = {
  title: string
  category: string
  description: string
  url: string
  screenshot: string
}

const projects: Project[] = [
  {
    title: 'Philippine Adventure Holidays',
    category: 'Tour Reservation System',
    description:
      'A full-featured tour reservation platform for a Philippines-based travel agency. Supports package browsing, online booking, and customized itineraries covering island hopping, diving, corporate travel, and destination experiences.',
    url: 'https://www.philippineadventureholidays.com/',
    screenshot: imgPah,
  },
  {
    title: 'Barambah Organics',
    category: 'E-commerce Dashboard',
    description:
      'A customer-facing portal for an Australian organic dairy brand. Provides authenticated account management, order access, and self-service features in a clean, streamlined dashboard experience.',
    url: 'https://customers.barambahorganics.com.au/',
    screenshot: imgBarambah,
  },
  {
    title: 'Pryce Gardens',
    category: 'Lot Booking & Purchase System',
    description:
      'An online lot booking and memorial planning platform for a memorial park group in Mindanao, Philippines. Enables families to browse and reserve burial lots, explore pre-planning options, and manage service inquiries.',
    url: 'https://prycegardens.com/',
    screenshot: imgPryce,
  },
  {
    title: 'University of Creativity',
    category: 'Content Management & Delivery',
    description:
      'A content delivery platform for a Tokyo-based cross-disciplinary creative institution. Powers seminar programs, research publication, event management, and community engagement across the UoC ecosystem.',
    url: 'https://uoc.world/',
    screenshot: imgUoc,
  },
  {
    title: 'Ogawa Group',
    category: 'WordPress Corporate Site',
    description:
      'A corporate WordPress site for a Japanese real estate services group established in 1988. Covers land registration, surveying, inheritance transfers, and urban redevelopment consulting across a group of specialized professional entities.',
    url: 'https://www.ogawagroup.co.jp/',
    screenshot: imgOgawa,
  },
]

function Projects() {
  return (
    <Card className="border-chart-3/25 text-left">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>
          A selection of client and production web systems delivered across different industries.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-muted/30 transition-colors hover:border-border"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <Badge variant="secondary" className="w-fit text-xs">
                  {project.category}
                </Badge>
                <p className="font-medium leading-tight text-foreground">
                  {project.title}
                </p>
                <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="-ml-2 mt-1 w-fit text-xs text-muted-foreground"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 size-3" />
                    Visit Site
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Projects
