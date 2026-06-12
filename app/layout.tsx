import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Алина Шарипова | Graphic Designer",
  description:
    "Портфолио графического дизайнера Алины Шариповой: айдентика, афиши, презентации, визуальные системы и коммерческий дизайн.",
  keywords: [
    "Алина Шарипова",
    "графический дизайнер",
    "портфолио дизайнера",
    "айдентика",
    "афиши",
    "презентации",
    "брендинг"
  ],
  openGraph: {
    title: "Алина Шарипова | Graphic Designer",
    description: "Современное портфолио графического дизайнера.",
    type: "website",
    locale: "ru_RU"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
