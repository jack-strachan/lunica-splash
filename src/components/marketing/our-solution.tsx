import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { TintedSection } from "@/components/ui/tinted-section"
import { LazySolutionGraphic } from "@/components/marketing/lazy-marketing-visuals"

const steps = [
  {
    title: "Connect your systems.",
    description:
      "Link your ERP, accounting tools, customer data, and existing workflows.",
    graphicId: "solution-connect",
  },
  {
    title: "Configure your rules.",
    description:
      "Set payment terms, approval logic, customer preferences, even tone of voice.",
    graphicId: "solution-configure",
  },
  {
    title: "Start collecting smarter.",
    description:
      "Lunica monitors invoices, flags risk, and automates the right next action.",
    graphicId: "solution-collect",
  },
]

export function OurSolutionSection() {
  return (
    <TintedSection watermark>
        {/* Top — Heading + description row */}
        <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
          <div>
            <SectionLabel className="block">Our solution</SectionLabel>

            <SectionHeading size="lg">
              Lunica offers a suite of tools that saves you time and&nbsp;money
            </SectionHeading>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg !leading-tight text-foreground">
              One platform that connects your data, enforces your rules, and
              takes action where you decide.
            </p>
            <p className="mt-4 text-lg !leading-tight text-foreground">
              Use the entire product suite or just the tools you want and scale as you expand.
            </p>
          </div>
        </div>

        {/* Bottom — 3-column steps with image placeholders */}
        <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col bg-surface-2">
              {/* Step graphic */}
              <div className="flex h-64 items-center justify-center bg-surface-deep lg:h-80">
                <LazySolutionGraphic id={step.graphicId} />
              </div>

              {/* Caption */}
              <div className="px-6 py-6">
                <p className="text-lg !leading-tight text-foreground">
                  <span className="font-medium">{step.title}</span>{" "}
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </TintedSection>
  )
}
