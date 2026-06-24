import type { Metadata } from "next";
import { combatMechanics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Combat System Guide — Mechanics & Strategies",
  description: "Complete MENACE combat system guide: Action Points, Suppression, cover mechanics, directional armor, morale, orbital strikes, and advanced combat tactics.",
};

export default function CombatPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Combat <span className="text-accent">System</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Master MENACE&apos;s turn-based tactical combat. From Action Points and suppression to cover,
        directional armor, morale, and orbital strikes — every mechanic explained in detail.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>How does the turn order work in MENACE?</summary>
          <p>There is no initiative system. Each faction must complete all their squads&apos; actions before the next faction acts. You control the order of your squads. A key tactic: move a tank into position at the end of your turn, then attack with it first next turn.</p>
        </details>
        <details>
          <summary>What&apos;s the optimal combat flow?</summary>
          <p>The core loop: Suppress enemies with LMGs or grenades → Flank to hit weaker armor → Destroy with focused fire. Suppressed enemies have reduced accuracy and AP. Never engage fresh, unsuppressed enemies with single squads — coordinate your attacks.</p>
        </details>
        <details>
          <summary>How do I deal with enemy vehicles?</summary>
          <p>Vehicles have directional armor — attack from the side or rear. Use anti-tank weapons (RPGs, AT-Grenades, ATGM Launchers). The Anti-Materiel Rifle &apos;Crocodile&apos; is excellent. EMP grenades can disable vehicle weapons temporarily. Orbital strikes bypass armor entirely.</p>
        </details>
      </div>

      <div className="space-y-6">
        {combatMechanics.map((mech, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-3">
              <span className="text-accent">0{i + 1}</span> {mech.title}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">{mech.detail}</p>
          </div>
        ))}
      </div>

      {/* Advanced Tips */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold font-heading">Advanced Combat Tips</h2>
        <div className="p-5 rounded-xl border border-border bg-surface">
          <h3 className="font-semibold text-sm text-accent mb-2">Orbital Strike Combos</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Orbital strikes take a full turn to arrive. The target area is visible to enemies —
            they&apos;ll try to escape. Counter this by suppressing targets in the strike zone with LMG fire.
            Suppressed enemies have reduced AP and cannot escape the blast radius. Landing a strike on a
            pinned squad is devastating.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-border bg-surface">
          <h3 className="font-semibold text-sm text-accent mb-2">Vehicle Ramming</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Vehicles can ram enemy infantry, dealing instant casualties and massive suppression. This
            is especially effective against suppressed or shaken squads. Ramming consumes movement AP
            but no attack AP — you can ram and still fire weapons in the same turn. Use light vehicles
            for hit-and-run ramming tactics.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-border bg-surface">
          <h3 className="font-semibold text-sm text-accent mb-2">Concealment Breaking</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Breaking concealment to attack grants a significant accuracy bonus on the first shot. Pair
            this with Kody Greifinger&apos;s Guerilla perk for devastating alpha strikes. Use smoke grenades
            to re-establish concealment after attacking, enabling repeated ambush cycles.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-border bg-surface">
          <h3 className="font-semibold text-sm text-accent mb-2">Morale Cascades</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            When a squad loses multiple soldiers in one turn, they become Shaken (no attacks this turn).
            If they continue taking losses or are isolated, they rout and may flee the battlefield.
            Focus fire on already-shaken squads to trigger rout cascades — a routed enemy is defenseless
            and can be ignored while you eliminate other threats.
          </p>
        </div>
      </div>
    </div>
  );
}
