import { aboutContent } from "@/src/mocks/aboutContent"
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
          Formado em Sistemas de Informação e buscando consolidar primeiramente carreira em Desenvolvimento Front-End com especialidade em ReactJS. Posteriormente pretendendo adquirir conhecimentos em Back-End, a fim de trilhar a carreira de desenvolvedor Full Stack.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Atualmente trabalho desenvolvendo APIs com NodeJS/NestJS, criando automações para consultas web utlizando Python e consumidos os dados com ReactJS/NextJS.
        </p>
        <h4 className="mt-12 mb-6">
          <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Habilidades Técnicas
          </span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutContent.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-cyan-900/50 hover:border-cyan-500/50 transition-colors"
              whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.5)" }}
            >
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-cyan-400 mr-2" />
                <h3 className="text-xl font-medium text-cyan-300">{skill.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                {skill.skills.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {aboutContent.tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors"
              whileHover={{ scale: 1.02, borderColor: "rgba(147, 51, 234, 0.5)" }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-purple-400 mr-2" />
                <h3 className="text-xl font-medium text-purple-300">{tool.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                {tool.skills.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Experiência
          </h4>
          <div className="space-y-8">
            {aboutContent.experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 border-l border-cyan-900">
                <motion.div
                  className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-glow-cyan"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                <h3 className="text-xl font-medium text-cyan-300">{experience.title}</h3>
                <p className="text-gray-400">{experience.corp} • {experience.startDate} - {experience.finishDate}</p>
                <p className="mt-2 text-gray-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-6 text-purple-400">
            Formação
          </h4>
          <div className="space-y-8">
            {aboutContent.education.map((formation, index) => (
              <div key={index} className="relative pl-8 border-l border-purple-900">
                <motion.div
                  className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500 shadow-glow-purple"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                <h3 className="text-xl font-medium text-purple-300">{formation.title}</h3>
                <p className="text-gray-400">{formation.university} • {formation.startDate} - {formation.finishDate} </p>
                <p className="mt-2 text-gray-300">
                  {formation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
