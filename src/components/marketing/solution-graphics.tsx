"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Clock,
  FileText,
  Link2,
  Mail,
  RefreshCw,
  Send,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react"
import type { ComponentType } from "react"

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
  { name: "QuickBooks", abbr: "QB", color: "bg-emerald-100 text-emerald-700" },
  { name: "Salesforce", abbr: "SF", color: "bg-blue-100 text-blue-700" },
  { name: "Stripe", abbr: "St", color: "bg-violet-100 text-violet-700" },
  { name: "NetSuite", abbr: "NS", color: "bg-orange-100 text-orange-700" },
  { name: "SAP", abbr: "SA", color: "bg-amber-100 text-amber-700" },
  { name: "Xero", abbr: "Xe", color: "bg-cyan-100 text-cyan-700" },
]

function ConnectGraphic() {
  return (
    <Shell>
      <motion.div
        className="flex items-center gap-2 mb-1"
        {...stagger(0, 0.1)}
      >
        <Link2 className="w-3.5 h-3.5 text-[#002B31]/50" />
        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-foreground/40">Integrations</span>
      </motion.div>

      <div className="grid grid-cols-3 gap-1.5">
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg p-2.5 flex flex-col items-center gap-1.5"
            {...stagger(i, 0.15)}
          >
            <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center text-[10px] font-bold`}>
              {item.abbr}
            </div>
            <span className="text-[9px] font-medium text-black/40 leading-none">{item.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center gap-2 mt-1"
        {...stagger(6, 0.6)}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#002B31]/10" />
        <div className="w-7 h-7 rounded-full bg-[#002B31] flex items-center justify-center">
          <span className="text-[9px] font-bold text-white">L</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#002B31]/10" />
      </motion.div>

      <motion.p
        className="text-[9px] text-black/25 text-center font-medium"
        {...stagger(0, 0.7)}
      >
        Synced · Real-time
      </motion.p>
    </Shell>
  )
}

/* ── 2. Configure Your Rules ──────────────────────────────── */

const rules = [
  { icon: FileText, label: "Import customer\nand invoice data", active: true },
  { icon: Shield, label: "Review invoice\naccuracy", active: true },
  { icon: Send, label: "Send the right\nfollow-up", active: false },
  { icon: Settings, label: "Route exceptions\nfor approval", active: false },
]

const conditions = [
  { icon: Check, label: "Confirm if >85% confident" },
  { icon: AlertTriangle, label: "Flag if payment terms mismatch" },
  { icon: Zap, label: "Escalate if invoice >$25k" },
  { icon: Users, label: "Route to team if dispute detected" },
]

function ConfigureGraphic() {
  return (
    <Shell>
      <div className="flex gap-2">
        {/* Left — rule steps */}
        <div className="flex flex-col gap-1.5 flex-1">
          {rules.map((rule, i) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={rule.label}
                className={`bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-2.5 py-2 flex items-center gap-2 ${
                  rule.active ? "" : "opacity-40"
                }`}
                {...stagger(i, 0.15)}
              >
                <div className="w-5 h-5 rounded bg-[#002B31]/5 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-[#002B31]/60" />
                </div>
                <span className="text-[9px] font-medium text-[#171717] leading-tight whitespace-pre-line">{rule.label}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Right — conditions */}
        <div className="flex flex-col gap-1.5 flex-1">
          {conditions.map((cond, i) => {
            const Icon = cond.icon
            return (
              <motion.div
                key={cond.label}
                className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-2.5 py-2 flex items-center gap-2"
                {...stagger(i, 0.3)}
              >
                <div className="w-4 h-4 rounded-full bg-[#002B31]/8 flex items-center justify-center shrink-0">
                  <Icon className="w-2.5 h-2.5 text-[#002B31]/60" />
                </div>
                <span className="text-[8px] font-medium text-[#171717] leading-tight">{cond.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Shell>
  )
}

/* ── 3. Start Collecting Smarter ──────────────────────────── */

const triggers = [
  { label: "Due date\napproaching", icon: Clock },
  { label: "No recent\npayment", icon: AlertTriangle },
  { label: "Terms\nmismatch", icon: FileText },
]

const actions = [
  { label: "Send\nreminder", icon: Mail },
  { label: "Escalate\nto owner", icon: Users },
  { label: "Open dispute\nworkflow", icon: Shield },
  { label: "Sync status\nback", icon: RefreshCw },
]

function CollectGraphic() {
  return (
    <Shell>
      {/* Trigger row */}
      <div className="flex gap-1.5">
        {triggers.map((t, i) => {
          const Icon = t.icon
          return (
            <motion.div
              key={t.label}
              className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-2 py-2 flex-1 flex flex-col items-center gap-1.5"
              {...stagger(i, 0.1)}
            >
              <div className="w-5 h-5 rounded-full bg-[#002B31]/5 flex items-center justify-center">
                <Icon className="w-3 h-3 text-[#002B31]/50" />
              </div>
              <span className="text-[8px] font-medium text-black/40 leading-tight text-center whitespace-pre-line">{t.label}</span>
            </motion.div>
          )
        })}
      </div>

      {/* Central hub */}
      <motion.div
        className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-3 py-2.5 flex items-center gap-2.5"
        {...stagger(0, 0.35)}
      >
        <div className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <div>
          <span className="text-[10px] font-semibold text-[#171717] block leading-none mb-px">Live invoice monitoring</span>
          <span className="text-[8px] text-black/30 font-medium leading-none">Activity monitoring</span>
        </div>
      </motion.div>

      {/* Action row */}
      <div className="flex gap-1.5">
        {actions.map((a, i) => {
          const Icon = a.icon
          return (
            <motion.div
              key={a.label}
              className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-1.5 py-2 flex-1 flex flex-col items-center gap-1.5"
              {...stagger(i, 0.45)}
            >
              <div className="w-5 h-5 rounded-full bg-[#002B31]/5 flex items-center justify-center">
                <Icon className="w-3 h-3 text-[#002B31]/50" />
              </div>
              <span className="text-[8px] font-medium text-black/40 leading-tight text-center whitespace-pre-line">{a.label}</span>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom result */}
      <motion.div
        className="bg-[#FAF8F6] ring-1 ring-black/[0.04] rounded-lg px-3 py-2 flex items-center gap-2.5"
        {...stagger(0, 0.6)}
      >
        <div className="w-5 h-5 rounded-full bg-[#002B31]/10 flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 text-[#002B31]" strokeWidth={2.5} />
        </div>
        <div>
          <span className="text-[10px] font-semibold text-[#171717] block leading-none">Paid and updated</span>
          <span className="text-[8px] text-black/30 font-medium leading-none">Status synced across systems</span>
        </div>
      </motion.div>
    </Shell>
  )
}
