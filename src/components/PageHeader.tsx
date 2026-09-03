export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
