import Image from "next/image"
import Link from "next/link"
import { PageContainer } from "@/components/ui/page-container"
import { FooterProductLink } from "@/components/layout/footer-link"

const productLinks = [
  { label: "Collections", href: "/#collections" },
  { label: "Credit", href: "/#credit" },
  { label: "Online Payments", href: "/#online-payments" },
  { label: "Payments Portal", href: "/#payments-portal" },
  { label: "Customer Portal", href: "/#customer-portal" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="w-full bg-background">
      <PageContainer className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/lunica-logo.svg"
              alt="Lunica"
              width={100}
              height={28}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/50">
              The ultimate toolkit for exceptional credit and collections teams.
            </p>
          </div>

          {/* Product & Company — side-by-side on mobile, separate columns on desktop */}
          <div className="grid grid-cols-2 gap-12 md:contents">
            {/* Product */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                Product
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <FooterProductLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                Company
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex items-center justify-between border-t border-foreground/10 pt-6">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Lunica. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground/40 transition-colors hover:text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
