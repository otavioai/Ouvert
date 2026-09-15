import type { Metadata } from "next";

import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "A Oferta",
};

export default function OfertaPage() {
  return (
    <StubPage
      title="A Oferta"
      summary="As três portas — Sala de exame, Orçamento 2027 e Dossiê para o banco — entram nesta página na próxima versão. Os preços e entregáveis já estão na Home."
    />
  );
}
