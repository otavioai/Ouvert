import Link from "next/link";

import { Button } from "@/components/ui/button";
import { offers, triggers } from "@/lib/site";
import { cn } from "@/lib/utils";

const panelByTrigger: Record<(typeof triggers)[number]["id"], string> = {
  exame: "hidden group-has-[#gatilho-exame:checked]/diag:flex",
  orcamento: "hidden group-has-[#gatilho-orcamento:checked]/diag:flex",
  banco: "hidden group-has-[#gatilho-banco:checked]/diag:flex",
};

export function Diagnostic() {
  return (
    <div className="group/diag mt-10 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
      <fieldset>
        <legend className="sr-only">Qual o gatilho</legend>
        <ol className="flex flex-col gap-2">
          {triggers.map((item, index) => (
            <li key={item.id}>
              <label className="block cursor-pointer">
                <input
                  type="radio"
                  name="gatilho"
                  value={item.id}
                  id={`gatilho-${item.id}`}
                  className="peer sr-only"
                />
                <span
                  className={cn(
                    "flex w-full border border-border bg-background px-4 py-4 text-left text-[15px] leading-snug text-muted-foreground transition-colors",
                    "hover:border-foreground/30 hover:text-foreground",
                    "peer-checked:border-brand-red peer-checked:bg-background peer-checked:text-foreground",
                    "peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50"
                  )}
                >
                  <span className="mr-3 font-mono text-xs text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ol>
      </fieldset>

      <div>
        <div className="flex h-full min-h-[12rem] flex-col justify-center border border-border bg-background px-6 py-8 group-has-[input:checked]/diag:hidden">
          <p className="font-heading text-2xl leading-snug font-semibold tracking-tight text-muted-foreground">
            Responda uma. Eu indico a porta.
          </p>
        </div>
        {triggers.map((item) => {
          const offer = offers.find((entry) => entry.id === item.offerId);
          if (!offer) return null;
          return (
            <div
              key={item.id}
              className={cn(
                "h-full min-h-[12rem] flex-col justify-center border border-border bg-background px-6 py-8",
                panelByTrigger[item.id]
              )}
            >
              <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-red uppercase">
                Porta
              </p>
              <p className="font-heading mt-3 text-3xl font-semibold tracking-tight">
                {offer.title}
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {offer.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{offer.term}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Entregável: {offer.deliverableNoun}
              </p>
              <Button
                nativeButton={false}
                variant="appointment"
                render={<Link href="/contato" />}
                className="mt-8 h-11 w-fit px-5 text-sm font-medium"
              >
                Agendar conversa de 45 minutos
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
