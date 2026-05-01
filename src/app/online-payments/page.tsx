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
  title: "Online Payments",
  description:
    "Send payment links, accept payments online, and give customers a frictionless way to pay with Lunica Online Payments.",
})

const features = [
  {
    label: "Automatic payment links",
    title: "Payment links generated and sent without lifting a\u00a0finger",
    description:
      "Lunica automatically generates a unique payment link for every invoice. With your approval, links are sent directly to customers via email or SMS. Fully hands-free, or one click to review before they go out.",
    details: [
      "Automatic link generation for every new invoice",
      "Hands-free delivery via email, SMS, or both",
      "Optional review step if your team wants control before sending",
    ],
  },
  {
    label: "Mobile-friendly checkout",
    title: "A payment experience that works on any\u00a0device",
    description:
      "Your customers pay from their phone, tablet, or desktop. Lunica provides a clean, responsive checkout that works everywhere without downloads or account creation.",
    details: [
      "Responsive design optimized for mobile and desktop",
      "No account creation required for customers",
      "Support for credit card, ACH, and wire payments",
    ],
  },
  {
    label: "Branded payment experience",
    title: "Your brand, not\u00a0ours",
    description:
      "Every payment page carries your logo, colors, and domain. Customers see a professional experience that feels like an extension of your business, not a third-party tool.",
    details: [
      "Custom branding with your logo and color palette",
      "White-label payment pages on your domain",
      "Consistent experience across every customer touchpoint",
    ],
  },
  {
    label: "Automatic reconciliation",
    title: "Payments land and your books\u00a0update",
    description:
      "When a customer pays, Lunica matches the payment to the invoice, updates the balance, and syncs with your accounting system. No manual entry, no mismatches.",
    details: [
      "Automatic payment-to-invoice matching",
      "Real-time sync with your ERP or accounting system",
      "Full audit trail for every transaction",
    ],
  },
]

const stats = [
  { value: "70%", label: "Faster time to payment" },
  { value: "3x", label: "More invoices paid on time" },
  { value: "85%", label: "Reduction in payment follow-ups" },
  { value: "99%", label: "Successful transaction rate" },
]

export default function OnlinePaymentsPage() {
  return (
    <main style={{ '--primary': '#4A5E73', '--primary-hover': '#5A6E83' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="Online Payments"
        heading={<>Make it easy for customers to&nbsp;pay</>}
        description={<>Payment links that send themselves, a checkout your customers will actually use, and books that update on their&nbsp;own.</>}
        gradientColors={["#7B8FA1", "#4A5E73", "#2C3E50"]}
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
                  <NoiseGradient colors={["#7B8FA1", "#4A5E73", "#2C3E50"]} />
                  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
                    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                        <div className="ml-4 flex h-6 flex-1 items-center rounded-full border border-black/[0.06] bg-[#fbfaf8] px-3">
                          <span className="h-2 w-40 rounded-full bg-black/[0.05]" />
                        </div>
                      </div>
                      {/* Skeleton content */}
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[180px_1fr_320px] bg-[#fbfaf8]">
                        <aside className="border-r border-black/[0.06] bg-white p-5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4A5E73] text-xs font-semibold text-white">
                              L
                            </div>
                            <div>
                              <p className="text-sm font-medium text-black">Lunica</p>
                              <p className="text-xs text-black/40">Payments</p>
                            </div>
                          </div>
                          <div className="mt-8 space-y-2">
                            {["Overview", "Payment links", "Checkout", "Reconciliation"].map((item, itemIndex) => (
                              <div
                                key={item}
                                className={`rounded-lg px-3 py-2 text-sm ${
                                  itemIndex === 1
                                    ? "bg-[#4A5E73]/10 font-medium text-[#2C3E50]"
                                    : "text-black/45"
                                }`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="mt-10 space-y-3">
                            <div className="h-2 w-24 rounded-full bg-black/[0.05]" />
                            <div className="h-2 w-28 rounded-full bg-black/[0.04]" />
                            <div className="h-2 w-20 rounded-full bg-black/[0.04]" />
                          </div>
                        </aside>

                        <section className="p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4A5E73]">
                                Automatic payment link
                              </p>
                              <h3 className="mt-2 text-2xl font-medium tracking-tight text-black">
                                Review SMS before sending
                              </h3>
                              <p className="mt-2 max-w-md text-sm !leading-tight text-black/50">
                                Lunica generated a secure checkout link for the latest open invoice and prepared a customer-ready SMS.
                              </p>
                            </div>
                            <div className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-xs font-medium text-black/60">
                              Ready to send
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-3 gap-3">
                            {[
                              ["Invoice", "INV-1048"],
                              ["Balance due", "$8,420.00"],
                              ["Due date", "May 14"],
                            ].map(([label, value]) => (
                              <div key={label} className="rounded-xl border border-black/[0.06] bg-white p-4">
                                <p className="text-xs text-black/40">{label}</p>
                                <p className="mt-2 text-lg font-medium tracking-tight text-black">{value}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 rounded-xl border border-black/[0.06] bg-white p-5">
                            <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                              <div>
                                <p className="text-sm font-medium text-black">Nora Ellison</p>
                                <p className="mt-1 text-xs text-black/45">Northstar Supply Co. · +1 (415) 555-0186</p>
                              </div>
                              <span className="rounded-full bg-[#4A5E73]/10 px-3 py-1 text-xs font-medium text-[#2C3E50]">
                                SMS
                              </span>
                            </div>
                            <div className="mt-4 rounded-lg bg-[#fbfaf8] p-4">
                              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                                Message content
                              </p>
                              <p className="mt-3 text-sm !leading-relaxed text-black/70">
                                Hi Nora, Northstar Supply Co. has a balance of $8,420.00 due for INV-1048. You can pay securely here: pay.lunica.app/1048
                              </p>
                            </div>
                            <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
                              <div className="rounded-lg border border-black/[0.06] px-4 py-3">
                                <p className="text-xs text-black/35">Delivery rule</p>
                                <p className="mt-1 text-sm font-medium text-black">Send SMS now, email reminder in 3 days</p>
                              </div>
                              <button className="rounded-lg bg-[#4A5E73] px-5 text-sm font-medium text-white">
                                Send link
                              </button>
                            </div>
                          </div>
                        </section>

                        <aside className="border-l border-black/[0.06] bg-white p-6">
                          <div className="mx-auto w-[236px] rounded-[2rem] border border-black/[0.08] bg-black p-2">
                            <div className="overflow-hidden rounded-[1.55rem] bg-[#f5f5f5]">
                              <div className="flex h-8 items-center justify-center bg-white">
                                <div className="h-1.5 w-16 rounded-full bg-black/[0.15]" />
                              </div>
                              <div className="border-y border-black/[0.05] bg-white px-4 py-3 text-center">
                                <p className="text-xs font-semibold text-black">Messages</p>
                                <p className="text-[10px] text-black/35">Today 10:42 AM</p>
                              </div>
                              <div className="min-h-[330px] px-3 py-5">
                                <div className="max-w-[190px] rounded-2xl rounded-tl-md bg-white px-3 py-2 shadow-sm">
                                  <p className="text-[11px] !leading-relaxed text-black/70">
                                    Hi Nora, Northstar Supply Co. has a balance of $8,420.00 due for INV-1048. You can pay securely here:
                                  </p>
                                  <div className="mt-2 rounded-xl border border-[#4A5E73]/20 bg-[#4A5E73]/10 p-2">
                                    <p className="text-[10px] font-medium text-[#2C3E50]">pay.lunica.app/1048</p>
                                    <p className="mt-1 text-[9px] text-black/40">Secure checkout · Card, ACH, wire</p>
                                  </div>
                                </div>
                                <div className="mt-4 ml-auto max-w-[150px] rounded-2xl rounded-tr-md bg-[#4A5E73] px-3 py-2">
                                  <p className="text-[11px] !leading-relaxed text-white">
                                    Thanks, I’ll pay this afternoon.
                                  </p>
                                </div>
                              </div>
                              <div className="border-t border-black/[0.05] bg-white p-3">
                                <div className="h-8 rounded-full border border-black/[0.08] bg-[#fbfaf8]" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 rounded-xl border border-black/[0.06] bg-[#fbfaf8] p-4">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-black">Link status</p>
                              <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                            </div>
                            <p className="mt-2 text-xs !leading-tight text-black/45">
                              Delivered to SMS with checkout tracking enabled.
                            </p>
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
                Three steps to getting paid&nbsp;faster
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects to your existing invoicing flow and starts accepting payments immediately.
                No migration. No new&nbsp;processes.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your invoices",
                description:
                  "Sync your open invoices from your ERP or accounting system. Lunica pulls in balances, terms, and customer details automatically.",
              },
              {
                step: "02",
                title: "Brand your checkout",
                description:
                  "Add your logo, colors, and domain. Every payment page looks like it belongs to your business, because it does.",
              },
              {
                step: "03",
                title: "Share and collect",
                description:
                  "Send payment links to customers. They pay in minutes. Lunica reconciles the payment and updates your records in real time.",
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
        heading={<>Accept payments without the&nbsp;complexity.</>}
        description={<>See how Lunica Online Payments can help your team get paid faster with less manual&nbsp;work.</>}
        gradientColors={["#a8b8c8", "#7B8FA1", "#5a7088"]}
      />

      <Footer />
    </main>
  )
}
