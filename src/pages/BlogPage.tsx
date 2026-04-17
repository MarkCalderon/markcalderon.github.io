import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function BlogPage() {
  return (
    <Card className="text-left">
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">Blog</CardTitle>
        <CardDescription>
          This is the blog page routed by TanStack Router at <code>/blog</code>.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">
        Add your articles list, post cards, or category filters here.
      </CardContent>
    </Card>
  )
}

export default BlogPage
