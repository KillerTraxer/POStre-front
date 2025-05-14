import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const Route = createFileRoute("/dashboard/_dashboard")({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div className="flex h-dvh w-full">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-7rem)]">
          <nav className="space-y-1 p-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/dashboard/home">Home</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/dashboard/perfil">Perfil</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/dashboard/ajustes">Ajustes</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/">Salir</Link>
            </Button>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
