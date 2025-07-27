import { Mail, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { PATH_PAGE } from "@/src/routes/paths"
import { Form } from "./form"
import { FaWhatsapp } from "react-icons/fa";

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

          <div className="flex flex-col gap-6">
            <a href="https://wa.me/5569993055812" target="_blank">
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-purple-950/50 flex items-center justify-center mr-4 border border-purple-900/50"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(147, 51, 234, 0.5)",
                    boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)",
                  }}
                >
                  <FaWhatsapp className="h-6 w-6 text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300">Whatsapp</h3>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors">
                    (69) 9 9305-5812
                  </span>
                </div>
              </motion.div>
            </a>
            <a href="mailto:lucas.souza.dev@outlook.com.br" target="_blank">
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
                  <span className="text-gray-400 hover:text-cyan-400 transition-colors">
                    lucas.souza.dev@outlook.com.br
                  </span>
                </div>
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/souzalucas0/" target="_blank">
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
                  <span className="text-gray-400 hover:text-purple-400 transition-colors">
                    linkedin.com/in/souzalucas0
                  </span>
                </div>
              </motion.div>
            </a>
            <a href="https://github.com/SouzaLucas0" target="_blank">
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
                  <span className="text-gray-400 hover:text-cyan-400 transition-colors">
                    github.com/SouzaLucas0
                  </span>
                </div>
              </motion.div>
            </a>
            <a href="https://instagram.com/_lucass.fs/#" target="_blank">
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
                  <span className="text-gray-400 hover:text-purple-400 transition-colors">
                    instagram.com/_lucass.fs
                  </span>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}
