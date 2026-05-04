"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import { NoiseGradient } from "@/components/marketing/noise-gradient"
import { PageContainer } from "@/components/ui/page-container"

const themes = [
  { name: "Portal", primary: "#5F746E", dark: "#405650" },
  { name: "Collections", primary: "#4a7a5c", dark: "#3a6248" },
  { name: "Upload", primary: "#C97B84", dark: "#A85A6A" },
  { name: "Payments", primary: "#4A5E73", dark: "#2C3E50" },
  { name: "Credit", primary: "#7D6E5C", dark: "#5C5040" },
  { name: "Disputes", primary: "#7A5C6A", dark: "#4C3642" },
] as const

type Theme = (typeof themes)[number]

function RidgelineLogo() {
  return (
    <svg
      viewBox="0 0 104 30"
      className="h-7 w-24"
      fill="none"
      aria-label="Ridgeline logo"
    >
      <path
        d="M4 23.5L16.5 6.5L27 18.5L34.5 9.5L46 23.5"
        stroke="var(--portal-primary)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 23.5H46"
        stroke="var(--portal-dark)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text
        x="55"
        y="13"
        fill="black"
        fontSize="8"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Ridgeline
      </text>
      <text
        x="55"
        y="23"
        fill="rgba(0,0,0,0.45)"
        fontSize="6.5"
        fontWeight="600"
      >
        Supply Co.
      </text>
    </svg>
  )
}

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "")
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function CustomerPortalMock() {
  const [theme, setTheme] = useState<Theme>(themes[0])

  const accentStyle = {
    "--portal-primary": theme.primary,
    "--portal-dark": theme.dark,
    "--portal-tint": hexToRgba(theme.primary, 0.1),
    "--portal-row": hexToRgba(theme.primary, 0.08),
  } as CSSProperties

  return (
    <PageContainer className="pb-20 lg:pb-28">
      <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]" style={accentStyle}>
        <NoiseGradient colors={["#9AAEA8", "#5F746E", "#405650"]} />
        <div className="absolute right-4 top-4 z-20 flex rounded-full border border-white/35 bg-white/85 p-1 shadow-lg shadow-black/10 backdrop-blur-md lg:right-8 lg:top-6">
          {themes.map((option) => (
            <button
              key={option.name}
              type="button"
              aria-label={`Use ${option.name} theme`}
              aria-pressed={theme.name === option.name}
              onClick={() => setTheme(option)}
              className="group relative grid h-7 w-7 place-items-center rounded-full transition hover:bg-black/[0.04]"
            >
              <span
                className="h-4 w-4 rounded-full border border-black/10 transition group-hover:scale-110"
                style={{ backgroundColor: option.primary }}
              />
              {theme.name === option.name && (
                <span className="absolute inset-0 rounded-full border border-black/20" />
              )}
            </button>
          ))}
        </div>
        <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-end lg:justify-center lg:px-14 lg:pt-14 lg:pb-0">
          <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100 lg:rounded-b-none">
            <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-4 h-5 w-64 rounded-full bg-black/[0.04]" />
            </div>
            <div className="grid h-[calc(100%-2.5rem)] grid-cols-[190px_1fr] bg-[#fbfaf8]">
              <aside className="flex flex-col border-r border-black/[0.06] bg-white p-4">
                <div>
                  <RidgelineLogo />
                  <p className="mt-2 text-xs text-black/45">Customer portal</p>
                </div>

                <nav className="mt-7 space-y-1.5 text-sm font-medium text-black/55">
                  {["Dashboard", "Invoices", "Payments", "Disputes"].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                      style={index === 0 ? { backgroundColor: "var(--portal-tint)", color: "var(--portal-dark)" } : undefined}
                    >
                      <span
                        className="h-4 w-4 rounded"
                        style={{ backgroundColor: index === 0 ? "var(--portal-primary)" : "rgba(0, 0, 0, 0.12)" }}
                      />
                      {item}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto rounded-xl border border-black/[0.07] bg-[#fbfaf8] p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35">Your agent</p>
                  <div className="mt-3 flex items-center gap-2.5">
                    <div
                      className="aspect-square h-9 shrink-0 rounded-full"
                      style={{ backgroundImage: `linear-gradient(to bottom right, #d7c7b6, ${theme.primary})` }}
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-black">Nora Ellison</p>
                      <p className="text-[11px] text-black/45">nora@ridgeline.co</p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="overflow-hidden p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Total Past Due", "$0.00", "All invoices current"],
                    ["Last Payment", "$706.16", "Posted Apr 07, 2026"],
                    ["Available Credit", "$12,400", "18% utilized"],
                  ].map((card) => (
                    <div key={card[0]} className="rounded-xl border border-black/[0.07] bg-white p-4">
                      <p className="text-xs font-medium text-black/45">{card[0]}</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-black">{card[1]}</p>
                      <p className="mt-1 text-xs text-[var(--portal-primary)]">{card[2]}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-[1fr_340px] gap-4">
                  <div className="space-y-4">
                    <section className="rounded-xl border border-black/[0.07] bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold tracking-tight text-black">Account Summary</p>
                          <p className="mt-1 text-xs text-black/45">Consolidated balance across open items</p>
                        </div>
                        <div className="rounded-full border border-black/[0.07] px-3 py-1 text-xs font-medium text-black/55">
                          Synced 2m ago
                        </div>
                      </div>

                      <div className="mt-5 space-y-3 text-sm">
                        {[
                          ["Outstanding Invoices", "$673,691.34"],
                          ["Outstanding Finance Charges", "$0.00"],
                          ["Less Available Credits", "-($0.00)"],
                        ].map((row) => (
                          <div key={row[0]} className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                            <span className="text-black/55">{row[0]}</span>
                            <span className="font-medium text-black">{row[1]}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-semibold text-black">Net Due</span>
                          <span className="font-semibold text-black">$673,691.34</span>
                        </div>
                      </div>
                    </section>

                    <section className="rounded-xl border border-black/[0.07] bg-white p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold tracking-tight text-black">Outstanding by Job</p>
                        <button className="text-xs font-semibold text-[var(--portal-primary)]">View all</button>
                      </div>
                      <div className="mt-5 grid grid-cols-[150px_1fr] gap-5">
                        <div className="grid place-items-center">
                          <div className="grid h-24 w-24 place-items-center rounded-full border-[10px] border-[var(--portal-primary)] bg-white">
                            <div className="text-center">
                              <p className="text-lg font-semibold text-black">100%</p>
                              <p className="text-xs text-black/40">147</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {["Unassigned", "North Yard", "Route 12"].map((item, index) => (
                            <div key={item} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-2.5 w-2.5 rounded-full"
                                  style={{ backgroundColor: index === 0 ? "var(--portal-primary)" : "rgba(0, 0, 0, 0.12)" }}
                                />
                                <span className="text-sm font-medium text-black/65">{item}</span>
                              </div>
                              <span className="text-sm font-semibold text-black">
                                {index === 0 ? "$673,691" : index === 1 ? "$0" : "$0"}
                              </span>
                            </div>
                          ))}
                          <div className="h-2 rounded-full bg-black/[0.05]">
                            <div className="h-2 w-full rounded-full bg-[var(--portal-primary)]" />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <aside className="rounded-xl border border-black/[0.07] bg-white p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold tracking-tight text-black">Make Payment</p>
                      <span className="rounded-full bg-[var(--portal-tint)] px-2.5 py-1 text-xs font-semibold text-[var(--portal-dark)]">
                        Secure
                      </span>
                    </div>
                    <button className="mt-4 rounded-lg bg-[var(--portal-primary)] px-4 py-2.5 text-sm font-semibold text-white">
                      Pay Full Balance
                    </button>

                    <div className="mt-5 border-t border-black/[0.06] pt-5">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-medium text-black/65">Select invoices to pay</p>
                        <p className="text-xs text-black/40">0 of 144</p>
                      </div>
                      <div className="space-y-2">
                        {[
                          ["#38666", "$1,004.37"],
                          ["#36757", "$52,172.90"],
                          ["#39307", "$964.00"],
                          ["#38618", "$3,705.37"],
                        ].map((invoice) => (
                          <div key={invoice[0]} className="flex items-center justify-between rounded-lg bg-[var(--portal-row)] px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <span className="h-4 w-4 rounded border border-black/20 bg-white" />
                              <span className="text-sm font-semibold text-[var(--portal-dark)]">{invoice[0]}</span>
                            </div>
                            <span className="text-sm font-semibold text-[var(--portal-dark)]">{invoice[1]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 border-t border-black/[0.06] pt-5 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-black/50">Outstanding Amount</span>
                        <span className="font-semibold text-black">$673,691.34</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-black">Pay today</span>
                        <span className="font-semibold text-black">$673,691.34</span>
                      </div>
                    </div>
                    <button className="mt-5 w-full rounded-lg bg-[var(--portal-primary)] py-3 text-sm font-semibold text-white">
                      Pay Now
                    </button>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
