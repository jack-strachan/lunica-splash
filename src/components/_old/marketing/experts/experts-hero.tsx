import Link from "next/link"
import { FlickeringGrid } from "@/components/_old/ui/flickering-grid"
import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Badge } from "@/components/_old/ui/badge"
import { Heading } from "@/components/_old/ui/heading"
import { Text } from "@/components/_old/ui/text"
import { expertsContent } from "@/content/_old/experts"

export function ExpertsHero() {
  const { hero } = expertsContent

  return (
    <Section
      spacing="xl"
      className="relative bg-background pt-12 md:pt-20 !pb-16 border-b border-border overflow-hidden"
    >
      <FlickeringGrid
        className="absolute inset-0 z-0"
        color="rgb(0, 0, 0)"
        maxOpacity={0.05}
        flickerChance={0.1}
        squareSize={4}
        gridGap={8}
      />
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-8 border-border bg-muted/50 text-foreground px-3 py-1 font-mono text-xs rounded-full"
          >
            {hero.badge}
          </Badge>

          <Heading
            as="h1"
            size="h1"
            className="max-w-4xl text-center tracking-tighter text-foreground mb-3"
          >
            {hero.heading}
          </Heading>

          <Text
            size="lg"
            muted
            className="max-w-2xl text-center leading-relaxed text-muted-foreground"
          >
            {hero.description}
          </Text>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button size="md" asChild>
              <Link href={hero.primaryCta.href}>{hero.primaryCta.text}</Link>
            </Button>
            <Button size="md" variant="outline" asChild>
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.text}</Link>
            </Button>
          </div>

          {/* Trust signal strip */}
          <div className="mt-12 flex items-center gap-6 text-center">
            {[
              { value: "6", label: "Active experts" },
              { value: "15+", label: "Years avg. experience" },
              { value: "3", label: "Specialization areas" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center px-6 first:pl-0 last:pr-0 [&:not(:last-child)]:border-r border-border">
                <span className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
