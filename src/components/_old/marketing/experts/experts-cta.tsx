"use client"

import { useState } from "react"
import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { expertsContent } from "@/content/_old/experts"

export function ExpertsCta() {
  const { cta } = expertsContent
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section spacing="xl" className="bg-background" id="match">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="max-w-lg">
            <span className="mb-6 block font-mono text-[11px] tracking-widest text-primary uppercase font-bold">
              {cta.badge}
            </span>
            <h2 className="text-foreground text-4xl md:text-[3rem] leading-tight font-semibold tracking-[-0.04em] mb-5">
              {cta.heading}{" "}
              <span className="text-primary">{cta.subheading}</span>
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              {cta.description}
            </p>

            {/* Reassurances */}
            <div className="mt-10 flex flex-col gap-3">
              {[
                "No sales pressure — just an honest conversation",
                "Matched based on your industry and challenge",
                "Response within one business day",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-primary shrink-0" />
                  <span className="text-[14px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-[#FAFAFA] px-5 py-3">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
                Expert Match Request
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[10px] text-primary">FREE</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-foreground mb-1">
                    Request received
                  </div>
                  <div className="text-[13px] text-muted-foreground">
                    We&apos;ll match you with the right expert and reach out within one
                    business day.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                {cta.fields.map((field, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-mono text-muted-foreground uppercase tracking-widest">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        required
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
                      >
                        <option value="" disabled selected>
                          {field.placeholder}
                        </option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
                      />
                    )}
                  </div>
                ))}

                <Button size="md" type="submit" className="w-full mt-2">
                  {cta.primaryCta.text}
                </Button>

                <p className="text-[11px] font-mono text-muted-foreground text-center">
                  No spam. No obligation. Just a good conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
