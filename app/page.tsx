"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { ParallaxBackground } from "@/components/parallax-background"
import { motion } from "framer-motion"
import { Code, FolderOpen, Mail, User, Zap } from "lucide-react"
import Link from "next/link"
import Sobre from "../components/ui/sobre/page"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background com efeito parallax */}
      <ParallaxBackground variant="home" />

      {/* Header */}
      <motion.header
        className="relative z-10 px-6 py-4 flex justify-between items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center">
          <div className="relative">
            <div className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              LS
            </div>
            <div className="absolute -top-3 left-0 text-cyan-400 text-xs">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L15.7942 9.75H0.205771L8 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/" className="text-cyan-400 relative group">
                SOBRE
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-glow-cyan"></span>
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
              <Link href="/contato" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
                CONTATO
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-glow-cyan"></span>
              </Link>
            </motion.li>
          </ul>
        </nav>
      </motion.header>
      
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <AnimatedText as="h1" className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter" delay={0.6}>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 neon-text-cyan">
            Lucas Souza
          </span>
        </AnimatedText>

        <AnimatedText
          as="h2"
          className="text-3xl md:text-5xl font-light mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 neon-text-cyan"
          delay={0.8}
        >
          Frontend Developer
        </AnimatedText>

        <AnimatedText delay={1} className="max-w-2xl text-gray-400 mb-8 text-lg">
          "Programadores criam soluções onde outros veem problemas"
        </AnimatedText>

        <AnimatedSection delay={1.2}>
          <div className="flex space-x-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projetos"
                className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-950/30 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Ver Projetos</span>
                <FolderOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contato"
                className="px-6 py-3 bg-transparent border border-purple-500 text-purple-400 rounded-md hover:bg-purple-950/30 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Contato</span>
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      <Sobre />

      {/* Tech stack icons (simplified) */}
      <AnimatedSection delay={1.4} className="relative z-10 flex justify-center space-x-8 pb-12">
        <motion.div
          className="text-cyan-500 opacity-70 hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <Code className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="text-cyan-500 opacity-70 hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: -5 }}
        >
          <Zap className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="text-cyan-500 opacity-70 hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <User className="w-8 h-8" />
        </motion.div>
      </AnimatedSection>
    </main>
  )
}
