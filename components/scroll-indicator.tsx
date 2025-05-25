"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(true)
  const [pulseEffect, setPulseEffect] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      )

      // Esconder o indicador quando estiver próximo do final da página
      if (scrollTop + windowHeight >= documentHeight - 150) {
        setShowIndicator(false)
      } else {
        setShowIndicator(true)
      }

      // Adicionar efeito de pulso quando estiver a 80% da página
      if (scrollTop + windowHeight >= documentHeight * 0.8) {
        setPulseEffect(true)
      } else {
        setPulseEffect(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Verificar inicialmente
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!showIndicator) return null

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center ${pulseEffect ? "animate-pulse" : "animate-bounce"}`}
    >
      <p className="text-gray-400 text-sm mb-2">Role até o final para continuar</p>
      <div className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center text-cyan-400">
        <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  )
}
