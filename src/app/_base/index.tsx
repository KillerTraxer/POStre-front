import { createFileRoute } from "@tanstack/react-router"

import { Seo } from "@/components/layout/seo"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/_base/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <Seo description="Welcome to a typesafe Vite/React starter kit!" />

      <div className="w-full border-b bg-card py-20">
        <div className="container flex flex-col items-center space-y-10">
          <h1 className="max-w-2xl bg-gradient-to-b from-slate-400 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent">
            Welcome to a typesafe Vite/React starter kit!
          </h1>

          <div className="flex max-w-2xl flex-col items-center">
            <p className="text-xs text-muted-foreground">Powered by</p>
            <ul className="mt-3 flex flex-col font-bold">
              <Button variant={"link"} asChild>
                <li>
                  <a
                    href="https://tanstack.com/router/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TanStack router ↗
                  </a>
                </li>
              </Button>
              <Button variant={"link"} asChild>
                <li>
                  <a
                    href="https://tanstack.com/query/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TanStack query ↗
                  </a>
                </li>
              </Button>
              <Button variant={"link"} asChild>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tailwind CSS ↗
                  </a>
                </li>
              </Button>
              <Button variant={"link"} asChild>
                <li>
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shadcn UI ↗
                  </a>
                </li>
              </Button>
              <Button variant={"link"} asChild>
                <li>
                  <a
                    href="https://github.com/total-typescript/ts-reset"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Total-Typescript ts reset ↗
                  </a>
                </li>
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
