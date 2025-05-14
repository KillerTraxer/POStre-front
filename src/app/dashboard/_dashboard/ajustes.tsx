import { createFileRoute } from "@tanstack/react-router"

import { Seo } from "@/components/layout/seo"

export const Route = createFileRoute("/dashboard/_dashboard/ajustes")({
  component: AjustesPage,
})

function AjustesPage() {
  return (
    <>
      <Seo title="Dashboard - Ajustes" />
      <h1 className="text-3xl font-bold">Ajustes</h1>
    </>
  )
}
