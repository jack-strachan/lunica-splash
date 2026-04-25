"use client"

import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

export interface WarpBackgroundProps {
  className?: string
  children?: React.ReactNode
  perspective?: number
  beamsPerSide?: number
  beamSize?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
  gridColor?: string
}

interface BeamProps {
  width: string
  x: string
  delay: number
  duration: number
}

function Beam({ width, x, delay, duration }: BeamProps) {
  return (
    <motion.div
      className="absolute top-0"
      style={{
        left: x,
        width,
        aspectRatio: `1 / 8`,
        background: `linear-gradient(rgba(6, 150, 104, 0.6), transparent)`,
        transform: "translateX(-50%)",
      }}
      initial={{ y: "100cqmax" }}
      animate={{ y: "-100%" }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

const wallClasses =
  "[transform-style:preserve-3d] [container-type:inline-size] [height:100cqmax]"

function createGridBackground(gridColor: string, beamSize: string) {
  return {
    backgroundImage: `linear-gradient(${gridColor} 0 1px, transparent 1px ${beamSize}), linear-gradient(90deg, ${gridColor} 0 1px, transparent 1px ${beamSize})`,
    backgroundSize: `${beamSize} ${beamSize}`,
  }
}

export function WarpBackground({
  className,
  children,
  perspective = 100,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 4,
  gridColor = "rgba(0, 0, 0, 0.06)",
}: WarpBackgroundProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const generateBeams = useCallback(() => {
    const beams = []
    const cellsPerSide = Math.floor(100 / beamSize)
    const step = cellsPerSide / beamsPerSide

    for (let i = 0; i < beamsPerSide; i++) {
      const x = Math.floor(i * step)
      const delay = isClient
        ? Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin
        : beamDelayMin + (i / beamsPerSide) * (beamDelayMax - beamDelayMin)
      beams.push({ x, delay })
    }
    return beams
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, isClient])

  const topBeams = useMemo(() => generateBeams(), [generateBeams])
  const rightBeams = useMemo(() => generateBeams(), [generateBeams])
  const bottomBeams = useMemo(() => generateBeams(), [generateBeams])
  const leftBeams = useMemo(() => generateBeams(), [generateBeams])

  const beamSizeStr = `${beamSize}%`
  const gridStyle = createGridBackground(gridColor, beamSizeStr)

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-background", className)}>
      <div
        className="pointer-events-none absolute inset-0 [container-type:size] [transform-style:preserve-3d]"
        style={{ perspective }}
      >
        {/* Top wall */}
        <div
          className={cn(
            wallClasses,
            "absolute z-20 [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)]",
          )}
          style={gridStyle}
        >
          {topBeams.map((beam, i) => (
            <Beam key={i} delay={beam.delay} duration={beamDuration} width={beamSizeStr} x={`${beam.x * beamSize}%`} />
          ))}
        </div>

        {/* Bottom wall */}
        <div
          className={cn(
            wallClasses,
            "absolute top-full [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)]",
          )}
          style={gridStyle}
        >
          {bottomBeams.map((beam, i) => (
            <Beam key={i} delay={beam.delay} duration={beamDuration} width={beamSizeStr} x={`${beam.x * beamSize}%`} />
          ))}
        </div>

        {/* Left wall */}
        <div
          className={cn(
            wallClasses,
            "absolute left-0 top-0 [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)]",
          )}
          style={gridStyle}
        >
          {leftBeams.map((beam, i) => (
            <Beam key={i} delay={beam.delay} duration={beamDuration} width={beamSizeStr} x={`${beam.x * beamSize}%`} />
          ))}
        </div>

        {/* Right wall */}
        <div
          className={cn(
            wallClasses,
            "absolute right-0 top-0 [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]",
          )}
          style={gridStyle}
        >
          {rightBeams.map((beam, i) => (
            <Beam key={i} delay={beam.delay} duration={beamDuration} width={beamSizeStr} x={`${beam.x * beamSize}%`} />
          ))}
        </div>
      </div>

      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}
