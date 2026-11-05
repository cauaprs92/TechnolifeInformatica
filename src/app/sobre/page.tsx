import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TeamLab from "@/components/TeamLab";
import ClientMarquee from "@/components/ClientMarquee";
import CtaBand from "@/components/CtaBand";
import { Check } from "lucide-react";
import { SignalArcs, SignalMark, WhatsAppIcon } from "@/components/icons";
import { values } from "@/lib/data";
import { whatsappLink } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: "Conheça a história, a equipe e o laboratório da Technolife Informática.",
};

const FOUNDED = 2002;

const facts: { value: string; unit?: string; label: string }[] = [
  { value: String(FOUNDED), label: "Ano de fundação, em janeiro. Mais de duas décadas no mercado de TI." },
  // Calculado no build, para não ficar desatualizado
  {
    value: `+${new Date().getFullYear() - FOUNDED - 1}`,
    unit: "anos",
    label: "de experiência em assistência técnica para empresas e residências.",
  },
];

const contractItems = [
  "Horas de deslocamento e de atendimento cobertas",
  "Atendimento presencial, remoto e por telefone",
  "Profissionais graduados e experientes",
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        crumb="Sobre nós"
        title="Tecnologia funcionando, com gente perto de você."
        subtitle="Conheça a história e a equipe da Technolife."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            eyebrow="Nossa história"
            title="Desde 2002 cuidando da TI de empresas e pessoas."
            className="lg:col-span-5"
          />

          <div className="grid gap-5 text-lg leading-relaxed text-body lg:col-span-7">
            <p>
              Fundada em janeiro de 2002, a Technolife Informática nasceu com a vocação de prestar
              serviços e vender produtos de TI. Com a experiência, veio também um compromisso: levar
              às empresas soluções realmente eficientes, com valor justo.
            </p>
            <p>
              Somos especializados na venda de produtos de TI, em projetos, instalação e
              administração de redes de computadores, e na manutenção física e lógica de estações
              de trabalho e servidores. Nosso laboratório está preparado para receber o seu
              equipamento, e o time comercial acompanha as tecnologias mais recentes para oferecer
              uma consultoria de qualidade.
            </p>
          </div>
        </div>

        {/* Dois cards lado a lado, com a mesma altura */}
        <div className="shell mt-14 grid gap-5 lg:grid-cols-12">
          <div className="reveal relative isolate flex flex-col overflow-hidden rounded-panel bg-signal p-8 text-white sm:p-10 lg:col-span-5">
            <SignalArcs
              className="pointer-events-none absolute -top-20 -right-20 -z-10 size-72 rotate-180 text-white/10"
              strokeWidth={30}
            />
            <span className="eyebrow text-white/80">
              <SignalMark className="size-3.5" />
              Nossa trajetória
            </span>
            <dl className="mt-8 flex flex-1 flex-col justify-center divide-y divide-white/20">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse py-6 first:pt-0 last:pb-0">
                  <dt className="mt-3 max-w-xs leading-snug text-white/85">{fact.label}</dt>
                  <dd className="font-display text-7xl leading-none font-extrabold [font-variation-settings:'wdth'_78] sm:text-8xl">
                    {fact.value}
                    {fact.unit && <span className="ml-2 text-3xl sm:text-4xl">{fact.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <article className="reveal relative isolate flex flex-col overflow-hidden rounded-panel bg-ink p-8 text-white sm:p-10 lg:col-span-7">
            <SignalArcs
              className="pointer-events-none absolute -right-16 -bottom-16 -z-10 size-72 -scale-x-100 text-white/[0.06]"
              strokeWidth={30}
            />
            <span className="eyebrow text-signal-light">
              <SignalMark className="size-3.5" />
              Contrato de manutenção
            </span>
            <h3 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              Valor mensal fixo, sem surpresa na conta.
            </h3>
            <p className="mt-4 text-white/70">
              Um contrato personalizado para a sua empresa aproveitar ao máximo os equipamentos
              que já tem, com competência comprovada por clientes atendidos ao longo dos anos.
            </p>
            <ul className="mt-6 mb-8 grid gap-3 text-base">
              {contractItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-signal-light" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(
                "Olá, Technolife! Gostaria de uma proposta de contrato de manutenção para minha empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-auto self-start"
            >
              <WhatsAppIcon className="size-5" />
              Solicitar proposta
            </a>
          </article>
        </div>

        {/* Compromissos: promessa + como ela aparece na prática */}
        <div className="shell mt-24 lg:mt-32">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              eyebrow="Como trabalhamos"
              title="Três compromissos com cada cliente."
              className="lg:col-span-7"
            />
            <p className="text-lg leading-relaxed text-body lg:col-span-5">
              Não são só palavras bonitas. É assim que cada atendimento acontece, da primeira
              mensagem ao equipamento funcionando.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-3">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="group reveal flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-ink text-white transition-colors duration-300 group-hover:bg-signal">
                    <value.icon className="size-6" />
                  </span>
                  <span className="font-mono text-sm font-medium text-body/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-4xl font-extrabold text-ink">{value.title}</h3>
                <p className="mt-3 text-xl leading-snug font-semibold text-ink">{value.promise}</p>
                <p className="mt-3 leading-relaxed text-body">{value.text}</p>

                <div className="mt-auto pt-8">
                  <p className="eyebrow border-t border-line pt-6 text-[0.68rem] text-signal">
                    Na prática
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {value.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="border-t border-line">
        <TeamLab showLink={false} />
      </div>
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
