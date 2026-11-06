import Link from "next/link";
import { SignalArcs } from "./icons";

export default function PageHeader({
  crumb,
  title,
  subtitle,
}: {
  crumb: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-56 -right-32 -z-10 size-[36rem] rounded-full bg-navy/70 blur-3xl"
      />
      <SignalArcs
        className="pointer-events-none absolute -right-10 -bottom-10 -z-10 hidden size-72 -scale-x-100 text-signal/40 md:block"
        strokeWidth={30}
        animated
      />

      <div className="shell py-16 sm:py-20 lg:py-24">
        <nav aria-label="Você está em" className="rise eyebrow text-white/50">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-signal-light">{crumb}</span>
        </nav>
        <h1 className="rise mt-5 max-w-3xl text-5xl leading-[0.96] font-extrabold sm:text-6xl lg:text-7xl [--d:80ms]">
          {title}
        </h1>
        {subtitle && (
          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-white/70 [--d:160ms]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
