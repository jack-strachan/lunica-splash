import type { Metadata } from "next"
import Link from "next/link"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { Footer } from "@/components/layout/footer"
import { constructMetadata } from "@/lib/metadata"
import { FlipText } from "@/components/ui/flip-text"

export const metadata: Metadata = constructMetadata({
  title: "Collections",
  description:
    "Automate follow-ups, confirm invoices, escalate risk, and get cash in faster with Lunica Collections.",
})

const features = [
  {
    label: "Always-on monitoring",
    title: "Know where every dollar stands — in\u00a0real\u00a0time",
    description:
      "Lunica continuously tracks open receivables across your entire book. As invoices age, payments land, or behavior shifts, the system flags what matters and triggers the right next action — so nothing slips through the cracks.",
    details: [
      "Live receivables dashboard with aging, risk, and status views",
      "Automatic alerts when invoices become at-risk or overdue",
      "Behavior-based signals that surface problems before they escalate",
    ],
  },
  {
    label: "Proactive follow-up",
    title: "Reach out before invoices go\u00a0overdue",
    description:
      "Most teams only chase payments after they're late. Lunica flips that — automatically sending reminders, confirmations, and nudges before the due date, based on each customer's history and preferences.",
    details: [
      "Scheduled outreach sequences triggered by invoice age and terms",
      "Multi-channel delivery: email, SMS, and portal notifications",
      "Dynamic timing based on customer payment behavior",
    ],
  },
  {
    label: "Invoice confirmation",
    title: "Eliminate surprises at the due\u00a0date",
    description:
      "Late payments often start with a simple problem: the customer never received the invoice, or the amount was wrong. Lunica confirms receipt and accuracy early, so you're not fighting avoidable delays weeks later.",
    details: [
      "Automated delivery confirmation with read receipts",
      "Discrepancy detection that flags mismatches before they become disputes",
      "Clear audit trail for every invoice touchpoint",
    ],
  },
  {
    label: "Smart escalation",
    title: "Route the right accounts to the right\u00a0people",
    description:
      "Not every overdue invoice needs the same response. Lunica evaluates risk, amount, and customer history to determine the right escalation path — whether that's an automated reminder, a team assignment, or an executive escalation.",
    details: [
      "Rule-based routing by amount, days past due, and customer segment",
      "Automatic ownership assignment with full context handoff",
      "Escalation timelines that adapt to your internal SLAs",
    ],
  },
]

const stats = [
  { value: "40%", label: "Faster collection cycles" },
  { value: "3x", label: "More accounts managed per rep" },
  { value: "60%", label: "Reduction in manual follow-ups" },
  { value: "90%", label: "Invoice confirmation rate" },
]

export default function CollectionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-20 md:h-[92dvh] md:min-h-[650px]">
        <div className="relative ml-auto mt-4 h-[25dvh] w-[75%] overflow-hidden rounded-l-md md:absolute md:right-0 md:-top-20 md:h-[38dvh] md:w-2/3 md:rounded-none md:rounded-bl-md">
          <NoiseGradient colors={["#88b4a0", "#4a7a5c", "#3a6248"]} />
        </div>

        <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:pb-16 lg:px-20 lg:pb-20">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Collections
          </span>

          <h1 className="max-w-3xl text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            Get cash in faster with less&nbsp;effort
          </h1>

          <p className="mt-6 max-w-2xl text-lg !leading-tight text-foreground text-balance">
            Lunica Collections automates the entire receivables workflow &mdash;
            from proactive outreach to smart escalation &mdash; so your team
            spends less time chasing and more time&nbsp;collecting.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <FlipText text="Book a demo" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-background">
        <div className="mx-auto max-w-[1400px] px-5 pt-8 pb-20 lg:px-20 lg:pt-12 lg:pb-28">
          <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center bg-[#EBE7E3] px-6 py-10"
              >
                <p className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature deep-dives */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={feature.label}
            className={`w-full ${isEven ? "bg-background" : ""}`}
            style={!isEven ? { background: "#EDE7DF" } : undefined}
          >
            <div className={`mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[5fr_6fr] md:gap-20 lg:px-20 ${i === 0 ? "pt-20 pb-12 lg:pt-40 lg:pb-16" : "py-20 lg:py-40"}`}>
              {/* Copy */}
              <div className={`flex flex-col items-start justify-center ${!isEven ? "md:order-last" : ""}`}>
                <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                  {feature.label}
                </span>

                <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
                  {feature.title}
                </h2>

                <p className="mt-6 text-lg !leading-tight text-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Details grid */}
              <div className="grid gap-0.5 self-center overflow-hidden rounded-lg mt-auto">
                {feature.details.map((detail) => (
                  <div
                    key={detail}
                    className={`flex items-center px-6 py-8 ${
                      isEven ? "bg-[#EBE7E3]" : "bg-[#E3D7CD]"
                    }`}
                  >
                    <p className="text-base !leading-tight text-foreground">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* UI mockup block — shown under the first feature */}
            {i === 0 && (
              <div className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-20 lg:pb-28">
                <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]">
                  <NoiseGradient colors={["#88b4a0", "#4a7a5c", "#3a6248"]} />
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:p-14">
                    <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-2xl">
                      {/* Window chrome */}
                      <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      </div>
                      {/* Skeleton content */}
                      <div className="p-6">
                        <div className="h-4 w-1/3 rounded bg-black/[0.06]" />
                        <div className="mt-4 h-3 w-full rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-5/6 rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-2/3 rounded bg-black/[0.04]" />
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          <div className="h-20 rounded bg-black/[0.04]" />
                          <div className="h-20 rounded bg-black/[0.04]" />
                          <div className="h-20 rounded bg-black/[0.04]" />
                        </div>
                        <div className="mt-6 h-3 w-full rounded bg-black/[0.04]" />
                        <div className="mt-2 h-3 w-4/5 rounded bg-black/[0.04]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )
      })}

      {/* How it works */}
      <section className="relative w-full overflow-hidden" style={{ background: "#EDE7DF" }}>
        <svg
          className="pointer-events-none absolute right-0 top-0 translate-x-[20%] -translate-y-[30%]"
          width="550"
          height="550"
          viewBox="-1 -1 33 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.6437 0L8.93003 21.4307C8.93003 21.4307 8.09095 21.4307 6.98582 21.4307C0.109487 21.4307 -2.18263 15.5529 2.3402 11.089L13.5552 0H30.6232H30.6437Z" fill="none" stroke="#F5F2EB" strokeWidth="0.19" />
          <path d="M9.07325 21.4312H30.6232L20.5338 31.3891H9.07325C4.98019 31.3891 2.42203 27.9957 5.08252 25.3699L9.07325 21.4312Z" fill="none" stroke="#F5F2EB" strokeWidth="0.19" />
        </svg>

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-20 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
            <div>
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                How it works
              </span>

              <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Three steps to faster&nbsp;collections
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg !leading-tight text-foreground">
                Lunica plugs into your existing systems and starts working immediately.
                No months-long implementation. No ripping out what you&nbsp;have.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your data",
                description:
                  "Link your ERP, accounting system, and customer records. Lunica syncs invoices, terms, and payment history automatically.",
              },
              {
                step: "02",
                title: "Set your rules",
                description:
                  "Define when to follow up, how to escalate, and what triggers action. Customize by customer segment, invoice size, or risk level.",
              },
              {
                step: "03",
                title: "Collect on autopilot",
                description:
                  "Lunica runs your collections process 24/7 — sending reminders, confirming invoices, and routing exceptions to the right people.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col bg-[#E3D7CD] px-6 py-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                  Step {item.step}
                </span>
                <p className="mt-3 text-lg font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm !leading-tight text-foreground/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <NoiseGradient colors={["#D6CBBD", "#C4B5A3", "#B8A894"]} />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[80%] w-[60%] rounded-full bg-[#F5F2EB]/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center lg:px-20 lg:py-36">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Get started
          </span>

          <h2 className="max-w-2xl text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Stop chasing payments. Start&nbsp;collecting.
          </h2>

          <p className="mt-6 max-w-lg text-lg !leading-tight text-foreground/70">
            See how Lunica Collections can help your team recover cash faster,
            reduce risk, and eliminate the manual work holding you&nbsp;back.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <FlipText text="Book a demo" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              <FlipText text="Contact us" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
