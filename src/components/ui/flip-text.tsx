"use client"

import { useState } from "react"

interface FlipTextProps {
  text: string
  className?: string
  letterDelay?: number
  duration?: number
  /** When true, the component ignores its own hover listeners and uses this value instead. */
  isHovered?: boolean
}

export function FlipText({
  text,
  className = "",
  letterDelay = 30,
  duration = 300,
  isHovered,
}: FlipTextProps) {
  const [hovering, setHovering] = useState(false)
  const active = isHovered !== undefined ? isHovered : hovering

  return (
    <span
      className={`inline-flex items-center ${className}`}
      onMouseEnter={isHovered === undefined ? () => setHovering(true) : undefined}
      onMouseLeave={isHovered === undefined ? () => setHovering(false) : undefined}
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
              transitionDelay: active ? `${i * letterDelay}ms` : "0ms",
              transform: active ? "translateY(-100%)" : "translateY(0)",
              opacity: active ? 0 : 1,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            className="absolute left-0 top-0 inline-block"
            aria-hidden="true"
            style={{
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
              transitionDelay: active ? `${i * letterDelay}ms` : "0ms",
              transform: active ? "translateY(0)" : "translateY(100%)",
              opacity: active ? 1 : 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  )
}
