"use client"

import { motion, AnimatePresence } from "framer-motion"

interface NavigationLoadingProps {
  isNavigating: boolean
}

export function NavigationLoading({ isNavigating }: NavigationLoadingProps) {
  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {/* Spinner animado */}
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-12 h-12 border-2 border-cyan-500/30 rounded-full"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-2 border-transparent border-t-cyan-400 rounded-full"></div>
            </motion.div>

            {/* Texto de carregamento */}
            <motion.p
              className="text-cyan-400 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Carregando...
            </motion.p>

            {/* Barra de progresso animada */}
            <motion.div
              className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Efeito de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
