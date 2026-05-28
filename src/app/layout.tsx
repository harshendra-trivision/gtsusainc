import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GTS Engineering USA Incorporated | Delivering Engineering Excellence & Innovation",
  description: "GTS Engineering USA is a premier technology company and virtual extension of design, FEA simulation, piping layout, GIS network modeling, and EPCM teams globally.",
  keywords: ["engineering design", "plant process FEED", "3D CAD modeling", "FEA stress analysis", "web GIS development", "technical publishing", "ATA iSpec 2200"],
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
