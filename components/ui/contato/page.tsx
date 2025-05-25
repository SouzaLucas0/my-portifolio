"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Send } from "lucide-react"
import { useScrollNavigation } from "@/hooks/use-scroll-navigation"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { NavigationControls } from "@/components/navigation-controls"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedItem } from "@/components/animated-item"
import { motion } from "framer-motion"
// Adicionar a importação do MobileSwipeIndicator
import { MobileSwipeIndicator } from "@/components/mobile-swipe-indicator"
import { NavigationLoading } from "@/components/navigation-loading"

export default function Contato() {
  // Use o hook para ativar a navegação por scroll
  const { isNavigating } = useScrollNavigation()

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
              <Link href="/projetos" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
                PROJETOS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-glow-cyan"></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contato" className="text-cyan-400 relative group">
                CONTATO
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-glow-cyan"></span>
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
          Contato
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.8}>
            <AnimatedText delay={0.9} className="text-gray-300 mb-8 leading-relaxed">
              Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer
              trocar uma ideia, entre em contato!
            </AnimatedText>

            <div className="space-y-6">
              <AnimatedItem index={0}>
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center mr-4 border border-cyan-900/50"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-cyan-300">Email</h3>
                    <a
                      href="mailto:contato@lucassouza.com.br"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      contato@lucassouza.com.br
                    </a>
                  </div>
                </motion.div>
              </AnimatedItem>

              <AnimatedItem index={1}>
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-purple-950/50 flex items-center justify-center mr-4 border border-purple-900/50"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(147, 51, 234, 0.5)",
                      boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-purple-300">LinkedIn</h3>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      linkedin.com/in/lucassouza
                    </a>
                  </div>
                </motion.div>
              </AnimatedItem>

              <AnimatedItem index={2}>
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center mr-4 border border-cyan-900/50"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    <Github className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-cyan-300">GitHub</h3>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      github.com/lucassouza
                    </a>
                  </div>
                </motion.div>
              </AnimatedItem>

              <AnimatedItem index={3}>
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-purple-950/50 flex items-center justify-center mr-4 border border-purple-900/50"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(147, 51, 234, 0.5)",
                      boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <Twitter className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-purple-300">Twitter</h3>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      twitter.com/lucassouza
                    </a>
                  </div>
                </motion.div>
              </AnimatedItem>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <motion.div
              className="bg-gray-900/30 p-8 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{
                borderColor: "rgba(6, 182, 212, 0.3)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)",
              }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Envie uma mensagem
              </h2>

              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Nome
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                    placeholder="Seu nome"
                    whileFocus={{
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                    placeholder="seu@email.com"
                    whileFocus={{
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Mensagem
                  </label>
                  <motion.textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white resize-none"
                    placeholder="Sua mensagem..."
                    whileFocus={{
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                    }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-md hover:from-cyan-500 hover:to-cyan-400 transition-colors flex items-center justify-center space-x-2 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
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
