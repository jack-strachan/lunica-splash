"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  Check,
  ChevronDown,
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
      <path d="M30.6437 0L8.93003 21.4307C8.93003 21.4307 8.09095 21.4307 6.98582 21.4307C0.109487 21.4307 -2.18263 15.5529 2.3402 11.089L13.5552 0H30.6232H30.6437Z" fill="#01544F"/>
      <path d="M9.07325 21.4312H30.6232L20.5338 31.3891H9.07325C4.98019 31.3891 2.42203 27.9957 5.08252 25.3699L9.07325 21.4312Z" fill="#066D6A"/>
    </svg>
  )
}

function ConnectGraphic() {
  return (
    <Shell>
      <div className="flex items-center gap-3 w-full">
        {/* Left: 2×2 logo grid in a container */}
        <motion.div
          className="rounded-xl ring-1 ring-black/[0.06] bg-[#FAF8F6] p-2.5 shrink-0"
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
              stroke="#01544F"
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
              fill="#01544F"
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
            className="absolute inset-0 rounded-xl bg-[#01544F]/20 blur-lg"
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
              <circle cx="36" cy="36" r="34" stroke="#01544F" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />
            </svg>
          </motion.div>
          {/* Card */}
          <div className="relative rounded-xl bg-[#01544F] px-4 py-4 shadow-lg shadow-[#01544F]/20">
            <LunicaIcon className="w-6 h-6 [&_path]:fill-white" />
          </div>
        </motion.div>
      </div>
    </Shell>
  )
}

/* ── 2. Configure Your Rules ──────────────────────────────── */

const ruleCards = [
  { icon: Send, label: "Follow-up timing", description: "When to send reminders", primary: true },
  { icon: AlertTriangle, label: "Escalation triggers", description: "When to flag for review" },
  { icon: Settings, label: "Routing rules", description: "Who handles what" },
]

const dropdownOptions = [
  { label: "Send after 3 days overdue", active: true },
  { label: "Remind weekly until paid", active: true },
  { label: "Pause if dispute open", active: false },
  { label: "Skip if <$100", active: false },
]

function ConfigureGraphic() {
  return (
    <Shell>
      <div className="flex flex-col gap-1.5 w-full">
        {ruleCards.map((rule, i) => {
          const Icon = rule.icon
          const isPrimary = rule.primary
          return (
            <div key={rule.label} className="flex flex-col">
              <motion.div
                className={`rounded-lg px-3 py-2.5 flex items-center gap-2.5 ${
                  isPrimary
                    ? "bg-[#01544F] ring-1 ring-[#01544F]/20"
                    : "bg-[#FAF8F6] ring-1 ring-black/[0.04]"
                }`}
                {...stagger(i, 0.15)}
              >
                <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                  isPrimary ? "bg-white/15" : "bg-[#002B31]/5"
                }`}>
                  <Icon className={`w-3.5 h-3.5 ${isPrimary ? "text-white/80" : "text-[#002B31]/50"}`} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`text-[10px] font-semibold leading-none ${isPrimary ? "text-white" : "text-[#171717]"}`}>
                    {rule.label}
                  </span>
                  <span className={`text-[8px] leading-none mt-0.5 ${isPrimary ? "text-white/50" : "text-black/30"}`}>
                    {rule.description}
                  </span>
                </div>
                {isPrimary && (
                  <motion.div
                    className="ml-auto"
                    animate={{ rotate: 180 }}
                    transition={{ delay: 1, duration: 0.3 }}
                  >
                    <ChevronDown className="w-3 h-3 text-white/50" />
                  </motion.div>
                )}
              </motion.div>

              {/* Animated dropdown for the primary card */}
              {isPrimary && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mt-px rounded-lg bg-[#FAF8F6] ring-1 ring-black/[0.04] p-2 flex flex-col gap-0.5">
                    {dropdownOptions.map((opt, j) => (
                      <motion.div
                        key={opt.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-black/[0.02]"
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 1.15 + j * 0.08 }}
                      >
                        <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 ${
                          opt.active ? "bg-[#01544F]" : "ring-1 ring-black/[0.1] bg-white"
                        }`}>
                          {opt.active && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <span className={`text-[9px] font-medium leading-none ${opt.active ? "text-[#171717]" : "text-black/35"}`}>
                          {opt.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
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
