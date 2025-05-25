"use client"

import { motion } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// Define a ordem das rotas para navegação
const routeOrder = ["/", "/sobre", "/projetos", "/contato"]

export function MobileSwipeIndicator() {
  const isMobile = useMobile()
  const pathname = usePathname()
  const [showIndicator, setShowIndicator] = useState(true)

  // Encontrar o índice atual na ordem das rotas
  const currentIndex = routeOrder.indexOf(pathname)

  // Determinar se há páginas anteriores ou próximas
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < routeOrder.length - 1

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

      // Esconder o indicador quando estiver no meio da página
      const scrollPercentage = scrollTop / (documentHeight - windowHeight)

      if (scrollPercentage > 0.2 && scrollPercentage < 0.8) {
        setShowIndicator(false)
      } else {
        setShowIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Verificar inicialmente
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMobile || !showIndicator) return null

  return (
    <div className="fixed left-0 right-0 z-30 pointer-events-none">
      {/* Indicador de swipe para cima (quando estiver no topo) */}
      {hasPrevious && (
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp className="w-6 h-6 text-cyan-400 animate-bounce" />
          <p className="text-xs text-gray-400">Deslize para cima</p>
        </motion.div>
      )}

      {/* Indicador de swipe para baixo (quando estiver no final) */}
      {hasNext && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs text-gray-400">Deslize para baixo</p>
          <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
        </motion.div>
      )}
    </div>
  )
}
