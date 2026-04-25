"use client"

import { useState } from "react"

const fonts = [
  { label: "Arimo", variable: "var(--font-arimo)" },
  { label: "IBM Plex Sans", variable: "var(--font-ibm-plex-sans)" },
  { label: "Inter Tight", variable: "var(--font-inter-tight)" },
]

export function FontToggle() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [open, setOpen] = useState(false)

  const apply = (index: number) => {
    setActiveIndex(index)
    const font = fonts[index].variable
    const fallback = "ui-sans-serif, system-ui, sans-serif"
    const value = `${font}, ${fallback}`
    document.documentElement.style.setProperty("--font-family-sans", value)
    document.body.style.fontFamily = value
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999]">
      {open && (
        <div className="mb-2 flex flex-col gap-1 rounded-lg border border-foreground/10 bg-background p-2 shadow-lg">
          {fonts.map((font, i) => (
            <button
              key={font.label}
              onClick={() => apply(i)}
              className={`rounded-md px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                i === activeIndex
                  ? "bg-foreground text-background"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {font.label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/10 bg-background text-xs font-bold text-foreground/60 shadow-lg transition-colors hover:bg-foreground/5 hover:text-foreground"
        aria-label="Toggle font selector"
      >
        Aa
      </button>
    </div>
  )
}
