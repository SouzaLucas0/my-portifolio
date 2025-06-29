"use client"

import { ParallaxBackground } from "@/src/components/parallax-background"
import { HomeTemplate } from "@/src/components/template/homeTemplate"
import { motion } from "framer-motion"
import { Code, User, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParallaxBackground variant="home" />
      <HomeTemplate />
    </main>
  )
}
