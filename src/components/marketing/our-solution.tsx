import Image from "next/image"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { TintedSection } from "@/components/ui/tinted-section"

const steps = [
  {
    title: "Connect your systems.",
    description:
      "Link your ERP, accounting tools, customer data, and existing workflows.",
    image: "/images/home/problem-1.png",
  },
  {
    title: "Configure your rules.",
    description:
      "Set payment terms, approval logic, escalation paths, and customer preferences.",
    image: "/images/home/problem-2.png",
  },
  {
    title: "Start collecting smarter.",
    description:
      "Lunica monitors invoices, flags risk, and automates the right next action.",
    image: "/images/home/problem-3.png",
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
            <div key={step.title} className="flex flex-col bg-[#E3D7CD]">
              {/* Step image */}
              <div className="flex h-64 items-center justify-center bg-[#DDD0C4] lg:h-80">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-contain opacity-80"
                />
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
