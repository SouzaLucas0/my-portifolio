"use client"

import { useState, useEffect } from "react"

export function useParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Adicionar event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Limpar event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollY
}
