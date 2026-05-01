"use client"

import { motion } from "motion/react"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { AlertCircle, Activity, Zap, CheckCircle2, Check, FileText, Database, GitMerge, MessageSquare, ShieldAlert } from "@/lib/nucleo-icons"

const features = [
  {
    id: 4,
    title: "Catch invoice mistakes before they become problems",
    description: "Lunica proactively checks invoices for errors so your team can fix issues early and avoid unnecessary payment delays.",
    icon: AlertCircle,
  },
  {
    id: 5,
    title: "Identify risk and recommend action",
    description: "Lunica monitors account health, flags collection risk early, and recommends the next best action for your team.",
    icon: Activity,
  },
  {
    id: 6,
    title: "Automate the collections workflow",
    description: "Automate repetitive collections work so your team can focus on the accounts that actually need human judgment.",
    icon: GitMerge,
  },
  {
    id: 7,
    title: "Send the right outreach on the right channel",
    description: "Lunica sends invoices, reminders, and follow-ups across the channels your customers actually use.",
    icon: MessageSquare,
  },
  {
    id: 8,
    title: "Mitigate disputes before they slow payment",
    description: "Lunica proactively surfaces disputes, gives your team a place to manage them, and helps keep revenue moving.",
    icon: ShieldAlert,
  },
]

function FeatureCopy({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="font-mono text-black/50 uppercase tracking-widest mb-4 font-medium text-sm">
        {feature.id.toString().padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center mb-6 shadow-sm">
        <feature.icon className="w-5 h-5 text-black/80" />
      </div>
      <h3 className="text-3xl md:text-4xl font-medium mb-4 tracking-[-0.02em] text-[#171717] leading-tight">
        {feature.title}
      </h3>
      <p className="text-lg text-black/60 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

function FeatureGraphic({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      {feature.id === 4 && <CatchMistakesGraphic />}
      {feature.id === 5 && <RiskAssessmentGraphic />}
      {feature.id === 6 && <WorkflowGraphic />}
      {feature.id === 7 && <OutreachGraphic />}
      {feature.id === 8 && <DisputeGraphic />}
    </motion.div>
  )
}

function CatchMistakesGraphic() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative z-10 w-full flex flex-col">
        <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white border border-black/[0.08] shadow-sm rounded-lg flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-[#171717]" />
            </div>
            <div>
              <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Invoice Review Required</div>
              <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest leading-none">Vanguard Logistics</div>
            </div>
          </div>
          <div className="h-8 px-3 rounded-lg border border-black/[0.08] bg-white flex items-center justify-center text-[12px] font-medium text-black/70 shadow-sm">
            INV-09942
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <div className="text-[14px] font-medium text-red-900 mb-1">Amount Mismatch Detected</div>
                <div className="text-[13px] text-red-700/80 leading-relaxed">
                  Invoice total does not match the expected total from PO-2024-089.
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[#FAFAFA] border border-black/[0.04] rounded-xl">
              <div className="text-[10px] text-black/50 font-mono uppercase tracking-widest mb-1.5 flex items-center justify-between">
                <span>PO System</span>
                <Database className="w-3 h-3 text-black/40" />
              </div>
              <div className="text-[18px] font-semibold text-[#171717] tracking-tight mb-1">$12,450.00</div>
              <div className="text-[12px] text-black/50 font-medium">Expected Total</div>
            </div>
            <div className="p-4 bg-white border border-red-200 rounded-xl shadow-sm ring-1 ring-red-500/10">
              <div className="absolute top-3 right-3 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </div>
              <div className="text-[10px] text-red-600/70 font-mono uppercase tracking-widest mb-1.5 flex items-center justify-between">
                <span>Extracted</span>
                <FileText className="w-3 h-3 text-red-600/50" />
              </div>
              <div className="text-[18px] font-semibold text-red-600 tracking-tight mb-1">$14,250.00</div>
              <div className="text-[12px] text-red-600/70 font-medium">Invoice Total</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-[#171717] text-white text-[13px] font-medium py-2.5 rounded-lg">
              Flag for Review
            </button>
            <button className="flex-1 bg-white border border-black/[0.08] text-[#171717] text-[13px] font-medium py-2.5 rounded-lg">
              Override & Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function RiskAssessmentGraphic() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative z-10 w-full flex flex-col">
        <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white border border-black/[0.08] shadow-sm rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#171717]" />
            </div>
            <div>
              <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Risk Intelligence</div>
              <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest leading-none">Portfolio Health</div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col">
          <div className="grid grid-cols-12 gap-4 px-5 py-3 text-[11px] font-mono text-black/40 uppercase tracking-widest border-b border-black/[0.04] bg-[#FAFAFA]/50">
            <div className="col-span-5">Customer</div>
            <div className="col-span-3">Risk Level</div>
            <div className="col-span-4 text-right">Exposure</div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-black/[0.04] items-center relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 text-[11px] font-bold shrink-0">MS</div>
                <div>
                  <div className="text-[13px] font-medium text-[#171717] leading-tight mb-0.5">Meridian Supply Co.</div>
                  <div className="text-[11px] text-black/50 font-mono">12 Days Past Due</div>
                </div>
              </div>
              <div className="col-span-3">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/50">
                  High Risk
                </span>
              </div>
              <div className="col-span-4 text-right">
                <div className="text-[14px] font-mono font-medium text-[#171717] leading-tight mb-0.5">$24,580.00</div>
                <div className="text-[11px] text-black/50">3 Invoices</div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-black/[0.04] items-center">
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-[11px] font-bold shrink-0">AC</div>
                <div>
                  <div className="text-[13px] font-medium text-[#171717] leading-tight mb-0.5">Apex Manufacturing</div>
                  <div className="text-[11px] text-black/50 font-mono">Due in 4 Days</div>
                </div>
              </div>
              <div className="col-span-3">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-[#FAFAFA] text-black/70 border border-black/[0.08]">
                  Medium Risk
                </span>
              </div>
              <div className="col-span-4 text-right">
                <div className="text-[14px] font-mono font-medium text-[#171717] leading-tight mb-0.5">$18,340.00</div>
                <div className="text-[11px] text-black/50">1 Invoice</div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="bg-[#171717] rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white text-[10px] font-medium uppercase tracking-widest">AI Recommendation</div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-[13px] text-white/80 leading-relaxed mb-3">
                Account shows pattern of late payments. Recommend immediate multi-channel escalation.
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 text-[11px] text-white/60 bg-white/10 px-2 py-1 rounded-md">
                  <span>Risk: <span className="text-amber-400 font-medium">84/100</span></span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/60 bg-white/10 px-2 py-1 rounded-md">
                  <span>Confidence: <span className="text-white font-medium">92%</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowGraphic() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden w-full flex flex-col">
        <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white border border-black/[0.08] shadow-sm rounded-lg flex items-center justify-center">
              <GitMerge className="w-4 h-4 text-[#171717]" />
            </div>
            <div>
              <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Workflow Builder</div>
              <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest leading-none">High Risk Sequence</div>
            </div>
          </div>
          <div className="h-8 px-3 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center text-[12px] font-medium text-primary shadow-sm gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-primary/20" />
            Active
          </div>
        </div>
        <div className="bg-[#FAFAFA]/30 p-6">
          <div className="relative max-w-[360px] mx-auto">
            <div className="absolute top-4 bottom-4 left-[23px] w-px bg-gradient-to-b from-primary via-primary to-black/10"></div>
            <div className="space-y-6">
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center z-10 shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div className="pt-1.5 flex-1">
                  <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest mb-1">Trigger</div>
                  <div className="bg-white border border-black/[0.04] p-3 rounded-xl shadow-sm">
                    <div className="text-[13px] font-medium text-[#171717]">Invoice becomes Overdue</div>
                    <div className="text-[12px] text-black/60 mt-0.5">And Account Risk is High</div>
                  </div>
                </div>
              </div>
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center z-10 shrink-0 relative">
                  <MessageSquare className="w-5 h-5 text-[#171717]" />
                  <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  </div>
                </div>
                <div className="pt-1.5 flex-1">
                  <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest mb-1 flex items-center justify-between">
                    <span>Day 1 Action</span>
                    <span className="text-primary">Executed</span>
                  </div>
                  <div className="bg-white border border-black/[0.04] p-3 rounded-xl shadow-sm">
                    <div className="text-[13px] font-medium text-[#171717]">Send Email Reminder</div>
                    <div className="text-[12px] text-black/60 mt-0.5 mb-2">Template: High Risk Escalation v2</div>
                    <div className="flex gap-2">
                      <span className="bg-[#FAFAFA] border border-black/[0.08] text-black/70 px-2 py-0.5 rounded text-[10px] font-medium">Email</span>
                      <span className="bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded text-[10px] font-medium">Opened</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center z-10 shrink-0">
                  <div className="w-5 h-5 rounded-full border-2 border-black/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                  </div>
                </div>
                <div className="pt-1.5 flex-1">
                  <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest mb-1 flex items-center justify-between">
                    <span>Day 3 Action</span>
                    <span>Pending</span>
                  </div>
                  <div className="bg-white border border-black/[0.04] p-3 rounded-xl shadow-sm opacity-60">
                    <div className="text-[13px] font-medium text-[#171717]">Send SMS Notification</div>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-[#FAFAFA] border border-black/[0.08] text-black/70 px-2 py-0.5 rounded text-[10px] font-medium">SMS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OutreachGraphic() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden w-full flex flex-col">
        <div className="flex border-b border-black/[0.04] bg-[#FAFAFA]/80 backdrop-blur-sm px-2 pt-2 gap-1">
          <div className="px-4 py-2.5 border-b-2 border-[#171717] text-[13px] font-medium text-[#171717] bg-white rounded-t-lg shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">Timeline</div>
          <div className="px-4 py-2.5 text-[13px] font-medium text-black/50">Emails</div>
          <div className="px-4 py-2.5 text-[13px] font-medium text-black/50">SMS</div>
          <div className="px-4 py-2.5 text-[13px] font-medium text-black/50">Calls</div>
        </div>
        <div className="p-5 bg-white">
          <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px before:h-full before:w-px before:bg-black/[0.04]">
            <div className="relative flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/[0.08] flex items-center justify-center shrink-0 z-10 relative">
                <MessageSquare className="w-4 h-4 text-[#171717]" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-[#171717]">Automated SMS</span>
                    <span className="bg-[#FAFAFA] border border-black/[0.04] text-black/60 px-1.5 py-0.5 rounded text-[10px] font-medium">Delivered</span>
                  </div>
                  <span className="text-[11px] text-black/40">10:42 AM</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-xl rounded-tl-sm text-[13px] text-blue-900 leading-relaxed shadow-sm">
                  Hi there, your invoice INV-2094 for $14,250 is due in 3 days. Tap to pay: <span className="text-blue-600 underline underline-offset-2">lnk.ca/p/2094</span>
                </div>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/[0.08] flex items-center justify-center shrink-0 z-10 relative">
                <FileText className="w-4 h-4 text-[#171717]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-[#171717]">Email: Invoice Attached</span>
                    <span className="bg-[#FAFAFA] border border-black/[0.04] text-primary px-1.5 py-0.5 rounded text-[10px] font-medium">Opened</span>
                  </div>
                  <span className="text-[11px] text-black/40">Yesterday</span>
                </div>
                <div className="bg-white border border-black/[0.08] p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center border border-red-100">
                      <span className="text-[10px] font-bold">PDF</span>
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-[#171717]">INV-2094.pdf</div>
                      <div className="text-[11px] text-black/50">142 KB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/[0.08] flex items-center justify-center shrink-0 z-10 relative">
                <Activity className="w-4 h-4 text-[#171717]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-[#171717]">Outbound Call</span>
                    <span className="bg-[#FAFAFA] border border-black/[0.04] text-amber-600 px-1.5 py-0.5 rounded text-[10px] font-medium">Voicemail</span>
                  </div>
                  <span className="text-[11px] text-black/40">Oct 12</span>
                </div>
                <div className="text-[13px] text-black/60 leading-relaxed bg-[#FAFAFA] p-3 rounded-xl border border-black/[0.04]">
                  Left voicemail with AP department regarding missing PO number.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DisputeGraphic() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden w-full flex flex-col">
        <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white border border-black/[0.08] shadow-sm rounded-lg flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Dispute Resolution</div>
              <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest leading-none">Active Cases</div>
            </div>
          </div>
          <div className="h-8 px-3 rounded-lg border border-amber-200 bg-amber-50 flex items-center justify-center text-[12px] font-medium text-amber-700 shadow-sm">
            2 Active
          </div>
        </div>
        <div className="bg-[#FAFAFA]/50 p-5 flex flex-col gap-4">
          <div className="bg-white border border-black/[0.08] rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[14px] font-medium text-[#171717]">INV-3012</span>
                  <span className="text-black/30">•</span>
                  <span className="text-[13px] text-black/60">Apex Corp</span>
                </div>
                <div className="text-[12px] font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block">Missing PO Number</div>
              </div>
              <div className="text-[15px] font-mono font-semibold text-[#171717]">$8,450.00</div>
            </div>
            <div className="flex gap-2 mb-5">
              <span className="bg-[#FAFAFA] border border-black/[0.08] text-black/70 px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Under Review
              </span>
              <span className="bg-[#FAFAFA] border border-black/[0.08] text-black/70 px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-[8px] font-bold">SJ</div>
                Sarah J.
              </span>
            </div>
            <div className="space-y-3 border-t border-black/[0.04] pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold shrink-0 ring-2 ring-white shadow-sm">SJ</div>
                <div className="bg-[#FAFAFA] border border-black/[0.04] rounded-xl rounded-tl-sm p-3 text-[13px] text-black/70 leading-relaxed w-full">
                  Reached out to the buyer. They&apos;re verifying the PO with procurement. Update by EOD.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-[#171717] text-white text-[13px] font-medium py-2.5 rounded-lg">
              Resolve Dispute
            </button>
            <button className="flex-1 bg-white border border-black/[0.08] text-[#171717] text-[13px] font-medium py-2.5 rounded-lg">
              Request Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureShowcaseSection() {
  return (
    <Section spacing="none" className="bg-white border-b border-border">
      <Container>
        <div className="py-24">
          <div className="mb-20 max-w-2xl mx-auto text-center">
            <span className="mb-6 inline-flex items-center justify-center px-3 py-1 rounded-full border border-black/[0.08] bg-white font-mono text-[11px] tracking-widest text-black/60 uppercase font-medium">
              Platform Capabilities
            </span>
            <h2 className="text-[#171717] text-4xl md:text-[3rem] leading-tight font-medium tracking-[-0.04em]">
              Intelligent tools for every stage of <span className="text-primary">collections</span>
            </h2>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {features.slice(0, 2).map((feature, index) => {
              const isReversed = index % 2 !== 0
              return (
                <div
                  key={feature.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${isReversed ? "md:[direction:rtl]" : ""}`}
                >
                  <div className={isReversed ? "md:[direction:ltr]" : ""}>
                    <FeatureCopy feature={feature} index={index} />
                  </div>
                  <div className={isReversed ? "md:[direction:ltr]" : ""}>
                    <FeatureGraphic feature={feature} index={index} />
                  </div>
                </div>
              )
            })}

            {/* Features 6, 7, 8 — three-column grid with copy on top, graphic below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.slice(2).map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div>
                    <div className="font-mono text-black/50 uppercase tracking-widest mb-3 font-medium text-sm">
                      {feature.id.toString().padStart(2, "0")}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center mb-4 shadow-sm">
                      <feature.icon className="w-5 h-5 text-black/80" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium mb-3 tracking-[-0.02em] text-[#171717] leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base text-black/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-full">
                    <FeatureGraphic feature={feature} index={index + 2} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
