import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PLANS, PLAN_INCLUDES, formatPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Ivy Client" },
      { name: "description", content: "Monthly, quarterly and lifetime Ivy plans. Every plan includes every Ghost and Blatant module on 1.21.11 and 1.8.9." },
      { property: "og:title", content: "Ivy Client Pricing" },
      { property: "og:description", content: "Every plan unlocks every module on 1.21.11 and 1.8.9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const FAQ = [
  { q: "Is Ivy detectable?", a: "Ghost modules are designed to look human on replay and screenshare. Detection always depends on your settings and the server — tune conservatively on strict servers." },
  { q: "Which versions are supported?", a: "Minecraft 1.21.11 (Fabric, injectable) and 1.8.9 (Forge, Lunar and vanilla, injectable). One license covers both." },
  { q: "Do I need separate plans for Ghost and Blatant?", a: "No. Every plan includes every Ghost and Blatant module. Switch modes in-game with one keybind." },
  { q: "What does self-destruct do?", a: "It unloads Ivy from the game and clears traces, so your client looks untouched." },
  { q: "How fast is delivery?", a: "Instant. After checkout you get your license and the loader download right away." },
];

function PricingPage() {
  const buy = (name: string) =>
    toast(`${name} plan selected`, { description: "Checkout isn't connected yet — coming soon." });

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h1 className="font-display text-6xl tracking-tight sm:text-7xl">
            Every module. <em className="text-gradient-ivy">Every plan.</em>
          </h1>
          <p className="text-muted-foreground">No feature gates — only how long you want Ivy for.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-surface p-8",
                p.popular ? "border-primary/40 shadow-glow" : "border-border shadow-card",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gradient-ivy px-3 py-1 text-xs font-bold text-primary-foreground">
                  <Sparkles className="size-3" /> Most popular
                </span>
              )}
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-6xl">{formatPrice(p.price)}</span>
                <span className="text-sm text-muted-foreground">/ {p.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {PLAN_INCLUDES.map((i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="size-4 text-primary" /> {i}
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? "hero" : "glass"} size="xl" className="mt-8 w-full" onClick={() => buy(p.name)}>
                Get {p.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-center font-display text-5xl tracking-tight">
            Questions, <em className="text-gradient-ivy">answered.</em>
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
