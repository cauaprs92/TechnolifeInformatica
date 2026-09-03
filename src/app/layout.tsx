import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technolife Informática | Suporte Técnico",
  description:
    "Suporte técnico para produzir, transmitir e proteger as informações com agilidade e confiança.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <a className="floating-whatsapp" href="https://wa.me/5512988200317" target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp">
          ◔
        </a>
      </body>
    </html>
  );
}
