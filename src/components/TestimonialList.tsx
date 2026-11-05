import { ChevronDown, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { CompanyMark } from "./Testimonials";

/** Todos os depoimentos: trecho em destaque sempre visível e o texto completo ao abrir. */
export default function TestimonialList() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell grid gap-5">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="reveal grid gap-8 rounded-panel border border-line bg-white p-7 sm:p-10 lg:grid-cols-12 lg:gap-12"
          >
            <header className="flex items-center gap-5 lg:col-span-4 lg:flex-col lg:items-start">
              <CompanyMark testimonial={t} size="lg" />
              <div>
                <p className="text-xl font-bold text-ink">{t.name}</p>
                <p className="mt-1 leading-snug text-body">{t.role}</p>
                <p className="leading-snug font-medium text-navy">{t.company}</p>
                {t.since && (
                  <span className="eyebrow mt-4 rounded-full bg-paper px-3 py-1.5 text-[0.65rem] text-signal">
                    {t.since}
                  </span>
                )}
              </div>
            </header>

            <div className="lg:col-span-8">
              <Quote className="size-9 fill-signal text-signal" />
              <blockquote className="mt-5 font-display text-2xl leading-snug font-semibold text-ink [font-variation-settings:'wdth'_88] sm:text-3xl">
                <p>{t.highlight}</p>
              </blockquote>

              <details className="group mt-8 border-t border-line pt-6">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-semibold text-navy transition hover:text-signal [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">Ler depoimento completo</span>
                  <span className="hidden group-open:inline">Fechar depoimento</span>
                  <ChevronDown className="size-4 transition group-open:rotate-180" />
                </summary>
                <div className="mt-5 grid gap-4 text-lg leading-relaxed text-body">
                  {t.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
