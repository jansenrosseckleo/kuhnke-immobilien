import { Outlet, createFileRoute } from '@tanstack/react-router'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

export const Route = createFileRoute('/immobilien')({
  component: PropertiesLayout,
})

function PropertiesLayout() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
