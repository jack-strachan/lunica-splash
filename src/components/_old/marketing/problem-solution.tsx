import { Clock, FileText, Eye, AlertTriangle, Activity, CreditCard, TrendingUp } from "lucide-react"

import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Heading } from "@/components/_old/ui/heading"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"

const iconMap = { Clock, FileText, Eye, AlertTriangle }

export function ProblemSolutionSection() {
  const { problemSolution } = homeContent

  return (
    <Section spacing="xl" id="solutions" className="bg-background border-b border-border py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text + feature list */}
          <div>
            <span className="mb-5 inline-block font-mono text-xs tracking-widest text-primary uppercase font-bold">
               {problemSolution.badge}
            </span>
            <Heading as="h2" size="h2" className="text-foreground mb-5 tracking-tighter">
              {problemSolution.heading.replace(problemSolution.headingHighlight, "")}{" "}
              <span className="text-primary">{problemSolution.headingHighlight}</span>
            </Heading>
            <Text size="lg" className="text-muted-foreground mb-10 leading-relaxed">
              {problemSolution.description}
            </Text>

            <div className="flex flex-col gap-3 mb-8">
              {problemSolution.features.map((feature, i) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <div key={i} className="flex items-center gap-4 px-5 py-4 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors duration-200">
                    {Icon && <Icon className="w-4 h-4 text-primary shrink-0" />}
                    <span className="text-[15px] text-foreground">{feature.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-primary/20 bg-primary/5">
              <div className="w-2 h-2 rounded-sm bg-primary shrink-0" />
              <span className="text-[15px] text-foreground font-medium">{problemSolution.outcome}</span>
            </div>
          </div>

          {/* Right: Live account visual */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border bg-[#FAFAFA] px-5 py-3">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Account Overview</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] text-primary">LIVE</span>
              </div>
            </div>

            {/* Account card */}
            <div className="p-5 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">Meridian Group LLC</div>
                  <div className="text-xs text-muted-foreground font-mono">ACC-00412 · Net 30</div>
                </div>
                <span className="text-xs font-mono font-bold text-[#FF5F56] bg-[#FF5F56]/10 px-2 py-1 rounded-md">OVERDUE</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#FAFAFA] rounded-lg p-3 border border-border">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Outstanding</div>
                  <div className="text-sm font-bold text-foreground">$24,800</div>
                </div>
                <div className="bg-[#FAFAFA] rounded-lg p-3 border border-border">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Days Late</div>
                  <div className="text-sm font-bold text-[#FF5F56]">38 days</div>
                </div>
                <div className="bg-[#FAFAFA] rounded-lg p-3 border border-border">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Risk Score</div>
                  <div className="text-sm font-bold text-[#FFBD2E]">Medium</div>
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="p-5 border-b border-border">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-bold mb-3">Recent Activity</div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Email reminder sent", time: "2h ago", color: "bg-primary" },
                  { label: "Invoice viewed by customer", time: "1d ago", color: "bg-primary" },
                  { label: "Credit check completed", time: "3d ago", color: "bg-[#FFBD2E]" },
                  { label: "Payment promise logged", time: "5d ago", color: "bg-muted-foreground" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.color}`} />
                    <span className="text-[13px] text-foreground flex-1">{item.label}</span>
                    <span className="text-[11px] font-mono text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-border">
              {[
                { icon: Activity, label: "Avg DSO", value: "28d" },
                { icon: CreditCard, label: "Credit Limit", value: "$50k" },
                { icon: TrendingUp, label: "On-Time Rate", value: "71%" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex flex-col items-center py-4 gap-1">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground mb-1" />
                  <div className="text-sm font-bold text-foreground">{value}</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}







