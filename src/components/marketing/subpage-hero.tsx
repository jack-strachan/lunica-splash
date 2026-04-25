import type { ReactNode } from "react"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"
import { cn } from "@/lib/utils"

interface SubpageHeroProps {
  label: string
  heading: ReactNode
  description: ReactNode
  gradientColors: [string, string, string]
  /** Tailwind classes for md:h-[…] md:min-h-[…] on the outer section */
  heightClass?: string
  /** Optional content rendered below the description (e.g. a CTA button) */
  children?: ReactNode
}

export function SubpageHero({
  label,
  heading,
  description,
  gradientColors,
  heightClass = "md:h-[92dvh] md:min-h-[650px]",
  children,
}: SubpageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-20",
        heightClass
      )}
    >
      <div className="relative ml-auto mt-4 h-[25dvh] w-[75%] overflow-hidden rounded-l-md md:absolute md:right-0 md:-top-20 md:h-[38dvh] md:w-2/3 md:rounded-none md:rounded-bl-md">
        <NoiseGradient colors={gradientColors} />
      </div>

      <PageContainer className="pt-10 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:pb-16 lg:pb-20">
        <SectionLabel>{label}</SectionLabel>

        <SectionHeading as="h1" size="xl" className="max-w-3xl">
          {heading}
        </SectionHeading>

        <SectionDescription className="max-w-2xl text-balance">
          {description}
        </SectionDescription>

        {children}
      </PageContainer>
    </section>
  )
}
