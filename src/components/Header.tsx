"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo, whatsappLink } from "@/lib/nav";
import { WhatsAppIcon } from "./icons";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="shell flex h-20 items-center lg:h-22 justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Technolife Informática, página inicial">
          <Image
            src="/technolife-logo.png"
            alt="Technolife Informática"
            width={243}
            height={129}
            loading="eager"
            className="h-13 w-auto lg:h-14"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${
                      active ? "text-ink" : "text-body hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-3.5 bottom-0.5 h-0.5 rounded-full bg-signal" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden !px-4 !py-2.5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Fale conosco
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink ring-1 ring-line transition hover:bg-paper lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Menu" className="shell py-5">
            <ul className="grid">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-line py-3.5 font-display text-2xl font-bold [font-variation-settings:'wdth'_85] ${
                        active ? "text-signal" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp {siteInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
