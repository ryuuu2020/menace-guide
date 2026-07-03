import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Mission Difficulty Guide — Operation Tiers, Rewards & Squad Requirements | MENACE Guide",
  description: "Complete MENACE mission difficulty guide. Every operation tier ranked, recommended squad power levels, reward tables, and how to prepare for hard missions.",
};

const missionTiers = [
  { tier: "Tier 1: Recon", difficulty: "Easy", recommendedSquadPower: "500-1000", minOCILevel: "1", rewards: "Basic weapons, 500-1000 credits, O.C.I. XP" },
  { tier: "Tier 2: Skirmish", difficulty: "Medium", recommendedSquadPower: "1000-2000", minOCILevel: "2", rewards: "Improved weapons, 1000-2000 credits, O.C.I. intel" },
  { tier: "Tier 3: Assault", difficulty: "Medium-Hard", recommendedSquadPower: "2000-3500", minOCILevel: "3", rewards: "Advanced weapons, 2000-3500 credits, Black Market access" },
  { tier: "Tier 4: Operation", difficulty: "Hard", recommendedSquadPower: "3500-5000", minOCILevel: "4", rewards: "Rare weapons, 3500-5000 credits, O.C.I. upgrades" },
  { tier: "Tier 5: Campaign", difficulty: "Very Hard", recommendedSquadPower: "5000+", minOCILevel: "5", rewards: "Legendary weapons, 5000+ credits, Story progression" },
  { tier: "Tier 6: Legendary", difficulty: "Extreme", recommendedSquadPower: "7000+", minOCILevel: "6", rewards: "Unique weapons, 7000+ credits, Achievement unlock" },
];

const missionTypes = [
  { type: "Assault", objective: "Eliminate all enemy forces in the sector", timeLimit: "20 minutes", specialConditions: "Enemies reinforce at 10 min mark", bestSquadComp: "2x ASSAULT + 1x SUPPORT + 1x RECON" },
  { type: "Defense", objective: "Hold position against waves of enemies", timeLimit: "15 minutes (5 waves)", specialConditions: "Waves get progressively harder. Boss wave at end.", bestSquadComp: "1x ASSAULT + 2x SUPPORT + 1x RECON" },
  { type: "Extraction", objective: "Reach extraction point with VIP/asset", timeLimit: "12 minutes", specialConditions: "VIP must survive. Enemy ambushes along route.", bestSquadComp: "1x ASSAULT + 1x SUPPORT + 2x RECON (mobile)" },
  { type: "Sabotage", objective: "Destroy 3 enemy installations", timeLimit: "25 minutes", specialConditions: "Installations are guarded and explosive. Stealth bonus.", bestSquadComp: "1x ASSAULT + 1x SUPPORT + 2x RECON (stealth)" },
  { type: "HVT Elimination", objective: "Identify and eliminate High Value Target", timeLimit: "30 minutes", specialConditions: "HVT is among civilians. Wrong target = mission fail.", bestSquadComp: "1x ASSAULT + 1x SUPPORT + 2x RECON (electronics)" },
  { type: "Convoy Escort", objective: "Escort supply convoy to destination", timeLimit: "20 minutes", specialConditions: "Convoy is slow. Multiple ambush points.", bestSquadComp: "2x ASSAULT + 2x SUPPORT (balanced)" },
];

const preMissionChecklist = [
  { check: "Squad power vs recommended", why: "Underpowered squads will struggle or die. Check enemy composition via O.C.I. intel.", consequenceOfSkipping: "Wipe on mission, lose squad leaders (permanent death)" },
  { check: "Ammo and supply count", why: "Running out of ammo mid-mission is deadly. Bring 2x normal ammo consumption.", consequenceOfSkipping: "Scavenge enemy weapons (risky) or abort mission" },
  { check: "Time of day and weather", why: "Night and weather (sandstorm/blizzard) reduce visibility and range. Bring NVGs and thermals.", consequenceOfSkipping: "Fight at disadvantage. Ranged weapons less effective." },
  { check: "Squad leader perks and loadouts", why: "Wrong perks for mission type waste potential. Adjust loadouts for mission objectives.", consequenceOfSkipping: "Suboptimal performance. May fail mission objectives." },
  { check: "Vehicle assignment and fuel", why: "Vehicles provide fire support and transport. Empty fuel = stranded vehicle.", consequenceOfSkipping: "Lose mobile cover and transport. squad must walk." },
  { check: "O.C.I. intel on enemy composition", why: "Knowing enemy types and numbers lets you tailor squad composition.", consequenceOfSkipping: "Bring wrong squad type. Example: no anti-tank vs heavy armor." },
  { check: "Backup save (optional)", why: "MENACE has permadeath. Backup save lets you retry if things go wrong.", consequenceOfSkipping: "Permanent loss of squad leaders and progress." },
];

export default function MissionDifficultyGuidePage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        <main className="flex-1 min-w-0">
          <p className="text-ink-light text-sm mb-2">Last updated: July 3, 2026</p>
          <h1 className="font-display text-4xl lg:text-5xl text-chapter-heading mb-6">MENACE Mission Difficulty Guide</h1>

          <section className="mb-10">
            <p className="font-serif text-lg text-ink leading-relaxed">
              <span className="drop-cap float-left text-6xl leading-[0.7] font-display text-chapter-heading mr-2">M</span>
              ENACE&apos;s mission system scales from casual recon to extreme legendary operations. Understanding the difficulty tiers, mission types, and preparation requirements is essential for success. This guide breaks down every operation tier, explains what to expect from each mission type, and provides a pre-mission checklist to ensure you&apos;re always prepared.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-chapter-heading mb-4">Mission Tiers and Difficulty</h2>
            <p className="font-serif text-ink leading-relaxed mb-4">Missions are categorized into 6 tiers based on difficulty and squad power requirements. Tier 1 is tutorial-level, while Tier 6 is for endgame players with fully upgraded squads. Always check the recommended squad power before deploying.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table w-full text-left text-sm">
                <thead><tr className="bg-parchment-table text-ink text-left"><th className="py-2 px-3 font-semibold">Tier</th><th className="py-2 px-3 font-semibold">Difficulty</th><th className="py-2 px-3 font-semibold">Recommended Squad Power</th><th className="py-2 px-3 font-semibold">Min OCI Level</th><th className="py-2 px-3 font-semibold">Rewards</th></tr></thead>
                <tbody>{missionTiers.map((row, i) => (<tr key={i} className="border-b border-ink-light/10 even:bg-parchment-table/30"><td className="py-2 px-3 text-accent font-semibold">{row.tier}</td><td className="py-2 px-3 text-ink">{row.difficulty}</td><td className="py-2 px-3 text-ink-light">{row.recommendedSquadPower}</td><td className="py-2 px-3 text-ink">{row.minOCILevel}</td><td className="py-2 px-3 text-ink-light">{row.rewards}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-chapter-heading mb-4">Mission Types and Objectives</h2>
            <p className="font-serif text-ink leading-relaxed mb-4">Each mission type has unique objectives, time limits, and special conditions. Bringing the right squad composition for the mission type is just as important as having high squad power.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table w-full text-left text-sm">
                <thead><tr className="bg-parchment-table text-ink text-left"><th className="py-2 px-3 font-semibold">Type</th><th className="py-2 px-3 font-semibold">Objective</th><th className="py-2 px-3 font-semibold">Time Limit</th><th className="py-2 px-3 font-semibold">Special Conditions</th><th className="py-2 px-3 font-semibold">Best Squad Comp</th></tr></thead>
                <tbody>{missionTypes.map((row, i) => (<tr key={i} className="border-b border-ink-light/10 even:bg-parchment-table/30"><td className="py-2 px-3 text-accent font-semibold">{row.type}</td><td className="py-2 px-3 text-ink">{row.objective}</td><td className="py-2 px-3 text-ink-light">{row.timeLimit}</td><td className="py-2 px-3 text-ink">{row.specialConditions}</td><td className="py-2 px-3 text-ink-light">{row.bestSquadComp}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-chapter-heading mb-4">Pre-Mission Checklist</h2>
            <p className="font-serif text-ink leading-relaxed mb-4">Preparation prevents poor performance. Run through this checklist before every mission, especially Hard and above. Skipping any of these checks increases your chance of failure significantly.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table w-full text-left text-sm">
                <thead><tr className="bg-parchment-table text-ink text-left"><th className="py-2 px-3 font-semibold">Check</th><th className="py-2 px-3 font-semibold">Why</th><th className="py-2 px-3 font-semibold">Consequence of Skipping</th></tr></thead>
                <tbody>{preMissionChecklist.map((row, i) => (<tr key={i} className="border-b border-ink-light/10 even:bg-parchment-table/30"><td className="py-2 px-3 text-accent font-semibold">{row.check}</td><td className="py-2 px-3 text-ink">{row.why}</td><td className="py-2 px-3 text-ink-light">{row.consequenceOfSkipping}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-chapter-heading mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-lg text-chapter-heading mb-2">Does mission difficulty scale with squad power?</h3><p className="font-serif text-ink leading-relaxed">Partially. Mission difficulty is primarily determined by tier, but enemy squad power scales slightly with your squad power to prevent over-leveled players from steamrolling. However, the scaling is mild — a squad power 5000 team will still find Tier 1 missions trivial. The scaling mainly affects same-tier missions where player power varies.</p></div>
              <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-lg text-chapter-heading mb-2">Do replayed missions give full rewards?</h3><p className="font-serif text-ink leading-relaxed">No. Replaying a mission gives reduced rewards: 50% on second play, 25% on third, and 0% XP on fourth+ plays. However, credits and loot drops remain at full rate. This prevents infinite farming of easy missions. For efficient farming, replay missions one tier above your current power level.</p></div>
              <div className="bg-parchment-light rounded-lg p-5 mb-4"><h3 className="font-display text-lg text-chapter-heading mb-2">Are some missions locked to specific factions?</h3><p className="font-serif text-ink leading-relaxed">Yes. Some operations are faction-specific and require reputation with that faction to unlock. The 3 main factions (U.S. military, DICE, and the resistance) each have unique mission chains. You can eventually unlock all faction missions, but it requires grinding reputation with each faction separately. Some faction missions give unique rewards not available elsewhere.</p></div>
            </div>
          </section>

          <p className="font-serif text-ink-light text-sm">Last updated: July 3, 2026.</p>
        </main>

        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-10">
            <h3 className="font-display text-lg text-chapter-heading mb-4 border-b border-ink-light/20 pb-2">Related Guides</h3>
            <nav className="space-y-2">
              <Link href="/missions" className="block text-ink-light hover:text-accent transition-colors font-serif">Missions Overview</Link>
              <Link href="/squad-leaders" className="block text-ink-light hover:text-accent transition-colors font-serif">Squad Leaders</Link>
              <Link href="/combat" className="block text-ink-light hover:text-accent transition-colors font-serif">Combat Guide</Link>
              <Link href="/oci-upgrades" className="block text-ink-light hover:text-accent transition-colors font-serif">O.C.I. Upgrades</Link>
              <Link href="/beginners-guide" className="block text-ink-light hover:text-accent transition-colors font-serif">Beginner Guide</Link>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
