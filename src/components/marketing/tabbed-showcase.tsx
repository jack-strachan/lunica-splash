"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

export interface TabItem {
  title: string
  description: string
  image?: string
  alt?: string
}

interface TabbedShowcaseProps {
  tabs: TabItem[]
  duration?: number
}

const DURATION = 6000

export function TabbedShowcase({ tabs, duration = DURATION }: TabbedShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const active = tabs[activeIndex]
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)
  const isVisibleRef = useRef(true)

  const switchTab = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setActiveIndex(next)
      setDisplayIndex(next)
      setProgress(0)
      startRef.current = 0
      setFading(false)
    }, 250)
  }, [])

  const advanceTab = useCallback(() => {
    switchTab((activeIndex + 1) % tabs.length)
  }, [activeIndex, tabs.length, switchTab])

  const handleManualClick = useCallback((i: number) => {
    if (i === activeIndex) return
    switchTab(i)
  }, [activeIndex, switchTab])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisibleRef.current
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting && !wasVisible) {
          setProgress(0)
          startRef.current = 0
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const tick = (timestamp: number) => {
      if (!isVisibleRef.current) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      if (startRef.current === 0) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const linear = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - linear, 3)

      setProgress(eased)

      if (linear >= 1) {
        advanceTab()
      } else {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [activeIndex, duration, advanceTab])

  return (
    <div ref={containerRef} className="overflow-hidden rounded-lg bg-[#EBE7E3]">
      {/* Tab bar */}
      <div className="grid gap-0.5 overflow-hidden rounded-t-md bg-background" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            onMouseEnter={() => handleManualClick(i)}
            className={`flex h-20 relative items-center rounded-t-md px-6 text-left text-sm font-medium leading-tight transition-colors duration-200 ${
              i === activeIndex
                ? "bg-[#E3D7CD] text-foreground"
                : "bg-[#EBE7E3] text-foreground/50 hover:text-foreground/70"
            }`}
          >
            <span className="whitespace-pre-line">{tab.title}</span>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-[#EBE7E3]"
              style={{ width: i === activeIndex ? `${progress * 100}%` : "0%" }}
            />
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className={`bg-[#E3D7CD] rounded-lg border-[#EBE7E3] ${
        activeIndex === 0 ? "!rounded-tl-none" : ""
      } ${activeIndex === tabs.length - 1 ? "!rounded-tr-none" : ""}`}>
        {/* Image placeholder */}
        <div className="flex h-72 items-center justify-center lg:h-96">
          {active.image ? (
            <Image
              src={active.image}
              alt={active.alt ?? active.title}
              width={800}
              height={500}
              className="h-full w-full object-contain p-8"
            />
          ) : (
            <span className="text-sm text-foreground/30">— image —</span>
          )}
        </div>

        {/* Description — all tabs stacked in same grid cell to prevent layout shift */}
        <div className="relative px-6 pb-6">
          <div className="grid">
            {tabs.map((tab, i) => (
              <p
                key={tab.title}
                className={`col-start-1 row-start-1 text-lg !leading-tight text-foreground text-balance transition-all duration-250 ease-out ${
                  i === displayIndex && !fading
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 pointer-events-none"
                }`}
                aria-hidden={i !== displayIndex}
              >
                <span className="font-medium">{tab.title}.</span>{" "}
                {tab.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
