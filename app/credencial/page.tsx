import type { Metadata } from "next";

import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Credencial",
};

export default function CredencialPage() {
  return (
    <StubPage
      title="Credencial"
      summary="O histórico — 17 due diligences, Panamby, Votorantim, Safra — entra nesta página na próxima versão. Os números-chave já estão na Home."
    />
  );
}
