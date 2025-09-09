import type React from "react"
import type { Metadata } from "next"
import { Cairo, Amiri } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-heading",
  display: "swap",
})

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-body",
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "فندق الوفاء - الأردن",
  description: " فندق الوفاء - تجربة إقامة فاخرة في قلب الأردن - الزرقاء",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`rtl ${cairo.variable} ${amiri.variable}`}>
      <body className="font-arabic-body antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
