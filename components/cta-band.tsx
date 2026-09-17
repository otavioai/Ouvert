import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { homeCopy } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <Container className="max-w-3xl">
        <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
        <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-white/55 uppercase">
          Próximo passo
        </p>
        <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          {homeCopy.ctaTitle}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          {homeCopy.ctaLead}
        </p>
        <Button
          nativeButton={false}
          variant="appointment"
          render={<Link href="/contato" />}
          className="mt-10 h-12 px-7 text-sm font-medium tracking-wide"
        >
          Agendar conversa
        </Button>
      </Container>
    </section>
  );
}
