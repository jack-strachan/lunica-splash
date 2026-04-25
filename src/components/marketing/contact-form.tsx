"use client"

import { useState } from "react"
import { FlipText } from "@/components/ui/flip-text"
import { FormInput, FormTextarea } from "@/components/ui/form-field"

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
        <FormInput
          label="First name"
          id="firstName"
          name="firstName"
          type="text"
          required
          placeholder="Jane"
        />
        <FormInput
          label="Last name"
          id="lastName"
          name="lastName"
          type="text"
          required
          placeholder="Smith"
        />
      </div>

      <FormInput
        label="Work email"
        id="email"
        name="email"
        type="email"
        required
        placeholder="jane@company.com"
      />

      <FormInput
        label="Company"
        id="company"
        name="company"
        type="text"
        placeholder="Acme Inc."
      />

      <FormTextarea
        label="Message"
        id="message"
        name="message"
        rows={4}
        required
        placeholder="Tell us what you're looking for..."
      />

      <button
        type="submit"
        className="mt-2 self-start rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        <FlipText text="Send message" />
      </button>
    </form>
  )
}
