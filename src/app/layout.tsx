import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JIHYUN PORTFOLIO | AI & 데이터 전문가",
  description: "AI와 데이터를 통해 문제를 해결하는 풀스택 사고력을 가진 개발자 지현의 포트폴리오입니다.",
  keywords: ["AI", "데이터 분석", "웹 개발", "포트폴리오", "개발자", "지현"],
  authors: [{ name: "JIHYUN" }],
  openGraph: {
    title: "JIHYUN PORTFOLIO | AI & 데이터 전문가",
    description: "AI와 데이터를 통해 문제를 해결하는 풀스택 사고력을 가진 개발자 지현의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
