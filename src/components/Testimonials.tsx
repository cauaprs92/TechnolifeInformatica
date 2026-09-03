import Link from "next/link";
import { testimonials } from "@/lib/data";

export default function Testimonials({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="depoimentos" className="band">
      <div className="section-wrap">
        <div className="section-heading">
          <h2>Depoimentos</h2>
          <p>O que nossos clientes dizem sobre nós</p>
        </div>

        <div className="quote-grid">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="quote-card"
            >
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
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
