import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  spacing?: "sm" | "md" | "lg" | "xl" | "none"
}

export function Section({
  className,
  children,
  spacing = "lg",
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32",
  }

  return (
    <section className={cn(spacingClasses[spacing], className)} {...props}>
      {children}
    </section>
  )
}
