"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { ArrowUpCircle, MousePointer2, Loader2, Check, Bell, TrendingUp, TrendingDown, AlertTriangle, DollarSign, Building2, MessageSquare } from "lucide-react"

type Phase = "idle" | "dragging" | "processing" | "complete" | "risk-alert" | "dispute"

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 1200,
  dragging: 1800,
  processing: 2400,
  complete: 4800,
  "risk-alert": 5200,
  dispute: 5200,
}

const riskMetrics = [
  { label: "DAYS TO PAY", value: "128d", trend: "up" as const },
  { label: "ON-TIME RATE", value: "68%", trend: "down" as const },
  { label: "CREDIT UTIL.", value: "114%", trend: "up" as const },
]

const triggeredFactors = ["Days to pay increase", "Credit limit exceeded"]

const disputeDetails = [
  { icon: DollarSign, label: "$185,832.00", color: "bg-amber-100 text-amber-600" },
  { icon: Building2, label: "Harlow Industrial", color: "bg-blue-50 text-blue-500" },
  { icon: MessageSquare, label: "2 Messages", color: "bg-purple-50 text-purple-500" },
]

const phaseLabels: Record<Phase, string> = {
  idle: "Upload invoices instantly",
  dragging: "Upload invoices instantly",
  processing: "AI extracts every line item",
  complete: "Your data, ready to act on",
  "risk-alert": "Real-time credit monitoring",
  dispute: "Automated dispute resolution",
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

  useEffect(() => {
    const next = () => {
      setPhase((prev) => {
        const order: Phase[] = ["idle", "dragging", "processing", "complete", "risk-alert", "dispute"]
        const idx = order.indexOf(prev)
        if (idx === order.length - 1) setActiveStep(0)
        return order[(idx + 1) % order.length]
      })
    }
    const timeout = setTimeout(next, PHASE_DURATIONS[phase])
    return () => clearTimeout(timeout)
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
  const isDropzonePhase = !isComplete && !isRiskAlert && !isDispute

  return (
    <div className="relative flex items-center justify-center w-full h-full p-8 select-none pointer-events-none" role="img" aria-label="Animated demonstration of Lunica platform features">
      <div className="relative w-full max-w-[520px] scale-[0.8] md:scale-100 -translate-x-3 md:translate-x-0 origin-center">
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
                className={`w-full max-w-sm aspect-[4/3] border-2 border-dashed rounded-xl flex flex-col items-center justify-center relative z-10 shadow-sm transition-all duration-500 ${
                  isDragging || isProcessing
                    ? "border-[#002B31]/60 bg-[#f0f5f3]"
                    : "border-[#002B31]/30 bg-[#FAF8F6]"
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
                      <Loader2 className="w-8 h-8 text-[#002B31] animate-spin mb-3" />
                      <p className="text-[13px] font-medium text-[#171717]">Processing invoices…</p>
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
                        <ArrowUpCircle className="w-6 h-6 text-[#002B31]" />
                      </div>
                      <h4 className="text-[15px] font-medium text-[#171717] mb-1">
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
                  <Check className="w-7 h-7 text-[#002B31]" strokeWidth={2.5} />
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
                          isActive ? "text-[#171717]" : "text-black/40"
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
              <div className="bg-[#FAF8F6] ring-1 ring-black/[0.06] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden w-full max-w-sm mx-auto p-5">
                {/* Alert header */}
                <motion.div
                  className="flex items-center gap-2.5 mb-4"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-black/40">Dispute Alert</span>
                </motion.div>

                {/* Title + badge */}
                <motion.div
                  className="flex items-center justify-between mb-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-[17px] font-semibold text-[#171717]">Short payment</h4>
                  <span className="text-[11px] font-semibold text-[#F87171] bg-[#F87171]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F87171]" />
                    High
                  </span>
                </motion.div>

                <motion.p
                  className="text-[13px] text-black/40 mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Invoice #38816
                </motion.p>

                {/* Details + automation status */}
                <div className="flex gap-3">
                  {/* Left — stacked detail rows */}
                  <div className="flex-1 flex flex-col gap-1.5">
                    {disputeDetails.map((detail, i) => (
                      <motion.div
                        key={detail.label}
                        className="bg-white ring-1 ring-black/[0.06] rounded-lg px-3 py-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-[11px] font-medium text-[#171717]">{detail.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right — automation status */}
                  <motion.div
                    className="flex-1 bg-[#002B31]/[0.04] ring-1 ring-[#002B31]/10 rounded-lg p-3 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#002B31]/10 flex items-center justify-center mb-2">
                      <Check className="w-3.5 h-3.5 text-[#002B31]" />
                    </div>
                    <p className="text-[11px] font-semibold text-[#002B31] leading-tight">Automation triggered</p>
                    <p className="text-[10px] text-black/40 mt-0.5">Customer contacted</p>
                  </motion.div>
                </div>
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
              <div className="bg-[#FAF8F6] ring-1 ring-black/[0.06] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden w-full max-w-sm mx-auto p-5">
                {/* Header row */}
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#F87171]/10 flex items-center justify-center">
                      <Bell className="w-3 h-3 text-[#F87171]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-black/40">Credit Review Alert</span>
                  </div>
                  <motion.span
                    className="text-[10px] font-semibold text-[#F87171] bg-[#F87171]/[0.07] px-2 py-0.5 rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    2 factors triggered
                  </motion.span>
                </motion.div>

                {/* Company title */}
                <motion.h4
                  className="text-[17px] font-semibold text-[#171717] mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Riverview Supplies Co. now <span className="text-[#F87171]">high risk</span>
                </motion.h4>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {riskMetrics.map((metric, i) => {
                    return (
                      <motion.div
                        key={metric.label}
                        className="bg-white ring-1 ring-black/[0.06] rounded-lg p-3"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                      >
                        <span className="text-[8px] font-semibold tracking-[0.05em] uppercase text-black/35 mb-2 block">{metric.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[16px] font-bold text-[#171717] leading-none">{metric.value}</span>
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
                  <span className="text-[11px] font-semibold text-white bg-[#002B31] px-3 py-1.5 rounded-lg">
                    Review generated plan
                  </span>
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
