import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { clients } from "@/lib/site";

export function ClientStrip() {
  return (
    <section
      className="border-y border-border bg-muted/40 py-20 sm:py-24"
      aria-labelledby="clientes-heading"
    >
      <Container>
        <div className="max-w-xl">
          <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
          <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
            Clientes
          </p>
          <h2
            id="clientes-heading"
            className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Quem eu já atendi.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vertical em alimentos e bebidas, com base na Serra Gaúcha — e
            histórico de construir o instrumento onde ainda não havia estrutura
            para quem ia conferir.
          </p>
        </div>
        <ul className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {clients.map((client) => (
            <li key={client.url} className="bg-background">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col px-6 py-8 transition-colors hover:bg-muted/60"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {client.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {client.sector}
                </p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {client.note}
                </p>
                <p className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-red">
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
