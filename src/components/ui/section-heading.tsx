import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type HeadingTag = "h1" | "h2" | "h3"
type HeadingSize = "md" | "lg" | "xl"

interface SectionHeadingProps {
  as?: HeadingTag
  size?: HeadingSize
  children: ReactNode
  className?: string
}

const sizeClasses: Record<HeadingSize, string> = {
  md: "lg:text-[3rem]",
  lg: "lg:text-[3.5rem]",
  xl: "lg:text-[4rem]",
}

export function SectionHeading({
  as: Tag = "h2",
  size = "lg",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-[2.5rem] text-balance !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  )
}
