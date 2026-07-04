import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE — Research Priority Guide (2026)",
  description: "MENACE research priority guide — lab upgrade paths, technology tree unlock order, OCI ship upgrades, and which research to prioritize for every campaign phase.",
};

export default function ResearchPriorityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="text-3xl font-bold text-gray-100 mb-4">MENACE Research Priority Guide — Lab Upgrades &amp; Technology Tree (2026)</h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              Research and technology upgrades are the backbone of campaign progression in MENACE. With limited Authority and research points, choosing the right upgrade path at the right time determines whether your squad survives the early game or gets overwhelmed by escalating alien threats. This guide covers the complete research priority order, laboratory upgrade routes, OCI ship component unlock sequences, and phase-based recommendations for Campaign, Battle, and Horde modes. All priorities are validated against the latest Early Access patch and community speedrun data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Research Tier Priority Order</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The research tree in MENACE is divided into three tiers: Basic (Tier 1), Advanced (Tier 2), and Classified (Tier 3). Each tier unlocks new weapons, armor, squad leader perks, and OCI ship modules. Research points are earned through mission completion, side objectives, and looting MENACE structures. The table below shows the optimal unlock order for a standard Campaign run on Commander difficulty.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
                <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                  <tr>
                    <th className="px-4 py-3 border border-gray-700">Priority</th>
                    <th className="px-4 py-3 border border-gray-700">Research Node</th>
                    <th className="px-4 py-3 border border-gray-700">Tier</th>
                    <th className="px-4 py-3 border border-gray-700">Cost (RP)</th>
                    <th className="px-4 py-3 border border-gray-700">Unlocks</th>
                    <th className="px-4 py-3 border border-gray-700">Phase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-green-400">1</td>
                    <td className="px-4 py-3">Squad Leader Perk Slot II</td>
                    <td className="px-4 py-3">Basic</td>
                    <td className="px-4 py-3">"500"</td>
                    <td className="px-4 py-3">Second perk slot for all leaders</td>
                    <td className="px-4 py-3">Early</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-green-400">2</td>
                    <td className="px-4 py-3">Marksman Rifle Upgrade</td>
                    <td className="px-4 py-3">Basic</td>
                    <td className="px-4 py-3">"750"</td>
                    <td className="px-4 py-3">Marksman rifle damage +15%</td>
                    <td className="px-4 py-3">Early</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-green-400">3</td>
                    <td className="px-4 py-3">OCI Electronics Slot 1</td>
                    <td className="px-4 py-3">Basic</td>
                    <td className="px-4 py-3">"600"</td>
                    <td className="px-4 py-3">First OCI electronics module</td>
                    <td className="px-4 py-3">Early</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-blue-400">4</td>
                    <td className="px-4 py-3">Suppression Tech</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">"1,200"</td>
                    <td className="px-4 py-3">Suppression duration +2 turns</td>
                    <td className="px-4 py-3">Mid</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-blue-400">5</td>
                    <td className="px-4 py-3">Heavy Armor Plating</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">"1,500"</td>
                    <td className="px-4 py-3">Vehicle armor +25%</td>
                    <td className="px-4 py-3">Mid</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-blue-400">6</td>
                    <td className="px-4 py-3">Sniper Rifle Upgrade</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">"1,000"</td>
                    <td className="px-4 py-3">Sniper rifle range +3 tiles</td>
                    <td className="px-4 py-3">Mid</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-purple-400">7</td>
                    <td className="px-4 py-3">OCI Hull Upgrade</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">"1,800"</td>
                    <td className="px-4 py-3">OCI ship hull points +"2,000"</td>
                    <td className="px-4 py-3">Mid</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-red-400">8</td>
                    <td className="px-4 py-3">Classified Weapons</td>
                    <td className="px-4 py-3">Classified</td>
                    <td className="px-4 py-3">"3,000"</td>
                    <td className="px-4 py-3">Alien hybrid weapons</td>
                    <td className="px-4 py-3">Late</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-red-400">9</td>
                    <td className="px-4 py-3">MENACE Hive Scanner</td>
                    <td className="px-4 py-3">Classified</td>
                    <td className="px-4 py-3">"2,500"</td>
                    <td className="px-4 py-3">Reveals all Hive locations</td>
                    <td className="px-4 py-3">Late</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="px-4 py-3 font-bold text-red-400">10</td>
                    <td className="px-4 py-3">Apocalypse Protocol</td>
                    <td className="px-4 py-3">Classified</td>
                    <td className="px-4 py-3">"5,000"</td>
                    <td className="px-4 py-3">Final mission prep upgrade</td>
                    <td className="px-4 py-3">Late</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">OCI Ship Upgrade Priority</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The OCI ship (TCRN Impetus) has three upgrade categories: Electronics, Armament, and Hull. Each category has three slots. Electronics upgrades improve intelligence gathering and map visibility. Armament upgrades enhance orbital strike capabilities and fire support. Hull upgrades increase ship durability and campaign resilience. The recommended upgrade order below assumes a standard Campaign run where you cannot max all categories before the final mission.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
                <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                  <tr>
                    <th className="px-4 py-3 border border-gray-700">Slot Order</th>
                    <th className="px-4 py-3 border border-gray-700">Category</th>
                    <th className="px-4 py-3 border border-gray-700">Upgrade Name</th>
                    <th className="px-4 py-3 border border-gray-700">Effect</th>
                    <th className="px-4 py-3 border border-gray-700">Priority Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 1</td>
                    <td className="px-4 py-3">Electronics</td>
                    <td className="px-4 py-3">Tactical Uplink</td>
                    <td className="px-4 py-3">Reveals enemy positions at mission start</td>
                    <td className="px-4 py-3 text-green-400 font-bold">Essential</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 2</td>
                    <td className="px-4 py-3">Electronics</td>
                    <td className="px-4 py-3">Deep Scan</td>
                    <td className="px-4 py-3">Shows loot locations on map</td>
                    <td className="px-4 py-3 text-green-400 font-bold">Essential</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 3</td>
                    <td className="px-4 py-3">Electronics</td>
                    <td className="px-4 py-3">Signal Intercept</td>
                    <td className="px-4 py-3">25% chance to reveal enemy reinforcements</td>
                    <td className="px-4 py-3 text-blue-400 font-bold">Recommended</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 1</td>
                    <td className="px-4 py-3">Armament</td>
                    <td className="px-4 py-3">Orbital Strike I</td>
                    <td className="px-4 py-3">Deals "3,000" AoE damage, "3" turn cooldown</td>
                    <td className="px-4 py-3 text-green-400 font-bold">Essential</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 2</td>
                    <td className="px-4 py-3">Armament</td>
                    <td className="px-4 py-3">Orbital Strike II</td>
                    <td className="px-4 py-3">Damage +"1,500", adds burn effect</td>
                    <td className="px-4 py-3 text-blue-400 font-bold">Recommended</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 3</td>
                    <td className="px-4 py-3">Armament</td>
                    <td className="px-4 py-3">Precision Barrage</td>
                    <td className="px-4 py-3">Targeted strike, no cooldown</td>
                    <td className="px-4 py-3 text-yellow-400 font-bold">Situational</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 1</td>
                    <td className="px-4 py-3">Hull</td>
                    <td className="px-4 py-3">Reinforced Plating</td>
                    <td className="px-4 py-3">Ship HP +"1,500", repair cost -20%</td>
                    <td className="px-4 py-3 text-green-400 font-bold">Essential</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3">Slot 2</td>
                    <td className="px-4 py-3">Hull</td>
                    <td className="px-4 py-3">Repair Bay</td>
                    <td className="px-4 py-3">Automatic HP recovery between missions</td>
                    <td className="px-4 py-3 text-blue-400 font-bold">Recommended</td>
                  </tr>
                  <tr className="bg-gray-900">
                    <td className="px-4 py-3">Slot 3</td>
                    <td className="px-4 py-3">Hull</td>
                    <td className="px-4 py-3">Redundant Systems</td>
                    <td className="px-4 py-3">One-time ship destruction prevention</td>
                    <td className="px-4 py-3 text-yellow-400 font-bold">Situational</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Phase-Based Research Strategy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The campaign is divided into three phases based on mission progression. Early Phase covers missions 1 through 5, Mid Phase covers missions 6 through 12, and Late Phase covers missions 13 through the final mission. Your research priorities should shift as you progress because the enemy composition and mission difficulty change dramatically between phases.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the Early Phase, prioritize squad leader perk slots and basic weapon upgrades. The difference between a squad leader with one perk and two perks is enormous — the second perk often defines the leader's role in your composition. Basic weapon upgrades give immediate damage improvements that help you complete side objectives and earn more research points. Do not invest in vehicle upgrades during the Early Phase because your starting APC is sufficient for the mission types you face.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the Mid Phase, unlock suppression technology and advanced armor. Enemy units start appearing in groups of four or more, and suppression becomes the most reliable way to control engagements. Heavy armor plating for your vehicles is also critical because enemy anti-vehicle capabilities ramp up significantly around mission 8. If you are playing on Commander or Admiral difficulty, you should also unlock the OCI Hull upgrade by the end of the Mid Phase to survive campaign attrition.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In the Late Phase, focus on Classified-tier research. Alien hybrid weapons deal massive damage and are necessary for the final missions. The MENACE Hive Scanner is arguably the most valuable late-game upgrade because it reveals all Hive locations on the strategic map, allowing you to plan your final approach without wasting movement points. Save "5,000" research points for the Apocalypse Protocol upgrade before attempting the final mission — it provides campaign-ending fire support that can turn a losing battle into a victory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Laboratory Upgrade Routes</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The laboratory on the TCRN Impetus has five upgrade stations: Weapon Workshop, Armor Forge, Electronics Bay, OCI Integration, and Xenobiology Lab. Each station can be upgraded to Level 3. Upgrading a station reduces the cost of research under that category and unlocks higher-tier nodes earlier. The recommended upgrade route is Weapon Workshop first (because weapon upgrades have the highest impact per research point), then Electronics Bay (for OCI upgrades), then Armor Forge, OCI Integration, and finally Xenobiology Lab.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Xenobiology Lab is last because its research nodes are situational — they provide bonuses against specific alien types but do not improve your squad's baseline capabilities. If you are struggling with a particular alien type (for example, the Hive Queens in late-game missions), then prioritize Xenobiology Lab earlier to unlock type-specific upgrades. Otherwise, treat it as a luxury upgrade for subsequent playthroughs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">What is the single most important research node in MENACE?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Squad Leader Perk Slot II is the single most important research node. It unlocks the second perk slot for every squad leader, which dramatically expands your tactical options. A Jane Darby with two perks can fulfill both a marksman and a squad-buff role, eliminating the need for an extra unit slot. This research costs only "500" RP and pays for itself within two missions through improved mission performance and fewer unit losses.
                </p>
              </details>
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">Should I prioritize OCI upgrades or squad upgrades first?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Prioritize squad upgrades first. OCI upgrades are powerful but they enhance your squad's capabilities rather than providing capabilities of their own. A squad that cannot survive the first three turns of a mission cannot benefit from orbital strikes or tactical uplinks. Unlock Squad Leader Perk Slot II and Marksman Rifle Upgrade before investing in OCI slots. After your squad is stable, pivot to OCI Electronics Slot 1 and Armament Slot 1 for fire support.
                </p>
              </details>
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">How many research points do I need to complete the technology tree?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Completing the entire technology tree requires approximately "25,000" research points on a standard Campaign run. Most players will earn between "18,000" and "22,000" RP in a single playthrough, which is enough to unlock about "70%" of the tree. Focus on the nodes listed in the priority table above rather than trying to unlock everything. If you want to complete the full tree, play on Admiral difficulty with the Research Bonus faction trait and prioritize side objectives that reward extra RP.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8 italic">Last updated: June 2026. Based on MENACE Early Access 1.0 patch. Research priorities tested on Commander and Admiral difficulty. Fan guide — not affiliated with Overhype Studios or Hooded Horse.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-sm p-5">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/oci-upgrades" className="text-blue-400 hover:underline">OCI Upgrades Guide</a></li>
              <li><a href="/squad-leaders" className="text-blue-400 hover:underline">Squad Leaders Tier List</a></li>
              <li><a href="/best-team-comps" className="text-blue-400 hover:underline">Best Team Compositions</a></li>
              <li><a href="/weapons" className="text-blue-400 hover:underline">Weapons Guide</a></li>
              <li><a href="/builds" className="text-blue-400 hover:underline">Builds Guide</a></li>
              <li><a href="/campaign-guide" className="text-blue-400 hover:underline">Campaign Guide</a></li>
              <li><a href="/factions" className="text-blue-400 hover:underline">Factions Overview</a></li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-sm p-5">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Unlock Squad Leader Perk Slot II before any weapon upgrade</li>
              <li>Prioritize Electronics OCI upgrades for map intelligence</li>
              <li>Save "5,000" RP for Apocalypse Protocol before the final mission</li>
              <li>Upgrade Weapon Workshop to Level 3 first for research cost reduction</li>
              <li>Do not waste RP on Xenobiology Lab in your first playthrough</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
