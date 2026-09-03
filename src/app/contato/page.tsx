import PageHeader from "@/components/PageHeader";
import { siteInfo } from "@/lib/nav";

export default function ContatoPage() {
  return (
    <>
      <PageHeader title="Contato" subtitle="Estamos prontos para te ajudar" />
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4 text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900">E-mail</h3>
            <p>{siteInfo.email}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Telefone / WhatsApp</h3>
            <p>{siteInfo.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Endereço</h3>
            <p>{siteInfo.address}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Horário de atendimento</h3>
            {siteInfo.hours.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <textarea
            placeholder="Mensagem"
            rows={5}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Enviar mensagem
          </button>
        </form>
      </section>
    </>
  );
}
