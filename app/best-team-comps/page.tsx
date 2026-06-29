export const metadata = {
  title: "MENACE — Best Team Compositions (2026)",
  description: "Best MENACE team comps ranked S to B tier. Squad leader synergy matrix, unit combos, faction pairings, and vehicle picks for every mission type.",
};

export default function BestTeamCompsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">MENACE Best Team Compositions — Squad Leader &amp; Unit Combos Ranked (2026)</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Building the right team composition in MENACE is the difference between a flawless operation and a squad wipe. With 11 unique squad leaders, seven factions, and dozens of unit archetypes, the combination space is enormous. This guide ranks every viable team comp from S-Tier (dominant in all mission types) to B-Tier (situationally powerful), and includes a comprehensive synergy matrix that shows which squad leaders pair best together. Whether you are running a stealth infiltration or a full-scale armored assault, you will find the optimal lineup here. All rankings are based on the latest Early Access patch and extensive community testing at Commander difficulty and above.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Team Composition Tier List</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Each comp is rated by mission versatility, damage output, survivability, and synergy potential. S-Tier comps can handle any mission type without significant roster changes. A-Tier comps excel in specific roles but have minor weaknesses. B-Tier comps are strong in the right hands but require careful execution.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Comp Name</th>
                  <th>Squad Leader</th>
                  <th>Core Units</th>
                  <th>Vehicle</th>
                  <th>Best Mission Types</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Precision Overwatch</td>
                  <td>Jane Darby</td>
                  <td>2x Marksman, 1x Spotter, 1x Medic</td>
                  <td>Light Walker</td>
                  <td>Assault, Defense, Hive Destruction</td>
                </tr>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Ghost Recon</td>
                  <td>Kody Greifinger</td>
                  <td>2x Scout, 1x Sapper, 1x Spotter</td>
                  <td>A-ATV</td>
                  <td>Infiltration, DICE, Recon</td>
                </tr>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Boss Slayer</td>
                  <td>J.G. Wetteroth</td>
                  <td>1x Heavy Gunner, 1x Sniper, 1x Engineer</td>
                  <td>Battle Tank</td>
                  <td>MENACE, Hive Destruction</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Suppression Grid</td>
                  <td>Edwin Pike</td>
                  <td>2x LMG Gunner, 1x Grenadier, 1x Medic</td>
                  <td>APC</td>
                  <td>Assault, Defense, Escort</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Iron Wall</td>
                  <td>Tekko&apos;Beo Phosa</td>
                  <td>2x Shieldbearer, 1x Engineer, 1x Medic</td>
                  <td>Battle Tank</td>
                  <td>Defense, Escort, Holdout</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Adaptive Strike</td>
                  <td>Charles Lim</td>
                  <td>1x Marksman, 1x LMG, 1x Demolitionist</td>
                  <td>IFV</td>
                  <td>All-round</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Scalpel Squad</td>
                  <td>Jacques Vamplew</td>
                  <td>2x Assault, 1x Spotter, 1x Medic</td>
                  <td>Armored Car</td>
                  <td>Assault, Raid, Infiltration</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>No Mercy Blitz</td>
                  <td>Fedor Yazhov</td>
                  <td>2x Flamethrower, 1x Assault, 1x Sapper</td>
                  <td>Flamethrower Tank</td>
                  <td>Assault, MENACE</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Budget Operators</td>
                  <td>Jean Sy</td>
                  <td>2x Rifleman, 1x Engineer, 1x Medic</td>
                  <td>Technical</td>
                  <td>Alien Wildlife, Training</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Faction Purist</td>
                  <td>Faction-locked Leader</td>
                  <td>4x Same-faction units</td>
                  <td>Faction Vehicle</td>
                  <td>Faction bonus missions</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Squad Leader Synergy Matrix</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Not all squad leaders work well together. Some pairings create devastating combos, while others overlap uselessly. This matrix shows the synergy strength between every pair of squad leaders. Green cells indicate strong synergy — the leaders&apos; perks and abilities compound. Yellow cells indicate neutral synergy — they work fine but do not amplify each other. Red cells indicate anti-synergy — their playstyles clash or their perks cancel out. Use this matrix when planning multi-squad operations.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Leader Pair</th>
                  <th>Synergy Rating</th>
                  <th>Combo Name</th>
                  <th>Key Interaction</th>
                  <th>Recommended For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane Darby + Edwin Pike</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Pin &amp; Eliminate</td>
                  <td>Pike suppresses, Darby executes. Guaranteed kill chain on any target.</td>
                  <td>Assault, Boss fights, Defense</td>
                </tr>
                <tr>
                  <td>Jane Darby + Kody Greifinger</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Double Agent</td>
                  <td>Darby holds the line while Greifinger flanks. Perfect for split-objective missions.</td>
                  <td>Infiltration, Multi-objective</td>
                </tr>
                <tr>
                  <td>Edwin Pike + Fedor Yazhov</td>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Suppression Engine</td>
                  <td>Pike suppresses targets. Yazhov&apos;s No Mercy deals 50% bonus damage on suppressed enemies.</td>
                  <td>Assault, MENACE, Hive Destruction</td>
                </tr>
                <tr>
                  <td>Tekko&apos;Beo Phosa + Charles Lim</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Unbreakable Line</td>
                  <td>Phosa tanks damage while Lim&apos;s squad provides adaptive fire support. Excellent sustain.</td>
                  <td>Defense, Escort, Holdout</td>
                </tr>
                <tr>
                  <td>J.G. Wetteroth + Edwin Pike</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Big Game Hunters</td>
                  <td>Pike strips armor with suppression. Wetteroth ignores armor on large targets.</td>
                  <td>Boss encounters, MENACE</td>
                </tr>
                <tr>
                  <td>Kody Greifinger + Jacques Vamplew</td>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Ghost Cell</td>
                  <td>Dual stealth approach. Greifinger flanks, Vamplew holds concealment. Never detected.</td>
                  <td>Infiltration, DICE, Recon</td>
                </tr>
                <tr>
                  <td>Jane Darby + Jean Sy</td>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Elite &amp; Conscript</td>
                  <td>Darby handles priority targets. Sy&apos;s discount units clean up stragglers.</td>
                  <td>Budget runs, Multi-wave</td>
                </tr>
                <tr>
                  <td>Fedor Yazhov + Jacques Vamplew</td>
                  <td><span className="text-[#8b5cf6] font-bold">C</span></td>
                  <td>Fire &amp; Shadow</td>
                  <td>Yazhov&apos;s fire nullifies Vamplew&apos;s stealth. Playstyles actively clash.</td>
                  <td>Avoid this pairing</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Build Your Perfect Team Comp</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Start with your mission objective, not your favorite leader. For Assault missions, you need suppression and direct damage. For Infiltration, you need concealment and mobility. For Defense, you need durability and area control. Build around these requirements first, then select a squad leader whose perks complement your chosen units.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              The one-suppression rule is critical: every comp should include at least one unit capable of applying the Suppressed status (LMG Gunner, Sapper, or Edwin Pike). Suppressed enemies have reduced AP and cannot use special abilities, which cascades into easier kills for your entire squad. The one-medic rule is equally important at higher difficulties — losing a veteran unit to bleeding is the fastest way to fall behind in MENACE&apos;s unforgiving campaign.
            </p>
            <p className="text-ink-light leading-relaxed text-sm">
              Vehicle selection should match your comp&apos;s tempo. Fast comps want the A-ATV or Armored Car for rapid repositioning. Slow, durable comps want the Battle Tank or APC for line-holding. Never send a vehicle-heavy comp into an Infiltration mission — the detection penalty will compromise your entire operation before it begins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">What is the single best team composition in MENACE?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  The Precision Overwatch comp with Jane Darby (2x Marksman, 1x Spotter, 1x Medic, Light Walker) is the most versatile and consistently effective team in MENACE. Darby&apos;s elite accuracy and the Light Walker&apos;s mobility allow it to handle every mission type from Assault to Infiltration. For pure boss-killing, swap to J.G. Wetteroth with a Heavy Gunner and Sniper.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">Can I run multiple squads of the same archetype?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  Yes, and it is often optimal. Running two Precision Overwatch squads lets you cover twice the ground on large maps. However, watch your Authority costs — duplicate high-tier leaders require significant investment. The Fatigue system also penalizes identical squad deployments, so rotate your comps across missions. A mix of one S-Tier comp and one A-Tier comp is more sustainable than two identical S-Tier squads.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">Which team comp is best for campaign completion on Commander difficulty?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  A rotation of Ghost Recon (Kody Greifinger) for Infiltration/DICE missions and Boss Slayer (J.G. Wetteroth) for boss encounters covers every mission type in the campaign. Add a Suppression Grid (Edwin Pike) squad for Defense and Escort missions. This three-comp roster handles 100% of campaign objectives while keeping Fatigue manageable through rotation.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Based on MENACE Early Access 1.0 patch. Team compositions tested on Commander and Admiral difficulty. Fan guide — not affiliated with Overhype Studios or Hooded Horse.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/squad-leaders" className="text-accent hover:underline">Squad Leaders Tier List</a></li>
              <li><a href="/squad-tier-list" className="text-accent hover:underline">Squad Tier List</a></li>
              <li><a href="/factions" className="text-accent hover:underline">Factions Overview</a></li>
              <li><a href="/vehicles" className="text-accent hover:underline">Vehicles Guide</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat Mechanics</a></li>
              <li><a href="/tactics" className="text-accent hover:underline">Advanced Tactics</a></li>
              <li><a href="/oci-upgrades" className="text-accent hover:underline">OCI Upgrades</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Always bring one suppression unit per squad</li>
              <li>One medic per squad is mandatory above Normal difficulty</li>
              <li>Match vehicle selection to mission type, not squad preference</li>
              <li>Rotate comps every 2 missions to avoid Fatigue penalties</li>
              <li>S-Tier comps cost more Authority to maintain — budget accordingly</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
