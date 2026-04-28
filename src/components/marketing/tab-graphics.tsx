"use client"

import { motion, AnimatePresence } from "motion/react"
import {
  ArrowRight,
  Check,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react"
import { useState, useEffect, type ComponentType } from "react"

/* ── Registry ─────────────────────────────────────────────── */

const registry: Record<string, ComponentType> = {
  "collections-monitoring": MonitoringGraphic,
  "collections-followup": FollowUpGraphic,
  "collections-confirmation": ConfirmationGraphic,
  "collections-escalation": EscalationGraphic,
}

export function TabGraphic({ id }: { id: string }) {
  const Graphic = registry[id]
  if (!Graphic) return null
  return <Graphic />
}

/* ── Shared helpers ───────────────────────────────────────── */

const stagger = (i: number, base = 0.25) => ({
  initial: { opacity: 0, y: 10 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.35, delay: base + i * 0.1 },
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-xs mx-auto select-none pointer-events-none scale-[0.7] md:scale-100 origin-center">
      {children}
    </div>
  )
}

/* ── 1. Always-on Monitoring — Live dashboard with mini bar chart ── */

const barData = [35, 55, 40, 70, 50, 85, 60]
const barLabels = ["M", "T", "W", "T", "F", "S", "S"]

const kpis = [
  { label: "Tracked", value: "142", trend: "+12%" },
  { label: "At risk", value: "8", trend: "−3" },
  { label: "Resolved", value: "23", trend: "today" },
]

function MonitoringGraphic() {
  return (
    <Shell>
      {/* KPI strip */}
      <div className="flex gap-1.5">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="flex-1 bg-white ring-1 ring-black/[0.04] rounded-lg px-2.5 py-2 flex flex-col items-center"
            {...stagger(i, 0.1)}
          >
            <span className="text-[15px] font-bold text-[#171717] leading-none">{kpi.value}</span>
            <span className="text-[8px] font-medium text-black/30 mt-0.5">{kpi.label}</span>
            <span className="text-[7px] font-semibold text-[#01544F] mt-0.5">{kpi.trend}</span>
          </motion.div>
        ))}
      </div>

      {/* Mini bar chart */}
      <motion.div
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3 text-[#01544F]" />
            <span className="text-[9px] font-semibold text-[#171717]">Collection activity</span>
          </div>
          <span className="text-[8px] font-medium text-black/30">This week</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {barData.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className="w-full rounded-sm bg-[#01544F]/15"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
              >
                {i === barData.length - 2 && (
                  <motion.div
                    className="w-full h-full rounded-sm bg-[#01544F]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                )}
              </motion.div>
              <span className="text-[7px] text-black/25 font-medium">{barLabels[i]}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Live pulse footer */}
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#01544F] opacity-50" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#01544F]" />
        </span>
        <span className="text-[8px] font-medium text-black/30">Monitoring 142 invoices across 38 accounts</span>
      </motion.div>
    </Shell>
  )
}

/* ── 2. Proactive Follow-up — Chat-thread style timeline ──── */

const threadMessages = [
  { align: "right" as const, label: "Invoice #4021 sent", delay: 0.2 },
  { align: "right" as const, label: "Friendly reminder", delay: 0.5 },
  { align: "left" as const, label: "Thanks, processing now!", delay: 0.9 },
  { align: "right" as const, label: "Due-date nudge", delay: 1.3 },
  { align: "left" as const, label: "Payment sent — $12,400", delay: 1.7 },
]

function FollowUpGraphic() {
  return (
    <Shell>
      {/* Thread header */}
      <motion.div
        className="flex items-center gap-2 px-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-[#01544F] flex items-center justify-center text-[8px] font-bold text-white">AC</div>
        <div>
          <span className="text-[10px] font-semibold text-[#171717] block leading-none">Apex Corp</span>
          <span className="text-[8px] text-black/30 font-medium">INV-4021 · $12,400</span>
        </div>
        <span className="ml-auto text-[8px] font-medium text-[#01544F] bg-[#01544F]/5 px-1.5 py-0.5 rounded">Paid</span>
      </motion.div>

      {/* Chat bubbles */}
      <div className="flex flex-col gap-1.5">
        {threadMessages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.align === "right" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: msg.delay, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className={`max-w-[80%] rounded-xl px-3 py-2.5 flex items-center ${
              msg.align === "right"
                ? "bg-[#01544F] text-white rounded-br-sm"
                : "bg-white ring-1 ring-black/[0.04] rounded-bl-sm"
            }`}>
              <span className={`text-[10px] font-semibold ${msg.align === "right" ? "" : "text-[#171717]"}`}>
                {msg.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Shell>
  )
}

/* ── 3. Invoice Confirmation — Document scan with animated checks ── */

const lineItems = [
  { desc: "Consulting Services", qty: "40 hrs", amount: "$8,000" },
  { desc: "Platform License", qty: "1 mo", amount: "$4,500" },
  { desc: "Implementation Fee", qty: "1x", amount: "$1,750" },
]

const verifySteps = [
  { label: "PO number matched", delay: 0.8 },
  { label: "Line items verified", delay: 1.0 },
  { label: "Amount confirmed", delay: 1.2 },
]

function ConfirmationGraphic() {
  return (
    <Shell>
      {/* Invoice document */}
      <motion.div
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-3.5 relative overflow-hidden"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-[#01544F]/30"
          initial={{ top: 0 }}
          animate={{ top: "100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
        />

        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-[11px] font-bold text-[#171717] block leading-tight">INV-09942</span>
            <span className="text-[8px] text-black/30 font-medium">Vanguard Logistics · PO-2024-089</span>
          </div>
          <div className="text-right">
            <span className="text-[13px] font-bold text-[#171717] block leading-tight">$14,250</span>
            <span className="text-[8px] text-black/30 font-medium">Net 30</span>
          </div>
        </div>

        <div className="h-px bg-black/[0.04] mb-2" />

        {/* Line items — simplified placeholder bars */}
        <div className="flex flex-col gap-1.5">
          {["w-full", "w-[85%]", "w-[70%]"].map((w, i) => (
            <motion.div
              key={i}
              className={`h-2 rounded-full bg-black/[0.04] ${w}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Verification results */}
      <div className="flex flex-col gap-1">
        {verifySteps.map((step) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-2 px-3 py-1.5 bg-white ring-1 ring-[#01544F]/10 rounded-lg"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: step.delay }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-[#01544F]/10 flex items-center justify-center shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: step.delay + 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <Check className="w-2.5 h-2.5 text-[#01544F]" strokeWidth={3} />
            </motion.div>
            <span className="text-[9px] font-medium text-[#171717]">{step.label}</span>
          </motion.div>
        ))}
      </div>

    </Shell>
  )
}

/* ── 4. Smart Escalation — Risk funnel with animated routing ── */

const channels = [
  { icon: Phone, label: "Call", preferred: true },
  { icon: Mail, label: "Email", preferred: false },
  { icon: MessageSquare, label: "SMS", preferred: false },
]

const aiPrompts = [
  "Avg days-to-pay?",
  "Open disputes?",
  "Last contact method?",
  "SMS response history?",
  "Best tone?",
]

function EscalationGraphic() {
  const [promptIdx, setPromptIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setPromptIdx((i) => (i + 1) % aiPrompts.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <Shell>
      {/* Contact card */}
      <motion.div
        className="px-3 py-2.5 flex items-center gap-3 border-b border-black/[0.04]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#01544F] flex items-center justify-center text-[10px] font-bold text-white shrink-0">JR</div>
        <div className="flex-1 min-w-0">
          <span className="text-[12px] font-bold text-[#171717] block leading-tight">Jamie Rivera</span>
          <span className="text-[9px] text-black/30 font-medium block leading-none mt-0.5">AP Manager · Meridian Supply Co.</span>
        </div>
      </motion.div>

      {/* AI prompt box — rotating questions */}
      <motion.div
        className="px-3 py-2.5 relative -mb-1.5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#01544F]/10 flex items-center justify-center shrink-0">
            <Zap className="w-3 h-3 text-[#01544F]" />
          </div>
          <span className="text-[9px] font-semibold text-[#01544F] shrink-0">Lunica is analyzing</span>
          <div className="h-[14px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={promptIdx}
                className="text-[10px] font-medium text-black/50 block"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              >
                {aiPrompts[promptIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Channel + timing row */}
      <motion.div
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-[8px] font-semibold text-black/25 uppercase tracking-wider block mb-2">Best channel</span>
        <div className="flex gap-1.5 mb-2.5">
          {channels.map((ch, i) => {
            const Icon = ch.icon
            return (
              <motion.div
                key={ch.label}
                className={`flex-1 flex flex-col items-center gap-1 py-1.5 rounded-md ring-1 ${
                  ch.preferred
                    ? "bg-[#01544F] ring-[#01544F]/30"
                    : "bg-black/[0.01] ring-black/[0.04]"
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
              >
                <Icon className={`w-3.5 h-3.5 ${ch.preferred ? "text-white" : "text-black/20"}`} />
                <span className={`text-[8px] font-bold ${ch.preferred ? "text-white" : "text-black/25"}`}>{ch.label}</span>
              </motion.div>
            )
          })}
        </div>

        <span className="text-[8px] font-semibold text-black/25 uppercase tracking-wider block mb-1.5">Best time to reach</span>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-black/[0.04] rounded-full relative">
            {/* Step tick marks */}
            {[0, 25, 50, 75, 100].map((pct) => (
              <div
                key={pct}
                className="absolute top-1/2 -translate-y-1/2 w-px h-2 bg-black/[0.06]"
                style={{ left: `${pct}%` }}
              />
            ))}
            {/* Highlighted time window */}
            <motion.div
              className="absolute top-0 left-[30%] w-[25%] h-full rounded-full bg-[#01544F]/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            />
          </div>
          <motion.span
            className="text-[9px] font-semibold text-[#01544F] shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            9–11am
          </motion.span>
        </div>
      </motion.div>
    </Shell>
  )
}
