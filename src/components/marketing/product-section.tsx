"use client"

import { useRef, useEffect, useState } from "react"
import { TabbedShowcase } from "@/components/marketing/tabbed-showcase"
import type { TabItem } from "@/components/marketing/tabbed-showcase"
import { LearnMoreLink } from "@/components/marketing/learn-more-link"
import { PageContainer } from "@/components/ui/page-container"

export interface ProductSectionData {
  name: string
  subtitle: string
  tabs: TabItem[]
  href?: string
}

export function ProductSection({ name, subtitle, tabs, href }: ProductSectionData) {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id={name.toLowerCase().replace(/\s+/g, "-")} className="w-full bg-background scroll-mt-20">
      <PageContainer className="grid gap-12 py-20 md:grid-cols-[2fr_1fr] md:items-start md:gap-16 lg:py-28">

        {/* Right — Tabbed showcase */}
        <TabbedShowcase tabs={tabs} />
        {/* Left — Heading */}
        <div className="order-first md:order-last flex flex-col items-start pt-4 md:sticky md:top-24">
          <h2 className="text-[2.75rem] !font-normal leading-[1.08] tracking-tight lg:text-[3.5rem]">
            <span className={`transition-colors duration-500 ${inView ? "text-primary" : "text-foreground"}`}>{name}</span>
            <br />
            <span className="text-foreground/40">{subtitle}</span>
          </h2>
          {href && <LearnMoreLink href={href} />}
        </div>
      </PageContainer>
    </section>
  )
}
