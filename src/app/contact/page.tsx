import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/marketing/contact-form"
import { SectionLabel } from "@/components/ui/section-label"
import { SectionHeading } from "@/components/ui/section-heading"
import { SectionDescription } from "@/components/ui/section-description"
import { PageContainer } from "@/components/ui/page-container"

export default function ContactPage() {
  return (
    <main>
      <section className="w-full bg-background pt-20">
        <PageContainer className="grid gap-16 py-20 md:grid-cols-[5fr_6fr] md:items-start md:gap-20 lg:py-32">
          {/* Left — Copy */}
          <div className="flex flex-col items-start">
            <SectionLabel>Contact us</SectionLabel>

            <SectionHeading as="h1" size="lg">
              Let&rsquo;s talk about your{" "}
              <span className="text-foreground/40">process</span>
            </SectionHeading>

            <SectionDescription className="text-balance">
              Whether you&rsquo;re looking for a demo, have a question about the
              platform, or want to explore how Lunica fits your workflow &mdash;
              we&rsquo;d love to hear from you.
            </SectionDescription>

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
        </PageContainer>
      </section>
      <Footer />
    </main>
  )
}
