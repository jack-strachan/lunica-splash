"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const problems = [
  {
    title: "Fragmented workflows",
    description:
      "Invoices, disputes, payments, and approvals in separate tools.",
  },
  {
    title: "Invoice mistakes",
    description:
      "Manual data entry leads to errors that delay payments for weeks.",
  },
  {
    title: "Manual follow up",
    description:
      "Your team spends hours chasing payments that should be automated.",
  },
  {
    title: "Hidden collection risk",
    description:
      "No early warnings — you find out about problems after they escalate.",
  },
  {
    title: "Payment term confusion",
    description:
      "Inconsistent terms across customers create disputes and delays.",
  },
  {
    title: "Spreadsheet tracking",
    description:
      "Critical AR data lives in spreadsheets no one else can access.",
  },
]

function MobileCarousel({ problems }: { problems: { title: string; description: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mobileActive, setMobileActive] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { index: number; ratio: number } = { index: 0, ratio: 0 }
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"))
          if (entry.intersectionRatio > best.ratio) {
            best = { index: idx, ratio: entry.intersectionRatio }
          }
        })
        if (best.ratio > 0) setMobileActive(best.index)
      },
      { root: container, threshold: [0.6] }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={scrollRef}
      className="md:hidden -mx-5 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
    >
      <style>{`.mobile-carousel::-webkit-scrollbar { display: none; }`}</style>
      <div className="mobile-carousel flex gap-0.5 w-max overflow-hidden rounded-lg pl-5 pr-5">
        {problems.map((problem, i) => {
          const isFirst = i === 0
          const isLast = i === problems.length - 1
          return (
            <div
              key={problem.title}
              ref={(el) => { cardRefs.current[i] = el }}
              data-index={i}
              className={`flex w-56 shrink-0 flex-col justify-center px-5 py-5 transition-colors duration-500 ${
                i === mobileActive ? "bg-[#E3D7CD]" : "bg-[#EBE7E3]"
              } ${isFirst ? "rounded-l-lg" : ""} ${isLast ? "rounded-r-lg" : ""}`}
            >
              <p className="text-base font-medium text-foreground">
                {problem.title}
              </p>
              <p className="mt-1.5 text-sm !leading-tight text-foreground/50">
                {problem.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TheProblemSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 lg:py-40">
        {/* Left — Copy */}
        <div className="flex flex-col items-start justify-center">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            The problem
          </span>

          <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
            You&rsquo;re working harder where you don&rsquo;t need&nbsp;to.
          </h2>

          <p className="mt-6 text-lg !leading-tight text-foreground">
            There&rsquo;s no system that knows your customers&rsquo; payment
            terms and acts on them automatically. Every mistake costs you
            days&nbsp;&mdash; sometimes weeks.
          </p>

          <p className="mt-4 text-lg !leading-tight text-foreground">
            Credit applications in one tool. Invoices in another. Disputes
            handled over email. Payments tracked in a spreadsheet. Nothing talks
            to each other&nbsp;&mdash; and nothing works together.
          </p>
        </div>

        {/* Right — Problem grid (desktop) */}
        <div
          className="hidden md:grid grid-cols-2 grid-rows-3 gap-0.5 self-center overflow-hidden rounded-lg bg-background"
          onMouseLeave={() => { /* keep last hovered card active */ }}
        >
          {problems.map((problem, i) => {
            const isActive = i === activeIndex
            return (
              <div
                key={problem.title}
                className={`flex h-36 cursor-default flex-col justify-center px-6 transition-colors duration-200 ${
                  isActive ? "bg-[#E3D7CD]" : "bg-[#EBE7E3]"
                }`}
                onMouseEnter={() => {
                  setActiveIndex(i)
                  setIsHovering(true)
                }}
              >
                <p className="text-base font-medium text-foreground">
                  {problem.title}
                </p>
                <p
                  className={`overflow-hidden text-sm leading-snug text-foreground/50 transition-all duration-200 ${
                    isActive
                      ? "mt-1.5 max-h-20 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Mobile — Swipable carousel */}
        <MobileCarousel problems={problems} />
      </div>
    </section>
  )
}
