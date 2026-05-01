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
    <main style={{ '--primary': '#4a7a5c', '--primary-hover': '#5a8a6c' } as React.CSSProperties}>
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
                className="flex flex-col justify-center bg-surface-1 px-6 py-10"
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
            style={!isEven ? { background: "var(--surface-3)" } : undefined}
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
            {i === 0 && (
              <PageContainer className="pb-20 lg:pb-28">
                <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]">
                  <NoiseGradient colors={["#88b4a0", "#4a7a5c", "#3a6248"]} />
                  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
                    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      </div>
                      {/* Skeleton content */}
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[150px_1fr_255px] bg-[#fbfaf8] text-[#2f302d]">
                        <aside className="border-r border-black/[0.06] bg-white px-4 py-5">
                          <div className="flex items-center gap-2">
                            <div className="grid h-7 w-7 place-items-center rounded bg-[#4a7a5c] text-[10px] font-semibold text-white">
                              L
                            </div>
                            <div className="h-3 w-20 rounded bg-black/[0.75]" />
                          </div>

                          <div className="mt-9 space-y-2">
                            <div className="h-2 w-14 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-[#eef5f1]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>

                          <div className="mt-9 space-y-2">
                            <div className="h-2 w-16 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>
                        </aside>

                        <div className="min-w-0 px-8 py-6">
                          <div className="flex items-start justify-between gap-8">
                            <div>
                              <p className="text-sm font-semibold tracking-tight">Collections Overview</p>
                              <div className="mt-2 h-2 w-44 rounded bg-black/[0.08]" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-48 items-center rounded-md border border-black/[0.07] bg-white px-2.5">
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  className="h-3 w-3 text-black/35"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.25 12.25a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM11 11l2.75 2.75"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <div className="ml-2 h-1.5 w-28 rounded bg-black/[0.07]" />
                              </div>
                              <div className="h-7 w-20 rounded-full border border-black/[0.07] bg-white" />
                              <div className="h-7 w-24 rounded-full bg-[#4a7a5c]" />
                            </div>
                          </div>

                          <div className="mt-7 grid grid-cols-4 gap-3">
                            <div className="rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">At risk</p>
                              <p className="mt-3 text-xl font-semibold">$2.9M</p>
                            </div>
                            <div className="rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">Overdue</p>
                              <p className="mt-3 text-xl font-semibold">45</p>
                            </div>
                            <div className="rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">Queued</p>
                              <p className="mt-3 text-xl font-semibold">12</p>
                            </div>
                            <div className="rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">Recovered</p>
                              <p className="mt-3 text-xl font-semibold">$706K</p>
                            </div>
                          </div>

                          <div className="mt-5 overflow-hidden rounded-md border border-black/[0.06] bg-white">
                            <div className="grid grid-cols-[1.4fr_0.55fr_0.55fr_0.7fr_0.7fr_0.8fr] border-b border-black/[0.06] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-black/35">
                              <span>Task</span>
                              <span>Priority</span>
                              <span>Age</span>
                              <span>Status</span>
                              <span>Risk</span>
                              <span>Outstanding</span>
                            </div>
                            {[
                              ["Nora Ellison", "P10", "66d", "In progress", "Critical", "$173,404"],
                              ["Marcus Hale", "P10", "491d", "In progress", "Critical", "$2,969,927"],
                              ["Priya Bennett", "P9", "860d", "Waiting", "High", "$706,793"],
                              ["Caleb Monroe", "P8", "180d", "On hold", "High", "$597,645"],
                            ].map((row) => (
                              <div key={row[0]} className="grid grid-cols-[1.4fr_0.55fr_0.55fr_0.7fr_0.7fr_0.8fr] items-center border-b border-black/[0.05] px-4 py-3 last:border-b-0">
                                <div>
                                  <p className="text-xs font-medium">{row[0]}</p>
                                  <div className="mt-1 h-1.5 w-24 rounded bg-black/[0.06]" />
                                </div>
                                <span className="w-fit rounded border border-[#ffd2d2] bg-[#fff3f3] px-2 py-1 text-[10px] text-[#c14242]">{row[1]}</span>
                                <p className="text-xs text-black/45">{row[2]}</p>
                                <span className="w-fit rounded border border-[#e8d6ae] bg-[#fff8e7] px-2 py-1 text-[10px] text-[#906c12]">{row[3]}</span>
                                <span className="w-fit rounded border border-[#ffd2d2] bg-[#fff3f3] px-2 py-1 text-[10px] text-[#c14242]">{row[4]}</span>
                                <p className="text-xs font-medium">{row[5]}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <aside className="border-l border-black/[0.06] bg-white px-5 py-6">
                          <div className="flex items-center justify-between">
                            <div className="h-2.5 w-14 rounded bg-black/[0.7]" />
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] font-medium text-black/55">Auto-Process</p>
                              <div className="relative h-6 w-11 rounded-full bg-[#4a7a5c]">
                                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 rounded-md border border-black/[0.07] p-4">
                            <div className="flex gap-2">
                              <span className="rounded border border-black/[0.08] px-2 py-1 text-[10px] text-black/55">P10</span>
                              <span className="rounded border border-[#ffd2d2] bg-[#fff3f3] px-2 py-1 text-[10px] text-[#c14242]">Critical</span>
                            </div>
                            <p className="mt-4 text-sm font-semibold leading-tight">Nora Ellison — $173,404 overdue</p>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              <div>
                                <div className="h-1.5 w-14 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-xs font-medium">66 days</p>
                              </div>
                              <div>
                                <div className="h-1.5 w-16 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-xs font-medium">0%</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 rounded-md border border-black/[0.07] p-4">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#4a7a5c]" />
                              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#4a7a5c]">Executed</p>
                            </div>
                            <div className="mt-3 rounded border border-black/[0.06] bg-[#fbfaf8] p-3">
                              <div className="flex items-center justify-between border-b border-black/[0.06] pb-2">
                                <div>
                                  <p className="text-[10px] font-medium text-[#4a7a5c]">Sent outreach</p>
                                  <div className="mt-1 h-1.5 w-24 rounded bg-black/[0.08]" />
                                </div>
                                <span className="rounded border border-black/[0.08] bg-white px-1.5 py-0.5 text-[9px] text-black/45">EMAIL</span>
                              </div>
                              <div className="mt-3 space-y-2">
                                <div className="h-2 w-32 rounded bg-black/[0.28]" />
                                <div className="h-2 rounded bg-black/[0.08]" />
                                <div className="h-2 rounded bg-black/[0.08]" />
                                <div className="h-2 w-4/5 rounded bg-black/[0.08]" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 space-y-3">
                            <div className="h-9 rounded-md border border-black/[0.07] bg-white" />
                            <div className="h-9 rounded-md border border-black/[0.07] bg-white" />
                            <div className="h-16 rounded-md bg-black/[0.035]" />
                          </div>
                        </aside>
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
        heading={<>Stop chasing payments. Start&nbsp;collecting.</>}
        description={<>See how Lunica Collections can help your team recover cash faster, reduce risk, and eliminate the manual work holding you&nbsp;back.</>}
        gradientColors={["#b8d4c6", "#88b4a0", "#6a9a84"]}
      />

      <Footer />
    </main>
  )
}
