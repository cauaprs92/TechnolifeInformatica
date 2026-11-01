import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Building2,
  Cpu,
  DatabaseBackup,
  Handshake,
  HardDrive,
  Headphones,
  House,
  Keyboard,
  Laptop,
  Mail,
  MessageCircle,
  Network,
  RefreshCw,
  Router,
  ScanSearch,
  Server,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

type Item = { label: string; icon: LucideIcon };

/** Os três verbos do slogan da Technolife, cada um com os serviços que o sustentam. */
export const pillars: { verb: string; icon: LucideIcon; text: string; items: Item[] }[] = [
  {
    verb: "Produzir",
    icon: Laptop,
    text: "Computadores e notebooks prontos para o trabalho, com manutenção em dia e reparo rápido quando algo para.",
    items: [
      { label: "Formatação e configuração", icon: RefreshCw },
      { label: "Manutenção preventiva", icon: Wrench },
      { label: "Reparos de hardware", icon: Cpu },
    ],
  },
  {
    verb: "Transmitir",
    icon: Network,
    text: "Rede, servidores e e-mail funcionando para a informação circular sem interrupções.",
    items: [
      { label: "Infraestrutura de rede", icon: Router },
      { label: "Servidores", icon: Server },
      { label: "E-mail corporativo", icon: Mail },
    ],
  },
  {
    verb: "Proteger",
    icon: ShieldCheck,
    text: "Backup, recuperação e limpeza de ameaças para os seus dados continuarem seguros.",
    items: [
      { label: "Backup e recuperação", icon: DatabaseBackup },
      { label: "Remoção de vírus", icon: Bug },
    ],
  },
];

export const audiences = [
  {
    id: "empresas",
    tag: "Para empresas",
    title: "Suporte Técnico Empresarial",
    icon: Building2,
    summary: "Servidores, rede, e-mail e backup para sua empresa não parar.",
    description:
      "Servidores, e-mail corporativo, infraestrutura de rede e backup para manter sua empresa funcionando sem interrupções.",
    items: [
      { label: "Servidores", icon: Server },
      { label: "E-mail corporativo", icon: Mail },
      { label: "Infraestrutura de rede", icon: Network },
      { label: "Backup e recuperação", icon: DatabaseBackup },
    ],
    message: "Olá, Technolife! Gostaria de suporte técnico para minha empresa.",
  },
  {
    id: "voce",
    tag: "Para você",
    title: "Suporte Técnico Público Geral",
    icon: House,
    summary: "Formatação, manutenção e reparo do seu computador ou notebook.",
    description:
      "Formatação, manutenção preventiva e reparos para computadores e notebooks residenciais.",
    items: [
      { label: "Formatação", icon: RefreshCw },
      { label: "Manutenção preventiva", icon: Wrench },
      { label: "Reparos de hardware", icon: Cpu },
      { label: "Remoção de vírus", icon: Bug },
    ],
    message: "Olá, Technolife! Preciso de suporte para meu computador ou notebook.",
  },
];

export const steps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Fale com a gente",
    text: "Chame no WhatsApp, ligue ou visite a loja. Conte o que está acontecendo.",
    icon: MessageCircle,
  },
  {
    title: "Diagnóstico",
    text: "Avaliamos o equipamento ou a rede e explicamos o que precisa ser feito.",
    icon: ScanSearch,
  },
  {
    title: "Solução",
    text: "Resolvemos no laboratório, no local ou por acesso remoto, conforme o caso.",
    icon: Wrench,
  },
  {
    title: "Acompanhamento",
    text: "Manutenção preventiva e suporte contínuo para o problema não voltar.",
    icon: ShieldCheck,
  },
];

export const values: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Agilidade", text: "Atendimento rápido para a sua rotina não parar.", icon: Zap },
  { title: "Confiança", text: "Clareza sobre o que foi feito no seu equipamento e por quê.", icon: ShieldCheck },
  { title: "Proximidade", text: "Atendimento presencial, remoto e em laboratório próprio.", icon: Handshake },
];

/** Logos recortados em /public/images/clientes. width/height = tamanho real do arquivo. */
export const clients = [
  { name: "Cooperemb", file: "cooperemb.png", width: 82, height: 75 },
  { name: "Contcam Contabilidade", file: "contcam.png", width: 122, height: 36 },
  { name: "Suzuki Valentus", file: "suzuki-valentus.png", width: 146, height: 81 },
  { name: "Promover Formaturas", file: "promover.png", width: 114, height: 60 },
  { name: "Clínica Anchieta", file: "clinica-anchieta.png", width: 177, height: 51 },
  { name: "Amicci Anchieta", file: "amicci.png", width: 141, height: 59 },
  { name: "Águia do Vale Logística", file: "aguia-do-vale.png", width: 111, height: 72 },
  { name: "Office Assessoria", file: "office-assessoria.png", width: 140, height: 68 },
  { name: "Levcor Tintas", file: "levcor.png", width: 129, height: 49 },
  { name: "Maciel Assessoria Empresarial", file: "maciel.png", width: 98, height: 65 },
  { name: "Lar Nossa Senhora da Salette", file: "lar-salette.png", width: 139, height: 72 },
  { name: "FEESP", file: "feesp.png", width: 88, height: 54 },
  { name: "JM Center", file: "jm-center.png", width: 133, height: 41 },
  { name: "Intermac Hidráulica", file: "intermac.png", width: 133, height: 40 },
  { name: "CR Studio", file: "cr-studio.png", width: 91, height: 89 },
  { name: "Rodars", file: "rodars.png", width: 143, height: 51 },
  { name: "Horus Sistemas Integrados", file: "horus.png", width: 143, height: 55 },
  { name: "Plena Mente", file: "plena-mente.png", width: 101, height: 66 },
];

/** Altura de exibição que equilibra logos largos e altos pela área ocupada. */
export function logoHeight(width: number, height: number, area: number, max: number) {
  return Math.round(Math.min(max, Math.max(28, Math.sqrt(area / (width / height)))));
}

export const testimonials = [
  {
    name: "Maria Silva",
    role: "Diretora Administrativa",
    quote:
      "A Technolife resolveu nosso problema de infraestrutura em tempo recorde. Atendimento rápido e profissional.",
  },
  {
    name: "João Pereira",
    role: "Cliente residencial",
    quote:
      "Levei meu notebook para manutenção e recebi de volta funcionando perfeitamente, com ótimo custo-benefício.",
  },
  {
    name: "Ana Costa",
    role: "Gerente de TI",
    quote:
      "Parceria de confiança para backup e segurança dos nossos servidores. Recomendo a todos.",
  },
];

export const shopCategories: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Computadores e notebooks", text: "Equipamentos para trabalho, estudo e uso em casa.", icon: Laptop },
  { title: "Periféricos", text: "Teclados, mouses, monitores e webcams.", icon: Keyboard },
  { title: "Componentes", text: "Memória, processadores, fontes e peças para upgrade.", icon: Cpu },
  { title: "Redes e Wi-Fi", text: "Roteadores, cabos e acessórios de conectividade.", icon: Router },
  { title: "Armazenamento", text: "SSDs, HDs externos, pendrives e soluções de backup.", icon: HardDrive },
  { title: "Acessórios", text: "Fones, carregadores, cabos e adaptadores.", icon: Headphones },
];
