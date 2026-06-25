'use client';

import { useState } from 'react';

/* ============================================
   Template A: Tactical Command Center
   MENACE — News & Updates Page
   ============================================ */

type NewsTag = 'PATCH' | 'META' | 'COMMUNITY' | 'LAUNCH' | 'GUIDE';

interface NewsItem {
  date: string;
  tag: NewsTag;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  readTime: string;
}

const NEWS: NewsItem[] = [
  {
    date: '2026-06-25',
    tag: 'META',
    title: 'Squad Composition Tier List Updated: Post-Patch Vehicle Meta Shift',
    excerpt:
      'The tactical landscape in MENACE continues to evolve four months after Early Access launch. Our updated squad composition analysis reveals significant shifts driven by the latest balance adjustments to vehicle deployment costs and infantry synergy bonuses.',
    body: [
      'The most significant change in the current meta: APC + Mechanized Infantry compositions have overtaken pure Tank builds at the competitive level. The reduced deployment cost for APCs (now 4 supply points, down from 5) makes early-game vehicle support viable, while the infantry synergy bonus (+15% accuracy when within 2 tiles of a friendly vehicle) rewards combined-arms tactics over monotype strategies.',
      'Sniper teams have also risen in the rankings thanks to the new elevation mechanics introduced in the May patch. Positioned on rooftops or hills, Snipers now receive a +25% crit chance bonus that stacks with their Marksman specialization — creating a devastating anti-officer capability that can neutralize enemy command units in a single turn.',
      'The S-tier currently consists of: APC+Mechanized (best overall flexibility), Tank+Engineer (still king of defensive holds), and Sniper+Spotter (highest single-target elimination potential). A-tier includes: Mech+Grenadier (excellent building clearance), pure Infantry rush (cheap and fast but fragile), and the emerging Drone Controller build that leverages the new reconnaissance drone for map-wide vision.',
      'Full tier list with matchup win rates, supply cost breakdowns, and map-specific recommendations is available on the Squad Builds page.',
    ],
    author: 'MENACE Tactical Analysis',
    readTime: '5 min',
  } as NewsItem,
  {
    date: '2026-06-18',
    tag: 'PATCH',
    title: 'Supply Line Rework: New Logistics System Changes Everything',
    excerpt:
      'Overhype Studios released a substantial mid-June patch that completely overhauls the supply line system, arguably the most impactful mechanical change since Early Access launch.',
    body: [
      'The old supply system — which penalized squads operating more than 3 sectors from their home base with escalating ammo and repair cost penalties — has been replaced with a dynamic logistics network. Players can now establish forward supply depots on captured sectors, extending their operational range and reducing resupply costs.',
      'Each depot costs 200 credits and 50 building materials, takes 3 turns to construct, and provides supply coverage to all sectors within a 2-sector radius. Depots can be upgraded to Level 2 (extends range to 3 sectors) and Level 3 (adds a passive repair rate of 5% per turn for all units in range). The trade-off: depots are vulnerable to enemy raids, requiring garrison units or defensive structures.',
      'Early community testing suggests the optimal strategy is to establish a depot chain along your primary expansion axis — the credit investment pays for itself within 6-8 missions through reduced resupply costs alone. Veteran players are experimenting with "depot hopping" strategies that use rapid depot construction to sustain deep-strike missions into high-threat sectors.',
      'The patch also fixed a persistent bug where Mech units would occasionally become stuck on rubble terrain, and added 3 new distress call mission types with unique reward structures.',
    ],
    author: 'MENACE Patch Analysis',
    readTime: '4 min',
  } as NewsItem,
  {
    date: '2026-06-10',
    tag: 'COMMUNITY',
    title: 'MENACE Crosses 10,000 Steam Reviews — 88% Positive at 4 Months',
    excerpt:
      "The Battle Brothers successor has maintained remarkable momentum since its February Early Access launch, now sitting at 88% positive across 10,800+ reviews — an impressive showing for a tactical RPG in a niche genre.",
    body: [
      "Overhype Studios' commitment to transparent development has been a key factor in the game's positive reception. The team maintains a public development roadmap with monthly progress updates, and community-suggested features (like the supply line rework) frequently make it into patches within 4-6 weeks of initial discussion.",
      'The most-requested features on the community wishlist: a replay system for tactical battles (developer response: "investigating technical feasibility"), additional faction campaigns beyond the initial 3, and Steam Workshop support for custom missions and squad skins. Overhype has confirmed Workshop support is in development for a Q3 2026 release.',
      'Community-organized tournaments have also begun — the first MENACE Tactical League season concluded last week with over 200 participants across 3 divisions. The winner used an unconventional Drone+Mech composition that has since been adopted by approximately 12% of the competitive player base.',
    ],
    author: 'MENACE Community Desk',
    readTime: '3 min',
  } as NewsItem,
];

export default function NewsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#060b10]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <a
            href="/"
            className="text-xs font-mono text-text-muted hover:text-tactical-blue transition-colors"
          >
            &larr; Back to Command Center
          </a>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary mt-4">
            NEWS &amp; <span className="text-tactical-blue">UPDATES</span>
          </h1>
          <p className="text-xs font-mono text-text-muted mt-2">
            Tactical intelligence briefing — last updated 2026-06-25
          </p>
        </div>

        {/* News Feed */}
        <div className="space-y-6">
          {NEWS.map((item, i) => (
            <article
              key={i}
              className="border border-border-subtle bg-[#0a0e13] hover:border-tactical-blue/20 transition-colors"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${
                      item.tag === 'PATCH'
                        ? 'bg-terminal-green/10 text-terminal-green'
                        : item.tag === 'META'
                        ? 'bg-tactical-blue/10 text-tactical-blue'
                        : item.tag === 'COMMUNITY'
                        ? 'bg-text-muted/10 text-text-muted'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted">{item.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-muted hidden sm:inline">
                    {item.author}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">{item.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
                  {item.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.excerpt}</p>

                {/* Expandable body */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors mb-2"
                >
                  {expandedIndex === i ? '[ - ] COLLAPSE' : '[ + ] READ FULL BRIEFING'}
                </button>

                {expandedIndex === i && (
                  <div className="space-y-3 mt-3 pl-4 border-l-2 border-border-subtle">
                    {item.body.map((paragraph, j) => (
                      <p key={j} className="text-sm text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 pt-6 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            News page updated daily. For real-time updates, follow the official MENACE Steam community hub.
          </p>
        </div>
      </div>
    </div>
  );
}
