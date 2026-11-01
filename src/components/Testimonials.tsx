import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="depoimentos" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Depoimentos" title="Quem confia, recomenda." />
          {showAllLink && (
            <Link
              href="/depoimentos"
              className="inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3 hover:text-signal"
            >
              Ver todos os depoimentos
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl border border-line bg-white p-7 sm:p-8"
            >
              <Quote className="size-8 fill-signal text-signal" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3.5 border-t border-line pt-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy font-mono text-sm font-medium text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-body">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
