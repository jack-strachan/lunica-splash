import type { ReactNode } from "react"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"
import { cn } from "@/lib/utils"

const ease = "cubic-bezier(0.16, 1, 0.3, 1)"

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
      <div
        className="animate-subpage-gradient relative ml-auto mt-4 h-[25dvh] w-[75%] overflow-hidden rounded-l-md md:absolute md:right-0 md:-top-20 md:h-[38dvh] md:w-2/3 md:rounded-none md:rounded-bl-md"
      >
        <NoiseGradient colors={gradientColors} />
      </div>

      <PageContainer className="pt-10 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:pb-16 lg:pb-20">
        <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.1s both` }}>
          <SectionLabel>{label}</SectionLabel>
        </div>

        <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.2s both` }}>
          <SectionHeading as="h1" size="xl" className="max-w-3xl text-balance">
            {heading}
          </SectionHeading>
        </div>

        <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.35s both` }}>
          <SectionDescription className="max-w-2xl text-balance">
            {description}
          </SectionDescription>
        </div>

        {children && (
          <div style={{ animation: `hero-fade-up 0.7s ${ease} 0.5s both` }}>
            {children}
          </div>
        )}
      </PageContainer>
    </section>
  )
}
