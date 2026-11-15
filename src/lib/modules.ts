export type Mode = "ghost" | "blatant";
export type Version = "1.8.9" | "1.21.11";
export type Category = "Combat" | "Movement" | "Player" | "World" | "Render";

export interface Module {
  name: string;
  mode: Mode;
  category: Category;
  versions: Version[];
  description: string;
}

export const VERSIONS: Version[] = ["1.21.11", "1.8.9"];
export const CATEGORIES: Category[] = ["Combat", "Movement", "Player", "World", "Render"];

const both: Version[] = ["1.8.9", "1.21.11"];
const modern: Version[] = ["1.21.11"];
const legacy: Version[] = ["1.8.9"];

export const MODULES: Module[] = [
  // Ghost — combat
  { name: "Aim Assist", mode: "ghost", category: "Combat", versions: both, description: "Smooth, human-like aim correction toward your target." },
  { name: "Silent Aim", mode: "ghost", category: "Combat", versions: both, description: "Lands hits off-crosshair while your camera stays yours." },
  { name: "Auto Clicker", mode: "ghost", category: "Combat", versions: both, description: "Randomised CPS with jitter, butterfly and drag profiles." },
  { name: "Triggerbot", mode: "ghost", category: "Combat", versions: both, description: "Swings the instant your crosshair is on a valid target." },
  { name: "Reach", mode: "ghost", category: "Combat", versions: both, description: "A subtle, configurable range extension that stays under flags." },
  { name: "Velocity", mode: "ghost", category: "Combat", versions: both, description: "Reduce knockback by a believable, randomised percentage." },
  { name: "Hit Select", mode: "ghost", category: "Combat", versions: both, description: "Only commits hits that win the trade." },
  { name: "W-Tap", mode: "ghost", category: "Combat", versions: both, description: "Perfectly timed sprint resets for maximum knockback." },
  { name: "Backtrack", mode: "ghost", category: "Combat", versions: both, description: "Hit where your opponent was a few ticks ago." },
  { name: "Hitboxes", mode: "ghost", category: "Combat", versions: both, description: "Slightly expanded hitboxes that look clean on replay." },
  { name: "Block Hit", mode: "ghost", category: "Combat", versions: legacy, description: "Automatic sword-blocking between swings." },
  { name: "Auto Shield Break", mode: "ghost", category: "Combat", versions: modern, description: "Swaps to your axe the moment a shield goes up." },
  { name: "Anchor Macro", mode: "ghost", category: "Combat", versions: modern, description: "Place, charge and detonate anchors in one key." },
  { name: "Crystal Optimizer", mode: "ghost", category: "Combat", versions: modern, description: "Removes client-side crystal delay for faster pops." },
  { name: "Mace Swap", mode: "ghost", category: "Combat", versions: modern, description: "Breach-swaps to mace mid-fall for full-damage smashes." },
  // Ghost — player / world
  { name: "Auto Totem", mode: "ghost", category: "Player", versions: modern, description: "Re-totems your offhand with human reaction delay." },
  { name: "Right Clicker", mode: "ghost", category: "Player", versions: both, description: "Consistent right-click CPS for bridging and blocks." },
  { name: "Throw Pot", mode: "ghost", category: "Player", versions: both, description: "Swap, look down, throw, swap back. One keypress." },
  { name: "Fast Place", mode: "ghost", category: "World", versions: both, description: "Removes the vanilla block placement delay." },
  { name: "Bridge Assist", mode: "ghost", category: "World", versions: both, description: "Auto-sneaks at the edge for clean speed bridging." },
  { name: "Safe Walk", mode: "ghost", category: "Movement", versions: both, description: "Never walk off a ledge again." },
  { name: "Sprint", mode: "ghost", category: "Movement", versions: both, description: "Toggle sprint with omni-directional support." },
  // Ghost — render
  { name: "ESP", mode: "ghost", category: "Render", versions: both, description: "Box, outline and glow ESP for players and mobs." },
  { name: "Nametags", mode: "ghost", category: "Render", versions: both, description: "Health, armor and ping at any distance." },
  { name: "Freelook", mode: "ghost", category: "Render", versions: both, description: "Look around without changing your direction." },
  { name: "Storage ESP", mode: "ghost", category: "Render", versions: modern, description: "Highlights chests, shulkers and barrels through walls." },

  // Blatant — combat
  { name: "Kill Aura", mode: "blatant", category: "Combat", versions: both, description: "Multi, switch and single targeting with rotation modes." },
  { name: "Criticals", mode: "blatant", category: "Combat", versions: both, description: "Every hit lands as a critical." },
  { name: "Auto Crystal", mode: "blatant", category: "Combat", versions: modern, description: "Places and breaks crystals faster than humanly possible." },
  { name: "Target Strafe", mode: "blatant", category: "Combat", versions: both, description: "Circle-strafes your target automatically." },
  { name: "Anti Bot", mode: "blatant", category: "Combat", versions: both, description: "Filters server anticheat bots from targeting." },
  // Blatant — movement
  { name: "Fly", mode: "blatant", category: "Movement", versions: both, description: "Vanilla, motion and server-specific bypass modes." },
  { name: "Speed", mode: "blatant", category: "Movement", versions: both, description: "Bhop, strafe and low-hop modes tuned per server." },
  { name: "Long Jump", mode: "blatant", category: "Movement", versions: both, description: "Clear gaps with damage and bow-boost modes." },
  { name: "No Slow", mode: "blatant", category: "Movement", versions: both, description: "Full speed while eating, blocking or using bows." },
  { name: "Step", mode: "blatant", category: "Movement", versions: both, description: "Walk up full blocks instantly." },
  { name: "Elytra Fly", mode: "blatant", category: "Movement", versions: modern, description: "Controlled, infinite elytra flight." },
  { name: "Timer", mode: "blatant", category: "Movement", versions: both, description: "Speed up or slow down your game tick rate." },
  // Blatant — player / world
  { name: "Scaffold", mode: "blatant", category: "World", versions: both, description: "Tower and bridge with keep-Y and telly modes." },
  { name: "Bed Nuker", mode: "blatant", category: "World", versions: legacy, description: "Breaks beds through walls on Bedwars servers." },
  { name: "Nuker", mode: "blatant", category: "World", versions: modern, description: "Clears every block in range in seconds." },
  { name: "No Fall", mode: "blatant", category: "Player", versions: both, description: "Never take fall damage." },
  { name: "Chest Stealer", mode: "blatant", category: "Player", versions: both, description: "Loots chests instantly with smart item priority." },
  { name: "Inventory Manager", mode: "blatant", category: "Player", versions: both, description: "Auto-sorts hotbar and drops junk while you move." },
  { name: "Auto Armor", mode: "blatant", category: "Player", versions: both, description: "Equips your best armor the moment you pick it up." },
  { name: "Anti Void", mode: "blatant", category: "Player", versions: both, description: "Pulls you back before you fall into the void." },
  { name: "Disabler", mode: "blatant", category: "Player", versions: both, description: "Server-specific anticheat disablers, updated weekly." },
  { name: "Tracers", mode: "blatant", category: "Render", versions: both, description: "Lines to every player on the map." },
];

export function filterModules(
  modules: Module[],
  { mode, version, category }: { mode?: Mode; version?: Version; category?: Category },
) {
  return modules.filter(
    (m) =>
      (!mode || m.mode === mode) &&
      (!version || m.versions.includes(version)) &&
      (!category || m.category === category),
  );
}
