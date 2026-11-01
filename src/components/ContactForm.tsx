"use client";

import type { FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { whatsappLink } from "@/lib/nav";

const subjects = [
  "Suporte para empresa",
  "Suporte para computador ou notebook",
  "Loja virtual",
  "Outro assunto",
];

const fieldClass =
  "w-full rounded-2xl border border-line bg-paper px-4 py-3.5 text-ink placeholder:text-body/60 transition outline-none focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim();
    const subject = String(data.get("assunto") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    const text = [`Olá, Technolife! Meu nome é ${name}.`, `Assunto: ${subject}`, "", message].join(
      "\n",
    );

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Nome</span>
          <input
            id="contato-nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Assunto</span>
          <span className="relative">
            <select
              id="contato-assunto"
              name="assunto"
              defaultValue={subjects[0]}
              className={`${fieldClass} appearance-none pr-11`}
            >
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4.5 -translate-y-1/2 text-body" />
          </span>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-ink">Mensagem</span>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          required
          rows={8}
          placeholder="Conte o que está acontecendo com o seu equipamento ou rede."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-body">Ao enviar, o WhatsApp abre com a sua mensagem pronta.</p>
        <button type="submit" className="btn btn-primary">
          <Send className="size-4" />
          Enviar pelo WhatsApp
        </button>
      </div>
    </form>
  );
}
