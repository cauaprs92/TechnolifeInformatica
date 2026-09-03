import Link from "next/link";

export default function ShopPromo() {
  return (
    <section className="shop-promo">
      <div>
        <h2>Conheça nossa Loja Virtual</h2>
        <p>
          Produtos de informática, periféricos e acessórios com a qualidade e confiança
          Technolife.
        </p>
        <Link
          href="/loja-virtual"
          className="button-secondary"
        >
          Acessar loja virtual
        </Link>
      </div>
    </section>
  );
}
