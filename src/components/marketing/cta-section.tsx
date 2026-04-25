import type { ReactNode } from "react"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { PageContainer } from "@/components/ui/page-container"
import { FlipButtonLink } from "@/components/ui/button-link"

interface CtaSectionProps {
  label?: string
  heading?: ReactNode
  description?: ReactNode
}

export function CtaSection({
  label = "Get started",
  heading = <>Stop chasing payments. Start&nbsp;collecting.</>,
  description = "See how Lunica can help your team collect faster, reduce risk, and eliminate the manual work holding you back.",
}: CtaSectionProps) {
  return (
    <section className="relative mx-3 overflow-hidden rounded-md">
      {/* Noise gradient background */}
      <div className="absolute inset-0">
        <NoiseGradient colors={["#D6CBBD", "#C4B5A3", "#B8A894"]} />
      </div>

      {/* Subtle white glow behind text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[80%] w-[60%] rounded-full bg-[#F5F2EB]/60 blur-3xl" />
      </div>

      <PageContainer className="relative flex flex-col items-center py-28 text-center lg:py-36">
        <SectionLabel>{label}</SectionLabel>

        <SectionHeading size="lg" className="max-w-2xl">
          {heading}
        </SectionHeading>

        <p className="mt-6 max-w-lg text-lg !leading-tight text-foreground/70">
          {description}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <FlipButtonLink href="/contact" text="Book a demo" />
          <FlipButtonLink
            href="/contact"
            text="Contact us"
            variant="secondary"
          />
        </div>
      </PageContainer>
    </section>
  )
}
