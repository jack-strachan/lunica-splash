"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface FooterProductLinkProps {
  href: string
  label: string
}

export function FooterProductLink({ href, label }: FooterProductLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (href.startsWith("/#") && pathname === "/") {
          const id = href.replace("/#", "")
          const el = document.getElementById(id)
          if (el) {
            e.preventDefault()
            el.scrollIntoView({ behavior: "smooth" })
          }
        }
      }}
      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  )
}
