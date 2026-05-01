"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import type { CSSProperties } from "react"
import Image from "next/image"
import { TabGraphic } from "@/components/marketing/tab-graphics"
import { NoiseGradient } from "@/components/marketing/noise-gradient"

export interface TabItem {
  title: string
  description: string
  image?: string
  alt?: string
  graphicId?: string
}

interface TabbedShowcaseProps {
  tabs: TabItem[]
  duration?: number
}

const DURATION = 6000

const productGradientColors: Record<string, [string, string, string]> = {
  collections: ["#88b4a0", "#4a7a5c", "#3a6248"],
  credit: ["#A0937D", "#7D6E5C", "#5C5040"],
  disputes: ["#B08A9A", "#7A5C6A", "#4C3642"],
  payments: ["#7B8FA1", "#4A5E73", "#2C3E50"],
  portal: ["#E8B4B8", "#C97B84", "#A85A6A"],
  "customer-portal": ["#9AAEA8", "#5F746E", "#405650"],
}

export function TabbedShowcase({ tabs, duration = DURATION }: TabbedShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const active = tabs[activeIndex]
  const gradientKey = active.graphicId?.startsWith("customer-portal")
    ? "customer-portal"
    : active.graphicId?.split("-")[0]
  const gradientColors = productGradientColors[gradientKey ?? "collections"] ?? productGradientColors.collections
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
    setIsPaused(true)
    switchTab(i)
  }, [activeIndex, switchTab])

  const getMobileTabStyle = (i: number) => {
    const distance = Math.abs(i - activeIndex)
    const isEdgeActive = activeIndex === 0 || activeIndex === tabs.length - 1
    const size = distance === 0 ? "36%" : distance === 1 ? "30%" : distance === 2 ? "25%" : "22%"
    const lift = distance === 0 ? "0px" : distance === 1 ? "3px" : "6px"

    return {
      "--tab-size": size,
      "--tab-overlap": i === 0 ? "0px" : isEdgeActive ? "4.333%" : "7%",
      "--tab-lift": lift,
      zIndex: tabs.length - distance,
    } as CSSProperties
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisibleRef.current
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting && !wasVisible) {
          // Reset timer so the current tab gets a full duration when scrolled back
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
    // Don't spin RAF at all when off-screen or paused
    if (!isVisibleRef.current || isPaused) return

    const tick = (timestamp: number) => {
      // If we went off-screen mid-loop or got paused, bail and let cleanup handle it
      if (!isVisibleRef.current || isPaused) return

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
  }, [activeIndex, duration, advanceTab, isPaused])

  return (
    <div ref={containerRef} className="overflow-hidden rounded-lg bg-surface-1">
      {/* Tab bar */}
      <div className="flex overflow-hidden rounded-t-md bg-background md:grid md:gap-0.5" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            onMouseEnter={() => handleManualClick(i)}
            onClick={() => handleManualClick(i)}
            style={getMobileTabStyle(i)}
            className={`relative flex h-20 min-w-0 basis-[var(--tab-size)] translate-y-[var(--tab-lift)] items-center rounded-t-md -ml-[var(--tab-overlap)] px-4 text-left text-[12px] font-medium leading-tight shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 ease-out first:ml-0 md:ml-0 md:basis-auto md:translate-y-0 md:px-6 md:text-sm md:shadow-none md:ring-0 ${i === activeIndex
                ? "bg-surface-2 text-foreground"
                : "bg-surface-1 text-foreground/50 hover:text-foreground/70"
              }`}
          >
            <span className="whitespace-pre-line">{tab.title}</span>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-surface-1"
              style={{ width: i === activeIndex ? `${progress * 100}%` : "0%" }}
            />
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className={`bg-surface-2 rounded-lg border-surface-1 relative overflow-hidden ${activeIndex === 0 ? "!rounded-tl-none" : ""
        } ${activeIndex === tabs.length - 1 ? "!rounded-tr-none" : ""}`}>
        {/* <div className="absolute inset-0 overflow-hidden rounded-md opacity-20">
          <NoiseGradient colors={gradientColors} />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-2 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-surface-2 to-transparent" />
        </div> */}

        {/* Visual — graphic component → static image → placeholder */}
        <div className={`relative flex h-72 items-center justify-center lg:h-96 transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}>
          {active.graphicId ? (
            <TabGraphic key={activeIndex} id={active.graphicId} />
          ) : active.image ? (
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
                className={`col-start-1 row-start-1 text-lg !leading-tight text-foreground text-balance transition-all duration-250 ease-out ${i === displayIndex && !fading
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
