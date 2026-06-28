import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { squadLeaders, getSquadLeaderBySlug, getAdjacentSquadLeaders } from "@/lib/data";

export function generateStaticParams() {
  return squadLeaders.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const leader = getSquadLeaderBySlug(slug);
  if (!leader) return { title: "Not Found" };
  return {
    title: `${leader.name} Guide — Stats, Perk & Best Loadout`,
    description: `${leader.name} complete squad leader guide: ${leader.tagline}. Base stats (AGI ${leader.agi}, WS ${leader.ws}), ${leader.uniquePerk} perk, best weapons, armor, pairings, and strategy tips.`,
  };
}
export const metadata = {
  title: "MENACE {leader.name}
              
                {leader.tier}-Tier — Complete Guide (2026)",
  description:
    "{leader.tagline}",
};


export default async function SquadLeaderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = getSquadLeaderBySlug(slug);
  if (!leader) notFound();

  const { prev, next } = getAdjacentSquadLeaders(slug);
  const maxStat = 100;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="breadcrumb flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span>/</span>
        <Link href="/squad-leaders" className="hover:text-accent">Squad Leaders</Link>
        <span>/</span>
        <span className="text-text">{leader.name}</span>
      </nav>

      {/* Header Card */}
      <div
        className="p-6 rounded-xl border border-border bg-surface mb-8"
        style={{ borderLeftWidth: "4px", borderLeftColor: leader.color }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {leader.name}
              <span className="ml-3 text-sm px-2 py-0.5 rounded bg-accent/10 text-accent font-mono">
                {leader.tier}-Tier
              </span>
            </h1>
            <p className="text-text-muted mt-1">{leader.tagline}</p>
            <p className="text-xs text-text-muted mt-1">{leader.faction} &middot; Supply Cost: {leader.supplyCost}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-accent font-semibold">{leader.uniquePerk}</div>
            <div className="text-xs text-text-muted mt-1 max-w-xs">{leader.perkDescription}</div>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar — Stats */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-sm mb-4">Base Stats</h2>
            <div className="space-y-3">
              {[
                { label: "AGI (Agility)", value: leader.agi, desc: "Action Points" },
                { label: "WS (Weapon Skill)", value: leader.ws, desc: "Accuracy" },
                { label: "VAL (Valour)", value: leader.val, desc: "Discipline" },
                { label: "TOUG (Toughness)", value: leader.toug, desc: "Damage Reduction" },
                { label: "VIT (Vitality)", value: leader.vit, desc: "Hitpoints" },
                { label: "PREC (Precision)", value: leader.prec, desc: "Critical Chance" },
                { label: "POS (Positioning)", value: leader.pos, desc: "Defense" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-muted">{stat.label}</span>
                    <span className="font-mono text-accent">{stat.value}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-hover">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(stat.value / maxStat) * 100}%`,
                        backgroundColor: stat.value >= 70 ? "var(--color-accent)" : stat.value >= 50 ? "var(--color-accent-secondary)" : "#666",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-sm mb-3">Growth & Cost</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Growth Potential</span>
                <span className="font-mono text-accent-secondary">{leader.growthPotential}/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Supply Cost</span>
                <span className="font-mono">{leader.supplyCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Faction</span>
                <span>{leader.faction}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Tier</span>
                <span className="font-mono font-bold text-accent">{leader.tier}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-xl font-bold font-heading mb-3">Overview</h2>
            <p className="text-sm text-text-muted leading-relaxed">{leader.description}</p>
          </section>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-accent-secondary/30 bg-accent-secondary/5">
              <h3 className="font-semibold text-sm text-accent-secondary mb-2">Strengths</h3>
              <ul className="space-y-1.5">
                {leader.strengths.map((s, i) => (
                  <li key={i} className="text-xs text-text-muted flex gap-2">
                    <span className="text-accent-secondary flex-shrink-0">+</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-sm text-red-400 mb-2">Weaknesses</h3>
              <ul className="space-y-1.5">
                {leader.weaknesses.map((w, i) => (
                  <li key={i} className="text-xs text-text-muted flex gap-2">
                    <span className="text-red-400 flex-shrink-0">-</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Loadout */}
          <section className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-sm text-accent mb-2">Best Loadout</h3>
            <p className="text-xs text-text-muted leading-relaxed">{leader.bestLoadout}</p>
          </section>

          {/* Best Pairings */}
          <section>
            <h3 className="font-semibold text-sm mb-2">Best Pairings</h3>
            <div className="flex flex-wrap gap-2">
              {leader.bestPairings.map((name) => {
                const paired = squadLeaders.find((s) => s.name === name);
                return paired ? (
                  <Link
                    key={name}
                    href={`/squad-leaders/${paired.slug}`}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                ) : (
                  <span key={name} className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface">{name}</span>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h3 className="font-semibold text-sm mb-3">
              <span className="text-accent">#</span> Frequently Asked Questions
            </h3>
            <div className="faq-snippets">
              {leader.faq.map((item, i) => (
                <details key={i}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Prev/Next Navigation */}
          <nav className="mt-12 flex justify-between gap-4 pt-6 border-t border-border">
            {prev ? (
              <Link
                href={`/squad-leaders/${prev.slug}`}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                &larr; {prev.name} ({prev.tier}-Tier)
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/squad-leaders/${next.slug}`}
                className="text-sm text-text-muted hover:text-accent transition-colors text-right"
              >
                {next.name} ({next.tier}-Tier) &rarr;
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
