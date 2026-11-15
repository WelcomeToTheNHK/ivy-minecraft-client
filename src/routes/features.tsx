import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Ghost } from "lucide-react";
import { CATEGORIES, MODULES, VERSIONS, filterModules, type Category, type Mode, type Version } from "@/lib/modules";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureSearch {
  mode?: Mode;
  version?: Version;
  category?: Category;
}

export const Route = createFileRoute("/features")({
  validateSearch: (s: Record<string, unknown>): FeatureSearch => ({
    mode: s.mode === "ghost" || s.mode === "blatant" ? s.mode : undefined,
    version: VERSIONS.includes(s.version as Version) ? (s.version as Version) : undefined,
    category: CATEGORIES.includes(s.category as Category) ? (s.category as Category) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Modules — Ivy Client Ghost & Blatant Features" },
      { name: "description", content: "Browse every Ivy Ghost and Blatant module for Minecraft 1.21.11 and 1.8.9." },
      { property: "og:title", content: "Ivy Client Modules" },
      { property: "og:description", content: "Every Ghost and Blatant module for 1.21.11 and 1.8.9, filterable by version and category." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

function Chip({ active, search, children }: { active: boolean; search: FeatureSearch; children: React.ReactNode }) {
  return (
    <Link
      to="/features"
      search={search}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary/50 bg-primary/15 text-primary"
          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}

function FeaturesPage() {
  const current = Route.useSearch();
  const { mode, version, category } = current;
  const list = filterModules(MODULES, { mode, version, category });

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-96 bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Modules</p>
          <h1 className="font-display text-6xl tracking-tight sm:text-7xl">
            Every <em className="text-gradient-ivy">module,</em> both versions.
          </h1>
          <p className="text-muted-foreground">
            {MODULES.length} modules across Ghost and Blatant. Every plan includes all of them.
          </p>
        </div>

        <div className="mt-10 space-y-4 rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur sm:p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 font-mono text-xs uppercase tracking-widest text-muted-foreground">Mode</span>
            <Chip search={{ ...current, mode: undefined }} active={!mode}>All</Chip>
            <Chip search={{ ...current, mode: "ghost" as const }} active={mode === "ghost"}>
              <span className="flex items-center gap-1.5"><Ghost className="size-3.5" /> Ghost</span>
            </Chip>
            <Chip search={{ ...current, mode: "blatant" as const }} active={mode === "blatant"}>
              <span className="flex items-center gap-1.5"><Flame className="size-3.5" /> Blatant</span>
            </Chip>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 font-mono text-xs uppercase tracking-widest text-muted-foreground">Version</span>
            <Chip search={{ ...current, version: undefined }} active={!version}>Both</Chip>
            {VERSIONS.map((v) => (
              <Chip key={v} search={{ ...current, version: v }} active={version === v}>{v}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 font-mono text-xs uppercase tracking-widest text-muted-foreground">Category</span>
            <Chip search={{ ...current, category: undefined }} active={!category}>All</Chip>
            {CATEGORIES.map((c) => (
              <Chip key={c} search={{ ...current, category: c }} active={category === c}>{c}</Chip>
            ))}
          </div>
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          Showing {list.length} {list.length === 1 ? "module" : "modules"}
        </p>

        {list.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No modules match that combination.
            <div className="mt-4">
              <Button asChild variant="glass" size="sm"><Link to="/features">Clear filters</Link></Button>
            </div>
          </div>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((m) => {
              const ghost = m.mode === "ghost";
              return (
                <li
                  key={m.name}
                  className={cn(
                    "group rounded-xl border border-border bg-surface p-5 transition-colors",
                    ghost ? "hover:border-primary/40" : "hover:border-blatant/40",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-bold">{m.name}</h2>
                    <span
                      className={cn(
                        "shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
                        ghost ? "bg-primary/15 text-primary" : "bg-blatant/15 text-blatant",
                      )}
                    >
                      {m.mode}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                    <span>{m.category}</span>
                    <span className="text-border">•</span>
                    {m.versions.map((v) => (
                      <span key={v} className="rounded border border-border px-1.5 py-0.5">{v}</span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
