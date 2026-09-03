import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Technolife Informática</h3>
          <p className="text-sm text-slate-400">
            Suporte técnico para produzir, transmitir e proteger as informações com agilidade e
            confiança.
          </p>
          <div className="flex gap-3 mt-4 text-sm">
            <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              Instagram
            </a>
            <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{siteInfo.email}</li>
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Horário de atendimento</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {siteInfo.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Technolife Informática. Todos os direitos reservados.
      </div>
    </footer>
  );
}
