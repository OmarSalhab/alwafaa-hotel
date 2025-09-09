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
  title: "فندق الوفاء - الزرقاء | غرف اقتصادية مريحة بأسعار مناسبة",
  description: "فندق الوفاء في الزرقاء - إقامة مريحة بأسعار منافسة. غرف مفردة ومزوجة وعائلية من 15-25 دينار. خدمة 24 ساعة، إنترنت مجاني، موقف سيارات. احجز الآن!",
  keywords: [
    "فندق الوفاء",
    "فندق الزرقاء",
    "فندق اقتصادي الأردن",
    "غرف مفردة الزرقاء",
    "غرف مزوجة الزرقاء",
    "فندق عائلي الزرقاء",
    "إقامة رخيصة الزرقاء",
    "فندق بأسعار مناسبة",
    "فندق 15 دينار",
    "فندق 20 دينار",
    "فندق 25 دينار",
    "فندق الأردن",
    "فندق الزرقاء الأردن",
    "إقامة مريحة",
    "خدمة 24 ساعة",
    "إنترنت مجاني",
    "موقف سيارات مجاني"
  ],
  authors: [{ name: "فندق الوفاء" }],
  creator: "فندق الوفاء",
  publisher: "فندق الوفاء",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alwafaahoteljo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-JO': '/',
    },
  },
  openGraph: {
    title: "فندق الوفاء - الزرقاء | غرف اقتصادية مريحة بأسعار مناسبة",
    description: "فندق الوفاء في الزرقاء - إقامة مريحة بأسعار منافسة. غرف مفردة ومزوجة وعائلية من 15-25 دينار. خدمة 24 ساعة، إنترنت مجاني، موقف سيارات.",
    url: 'https://alwafaahoteljo.com',
    siteName: 'فندق الوفاء',
    locale: 'ar_JO',
    type: 'website',
    images: [
      {
        url: '/WhatsApp Image 2025-09-09 at 18.30.17_6a64479b.jpg',
        width: 1200,
        height: 630,
        alt: 'فندق الوفاء - الزرقاء',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "فندق الوفاء - الزرقاء | غرف اقتصادية مريحة",
    description: "فندق الوفاء في الزرقاء - إقامة مريحة بأسعار منافسة. غرف مفردة ومزوجة وعائلية من 15-25 دينار.",
    images: ['/WhatsApp Image 2025-09-09 at 18.30.17_6a64479b.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "فندق الوفاء",
    "alternateName": "Al Wafaa Hotel",
    "description": "فندق اقتصادي في الزرقاء يقدم غرف مريحة بأسعار مناسبة مع خدمة 24 ساعة",
    "url": "https://alwafaahoteljo.com",
    "logo": "https://alwafaahoteljo.com/placeholder-logo.png",
    "image": [
      "https://alwafaahoteljo.com/WhatsApp Image 2025-09-09 at 18.30.17_6a64479b.jpg",
      "https://alwafaahoteljo.com/WhatsApp Image 2025-09-02 at 14.49.21_68c3ea8d.jpg"
    ],
    "telephone": "+962798306615",
    "email": "fujeka2@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع سينما الحسين، خلف الروم والكاثوليك، داخل سوق الظاهر",
      "addressLocality": "الزرقاء",
      "addressCountry": "الأردن",
      "addressRegion": "الزرقاء"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.0728",
      "longitude": "36.0876"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "15-25 JOD",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "إنترنت مجاني",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "موقف سيارات مجاني",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "خدمة الغرف",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "تكييف",
        "value": true
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "غرف الفندق",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LodgingReservation",
            "name": "غرفة مفردة",
            "description": "غرفة مريحة وبسيطة مع سرير مفرد ومرافق أساسية",
            "occupancy": {
              "@type": "QuantitativeValue",
              "maxValue": 1
            }
          },
          "price": "15",
          "priceCurrency": "JOD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LodgingReservation",
            "name": "غرفة مزوجة",
            "description": "غرفة مناسبة للزوجين مع سرير مزدوج ومساحة أكبر",
            "occupancy": {
              "@type": "QuantitativeValue",
              "maxValue": 2
            }
          },
          "price": "20",
          "priceCurrency": "JOD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LodgingReservation",
            "name": "غرفة للعائلات",
            "description": "غرفة واسعة مناسبة للعائلات مع سريرين ومساحة إضافية",
            "occupancy": {
              "@type": "QuantitativeValue",
              "maxValue": 4
            }
          },
          "price": "25",
          "priceCurrency": "JOD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "15"
    }
  }

  return (
    <html lang="ar" dir="rtl" className={`rtl ${cairo.variable} ${amiri.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-arabic-body antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
