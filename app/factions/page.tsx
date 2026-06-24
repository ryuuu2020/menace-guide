import type { Metadata } from "next";
import Link from "next/link";
import { factions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Factions Guide — All 7 Factions Explained",
  description: "Complete MENACE factions guide: Rogue Army, Alien Wildlife, Pirates, MENACE, DICE of the Gods, The Backbone, and Zayn-Beecher Corporation. Strategies, rewards, and relationship tips.",
};

export default function FactionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Factions <span className="text-accent">Guide</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        All 7 factions in MENACE with relationship strategies, unique rewards, enemy types, and
        combat tactics. Your faction choices shape the entire campaign — choose wisely.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>How do faction relationships work in MENACE?</summary>
          <p>Complete operations for a faction to improve your standing. Better relationships unlock unique squad leader recruits, O.C.I. upgrades, and gear. However, helping one faction often displeases another — managing this balance is a core campaign challenge.</p>
        </details>
        <details>
          <summary>Which faction should I ally with first?</summary>
          <p>Zayn-Beecher Corporation offers the most missions and best economic rewards without requiring you to antagonize other factions. Alien Wildlife missions are the easiest for leveling. Start with these two, then branch out as your roster strengthens.</p>
        </details>
        <details>
          <summary>Can I be friendly with all factions?</summary>
          <p>In theory, yes, but it&apos;s extremely difficult. Most faction operations involve opposing another faction. The Backbone and Rogue Army are particularly aggressive — close relationships with them will damage standing with other factions significantly.</p>
        </details>
      </div>

      <div className="space-y-8">
        {factions.map((f) => (
          <section key={f.slug} id={f.slug} className="p-6 rounded-xl border border-border bg-surface scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
              <h2 className="text-xl font-bold font-heading">{f.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-mono">{f.difficulty}</span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">{f.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-sm text-accent mb-2">Relationship Tips</h3>
                <p className="text-xs text-text-muted">{f.relationshipTips}</p>

                <h3 className="font-semibold text-sm text-accent mt-4 mb-2">Combat Style</h3>
                <p className="text-xs text-text-muted">{f.combatStyle}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-accent-secondary mb-2">Rewards</h3>
                <ul className="space-y-1 mb-4">
                  {f.rewards.map((r, i) => (
                    <li key={i} className="text-xs text-text-muted flex gap-2">
                      <span className="text-accent-secondary">&#10003;</span> {r}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-sm text-red-400 mb-2">Risks</h3>
                <ul className="space-y-1 mb-4">
                  {f.risks.map((r, i) => (
                    <li key={i} className="text-xs text-text-muted flex gap-2">
                      <span className="text-red-400">&#9888;</span> {r}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-sm text-text-muted mb-2">Enemy Types</h3>
                <div className="flex flex-wrap gap-1.5">
                  {f.enemyTypes.map((e, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-surface-hover border border-border">{e}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <div className="faq-snippets">
                {f.faq.map((item, i) => (
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
