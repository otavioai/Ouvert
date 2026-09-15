import type { Metadata } from "next";

import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <StubPage
      title="Insights"
      summary="A série «O que reprova uma empresa quando alguém de fora olha» entra nesta página na próxima versão."
    />
  );
}
