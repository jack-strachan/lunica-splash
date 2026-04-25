import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"

export function TrustSection() {
  const { trust } = homeContent

  return (
    <Section spacing="sm" className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          <Text muted size="sm" className="font-mono text-xs tracking-widest uppercase text-gray-500">
            {trust.heading}
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {trust.logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center text-xl font-bold text-gray-900 tracking-tight">
                {/* Fallback to text if logos aren't ready yet */}
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

