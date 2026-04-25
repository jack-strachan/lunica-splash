import { TabbedShowcase } from "@/components/marketing/tabbed-showcase"
import type { TabItem } from "@/components/marketing/tabbed-showcase"

const collectionsTabs: TabItem[] = [
  {
    title: "Proactive\nfollow-up",
    description:
      "Automatically reach out before invoices go overdue, so your team stays ahead instead of reacting late.",
  },
  {
    title: "Invoice\nconfirmation",
    description:
      "Verify that every invoice is received, accurate, and acknowledged — before the due date arrives.",
  },
  {
    title: "Smart\nescalation",
    description:
      "Route overdue accounts through the right escalation path based on risk, amount, and customer history.",
  },
  {
    title: "Always-on\nmonitoring",
    description:
      "Continuously track payment behavior, flag anomalies, and surface accounts that need attention.",
  },
]

export function CollectionsSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-8 py-20 md:grid-cols-[1fr_2fr] md:items-start md:gap-16 lg:px-20 lg:py-28">
        {/* Left — Heading */}
        <div className="flex flex-col items-start pt-4">
          <h2 className="text-[2.75rem] !font-normal leading-[1.08] tracking-tight lg:text-[3.5rem]">
            <span className="text-foreground">Collections</span>
            <br />
            <span className="text-foreground/40">that gets cash in faster</span>
          </h2>
        </div>

        {/* Right — Tabbed showcase */}
        <TabbedShowcase tabs={collectionsTabs} />
      </div>
    </section>
  )
}
