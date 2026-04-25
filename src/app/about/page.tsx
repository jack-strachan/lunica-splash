import { SubpageHero } from "@/components/marketing/subpage-hero"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/layout/footer"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
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
    label: "Founded",
    value: "2024",
  },
  {
    label: "Headquarters",
    value: "New York, NY",
  },
  {
    label: "Focus",
    value: "Credit & Collections",
  },
  {
    label: "Backed by",
    value: "Scope",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <SubpageHero
        label="About Lunica"
        heading={<>We&rsquo;re building the tools credit teams actually need</>}
        description={<>Lunica started with a simple observation: credit and collections teams are stuck using fragmented tools that weren&rsquo;t built for them. We&rsquo;re here to change&nbsp;that.</>}
        gradientColors={["#A89888", "#8B7D6E", "#6E6356"]}
        heightClass="md:h-[85dvh] md:min-h-[600px]"
      />

      {/* Mission */}
      <section className="w-full bg-background">
        <PageContainer className="grid gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:py-40">
          <div className="flex flex-col items-start justify-center">
            <SectionLabel>Our mission</SectionLabel>

            <SectionHeading size="md">
              Get receivables under control &mdash; for&nbsp;good
            </SectionHeading>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg !leading-tight text-foreground">
              We believe credit and collections should be a strategic advantage,
              not a back-office headache. Lunica brings together everything your
              team needs &mdash; from credit applications to payment collection
              &mdash; in one platform that actually works together.
            </p>

            <p className="mt-4 text-lg !leading-tight text-foreground">
              Our goal is to eliminate the manual work, scattered spreadsheets,
              and disjointed tools that slow teams down, so they can focus on
              what matters: getting paid faster and managing risk smarter.
            </p>
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
                We&rsquo;re a technical team that loves solving hard problems.
                Everything we build is driven by one goal.{" "}
                <span className="font-semibold">Help people unlock
                productivity and stay on the cutting&nbsp;edge.</span>
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

      {/* Story / Background */}
      <section className="w-full bg-background">
        <PageContainer className="grid gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:py-40">
          <div className="flex flex-col items-start justify-center">
            <SectionLabel>Our story</SectionLabel>

            <SectionHeading size="md">
              From the teams who know the&nbsp;pain
            </SectionHeading>

            <SectionDescription>
              Lunica was born inside Scope Labs &mdash; a product incubator
              focused on building tools for underserved industries. After
              spending time with credit and AR teams across companies of all
              sizes, the pattern was clear: everyone was fighting the same
              problems with the wrong&nbsp;tools.
            </SectionDescription>

            <p className="mt-4 text-lg !leading-tight text-foreground">
              So we built Lunica &mdash; a platform designed from the ground up
              for the people who actually do the work. Not a retooled ERP
              plugin. Not a generic workflow app. A purpose-built system for
              credit and&nbsp;collections.
            </p>
          </div>

          {/* Milestone stats */}
          <div className="grid grid-cols-2 gap-0.5 self-center overflow-hidden rounded-lg">
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className="flex flex-col justify-center bg-[#EBE7E3] px-6 py-10"
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
