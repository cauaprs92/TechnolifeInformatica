import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="clientes" className="section-wrap">
      <div className="section-heading">
        <h2>Nossos Clientes</h2>
        <p>Empresas que confiam na Technolife</p>
      </div>

      <div className="client-grid">
        {clients.map((client) => (
          <div
            key={client}
            className="client-item"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
