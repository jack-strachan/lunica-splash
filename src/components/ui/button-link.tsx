import Link from "next/link"
import { cn } from "@/lib/utils"
import { FlipText } from "@/components/ui/flip-text"
import type { ReactNode } from "react"

type ButtonVariant = "primary" | "secondary"

interface ButtonLinkProps {
  href: string
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-foreground/15 bg-background text-foreground hover:bg-foreground/5",
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex rounded-md px-6 py-3 text-sm font-medium transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  )
}

/**
 * Convenience wrapper: a ButtonLink that wraps its text label with the
 * FlipText hover animation. Use this instead of manually composing
 * <ButtonLink><FlipText text="…" /></ButtonLink> every time.
 */
interface FlipButtonLinkProps {
  href: string
  text: string
  variant?: ButtonVariant
  className?: string
}

export function FlipButtonLink({
  href,
  text,
  variant = "primary",
  className,
}: FlipButtonLinkProps) {
  return (
    <ButtonLink href={href} variant={variant} className={className}>
      <FlipText text={text} />
    </ButtonLink>
  )
}
