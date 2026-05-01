import { Phone, CreditCard, Link2, LayoutDashboard, Users, Puzzle, MessageSquare, Shield, Smartphone, Zap, ArrowRight, CheckCircle2, FileText } from "@/lib/nucleo-icons"

import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"

const solutions = [
  {
    title: "Collections",
    description: "Proactively manage receivables before invoices go past due. Lunica confirms receipt, verifies correctness, and follows up automatically at the right moments.",
    details: ["Phone & SMS", "WhatsApp", "Email", "Dispute resolution"],
    icon: Phone,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-2",
    visual: (
      <div className="relative w-full h-40 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex items-center justify-center p-6 mt-8">
        <div className="absolute top-4 left-4 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="w-full max-w-sm space-y-3">
          <div className="bg-white border border-black/[0.08] p-3 rounded-lg shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#002B31]/10 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 text-[#002B31]" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-24 bg-black/10 rounded-full mb-2"></div>
              <div className="h-2 w-full bg-black/5 rounded-full"></div>
            </div>
            <div className="text-[10px] font-mono text-black/40">10:42 AM</div>
          </div>
          <div className="bg-white border border-black/[0.08] p-3 rounded-lg shadow-sm flex items-center gap-3 opacity-50 ml-6">
            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-black/40" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-16 bg-black/10 rounded-full mb-2"></div>
              <div className="h-2 w-3/4 bg-black/5 rounded-full"></div>
            </div>
            <div className="text-[10px] font-mono text-black/40">1d ago</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Credit",
    description: "Onboard new customers with digital credit applications. Automated risk assessment and AI-powered recommendations.",
    details: ["Digital applications", "Risk scoring", "AI recommendations"],
    icon: CreditCard,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-1",
    visual: (
      <div className="relative w-full h-40 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex flex-col items-center justify-center p-6 mt-8">
        <div className="w-full max-w-[200px] bg-white border border-black/[0.08] rounded-xl shadow-sm p-4 text-center">
          <div className="text-[10px] font-mono text-black/40 uppercase mb-2">Risk Score</div>
          <div className="text-3xl font-medium text-[#171717] mb-1">94<span className="text-lg text-black/30">/100</span></div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#002B31]/10 text-[#002B31] text-[10px] font-medium">
            <CheckCircle2 className="w-3 h-3" /> Approved
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Online Payments",
    description: "Create payment links easily to get paid faster. Mobile-friendly, secure, and shareable via text, email, or any channel.",
    details: ["Payment links", "Mobile-friendly", "Secure checkout"],
    icon: Link2,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-1",
    visual: (
      <div className="relative w-full h-40 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex items-center justify-center p-6 mt-8">
        <div className="w-full max-w-[200px] bg-white border border-black/[0.08] rounded-xl shadow-sm overflow-hidden">
          <div className="p-3 border-b border-black/[0.08] flex items-center justify-between bg-[#FAFAFA]">
            <div className="h-2 w-16 bg-black/10 rounded-full"></div>
            <div className="text-[10px] font-mono text-black/40">$4,500</div>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-8 w-full bg-black rounded-md flex items-center justify-center">
              <div className="h-2 w-12 bg-white/50 rounded-full"></div>
            </div>
            <div className="h-8 w-full border border-black/[0.08] rounded-md flex items-center justify-center">
              <div className="h-2 w-16 bg-black/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Payments Portal",
    description: "Streamline your accounts payable process end-to-end, so invoices get paid faster and nothing falls through the cracks.",
    details: ["End-to-end AP", "Invoice tracking", "Automated matching"],
    icon: LayoutDashboard,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-1",
    visual: (
      <div className="relative w-full h-40 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex items-center justify-center p-6 mt-8">
        <div className="w-full max-w-[220px] space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`bg-white border border-black/[0.08] p-2.5 rounded-lg flex items-center justify-between ${i === 3 ? 'opacity-40' : ''}`}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#FAFAFA] border border-black/[0.08] flex items-center justify-center">
                  <FileText className="w-3 h-3 text-black/40" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-12 bg-black/20 rounded-full"></div>
                  <div className="h-1.5 w-8 bg-black/10 rounded-full"></div>
                </div>
              </div>
              <div className="h-1.5 w-10 bg-[#002B31]/40 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Customer Portal",
    description: "Give your customers a seamless, secure self-service experience — purpose-built for the way sales-based organizations work.",
    details: ["Self-service", "Secure access", "Invoice history"],
    icon: Users,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-1",
    visual: (
      <div className="relative w-full h-40 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex items-center justify-center p-6 mt-8">
        <div className="w-full max-w-[200px] bg-white border border-black/[0.08] rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-black/[0.08]">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Users className="w-4 h-4 text-black/40" />
            </div>
            <div>
              <div className="h-2 w-20 bg-black/20 rounded-full mb-1.5"></div>
              <div className="h-1.5 w-12 bg-black/10 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-2 w-16 bg-black/10 rounded-full"></div>
            <div className="h-4 w-12 bg-black/5 rounded flex items-center justify-center">
              <div className="h-1 w-6 bg-black/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Integrations",
    description: "Connect to Slack, Teams, and the tools your team already uses. Match your workflows and save time across the board.",
    details: ["Slack", "Microsoft Teams", "Custom workflows"],
    icon: Puzzle,
    accent: "text-primary",
    accentBg: "bg-primary/5 border-primary/20",
    span: "lg:col-span-3",
    layout: "horizontal", // Flag to render text left, visual right
    visual: (
      <div className="relative w-full h-32 bg-[#FAFAFA] rounded-xl border border-black/[0.08] overflow-hidden flex items-center justify-center p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white border border-black/[0.08] rounded-xl shadow-sm flex items-center justify-center z-10 relative">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <div className="w-16 h-px bg-black/20 border border-dashed border-black/20"></div>
          <div className="w-12 h-12 bg-[#4A154B]/10 border border-[#4A154B]/20 rounded-xl flex items-center justify-center z-10 relative">
            <MessageSquare className="w-5 h-5 text-[#4A154B]" />
          </div>
        </div>
      </div>
    )
  },
]

export function SolutionsSection() {
  return (
    <Section spacing="none" className="bg-background border-b border-border py-24" id="solutions">
      <Container>
        <div className="max-w-2xl mb-16">
          <span className="mb-6 inline-flex items-center justify-center px-3 py-1 rounded-full border border-black/[0.08] bg-white font-mono text-[11px] tracking-widest text-black/60 uppercase font-medium">
            Platform
          </span>
          <h2 className="mb-5 text-foreground text-4xl md:text-[3rem] leading-tight font-medium tracking-[-0.04em]">
            Everything you need to{" "}
            <span className="text-primary">get paid</span>
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            A fully modular toolkit for managing receivables, credit, and customer relationships. Start with what you need today and expand as you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${solution.span} bg-background p-8 md:p-10 flex ${solution.layout === "horizontal" ? "flex-col lg:flex-row lg:items-center gap-12" : "flex-col"} group hover:bg-[#FAFAFA] transition-colors duration-300`}
            >
              <div className={`flex flex-col ${solution.layout === "horizontal" ? "lg:w-1/2" : "flex-1"}`}>
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${solution.accentBg}`}>
                    <solution.icon className={`w-5 h-5 ${solution.accent}`} />
                  </div>
                  {solution.layout !== "horizontal" && (
                    <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-black/50 group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </div>

                <h3 className="text-[17px] font-semibold text-foreground mb-2 tracking-[-0.01em]">
                  {solution.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* <div className="flex flex-wrap gap-2 mb-8">
                  {solution.details.map((detail, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium text-black/50 bg-[#FAFAFA] border border-black/[0.06] px-2.5 py-1 rounded-md"
                    >
                      {detail}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* <div className={`${solution.layout === "horizontal" ? "lg:w-1/2 mt-0" : "mt-auto"} w-full`}>
                {solution.visual}
              </div> */}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
