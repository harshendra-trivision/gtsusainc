import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GTS | AI-Powered Industrial Engineering and Digital Transformation",
  description: "GTS delivers AI-powered engineering, automation, IIoT, and industrial software solutions for industrial, energy, and manufacturing organizations globally.",
  keywords: ["industrial automation", "AI digital transformation", "predictive maintenance", "digital twin", "smart manufacturing", "industrial software"],
  authors: [{ name: "GTS Engineering USA Inc." }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
