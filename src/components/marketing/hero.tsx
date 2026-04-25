import Link from "next/link"
import Image from "next/image"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { FlipText } from "@/components/ui/flip-text"

export function HomeHeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 pt-4 pb-24 md:grid-cols-[5fr_6fr] md:items-center md:gap-20 md:py-32 lg:px-20 lg:py-2">
        {/* Right — Noise gradient block (bleeds off right edge) — shown first on mobile */}
        <div className="relative order-first md:order-last -mr-5 md:mx-0">
          <div className="relative h-[35dvh] md:h-[88dvh] md:max-h-none w-[calc(100%+1.25rem)] md:w-[calc(100%+50vw-50%+2rem)] overflow-hidden rounded-l-md md:rounded-r-none">
            <NoiseGradient
              colors={["#88b4a0", "#4a7a5c", "#3a6248"]}
            />

            {/* Hero image — centered within the content-width portion */}
            <div className="absolute inset-0 flex items-center md:[width:calc(100%-(50vw-50%+2rem))]">
              <div className="mx-auto w-[65%] md:w-[50%]">
                <Image
                  src="/images/home/hero.png"
                  alt="Lunica platform dashboard"
                  width={1200}
                  height={800}
                  className="h-auto w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
          <span className="absolute bottom-8 left-8 hidden md:block text-xs font-semibold uppercase text-white">
            Get receivables paid faster
          </span>
        </div>

        {/* Left — Copy */}
        <div className="flex flex-col items-start order-last md:order-first">
          <h1 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            Everything your team needs to get paid faster
          </h1>
          <p className="mt-6 text-lg !leading-tight text-foreground text-balance">
            We're building the ultimate toolkit for exceptional credit and collections teams. Save time, stay ahead of risk, and recover more cash with less effort.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <FlipText text="Book a demo" />
          </Link>
        </div>
      </div>
    </section>
  )
}
