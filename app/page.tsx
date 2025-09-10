"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Phone,
	Mail,
	MapPin,
	Wifi,
	Car,
	Coffee,
	Utensils,
	Menu,
	X,
	Plane,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<nav className="fixed top-0 z-50 w-full md:px-40 px-9 border-b border-white/10">
				<div className="container mx-auto px-4 py-4 md:py-6">
					<div className="flex items-center justify-between md:justify-between md:gap-16">
						<div className="font-arabic-heading text-2xl md:text-4xl font-bold text-white drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]"></div>

						<button
							className="md:hidden text-primary drop-shadow-lg"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>

						{/* Desktop navigation */}
						<div className="hidden md:flex items-center gap-8 lg:gap-12">
							<Link
								href="/#home"
								className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
							>
								الرئيسية
							</Link>
							<Link
								href="#about"
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
								href="#contact"
								className="font-arabic-heading text-lg lg:text-xl text-white hover:text-primary transition-colors drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]"
							>
								اتصل بنا
							</Link>
						</div>
					</div>

					{isMobileMenuOpen && (
						<div className="md:hidden mt-4 bg-foreground text-primary-foreground backdrop-blur-md rounded-lg p-4">
							<div className="flex flex-col space-y-4">
								<Link
									href="#home"
									className="font-arabic-heading text-lg hover:text-background transition-colors text-center py-2"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									الرئيسية
								</Link>
								<Link
									href="#about"
									className="font-arabic-heading text-lg hover:text-background transition-colors text-center py-2"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									عن الفندق
								</Link>
								<Link
									href="/rooms"
									className="font-arabic-heading text-lg hover:text-background transition-colors text-center py-2"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									الغرف
								</Link>
								<Link
									href="#contact"
									className="font-arabic-heading text-lg hover:text-background transition-colors text-center py-2"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									اتصل بنا
								</Link>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="home"
				className="relative h-screen flex items-center justify-center"
			>
				<div
					className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
					style={{
						backgroundImage: `url('/WhatsApp Image 2025-09-09 at 18.30.17_6a64479b.jpg')`,
					}}
				>
					<div className="absolute inset-0 bg-black/20"></div>
				</div>
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
					<h1 className="font-arabic-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
						فندق الوفاء
					</h1>
					<p className="font-arabic-body text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed text-pretty">
						إقامة مريحة بأسعار منافسة وخدمة سريعة على مدار الساعة
					</p>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-12 md:py-20 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="font-arabic-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
							عن فندق الوفاء
						</h2>
						<p className="font-arabic-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
							يقع فندق الوفاء في مدينة الزرقاء، ويتميز بأسعاره المناسبة وخدماته
							السريعة التي تلبي احتياجات الضيوف على مدار الساعة. منذ تأسيسه عام
							2010، حرص الفندق على الجمع بين الراحة والبساطة لتقديم تجربة إقامة
							عملية ومريحة.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
						<div className="order-2 lg:order-1">
							<img
								src="/WhatsApp Image 2025-09-02 at 14.49.21_68c3ea8d.jpg"
								alt="فندق الوفاء"
								className="w-full h-64 md:h-80 lg:h-96 object-fill wp-card"
							/>
						</div>
						<div className="space-y-4 md:space-y-6 order-1 lg:order-2">
							<h3 className="font-arabic-heading text-xl md:text-2xl font-semibold text-foreground">
								فندق اقتصادي بخدمة متكاملة
							</h3>
							<p className="font-arabic-body text-sm md:text-base text-muted-foreground leading-relaxed">
								نوفر لضيوفنا غرفاً مريحة مجهزة بخدمة الواي فاي المجاني، ثلاجة،
								وتلفزيون، إضافةً إلى خدمات بسيطة مثل غسيل الملابس وخدمة الغرف.
							</p>
							<p className="font-arabic-body text-sm md:text-base text-muted-foreground leading-relaxed">
								موقعنا المتميز يتيح لك الوصول السهل إلى أهم المعالم السياحية
								والتجارية في المدينة، بينما تستمتع بأجواء هادئة ومريحة داخل
								الفندق.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="font-arabic-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
							خدماتنا المميزة
						</h2>
						<p className="font-arabic-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							نوفر مجموعة شاملة من الخدمات لضمان راحتكم وإقامة مميزة
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
						<Card className="wp-card text-center p-4 md:p-6">
							<CardHeader className="pb-3">
								<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
									<Wifi className="w-6 h-6 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									إنترنت مجاني
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									إنترنت عالي السرعة في جميع أنحاء الفندق
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="wp-card text-center p-4 md:p-6">
							<CardHeader className="pb-3">
								<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
									<Car className="w-6 h-6 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									موقف سيارات
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									موقف سيارات مجاني ومؤمن للنزلاء
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="wp-card text-center p-4 md:p-6">
							<CardHeader className="pb-3">
								<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
									<Plane className="w-6 h-6 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									خدمة توصيل
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									خدمة توصيل من والى المطار
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="wp-card text-center p-4 md:p-6">
							<CardHeader className="pb-3">
								<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
									<Coffee className="w-6 h-6 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									خدمة الغرف
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									خدمة الغرف على مدار 24 ساعة
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Rooms Preview */}
			<section className="py-12 md:py-20 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="font-arabic-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
							غرفنا
						</h2>
						<p className="font-arabic-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							غرف مريحة وبسيطة تناسب احتياجاتكم مع أسعار مناسبة
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
						<Card className="wp-card overflow-hidden">
							<div
								className="h-48 md:h-64 bg-cover bg-center"
								style={{
									backgroundImage: `url('/WhatsApp Image 2025-09-10 at 16.12.14_270299081.jpg')`,
								}}
							></div>
							<CardHeader className="pb-3">
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									غرفة مفردة
								</CardTitle>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									غرفة مريحة وبسيطة مع سرير مفرد ومرافق أساسية
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-0">
								<p className="font-arabic-heading text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
									١٥ دينار / الليلة
								</p>
								<Button
									asChild
									className="w-full font-arabic-heading text-sm md:text-base"
								>
									<Link href="/rooms/1">عرض التفاصيل</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="wp-card overflow-hidden">
							<div
								className="h-48 md:h-64 bg-cover bg-center"
								style={{
									backgroundImage: `url('/WhatsApp Image 2025-09-02 at 14.49.23_d9acf5ac.jpg')`,
								}}
							></div>
							<CardHeader className="pb-3">
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									غرفة مزوجة
								</CardTitle>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									غرفة مناسبة للزوجين مع سرير مزدوج ومساحة أكبر
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-0">
								<p className="font-arabic-heading text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
									٢٠ دينار / الليلة
								</p>
								<Button
									asChild
									className="w-full font-arabic-heading text-sm md:text-base"
								>
									<Link href="/rooms/2">عرض التفاصيل</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="wp-card overflow-hidden">
							<div
								className="h-48 md:h-64 bg-cover bg-center"
								style={{
									backgroundImage: `url('/WhatsApp Image 2025-09-02 at 14.49.21_46656a94.jpg')`,
								}}
							></div>
							<CardHeader className="pb-3">
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									غرفة للعائلات
								</CardTitle>
								<CardDescription className="font-arabic-body text-sm md:text-base">
									غرفة واسعة مناسبة للعائلات مع سريرين ومساحة إضافية
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-0">
								<p className="font-arabic-heading text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
									٢٥ دينار / الليلة
								</p>
								<Button
									asChild
									className="w-full font-arabic-heading text-sm md:text-base"
								>
									<Link href="/rooms/3">عرض التفاصيل</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="font-arabic-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
							اتصل بنا
						</h2>
						<p className="font-arabic-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							نحن هنا لخدمتكم والإجابة على جميع استفساراتكم
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
						<Card className="wp-card text-center p-6 md:p-8">
							<a href="tel:+962798306615">
								<CardHeader className="pb-4">
									<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
										<Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
									</div>
									<CardTitle className="font-arabic-heading text-lg md:text-xl">
										الهاتف
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-arabic-body text-base md:text-lg">
										+962798306615
									</p>
								</CardContent>
							</a>
						</Card>{" "}
						<Card className="wp-card text-center p-6 md:p-8">
							<a href="mailto:fujeka2@gmail.com">
								<CardHeader className="pb-4">
									<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
										<Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
									</div>
									<CardTitle className="font-arabic-heading text-lg md:text-xl">
										البريد الإلكتروني
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-arabic-body text-base md:text-lg">
										fujeka2@gmail.com
									</p>
								</CardContent>
							</a>
						</Card>
						<Card className="wp-card text-center p-6 md:p-8">
							<CardHeader className="pb-3">
								<div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
									<MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="font-arabic-heading text-lg md:text-xl">
									العنوان
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="font-arabic-body text-base md:text-lg">
									الزرقاء، الأردن
								</p>
								<p className="font-arabic-body text-base md:text-lg">
									شارع سينما الحسين، خلف الروم والكاثوليك، داخل سوق الظاهر
								</p>
							</CardContent>
						</Card>
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
	);
}
