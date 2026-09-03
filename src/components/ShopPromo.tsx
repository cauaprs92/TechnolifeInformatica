import Link from "next/link";

export default function ShopPromo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-emerald-700 rounded-2xl px-8 py-14 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">Conheça nossa Loja Virtual</h2>
        <p className="mt-3 text-emerald-100 max-w-xl mx-auto">
          Produtos de informática, periféricos e acessórios com a qualidade e confiança
          Technolife.
        </p>
        <Link
          href="/loja-virtual"
          className="inline-block mt-6 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          Acessar loja virtual
        </Link>
      </div>
    </section>
  );
}
