"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { offers, triggers } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Diagnostic() {
  const [selected, setSelected] = useState<(typeof triggers)[number]["id"] | null>(
    null
  );
  const trigger = triggers.find((item) => item.id === selected);
  const offer = offers.find((item) => item.id === trigger?.offerId);

  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
      <ol className="flex flex-col gap-2">
        {triggers.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item.id)}
              className={cn(
                "w-full rounded-md border px-4 py-4 text-left text-[15px] leading-snug transition-colors",
                selected === item.id
                  ? "border-brand bg-brand/10 text-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-foreground"
              )}
            >
              <span className="mr-3 font-mono text-xs text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </button>
          </li>
        ))}
      </ol>
      <div className="flex flex-col justify-center rounded-md border border-border bg-muted/60 px-6 py-8">
        {offer && trigger ? (
          <>
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
              Porta
            </p>
            <p className="font-heading mt-3 text-3xl font-normal">{offer.title}</p>
            <p className="mt-3 text-2xl text-brand">{offer.price}</p>
            <p className="mt-2 text-sm text-slate-blue">{offer.term}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Entregável: {offer.deliverableNoun}
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contato" />}
              className="mt-8 h-11 w-fit px-5 text-sm"
            >
              Agendar conversa de 45 minutos
            </Button>
          </>
        ) : (
          <p className="font-heading text-2xl leading-snug font-normal text-muted-foreground">
            Responda uma. Eu já sei qual porta abrir.
          </p>
        )}
      </div>
    </div>
  );
}
