import PageHeader from "@/components/PageHeader";
import TeamLab from "@/components/TeamLab";

export default function SobrePage() {
  return (
    <>
      <PageHeader title="Sobre Nós" subtitle="Conheça a história e a equipe da Technolife" />
      <section className="max-w-4xl mx-auto px-6 py-16 text-slate-600 leading-relaxed space-y-4">
        <p>
          A Technolife Informática nasceu com o propósito de oferecer suporte técnico ágil e
          confiável, ajudando empresas e pessoas a produzir, transmitir e proteger suas
          informações.
        </p>
        <p>
          Ao longo dos anos construímos uma base sólida de clientes que confiam em nosso trabalho,
          seja para manter a infraestrutura de TI de uma empresa funcionando, seja para resolver
          o problema do dia a dia de um computador ou notebook.
        </p>
      </section>
      <TeamLab />
    </>
  );
}
