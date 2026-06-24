import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Market Guide — Trading & Economy",
  description: "Complete MENACE Black Market guide: how bartering works, best items to buy, inventory refresh mechanics, squad leader recruitment, and economic strategy.",
};

export default function BlackMarketPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Black <span className="text-accent">Market</span> Guide
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        The Black Market is your primary source of weapons, armor, vehicles, and recruits. Master
        the barter system to build an unstoppable strike force.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>How does the barter system work?</summary>
          <p>MENACE uses a barter economy — no currency. Each item has a Trade Value. To purchase, offer items matching or exceeding the target&apos;s value. Excess value is lost (no change given). Jean Sy&apos;s Economics perk provides a 15% discount on all purchases.</p>
        </details>
        <details>
          <summary>When does the Black Market refresh?</summary>
          <p>Inventory refreshes after every completed operation. Always check the market between operations — rare items appear randomly and won&apos;t wait. Recruitment Drive items (manpower replenishment) restock every refresh and should be purchased regularly.</p>
        </details>
        <details>
          <summary>What are the best items to buy?</summary>
          <p>Priority order: 1) Squad Leader recruitment files (permanent roster expansion), 2) Manpower replenishment items (sustain your forces), 3) Premium weapons (R228A1 MRS, BR6A1 HaMER), 4) Vehicles for squad support, 5) Armor upgrades for survivability.</p>
        </details>
      </div>

      <div className="space-y-6">
        <section className="p-5 rounded-xl border border-border bg-surface">
          <h2 className="text-lg font-bold font-heading mb-3"><span className="text-accent">01</span> Market Mechanics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-muted">
            <div>
              <h3 className="font-semibold text-accent-secondary mb-2">Barter System</h3>
              <p className="leading-relaxed">Trade items by matching Trade Value. Your offered items&apos; total value must ≥ the target item&apos;s value. There is no change — overpaying wastes resources. Use cheap throwaway items (scrap weapons, basic armor) to balance out trade values precisely.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-secondary mb-2">Inventory Refresh</h3>
              <p className="leading-relaxed">The market resets its inventory after each operation completion. Items are randomly generated with rarity tiers. Some items (Recruitment Drive, basic ammo) always appear. Premium items appear less frequently — buy them when you see them.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-secondary mb-2">Jean Sy&apos;s Discount</h3>
              <p className="leading-relaxed">Recruiting Jean Sy provides a permanent 15% discount on all Black Market purchases. Over a full campaign, this saves thousands in trade value. Even if you never deploy Sy in combat, his economic value alone justifies recruitment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-secondary mb-2">Item Categories</h3>
              <p className="leading-relaxed">The market sells: Squad Leader files, weapons (all types), armor and accessories, vehicles, ammo, explosives, drugs/meds, drones, and miscellaneous gear. Each category has its own rarity distribution and price range.</p>
            </div>
          </div>
        </section>

        <section className="p-5 rounded-xl border border-border bg-surface">
          <h2 className="text-lg font-bold font-heading mb-3"><span className="text-accent">02</span> Buying Priority</h2>
          <div className="space-y-3">
            {[
              { title: "S-Tier Priority: Squad Leader Files", desc: "New leaders expand your roster, enable rotation, and prevent Fatigue. Always buy leader files when available. Even lower-tier leaders provide value through faction access or unique perks." },
              { title: "A-Tier Priority: Manpower Items", desc: "Recruitment Drive and similar items replenish your troop pool. Running out of manpower means under-strength squads. Buy these every refresh to maintain a healthy reserve." },
              { title: "B-Tier Priority: Premium Weapons", desc: "R228A1 MRS, BR6A1 HaMER, MP11A2 HIG Oktagon, SR41 KASS — these weapons dramatically increase squad effectiveness. Buy when you can afford them." },
              { title: "C-Tier Priority: Vehicles", desc: "Vehicles are powerful but expensive in both trade value and supply cost. Start with a cheap Pirate Truck or A-ATV. Upgrade to Battle Tank or Medium Walker in the late game." },
              { title: "D-Tier Priority: Armor & Accessories", desc: "Armor provides survivability but is less impactful than better weapons. Upgrade armor after securing your weapon loadout. SAPP Operator and Marine Infantry Body Armor are the best value picks." },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-surface-hover">
                <h3 className="text-sm font-semibold text-accent">{item.title}</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-5 rounded-xl border border-border bg-surface">
          <h2 className="text-lg font-bold font-heading mb-3"><span className="text-accent">03</span> Selling Strategy</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            You acquire loot from missions — captured enemy weapons, scavenged armor, and miscellaneous items.
            Sell items you won&apos;t use to fund purchases. Prioritize selling:
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex gap-2"><span className="text-accent">&#10003;</span> Duplicate weapons and armor you already have better versions of</li>
            <li className="flex gap-2"><span className="text-accent">&#10003;</span> Pirate weapons — high trade value but unreliable in combat</li>
            <li className="flex gap-2"><span className="text-accent">&#10003;</span> Drugs and consumables you won&apos;t use (keep Haemocetan and Travodin)</li>
            <li className="flex gap-2"><span className="text-accent">&#10003;</span> Captured enemy vehicles you don&apos;t need — good trade value</li>
            <li className="flex gap-2"><span className="text-red-400">&#10007;</span> Never sell: Squad Leader recruitment files, manpower items, premium ammo</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
