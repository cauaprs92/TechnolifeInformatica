import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Building2,
  Cpu,
  DatabaseBackup,
  Handshake,
  House,
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

/** Compromissos da página Sobre: a promessa e como ela aparece no dia a dia. */
export const values: {
  title: string;
  promise: string;
  text: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Agilidade",
    promise: "Sua rotina não pode parar esperando o técnico.",
    text: "Escolhemos o caminho mais rápido para resolver. Muitas vezes, nem é preciso sair de casa ou da empresa.",
    points: [
      "Suporte remoto para resolver à distância",
      "Técnico no local quando a situação pede",
      "Laboratório próprio, sem depender de terceiros",
    ],
    icon: Zap,
  },
  {
    title: "Confiança",
    promise: "Você entende o que foi feito no seu equipamento.",
    text: "Explicamos o diagnóstico em linguagem simples e indicamos só o que faz sentido para o seu uso.",
    points: [
      "Diagnóstico explicado antes do serviço",
      "Indicação honesta de produtos e upgrades",
      "Clientes que confiam na gente desde 2002",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Proximidade",
    promise: "Atendimento de gente, não de protocolo.",
    text: "Você fala direto com a equipe que cuida do seu equipamento, pelo canal que preferir.",
    points: [
      "Loja em São José dos Campos",
      "WhatsApp, telefone ou visita presencial",
      "Acompanhamento depois do serviço",
    ],
    icon: Handshake,
  },
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

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  /** Nome igual ao da lista `clients`, para mostrar o logo. Sem logo, aparecem as iniciais. */
  client?: string;
  since?: string;
  /** Trecho curto em destaque (cards da página inicial e de clientes). */
  highlight: string;
  /** Texto completo, um item por parágrafo. */
  body: string[];
  /** Aparece nos cards da página inicial e de clientes. */
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "João Élcio Camargo",
    role: "Diretor administrativo",
    company: "Contcam Contabilidade e Assessoria Empresarial",
    client: "Contcam Contabilidade",
    highlight:
      "Não sabemos mais o que é pane ou suspender serviços por quedas na rede ou no servidor. Agora temos 99,99% de operação e 100% de suporte e help desk.",
    featured: true,
    body: [
      "Nossa empresa é familiar, e com isso, nosso suporte de T.I era realizado por um parente. Embora eu entendesse que isso fosse atrapalhar um crescimento coletivo, mesmo com esforço pessoal, não conseguimos suprir toda a necessidade e o cuidado que uma empresa em crescimento necessitava.",
      "Contudo, era assim que era feito nosso suporte de T.I, até que os negócios, organizações e o fisco passaram a exigir mais tecnologia e conhecimento. Isso trouxe maior dificuldade entre o suporte e os usuários e, aos poucos, a distância entre a necessidade e a capacidade de entrega foi ficando muito aquém da nossa expectativa, o que tornou a mudança inevitável.",
      "Procuramos um novo suporte de T.I, foi quando um cliente indicou a Technolife/Nilton, que inicialmente fez um levantamento de tudo que tinha à disposição e mapeou tudo que seria preciso para atender: a estrutura existente, a desejada, a necessidade e a capacidade de investimentos, porque nem sempre estamos preparados para investir e refazer toda a estrutura de T.I.",
      "Juntos decidimos como reestruturar a nossa T.I, o prazo, as condições etc. Em menos de 6 meses toda a implantação estava inicialmente concluída e já era possível até homologar nossa rede e nosso servidor. Nossa T.I tinha um padrão 10x melhor que a anterior.",
      "Agora nosso suporte e apoio (João Gabriel) está sempre próximo, auxiliando e assistindo meu pessoal nas implantações e atualizações, nas versões e nas necessidades de adequação ou readequação, de forma presencial ou remota, sem precisar parar um setor para a T.I vir fazer algo.",
      "Depois, as necessidades continuaram a crescer devido às novas ferramentas e obrigações legais, e sempre que necessitamos, o suporte (João Gabriel) é solicitado. No geral, hoje, nossa T.I ajuda nossa atividade a ser melhor desempenhada e mais eficiente. Não sabemos mais o que é pane ou suspender serviços devido a quedas e panes na rede ou no servidor. Agora temos 99,99% de operação e 100% de suporte e help desk.",
      "Acredito que as empresas precisam entender que a T.I (organizada e profissional) está para os negócios assim como o telefone fixo, a calculadora e a máquina de escrever estavam para as empresas até os anos 80. Hoje não existe negócio sem tecnologia e suporte.",
    ],
  },
  {
    name: "Claudia Campos",
    role: "Gerente financeiro",
    company: "Promover Formaturas",
    client: "Promover Formaturas",
    since: "Cliente há mais de 20 anos",
    highlight:
      "Posso falar “nosso departamento” porque é assim que vejo a Technolife dentro da nossa empresa, como se fosse um braço da empresa.",
    featured: true,
    body: [
      "A Technolife está conosco há pelo menos uns 20 anos. No início dos anos 2000 a T.I ainda não era tão fundamental em uma empresa como hoje, mas mesmo assim a nossa empresa enxergou a necessidade de ter uma empresa de tecnologia da informação, pois não tínhamos controle de nada, não possuíamos uma rede interna, e a internet ainda era um bicho estranho, não só para nós, como para todo o Brasil.",
      "Nessa época a nossa empresa já havia feito algumas tentativas de ter uma T.I especializada: funcionário interno, por entender que estaria o tempo todo dentro da empresa; prestadores de serviços autônomos, pois não tinham vínculo empregatício; e algumas empresas. Em todas as situações foram várias tentativas e muitas decepções. Nunca estava alinhado com o negócio da empresa e com seus objetivos.",
      "Até que nos foi apresentado o sócio da Technolife, o Sr. Nilton, que se mostrou já na primeira reunião muito entendedor do assunto e disposto a criar uma T.I de verdade na nossa empresa.",
      "Daí surgiu nosso departamento de T.I. Posso falar “nosso departamento” porque é assim que vejo a Technolife dentro da nossa empresa, como se fosse um braço da empresa. Ela está tão alinhada com os objetivos da nossa empresa, da nossa equipe e do nosso cliente que talvez a gente se confunda, porque eles puxam os objetivos para si.",
      "Somos uma empresa de eventos, e ter uma tecnologia alinhada com o mercado, para oferecer conforto e credibilidade para o nosso cliente, é fundamental nos dias de hoje. E a Technolife conseguiu implantar em nossa empresa uma tecnologia moderna, de fácil acesso e, o que é mais importante, com segurança para nós enquanto empresa e para nosso cliente. E sempre atualizando para que possamos estar à frente do nosso tempo.",
      "A Technolife tem uma equipe engajada em oferecer o melhor para seu cliente. Todos ali têm o seu papel bem definido e transparente, por isso cada detalhe sai no seu tempo certo. Essa sintonia foi fundamental para uma parceria de tantos anos.",
      "Depois de 33 anos de existência, a Technolife já faz parte de quase dois terços da vida da Promover, e as experiências vividas são muitas. Mas posso elencar algumas que foram marcos na vida da nossa empresa: a implantação da rede sem fio, quando passamos a ter internet em nossas máquinas, que maravilha! A rede interna, que coisa boa, podíamos compartilhar e acessar arquivos em outras máquinas! A evolução dos backups, desde um antigo disquete até o backup na nuvem.",
      "Entre tantas outras experiências surpreendentes, sobre as quais poderia ficar aqui por longas horas, temos o home office: se não fosse a Technolife em nossas vidas, não teríamos sobrevivido à pandemia e implantado tudo em tempo recorde.",
      "Essas experiências podem parecer simples hoje, mas cada um teve que se adaptar às novas realidades e a Technolife estava ao nosso lado. Ou seja, ela fez a transformação da nossa empresa do mundo analógico para o mundo digital, em cada fase que foi necessária. Obrigado por fazer parte da nossa história.",
    ],
  },
  {
    name: "Eliana Maciel",
    role: "Diretora",
    company: "Maciel Assessoria Empresarial",
    client: "Maciel Assessoria Empresarial",
    highlight:
      "Ao longo dos anos me deparei com vários problemas na área de T.I, e hoje, em vários segmentos que atuo, posso falar com segurança: “Zero” preocupações!",
    featured: true,
    body: [
      "Parabéns a toda equipe da Technolife, muito profissionalismo e competência no trabalho. Nilton, ao longo dos anos me deparei com vários problemas nesta área de T.I, e hoje estou muito satisfeita com vocês. Em vários segmentos que atuo posso falar com segurança: “Zero” preocupações!",
      "Sem deixar de parabenizar o técnico João, sempre acessível, educadíssimo e que costuma resolver tudo que precisamos. Parceria que se solidifica por muitos anos.",
    ],
  },
  {
    name: "Rogério Saraiva",
    role: "Proprietário",
    company: "Protesolda do Vale",
    highlight:
      "Hoje não me preocupo mais com configurações de rede, impressoras, nobreaks etc. Uma das melhores decisões que tomei na empresa.",
    body: [
      "Eu sempre gastei uma boa parte do meu tempo administrando problemas de infraestrutura de informática e automação comercial. Por duas vezes contratei estagiários de informática, porém sem resultados satisfatórios.",
      "Foi então que resolvi aderir a uma solução da Technolife, que me apresentou uma estratégia simples e eficiente para tirar este peso dos meus ombros e eu ter tempo para focar toda a minha atenção no meu negócio.",
      "Com uma equipe eficiente, com conhecimento técnico e uma manutenção corretiva e preventiva, hoje não me preocupo mais com configurações de rede, impressoras, nobreaks etc. Uma das melhores decisões que tomei na empresa.",
    ],
  },
  {
    name: "Wilney Araujo Pereira",
    role: "Analista de TI",
    company: "Cooperemb",
    client: "Cooperemb",
    highlight:
      "A Technolife é uma empresa que respeita sua demanda, te orienta na melhor saída de algum problema e conduz projetos de maneira fantástica.",
    body: [
      "Tínhamos muita dificuldade em implantar uma infra de rede de qualidade a um preço justo. A qualidade no serviço prestado foi de fundamental importância para a estruturação da sede da Cooperemb. Hoje possuímos uma infra de rede sólida e de confiança, sem nenhum retrabalho.",
      "Tínhamos problemas com a falta de confiança e preços muito altos; o prazo e a clareza nas negociações também eram uma dificuldade para encontrar um fornecedor. A Technolife simplesmente atendeu todas as necessidades.",
      "A Technolife sempre soube do nosso maior desafio, que eram os prazos impostos para cumprimento das demandas enviadas, e nunca mediu esforços para evitar que nossas atividades fossem interrompidas para implantação de projetos ou em situações críticas.",
      "A Technolife é uma empresa que respeita sua demanda, te orienta na melhor saída de algum problema e conduz projetos de maneira fantástica. A confiança é o que mais prezamos em nossos fornecedores e a Technolife sempre nos orgulha com seus trabalhos.",
    ],
  },
  {
    name: "Pedro D. Neto",
    role: "Diretor",
    company: "Águia do Vale",
    client: "Águia do Vale Logística",
    since: "Cliente desde 2003",
    highlight:
      "Após anos de tentativas com demais empresas do ramo da informática, encontramos na Technolife a parceria que funciona.",
    body: [
      "A Technolife participa da história da nossa empresa desde 2003, nos apoiando e ajudando nas rotinas de trabalho e com soluções em curto prazo para as questões mais relevantes no que diz respeito à tecnologia da informação. Nos auxilia diretamente como mediadora de programas, aplicativos e softwares necessários para o desenvolvimento do trabalho da empresa e dos processos da equipe.",
      "Após anos de tentativas com demais empresas do ramo da informática, encontramos na Technolife a parceria que funciona, um atendimento excepcional e sempre disposto a atender prontamente no que for necessário.",
      "A integração da rede de informações entre matriz e filiais do grupo foi uma relevante benfeitoria aplicada à rotina, para uma maior agilidade de acesso às informações no processo da nossa empresa.",
    ],
  },
  {
    name: "Marcelo de Moraes",
    role: "Diretor",
    company: "Amicci Anchieta",
    client: "Amicci Anchieta",
    highlight:
      "As soluções são rápidas tanto presencial quanto remota. Isso tudo acontece porque temos uma infraestrutura planejada para não dar problemas.",
    body: [
      "Minha infra estava bem obsoleta. Quando a Technolife iniciou os trabalhos, fizemos um planejamento para fazer as mudanças gradativas e necessárias. A atenção aos detalhes do fluxo de caixa da empresa foi importante, pois não podíamos fazer tudo de uma vez.",
      "Este alinhamento entre o Amicci e a Technolife fez com que o projeto acontecesse de uma forma que o sistema atual não nos deixasse na mão.",
      "Minha experiência com a Technolife como prestadora de serviço é clara e objetiva. As soluções são rápidas tanto presencial quanto remota. Isso tudo acontece porque temos uma infraestrutura planejada para não dar problemas no decorrer do funcionamento do restaurante.",
      "Estou muito satisfeito com o trabalho prestado pela Technolife.",
    ],
  },
];
