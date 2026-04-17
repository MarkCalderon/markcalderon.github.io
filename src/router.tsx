import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import AppLayout from './layouts/AppLayout'
import BlogPage from './pages/BlogPage'
import PortfolioPage from './pages/PortfolioPage'

const rootRoute = createRootRoute({
  component: AppLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
})

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: PortfolioPage,
})

const routeTree = rootRoute.addChildren([homeRoute, blogRoute, portfolioRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
