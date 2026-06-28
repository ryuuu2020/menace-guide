import Link from 'next/link';
import Image from 'next/image';
import { squadLeaders, beginnerTips } from '@/lib/data';

const QUICK_LINKS = [
  { label: 'Weapons Guide', desc: 'Stats & comparisons', href: '/weapons' },
  { label: 'Vehicles', desc: 'Tanks, mechs & walkers', href: '/vehicles' },
  { label: 'Combat System', desc: 'Mechanics deep dive', href: '/combat' },
  { label: 'Black Market', desc: 'Trading & economy', href: '/black-market' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-warning-orange';
    case 'A': return 'text-tactical-blue';
    case 'B': return 'text-terminal-green';
    default: return 'text-text-secondary';
  }
}
export const metadata = {
  title: "MENACE MENACE Guide — Complete Guide (2026)",
  description:
    "The complete strategy guide for MENACE — the sci-fi tactical RPG from the creators
            of Battle Brothers. Squad leader tier lists, faction breakdowns, weapon stats,
            vehicle loadou...",
};


export default function HomePage() {
  const leaders = squadLeaders.filter((l) => l.tier === 'S' || l.tier === 'A');

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* ===== Hero Section ===== */}
        <section className="bg-abyss-light border border-border-subtle p-6 lg:p-8">
          <Image
            src="/hero.jpg"
            alt="MENACE"
            width={460}
            height={215}
            priority
            className="w-full h-48 lg:h-64 object-cover rounded mb-6"
          />
          <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
            <span className="text-tactical-blue">MENACE</span> Guide
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary leading-relaxed">
            The complete strategy guide for MENACE — the sci-fi tactical RPG from the creators
            of Battle Brothers. Squad leader tier lists, faction breakdowns, weapon stats,
            vehicle loadouts, combat tactics, and everything you need to lead your strike force
            to victory.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/beginners-guide"
              className="inline-flex items-center gap-2 px-4 py-2 bg-tactical-blue text-abyss font-mono text-xs font-semibold hover:bg-tactical-blue-dim transition-colors"
            >
              Beginner&apos;s Guide
            </Link>
            <Link
              href="/squad-leaders"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle text-text-secondary font-mono text-xs hover:border-tactical-blue hover:text-tactical-blue transition-colors"
            >
              Squad Leaders Tier List
            </Link>
            <Link
              href="/factions"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle text-text-secondary font-mono text-xs hover:border-tactical-blue hover:text-tactical-blue transition-colors"
            >
              Factions Guide
            </Link>
          </div>
        </section>

        {/* ===== Section 1: Tier Table ===== */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                Squad Leaders Tier List
              </h2>
              <p className="text-xs font-mono text-text-muted mt-1">
                S &amp; A tier leaders — stats and faction data
              </p>
            </div>
            <Link
              href="/squad-leaders"
              className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
            >
              VIEW ALL &rarr;
            </Link>
          </div>

          {/* Data table */}
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted w-12">
                    TIER
                  </th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    NAME
                  </th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    FACTION
                  </th>
                  <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    AGI
                  </th>
                  <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    WS
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((leader) => (
                  <tr key={leader.slug} className="data-row">
                    <td className="py-2.5 px-4">
                      <span className={`font-mono font-bold text-sm ${getTierColor(leader.tier)}`}>
                        {leader.tier}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      <Link
                        href={`/squad-leaders/${leader.slug}`}
                        className="text-text-primary hover:text-tactical-blue transition-colors"
                      >
                        {leader.name}
                      </Link>
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="tag">{leader.faction}</span>
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-text-secondary">
                      {leader.agi}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-text-secondary">
                      {leader.ws}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Section 2: Quick Links / Stat Cards ===== */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Explore Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {QUICK_LINKS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="stat-card hover:border-tactical-blue transition-colors group"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                  {card.label}
                </p>
                <p className="text-sm text-text-secondary group-hover:text-tactical-blue transition-colors">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Section 3: Beginner Tips ===== */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Essential Tips for New Commanders
            </h2>
          </div>
          <div className="bg-abyss-light border border-border-subtle">
            {beginnerTips.slice(0, 6).map((tip, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 px-4 py-3 ${
                  i < 5 ? 'border-b border-grid-line' : ''
                }`}
              >
                <span className="text-xs font-mono text-text-muted w-6 tabular-nums shrink-0 pt-0.5">
                  #{String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm text-text-primary font-semibold">{tip.title}</h3>
                  <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                    {tip.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <Link
              href="/beginners-guide"
              className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
            >
              READ FULL GUIDE &rarr;
            </Link>
          </div>
        </section>

        {/* ===== Terminal Block ===== */}
        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> system.status
          </p>
          <p>game: MENACE / build: Early Access</p>
          <p>studio: Overhype Studios (Battle Brothers)</p>
          <p>factions: 7 / squad leaders: 11</p>
          <p className="cursor-blink">ready</p>
        </div>
      </div>
    </div>
  );
}
