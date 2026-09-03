import Link from "next/link";
import { services } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Suporte técnico para produzir, transmitir e proteger as informações com{" "}
          <strong>agilidade e confiança</strong>
        </h1>
        <div className="hero-cards">
          {services.map((service) => (
            <article className="hero-card" key={service.title}>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/servicos" className="button-primary">Saiba mais</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
