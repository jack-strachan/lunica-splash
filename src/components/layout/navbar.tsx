"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full"
        role="banner"
        style={{ animation: "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        {/* Gradient backdrop — fades in on scroll */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 h-[120px] transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
            "bg-gradient-to-b from-background via-background/90 to-transparent"
          )}
          aria-hidden="true"
        />

        <nav
          className={cn(
            "relative z-10 mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 transition-all duration-300 lg:px-20",
            scrolled ? "mt-0" : "mt-2"
          )}
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <div className="w-32">
            <Link href="/" className="flex items-center">
              <Image
                src="/lunica-logo.svg"
                alt="Lunica"
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>

          {/* Nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <div className="hidden w-32 justify-end md:flex">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Book a demo
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            className="rounded-lg p-2 text-foreground/60 transition-colors hover:bg-foreground/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex flex-col bg-background md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Top bar — mirrors desktop nav */}
            <div
              className={cn(
                "flex h-16 shrink-0 items-center justify-between px-5 transition-all duration-300",
                scrolled ? "mt-0" : "mt-2"
              )}
            >
              <Link
                href="/"
                className="flex items-center"
                aria-label="Lunica home"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/lunica-logo.svg"
                  alt="Lunica"
                  width={120}
                  height={32}
                  priority
                />
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-foreground/60 transition-colors hover:bg-foreground/5"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col justify-center px-5">
              <ul className="space-y-2" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-5 py-4 text-3xl font-semibold tracking-tight transition-colors",
                        pathname === link.href
                          ? "bg-foreground/5 text-foreground"
                          : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}

                {/* CTA in mobile menu */}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * navLinks.length, duration: 0.35, ease: "easeOut" }}
                  className="px-5 pt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full rounded-lg bg-primary px-6 py-3 text-center text-lg font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a demo
                  </Link>
                </motion.li>
              </ul>
            </nav>

            {/* Footer area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="shrink-0 border-t border-foreground/10 px-5 py-6"
            >
              <p className="text-sm leading-relaxed text-foreground/50">
                The ultimate toolkit for exceptional credit and collections&nbsp;teams.
              </p>
              <p className="mt-3 text-xs text-foreground/40">
                &copy; {new Date().getFullYear()} Lunica. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
