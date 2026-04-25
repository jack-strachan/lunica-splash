import type { ReactNode } from "react"
import { WatermarkLogo } from "@/components/ui/watermark-logo"
import { PageContainer } from "@/components/ui/page-container"
import { cn } from "@/lib/utils"

interface TintedSectionProps {
  children: ReactNode
  /** Show the decorative Lunica watermark SVG */
  watermark?: boolean
  /** Additional classes on the PageContainer */
  className?: string
  /** Additional classes on the outer <section> */
  sectionClassName?: string
}

export function TintedSection({
  children,
  watermark = false,
  className,
  sectionClassName,
}: TintedSectionProps) {
  return (
    <section
      className={cn("relative w-full overflow-hidden", sectionClassName)}
      style={{ background: "#EDE7DF" }}
    >
      {watermark && <WatermarkLogo />}

      <PageContainer className={cn("relative py-20 lg:py-28", className)}>
        {children}
      </PageContainer>
    </section>
  )
}
