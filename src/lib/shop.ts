import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CreditCard,
  Cpu,
  HardDrive,
  Headphones,
  Keyboard,
  Laptop,
  Router,
  Settings2,
  Store,
} from "lucide-react";

/*
  Dados da Loja Virtual.
  Para cadastrar um produto, adicione um item em `products`.
  Fotos: coloque o arquivo em /public/images/loja e informe os nomes em `images`.
*/

export type CategoryId =
  | "computadores"
  | "perifericos"
  | "componentes"
  | "redes"
  | "armazenamento"
  | "acessorios";

export const shopCategories: { id: CategoryId; title: string; icon: LucideIcon }[] = [
  { id: "computadores", title: "Computadores e notebooks", icon: Laptop },
  { id: "perifericos", title: "Periféricos", icon: Keyboard },
  { id: "componentes", title: "Componentes", icon: Cpu },
  { id: "redes", title: "Redes e Wi-Fi", icon: Router },
  { id: "armazenamento", title: "Armazenamento", icon: HardDrive },
  { id: "acessorios", title: "Acessórios", icon: Headphones },
];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  /** Configuração em itens curtos (processador, memória, armazenamento...). */
  specs?: string[];
  /** Frase curta com o principal benefício (aparece no card, até 2 linhas). */
  description: string;
  /**
   * Fotos em /public/images/loja (só o nome do arquivo). A primeira aparece no card e a
   * segunda ao passar o mouse. Sem foto, o card mostra um espaço reservado.
   */
  images?: string[];
  /** Preço atual. Sem preço, o card mostra "Consulte o preço". */
  price?: number;
  /** Preço antigo, riscado. O desconto em % é calculado sozinho. */
  oldPrice?: number;
  /** Número de parcelas sem juros. */
  installments?: number;
  condition?: "Novo" | "Seminovo";
  badge?: "Oferta" | "Mais vendido";
  stock?: "disponivel" | "ultimas" | "encomenda";
  /** Produto em destaque no topo da página (use em apenas um). */
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "notebook-hp-probook-i3",
    name: "Notebook HP ProBook",
    category: "computadores",
    specs: ["Intel Core i3 8ª geração", "8 GB de RAM", "128 GB de armazenamento"],
    description: "Notebook da linha corporativa da HP, ideal para trabalho e estudo.",
    images: ["hp-probook-1.jpg", "hp-probook-2.jpg"],
    price: 2290,
    condition: "Seminovo",
    stock: "disponivel",
    featured: true,
  },
  {
    id: "mini-pc-acemagic-ryzen5",
    name: "Mini PC ACEMAGIC Vista Mini V1",
    category: "computadores",
    specs: ["AMD Ryzen 5 série 7000", "16 GB de RAM", "500 GB de armazenamento"],
    description: "Desempenho de computador de mesa em um aparelho que cabe na palma da mão.",
    images: ["acemagic-vista-mini-v1-1.jpg", "acemagic-vista-mini-v1-2.jpg"],
    price: 2980,
    condition: "Novo",
    stock: "disponivel",
  },
  {
    id: "mini-pc-essenx-i5",
    name: "Mini PC Essenx",
    category: "computadores",
    specs: ["Intel Core i5 11ª geração", "16 GB de RAM", "500 GB de armazenamento"],
    description: "Compacto, libera espaço na mesa do escritório ou de casa.",
    images: ["essenx-mini-pc-1.jpg", "essenx-mini-pc-2.jpg"],
    price: 2980,
    condition: "Novo",
    stock: "disponivel",
  },
];

/** Vantagens de comprar na Technolife (faixa logo abaixo do topo). Confira se valem para a loja. */
export const shopPerks: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Garantia", text: "Produtos com nota fiscal e garantia.", icon: BadgeCheck },
  { title: "Parcelamento", text: "Pix, débito ou cartão em até 10x.", icon: CreditCard },
  { title: "Retire na loja", text: "São José dos Campos, sem custo de frete.", icon: Store },
  { title: "Instalação", text: "Configuramos o equipamento para você.", icon: Settings2 },
];

/** Diferenciais da loja: o que o cliente ganha ao comprar de quem também faz o suporte. */
export const shopReasons: { title: string; text: string }[] = [
  {
    title: "Indicação honesta",
    text: "Você conta como vai usar e indicamos o produto certo, sem empurrar o mais caro.",
  },
  {
    title: "Sai pronto para usar",
    text: "Computadores e notebooks podem sair formatados, configurados e com seus programas.",
  },
  {
    title: "Suporte depois da compra",
    text: "Se algo der errado, a assistência técnica é aqui mesmo, com laboratório próprio.",
  },
];

export const buySteps: { title: string; text: string }[] = [
  { title: "Escolha o produto", text: "Navegue pelas categorias ou peça uma indicação." },
  { title: "Chame no WhatsApp", text: "Confirmamos estoque, preço e a forma de pagamento." },
  { title: "Retire ou receba", text: "Retire na loja ou combine a entrega com a equipe." },
];

export const shopFaq: { question: string; answer: string }[] = [
  {
    question: "Quais são as formas de pagamento?",
    answer: "Pix, cartão de débito e cartão de crédito em até 10x. Confirme as condições de cada produto no WhatsApp.",
  },
  {
    question: "Os produtos têm garantia?",
    answer: "Sim. Todos os produtos são vendidos com nota fiscal e garantia. O prazo varia conforme o fabricante.",
  },
  {
    question: "Vocês fazem entrega?",
    answer: "Você pode retirar na loja, em São José dos Campos. Para entrega, consulte a disponibilidade para o seu endereço.",
  },
  {
    question: "Vocês instalam e configuram o que eu comprar?",
    answer: "Sim. Podemos instalar peças, formatar e configurar computadores, notebooks e roteadores para você.",
  },
  {
    question: "Não achei o produto que procuro. E agora?",
    answer: "Chame a gente no WhatsApp. Trabalhamos com encomenda e indicamos a melhor opção para o seu uso.",
  },
];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatBRL(value: number) {
  return brl.format(value);
}

export function discountPercent(product: Product) {
  if (!product.price || !product.oldPrice || product.oldPrice <= product.price) return 0;
  return Math.round((1 - product.price / product.oldPrice) * 100);
}

export function productMessage(product: Product) {
  const specs = product.specs?.length ? ` - ${product.specs.join(", ")}` : "";
  const price = product.price ? ` (${formatBRL(product.price)})` : "";
  return `Olá, Technolife! Tenho interesse no produto "${product.name}${specs}"${price}. Está disponível?`;
}

export function categoryOf(id: CategoryId) {
  return shopCategories.find((category) => category.id === id)!;
}
