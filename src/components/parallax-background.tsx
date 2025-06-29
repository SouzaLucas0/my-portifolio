"use client"

import { useParallax } from "@/src/hooks/use-parallax"
import { useEffect, useState } from "react"

interface ParallaxBackgroundProps {
  variant?: "home" | "page"
}

export function ParallaxBackground({ variant = "page" }: ParallaxBackgroundProps) {
  const scrollY = useParallax()
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calcular o progresso da rolagem (0 a 1)
  const scrollProgress = windowHeight ? Math.min(scrollY / windowHeight, 1) : 0

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Círculos animados */}
      <div
        className="absolute w-24 h-24 rounded-full border border-purple-500/30 animate-pulse"
        style={{
          top: `${20 - scrollProgress * 5}%`,
          left: `${10 - scrollProgress * 15}%`,
          transform: `scale(${1 + scrollProgress * 0.2})`,
        }}
      ></div>

      <div
        className="absolute w-32 h-32 rounded-full border border-cyan-500/20"
        style={{
          top: `${40 + scrollProgress * 10}%`,
          right: `${15 - scrollProgress * 8}%`,
          transform: `scale(${1 + scrollProgress * 0.3})`,
        }}
      ></div>

      <div
        className="absolute w-40 h-40 rounded-full border border-pink-500/20"
        style={{
          bottom: `${30 - scrollProgress * 15}%`,
          left: `${20 + scrollProgress * 10}%`,
          transform: `scale(${1 - scrollProgress * 0.2})`,
        }}
      ></div>

      {variant === "home" && (
        <div
          className="absolute w-16 h-16 rounded-full bg-cyan-900/10"
          style={{
            top: `${60 - scrollProgress * 20}%`,
            right: `${25 + scrollProgress * 15}%`,
            transform: `scale(${1 + scrollProgress * 0.5})`,
          }}
        ></div>
      )}

      {/* Formas geométricas */}
      {variant === "home" && (
        <>
          <div
            className="absolute w-24 h-24 border border-cyan-500/30 transform rotate-45"
            style={{
              top: `${10 + scrollProgress * 15}%`,
              right: `${10 - scrollProgress * 5}%`,
              transform: `rotate(${45 + scrollProgress * 30}deg) scale(${1 + scrollProgress * 0.2})`,
            }}
          ></div>

          <div
            className="absolute w-32 h-32 border-l-2 border-t-2 border-pink-500/30 transform -rotate-12"
            style={{
              bottom: `${15 - scrollProgress * 10}%`,
              right: `${20 + scrollProgress * 10}%`,
              transform: `rotate(${-12 - scrollProgress * 20}deg)`,
            }}
          ></div>

          <div
            className="absolute w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 transform rotate-12"
            style={{
              top: `${30 + scrollProgress * 10}%`,
              left: `${5 - scrollProgress * 15}%`,
              transform: `rotate(${12 + scrollProgress * 45}deg)`,
            }}
          ></div>
        </>
      )}

      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            style={{
              transform: `translateX(${scrollProgress * (i % 2 === 0 ? 10 : -10)}px)`,
              opacity: 0.1 + scrollProgress * 0.1,
            }}
          ></div>
        ))}
      </div>

      {variant === "home" && (
        <div className="absolute inset-0 grid grid-rows-6 gap-4 opacity-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              style={{
                transform: `translateY(${scrollProgress * (i % 2 === 0 ? 15 : -15)}px)`,
                opacity: 0.1 + scrollProgress * 0.1,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Partículas animadas */}
      <div
        className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-ping"
        style={{
          top: `${25 + scrollProgress * 20}%`,
          left: `${33 - scrollProgress * 15}%`,
          animationDuration: "3s",
          transform: `scale(${1 + scrollProgress * 1})`,
        }}
      ></div>

      <div
        className="absolute w-1 h-1 bg-purple-500 rounded-full animate-ping"
        style={{
          top: `${66 - scrollProgress * 15}%`,
          right: `${25 + scrollProgress * 10}%`,
          animationDuration: "4s",
          transform: `scale(${1 + scrollProgress * 1.2})`,
        }}
      ></div>

      <div
        className="absolute w-1 h-1 bg-pink-500 rounded-full animate-ping"
        style={{
          bottom: `${25 + scrollProgress * 10}%`,
          left: `${50 - scrollProgress * 20}%`,
          animationDuration: "5s",
          transform: `scale(${1 + scrollProgress * 0.8})`,
        }}
      ></div>

      {/* Estrelas de fundo */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.3 + scrollProgress * 0.2,
            transform: `scale(${1 + scrollProgress * Math.random() * 2})`,
          }}
        ></div>
      ))}
    </div>
  )
}
