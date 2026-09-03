import PageHeader from "@/components/PageHeader";

const placeholderProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  price: (99 + i * 37.9).toFixed(2),
}));

export default function LojaVirtualPage() {
  return (
    <>
      <PageHeader
        title="Loja Virtual"
        subtitle="Produtos de informática, periféricos e acessórios"
      />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {placeholderProducts.map((p) => (
            <div
              key={p.id}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                Imagem
              </div>
              <div className="p-4">
                <h3 className="font-medium text-slate-800">{p.name}</h3>
                <p className="text-emerald-700 font-bold mt-1">
                  R$ {p.price.replace(".", ",")}
                </p>
                <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
