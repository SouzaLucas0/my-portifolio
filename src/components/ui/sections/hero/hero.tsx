import { motion } from "framer-motion";
import { FolderOpen, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 neon-text-cyan">
            Lucas Souza
          </span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 neon-text-cyan">
          Frontend Developer
        </h2>

        <span className="max-w-2xl text-gray-400 mb-8 text-lg">
          "Programadores criam soluções onde outros veem problemas"
        </span>
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
      </section>
    )
}