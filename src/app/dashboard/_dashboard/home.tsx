import { createFileRoute } from "@tanstack/react-router"

import { Seo } from "@/components/layout/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute("/dashboard/_dashboard/home")({
  component: DashboardHome,
})

function DashboardHome() {
  return (
    <>
      <Seo title="Dashboard - Home" />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Bienvenido al Dashboard</h1>
          <p className="text-muted-foreground">
            Aquí puedes ver un resumen de tu actividad
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No hay actividad reciente para mostrar
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Las estadísticas se cargarán pronto
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No tienes notificaciones pendientes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
