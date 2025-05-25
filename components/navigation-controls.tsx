"use client"

import { usePathname, useRouter } from "next/navigation"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

// Define a ordem das rotas para navegação
const routeOrder = ["/", "/sobre", "/projetos", "/contato"]

export function NavigationControls() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const isMobile = useMobile()

  // Encontrar o índice atual na ordem das rotas
  const currentIndex = routeOrder.indexOf(pathname)

  // Determinar se há páginas anteriores ou próximas
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < routeOrder.length - 1

  // Funções de navegação
  const goToPrevious = () => {
    if (hasPrevious) {
      router.push(routeOrder[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (hasNext) {
      router.push(routeOrder[currentIndex + 1])
    }
  }

  // Calcular a porcentagem de rolagem
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

      // Calcular a porcentagem de rolagem
      const scrollable = documentHeight - windowHeight
      const scrolled = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100))

      setScrollPercentage(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    // Verificar inicialmente
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Ajustar a posição para dispositivos móveis
  const controlsPosition = isMobile
    ? "fixed left-4 top-1/2 transform -translate-y-1/2 z-30"
    : "fixed right-8 top-1/2 transform -translate-y-1/2 z-30"

  return (
    <div className={`${controlsPosition} flex flex-col items-center space-y-4`}>
      {/* Indicador de progresso */}
      <div className="h-24 w-1 bg-gray-800/50 rounded-full overflow-hidden mx-auto mb-2">
        <div
          className="bg-cyan-400 w-full rounded-full transition-all duration-300"
          style={{ height: `${scrollPercentage}%` }}
        ></div>
      </div>

      <button
        onClick={goToPrevious}
        disabled={!hasPrevious}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          hasPrevious
            ? "bg-gray-800/70 text-cyan-400 hover:bg-gray-700/70 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            : "bg-gray-800/30 text-gray-600 cursor-not-allowed"
        }`}
        aria-label="Página anterior"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        disabled={!hasNext}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          hasNext
            ? "bg-gray-800/70 text-cyan-400 hover:bg-gray-700/70 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            : "bg-gray-800/30 text-gray-600 cursor-not-allowed"
        }`}
        aria-label="Próxima página"
      >
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  )
}
