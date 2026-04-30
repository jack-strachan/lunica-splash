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
} from "lucide-react"
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
            className="w-[320px] rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="mb-3 flex items-center gap-2 border-b border-black/[0.04] pb-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#01544F]">
                <span className="h-2.5 w-2.5 rounded-sm bg-white" />
              </div>
              <div>
                <span className="block text-[10px] font-bold leading-none text-[#171717]">Your brand here</span>
                <span className="mt-1 block text-[8px] font-medium leading-none text-black/35">Credit application</span>
              </div>
              <div className="ml-auto flex items-center gap-1 rounded-md bg-[#01544F]/8 px-2 py-1">
                <Check className="h-3 w-3 text-[#01544F]" />
                <span className="text-[8px] font-semibold text-[#01544F]">Desktop</span>
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
                  <span className="mb-1 block text-[8px] font-medium text-[#171717]/70">{field.label}</span>
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
            className="relative w-[154px] rounded-[1.4rem] bg-[#171717] p-1.5"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="rounded-[1rem] bg-white p-3">
              <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-black/10" />
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#01544F]">
                  <span className="h-2.5 w-2.5 rounded-sm bg-white" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold leading-none text-[#171717]">Your brand here</span>
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
                    <span className="mb-1 block text-[7px] font-medium text-[#171717]/70">{field.label}</span>
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
                className="mt-3 flex h-5 items-center justify-center rounded-md bg-[#01544F] text-[7px] font-bold text-white"
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

      <div className="mt-5 flex items-center gap-1 rounded-full bg-white px-1.5 py-1 ring-1 ring-black/[0.04]">
        {["desktop", "mobile"].map((mode) => (
          <div
            key={mode}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              view === mode ? "bg-[#01544F]" : "bg-black/10"
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
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#01544F] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-[#171717] leading-none">Underwriting queue</span>
              <span className="block text-[8px] font-medium text-black/30 mt-1 leading-none">Ready in minutes</span>
            </div>
          </div>
          <span className="text-[8px] font-semibold text-[#01544F] bg-[#01544F]/8 px-2 py-1 rounded-md">4 / 4</span>
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
                className="w-4 h-4 rounded-full bg-[#01544F]/10 flex items-center justify-center shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.45 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              >
                <Check className="w-2.5 h-2.5 text-[#01544F]" strokeWidth={3} />
              </motion.div>
              <span className="text-[9px] font-medium text-[#171717] flex-1">{step.label}</span>
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
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#01544F]/20" />
        <ArrowRight className="w-3.5 h-3.5 text-[#01544F]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#01544F]/20" />
      </motion.div>

      <motion.div
        className="bg-white ring-1 ring-[#01544F]/10 rounded-lg px-3 py-2.5 flex items-center gap-2.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 1.05 }}
      >
        <Clock className="w-4 h-4 text-[#01544F]" />
        <div>
          <span className="block text-[10px] font-bold text-[#171717] leading-none">Review packet assembled</span>
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
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-3"
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
                className="text-[#01544F]"
                initial={{ strokeDashoffset: 119.38 }}
                animate={{ strokeDashoffset: 119.38 * (1 - 0.78) }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#01544F]">78</span>
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] font-bold text-[#171717] leading-none">Credit scorecard</span>
            <span className="block text-[8px] font-medium text-black/35 mt-1.5 leading-none">AI + rules-based signals</span>
            <span className="inline-flex mt-2 text-[8px] font-semibold text-[#01544F] bg-[#01544F]/8 rounded-md px-2 py-1">Low risk</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-2.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.35 }}
      >
        <span className="text-[8px] font-semibold text-black/25 uppercase tracking-wider block mb-1.5">Signal strength</span>
        <div className="flex flex-col gap-1.5">
          {riskSignals.map((signal, i) => (
            <div key={signal.label} className="flex items-center gap-2">
              <span className="text-[8px] font-medium text-[#171717] w-[44%] shrink-0">{signal.label}</span>
              <div className="flex-1 h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#01544F]/35"
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
        className="bg-white ring-1 ring-black/[0.04] rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="block text-[11px] font-bold text-[#171717] leading-none">Approval workflow</span>
            <span className="block text-[8px] font-medium text-black/35 mt-1 leading-none">Standardized routing</span>
          </div>
          <Shield className="w-4 h-4 text-[#01544F]" />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute left-5 right-5 top-4 h-px bg-black/[0.06]" />
          <motion.div
            className="absolute left-5 top-4 h-px bg-[#01544F]/40"
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
                step.active ? "bg-[#01544F] text-white" : "bg-black/[0.04] text-black/30"
              }`}>
                {step.active ? <Check className="w-4 h-4" strokeWidth={3} /> : step.owner}
              </div>
              <span className={`text-[8px] font-semibold leading-tight text-center ${
                step.active ? "text-[#171717]" : "text-black/30"
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
        <div className="bg-white ring-1 ring-black/[0.04] rounded-lg px-3 py-2">
          <span className="block text-[13px] font-bold text-[#171717] leading-none">2h</span>
          <span className="block text-[8px] font-medium text-black/30 mt-1">avg approval</span>
        </div>
        <div className="bg-white ring-1 ring-[#01544F]/10 rounded-lg px-3 py-2">
          <span className="block text-[13px] font-bold text-[#01544F] leading-none">Ready</span>
          <span className="block text-[8px] font-medium text-black/30 mt-1">audit trail</span>
        </div>
      </motion.div>
    </Shell>
  )
}

function DisputesProofGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-7 top-[74px] w-32 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Proof upload</span>
        <span className="mt-1 block text-[8px] font-medium text-black/35">Delivery receipt</span>
        <div className="mt-3 rounded-md bg-black/[0.025] p-2">
          <div className="h-2 rounded bg-black/[0.06]" />
          <div className="mt-1.5 h-2 w-14 rounded bg-black/[0.04]" />
        </div>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 448 240" fill="none">
        <motion.path
          d="M156 120 C 198 120, 206 120, 244 120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-[#01544F]/25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        />
      </svg>

      <motion.div
        className="absolute left-[244px] top-[58px] w-36 rounded-xl bg-white p-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 10, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.45 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-[#01544F]" />
          <span className="text-[10px] font-bold text-[#171717]">Attached to case</span>
        </div>
        {["Receipt", "Photo", "Signature"].map((item, i) => (
          <motion.div
            key={item}
            className="mb-1.5 flex items-center justify-between rounded-md bg-[#01544F]/6 px-2 py-1.5"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.65 + i * 0.08 }}
          >
            <span className="text-[7px] font-semibold text-[#01544F]">{item}</span>
            <Check className="h-3 w-3 text-[#01544F]" strokeWidth={3} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function DisputesCollaborationGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-12 top-9 rounded-xl bg-white ring-1 ring-black/[0.04] overflow-hidden"
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
                className={`mb-1.5 rounded-md px-2 py-1.5 text-[7px] font-semibold ${i === 1 ? "bg-[#01544F]/8 text-[#01544F]" : "bg-black/[0.02] text-black/35"}`}
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
              <span className="text-[10px] font-bold text-[#171717]">Shared thread</span>
              <span className="rounded-md bg-[#01544F]/8 px-2 py-1 text-[7px] font-semibold text-[#01544F]">3 active</span>
            </div>
            <div className="space-y-2">
              {["Sales added context", "Ops checked delivery", "AR ready to respond"].map((item, i) => (
                <motion.div
                  key={item}
                  className="rounded-md bg-black/[0.018] px-2 py-1.5 ring-1 ring-black/[0.025]"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.48 + i * 0.09 }}
                >
                  <span className="text-[8px] font-medium text-[#171717]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function DisputesVisibilityGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center flex items-center justify-center">
      <motion.div
        className="relative h-40 w-40 rounded-full bg-white ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute inset-0 rounded-full border border-black/[0.04]" style={{ margin: 18 + i * 18 }} />
        ))}
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#01544F]" />
        {[
          ["Pricing", "left-0 top-8"],
          ["Short ship", "right-0 top-12"],
          ["Tax", "left-1/2 bottom-2 -translate-x-1/2"],
        ].map(([label, pos], i) => (
          <motion.div
            key={label}
            className={`absolute ${pos} rounded-lg bg-white px-2.5 py-2 ring-1 ring-black/[0.04]`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.35 + i * 0.1 }}
          >
            <span className="text-[8px] font-bold text-[#171717]">{label}</span>
          </motion.div>
        ))}
        {[25, 145, 90].map((rotate, i) => (
          <motion.div
            key={rotate}
            className="absolute left-1/2 top-1/2 h-px w-14 origin-left bg-[#01544F]/25"
            initial={{ scaleX: 0, rotate }}
            animate={{ scaleX: 1, rotate }}
            transition={{ duration: 0.35, delay: 0.55 + i * 0.08 }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function DisputesResolutionGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <div className="absolute left-8 top-[62px] flex flex-col gap-2">
        {["Triage", "Approval", "Customer confirmed"].map((step, i) => (
          <motion.div
            key={step}
            className="flex w-36 items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-black/[0.04]"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.15 + i * 0.12 }}
          >
            <div className={`h-4 w-4 rounded-full flex items-center justify-center ${i === 2 ? "bg-[#01544F]" : "bg-[#01544F]/10"}`}>
              {i === 2 ? <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} /> : <span className="text-[7px] font-bold text-[#01544F]">{i + 1}</span>}
            </div>
            <span className="text-[8px] font-semibold text-[#171717]">{step}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute right-8 top-[88px] w-32 rounded-xl bg-white p-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 12, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.65 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Resolved</span>
        <span className="mt-1 block text-[8px] font-medium text-black/35">Audit trail saved</span>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#01544F]/10 px-2 py-1">
          <Check className="h-3 w-3 text-[#01544F]" strokeWidth={3} />
          <span className="text-[7px] font-bold text-[#01544F]">Cash unblocked</span>
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
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-0 top-[78px] w-[155px] rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-3 flex items-center">
          <span className="text-[11px] font-bold text-[#171717]">Payment Link</span>
        </div>
        <div className="mb-2 flex h-7 items-center rounded-md border border-black/[0.06] bg-white">
          <span className="flex-1 truncate px-2 text-[8px] font-semibold text-[#171717]">payservice.co/pay/90234</span>
          <div className="flex h-full w-7 items-center justify-center border-l border-black/[0.06]">
            <Copy className="h-3.5 w-3.5 text-[#01544F]" />
          </div>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full bg-[#01544F]/10 px-2 py-1">
          <Check className="h-3 w-3 text-[#01544F]" strokeWidth={3} />
          <span className="text-[8px] font-semibold text-[#01544F]">Ready to share</span>
        </div>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 448 240" fill="none">
        {paymentChannels.map((channel, i) => (
          <motion.path
            key={channel.label}
            d={`M155 130 C 178 130, 178 ${channel.y}, 205 ${channel.y}`}
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

      <div className="absolute left-[205px] top-[54px] flex flex-col gap-2">
        {paymentChannels.map((channel, i) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.label}
              className="flex w-[92px] min-h-[32px] items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-black/[0.04]"
              initial={{ opacity: 0, x: 10, y: 4 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.32, delay: 0.45 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
            >
              <Icon className="h-4 w-4 shrink-0 text-[#01544F]" strokeWidth={2.25} />
              <span className="text-[9px] font-semibold leading-tight text-[#171717]">{channel.label}</span>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="absolute left-[326px] top-[112px] flex w-[122px] items-center gap-2.5 rounded-xl bg-white px-3 py-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 12, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#01544F]/12">
          <Check className="h-3.5 w-3.5 text-[#01544F]" strokeWidth={3} />
        </div>
        <div>
          <span className="block text-[10px] font-semibold leading-tight text-[#171717]">Less friction to pay</span>
        </div>
      </motion.div>
    </div>
  )
}

function PaymentCheckoutGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-5 top-[70px] w-32 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Invoice ready</span>
        <span className="mt-1 block text-[8px] font-medium text-black/35">$12,400 due</span>
        <div className="mt-3 h-2 rounded bg-black/[0.04]" />
        <div className="mt-1.5 h-2 w-16 rounded bg-black/[0.04]" />
      </motion.div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 448 240" fill="none">
        <motion.path
          d="M150 124 C 195 124, 208 124, 238 124"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-[#01544F]/25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        />
      </svg>

      <motion.div
        className="absolute left-[238px] top-8 w-[118px] rounded-[1.4rem] bg-[#171717] p-1.5"
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="rounded-[1rem] bg-white p-2.5">
          <div className="mx-auto mb-3 h-1 w-7 rounded-full bg-black/10" />
          <span className="block text-[8px] font-bold text-[#171717]">Checkout</span>
          <div className="mt-2 rounded-lg bg-[#01544F]/8 px-2 py-2">
            <span className="block text-[15px] font-bold leading-none text-[#01544F]">$12,400</span>
          </div>
          <motion.div
            className="mt-2 flex h-6 items-center justify-center rounded-md bg-[#01544F] text-[7px] font-bold text-white"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.75 }}
          >
            Tap to pay
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-10 bottom-9 rounded-full bg-white px-3 py-1.5 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.95 }}
      >
        <span className="text-[9px] font-bold text-[#01544F]">Paid in seconds</span>
      </motion.div>
    </div>
  )
}

function PaymentSecureGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-4 top-[76px] w-28 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Card data</span>
        <div className="mt-3 h-7 rounded-md bg-black/[0.03] px-2 py-1">
          <div className="h-1.5 w-16 rounded bg-black/[0.08]" />
          <div className="mt-1 h-1.5 w-10 rounded bg-black/[0.05]" />
        </div>
        <span className="mt-2 inline-flex text-[7px] font-semibold text-black/35">Sensitive</span>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 448 240" fill="none">
        <motion.path
          d="M128 120 C 180 120, 194 120, 232 120 C 270 120, 286 120, 330 120"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          className="text-[#01544F]/8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.path
          d="M128 120 C 180 120, 194 120, 232 120 C 270 120, 286 120, 330 120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-[#01544F]/35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
        />
      </svg>

      <motion.div
        className="absolute left-[190px] top-[82px] h-20 w-20 rounded-full bg-white ring-1 ring-[#01544F]/10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        <div className="h-12 w-12 rounded-full bg-[#01544F]/10 flex items-center justify-center">
          <Lock className="h-5 w-5 text-[#01544F]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-4 top-[78px] w-28 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.75 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Payment token</span>
        <div className="mt-3 h-7 rounded-md bg-[#01544F]/8 px-2 py-1">
          <div className="h-1.5 w-14 rounded bg-[#01544F]/25" />
          <div className="mt-1 h-1.5 w-8 rounded bg-[#01544F]/15" />
        </div>
        <span className="mt-2 inline-flex text-[7px] font-semibold text-[#01544F]">Protected</span>
      </motion.div>
    </div>
  )
}

function PaymentCollectionGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-6 top-[76px] w-28 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Invoice</span>
        <span className="mt-1 block text-[8px] font-medium text-black/35">INV-2041</span>
        <div className="mt-3 h-2 rounded bg-black/[0.04]" />
        <div className="mt-1.5 h-2 w-14 rounded bg-black/[0.04]" />
      </motion.div>

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 448 240" fill="none">
        <motion.path
          d="M132 120 C 180 120, 182 80, 224 80 C 266 80, 266 120, 316 120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-black/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.path
          d="M132 120 C 180 120, 182 160, 224 160 C 266 160, 266 120, 316 120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-black/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
        />
      </svg>

      {[
        ["Viewed", "left-[190px] top-[58px]"],
        ["Paid", "left-[190px] top-[140px]"],
      ].map(([label, pos], i) => (
        <motion.div
          key={label}
          className={`absolute ${pos} rounded-full bg-white px-3 py-1.5 ring-1 ring-black/[0.04]`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.55 + i * 0.15 }}
        >
          <span className="text-[8px] font-bold text-[#171717]">{label}</span>
        </motion.div>
      ))}

      <motion.div
        className="absolute right-5 top-[82px] w-28 rounded-xl bg-white p-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 10, scale: 0.94 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.9 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Bank posted</span>
        <span className="mt-2 block text-[18px] font-bold leading-none text-[#01544F]">+34%</span>
        <span className="mt-1 block text-[8px] font-semibold leading-none text-black/40">faster cash</span>
      </motion.div>
    </div>
  )
}

function PortalSelfServeGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-4 top-6 rounded-xl bg-white ring-1 ring-black/[0.04] overflow-hidden"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="h-7 bg-black/[0.02] border-b border-black/[0.04] flex items-center gap-1.5 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
          <span className="ml-2 text-[8px] font-semibold text-black/35">portal.customer.com</span>
        </div>
        <div className="grid grid-cols-[72px_1fr]">
          <div className="border-r border-black/[0.04] p-2 flex flex-col gap-1.5">
            {["Balance", "Invoices", "Docs"].map((item, i) => (
              <motion.div
                key={item}
                className={`h-6 rounded-md px-2 flex items-center text-[7px] font-semibold ${i === 0 ? "bg-[#01544F]/8 text-[#01544F]" : "bg-black/[0.02] text-black/30"}`}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.3 + i * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="p-3">
            <span className="block text-[9px] font-bold text-[#171717]">Current balance</span>
            <span className="block mt-1 text-[18px] font-bold text-[#01544F]">$12,400</span>
            <motion.div
              className="mt-3 h-7 rounded-md bg-[#01544F] flex items-center justify-center text-[8px] font-bold text-white"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              Pay now
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-6 rounded-lg bg-white px-3 py-2 ring-1 ring-[#01544F]/10 flex items-center gap-2"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.75 }}
      >
        <Clock className="h-3.5 w-3.5 text-[#01544F]" />
        <span className="text-[9px] font-bold text-[#171717]">24/7 access</span>
      </motion.div>
    </div>
  )
}

function PortalInvoicesGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-52 rounded-xl bg-white ring-1 ring-black/[0.04] p-3"
          style={{ zIndex: 3 - i }}
          initial={{ opacity: 0, x: "-50%", y: "-42%", rotate: 0, scale: 0.9 }}
          animate={{ opacity: 1, x: `calc(-50% + ${i * 14 - 14}px)`, y: `calc(-50% + ${i * 12 - 12}px)`, rotate: (i - 1) * 4, scale: 1 - i * 0.04 }}
          transition={{ duration: 0.45, delay: 0.15 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-[#171717]">INV-20{41 - i}</span>
            <span className={`text-[7px] font-semibold rounded px-1.5 py-0.5 ${i === 2 ? "text-[#01544F] bg-[#01544F]/8" : "text-black/35 bg-black/[0.04]"}`}>{i === 2 ? "Paid" : "Open"}</span>
          </div>
          <div className="space-y-1.5">
            {[82, 56, 70].map((w, j) => (
              <div key={j} className="h-2 rounded bg-black/[0.035]" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="mt-3 flex justify-between border-t border-black/[0.04] pt-2">
            <span className="text-[8px] font-medium text-black/35">Balance</span>
            <span className="text-[9px] font-bold text-[#171717]">{["$12,400", "$8,250", "$4,900"][i]}</span>
          </div>
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#01544F] px-3 py-1.5 text-[8px] font-bold text-white"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.3 }}
      >
        One place for every invoice
      </motion.div>
    </div>
  )
}

function PortalVisibilityGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center flex items-center justify-center">
      <motion.div
        className="relative h-40 w-40 rounded-full bg-white ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute inset-0 rounded-full border border-black/[0.04]" style={{ margin: 18 + i * 18 }} />
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#01544F]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35 }}
        />
        {[
          ["Open", "42k", "left-1 top-8"],
          ["Overdue", "6k", "right-0 top-10"],
          ["Paid", "31k", "left-1/2 bottom-2 -translate-x-1/2"],
        ].map(([label, value, pos], i) => (
          <motion.div
            key={label}
            className={`absolute ${pos} rounded-lg bg-white px-2.5 py-2 ring-1 ring-black/[0.04] text-center`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.45 + i * 0.1 }}
          >
            <span className="block text-[11px] font-bold leading-none text-[#171717]">${value}</span>
            <span className="mt-1 block text-[7px] font-medium leading-none text-black/35">{label}</span>
          </motion.div>
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 h-px w-16 origin-left bg-[#01544F]/30"
          initial={{ scaleX: 0, rotate: -28 }}
          animate={{ scaleX: 1, rotate: -28 }}
          transition={{ duration: 0.45, delay: 0.55 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-px w-14 origin-left bg-[#01544F]/30"
          initial={{ scaleX: 0, rotate: 42 }}
          animate={{ scaleX: 1, rotate: 42 }}
          transition={{ duration: 0.45, delay: 0.65 }}
        />
      </motion.div>
    </div>
  )
}

function PortalChasingGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <div className="absolute left-4 top-8 flex flex-col gap-2">
        {["Can you resend?", "What's the balance?", "Is this paid?"].map((msg, i) => (
          <motion.div
            key={msg}
            className="rounded-lg bg-white px-3 py-2 ring-1 ring-black/[0.04]"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: i === 2 ? 0.25 : 0.55, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
          >
            <span className="text-[8px] font-semibold text-black/40">{msg}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute right-4 top-12 w-40 rounded-xl bg-white p-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 12, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <Zap className="h-4 w-4 text-[#01544F]" />
          <span className="text-[10px] font-bold text-[#171717]">Portal resolves it</span>
        </div>
        {["Invoice found", "Balance shown", "Payment posted"].map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-2 py-1"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.75 + i * 0.1 }}
          >
            <Check className="h-3 w-3 text-[#01544F]" strokeWidth={3} />
            <span className="text-[8px] font-semibold text-[#171717]">{step}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#01544F]/10 px-3 py-1.5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
      >
        <span className="text-[9px] font-bold text-[#01544F]">−64% manual chasing</span>
      </motion.div>
    </div>
  )
}

function CustomerPortalAccessGraphic() {
  return (
    <div className="relative w-full max-w-lg h-72 mx-auto select-none pointer-events-none scale-[0.72] md:scale-100 origin-center">
      <div className="absolute left-4 top-8 flex flex-col gap-7">
        {[
          { label: "Phone calls", icon: Phone },
          { label: "Email threads", icon: Mail },
          { label: "Back-and-forth messages", icon: MessageSquare },
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="flex w-32 items-center gap-3 rounded-xl bg-white/85 p-3 ring-1 ring-black/[0.04]"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 0.78, x: 0 }}
              transition={{ duration: 0.35, delay: 0.12 + i * 0.12 }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.025]">
                <Icon className="h-4 w-4 text-[#01544F]/65" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[8px] font-semibold text-[#171717]/55">{item.label}</span>
                <div className="mt-2 h-1.5 rounded bg-black/[0.04]" />
                <div className="mt-1 h-1.5 w-10 rounded bg-black/[0.035]" />
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="absolute left-1/2 top-5 w-[260px] -translate-x-1/2 overflow-hidden rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.42, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-bold text-[#171717]">Account portal</span>
          <div className="flex items-center gap-1 rounded-md bg-black/[0.025] px-2 py-1">
            <Lock className="h-3 w-3 text-[#171717]/45" />
            <span className="text-[7px] font-semibold text-[#171717]/55">Secure access</span>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between rounded-lg bg-[#01544F]/[0.03] p-3 ring-1 ring-black/[0.025]">
          <div>
            <span className="block text-[10px] font-bold text-[#171717]">Welcome back, Alex</span>
            <span className="mt-1 block text-[7px] font-medium text-black/40">Here&apos;s what&apos;s happening with your account.</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01544F]/8">
            <Shield className="h-5 w-5 text-[#01544F]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            "Account overview",
            "Profile & settings",
            "Billing & invoices",
            "Payment methods",
            "Documents",
            "Support & messages",
          ].map((label, i) => (
            <motion.div
              key={label}
              className="rounded-lg bg-white px-2.5 py-2 ring-1 ring-black/[0.04]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.45 + i * 0.06 }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[7px] font-bold text-[#171717]">{label}</span>
                <ArrowRight className="h-2.5 w-2.5 text-black/25" />
              </div>
              <div className="mt-1.5 h-1 rounded bg-black/[0.035]" />
              <div className="mt-1 h-1 w-10 rounded bg-black/[0.025]" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute right-3 top-10 flex flex-col gap-7">
        {[
          ["Got answers faster", "Find what you need instantly"],
          ["Secure & private", "Protected and simple"],
          ["Save time", "Manage on your schedule"],
        ].map(([title, body], i) => (
          <motion.div
            key={title}
            className="w-36 rounded-xl bg-white/90 p-3 ring-1 ring-black/[0.04]"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.6 + i * 0.12 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <Check className="h-4 w-4 rounded-full bg-[#01544F]/10 p-0.5 text-[#01544F]" strokeWidth={3} />
              <span className="text-[8px] font-bold text-[#171717]">{title}</span>
            </div>
            <span className="block text-[7px] font-medium leading-tight text-black/35">{body}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CustomerPortalDocumentsGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-7 top-12 w-36 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Scattered files</span>
        <div className="mt-3 flex flex-col gap-2">
          {["Invoice.pdf", "Statement.csv", "Terms.doc"].map((file, i) => (
            <motion.div
              key={file}
              className="rounded-md bg-black/[0.025] px-2 py-1.5"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 + i * 0.08 }}
            >
              <span className="text-[7px] font-semibold text-black/45">{file}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 448 240" fill="none">
        {[98, 120, 142].map((y, i) => (
          <motion.path
            key={y}
            d={`M164 ${y} C 200 ${y}, 212 120, 248 120`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            className="text-[#01544F]/20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute right-8 top-8 w-44 rounded-xl bg-white p-3 ring-1 ring-[#01544F]/10"
        initial={{ opacity: 0, x: 12, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#171717]">Document center</span>
          <span className="rounded-md bg-[#01544F]/8 px-2 py-1 text-[7px] font-bold text-[#01544F]">Synced</span>
        </div>
        {["Invoices", "Statements", "Credit docs", "Payment info"].map((folder, i) => (
          <motion.div
            key={folder}
            className="mb-1.5 flex items-center justify-between rounded-md bg-[#01544F]/6 px-2 py-1.5"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.75 + i * 0.07 }}
          >
            <span className="text-[7px] font-semibold text-[#171717]">{folder}</span>
            <ArrowRight className="h-2.5 w-2.5 text-[#01544F]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function CustomerPortalActivityGraphic() {
  return (
    <div className="relative w-full max-w-xs h-56 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute inset-x-5 top-5 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#171717]">Account timeline</span>
          <Clock className="h-4 w-4 text-[#01544F]" />
        </div>
        <div className="relative pl-5">
          <div className="absolute bottom-2 left-[7px] top-1 w-px bg-black/[0.06]" />
          {[
            ["Payment posted", "$8,240"],
            ["Invoice viewed", "INV-2041"],
            ["Document downloaded", "Statement"],
            ["Profile updated", "Billing contact"],
          ].map(([event, detail], i) => (
            <motion.div
              key={event}
              className="relative mb-3 rounded-lg bg-black/[0.018] px-3 py-2 ring-1 ring-black/[0.025]"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.3 + i * 0.1 }}
            >
              <span className="absolute -left-[20px] top-3 h-2.5 w-2.5 rounded-full bg-[#01544F]" />
              <span className="block text-[8px] font-bold text-[#171717]">{event}</span>
              <span className="mt-0.5 block text-[7px] font-medium text-black/35">{detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function CustomerPortalSalesGraphic() {
  return (
    <div className="relative w-full max-w-md h-60 mx-auto select-none pointer-events-none scale-[0.78] md:scale-100 origin-center">
      <motion.div
        className="absolute left-5 top-16 w-36 rounded-xl bg-white p-3 ring-1 ring-black/[0.04]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="block text-[10px] font-bold text-[#171717]">Customer context</span>
        <div className="mt-3 space-y-2">
          {["Sales owner", "Account terms", "Open balance"].map((item, i) => (
            <motion.div
              key={item}
              className="rounded-md bg-black/[0.025] px-2 py-1.5"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 + i * 0.08 }}
            >
              <span className="text-[7px] font-semibold text-[#171717]/55">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[178px] top-9 h-36 w-36 rounded-full bg-white ring-1 ring-[#01544F]/10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.45 }}
      >
        <div className="absolute inset-4 rounded-full border border-[#01544F]/10" />
        <div className="absolute inset-8 rounded-full border border-[#01544F]/10" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#01544F]/10">
          <Shield className="h-6 w-6 text-[#01544F]" />
        </div>
      </motion.div>

      <div className="absolute right-5 top-12 flex flex-col gap-3">
        {["Sales", "Credit", "AR"].map((team, i) => (
          <motion.div
            key={team}
            className="flex w-28 items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-black/[0.04]"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.6 + i * 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#01544F]" />
            <span className="text-[8px] font-bold text-[#171717]">{team}</span>
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
