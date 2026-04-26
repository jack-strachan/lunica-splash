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
  title: "Payments Portal",
  description:
    "Give customers a single place to view invoices, make payments, and manage their account with Lunica Payments Portal.",
})

const features = [
  {
    label: "Self-service invoice view",
    title: "Let customers find and pay invoices on their\u00a0own",
    description:
      "No more emailing statements or fielding calls about balances. The portal gives every customer a live, branded view of their open and paid invoices, accessible anytime.",
    details: [
      "Real-time invoice list with status, amounts, and due dates",
      "Filterable history of paid, open, and overdue invoices",
      "Downloadable PDF copies of every invoice and receipt",
    ],
  },
  {
    label: "One-click payments",
    title: "Remove every obstacle between your customer and their\u00a0payment",
    description:
      "Customers land on their portal, see what they owe, and pay in one click. No account creation, no app download, no friction. Support for credit card, ACH, and wire.",
    details: [
      "Pay individual invoices or settle multiple at once",
      "Guest checkout with no login required",
      "Support for credit card, ACH, and wire transfer",
    ],
  },
  {
    label: "Branded experience",
    title: "A portal that looks like yours, not\u00a0ours",
    description:
      "Every customer touchpoint carries your brand. Custom logo, colors, and domain so the portal feels like a natural extension of your business.",
    details: [
      "Custom logo, colors, and favicon",
      "White-label domain support (pay.yourcompany.com)",
      "Consistent branding across emails and portal pages",
    ],
  },
  {
    label: "Automatic reconciliation",
    title: "Payments land, books\u00a0update",
    description:
      "When a customer pays through the portal, Lunica matches the payment to the invoice, closes the balance, and syncs with your accounting system. Zero manual entry.",
    details: [
      "Automatic payment-to-invoice matching",
      "Real-time sync with your ERP or accounting system",
      "Full audit trail for every portal transaction",
    ],
  },
]

const stats = [
  { value: "65%", label: "Fewer payment-related support tickets" },
  { value: "4x", label: "Faster average time to payment" },
  { value: "90%", label: "Customer portal adoption rate" },
  { value: "50%", label: "Reduction in manual reconciliation" },
]

export default function PaymentsPortalPage() {
  return (
    <main style={{ '--primary': '#C97B84', '--primary-hover': '#D48B94' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="Payments Portal"
        heading={<>One place for customers to view and&nbsp;pay</>}
        description={<>A branded self-service portal where customers check balances, download invoices, and pay in one click. Less back-and-forth for everyone.</>}
        gradientColors={["#E8B4B8", "#C97B84", "#A85A6A"]}
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
                  <NoiseGradient colors={["#E8B4B8", "#C97B84", "#A85A6A"]} />
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
                Three steps to a branded payment&nbsp;portal
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects to your invoicing system and generates a portal your customers can use immediately.
                No development. No&nbsp;migration.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your invoices",
                description:
                  "Sync open invoices from your ERP or accounting system. Lunica pulls in balances, terms, and customer details automatically.",
              },
              {
                step: "02",
                title: "Brand your portal",
                description:
                  "Add your logo, colors, and domain. Every page your customer sees looks and feels like an extension of your business.",
              },
              {
                step: "03",
                title: "Share and collect",
                description:
                  "Send portal links to customers. They view invoices, pay in one click, and your books update in real time.",
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
        heading={<>Give customers the payment experience they&nbsp;expect.</>}
        description={<>See how Lunica Payments Portal can reduce support tickets, speed up payments, and delight your&nbsp;customers.</>}
        gradientColors={["#f0c8cc", "#E8B4B8", "#d4969e"]}
      />

      <Footer />
    </main>
  )
}
