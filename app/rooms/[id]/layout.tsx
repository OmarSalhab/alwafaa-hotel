import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تفاصيل الغرفة - فندق الوفاء الزرقاء",
  description: "اكتشف تفاصيل غرف فندق الوفاء في الزرقاء. غرف مريحة مع أسعار مناسبة وخدمات متكاملة.",
  openGraph: {
    title: "تفاصيل الغرفة - فندق الوفاء الزرقاء",
    description: "اكتشف تفاصيل غرف فندق الوفاء في الزرقاء. غرف مريحة مع أسعار مناسبة وخدمات متكاملة.",
    url: 'https://alwafaahotel.com/rooms',
    type: 'website',
  },
}

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
