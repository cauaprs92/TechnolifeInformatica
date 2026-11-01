import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import { mapsLink, navLinks, siteInfo, whatsappLink } from "@/lib/nav";
import OpenStatus from "./OpenStatus";
import { FacebookIcon, InstagramIcon, SignalArcs, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <SignalArcs
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 size-[26rem] -scale-x-100 text-white/[0.04]"
        strokeWidth={30}
      />

      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Image
            src="/technolife-logo-light.png"
            alt="Technolife Informática"
            width={243}
            height={129}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-xs leading-relaxed text-white/65">{siteInfo.tagline}</p>
          <div className="mt-6 flex gap-2">
            <a
              href={siteInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-white hover:text-ink"
            >
              <InstagramIcon className="size-4.5" />
            </a>
            <a
              href={siteInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-white hover:text-ink"
            >
              <FacebookIcon className="size-4.5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-whatsapp hover:ring-whatsapp"
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-white/45">Navegação</h2>
          <ul className="mt-5 grid gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-white/45">Contato</h2>
          <ul className="mt-5 grid gap-4 text-white/75">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-signal-light" />
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-start gap-3 break-all transition hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-signal-light" />
                {siteInfo.email}
              </a>
            </li>
            <li>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-signal-light" />
                <span>
                  {siteInfo.address}
                  <br />
                  {siteInfo.city}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-white/45">Horário de atendimento</h2>
          <ul className="mt-5 grid gap-2.5 text-white/75">
            {siteInfo.hours.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-signal-light" />
                {h}
              </li>
            ))}
          </ul>
          <OpenStatus tone="dark" className="mt-6" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Technolife Informática. Todos os direitos reservados.</p>
          <p className="font-mono text-xs uppercase tracking-[0.14em]">Agilidade e confiança</p>
        </div>
      </div>
    </footer>
  );
}
