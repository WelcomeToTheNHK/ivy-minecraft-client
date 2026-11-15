import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="Ivy home">
      <span className="font-display text-3xl leading-none tracking-tight text-gradient-ivy">ivy</span>
    </Link>
  );
}
