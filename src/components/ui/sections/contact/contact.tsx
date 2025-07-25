"use client"

import { ArrowLeft, Mail, Github, Linkedin, Twitter, Send, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { PATH_PAGE } from "@/src/routes/paths"

export function Contact() {

  return (
    <section id={PATH_PAGE.contact} className="relative z-10 container mx-auto px-6 py-8 pb-32">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 neon-text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
        Contato
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer
            trocar uma ideia, entre em contato!
          </p>

          <div className="space-y-6">
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
                    href="mailto:lucas.souza.dev@outlook.com.br"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    lucas.souza.dev@outlook.com.br
                  </a>
                </div>
              </motion.div>
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
                  <a href="https://www.linkedin.com/in/souzalucas0/" className="text-gray-400 hover:text-purple-400 transition-colors" target="_blank">
                    linkedin.com/in/souzalucas0
                  </a>
                </div>
              </motion.div>
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
                  <a href="https://github.com/SouzaLucas0" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank">
                    github.com/SouzaLucas0
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-purple-950/50 flex items-center justify-center mr-4 border border-purple-900/50"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(147, 51, 234, 0.5)",
                    boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)",
                  }}
                >
                  <Instagram className="h-5 w-5 text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300">Instagram</h3>
                  <a href="https://instagram.com/_lucass.fs/#" className="text-gray-400 hover:text-purple-400 transition-colors" target="_blank">
                    instagram.com/_lucass.fs
                  </a>
                </div>
              </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            className="bg-gray-900/30 p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{
              borderColor: "rgba(6, 182, 212, 0.3)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)",
            }}          >
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
        </div>
      </div>
    </section>
  )
}
