import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/marketing/contact-form"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"

const ease = "cubic-bezier(0.16, 1, 0.3, 1)"

export default function ContactPage() {
  return (
    <main>
      <section className="w-full bg-background pt-20">
        <PageContainer className="grid gap-16 py-20 md:grid-cols-[5fr_6fr] md:items-start md:gap-20 lg:py-32">
          {/* Left — Copy */}
          <div className="flex flex-col items-start">
            <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.1s both` }}>
              <SectionLabel>Contact us</SectionLabel>
            </div>

            <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.2s both` }}>
              <SectionHeading as="h1" size="lg">
                Let&rsquo;s talk about your{" "}
                <span className="text-foreground/40">process</span>
              </SectionHeading>
            </div>

            <div style={{ animation: `hero-fade-up 0.8s ${ease} 0.35s both` }}>
              <SectionDescription className="text-balance">
                Whether you&rsquo;re looking for a demo, have a question about the
                platform, or want to explore how Lunica fits your workflow,
                we&rsquo;d love to hear from you.
              </SectionDescription>
            </div>

            <div
              className="mt-10 relative z-2 flex flex-col gap-6"
              style={{ animation: `hero-fade-up 0.7s ${ease} 0.5s both` }}
            >
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
            <div style={{ animation: `hero-fade-up 0.7s ${ease} 0.65s both` }}>
              <Image
                src="/nyc.svg"
                alt="New York"
                width={192}
                height={192}
                className="-mt-4 -ml-12 z-0 -rotate-[12deg] w-48 opacity-80"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ animation: `hero-fade-up 0.9s ${ease} 0.3s both` }}>
            <ContactForm />
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  )
}
