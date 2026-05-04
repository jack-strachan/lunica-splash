"use client"

import { motion, AnimatePresence } from "motion/react"
import {
  Check,
  ChevronDown,
  AlertTriangle,
  Clock,
  FileText,
  Flag,
  Loader2,
  Mail,
  Send,
  Settings,
} from "@/lib/nucleo-icons"
import { useState, useRef, useEffect, type ComponentType } from "react"
import Image from "next/image"

/* ── Registry ─────────────────────────────────────────────── */

const registry: Record<string, ComponentType> = {
  "solution-connect": ConnectGraphic,
  "solution-configure": ConfigureGraphic,
  "solution-collect": CollectGraphic,
}

export function SolutionGraphic({ id }: { id: string }) {
  const Graphic = registry[id]
  if (!Graphic) return null
  return <Graphic />
}

/* ── Shared helpers ───────────────────────────────────────── */

const stagger = (i: number, base = 0.2) => ({
  initial: { opacity: 0, y: 8 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.35, delay: base + i * 0.08 },
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[260px] mx-auto select-none pointer-events-none py-6 scale-[0.85] md:scale-100 origin-center">
      {children}
    </div>
  )
}

/* ── 1. Connect Your Systems ──────────────────────────────── */

const integrations = [
  { name: "QuickBooks", logo: "/images/logos/quickbooks-logo.png" },
  { name: "Mercury", logo: "/images/logos/mercury-logo.png" },
  { name: "Xero", logo: "/images/logos/xero-logo.png" },
  { name: "NetSuite", logo: "/images/logos/netsuite-logo.png" },
]

function LunicaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30.6437 0L8.93003 21.4307C8.93003 21.4307 8.09095 21.4307 6.98582 21.4307C0.109487 21.4307 -2.18263 15.5529 2.3402 11.089L13.5552 0H30.6232H30.6437Z" fill="var(--brand)"/>
      <path d="M9.07325 21.4312H30.6232L20.5338 31.3891H9.07325C4.98019 31.3891 2.42203 27.9957 5.08252 25.3699L9.07325 21.4312Z" fill="var(--primary-hover)"/>
    </svg>
  )
}

function ConnectGraphic() {
  return (
    <Shell>
      <div className="flex items-center gap-3 w-full">
        {/* Left: 2×2 logo grid in a container */}
        <motion.div
          className="rounded-xl ring-1 ring-black/[0.06] bg-surface-soft p-2.5 shrink-0"
          {...stagger(0, 0.15)}
        >
          <div className="grid grid-cols-2 gap-2">
            {integrations.map((item, i) => (
              <motion.div
                key={item.name}
                className="w-14 h-14 rounded-lg bg-white ring-1 ring-black/[0.04] flex items-center justify-center"
                style={{ perspective: 200 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: [0, 0, 180, 360, 360] }}
                  transition={{
                    duration: 1.2,
                    times: [0, 0.1, 0.45, 0.8, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3 + i * 1.5,
                    delay: 1.5 + i * 1.2,
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Middle: animated dashed connector */}
        <div className="flex-1 flex items-center min-w-[32px]">
          <svg className="w-full h-8" viewBox="0 0 80 32" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M0,16 L80,16"
              stroke="var(--brand)"
              strokeOpacity={0.15}
              strokeWidth={1}
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            {/* Travelling dot */}
            <motion.circle
              r={2.5}
              fill="var(--brand)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0.5, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
            >
              <animateMotion dur="1.8s" repeatCount="indefinite" path="M0,16 L80,16" />
            </motion.circle>
          </svg>
        </div>

        {/* Right: Lunica hub card with glow */}
        <motion.div
          className="shrink-0 relative flex items-center justify-center"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-brand/20 blur-lg"
            animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Spinning ring */}
          <motion.div
            className="absolute w-[72px] h-[72px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
              <circle cx="36" cy="36" r="34" stroke="var(--brand)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />
            </svg>
          </motion.div>
          {/* Card */}
          <div className="relative rounded-xl bg-brand px-4 py-4 shadow-lg shadow-brand/20">
            <LunicaIcon className="w-6 h-6 [&_path]:fill-white" />
          </div>
        </motion.div>
      </div>
    </Shell>
  )
}

/* ── 2. Configure Your Rules ──────────────────────────────── */

const dropdownOptions = [
  { label: "Send after 3 days overdue", key: "send" },
  { label: "Remind weekly until paid", alwaysChecked: true },
]

type ConfigPhase = "idle" | "dropdown" | "checking" | "slider" | "sliding" | "sliderDone" | "closing" | "reset"

function ConfigureGraphic() {
  const [phase, setPhase] = useState<ConfigPhase>("idle")
  const [started, setStarted] = useState(false)
  const [sliderPct, setSliderPct] = useState(20)
  const configRef = useRef<HTMLDivElement>(null)

  // Start when in view
  useEffect(() => {
    if (started) return
    const el = configRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  // Phase machine
  useEffect(() => {
    if (!started) return
    let t: ReturnType<typeof setTimeout>
    switch (phase) {
      case "idle":
        t = setTimeout(() => setPhase("dropdown"), 600)
        break
      case "dropdown":
        t = setTimeout(() => setPhase("checking"), 1500)
        break
      case "checking":
        t = setTimeout(() => { setSliderPct(20); setPhase("slider") }, 600)
        break
      case "slider":
        t = setTimeout(() => setPhase("sliding"), 400)
        break
      case "sliding":
        t = setTimeout(() => setPhase("sliderDone"), 2800)
        break
      case "sliderDone":
        t = setTimeout(() => setPhase("closing"), 1000)
        break
      case "closing":
        t = setTimeout(() => setPhase("reset"), 600)
        break
      case "reset":
        t = setTimeout(() => setPhase("idle"), 600)
        break
    }
    return () => clearTimeout(t)
  }, [phase, started])

  // Animate slider thumb
  useEffect(() => {
    if (phase !== "sliding") return
    let frame: number
    const start = performance.now()
    const duration = 2400
    const from = 20
    const to = 60
    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setSliderPct(from + (to - from) * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [phase])

  const showDropdown = phase !== "idle" && phase !== "reset" && phase !== "closing"
  const isChecked = phase === "checking" || phase === "slider" || phase === "sliding" || phase === "sliderDone" || phase === "closing"
  const showSlider = phase === "slider" || phase === "sliding"
  const daysValue = Math.round((sliderPct / 100) * 14)
  const showGreenNumber = phase === "sliderDone" || phase === "closing"

  return (
    <Shell>
      <div ref={configRef} className="flex flex-col gap-1.5 w-full">
        {/* Primary card header */}
        <motion.div
          className={`rounded-lg px-3 py-2.5 flex items-center gap-2.5 ring-1 transition-colors duration-500 ${
            showDropdown
              ? "bg-brand ring-brand/20"
              : "bg-white ring-black/[0.04]"
          }`}
          {...stagger(0, 0.15)}
        >
          <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors duration-500 ${
            showDropdown ? "bg-white/15" : "bg-foreground/5"
          }`}>
            <Send className={`w-3.5 h-3.5 transition-colors duration-500 ${showDropdown ? "text-white/80" : "text-foreground/50"}`} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`text-[10px] font-semibold leading-none transition-colors duration-500 ${showDropdown ? "text-white" : "text-foreground"}`}>Follow-up timing</span>
            <span className={`text-[8px] leading-none mt-0.5 transition-colors duration-500 ${showDropdown ? "text-white/50" : "text-black/30"}`}>When to send reminders</span>
          </div>
          <motion.div
            className="ml-auto"
            animate={{ rotate: showDropdown ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <ChevronDown className={`w-3 h-3 transition-colors duration-500 ${showDropdown ? "text-white/50" : "text-black/30"}`} />
          </motion.div>
        </motion.div>

        {/* Dropdown panel */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="rounded-lg bg-surface-soft ring-1 ring-black/[0.04] p-2 flex flex-col gap-0.5">
                {dropdownOptions.map((opt, j) => {
                  const checked = opt.key === "send" ? isChecked : !!opt.alwaysChecked
                  return (
                    <div key={opt.label} className="flex flex-col">
                      <motion.div
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.1 + j * 0.06 }}
                      >
                        <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          checked ? "bg-brand" : "ring-1 ring-black/[0.1] bg-white"
                        }`}>
                          {checked && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            >
                              <Check className="w-2.5 h-2.5 text-white" />
                            </motion.div>
                          )}
                        </div>
                        <span className={`text-[9px] font-medium leading-none transition-colors duration-300 ${checked ? "text-foreground" : "text-black/35"}`}>
                          {opt.key === "send"
                            ? <>Send after <span className={`transition-colors duration-300 ${showGreenNumber ? "text-brand font-bold" : ""}`}>{isChecked ? daysValue : 3}</span> days overdue</>
                            : opt.label}
                        </span>
                      </motion.div>

                      {/* Slider — inline right after the "send" checkbox */}
                      {opt.key === "send" && (
                        <AnimatePresence>
                          {showSlider && (
                            <motion.div
                              className="overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            >
                              <div className="ml-7.5 mr-2 mb-1 px-1 py-1.5">
                                <div className="relative h-1.5 bg-black/[0.06] rounded-full">
                                  <motion.div
                                    className="absolute top-0 left-0 h-full bg-brand/20 rounded-full"
                                    style={{ width: `${sliderPct}%` }}
                                  />
                                  <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand shadow-sm ring-2 ring-white"
                                    style={{ left: `${sliderPct}%`, marginLeft: -6 }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secondary card */}
        <motion.div
          className="rounded-lg px-3 py-2.5 flex items-center gap-2.5 bg-surface-soft ring-1 ring-black/[0.04]"
          {...stagger(1, 0.15)}
        >
          <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-foreground/5">
            <AlertTriangle className="w-3.5 h-3.5 text-foreground/50" />
          </div>
          <span className="text-[10px] font-semibold leading-none text-foreground">Escalation triggers</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-foreground/8 text-[8px] font-bold text-foreground/50">2</span>
            <Settings className="w-3 h-3 text-black/20" />
          </div>
        </motion.div>
      </div>
    </Shell>
  )
}

/* ── 3. Start Collecting Smarter ──────────────────────────── */

const scenarios = [
  {
    issue: "INV-1042 overdue by 7 days",
    issueIcon: Clock,
    processing: ["Reviewing account history…", "Determining best action…", "Composing reminder…"],
    resolution: "Reminder sent to Acme Corp",
    resolutionIcon: Mail,
  },
  {
    issue: "INV-1089 terms mismatch detected",
    issueIcon: AlertTriangle,
    processing: ["Comparing invoice terms…", "Flagging discrepancy…", "Routing to AR team…"],
    resolution: "Escalated to accounts receivable",
    resolutionIcon: Flag,
  },
  {
    issue: "INV-1103 payment received",
    issueIcon: FileText,
    processing: ["Matching to open invoice…", "Reconciling payment…", "Syncing to ERP…"],
    resolution: "Paid · Status synced",
    resolutionIcon: Check,
  },
]

type Phase = "idle" | "issue" | "processing" | "resolved" | "clearing"

function CollectGraphic() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [processingStep, setProcessingStep] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const scenario = scenarios[scenarioIdx]

  // Start when in view
  useEffect(() => {
    if (started) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  // Phase machine
  useEffect(() => {
    if (!started) return
    let t: ReturnType<typeof setTimeout>

    switch (phase) {
      case "idle":
        t = setTimeout(() => setPhase("issue"), 800)
        break
      case "issue":
        t = setTimeout(() => { setProcessingStep(0); setPhase("processing") }, 1200)
        break
      case "processing":
        if (processingStep < scenario.processing.length - 1) {
          t = setTimeout(() => setProcessingStep((s) => s + 1), 1000)
        } else {
          t = setTimeout(() => setPhase("resolved"), 1000)
        }
        break
      case "resolved":
        t = setTimeout(() => setPhase("clearing"), 2000)
        break
      case "clearing":
        t = setTimeout(() => {
          setScenarioIdx((i) => (i + 1) % scenarios.length)
          setPhase("idle")
        }, 600)
        break
    }
    return () => clearTimeout(t)
  }, [phase, processingStep, started, scenario.processing.length])

  const show = phase !== "idle" && phase !== "clearing"
  const ResIcon = scenario.resolutionIcon

  return (
    <Shell>
      <div ref={ref} className="flex flex-col gap-3 w-full">
        {/* Live monitoring header — always visible */}
        <motion.div
          className="flex items-center gap-2.5 px-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </div>
          <span className="text-[10px] font-semibold text-brand leading-none">Live monitoring</span>
        </motion.div>

        {/* Issue slot — fixed height so layout never shifts */}
        <div className="h-[36px]">
          <AnimatePresence mode="wait">
            {show && (
              <motion.div
                key={`issue-${scenarioIdx}`}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white ring-1 ring-amber-300/50"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <scenario.issueIcon className="w-3 h-3 text-amber-600" strokeWidth={2.5} />
                </div>
                <span className="text-[9px] font-medium text-amber-700 leading-none">{scenario.issue}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action slot — single card that transitions between processing → resolved */}
        <div className="h-[36px]">
          <AnimatePresence mode="wait">
            {(phase === "processing" || phase === "resolved") && (
              <motion.div
                key={`action-${scenarioIdx}`}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white ring-1 transition-colors duration-500 ${
                  phase === "resolved" ? "ring-brand/20" : "ring-black/[0.06]"
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Icon — crossfade between spinner and resolved icon */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0 relative">
                  <AnimatePresence mode="wait">
                    {phase === "processing" ? (
                      <motion.div
                        key="spinner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Loader2 className="w-4 h-4 text-brand/50 animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="check"
                        className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <ResIcon className="w-3 h-3 text-brand" strokeWidth={2.5} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Text — crossfade between processing steps and resolution */}
                <AnimatePresence mode="wait">
                  {phase === "processing" ? (
                    <motion.span
                      key={`step-${processingStep}`}
                      className="text-[9px] font-medium text-black/40 leading-none"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    >
                      {scenario.processing[processingStep]}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="resolved"
                      className="text-[9px] font-medium text-brand leading-none flex-1"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    >
                      {scenario.resolution}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Review CTA — only in resolved state */}
                {phase === "resolved" && (
                  <motion.span
                    className="ml-auto text-[8px] font-semibold text-brand px-2 py-1 rounded-md bg-brand/5 shrink-0 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Review
                  </motion.span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Shell>
  )
}
