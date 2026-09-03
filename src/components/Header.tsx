"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteInfo } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-top">
          <a
            href={`https://wa.me/${siteInfo.phoneDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            ◉ &nbsp;{siteInfo.phone}
          </a>
          <a href={`tel:+${siteInfo.phoneDigits}`} className="contact-link">
            ☎ &nbsp;{siteInfo.phone}
          </a>
          <div className="socials">
          <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            ◎
          </a>
          <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
            f
          </a>
          </div>
        </div>

        <div className="header-main">
        <Link href="/" className="brand">
          <img src="/technolife-logo.png" alt="Technolife Informática" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling; if (fallback instanceof HTMLElement) fallback.style.display = "block"; }} />
          <span className="brand-fallback">Technolife<span>Informática</span></span>
        </Link>

        <nav className="main-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link${link.href === "/" ? " active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-button"
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

      {open && (
        <nav className="main-nav" style={{ display: "flex", flexDirection: "column", alignItems: "stretch", padding: "15px 0" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`https://wa.me/${siteInfo.phoneDigits}`} className="contact-link">
            WhatsApp: {siteInfo.phone}
          </a>
        </nav>
      )}
      </div>
    </header>
  );
}
