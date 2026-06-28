export const metadata = {
  title: "MENACE Squad Tier List — Best Squads (2026)",
  description: "Complete squad tier list for MENACE. Best squad compositions, S-tier squads, and unit synergy guide.",
};

export default function SquadTierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">MENACE Squad Tier List</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Best Squad Compositions</h2>
            <p className="text-gray-300 leading-relaxed">MENACE rewards coordinated squad synergies over individual unit strength. The strongest compositions pair a high-mobility striker with a support unit that amplifies burst damage. The meta consistently favors aggressive, fast-kill compositions over sustained-attrition builds due to the escalating difficulty of prolonged engagements.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">S-Tier Synergies</h2>
            <p className="text-gray-300 leading-relaxed">Tank + Artillery: Tank draws aggression while Artillery destroys high-value targets from range. Assault + Medic: Assault rushes objectives while Medic sustains them through focused fire. Sniper + Spotter: Spotter reveals hidden enemies and boosts Sniper critical hit chance by 25%.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Squad Counter-Picks</h2>
            <p className="text-gray-300 leading-relaxed">Knowing when to switch compositions is as important as having a strong base squad. Heavy Armor enemies counter piercing-damage compositions — switch to explosive damage. Stealth enemies counter ranged squads — bring detection units. Flying enemies counter ground-only units — include at least one anti-air capable unit.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Upgrade Priority</h2>
            <p className="text-gray-300 leading-relaxed">Upgrade your primary striker unit to max before investing in support units. Support units have diminishing returns at higher upgrade tiers, while strikers scale multiplicatively with upgrades. Once your striker is maxed, upgrade the Medic next for survivability in longer engagements.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-green-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about best squad compositions in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">MENACE rewards coordinated squad synergies over individual unit strength. The strongest compositions pair a high-mobility striker with a support unit that amplifies burst damage. The meta consistently...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier synergies in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">Tank + Artillery: Tank draws aggression while Artillery destroys high-value targets from range. Assault + Medic: Assault rushes objectives while Medic sustains them through focused fire. Sniper + Spot...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about squad counter-picks in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">Knowing when to switch compositions is as important as having a strong base squad. Heavy Armor enemies counter piercing-damage compositions — switch to explosive damage. Stealth enemies counter ranged...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
