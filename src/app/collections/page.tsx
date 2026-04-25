import type { Metadata } from "next"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { SubpageHero } from "@/components/marketing/subpage-hero"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/layout/footer"
import { constructMetadata } from "@/lib/metadata"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"
import { FlipButtonLink } from "@/components/ui/button-link"
import { TintedSection } from "@/components/ui/tinted-section"

export const metadata: Metadata = constructMetadata({
  title: "Collections",
  description:
    "Automate follow-ups, confirm invoices, escalate risk, and get cash in faster with Lunica Collections.",
})

const features = [
  {
    label: "Always-on monitoring",
    title: "Know where every dollar stands — in\u00a0real\u00a0time",
    description:
      "Lunica continuously tracks open receivables across your entire book. As invoices age, payments land, or behavior shifts, the system flags what matters and triggers the right next action so nothing slips through the cracks.",
    details: [
      "Live receivables dashboard with aging, risk, and status views",
      "Automatic alerts when invoices become at-risk or overdue",
      "Behavior-based signals that surface problems before they escalate",
    ],
  },
  {
    label: "Proactive follow-up",
    title: "Reach out before invoices go\u00a0overdue",
    description:
      "Most teams only chase payments after they're late. Lunica flips that by automatically sending reminders, confirmations, and nudges before the due date, based on each customer's history and preferences.",
    details: [
      "Scheduled outreach sequences triggered by invoice age and terms",
      "Multi-channel delivery: email, SMS, and portal notifications",
      "Dynamic timing based on customer payment behavior",
    ],
  },
  {
    label: "Invoice confirmation",
    title: "Eliminate surprises at the due\u00a0date",
    description:
      "Late payments often start with a simple problem: the customer never received the invoice, or the amount was wrong. Lunica confirms receipt and accuracy early, so you're not fighting avoidable delays weeks later.",
    details: [
      "Automated delivery confirmation with read receipts",
      "Discrepancy detection that flags mismatches before they become disputes",
      "Clear audit trail for every invoice touchpoint",
    ],
  },
  {
    label: "Smart escalation",
    title: "Route the right accounts to the right\u00a0people",
    description:
      "Not every overdue invoice needs the same response. Lunica evaluates risk, amount, and customer history to determine the right escalation path, whether that's an automated reminder, a team assignment, or an executive escalation.",
    details: [
      "Rule-based routing by amount, days past due, and customer segment",
      "Automatic ownership assignment with full context handoff",
      "Escalation timelines that adapt to your internal SLAs",
    ],
  },
]

const stats = [
  { value: "40%", label: "Faster collection cycles" },
  { value: "3x", label: "More accounts managed per rep" },
  { value: "60%", label: "Reduction in manual follow-ups" },
  { value: "90%", label: "Invoice confirmation rate" },
]

export default function CollectionsPage() {
  return (
    <main>
      {/* Hero */}
      <SubpageHero
        label="Collections"
        heading={<>Get cash in faster with less&nbsp;effort</>}
        description={<>A modern collections platform that&rsquo;s simpler to run, more effective, and costs less than what you&rsquo;re using&nbsp;today.</>}
        gradientColors={["#88b4a0", "#4a7a5c", "#3a6248"]}
      >
        <FlipButtonLink
          href="/contact"
          text="Book a demo"
          className="mt-8 px-5 py-2.5"
        />
      </SubpageHero>

      {/* Stats */}
      <section className="w-full bg-background">
        <PageContainer className="pt-8 pb-20 lg:pt-12 lg:pb-28">
          <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center bg-[#EBE7E3] px-6 py-10"
              >
                <p className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Feature deep-dives */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={feature.label}
            className={`w-full ${isEven ? "bg-background" : ""}`}
            style={!isEven ? { background: "#EDE7DF" } : undefined}
          >
            <div className={`mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 ${i === 0 ? "pt-20 pb-12 lg:pt-40 lg:pb-16" : "py-20 lg:py-40"}`}>
              {/* Copy */}
              <div className={`flex flex-col items-start justify-center ${!isEven ? "md:order-last" : ""}`}>
                <SectionLabel>{feature.label}</SectionLabel>

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
                      isEven ? "bg-[#EBE7E3]" : "bg-[#E3D7CD]"
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
            {i === 0 && (
              <PageContainer className="pb-20 lg:pb-28">
                <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]">
                  <NoiseGradient colors={["#88b4a0", "#4a7a5c", "#3a6248"]} />
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:p-14">
                    <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-2xl">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      </div>
                      {/* Skeleton content */}
                      <div className="p-6">
                        <div className="h-4 w-1/3 rounded bg-black/[0.06]" />
                        <div className="mt-4 h-3 w-full rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-5/6 rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-2/3 rounded bg-black/[0.04]" />
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          <div className="h-20 rounded bg-black/[0.04]" />
                          <div className="h-20 rounded bg-black/[0.04]" />
                          <div className="h-20 rounded bg-black/[0.04]" />
                        </div>
                        <div className="mt-6 h-3 w-full rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-4/5 rounded bg-black/[0.04]" />
                      </div>
                    </div>
                  </div>
                </div>
              </PageContainer>
            )}
          </section>
        )
      })}

      {/* How it works */}
      <TintedSection watermark>
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <SectionLabel className="block">How it works</SectionLabel>

              <SectionHeading size="lg">
                Three steps to faster&nbsp;collections
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica plugs into your existing systems and starts working immediately.
                No months-long implementation. No ripping out what you&nbsp;have.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your data",
                description:
                  "Link your ERP, accounting system, and customer records. Lunica syncs invoices, terms, and payment history automatically.",
              },
              {
                step: "02",
                title: "Set your rules",
                description:
                  "Define when to follow up, how to escalate, and what triggers action. Customize by customer segment, invoice size, or risk level.",
              },
              {
                step: "03",
                title: "Collect on autopilot",
                description:
                  "Lunica runs your collections process 24/7, sending reminders, confirming invoices, and routing exceptions to the right people.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col bg-[#E3D7CD] px-6 py-10">
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
        heading={<>Stop chasing payments. Start&nbsp;collecting.</>}
        description={<>See how Lunica Collections can help your team recover cash faster, reduce risk, and eliminate the manual work holding you&nbsp;back.</>}
      />

      <Footer />
    </main>
  )
}
