"use client"

import { HomeTemplate } from "@/src/components/template/homeTemplate"
import GalaxyBackground from "../components/ui/galaxyTheme/galaxy-background"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden relative">
      <HomeTemplate />
      <GalaxyBackground />
    </main>
  )
}
