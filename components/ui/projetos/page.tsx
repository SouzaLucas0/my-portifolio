"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useScrollNavigation } from "@/hooks/use-scroll-navigation"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { NavigationControls } from "@/components/navigation-controls"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedItem } from "@/components/animated-item"
import { motion } from "framer-motion"

// Adicionar a importação do MobileSwipeIndicator
import { MobileSwipeIndicator } from "@/components/mobile-swipe-indicator"

// Adicionar a importação do NavigationLoading
import { NavigationLoading } from "@/components/navigation-loading"

export default function Projetos() {
  // Use o hook para ativar a navegação por scroll
  const { isNavigating } = useScrollNavigation()

  const projects = [
    {
      id: 1,
      title: "E-commerce App",
      description: "Aplicação de e-commerce completa com carrinho de compras e pagamento.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados e métricas de negócio.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "App de Finanças",
      description: "Aplicativo para controle de finanças pessoais com gráficos e relatórios.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Redux", "Firebase", "Styled Components"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Portfólio Criativo",
      description: "Portfólio para designer com animações e efeitos visuais avançados.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Three.js", "GSAP"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Loading overlay durante navegação */}
      <NavigationLoading isNavigating={isNavigating} />

      {/* Background com efeito parallax */}
      <ParallaxBackground />

      {/* Header */}
      <motion.header
        className="relative z-10 px-6 py-4 flex justify-between items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center">
          <Link href="/" className="relative">
            <div className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              LS
            </div>
            <div className="absolute -top-3 left-0 text-cyan-400 text-xs">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L15.7942 9.75H0.205771L8 0Z" fill="currentColor" />
              </svg>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/sobre" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
                SOBRE
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-glow-cyan"></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/projetos" className="text-cyan-400 relative group">
                PROJETOS
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-glow-cyan"></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contato" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
                CONTATO
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-glow-cyan"></span>
              </Link>
            </motion.li>
          </ul>
        </nav>
      </motion.header>

      {/* Back button */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Link>
      </motion.div>

      {/* Content */}
      <section className="relative z-10 container mx-auto px-6 py-8 pb-32">
        <AnimatedText
          as="h1"
          className="text-4xl md:text-5xl font-bold mb-8 neon-text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
          delay={0.7}
        >
          Projetos
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedItem key={project.id} index={index}>
              <motion.div
                className="group relative bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        className="p-2 bg-gray-800/80 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700/80 transition-colors"
                        aria-label="Ver no GitHub"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-2 bg-gray-800/80 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700/80 transition-colors"
                        aria-label="Ver demonstração"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-900/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + tagIndex * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </section>

      {/* Navigation controls */}
      <NavigationControls />
      <ScrollIndicator />

      {/* Mobile swipe indicator */}
      <MobileSwipeIndicator />
    </main>
  )
}
