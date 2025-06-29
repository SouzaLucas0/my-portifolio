"use client"

import { PATH_PAGE } from "@/src/routes/paths"
import { motion } from "framer-motion"
import { Briefcase, Code } from "lucide-react"

export default function About() {

  return (
    <section id={PATH_PAGE.about} className="relative z-10 container mx-auto px-6 py-8 pb-32">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 neon-text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
        Sobre Mim
      </h3>
      <div className="max-w-3xl">
        <p className="text-gray-300 mb-6 leading-relaxed">
          Olá! Sou Lucas Souza, um desenvolvedor frontend apaixonado por criar interfaces interativas e responsivas
          que proporcionam experiências excepcionais aos usuários.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Com mais de 5 anos de experiência no desenvolvimento web, tenho trabalhado com as tecnologias mais recentes
          para criar soluções modernas e eficientes.
        </p>
        <h4 className="mt-12">
          <span className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Habilidades Técnicas
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </h4>
        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Experiência
          </h4>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-cyan-900">
              <motion.div
                className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-glow-cyan"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <h3 className="text-xl font-medium text-cyan-300">Desenvolvedor Frontend Senior</h3>
              <p className="text-gray-400">Empresa Tech • 2020 - Presente</p>
              <p className="mt-2 text-gray-300">
                Desenvolvimento de aplicações web modernas utilizando React, Next.js e TypeScript.
              </p>
            </div>
            <div className="relative pl-8 border-l border-cyan-900">
              <motion.div
                className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-glow-cyan"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <h3 className="text-xl font-medium text-cyan-300">Desenvolvedor Frontend</h3>
              <p className="text-gray-400">Agência Digital • 2018 - 2020</p>
              <p className="mt-2 text-gray-300">
                Criação de interfaces responsivas e otimizadas para diversos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Formação
          </h4>
          <div className="relative pl-8 border-l border-purple-900">
            <motion.div
              className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500 shadow-glow-purple"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <h3 className="text-xl font-medium text-purple-300">Ciência da Computação</h3>
            <p className="text-gray-400">Universidade Federal • 2014 - 2018</p>
            <p className="mt-2 text-gray-300">
              Bacharelado em Ciência da Computação com foco em desenvolvimento web.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
