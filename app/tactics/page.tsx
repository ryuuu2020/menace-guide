import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Tactics — Expert Combat Strategies",
  description: "Expert MENACE tactics guide: suppression combos, vehicle flanking, concealment cycling, morale cascades, orbital strike setups, and advanced team compositions.",
};

export default function TacticsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Advanced <span className="text-accent">Tactics</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Expert-level strategies for experienced commanders. Suppression chains, concealment cycling,
        morale cascades, and advanced team compositions.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>What&apos;s the most effective team composition?</summary>
          <p>The optimal setup uses 1 suppression specialist (LMG, Edwin Pike), 1 finisher (Fedor Yazhov, Jane Darby), 1 tank (Tekko&apos;Beo Phosa, vehicle), and 1 flex slot (scout, second DPS, or support). This provides suppression, kill confirmation, durability, and adaptability.</p>
        </details>
        <details>
          <summary>How do I beat MENACE boss encounters?</summary>
          <p>Bring Jane Darby or J.G. Wetteroth for anti-large damage. Use orbital strikes early in the fight. Suppress the boss with LMGs before engaging. Clear surrounding adds first — they provide covering fire for the boss. Save your best consumables for boss phases.</p>
        </details>
        <details>
          <summary>When should I use vehicles vs infantry?</summary>
          <p>Vehicles for: holding positions, absorbing fire, breaking enemy lines. Infantry for: building clearing, precision damage, flanking. The best approach combines both — vehicles draw attention while infantry maneuvers. Never send infantry alone against enemy armor.</p>
        </details>
      </div>

      <div className="space-y-5">
        {[
          {
            title: "Suppression Chain Combos",
            content: "Build a squad specifically for suppression — LMG, high fire rate, Edwin Pike aura. This squad&apos;s only job is to suppress enemies. Follow up with Fedor Yazhov&apos;s No Mercy perk for massive bonus damage on suppressed targets. Chain multiple suppression volleys to keep enemies locked down while your damage dealers clean up. The key: suppress BEFORE moving your damage squads into position — unsuppressed enemies will punish exposed movement.",
          },
          {
            title: "Concealment Cycling",
            content: "Kody Greifinger&apos;s Guerilla perk rewards attacking from concealment with bonus AP. Use smoke grenades to re-establish concealment after attacking. Cycle: Attack from concealment → Smoke → Reposition → Attack again. Recon Drones can spot enemies while your squad stays concealed. Combine with camouflage kits and suppressed weapons for maximum stealth uptime. This is the highest skill-cap tactic in MENACE.",
          },
          {
            title: "Vehicle Flanking",
            content: "Vehicle directional armor means side and rear hits deal massively more damage. Use a fast vehicle (A-ATV, Light Walker) to flank while your Battle Tank holds the front. Enemy vehicles will turn to face your main force — this exposes their rear to your flanker. EMP grenades can disable vehicle weapon systems, making them helpless while you reposition for flank shots. The Anti-Materiel Rifle &apos;Crocodile&apos; ignores a significant portion of armor on flank hits.",
          },
          {
            title: "Morale Cascade Manipulation",
            content: "Target one enemy squad with overwhelming force. Losing 3+ soldiers in a single turn triggers Shaken. Continue firing on the shaken squad next turn to trigger Routed. Routed squads are defenseless and may flee — ignore them and target the next squad. A successful morale cascade can neutralize 2-3 enemy squads with minimal ammo expenditure. This strategy requires coordination: soften with suppression, then alpha strike with all squads.",
          },
          {
            title: "Orbital Strike Traps",
            content: "Orbital strikes announce their target zone one turn in advance. Enemies will try to escape. Counter this: use LMG fire to suppress all enemies in the strike zone. Suppressed enemies have reduced AP and cannot escape. Alternatively, deploy smoke grenades around the strike zone to funnel enemies toward the center. Landing a strike on a pinned squad inflicts maximum casualties. Faction-specific Weapons O.C.I. upgrades provide larger strike zones.",
          },
          {
            title: "Resource Denial Strategy",
            content: "Against Pirates and Rogue Army: target their vehicles and heavy weapons first. Without vehicles, they lose mobility. Without heavy weapons, they lose armor-killing capability. Use EMP grenades on vehicles to disable weapons, then ignore the vehicle and kill the crew when they disembark. Empty vehicles can be captured and sold at the Black Market for significant trade value.",
          },
          {
            title: "Squad Rotation Optimization",
            content: "The Fatigue system punishes consecutive deployments. Optimal rotation: maintain 2 &apos;A-Team&apos; squads for hard missions, 2 &apos;B-Team&apos; squads for medium missions, and 2 training squads for easy Alien Wildlife missions. Rotate on a 2-1-1 schedule: A-Team deploys twice, rests once. B-Team deploys once, rests once. Training squads deploy once per operation for XP. This maximizes uptime and minimizes fatigue.",
          },
          {
            title: "Night Operation Specialization",
            content: "Build a dedicated night operations squad: Night Vision Goggles, Thermal Imaging Device, Motion Scanner, suppressed weapons, high concealment armor. Night operations dramatically reduce enemy detection range — a well-equipped night squad can eliminate enemies before they even see you. SMGs and Shotguns gain relative value due to reduced engagement ranges. Avoid bringing vehicles on night ops unless they have Advanced Sensors.",
          },
        ].map((tactic, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-3">
              <span className="text-accent">0{i + 1}</span> {tactic.title}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">{tactic.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-2">
          <span className="text-accent">&#9878;</span> Recommended Team Compositions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-sm">
          <div className="p-4 rounded-lg bg-surface border border-border">
            <h3 className="font-semibold text-accent mb-2">Assault Team</h3>
            <p className="text-xs text-text-muted">Jane Darby (sniper) + Edwin Pike (suppression) + Tekko&apos;Beo Phosa (tank) + Kody Greifinger (flex). Ideal for: Assault and Defense missions. Strengths: Balanced, high damage, suppression immune.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border">
            <h3 className="font-semibold text-accent-secondary mb-2">Boss Hunter Team</h3>
            <p className="text-xs text-text-muted">J.G. Wetteroth (anti-large) + Jane Darby (precision) + Edwin Pike (discipline) + Vehicle (fire support). Ideal for: MENACE and Hive Destruction missions. Strengths: Massive single-target damage.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border">
            <h3 className="font-semibold text-text-muted mb-2">Stealth Team</h3>
            <p className="text-xs text-text-muted">Kody Greifinger (guerilla) + Jacques Vamplew (flex) + Jean Sy (economy). Ideal for: Infiltration and DICE missions. Strengths: High mobility, concealment, low detection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
