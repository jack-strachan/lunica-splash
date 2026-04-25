"use client"

import Link from "next/link"

import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Badge } from "@/components/_old/ui/badge"
import { Heading } from "@/components/_old/ui/heading"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"
import { ScanAnimationVisual } from "@/components/_old/marketing/scan-animation"
import { NoiseGradient } from "@/components/_old/marketing/noise-gradient"

export function HeroSection() {
  const { hero } = homeContent

  return (
    <Section spacing="xl" className="relative pt-12 md:pt-20 !pb-16 overflow-hidden">
      {/* Noise gradient background with RTL fade */}
      <div className="absolute inset-0 z-0" style={{ background: "#F0EBE3" }}>
        <NoiseGradient colors={["#132D2B", "#314E4A", "#B28E5F"]} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #F0EBE3 0%, #F0EBE3 25%, transparent 65%)" }} />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 flex flex-col items-start text-left">
            <Badge variant="outline" className="mb-8 border-[#C4B5A4]/40 bg-[#E6DFD4] text-[#6B5D4D] px-3 py-1 font-mono text-xs rounded-full">
              {hero.badge}
            </Badge>
            
            <Heading
              as="h1"
              size="h1"
              className="max-w-xl tracking-tighter text-[#2A2318] mb-3"
            >
              {hero.heading}
            </Heading>
            
            <Text
              size="lg"
              muted
              className="max-w-md leading-relaxed text-[#6B5D4D]"
            >
              {hero.description}
            </Text>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="md" asChild>
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.text}
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.text}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Scan Animation */}
          <div className="flex-1 w-full md:max-w-[460px]">
            <ScanAnimationVisual className="w-full" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

