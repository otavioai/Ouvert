import type { Metadata } from "next";

import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Casos",
};

export default function CasosPage() {
  return (
    <StubPage
      title="Casos"
      summary="O caso âncora da vinícola e os próximos slots entram aqui quando os fatos reais estiverem validados. O PDF ainda não está pronto."
    />
  );
}
