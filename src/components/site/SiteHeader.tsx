import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Modules" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="glass" size="sm" className="hidden sm:inline-flex">
            <Link to="/features">Explore</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/pricing">Buy now</Link>
          </Button>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-border py-2 md:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            className="text-xs font-medium text-muted-foreground data-[status=active]:text-foreground"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
