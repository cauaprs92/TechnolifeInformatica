import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/nav";
import { type Product, categoryOf, discountPercent, formatBRL, productMessage } from "@/lib/shop";
import { WhatsAppIcon } from "../icons";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  Oferta: "bg-signal text-white",
  "Mais vendido": "bg-ink text-white",
};

const conditionStyles: Record<NonNullable<Product["condition"]>, string> = {
  Novo: "bg-navy text-white",
  Seminovo: "bg-white text-ink ring-1 ring-line",
};

const stockInfo: Record<NonNullable<Product["stock"]>, { label: string; dot: string }> = {
  disponivel: { label: "Em estoque", dot: "bg-whatsapp" },
  ultimas: { label: "Últimas unidades", dot: "bg-signal" },
  encomenda: { label: "Sob encomenda", dot: "bg-body/50" },
};

/**
 * Foto do produto, com a segunda foto aparecendo ao passar o mouse.
 * Sem foto, mostra um espaço reservado com o ícone da categoria.
 * As fotos são verticais e o produto fica na parte de baixo, por isso o recorte desce um pouco.
 */
export function ProductImage({
  product,
  sizes,
  priority = false,
}: {
  product: Product;
  sizes: string;
  priority?: boolean;
}) {
  const [first, second] = product.images ?? [];

  if (first) {
    const photo = "object-cover object-[50%_80%] transition duration-500";
    return (
      <>
        <Image
          src={`/images/loja/${first}`}
          alt={product.name}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className={`${photo} group-hover:scale-105`}
        />
        {second && (
          <Image
            src={`/images/loja/${second}`}
            alt=""
            fill
            sizes={sizes}
            className={`${photo} opacity-0 group-hover:scale-105 group-hover:opacity-100`}
          />
        )}
      </>
    );
  }

  const Icon: LucideIcon = categoryOf(product.category).icon;
  return (
    <div className="absolute inset-0 grid place-items-center bg-paper">
      <div className="flex flex-col items-center gap-3 text-navy/25">
        <Icon className="size-14" strokeWidth={1.25} />
        <span className="eyebrow text-[0.65rem] text-body/60">Foto em breve</span>
      </div>
    </div>
  );
}

export function PriceBlock({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const big = size === "lg" ? "text-4xl sm:text-5xl" : "text-3xl";

  if (!product.price) {
    return (
      <div>
        <p className={`font-display font-extrabold text-ink [font-variation-settings:'wdth'_80] ${size === "lg" ? "text-3xl" : "text-2xl"}`}>
          Consulte o preço
        </p>
        <p className="mt-1 text-sm text-body">Resposta rápida pelo WhatsApp</p>
      </div>
    );
  }

  return (
    <div>
      {(product.oldPrice ?? 0) > product.price && (
        <p className="text-sm text-body">
          De <s>{formatBRL(product.oldPrice!)}</s>
        </p>
      )}
      <p className={`font-display leading-none font-extrabold text-ink [font-variation-settings:'wdth'_80] ${big}`}>
        {formatBRL(product.price)}
      </p>
      {(product.installments ?? 0) > 1 && (
        <p className="mt-1.5 text-sm text-body">
          ou <strong className="font-semibold text-ink">{product.installments}x</strong> de{" "}
          {formatBRL(product.price / product.installments!)} sem juros
        </p>
      )}
    </div>
  );
}

export function StockStatus({ product, className = "" }: { product: Product; className?: string }) {
  if (!product.stock) return null;
  const info = stockInfo[product.stock];
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-medium text-body ${className}`}>
      <span className={`size-2 rounded-full ${info.dot}`} />
      {info.label}
    </span>
  );
}

export function ProductBadges({ product }: { product: Product }) {
  const discount = discountPercent(product);
  if (!product.condition && !product.badge && !discount) return null;
  return (
    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
      {product.condition && (
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${conditionStyles[product.condition]}`}>
          {product.condition}
        </span>
      )}
      {product.badge && (
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}>
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="rounded-full bg-white px-2.5 py-1 font-mono text-xs font-medium text-signal ring-1 ring-signal/30">
          -{discount}%
        </span>
      )}
    </div>
  );
}

export function SpecList({ product, tone = "light" }: { product: Product; tone?: "light" | "card" }) {
  if (!product.specs?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Configuração">
      {product.specs.map((spec) => (
        <li
          key={spec}
          className={`rounded-lg px-2.5 py-1 text-xs font-medium text-ink ${
            tone === "card" ? "bg-paper" : "bg-paper ring-1 ring-line"
          }`}
        >
          {spec}
        </li>
      ))}
    </ul>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_28px_60px_-32px_rgb(43_46_121/0.45)]">
      <div className="relative aspect-square overflow-hidden border-b border-line bg-paper">
        <ProductBadges product={product} />
        <ProductImage product={product} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-[0.68rem] text-navy/70">{categoryOf(product.category).title}</span>
          <StockStatus product={product} />
        </div>
        <h3 className="mt-3 text-xl leading-snug font-bold text-ink">{product.name}</h3>
        <div className="mt-3">
          <SpecList product={product} tone="card" />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-body">{product.description}</p>

        <div className="mt-auto pt-6">
          <PriceBlock product={product} />
          <a
            href={whatsappLink(productMessage(product))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-5 w-full"
          >
            <WhatsAppIcon className="size-5" />
            {product.price ? "Comprar pelo WhatsApp" : "Consultar preço"}
          </a>
        </div>
      </div>
    </article>
  );
}
