import { cn } from "@/lib/utils";
import type { Mode } from "@/lib/modules";

type Row = { name: string; on?: boolean; open?: boolean };
type Panel = { title: string; rows: Row[] };

const PANELS: Record<Mode, Panel[]> = {
  ghost: [
    {
      title: "Combat",
      rows: [
        { name: "Aim Assist", on: true, open: true },
        { name: "Auto Clicker", on: true },
        { name: "Reach" },
        { name: "Velocity", on: true },
        { name: "Hit Select" },
        { name: "W-Tap", on: true },
      ],
    },
    {
      title: "Player",
      rows: [{ name: "Auto Totem", on: true }, { name: "Throw Pot" }, { name: "Right Clicker" }, { name: "Fast Place", on: true }],
    },
    {
      title: "Render",
      rows: [{ name: "ESP", on: true }, { name: "Nametags" }, { name: "Freelook" }],
    },
  ],
  blatant: [
    {
      title: "Combat",
      rows: [
        { name: "Kill Aura", on: true, open: true },
        { name: "Criticals", on: true },
        { name: "Target Strafe" },
        { name: "Anti Bot", on: true },
      ],
    },
    {
      title: "Movement",
      rows: [{ name: "Fly" }, { name: "Speed", on: true }, { name: "Long Jump" }, { name: "No Slow", on: true }, { name: "Step" }],
    },
    {
      title: "World",
      rows: [{ name: "Scaffold", on: true }, { name: "Bed Nuker" }, { name: "Chest Stealer", on: true }],
    },
  ],
};

const SETTINGS: Record<Mode, { label: string; value: string; pct: number }[]> = {
  ghost: [
    { label: "Speed", value: "3.4", pct: 42 },
    { label: "FOV", value: "70°", pct: 60 },
    { label: "Randomise", value: "18%", pct: 18 },
  ],
  blatant: [
    { label: "Range", value: "4.2", pct: 70 },
    { label: "CPS", value: "14", pct: 64 },
    { label: "Targets", value: "Switch", pct: 100 },
  ],
};

export function ClickGui({ mode }: { mode: Mode }) {
  const accent = mode === "ghost" ? "bg-gradient-ivy" : "bg-blatant";
  const accentText = mode === "ghost" ? "text-primary" : "text-blatant";
  const enabled = PANELS[mode].flatMap((p) => p.rows.filter((r) => r.on).map((r) => r.name));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      {/* fake game viewport */}
      <div className="absolute inset-0 bg-pixel-grid opacity-60" />
      <div className="relative grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_auto]">
        <div className="grid gap-3 sm:grid-cols-3">
          {PANELS[mode].map((panel) => (
            <div key={panel.title} className="self-start overflow-hidden rounded-lg border border-border bg-background/85 backdrop-blur">
              <div className={cn("flex items-center justify-between px-3 py-2 text-sm font-bold text-primary-foreground", accent)}>
                {panel.title}
                <span className="font-mono text-[10px] opacity-70">{panel.rows.length}</span>
              </div>
              <ul className="font-mono text-[12.5px]">
                {panel.rows.map((r) => (
                  <li key={r.name} className="border-t border-border first:border-t-0">
                    <div className={cn("flex items-center justify-between px-3 py-1.5", r.on ? accentText : "text-muted-foreground")}>
                      <span>{r.name}</span>
                      {r.on && <span className={cn("size-1.5 rounded-full", accent)} />}
                    </div>
                    {r.open && (
                      <div className="space-y-2 bg-surface-raised/70 px-3 py-2.5">
                        {SETTINGS[mode].map((s) => (
                          <div key={s.label} className="space-y-1">
                            <div className="flex justify-between text-[11px] text-muted-foreground">
                              <span>{s.label}</span>
                              <span className="text-foreground">{s.value}</span>
                            </div>
                            <div className="h-1 rounded-full bg-muted">
                              <div className={cn("h-full rounded-full", accent)} style={{ width: `${s.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* arraylist HUD */}
        <div className="hidden min-w-40 flex-col items-end gap-0.5 lg:flex">
          <span className="mb-1 font-display text-2xl italic">
            ivy <span className="font-mono text-[10px] not-italic text-muted-foreground">{mode === "ghost" ? "1.21.11" : "1.8.9"}</span>
          </span>
          {[...enabled].sort((a, b) => b.length - a.length).map((n) => (
            <span key={n} className="flex items-center gap-2 bg-background/70 py-0.5 pl-2 font-mono text-xs">
              {n}
              <span className={cn("h-4 w-0.5", accent)} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
