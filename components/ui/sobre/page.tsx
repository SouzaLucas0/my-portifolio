"use client"

import Link from "next/link"
import { ArrowLeft, Code, Briefcase } from "lucide-react"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedItem } from "@/components/animated-item"
import { motion } from "framer-motion"

export default function Sobre() {

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background com efeito parallax */}
      <ParallaxBackground />     
      

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
          Sobre Mim
        </AnimatedText>

        <div className="max-w-3xl">
          <AnimatedText delay={0.8} className="text-gray-300 mb-6 leading-relaxed">
            Olá! Sou Lucas Souza, um desenvolvedor frontend apaixonado por criar interfaces interativas e responsivas
            que proporcionam experiências excepcionais aos usuários.
          </AnimatedText>

          <AnimatedText delay={0.9} className="text-gray-300 mb-6 leading-relaxed">
            Com mais de 5 anos de experiência no desenvolvimento web, tenho trabalhado com as tecnologias mais recentes
            para criar soluções modernas e eficientes.
          </AnimatedText>

          <AnimatedSection delay={1} className="mt-12">
            <AnimatedText
              as="h2"
              className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
              delay={1.1}
            >
              Habilidades Técnicas
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedItem index={0}>
                <motion.div
                  className="bg-gray-900/50 p-6 rounded-lg border border-cyan-900/50 hover:border-cyan-500/50 transition-colors"
                  whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.5)" }}
                >
                  <div className="flex items-center mb-4">
                    <Code className="h-5 w-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-medium text-cyan-300">Frontend</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      React.js / Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      HTML5 / CSS3 / JavaScript
                    </li>
                  </ul>
                </motion.div>
              </AnimatedItem>

              <AnimatedItem index={1}>
                <motion.div
                  className="bg-gray-900/50 p-6 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors"
                  whileHover={{ scale: 1.02, borderColor: "rgba(147, 51, 234, 0.5)" }}
                >
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="text-xl font-medium text-purple-300">Ferramentas</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Git / GitHub
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Figma / Adobe XD
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      VS Code
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Vercel / Netlify
                    </li>
                  </ul>
                </motion.div>
              </AnimatedItem>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.2} className="mt-12">
            <AnimatedText
              as="h2"
              className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
              delay={1.3}
            >
              Experiência
            </AnimatedText>

            <div className="space-y-8">
              <AnimatedItem index={0}>
                <div className="relative pl-8 border-l border-cyan-900">
                  <motion.div
                    className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-glow-cyan"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  ></motion.div>
                  <h3 className="text-xl font-medium text-cyan-300">Desenvolvedor Frontend Senior</h3>
                  <p className="text-gray-400">Empresa Tech • 2020 - Presente</p>
                  <p className="mt-2 text-gray-300">
                    Desenvolvimento de aplicações web modernas utilizando React, Next.js e TypeScript.
                  </p>
                </div>
              </AnimatedItem>

              <AnimatedItem index={1}>
                <div className="relative pl-8 border-l border-cyan-900">
                  <motion.div
                    className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-glow-cyan"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  ></motion.div>
                  <h3 className="text-xl font-medium text-cyan-300">Desenvolvedor Frontend</h3>
                  <p className="text-gray-400">Agência Digital • 2018 - 2020</p>
                  <p className="mt-2 text-gray-300">
                    Criação de interfaces responsivas e otimizadas para diversos clientes.
                  </p>
                </div>
              </AnimatedItem>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.4} className="mt-12">
            <AnimatedText
              as="h2"
              className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
              delay={1.5}
            >
              Formação
            </AnimatedText>

            <AnimatedItem index={0}>
              <div className="relative pl-8 border-l border-purple-900">
                <motion.div
                  className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500 shadow-glow-purple"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                ></motion.div>
                <h3 className="text-xl font-medium text-purple-300">Ciência da Computação</h3>
                <p className="text-gray-400">Universidade Federal • 2014 - 2018</p>
                <p className="mt-2 text-gray-300">
                  Bacharelado em Ciência da Computação com foco em desenvolvimento web.
                </p>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
