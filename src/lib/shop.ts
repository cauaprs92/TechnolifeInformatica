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
  Fotos: coloque o arquivo em /public/images/loja e informe só o nome em `image`.
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
  /** Frase curta com o principal benefício (aparece no card, até 2 linhas). */
  description: string;
  /** Nome do arquivo em /public/images/loja. Sem foto, o card mostra um espaço reservado. */
  image?: string;
  /** Preço atual. Sem preço, o card mostra "Consulte o preço". */
  price?: number;
  /** Preço antigo, riscado. O desconto em % é calculado sozinho. */
  oldPrice?: number;
  /** Número de parcelas sem juros. */
  installments?: number;
  badge?: "Oferta" | "Novo" | "Mais vendido";
  stock?: "disponivel" | "ultimas" | "encomenda";
  /** Produto em destaque no topo da página (use em apenas um). */
  featured?: boolean;
};

// ATENÇÃO: nomes e valores abaixo são de exemplo. Substitua pelos produtos reais.
export const products: Product[] = [
  {
    id: "notebook-i5",
    name: "Notebook 15,6\" Intel Core i5, 8 GB, SSD 256 GB",
    category: "computadores",
    description: "Pronto para trabalho e estudo, entregue formatado e configurado.",
    price: 3299,
    oldPrice: 3699,
    installments: 10,
    badge: "Oferta",
    stock: "ultimas",
    featured: true,
  },
  {
    id: "desktop-escritorio",
    name: "Computador para escritório Intel Core i3, 8 GB, SSD 240 GB",
    category: "computadores",
    description: "Montado e testado no nosso laboratório.",
    price: 2199,
    installments: 10,
    stock: "disponivel",
  },
  {
    id: "monitor-24",
    name: "Monitor 24\" Full HD IPS",
    category: "perifericos",
    description: "Imagem nítida e cores fiéis para o dia a dia.",
    price: 849,
    installments: 6,
    badge: "Mais vendido",
    stock: "disponivel",
  },
  {
    id: "kit-teclado-mouse",
    name: "Kit teclado e mouse sem fio",
    category: "perifericos",
    description: "Conexão estável e bateria de longa duração.",
    price: 159,
    stock: "disponivel",
  },
  {
    id: "memoria-8gb",
    name: "Memória RAM 8 GB DDR4",
    category: "componentes",
    description: "Upgrade rápido para deixar o computador mais ágil.",
    stock: "encomenda",
  },
  {
    id: "roteador-dual-band",
    name: "Roteador Wi-Fi Dual Band",
    category: "redes",
    description: "Mais alcance e estabilidade para casa ou escritório.",
    price: 289,
    installments: 3,
    badge: "Novo",
    stock: "disponivel",
  },
  {
    id: "ssd-480",
    name: "SSD 480 GB SATA",
    category: "armazenamento",
    description: "Seu computador ligando em segundos. Instalação disponível.",
    price: 229,
    oldPrice: 269,
    installments: 3,
    badge: "Oferta",
    stock: "disponivel",
  },
  {
    id: "headset-usb",
    name: "Headset USB com microfone",
    category: "acessorios",
    description: "Ideal para reuniões online e chamadas.",
    price: 139,
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
  const price = product.price ? ` (${formatBRL(product.price)})` : "";
  return `Olá, Technolife! Tenho interesse no produto "${product.name}"${price}. Está disponível?`;
}

export function categoryOf(id: CategoryId) {
  return shopCategories.find((category) => category.id === id)!;
}
