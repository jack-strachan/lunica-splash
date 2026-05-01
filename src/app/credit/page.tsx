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
  title: "Credit",
  description:
    "Streamline credit applications, automate risk assessment, and approve customers faster with Lunica Credit.",
})

const features = [
  {
    label: "Digital credit applications",
    title: "Replace PDFs and email chains with a modern\u00a0experience",
    description:
      "Your customers shouldn't have to download a form, fill it out by hand, and email it back. Lunica gives them a clean, structured application in your brand they can complete in minutes.",
    details: [
      "Branded, mobile-friendly application forms",
      "Configurable fields by customer type or credit tier",
      "Automatic data validation to reduce back-and-forth",
    ],
  },
  {
    label: "Faster underwriting",
    title: "Get from application to decision in\u00a0hours",
    description:
      "Lunica collects the right information upfront and organizes it for your team so credit analysts spend less time chasing documents and more time making decisions.",
    details: [
      "Structured data collection with required fields and attachments",
      "Centralized application dashboard with status tracking",
      "Automatic routing to the right reviewer based on amount or segment",
    ],
  },
  {
    label: "Automated risk assessment",
    title: "Assess risk clearly before every\u00a0decision",
    description:
      "Lunica combines internal data, third-party signals, and configurable rules to surface a clear risk picture for every applicant so your team can approve with confidence and flag concerns early.",
    details: [
      "Rule-based scoring with configurable risk thresholds",
      "Integration with credit bureaus and third-party data sources",
      "AI-powered signals that flag anomalies and patterns",
    ],
  },
  {
    label: "Clear approval workflows",
    title: "Standardize how your team reviews and\u00a0approves",
    description:
      "No more ad-hoc approvals over email or Slack. Lunica provides a structured workflow for every credit decision with full audit trails, approval chains, and configurable authority levels.",
    details: [
      "Multi-step approval workflows with role-based permissions",
      "Full decision history and audit trail for compliance",
      "Configurable credit limits and terms by customer segment",
    ],
  },
]

const stats = [
  { value: "80%", label: "Faster application processing" },
  { value: "5x", label: "More applications reviewed per analyst" },
  { value: "50%", label: "Reduction in manual data entry" },
  { value: "95%", label: "Application completion rate" },
]

export default function CreditPage() {
  return (
    <main style={{ '--primary': '#7D6E5C', '--primary-hover': '#8D7E6C' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="Credit"
        heading={<>Approve customers faster with less&nbsp;risk</>}
        description={<>Digital credit applications, automated decisioning, and full visibility into your pipeline. Simpler and more affordable than legacy&nbsp;tools.</>}
        gradientColors={["#A0937D", "#7D6E5C", "#5C5040"]}
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
                  <NoiseGradient colors={["#A0937D", "#7D6E5C", "#5C5040"]} />
                  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
                    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      </div>
                      {/* Skeleton content */}
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[155px_250px_1fr] bg-[#fbfaf8] text-[#2f302d]">
                        <aside className="border-r border-black/[0.06] bg-white px-4 py-5">
                          <div className="flex items-center gap-2">
                            <div className="grid h-7 w-7 place-items-center rounded bg-[#7D6E5C] text-[10px] font-semibold text-white">
                              L
                            </div>
                            <div className="h-3 w-20 rounded bg-black/[0.75]" />
                          </div>

                          <div className="mt-9 space-y-2">
                            <div className="h-2 w-14 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>

                          <div className="mt-8 space-y-2">
                            <div className="h-2 w-16 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="flex h-7 items-center rounded bg-[#f3eee8] px-3">
                              <div className="h-1.5 w-14 rounded bg-[#7D6E5C]" />
                            </div>
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>

                          <div className="mt-8 space-y-2">
                            <div className="h-2 w-14 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>
                        </aside>

                        <div className="border-r border-black/[0.06] bg-white px-5 py-6">
                          <div>
                            <p className="text-sm font-semibold tracking-tight">Credit Overview</p>
                            <div className="mt-2 h-2 w-32 rounded bg-black/[0.08]" />
                          </div>

                          <div className="mt-6 flex gap-5 border-b border-black/[0.06] text-[10px] font-medium">
                            <span className="border-b border-[#7D6E5C] pb-3 text-[#7D6E5C]">Action Items</span>
                            <span className="pb-3 text-black/35">Credit Policy</span>
                          </div>

                          <div className="mt-4 flex items-center gap-4 text-[10px] text-black/40">
                            <span className="text-[#7D6E5C]">All</span>
                            <span>Open</span>
                            <span>Starred</span>
                          </div>

                          <div className="mt-4 flex h-8 items-center rounded-md border border-black/[0.07] bg-[#fbfaf8] px-3">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              className="h-3 w-3 text-black/30"
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

                          <div className="mt-4 space-y-2">
                            {[
                              ["Nora Ellison", "112.8% util", "High"],
                              ["Marcus Hale", "121.4% util", "High"],
                              ["Priya Bennett", "117.6% util", "Medium"],
                              ["Caleb Monroe", "108.9% util", "Medium"],
                              ["Maya Brooks", "104.2% util", "Low"],
                            ].map((item, index) => (
                              <div
                                key={item[0]}
                                className={`rounded-md border px-3 py-3 ${
                                  index === 0
                                    ? "border-[#d8cfc3] bg-[#faf7f2]"
                                    : "border-black/[0.06] bg-white"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`h-1.5 w-1.5 rounded-full ${
                                    item[2] === "High" ? "bg-[#d84d4d]" : "bg-[#e0aa42]"
                                  }`} />
                                  <p className="text-xs font-medium">{item[0]}</p>
                                </div>
                                <div className="mt-2 h-1.5 w-36 rounded bg-black/[0.07]" />
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-[10px] text-black/40">{item[1]}</span>
                                  <span className="text-[10px] text-black/30">1w</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="min-w-0 px-6 py-6">
                          <div className="flex items-start justify-between gap-8">
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-semibold tracking-tight">Credit Review: Nora Ellison</p>
                                <span className="rounded border border-[#e8d6ae] bg-[#fff8e7] px-2 py-1 text-[10px] text-[#906c12]">High</span>
                              </div>
                              <div className="mt-2 h-2 w-72 rounded bg-black/[0.08]" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-20 items-center justify-center rounded-full border border-black/[0.07] bg-white">
                                <div className="h-1.5 w-9 rounded bg-black/[0.18]" />
                              </div>
                              <div className="flex h-7 w-20 items-center justify-center rounded-full border border-black/[0.07] bg-white">
                                <div className="h-1.5 w-11 rounded bg-black/[0.18]" />
                              </div>
                              <div className="h-7 w-20 rounded-full bg-[#7D6E5C]" />
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-5 gap-3">
                            {[
                              ["Avg Days to Pay", "118 days", "Alert"],
                              ["On-Time Payment", "1.2%", "Alert"],
                              ["Past Due Balance", "$0.00", "Normal"],
                              ["Sales Volume", "$0.00", "Normal"],
                              ["Credit Utilization", "112.8%", "Normal"],
                            ].map((item) => (
                              <div key={item[0]} className="rounded-md border border-black/[0.06] bg-white p-4">
                                <p className="text-[10px] font-medium text-black/35">{item[0]}</p>
                                <p className="mt-2 text-base font-semibold">{item[1]}</p>
                                <span className={`mt-3 inline-flex rounded border px-2 py-1 text-[10px] ${
                                  item[2] === "Alert"
                                    ? "border-[#e8d6ae] bg-[#fff8e7] text-[#906c12]"
                                    : "border-[#cde5d9] bg-[#f0faf5] text-[#4a7a5c]"
                                }`}>
                                  {item[2]}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/35">Triggered factors</p>
                            <div className="mt-2 flex gap-2">
                              {["Payment rate drop", "Avg days increase", "Credit limit exceeded"].map((item) => (
                                <span key={item} className="rounded border border-[#e8d6ae] bg-[#fff8e7] px-2 py-1 text-[10px] font-medium uppercase text-[#906c12]">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="rounded-md border border-black/[0.06] bg-white p-3">
                                <p className="text-[10px] font-medium text-black/35">Total Past Due</p>
                                <p className="mt-2 text-base font-semibold text-[#d84d4d]">$412,908.64</p>
                                <div className="mt-2 h-1.5 w-20 rounded bg-[#ffdada]" />
                              </div>
                              <div className="rounded-md border border-black/[0.06] bg-white p-3">
                                <p className="text-[10px] font-medium text-black/35">Outstanding Balance</p>
                                <p className="mt-2 text-base font-semibold">$558,240.19</p>
                                <div className="mt-2 h-1.5 w-20 rounded bg-black/[0.08]" />
                              </div>
                              <div className="rounded-md border border-black/[0.06] bg-white p-3">
                                <p className="text-[10px] font-medium text-black/35">Last Payment</p>
                                <p className="mt-2 text-base font-semibold">$1,842.50</p>
                                <div className="mt-2 h-1.5 w-16 rounded bg-black/[0.08]" />
                              </div>
                              <div className="rounded-md border border-black/[0.06] bg-white p-3">
                                <p className="text-[10px] font-medium text-black/35">Collection Rate</p>
                                <p className="mt-2 text-base font-semibold">91%</p>
                                <div className="mt-2 h-1.5 w-16 rounded bg-black/[0.08]" />
                              </div>
                            </div>
                            <div className="overflow-hidden rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-sm font-semibold tracking-tight">Monthly Invoiced</p>
                              <div className="mt-0 flex h-24 items-end gap-3 px-3">
                                {[78, 51, 56, 63, 60, 53, 39, 58, 47, 28].map((height, index) => (
                                  <div
                                    key={index}
                                    className="w-full rounded-t bg-[#7D6E5C]"
                                    style={{ height: `${height}%` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="overflow-hidden rounded-md border border-black/[0.06] bg-white p-4">
                              <p className="text-sm font-semibold tracking-tight">Days Sales Outstanding</p>
                              <div className="mt-2 h-2 w-24 rounded bg-black/[0.08]" />
                              <svg viewBox="0 0 320 116" className="mt-3 h-28 w-full text-[#7D6E5C]" aria-hidden="true">
                                <path d="M0 104H320M0 76H320M0 48H320M0 20H320" stroke="currentColor" strokeOpacity=".08" />
                                <path d="M4 104C80 104 116 102 152 98C204 91 244 82 272 64C296 48 308 28 318 6V104H4Z" fill="currentColor" fillOpacity=".08" />
                                <path d="M4 104C80 104 116 102 152 98C204 91 244 82 272 64C296 48 308 28 318 6" fill="none" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        </div>
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
                Three steps to smarter&nbsp;credit
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
                title: "Set up your application",
                description:
                  "Configure your credit application fields, required documents, and approval thresholds. Lunica adapts to your existing credit policy.",
              },
              {
                step: "02",
                title: "Define your rules",
                description:
                  "Set scoring criteria, risk thresholds, and routing rules. Customize by customer type, credit amount, or industry segment.",
              },
              {
                step: "03",
                title: "Approve on autopilot",
                description:
                  "Lunica processes applications, scores risk, and routes decisions so your team focuses on exceptions, not paperwork.",
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
        heading={<>Stop losing time on manual credit&nbsp;reviews.</>}
        description={<>See how Lunica Credit can help your team approve faster, reduce risk, and eliminate the paperwork slowing you&nbsp;down.</>}
        gradientColors={["#c4b5a3", "#A0937D", "#8a7d6a"]}
      />

      <Footer />
    </main>
  )
}
