import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import { PageContainer } from "@/components/ui/page-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"

export default function NotFound() {
  return (
    <main>
      <section className="min-h-[70vh] w-full bg-background pt-20">
        <PageContainer className="flex min-h-[70vh] flex-col items-start justify-center py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            404
          </p>
          <SectionHeading as="h1" size="lg" className="mt-4 max-w-2xl">
            This page isn&rsquo;t available
          </SectionHeading>
          <SectionDescription className="max-w-xl text-balance">
            The page may have moved, or the URL may be incorrect. Return home or contact Lunica if you need help finding a product or resource.
          </SectionDescription>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Contact us
            </Link>
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  )
}
