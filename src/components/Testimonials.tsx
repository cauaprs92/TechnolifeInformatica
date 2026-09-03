import Link from "next/link";
import { testimonials } from "@/lib/data";

export default function Testimonials({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="depoimentos" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Depoimentos</h2>
          <p className="text-slate-500 mt-2">O que nossos clientes dizem sobre nós</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              <p className="text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        {showAllLink && (
          <div className="text-center mt-10">
            <Link href="/depoimentos" className="text-emerald-700 font-semibold hover:underline">
              Ver todos os depoimentos →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
