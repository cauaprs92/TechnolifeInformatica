import Link from "next/link";
import { ArrowRight, Phone, ShoppingBag } from "lucide-react";
import { siteInfo, whatsappLink } from "@/lib/nav";
import OpenStatus from "./OpenStatus";
import { SignalArcs, SignalMark, WhatsAppIcon } from "./icons";

export default function CtaBand({ showShop = true }: { showShop?: boolean }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={`shell grid gap-5 ${showShop ? "lg:grid-cols-5" : ""}`}>
        <div
          className={`relative isolate overflow-hidden rounded-panel bg-ink p-8 text-white sm:p-12 ${
            showShop ? "lg:col-span-3" : ""
          }`}
        >
          <SignalArcs
            className="pointer-events-none absolute -right-16 -bottom-16 -z-10 size-80 -scale-x-100 text-signal/30"
            strokeWidth={30}
          />
          <span className="eyebrow text-signal-light">
            <SignalMark className="size-3.5" />
            Atendimento
          </span>
          <h2 className="mt-4 max-w-lg text-4xl leading-[1.02] font-bold sm:text-5xl">
            Precisa de suporte agora?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            Fale com a nossa equipe pelo WhatsApp ou por telefone e conte o que está acontecendo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Olá, Technolife! Preciso de suporte técnico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon className="size-5" />
              Chamar no WhatsApp
            </a>
            <a href={`tel:+${siteInfo.phoneDigits}`} className="btn btn-outline-light">
              <Phone className="size-4" />
              {siteInfo.phone}
            </a>
          </div>
          <OpenStatus tone="dark" className="mt-8" />
        </div>

        {showShop && (
          <Link
            href="/loja-virtual"
            className="group relative isolate flex flex-col overflow-hidden rounded-panel bg-signal p-8 text-white transition hover:bg-signal-dark sm:p-12 lg:col-span-2"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-white/15">
              <ShoppingBag className="size-6" />
            </span>
            <h2 className="mt-8 text-4xl leading-[1.02] font-bold sm:text-5xl">Loja Virtual</h2>
            <p className="mt-4 flex-1 leading-relaxed text-white/85">
              Produtos de informática, periféricos e acessórios com a qualidade e confiança
              Technolife.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold">
              Acessar a loja
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
