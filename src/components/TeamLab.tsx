export default function TeamLab() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-video rounded-xl bg-slate-200 flex items-center justify-center text-slate-400">
          Foto da equipe / laboratório
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Nossa equipe e laboratório
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Contamos com uma equipe técnica qualificada e um laboratório equipado para diagnóstico
            e reparo de equipamentos, garantindo agilidade e qualidade em cada atendimento,
            seja presencial ou remoto.
          </p>
        </div>
      </div>
    </section>
  );
}
