export const metadata = {
  title: "MENACE Best Builds — Squad Leader & Unit Combo Setups (2026)",
  description:
    "Best MENACE builds for every faction and mission type. Optimized squad leader + unit combinations, OCI upgrade paths, and vehicle loadouts ranked by performance.",
};

export default function BuildsPage() {
  const squadBuilds = [
    { tier: 'S', leader: 'Kestrel', units: '2x Ranger, 1x Heavy Gunner, 1x Medic', faction: 'Wardens', ociFocus: 'Ranged Damage + Critical Hit', bestFor: 'All mission types — balanced', notes: 'Highest sustained DPS. Rangers handle long-range, Heavy Gunner clears crowds, Medic keeps uptime. Unstoppable in most scenarios.' },
    { tier: 'S', leader: 'Brick', units: '2x Shotgunner, 1x Breacher, 1x Engineer', faction: 'Wardens', ociFocus: 'Armor + Close Combat', bestFor: 'Urban/CQB missions', notes: 'Extreme close-range lethality. Breacher opens paths, Shotgunners delete rooms, Engineer repairs vehicles mid-mission.' },
    { tier: 'A', leader: 'Shrike', units: '2x Scout, 1x Sniper, 1x Spotter', faction: 'Wardens', ociFocus: 'Mobility + Sight Range', bestFor: 'Recon & stealth missions', notes: 'Best scouting build. Spotter reveals enemies through walls, Sniper one-shots priority targets. Weak in direct firefights.' },
    { tier: 'A', leader: 'Warlord', units: '3x Grunt, 1x Heavy Weapons', faction: 'Renegades', ociFocus: 'Suppression + Area Denial', bestFor: 'Defensive/hold missions', notes: 'Massive firepower. Grunts suppress while Heavy Weapons obliterates. Slow but devastating when positioned properly.' },
    { tier: 'A', leader: 'Ghost', units: '2x Infiltrator, 1x Sniper, 1x Saboteur', faction: 'Renegades', ociFocus: 'Stealth + Sabotage', bestFor: 'Assassination/sabotage missions', notes: 'Silent takedowns. Saboteur disables enemy vehicles and turrets. Sniper covers escape. Zero loud weapon capability.' },
    { tier: 'B', leader: 'Doc', units: '1x Medic, 2x Rifleman, 1x Grenadier', faction: 'Wardens', ociFocus: 'Healing + Support', bestFor: 'Long endurance missions', notes: 'Excellent sustain but lower DPS. Medic + Doc double healing keeps squad alive through attrition fights.' },
    { tier: 'B', leader: 'Pyro', units: '2x Flamethrower, 1x Demolitionist, 1x Rifleman', faction: 'Renegades', ociFocus: 'Area Damage + Demolition', bestFor: 'Destroy/clear missions', notes: 'Devastating area damage. Flamethrowers clear buildings, Demolitionist handles objectives. Weak against armored vehicles.' },
    { tier: 'C', leader: 'Rookie', units: '4x Rifleman', faction: 'Any', ociFocus: 'Basic Combat', bestFor: 'Starting/tutorial missions', notes: 'Default squad. Functional for first 3-4 missions but falls off hard. Replace ASAP with any B-tier+ build.' },
  ];

  const ociPaths = [
    { path: 'Sharpshooter', priorityUpgrades: 'Critical Hit Chance → Headshot Damage → Armor Penetration → Reload Speed', bestLeaders: 'Kestrel, Shrike', effect: '+40% critical damage at max level' },
    { path: 'Juggernaut', priorityUpgrades: 'Armor Rating → Health Pool → Damage Resistance → Melee Counter', bestLeaders: 'Brick, Warlord', effect: '+50% effective HP at max level' },
    { path: 'Ghost Protocol', priorityUpgrades: 'Stealth Duration → Silent Takedown Speed → Detection Radius → Movement Speed', bestLeaders: 'Ghost', effect: 'Near-invisible at max stealth' },
    { path: 'Field Commander', priorityUpgrades: 'Squad Accuracy → Morale Boost → Command Range → Reinforcements', bestLeaders: 'Kestrel, Doc', effect: '+25% squad DPS when commanding' },
    { path: 'Demolition Expert', priorityUpgrades: 'Explosive Radius → Grenade Count → Blast Resistance → Fire Damage', bestLeaders: 'Pyro', effect: 'Doubles explosive damage area' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">MENACE Best Builds &amp; Squad Setups</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              In MENACE, your squad composition is the single biggest factor in mission success. The right leader + unit combination can turn an impossible mission into a clean sweep. This guide covers optimized builds for every faction, mission type, and playstyle — from stealth infiltration to full-frontal assault. Each build is ranked by versatility, raw power, and reliability across the campaign.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Squad Build Tier List</h2>
            <p className="text-ink-light mb-4">S-tier builds are universally strong — use them when you need guaranteed results. A-tier builds excel in their niche but have clear weaknesses. B-tier is solid but outclassed. C-tier is starter-only.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th>Tier</th><th>Squad Leader</th><th>Units</th><th>Faction</th><th>Best For</th></tr>
                </thead>
                <tbody>
                  {squadBuilds.map((build) => (
                    <tr key={build.leader + build.faction}>
                      <td><span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${build.tier === 'S' ? 'bg-amber-500/20 text-amber-400' : build.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' : build.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-500/20 text-slate-400'}`}>{build.tier}</span></td>
                      <td className="font-medium">{build.leader}</td>
                      <td className="text-ink-light text-sm">{build.units}</td>
                      <td className="text-ink-faded text-sm">{build.faction}</td>
                      <td className="text-ink-light text-sm">{build.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">OCI Upgrade Paths</h2>
            <p className="text-ink-light mb-4">OCI (Operational Combat Integration) upgrades define your squad leader's role. Choose a path that synergizes with your unit composition — don't mix a stealth leader with heavy units. Prioritize upgrades in the order listed for maximum power curve.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th>Path</th><th>Upgrade Priority</th><th>Best Leaders</th><th>Max Effect</th></tr>
                </thead>
                <tbody>
                  {ociPaths.map((path) => (
                    <tr key={path.path}>
                      <td className="font-medium">{path.path}</td>
                      <td className="text-ink-light text-sm">{path.priorityUpgrades}</td>
                      <td className="text-ink-faded text-sm">{path.bestLeaders}</td>
                      <td className="text-ink-light text-sm">{path.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Build Your Squad</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Step 1 — Choose Your Faction</h3>
            <p className="text-ink-light mb-3">Wardens favor ranged combat, support units, and disciplined tactics. Renegades favor close combat, heavy weapons, and aggressive play. Your faction determines which squad leaders and unit types are available. For beginners, Wardens are more forgiving — their Medic and Ranger units provide safety nets that Renegades lack.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Step 2 — Pick Squad Leader + OCI Path</h3>
            <p className="text-ink-light mb-3">Your squad leader's OCI path should match your intended playstyle. Kestrel (Wardens) with Sharpshooter is the most versatile build in the game — high damage, good range, works on 90% of missions. Ghost (Renegades) with Ghost Protocol is the best for stealth missions but useless in open combat.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Step 3 — Fill Unit Slots</h3>
            <p className="text-ink-light mb-3">A balanced squad has: 1 tank/breacher (draws fire), 2 DPS (primary damage), 1 support (heals or utility). Pure DPS squads like 4x Rifleman melt in sustained fights. Pure tank squads survive forever but can't kill fast enough. Hybrid is almost always better.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Step 4 — Match to Mission Type</h3>
            <p className="text-ink-light">Scout the mission before deploying. Urban/CQB maps favor close-range builds (Brick/Pyro). Open maps favor ranged builds (Kestrel/Shrike). Stealth/sabotage missions require Ghost. Don't bring a sniper-heavy squad to a building-clearing mission — they'll get flanked and overwhelmed.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">What is the best beginner-friendly build?</h3>
                <p className="text-ink-light">Kestrel (Wardens) with Sharpshooter OCI + 2x Ranger, 1x Heavy Gunner, 1x Medic. This S-tier build is forgiving because the Medic heals mistakes, Rangers provide consistent ranged DPS, and Kestrel's Sharpshooter path gives the highest damage ceiling. It works on nearly every mission type and doesn't require perfect positioning to succeed.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Should I invest in vehicles for every build?</h3>
                <p className="text-ink-light">Not necessarily. Vehicles are strong in open-field missions but a liability in urban/CQB maps where they can't maneuver. For Brick or Pyro builds (close combat), invest in an APC for transport and armor. For Kestrel or Shrike builds (ranged), a Light Scout Vehicle for repositioning is enough. Ghost builds should avoid vehicles entirely — they make noise and reveal your position.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Can I switch OCI paths mid-campaign?</h3>
                <p className="text-ink-light">You can respec OCI points at the base between missions, but it costs credits and resets your upgrade progress. It's better to commit to one path early and stick with it. If you really need flexibility, level up two squad leaders on different paths and swap between them based on mission requirements.</p>
              </div>
            </div>
          </section>
          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Build rankings based on current game balance patch.</p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/squad-tier-list" className="text-accent hover:underline">Squad Leader Tier List</a></li>
              <li><a href="/best-team-comps" className="text-accent hover:underline">Best Team Compositions</a></li>
              <li><a href="/oci-upgrades" className="text-accent hover:underline">OCI Upgrades Guide</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat Tactics</a></li>
              <li><a href="/factions" className="text-accent hover:underline">Faction Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
