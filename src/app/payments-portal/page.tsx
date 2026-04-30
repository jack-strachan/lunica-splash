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
        heading={<>Stop keying invoice data by&nbsp;hand.</>}
        description={<>See how Lunica Invoice Upload can help your team capture documents, extract data, and resolve intake exceptions faster.</>}
        gradientColors={["#f0c8cc", "#E8B4B8", "#d4969e"]}
      />

      <Footer />
    </main>
  )
}
