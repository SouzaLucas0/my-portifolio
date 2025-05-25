"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedItemProps {
  children: ReactNode
  index?: number
  className?: string
}

export function AnimatedItem({ children, index = 0, className = "" }: AnimatedItemProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1, // Staggered delay based on index
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
