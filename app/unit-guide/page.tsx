import Link from "next/link";

export const metadata = {
  title: "MENACE Unit Guide — All Units Ranked, Stats & Best Loadouts | MENACE Guide",
  description: "Complete MENACE unit guide with stats, tier rankings, best loadouts, and tactical roles for every unit in the game. Build the optimal squad.",
};

const units = [
  { unit: "Heavy Gunner", tier: "S", hp: "2800", armor: "High (120)", damage: "180 DPS", range: "Medium (8 tiles)", movement: "Slow (3 tiles)", role: "Tank + Suppression", loadout: "Autocannon, Reactive Armor, Suppression Module" },
  { unit: "Marksman", tier: "S", hp: "1800", armor: "Low (40)", damage: "250 DPS", range: "Long (14 tiles)", movement: "Medium (5 tiles)", role: "Single-target DPS", loadout: "Sniper Rifle, Targeting Scope, AP Rounds" },
  { unit: "Combat Medic", tier: "A", hp: "2000", armor: "Medium (60)", damage: "80 DPS", range: "Medium (6 tiles)", movement: "Medium (5 tiles)", role: "Healer + Buffer", loadout: "Medkit Launcher, Field Repair Kit, Stimulant Injector" },
  { unit: "Scout", tier: "A", hp: "1400", armor: "Low (30)", damage: "100 DPS", range: "Medium (10 tiles)", movement: "Fast (7 tiles)", role: "Recon + Flanking", loadout: "SMG, Stealth Generator, Recon Drone" },
  { unit: "Demolitionist", tier: "A", hp: "1600", armor: "Medium (50)", damage: "350 DPS (AoE)", range: "Short (4 tiles)", movement: "Medium (4 tiles)", role: "AoE Burst", loadout: "Grenade Launcher, Blast Armor, Extra Grenades" },
  { unit: "Engineer", tier: "B", hp: "1500", armor: "Medium (50)", damage: "60 DPS", range: "Medium (6 tiles)", movement: "Medium (4 tiles)", role: "Turret Builder + Repair", loadout: "Deployable Turret, Repair Tool, Shield Generator" },
  { unit: "Psionic Operative", tier: "B", hp: "1200", armor: "Low (20)", damage: "200 DPS", range: "Long (12 tiles)", movement: "Medium (5 tiles)", role: "Crowd Control", loadout: "Mind Control Module, EMP Pulse, Psi Amplifier" },
  { unit: "Assault Trooper", tier: "C", hp: "2000", armor: "Medium (60)", damage: "140 DPS", range: "Medium (8 tiles)", movement: "Medium (5 tiles)", role: "Jack of all trades", loadout: "Assault Rifle, Standard Armor, Frag Grenade" },
];

const squadComps = [
  { comp: "Classic Balanced", units: "Heavy Gunner, Marksman, Combat Medic, Scout", strategy: "Tank holds front, Marksman DPS from range, Medic sustains, Scout flanks", bestAgainst: "Standard missions, beginner-friendly" },
  { comp: "Siege Breaker", units: "Heavy Gunner, Demolitionist, Combat Medic, Engineer", strategy: "Gunner suppresses, Demolitionist blows up clusters, Engineer deploys turret for extra firepower", bestAgainst: "Fortified positions, high enemy density" },
  { comp: "Glass Cannon", units: "Marksman, Marksman (dup), Psionic Operative, Scout", strategy: "Double sniper eliminates priority targets before they act, Psionic CCs survivors, Scout spots targets", bestAgainst: "Boss fights, high-value target elimination" },
];

export default function UnitGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">Unit Guide</h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Your squad composition in MENACE determines everything — mission success rate, resource efficiency, and whether you survive the final boss. A squad of four specialists covering each other weaknesses outperforms eight generalists every time. This guide ranks every unit, provides optimal loadouts, and recommends team compositions for every mission type.
      </p>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">All Units Ranked — Stats & Roles</h2>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead><tr><th>Unit</th><th>Tier</th><th>HP</th><th>Armor</th><th>Damage</th><th>Range</th><th>Movement</th><th>Role</th></tr></thead>
          <tbody>{units.map((u, i) => (<tr key={i}><td className="font-display text-accent">{u.unit}</td><td className="text-center font-bold">{u.tier}</td><td className="text-center">{u.hp}</td><td>{u.armor}</td><td>{u.damage}</td><td>{u.range}</td><td>{u.movement}</td><td>{u.role}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Best Loadouts Per Unit</h2>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead><tr><th>Unit</th><th>Recommended Loadout</th><th>Why This Setup</th></tr></thead>
          <tbody>{units.map((u, i) => (<tr key={i}><td className="font-display text-accent">{u.unit}</td><td>{u.loadout}</td><td>{u.unit === "Heavy Gunner" ? "Maximizes suppression uptime and survivability. Reactive Armor reduces repair costs between missions." : u.unit === "Marksman" ? "AP Rounds bypass armor on priority targets. Targeting Scope ensures headshot crits against bosses." : u.unit === "Combat Medic" ? "Stimulant Injector buffs ally damage by 30 percent for 3 turns — turns your DPS into a monster." : u.unit === "Scout" ? "Stealth Generator enables deep flanking without triggering overwatch. Recon Drone reveals enemy positions before engagement." : u.unit === "Demolitionist" ? "Blast Armor prevents self-damage from point-blank grenades. Extra Grenades doubles your AoE output per mission." : u.unit === "Engineer" ? "Deployable Turret adds a fifth squad member worth of DPS. Shield Generator protects the turret from being destroyed." : u.unit === "Psionic Operative" ? "Mind Control turns the strongest enemy into your ally for 2 turns. EMP Pulse disables mechanical enemies (boss adds)." : "Standard loadout is functional but outclassed by specialized units. Upgrade to Heavy Gunner or Marksman ASAP."}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Recommended Squad Compositions</h2>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead><tr><th>Composition</th><th>Units</th><th>Strategy</th><th>Best Against</th></tr></thead>
          <tbody>{squadComps.map((s, i) => (<tr key={i}><td className="font-display text-accent">{s.comp}</td><td>{s.units}</td><td>{s.strategy}</td><td>{s.bestAgainst}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>
      <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-accent text-lg mb-2">What is the best unit for beginners?</h3><p className="text-ink-light">Heavy Gunner. The combination of high HP, strong armor, and suppression capability makes it the most forgiving unit. You can make positioning mistakes and still survive. The suppression mechanic neutralizes enemy threats without needing perfect aim or timing. Build your first squad around a Heavy Gunner core, then add a Marksman and Medic as you unlock more slots.</p></div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-accent text-lg mb-2">How many units should be in my squad?</h3><p className="text-ink-light">Four. The campaign is balanced around 4-unit squads, and spreading resources (upgrades, equipment, weapons) across more than 4 units leaves everyone under-geared. Focus on your core 4: Tank (Heavy Gunner), DPS (Marksman), Support (Combat Medic), and Flex (Scout or Demolitionist based on mission). Keep 2 backup units partially geared for missions where your main squad is injured, but invest 80 percent of your resources into the primary 4.</p></div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-accent text-lg mb-2">Should I mix unit types or stack one?</h3><p className="text-ink-light">Mix. Stacking two Heavy Gunners sounds durable but lacks damage output — you will survive longer but fail DPS checks on timed missions. Stacking two Marksmen sounds deadly but collapses the moment enemies close distance. The optimal squad covers all four combat pillars: Tank (damage absorption), DPS (damage output), Support (sustain + buffs), and Utility (recon/CC/AoE). One of each role outperforms any duplicate stack.</p></div>

      <aside className="border-l-4 border-accent pl-4 mt-10"><h3 className="font-display text-lg text-ink mb-2">Related Guides</h3><ul className="space-y-1"><li><Link href="/faq" className="text-accent hover:underline">FAQ</Link></li><li><Link href="/best-team-comps" className="text-accent hover:underline">Best Team Comps</Link></li><li><Link href="/advanced-tactics" className="text-accent hover:underline">Advanced Tactics</Link></li><li><Link href="/builds" className="text-accent hover:underline">Builds Guide</Link></li></ul></aside>
      <p className="text-ink-faded text-sm mt-10">Last updated: July 2, 2026.</p>
    </div>
  );
}
