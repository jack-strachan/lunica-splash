import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/marketing/contact-form"

export default function ContactPage() {
  return (
    <main>
      <section className="w-full bg-background pt-20">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-8 py-20 md:grid-cols-[5fr_6fr] md:items-start md:gap-20 lg:px-20 lg:py-32">
          {/* Left — Copy */}
          <div className="flex flex-col items-start">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Contact us
            </span>

            <h1 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Let&rsquo;s talk about your{" "}
              <span className="text-foreground/40">process</span>
            </h1>

            <p className="mt-6 text-lg !leading-tight text-foreground text-balance">
              Whether you&rsquo;re looking for a demo, have a question about the
              platform, or want to explore how Lunica fits your workflow &mdash;
              we&rsquo;d love to hear from you.
            </p>

            <div className="mt-10 relative z-2 flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href="mailto:hello@lunica.com"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  hello@lunica.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Based in</p>
                <p className="text-sm text-foreground/60">New York, NY</p>
              </div>
            </div>

            {/* Stylized New York State */}
            <img
              src="/nyc.svg"
              alt="New York"
              className="-mt-4 -ml-12 z-0 -rotate-[12deg] w-48 opacity-80"
            />
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
