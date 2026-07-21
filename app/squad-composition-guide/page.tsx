import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Squad Composition Guide — Assemble Jobs, Not Fake Optimal Loadouts",
  description:
    "A practical MENACE squad composition guide focused on job coverage, mission shape, reserve planning, and how to assemble squads without fake optimal loadout formulas.",
};

const coreJobs = [
  {
    job: "Anchor",
    purpose:
      "Absorb first contact without letting the whole squad shape collapse. This job keeps the rest of the plan playable when the map pushes back earlier than expected.",
    overbuild:
      "Too many anchors turn the squad into a wall that cannot convert pressure into progress.",
  },
  {
    job: "Conversion damage",
    purpose:
      "Finish the exposed or controlled target once suppression, angle control, or terrain use already made that target worth killing.",
    overbuild:
      "Stacking finishers without enough setup creates squads that look deadly but cannot create the safe turns they need.",
  },
  {
    job: "Information or control",
    purpose:
      "Reveal the board, simplify enemy options, or deny the one angle that would otherwise ruin the turn.",
    overbuild:
      "Pure utility starts underperforming when the squad has no one actually cashing in on the information it bought.",
  },
  {
    job: "Recovery or sustain",
    purpose:
      "Protect campaign integrity by making imperfect turns less expensive and preserving action economy after contact goes wrong.",
    overbuild:
      "Too much sustain can hide the fact that the squad still lacks a clean way to solve decisive fights.",
  },
];

const compositionTable = [
  {
    mission: "Unclear or mixed-pressure mission",
    build:
      "Start with one anchor, one converter, one info-control piece, and one sustain slot, then use the last slot for the briefing's real demand.",
    mistake:
      "Defaulting to a favorite lineup before naming the mission's actual failure condition.",
  },
  {
    mission: "Entrenched or armored pressure",
    build:
      "Keep one stable front, then bias the flex slots toward breach support and durable conversion instead of generic damage stacking.",
    mistake:
      "Adding more raw damage without solving how the squad will open the hard target safely.",
  },
  {
    mission: "Wide reconnaissance or fragile timing map",
    build:
      "Preserve mobility and information value while keeping one fallback body that can hold the line if the read is wrong.",
    mistake:
      "Overcommitting to stealth or speed until one messy contact exposes the squad's lack of recovery.",
  },
  {
    mission: "Campaign-preservation operation",
    build:
      "Choose roles that lower attrition, reduce exposure, and exit the map with a healthier next mission state.",
    mistake:
      "Treating every mission as the place to test your highest-ceiling composition.",
  },
];

const compositionRules = [
  {
    title: "Build around the next ugly turn",
    body:
      "A good squad is not designed around its best turn. It is designed around the turn where first contact went wrong and you still need the mission to remain recoverable.",
  },
  {
    title: "Flex slots must stay honest",
    body:
      "If your flex slot never changes, it is not a flex slot. MENACE briefings matter too much for that. Let the mission shape decide the last answer you bring.",
  },
  {
    title: "Weapon choices only matter after job coverage is real",
    body:
      "Players waste time chasing perfect loadout language before the squad even has coherent jobs. Coverage first, loadout tuning second.",
  },
];

const faqs = [
  {
    question: "What is the most important role in a MENACE squad?",
    answer:
      "The role your current campaign is missing most often. In many runs that is an anchor or a control piece, because those jobs prevent the turn from becoming unrecoverable before damage ever matters.",
  },
  {
    question: "Should every squad have the same structure?",
    answer:
      "No, but every good squad should still cover the essential jobs somehow: survive contact, convert advantage, read or control the board, and preserve enough recovery to continue the campaign.",
  },
  {
    question: "How should I read squad composition advice here?",
    answer:
      "This page is not a fake optimal loadout spreadsheet. Read it as a way to assemble job coverage around mission shape, not as a promise that one exact roster formula is always correct.",
  },
];

export default function SquadCompositionGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Job Coverage</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          <span className="text-accent">#</span> Squad Composition Guide
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          A MENACE squad should be built around jobs, not around fake role spreadsheets. The useful
          question is whether the squad can survive first contact, convert the right targets, control
          uncertainty, and still leave the campaign healthier than it found it.
        </p>
      </div>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {coreJobs.map((item) => (
          <div key={item.job} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-semibold text-white mb-2">{item.job}</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">{item.purpose}</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Overbuild risk:</span> {item.overbuild}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Build the Squad Around Mission Pressure
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-accent">Mission Pressure</th>
                <th className="p-3 border border-border text-accent">Composition Bias</th>
                <th className="p-3 border border-border text-accent">Common Failure</th>
              </tr>
            </thead>
            <tbody>
              {compositionTable.map((row) => (
                <tr key={row.mission} className="align-top">
                  <td className="p-3 border border-border font-semibold text-accent-secondary">{row.mission}</td>
                  <td className="p-3 border border-border text-text-muted">{row.build}</td>
                  <td className="p-3 border border-border text-text-muted">{row.mistake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Rules for Honest Composition
        </h2>
        {compositionRules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">{rule.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">
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
        <Link href="/best-team-comps" className="text-accent hover:underline">
          Best Team Comps →
        </Link>
        <Link href="/weapons" className="text-accent hover:underline">
          Weapons →
        </Link>
        <Link href="/advanced-tactics" className="text-accent hover:underline">
          Advanced Tactics →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 10, 2026</p>
    </div>
  );
}
