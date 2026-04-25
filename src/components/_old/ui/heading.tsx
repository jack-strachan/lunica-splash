import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "tracking-tight text-foreground",
  {
    variants: {
      size: {
        h1: "text-4xl sm:text-5xl md:text-6xl",
        h2: "text-3xl sm:text-4xl md:text-5xl",
        h3: "text-2xl sm:text-3xl md:text-4xl",
        h4: "text-xl sm:text-2xl md:text-3xl",
        h5: "text-lg sm:text-xl",
        h6: "text-base sm:text-lg",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "h2",
      weight: "bold",
      align: "left",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, align, as, ...props }, ref) => {
    const Comp = as || (size as any) || "h2"
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, weight, align, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
