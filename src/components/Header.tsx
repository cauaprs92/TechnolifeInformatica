"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteInfo } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between bg-slate-900 text-slate-200 text-sm px-6 py-1.5">
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${siteInfo.phoneDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            WhatsApp: {siteInfo.phone}
          </a>
          <a href={`tel:+${siteInfo.phoneDigits}`} className="hover:text-emerald-400 transition-colors">
            Ligar: {siteInfo.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-emerald-400">
            Instagram
          </a>
          <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-emerald-400">
            Facebook
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-emerald-700">
          Technolife<span className="text-slate-800"> Informática</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-700 hover:text-emerald-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-emerald-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`https://wa.me/${siteInfo.phoneDigits}`} className="text-emerald-700 font-semibold">
            WhatsApp: {siteInfo.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
