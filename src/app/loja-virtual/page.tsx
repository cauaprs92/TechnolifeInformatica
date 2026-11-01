import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/icons";
import { shopCategories } from "@/lib/data";
import { whatsappLink } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Loja Virtual",
  description: "Produtos de informática, periféricos e acessórios com a confiança Technolife.",
};

export default function LojaVirtualPage() {
  return (
    <>
      <PageHeader
        crumb="Loja Virtual"
        title="Produtos de informática com a confiança Technolife."
        subtitle="Periféricos, componentes e acessórios. Consulte disponibilidade e preços direto com a nossa equipe."
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading eyebrow="Categorias" title="O que você procura?" className="lg:col-span-7" />
            <p className="text-lg leading-relaxed text-body lg:col-span-5">
              Escolha uma categoria e fale com a gente. Indicamos a opção certa para o seu uso e
              confirmamos o que temos em estoque.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shopCategories.map((category) => (
              <li key={category.title} className="reveal">
                <a
                  href={whatsappLink(
                    `Olá, Technolife! Gostaria de consultar produtos da categoria "${category.title}".`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_28px_60px_-32px_rgb(43_46_121/0.45)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-paper text-navy transition group-hover:bg-ink group-hover:text-white">
                      <category.icon className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-body/50 transition group-hover:text-signal" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-ink">{category.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-body">{category.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-signal">
                    <WhatsAppIcon className="size-4 text-whatsapp" />
                    Consultar no WhatsApp
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-5 rounded-3xl bg-ink p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <MessageCircle className="mt-1 size-6 shrink-0 text-signal-light" />
              <div>
                <p className="font-display text-2xl font-bold [font-variation-settings:'wdth'_85]">
                  Não encontrou o que precisa?
                </p>
                <p className="mt-1 text-white/70">
                  Conte para a gente o que você procura e indicamos a melhor opção.
                </p>
              </div>
            </div>
            <a
              href={whatsappLink("Olá, Technolife! Estou procurando um produto e gostaria de uma indicação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shrink-0"
            >
              <WhatsAppIcon className="size-5" />
              Pedir indicação
            </a>
          </div>
        </div>
      </section>

      <CtaBand showShop={false} />
    </>
  );
}
