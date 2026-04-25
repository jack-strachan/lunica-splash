import { cn } from "@/lib/utils"

interface WatermarkLogoProps {
  className?: string
}

export function WatermarkLogo({ className }: WatermarkLogoProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute right-0 top-0 translate-x-[20%] -translate-y-[30%]",
        className
      )}
      width="550"
      height="550"
      viewBox="-1 -1 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6437 0L8.93003 21.4307C8.93003 21.4307 8.09095 21.4307 6.98582 21.4307C0.109487 21.4307 -2.18263 15.5529 2.3402 11.089L13.5552 0H30.6232H30.6437Z"
        fill="none"
        stroke="#F5F2EB"
        strokeWidth="0.19"
      />
      <path
        d="M9.07325 21.4312H30.6232L20.5338 31.3891H9.07325C4.98019 31.3891 2.42203 27.9957 5.08252 25.3699L9.07325 21.4312Z"
        fill="none"
        stroke="#F5F2EB"
        strokeWidth="0.19"
      />
    </svg>
  )
}
