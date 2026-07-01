import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE FAQ — Frequently Asked Questions & Answers",
  description: "Complete MENACE FAQ answering the most common questions from new and experienced commanders. Covers combat, squad management, Black Market, O.C.I. upgrades, faction strategy, and more.",
};

const FAQ_ITEMS = [
  {
    q: "What is the best starting faction in MENACE?",
    a: "There is no universally best faction — each has distinct strengths. The Colonial Defense Force is the most beginner-friendly: balanced units, straightforward upgrades, and no unusual mechanics to learn. The Syndicate offers the strongest late-game economy through Black Market bonuses. The Frontier Militia excels in early-game aggression with cheap, fast units. Pick based on your preferred playstyle, not tier lists. You can complete the campaign with any faction on any difficulty.",
  },
  {
    q: "How do I earn Credits efficiently?",
    a: "Credits come from three main sources: mission completion (primary), Black Market trading (secondary), and salvage from destroyed enemies (tertiary). For maximum credit income, always accept bonus objectives on missions — they often pay 50-100 percent of the base mission reward. Sell damaged equipment you do not plan to repair at the Black Market. Salvage every battlefield after combat — unclaimed salvage disappears when you leave the mission area.",
  },
  {
    q: "What are O.C.I. Upgrades and which should I prioritize?",
    a: "O.C.I. (Operational Command Interface) upgrades are permanent enhancements to your entire squad. Priority order: Tactical Analysis (increases all squad accuracy) → Field Repairs (passive armor repair between missions) → Logistics Network (increases mission credit rewards) → Advanced Targeting (increases crit chance). Tactical Analysis first because accuracy is the most impactful stat — hitting more shots means faster kills, less damage taken, and fewer resources spent on repairs.",
  },
  {
    q: "How does suppression work and why is it important?",
    a: "Suppression is a debuff applied by heavy weapons (machine guns, autocannons) and certain abilities. A suppressed enemy has reduced accuracy, reduced movement range, and cannot use special abilities. Suppression is the most powerful form of crowd control in MENACE — a suppressed enemy squad is essentially neutralized for the turn. Always bring at least one suppression-capable unit (Heavy Gunner or Support with suppressive fire) on every mission.",
  },
  {
    q: "Should I specialize my squad members or make them versatile?",
    a: "Specialize. A squad of four specialists outperforms a squad of four generalists in every scenario. Each squad member should excel at one role: Tank (high armor, taunt abilities), Damage Dealer (maximized weapon skill and crit), Support (healing, buffs, suppression), and Scout (high mobility, recon abilities). The synergy of four specialists covering each other&apos;s weaknesses is far more effective than four characters who are mediocre at everything.",
  },
  {
    q: "What is the Black Market and when should I use it?",
    a: "The Black Market is a rotating shop that appears between missions, offering rare equipment, weapons, and upgrades that are not available through standard vendors. Prices are volatile — the same item can cost 50 percent more or less depending on market conditions. Check the Black Market after every mission. Buy when prices are below average (marked green), sell your salvage when prices are above average (marked red). Never buy at peak prices unless the item is critical to your build.",
  },
  {
    q: "How do I beat the final boss?",
    a: "The final boss fight tests everything you have learned. Key preparation: upgrade all squad members&apos; primary weapons to maximum tier, bring at least 3 EMP Grenades (boss has powerful shields), equip your tank with the highest-tier armor available, and stock 5+ Medkits. During the fight: the boss alternates between attack phase (high damage, vulnerable to damage) and shield phase (invulnerable, summons adds). Suppress the adds during shield phase, burst the boss during attack phase. Do not waste heavy cooldowns on the shield phase.",
  },
  {
    q: "What are the most common mistakes new players make?",
    a: "The top five: (1) ignoring cover — standing in the open multiplies incoming damage by 2-3x; (2) spreading upgrades too thin — focus on 4 core squad members, not 8 under-equipped ones; (3) hoarding consumables — use grenades and medkits when you need them, they are replaceable; (4) skipping side missions — they provide credits and XP that make main missions significantly easier; (5) not reading enemy abilities — each enemy type has unique mechanics that the in-game tooltip explains. Hover over every new enemy before engaging.",
  },
  {
    q: "How important is positioning in MENACE combat?",
    a: "Positioning is at least as important as your squad&apos;s stats. High ground provides 15 percent accuracy and 10 percent damage bonuses. Cover reduces incoming damage by 25-50 percent. Flanking an enemy (attacking from the side or rear) grants 20 percent crit chance and ignores directional armor bonuses. A well-positioned squad of mid-tier units will outperform a poorly-positioned squad of elite units. Always spend the first turn of combat establishing good positions before engaging.",
  },
  {
    q: "Can I respec my squad members later?",
    a: "Partial respec is available through the O.C.I. Retraining module (unlocked after the mid-game story mission). You can redistribute skill points within the same class at a credit cost, but you cannot change a squad member&apos;s base class. A Heavy Gunner can reallocate points between Suppression and Demolition, but cannot become a Medic. Choose your squad composition carefully at the start — class choices are permanent.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        MENACE <span className="text-accent">FAQ</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Answers to the most frequently asked questions from MENACE commanders. Whether you are a new player learning the basics or a veteran optimizing your strategy, you will find practical answers here.
      </p>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <details key={i} className="p-4 border border-border bg-bg-card">
            <summary className="font-semibold cursor-pointer hover:text-accent font-heading text-lg">
              {item.q}
            </summary>
            <p className="mt-3 text-text-muted leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold font-heading mb-4">Key Stats at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-bg-card">
              <tr>
                <th className="p-3 border border-border">Topic</th>
                <th className="p-3 border border-border">Priority</th>
                <th className="p-3 border border-border">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">O.C.I. Upgrades</td>
                <td className="p-3 border border-border text-accent">Highest</td>
                <td className="p-3 border border-border text-text-muted">Permanent squad-wide bonuses compound over the entire campaign</td>
              </tr>
              <tr className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">Weapon Upgrades</td>
                <td className="p-3 border border-border text-accent">High</td>
                <td className="p-3 border border-border text-text-muted">More damage = faster kills = less damage taken</td>
              </tr>
              <tr className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">Armor Upgrades</td>
                <td className="p-3 border border-border text-accent">High</td>
                <td className="p-3 border border-border text-text-muted">Survivability prevents squad member injuries and recovery downtime</td>
              </tr>
              <tr className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">Consumables</td>
                <td className="p-3 border border-border text-text-muted">Medium</td>
                <td className="p-3 border border-border text-text-muted">Buy when needed, not for stockpiling</td>
              </tr>
              <tr className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">Cosmetics</td>
                <td className="p-3 border border-border text-text-muted">Low</td>
                <td className="p-3 border border-border text-text-muted">Spend credits on power, not appearance — at least until endgame</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. FAQ answers verified against MENACE current version.
      </p>
    </div>
  );
}
