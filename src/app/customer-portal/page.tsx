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
  title: "Customer Portal",
  description:
    "Give customers a unified hub to manage their account, view documents, track disputes, and communicate with your team.",
})

const features = [
  {
    label: "Unified account hub",
    title: "One place for everything your customers\u00a0need",
    description:
      "Stop scattering information across emails, spreadsheets, and phone calls. The customer portal consolidates invoices, statements, credit terms, and account details into a single, always-current view.",
    details: [
      "Live account summary with balance, credit limit, and payment history",
      "Consolidated view of invoices, credits, and open items",
      "Secure, role-based access for multiple contacts per account",
    ],
  },
  {
    label: "Document management",
    title: "Every document, always\u00a0accessible",
    description:
      "Customers can find and download invoices, statements, credit notes, and receipts without contacting your team. Automatic uploads keep everything current.",
    details: [
      "Auto-synced invoices, statements, and credit memos",
      "Searchable document archive with filters by date and type",
      "One-click PDF downloads and bulk export",
    ],
  },
  {
    label: "Dispute & communication",
    title: "Resolve issues faster with structured\u00a0workflows",
    description:
      "Customers raise disputes or ask questions directly in the portal with full context attached. Your team sees everything in one place\u2014no more hunting through email threads.",
    details: [
      "In-portal dispute submission with invoice and line-item context",
      "Threaded conversations between your team and the customer",
      "Status tracking so both sides know where things stand",
    ],
  },
  {
    label: "Self-service controls",
    title: "Let customers manage their own account\u00a0details",
    description:
      "Reduce inbound requests by letting customers update contacts, payment methods, and communication preferences on their own. Every change syncs back to your system.",
    details: [
      "Editable contact info, billing addresses, and payment methods",
      "Communication preference management (email, SMS, frequency)",
      "Automatic sync of updates back to your ERP or CRM",
    ],
  },
]

const stats = [
  { value: "70%", label: "Fewer inbound support requests" },
  { value: "5x", label: "Faster dispute resolution" },
  { value: "85%", label: "Customer self-service adoption" },
  { value: "40%", label: "Reduction in manual account updates" },
]

export default function CustomerPortalPage() {
  return (
    <main style={{ '--primary': '#5F746E', '--primary-hover': '#6F847E' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="Customer Portal"
        heading={<>A better experience for every&nbsp;customer</>}
        description={<>A branded, self-service hub where customers manage their account, access documents, and resolve issues without picking up the&nbsp;phone.</>}
        gradientColors={["#9AAEA8", "#5F746E", "#405650"]}
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
                  <NoiseGradient colors={["#9AAEA8", "#5F746E", "#405650"]} />
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
                Three steps to a self-service customer&nbsp;portal
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects to your existing systems and generates a portal your customers can use immediately.
                No development work. No long&nbsp;rollouts.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your systems",
                description:
                  "Sync customer accounts, invoices, and documents from your ERP or accounting platform. Lunica keeps everything current automatically.",
              },
              {
                step: "02",
                title: "Configure & brand",
                description:
                  "Set up access rules, enable the features you need, and apply your branding. The portal matches your business from day one.",
              },
              {
                step: "03",
                title: "Invite your customers",
                description:
                  "Send portal invitations. Customers log in, view their account, and start self-serving. Your team handles fewer tickets immediately.",
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
        heading={<>Give your customers the experience they&nbsp;deserve.</>}
        description={<>See how Lunica Customer Portal can reduce support volume, speed up resolutions, and keep your customers&nbsp;happy.</>}
        gradientColors={["#c0cec9", "#9AAEA8", "#78908A"]}
      />

      <Footer />
    </main>
  )
}
