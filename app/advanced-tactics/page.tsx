export const metadata = {
  title: "MENACE — Advanced Tactics & Combat Maneuvers (2026)",
  description: "Expert MENACE tactics: flanking maneuvers, suppression chains, concealment cycling, OCI upgrade priority, positioning, and orbital strike setups for Commander difficulty.",
};

export default function AdvancedTacticsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">MENACE Advanced Tactics — Expert Combat Maneuvers &amp; OCI Upgrade Priority (2026)</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Once you have mastered the basics of squad management and mission selection, the true depth of MENACE reveals itself in its tactical combat layer. Positioning, flanking angles, suppression timing, and concealment cycling are not optional flourishes — they are mandatory skills for Commander difficulty and above. This guide covers every advanced combat maneuver in the game, paired with an OCI upgrade prioritization framework that matches your playstyle. If you are losing missions that your squad stats suggest you should be winning, the answer is almost always in this document. Tactical execution in MENACE rewards precision over raw firepower.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tactical Maneuver Guide</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Each maneuver below is rated by difficulty to execute, impact when successful, and the risk if failed. S-Tier maneuvers are universally applicable and should become second nature. A-Tier maneuvers require specific squad compositions. B-Tier maneuvers are high-risk, high-reward plays for experienced commanders.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Maneuver</th>
                  <th>Difficulty</th>
                  <th>Impact</th>
                  <th>Risk</th>
                  <th>Best Squad Type</th>
                  <th>Key Mechanic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Suppression Chain</td>
                  <td>Medium</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Low</td>
                  <td>LMG Squad</td>
                  <td>Lock down 2+ enemies in sequence while DPS cleans up</td>
                </tr>
                <tr>
                  <td>Vehicle Flank</td>
                  <td>Medium</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Medium</td>
                  <td>Armored Squad</td>
                  <td>Attack side/rear armor — directional armor penalties are massive</td>
                </tr>
                <tr>
                  <td>Concealment Cycling</td>
                  <td>Hard</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Medium</td>
                  <td>Stealth Squad</td>
                  <td>Attack, smoke, reposition, attack — repeat for infinite stealth</td>
                </tr>
                <tr>
                  <td>Morale Cascade</td>
                  <td>Medium</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Medium</td>
                  <td>Alpha Strike</td>
                  <td>Overwhelm one squad to trigger rout, then chain to adjacent enemies</td>
                </tr>
                <tr>
                  <td>Orbital Strike Trap</td>
                  <td>Hard</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>High</td>
                  <td>Control Squad</td>
                  <td>Suppress enemies in strike zone to prevent escape before impact</td>
                </tr>
                <tr>
                  <td>Bounding Overwatch</td>
                  <td>Easy</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Low</td>
                  <td>Balanced Squad</td>
                  <td>One element moves while the other provides covering fire</td>
                </tr>
                <tr>
                  <td>EMP Ambush</td>
                  <td>Medium</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Medium</td>
                  <td>Anti-Vehicle</td>
                  <td>EMP vehicle weapons, kill crew on dismount, steal the vehicle</td>
                </tr>
                <tr>
                  <td>Smoke Screen Push</td>
                  <td>Easy</td>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Low</td>
                  <td>Assault Squad</td>
                  <td>Advance under smoke cover, breach at point-blank range</td>
                </tr>
                <tr>
                  <td>Crocodile Flank</td>
                  <td>Hard</td>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>High</td>
                  <td>Anti-Materiel</td>
                  <td>AMR Crocodile ignores armor on flank hits — requires perfect positioning</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">OCI Upgrade Priority by Playstyle</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              OCI (Orbital Command Interface) upgrades are the most impactful long-term investments in MENACE. Resources are limited, so prioritization is everything. Use this table to match your upgrade path to your preferred playstyle. Upgrades ranked from highest priority (1) to lowest (6) within each column.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Aggressive (Assault)</th>
                  <th>Stealth (Infiltration)</th>
                  <th>Defensive (Holdout)</th>
                  <th>Balanced (Flex)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Orbital Strike Radius</td>
                  <td>Concealment Efficiency</td>
                  <td>Fortification Strength</td>
                  <td>Squad Size +1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Weapon Damage +15%</td>
                  <td>Sensor Range +30%</td>
                  <td>Armor Plating +20%</td>
                  <td>Authority Generation</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ammo Capacity +2</td>
                  <td>Smoke Duration +1 turn</td>
                  <td>Medic Efficiency +25%</td>
                  <td>Fatigue Recovery Rate</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Faction-specific Weapons</td>
                  <td>Suppressed Movement</td>
                  <td>Turret Deployment</td>
                  <td>Vehicle Bay Expansion</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Vehicle Speed +20%</td>
                  <td>Night Vision Range</td>
                  <td>Repair Speed +30%</td>
                  <td>Black Market Discount</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Explosive Radius +25%</td>
                  <td>Silent Takedown</td>
                  <td>Minefield Deployment</td>
                  <td>Training XP Bonus</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Positioning &amp; Flanking Deep Dive</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Positioning is the single most underrated skill in MENACE. Every unit and vehicle has directional armor — frontal hits deal reduced damage, side hits deal normal damage, and rear hits deal bonus damage. Poorly positioned squads take more damage and deal less. The first rule of positioning: never end a turn with your flank exposed to an enemy firing lane. Use hard cover (buildings, rock formations) to block line of sight on exposed sides. Soft cover (smoke, foliage) reduces hit chance but does not block it outright — do not rely on it.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Flanking is most effective when executed by a fast unit or vehicle while the rest of your squad holds the enemy&apos;s attention. The A-ATV and Light Walker are the best flanking vehicles due to their high speed. Send your flanker on a wide arc — at least 45 degrees off your main firing line. The enemy AI will rotate to face the larger threat (your main force), exposing rear armor to your flanker. Time the flank to arrive on the same turn your main force applies suppression — a suppressed enemy cannot react to the flank and will take maximum damage.
            </p>
            <p className="text-ink-light leading-relaxed text-sm">
              For infantry flanking with Kody Greifinger or Jacques Vamplew, use buildings and elevation to break line of sight during the approach. Recon Drones are invaluable here — they can spot enemies from cover, allowing your flanking squad to plan the approach without exposing themselves. The Guerilla perk (Greifinger) gives bonus AP when attacking from concealment — always fire the opening shot of a flank while concealed. If you lose concealment mid-approach, pop smoke and wait one turn before continuing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">What OCI upgrade should I get first?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  Squad Size +1 is the universally best first OCI upgrade regardless of playstyle. Adding a fifth squad member increases your damage output, survivability, and tactical flexibility by roughly 25% — no other upgrade comes close in raw value per resource spent. After that, specialize based on your playstyle: Orbital Strike Radius for aggressive players, Concealment Efficiency for stealth players, and Fortification Strength for defensive players.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">How do I consistently land flank attacks on vehicles?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  The key is distraction. Position your main force (Battle Tank or APC) directly in front of the enemy vehicle — the AI will always face the largest visible threat. Send a fast vehicle (A-ATV or Light Walker) on a wide flanking arc outside the enemy&apos;s vision cone. Time the arrival for the same turn you apply suppression from the front. A suppressed vehicle cannot rotate its facing, guaranteeing your flank attack lands on rear or side armor. EMP grenades can disable turret rotation entirely.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">Is concealment cycling worth the effort for non-stealth squads?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  No. Concealment cycling requires specific gear (suppressed weapons, camouflage kits, smoke grenades) and squad leaders (Kody Greifinger, Jacques Vamplew) to be effective. For non-stealth squads, the AP cost of re-establishing concealment outweighs the benefits. Non-stealth squads should focus on bounding overwatch and suppression chains instead. Only invest in concealment mechanics if you are committing to a stealth-focused roster.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Tactical maneuvers verified on Commander and Admiral difficulty. OCI upgrade recommendations based on cost-efficiency analysis across all mission types. Unofficial fan guide.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/tactics" className="text-accent hover:underline">Tactics Overview</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat Mechanics</a></li>
              <li><a href="/oci-upgrades" className="text-accent hover:underline">OCI Upgrades Guide</a></li>
              <li><a href="/best-team-comps" className="text-accent hover:underline">Best Team Comps</a></li>
              <li><a href="/squad-leaders" className="text-accent hover:underline">Squad Leaders</a></li>
              <li><a href="/vehicles" className="text-accent hover:underline">Vehicles Guide</a></li>
              <li><a href="/beginners-guide" className="text-accent hover:underline">Beginners Guide</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Never end a turn with flank exposed to enemy fire</li>
              <li>Hard cover blocks line of sight — soft cover only reduces hit chance</li>
              <li>Flanking arc should be 45+ degrees off main firing line</li>
              <li>Suppressed enemies cannot rotate facing — exploit this for free flanks</li>
              <li>Squad Size +1 OCI upgrade is the best first pick for any playstyle</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
