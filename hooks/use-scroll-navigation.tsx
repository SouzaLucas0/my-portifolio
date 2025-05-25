"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

// Define a ordem das rotas para navegação
const routeOrder = ["/", "/sobre", "/projetos", "/contato"]

export function useScrollNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolling, setIsScrolling] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [lastScrollTime, setLastScrollTime] = useState(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [debugInfo, setDebugInfo] = useState({ isAtBottom: false, scrollTop: 0, windowHeight: 0, documentHeight: 0 })
  const isMobile = useMobile()

  // Referências para eventos de toque
  const touchStartY = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const minSwipeDistance = 50 // Distância mínima para considerar um swipe

  useEffect(() => {
    // Função para verificar se estamos no final da página
    const checkIfAtBottom = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      )

      // Consideramos que estamos no final da página se estamos a 30px do final
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 30

      setDebugInfo({
        isAtBottom,
        scrollTop,
        windowHeight,
        documentHeight,
      })

      return isAtBottom
    }

    // Função para verificar se estamos no topo da página
    const checkIfAtTop = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      return scrollTop <= 10
    }

    // Função para bloquear scroll durante navegação
    const blockScroll = (e: Event) => {
      if (isNavigating) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Ajustar os tempos de bloqueio e liberação do scroll
    // Função para navegar para a próxima rota
    const navigateToNextRoute = (direction: number) => {
      // Evitar múltiplos eventos de scroll em um curto período
      const now = Date.now()
      if (now - lastScrollTime < 800 || isNavigating) {
        return
      }

      // Encontrar o índice atual na ordem das rotas
      const currentIndex = routeOrder.indexOf(pathname)

      // Calcular o próximo índice com base na direção
      const nextIndex = currentIndex + direction

      // Garantir que o índice esteja dentro dos limites
      if (nextIndex >= 0 && nextIndex < routeOrder.length) {
        // Evitar múltiplas navegações
        if (isScrolling) return

        setIsScrolling(true)
        setIsNavigating(true)
        setLastScrollTime(now)

        // Adicionar classe ao body para bloquear scroll
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"

        // Navegar para a próxima rota
        router.push(routeOrder[nextIndex])

        // Resetar o estado de scrolling após um tempo
        setTimeout(() => {
          setIsScrolling(false)
        }, 800) // Reduzido de 1200 para 800

        // Resetar navegação e desbloquear scroll após a transição + 0.5s adicional
        setTimeout(() => {
          setIsNavigating(false)
          document.body.style.overflow = ""
          document.body.style.pointerEvents = ""
        }, 800) // Reduzido de 1000 para 800 (animação) + 500ms adicional = 800ms
      }
    }

    // Função para lidar com o evento de scroll
    const handleWheel = (e: WheelEvent) => {
      // Bloquear se estiver navegando
      if (isNavigating) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // Determinar a direção do scroll
      const direction = e.deltaY > 0 ? 1 : -1

      // Verificar se estamos no topo ou no final da página
      const isAtTop = checkIfAtTop()
      const isAtBottom = checkIfAtBottom()

      // Apenas navegar se estiver no topo (rolando para cima) ou no final (rolando para baixo)
      if ((direction < 0 && isAtTop) || (direction > 0 && isAtBottom)) {
        navigateToNextRoute(direction)
      }
    }

    // Funções para eventos de toque em dispositivos móveis
    const handleTouchStart = (e: TouchEvent) => {
      if (isNavigating) {
        e.preventDefault()
        return false
      }
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isNavigating) {
        e.preventDefault()
        return false
      }

      // Prevenir o comportamento padrão apenas se estivermos no topo ou no final da página
      const isAtTop = checkIfAtTop()
      const isAtBottom = checkIfAtBottom()

      if (isAtTop || isAtBottom) {
        // Reduzir a sensibilidade do scroll
        if (Math.random() > 0.7) {
          e.preventDefault()
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isNavigating) {
        e.preventDefault()
        return false
      }

      if (touchStartY.current === null) return

      touchEndY.current = e.changedTouches[0].clientY

      // Calcular a distância do swipe
      const swipeDistance = touchStartY.current - touchEndY.current

      // Verificar se a distância é suficiente para considerar um swipe
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        // Determinar a direção (positivo = para cima, negativo = para baixo)
        const direction = swipeDistance > 0 ? 1 : -1

        // Verificar se estamos no topo ou no final da página
        const isAtTop = checkIfAtTop()
        const isAtBottom = checkIfAtBottom()

        // Apenas navegar se estiver no topo (swipe para baixo) ou no final (swipe para cima)
        if ((direction < 0 && isAtTop) || (direction > 0 && isAtBottom)) {
          navigateToNextRoute(direction)
        }
      }

      // Resetar os valores
      touchStartY.current = null
      touchEndY.current = null
    }

    // Adicionar os event listeners
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("scroll", blockScroll, { passive: false })

    // Adicionar event listeners para touch apenas em dispositivos móveis
    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, { passive: false })
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
      window.addEventListener("touchend", handleTouchEnd, { passive: false })
    }

    // Limpar os event listeners ao desmontar
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("scroll", blockScroll)

      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart)
        window.removeEventListener("touchmove", handleTouchMove)
        window.removeEventListener("touchend", handleTouchEnd)
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Garantir que o scroll seja desbloqueado ao desmontar
      document.body.style.overflow = ""
      document.body.style.pointerEvents = ""
    }
  }, [pathname, router, isScrolling, lastScrollTime, isMobile, isNavigating])

  // Adicionar um componente de depuração para visualizar os valores
  useEffect(() => {
    const debugElement = document.createElement("div")
    debugElement.style.position = "fixed"
    debugElement.style.bottom = "10px"
    debugElement.style.left = "10px"
    debugElement.style.backgroundColor = "rgba(0,0,0,0.7)"
    debugElement.style.color = "white"
    debugElement.style.padding = "10px"
    debugElement.style.borderRadius = "5px"
    debugElement.style.fontSize = "12px"
    debugElement.style.zIndex = "9999"
    debugElement.style.display = "none" // Oculto por padrão

    document.body.appendChild(debugElement)

    const updateDebugInfo = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      )

      const isAtBottom = scrollTop + windowHeight >= documentHeight - 30

      debugElement.innerHTML = `
        isAtBottom: ${isAtBottom}<br>
        scrollTop: ${scrollTop}<br>
        windowHeight: ${windowHeight}<br>
        documentHeight: ${documentHeight}<br>
        remaining: ${documentHeight - (scrollTop + windowHeight)}px<br>
        route: ${pathname}<br>
        isMobile: ${isMobile}<br>
        isNavigating: ${isNavigating}
      `
    }

    // Atualizar a cada 100ms
    const interval = setInterval(updateDebugInfo, 100)

    // Mostrar/ocultar com a tecla D
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" || e.key === "D") {
        debugElement.style.display = debugElement.style.display === "none" ? "block" : "none"
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(interval)
      document.body.removeChild(debugElement)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [pathname, isMobile, isNavigating])

  return { currentRoute: pathname, isScrolling, isNavigating }
}
