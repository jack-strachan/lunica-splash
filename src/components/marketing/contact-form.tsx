"use client"

import { useState } from "react"
import { FlipText } from "@/components/ui/flip-text"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center rounded-lg bg-[#EDE7DF] px-8 py-16">
        <h3 className="text-2xl !font-normal leading-[1.08] tracking-tight text-foreground">
          Thanks for reaching out.
        </h3>
        <p className="mt-3 text-base !leading-tight text-foreground/60">
          We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5 rounded-lg bg-[#EDE7DF] p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
          placeholder="jane@company.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
          placeholder="Acme Inc."
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="resize-none rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
          placeholder="Tell us what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        <FlipText text="Send message" />
      </button>
    </form>
  )
}
