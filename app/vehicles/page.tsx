import type { Metadata } from "next";
import { vehicles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vehicles Guide — Tanks, Mechs & Walkers",
  description: "Complete MENACE vehicles guide: stats, armor, weapon slots, and best loadouts for all tanks, APCs, and mechs. Pirate Truck to Battle Tank comparison.",
};

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Vehicles <span className="text-accent">Guide</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Every vehicle in MENACE: tanks, APCs, mechs, and walkers. Complete stat breakdown with armor
        ratings per facing, HP, weapon slots, supply costs, and strategic recommendations.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>What&apos;s the best starter vehicle?</summary>
          <p>The Pirate Truck is the cheapest vehicle at 35 trade value and 40 supply cost. It has modular weapon mounts that accept a medium and two light weapons — excellent for learning vehicle combat. The A-ATV (70 trade value) is a solid upgrade with better armor.</p>
        </details>
        <details>
          <summary>How does directional armor work on vehicles?</summary>
          <p>Vehicles have separate armor ratings for front, side, and rear facings. Front armor is strongest — always face enemies. Use X key to rotate in place. Reverse movement keeps front armor facing threats. Flank enemy vehicles to hit weaker side/rear armor.</p>
        </details>
        <details>
          <summary>Mechs vs Tanks — which is better?</summary>
          <p>Tanks have superior frontal armor and HP. Mechs have uniform armor on all facings (no weak sides) and better mobility. Tanks excel at holding lines; mechs excel at flanking and repositioning. Use both — tanks as anchors, mechs as strikers.</p>
        </details>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {vehicles.map((v) => (
          <div
            key={v.name}
            className="p-5 rounded-xl border border-border bg-surface"
            style={{ borderLeftWidth: "3px", borderLeftColor: v.color }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold font-heading text-sm">{v.name}</h2>
              <span className="text-xs text-text-muted font-mono">{v.type}</span>
            </div>
            <p className="text-xs text-text-muted mb-4 leading-relaxed">{v.description}</p>

            <div className="grid grid-cols-2 gap-y-2 text-xs mb-4">
              <div><span className="text-text-muted">HP:</span> <span className="font-mono text-accent">{v.hp}</span></div>
              <div><span className="text-text-muted">Armor Durability:</span> <span className="font-mono">{v.armorDurability}</span></div>
            </div>

            <div className="mb-4">
              <div className="text-xs text-text-muted mb-1">Directional Armor</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 rounded bg-surface-hover text-center">
                  <div className="text-text-muted">Front</div>
                  <div className="font-mono text-accent font-bold">{v.frontArmor}</div>
                </div>
                <div className="p-2 rounded bg-surface-hover text-center">
                  <div className="text-text-muted">Side</div>
                  <div className="font-mono text-accent-secondary">{v.sideArmor}</div>
                </div>
                <div className="p-2 rounded bg-surface-hover text-center">
                  <div className="text-text-muted">Rear</div>
                  <div className="font-mono text-red-400">{v.rearArmor}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-text-muted">
              <div>Weapon Slots: <span className="text-text">{v.weaponSlots}</span></div>
              <div>Accessories: <span className="text-text">{v.accessorySlots}</span></div>
              <div>Supply Cost: <span className="font-mono text-accent">{v.supplyCost}</span></div>
              <div>Trade Value: <span className="font-mono">{v.tradeValue}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
