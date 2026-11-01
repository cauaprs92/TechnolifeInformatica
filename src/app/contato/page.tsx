import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import OpenStatus from "@/components/OpenStatus";
import { WhatsAppIcon } from "@/components/icons";
import { mapsEmbedUrl, mapsLink, siteInfo, whatsappLink } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Technolife Informática por WhatsApp, telefone, e-mail ou visite nosso endereço.",
};

const cardClass = "flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition";

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        crumb="Contato"
        title="Como podemos ajudar?"
        subtitle="Estamos prontos para te atender pelo WhatsApp, por telefone, por e-mail ou pessoalmente."
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="shell grid gap-5 lg:grid-cols-12">
          <div className="grid content-start gap-4 lg:col-span-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-3xl bg-ink p-6 text-white transition hover:bg-ink-2"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-whatsapp">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="eyebrow text-white/50">WhatsApp</span>
                <span className="mt-1 block font-display text-2xl font-bold [font-variation-settings:'wdth'_85]">
                  {siteInfo.phone}
                </span>
                <span className="mt-1 block text-sm text-white/65">
                  O jeito mais rápido de falar com a gente.
                </span>
              </span>
            </a>

            <a href={`tel:+${siteInfo.phoneDigits}`} className={`${cardClass} hover:border-navy/30`}>
              <Phone className="mt-1 size-5 shrink-0 text-signal" />
              <span>
                <span className="eyebrow text-body">Telefone</span>
                <span className="mt-1 block font-semibold text-ink">{siteInfo.phone}</span>
              </span>
            </a>

            <a href={`mailto:${siteInfo.email}`} className={`${cardClass} hover:border-navy/30`}>
              <Mail className="mt-1 size-5 shrink-0 text-signal" />
              <span className="min-w-0">
                <span className="eyebrow text-body">E-mail</span>
                <span className="mt-1 block font-semibold break-all text-ink">{siteInfo.email}</span>
              </span>
            </a>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClass} hover:border-navy/30`}
            >
              <MapPin className="mt-1 size-5 shrink-0 text-signal" />
              <span>
                <span className="eyebrow text-body">Endereço</span>
                <span className="mt-1 block font-semibold text-ink">{siteInfo.address}</span>
                <span className="block text-sm text-body">{siteInfo.city}</span>
              </span>
            </a>

            <div className={cardClass}>
              <Clock className="mt-1 size-5 shrink-0 text-signal" />
              <span>
                <span className="eyebrow text-body">Horário de atendimento</span>
                {siteInfo.hours.map((h) => (
                  <span key={h} className="mt-1 block font-semibold text-ink">
                    {h}
                  </span>
                ))}
                <OpenStatus className="mt-4" />
              </span>
            </div>
          </div>

          <div className="rounded-panel border border-line bg-white p-7 sm:p-10 lg:col-span-7">
            <h2 className="text-4xl leading-[1.02] font-bold text-ink sm:text-5xl">
              Envie uma mensagem
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-body">
              Preencha os campos e a sua mensagem chega direto no nosso WhatsApp.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="shell mt-5">
          <div className="overflow-hidden rounded-panel border border-line bg-white">
            <iframe
              title="Mapa com a localização da Technolife Informática"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full sm:h-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}
