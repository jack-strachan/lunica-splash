"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { useInView } from "motion/react"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { BorderBeam } from "border-beam"

interface BinaryDigit {
  id: number
  x: number
  y: number
  char: string
  opacity: number
  speed: number
  size: number
}

function BinaryMatrix({ scanY, containerHeight, containerWidth }: { scanY: number; containerHeight: number; containerWidth: number }) {
  const [digits, setDigits] = useState<BinaryDigit[]>([])
  const nextId = useRef(0)
  const frameRef = useRef<number>(0)

  const spawnDigits = useCallback((currentScanY: number, width: number) => {
    const newDigits: BinaryDigit[] = []
    const count = Math.floor(Math.random() * 4) + 2
    for (let i = 0; i < count; i++) {
      newDigits.push({
        id: nextId.current++,
        x: Math.random() * width,
        y: currentScanY,
        char: Math.random() > 0.5 ? "1" : "0",
        opacity: 0.6 + Math.random() * 0.4,
        speed: 0.8 + Math.random() * 1.5,
        size: 7 + Math.random() * 3,
      })
    }
    return newDigits
  }, [])

  useEffect(() => {
    if (containerHeight === 0 || containerWidth === 0) return

    let lastSpawn = 0

    const animate = () => {
      const now = Date.now()
      if (now - lastSpawn > 50) {
        setDigits(prev => {
          const spawned = spawnDigits(scanY, containerWidth)
          const updated = [...prev, ...spawned]
            .map(d => ({
              ...d,
              y: d.y - d.speed * 0.8,
              opacity: d.opacity - 0.02,
            }))
            .filter(d => d.opacity > 0 && d.y > scanY - 80)
          return updated
        })
        lastSpawn = now
      } else {
        setDigits(prev =>
          prev
            .map(d => ({
              ...d,
              y: d.y - d.speed * 0.8,
              opacity: d.opacity - 0.02,
            }))
            .filter(d => d.opacity > 0 && d.y > scanY - 80)
        )
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [scanY, containerHeight, containerWidth, spawnDigits])

  return (
    <>
      {digits.map(d => (
        <span
          key={d.id}
          className="absolute font-mono font-bold pointer-events-none select-none"
          style={{
            left: d.x,
            top: d.y,
            fontSize: d.size,
            opacity: d.opacity,
            color: "#01544F",
            textShadow: "0 0 8px rgba(1,84,79,0.6), 0 0 16px rgba(1,84,79,0.3)",
            transform: "translateX(-50%)",
          }}
        >
          {d.char}
        </span>
      ))}
    </>
  )
}

function ParsedDocumentUI() {
  return (
    <div className="w-full h-full bg-white rounded-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAFAFA]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center">
            <span className="text-white text-[13px] font-bold tracking-tighter">L</span>
          </div>
          <div>
            <div className="text-[13px] font-medium text-[#171717] tracking-tight leading-none mb-1">Bill of Lading #1635</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#01544F]"></div>
              <span className="text-[10px] text-black/50 font-mono uppercase tracking-widest leading-none">Parsed Successfully</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-7 px-2.5 rounded-md bg-[#01544F] text-white flex items-center justify-center text-[11px] font-medium">
            Approve
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
        {/* Top fields */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg border border-black/[0.06] bg-[#FAFAFA]/60">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1">Date</div>
            <div className="text-[12px] font-medium text-[#171717]">02/28/2023</div>
          </div>
          <div className="p-2.5 rounded-lg border border-black/[0.06] bg-[#FAFAFA]/60">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1">BOL Number</div>
            <div className="text-[12px] font-medium text-[#171717]">#1635</div>
          </div>
          <div className="p-2.5 rounded-lg border border-[#01544F]/20 bg-[#01544F]/5">
            <div className="text-[9px] text-[#01544F]/60 font-mono uppercase tracking-widest mb-1">COD Amount</div>
            <div className="text-[12px] font-semibold text-[#01544F]">$1,038.85</div>
          </div>
        </div>

        {/* Shipper / Consignee */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 rounded-lg border border-black/[0.06]">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1.5">Ship From</div>
            <div className="text-[11px] font-medium text-[#171717] leading-tight">The Grizzly Labs</div>
            <div className="text-[10px] text-black/50 leading-snug">35 Rue de Chateaubriand<br />75019, Paris</div>
          </div>
          <div className="p-2.5 rounded-lg border border-black/[0.06]">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1.5">Ship To</div>
            <div className="text-[11px] font-medium text-[#171717] leading-tight">That Nice Place Inc.</div>
            <div className="text-[10px] text-black/50 leading-snug">405 E 2nd St<br />New York, NY 10027</div>
          </div>
        </div>

        {/* Line items table */}
        <div className="flex-1 border border-black/[0.06] rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-2 px-3 py-2 text-[9px] font-mono text-black/40 uppercase tracking-widest bg-[#FAFAFA] border-b border-black/[0.06]">
            <div className="col-span-5">Item</div>
            <div className="col-span-2 text-center">Pkgs</div>
            <div className="col-span-2 text-center">Weight</div>
            <div className="col-span-3 text-right">Status</div>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {[
              { item: "Artc. Paint Brushes", pkgs: "4", weight: "10 kg", status: "matched" },
              { item: "Grizzly U-Locks BL", pkgs: "10", weight: "05 kg", status: "matched" },
              { item: "Black Bear Sweatshirt", pkgs: "10", weight: "05 kg", status: "matched" },
              { item: "Redwood Brushes", pkgs: "4", weight: "10 kg", status: "matched" },
              { item: "Bear Wine Shirts", pkgs: "10", weight: "10 kg", status: "review" },
              { item: "iPhone Case B/W", pkgs: "80", weight: "02 kg", status: "matched" },
              { item: "Aurora Case Black", pkgs: "80", weight: "03 kg", status: "matched" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 px-3 py-1.5 items-center">
                <div className="col-span-5 text-[10px] font-medium text-[#171717] truncate">{row.item}</div>
                <div className="col-span-2 text-center text-[10px] font-mono text-black/60">{row.pkgs}</div>
                <div className="col-span-2 text-center text-[10px] font-mono text-black/60">{row.weight}</div>
                <div className="col-span-3 text-right">
                  {row.status === "matched" ? (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-medium bg-[#01544F]/10 text-[#01544F]">Matched</span>
                  ) : (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-medium bg-amber-50 text-amber-600">Review</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer totals */}
        <div className="flex items-center justify-between px-1">
          <div className="text-[10px] text-black/40 font-mono uppercase tracking-widest">Grand Total</div>
          <div className="text-[12px] font-semibold text-[#171717] font-mono">45 kg &middot; 7 line items</div>
        </div>
      </div>
    </div>
  )
}

function CollectionPlanUI() {
  return (
    <div className="w-full h-full bg-white rounded-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAFAFA]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center">
            <span className="text-white text-[13px] font-bold tracking-tighter">L</span>
          </div>
          <div>
            <div className="text-[13px] font-medium text-[#171717] tracking-tight leading-none mb-1">Collection Plan — BOL #1635</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              <span className="text-[10px] text-black/50 font-mono uppercase tracking-widest leading-none">Pending Approval</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-7 px-2.5 rounded-md border border-black/[0.08] bg-white text-[#171717] flex items-center justify-center text-[11px] font-medium">
            Edit Plan
          </div>
          <div className="h-7 px-2.5 rounded-md bg-[#01544F] text-white flex items-center justify-center text-[11px] font-medium">
            Approve
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg border border-black/[0.06] bg-[#FAFAFA]/60">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1">Customer</div>
            <div className="text-[12px] font-medium text-[#171717]">That Nice Place</div>
          </div>
          <div className="p-2.5 rounded-lg border border-black/[0.06] bg-[#FAFAFA]/60">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1">Total Due</div>
            <div className="text-[12px] font-semibold text-[#171717]">$1,038.85</div>
          </div>
          <div className="p-2.5 rounded-lg border border-[#01544F]/20 bg-[#01544F]/5">
            <div className="text-[9px] text-[#01544F]/60 font-mono uppercase tracking-widest mb-1">Plan Type</div>
            <div className="text-[12px] font-semibold text-[#01544F]">3-Part Split</div>
          </div>
        </div>

        {/* Payment Schedule */}
        <div className="flex-1 border border-black/[0.06] rounded-lg overflow-hidden">
          <div className="px-3 py-2 bg-[#FAFAFA] border-b border-black/[0.06]">
            <div className="text-[9px] font-mono text-black/40 uppercase tracking-widest">Payment Schedule</div>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {[
              { date: "Mar 15, 2023", amount: "$346.28", status: "scheduled", label: "Installment 1" },
              { date: "Apr 15, 2023", amount: "$346.28", status: "scheduled", label: "Installment 2" },
              { date: "May 15, 2023", amount: "$346.29", status: "scheduled", label: "Final Payment" },
            ].map((row, i) => (
              <div key={i} className="px-3 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#01544F]/10 flex items-center justify-center text-[10px] font-bold text-[#01544F]">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-[#171717] leading-tight">{row.label}</div>
                    <div className="text-[10px] text-black/40 font-mono">{row.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[12px] font-mono font-semibold text-[#171717]">{row.amount}</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-medium bg-blue-50 text-blue-600">Scheduled</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication channel */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 rounded-lg border border-black/[0.06]">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1.5">Notify Via</div>
            <div className="text-[11px] font-medium text-[#171717]">Email + SMS</div>
            <div className="text-[10px] text-black/50">3 days before each due date</div>
          </div>
          <div className="p-2.5 rounded-lg border border-black/[0.06]">
            <div className="text-[9px] text-black/40 font-mono uppercase tracking-widest mb-1.5">Escalation</div>
            <div className="text-[11px] font-medium text-[#171717]">Auto after 7 days</div>
            <div className="text-[10px] text-black/50">Rep notified on missed payment</div>
          </div>
        </div>
      </div>
    </div>
  )
}

type AnimPhase = "idle" | "scanning" | "scanFadeOut" | "pause" | "transitioning" | "done"

export function ScanAnimationVisual({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const isInView = useInView(containerRef, { once: true, amount: "all" })
  const [scanY, setScanY] = useState(0)
  const [phase, setPhase] = useState<AnimPhase>("idle")
  const scanProgress = dimensions.height > 0 ? scanY / dimensions.height : 0

  const showPlanOverlay = phase === "transitioning" || phase === "done"
  const scanComplete = phase !== "idle" && phase !== "scanning"
  const beamActive = scanComplete
  const scanLineOpacity = phase === "scanning" ? 1 : phase === "scanFadeOut" ? 0 : 0

  useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setDimensions({ width: rect.width, height: rect.height })

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setDimensions({ width: entry.contentRect.width, height: entry.contentRect.height })
      }
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView || dimensions.height === 0 || phase !== "idle") return
    setPhase("scanning")
    setScanY(0)
  }, [isInView, dimensions.height, phase])

  useEffect(() => {
    if (phase !== "scanning" || dimensions.height === 0) return

    const duration = 3000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2
      setScanY(eased * dimensions.height)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setPhase("scanFadeOut")
      }
    }

    requestAnimationFrame(animate)
  }, [phase, dimensions.height])

  useEffect(() => {
    if (phase === "scanFadeOut") {
      const t = setTimeout(() => setPhase("pause"), 500)
      return () => clearTimeout(t)
    }
    if (phase === "pause") {
      const t = setTimeout(() => setPhase("transitioning"), 800)
      return () => clearTimeout(t)
    }
    if (phase === "transitioning") {
      const t = setTimeout(() => setPhase("done"), 1500)
      return () => clearTimeout(t)
    }
  }, [phase])

  return (
    <BorderBeam
      active={beamActive}
      size="md"
      colorVariant="ocean"
      theme="light"
      strength={1}
      brightness={1.8}
      saturation={1.6}
      borderRadius={8}
    >
      <div
        ref={containerRef}
        className={`relative ${className} rounded-lg`}
      >
        {/* Invisible size anchor — always present to prevent layout shift */}
        <Image
          src="/images/home/paper-invoice.png"
          alt=""
          width={800}
          height={1000}
          className="w-full h-auto invisible"
          aria-hidden="true"
          priority
        />

        {/* Paper invoice — visible, clipped below scan line */}
        <div className="absolute inset-0" style={{ clipPath: `inset(${scanProgress * 100}% 0 0 0)` }}>
          <Image
            src="/images/home/paper-invoice.png"
            alt="Paper invoice - Bill of Lading"
            width={800}
            height={1000}
            className="w-full h-full object-cover rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Parsed Lunica UI — always reveals above scan line */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 ${(1 - scanProgress) * 100}% 0)` }}
        >
          <div className="w-full h-full rounded-lg shadow-xl overflow-hidden">
            <ParsedDocumentUI />
          </div>
        </div>

        {/* Collection Plan — smaller overlay that appears on top */}
        {showPlanOverlay && (
          <div
            className="absolute inset-0 z-30 flex items-center justify-center p-6"
          >
            <div
              className="w-[90%] max-h-[85%] rounded-xl shadow-2xl overflow-hidden border border-black/[0.08]"
              style={{
                animation: "planSlideIn 0.5s ease-out both",
              }}
            >
              <CollectionPlanUI />
            </div>
          </div>
        )}

        {/* Scan overlay */}
        {isInView && phase === "scanning" && (
          <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none z-20">
            <BinaryMatrix scanY={scanY} containerHeight={dimensions.height} containerWidth={dimensions.width} />
            <div
              className="absolute left-0 right-0 h-[2px] z-10"
              style={{ top: scanY, opacity: scanLineOpacity, transition: "opacity 0.5s ease-out" }}
            >
              <div className="absolute inset-0 bg-[#01544F]" />
              <div className="absolute left-0 right-0 -top-2 -bottom-2" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.4), rgba(1,84,79,0.4), transparent)" }} />
              <div className="absolute left-0 right-0 -top-6 -bottom-6" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.15), rgba(1,84,79,0.15), transparent)" }} />
              <div className="absolute left-0 right-0 -top-12 -bottom-12" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.06), rgba(1,84,79,0.06), transparent)" }} />
            </div>
          </div>
        )}

        {/* Scan line fade-out (after scanning completes) */}
        {phase === "scanFadeOut" && (
          <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none z-20">
            <div
              className="absolute left-0 right-0 h-[2px] z-10"
              style={{ top: scanY, opacity: 0, transition: "opacity 0.5s ease-out" }}
            >
              <div className="absolute inset-0 bg-[#01544F]" />
              <div className="absolute left-0 right-0 -top-2 -bottom-2" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.4), rgba(1,84,79,0.4), transparent)" }} />
              <div className="absolute left-0 right-0 -top-6 -bottom-6" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.15), rgba(1,84,79,0.15), transparent)" }} />
              <div className="absolute left-0 right-0 -top-12 -bottom-12" style={{ background: "linear-gradient(to bottom, transparent, rgba(1,84,79,0.06), rgba(1,84,79,0.06), transparent)" }} />
            </div>
          </div>
        )}
      </div>
    </BorderBeam>
  )
}

export function ScanAnimationSection() {
  return (
    <Section spacing="lg" className="relative" style={{ background: "#F0EBE3" }}>
      <Container className="relative z-10">
        <div className="flex items-center justify-center">
          <ScanAnimationVisual className="w-full max-w-[500px]" />
        </div>
      </Container>
    </Section>
  )
}
