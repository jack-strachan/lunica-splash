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
    title: "Replace PDFs and email chains with a modern experience",
    description:
      "Your customers shouldn't have to download a form, fill it out by hand, and email it back. Lunica gives them a clean, structured application with your branding they can complete in minutes.",
    details: [
      "Branded, mobile-friendly application forms with configurable fields by customer type",
      "Automatic trade reference requests and collection",
      "Automated bank account verification built into the application flow",
    ],
  },
  {
    label: "Faster underwriting",
    title: "Get from application to decision in minutes, not days",
    description:
      "Lunica collects the right information upfront, verifies it automatically, and organizes every signal so credit analysts spend less time chasing documents and more time making decisions.",
    details: [
      "Instant credit recommendations based on your credit policy",
      "Automatic routing to the right reviewer based on amount, risk, or segment",
      "Centralized application status tracking from submission through decision",
    ],
  },
  {
    label: "Automated risk assessment",
    title: "Assess risk clearly before every decision",
    description:
      "Lunica combines internal data, third-party signals, and configurable rules to surface a clear risk picture for every applicant so your team can approve with confidence and flag concerns early.",
    details: [
      "Lien checks, litigation checks, EIN matching, and address verification",
      "Bank account signals, trade references, and bureau data in one review",
      "Policy-based risk scoring with configurable thresholds and exceptions",
    ],
  },
  {
    label: "Clear approval workflows",
    title: "Standardize how your team reviews and approves",
    description:
      "No more ad-hoc approvals over email. Lunica provides a structured workflow for every credit decision with full audit trails, approval chains, and configurable authority levels.",
    details: [
      "Multi-step approval workflows with role-based permissions",
      "Instant approvals when applications match your credit policy",
      "Full decision history, audit trail, credit limits, and terms by segment",
    ],
  },
]

export default function CreditPage() {
  return (
    <main style={{ '--primary': '#7D6E5C', '--primary-hover': '#8D7E6C' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        heading={<>Approve customers faster with less&nbsp;risk</>}
        description={<>Digital credit applications, automated decisioning, and full visibility into your pipeline. Simpler and more affordable than legacy&nbsp;tools.</>}
        gradientColors={["#A0937D", "#7D6E5C", "#5C5040"]}
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
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[1fr_320px] bg-[#fbfaf8] text-[#2f302d]">
                        <div className="min-w-0 px-8 py-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="grid h-10 w-10 place-items-center rounded bg-[#7D6E5C] text-sm font-semibold text-white">
                                A
                              </div>
                              <div>
                                <p className="text-sm font-semibold tracking-tight">Apex Materials</p>
                                <p className="mt-1 text-xs text-black/40">Commercial credit application</p>
                              </div>
                            </div>
                            <span className="rounded-full bg-[#f3eee8] px-3 py-1.5 text-xs font-medium text-[#7D6E5C]">70% complete</span>
                          </div>

                          <div className="mt-6 grid grid-cols-4 gap-2">
                            {["Business info", "Bank verification", "Trade references", "Review"].map((step, index) => (
                              <div key={step} className="rounded-md border border-black/[0.06] bg-white p-3">
                                <div className={`h-1.5 rounded ${index < 3 ? "bg-[#7D6E5C]" : "bg-black/[0.08]"}`} />
                                <p className="mt-2 text-[10px] font-medium text-black/50">{step}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 grid grid-cols-[1fr_0.8fr] gap-4">
                            <div className="rounded-md border border-black/[0.06] bg-white p-5">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold tracking-tight">Business information</p>
                                <span className="rounded border border-[#cde5d9] bg-[#f0faf5] px-2 py-1 text-[10px] font-medium text-[#4a7a5c]">Verified</span>
                              </div>
                              <div className="mt-4 grid grid-cols-2 gap-3">
                                {[
                                  ["Legal business name", "Summit Industrial Supply"],
                                  ["EIN match", "Matched"],
                                  ["Billing address", "Verified"],
                                  ["Requested limit", "$250,000"],
                                ].map(([label, value]) => (
                                  <div key={label} className="rounded-md bg-[#fbfaf8] p-3">
                                    <p className="text-[10px] font-medium text-black/35">{label}</p>
                                    <p className="mt-2 text-xs font-semibold">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-md border border-black/[0.06] bg-white p-5">
                              <p className="text-sm font-semibold tracking-tight">Bank verification</p>
                              <div className="mt-4 rounded-md bg-[#f3eee8] p-4">
                                <p className="text-xs font-semibold text-[#7D6E5C]">Operating account connected</p>
                                <p className="mt-2 text-[10px] text-black/45">Balance and ownership verified automatically.</p>
                              </div>
                              <div className="mt-4 space-y-2">
                                {["Account ownership", "Routing match", "Available balance"].map((item) => (
                                  <div key={item} className="flex items-center justify-between rounded-md bg-[#fbfaf8] px-3 py-2">
                                    <span className="text-[10px] font-medium text-black/45">{item}</span>
                                    <span className="text-[10px] font-semibold text-[#4a7a5c]">Passed</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 rounded-md border border-black/[0.06] bg-white p-5">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold tracking-tight">Trade references</p>
                              <span className="rounded border border-[#e8d6ae] bg-[#fff8e7] px-2 py-1 text-[10px] font-medium text-[#906c12]">2 of 3 returned</span>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {[
                                ["Northstar Supply", "Returned"],
                                ["Beacon Contractors", "Returned"],
                                ["Harbor Steel", "Requested"],
                              ].map(([company, status]) => (
                                <div key={company} className="rounded-md bg-[#fbfaf8] p-3">
                                  <p className="text-xs font-semibold">{company}</p>
                                  <p className="mt-2 text-[10px] text-black/45">{status}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <aside className="border-l border-black/[0.06] bg-white px-5 py-6">
                          <p className="text-sm font-semibold tracking-tight">Policy preview</p>
                          <div className="mt-4 rounded-md bg-[#f3eee8] p-4">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#7D6E5C]">Recommended</p>
                            <p className="mt-2 text-2xl font-semibold">$175,000</p>
                            <p className="mt-1 text-[10px] text-black/45">Net 30 credit line</p>
                          </div>

                          <div className="mt-4 space-y-2">
                            {[
                              ["Lien check", "Clear"],
                              ["Litigation", "No match"],
                              ["EIN", "Matched"],
                              ["Address", "Verified"],
                            ].map(([label, value]) => (
                              <div key={label} className="flex items-center justify-between rounded-md border border-black/[0.06] px-3 py-2.5">
                                <span className="text-[10px] font-medium text-black/45">{label}</span>
                                <span className="text-[10px] font-semibold text-[#4a7a5c]">{value}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 rounded-md border border-black/[0.06] p-4">
                            <p className="text-xs font-semibold">Ready for review</p>
                            <p className="mt-2 text-[10px] leading-tight text-black/45">Application, bank data, trade references, and policy checks are packaged for the credit team.</p>
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
      <TintedSection watermark watermarkClassName="right-8 top-8 translate-x-0 translate-y-0">
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
                  "Configure your branded application, required documents, trade references, and bank verification requirements.",
              },
              {
                step: "02",
                title: "Apply your credit policy",
                description:
                  "Set scoring criteria, risk thresholds, instant credit rules, and routing by customer type, credit amount, or segment.",
              },
              {
                step: "03",
                title: "Review clear recommendations",
                description:
                  "Lunica packages verification results, risk checks, and policy-based recommendations so your team can make faster, controlled decisions.",
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
