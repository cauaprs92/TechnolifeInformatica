"use client";

import { useState } from "react";
import { LayoutGrid, PackageSearch, type LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/nav";
import { type CategoryId, products, shopCategories } from "@/lib/shop";
import { WhatsAppIcon } from "../icons";
import ProductCard from "./ProductCard";

type Filter = CategoryId | "todos";

export default function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>("todos");

  const visible = filter === "todos" ? products : products.filter((p) => p.category === filter);
  const countOf = (id: CategoryId) => products.filter((p) => p.category === id).length;

  const tabs: { id: Filter; title: string; icon: LucideIcon; count: number }[] = [
    { id: "todos", title: "Todos", icon: LayoutGrid, count: products.length },
    ...shopCategories.map((c) => ({ id: c.id, title: c.title, icon: c.icon, count: countOf(c.id) })),
  ];

  return (
    <>
      {/* Filtro fixo abaixo do cabeçalho enquanto o cliente rola os produtos */}
      <div className="sticky top-18 z-30 -mx-5 mt-10 border-y border-line bg-paper/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div
          role="toolbar"
          aria-label="Filtrar por categoria"
          className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(tab.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-ink text-white"
                    : "bg-white text-body ring-1 ring-line hover:text-ink hover:ring-navy/40"
                }`}
              >
                <tab.icon className="size-4" />
                {tab.title}
                <span className={`font-mono text-xs ${active ? "text-white/60" : "text-body/60"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-sm text-body" aria-live="polite">
        {visible.length} {visible.length === 1 ? "produto encontrado" : "produtos encontrados"}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 flex flex-col items-center rounded-3xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <PackageSearch className="size-10 text-navy/40" strokeWidth={1.5} />
          <p className="mt-4 text-xl font-bold text-ink">Nenhum produto nesta categoria ainda.</p>
          <p className="mt-2 max-w-md text-body">
            Trabalhamos com encomenda. Diga o que você procura e enviamos as opções disponíveis.
          </p>
          <a
            href={whatsappLink(
              `Olá, Technolife! Estou procurando produtos da categoria "${
                shopCategories.find((c) => c.id === filter)?.title ?? ""
              }".`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6"
          >
            <WhatsAppIcon className="size-5" />
            Consultar no WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
