import type { Metadata } from "next";
import { ociUpgrades } from "@/lib/data";

export const metadata: Metadata = {
  title: "O.C.I. Ship Upgrades — TCRN Impetus Systems",
  description: "Complete MENACE O.C.I. upgrades guide: Electronics (intel), Weapons (orbital strikes), Hull (sustainability). Best upgrade path and faction-specific variants.",
};

export default function OCIUpgradesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        O.C.I. <span className="text-accent">Upgrades</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Upgrade the TCRN Impetus with O.C.I. (Orbital Command Interface) components. Three upgrade
        trees — Electronics, Weapons, and Hull — each dramatically affecting your campaign strategy.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>What should I upgrade first?</summary>
          <p>Electronics absolutely first. Knowing enemy composition before deploying is game-changing — you can tailor your squad loadout to counter specific threats. Intel reveals enemy types, positions, and sometimes weak points.</p>
        </details>
        <details>
          <summary>Are faction-specific O.C.I. upgrades worth it?</summary>
          <p>Yes — they cost more components but provide significantly stronger effects. Zayn-Beecher upgrades offer economic bonuses. DICE upgrades provide superior intel. The Backbone upgrades enhance combat capabilities. Worth waiting for if you&apos;re committed to a faction path.</p>
        </details>
        <details>
          <summary>How do orbital strikes work?</summary>
          <p>Unlocked through Weapons O.C.I. They don&apos;t cost AP and have limited uses per mission. However, they take a full turn to arrive — enemies see the target zone and will try to escape. Suppress enemies in the zone to prevent escape.</p>
        </details>
      </div>

      <div className="space-y-6">
        {ociUpgrades.map((cat, i) => (
          <div key={i} className="p-6 rounded-xl border border-border bg-surface">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold font-heading">
                <span className="text-accent">0{i + 1}</span> {cat.category}
              </h2>
              <span className="text-xs px-3 py-1 rounded bg-accent/10 text-accent font-mono">{cat.priority}</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">{cat.description}</p>
            <h3 className="text-xs font-semibold text-accent-secondary mb-2">Available Upgrades:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.upgrades.map((upg, j) => (
                <div key={j} className="p-3 rounded-lg bg-surface-hover flex items-start gap-2">
                  <span className="text-accent text-xs mt-0.5">&rarr;</span>
                  <span className="text-xs text-text-muted">{upg}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-2">
          <span className="text-accent">&#9878;</span> Optimal Upgrade Path
        </h2>
        <div className="space-y-3 text-sm text-text-muted mt-3">
          <div className="flex gap-3">
            <span className="text-accent font-bold font-mono">1.</span>
            <p>Electronics: Basic Scanner → Advanced Scanner. Mission intel is the most impactful upgrade in the game. Do this before any other O.C.I. investment.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold font-mono">2.</span>
            <p>Hull: Medical Bay. Healing between missions in an operation keeps your best squads healthy across multiple fights.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold font-mono">3.</span>
            <p>Weapons: Orbital Rocket. Your first orbital strike option. Use on priority targets or to clear clustered enemies.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold font-mono">4.</span>
            <p>Electronics: Tactical Network. Full enemy deployment map with weak point analysis. Game-changing for hard missions.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold font-mono">5+</span>
            <p>Branch out based on faction alignment. Faction-specific upgrades offer the best value for committed campaigns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
