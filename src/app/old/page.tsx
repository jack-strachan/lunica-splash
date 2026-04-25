import { HeroSection } from "@/components/_old/marketing/hero"
import { ResumeSection } from "@/components/_old/marketing/resume"
import { TrustSection } from "@/components/_old/marketing/trust"
import { ProblemSolutionSection } from "@/components/_old/marketing/problem-solution"
import { HowItWorksSection } from "@/components/_old/marketing/how-it-works"
import { ProblemSection } from "@/components/_old/marketing/problem"
import { GradientBlocksSection } from "@/components/_old/marketing/gradient-blocks"
import { InvoiceProcessSection } from "@/components/_old/marketing/invoice-process"
import { FeatureShowcaseSection } from "@/components/_old/marketing/feature-showcase"
import { SolutionsSection } from "@/components/_old/marketing/solutions"
import { OmnichannelSection } from "@/components/_old/marketing/omnichannel"
import { OutcomesSection } from "@/components/_old/marketing/outcomes"
import { CtaSection } from "@/components/_old/marketing/cta"

export default function OldHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      {/* <ResumeSection /> */}
      <ProblemSection />
      <GradientBlocksSection />
      <InvoiceProcessSection />
      <FeatureShowcaseSection />
      {/* <TrustSection /> */}
      {/* <HowItWorksSection /> */}
      <SolutionsSection />
      {/* <ProblemSolutionSection /> */}
      {/* <OmnichannelSection /> */}
      {/* <OutcomesSection /> */}
      <CtaSection />
    </div>
  )
}
