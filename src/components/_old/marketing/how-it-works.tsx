import { Settings, RefreshCw, BarChart3, Target } from "lucide-react"
import { HowItWorksVisual } from "@/components/_old/marketing/how-it-works-visual"

import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"

const iconMap = {
  Settings,
  RefreshCw,
  BarChart3,
  Target,
}

export function HowItWorksSection() {
  const { howItWorks } = homeContent

  return (
    <Section spacing="xl" className="bg-[#FAFAFA] border-b border-border py-24 relative px-0" id="platform">
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0"></div>

      <div className="relative z-10 w-full">
        <Container className="mb-16">
          {/* Top Section: Text left, Visual right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="mb-6 block font-mono text-[11px] tracking-widest text-primary uppercase font-bold">
                {howItWorks.badge}
              </span>
              <h2 className="mb-6 text-foreground text-4xl md:text-[3rem] leading-tight font-semibold tracking-[-0.04em]">
                {howItWorks.heading}
                <span className="text-primary">{howItWorks.highlightedHeading}</span>
              </h2>
              <Text size="lg" className="text-muted-foreground leading-relaxed text-[17px]">
                {howItWorks.description}
              </Text>
            </div>
            
            <HowItWorksVisual />
          </div>
        </Container>

        {/* Bottom Section: 4 Feature Cards */}
        <div className="grid md:grid-cols-4 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border bg-white mt-12 w-full">
          {howItWorks.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            const num = (index + 1).toString().padStart(2, '0')
            
            // Highlight the last card as active
            const isActive = index === 3;
            
            return (
              <div 
                key={index}
                className={`bg-white p-8 md:p-10 flex flex-col transition-colors duration-300 ${isActive ? 'bg-[#FAFAFA]' : 'hover:bg-[#FAFAFA]'}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${isActive ? 'bg-primary/5 border-primary/20' : 'bg-gray-50 border-border'}`}>
                    {Icon && <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />}
                  </div>
                  <span className="font-mono text-2xl font-bold text-border">
                    {num}
                  </span>
                </div>
                
                <h3 className="text-[15px] font-bold text-foreground mb-3 leading-snug tracking-normal">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
