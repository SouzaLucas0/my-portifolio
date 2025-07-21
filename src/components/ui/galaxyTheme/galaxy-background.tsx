"use client"

import { useEffect, useState, useRef } from "react"
import Stars from "./stars"

export default function GalaxyBackground() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      setIsScrolling(true)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Fatores de paralaxe para diferentes camadas
  const layer1Parallax = scrollPosition * 0.1 // Camada mais próxima (nebulosas)
  const layer2Parallax = scrollPosition * 0.07 // Elementos geométricos
  const layerFlareParallax = scrollPosition * 0.08 // Flare, ligeiramente mais rápido que os elementos geométricos
  const layer3Parallax = scrollPosition * 0.04 // Camada do meio (nebulosas)
  const layer4Parallax = scrollPosition * 0.02 // Elementos geométricos mais distantes
  const layer5Parallax = scrollPosition * 0.01 // Camada mais distante (estrelas/nebulosas sutis)

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-galaxy-purple to-galaxy-cyan">     

      {/* Camadas de fundo com efeito de paralaxe */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${layer1Parallax}px)` }}>
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-galaxy-light-purple opacity-30 blur-3xl animate-pulse-slow" />
        <div className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-galaxy-light-cyan opacity-25 blur-3xl animate-pulse-slow" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${layer2Parallax}px)` }}>
        <div className="absolute left-1/5 top-1/3 h-24 w-24 bg-galaxy-light-cyan opacity-40 rotate-45 blur-sm" />
        <div className="absolute right-1/4 top-2/3 h-16 w-16 bg-galaxy-light-purple opacity-40 rounded-lg blur-sm" />
      </div>

      {/* Flare Effect - aparece e se move com a rolagem */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl transition-opacity duration-300 ease-out pointer-events-none ${
          isScrolling ? "opacity-20" : "opacity-0"
        }`}
        style={{ transform: `translate(-50%, calc(-50% + ${layerFlareParallax}px))` }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${layer3Parallax}px)` }}>
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-galaxy-purple opacity-15 blur-3xl" />
        <div className="absolute left-1/10 top-3/4 h-80 w-80 rounded-full bg-galaxy-cyan opacity-15 blur-3xl" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${layer4Parallax}px)` }}>
        <div className="absolute right-1/5 top-1/4 h-12 w-12 bg-galaxy-light-purple opacity-30 rotate-45 blur-xs" />
        <div className="absolute left-1/3 bottom-1/4 h-8 w-8 bg-galaxy-light-cyan opacity-30 rounded-md blur-xs" />
      </div>

      {/* Camada das estrelas: agora sem animação de brilho */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${layer5Parallax}px)` }}>
        <Stars count={150} /> {/* isScrolling não é mais passado para Stars */}
        <div className="absolute right-1/4 top-1/5 h-64 w-64 rounded-full bg-galaxy-light-purple opacity-10 blur-3xl" />
        <div className="absolute left-1/5 bottom-1/5 h-72 w-72 rounded-full bg-galaxy-light-cyan opacity-10 blur-3xl" />
      </div>
    </div>
  )
}
