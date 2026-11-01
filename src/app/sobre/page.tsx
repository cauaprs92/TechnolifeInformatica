import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TeamLab from "@/components/TeamLab";
import ClientMarquee from "@/components/ClientMarquee";
import CtaBand from "@/components/CtaBand";
import { SignalMark } from "@/components/icons";
import { values } from "@/lib/data";
import { siteInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: "Conheça a história, a equipe e o laboratório da Technolife Informática.",
};

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
          <SectionHeading
            eyebrow="Nossa história"
            title="Suporte técnico ágil e confiável desde o primeiro dia."
            className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start"
          />

          <div className="grid gap-5 text-lg leading-relaxed text-body lg:col-span-7">
            <p>
              A Technolife Informática nasceu com o propósito de oferecer suporte técnico ágil e
              confiável, ajudando empresas e pessoas a produzir, transmitir e proteger suas
              informações.
            </p>
            <p>
              Ao longo dos anos construímos uma base sólida de clientes que confiam em nosso
              trabalho, seja para manter a infraestrutura de TI de uma empresa funcionando, seja
              para resolver o problema do dia a dia de um computador ou notebook.
            </p>
            <figure className="mt-4 rounded-panel bg-paper p-8 sm:p-10">
              <SignalMark className="size-6 text-signal" />
              <blockquote className="mt-5 font-display text-2xl leading-snug font-semibold text-ink [font-variation-settings:'wdth'_88] sm:text-3xl">
                <p>{siteInfo.tagline}</p>
              </blockquote>
              <figcaption className="eyebrow mt-5 text-body">Nosso propósito</figcaption>
            </figure>
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
