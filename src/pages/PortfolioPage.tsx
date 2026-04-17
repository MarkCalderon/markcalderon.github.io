import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function PortfolioPage() {
  return (
    <Card className="text-left">
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">Portfolio</CardTitle>
        <CardDescription>
          This is the portfolio page routed by TanStack Router at{' '}
          <code>/portfolio</code>.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">
        Add featured projects, outcomes, and case studies here.
      </CardContent>
    </Card>
  )
}

export default PortfolioPage
