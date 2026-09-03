import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="clientes" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nossos Clientes</h2>
        <p className="text-slate-500 mt-2">Empresas que confiam na Technolife</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="h-20 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-medium"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
