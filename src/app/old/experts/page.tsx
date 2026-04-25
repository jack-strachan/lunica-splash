import { ExpertsHero } from "@/components/_old/marketing/experts/experts-hero"
import { ExpertCards } from "@/components/_old/marketing/experts/expert-cards"
import { WhatExpertsDo } from "@/components/_old/marketing/experts/what-experts-do"
import { ExpertsTestimonials } from "@/components/_old/marketing/experts/experts-testimonials"
import { ExpertsCta } from "@/components/_old/marketing/experts/experts-cta"

export const metadata = {
  title: "Expert Network — Lunica",
  description:
    "Work with commission-based specialists who serve as sales reps, domain experts, and implementation guides for Lunica customers.",
}

export default function ExpertsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ExpertsHero />
      <ExpertCards />
      <WhatExpertsDo />
      <ExpertsTestimonials />
      <ExpertsCta />
    </div>
  )
}
