import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nossos Serviços</h2>
        <p className="text-slate-500 mt-2">Soluções completas em tecnologia da informação</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-5">{service.description}</p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
