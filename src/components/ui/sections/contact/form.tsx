import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { fromSchema, type FormSchema } from "../../../../@types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export function Form() {

  const [succssMessagem, setSucessMessage] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormSchema>({
    resolver: zodResolver(fromSchema)
  })


  function handleFormSubmit(data: FormSchema) {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message
    }

    try {
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setSucessMessage('Enviado com sucesso!')
      setIsSubmited(true)
      reset()
    }
    catch (error) {
      alert("Erro interno, tente mais tarde")
      throw new Error(`Falha no form: ${error}`)
    }
  }

  return (
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
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Nome
              <motion.input
                {...register("name")}
                disabled={isSubmited}
                type="text"
                className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none text-white
                    ${isSubmited ? `placeholder-gray-600` : `placeholder-gray-400`}
                  `}
                placeholder="Seu nome"
                whileFocus={{
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                }}

              />
              {errors.name?.message && <p className="py-2 -mb-6 text-red-500">{errors.name?.message}</p>}
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
              <motion.input
                {...register("email")}
                disabled={isSubmited}
                type="email"
                className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white
                    ${isSubmited ? `placeholder-gray-600` : `placeholder-gray-400`}
                  `}

                placeholder="seu@email.com"
                whileFocus={{
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                }}
              />
              {errors.email?.message && <p className="py-2 -mb-6 text-red-500">{errors.email?.message}</p>}
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Mensagem
              <motion.textarea
                {...register("message")}
                disabled={isSubmited}
                rows={5}
                className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white resize-none
                    ${isSubmited ? `placeholder-gray-600` : `placeholder-gray-400`}
                  `}
                placeholder="Sua mensagem..."
                whileFocus={{
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.2)",
                }}
              ></motion.textarea>
              {errors.message?.message && <p className="py-2 -mb-6 text-red-500">{errors.message?.message}</p>}
            </label>
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmited}
            className={`w-full px-6 py-3 text-white rounded-md transition-colors flex items-center justify-center space-x-2 group 
              ${succssMessagem
                ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400'
                : 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400'}
            `}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{succssMessagem ? succssMessagem : 'Enviar Mensagem'}</span>
            {!succssMessagem && (
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}