import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "启航教育学院 | 专业职业技能培训",
  description:
    "启航教育学院为职场人士与高校学生提供AI、数据分析、产品经理等热门课程，助力快速提升职场竞争力。",
  metadataBase: new URL("https://qihangedu.com"),
  openGraph: {
    title: "启航教育学院",
    description:
      "专注实战的教育培训机构，提供AI、数据分析、产品管理与软技能课程。",
    url: "https://qihangedu.com",
    siteName: "启航教育学院",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "启航教育学院",
    description:
      "启航教育学院提供系统化的职业技能培训，帮助你在数字时代脱颖而出。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
