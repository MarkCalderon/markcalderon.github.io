import PageLoader from '@/components/PageLoader/PageLoader'
import { Button } from '@/components/ui/button'
import { Outlet } from '@tanstack/react-router'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useEffect, useState } from 'react'

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
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-5xl flex-col px-4 sm:px-6">
        <header className="flex h-16 items-center justify-between gap-4">
          <p className="site-title-handwrite">Mark Calderon</p>
          <nav aria-label="Contact" className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/markcalderon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <FaLinkedinIn />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground">
              <a
                href="https://github.com/MarkCalderon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <FaGithub />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground">
              <a href="mailto:markcev0@gmail.com" aria-label="Email markcev0@gmail.com">
                <FaEnvelope />
              </a>
            </Button>
          </nav>
        </header>

        <main className="flex-1 pb-24 md:pb-32">
          <Outlet />
        </main>

        <footer className="flex flex-col gap-2 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Languages: English, Tagalog, Malay</p>
          <a
            href="mailto:markcev0@gmail.com"
            className="w-fit rounded-sm text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            markcev0@gmail.com
          </a>
        </footer>
      </div>
    </>
  )
}

export default AppLayout
