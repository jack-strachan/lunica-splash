"use client"

import Image from "next/image"

const footerLinks = {
  Product: [
    { label: "Collections", href: "#collections" },
    { label: "Credit", href: "#credit" },
    { label: "Online Payments", href: "#online-payments" },
    { label: "Payments Portal", href: "#payments-portal" },
    { label: "Customer Portal", href: "#customer-portal" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-20 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
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

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                {heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        const id = link.href.replace("#", "")
                        const el = document.getElementById(id)
                        if (el) {
                          e.preventDefault()
                          el.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex items-center justify-between border-t border-foreground/10 pt-6">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Lunica. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">
            Proud incubator company of Scope.{" "}
            <a
              href="https://scopelabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 underline transition-colors hover:text-foreground"
            >
              Learn more here
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
