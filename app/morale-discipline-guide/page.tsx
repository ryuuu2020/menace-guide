export const metadata = {
  title: "MENACE Morale & Discipline Guide — Keep Squads Fighting (2026)",
  description:
    "Master MENACE's morale and discipline systems: suppression, breaking points, leader aura recovery, fatigue interaction, and how to stop routs before they cascade.",
};

const moraleStates = [
  {
    state: "Steady",
    threshold: "Morale above 70%",
    behavior: "Full AP, normal accuracy, obey all orders",
    recovery: "Passive — recovers 5% per turn near leader aura",
    notes: "The default state. Your whole tactical plan assumes squads stay here. Every decision below is about not leaving it.",
  },
  {
    state: "Shaken",
    threshold: "Morale 40-70%",
    behavior: "-1 AP, -10% accuracy, suppression vulnerability doubled",
    recovery: "Rally action from leader, or 2 turns out of line of fire",
    notes: "The warning state. Shaken squads can still fight but one more bad event — a casualty, a flank, a heavy hit — pushes them to Breaking.",
  },
  {
    state: "Breaking",
    threshold: "Morale 10-40%",
    behavior: "-2 AP, -25% accuracy, may refuse movement orders",
    recovery: "Leader Rally only; passive recovery stops",
    notes: "Breaking squads are liabilities. Pull them out of line of sight immediately or they rout and take adjacent squads' morale down with them.",
  },
  {
    state: "Routing",
    threshold: "Morale below 10%",
    behavior: "Flees toward map edge, drops overwatch, uncommandable for 2 turns",
    recovery: "Automatic rally attempt after 2 turns (50% base chance + Discipline bonus)",
    notes: "A rout is the cascade trigger. Nearby friendly squads take a -15 morale hit when a squad routs in their sight. Contain routs before they start.",
  },
];

const moraleEvents = [
  { event: "Squad member killed", moraleHit: "-25", radius: "Whole squad", mitigation: "Discipline stat reduces by up to 40%; medic stabilization removes the death entirely" },
  { event: "Friendly squad routs nearby", moraleHit: "-15", radius: "Line of sight", mitigation: "Keep squads staggered so one rout is not visible to everyone" },
  { event: "Suppressed by enemy fire", moraleHit: "-10 per turn", radius: "Targeted unit", mitigation: "Suppression-immune leaders (Pike) negate this entirely for their squad" },
  { event: "Flanked (attacked from behind/side)", moraleHit: "-12", radius: "Targeted unit", mitigation: "Overwatch arcs and positioning; flanking is always preventable" },
  { event: "Heavy weapon hit (vehicle/HMG)", moraleHit: "-8", radius: "Targeted unit", mitigation: "Armor reduces the hit; spread formation so one burst cannot hit two units" },
  { event: "Killing an elite enemy", moraleHit: "+10", radius: "Whole squad", mitigation: "Proactive recovery — feed kills to Shaken squads to stabilize them" },
  { event: "Completing an objective", moraleHit: "+15", radius: "All deployed squads", mitigation: "Rush side objectives when the map is going badly; the morale bump often prevents a rout" },
];

const disciplineBuilds = [
  {
    approach: "Leader-aura anchor",
    investment: "Discipline 3+ on squad leader, Rally cooldown reduction",
    strength: "Shaken squads recover in 1-2 turns without leaving the fight",
    weakness: "If the leader goes down, the whole squad's recovery plan collapses",
    bestFor: "Suppression Grid and hold-style squads that fight in one position",
  },
  {
    approach: "Distributed discipline",
    investment: "Discipline 2 on every squad member",
    strength: "No single point of failure; rout chance drops across the board",
    weakness: "Expensive in OCI points; no burst recovery tool",
    bestFor: "Ghost Recon and infiltration squads that operate split from the leader",
  },
  {
    approach: "Suppression immunity",
    investment: "Pike-style leader perks + suppression-resistant armor",
    strength: "Removes the most common morale drain in the game entirely",
    weakness: "Does nothing against casualty morale hits",
    bestFor: "Defense and escort missions where enemy volume is the main threat",
  },
];

const faqs = [
  {
    question: "What is the difference between morale and discipline in MENACE?",
    answer:
      "Morale is the per-squad resource that rises and falls during a mission — it determines the squad's state from Steady down to Routing. Discipline is a stat that modifies how morale works: higher discipline reduces incoming morale hits (a -25 casualty hit can become -15), improves rally success chance after a rout, and speeds passive recovery. Think of morale as the health bar and discipline as the armor that protects it.",
  },
  {
    question: "How do I stop a rout cascade once it starts?",
    answer:
      "Break line of sight. The cascade mechanic is visibility-based: friendly squads only take the -15 morale hit when they see a squad rout. Move the routing squad's neighbors behind cover or around corners before the rout triggers if you can read it coming, and use a leader with Rally on the next-most-Shaken squad to push it back above the Breaking threshold. Completing any objective (+15 to everyone) is the emergency button — if a side objective is available, take it immediately.",
  },
  {
    question: "Does fatigue from the campaign layer affect morale in missions?",
    answer:
      "Yes. Squads deployed at high fatigue start the mission with reduced maximum morale — roughly -10% per fatigue tier — which means they hit Shaken and Breaking thresholds earlier. This is the hidden cost of over-deploying one squad: they do not just fight tired, they break faster. Rotate squads so no squad deploys above the second fatigue tier unless the mission is trivial.",
  },
  {
    question: "Is Rally or overwatch better for a Shaken squad's turn?",
    answer:
      "Rally, almost always. A Shaken squad at -10% accuracy contributes little on overwatch anyway, and Rally both restores morale immediately and removes the doubled suppression vulnerability. The exception is when the Shaken squad is your only Overwatch coverage on a flank — then keep the arc up and Rally with a different squad's leader on the following turn.",
  },
];

export default function MoraleDisciplineGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Combat Systems Deep Dive</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Morale &amp; Discipline Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          Most failed MENACE missions are not lost to enemy damage — they are lost to the morale
          cascade. One squad breaks, a neighbor sees it rout, and suddenly half your deployment is
          fleeing while the enemy is still at full strength. This guide explains exactly how morale
          states work, what drains and restores morale, how the discipline stat modifies everything,
          and the practical habits that keep squads fighting when a mission goes wrong.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">The Four Morale States</h2>
        <div className="space-y-4">
          {moraleStates.map((m) => (
            <div key={m.state} className="p-5 rounded-xl border border-border bg-surface">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">{m.state}</h3>
                <p className="text-sm text-green-300 md:text-right">{m.threshold}</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-1">
                <span className="text-white font-medium">Effect:</span> {m.behavior}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-1">
                <span className="text-white font-medium">Recovery:</span> {m.recovery}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{m.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Morale Events — What Drains and Restores It</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Morale changes are event-driven, not time-driven. A squad that takes no hits and sees nothing
          bad can hold Steady for an entire mission without any recovery actions. That means morale
          management is really event management: prevent the drains you can prevent, and use the
          positive events deliberately to stabilize squads that are slipping.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Event</th>
                <th className="p-3 border border-border text-green-400">Morale</th>
                <th className="p-3 border border-border text-green-400">Affects</th>
                <th className="p-3 border border-border text-green-400">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {moraleEvents.map((e) => (
                <tr key={e.event} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{e.event}</td>
                  <td className={`p-3 border border-border font-semibold ${e.moraleHit.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{e.moraleHit}</td>
                  <td className="p-3 border border-border text-gray-300">{e.radius}</td>
                  <td className="p-3 border border-border text-gray-300">{e.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Discipline: The Stat That Protects the Bar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Reduces morale hits</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Each point of discipline shaves incoming morale damage, up to roughly 40% at high
              investment. A -25 casualty hit becomes -15 — often the difference between Shaken and Breaking.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Improves rally chance</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              After a rout, the automatic rally attempt uses a 50% base chance plus discipline bonuses.
              High-discipline squads reliably self-recover; low-discipline squads can rout twice in a row.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Speeds passive recovery</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Discipline raises the per-turn morale recovery inside a leader aura from 5% toward 8%,
              which is what lets Shaken squads stabilize without spending actions on Rally.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Three Ways to Invest in Discipline</h3>
        <div className="space-y-4">
          {disciplineBuilds.map((d) => (
            <div key={d.approach} className="p-5 rounded-xl border border-border bg-surface">
              <h4 className="font-semibold text-white mb-2">{d.approach}</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-1">
                <span className="text-white font-medium">Investment:</span> {d.investment}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-1">
                <span className="text-white font-medium">Strength:</span> {d.strength}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-1">
                <span className="text-white font-medium">Weakness:</span> {d.weakness}
              </p>
              <p className="text-sm text-green-300 leading-relaxed">
                <span className="text-white font-medium">Best for:</span> {d.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Field Habits That Prevent Routs</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Stagger your squads</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The rout cascade only spreads through line of sight. If every squad can see every other
              squad, one rout hits everyone. Fight in echelons — a forward element and a support element
              offset behind cover — so a rout in the front line is invisible to the back line.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Feed kills to Shaken squads</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Killing an elite enemy is +10 morale to the squad that lands the kill. When one squad is
              Shaken, let them finish wounded elites instead of your Steady squads. It is free therapy
              that also keeps your damage dealers efficient.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Treat objectives as morale items</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Completing any objective is +15 morale to every deployed squad. On a mission going badly,
              a side objective is not a distraction — it is the single largest morale heal in the game.
              Plan routes so at least one objective stays available as an emergency button.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Rotate fatigued squads out</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Campaign fatigue lowers a squad's starting maximum morale. A squad deployed tired breaks
              earlier and recovers slower, which makes rout cascades far more likely. Two rested squads
              are worth more than three tired ones — build your roster around rotation, not around one
              overworked A-team.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-8">Last updated: July 18, 2026</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/squad-tier-list" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Squad Tier List</h3>
            <p className="text-sm text-gray-400">Which squads handle morale pressure best across a campaign.</p>
          </a>
          <a href="/squad-leaders" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Squad Leaders Guide</h3>
            <p className="text-sm text-gray-400">Leader auras, Rally, and discipline-focused leader picks.</p>
          </a>
          <a href="/combat" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Combat Guide</h3>
            <p className="text-sm text-gray-400">AP, suppression, and positioning fundamentals.</p>
          </a>
          <a href="/advanced-tactics" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Advanced Tactics</h3>
            <p className="text-sm text-gray-400">Overwatch arcs, flanking prevention, and staggered formations.</p>
          </a>
          <a href="/best-team-comps" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Best Team Comps</h3>
            <p className="text-sm text-gray-400">Rosters built to survive casualty-heavy missions.</p>
          </a>
          <a href="/campaign-guide" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Campaign Guide</h3>
            <p className="text-sm text-gray-400">Fatigue management and squad rotation on the strategy layer.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
