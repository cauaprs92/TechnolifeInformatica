import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <h3>Technolife Informática</h3>
          <p>
            Suporte técnico para produzir, transmitir e proteger as informações com agilidade e
            confiança.
          </p>
          <div className="socials">
            <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li>{siteInfo.email}</li>
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.address}</li>
          </ul>
        </div>

        <div>
          <h4>Horário de atendimento</h4>
          <ul>
            {siteInfo.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Technolife Informática. Todos os direitos reservados.
      </div>
    </footer>
  );
}
