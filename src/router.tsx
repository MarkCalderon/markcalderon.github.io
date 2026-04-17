import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import AppLayout from './layouts/AppLayout'
import BlogPage from './pages/BlogPage'

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

const routeTree = rootRoute.addChildren([homeRoute, blogRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
