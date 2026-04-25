import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { PageContainer } from "@/components/ui/page-container"
import { cn } from "@/lib/utils"

interface LegalPageLayoutProps {
  title: string
  dateLine: ReactNode
  children: ReactNode
}

export function LegalPageLayout({
  title,
  dateLine,
  children,
}: LegalPageLayoutProps) {
  return (
    <main>
      <section className="w-full bg-background pt-20">
        <PageContainer className="py-20 lg:py-32">
          <SectionLabel>Legal</SectionLabel>

          <SectionHeading as="h1" size="lg">
            {title}
          </SectionHeading>

          <p className="mt-4 text-sm text-foreground/60">{dateLine}</p>

          <div className="prose-policy mt-12 space-y-10 text-[0.9375rem] leading-relaxed text-foreground/80">
            {children}
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  )
}

interface LegalLinkProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function LegalLink({
  href,
  children,
  external = false,
  className,
}: LegalLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60",
        className
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  )
}
