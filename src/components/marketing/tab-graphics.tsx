"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  Check,
  Clock,
  FileCheck,
  Mail,
  MessageSquare,
  Phone,
  Zap,
} from "lucide-react"
import type { ComponentType } from "react"

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

const headerAnim = {
  initial: { opacity: 0, x: -12 } as const,
  animate: { opacity: 1, x: 0 } as const,
  transition: { duration: 0.4, delay: 0.15 },
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-xs mx-auto select-none pointer-events-none scale-[0.7] md:scale-100 origin-center">
      {children}
    </div>
  )
}

/* ── 1. Always-on Monitoring ──────────────────────────────── */

const monitoringRows = [
  { id: "#INV-4021", name: "Apex Corp", amount: "$12,400", status: "overdue", label: "8d overdue" },
  { id: "#INV-4018", name: "Meridian Co.", amount: "$8,750", status: "warning", label: "Due in 2d" },
  { id: "#INV-4015", name: "Harlow Ltd", amount: "$23,100", status: "ok", label: "Due in 14d" },
] as const

const dotColor: Record<string, string> = { overdue: "bg-red-500", warning: "bg-amber-500", ok: "bg-emerald-500" }
const txtColor: Record<string, string> = { overdue: "text-red-500", warning: "text-amber-500", ok: "text-black/35" }

function MonitoringGraphic() {
  return (
    <Shell>
      <motion.div className="flex items-center justify-between" {...headerAnim}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-foreground/40">Live Monitoring</span>
        </div>
        <span className="text-[10px] font-medium text-foreground/30">3 tracked</span>
      </motion.div>

      {monitoringRows.map((row, i) => (
        <motion.div
          key={row.id}
          className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-3 py-2.5 flex items-center justify-between"
          {...stagger(i)}
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor[row.status]}`} />
            <div>
              <span className="text-[11px] font-semibold text-[#171717] block leading-tight">{row.name}</span>
              <span className="text-[9px] text-black/35 font-medium">{row.id}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold text-[#171717] block leading-tight">{row.amount}</span>
            <span className={`text-[9px] font-medium ${txtColor[row.status]}`}>{row.label}</span>
          </div>
        </motion.div>
      ))}

      <motion.div className="flex justify-end mt-0.5" {...stagger(3, 0.5)}>
        <span className="text-[10px] font-semibold text-white bg-[#002B31] px-2.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
          Next action queued
          <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </Shell>
  )
}

/* ── 2. Proactive Follow-up ───────────────────────────────── */

const followUpTimeline = [
  { icon: Mail, channel: "Email", label: "Invoice delivered", time: "Day 0", done: true },
  { icon: MessageSquare, channel: "SMS", label: "Friendly reminder", time: "Day −3", done: true },
  { icon: Mail, channel: "Email", label: "Due-date nudge", time: "Day −1", done: false },
  { icon: Phone, channel: "Call", label: "Follow-up if unpaid", time: "Day +3", done: false },
]

function FollowUpGraphic() {
  return (
    <Shell>
      <motion.div className="flex items-center justify-between" {...headerAnim}>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#002B31]/60" />
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-foreground/40">Scheduled Outreach</span>
        </div>
        <span className="text-[10px] font-medium text-foreground/30">INV-2094</span>
      </motion.div>

      {followUpTimeline.map((step, i) => {
        const Icon = step.icon
        return (
          <motion.div
            key={step.label}
            className={`bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-3 py-2.5 flex items-center gap-3 ${
              !step.done ? "opacity-50" : ""
            }`}
            {...stagger(i)}
          >
            <div className="w-7 h-7 rounded-full bg-white ring-1 ring-black/[0.04] flex items-center justify-center shrink-0 relative">
              <Icon className="w-3.5 h-3.5 text-[#171717]" />
              {step.done && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#002B31] rounded-full flex items-center justify-center">
                  <Check className="w-2 h-2 text-white" strokeWidth={3} />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#171717] leading-tight">{step.label}</span>
                <span className="text-[9px] font-medium text-black/35 shrink-0 ml-2">{step.time}</span>
              </div>
              <span className="text-[9px] text-black/35 font-medium">{step.channel}</span>
            </div>
          </motion.div>
        )
      })}
    </Shell>
  )
}

/* ── 3. Invoice Confirmation ──────────────────────────────── */

const confirmationChecks = [
  { label: "Invoice received" },
  { label: "Details verified" },
  { label: "No disputes raised" },
]

function ConfirmationGraphic() {
  return (
    <Shell>
      <motion.div className="flex items-center justify-between" {...headerAnim}>
        <div className="flex items-center gap-2">
          <FileCheck className="w-3.5 h-3.5 text-[#002B31]/60" />
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-foreground/40">Confirmation</span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Verified</span>
      </motion.div>

      <motion.div
        className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg p-4"
        {...stagger(0)}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[11px] font-semibold text-[#171717] block leading-tight">Vanguard Logistics</span>
            <span className="text-[9px] text-black/35 font-medium">INV-09942 · PO-2024-089</span>
          </div>
          <span className="text-[14px] font-bold text-[#171717]">$14,250</span>
        </div>

        <div className="h-px bg-black/[0.04] mb-3" />

        <div className="flex flex-col gap-2">
          {confirmationChecks.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.12 }}
            >
              <div className="w-4 h-4 rounded-full bg-[#002B31]/10 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#002B31]" strokeWidth={3} />
              </div>
              <span className="text-[11px] font-medium text-[#171717]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="text-[9px] text-black/30 text-center font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Confirmed by AP department · 2h ago
      </motion.p>
    </Shell>
  )
}

/* ── 4. Smart Escalation ──────────────────────────────────── */

function EscalationGraphic() {
  return (
    <Shell>
      <motion.div className="flex items-center justify-between" {...headerAnim}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-foreground/40">Auto-Escalation</span>
        </div>
        <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">High Priority</span>
      </motion.div>

      <motion.div
        className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg p-3.5"
        {...stagger(0)}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[11px] font-semibold text-[#171717] block leading-tight">Meridian Supply Co.</span>
            <span className="text-[9px] text-black/35 font-medium">3 invoices · $24,580 outstanding</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          <span className="bg-red-50 text-red-600 border border-red-100/60 px-1.5 py-0.5 rounded text-[9px] font-semibold">12d overdue</span>
          <span className="bg-amber-50 text-amber-600 border border-amber-100/60 px-1.5 py-0.5 rounded text-[9px] font-semibold">Risk: 84/100</span>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-2 py-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300" />
        <Zap className="w-3.5 h-3.5 text-amber-500" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300" />
      </motion.div>

      <motion.div
        className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-3.5 py-3 flex items-center gap-3"
        {...stagger(2, 0.4)}
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[11px] font-bold shrink-0 ring-2 ring-white/80">
          SJ
        </div>
        <div>
          <span className="text-[11px] font-semibold text-[#171717] block leading-tight">Escalated to Sarah J.</span>
          <span className="text-[9px] text-black/35 font-medium">Senior Collections · Auto-assigned</span>
        </div>
      </motion.div>

      <motion.div className="flex justify-end mt-0.5" {...stagger(3, 0.6)}>
        <span className="text-[10px] font-semibold text-white bg-[#002B31] px-2.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
          Review escalation
          <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </Shell>
  )
}
