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
  title: "Disputes",
  description:
    "Resolve invoice disputes faster with structured cases, proof of delivery, team collaboration, and root-cause visibility.",
})

const features = [
  {
    label: "Resolution copilot",
    title: "Move every issue toward the right resolution",
    description:
      "Lunica turns messy invoice questions into guided resolution workflows. Triage the issue, route approvals, document the outcome, and keep cash moving with a complete audit trail.",
    details: [
      "Guided next steps for credit memos, approvals, write-offs, or customer confirmation",
      "Clear ownership and status for every open dispute",
      "Complete resolution history tied back to the invoice and customer account",
    ],
  },
  {
    label: "Proof of delivery upload",
    title: "Keep the evidence with the case",
    description:
      "Collect receipts, delivery photos, signatures, and supporting documents directly on the dispute so teams do not have to hunt through inboxes or shared drives.",
    details: [
      "Centralized upload area for delivery receipts, photos, and attachments",
      "Document requests that can be routed to customers, sales, or operations",
      "Evidence linked to the right invoice, customer, and resolution path",
    ],
  },
  {
    label: "Team collaboration",
    title: "Bring sales, operations, credit, and AR into one thread",
    description:
      "Disputes often stall because context lives across teams. Lunica gives everyone a shared workspace so updates, decisions, and handoffs stay visible.",
    details: [
      "Shared case threads with tagged owners and internal notes",
      "Role-based visibility for sales, operations, credit, and AR",
      "Automatic notifications when a teammate needs to review or respond",
    ],
  },
  {
    label: "Root-cause visibility",
    title: "Find the patterns behind recurring issues",
    description:
      "See which customers, products, invoice types, or operational gaps create the most disputes so your team can prevent repeat problems instead of resolving the same ones again.",
    details: [
      "Dispute categories by customer, invoice, team, and reason code",
      "Trend views that expose repeat drivers and process gaps",
      "Reporting that helps leaders reduce future deductions and delays",
    ],
  },
]

const stats = [
  { value: "45%", label: "Faster issue resolution" },
  { value: "2x", label: "More cases closed per rep" },
  { value: "60%", label: "Less time chasing evidence" },
  { value: "100%", label: "Audit trail coverage" },
]

export default function DisputesPage() {
  return (
    <main style={{ '--primary': '#7A5C6A', '--primary-hover': '#8A6C7A' } as React.CSSProperties}>
      <SubpageHero
        label="Disputes"
        heading={<>Resolve invoice issues before they delay&nbsp;cash</>}
        description={<>Structured dispute workflows for proof, collaboration, resolution, and prevention without the inbox chaos.</>}
        gradientColors={["#B08A9A", "#7A5C6A", "#4C3642"]}
      >
        <FlipButtonLink
          href="/contact"
          text="Book a demo"
          className="mt-8 px-5 py-2.5"
        />
      </SubpageHero>

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

      {features.map((feature, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={feature.label}
            className={`w-full ${isEven ? "bg-background" : ""}`}
            style={!isEven ? { background: "var(--surface-3)" } : undefined}
          >
            <div className={`mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 ${i === 0 ? "pt-20 pb-12 lg:pt-40 lg:pb-16" : "py-20 lg:py-40"}`}>
              <div className={`flex flex-col items-start justify-center ${!isEven ? "md:order-last" : ""}`}>
                <SectionLabel>{feature.label}</SectionLabel>

                <SectionHeading size="md">
                  {feature.title}
                </SectionHeading>

                <SectionDescription>
                  {feature.description}
                </SectionDescription>
              </div>

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

            {i === 0 && (
              <PageContainer className="pb-20 lg:pb-28">
                <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]">
                  <NoiseGradient colors={["#B08A9A", "#7A5C6A", "#4C3642"]} />
                  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
                    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[155px_1fr_250px] bg-[#fbfaf8] text-[#2f302d]">
                        <aside className="border-r border-black/[0.06] bg-white px-4 py-5">
                          <div className="flex items-center gap-2">
                            <div className="grid h-7 w-7 place-items-center rounded bg-[#7A5C6A] text-[10px] font-semibold text-white">
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
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="flex h-7 items-center rounded bg-[#f5edf2] px-3">
                              <div className="h-1.5 w-16 rounded bg-[#7A5C6A]" />
                            </div>
                          </div>

                          <div className="mt-8 space-y-2">
                            <div className="h-2 w-14 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>
                        </aside>

                        <div className="min-w-0 px-8 py-6">
                          <div className="flex items-start justify-between gap-8">
                            <div>
                              <div className="h-2 w-28 rounded bg-black/[0.16]" />
                              <div className="mt-5 flex items-center gap-2">
                                <p className="text-sm font-semibold tracking-tight">Short payment on invoice #38816</p>
                                <span className="rounded border border-[#e8d6ae] bg-[#fff8e7] px-2 py-1 text-[10px] text-[#906c12]">Medium</span>
                              </div>
                              <p className="mt-2 text-xs text-black/45">Meridian Supply Co</p>
                              <div className="mt-2 h-2 w-52 rounded bg-black/[0.08]" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-16 items-center justify-center rounded-full border border-[#f0d2dd] bg-[#fff7fa]">
                                <div className="h-1.5 w-8 rounded bg-[#7A5C6A]/35" />
                              </div>
                              <div className="flex h-7 w-20 items-center justify-center rounded-full border border-[#f0d2dd] bg-[#fff7fa]">
                                <div className="h-1.5 w-11 rounded bg-[#7A5C6A]/35" />
                              </div>
                              <div className="h-7 w-20 rounded-full bg-[#7A5C6A]" />
                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="text-sm font-semibold tracking-tight">Invoice Detail</p>
                            <div className="mt-3 flex h-9 items-center rounded-md border border-black/[0.07] bg-white px-3">
                              <span className="rounded border border-black/[0.08] bg-[#fbfaf8] px-2 py-1 text-[10px] text-black/45">38816</span>
                              <div className="ml-3 h-2 w-28 rounded bg-black/[0.12]" />
                              <p className="ml-auto text-xs font-medium">$185,832.00</p>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="text-sm font-semibold tracking-tight">Conversation</p>
                            <div className="mt-3 overflow-hidden rounded-md border border-black/[0.07] bg-white">
                              <div className="border-b border-black/[0.05] px-5 py-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="grid h-7 w-7 place-items-center rounded-full border border-[#e8d6ae] bg-[#fff8e7] text-[10px] text-[#906c12]">!</span>
                                    <div>
                                      <p className="text-xs font-medium">Meridian Supply Co</p>
                                      <p className="mt-2 text-sm font-medium">Items never arrived</p>
                                      <div className="mt-2 h-1.5 w-28 rounded bg-black/[0.07]" />
                                    </div>
                                  </div>
                                  <span className="text-[10px] text-black/35">1 week ago</span>
                                </div>
                              </div>
                              <div className="border-b border-black/[0.05] px-5 py-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="grid h-7 w-7 place-items-center rounded-full border border-black/[0.08] bg-[#fbfaf8] text-[10px] text-black/35">T</span>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <p className="text-xs font-medium">Avery Stone</p>
                                        <span className="rounded bg-black/[0.04] px-1.5 py-0.5 text-[9px] text-black/35">Team</span>
                                      </div>
                                      <p className="mt-2 text-sm font-medium">Requesting proof of delivery and exception notes.</p>
                                    </div>
                                  </div>
                                  <span className="text-[10px] text-black/35">4 days ago</span>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="h-12 rounded-md border border-black/[0.07] bg-[#fbfaf8]" />
                                <div className="mt-3 flex items-center justify-between">
                                  <div className="h-7 w-20 rounded-md border border-black/[0.07] bg-white" />
                                  <div className="h-7 w-16 rounded-md bg-[#7A5C6A]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <aside className="border-l border-black/[0.06] bg-white px-5 py-6">
                          <div className="rounded-md border border-black/[0.07] p-4">
                            <p className="text-sm font-semibold tracking-tight">Activity</p>
                            <div className="mt-4 flex items-start gap-3">
                              <span className="mt-1 h-2 w-2 rounded-full bg-[#7A5C6A]" />
                              <div>
                                <p className="text-xs font-medium">Alert created</p>
                                <div className="mt-2 h-1.5 w-24 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-[10px] text-black/35">1 week ago</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 rounded-md border border-black/[0.07] p-4">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold tracking-tight">Customer profile</p>
                              <span className="text-xs text-[#7A5C6A]">View</span>
                            </div>
                            <div className="mt-4 space-y-3">
                              <div>
                                <div className="h-1.5 w-16 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-xs font-medium">$1.2M open</p>
                              </div>
                              <div>
                                <div className="h-1.5 w-20 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-xs font-medium">6 active cases</p>
                              </div>
                              <div>
                                <div className="h-1.5 w-14 rounded bg-black/[0.08]" />
                                <p className="mt-2 text-xs font-medium">Net 45</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 rounded-md border border-black/[0.07] p-4">
                            <p className="text-sm font-semibold tracking-tight">Resolution path</p>
                            <div className="mt-4 space-y-3">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#7A5C6A]" />
                                <div className="h-2 w-28 rounded bg-black/[0.12]" />
                              </div>
                              <div className="h-2 w-36 rounded bg-black/[0.08]" />
                              <div className="h-2 w-24 rounded bg-black/[0.08]" />
                            </div>
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

      <TintedSection watermark>
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <SectionLabel className="block">How it works</SectionLabel>

              <SectionHeading size="lg">
                Three steps to cleaner dispute&nbsp;resolution
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects disputes to invoices, customers, and teams so every issue has context, ownership, and a path forward.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Capture the issue",
                description:
                  "Create structured cases from customer questions, short-pays, proof requests, or internal exceptions.",
              },
              {
                step: "02",
                title: "Route the work",
                description:
                  "Assign sales, operations, credit, or AR with the invoice context and evidence they need to respond.",
              },
              {
                step: "03",
                title: "Resolve and prevent",
                description:
                  "Close the case with an audit trail, then use root-cause reporting to stop repeat issues.",
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

      <CtaSection
        label="Get started"
        heading={<>Resolve disputes before they slow down&nbsp;cash.</>}
        description={<>See how Lunica Disputes helps your team close issues faster, preserve customer trust, and keep receivables moving.</>}
        gradientColors={["#c7a5b4", "#B08A9A", "#8a6475"]}
      />

      <Footer />
    </main>
  )
}
