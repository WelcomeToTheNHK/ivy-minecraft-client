import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { DISCORD_URL } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Ghost and Blatant modules for Minecraft 1.21.11 and 1.8.9. One injectable client, one menu.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Client</p>
          <Link to="/pricing" className="block hover:text-primary">Pricing</Link>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="block hover:text-primary">Discord</a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Versions</p>
          <p>1.21.11 · Fabric</p>
          <p>1.8.9 · Forge / Lunar</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Ivy Client. Not affiliated with Mojang Studios or Microsoft.
        </p>
      </div>
    </footer>
  );
}
