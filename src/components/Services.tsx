import { audiences } from "@/lib/data";
import { whatsappLink } from "@/lib/nav";
import { SignalArcs, SignalMark, WhatsAppIcon } from "./icons";

export default function Services() {
  return (
    <section id="servicos" className="bg-paper py-20 lg:py-28">
      <div className="shell grid gap-5 lg:grid-cols-2">
        {/* Público geral primeiro (card azul), empresas em seguida */}
        {[...audiences].reverse().map((audience, index) => {
          const dark = index === 0;
          return (
            <article
              key={audience.id}
              className={`reveal relative isolate flex flex-col overflow-hidden rounded-panel p-8 sm:p-10 lg:p-12 ${
                dark ? "bg-ink text-white" : "border border-line bg-white text-ink"
              }`}
            >
              {dark && (
                <SignalArcs
                  className="pointer-events-none absolute -top-16 -right-16 -z-10 size-72 rotate-180 text-white/[0.05]"
                  strokeWidth={30}
                />
              )}
              <div className="flex items-center justify-between gap-4">
                <span className={`eyebrow ${dark ? "text-signal-light" : "text-signal"}`}>
                  <SignalMark className="size-3.5" />
                  {audience.tag}
                </span>
                <span
                  className={`grid size-12 place-items-center rounded-2xl ${
                    dark ? "bg-white/[0.08] ring-1 ring-white/10" : "bg-paper"
                  }`}
                >
                  <audience.icon className={`size-6 ${dark ? "text-white" : "text-navy"}`} />
                </span>
              </div>

              <h2 className="mt-8 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
                {audience.title}
              </h2>
              <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-body"}`}>
                {audience.description}
              </p>

              <ul className="mt-10 grid flex-1 content-start gap-3 sm:grid-cols-2">
                {audience.items.map((item) => (
                  <li
                    key={item.label}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium ${
                      dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-paper"
                    }`}
                  >
                    <item.icon
                      className={`size-5 shrink-0 ${dark ? "text-signal-light" : "text-signal"}`}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(audience.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-10 self-start ${dark ? "btn-primary" : "btn-outline"}`}
              >
                <WhatsAppIcon className={`size-5 ${dark ? "" : "text-whatsapp"}`} />
                Solicitar atendimento
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
