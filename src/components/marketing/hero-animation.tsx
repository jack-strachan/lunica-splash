"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { ArrowUpCircle, MousePointer2, Loader2, Check, Bell, TrendingUp, TrendingDown, CreditCard } from "@/lib/nucleo-icons"

type Phase = "idle" | "dragging" | "processing" | "complete" | "risk-alert" | "dispute" | "portal"

const PHASE_ORDER: Phase[] = ["idle", "dragging", "processing", "complete", "risk-alert", "dispute", "portal"]

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 1200,
  dragging: 1800,
  processing: 2400,
  complete: 4800,
  "risk-alert": 6800,
  dispute: 6400,
  portal: 5200,
}

const riskMetrics = [
  { label: "DAYS TO PAY", value: "128d", trend: "up" as const },
  { label: "ON-TIME RATE", value: "68%", trend: "down" as const },
  { label: "CREDIT UTIL.", value: "114%", trend: "up" as const },
]

const portalInvoices = [
  { id: "#38666", amount: "$1,004.37" },
  { id: "#36757", amount: "$52,172.90" },
  { id: "#39307", amount: "$964.00" },
  { id: "#38618", amount: "$3,705.37" },
]

const disputeSteps = [
  "Short payment detected",
  "Customer notified",
  "Proof of delivery sent",
  "Follow-up scheduled",
]

const phaseLabels: Record<Phase, string> = {
  idle: "Upload invoices instantly",
  dragging: "Upload invoices instantly",
  processing: "AI extracts every line item",
  complete: "Your data, ready to act on",
  "risk-alert": "Real-time credit monitoring",
  dispute: "Automated dispute resolution",
  portal: "Self-serve customer portal",
}

const nextSteps = [
  "Aging distribution",
  "DSO trends",
  "High-risk collections",
  "Outstanding balance",
]

export function HeroAnimation() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [activeStep, setActiveStep] = useState(0)
  const [reviewClicked, setReviewClicked] = useState(false)
  const [lastStepResolved, setLastStepResolved] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(true)

  // Pause all timers when hero scrolls out of viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisibleRef.current) return
    const next = () => {
      setPhase((prev) => {
        const idx = PHASE_ORDER.indexOf(prev)
        if (idx === PHASE_ORDER.length - 1) setActiveStep(0)
        return PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]
      })
    }
    const timeout = setTimeout(next, PHASE_DURATIONS[phase])
    return () => clearTimeout(timeout)
  }, [phase])

  // Resolve last dispute step after it animates in
  useEffect(() => {
    const resetTimeout = setTimeout(() => setLastStepResolved(false), 0)

    if (phase !== "dispute") {
      return () => clearTimeout(resetTimeout)
    }

    const resolveTimeout = setTimeout(() => setLastStepResolved(true), 2400)
    return () => {
      clearTimeout(resetTimeout)
      clearTimeout(resolveTimeout)
    }
  }, [phase])

  // Simulate clicking the review button during risk-alert phase
  useEffect(() => {
    const resetTimeout = setTimeout(() => setReviewClicked(false), 0)

    if (phase !== "risk-alert") {
      return () => clearTimeout(resetTimeout)
    }

    const clickTimeout = setTimeout(() => setReviewClicked(true), 3800)
    return () => {
      clearTimeout(resetTimeout)
      clearTimeout(clickTimeout)
    }
  }, [phase])

  // Cycle through active grid items during complete phase
  useEffect(() => {
    if (phase !== "complete") return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nextSteps.length)
    }, 700)
    return () => clearInterval(interval)
  }, [phase])

  const isDragging = phase === "dragging"
  const isProcessing = phase === "processing"
  const isComplete = phase === "complete"
  const isRiskAlert = phase === "risk-alert"
  const isDispute = phase === "dispute"
  const isPortal = phase === "portal"
  const isDropzonePhase = !isComplete && !isRiskAlert && !isDispute && !isPortal

  return (
    <div ref={containerRef} className="relative flex items-center justify-center w-full h-full p-8 select-none pointer-events-none" role="img" aria-label="Animated demonstration of Lunica platform features">
      <div className="relative w-full max-w-[520px] scale-[0.65] md:scale-100 -translate-x-3 md:translate-x-0 origin-center">
        <AnimatePresence mode="wait">
          {/* ── Dropzone phases (idle / dragging / processing) ── */}
          {isDropzonePhase && (
            <motion.div
              key="dropzone"
              className="relative z-10 w-full flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.35 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div
                className={`w-full max-w-sm aspect-[4/3] border-2 border-dashed rounded-xl flex flex-col items-center justify-center relative z-10 shadow-sm transition-[border-color,background-color] duration-500 ${
                  isDragging || isProcessing
                    ? "border-[#002B31]/60 bg-[#f0f5f3]"
                    : "border-[#002B31]/30 bg-surface-soft"
                }`}
              >
                {/* Center content — swaps between prompt and spinner */}
                <AnimatePresence mode="wait">
                  {isProcessing ? (
                    <motion.div
                      key="processing"
                      className="flex flex-col items-center relative z-30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Loader2 className="w-8 h-8 text-foreground animate-spin mb-3" />
                      <p className="text-[13px] font-medium text-foreground">Processing invoices…</p>
                      <p className="text-[11px] text-black/40 mt-0.5">Extracting line items</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="prompt"
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-white border border-black/[0.08] shadow-sm rounded-xl flex items-center justify-center mb-4">
                        <ArrowUpCircle className="w-6 h-6 text-foreground" />
                      </div>
                      <h4 className="text-[15px] font-medium text-foreground mb-1">
                        Click or drag invoices here
                      </h4>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Invoice stack — arcs in from right, scales down, drops into center */}
                <AnimatePresence>
                  {isDragging && (
                    <motion.div
                      className="absolute pointer-events-none drop-shadow-xl z-10"
                      initial={{ x: 180, y: -120, scale: 1.1, opacity: 0 }}
                      animate={{
                        x: [180, 60, 0],
                        y: [-120, -80, 10],
                        scale: [1.1, 0.95, 0.7],
                        opacity: [0, 1, 1],
                      }}
                      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                      transition={{
                        duration: 1.6,
                        ease: [0.16, 1, 0.3, 1],
                        times: [0, 0.5, 1],
                      }}
                    >
                      <Image
                        src="/images/home/invoices-stack.png"
                        alt="Stack of invoices being dragged"
                        width={160}
                        height={120}
                        className="object-contain"
                        priority
                      />
                      <MousePointer2 className="absolute -bottom-2 right-4 w-6 h-6 text-black fill-black" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ── Complete phase (check → next steps grid) ── */}
          {isComplete && (
            <motion.div
              key="complete"
              className="relative z-10 w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Check animation */}
              <motion.div
                className="w-14 h-14 rounded-full bg-white border border-black/[0.08] shadow-sm flex items-center justify-center mb-5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  <Check className="w-7 h-7 text-foreground" strokeWidth={2.5} />
                </motion.div>
              </motion.div>

              <motion.p
                className="text-[15px] font-medium text-white mb-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                What would you like to explore?
              </motion.p>

              {/* Next steps grid — styled like problem section */}
              <motion.div
                className="grid grid-cols-2 gap-0.5 w-full max-w-sm overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {nextSteps.map((step, i) => {
                  const isActive = i === activeStep
                  return (
                    <div
                      key={step}
                      className={`flex h-14 cursor-default items-center justify-center px-4 transition-colors duration-200 ${
                        isActive ? "bg-white" : "bg-white/70"
                      }`}
                    >
                      <p
                        className={`text-[12px] font-medium transition-colors duration-200 ${
                          isActive ? "text-foreground" : "text-black/40"
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>
          )}

          {/* ── Dispute phase ── */}
          {isDispute && (
            <motion.div
              key="dispute"
              className="relative z-10 w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full max-w-sm mx-auto flex flex-col gap-2.5">
                {/* Header */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/60">Dispute Resolved</span>
                  </div>
                  <span className="text-[10px] font-medium text-white/40">4 steps completed</span>
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="text-[17px] font-semibold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Harlow Industrial — <span className="text-white/70">handled</span>
                </motion.h4>

                {/* Step cards */}
                {disputeSteps.map((step, i) => {
                  const isLast = i === disputeSteps.length - 1
                  const showLoader = isLast && !lastStepResolved
                  return (
                    <motion.div
                      key={step}
                      className="bg-surface-soft ring-1 ring-black/[0.06] shadow-sm rounded-lg px-3 py-2.5 flex items-center gap-2.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }}
                    >
                      <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        {showLoader ? (
                          <Loader2 className="w-3 h-3 text-foreground/40 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-foreground/10 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-foreground" />
                          </div>
                        )}
                      </div>
                      <p className={`text-[11px] font-semibold leading-tight ${
                        showLoader ? "text-black/40" : "text-foreground"
                      }`}>
                        {showLoader ? "Scheduling follow-up…" : step}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* ── Portal phase ── */}
          {isPortal && (
            <motion.div
              key="portal"
              className="relative z-10 w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full max-w-sm mx-auto flex flex-col gap-2.5">
                {/* Header */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CreditCard className="w-3 h-3 text-white/80" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/60">Your Company Here</span>
                  </div>
                  <span className="text-[10px] font-medium text-white/40">144 invoices</span>
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="text-[17px] font-semibold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Outstanding: <span className="text-white/70">$673,691.34</span>
                </motion.h4>

                {/* Invoice rows */}
                {portalInvoices.map((inv, i) => (
                  <motion.div
                    key={inv.id}
                    className="bg-surface-soft ring-1 ring-black/[0.06] shadow-sm rounded-lg px-3 py-2.5 flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.12 }}
                  >
                    <span className="text-[11px] font-medium text-foreground">{inv.id}</span>
                    <span className="text-[11px] font-semibold text-foreground">{inv.amount}</span>
                  </motion.div>
                ))}

                {/* Pay button */}
                <motion.div
                  className="flex justify-end mt-0.5"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <span className="text-[11px] font-semibold text-white bg-foreground px-3 py-1.5 rounded-lg shadow-sm">
                    Pay now
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ── Risk Alert phase ── */}
          {isRiskAlert && (
            <motion.div
              key="risk-alert"
              className="relative z-10 w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full max-w-sm mx-auto flex flex-col gap-2.5">
                {/* Header row */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Bell className="w-3 h-3 text-[#FCA5A5]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/60">Credit Review Alert</span>
                  </div>
                  <motion.span
                    className="text-[10px] font-semibold text-[#FCA5A5] bg-white/10 px-2 py-0.5 rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    2 factors triggered
                  </motion.span>
                </motion.div>

                {/* Company title */}
                <motion.h4
                  className="text-[17px] font-semibold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Riverview Supplies Co. now <span className="text-[#FCA5A5]">high risk</span>
                </motion.h4>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2">
                  {riskMetrics.map((metric, i) => {
                    return (
                      <motion.div
                        key={metric.label}
                        className="bg-surface-soft ring-1 ring-black/[0.06] shadow-sm rounded-lg p-3"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                      >
                        <span className="text-[8px] font-semibold tracking-[0.05em] uppercase text-black/35 mb-2 block">{metric.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[16px] font-bold text-foreground leading-none">{metric.value}</span>
                          {metric.trend === "up" ? (
                            <TrendingUp className="w-3.5 h-3.5 text-[#F87171]" />
                          ) : (
                            <TrendingDown className="w-3.5 h-3.5 text-[#F87171]" />
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Review button — bottom right */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <motion.span
                    className="text-[11px] font-semibold text-white bg-foreground px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5"
                    animate={
                      reviewClicked
                        ? { scale: [1, 0.93, 1], transition: { duration: 0.2 } }
                        : {}
                    }
                  >
                    {reviewClicked ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Executing plan…
                      </>
                    ) : (
                      "Review generated plan"
                    )}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phase label — bottom left */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            className="text-base font-medium text-white block"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {phaseLabels[phase]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
