import Link from "next/link";

export const metadata = {
  title: "MENACE Unit Guide — All Units Ranked, Stats & Best Loadouts",
  description: "Complete unit guide with stats, rankings, best loadouts, and tactical roles.",
};

const unitStats = [
  { unit: "Assault Marine", hp: "200 HP", armor: "80 Armor", damage: "45", range: "6", movement: "4", role: "Frontline DPS" },
  { unit: "Heavy Gunner", hp: "250 HP", armor: "120 Armor", damage: "65", range: "4", movement: "2", role: "Tank / Suppression" },
  { unit: "Scout Sniper", hp: "120 HP", armor: "40 Armor", damage: "90", range: "10", movement: "3", role: "Long-Range Eliminator" },
  { unit: "Field Medic", hp: "150 HP", armor: "50 Armor", damage: "20", range: "3", movement: "4", role: "Healer / Support" },
  { unit: "Tech Engineer", hp: "160 HP", armor: "60 Armor", damage: "30", range: "5", movement: "3", role: "Turret Builder / Repair" },
  { unit: "Ghost Operative", hp: "100 HP", armor: "30 Armor", damage: "75", range: "3", movement: "6", role: "Flanker / Assassin" },
  { unit: "Juggernaut", hp: "400 HP", armor: "200 Armor", damage: "55", range: "2", movement: "2", role: "Bulwark / Aggro Magnet" },
  { unit: "Psionic Adept", hp: "130 HP", armor: "35 Armor", damage: "50", range: "7", movement: "3", role: "Caster / Crowd Control" },
  { unit: "Demolitionist", hp: "170 HP", armor: "55 Armor", damage: "80", range: "5", movement: "3", role: "AoE Burst / Structure Breaker" },
  { unit: "Vanguard Captain", hp: "220 HP", armor: "100 Armor", damage: "40", range: "5", movement: "4", role: "Aura Buffer / Hybrid" },
];

const loadouts = [
  { unit: "Assault Marine", weapon: "Twin Assault Rifle Mk.IV", armor: "Reactive Plating", accessory: "Combat Stim Pack", reason: "Maximizes sustained DPS. Stim Pack boosts fire rate by 30% when HP drops below 50%" },
  { unit: "Heavy Gunner", weapon: "Suppression Cannon X9", armor: "Ablative Armor", accessory: "Kinetic Stabilizer", reason: "Cannon applies Suppressed debuff (-2 movement). Stabilizer negates Heavy penalty on overwatch" },
  { unit: "Scout Sniper", weapon: "Longbow Anti-Materiel Rifle", armor: "Phase Cloak", accessory: "Targeting Computer", reason: "Rifle ignores 50% armor. Cloak grants invisibility after 2 turns without attacking" },
  { unit: "Field Medic", weapon: "Nano-Syringe Pistol", armor: "Medical Exosuit", accessory: "Emergency Beacon", reason: "Syringe heals 35 HP per action. Beacon auto-revives one fallen ally per mission" },
  { unit: "Tech Engineer", weapon: "Arc Welder SMG", armor: "Repair Harness", accessory: "Deployable Sentry Mk.II", reason: "Welder repairs 25 armor per action. Sentry provides covering fire (15 damage per turn)" },
  { unit: "Ghost Operative", weapon: "Shadow Blade Gauntlets", armor: "Stealth Weave", accessory: "Adrenal Overdrive", reason: "Blade ignores armor entirely. Overdrive grants an extra action on kill (once per turn)" },
  { unit: "Juggernaut", weapon: "Thunder Fist Maul", armor: "Colossus Plating", accessory: "Taunt Amplifier", reason: "Maul stuns on crit. Amplifier forces all enemies within 4 tiles to target Juggernaut" },
  { unit: "Psionic Adept", weapon: "Mind Rapture Staff", armor: "Psi-Shield Crown", accessory: "Essence Capacitor", reason: "Staff has 30% chance to Mind Control. Capacitor regenerates 1 psi point per turn" },
  { unit: "Demolitionist", weapon: "Cluster Rocket Launcher", armor: "Blast Padding", accessory: "Extra Munitions Pack", reason: "Cluster hits 3 tiles. Munitions Pack adds +1 ammo capacity, enabling back-to-back barrages" },
  { unit: "Vanguard Captain", weapon: "Commander's Battle Rifle", armor: "Tactical Vest Mk.III", accessory: "Inspiration Banner", reason: "Rifle marks targets (+15% damage from all allies). Banner grants +10% damage aura (5 tile range)" },
];

export default function UnitGuidePage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            MENACE Unit Guide
          </h1>
          <p className="text-lg text-ink-light">
            Complete unit guide with stats, rankings, best loadouts, and tactical roles.
            Everything you need to build an unstoppable squad.
          </p>
          <p className="text-sm text-ink-light mt-2">
            Last updated: July 2, 2026
          </p>
        </header>

        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Understanding MENACE Units</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            MENACE features 10 playable unit types, each with distinct stats, roles, and optimal
            loadouts. Units are deployed in squads of 4 (plus 2 reserves), and squad composition
            is the single most important strategic decision you will make. A balanced squad
            typically includes 1 tank, 2 damage dealers, and 1 support unit. However, specialized
            compositions (all-in aggression, defensive turtling, stealth infiltration) are viable
            for specific mission types and difficulty levels.
          </p>
          <p className="text-ink-light leading-relaxed">
            Stats are presented at base values (Level 1, no equipment). All units gain approximately
            15% stat increases per level up to Level 10. Equipment loadouts provide an additional
            20-40% performance increase depending on rarity and synergy. The weapon, armor, and
            accessory slots each contribute to a unit's effective role — mismatched equipment is
            the most common cause of underperforming squads. Below, we detail the optimal loadout
            for each unit based on community testing and win-rate data.
          </p>
        </section>

        {/* Unit Stats Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Unit Stats Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-3 text-ink font-semibold text-sm">Unit</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">HP</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Armor</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Damage</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Range</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Movement</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Role</th>
                </tr>
              </thead>
              <tbody>
                {unitStats.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-3 text-ink font-medium text-sm">{row.unit}</td>
                    <td className="p-3 text-ink-light text-sm">{row.hp}</td>
                    <td className="p-3 text-ink-light text-sm">{row.armor}</td>
                    <td className="p-3 text-accent font-semibold text-sm">{row.damage}</td>
                    <td className="p-3 text-ink-light text-sm">{row.range}</td>
                    <td className="p-3 text-ink-light text-sm">{row.movement}</td>
                    <td className="p-3 text-ink-light text-sm">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Loadouts Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Best Loadout Per Unit</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-3 text-ink font-semibold text-sm">Unit</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Weapon</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Armor</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Accessory</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Synergy</th>
                </tr>
              </thead>
              <tbody>
                {loadouts.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-3 text-ink font-medium text-sm">{row.unit}</td>
                    <td className="p-3 text-accent text-sm">{row.weapon}</td>
                    <td className="p-3 text-ink-light text-sm">{row.armor}</td>
                    <td className="p-3 text-ink-light text-sm">{row.accessory}</td>
                    <td className="p-3 text-ink-light text-xs leading-relaxed">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Squad Building */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Squad Composition Strategy</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            The most successful squad compositions follow a "1-1-2" pattern: one dedicated tank
            (Juggernaut or Heavy Gunner), one support (Field Medic or Tech Engineer), and two
            damage dealers (mix of ranged and melee). The tank draws enemy fire and controls
            space, the support keeps the squad operational, and the damage dealers eliminate
            priority targets. Here are three proven compositions for different playstyles:
          </p>
          <div className="space-y-3">
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Balanced Squad (Recommended for New Players)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Juggernaut + Field Medic + Assault Marine + Scout Sniper. The Juggernaut absorbs
                damage with Taunt Amplifier while the Medic keeps them alive. The Marine provides
                consistent mid-range DPS and the Sniper eliminates high-value targets from safety.
                This composition has no hard counters and performs well on every mission type.
              </p>
            </div>
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Aggressive Squad (Speed Run / Blitz Missions)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Ghost Operative + Demolitionist + Assault Marine + Vanguard Captain. The Captain's
                aura buffs all damage dealers, the Operative flanks and assassinates backline
                targets, the Demolitionist clears grouped enemies, and the Marine cleans up.
                This squad wins fights in 2-3 turns but lacks sustain — do not use on endurance
                missions exceeding 10 turns.
              </p>
            </div>
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Defensive Squad (Endurance / Defense Missions)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Heavy Gunner + Tech Engineer + Scout Sniper + Psionic Adept. The Gunner suppresses
                advancing enemies while the Engineer deploys sentries to lock down approaches.
                The Sniper picks off stragglers and the Adept Mind Controls the strongest enemy,
                effectively adding a 5th unit to your squad. This composition excels at holding
                positions but struggles with timed objectives requiring aggressive movement.
              </p>
            </div>
          </div>
        </section>

        {/* Unit Ranking */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Unit Tier Rankings</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Based on community win-rate data across all difficulty levels (Easy through Insane),
            here is how the units stack up in the current meta:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-parchment-light p-3 rounded-lg border border-ink/10">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-400 w-8 text-center">S</span>
              <span className="text-ink text-sm font-medium">Juggernaut, Scout Sniper</span>
              <span className="text-ink-light text-xs">— Unmatched in their roles. Juggernaut is the best tank by a wide margin; Sniper has the highest reliable DPS at safe range.</span>
            </div>
            <div className="flex items-center gap-3 bg-parchment-light p-3 rounded-lg border border-ink/10">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-green-500/20 text-green-400 w-8 text-center">A</span>
              <span className="text-ink text-sm font-medium">Field Medic, Ghost Operative, Demolitionist</span>
              <span className="text-ink-light text-xs">— Excellent units with clear strengths. Medic is essential for long missions; Operative and Demolitionist are top-tier damage dealers.</span>
            </div>
            <div className="flex items-center gap-3 bg-parchment-light p-3 rounded-lg border border-ink/10">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-400 w-8 text-center">B</span>
              <span className="text-ink text-sm font-medium">Heavy Gunner, Psionic Adept, Vanguard Captain</span>
              <span className="text-ink-light text-xs">— Solid units but outclassed by S/A options in their roles. Gunner is a budget Juggernaut; Adept is inconsistent due to Mind Control RNG.</span>
            </div>
            <div className="flex items-center gap-3 bg-parchment-light p-3 rounded-lg border border-ink/10">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-gray-500/20 text-gray-400 w-8 text-center">C</span>
              <span className="text-ink text-sm font-medium">Assault Marine, Tech Engineer</span>
              <span className="text-ink-light text-xs">— Viable but outclassed. Marine is a generalist that lacks specialization; Engineer's turrets are fragile in late-game missions.</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Best unit for beginners?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Assault Marine is the most beginner-friendly unit. It has balanced stats, straightforward
                play patterns (move, shoot, reposition), and no complex ability management. Its Reactive
                Plating armor provides automatic defense without requiring activation, and the Combat
                Stim Pack triggers passively when HP drops. For your first few missions, run Assault
                Marine alongside a Field Medic and a Juggernaut — this trio covers damage, healing,
                and tanking with minimal mechanical complexity. Once you are comfortable with positioning
                and target priority, graduate to the higher-skill units like Ghost Operative.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">How many units in a squad?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Squads consist of 4 active units deployed on the battlefield, plus 2 reserve units that
                can be swapped in between missions or when an active unit is incapacitated. You can deploy
                fewer than 4 units if desired, but this is never optimal — always bring a full squad of 4.
                Reserve units gain 50% of the experience from missions, so rotate your reserves regularly
                to keep your bench leveled. In missions where you expect casualties (Insane difficulty
                boss fights), bring your two strongest reserves as emergency replacements.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Should I mix unit types?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Yes, mixing unit types is essential. A squad of 4 Assault Marines has no tanking, no
                healing, and no crowd control — it will lose to any mission above Normal difficulty.
                The minimum viable mix is 1 tank + 1 support + 2 damage dealers. For advanced play,
                consider the enemy composition: against armor-heavy enemies, bring Demolitionist (armor
                shred). Against psionic enemies, bring Psionic Adept (psi resistance aura). Against
                swarms, bring Heavy Gunner (suppression). The mission briefing screen shows enemy types
                before you deploy — use this information to tailor your squad composition.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <aside className="border-t border-ink/10 pt-8">
          <h2 className="text-xl font-semibold text-ink mb-4">Related Guides</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-accent hover:underline text-sm">
                MENACE FAQ — Frequently asked questions and answers
              </Link>
            </li>
            <li>
              <Link href="/best-team-comps" className="text-accent hover:underline text-sm">
                Best Team Comps — Top squad compositions for every mission type
              </Link>
            </li>
            <li>
              <Link href="/advanced-tactics" className="text-accent hover:underline text-sm">
                Advanced Tactics — Pro-level strategies and techniques
              </Link>
            </li>
            <li>
              <Link href="/builds" className="text-accent hover:underline text-sm">
                Builds Guide — Character progression and equipment optimization
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
