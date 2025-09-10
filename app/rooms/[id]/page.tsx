"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Tv, Bath, Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

const rooms = [
  {
    id: 1,
    name: "غرفة مفردة",
    price: "١٥ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.23_d9acf5ac.jpg",
    description: "غرفة مريحة وبسيطة مع سرير مفرد ومرافق أساسية مناسبة للمسافرين الفرديين",
    features: ["سرير مفرد", "تلفزيون", "إنترنت مجاني", "ثلاجه", "مكتب صغير"],
    capacity: "شخص واحد",
    size: "",
  },
  {
    id: 2,
    name: "غرفة مزوجة",
    price: "٢٠ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.21_46656a94.jpg",
    description: "غرفة مناسبة للزوجين مع سرير مزدوج ومساحة أكبر ومرافق مريحة",
    features: ["سرير مزدوج", "تلفزيون", "إنترنت مجاني","ثلاجة", "منطقة جلوس صغيرة"],
    capacity: "شخصان",
    size: "",
  },
  {
    id: 3,
    name: "غرفة للعائلات",
    price: "٢٥ دينار",
    image: "/WhatsApp Image 2025-09-02 at 14.49.22_9da467c4.jpg",
    description: "غرفة واسعة مناسبة للعائلات مع سريرين ومساحة إضافية للأطفال",
    features: ["سرير مزدوج + سرير مفرد",  "تلفزيون","ثلاجة", "إنترنت مجاني","منطقة جلوس", "خزانة ملابس "],
    capacity: "٤ أشخاص",
    size: "",
  },
]

export default function RoomDetailPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const roomId = parseInt(params.id as string);
  const room = rooms.find(r => r.id === roomId);

  if (!room) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-arabic-heading text-2xl font-bold text-foreground mb-4">الغرفة غير موجودة</h1>
          <Link href="/rooms">
            <Button className="font-arabic-heading">العودة للغرف</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full md:px-40 px-9 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between md:justify-between md:gap-16">
            <div className="font-arabic-heading text-2xl md:text-4xl font-bold text-primary drop-shadow-2xl ">
              فندق الوفاء
            </div>

            <button
              className="md:hidden text-foreground drop-shadow-lg"
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
            <div className="md:hidden mt-4 bg-foreground backdrop-blur-md rounded-lg p-4">
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

      {/* Room Detail Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/rooms" className="inline-flex items-center mt-5 text-primary hover:text-primary/80 transition-colors font-arabic-body">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للغرف
            </Link>
          </div>
          <div className="text-center">
            <h1 className="font-arabic-heading text-4xl md:text-6xl font-bold text-foreground mb-6">{room.name}</h1>
            <p className="font-arabic-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {room.description}
            </p>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Room Image */}
            <div className="order-2 lg:order-1">
              <div className="h-96 lg:h-[500px] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('${room.image}')` }}></div>
            </div>

            {/* Room Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <Card className="wp-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="font-arabic-heading text-2xl">{room.name}</CardTitle>
                    <Badge variant="secondary" className="font-arabic-heading text-lg px-4 py-2">
                      {room.capacity}
                    </Badge>
                  </div>
                  <CardDescription className="font-arabic-body text-lg text-muted-foreground mb-4">
                    {room.size}
                  </CardDescription>
                  <CardDescription className="font-arabic-body text-base leading-relaxed">
                    {room.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-arabic-heading text-lg font-semibold mb-4">المرافق المتوفرة:</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="font-arabic-body text-sm px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="text-center">
                      <p className="font-arabic-heading text-3xl font-bold text-primary mb-2">{room.price}</p>
                      <p className="font-arabic-body text-base text-muted-foreground">لكل ليلة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Services */}
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
			<footer className="bg-foreground text-background py-8 md:py-12">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h3 className="font-arabic-heading text-2xl md:text-3xl font-bold mb-3 md:mb-4">
							فندق الوفاء
						</h3>
						<p className="font-arabic-body text-base md:text-lg mb-4 md:mb-6">
							ضيافة أردنية أصيلة في قلب المملكة
						</p>
						<p className="font-arabic-body text-xs md:text-sm opacity-75">
							© 2024 solvenear. جميع الحقوق محفوظة.
						</p>
					</div>
				</div>
			</footer>
    </div>
  )
}
