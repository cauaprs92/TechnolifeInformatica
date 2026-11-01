import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Microscope, Wifi } from "lucide-react";
import tecnico from "@/assets/tecnico-laboratorio.jpg";
import { whatsappLink } from "@/lib/nav";
import OpenStatus from "./OpenStatus";
import { SignalArcs, WhatsAppIcon } from "./icons";

const facts = ["Atendimento presencial e remoto", "Laboratório próprio", "Empresas e residências"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-48 -right-40 -z-10 size-[44rem] rounded-full bg-navy/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-72 -left-48 -z-10 size-[34rem] rounded-full bg-signal/25 blur-3xl"
      />
      <SignalArcs
        className="pointer-events-none absolute -bottom-28 -left-28 -z-10 size-[32rem] text-white/[0.05]"
        strokeWidth={34}
      />

      <div className="shell grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <div className="rise">
            <OpenStatus tone="dark" />
          </div>

          <h1 className="rise mt-7 text-[clamp(2.75rem,6.4vw,5.4rem)] leading-[0.94] font-extrabold [--d:80ms]">
            Produzir, transmitir e <span className="text-signal-light">proteger</span> suas
            informações.
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/70 [--d:160ms]">
            Suporte técnico com agilidade e confiança para a sua empresa e para a sua casa.
            Cuidamos de computadores, redes, servidores e backup, no local, à distância ou no
            nosso laboratório.
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3 [--d:240ms]">
            <a
              href={whatsappLink("Olá, Technolife! Preciso de suporte técnico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon className="size-5" />
              Chamar no WhatsApp
            </a>
            <Link href="/servicos" className="btn btn-outline-light">
              Ver serviços
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="rise mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 [--d:320ms]">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2.5 text-sm text-white/75">
                <Check className="mt-0.5 size-4 shrink-0 text-signal-light" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise relative lg:col-span-5 [--d:200ms]">
          {/* Arcos saindo do canto da foto, como o sinal do logo */}
          <SignalArcs
            className="pointer-events-none absolute -top-30 -right-30 -z-10 hidden size-40 text-signal lg:block"
            strokeWidth={26}
          />
          <div className="relative overflow-hidden rounded-panel shadow-2xl ring-1 shadow-black/40 ring-white/15">
            <Image
              src={tecnico}
              alt="Técnico da Technolife trabalhando na bancada do laboratório"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium ring-1 ring-white/15 backdrop-blur">
              <Wifi className="size-3.5 text-signal-light" />
              Suporte remoto
            </span>
          </div>

          <div className="mt-4 flex items-start gap-3.5 rounded-2xl bg-white p-4 text-ink shadow-xl shadow-black/30 lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 lg:max-w-[19rem]">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-signal text-white">
              <Microscope className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Laboratório próprio</p>
              <p className="mt-0.5 text-sm leading-snug text-body">
                Diagnóstico e reparo de hardware feitos pela nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
