import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ShopPromo from "@/components/ShopPromo";

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        title="Serviços"
        subtitle="Soluções em tecnologia para empresas e para o público em geral"
      />
      <Services />
      <ShopPromo />
    </>
  );
}
