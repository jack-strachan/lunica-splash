import { TabbedShowcase } from "@/components/marketing/tabbed-showcase"
import type { TabItem } from "@/components/marketing/tabbed-showcase"

export interface ProductSectionData {
  name: string
  subtitle: string
  tabs: TabItem[]
}

export function ProductSection({ name, subtitle, tabs }: ProductSectionData) {
  return (
    <section id={name.toLowerCase().replace(/\s+/g, "-")} className="w-full bg-background scroll-mt-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-8 py-20 md:grid-cols-[2fr_1fr] md:items-start md:gap-16 lg:px-20 lg:py-28">

        {/* Right — Tabbed showcase */}
        <TabbedShowcase tabs={tabs} />
        {/* Left — Heading */}
        <div className="order-first md:order-last flex flex-col items-start pt-4 md:sticky md:top-24">
          <h2 className="text-[2.75rem] !font-normal leading-[1.08] tracking-tight lg:text-[3.5rem]">
            <span className="text-foreground">{name}</span>
            <br />
            <span className="text-foreground/40">{subtitle}</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
