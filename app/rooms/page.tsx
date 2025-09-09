"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Tv, Bath, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const rooms = [
  {
    id: 1,
    name: "غرفة مفردة",
    price: "١٥ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.23_d9acf5ac.jpg",
    description: "غرفة مريحة وبسيطة مع سرير مفرد ومرافق أساسية مناسبة للمسافرين الفرديين",
    features: ["سرير مفرد", "حمام خاص", "تلفزيون", "إنترنت مجاني", "تكييف", "مكتب صغير"],
    capacity: "شخص واحد",
    size: "",
  },
  {
    id: 2,
    name: "غرفة مزوجة",
    price: "٢٠ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.21_46656a94.jpg",
    description: "غرفة مناسبة للزوجين مع سرير مزدوج ومساحة أكبر ومرافق مريحة",
    features: ["سرير مزدوج", "حمام خاص", "تلفزيون", "إنترنت مجاني", "تكييف", "منطقة جلوس صغيرة"],
    capacity: "شخصان",
    size: "",
  },
  {
    id: 3,
    name: "غرفة للعائلات",
    price: "٢٥ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.22_9da467c4.jpg",
    description: "غرفة واسعة مناسبة للعائلات مع سريرين ومساحة إضافية للأطفال",
    features: ["سريرين مزدوجين", "حمام خاص", "تلفزيون", "إنترنت مجاني", "تكييف", "منطقة جلوس", "خزانة ملابس كبيرة"],
    capacity: "٤ أشخاص",
    size: "",
  },
]

export default function RoomsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full md:px-40 px-9 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between md:justify-between md:gap-16">
            <div className="font-arabic-heading text-2xl md:text-4xl font-bold text-black drop-shadow-2xl ">
              فندق الوفاء
            </div>

            <button
              className="md:hidden text-black drop-shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                href="/"
                className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
              >
                الرئيسية
              </Link>
              <Link
                href="/#about"
                className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
              >
                عن الفندق
              </Link>
              <Link
                href="/rooms"
                className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
              >
                الغرف
              </Link>
              <Link
                href="/#contact"
                className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
              >
                اتصل بنا
              </Link>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="font-arabic-heading text-lg text-white hover:text-primary transition-colors text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  href="/#about"
                  className="font-arabic-heading text-lg text-white hover:text-primary transition-colors text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  عن الفندق
                </Link>
                <Link
                  href="/rooms"
                  className="font-arabic-heading text-lg text-white hover:text-primary transition-colors text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  الغرف
                </Link>
                <Link
                  href="/#contact"
                  className="font-arabic-heading text-lg text-white hover:text-primary transition-colors text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  اتصل بنا
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-arabic-heading text-4xl md:text-6xl font-bold text-foreground mb-6">غرفنا</h1>
          <p className="font-arabic-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            غرف مريحة وبسيطة تناسب احتياجاتكم مع أسعار مناسبة
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <Card className="wp-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${room.image}')` }}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="font-arabic-heading text-xl">{room.name}</CardTitle>
                      <Badge variant="secondary" className="font-arabic-heading">
                        {room.capacity}
                      </Badge>
                    </div>
                    <CardDescription className="font-arabic-body text-sm text-muted-foreground mb-2">
                      {room.size}
                    </CardDescription>
                    <CardDescription className="font-arabic-body leading-relaxed">{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {room.features.slice(0, 4).map((feature, index) => (
                        <Badge key={index} variant="outline" className="font-arabic-body text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-center">
                        <p className="font-arabic-heading text-2xl font-bold text-primary">{room.price}</p>
                        <p className="font-arabic-body text-sm text-muted-foreground">لكل ليلة</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-arabic-heading text-3xl font-bold text-foreground mb-4">
              الخدمات الأساسية
            </h2>
            <p className="font-arabic-body text-base text-muted-foreground">
              خدمات بسيطة ومريحة لضمان إقامة مريحة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic-heading text-lg font-semibold mb-2">إنترنت مجاني</h3>
              <p className="font-arabic-body text-sm text-muted-foreground">إنترنت عالي السرعة</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic-heading text-lg font-semibold mb-2">تلفزيون</h3>
              <p className="font-arabic-body text-sm text-muted-foreground">قنوات محلية</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bath className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic-heading text-lg font-semibold mb-2">حمام خاص</h3>
              <p className="font-arabic-body text-sm text-muted-foreground">مع أدوات أساسية</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic-heading text-lg font-semibold mb-2">خدمة الغرف</h3>
              <p className="font-arabic-body text-sm text-muted-foreground">عند الطلب</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-arabic-heading text-3xl font-bold mb-4">فندق الوفاء</h3>
            <p className="font-arabic-body text-lg mb-6">ضيافة أردنية أصيلة في قلب المملكة</p>
            <p className="font-arabic-body text-sm opacity-75">© 2024 فندق الوفاء. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
