import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Microscope, MonitorSmartphone, ShieldCheck } from "lucide-react";
import recepcao from "@/assets/recepcao.jpg";
import tecnico from "@/assets/tecnico-laboratorio.jpg";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Microscope,
    title: "Laboratório equipado",
    text: "Diagnóstico e reparo de hardware com estrutura própria.",
  },
  {
    icon: MonitorSmartphone,
    title: "Presencial ou remoto",
    text: "Atendemos no local, na loja ou à distância.",
  },
  {
    icon: Building2,
    title: "Empresas e residências",
    text: "Do servidor da empresa ao notebook de casa.",
  },
  {
    icon: ShieldCheck,
    title: "Agilidade e confiança",
    text: "Resolvemos rápido e explicamos o que foi feito.",
  },
];

export default function TeamLab({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative pb-[22%] sm:pb-[18%]">
          <div className="relative w-[88%] overflow-hidden rounded-panel">
            <Image
              src={recepcao}
              alt="Recepção da Technolife Informática, com o logo da empresa na parede"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[52%] overflow-hidden rounded-3xl shadow-2xl ring-8 shadow-ink/25 ring-white">
            <Image
              src={tecnico}
              alt="Técnico da Technolife na bancada do laboratório"
              placeholder="blur"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Equipe e laboratório" title="Uma equipe próxima, com estrutura própria." />
          <p className="mt-6 text-lg leading-relaxed text-body">
            Contamos com uma equipe técnica qualificada e um laboratório equipado para diagnóstico
            e reparo de equipamentos, garantindo agilidade e qualidade em cada atendimento, seja
            presencial ou remoto.
          </p>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.title} className="bg-white p-5">
                <feature.icon className="size-5 text-signal" />
                <p className="mt-3 font-semibold text-ink">{feature.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-body">{feature.text}</p>
              </li>
            ))}
          </ul>

          {showLink && (
            <Link
              href="/sobre"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3 hover:text-signal"
            >
              Conheça a Technolife
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
