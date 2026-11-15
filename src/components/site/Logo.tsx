import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2" aria-label="Ivy home">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-ivy text-primary-foreground shadow-glow transition-transform group-hover:rotate-[-8deg]">
        <Sprout className="size-4.5" strokeWidth={2.5} />
      </span>
      <span className="font-display text-3xl leading-none tracking-tight">ivy</span>
    </Link>
  );
}
