import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { expertsContent } from "@/content/_old/experts"

export function ExpertsTestimonials() {
  const { testimonials } = expertsContent

  return (
    <Section spacing="xl" className="bg-background border-b border-border">
      <Container>
        <div className="mb-12">
          <span className="mb-4 block font-mono text-[11px] tracking-widest text-primary uppercase font-bold">
            CUSTOMER STORIES
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl leading-tight font-semibold tracking-[-0.04em] max-w-xl">
            Relationships that move the needle
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-border bg-background p-6 gap-5 hover:border-foreground/20 transition-colors duration-200"
            >
              {/* Quote mark */}
              <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.8 1.24-1.52 2.13-2.17L9.43 6c-.86.44-1.63 1.02-2.3 1.73C5.95 9.07 5.2 10.7 5.2 12.57c0 1.67.42 2.97 1.27 3.9.85.94 2.02 1.4 3.51 1.4.97 0 1.77-.3 2.4-.9.64-.6.96-1.37.96-2.31zm8.49 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.69-1.327-.817-.56-.128-1.07-.136-1.54-.022-.16-.95.1-1.95.78-3 .53-.8 1.24-1.52 2.13-2.17L17.92 6c-.86.44-1.63 1.02-2.3 1.73-1.18 1.34-1.93 2.97-1.93 4.84 0 1.67.42 2.97 1.27 3.9.85.94 2.02 1.4 3.51 1.4.97 0 1.77-.3 2.4-.9.64-.6.96-1.37.96-2.31z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-[14px] text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="pt-4 border-t border-border">
                <div className="text-[13px] font-semibold text-foreground">
                  {t.author}
                </div>
                <div className="text-[12px] font-mono text-muted-foreground mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
