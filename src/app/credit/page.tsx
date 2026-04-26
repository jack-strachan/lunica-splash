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
                  <NoiseGradient colors={["#A0937D", "#7D6E5C", "#5C5040"]} />
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
        heading={<>Stop losing time on manual credit&nbsp;reviews.</>}
        description={<>See how Lunica Credit can help your team approve faster, reduce risk, and eliminate the paperwork slowing you&nbsp;down.</>}
        gradientColors={["#c4b5a3", "#A0937D", "#8a7d6a"]}
      />

      <Footer />
    </main>
  )
}
