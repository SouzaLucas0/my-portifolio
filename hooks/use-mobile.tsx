"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se o dispositivo é móvel
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      // Verificar se é um dispositivo móvel pelo userAgent
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

      // Verificar também pelo tamanho da tela
      const isMobileBySize = window.innerWidth <= 768

      setIsMobile(mobileRegex.test(userAgent) || isMobileBySize)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Verificar quando a janela for redimensionada
    window.addEventListener("resize", checkIfMobile)

    // Limpar o event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
