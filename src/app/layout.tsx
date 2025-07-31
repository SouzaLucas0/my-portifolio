
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import GoogleAnalytics from "../components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Souza | Frontend Developer",
  description: "Portfolio de Lucas Souza, Desenvolvedor de sistemas Frontend em Ji-Paraná"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="3YwIBLV18tfpcn2m2Hy5K0nYYaG7CtwioZ5c31Zdb5w" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
