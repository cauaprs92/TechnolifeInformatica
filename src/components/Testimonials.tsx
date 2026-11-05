import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { type Testimonial, clients, testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

/** Logo da empresa (quando existe na lista de clientes) ou as iniciais da pessoa. */
export function CompanyMark({ testimonial, size = "md" }: { testimonial: Testimonial; size?: "md" | "lg" }) {
  const client = clients.find((c) => c.name === testimonial.client);
  const box = size === "lg" ? "h-20 w-32" : "h-12 w-20";

  if (client) {
    return (
      <span className={`grid shrink-0 place-items-center rounded-2xl bg-white p-2 ring-1 ring-line ${box}`}>
        <Image
          src={`/images/clientes/${client.file}`}
          alt={client.name}
          width={client.width}
          height={client.height}
          className="max-h-full w-auto max-w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={`grid shrink-0 place-items-center rounded-2xl bg-navy font-mono font-medium text-white ${box} ${
        size === "lg" ? "text-xl" : "text-sm"
      }`}
    >
      {initials(testimonial.name)}
    </span>
  );
}

export default function Testimonials({ showAllLink = true }: { showAllLink?: boolean }) {
  const featured = testimonials.filter((t) => t.featured).slice(0, 3);

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
              Ler todos os depoimentos
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl border border-line bg-white p-7 sm:p-8"
            >
              <Quote className="size-8 fill-signal text-signal" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                <p>{t.highlight}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <CompanyMark testimonial={t} />
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm leading-snug text-body">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
