import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <Image
        src={photos.ledger}
        alt=""
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/70" />
      <Container className="relative max-w-3xl text-center">
        <p className="text-[11px] font-medium tracking-[0.22em] text-white/60 uppercase">
          Próximo passo
        </p>
        <h2 className="font-heading mt-4 text-3xl font-normal sm:text-5xl">
          Conversa de 45 minutos, sem custo.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/75">
          Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já
          sei qual porta abrir.
        </p>
        <Button
          nativeButton={false}
          variant="appointment"
          render={<Link href="/contato" />}
          className="mt-10 h-12 px-7 text-sm tracking-wide"
        >
          Agendar conversa
        </Button>
      </Container>
    </section>
  );
}
