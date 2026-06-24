import type { Metadata } from "next";
import { weaponCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Weapons Guide — All Weapon Stats & Comparisons",
  description: "Complete MENACE weapons guide: Assault Rifles, Battle Rifles, SMGs, Sniper Rifles, Machine Guns, Shotguns. Stats, supply costs, trade values, and best weapon recommendations.",
};

export default function WeaponsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Weapons <span className="text-accent">Guide</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Complete weapon stat comparison for MENACE. Every squad weapon with damage, armor penetration,
        suppression, fire rate, supply cost, and trade value. Find the best weapon for each squad leader.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>What&apos;s the best all-around weapon type?</summary>
          <p>Assault Rifles offer the best balance of range, damage, and penetration. The R228A1 MRS is the premium choice. For raw damage, Battle Rifles outperform at the cost of fire rate. SMGs dominate close-quarters but fall off at range.</p>
        </details>
        <details>
          <summary>How does weapon fire rate affect combat?</summary>
          <p>Fire rate determines how many projectiles are fired per attack. Higher fire rate = more suppression applied and more chances to hit. LMGs with 15 fire rate can suppress entire squads in one volley, while Sniper Rifles with 1 fire rate deal massive single-shot damage.</p>
        </details>
        <details>
          <summary>Should I prioritize damage or armor penetration?</summary>
          <p>Against unarmored enemies (Alien Wildlife), prioritize raw damage. Against armored enemies (Rogue Army, The Backbone), armor penetration is more important. Late-game enemies have heavy armor — invest in high-penetration weapons early.</p>
        </details>
      </div>

      {weaponCategories.map((cat) => (
        <section key={cat.name} className="mb-10">
          <h2 className="text-xl font-bold font-heading mb-2">{cat.name}</h2>
          <p className="text-sm text-text-muted mb-4">{cat.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-border text-text-muted text-left">
                  <th className="py-2 pr-3 font-medium">Weapon</th>
                  <th className="py-2 px-2 font-medium">Range</th>
                  <th className="py-2 px-2 font-medium">DMG</th>
                  <th className="py-2 px-2 font-medium">Armor DMG</th>
                  <th className="py-2 px-2 font-medium">Pen</th>
                  <th className="py-2 px-2 font-medium">Supp.</th>
                  <th className="py-2 px-2 font-medium">Rate</th>
                  <th className="py-2 px-2 font-medium">Supply</th>
                  <th className="py-2 px-2 font-medium">Value</th>
                  <th className="py-2 pl-3 font-medium">Tier</th>
                </tr>
              </thead>
              <tbody>
                {cat.weapons.map((w) => (
                  <tr key={w.name} className="border-b border-border/50 hover:bg-surface-hover transition-colors">
                    <td className="py-2.5 pr-3 font-medium text-text">{w.name}</td>
                    <td className="py-2.5 px-2 font-mono">{w.range}</td>
                    <td className="py-2.5 px-2 font-mono text-accent">{w.damage}</td>
                    <td className="py-2.5 px-2 font-mono">{w.armorDamage}</td>
                    <td className="py-2.5 px-2 font-mono text-accent-secondary">{w.armorPen}</td>
                    <td className="py-2.5 px-2 font-mono">{w.suppression}</td>
                    <td className="py-2.5 px-2 font-mono">{w.fireRate}</td>
                    <td className="py-2.5 px-2 font-mono">{w.supplyCost}</td>
                    <td className="py-2.5 px-2 font-mono">{w.tradeValue}</td>
                    <td className="py-2.5 pl-3">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        w.tier === "Premium" ? "bg-accent/10 text-accent" :
                        w.tier === "Advanced" ? "bg-accent-secondary/10 text-accent-secondary" :
                        "bg-surface-hover text-text-muted"
                      }`}>{w.tier}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
