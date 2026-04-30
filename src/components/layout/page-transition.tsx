"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState, type ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isHistoryNavigation, setIsHistoryNavigation] = useState(false)

  useEffect(() => {
    const handlePopState = () => setIsHistoryNavigation(true)

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  useEffect(() => {
    if (!isHistoryNavigation) return

    const timeout = window.setTimeout(() => setIsHistoryNavigation(false), 0)
    return () => window.clearTimeout(timeout)
  }, [isHistoryNavigation, pathname])

  if (isHistoryNavigation) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
