import { createFileRoute } from "@tanstack/react-router"

import { Seo } from "@/components/layout/seo"

export const Route = createFileRoute("/dashboard/_dashboard/perfil")({
  component: PerfilPage,
})

function PerfilPage() {
  return (
    <>
      <Seo title="Dashboard - Perfil" />
      <h1 className="text-3xl font-bold">Perfil</h1>
    </>
  )
}
