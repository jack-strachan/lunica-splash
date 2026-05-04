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
  title: "Invoice Upload",
  description:
    "Upload AR invoices from your ERP into customer payment portals like Coupa and SAP Ariba, monitor status, and triage disputes before they delay cash.",
})

const features = [
  {
    label: "Automatic portal upload",
    title: "Upload AR invoices into customer payment portals",
    description:
      "Lunica takes approved receivables invoices from your ERP or a manual upload and submits them into Coupa, SAP Ariba, Oracle, Tungsten, and the other customer portals required to get paid.",
    details: [
      "Automated submission for AR invoices, PO details, attachments, and required portal fields",
      "AI-guided portal workflows that adapt when customer portal screens, labels, or steps change",
      "Submission receipts and audit trails for every customer portal upload",
    ],
  },
  {
    label: "Secure credential handling",
    title: "Connect portals without storing credentials in Lunica",
    description:
      "Portal access is handled through secure customer-controlled sessions, so Lunica can submit and monitor invoices without keeping usernames or passwords inside Lunica systems.",
    details: [
      "No portal passwords stored in Lunica systems",
      "Short-lived access sessions for customer-required payment portals",
      "Controlled connection flows for Coupa, SAP Ariba, Oracle, and long-tail portals",
    ],
  },
  {
    label: "Portal status tracking",
    title: "Track every external portal from one Lunica inbox",
    description:
      "Reps get one Lunica inbox for every invoice sitting across Coupa, SAP Ariba, Oracle, Tungsten, and long-tail portals, with periodic checks for acceptance, disputes, rejections, and update requests.",
    details: [
      "Periodic portal checks for submitted, accepted, disputed, rejected, and update-needed invoices",
      "Portal-specific exception reasons surfaced the moment they appear",
      "Centralized visibility across customer payment portals instead of checking each portal manually",
    ],
  },
  {
    label: "Exception resolution",
    title: "Fix portal issues automatically or route them immediately",
    description:
      "When a customer portal flags a missing PO, field mismatch, disputed invoice, or required attachment, Lunica fixes what it can and routes the rest to the right rep before cash is delayed.",
    details: [
      "Automatic correction for portal issues that can be resolved safely",
      "Immediate routing for disputes, missing customer data, and approval-required updates",
      "Fewer payment delays caused by invoices sitting unseen inside portals",
    ],
  },
]

export default function InvoiceUploadPage() {
  return (
    <main style={{ '--primary': '#C97B84', '--primary-hover': '#D48B94' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        heading={<>Keep customer portals from delaying&nbsp;cash</>}
        description={<>Lunica uploads AR invoices from your ERP into customer payment portals, periodically checks status, and gives reps one inbox for disputes, rejections, and update requests.</>}
        gradientColors={["#E8B4B8", "#C97B84", "#A85A6A"]}
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
                  <NoiseGradient colors={["#E8B4B8", "#C97B84", "#A85A6A"]} />
                  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
                    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                        <div className="ml-4 flex h-6 flex-1 items-center rounded-full border border-black/[0.06] bg-[#fbfaf8] px-3">
                          <span className="h-2 w-44 rounded-full bg-black/[0.05]" />
                        </div>
                      </div>
                      {/* Skeleton content */}
                      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[160px_260px_1fr_250px] bg-[#fbfaf8] text-[#2f302d]">
                        <aside className="border-r border-black/[0.06] bg-white px-4 py-5">
                          <div className="flex items-center gap-2">
                            <div className="grid h-7 w-7 place-items-center rounded bg-[#C97B84] text-[10px] font-semibold text-white">
                              L
                            </div>
                            <div className="h-3 w-20 rounded bg-black/[0.75]" />
                          </div>

                          <div className="mt-9 space-y-2">
                            <div className="h-2 w-14 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="flex h-7 items-center rounded bg-[#f8eef0] px-3">
                              <div className="h-1.5 w-16 rounded bg-[#C97B84]" />
                            </div>
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>

                          <div className="mt-9 space-y-2">
                            <div className="h-2 w-16 rounded bg-black/[0.18]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                            <div className="h-7 rounded bg-black/[0.035]" />
                          </div>
                        </aside>

                        <div className="border-r border-black/[0.06] bg-white p-5">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold tracking-tight text-black">Lunica Inbox</p>
                              <p className="mt-1 text-[11px] text-black/45">Invoices across customer portals</p>
                            </div>
                            <div className="rounded-full bg-[#C97B84] px-3 py-1 text-[11px] font-semibold text-white">
                              Live
                            </div>
                          </div>

                          <div className="mt-5 flex h-8 items-center rounded-lg border border-black/[0.07] bg-[#fbfaf8] px-3">
                            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-black/30">
                              <path d="M7.25 12.5a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5ZM11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="ml-2 h-2 w-28 rounded-full bg-black/[0.06]" />
                          </div>

                          <div className="mt-5 space-y-2">
                            {[
                              ["Northstar Supply", "$18,420.00", "Coupa", "Uploaded"],
                              ["Arbor Freight", "$7,895.40", "SAP Ariba", "Needs update"],
                              ["Blue Ridge Paper", "$42,110.15", "Oracle", "Accepted"],
                              ["Cedarline Foods", "$3,284.76", "Tungsten", "Disputed"],
                            ].map(([customer, amount, portal, status], itemIndex) => (
                              <div
                                key={customer}
                                className={`rounded-xl border p-3 ${
                                  itemIndex === 0
                                    ? "border-[#C97B84]/35 bg-[#C97B84]/[0.06]"
                                    : "border-black/[0.06] bg-white"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="text-[13px] font-semibold text-black">{customer}</p>
                                    <p className="mt-1 text-[11px] text-black/45">AR invoice in {portal}</p>
                                  </div>
                                  <p className="text-[12px] font-semibold text-black">{amount}</p>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                                    itemIndex === 1 || itemIndex === 3
                                      ? "bg-[#f6e8ea] text-[#A85A6A]"
                                      : "bg-black/[0.04] text-black/55"
                                  }`}>
                                    {status}
                                  </span>
                                  <span className="text-[10px] font-medium text-black/40">Live status</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="min-w-0 px-7 py-6">
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <p className="text-lg font-semibold tracking-tight text-black">Coupa submission</p>
                              <p className="mt-1 text-[12px] text-black/45">Northstar Supply · AR invoice INV-10482</p>
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            {[
                              ["Portal", "Coupa"],
                              ["Due date", "May 28"],
                            ].map(([label, value]) => (
                              <div key={label} className="rounded-xl border border-black/[0.06] bg-white p-3">
                                <p className="text-[10px] font-medium text-black/40">{label}</p>
                                <p className="mt-2 text-[15px] font-semibold tracking-tight text-black">{value}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 grid grid-cols-[1fr_180px] gap-4">
                            <div className="rounded-xl border border-black/[0.06] bg-white p-3">
                              <div className="flex items-center justify-between gap-3">
                                <p className="whitespace-nowrap text-sm font-semibold text-black">Portal requirements</p>
                                <p className="whitespace-nowrap text-[11px] font-medium text-[#A85A6A]">12/13 complete</p>
                              </div>
                              <div className="mt-4 space-y-3">
                                {[
                                  ["Customer", "Northstar", "Set"],
                                  ["Inv.", "INV-10482", "98%"],
                                  ["PO", "PO-88214", "Set"],
                                  ["File", "Invoice.pdf", "Set"],
                                  ["Tax ID", "Missing", "Fix"],
                                ].map(([label, value, score], itemIndex) => (
                                  <div key={label} className="grid grid-cols-[58px_minmax(72px,1fr)_40px] items-center gap-2 text-[12px]">
                                    <p className="whitespace-nowrap text-black/42">{label}</p>
                                    <div className="truncate whitespace-nowrap rounded-md border border-black/[0.06] bg-[#fbfaf8] px-2 py-1.5 font-medium text-black">
                                      {value}
                                    </div>
                                    <p className={`whitespace-nowrap text-right text-[11px] font-medium ${itemIndex === 4 ? "text-[#A85A6A]" : "text-black/45"}`}>
                                      {score}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                              <p className="text-sm font-semibold text-black">External portal</p>
                              <div className="mt-4 rounded-lg border border-black/[0.07] bg-[#fbfaf8] p-3">
                                <div className="h-3 w-24 rounded bg-black/[0.18]" />
                                <div className="mt-5 space-y-2">
                                  <div className="h-2 w-full rounded bg-black/[0.07]" />
                                  <div className="h-2 w-5/6 rounded bg-black/[0.06]" />
                                  <div className="h-2 w-4/5 rounded bg-black/[0.06]" />
                                </div>
                                <div className="mt-5 rounded-md border border-[#C97B84]/40 bg-[#C97B84]/10 p-2">
                                  <div className="h-2 w-4/5 rounded bg-[#C97B84]/50" />
                                  <div className="mt-2 h-2 w-full rounded bg-[#C97B84]/35" />
                                </div>
                                <div className="mt-5 space-y-2">
                                  <div className="h-2 w-full rounded bg-black/[0.06]" />
                                  <div className="h-2 w-3/4 rounded bg-black/[0.06]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <aside className="border-l border-black/[0.06] bg-white p-5">
                          <p className="text-sm font-semibold tracking-tight text-black">Portal status</p>
                          <p className="mt-1 text-[11px] text-black/45">Periodic checks and routing</p>

                          <div className="mt-5 space-y-3">
                            {[
                              ["Coupa upload", "Accepted"],
                              ["SAP Ariba", "Disputed"],
                              ["Oracle", "Needs update"],
                            ].map(([label, status], itemIndex) => (
                              <div key={label} className="rounded-xl border border-black/[0.06] bg-[#fbfaf8] p-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-[12px] font-medium text-black">{label}</p>
                                  <span className={`h-2 w-2 rounded-full ${itemIndex === 2 ? "bg-[#C97B84]" : "bg-[#6f9b7b]"}`} />
                                </div>
                                <p className="mt-2 text-[11px] text-black/45">{status}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 rounded-xl border border-[#C97B84]/30 bg-[#C97B84]/[0.07] p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A85A6A]">Next action</p>
                            <p className="mt-2 text-sm font-semibold leading-tight text-black">Attach missing PO and resubmit automatically</p>
                            <button className="mt-4 w-full rounded-lg bg-[#C97B84] px-3 py-2 text-[12px] font-semibold text-white">
                              Resolve portal issue
                            </button>
                          </div>

                          <div className="mt-5 space-y-2">
                            <div className="h-2 w-24 rounded-full bg-black/[0.08]" />
                            <div className="h-2 w-36 rounded-full bg-black/[0.05]" />
                            <div className="h-2 w-28 rounded-full bg-black/[0.05]" />
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
                Three steps to portal upload&nbsp;automation
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica logs into the portals your customers require, submits invoices correctly, and watches for disputes or updates.
                No portal chasing. No hidden payment&nbsp;delays.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect required portals",
                description:
                  "Set up Coupa, SAP Ariba, Oracle, Tungsten, and long-tail customer portals through secure credential handoff.",
              },
              {
                step: "02",
                title: "Upload automatically",
                description:
                  "Lunica submits invoices, attachments, PO details, and required fields while AI adapts if a portal changes.",
              },
              {
                step: "03",
                title: "Monitor and resolve",
                description:
                  "Portal disputes, update requests, and missing-field issues are fixed automatically when possible or routed immediately.",
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
        heading={<>Stop uploading invoices into portals by&nbsp;hand.</>}
        description={<>See how Lunica Invoice Upload can keep customer portals updated, catch disputes instantly, and prevent portal-driven payment delays.</>}
        gradientColors={["#f0c8cc", "#E8B4B8", "#d4969e"]}
      />

      <Footer />
    </main>
  )
}
