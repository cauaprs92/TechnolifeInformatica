import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TestimonialList from "@/components/TestimonialList";
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
        subtitle="Diretores e gestores de empresas que contam com a Technolife, alguns há mais de 20 anos."
      />
      <TestimonialList />
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
