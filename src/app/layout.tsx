import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTech Solutions - Building Intelligent Financial & Digital Solutions",
  description: "A unified ecosystem for credit, money management, finance APIs, and digital product development. Premium fintech solutions for the modern world.",
  keywords: ["fintech", "financial solutions", "digital development", "Monetapay", "Smart Finance", "FaaS", "finance APIs"],
  authors: [{ name: "FinTech Solutions Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "FinTech Solutions - Building Intelligent Financial & Digital Solutions",
    description: "A unified ecosystem for credit, money management, finance APIs, and digital product development.",
    url: "https://fintech-solutions.com",
    siteName: "FinTech Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Solutions",
    description: "Building intelligent financial and digital solutions for the modern world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
