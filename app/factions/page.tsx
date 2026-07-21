import type { Metadata } from "next";
import { factions } from "@/lib/data";

export const metadata: Metadata = {
  title: "MENACE Factions Guide — Who to Fight, Farm, or Favor First",
  description:
    "A practical MENACE factions guide covering which factions are best for leveling, economy, risk management, and roster development across a campaign.",
};

const routeMatrix = [
  {
    goal: "Stabilize the campaign economy",
    leanOn: "Zayn-Beecher Corporation and lower-complexity contracts",
    why:
      "These routes help fund the roster and infrastructure without immediately forcing the campaign into high-chaos diplomacy.",
  },
  {
    goal: "Train squads and learn battlefield fundamentals",
    leanOn: "Alien Wildlife and manageable low-politics combat",
    why:
      "These fights often teach cleaner tactical habits with less relationship noise than human faction chains.",
  },
  {
    goal: "Push combat rewards aggressively",
    leanOn: "More militant factions and riskier operations",
    why:
      "These lines can pay harder, but they also narrow future diplomatic breathing room faster.",
  },
];

const principles = [
  {
    principle: "Choose factions by current campaign weakness",
    detail:
      "A good faction target is the one that improves the problem your run is actually losing to: money, recruits, practice, gear, or mission familiarity.",
  },
  {
    principle: "Do not farm convenience blindly",
    detail:
      "Repeatedly taking easy missions from a convenient faction can leave the roster underprepared for the enemy types and mission pressures that matter later.",
  },
  {
    principle: "Relationship damage is part of tempo",
    detail:
      "You do not need universal friendship. You need to avoid creating enemies faster than your roster can answer them.",
  },
];

const warningSigns = [
  "You are accepting missions because they are available, not because they improve the campaign state.",
  "Your roster is overfitted to one enemy profile and feels shaky whenever the battlefield changes.",
  "Faction reputation gains look good on paper, but they are not solving the shortage that is actually slowing progression.",
];

const faqs = [
  {
    question: "Which faction should I favor first in most MENACE campaigns?",
    answer:
      "Usually the faction line that stabilizes income, equipment access, or safe progression. Zayn-Beecher tends to be the most straightforward early anchor, while Alien Wildlife missions are strong for training and tactical repetition.",
  },
  {
    question: "Should I try to stay friendly with everyone?",
    answer:
      "No. The better goal is controlled hostility. Maintain enough flexibility that the map does not corner you early, but do not spend the whole campaign paying tempo just to keep every group equally happy.",
  },
  {
    question: "How do I know a faction route is no longer worth it?",
    answer:
      "When its missions stop solving a real bottleneck. If the line no longer improves money, practice, gear, or strategic room, and only adds diplomatic complexity, it is time to reduce exposure.",
  },
];

export default function FactionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Campaign Politics</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          Factions <span className="text-accent">Guide</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          MENACE factions are not just mission flavors. They shape what your squads learn to fight,
          how your economy grows, what risks accumulate on the map, and which contracts are quietly
          making the campaign easier or harder. The right faction plan is not about pleasing everyone.
          It is about choosing who helps your current run most.
        </p>
      </div>

      <section className="mb-12 overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-4 text-left font-semibold">If You Need This</th>
              <th className="p-4 text-left font-semibold">Lean Toward</th>
              <th className="p-4 text-left font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            {routeMatrix.map((row) => (
              <tr key={row.goal} className="border-b border-border/60 align-top">
                <td className="p-4 font-semibold text-text-primary">{row.goal}</td>
                <td className="p-4 text-text-muted">{row.leanOn}</td>
                <td className="p-4 text-text-muted">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid gap-4 md:grid-cols-3 mb-12">
        {principles.map((item) => (
          <div key={item.principle} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-semibold text-text-primary mb-2">{item.principle}</h2>
            <p className="text-sm text-text-muted leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </section>

      <div className="space-y-8 mb-12">
        {factions.map((f) => (
          <section key={f.slug} id={f.slug} className="p-6 rounded-xl border border-border bg-surface scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
              <h2 className="text-xl font-bold font-heading">{f.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-mono">
                {f.difficulty}
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">{f.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-sm text-accent mb-2">Relationship Tips</h3>
                <p className="text-xs text-text-muted leading-relaxed">{f.relationshipTips}</p>

                <h3 className="font-semibold text-sm text-accent mt-4 mb-2">Combat Style</h3>
                <p className="text-xs text-text-muted leading-relaxed">{f.combatStyle}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-accent-secondary mb-2">Rewards</h3>
                <ul className="space-y-1 mb-4">
                  {f.rewards.map((r) => (
                    <li key={r} className="text-xs text-text-muted flex gap-2">
                      <span className="text-accent-secondary">&#10003;</span> {r}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-sm text-red-400 mb-2">Risks</h3>
                <ul className="space-y-1 mb-4">
                  {f.risks.map((r) => (
                    <li key={r} className="text-xs text-text-muted flex gap-2">
                      <span className="text-red-400">&#9888;</span> {r}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-sm text-text-muted mb-2">Enemy Types</h3>
                <div className="flex flex-wrap gap-1.5">
                  {f.enemyTypes.map((e) => (
                    <span key={e} className="text-xs px-2 py-0.5 rounded bg-surface-hover border border-border">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-border bg-surface-hover p-4">
              <h3 className="text-sm font-semibold text-text-primary mb-2">Campaign Use Test</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Keep taking this faction line only while it improves a real campaign weakness. Once it
                becomes habit instead of leverage, it is probably time to shift attention elsewhere.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <div className="faq-snippets">
                {f.faq.map((item, i) => (
                  <details key={`${f.slug}-${i}`}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="p-6 rounded-xl border border-border bg-surface mb-12">
        <h2 className="text-lg font-bold text-text-primary mb-4">Warning Signs Your Faction Plan Is Drifting</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-text-muted leading-relaxed">
          {warningSigns.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-text-primary">FAQ</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-text-primary mb-2">{faq.question}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
        <p className="text-xs text-text-muted mt-8">Last updated: July 9, 2026</p>
      </section>
    </div>
  );
}
