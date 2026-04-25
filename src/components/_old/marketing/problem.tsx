"use client"

import { motion } from "motion/react"
import { Container } from "@/components/_old/ui/container"
import { PaperTexture } from "@paper-design/shaders-react"

/* ── Decorative accent shapes ── */

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-full overflow-hidden ${className}`}>
      <div
        className="w-full h-full rounded-full"
        style={{
          background: "conic-gradient(from 180deg, #F05A42, #2EC88A, #C46EE0, #F0B830, #F05A42)",
        }}
      />
      <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25">
        <PaperTexture
          style={{ width: "100%", height: "100%" }}
          colorFront="#ffffff"
          colorBack="#000000"
          fiberSize={0.4}
          crumpleSize={0.5}
          foldCount={3}
        />
      </div>
    </div>
  )
}

function HalfCircle({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="w-full h-[200%] rounded-full"
        style={{
          background: "conic-gradient(from 220deg, #F05A42, #2EC88A, #50C8F0, #C46EE0, #F05A42)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25">
        <PaperTexture
          style={{ width: "100%", height: "100%" }}
          colorFront="#ffffff"
          colorBack="#000000"
          fiberSize={0.4}
          crumpleSize={0.5}
          foldCount={3}
        />
      </div>
    </div>
  )
}

function DashedRing({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" stroke="#C4B5A4" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
    </svg>
  )
}

/* ── Contextual illustrations for each problem ── */

function InvoiceBounceIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left: outgoing invoice */}
        <rect x="20" y="40" width="72" height="92" rx="8" fill="white" fillOpacity="0.9" />
        <rect x="32" y="54" width="28" height="4" rx="2" fill="#C4B0D4" />
        <rect x="32" y="62" width="48" height="3" rx="1.5" fill="#D8CBE4" />
        <rect x="32" y="69" width="40" height="3" rx="1.5" fill="#D8CBE4" />
        <rect x="32" y="76" width="44" height="3" rx="1.5" fill="#D8CBE4" />
        <line x1="32" y1="86" x2="80" y2="86" stroke="#D8CBE4" strokeWidth="1" />
        <rect x="32" y="92" width="20" height="8" rx="3" fill="#B8D4B0" />
        <text x="37" y="99" fontSize="6" fill="#4A7A40" fontFamily="monospace">SENT</text>
        <rect x="56" y="92" width="24" height="8" rx="3" fill="#E8D4B0" />
        <text x="59" y="99" fontSize="5.5" fill="#8A6A30" fontFamily="monospace">$8,450</text>

        {/* Bouncing arrows */}
        <path d="M100 70 L130 58" stroke="#A080B8" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="130,56 128,62 133,60" fill="#A080B8" />
        <path d="M130 82 L100 94" stroke="#D07070" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="100,96 102,90 97,92" fill="#D07070" />
        <path d="M100 108 L130 96" stroke="#A080B8" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="130,94 128,100 133,98" fill="#A080B8" />
        <path d="M130 116 L100 128" stroke="#D07070" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="100,130 102,124 97,126" fill="#D07070" />

        {/* Right: rejection notices */}
        <rect x="140" y="30" width="100" height="36" rx="8" fill="white" fillOpacity="0.9" />
        <circle cx="154" cy="48" r="8" fill="#F0D0D0" />
        <text x="150" y="51" fontSize="10" fill="#C06060">✕</text>
        <text x="168" y="44" fontSize="8" fill="#6B5060" fontWeight="600">Wrong address</text>
        <text x="168" y="55" fontSize="6.5" fill="#9A8090">Rejected by AP</text>

        <rect x="148" y="76" width="100" height="36" rx="8" fill="white" fillOpacity="0.9" />
        <circle cx="162" cy="94" r="8" fill="#F0D0D0" />
        <text x="158" y="97" fontSize="10" fill="#C06060">✕</text>
        <text x="176" y="90" fontSize="8" fill="#6B5060" fontWeight="600">Missing PO #</text>
        <text x="176" y="101" fontSize="6.5" fill="#9A8090">Rejected again</text>

        <rect x="140" y="122" width="100" height="36" rx="8" fill="white" fillOpacity="0.85" />
        <circle cx="154" cy="140" r="8" fill="#E8DCC0" />
        <text x="149" y="143" fontSize="10" fill="#A09060">⏳</text>
        <text x="168" y="136" fontSize="8" fill="#6B5060" fontWeight="600">Resubmitted</text>
        <text x="168" y="147" fontSize="6.5" fill="#9A8090">12 days lost</text>
      </svg>
    </div>
  )
}

function GutFeelIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Calendar grid */}
        <rect x="30" y="20" width="200" height="148" rx="10" fill="white" fillOpacity="0.9" />
        <rect x="30" y="20" width="200" height="30" rx="10" fill="#E8DCF0" fillOpacity="0.6" />
        <rect x="30" y="40" width="200" height="10" fill="#E8DCF0" fillOpacity="0.6" />
        <text x="105" y="40" fontSize="9" fill="#6B5060" fontWeight="600" fontFamily="sans-serif">FOLLOW-UP CALENDAR</text>

        {/* Day headers */}
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <text key={i} x={56 + i * 40} y="62" fontSize="7" fill="#A090B0" textAnchor="middle" fontFamily="sans-serif">{d}</text>
        ))}

        {/* Calendar rows */}
        {[
          [{ n: "3", s: "empty" }, { n: "4", s: "empty" }, { n: "5", s: "missed" }, { n: "6", s: "empty" }, { n: "7", s: "empty" }],
          [{ n: "10", s: "missed" }, { n: "11", s: "empty" }, { n: "12", s: "empty" }, { n: "13", s: "missed" }, { n: "14", s: "empty" }],
          [{ n: "17", s: "empty" }, { n: "18", s: "empty" }, { n: "19", s: "empty" }, { n: "20", s: "missed" }, { n: "21", s: "done" }],
        ].map((row, ri) =>
          row.map((cell, ci) => {
            const cx = 56 + ci * 40
            const cy = 82 + ri * 34
            return (
              <g key={`${ri}-${ci}`}>
                <rect x={cx - 14} y={cy - 12} width="28" height="24" rx="6" 
                  fill={cell.s === "missed" ? "#F0D0D0" : cell.s === "done" ? "#C8E0C0" : "transparent"} 
                  fillOpacity={cell.s === "empty" ? 0 : 0.6}
                  stroke={cell.s === "empty" ? "#E0D8E8" : "none"} strokeWidth="1"
                />
                <text x={cx} y={cy + 1} fontSize="8" fill={cell.s === "missed" ? "#C06060" : cell.s === "done" ? "#508040" : "#A090B0"} textAnchor="middle" fontFamily="sans-serif">{cell.n}</text>
                {cell.s === "missed" && (
                  <text x={cx} y={cy + 10} fontSize="5" fill="#C06060" textAnchor="middle" fontFamily="sans-serif">missed</text>
                )}
                {cell.s === "done" && (
                  <text x={cx} y={cy + 10} fontSize="5" fill="#508040" textAnchor="middle" fontFamily="sans-serif">called</text>
                )}
              </g>
            )
          })
        )}

        {/* Summary bar */}
        <rect x="46" y="152" width="168" height="6" rx="3" fill="#E8E0F0" />
        <rect x="46" y="152" width="26" height="6" rx="3" fill="#D07070" fillOpacity="0.7" />
        <text x="130" y="165" fontSize="6" fill="#9A8090" textAnchor="middle" fontFamily="monospace">4 of 5 overdue — no follow-up</text>
      </svg>
    </div>
  )
}

function PatchworkIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tool boxes scattered at different angles */}
        <g transform="translate(20, 20) rotate(-3, 52, 40)">
          <rect width="104" height="68" rx="10" fill="white" fillOpacity="0.9" />
          <rect width="104" height="22" rx="10" fill="#C8DCF0" fillOpacity="0.5" />
          <rect y="14" width="104" height="8" fill="#C8DCF0" fillOpacity="0.5" />
          <text x="12" y="16" fontSize="7" fill="#506080" fontWeight="600">Credit App</text>
          <rect x="72" y="7" width="22" height="10" rx="4" fill="#A0C0E0" fillOpacity="0.5" />
          <text x="76" y="14" fontSize="5.5" fill="#506080">Tool A</text>
          <rect x="10" y="30" width="84" height="3" rx="1.5" fill="#D8E4F0" />
          <rect x="10" y="37" width="60" height="3" rx="1.5" fill="#D8E4F0" />
          <rect x="10" y="48" width="34" height="12" rx="4" fill="#C8DCF0" fillOpacity="0.4" />
          <text x="16" y="57" fontSize="6" fill="#506080">pending</text>
        </g>

        <g transform="translate(140, 8) rotate(2, 52, 40)">
          <rect width="104" height="68" rx="10" fill="white" fillOpacity="0.9" />
          <rect width="104" height="22" rx="10" fill="#C8F0D8" fillOpacity="0.5" />
          <rect y="14" width="104" height="8" fill="#C8F0D8" fillOpacity="0.5" />
          <text x="12" y="16" fontSize="7" fill="#407050" fontWeight="600">Invoicing</text>
          <rect x="72" y="7" width="22" height="10" rx="4" fill="#A0E0C0" fillOpacity="0.5" />
          <text x="76" y="14" fontSize="5.5" fill="#407050">Tool B</text>
          <rect x="10" y="30" width="84" height="3" rx="1.5" fill="#D8F0E0" />
          <rect x="10" y="37" width="50" height="3" rx="1.5" fill="#D8F0E0" />
          <rect x="10" y="48" width="24" height="12" rx="4" fill="#E0D0B0" fillOpacity="0.5" />
          <text x="14" y="57" fontSize="6" fill="#806830">open</text>
        </g>

        <g transform="translate(16, 100) rotate(2, 52, 32)">
          <rect width="104" height="64" rx="10" fill="white" fillOpacity="0.9" />
          <rect width="104" height="22" rx="10" fill="#F0E0C8" fillOpacity="0.5" />
          <rect y="14" width="104" height="8" fill="#F0E0C8" fillOpacity="0.5" />
          <text x="12" y="16" fontSize="7" fill="#806830" fontWeight="600">Disputes</text>
          <rect x="62" y="7" width="32" height="10" rx="4" fill="#E0D0B0" fillOpacity="0.5" />
          <text x="66" y="14" fontSize="5.5" fill="#806830">via Email</text>
          <rect x="10" y="30" width="84" height="3" rx="1.5" fill="#F0E8D8" />
          <rect x="10" y="37" width="70" height="3" rx="1.5" fill="#F0E8D8" />
          <rect x="10" y="46" width="30" height="10" rx="4" fill="#F0D0D0" fillOpacity="0.4" />
          <text x="14" y="54" fontSize="5.5" fill="#C06060">3 open</text>
        </g>

        <g transform="translate(138, 96) rotate(-2, 52, 32)">
          <rect width="104" height="64" rx="10" fill="white" fillOpacity="0.9" />
          <rect width="104" height="22" rx="10" fill="#E0D4F0" fillOpacity="0.5" />
          <rect y="14" width="104" height="8" fill="#E0D4F0" fillOpacity="0.5" />
          <text x="12" y="16" fontSize="7" fill="#605080" fontWeight="600">Payments</text>
          <rect x="56" y="7" width="38" height="10" rx="4" fill="#D0C0E8" fillOpacity="0.5" />
          <text x="58" y="14" fontSize="5" fill="#605080">Spreadsheet</text>
          <rect x="10" y="30" width="84" height="3" rx="1.5" fill="#E8E0F0" />
          <rect x="10" y="37" width="56" height="3" rx="1.5" fill="#E8E0F0" />
          <rect x="10" y="46" width="28" height="10" rx="4" fill="#E0D0B0" fillOpacity="0.4" />
          <text x="14" y="54" fontSize="5.5" fill="#806830">manual</text>
        </g>

        {/* Broken connectors between tools */}
        <line x1="124" y1="56" x2="140" y2="44" stroke="#C0B0D0" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="76" y1="88" x2="68" y2="100" stroke="#C0B0D0" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="190" y1="76" x2="190" y2="96" stroke="#C0B0D0" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="120" y1="128" x2="138" y2="128" stroke="#C0B0D0" strokeWidth="1.5" strokeDasharray="3 4" />

        {/* "Disconnected" symbols at broken points */}
        <circle cx="132" cy="50" r="5" fill="#F0E8F4" stroke="#C0A0D0" strokeWidth="1" />
        <text x="129.5" y="53" fontSize="7" fill="#A080B0">✕</text>
        <circle cx="72" cy="94" r="5" fill="#F0E8F4" stroke="#C0A0D0" strokeWidth="1" />
        <text x="69.5" y="97" fontSize="7" fill="#A080B0">✕</text>
        <circle cx="190" cy="86" r="5" fill="#F0E8F4" stroke="#C0A0D0" strokeWidth="1" />
        <text x="187.5" y="89" fontSize="7" fill="#A080B0">✕</text>
        <circle cx="129" cy="128" r="5" fill="#F0E8F4" stroke="#C0A0D0" strokeWidth="1" />
        <text x="126.5" y="131" fontSize="7" fill="#A080B0">✕</text>
      </svg>
    </div>
  )
}

const problems = [
  {
    headline: "Invoices go out. Payments don\u2019t come in.",
    body: "Incorrect invoices get flagged by AP departments, kicked back for corrections, and stuck in limbo. Every mistake costs you time. Sometimes cash.",
  },
  {
    headline: "Collections runs on gut feel, not process.",
    body: "Your team follows up when they remember to. There\u2019s no system that knows your customers\u2019 payment terms and acts on them automatically.",
  },
  {
    headline: "Your AR stack is a patchwork.",
    body: "Credit applications in one tool. Invoices in another. Disputes handled over email. Payments tracked in a spreadsheet. Nothing talks to each other \u2014 and nothing works together.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Paper texture overlay on section */}
      <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay opacity-30">
        <PaperTexture
          style={{ width: "100%", height: "100%" }}
          colorFront="#9fadbc"
          colorBack="#ffffff"
          fiberSize={0.2}
          crumpleSize={0.35}
          foldCount={5}
        />
      </div>

      {/* Background accent shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <GradientOrb className="absolute -top-20 -right-20 w-[280px] h-[280px] opacity-20" />
        <HalfCircle className="absolute -bottom-16 -left-16 w-[200px] h-[100px] opacity-15" rotate={0} />
        <DashedRing className="absolute top-1/3 right-[8%] w-[140px] h-[140px] opacity-40" />
        <GradientOrb className="absolute bottom-[20%] left-[12%] w-[80px] h-[80px] opacity-15" />
      </div>

      <Container>
        <div className="relative z-[2] py-20 md:py-28">
          {/* Header */}
          <motion.div
            className="max-w-3xl mx-auto mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E6DFD4] text-[11px] tracking-widest text-[#6B5D4D] uppercase font-medium font-mono">
              The Problem
            </span>
            <h2 className="text-[#2A2318] text-4xl md:text-[3.25rem] leading-[1.15] font-semibold tracking-[-0.04em] mb-6">
              Getting paid shouldn&apos;t be this hard.
            </h2>
            <p className="text-lg md:text-xl text-[#6B5D4D] leading-relaxed max-w-2xl mx-auto">
              Your team is chasing invoices, fielding disputes, and manually following up on overdue accounts — while your cash flow suffers.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="relative rounded-[20px] overflow-hidden bg-white"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Purple asset area */}
                <div className="relative h-[220px] overflow-hidden" style={{ background: "#EEDDED" }}>
                  {/* Decorative gradient shapes — z-0 base */}
                  <div className="absolute inset-0 z-0">
                    {index === 0 && (
                      <>
                        <HalfCircle className="absolute -top-10 -right-6 w-[180px] h-[90px]" rotate={180} />
                        <GradientOrb className="absolute -bottom-8 -left-6 w-[140px] h-[140px]" />
                        <DashedRing className="absolute top-4 left-[30%] w-[70px] h-[70px] opacity-30" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <GradientOrb className="absolute -top-10 -left-10 w-[160px] h-[160px]" />
                        <HalfCircle className="absolute -bottom-6 -right-4 w-[150px] h-[75px]" rotate={0} />
                        <DashedRing className="absolute top-2 right-6 w-[80px] h-[80px] opacity-35" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <HalfCircle className="absolute -top-8 -left-4 w-[160px] h-[80px]" rotate={200} />
                        <GradientOrb className="absolute -bottom-10 -right-8 w-[150px] h-[150px]" />
                        <HalfCircle className="absolute top-[40%] right-[15%] w-[90px] h-[45px]" rotate={90} />
                        <DashedRing className="absolute bottom-4 left-[20%] w-[60px] h-[60px] opacity-30" />
                      </>
                    )}
                  </div>

                  {/* Paper texture covering full purple area — z-[1], over shapes, under UI */}
                  <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
                    <PaperTexture
                      style={{ width: "100%", height: "100%" }}
                      colorFront="#8a7098"
                      colorBack="#EEDDED"
                      fiberSize={0.35}
                      crumpleSize={0.6}
                      foldCount={5}
                    />
                  </div>

                  {/* Contextual illustration — z-[2], on top */}
                  <div className="absolute inset-0 z-[2]">
                    {index === 0 && <InvoiceBounceIllustration />}
                    {index === 1 && <GutFeelIllustration />}
                    {index === 2 && <PatchworkIllustration />}
                  </div>
                </div>

                {/* Card text content on white */}
                <div className="p-4 rounded-b-2xl bg-[#F6F6F2]">
                  <h3 className="text-[22px] md:text-[24px] font-semibold text-[#2A2318] tracking-[-0.02em] mb-3 leading-tight">
                    {problem.headline}
                  </h3>
                  <p className="text-[15px] text-[#4A3F33]/80 leading-relaxed">
                    {problem.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
