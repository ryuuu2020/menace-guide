'use client';

import { useState } from 'react';
import Link from 'next/link';
import { squadLeaders, beginnerTips } from '@/lib/data';

const NAV_ITEMS = [
  { label: 'Squad Leaders', href: '/squad-leaders' },
  { label: 'Beginners Guide', href: '/beginners-guide' },
  { label: 'Factions', href: '/factions' },
  { label: 'Weapons', href: '/weapons' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Combat', href: '/combat' },
  { label: 'Black Market', href: '/black-market' },
];

const STATS = [
  { label: 'ACTIVE LEADERS', value: '11' },
  { label: 'S-TIER', value: '3' },
  { label: 'FACTIONS', value: '7' },
  { label: 'PATCH', value: 'EA 1.0' },
];

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

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const leaders = squadLeaders.filter((l) => l.tier === 'S' || l.tier === 'A');

  return (
    <div className="flex min-h-screen">
      {/* ===== Mobile overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-56 bg-[#0a0e13] border-r border-border-subtle
          transform transition-transform duration-200
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle">
          <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
            MENACE
          </span>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex flex-col gap-0.5">
          <Link
            href="/"
            className="sidebar-link active"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="w-1.5 h-1.5 bg-current opacity-40" />
            Home
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sidebar-link"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="w-1.5 h-1.5 bg-current opacity-40" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">MENACE Guide</p>
          <p className="text-[10px] font-mono text-text-muted mt-0.5">v1.0.0</p>
        </div>
      </aside>

      {/* ===== Main content ===== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Top Stats Bar ===== */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
          </button>

          {/* Stats */}
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
              <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* ONLINE indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
            <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
          </div>
        </header>

        {/* ===== Content area with grid bg ===== */}
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* ===== Hero Section ===== */}
            <section className="bg-abyss-light border border-border-subtle p-6 lg:p-8">
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
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-border-subtle bg-abyss">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} MENACE Guide. </span>
                <span className="text-text-muted/50">
                  Unofficial fan guide for MENACE by Overhype Studios / Hooded Horse.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/about"
                  className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/privacy"
                  className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>

            {/* Inter-site links */}
            <div className="mt-4 pt-4 border-t border-grid-line">
              <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                More Game Guides
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://olden-era-guide-tau.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors"
                >
                  Olden Era Guide
                </a>
                <a
                  href="https://dispatch-guide-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors"
                >
                  Dispatch Guide
                </a>
              </div>
            </div>

            {/* Support links */}
            <div className="mt-4 pt-4 border-t border-grid-line">
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://afdian.com/a/gameguidehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  ❤️ Support Us
                </a>
                <a
                  href="https://amazon.com/s?k=gaming+gear&tag=gameguidehub-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                >
                  Shop Gaming Gear
                </a>
              </div>
              <p className="text-[10px] font-mono text-text-muted/50 mt-1">
                As an Amazon Associate we earn from qualifying purchases.
              </p>
            </div>

            <p className="text-center text-[10px] font-mono text-text-muted mt-4">
              Available on PC via Steam, GOG, Epic Games Store, and Microsoft Store. Early Access.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
