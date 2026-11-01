import Image from "next/image";
import { clients, logoHeight } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Clients() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow={`${clients.length} empresas parceiras`}
            title="Empresas de vários segmentos confiam na Technolife."
            className="lg:col-span-7"
          />
          <p className="text-lg leading-relaxed text-body lg:col-span-5">
            Clínicas, escritórios de contabilidade e assessoria, concessionária, logística,
            indústria e comércio contam com o nosso suporte no dia a dia.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <li
              key={client.file}
              className="group grid aspect-[4/3] place-items-center bg-white p-5"
              title={client.name}
            >
              <Image
                src={`/images/clientes/${client.file}`}
                alt={client.name}
                width={client.width}
                height={client.height}
                style={{ height: logoHeight(client.width, client.height, 5600, 60) }}
                className="w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
