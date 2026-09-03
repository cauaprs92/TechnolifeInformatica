import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

export default function DepoimentosPage() {
  return (
    <>
      <PageHeader title="Depoimentos" subtitle="O que nossos clientes dizem sobre nós" />
      <Testimonials showAllLink={false} />
    </>
  );
}
