"use client"

import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { NoiseGradient } from "@/components/_old/marketing/noise-gradient"

const blocks = [
  {
    colors: ["#ED5C34", "#D53272", "#7743A6"] as [string, string, string],
    label: "CREDIT LINE",
    title: "Corporate",
  },
  {
    colors: ["#132D2B", "#314E4A", "#B28E5F"] as [string, string, string],
    label: "API",
    title: "Connect",
  },
  {
    colors: ["#7B85E3", "#E1B273", "#A983D3"] as [string, string, string],
    label: "CARDS",
    title: "Issue",
  },
  {
    colors: ["#E1B273", "#D53272", "#132D2B"] as [string, string, string],
    label: "LIMITS",
    title: "Scale",
  },
]

export function GradientBlocksSection() {
  return (
    <Section spacing="lg" className="relative overflow-hidden" style={{ background: "#EBE6DF" }}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {blocks.map((block, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "1 / 1.4" }}>
              <NoiseGradient colors={block.colors} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span
                  className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-[#EBE6DF] leading-none mb-1"
                >
                  {block.title}
                </span>
                <span
                  className="text-[0.6rem] uppercase tracking-[0.2em] font-medium text-[#EBE6DF]/80"
                >
                  {block.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
