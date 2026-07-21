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
    title: `${leader.name} Guide — Use This Leader When the Campaign Burden Fits`,
    description:
      `${leader.name} guide focused on role fit, campaign burden, pairings, and when this squad leader helps or strains a MENACE run.`,
  };
}

function getPickFrame(leader: ReturnType<typeof getSquadLeaderBySlug>) {
  if (!leader) return [];
  return [
    {
      title: "What This Leader Adds",
      body:
        leader.description,
    },
    {
      title: "What the Perk Usually Means",
      body:
        `${leader.uniquePerk}: ${leader.perkDescription}`,
    },
    {
      title: "Why You Still Need a Fit Check",
      body:
        "This page is not a fake stat-and-loadout sheet. A strong commander still becomes the wrong pick when the mission, squad package, or campaign burden is asking a different question.",
    },
  ];
}

export default async function SquadLeaderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = getSquadLeaderBySlug(slug);
  if (!leader) notFound();

  const { prev, next } = getAdjacentSquadLeaders(slug);
  const pickFrame = getPickFrame(leader);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="breadcrumb flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span>/</span>
        <Link href="/squad-leaders" className="hover:text-accent">
          Squad Leaders
        </Link>
        <span>/</span>
        <span className="text-text">{leader.name}</span>
      </nav>

      <div
        className="p-6 rounded-xl border border-border bg-surface mb-8"
        style={{ borderLeftWidth: "4px", borderLeftColor: leader.color }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-2">
              Leader Fit
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading">{leader.name}</h1>
            <p className="text-text-muted mt-1">{leader.tagline}</p>
            <p className="text-xs text-text-muted mt-2">{leader.faction}</p>
          </div>
          <div className="max-w-xs">
            <div className="text-sm text-accent font-semibold">{leader.uniquePerk}</div>
            <div className="text-xs text-text-muted mt-1">{leader.perkDescription}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-sm mb-3">Use This Leader When</h2>
            <ul className="space-y-2">
              {leader.strengths.map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex gap-2">
                  <span className="text-accent flex-shrink-0">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-sm mb-3">Watch For</h2>
            <ul className="space-y-2">
              {leader.weaknesses.map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex gap-2">
                  <span className="text-warning-orange flex-shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-8">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pickFrame.map((card) => (
              <div key={card.title} className="p-5 rounded-xl border border-border bg-surface">
                <h2 className="font-semibold text-sm mb-2">{card.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </section>

          <section className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-semibold text-sm mb-3">Best Pairings</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Pairings matter because a leader solves one burden better when the surrounding squad
              package stops asking them to cover everything alone.
            </p>
            <div className="flex flex-wrap gap-2">
              {leader.bestPairings.map((name) => {
                const paired = squadLeaders.find((s) => s.name === name);
                return paired ? (
                  <Link
                    key={name}
                    href={`/squad-leaders/${paired.slug}`}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface-hover hover:border-accent hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                ) : (
                  <span key={name} className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface-hover">
                    {name}
                  </span>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-semibold text-sm mb-3">
              <span className="text-accent">#</span> FAQ
            </h2>
            <div className="faq-snippets">
              {leader.faq.map((item, i) => (
                <details key={i}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <nav className="mt-12 flex justify-between gap-4 pt-6 border-t border-border">
            {prev ? (
              <Link
                href={`/squad-leaders/${prev.slug}`}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                &larr; {prev.name}
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/squad-leaders/${next.slug}`}
                className="text-sm text-text-muted hover:text-accent transition-colors text-right"
              >
                {next.name} &rarr;
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
