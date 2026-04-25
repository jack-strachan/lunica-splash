import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Heading } from "@/components/_old/ui/heading"
import { homeContent } from "@/content/_old/home"

export function OutcomesSection() {
  const { outcomes } = homeContent

  return (
    <Section spacing="xl" className="bg-background border-b border-border relative">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-6 font-mono text-xs tracking-widest text-primary uppercase font-bold">
            {outcomes.badge}
          </span>
          <Heading as="h2" size="h2" className="max-w-3xl text-foreground tracking-tighter">
            {outcomes.heading}
          </Heading>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {outcomes.stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-border bg-background group hover:border-foreground/20 transition-colors duration-300"
            >
              <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}





