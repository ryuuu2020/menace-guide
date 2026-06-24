import type { Metadata } from "next";
import Link from "next/link";
import { squadLeaders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Squad Leaders Tier List — All 11 Leaders Ranked",
  description: "Complete MENACE squad leader tier list: S-Tier to C-Tier with detailed stats, unique perks, best loadouts, and pairings. Find the best commander for your playstyle.",
};

const tierOrder = ["S", "A", "B", "C"] as const;

export default function SquadLeadersPage() {
  const grouped = tierOrder.map((tier) => ({
    tier,
    leaders: squadLeaders.filter((s) => s.tier === tier),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Squad Leaders <span className="text-accent">Tier List</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        All 11 squad leaders ranked S through C tier, with detailed stat breakdowns, unique perk
        analysis, best loadouts, and ideal pairings. Click any leader for the complete guide.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>What makes a squad leader S-Tier?</summary>
          <p>S-Tier leaders have exceptional base stats (AGI 80+, WS 75+), powerful unique perks that scale across all mission types, and no critical weaknesses. Jane Darby and Kody Greifinger dominate with elite agility, accuracy, and game-changing perks.</p>
        </details>
        <details>
          <summary>Should I always pick S-Tier leaders?</summary>
          <p>Not necessarily. A-Tier leaders like Charles Lim outscale S-Tier in long campaigns due to higher Growth Potential. B-Tier leaders like Fedor Yazhov excel in specific team compositions. Pick leaders that complement your playstyle and squad strategy.</p>
        </details>
        <details>
          <summary>How do I recruit new squad leaders?</summary>
          <p>Purchase leader files from the Black Market, then spend Authority to recruit them. Authority is a limited resource — balance recruiting new leaders against maintaining discipline across your fleet.</p>
        </details>
      </div>

      {grouped.map((group) => (
        <section key={group.tier} className="mb-10">
          <h2 className="text-xl font-bold font-heading mb-4">
            <span className="text-accent">{group.tier}-Tier</span>
            <span className="text-sm text-text-muted font-normal ml-2">
              ({group.leaders.length} leader{group.leaders.length > 1 ? "s" : ""})
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.leaders.map((leader) => (
              <Link
                key={leader.slug}
                href={`/squad-leaders/${leader.slug}`}
                className="block p-5 rounded-xl border border-border bg-surface card-hover"
                style={{ borderLeftWidth: "3px", borderLeftColor: leader.color }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{leader.name}</h3>
                  <span className="text-xs text-text-muted font-mono">{leader.faction}</span>
                </div>
                <p className="text-xs text-text-muted mb-3">{leader.tagline}</p>
                <div className="grid grid-cols-4 gap-1 text-xs font-mono">
                  <span className="text-text-muted">AGI <span className="text-accent">{leader.agi}</span></span>
                  <span className="text-text-muted">WS <span className="text-accent">{leader.ws}</span></span>
                  <span className="text-text-muted">TOUG <span className="text-accent">{leader.toug}</span></span>
                  <span className="text-text-muted">VIT <span className="text-accent">{leader.vit}</span></span>
                </div>
                <div className="mt-2 text-xs text-accent-secondary font-mono">
                  Growth: {leader.growthPotential} &middot; {leader.uniquePerk}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-2">
          <span className="text-accent">&#9878;</span> Leader Rotation Strategy
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          Deploying the same leader on too many consecutive missions causes Fatigue (reduced AP).
          Maintain a roster of 4+ active leaders and rotate them. Use easy Alien Wildlife missions
          to level up new recruits. Remember — a deep bench beats a single superstar in MENACE.
        </p>
      </div>
    </div>
  );
}
