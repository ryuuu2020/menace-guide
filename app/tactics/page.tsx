import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Tactics Guide — Pressure, Control, and Recovery Discipline",
  description:
    "A practical MENACE tactics guide focused on suppression, line control, exposure management, conversion timing, and how to recover turns before they become disasters.",
};

const tacticalLayers = [
  {
    layer: "Information",
    purpose:
      "Know which enemy group actually matters before you spend movement, consumables, or confidence on the wrong side of the map.",
    failure:
      "Many bad turns begin with a confident advance into a fight that was never fully read.",
  },
  {
    layer: "Line control",
    purpose:
      "Force the enemy to attack through the space you prepared rather than through the space they chose for you.",
    failure:
      "If your first contact creates angles you cannot cover, the rest of the turn becomes recovery instead of offense.",
  },
  {
    layer: "Conversion timing",
    purpose:
      "Spend damage after suppression, exposure, or isolation has already made the kill valuable and safe.",
    failure:
      "Players lose campaigns by firing early into targets that were inconvenient, not decisive.",
  },
  {
    layer: "Recovery",
    purpose:
      "Keep one answer in reserve for when the turn does not go as planned.",
    failure:
      "A squad that uses every tool to look strong at the start of the turn becomes helpless when the map pushes back.",
  },
];

const doctrineTable = [
  {
    situation: "Enemy numbers are wider than your opening line",
    bestResponse:
      "Shrink the fight. Suppress, break vision, or back one angle off until the enemy can only reach you in manageable pieces.",
    trap:
      "Trying to match every angle with a body usually creates more exposed units than actual control.",
  },
  {
    situation: "A dangerous enemy is visible but not yet isolated",
    bestResponse:
      "Stabilize the board first, then convert the kill once the return fire path is less punishing.",
    trap:
      "Greedy focus fire that leaves your squad open to the rest of the room is a classic fake-winning turn.",
  },
  {
    situation: "Your front line took contact earlier than expected",
    bestResponse:
      "Switch from perfect kill planning to survivable shape planning. Secure safer cover, reduce enemy actions, and rebuild control.",
    trap:
      "Players often continue the original attack script even after the board state clearly changed.",
  },
  {
    situation: "The mission wants speed but the board looks unstable",
    bestResponse:
      "Find the smallest stable advance rather than freezing or sprinting. MENACE rewards controlled tempo more than reckless acceleration.",
    trap:
      "Rushing without control and turtling without progress both lose missions for different reasons.",
  },
];

const tacticalHabits = [
  {
    title: "Suppress to buy decisions, not to celebrate a mechanic",
    body:
      "Suppression is powerful because it reduces how many bad answers the enemy still has. Use it to simplify the turn, then convert that simplification into safer movement or cleaner kills.",
  },
  {
    title: "Expose one squad on purpose, not three squads by accident",
    body:
      "Sometimes one unit needs to take the forward risk so the rest of the team can act around it. Problems start when the whole squad drifts forward without a clear exposure budget.",
  },
  {
    title: "Vehicles and infantry should solve different jobs",
    body:
      "Do not treat armor as a generic upgrade over infantry. A vehicle that controls space and absorbs attention is valuable. A vehicle dragged into cramped fights because it feels expensive enough to use is not.",
  },
];

const checklist = [
  "What enemy group actually decides this turn if I ignore it?",
  "Which unit can safely take first contact if the read is slightly wrong?",
  "What action am I saving in case the board state gets worse than expected?",
  "If this kill succeeds, does the map become safer or only cleaner-looking?",
];

const faqs = [
  {
    question: "What is the core tactical skill in MENACE?",
    answer:
      "Reading which pressure matters now, then shrinking the fight until your squad can solve it safely. MENACE rewards disciplined board control more than cinematic aggression.",
  },
  {
    question: "Why do strong squads still get wiped?",
    answer:
      "Because strength without shape is fragile. A loaded squad that exposes itself to too many angles or spends its recovery tools too early is still one bad turn away from collapse.",
  },
  {
    question: "Should I memorize advanced combos and named team builds?",
    answer:
      "This page is not a fake advanced combo catalog. What transfers between runs is pressure discipline, suppression timing, and recovery planning, not a list of supposedly universal magic lineups.",
  },
];

export default function TacticsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Combat Doctrine</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          <span className="text-accent">#</span> MENACE Tactics Guide
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Good MENACE tactics are not about inventing the fanciest combo line. They are about reading
          pressure correctly, controlling the line of contact, converting advantage at the right
          moment, and still having a recovery plan when the turn stops behaving. That is the doctrine
          this page is built around.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 font-heading">
          <span className="text-accent">#</span> Four Layers of a Stable Turn
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tacticalLayers.map((item) => (
            <div key={item.layer} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{item.layer}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-2">{item.purpose}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Failure mode:</span> {item.failure}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 font-heading">
          <span className="text-accent">#</span> How To Respond to Common Board States
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Situation</th>
                <th className="p-3 border border-border text-white">Best Response</th>
                <th className="p-3 border border-border text-white">What Usually Goes Wrong</th>
              </tr>
            </thead>
            <tbody>
              {doctrineTable.map((row) => (
                <tr key={row.situation} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.situation}</td>
                  <td className="p-3 border border-border text-gray-300">{row.bestResponse}</td>
                  <td className="p-3 border border-border text-gray-300">{row.trap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> Habits That Actually Scale
        </h2>
        {tacticalHabits.map((item) => (
          <div key={item.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-3">
          <span className="text-accent">#</span> Turn Checklist
        </h2>
        <ul className="space-y-3 list-disc pl-5 text-sm text-gray-300">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/factions" className="text-accent hover:underline">
          Factions →
        </Link>
        <Link href="/black-market" className="text-accent hover:underline">
          Black Market →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 10, 2026</p>
    </div>
  );
}
