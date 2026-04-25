import Link from "next/link"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { FlipText } from "@/components/ui/flip-text"

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Noise gradient background */}
      <div className="absolute inset-0">
        <NoiseGradient colors={["#D6CBBD", "#C4B5A3", "#B8A894"]} />
      </div>

      {/* Subtle white glow behind text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[80%] w-[60%] rounded-full bg-[#F5F2EB]/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center lg:px-20 lg:py-36">
        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
          Get started
        </span>

        <h2 className="max-w-2xl text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
          Stop chasing payments. Start&nbsp;collecting.
        </h2>

        <p className="mt-6 max-w-lg text-lg !leading-tight text-foreground/70">
          See how Lunica can help your team collect faster, reduce risk, and
          eliminate the manual work holding you back.
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
  )
}
