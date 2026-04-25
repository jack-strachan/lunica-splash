import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1400px] px-5 lg:px-20", className)}>
      {children}
    </div>
  )
}
