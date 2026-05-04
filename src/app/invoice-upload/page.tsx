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
    "Automatically upload, extract, validate, and track incoming invoices with Lunica Invoice Upload.",
})

const features = [
  {
    label: "Smart data extraction",
    title: "Turn invoice documents into structured data",
    description:
      "Lunica reads incoming invoices and pulls out the fields your team needs — invoice numbers, dates, totals, customers, line items, and supporting details — without manual entry.",
    details: [
      "Automatic extraction for invoice numbers, due dates, totals, and customer details",
      "Line-level capture for items, quantities, tax, freight, and supporting fields",
      "Confidence scoring so your team knows what is ready and what needs review",
    ],
  },
  {
    label: "Automatic invoice capture",
    title: "Collect invoices from every source",
    description:
      "Pull invoices from email inboxes, supplier portals, shared folders, and manual uploads so every document lands in one consistent intake workflow.",
    details: [
      "Email forwarding and inbox monitoring for automatic document intake",
      "Portal and shared-folder capture for supplier documents",
      "Manual upload support when teams need to add invoices directly",
    ],
  },
  {
    label: "Upload status tracking",
    title: "Know exactly where every invoice stands",
    description:
      "Track each invoice from received to extracted, matched, reviewed, approved, or exceptioned so nothing disappears into a queue.",
    details: [
      "Live status views for received, processed, matched, and reviewed invoices",
      "Searchable upload history with document-level audit trails",
      "Clear queues for invoices waiting on validation or approval",
    ],
  },
  {
    label: "Exception routing",
    title: "Send issues to the right person automatically",
    description:
      "When fields are missing, duplicates appear, totals do not match, or approvals are needed, Lunica routes the invoice to the right teammate with context.",
    details: [
      "Automatic detection for duplicates, missing data, and mismatched totals",
      "Rules-based routing by vendor, amount, location, or exception type",
      "Reviewer queues with the original document, extracted fields, and audit history",
    ],
  },
]

const stats = [
  { value: "80%", label: "Less manual invoice entry" },
  { value: "4x", label: "Faster document processing" },
  { value: "95%", label: "Extraction coverage" },
  { value: "60%", label: "Fewer intake exceptions" },
]

export default function InvoiceUploadPage() {
  return (
    <main style={{ '--primary': '#C97B84', '--primary-hover': '#D48B94' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="Invoice Upload"
        heading={<>Automatically upload and track your&nbsp;invoices</>}
        description={<>Capture incoming invoices, extract the right data, track every status, and route exceptions before they slow your team down.</>}
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
                              <p className="text-sm font-semibold tracking-tight text-black">Upload Queue</p>
                              <p className="mt-1 text-[11px] text-black/45">Email, folder, and portal intake</p>
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
                              ["Northstar Supply", "$18,420.00", "Extracted", "99%"],
                              ["Arbor Freight", "$7,895.40", "Review", "94%"],
                              ["Blue Ridge Paper", "$42,110.15", "Matched", "99%"],
                              ["Cedarline Foods", "$3,284.76", "Duplicate", "91%"],
                            ].map(([vendor, amount, status, confidence], itemIndex) => (
                              <div
                                key={vendor}
                                className={`rounded-xl border p-3 ${
                                  itemIndex === 0
                                    ? "border-[#C97B84]/35 bg-[#C97B84]/[0.06]"
                                    : "border-black/[0.06] bg-white"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="text-[13px] font-semibold text-black">{vendor}</p>
                                    <p className="mt-1 text-[11px] text-black/45">PDF invoice received</p>
                                  </div>
                                  <p className="text-[12px] font-semibold text-black">{amount}</p>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                                    itemIndex === 3
                                      ? "bg-[#f6e8ea] text-[#A85A6A]"
                                      : "bg-black/[0.04] text-black/55"
                                  }`}>
                                    {status}
                                  </span>
                                  <span className="text-[10px] font-medium text-black/40">{confidence} confidence</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="min-w-0 px-7 py-6">
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <p className="text-lg font-semibold tracking-tight text-black">Invoice Extraction</p>
                              <p className="mt-1 text-[12px] text-black/45">Northstar Supply · INV-10482</p>
                            </div>
                            <div className="rounded-lg border border-[#C97B84]/30 bg-white px-3 py-2 text-right">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A85A6A]">Ready</p>
                              <p className="mt-1 text-[12px] font-semibold text-black">AP review</p>
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            {[
                              ["Invoice total", "$18,420.00"],
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
                                <p className="whitespace-nowrap text-sm font-semibold text-black">Fields</p>
                                <p className="whitespace-nowrap text-[11px] font-medium text-[#A85A6A]">12/13 valid</p>
                              </div>
                              <div className="mt-4 space-y-3">
                                {[
                                  ["Vendor", "Northstar", "99%"],
                                  ["Inv.", "INV-10482", "98%"],
                                  ["PO", "PO-88214", "97%"],
                                  ["Tax", "$1.2k", "96%"],
                                  ["Frt.", "$340", "Check"],
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
                              <p className="text-sm font-semibold text-black">Document</p>
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
                          <p className="text-sm font-semibold tracking-tight text-black">Validation</p>
                          <p className="mt-1 text-[11px] text-black/45">Rules and routing</p>

                          <div className="mt-5 space-y-3">
                            {[
                              ["PO match", "Passed"],
                              ["Duplicate check", "Clear"],
                              ["Amount variance", "Review"],
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
                            <p className="mt-2 text-sm font-semibold leading-tight text-black">Route freight variance to Priya Bennett</p>
                            <button className="mt-4 w-full rounded-lg bg-[#C97B84] px-3 py-2 text-[12px] font-semibold text-white">
                              Send to review
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
                Three steps to automated invoice&nbsp;intake
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica connects to the places invoices already arrive and turns every document into a tracked, structured workflow.
                No manual sorting. No lost&nbsp;uploads.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your sources",
                description:
                  "Connect inboxes, upload folders, supplier portals, or manual upload paths so every invoice enters one intake queue.",
              },
              {
                step: "02",
                title: "Extract and validate",
                description:
                  "Lunica reads each invoice, extracts the key fields, checks confidence, and flags anything that needs review.",
              },
              {
                step: "03",
                title: "Track and route",
                description:
                  "Approved invoices move forward automatically while missing fields, duplicates, and mismatches route to the right owner.",
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
        heading={<>Stop keying invoice data by&nbsp;hand.</>}
        description={<>See how Lunica Invoice Upload can help your team capture documents, extract data, and resolve intake exceptions faster.</>}
        gradientColors={["#f0c8cc", "#E8B4B8", "#d4969e"]}
      />

      <Footer />
    </main>
  )
}
