"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { LunicaLogo } from "@/components/ui/lunica-logo"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { FlipText } from "@/components/ui/flip-text"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
]

const productLinks = [
  {
    name: "Collections",
    description: "Automate follow-ups, confirm invoices, and get cash in faster.",
    href: "/collections",
    enabled: true,
  },
  {
    name: "Credit",
    description: "Streamline applications, assess risk, and approve with confidence.",
    href: "/credit",
    enabled: true,
  },
  {
    name: "Online Payments",
    description: "Send payment links and give customers a frictionless way to pay.",
    href: "/online-payments",
    enabled: false,
  },
  {
    name: "Payments Portal",
    description: "Give customers a single place to view and pay open invoices.",
    href: "/payments-portal",
    enabled: false,
  },
  {
    name: "Customer Portal",
    description: "Let customers manage their account, documents, and disputes.",
    href: "/customer-portal",
    enabled: false,
  },
]

function ProductDropdownLink({
  product,
  isActive,
  onNavigate,
}: {
  product: (typeof productLinks)[number]
  isActive: boolean
  onNavigate: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={product.href}
      className={cn(
        "group flex flex-col rounded-lg px-4 py-4 transition-colors hover:bg-foreground/[0.04]",
        isActive && "bg-foreground/[0.04]"
      )}
      role="menuitem"
      onClick={onNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          <FlipText text={product.name} isHovered={hovered} />
        </span>
        <ArrowRight
          className="h-3.5 w-3.5 shrink-0 text-foreground/20 transition-all group-hover:translate-x-0.5 group-hover:text-foreground/40"
          aria-hidden="true"
        />
      </div>
      <p className="mt-1 text-[13px] leading-snug text-foreground/50">
        {product.description}
      </p>
    </Link>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroOverlap = pathname === "/about" || pathname === "/collections" || pathname === "/credit"
  const lightNav = heroOverlap && !scrolled

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setProductsOpen(true)
  }, [])

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 150)
  }, [])

  const isProductPage = productLinks.some((p) => p.href === pathname)

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
              <LunicaLogo hoverEnabled={pathname !== "/"} />
            </Link>
          </div>

          {/* Nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/"
                className={cn(
                  "text-sm transition-colors duration-300",
                  lightNav
                    ? "md:text-white/80 md:hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                <FlipText text="Home" />
              </Link>
            </li>

            {/* Products dropdown trigger */}
            <li>
              <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  type="button"
                  onClick={() => setProductsOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-baseline gap-0.5 text-sm transition-colors duration-300",
                    lightNav
                      ? "md:text-white/80 md:hover:text-white"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  <FlipText text="Products" />
                  <ChevronDown
                    className={cn(
                      "relative top-[1px] h-3 w-3 opacity-60 transition-transform duration-200",
                      productsOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega dropdown */}
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                        },
                        closed: {
                          opacity: 0,
                          y: 4,
                          scale: 0.98,
                          transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
                        },
                      }}
                      className="absolute left-1/2 top-full mt-4 w-[680px] -translate-x-1/2 rounded-xl border border-foreground/[0.08] bg-background p-2 shadow-lg shadow-black/[0.04]"
                      role="menu"
                    >
                      <div className="grid grid-cols-3 gap-0.5">
                        {productLinks.map((product) => {
                          const isActive = pathname === product.href

                          if (!product.enabled) {
                            return (
                              <div
                                key={product.name}
                                className="flex cursor-default flex-col rounded-lg px-4 py-4 opacity-40"
                                role="menuitem"
                                aria-disabled="true"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-foreground">
                                    {product.name}
                                  </span>
                                  <span className="rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/50">
                                    Soon
                                  </span>
                                </div>
                                <p className="mt-1 text-[13px] leading-snug text-foreground/50">
                                  {product.description}
                                </p>
                              </div>
                            )
                          }

                          return (
                            <ProductDropdownLink
                              key={product.name}
                              product={product}
                              isActive={isActive}
                              onNavigate={() => setProductsOpen(false)}
                            />
                          )
                        })}

                        {/* CTA cell — bottom right */}
                        <Link
                          href="/contact"
                          className="group flex flex-col justify-between rounded-lg bg-foreground/[0.03] px-4 py-4 transition-colors hover:bg-foreground/[0.06]"
                          role="menuitem"
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="text-sm font-medium text-foreground">
                            Need something custom?
                          </span>
                          <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors group-hover:text-primary-hover">
                            Talk to us
                            <ArrowRight
                              className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>

            <li>
              <Link
                href="/about"
                className={cn(
                  "text-sm transition-colors duration-300",
                  lightNav
                    ? "md:text-white/80 md:hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                <FlipText text="About" />
              </Link>
            </li>
          </ul>

          {/* CTA — desktop */}
          <div className="hidden w-32 justify-end md:flex">
            <Link
              href="/contact"
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-all duration-300",
                lightNav
                  ? "md:bg-white md:text-foreground md:hover:bg-white/90"
                  : "bg-primary text-primary-foreground hover:bg-primary-hover"
              )}
            >
              <FlipText text="Book a demo" />
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-foreground/5 md:hidden"
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
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex flex-col bg-background md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Top bar */}
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
                <LunicaLogo hoverEnabled={pathname !== "/"} />
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-foreground/40 transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col overflow-y-auto px-5 pt-8">
              <ul className="space-y-1" role="list">
                {/* Home */}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/"
                    className={cn(
                      "block py-3 text-[2rem] !font-normal leading-[1.1] tracking-tight transition-colors",
                      pathname === "/"
                        ? "text-foreground"
                        : "text-foreground/35 hover:text-foreground"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>

                {/* Products — collapsible */}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    className={cn(
                      "flex w-full items-center gap-2 py-3 text-[2rem] !font-normal leading-[1.1] tracking-tight transition-colors",
                      isProductPage
                        ? "text-foreground"
                        : "text-foreground/35 hover:text-foreground"
                    )}
                    aria-expanded={mobileProductsOpen}
                  >
                    Products
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        mobileProductsOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-1"
                        role="list"
                      >
                        {productLinks.map((product, pi) => (
                          <motion.li
                            key={product.name}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.04 * pi, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {product.enabled ? (
                              <Link
                                href={product.href}
                                className={cn(
                                  "block rounded-lg py-3",
                                  pathname === product.href
                                    ? "text-foreground"
                                    : "text-foreground/60 hover:text-foreground"
                                )}
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="text-lg font-medium leading-tight">
                                  {product.name}
                                </span>
                              </Link>
                            ) : (
                              <div className="block rounded-lg py-3 opacity-35">
                                <span className="flex items-center gap-2 text-lg font-medium leading-tight text-foreground">
                                  {product.name}
                                  <span className="rounded-full bg-foreground/[0.08] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/60">
                                    Soon
                                  </span>
                                </span>
                              </div>
                            )}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* About */}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/about"
                    className={cn(
                      "block py-3 text-[2rem] !font-normal leading-[1.1] tracking-tight transition-colors",
                      pathname === "/about"
                        ? "text-foreground"
                        : "text-foreground/35 hover:text-foreground"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                </motion.li>
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  <FlipText text="Book a demo" />
                </Link>
              </motion.div>
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="shrink-0 px-5 pb-8"
            >
              <p className="text-xs text-foreground/30">
                &copy; {new Date().getFullYear()} Lunica. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
