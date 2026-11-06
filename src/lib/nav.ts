export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Clientes", href: "/clientes" },
  { label: "Loja Virtual", href: "/loja-virtual" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
];

export const siteInfo = {
  name: "Technolife Informática",
  tagline:
    "Suporte técnico para produzir, transmitir e proteger as informações com agilidade e confiança.",
  phone: "(12) 98820-0317",
  phoneDigits: "5512988200317",
  email: "contato@technolife.net.br",
  address: "Avenida Cidade Jardim, 3732 - Bosque dos Eucaliptos",
  city: "São José dos Campos - SP",
  hours: ["Segunda a sexta: 08:30 - 18:00", "Sábado: 09:00 - 13:00"],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

/** Horário de funcionamento por dia da semana (0 = domingo). Dias ausentes = fechado. */
export const openingHours: Partial<Record<number, [open: string, close: string]>> = {
  1: ["08:30", "18:00"],
  2: ["08:30", "18:00"],
  3: ["08:30", "18:00"],
  4: ["08:30", "18:00"],
  5: ["08:30", "18:00"],
  6: ["09:00", "13:00"],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteInfo.phoneDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const mapsQuery = encodeURIComponent(`${siteInfo.address}, ${siteInfo.city}`);
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
