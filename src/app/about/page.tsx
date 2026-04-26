import { SubpageHero } from "@/components/marketing/subpage-hero"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/layout/footer"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { PageContainer } from "@/components/ui/page-container"
import { TintedSection } from "@/components/ui/tinted-section"

const values = [
  {
    title: "Speed over complexity",
    description:
      "We build tools that cut through process. If it doesn't save your team time, it doesn't ship.",
  },
  {
    title: "Built for practitioners",
    description:
      "Every feature is shaped by people who have actually done the work. We talk to credit and collections teams constantly.",
  },
  {
    title: "Clarity by default",
    description:
      "We believe the right data, shown at the right time, is more powerful than any dashboard full of noise.",
  },
  {
    title: "Earn trust, then keep it",
    description:
      "We handle sensitive financial data. Security, reliability, and transparency are built into everything we ship.",
  },
]

const milestones = [
  {
    label: "Background",
    value: "MIT, Y Combinator, Google, Palantir, Meta, Scale, Bain, and more",
    tall: true,
  },
  {
    label: "Headquarters",
    value: "New York, NY",
  },
  {
    label: "Incubated at",
    value: <a href="https://scopelabs.com" target="_blank" rel="noopener noreferrer" className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors">Scope</a>,
  },
]

export default function AboutPage() {
  return (
    <main style={{ '--primary': '#8B7D6E', '--primary-hover': '#9B8D7E' } as React.CSSProperties}>
      {/* Hero */}
      <SubpageHero
        label="About Lunica"
        heading={<>Better tools for credit teams, long&nbsp;overdue</>}
        description={<>The tools credit teams rely on are outdated, overpriced, and harder than they need to be. Lunica is the&nbsp;alternative.</>}
        gradientColors={["#A89888", "#8B7D6E", "#6E6356"]}
        heightClass="md:h-[85dvh] md:min-h-[600px]"
      />

      {/* Our Story */}
      <section className="w-full bg-background">
        <PageContainer className="grid gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:py-40">
          <div className="flex flex-col items-start justify-center">
            <SectionLabel>Our team</SectionLabel>

            <SectionHeading size="md">
              Built by engineers alongside the teams in the trenches
            </SectionHeading>
          </div>

          {/* Milestone stats */}
          <div className="grid grid-cols-2 gap-0.5 self-center overflow-hidden rounded-lg">
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className={`flex flex-col justify-center bg-[#EBE7E3] px-6 py-10${milestone.tall ? " row-span-2" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                  {milestone.label}
                </p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-foreground">
                  {milestone.value}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Values */}
      <TintedSection watermark>
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <SectionLabel className="block">What we believe</SectionLabel>

              <SectionHeading size="lg" className="text-balance">
                Principles that shape everything we&nbsp;build
              </SectionHeading>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                We obsess over the technology so you don&rsquo;t have to.{" "}
                <span className="font-semibold">Every update we ship is designed
                to keep your team ahead of the curve</span>
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col justify-center bg-[#E3D7CD] px-8 py-10">
                <p className="text-lg font-medium text-foreground">
                  {value.title}
                </p>
                <p className="mt-2 text-sm !leading-tight text-foreground/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
      </TintedSection>

      {/* CTA */}
      <CtaSection
        label="Join us"
        heading={<>Ready to see what Lunica can do for your&nbsp;team?</>}
        description={<>Whether you&rsquo;re exploring options or ready to move, we&rsquo;d love to show you how Lunica works.</>}
      />

      <Footer />
    </main>
  )
}
