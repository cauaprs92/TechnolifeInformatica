import Link from "next/link";
import { siteInfo } from "@/lib/nav";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Suporte técnico para produzir, transmitir e proteger as informações com{" "}
          <span className="text-emerald-400">agilidade e confiança</span>
        </h1>
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          Atendimento especializado para empresas e para o público em geral: infraestrutura,
          servidores, backup, formatação, manutenção e reparos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${siteInfo.phoneDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Falar no WhatsApp
          </a>
          <Link
            href="/servicos"
            className="border border-slate-400 hover:border-emerald-400 hover:text-emerald-400 px-6 py-3 rounded-lg transition-colors"
          >
            Conhecer serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
