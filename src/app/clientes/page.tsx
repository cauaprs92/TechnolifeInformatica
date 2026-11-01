import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Empresas que confiam no suporte técnico da Technolife Informática.",
};

export default function ClientesPage() {
  return (
    <>
      <PageHeader
        crumb="Clientes"
        title="Nossos clientes."
        subtitle="Empresas que confiam na Technolife para manter a tecnologia funcionando."
      />
      <Clients />
      <Testimonials />
      <CtaBand />
    </>
  );
}
