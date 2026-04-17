import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function Intro() {
  return (
    <Card className="text-left">
      <div className="h-1 w-full bg-linear-to-r from-primary via-chart-2 to-chart-4" />
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">
          Senior Frontend Developer
        </CardTitle>
        <CardDescription>
          6+ years building SPA to enterprise web applications, with 80+
          WordPress custom themes and landing pages delivered.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-0 text-sm text-muted-foreground">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            6+ Years Experience
          </Badge>
          <Badge variant="secondary" className="text-xs">
            80+ WordPress Projects
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Enterprise Web Apps
          </Badge>
        </div>
        <p>
          Experience spans logistics, e-commerce, content, bond lease management,
          and document review management systems.
        </p>
        <p>
          Strengths include modern frontend architecture, design systems, API
          integration, team mentorship, and cross-functional delivery.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Languages: English, Tagalog, Malay</span>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon-sm" className="text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/markcalderon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon-sm" className="text-muted-foreground">
            <a href="mailto:markcev0@gmail.com" aria-label="Send email to markcev0@gmail.com">
              <FaEnvelope />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Intro
