import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { audiences, pillars } from "@/lib/data";
import { whatsappLink } from "@/lib/nav";
import SectionHeading from "./SectionHeading";

export default function ServicePillars() {
  return (
    <section id="servicos" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title="Do notebook de casa ao servidor da empresa."
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-body">
              Nosso trabalho se resume em três verbos: ajudar você a produzir, transmitir e
              proteger as suas informações.
            </p>
            <Link
              href="/servicos"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3 hover:text-signal"
            >
              Ver todos os serviços
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.verb}
              className="reveal group flex flex-col rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_28px_60px_-32px_rgb(43_46_121/0.45)] sm:p-8"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-signal">
                <pillar.icon className="size-6" />
              </span>
              <h3 className="mt-8 text-[2.6rem] leading-none font-extrabold text-ink">
                {pillar.verb}
              </h3>
              <p className="mt-4 leading-relaxed text-body">{pillar.text}</p>
              <ul className="mt-8 grid gap-3 border-t border-line pt-6">
                {pillar.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 font-medium text-ink">
                    <item.icon className="size-4.5 shrink-0 text-signal" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {audiences.map((audience) => (
            <a
              key={audience.id}
              href={whatsappLink(audience.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-center gap-5 rounded-3xl bg-ink p-6 text-white transition hover:bg-ink-2 sm:p-7"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/[0.08] ring-1 ring-white/10">
                <audience.icon className="size-6 text-signal-light" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-2xl font-bold [font-variation-settings:'wdth'_85]">
                  {audience.tag}
                </span>
                <span className="mt-1 block text-white/65">{audience.summary}</span>
              </span>
              <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-signal sm:grid">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
