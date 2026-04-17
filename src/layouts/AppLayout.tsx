import { Link, Outlet } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function AppLayout() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Mark Port</h1>
        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" activeProps={{ className: 'bg-muted' }}>
              Home
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/blog" activeProps={{ className: 'bg-muted' }}>
              Blog
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/portfolio" activeProps={{ className: 'bg-muted' }}>
              Portfolio
            </Link>
          </Button>
        </nav>
      </header>
      <Separator />

      <Outlet />
    </main>
  )
}

export default AppLayout
