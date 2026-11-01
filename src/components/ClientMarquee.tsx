import Image from "next/image";
import { clients, logoHeight } from "@/lib/data";

export default function ClientMarquee({
  label = "Empresas que confiam na Technolife",
}: {
  label?: string;
}) {
  return (
    <section aria-label="Clientes" className="border-b border-line bg-white py-10">
      <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p className="eyebrow shrink-0 text-body lg:max-w-[11rem] lg:leading-relaxed">{label}</p>

        <div className="marquee mask-fade-x relative min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="marquee-set flex shrink-0 items-center gap-14 pr-14"
              >
                {clients.map((client) => (
                  <li key={client.file} className="shrink-0">
                    <Image
                      src={`/images/clientes/${client.file}`}
                      alt={copy === 0 ? client.name : ""}
                      width={client.width}
                      height={client.height}
                      style={{ height: logoHeight(client.width, client.height, 4600, 52) }}
                      className="w-auto opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
