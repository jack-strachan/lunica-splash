import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40",
        className
      )}
    >
      {children}
    </span>
  )
}
