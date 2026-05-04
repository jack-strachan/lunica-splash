"use client"

import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import { PageContainer } from "@/components/ui/page-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main>
      <section className="min-h-[70vh] w-full bg-background pt-20">
        <PageContainer className="flex min-h-[70vh] flex-col items-start justify-center py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Error
          </p>
          <SectionHeading as="h1" size="lg" className="mt-4 max-w-2xl">
            Something went wrong
          </SectionHeading>
          <SectionDescription className="max-w-xl text-balance">
            The page could not load correctly. Try again, return home, or contact Lunica if the issue continues.
          </SectionDescription>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-md border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Go home
            </Link>
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  )
}
