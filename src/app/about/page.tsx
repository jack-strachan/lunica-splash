import Link from "next/link"
import Image from "next/image"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { Footer } from "@/components/layout/footer"
import { FlipText } from "@/components/ui/flip-text"

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
      <section className="relative w-full overflow-hidden pt-20 md:h-[85dvh] md:min-h-[600px]">
        {/* Noise gradient block — pinned right, extends off-screen */}
        <div className="relative ml-auto mt-4 h-[25dvh] w-[75%] overflow-hidden rounded-l-md md:absolute md:right-0 md:top-20 md:h-[35dvh] md:w-2/3 md:rounded-bl-md md:rounded-l-md ">
          <NoiseGradient
            colors={["#A89888", "#8B7D6E", "#6E6356"]}
          />
        </div>

        {/* Copy — anchored near bottom on large screens */}
        <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:pb-16 lg:px-20 lg:pb-20">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            About Lunica
          </span>

          <h1 className="max-w-3xl text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            We&rsquo;re building the tools credit teams actually need
          </h1>

          <p className="mt-6 max-w-2xl text-lg !leading-tight text-foreground text-balance">
            Lunica started with a simple observation: credit and collections
            teams are stuck using fragmented tools that weren&rsquo;t built for
            them. We&rsquo;re here to change&nbsp;that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 lg:py-40">
          <div className="flex flex-col items-start justify-center">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Our mission
            </span>

            <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
              Get receivables under control &mdash; for&nbsp;good
            </h2>
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
        </div>
      </section>

      {/* Values */}
      <section className="relative w-full overflow-hidden" style={{ background: "#EDE7DF" }}>
        {/* Watermark icon */}
        <svg
          className="pointer-events-none absolute right-0 top-0 translate-x-[20%] -translate-y-[30%]"
          width="550"
          height="550"
          viewBox="-1 -1 33 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.6437 0L8.93003 21.4307C8.93003 21.4307 8.09095 21.4307 6.98582 21.4307C0.109487 21.4307 -2.18263 15.5529 2.3402 11.089L13.5552 0H30.6232H30.6437Z" fill="none" stroke="#F5F2EB" strokeWidth="0.19" />
          <path d="M9.07325 21.4312H30.6232L20.5338 31.3891H9.07325C4.98019 31.3891 2.42203 27.9957 5.08252 25.3699L9.07325 21.4312Z" fill="none" stroke="#F5F2EB" strokeWidth="0.19" />
        </svg>

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-20 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                What we believe
              </span>

              <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.5rem]">
                Principles that shape everything we&nbsp;build
              </h2>
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
        </div>
      </section>

      {/* Story / Background */}
      <section className="w-full bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 lg:py-40">
          <div className="flex flex-col items-start justify-center">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Our story
            </span>

            <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
              From the teams who know the&nbsp;pain
            </h2>

            <p className="mt-6 text-lg !leading-tight text-foreground">
              Lunica was born inside Scope Labs &mdash; a product incubator
              focused on building tools for underserved industries. After
              spending time with credit and AR teams across companies of all
              sizes, the pattern was clear: everyone was fighting the same
              problems with the wrong&nbsp;tools.
            </p>

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
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <NoiseGradient colors={["#D6CBBD", "#C4B5A3", "#B8A894"]} />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[80%] w-[60%] rounded-full bg-[#F5F2EB]/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center lg:px-20 lg:py-36">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Join us
          </span>

          <h2 className="max-w-2xl text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Ready to see what Lunica can do for your&nbsp;team?
          </h2>

          <p className="mt-6 max-w-lg text-lg !leading-tight text-foreground/70">
            Whether you&rsquo;re exploring options or ready to move, we&rsquo;d
            love to show you how Lunica works.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <FlipText text="Book a demo" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              <FlipText text="Contact us" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
