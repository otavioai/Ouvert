import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClientStrip } from "@/components/client-strip";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credencial",
};

const facts = [
  {
    title: "17 due diligences",
    text: "Consecutivas, aprovadas. Eu estava do lado de quem examina — e sei o que faz uma empresa passar ou reprovar.",
  },
  {
    title: "Panamby Capital",
    text: "Transformação regulatória: montei o instrumento de controle onde ainda não havia estrutura para quem ia conferir.",
  },
  {
    title: "Votorantim",
    text: "Criação da unidade de planejamento estratégico: construí a máquina de números e cenário antes de ela existir como área.",
  },
  {
    title: "Safra",
    text: "Controles sobre R$ 1,5 bilhão de exposição trabalhista: o que o comitê e o auditor precisam ver, organizado para aguentar o exame.",
  },
];

export default function CredencialPage() {
  return (
    <>
      <PageBanner
        eyebrow="Credencial"
        title="Construir o instrumento onde não existia — e depois sobreviver a alguém de fora conferindo."
        image={photos.wine}
      >
        Não vendo currículo. Mostro o que já aguentei do outro lado da mesa — e
        o que deixo pronto do seu lado.
      </PageBanner>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 grid items-center gap-10 md:grid-cols-[220px_1fr]">
            <Image
              src={photos.portraitClose}
              alt={site.person}
              width={440}
              height={560}
              className="w-full object-cover object-top grayscale"
            />
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {site.person}. Base em {site.base}. O padrão é o mesmo: construir
              o instrumento onde não existia e depois sobreviver a alguém de
              fora conferindo. Dezessete vezes.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {facts.map((fact) => (
              <article key={fact.title} className="border-t border-border pt-5">
                <h2 className="font-heading text-2xl font-normal">{fact.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {fact.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ClientStrip />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Vertical e geografia
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Histórico em alimentos e bebidas. Base em {site.base}. Formação
            UFRGS. Atendi cerca de cinco unidades de negócio no histórico de
            construção de finanças, risco e governança.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              variant="appointment"
              render={<Link href="/contato" />}
              className="h-11 px-5 text-sm"
            >
              Conversa de 45 minutos
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-11 rounded-full px-5 text-sm"
            >
              LinkedIn
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
