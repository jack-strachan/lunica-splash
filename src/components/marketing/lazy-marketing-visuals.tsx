"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import type { TabItem } from "@/components/marketing/tabbed-showcase"

const DynamicTabbedShowcase = dynamic(
  () => import("@/components/marketing/tabbed-showcase").then((mod) => mod.TabbedShowcase),
  {
    ssr: false,
    loading: () => <TabbedShowcasePlaceholder />,
  }
)

const DynamicSolutionGraphic = dynamic(
  () => import("@/components/marketing/solution-graphics").then((mod) => mod.SolutionGraphic),
  {
    ssr: false,
    loading: () => <SolutionGraphicPlaceholder />,
  }
)

function useDeferredMount() {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    if (shouldMount) return

    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === "undefined") {
      const timeout = window.setTimeout(() => setShouldMount(true), 0)
      return () => window.clearTimeout(timeout)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldMount(true)
        observer.disconnect()
      },
      { rootMargin: "700px 0px", threshold: 0.01 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [shouldMount])

  return { ref, shouldMount }
}

function TabbedShowcasePlaceholder() {
  return (
    <div className="overflow-hidden rounded-lg bg-surface-1" aria-hidden="true">
      <div className="grid grid-cols-4 gap-0.5 bg-background">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-20 rounded-t-md bg-surface-1 px-6 py-5">
            <div className="h-2 w-20 rounded bg-foreground/10" />
            <div className="mt-2 h-2 w-14 rounded bg-foreground/5" />
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-surface-2">
        <div className="flex h-72 items-center justify-center lg:h-96">
          <div className="h-40 w-56 rounded-xl bg-background/60 ring-1 ring-foreground/[0.04]" />
        </div>
        <div className="px-6 pb-6">
          <div className="h-3 w-4/5 rounded bg-foreground/10" />
          <div className="mt-3 h-3 w-2/3 rounded bg-foreground/5" />
        </div>
      </div>
    </div>
  )
}

function SolutionGraphicPlaceholder() {
  return (
    <div className="flex w-full max-w-[260px] scale-[0.85] flex-col gap-2 py-6 md:scale-100" aria-hidden="true">
      <div className="mx-auto h-28 w-48 rounded-xl bg-surface-soft ring-1 ring-black/[0.04]" />
      <div className="mx-auto h-2 w-24 rounded bg-foreground/10" />
    </div>
  )
}

export function LazyTabbedShowcase({ tabs }: { tabs: TabItem[] }) {
  const { ref, shouldMount } = useDeferredMount()

  return (
    <div ref={ref}>
      {shouldMount ? <DynamicTabbedShowcase tabs={tabs} /> : <TabbedShowcasePlaceholder />}
    </div>
  )
}

export function LazySolutionGraphic({ id }: { id: string }) {
  const { ref, shouldMount } = useDeferredMount()

  return (
    <div ref={ref} className="flex h-full w-full items-center justify-center">
      {shouldMount ? <DynamicSolutionGraphic id={id} /> : <SolutionGraphicPlaceholder />}
    </div>
  )
}

export type { TabItem }
