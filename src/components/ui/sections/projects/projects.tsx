"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { projectsContent } from "@/src/mocks/projectContent"
import { PATH_PAGE } from "@/src/routes/paths"

export function Projects() {
  return (
    <section id={PATH_PAGE.projects} className="relative z-10 container mx-auto px-6 py-8 pb-32">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 neon-text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
        Projetos
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsContent.map((project, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ul>
    </section>
  )
}
