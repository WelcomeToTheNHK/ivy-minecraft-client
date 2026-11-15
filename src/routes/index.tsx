import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, BadgePercent, Cloud, Coins, Cpu, Download, EyeOff, Gauge, Ghost, Flame, Syringe, Trash2, Monitor, Puzzle, ShieldCheck, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_URL } from "@/lib/links";
import { MODULES, filterModules, type Mode } from "@/lib/modules";
import { formatPrice, startingPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import heroArt from "@/assets/ivy_hero_artwork.png.asset.json";
import mascot from "@/assets/ivy_mascot.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivy Client — Ghost & Blatant Minecraft Client for 1.21.11 & 1.8.9" },
      { name: "description", content: "Ghost when they're watching, Blatant when they're not. Ivy is an injectable Minecraft client for 1.21.11 and 1.8.9." },
      { property: "og:title", content: "Ivy Client — Ghost & Blatant Minecraft Client" },
      { property: "og:description", content: "Undetectable Ghost modules and a full Blatant suite for Minecraft 1.21.11 and 1.8.9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Modes />
      <Rewards />
      <FeatureGrid />
      <Team />
      <Setup />
      <FinalCta />
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-pixel-grid" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:pb-24 lg:pt-20">
        <div className="relative z-10 space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" />
            Now updated for 1.21.11
          </span>
          <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Ghost when they're <em className="text-gradient-ivy">watching.</em>
            <br />
            Blatant when they're <em className="text-gradient-blatant">not.</em>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Ivy is one injectable client for Minecraft 1.21.11 and 1.8.9 — closet-safe ghost modules and a full blatant
            suite, in the same menu.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/pricing">
                Get Ivy · from {formatPrice(startingPrice())} <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">Join the Discord</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Syringe className="size-4 text-primary" /> Injectable</span>
            <span className="flex items-center gap-2"><Monitor className="size-4 text-primary" /> Windows 10 / 11</span>
            <span className="flex items-center gap-2"><Puzzle className="size-4 text-primary" /> Fabric · Forge · Lunar</span>
          </div>
        </div>
        <div className="relative -mx-5 sm:mx-0 lg:-mr-24">
          <div className="absolute inset-[10%] rounded-full bg-primary/20 blur-3xl" />
          <img
            src={heroArt.url}
            alt="Ivy client mascot next to the IVY logo"
            width={1280}
            height={720}
            className="relative w-full animate-float fade-bottom drop-shadow-[0_20px_50px_oklch(0.7_0.15_160/0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Undetected on major anticheats" },
    { icon: Zap, label: "In-game in under a minute" },
    { icon: Cloud, label: "Cloud configs" },
    { icon: Cpu, label: "Lightweight — keeps your FPS" },
  ];
  return (
    <div className="border-y border-border bg-surface/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-sm text-muted-foreground">
        {items.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2">
            <Icon className="size-4 text-primary" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Modes() {
  const ghost = filterModules(MODULES, { mode: "ghost" });
  const blatant = filterModules(MODULES, { mode: "blatant" });
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <Eyebrow>Two clients in one</Eyebrow>
        <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
          Pick your <em className="text-gradient-ivy">play style.</em>
        </h2>
        <p className="text-muted-foreground">Flip between Ghost and Blatant with one keybind. No reinjecting.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <ModeCard
          mode="ghost"
          icon={Ghost}
          title="Ghost"
          tagline="Made for closet cheating."
          body="Human-like aim, randomised clicks and believable reach. Built for practice, ranked and screenshare-heavy servers."
          names={ghost.slice(0, 8).map((m) => m.name)}
        />
        <ModeCard
          mode="blatant"
          icon={Flame}
          title="Blatant"
          tagline="Made for when nobody's checking."
          body="Kill Aura, Scaffold, Fly and server-specific disablers. For anarchy, HvH, and turning a lobby upside down."
          names={blatant.slice(0, 8).map((m) => m.name)}
        />
      </div>
    </section>
  );
}

function ModeCard({
  mode, icon: Icon, title, tagline, body, names,
}: {
  mode: Mode; icon: typeof Ghost; title: string; tagline: string; body: string; names: string[];
}) {
  const isGhost = mode === "ghost";
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-card transition-colors",
      isGhost ? "hover:border-primary/40" : "hover:border-blatant/40",
    )}>
      <div className={cn("absolute -right-20 -top-20 size-64 rounded-full blur-3xl", isGhost ? "bg-primary/15" : "bg-blatant/15")} />
      <div className="relative space-y-5">
        <div className="flex items-center justify-between">
          <span className={cn("grid size-12 place-items-center rounded-xl", isGhost ? "bg-gradient-ivy text-primary-foreground" : "bg-blatant text-blatant-foreground")}>
            <Icon className="size-6" />
          </span>
        </div>
        <div>
          <h3 className={cn("font-display text-5xl", isGhost ? "text-gradient-ivy" : "text-gradient-blatant")}>{title}</h3>
          <p className="mt-1 font-semibold">{tagline}</p>
        </div>
        <p className="text-muted-foreground">{body}</p>
        <div className="flex flex-wrap gap-2">
          {names.map((n) => (
            <span key={n} className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Rewards() {
  const perks = [
    { icon: BadgePercent, value: "10%", label: "off for your viewers", body: "Users who order with your discount code of choice will get 10% off of their order." },
    { icon: Coins, value: "10%", label: "cut for you", body: "You will also receive a 10% cut of the payment." },
  ];
  return (
    <section className="relative border-y border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Eyebrow>For media</Eyebrow>
            <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
              <em className="text-gradient-ivy">Rewards</em> for creators.
            </h2>
            <p className="max-w-md text-muted-foreground">
              Make videos with Ivy and get your own discount code. Your viewers save, and you earn from every order.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                Apply on Discord <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {perks.map(({ icon: Icon, value, label, body }) => (
              <div key={label} className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-card">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative space-y-4">
                  <Icon className="size-6 text-primary" />
                  <p className="font-display text-7xl leading-none text-gradient-ivy">{value}</p>
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    { icon: Syringe, title: "Injectable", body: "Runs alongside your mods and launcher. No profile setup, no reinstall." },
    { icon: EyeOff, title: "Silent rotations", body: "Server-side aim that never moves your camera. Your screen stays legit." },
    { icon: Trash2, title: "Self-destruct", body: "One key wipes Ivy from memory and leaves no strings behind." },
    { icon: Cloud, title: "Cloud configs", body: "Load community configs tuned per server in a single click." },
    { icon: Gauge, title: "Keeps your FPS", body: "Lightweight hooks and render code. Ivy stays out of your frame budget." },
    { icon: ShieldCheck, title: "Built to last", body: "Combat modules designed around anticheat logic, not temporary bypasses." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl space-y-4">
        <Eyebrow>Why Ivy</Eyebrow>
        <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
          What you're <em className="text-gradient-ivy">actually</em> getting.
        </h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="space-y-3 bg-background p-8 transition-colors hover:bg-surface">
            <Icon className="size-6 text-primary" />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-12 shadow-card md:grid-cols-[0.8fr_1.2fr] md:px-14">
        <div className="absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
        <img
          src={mascot.url}
          alt="Ivy mascot"
          width={1378}
          height={1920}
          loading="lazy"
          className="relative mx-auto max-h-[30rem] w-auto animate-float drop-shadow-[0_20px_50px_oklch(0.7_0.15_160/0.35)]"
        />
        <div className="relative space-y-5">
          <Eyebrow>The team</Eyebrow>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            Made by <em className="text-gradient-ivy">two</em> developers.
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            Ivy is made by two independent developers, <span className="font-semibold text-foreground">Rusty</span> and{" "}
            <span className="font-semibold text-foreground">Starry</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Setup() {
  const steps = [
    { icon: Zap, title: "Purchase a plan", body: "Instant access after checkout." },
    { icon: Download, title: "Download the loader", body: "A tiny launcher, a few hundred KB." },
    { icon: Syringe, title: "Inject and play", body: "Pick your version, inject, open the menu." },
  ];
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <Eyebrow>Setup</Eyebrow>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            Buy, inject, <em className="text-gradient-ivy">play.</em>
          </h2>
        </div>
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-2xl border border-border bg-surface p-7">
              <span className="absolute right-6 top-5 font-display text-5xl text-foreground/10">0{i + 1}</span>
              <Icon className="size-6 text-primary" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-surface px-8 py-16 text-center shadow-glow sm:px-16">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-pixel-grid" />
        <div className="relative mx-auto max-w-2xl space-y-6">
          <h2 className="font-display text-5xl tracking-tight sm:text-7xl">
            Let your game <em className="text-gradient-ivy">grow.</em>
          </h2>
          <p className="text-muted-foreground">Every plan unlocks every module on both versions. No feature gates.</p>
          <Button asChild variant="hero" size="xl">
            <Link to="/pricing">
              Get Ivy · from {formatPrice(startingPrice())} <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
