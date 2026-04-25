"use client"

import { useState } from "react"

interface FlipTextProps {
  text: string
  className?: string
  letterDelay?: number
  duration?: number
}

export function FlipText({
  text,
  className = "",
  letterDelay = 30,
  duration = 300,
}: FlipTextProps) {
  const [hovering, setHovering] = useState(false)

  return (
    <span
      className={`inline-flex items-center ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden"
          style={{ height: "1.4em", lineHeight: "1.4em" }}
        >
          <span
            className="inline-block"
            style={{
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
              transitionDelay: hovering ? `${i * letterDelay}ms` : "0ms",
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
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
              transitionDelay: hovering ? `${i * letterDelay}ms` : "0ms",
              transform: hovering ? "translateY(0)" : "translateY(100%)",
              opacity: hovering ? 1 : 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  )
}
