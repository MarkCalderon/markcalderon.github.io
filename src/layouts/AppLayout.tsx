import { useEffect, useState } from 'react'
import { Link, Outlet } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import PageLoader from '@/components/PageLoader/PageLoader'
import { Separator } from '@/components/ui/separator'

function AppLayout() {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const waitForWindowLoad =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener('load', () => resolve(), { once: true })
          })

    const minVisibleDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 450)
    })

    Promise.all([waitForWindowLoad, document.fonts.ready, minVisibleDelay]).then(
      () => {
        if (isMounted) {
          setIsPageLoading(false)
        }
      }
    )

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <PageLoader isVisible={isPageLoading} />
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="site-title-handwrite text-sm">Mark Calderon</h1>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/" activeProps={{ className: 'bg-muted' }}>
                About
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" disabled>
              <Link to="/blog" activeProps={{ className: 'bg-muted' }}>
                Blog
              </Link>
            </Button>
          </nav>
        </header>
        <Separator />

        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
