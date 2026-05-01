"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "motion/react"
import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import Image from "next/image"
import { PaperTexture } from "@paper-design/shaders-react"
import { UploadCloud, FileCog, CheckCircle2, Check, FileText, ArrowUpCircle, MousePointer2, UserPlus, Database } from "@/lib/nucleo-icons"

const steps = [
  {
    id: 1,
    title: "Onboard in minutes",
    description: "Get your team live fast with a branded customer portal, simple setup, and a workflow your reps can start using right away.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Process invoices instantly",
    description: "Drag and drop your loose paper invoices, PDFs, or spreadsheets",
    icon: UploadCloud,
  },
  {
    id: 3,
    title: "Connect your systems and pull in data",
    description: "Lunica connects to your data sources to bring in customers, invoices, balances, and account history automatically.",
    icon: Database,
  },
]

export function InvoiceProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the container hits the center of the viewport
    // Stop tracking when the bottom of the container hits the center of the viewport
    offset: ["start center", "end center"]
  })

  // Math for 3 sections in a scroll progress from 0.0 to 1.0:
  // Each step gets roughly 0.333 of the scroll duration
  // Step 1: 0.0 -> 0.333
  // Step 2: 0.333 -> 0.666
  // Step 3: 0.666 -> 1.0

  return (
    <Section spacing="none" className="relative" style={{ background: "#F0EBE3" }}>
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
        <div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full overflow-hidden opacity-20"
        >
          <div className="w-full h-full rounded-full" style={{ background: "conic-gradient(from 180deg, #F05A42, #2EC88A, #C46EE0, #F0B830, #F05A42)" }} />
          <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25">
            <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
          </div>
        </div>
        <div
          className="absolute -bottom-24 right-[10%] w-[300px] h-[150px] overflow-hidden opacity-15"
          style={{ transform: "rotate(15deg)" }}
        >
          <div className="w-full h-[200%] rounded-full" style={{ background: "conic-gradient(from 220deg, #F05A42, #2EC88A, #50C8F0, #C46EE0, #F05A42)" }} />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25">
            <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
          </div>
        </div>
        <svg className="absolute top-[60%] left-[8%] w-[120px] h-[120px] opacity-30" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#C4B5A4" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
        </svg>
        <div
          className="absolute top-[20%] -right-16 w-[200px] h-[200px] rounded-full overflow-hidden opacity-12"
        >
          <div className="w-full h-full rounded-full" style={{ background: "conic-gradient(from 90deg, #2EC88A, #50C8F0, #C46EE0, #F0B830, #2EC88A)" }} />
          <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25">
            <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mb-0 pt-24 max-w-2xl mx-auto text-center">
          <span className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E6DFD4] text-[11px] tracking-widest text-[#6B5D4D] uppercase font-medium font-mono">
            THE SOLUTION
          </span>
          <h2 className="text-[#2A2318] text-4xl md:text-[3rem] leading-tight font-semibold tracking-[-0.04em]">
            Save time and money with <span className="text-[#01544F]">Lunica</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative flex items-start gap-16 pb-[30vh]">
          
          {/* Left: Sticky Visuals */}
          <div className="sticky top-0 w-1/2 h-screen flex items-center justify-center py-24 relative overflow-hidden">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden z-10" style={{ background: "#EEDDED" }}>
              {/* Gradient accent shapes behind UI */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-16 -left-16 w-[220px] h-[220px] rounded-full overflow-hidden">
                  <div className="w-full h-full rounded-full" style={{ background: "conic-gradient(from 180deg, #F05A42, #2EC88A, #C46EE0, #F0B830, #F05A42)" }} />
                  <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25">
                    <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-8 w-[180px] h-[90px] overflow-hidden" style={{ transform: "rotate(15deg)" }}>
                  <div className="w-full h-[200%] rounded-full" style={{ background: "conic-gradient(from 220deg, #F05A42, #2EC88A, #50C8F0, #C46EE0, #F05A42)" }} />
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25">
                    <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
                  </div>
                </div>
                <div className="absolute top-[30%] -right-10 w-[160px] h-[160px] rounded-full overflow-hidden opacity-70">
                  <div className="w-full h-full rounded-full" style={{ background: "conic-gradient(from 90deg, #2EC88A, #50C8F0, #C46EE0, #F0B830, #2EC88A)" }} />
                  <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25">
                    <PaperTexture style={{ width: "100%", height: "100%" }} colorFront="#ffffff" colorBack="#000000" fiberSize={0.4} crumpleSize={0.5} foldCount={3} />
                  </div>
                </div>
                <svg className="absolute bottom-[20%] left-[10%] w-[80px] h-[80px] opacity-30" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="50" stroke="#C4B5A4" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
                </svg>
              </div>

              {/* Paper texture over shapes, under UI mockups */}
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
              
              {/* Step 1 Visual: Onboard in minutes (Active 0.0 - 0.333) */}
              <motion.div 
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.28, 0.36], [1, 1, 0]),
                  y: useTransform(scrollYProgress, [0.28, 0.36], [0, -40])
                }}
              >
                {/* Original accent lines — top right */}
                <svg className="absolute top-8 right-4 w-[200px] h-[120px] opacity-40" viewBox="0 0 200 120" fill="none">
                  <path d="M10 30 Q60 10 110 35 Q160 60 190 25" stroke="#8a7098" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 50 Q55 30 105 55 Q155 80 195 45" stroke="#8a7098" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 70 Q65 50 115 75 Q165 100 190 65" stroke="#8a7098" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M0 85 Q50 65 100 90 Q150 115 200 80" stroke="#8a7098" strokeWidth="1" strokeLinecap="round" />
                  <path d="M20 15 Q70 0 120 20 Q170 40 195 10" stroke="#C4B5A4" strokeWidth="1" strokeLinecap="round" />
                </svg>

                {/* Large sweeping teal flow lines — spanning full area */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500" fill="none" preserveAspectRatio="xMidYMid slice">
                  {/* Wide arcs sweeping from left to upper-right */}
                  <path d="M-40 60 Q150 -30 350 80 Q500 160 620 40" stroke="#7BBAC8" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
                  <path d="M-20 100 Q180 10 380 120 Q520 200 640 80" stroke="#7BBAC8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <path d="M-50 140 Q160 50 360 160 Q510 240 650 120" stroke="#8FC9D5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <path d="M-30 180 Q190 90 400 200 Q540 280 660 160" stroke="#8FC9D5" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
                  {/* Tighter arcs — upper right cluster */}
                  <path d="M300 20 Q420 -10 520 50 Q600 100 630 30" stroke="#7BBAC8" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
                  <path d="M320 60 Q440 30 540 90 Q610 140 650 70" stroke="#7BBAC8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <path d="M340 100 Q460 70 550 130 Q620 180 660 110" stroke="#8FC9D5" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
                  {/* Lower sweep */}
                  <path d="M-60 220 Q140 130 350 240 Q500 310 640 200" stroke="#8FC9D5" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                </svg>

                {/* Paper documents — first stack, top left */}
                <div className="absolute top-4 left-4">
                  {/* Back document (tilted) */}
                  <div className="absolute -top-1 left-3 w-[80px] h-[100px] bg-[#F5EFE5] rounded-md shadow-md border border-[#D4C9B8]/40" style={{ transform: "rotate(-12deg)" }}>
                    <div className="p-2.5 space-y-1.5">
                      <div className="w-12 h-1.5 bg-[#C4B5A4]/30 rounded-full" />
                      <div className="w-16 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                      <div className="w-10 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                      <div className="w-14 h-1.5 bg-[#C4B5A4]/15 rounded-full" />
                    </div>
                  </div>
                  {/* Front folder */}
                  <div className="relative w-[90px] h-[110px]" style={{ transform: "rotate(6deg)" }}>
                    <div className="absolute -top-3 left-2 w-10 h-5 bg-[#E8B84B] rounded-t-md" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#E8B84B] rounded-md shadow-lg">
                      <div className="absolute top-2 left-2 right-2 bottom-2 bg-white/90 rounded-sm p-2 space-y-1.5">
                        <div className="w-14 h-1.5 bg-[#C4B5A4]/30 rounded-full" />
                        <div className="w-10 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                        <div className="w-16 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                        <div className="flex items-center gap-1 mt-2">
                          <div className="w-4 h-4 rounded-full bg-[#01544F]/20 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-[#01544F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div className="w-8 h-1 bg-[#C4B5A4]/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paper documents — second stack, offset right */}
                <div className="absolute top-16 left-[120px]">
                  {/* Back sheet */}
                  <div className="absolute top-1 -left-1 w-[75px] h-[95px] bg-[#EDE7DB] rounded-md shadow border border-[#D4C9B8]/30" style={{ transform: "rotate(8deg)" }}>
                    <div className="p-2 space-y-1.5">
                      <div className="w-10 h-1.5 bg-[#C4B5A4]/25 rounded-full" />
                      <div className="w-14 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                      <div className="w-8 h-1.5 bg-[#C4B5A4]/15 rounded-full" />
                    </div>
                  </div>
                  {/* Front folder (teal/green) */}
                  <div className="relative w-[85px] h-[105px]" style={{ transform: "rotate(-4deg)" }}>
                    <div className="absolute -top-3 left-2 w-9 h-5 bg-[#5BA89D] rounded-t-md" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#5BA89D] rounded-md shadow-lg">
                      <div className="absolute top-2 left-2 right-2 bottom-2 bg-white/90 rounded-sm p-2 space-y-1.5">
                        <div className="w-12 h-1.5 bg-[#C4B5A4]/30 rounded-full" />
                        <div className="w-8 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                        <div className="w-14 h-1.5 bg-[#C4B5A4]/20 rounded-full" />
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="w-4 h-4 rounded-full bg-[#01544F]/20 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-[#01544F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div className="w-7 h-1 bg-[#C4B5A4]/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard UI — positioned bottom-right, extending to edges */}
                <div className="absolute bottom-0 right-0 left-[10%] top-[35%]" style={{ borderTopLeftRadius: "32px", overflow: "hidden" }}>
                  <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] w-full h-full flex flex-col" style={{ borderTopLeftRadius: "32px" }}>
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center shadow-inner">
                          <span className="text-white text-[14px] font-bold tracking-tighter">L</span>
                        </div>
                        <div>
                          <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Accounts Overview</div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#01544F] shadow-[0_0_8px_rgba(6,150,104,0.6)]"></div>
                            <span className="text-[11px] text-black/50 font-mono uppercase tracking-widest leading-none">NetSuite Connected</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 px-3 rounded-lg border border-black/[0.08] bg-white flex items-center justify-center text-[12px] font-medium text-black/70 shadow-sm">
                          Filter
                        </div>
                        <div className="h-8 px-3 rounded-lg bg-[#171717] text-white flex items-center justify-center text-[12px] font-medium shadow-sm">
                          New Invoice
                        </div>
                      </div>
                    </div>
                    
                    {/* Dashboard Body */}
                    <div className="flex-1 bg-white p-5 overflow-hidden flex flex-col gap-4">
                      {/* Metric Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-xl border border-black/[0.04] bg-[#FAFAFA]/50">
                          <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest mb-1">Total AR</div>
                          <div className="text-[16px] font-semibold text-[#171717] tracking-tight">$1.24M</div>
                        </div>
                        <div className="p-3 rounded-xl border border-black/[0.04] bg-[#FAFAFA]/50">
                          <div className="text-[11px] text-black/50 font-mono uppercase tracking-widest mb-1">Overdue</div>
                          <div className="text-[16px] font-semibold text-[#171717] tracking-tight">$342K</div>
                        </div>
                        <div className="p-3 rounded-xl border border-[#01544F]/20 bg-[#01544F]/5">
                          <div className="text-[11px] text-[#01544F]/70 font-mono uppercase tracking-widest mb-1">Recovered</div>
                          <div className="text-[16px] font-semibold text-[#01544F] tracking-tight">$84K <span className="text-[10px] font-normal text-[#01544F]/60 ml-1">This wk</span></div>
                        </div>
                      </div>

                      {/* List Header */}
                      <div className="grid grid-cols-12 gap-4 px-2 text-[11px] font-mono text-black/40 uppercase tracking-widest border-b border-black/[0.04] pb-2">
                        <div className="col-span-5">Customer</div>
                        <div className="col-span-3">Status</div>
                        <div className="col-span-4 text-right">Balance</div>
                      </div>

                      {/* List Rows */}
                      <div className="flex flex-col gap-1">
                        <div className="grid grid-cols-12 gap-4 px-2 py-2.5 items-center rounded-lg">
                          <div className="col-span-5 flex items-center gap-2.5">
                            <span className="text-[13px] font-medium text-[#171717]">Apex Corp</span>
                          </div>
                          <div className="col-span-3">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100/50">Overdue</span>
                          </div>
                          <div className="col-span-4 text-right text-[13px] font-mono font-medium text-[#171717]">$45,000</div>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-4 px-2 py-2.5 items-center rounded-lg">
                          <div className="col-span-5 flex items-center gap-2.5">
                            <span className="text-[13px] font-medium text-[#171717]">Meridian Supply</span>
                          </div>
                          <div className="col-span-3">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#01544F]/10 text-[#01544F] border border-[#01544F]/20">Active Plan</span>
                          </div>
                          <div className="col-span-4 text-right text-[13px] font-mono font-medium text-[#171717]">$12,400</div>
                        </div>

                        <div className="grid grid-cols-12 gap-4 px-2 py-2.5 items-center rounded-lg">
                          <div className="col-span-5 flex items-center gap-2.5">
                            <span className="text-[13px] font-medium text-[#171717]">Vanguard Log...</span>
                          </div>
                          <div className="col-span-3">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#FAFAFA] text-black/60 border border-black/[0.08]">Due in 5d</span>
                          </div>
                          <div className="col-span-4 text-right text-[13px] font-mono font-medium text-[#171717]">$8,250</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 Visual: File Dropzone (Active 0.333 - 0.666) */}
              <motion.div 
                className="absolute inset-0 z-[2] flex items-center justify-center p-8 pointer-events-none"
                style={{
                  opacity: useTransform(scrollYProgress, [0.28, 0.36, 0.61, 0.69], [0, 1, 1, 0]),
                  y: useTransform(scrollYProgress, [0.28, 0.36, 0.61, 0.69], [40, 0, 0, -40])
                }}
              >
                <div className="relative w-full max-w-[520px]">
                  {/* Main Dropzone UI */}
                  <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative z-10 w-full flex flex-col h-[380px]">
                    
                    {/* Dashboard Body */}
                    <div className="flex-1 bg-[#FAFAFA]/50 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                      
                      <div className="w-full max-w-sm aspect-[4/3] bg-white border-2 border-dashed border-[#002B31]/30 rounded-xl flex flex-col items-center justify-center relative z-10 hover:border-[#002B31]/60 hover:bg-[#002B31]/[0.02] transition-all group shadow-sm">
                        <div className="w-12 h-12 bg-white border border-black/[0.08] shadow-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <ArrowUpCircle className="w-6 h-6 text-[#002B31]" />
                        </div>
                        <h4 className="text-[15px] font-medium text-[#171717] mb-1">Click or drag invoices here</h4>
                        <p className="text-[12px] text-black/50 font-medium">Supports PDF, CSV, XLSX up to 100MB</p>

                        <motion.div 
                          className="absolute -right-12 -top-8 pointer-events-none drop-shadow-xl"
                          animate={{
                            x: [0, 8, 0],
                            y: [0, 6, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Image
                            src="/images/home/invoices-stack.png"
                            alt="Stack of invoices being dragged"
                            width={160}
                            height={120}
                            className="object-contain"
                            priority
                          />
                          <MousePointer2 className="absolute -bottom-2 right-4 w-6 h-6 text-black fill-black" />
                        </motion.div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 Visual: Connect systems & Data Ingestion (Active 0.666 - 1.0) */}
              <motion.div 
                className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
                style={{
                  opacity: useTransform(scrollYProgress, [0.61, 0.69], [0, 1]),
                  y: useTransform(scrollYProgress, [0.61, 0.69], [40, 0]),
                  scale: useTransform(scrollYProgress, [0.61, 0.69], [0.95, 1])
                }}
              >
                <div className="relative w-full max-w-[520px]">
                  {/* Main Processing UI */}
                  <div className="bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative z-10 w-full flex flex-col h-[380px]">
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between bg-[#FAFAFA]/80 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white border border-black/[0.08] shadow-sm rounded-lg flex items-center justify-center">
                          <FileCog className="w-4 h-4 text-[#171717]" />
                        </div>
                        <div>
                          <div className="text-[14px] font-medium text-[#171717] tracking-tight leading-none mb-1">Data Processing</div>
                          <div className="flex items-center gap-1.5">
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-blue-500"
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-[11px] text-blue-600 font-mono uppercase tracking-widest leading-none">Sync in progress</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-black/40 uppercase tracking-widest">
                        Batch 14.2
                      </div>
                    </div>
                    
                    {/* Dashboard Body */}
                    <div className="flex-1 bg-white p-6 overflow-hidden flex flex-col gap-6">
                      {/* Systems Connected */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#FAFAFA] border border-black/[0.04] rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center shrink-0">
                            <Database className="w-4 h-4 text-black/70" />
                          </div>
                          <div>
                            <div className="text-[10px] text-black/50 font-mono uppercase tracking-widest mb-0.5">Source</div>
                            <div className="text-[13px] font-medium text-[#171717] leading-tight">NetSuite ERP</div>
                          </div>
                        </div>
                        <div className="bg-[#FAFAFA] border border-black/[0.04] rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-[#002B31]/10 border border-[#002B31]/20 flex items-center justify-center shrink-0">
                            <span className="text-[14px] font-bold text-[#002B31]">L</span>
                          </div>
                          <div>
                            <div className="text-[10px] text-[#002B31]/70 font-mono uppercase tracking-widest mb-0.5">Destination</div>
                            <div className="text-[13px] font-medium text-[#171717] leading-tight">Lunica Core</div>
                          </div>
                        </div>
                      </div>

                      {/* Processing Pipeline */}
                      <div className="flex-1 border border-black/[0.04] rounded-xl bg-[#FAFAFA]/50 p-4 relative overflow-hidden">
                        {/* Animated Connection Lines */}
                        <motion.div 
                          className="absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/20 via-blue-500 to-[#002B31]/20"
                          style={{
                            backgroundSize: "100% 200%",
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "0% 100%"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        <div className="space-y-4 relative">
                          <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm ring-4 ring-white relative z-10">
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </div>
                            <div className="pt-0.5 flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="text-[13px] font-medium text-[#171717]">Ingesting Customers</div>
                                <div className="text-[11px] font-mono text-black/50">4,209 / 4,209</div>
                              </div>
                              <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-blue-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm ring-4 ring-white relative z-10">
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </div>
                            <div className="pt-0.5 flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="text-[13px] font-medium text-[#171717]">Mapping Invoices</div>
                                <div className="text-[11px] font-mono text-black/50">12,450 / 12,450</div>
                              </div>
                              <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-blue-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <motion.div 
                              className="w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shrink-0 shadow-sm ring-4 ring-white relative z-10"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            </motion.div>
                            <div className="pt-0.5 flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="text-[13px] font-medium text-[#171717]">Reconciling Balances</div>
                                <div className="text-[11px] font-mono text-blue-600">Processing...</div>
                              </div>
                              <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-blue-500 rounded-full"
                                  animate={{ width: ["40%", "70%"] }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contextual OCR Popout */}
                  <motion.div 
                    className="absolute -right-8 -bottom-8 bg-white ring-1 ring-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] rounded-xl p-4 w-[260px] z-20 pointer-events-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-black/[0.04]">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[12px] font-medium text-[#171717] leading-tight">OCR Extraction</div>
                        <div className="text-[10px] text-black/50 font-mono uppercase tracking-widest mt-0.5">Automated</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-black/60">Line items</span>
                        <span className="font-mono font-medium text-[#171717]">100% match</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-black/60">PO Numbers</span>
                        <span className="font-mono font-medium text-[#171717]">Extracted</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-black/60">Confidence</span>
                        <span className="font-mono font-medium text-[#002B31]">99.8%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="w-1/2">
            {steps.map((step, index) => (
              <StepItem 
                key={step.id}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </Container>
    </Section>
  )
}

function StepItem({ 
  step, 
  index, 
  scrollYProgress 
}: { 
  step: typeof steps[0], 
  index: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const stepSize = 1 / steps.length;
  const fadeInStart = Math.max(0, (index * stepSize) - 0.05);
  const fadeInEnd = index * stepSize + 0.02;
  const fadeOutStart = (index + 1) * stepSize - 0.05;
  const fadeOutEnd = (index + 1) * stepSize + 0.02;
  
  const lastIndex = steps.length - 1;
  const opacity = useTransform(
    scrollYProgress, 
    index === 0 ? [0, fadeOutStart, fadeOutEnd] : 
    index === lastIndex ? [fadeInStart, fadeInEnd, 1] :
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === 0 ? [1, 1, 0] :
    index === lastIndex ? [0, 1, 1] :
    [0, 1, 1, 0]
  );

  return (
    <motion.div 
      className={`min-h-[80vh] flex flex-col justify-center pr-12 max-w-md mx-auto`}
      style={{ opacity }}
    >
      {/* <div className="w-10 h-10 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center mb-6 shadow-sm">
        <step.icon className="w-5 h-5 text-black/80" />
      </div> */}
      <div className="font-mono base text-[#6B5D4D]/60 uppercase tracking-widest mb-4 font-medium">
        {step.id.toString().padStart(2, '0')}
      </div>
      <h3 className="text-5xl font-semibold mb-3 tracking-[-0.02em] text-[#2A2318]">
        {step.title}
      </h3>
      <p className="text-xl text-[#6B5D4D] leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  )
}

