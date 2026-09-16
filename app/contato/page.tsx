import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return (
    <>
      <PageBanner
        eyebrow="Conversa de 45 minutos"
        title="Sem custo. Com porta definida."
        image={photos.hero}
      >
        Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já sei
        qual porta abrir.
      </PageBanner>

      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
          <Image
            src={photos.portrait}
            alt={site.person}
            width={440}
            height={660}
            className="w-full object-cover object-top grayscale"
          />
          <div className="max-w-xl">
            <div className="space-y-3 border border-border bg-card px-5 py-6 text-sm">
              <p>
                Telefone:{" "}
                <span className="font-mono text-brand">
                  {site.placeholders.telefone}
                </span>
              </p>
              <p>
                WhatsApp:{" "}
                <span className="font-mono text-brand">
                  {site.placeholders.whatsapp}
                </span>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  linkedin.com/in/luisotavioberti
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  instagram.com/otavioberti
                </a>
              </p>
              <p className="text-muted-foreground">Base: {site.base}</p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              WhatsApp ainda não foi informado — o marcador entra no lugar até
              lá.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/" />}
              variant="outline"
              className="mt-8 h-11 rounded-full px-5 text-sm"
            >
              Voltar para Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
