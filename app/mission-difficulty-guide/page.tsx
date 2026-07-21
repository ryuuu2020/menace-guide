import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Mission Difficulty Guide — Read Fit, Margin, and Retreat Risk",
  description:
    "A practical MENACE mission difficulty guide focused on roster fit, campaign margin, retreat logic, and how to judge whether a mission is hard for you right now.",
};

const dangerSignals = [
  {
    signal: "Wrong squad identity for the mission",
    why:
      "A familiar mission can still be hard when the roster is solving the wrong problem. Difficulty often comes from mismatch before enemy stats ever matter.",
  },
  {
    signal: "No recovery line if the opening plan fails",
    why:
      "Hard missions become campaign killers when one collapsed lane or one bad read leaves the squad with no second answer.",
  },
  {
    signal: "You are deploying from fatigue, damage, or supply stress",
    why:
      "The same objective becomes far more dangerous once the roster enters already compromised. Margin is part of difficulty.",
  },
  {
    signal: "The mission has no acceptable retreat threshold in your head",
    why:
      "If the only plan is to continue until disaster, the briefing is already harder than you are admitting.",
  },
];

const checklist = [
  {
    check: "What exactly ends this mission fastest if I misread it?",
    why:
      "Difficulty is easier to judge once you know whether the real tax is contact chaos, hold pressure, stealth timing, or anti-large requirements.",
  },
  {
    check: "Does my squad solve that tax or merely survive it?",
    why:
      "Surviving the mission's pressure is not the same as answering it. Hard missions punish lineups that confuse the two.",
  },
  {
    check: "What does success cost this campaign if everything goes only moderately well?",
    why:
      "A mission can be technically winnable and still strategically too expensive.",
  },
  {
    check: "At what point do I stop trading mission pride for campaign damage?",
    why:
      "Retreat logic should be part of the read before deployment, not an improvisation after losses have already compounded.",
  },
];

const missionReadings = [
  {
    type: "Routine assault or elimination",
    hiddenRisk:
      "These are often misread as easy because they look familiar. In reality, they are where quiet attrition and careless confidence accumulate.",
    mindset:
      "Play them cleanly, not casually. Routine fights are often where healthy campaigns become brittle.",
  },
  {
    type: "Defense or holdout",
    hiddenRisk:
      "These punish weak recovery structure more than weak offense. The first breach matters more than the final wave fantasy.",
    mindset:
      "Judge whether you can rebuild shape after contact, not only whether you can output damage.",
  },
  {
    type: "Recon, stealth, or infiltration",
    hiddenRisk:
      "These become much harder when forced with static or heavy squads that solve fights well but solve information poorly.",
    mindset:
      "Believe what the briefing is asking for. Tempo and information are the real difficulty filter here.",
  },
  {
    type: "Boss, hive, or anti-large mission",
    hiddenRisk:
      "A narrow specialist check exposes underprepared anti-large planning immediately, even if the rest of the campaign felt smooth.",
    mindset:
      "Bring the roster slot built for this moment instead of improvising a solution out of generic strength.",
  },
];

const faqs = [
  {
    question: "How do I know a mission is too hard right now?",
    answer:
      "If success depends on everything going right rather than on a plan with recoverable failure states, it is probably too hard for the current campaign state. MENACE difficulty is often a margin problem, not a label problem.",
  },
  {
    question: "When should I retreat?",
    answer:
      "Retreat when the mission has stopped being a tactical puzzle and started becoming campaign debt you cannot absorb. Preserving leaders, bench depth, and future deployments is often the better win.",
  },
  {
    question: "What is the most common mission-difficulty mistake?",
    answer:
      "Treating difficulty like a flat number while ignoring roster fit, fatigue, mission shape, and acceptable retreat cost. This page is not a fake danger-score calculator.",
  },
];

export default function MissionDifficultyGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Readiness And Margin</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-green-400 mb-3">MENACE Mission Difficulty Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          Mission difficulty in MENACE is rarely just a danger label. It is usually a fit problem, a
          margin problem, or a retreat problem. The useful read is whether this mission is hard for
          your current roster right now, not whether it sounds hard in the abstract.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Four Real Danger Signals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dangerSignals.map((item) => (
            <div key={item.signal} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{item.signal}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Read the Briefing Before the Difficulty Reads You</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Question</th>
                <th className="p-3 border border-border text-white">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((row) => (
                <tr key={row.check} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.check}</td>
                  <td className="p-3 border border-border text-gray-300">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">How Different Mission Types Hide Their Difficulty</h2>
        <div className="space-y-4">
          {missionReadings.map((row) => (
            <div key={row.type} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{row.type}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-2">
                <span className="text-white font-medium">Hidden risk:</span> {row.hiddenRisk}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-white font-medium">Best mindset:</span> {row.mindset}
              </p>
            </div>
          ))}
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
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/missions" className="text-accent hover:underline">
          Missions →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/resources" className="text-accent hover:underline">
          Resources →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
