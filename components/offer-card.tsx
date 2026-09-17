import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { offers } from "@/lib/site";
import { cn } from "@/lib/utils";

type Offer = (typeof offers)[number];

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Card
      className={cn(
        "h-full gap-0 rounded-none py-0 shadow-none ring-1 ring-border",
        offer.featured && "ring-brand-red"
      )}
    >
      <CardHeader className="gap-3 border-b border-border px-6 py-6">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-red uppercase">
          {offer.eyebrow}
        </p>
        <CardTitle className="font-heading text-[1.55rem] leading-tight font-semibold tracking-tight">
          {offer.title}
        </CardTitle>
        {"subtitle" in offer && offer.subtitle ? (
          <p className="text-sm text-muted-foreground">{offer.subtitle}</p>
        ) : null}
        <CardDescription className="text-[15px] leading-relaxed text-muted-foreground">
          {offer.forWho}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div>
          <p className="font-heading text-3xl leading-none font-semibold tracking-tight text-foreground sm:text-[2.05rem]">
            {offer.price}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{offer.term}</p>
        </div>
        {"note" in offer && offer.note ? (
          <p className="border-l-2 border-brand-red pl-3 text-sm leading-relaxed text-muted-foreground">
            {offer.note}
          </p>
        ) : null}
      </CardContent>
      <CardFooter className="items-start border-t border-border bg-muted/40 px-6 py-5">
        <p className="text-[15px] leading-relaxed">
          <span className="text-muted-foreground">Entregável: </span>
          <span className="text-foreground">{offer.deliverable}</span>
        </p>
      </CardFooter>
    </Card>
  );
}
