import Image from "next/image"

const steps = [
  {
    title: "Connect your systems.",
    description:
      "Link your ERP, accounting tools, customer data, and existing workflows.",
    image: "/images/home/problem-1.png",
  },
  {
    title: "Configure your rules.",
    description:
      "Set payment terms, approval logic, escalation paths, and customer preferences.",
    image: "/images/home/problem-2.png",
  },
  {
    title: "Start collecting smarter.",
    description:
      "Lunica monitors invoices, flags risk, and automates the right next action.",
    image: "/images/home/problem-3.png",
  },
]

export function OurSolutionSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#EDE7DF" }}>
      {/* Large Lunica icon — background watermark */}
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

      <div className="relative mx-auto max-w-[1400px] px-8 py-20 lg:px-20 lg:py-28">
        {/* Top — Heading + description row */}
        <div className="grid gap-12 md:grid-cols-[7fr_4fr] md:gap-20">
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Our solution
            </span>

            <h2 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Lunica offers a suite of tools that saves you time and&nbsp;money
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg !leading-tight text-foreground">
              One platform that connects your data, enforces your rules, and
              takes action where you decide.
            </p>
            <p className="mt-4 text-lg !leading-tight text-foreground">
              Use the entire product suite or just the tools you want and scale as you expand.
            </p>
          </div>
        </div>

        {/* Bottom — 3-column steps with image placeholders */}
        <div className="mt-16 grid gap-0.5 overflow-hidden rounded-lg bg-background md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col bg-[#E3D7CD]">
              {/* Step image */}
              <div className="flex h-64 items-center justify-center bg-[#DDD0C4] lg:h-80">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-contain opacity-80"
                />
              </div>

              {/* Caption */}
              <div className="px-6 py-6">
                <p className="text-lg !leading-tight text-foreground">
                  <span className="font-medium">{step.title}</span>{" "}
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
