import type { Metadata } from "next";
import Link from "next/link";
import { squadLeaders, factions, beginnerTips, combatMechanics } from "@/lib/data";

export const metadata: Metadata = {
  title: "MENACE Guide — Squad Leaders, Factions & Tactics Wiki",
  description: "Complete MENACE strategy guide: squad leader tier list with stats and perks, all 7 factions breakdown, weapons, vehicles, combat mechanics, black market, and beginner walkthrough from Overhype Studios.",
};

export default function HomePage() {
  const sTier = squadLeaders.filter((s) => s.tier === "S");
  const aTier = squadLeaders.filter((s) => s.tier === "A");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-wide leading-tight">
            <span className="text-accent accent-glow">MENACE</span> Guide
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            The complete strategy guide for MENACE — the sci-fi tactical RPG from the creators of
            Battle Brothers. Squad leader tier lists, faction breakdowns, weapon stats, vehicle
            loadouts, combat tactics, and everything you need to lead your strike force to victory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/beginners-guide" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm">
              Beginner&apos;s Guide
            </Link>
            <Link href="/squad-leaders" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors text-sm">
              Squad Leaders Tier List
            </Link>
            <Link href="/factions" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors text-sm">
              Factions Guide
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {/* Top Squad Leaders */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-heading tracking-wide">
              <span className="text-accent">S-Tier</span> & <span className="text-accent-secondary">A-Tier</span> Squad Leaders
            </h2>
            <Link href="/squad-leaders" className="text-sm text-accent hover:underline">View All 11 Leaders →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...sTier, ...aTier.slice(0, 4)].map((leader) => (
              <Link
                key={leader.slug}
                href={`/squad-leaders/${leader.slug}`}
                className="block p-4 rounded-xl border border-border bg-surface card-hover"
                style={{ borderLeftWidth: "3px", borderLeftColor: leader.color }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{leader.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-mono font-bold">
                    {leader.tier}-Tier
                  </span>
                </div>
                <p className="text-xs text-text-muted mb-2">{leader.tagline}</p>
                <div className="flex gap-2 text-xs text-text-muted">
                  <span>AGI {leader.agi}</span>
                  <span>WS {leader.ws}</span>
                  <span>{leader.faction}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Beginner Tips */}
        <section>
          <h2 className="text-2xl font-bold font-heading tracking-wide mb-6">
            <span className="text-accent">#</span> Essential Tips for New Commanders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beginnerTips.slice(0, 6).map((tip, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-surface">
                <h3 className="font-semibold text-sm text-accent mb-1">{tip.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/beginners-guide" className="text-sm text-accent hover:underline">Read Full Beginner&apos;s Guide →</Link>
          </div>
        </section>

        {/* Factions Overview */}
        <section>
          <h2 className="text-2xl font-bold font-heading tracking-wide mb-6">
            <span className="text-accent">#</span> Factions at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {factions.map((f) => (
              <Link
                key={f.slug}
                href={`/factions#${f.slug}`}
                className="p-3 rounded-lg border border-border bg-surface card-hover text-center"
                style={{ borderTopWidth: "3px", borderTopColor: f.color }}
              >
                <div className="font-semibold text-sm">{f.name}</div>
                <div className="text-xs text-text-muted mt-1">{f.difficulty}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Combat Quick Reference */}
        <section>
          <h2 className="text-2xl font-bold font-heading tracking-wide mb-6">
            <span className="text-accent">#</span> Combat Mechanics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {combatMechanics.map((mech, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-surface">
                <h3 className="font-semibold text-sm text-accent-secondary mb-2">{mech.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{mech.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/combat" className="text-sm text-accent hover:underline">Full Combat System Guide →</Link>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-bold font-heading tracking-wide mb-6">
            <span className="text-accent">#</span> Explore Guides
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/weapons", label: "Weapons Guide", desc: "Stats & comparisons" },
              { href: "/vehicles", label: "Vehicles", desc: "Tanks, mechs & walkers" },
              { href: "/combat", label: "Combat System", desc: "Mechanics deep dive" },
              { href: "/black-market", label: "Black Market", desc: "Trading & economy" },
              { href: "/oci-upgrades", label: "O.C.I. Upgrades", desc: "Ship systems" },
              { href: "/resources", label: "Resource Guide", desc: "Supply & manpower" },
              { href: "/missions", label: "Mission Types", desc: "Operations & objectives" },
              { href: "/tactics", label: "Advanced Tactics", desc: "Expert strategies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-lg border border-border bg-surface card-hover"
              >
                <div className="font-semibold text-sm">{item.label}</div>
                <div className="text-xs text-text-muted mt-1">{item.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
