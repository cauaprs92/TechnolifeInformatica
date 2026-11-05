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

const facts = [
  { label: "Fundação", value: String(FOUNDED) },
  // Calculado no build, para não ficar desatualizado
  { label: "Anos de experiência", value: `+${new Date().getFullYear() - FOUNDED - 1}` },
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
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <SectionHeading
              eyebrow="Nossa história"
              title="Desde 2002 cuidando da TI de empresas e pessoas."
            />
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-white p-5 sm:p-6">
                  <dt className="eyebrow text-[0.68rem] text-body">{fact.label}</dt>
                  <dd className="mt-2 font-display text-4xl font-extrabold text-ink [font-variation-settings:'wdth'_80]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

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

            <article className="relative isolate mt-4 overflow-hidden rounded-panel bg-ink p-8 text-white sm:p-10">
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
              <ul className="mt-6 grid gap-3 text-base">
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
                className="btn btn-primary mt-8"
              >
                <WhatsAppIcon className="size-5" />
                Solicitar proposta
              </a>
            </article>
          </div>
        </div>

        <ul className="shell mt-16 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="reveal rounded-3xl border border-line p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-white">
                <value.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-3xl font-extrabold text-ink">{value.title}</h3>
              <p className="mt-2 leading-relaxed text-body">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-line">
        <TeamLab showLink={false} />
      </div>
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
