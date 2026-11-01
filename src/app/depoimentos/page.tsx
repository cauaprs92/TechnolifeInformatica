import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Depoimentos",
  description: "O que os clientes dizem sobre o atendimento da Technolife Informática.",
};

export default function DepoimentosPage() {
  return (
    <>
      <PageHeader
        crumb="Depoimentos"
        title="O que nossos clientes dizem."
        subtitle="Empresas e pessoas que contam com a Technolife no dia a dia."
      />
      <Testimonials showAllLink={false} />
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
