import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { clients } from "@/lib/site";

export function ClientStrip() {
  return (
    <section className="border-y border-border py-14 sm:py-16" aria-labelledby="clientes-heading">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
              Clientes
            </p>
            <h2
              id="clientes-heading"
              className="font-heading mt-3 text-3xl font-normal sm:text-4xl"
            >
              Quem eu já atendi.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vertical em alimentos e bebidas, com base na Serra Gaúcha — e
              histórico de construir o instrumento onde ainda não havia estrutura
              para quem ia conferir.
            </p>
          </div>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {clients.map((client) => (
            <li key={client.url}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-lift flex h-full flex-col border border-border px-6 py-7 transition-colors hover:border-brand/50"
              >
                <p className="font-heading text-3xl font-normal tracking-tight">
                  {client.name}
                </p>
                <p className="mt-2 text-sm tracking-wide text-slate-blue">
                  {client.sector}
                </p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {client.note}
                </p>
                <p className="mt-6 inline-flex items-center gap-1 text-sm text-brand">
                  {client.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  <ArrowUpRight className="size-3.5" />
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
