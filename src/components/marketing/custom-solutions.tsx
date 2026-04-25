import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"
import { FlipButtonLink } from "@/components/ui/button-link"

const capabilities = [
  {
    title: "Custom integrations",
    description:
      "Connect Lunica to your ERP, accounting system, or internal tools — we'll build the bridge.",
  },
  {
    title: "Tailored workflows",
    description:
      "Every team works differently. We configure workflows around how your team actually operates.",
  },
  {
    title: "Flexible deployment",
    description:
      "Cloud, on-prem, or hybrid — we meet you where you are and scale with you as you grow.",
  },
]

export function CustomSolutionsSection() {
  return (
    <section className="w-full bg-background">
      <PageContainer className="py-20 lg:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">
          {/* Left — Copy */}
          <div className="flex flex-col items-start">
            <SectionLabel>Built around you</SectionLabel>

            <SectionHeading size="lg" className="max-w-lg">
              Need something custom? We're problem&nbsp;solvers.
            </SectionHeading>

            <SectionDescription className="max-w-md">
              Modernizing doesn't mean starting over. We work alongside your team to
              understand what's working, what's not, and build exactly what you need
              to move forward.
            </SectionDescription>

            <FlipButtonLink
              href="/contact"
              text="Let's talk"
              className="mt-8 px-5 py-2.5"
            />
          </div>

          {/* Right — Capabilities */}
          <div className="flex flex-col gap-8 md:pt-4">
            {capabilities.map((item, i) => (
              <div
                key={item.title}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-foreground/15"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  0{i + 1}
                </p>
                <p className="mt-2 text-lg font-medium leading-snug text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
