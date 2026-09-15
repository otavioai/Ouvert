import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return (
    <section className="flex flex-1 flex-col justify-center py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
          Conversa de 45 minutos
        </p>
        <h1 className="font-heading mt-4 text-4xl leading-tight font-normal sm:text-5xl">
          Sem custo. Com porta definida.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já
          sei qual porta abrir.
        </p>
        <div className="mt-10 space-y-3 border border-border bg-card px-5 py-6 text-sm">
          <p>
            Telefone:{" "}
            <span className="font-mono text-gold">{site.placeholders.telefone}</span>
          </p>
          <p>
            WhatsApp:{" "}
            <span className="font-mono text-gold">{site.placeholders.whatsapp}</span>
          </p>
          <p>
            LinkedIn:{" "}
            <span className="font-mono text-gold">{site.placeholders.linkedin}</span>
          </p>
          <p className="text-muted-foreground">Base: {site.base}</p>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Links reais de WhatsApp e LinkedIn ainda não foram fornecidos — os
          marcadores acima entram no lugar até lá.
        </p>
        <Button
          nativeButton={false}
          render={<Link href="/" />}
          variant="outline"
          className="mt-10 h-11 px-5 text-sm"
        >
          Voltar para Home
        </Button>
      </Container>
    </section>
  );
}
