import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, Check, ChevronDown, Flame, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SignalArcs, WhatsAppIcon } from "@/components/icons";
import ProductCatalog from "@/components/shop/ProductCatalog";
import {
  PriceBlock,
  ProductBadges,
  ProductImage,
  ReadyStrip,
  SpecList,
  StockStatus,
} from "@/components/shop/ProductCard";
import { whatsappLink } from "@/lib/nav";
import {
  buySteps,
  categoryOf,
  productMessage,
  products,
  shopFaq,
  shopPerks,
  shopReasons,
} from "@/lib/shop";

export const metadata: Metadata = {
  title: "Loja Virtual",
  description:
    "Notebooks, computadores, periféricos e acessórios com garantia, parcelamento e suporte técnico Technolife.",
};

const heroFacts = [
  "Windows 11 Pro + Office ativados",
  "Nota fiscal e garantia",
  "Parcelamento no cartão",
  "Suporte após a compra",
];

export default function LojaVirtualPage() {
  const featured = products.find((p) => p.featured);

  return (
    <>
      {/* 1. Topo: proposta de valor + oferta em destaque */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="absolute -top-56 -right-32 -z-10 size-[40rem] rounded-full bg-navy/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-72 -left-48 -z-10 size-[34rem] rounded-full bg-signal/25 blur-3xl"
        />

        <div
          className={`shell grid items-center gap-12 py-16 sm:py-20 lg:gap-10 lg:py-24 ${
            featured ? "lg:grid-cols-12" : ""
          }`}
        >
          <div className={featured ? "lg:col-span-7" : "max-w-3xl"}>
            <nav aria-label="Você está em" className="rise eyebrow text-white/50">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-signal-light">Loja Virtual</span>
            </nav>

            <h1 className="rise mt-5 text-[clamp(2.6rem,5.8vw,4.9rem)] leading-[0.95] font-extrabold [--d:80ms]">
              Tecnologia com <span className="text-signal-light">preço justo</span> e suporte de
              quem entende.
            </h1>
            <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/70 [--d:160ms]">
              Notebooks, computadores, periféricos e acessórios com garantia. Você compra pelo
              WhatsApp e sai com tudo configurado para usar.
            </p>

            <div className="rise mt-9 flex flex-wrap gap-3 [--d:240ms]">
              <a href="#produtos" className="btn btn-primary">
                Ver produtos
                <ArrowDown className="size-4" />
              </a>
              <a
                href={whatsappLink("Olá, Technolife! Gostaria de ajuda para escolher um produto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <WhatsAppIcon className="size-5" />
                Falar com um vendedor
              </a>
            </div>

            <ul className="rise mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7 [--d:320ms]">
              {heroFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2 text-sm text-white/75">
                  <Check className="size-4 shrink-0 text-signal-light" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {featured && (
            <div className="rise relative lg:col-span-5 [--d:200ms]">
              <SignalArcs
                className="pointer-events-none absolute -top-24 -right-24 -z-10 hidden size-40 text-signal lg:block"
                strokeWidth={26}
              />
              <article className="group overflow-hidden rounded-panel bg-white text-ink shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between gap-3 bg-signal px-5 py-3 text-white">
                  <span className="eyebrow text-white">
                    <Flame className="size-4" />
                    Em destaque
                  </span>
                  <StockStatus
                    product={featured}
                    className="text-white/90 [&>span]:ring-2 [&>span]:ring-white/60"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden border-b border-line bg-paper sm:aspect-[6/5]">
                  <ProductBadges product={featured} />
                  <ProductImage product={featured} sizes="(min-width: 1024px) 40vw, 100vw" priority />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="eyebrow text-[0.68rem] text-navy/70">
                    {categoryOf(featured.category).title}
                  </span>
                  <h2 className="mt-2 font-display text-2xl leading-tight font-bold [font-variation-settings:'wdth'_88]">
                    {featured.name}
                  </h2>
                  <div className="mt-3">
                    <SpecList product={featured} />
                  </div>
                  {featured.readyToUse && (
                    <div className="mt-4">
                      <ReadyStrip product={featured} />
                    </div>
                  )}
                  <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <PriceBlock product={featured} size="lg" />
                    <a
                      href={whatsappLink(productMessage(featured))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary shrink-0"
                    >
                      <WhatsAppIcon className="size-5" />
                      Quero este
                    </a>
                  </div>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* 2. Vantagens: tira as dúvidas de pagamento e garantia logo de cara */}
      <section aria-label="Vantagens de comprar na Technolife" className="border-b border-line bg-white">
        <div className="shell">
          <ul className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {shopPerks.map((perk) => (
              <li key={perk.title} className="flex flex-col gap-3 bg-white py-6 pr-3 sm:flex-row sm:items-start sm:gap-3.5 sm:py-7 [&:nth-child(even)]:pl-4 sm:[&:nth-child(even)]:pl-6 lg:pl-6 lg:first:pl-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-paper text-navy">
                  <perk.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{perk.title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-body">{perk.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Catálogo com filtro por categoria */}
      <section id="produtos" className="scroll-mt-20 bg-paper lg:scroll-mt-24 xl:scroll-mt-28 py-20 lg:py-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading eyebrow="Produtos" title="Escolha o seu." className="lg:col-span-7" />
            <p className="text-lg leading-relaxed text-body lg:col-span-5">
              Preços e estoque confirmados na hora pelo WhatsApp. Não achou? Trabalhamos com
              encomenda.
            </p>
          </div>

          <ProductCatalog />
        </div>
      </section>

      {/* 4. Por que comprar aqui: o diferencial de quem também faz a assistência */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <SectionHeading
            eyebrow="Por que comprar aqui"
            title="Você não compra só o produto. Leva o suporte junto."
            className="lg:col-span-5"
          />
          <ol className="grid gap-px overflow-hidden rounded-panel border border-line bg-line lg:col-span-7">
            {shopReasons.map((reason, index) => (
              <li
                key={reason.title}
                className={`reveal flex gap-5 p-6 sm:p-8 ${reason.highlight ? "bg-ink text-white" : "bg-white"}`}
              >
                <span
                  className={`font-mono text-sm font-medium ${reason.highlight ? "text-signal-light" : "text-signal"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`text-2xl font-bold ${reason.highlight ? "text-white" : "text-ink"}`}>
                    {reason.title}
                  </h3>
                  <p className={`mt-2 leading-relaxed ${reason.highlight ? "text-white/75" : "text-body"}`}>
                    {reason.text}
                  </p>
                  {reason.highlight && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {reason.highlight.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold ring-1 ring-white/15"
                        >
                          <Check className="size-4 text-signal-light" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Como comprar: deixa claro que a compra é simples */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-24">
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
        <div className="shell">
          <SectionHeading tone="dark" eyebrow="Como comprar" title="Simples, em três passos." />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-panel bg-white/10 md:grid-cols-3">
            {buySteps.map((step, index) => (
              <li key={step.title} className="bg-ink-2 p-7 sm:p-8">
                <span className="grid size-11 place-items-center rounded-full bg-signal font-mono text-sm font-medium">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Perguntas frequentes: responde objeções antes da compra */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-body">
              Ficou alguma dúvida? Nossa equipe responde pelo WhatsApp.
            </p>
          </div>
          <div className="divide-y divide-line overflow-hidden rounded-panel border border-line bg-white lg:col-span-7">
            {shopFaq.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-lg font-semibold text-ink transition hover:text-navy sm:px-8 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown className="size-5 shrink-0 text-body transition group-open:rotate-180 group-open:text-signal" />
                </summary>
                <p className="-mt-2 px-6 pb-6 leading-relaxed text-body sm:px-8">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Fechamento: quem não achou o produto ainda tem para onde ir */}
      <section className="bg-white py-20 lg:py-24">
        <div className="shell">
          <div className="relative isolate flex flex-col gap-8 overflow-hidden rounded-panel bg-signal p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <SignalArcs
              className="pointer-events-none absolute -right-16 -bottom-16 -z-10 size-80 -scale-x-100 text-white/15"
              strokeWidth={30}
            />
            <div className="max-w-xl">
              <MessageCircle className="size-8" />
              <h2 className="mt-5 text-4xl leading-[1.02] font-bold sm:text-5xl">
                Não encontrou o que procura?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Conte como você vai usar e indicamos a melhor opção, com o que temos em estoque ou
                por encomenda.
              </p>
            </div>
            <a
              href={whatsappLink("Olá, Technolife! Estou procurando um produto e gostaria de uma indicação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light shrink-0 self-start lg:self-center"
            >
              <WhatsAppIcon className="size-5 text-whatsapp" />
              Pedir indicação
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
