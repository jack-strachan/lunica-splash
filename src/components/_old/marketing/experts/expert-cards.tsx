import Link from "next/link"
import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { expertsContent } from "@/content/_old/experts"

export function ExpertCards() {
  const { experts } = expertsContent

  return (
    <Section spacing="xl" className="bg-background border-b border-border" id="experts">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors duration-200 overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-start gap-4 p-6 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-border flex items-center justify-center shrink-0">
                  <span className="text-base font-bold text-foreground">
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-foreground leading-snug">
                    {expert.name}
                  </div>
                  <div className="text-[13px] text-muted-foreground mt-0.5">
                    {expert.title}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 gap-5">
                {/* Specialty + experience */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-mono font-bold text-primary bg-primary/5 border border-primary/20 rounded-md px-2.5 py-1">
                    {expert.specialty}
                  </span>
                  <span className="text-[12px] font-mono text-muted-foreground">
                    {expert.experience} exp.
                  </span>
                </div>

                {/* Bio */}
                <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
                  {expert.bio}
                </p>

                {/* Industries */}
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mb-2">
                    Industries
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {expert.industries.map((industry, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-mono text-muted-foreground bg-[#FAFAFA] border border-border rounded-md px-2 py-0.5"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button size="sm" variant="outline" asChild className="w-full mt-1">
                  <Link href="#match">Book a call</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
