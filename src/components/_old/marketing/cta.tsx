import Link from "next/link"
import { Check } from "@/lib/nucleo-icons"

import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Heading } from "@/components/_old/ui/heading"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"

export function CtaSection() {
  const { cta } = homeContent

  return (
    <Section spacing="xl" className="bg-background">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-12 md:py-24">
          <Heading as="h2" size="h2" className="mb-6 text-center text-foreground tracking-tighter">
            {cta.heading}
          </Heading>
          <Text size="xl" muted className="mb-10 text-muted-foreground">
            {cta.description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button size="lg" asChild className="h-11 px-8 font-medium rounded-md">
              <Link href={cta.primaryCta.href}>
                {cta.primaryCta.text}
              </Link>
            </Button>
          </div>

          {cta.sellingPoints && cta.sellingPoints.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10">
              {cta.sellingPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Check className="h-4 w-4 text-[#002B31]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}


