import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionDescriptionProps {
  children: ReactNode
  className?: string
}

export function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p className={cn("mt-6 text-lg !leading-tight text-foreground", className)}>
      {children}
    </p>
  )
}
