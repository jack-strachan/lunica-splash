import { TrendingUp, BookOpen, Wrench } from "lucide-react"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { expertsContent } from "@/content/_old/experts"

const iconMap = {
  TrendingUp,
  BookOpen,
  Wrench,
}

export function WhatExpertsDo() {
  const { whatExpertsDo } = expertsContent

  return (
    <Section spacing="xl" className="bg-[#FAFAFA] border-b border-border relative">
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0" />

      <div className="relative z-10">
        <Container className="mb-16">
          <div className="max-w-2xl">
            <span className="mb-6 block font-mono text-[11px] tracking-widest text-primary uppercase font-bold">
              {whatExpertsDo.badge}
            </span>
            <h2 className="mb-5 text-foreground text-4xl md:text-[3rem] leading-tight font-semibold tracking-[-0.04em]">
              {whatExpertsDo.heading}
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              {whatExpertsDo.description}
            </p>
          </div>
        </Container>

        <div className="grid md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border bg-white w-full">
          {whatExpertsDo.roles.map((role, index) => {
            const Icon = iconMap[role.icon as keyof typeof iconMap]
            const num = (index + 1).toString().padStart(2, "0")
            const isActive = index === 0

            return (
              <div
                key={index}
                className={`p-8 md:p-10 flex flex-col transition-colors duration-300 ${
                  isActive ? "bg-[#FAFAFA]" : "bg-white hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                      isActive
                        ? "bg-primary/5 border-primary/20"
                        : "bg-gray-50 border-border"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-primary" : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                  <span className="font-mono text-2xl font-bold text-border">
                    {num}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-foreground mb-3 leading-snug tracking-normal">
                  {role.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
