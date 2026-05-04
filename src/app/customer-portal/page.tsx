import type { Metadata } from "next"
import { SubpageHero } from "@/components/marketing/subpage-hero"
import { CustomerPortalMock } from "@/components/marketing/customer-portal-mock"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/layout/footer"
import { constructMetadata } from "@/lib/metadata"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { FlipButtonLink } from "@/components/ui/button-link"
import { TintedSection } from "@/components/ui/tinted-section"

export const metadata: Metadata = constructMetadata({
  title: "Customer Portal",
  description:
    "Give customers a portal that shows exactly what they owe, supports pay-by-job workflows, and lets your team control card fee rules.",
})

const features = [
  {
    label: "Amount due visibility",
    title: "Show customers what they actually owe",
    description:
      "Give customers a clear, always-current view of their balance before they pay, including open invoices, credits, finance charges, and adjustments.",
    details: [
      "Net due balance calculated from open invoices, credits, and adjustments",
      "Invoice-level detail so customers understand where the number comes from",
      "Self-service payment flow that starts from the exact amount owed",
    ],
  },
  {
    label: "Custom card fee rules",
    title: "Use compliant card fee rules to protect margin",
    description:
      "Configure card convenience fees that follow your policy and apply dynamically based on customer, invoice size, payment method, or past-due status.",
    details: [
      "Custom triggers for past-due balances, large invoice payments, customers, and payment methods",
      "Transparent checkout previews that show fee treatment before payment is submitted",
      "Controls to absorb, waive, or pass through fees without custom development",
    ],
  },
  {
    label: "Pay by job",
    title: "Let customers choose what work they are paying for",
    description:
      "For project-based and job-based customers, make it easy to review balances by job, select the right work, and submit payments that reconcile cleanly.",
    details: [
      "Balances grouped by job, site, route, location, or project",
      "Selectable job-level payment flows with clear selected totals",
      "Cleaner reconciliation because payments map to the work customers intended to pay",
    ],
  },
]

export default function CustomerPortalPage() {
  return (
    <main style={{ '--primary': '#5F746E', '--primary-hover': '#6F847E' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        heading={<>Give customers a clearer way to&nbsp;pay</>}
        description={<>A branded portal where customers see exactly what they owe, pay by job, and move through checkout with card fee rules your team controls.</>}
        gradientColors={["#9AAEA8", "#5F746E", "#405650"]}
        heightClass="md:h-[72dvh] md:min-h-[560px]"
      >
        <FlipButtonLink
          href="/contact"
          text="Book a demo"
          className="mt-8 px-5 py-2.5"
        />
      </SubpageHero>

      {/* Feature deep-dives */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={feature.label}
            className={`w-full ${isEven ? "bg-background" : ""}`}
            style={!isEven ? { background: "var(--surface-3)" } : undefined}
          >
            <div className={`mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 ${i === 0 ? "pt-20 pb-12 lg:pt-40 lg:pb-16" : "py-20 lg:py-40"}`}>
              {/* Copy */}
              <div className={`flex flex-col items-start justify-center ${!isEven ? "md:order-last" : ""}`}>
                <SectionHeading size="md">
                  {feature.title}
                </SectionHeading>

                <SectionDescription>
                  {feature.description}
                </SectionDescription>
              </div>

              {/* Details grid */}
              <div className="grid gap-0.5 self-center overflow-hidden rounded-lg mt-auto">
                {feature.details.map((detail) => (
                  <div
                    key={detail}
                    className={`flex items-center px-6 py-8 ${
                      isEven ? "bg-surface-1" : "bg-surface-2"
                    }`}
                  >
                    <p className="text-base !leading-tight text-foreground">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* UI mockup block — shown under the first feature */}
            {i === 0 && <CustomerPortalMock />}
          </section>
        )
      })}

      <section className="w-full bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-[7fr_4fr] md:gap-20 lg:px-20 lg:py-32">
          <div className="flex flex-col justify-center md:order-last">
            <SectionHeading size="md">
              Put your sales team front and center
            </SectionHeading>

            <SectionDescription>
              Give every customer a portal experience that feels connected to the salesperson they already know. Show their rep’s face, direct contact details, expertise, and account context right where customers review invoices and pay.
            </SectionDescription>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-surface-1 p-5">
            <div className="rounded-xl bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-start gap-5">
                <div className="h-24 w-24 shrink-0 rounded-full bg-[linear-gradient(135deg,#d7c7b6,#5F746E)] p-1">
                  <div
                    className="h-full w-full rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1686063165043-45243dab25ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzaG90fGVufDB8fDB8fHww')",
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-foreground">Miles Chen</p>
                      <p className="mt-1 text-sm font-medium text-[#5F746E]">Senior account executive</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {[
                      ["Direct line", "(415) 555-0184"],
                      ["Email", "miles@ridgeline.co"],
                      ["Territory", "West region"],
                      ["Expertise", "Terms, jobs, heavy materials"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg bg-[#fbfaf8] px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">{label}</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 border-t border-black/[0.06] pt-6 md:grid-cols-3">
                {[
                  ["Account guidance", "Questions route to the right rep with customer context attached."],
                  ["Sales staff support", "Assign portal profiles across your full sales team."],
                  ["Payment context", "Keep relationship details visible beside invoices and payments."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-lg border border-black/[0.06] p-4">
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="mt-2 text-xs !leading-tight text-foreground/45">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <TintedSection watermark>
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <SectionLabel className="block">How it works</SectionLabel>

              <SectionHeading size="lg">
                Three steps to a customer portal built around payment&nbsp;clarity
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects to your existing systems, applies your payment rules, and gives customers a portal that explains what they owe before they pay.
                No unclear balances. No one-size-fits-all checkout.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Sync balances and open work",
                description:
                  "Sync customers, invoices, credits, jobs, and open balances from your ERP or accounting platform.",
              },
              {
                step: "02",
                title: "Configure payment rules",
                description:
                  "Set card fee handling, ACH options, customer-specific exceptions, branding, and access rules.",
              },
              {
                step: "03",
                title: "Let customers pay clearly",
                description:
                  "Customers log in, see exactly what they owe, select invoices or jobs, and pay through a flow your team controls.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col bg-surface-2 px-6 py-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                  Step {item.step}
                </span>
                <p className="mt-3 text-lg font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm !leading-tight text-foreground/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
      </TintedSection>

      {/* CTA */}
      <CtaSection
        label="Get started"
        heading={<>Give customers a better way to understand and pay what they&nbsp;owe.</>}
        description={<>See how Lunica Customer Portal can support exact-balance payments, pay-by-job workflows, and configurable card fee rules.</>}
        gradientColors={["#c0cec9", "#9AAEA8", "#78908A"]}
      />

      <Footer />
    </main>
  )
}
