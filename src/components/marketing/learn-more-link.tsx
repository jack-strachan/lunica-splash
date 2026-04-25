"use client"

import { useState } from "react"
import Link from "next/link"

interface LearnMoreLinkProps {
  href: string
}

const LABEL = "Learn more"
const LETTER_DELAY = 30
const DURATION = 300
const ARROW_DELAY = LABEL.length * LETTER_DELAY + 60

export function LearnMoreLink({ href }: LearnMoreLinkProps) {
  const [hovering, setHovering] = useState(false)

  return (
    <Link
      href={href}
      className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span className="inline-flex">
        {LABEL.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline-flex overflow-hidden"
            style={{ height: "1.2em" }}
          >
            <span
              className="inline-block"
              style={{
                transition: `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURATION}ms ease`,
                transitionDelay: hovering ? `${i * LETTER_DELAY}ms` : "0ms",
                transform: hovering ? "translateY(-100%)" : "translateY(0)",
                opacity: hovering ? 0 : 1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
            <span
              className="absolute left-0 top-0 inline-block"
              aria-hidden="true"
              style={{
                transition: `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURATION}ms ease`,
                transitionDelay: hovering ? `${i * LETTER_DELAY}ms` : "0ms",
                transform: hovering ? "translateY(0)" : "translateY(100%)",
                opacity: hovering ? 1 : 0,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>

      {/* Arrow — slides right on hover */}
      <span
        className="relative top-[2px] inline-block"
        style={{
          transition: `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          transitionDelay: hovering ? `${ARROW_DELAY}ms` : "0ms",
          transform: hovering ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="5"
            x2="12"
            y2="5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <polyline
            points="8,1.5 12,5 8,8.5"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}
