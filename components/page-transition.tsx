"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }} // Reduzido de 0.3 para 0.2
        className="min-h-screen w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.3, // Reduzido de 0.5 para 0.3
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>

        {/* Overlay animation mais rápido */}
        <motion.div
          className="fixed inset-0 bg-cyan-500 pointer-events-none z-40"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0 }}
          exit={{ scaleY: 1, originY: 1 }}
          transition={{
            duration: 0.3, // Reduzido de 0.4 para 0.3
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
