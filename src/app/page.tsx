"use client"

import { HomeTemplate } from "@/src/components/template/homeTemplate"
import GalaxyBackground from "../components/ui/galaxyTheme/galaxy-background"

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white overflow-hidden relative">
      <HomeTemplate />
      <GalaxyBackground />
    </main>
  )
}
