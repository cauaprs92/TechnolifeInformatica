import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Suporte técnico empresarial e residencial: servidores, e-mail corporativo, redes, backup, formatação, manutenção e reparos.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        crumb="Serviços"
        title="Soluções em tecnologia para empresas e para você."
        subtitle="Do servidor que sustenta a sua empresa ao notebook que você usa todo dia, cuidamos de tudo com agilidade e confiança."
      />
      <Services />
      <Process />
      <CtaBand />
    </>
  );
}
