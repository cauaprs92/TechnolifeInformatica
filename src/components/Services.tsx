import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="section-wrap">
      <div className="section-heading">
        <h2>Nossos Serviços</h2>
        <p>Soluções completas em tecnologia da informação</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card"
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
