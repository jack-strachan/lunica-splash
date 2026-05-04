"use client"

import { motion, AnimatePresence } from "motion/react"
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  TrendingUp,
  Zap,
  Copy,
  Share2,
  Image as ImageIcon,
  Lock,
  Send,
  FileText,
} from "@/lib/nucleo-icons"
import { useState, useEffect, type ComponentType } from "react"

/* ── Registry ─────────────────────────────────────────────── */

const registry: Record<string, ComponentType> = {
  "collections-monitoring": MonitoringGraphic,
  "collections-followup": FollowUpGraphic,
  "collections-confirmation": ConfirmationGraphic,
  "collections-escalation": EscalationGraphic,
  "credit-applications": CreditApplicationsGraphic,
  "credit-underwriting": CreditUnderwritingGraphic,
  "credit-risk": CreditRiskGraphic,
  "credit-approvals": CreditApprovalsGraphic,
  "disputes-proof": DisputesProofGraphic,
  "disputes-collaboration": DisputesCollaborationGraphic,
  "disputes-visibility": DisputesVisibilityGraphic,
  "disputes-resolution": DisputesResolutionGraphic,
  "payments-links": PaymentLinksGraphic,
  "payments-checkout": PaymentCheckoutGraphic,
  "payments-secure": PaymentSecureGraphic,
  "payments-collection": PaymentCollectionGraphic,
  "portal-self-serve": PortalSelfServeGraphic,
  "portal-invoices": PortalInvoicesGraphic,
  "portal-visibility": PortalVisibilityGraphic,
  "portal-chasing": PortalChasingGraphic,
  "customer-portal-access": CustomerPortalAccessGraphic,
  "customer-portal-documents": CustomerPortalDocumentsGraphic,
  "customer-portal-activity": CustomerPortalActivityGraphic,
  "customer-portal-sales": CustomerPortalSalesGraphic,
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

function CreditApplicationsGraphic() {
  const [view, setView] = useState<"desktop" | "mobile">("desktop")

  useEffect(() => {
    const t = setInterval(() => {
      setView((current) => current === "desktop" ? "mobile" : "desktop")
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center flex flex-col items-center justify-start pt-2">
      <div className="relative flex h-[195px] w-full items-center justify-center">
        <AnimatePresence mode="wait">
        {view === "desktop" ? (
          <motion.div
            key="desktop-credit-application"
            className="w-[320px] rounded-xl bg-muted p-3 "
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="mb-3 flex items-center gap-2 border-b border-black/[0.04] pb-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand">
                <span className="h-2.5 w-2.5 rounded-sm bg-muted" />
              </div>
              <div>
                <span className="block text-[10px] font-bold leading-none text-foreground">Your brand here</span>
                <span className="mt-1 block text-[8px] font-medium leading-none text-black/35">Credit application</span>
              </div>
              <div className="ml-auto flex items-center gap-1 rounded-md bg-brand/8 px-2 py-1">
                <Check className="h-3 w-3 text-brand" />
                <span className="text-[8px] font-semibold text-brand">Desktop</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2.5 gap-y-2.5">
              {[
                { label: "Company name", widths: ["92%"], wide: true },
                { label: "Contact", widths: ["86%"] },
                { label: "Email", widths: ["74%"] },
                { label: "Requested terms", widths: ["84%"], wide: true },
                { label: "Tax ID / EIN", widths: ["70%"], wide: true },
              ].map((field, i) => (
                <div key={field.label} className={field.wide ? "col-span-2" : ""}>
                  <span className="mb-1 block text-[8px] font-medium text-foreground/70">{field.label}</span>
                  {field.widths.map((width, j) => (
                    <motion.div
                      key={`${field.label}-${j}`}
                      className="h-4 rounded bg-black/[0.035]"
                      style={{ width }}
                      initial={{ opacity: 0, scaleX: 0.7 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mobile-credit-application"
            className="relative w-[154px] rounded-[1.4rem] bg-foreground p-1.5"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="rounded-[1rem] bg-muted p-3">
              <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-black/10" />
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand">
                  <span className="h-2.5 w-2.5 rounded-sm bg-muted" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold leading-none text-foreground">Your brand here</span>
                  <span className="mt-1 block text-[7px] font-medium leading-none text-black/35">Mobile application</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Company", width: "88%" },
                  { label: "Contact", width: "76%" },
                  { label: "Terms", width: "92%" },
                  { label: "Tax ID", width: "68%" },
                ].map((field, i) => (
                  <div key={field.label}>
                    <span className="mb-1 block text-[7px] font-medium text-foreground/70">{field.label}</span>
                    <motion.div
                      className="h-4 rounded bg-black/[0.035]"
                      style={{ width: field.width }}
                      initial={{ opacity: 0, scaleX: 0.7 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.07, ease: [0.25, 1, 0.5, 1] }}
                    />
                  </div>
                ))}
              </div>

              <motion.div
                className="mt-3 flex h-5 items-center justify-center rounded-md bg-brand text-[7px] font-bold text-white"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Submit
              </motion.div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-1 rounded-full bg-muted px-1.5 py-1 ">
        {["desktop", "mobile"].map((mode) => (
          <div
            key={mode}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              view === mode ? "bg-brand" : "bg-black/10"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const underwritingSteps = [
  { label: "Application received", value: "Complete" },
  { label: "Trade references", value: "Matched" },
  { label: "Bank details", value: "Verified" },
  { label: "Terms requested", value: "Net 30" },
]

function CreditUnderwritingGraphic() {
  return (
    <Shell>
      <motion.div
        className="bg-muted  rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-foreground leading-none">Underwriting queue</span>
              <span className="block text-[8px] font-medium text-black/30 mt-1 leading-none">Ready in minutes</span>
            </div>
          </div>
          <span className="text-[8px] font-semibold text-brand bg-brand/8 px-2 py-1 rounded-md">4 / 4</span>
        </div>

        <div className="flex flex-col gap-1.5">
          {underwritingSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex items-center gap-2 rounded-md bg-black/[0.015] px-2 py-1.5 ring-1 ring-black/[0.03]"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                className="w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.45 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              >
                <Check className="w-2.5 h-2.5 text-brand" strokeWidth={3} />
              </motion.div>
              <span className="text-[9px] font-medium text-foreground flex-1">{step.label}</span>
              <span className="text-[8px] font-semibold text-black/35">{step.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-2 px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.35 }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand/20" />
        <ArrowRight className="w-3.5 h-3.5 text-brand" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand/20" />
      </motion.div>

      <motion.div
        className="bg-muted  rounded-lg px-3 py-2.5 flex items-center gap-2.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 1.05 }}
      >
        <Clock className="w-4 h-4 text-brand" />
        <div>
          <span className="block text-[10px] font-bold text-foreground leading-none">Review packet assembled</span>
          <span className="block text-[8px] font-medium text-black/35 mt-1 leading-none">No manual chase-down</span>
        </div>
      </motion.div>
    </Shell>
  )
}

const riskSignals = [
  { label: "Payment history", score: 82 },
  { label: "Trade references", score: 74 },
  { label: "Requested limit", score: 58 },
  { label: "Industry risk", score: 42 },
]

function CreditRiskGraphic() {
  return (
    <Shell>
      <motion.div
        className="bg-muted  rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 shrink-0">
            <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
              <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="4" className="text-black/[0.04]" />
              <motion.circle
                cx="24"
                cy="24"
                r="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="119.38"
                strokeLinecap="round"
                className="text-brand"
                initial={{ strokeDashoffset: 119.38 }}
                animate={{ strokeDashoffset: 119.38 * (1 - 0.78) }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-brand">78</span>
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] font-bold text-foreground leading-none">Credit scorecard</span>
            <span className="block text-[8px] font-medium text-black/35 mt-1.5 leading-none">AI + rules-based signals</span>
            <span className="inline-flex mt-2 text-[8px] font-semibold text-brand bg-brand/8 rounded-md px-2 py-1">Low risk</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-muted  rounded-lg p-2.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.35 }}
      >
        <span className="text-[8px] font-semibold text-black/25 uppercase tracking-wider block mb-1.5">Signal strength</span>
        <div className="flex flex-col gap-1.5">
          {riskSignals.map((signal, i) => (
            <div key={signal.label} className="flex items-center gap-2">
              <span className="text-[8px] font-medium text-foreground w-[44%] shrink-0">{signal.label}</span>
              <div className="flex-1 h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-brand/35"
                  initial={{ width: 0 }}
                  animate={{ width: `${signal.score}%` }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.09, ease: [0.25, 1, 0.5, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Shell>
  )
}

const approvalSteps = [
  { label: "Sales review", owner: "AR", active: true },
  { label: "Credit manager", owner: "CM", active: true },
  { label: "Controller approval", owner: "CO", active: false },
]

function CreditApprovalsGraphic() {
  return (
    <Shell>
      <motion.div
        className="bg-muted  rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="block text-[11px] font-bold text-foreground">Approval workflow</span>
            <span className="block text-[8px] font-medium text-black/35 mt-1 leading-none">Standardized routing</span>
          </div>
          <Shield className="w-4 h-4 text-brand" />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute left-5 right-5 top-4 h-px bg-black/[0.06]" />
          <motion.div
            className="absolute left-5 top-4 h-px bg-brand/40"
            initial={{ width: 0 }}
            animate={{ width: "52%" }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          />
          {approvalSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="relative z-10 flex flex-col items-center gap-1.5 w-20"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.12 }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold ${
                step.active ? "bg-brand text-white" : "bg-black/[0.04] text-black/30"
              }`}>
                {step.active ? <Check className="w-4 h-4" strokeWidth={3} /> : step.owner}
              </div>
              <span className={`text-[8px] font-semibold leading-tight text-center ${
                step.active ? "text-foreground" : "text-black/30"
              }`}>{step.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-1.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.85 }}
      >
        <div className="bg-muted  rounded-lg px-3 py-2">
          <span className="block text-[13px] font-bold text-foreground leading-none">2h</span>
          <span className="block text-[8px] font-medium text-black/30 mt-1">avg approval</span>
        </div>
        <div className="bg-muted  rounded-lg px-3 py-2">
          <span className="block text-[13px] font-bold text-brand leading-none">Ready</span>
          <span className="block text-[8px] font-medium text-black/30 mt-1">audit trail</span>
        </div>
      </motion.div>
    </Shell>
  )
}

function DisputesProofGraphic() {
  return (
    <div className="relative h-60 w-[360px] max-w-full mx-auto select-none pointer-events-none scale-[0.86] md:w-full md:max-w-md md:scale-100 origin-center">
      <motion.div
        className="absolute left-[36px] top-[66px] w-40 rounded-xl bg-muted p-4 md:left-[92px]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[12px] font-bold text-foreground">Proof upload</span>
        <span className="mt-1.5 block text-[9px] font-medium text-black/35">Delivery receipt</span>
        <div className="mt-4 rounded-lg bg-black/[0.025] p-3">
          <div className="h-2.5 rounded bg-black/[0.06]" />
          <div className="mt-2 h-2.5 w-20 rounded bg-black/[0.04]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[176px] top-[56px] w-40 p-3 md:left-[252px] md:w-52"
        initial={{ opacity: 0, x: 10, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.45 }}
      >
        <div className="relative h-[112px]">
          {[
            { label: "Receipt", type: "PDF", top: 0, rotate: -3, width: "w-[124px] md:w-[164px]", icon: Copy },
            { label: "Dock photo", type: "JPG", top: 30, rotate: 2, width: "w-[136px] md:w-[176px]", icon: ImageIcon },
            { label: "Signature", type: "PNG", top: 60, rotate: -1, width: "w-[120px] md:w-[156px]", icon: Send },
          ].map((item, i) => (
            (() => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className={`absolute left-1 ${item.width} rounded-lg border border-black/[0.04] bg-background px-3 py-2.5 shadow-sm`}
                  style={{ top: item.top, rotate: item.rotate }}
                  initial={{ opacity: 0, y: 8, rotate: item.rotate - 4 }}
                  animate={{ opacity: 1, y: 0, rotate: item.rotate }}
                  transition={{ duration: 0.3, delay: 0.65 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-1">
                      <Icon className="h-3 w-3 shrink-0 text-brand" />
                      <span className="truncate text-[8px] font-bold text-foreground">{item.label}</span>
                    </div>
                    <span className="rounded bg-brand/10 px-1.5 py-0.5 text-[6px] font-bold text-brand">{item.type}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Check className="h-3 w-3 shrink-0 text-brand" strokeWidth={3} />
                    <div className="h-2 flex-1 rounded bg-black/[0.05]" />
                  </div>
                </motion.div>
              )
            })()
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const collaboratorCursors = [
  { name: "Maya", color: "bg-brand text-white", x: 318, y: 86, mobileX: 286, mobileY: 82, drift: [[0, 0], [8, -5], [4, 6], [-5, 2], [0, 0]] },
  { name: "Jon", color: "bg-foreground text-white", x: 244, y: 144, mobileX: 238, mobileY: 134, drift: [[0, 0], [-7, 4], [5, 7], [9, -3], [0, 0]] },
  { name: "Priya", color: "bg-[#7f8f8c] text-white", x: 358, y: 172, mobileX: 300, mobileY: 168, drift: [[0, 0], [6, 5], [-8, 3], [-3, -6], [0, 0]] },
]

function DisputesCollaborationGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-12 top-9 rounded-xl bg-muted  overflow-hidden"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="grid grid-cols-[88px_1fr]">
          <div className="border-r border-black/[0.04] p-2.5">
            <span className="block text-[8px] font-bold text-black/30 mb-2">CASE</span>
            {["Sales", "Ops", "Credit", "AR"].map((item, i) => (
              <motion.div
                key={item}
                className={`mb-1.5 rounded-md px-2 py-1.5 text-[7px] font-semibold ${i === 1 ? "bg-brand/8 text-brand" : "bg-black/[0.02] text-black/35"}`}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.3 + i * 0.07 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Shared thread</span>
              <span className="rounded-md bg-brand/8 px-2 py-1 text-[7px] font-semibold text-brand">3 active</span>
            </div>
            <div className="space-y-2">
              {["Sales added context", "Ops checked delivery", "AR ready to respond"].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex min-h-9 items-center rounded-md bg-black/[0.018] px-2 ring-1 ring-black/[0.025]"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.48 + i * 0.09 }}
                >
                  <span className="text-[8px] font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {collaboratorCursors.map((cursor, i) => (
        <motion.div
          key={cursor.name}
          className={`absolute z-10 flex items-center gap-1 rounded-full px-2 py-1 text-[7px] font-bold shadow-sm md:hidden ${cursor.color}`}
          initial={{ opacity: 0, scale: 0.9, x: cursor.mobileX, y: cursor.mobileY }}
          animate={{
            opacity: 1,
            scale: [0.96, 1, 1, 0.98, 1],
            x: cursor.drift.map(([x]) => cursor.mobileX + x),
            y: cursor.drift.map(([, y]) => cursor.mobileY + y),
          }}
          transition={{ duration: 4.5, delay: 0.75 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-2.5 w-2.5 text-current" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.1 1.15L9.9 5.75L6.45 6.55L4.85 10.05L2.1 1.15Z" fill="currentColor" />
          </svg>
          <span>{cursor.name}</span>
        </motion.div>
      ))}
      {collaboratorCursors.map((cursor, i) => (
        <motion.div
          key={`${cursor.name}-desktop`}
          className={`absolute z-10 hidden items-center gap-1 rounded-full px-2 py-1 text-[7px] font-bold shadow-sm md:flex ${cursor.color}`}
          initial={{ opacity: 0, scale: 0.9, x: cursor.x, y: cursor.y }}
          animate={{
            opacity: 1,
            scale: [0.96, 1, 1, 0.98, 1],
            x: cursor.drift.map(([x]) => cursor.x + x),
            y: cursor.drift.map(([, y]) => cursor.y + y),
          }}
          transition={{ duration: 4.5, delay: 0.75 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-2.5 w-2.5 text-current" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.1 1.15L9.9 5.75L6.45 6.55L4.85 10.05L2.1 1.15Z" fill="currentColor" />
          </svg>
          <span>{cursor.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

function DisputesVisibilityGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.96] md:scale-100 origin-center flex items-center justify-center">
      <motion.div
        className="relative h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.72)_42%,rgba(255,255,255,0)_72%)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 176 176" fill="none">
          {[62, 42, 22].map((r, i) => (
            <motion.circle
              key={r}
              cx="88"
              cy="88"
              r={r}
              stroke="#005b56"
              strokeWidth="1"
              initial={{ opacity: 0.18, scale: 0.96 }}
              animate={{ opacity: [0.14, 0.34, 0.14], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 1.8, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "88px 88px" }}
            />
          ))}
          {[
            { x: 43, y: 62 },
            { x: 138, y: 78 },
            { x: 88, y: 144 },
          ].map((point, i) => (
            <motion.line
              key={`${point.x}-${point.y}`}
              x1="88"
              y1="88"
              x2={point.x}
              y2={point.y}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="text-brand/30"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.55 + i * 0.08 }}
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
        {[
          ["Pricing", "left-3 top-[50px]"],
          ["Short ship", "right-1 top-[66px]"],
          ["Tax", "left-1/2 bottom-5 -translate-x-1/2"],
        ].map(([label, pos], i) => (
          <motion.div
            key={label}
            className={`absolute ${pos} flex min-h-7 items-center rounded-lg bg-muted px-2.5`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.35 + i * 0.1 }}
          >
            <span className="text-[8px] font-bold text-foreground">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const resolutionTimeline = [
  { label: "Issue triaged", time: "9:17 AM", icon: MessageSquare },
  { label: "Credit memo generated", time: "9:21 AM", icon: Copy },
  { label: "Approved", time: "9:27 AM", icon: Shield },
  { label: "Customer confirmed", time: "9:41 AM", icon: Check },
]

function DisputesResolutionGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.94] md:scale-100 origin-center flex items-center justify-center">
      <motion.div
        className="relative w-full px-5 py-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="mb-5 pl-[calc(12.5%-1.25rem)]">
          <div>
            <span className="block text-[11px] font-bold leading-none text-foreground">Audit trail</span>
            <span className="mt-1 block text-[8px] font-medium leading-none text-black/35">Resolution path recorded</span>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-brand/35"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          />
          <div className="relative grid grid-cols-4 gap-2">
            {resolutionTimeline.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.12 }}
                >
                  <div className="relative z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_0_5px_rgba(0,91,86,0.10)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[8px] font-bold leading-tight text-foreground">{item.label}</span>
                  <span className="mt-1 text-[7px] font-medium leading-none text-black/35">{item.time}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const paymentChannels = [
  { label: "Email", icon: Mail, y: 72 },
  { label: "Text", icon: MessageSquare, y: 112 },
  { label: "Customer portal", icon: ImageIcon, y: 152 },
  { label: "Any channel", icon: Share2, y: 192 },
]

function PaymentLinksGraphic() {
  return (
    <div className="relative h-60 w-[360px] max-w-full mx-auto select-none pointer-events-none scale-[0.88] md:w-full md:max-w-md md:scale-100 origin-center">
      <motion.div
        className="absolute left-[32px] top-[78px] w-[155px] rounded-xl bg-muted p-3 md:left-[75px]"
        initial={{ opacity: 0, x: -10, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center">
          <span className="text-[11px] font-bold text-foreground">Payment Link</span>
        </div>
        <div className="mb-2 flex h-7 items-center rounded-md border border-black/[0.06] bg-muted">
          <span className="flex-1 truncate px-2 text-[8px] font-semibold text-foreground">payservice.co/pay/90234</span>
          <div className="flex h-full w-7 items-center justify-center border-l border-black/[0.06]">
            <Copy className="h-3.5 w-3.5 text-brand" />
          </div>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-1">
          <Check className="h-3 w-3 text-brand" strokeWidth={3} />
          <span className="text-[8px] font-semibold text-brand">Ready to share</span>
        </div>
      </motion.div>

      <svg className="absolute inset-0 hidden h-full w-full overflow-visible md:block" viewBox="0 0 448 240" fill="none">
        {paymentChannels.map((channel, i) => (
          <motion.path
            key={channel.label}
            d={`M230 130 C 253 130, 253 ${channel.y}, 280 ${channel.y}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            className="text-black/15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.35 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
          />
        ))}
      </svg>

      <div className="absolute left-[210px] top-[54px] flex flex-col gap-2 md:left-[280px]">
        {paymentChannels.map((channel, i) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.label}
              className="flex w-[104px] min-h-[32px] items-center gap-2 rounded-lg bg-muted px-3 py-2 md:w-[92px]"
              initial={{ opacity: 0, x: 10, y: 4 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.32, delay: 0.45 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
            >
              <Icon className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} />
              <span className="text-[9px] font-semibold leading-tight text-foreground">{channel.label}</span>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}

function PaymentCheckoutGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-[24px] top-[52px] w-36 rounded-xl bg-muted p-3 md:left-[62px]"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Invoice ready</span>
          <span className="rounded bg-brand/10 px-1.5 py-0.5 text-[6px] font-bold text-brand">LINK</span>
        </div>
        <span className="block text-[8px] font-medium text-black/35">INV-4021 · due today</span>
        <div className="mt-3 rounded-lg bg-black/[0.025] p-2">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-semibold text-black/35">Apex Corp</span>
            <span className="text-[8px] font-bold text-foreground">$12,400</span>
          </div>
          <div className="mt-2 h-1.5 rounded bg-black/[0.05]" />
          <div className="mt-1.5 h-1.5 w-16 rounded bg-black/[0.04]" />
        </div>
      </motion.div>

      <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 448 240" fill="none">
        <motion.path
          d="M206 106 H280"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-brand/25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.circle
          r="2"
          fill="currentColor"
          className="text-brand"
          initial={{ opacity: 0, cx: 206, cy: 106 }}
          animate={{ opacity: [0, 1, 1, 0], cx: [206, 230, 256, 280], cy: [106, 106, 106, 106] }}
          transition={{ duration: 1, delay: 0.65, repeat: Infinity, repeatDelay: 1.4, ease: "linear" }}
        />
      </svg>

      <motion.div
        className="absolute left-[218px] top-0 w-[116px] rounded-[1.75rem] bg-foreground p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:left-[280px]"
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="flex min-h-[188px] flex-col rounded-[1.25rem] bg-muted p-2.5">
          <div className="mx-auto h-1 w-7 rounded-full bg-black/10" />
          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[8px] font-bold text-foreground">Checkout</span>
              <Lock className="h-2.5 w-2.5 text-brand" />
            </div>
            <div className="rounded-lg bg-brand/8 px-2 py-2">
              <span className="mb-1 block text-[6px] font-bold uppercase tracking-wide text-brand/70">Amount due</span>
              <span className="block text-[15px] font-bold leading-none text-brand">$12,400</span>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-md bg-background px-2 py-1.5">
              <span className="text-[7px] font-semibold text-foreground">•••• 4242</span>
              <span className="text-[6px] font-bold text-black/30">VISA</span>
            </div>
            <motion.div
              className="mt-2 flex h-6 items-center justify-center rounded-md bg-brand text-[7px] font-bold text-white"
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
              transition={{ duration: 0.8, delay: 0.75, repeat: Infinity, repeatDelay: 1.8 }}
            >
              Tap to pay
            </motion.div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

function PaymentSecureGraphic() {
  const securityChecks = [
    { label: "PCI-ready checkout", delay: 0.55 },
    { label: "Tokenized card data", delay: 0.75 },
    { label: "Controlled access", delay: 0.95 },
  ]

  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.82] md:scale-100 origin-center">
      <motion.div
        className="absolute left-8 top-7 w-44 rounded-xl bg-muted p-3.5"
        initial={{ opacity: 0, x: -12, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Secure checkout</span>
          <Lock className="h-3.5 w-3.5 text-brand" />
        </div>
        <div className="rounded-lg bg-background p-3">
          <span className="mb-1 block text-[7px] font-bold uppercase tracking-wide text-black/35">Amount due</span>
          <span className="block text-[17px] font-bold leading-none text-foreground">$12,400</span>
          <div className="mt-3 flex items-center justify-between rounded-md bg-muted px-2 py-1.5">
            <span className="text-[8px] font-semibold text-foreground">•••• 4242</span>
            <span className="text-[7px] font-bold text-black/30">VISA</span>
          </div>
        </div>
        <div className="mt-3 flex h-7 items-center justify-center rounded-md bg-brand text-[8px] font-bold text-white">
          Pay securely
        </div>
      </motion.div>

      <div className="absolute right-8 top-9 flex w-44 flex-col gap-1.5">
        {securityChecks.map((check) => (
          <motion.div
            key={check.label}
            className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: check.delay, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <Check className="h-2.5 w-2.5 text-brand" strokeWidth={3} />
            </div>
            <span className="text-[9px] font-semibold text-foreground">{check.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PaymentCollectionGraphic() {
  return (
    <div className="relative flex h-60 w-full max-w-md select-none items-center justify-center mx-auto pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <div className="w-[300px]">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <span className="block text-[10px] font-bold text-foreground">Time to pay</span>
            <span className="mt-1 block text-[8px] font-medium text-black/35">Invoice delivery → payment posted</span>
          </div>
          <motion.div
            className="rounded-full bg-brand px-2.5 py-1 text-[8px] font-bold text-white"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.7 }}
          >
            3.2 days faster
          </motion.div>
        </div>

        <div className="flex h-28 items-end gap-3 border-b border-black/[0.08]">
          {[
            { label: "Manual", value: "6.8d", height: 100 },
            { label: "Email", value: "4.9d", height: 76 },
            { label: "Link", value: "2.8d", height: 48 },
            { label: "Portal", value: "1.2d", height: 26 },
          ].map((bar, i) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center">
              <span className="mb-1 text-[8px] font-bold text-foreground">{bar.value}</span>
              <motion.div
                className={`w-full rounded-t-md ${i === 3 ? "bg-brand" : "bg-brand/20"}`}
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-4 gap-3">
          {["Manual", "Email", "Link", "Checkout"].map((label) => (
            <span key={label} className="text-center text-[7px] font-semibold text-black/35">{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function PortalSelfServeGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.94] md:scale-100 origin-center">
      <motion.div
        className="absolute left-5 top-6 w-40 rounded-xl bg-muted p-3.5"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Credential session</span>
          <Lock className="h-3.5 w-3.5 text-brand" />
        </div>
        <div className="rounded-lg bg-background p-3">
          <span className="block text-[8px] font-semibold text-black/35">Coupa access</span>
          <span className="mt-1 block text-[11px] font-bold text-foreground">Encrypted handoff</span>
          <div className="mt-3 h-1.5 rounded bg-brand/20" />
          <div className="mt-1.5 h-1.5 w-2/3 rounded bg-brand/12" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-5 top-10 w-36 rounded-xl bg-muted p-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
        initial={{ opacity: 0, x: 12, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.35, delay: 0.35 }}
      >
        {["No stored passwords", "Short-lived tokens", "Customer controlled"].map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2 py-1.5"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.55 + i * 0.1 }}
          >
            <Check className="h-3 w-3 text-brand" strokeWidth={3} />
            <span className="text-[8px] font-semibold text-foreground">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function PortalInvoicesGraphic() {
  const portals = [
    { name: "Coupa", status: "Uploaded", delay: 0.45 },
    { name: "SAP Ariba", status: "Submitted", delay: 0.6 },
    { name: "Tungsten", status: "AI adapted", delay: 0.75 },
  ]

  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.94] md:scale-100 origin-center">
      <motion.div
        className="absolute left-4 top-14 w-36 rounded-xl bg-muted p-3.5"
        initial={{ opacity: 0, x: -10, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">INV-10482</span>
          <FileText className="h-3.5 w-3.5 text-brand" />
        </div>
        <div className="space-y-1.5">
          {[82, 58, 72].map((width, i) => (
            <div key={i} className="h-2 rounded bg-black/[0.04]" style={{ width: `${width}%` }} />
          ))}
        </div>
        <div className="mt-3 rounded-md bg-brand/8 px-2 py-1.5">
          <span className="text-[8px] font-bold text-brand">Ready for portal upload</span>
        </div>
      </motion.div>

      <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 320 224" fill="none">
        {portals.map((portal, i) => (
          <motion.path
            key={portal.name}
            d={`M145 112 C 172 112, 172 ${70 + i * 42}, 198 ${70 + i * 42}`}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="3 4"
            className="text-brand/25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
          />
        ))}
      </svg>

      <div className="absolute right-4 top-8 flex w-32 flex-col gap-2">
        {portals.map((portal) => (
          <motion.div
            key={portal.name}
            className="rounded-lg bg-muted px-3 py-2"
            initial={{ opacity: 0, x: 10, y: 4 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.32, delay: portal.delay, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-bold text-foreground">{portal.name}</span>
              <Check className="h-3 w-3 text-brand" strokeWidth={3} />
            </div>
            <span className="mt-1 block text-[7px] font-semibold text-black/35">{portal.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PortalVisibilityGraphic() {
  const statuses = [
    ["Coupa", "Accepted", "bg-brand/10 text-brand"],
    ["SAP Ariba", "Disputed", "bg-[#fff0f2] text-[#A85A6A]"],
    ["Oracle", "Needs update", "bg-black/[0.04] text-black/45"],
  ]

  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.94] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-4 top-0 rounded-xl bg-muted p-4"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Portal status</span>
          <span className="rounded-full bg-brand/8 px-2 py-1 text-[7px] font-bold text-brand">Live</span>
        </div>
        <div className="flex flex-col gap-2">
          {statuses.map(([portal, status, className], i) => (
            <motion.div
              key={portal}
              className="flex items-center justify-between gap-3 rounded-lg bg-background px-3 py-2"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.35 + i * 0.1 }}
            >
              <span className="text-[9px] font-semibold text-foreground">{portal}</span>
              <span className={`rounded px-2 py-1 text-[7px] font-bold ${className}`}>{status}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-3 rounded-lg border border-[#C97B84]/25 bg-[#C97B84]/[0.07] px-3 py-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.75 }}
        >
          <span className="text-[8px] font-bold text-[#A85A6A]">Dispute detected · routed instantly</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

function PortalChasingGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.94] md:scale-100 origin-center">
      <div className="absolute left-4 top-10 flex flex-col">
        {["Missing PO", "Tax ID mismatch", "Dispute note"].map((msg, i) => (
          <motion.div
            key={msg}
            className="flex min-h-10 items-center rounded-lg bg-muted px-3 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.02]"
            style={{ zIndex: 3 - i }}
            initial={{ opacity: 0, x: -8, rotate: 0 }}
            animate={{ opacity: i === 2 ? 0.45 : 0.72, x: i * 6, y: i * -3, rotate: [-2, 1.5, -1][i] }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
          >
            <span className="text-[8px] font-semibold text-black/50">{msg}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute right-4 top-12 w-40 rounded-xl bg-muted p-3 "
        initial={{ opacity: 0, x: 12, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <Zap className="h-4 w-4 text-brand" />
          <span className="text-[10px] font-bold text-foreground">Lunica resolves</span>
        </div>
        {["PO attached", "Field updated", "Routed to owner"].map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-2 py-1"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.75 + i * 0.1 }}
          >
            <Check className="h-3 w-3 text-brand" strokeWidth={3} />
            <span className="text-[8px] font-semibold text-foreground">{step}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function CustomerPortalAccessGraphic() {
  return (
    <div className="relative w-full max-w-lg h-72 mx-auto select-none pointer-events-none scale-[0.72] md:scale-100 origin-center">
      <motion.div
        className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 overflow-hidden rounded-xl bg-muted p-4 "
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.42, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-4">
          <span className="text-[12px] font-bold text-foreground">Amount due</span>
        </div>

        <div className="mb-4 rounded-lg bg-brand/[0.03] p-3 ring-1 ring-black/[0.025]">
          <div>
            <span className="block text-[8px] font-bold uppercase tracking-wide text-black/35">Net due today</span>
            <span className="mt-1 block text-[24px] font-bold leading-none text-foreground">$673,691.34</span>
            <span className="mt-1 block text-[8px] font-medium text-brand">After credits and open invoice adjustments</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {[
            ["Outstanding invoices", "$673,691.34"],
            ["Available credits", "-$0.00"],
            ["Finance charges", "$0.00"],
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              className="flex items-center justify-between rounded-lg bg-muted px-3 py-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.45 + i * 0.06 }}
            >
              <span className="text-[8px] font-semibold text-black/45">{label}</span>
              <span className="text-[9px] font-bold text-foreground">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute right-16 top-10 flex items-center gap-2 rounded-full bg-muted px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.65 }}
      >
        <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
        <span className="text-[8px] font-bold text-foreground">Pay exact balance</span>
      </motion.div>
    </div>
  )
}

function CustomerPortalDocumentsGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-7 top-12 z-10 w-36 rounded-xl bg-muted p-3 "
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-foreground">Card fee rules</span>
        <div className="mt-3 flex flex-col gap-2">
          {["Absorb fee", "Pass through", "Waive by customer"].map((rule, i) => (
            <motion.div
              key={rule}
              className={`flex min-h-9 items-center rounded-md px-2 ${i === 1 ? "bg-brand/8" : "bg-black/[0.025]"}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 + i * 0.08 }}
            >
              <span className={`text-[7px] font-semibold ${i === 1 ? "text-brand" : "text-black/45"}`}>{rule}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 448 240" fill="none">
        {[98, 134, 170].map((y, i) => (
          <motion.path
            key={y}
            d={`M164 ${y} C 198 ${y}, 212 120, 248 120`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            className="text-brand/20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute right-8 top-8 z-10 w-44 rounded-xl bg-muted p-3 "
        initial={{ opacity: 0, x: 12, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Checkout fee preview</span>
          <span className="rounded-md bg-brand/8 px-2 py-1 text-[7px] font-bold text-brand">Controlled</span>
        </div>
        {[
          ["Invoice total", "$12,400.00"],
          ["Card fee", "$372.00"],
          ["Customer pays", "$12,772.00"],
          ["ACH option", "$0.00 fee"],
        ].map(([label, value], i) => {
          return (
            <motion.div
              key={label}
              className="mb-1.5 flex items-center justify-between rounded-md bg-brand/6 px-2 py-1.5"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.75 + i * 0.07 }}
            >
              <span className="text-[7px] font-semibold text-foreground">{label}</span>
              <span className="text-[7px] font-bold text-brand">{value}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

function CustomerPortalActivityGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-5 top-0 p-3"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Pay by job</span>
          <FileText className="h-4 w-4 text-brand" />
        </div>
        <div className="space-y-2">
          {[
            ["North Yard", "$284,120", true],
            ["Route 12", "$96,440", true],
            ["Unassigned", "$293,131", false],
            ["Service Bay", "$0", false],
          ].map(([job, amount, selected], i) => (
            <motion.div
              key={job.toString()}
              className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 ring-1 ring-black/[0.025]"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className={`h-3.5 w-3.5 rounded border ${selected ? "border-brand bg-brand" : "border-black/20 bg-white"}`} />
                <span className="text-[8px] font-bold text-foreground">{job}</span>
              </div>
              <span className="text-[8px] font-semibold text-black/45">{amount}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-brand/8 px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-brand">Selected total</span>
            <span className="text-[9px] font-bold text-brand">$380,560</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function CustomerPortalSalesGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-9 top-8 z-10 w-52 rounded-xl bg-muted p-3.5"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 rounded-full bg-[linear-gradient(135deg,#d7c7b6,#5F746E)] p-0.5 ring-2 ring-white">
            <div
              className="h-full w-full rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1686063165043-45243dab25ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzaG90fGVufDB8fDB8fHww')",
              }}
            />
          </div>
          <div>
            <span className="block text-[11px] font-bold leading-tight text-foreground">Miles Chen</span>
            <span className="mt-0.5 block text-[7px] font-semibold text-brand">Senior account executive</span>
            <span className="mt-1 block text-[7px] font-medium text-black/35">Construction supply expert</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {[
            ["Direct line", "(415) 555-0184"],
            ["Territory", "West region"],
            ["Terms help", "Net 45 expert"],
            ["Product fit", "Heavy materials"],
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              className="rounded-md bg-background px-2.5 py-2"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.35 + i * 0.05 }}
            >
              <span className="block text-[6px] font-bold uppercase tracking-wide text-black/35">{label}</span>
              <span className="mt-1 block truncate text-[7px] font-bold text-foreground">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <svg className="absolute inset-0 z-0 h-full w-full overflow-visible" viewBox="0 0 448 240" fill="none">
        {[76, 112, 148].map((y, i) => (
          <motion.path
            key={y}
            d={`M220 120 C 250 120, 252 ${y}, 282 ${y}`}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-brand/22"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
          />
        ))}
      </svg>

      <div className="absolute right-9 top-[48px] z-10 flex flex-col gap-2">
        {[
          ["Miles", "Strategic accounts", true],
          ["Eli", "Northeast region", false],
          ["Priya", "Distributor accounts", false],
        ].map(([rep, specialty, active], i) => (
          <motion.div
            key={rep.toString()}
            className="flex w-32 items-center gap-2 rounded-lg bg-muted px-3 py-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.55 + i * 0.1 }}
          >
            <span className={`h-6 w-6 shrink-0 rounded-full ${active ? "bg-brand" : "bg-black/10"}`} />
            <div>
              <span className="block text-[8px] font-bold leading-none text-foreground">{rep}</span>
              <span className="mt-1 block text-[6px] font-semibold leading-none text-black/35">{specialty}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

/* ── 1. Always-on Monitoring — Live dashboard with mini bar chart ── */

const barData = [35, 55, 40, 70, 50, 85, 60]
const barLabels = ["M", "T", "W", "T", "F", "S", "S"]

const kpis = [
  { label: "Tracked", value: "142", trend: "+12%" },
  { label: "At risk", value: "8", trend: "−3" },
  { label: "Resolved", value: "23", trend: "+8%" },
]

function MonitoringGraphic() {
  return (
    <Shell>
      {/* KPI strip */}
      <div className="flex gap-1.5">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="flex-1 bg-muted  rounded-lg px-2.5 py-2 flex flex-col items-center"
            {...stagger(i, 0.1)}
          >
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-[15px] font-bold text-foreground leading-none">{kpi.value}</span>
              <span className="text-[7px] font-semibold text-brand leading-none">{kpi.trend}</span>
            </div>
            <span className="text-[8px] font-medium text-black/30 mt-0.5">{kpi.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Mini bar chart */}
      <motion.div
        className="bg-muted rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3 text-brand" />
            <span className="text-[9px] font-semibold text-foreground">Collection activity</span>
          </div>
          <span className="text-[8px] font-medium text-black/30">This week</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {barData.map((h, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center gap-1">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <motion.div
                  className={`absolute bottom-0 left-0 w-full rounded-sm ${i === barData.length - 2 ? "bg-brand" : "bg-brand/15"}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                />
              </div>
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
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
        <span className="text-[8px] font-medium text-black/30">Monitoring 142 invoices across 38 accounts</span>
      </motion.div>
    </Shell>
  )
}

/* ── 2. Proactive Follow-up — Chat-thread style timeline ──── */

const threadMessages = [
  { align: "right" as const, label: "Hi Sam — confirming INV-4021 is approved for Friday payment.", delay: 0.2 },
  { align: "left" as const, label: "Approved, but AP is missing the PO backup.", delay: 0.6 },
  { align: "right" as const, label: "Attached the PO and delivery receipt. Does this clear the hold?", delay: 1.0 },
  { align: "left" as const, label: "Yes — scheduling payment for Friday.", delay: 1.4 },
  { align: "right" as const, label: "Great. I’ll check back Friday morning if it hasn’t posted.", delay: 1.8 },
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
        <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-[8px] font-bold text-white">AC</div>
        <div>
          <span className="text-[10px] font-semibold text-foreground block -mb-2 leading-none">Apex Corp</span>
          <span className="text-[8px] text-black/30 font-medium">INV-4021 · $12,400</span>
        </div>
        <span className="ml-auto text-[8px] font-medium text-brand bg-brand/5 px-1.5 py-0.5 rounded">Paid</span>
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
                ? "bg-brand text-white rounded-br-sm"
                : "bg-muted  rounded-bl-sm"
            }`}>
              <span className={`text-[10px] font-semibold ${msg.align === "right" ? "" : "text-foreground"}`}>
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
        className="bg-muted  rounded-lg p-3.5 relative overflow-hidden"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-brand/30"
          initial={{ top: 0 }}
          animate={{ top: "100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
        />

        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-[11px] font-bold text-foreground block leading-tight">INV-09942</span>
            <span className="text-[8px] text-black/30 font-medium">Vanguard Logistics · PO-2024-089</span>
          </div>
          <div className="text-right">
            <span className="text-[13px] font-bold text-foreground block leading-tight">$14,250</span>
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
            className="flex items-center gap-2 px-3 py-1.5 bg-muted  rounded-lg"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: step.delay }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: step.delay + 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <Check className="w-2.5 h-2.5 text-brand" strokeWidth={3} />
            </motion.div>
            <span className="text-[9px] font-medium text-foreground">{step.label}</span>
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
        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white shrink-0">JR</div>
        <div className="flex-1 min-w-0">
          <span className="text-[12px] font-bold text-foreground block leading-tight">Jamie Rivera</span>
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
          <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
            <Zap className="w-3 h-3 text-brand" />
          </div>
          <span className="text-[9px] font-semibold text-brand shrink-0 leading-none">Lunica is analyzing</span>
          <div className="relative h-4 min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={promptIdx}
                className="block truncate text-[9px] font-medium leading-4 text-foreground/45"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
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
        className="bg-muted  rounded-lg p-2.5"
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
                    ? "bg-brand ring-brand/20"
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
              className="absolute top-0 left-[30%] w-[25%] h-full rounded-full bg-brand/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            />
          </div>
          <motion.span
            className="text-[9px] font-semibold text-brand shrink-0"
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
