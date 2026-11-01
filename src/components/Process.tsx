import { steps } from "@/lib/data";
import { SignalArcs } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28">
      <SignalArcs
        className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[30rem] rotate-180 text-white/[0.04]"
        strokeWidth={32}
      />
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro contato ao equipamento funcionando."
            tone="dark"
            className="lg:col-span-7"
          />
          <p className="text-lg leading-relaxed text-white/65 lg:col-span-5">
            Um caminho simples, com você sabendo o que está sendo feito em cada etapa.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-panel bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="reveal flex flex-col bg-ink p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-signal-light tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="size-5 text-white/40" />
              </div>
              <h3 className="mt-10 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
