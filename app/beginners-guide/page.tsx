import type { Metadata } from "next";
import Link from "next/link";
import { beginnerTips, combatMechanics, ociUpgrades } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beginner's Guide — How to Play MENACE",
  description: "Complete MENACE beginner guide: essential tips, combat basics, squad management, Black Market, O.C.I. upgrades, and faction strategy for new commanders.",
};

export default function BeginnersGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Beginner&apos;s Guide to <span className="text-accent">MENACE</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        New to MENACE? This guide covers everything you need to survive the Wayback System — from
        your first mission to commanding a full strike force. Written for players who want to
        understand the game, not just copy builds.
      </p>

      {/* FAQ Snippets */}
      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading">
          <span className="text-accent">#</span> Quick FAQ
        </h2>
        <details>
          <summary>Is MENACE hard to learn?</summary>
          <p>MENACE has depth but is not overwhelming. If you&apos;ve played Battle Brothers or XCOM, you&apos;ll feel at home. New players should start on lower difficulty, focus on the basics (cover, suppression, rotation), and gradually increase complexity. The game rewards methodical play over reckless aggression.</p>
        </details>
        <details>
          <summary>What should I do in my first 5 hours?</summary>
          <p>1) Complete the tutorial operations. 2) Unlock 3-4 squad leaders and rotate them. 3) Prioritize Alien Wildlife missions for easy XP. 4) Invest first O.C.I. points in Electronics for mission intel. 5) Check the Black Market after every operation for gear upgrades.</p>
        </details>
        <details>
          <summary>Which squad leaders are best for beginners?</summary>
          <p>Jane Darby (S-Tier sniper), Edwin Pike (suppression immunity), and Kody Greifinger (versatile all-rounder) are the most forgiving choices. Avoid Marta Carda (extreme risk) and J.G. Wetteroth (situational) until you understand the combat system.</p>
        </details>
      </div>

      {/* Getting Started */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">01</span> Getting Started
        </h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          You are the commander of the TCRN Impetus, a strike cruiser stranded in the Wayback System
          after the Warp Gate was damaged. Your mission: lead a mixed force of marines, mercenaries,
          and even criminals against pirates, rogue armies, corporate forces, and an emerging alien
          threat known as the MENACE.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-sm text-accent mb-2">Your Ship (TCRN Impetus)</h3>
            <p className="text-xs text-text-muted">Your mobile base. Upgradable via O.C.I. components across Electronics, Weapons, and Hull systems. Upgrades persist across the entire campaign.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-sm text-accent mb-2">The Starmap</h3>
            <p className="text-xs text-text-muted">Strategic map showing available operations. Each operation contains multiple missions. Choose operations based on faction relationships and rewards.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-sm text-accent mb-2">Squad Leaders</h3>
            <p className="text-xs text-text-muted">You command squads through Squad Leaders — unique characters with stats, perks, and growth potential. Rotate leaders to avoid Fatigue penalties.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-sm text-accent mb-2">The Black Market</h3>
            <p className="text-xs text-text-muted">Your primary source of weapons, armor, vehicles, and recruits. Inventory refreshes after each operation. Barter system — match value, no currency.</p>
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">02</span> Essential Tips for Survival
        </h2>
        <div className="space-y-3">
          {beginnerTips.map((tip, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-sm text-accent mb-1">{i + 1}. {tip.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{tip.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Combat Basics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">03</span> Combat Basics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {combatMechanics.map((mech, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-sm text-accent-secondary mb-2">{mech.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{mech.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/combat" className="text-sm text-accent hover:underline">Read the full Combat System Guide →</Link>
        </div>
      </section>

      {/* O.C.I. Upgrade Priority */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">04</span> Ship O.C.I. Upgrade Priority
        </h2>
        <div className="space-y-4">
          {ociUpgrades.map((cat, i) => (
            <div key={i} className="p-5 rounded-xl border border-border bg-surface">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">{cat.category}</h3>
                <span className="text-xs text-accent font-mono">{cat.priority}</span>
              </div>
              <p className="text-xs text-text-muted mb-3">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.upgrades.map((upg, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded bg-surface-hover border border-border">{upg}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-2">
          <span className="text-accent">&#9878;</span> Next Steps
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mb-3">
          Now that you understand the basics, dive deeper into specific guides:
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/squad-leaders" className="text-accent hover:underline">Squad Leaders Tier List →</Link>
          <span className="text-text-muted">|</span>
          <Link href="/weapons" className="text-accent hover:underline">Weapons Guide →</Link>
          <span className="text-text-muted">|</span>
          <Link href="/factions" className="text-accent hover:underline">Factions Strategy →</Link>
          <span className="text-text-muted">|</span>
          <Link href="/tactics" className="text-accent hover:underline">Advanced Tactics →</Link>
        </div>
      </section>
    </div>
  );
}
