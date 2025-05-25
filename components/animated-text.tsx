"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({ children, delay = 0, className = "", as = "p" }: AnimatedTextProps) {
  const Component = motion[as]

  return (
    <Component
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  )
}
