import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/icons";
import { siteInfo, whatsappLink } from "@/lib/nav";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technolife-informatica.vercel.app"),
  title: {
    default: "Technolife Informática | Suporte técnico com agilidade e confiança",
    template: "%s | Technolife Informática",
  },
  description: siteInfo.tagline,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Technolife Informática",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1036",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Technolife pelo WhatsApp"
          className="group fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg ring-4 shadow-black/25 ring-white transition hover:scale-105"
        >
          <WhatsAppIcon className="size-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-ink px-3.5 py-2 text-sm font-medium whitespace-nowrap opacity-0 transition group-hover:opacity-100 sm:block">
            Fale conosco
          </span>
        </a>
      </body>
    </html>
  );
}
