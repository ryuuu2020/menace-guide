import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Missions Guide — Read Operations by Pressure and Cost",
  description:
    "A practical MENACE missions guide covering operation types, mission pressure, environmental taxes, and how to choose the right approach without fake universal mission formulas.",
};

const missionTypes = [
  {
    type: "Assault and elimination",
    read:
      "These missions are not easy just because they are common. They quietly tax roster health when approached casually.",
    solve:
      "Bring a squad that can read contact cleanly and finish without taking avoidable chip damage across several engagements.",
    trap:
      "Players often spend more campaign health here than on obvious boss missions because familiarity lowers discipline.",
  },
  {
    type: "Defense and holdout",
    read:
      "The real question is whether you can rebuild shape after the first breach, not whether the squad looks strong on the opening line.",
    solve:
      "Favor suppression, reserve discipline, and one reliable recovery answer behind the first contact zone.",
    trap:
      "If the squad has no second line, the mission becomes much harder than the briefing looked.",
  },
  {
    type: "Extraction, recon, or infiltration",
    read:
      "These missions punish the wrong kind of speed. Tempo and information matter more than blunt force.",
    solve:
      "Use mobility, vision, and low-cost contact management so the objective can stay central instead of turning into a random firefight.",
    trap:
      "Heavy or static squads often make these missions feel unfair simply because they answered the wrong problem.",
  },
  {
    type: "Hive, boss, or anti-large pressure",
    read:
      "These missions are specialist checks. The rest of the campaign may have hidden that gap until now.",
    solve:
      "Bring the anti-large plan early and protect the squad long enough for that plan to matter.",
    trap:
      "Improvising a boss answer out of generic strength is how these missions become expensive panic fights.",
  },
];

const environmentReads = [
  {
    factor: "Low visibility or weather pressure",
    effect:
      "The mission becomes more about information and spacing. Good weapons are less useful if the squad cannot see or position cleanly enough to use them.",
  },
  {
    factor: "Urban or cover-dense maps",
    effect:
      "Angle control, breach timing, and local recovery matter more than generic long-range comfort.",
  },
  {
    factor: "Open or exposed terrain",
    effect:
      "Crossing safely becomes a build tax. Smoke, lane denial, and disciplined movement matter more than one extra premium damage slot.",
  },
  {
    factor: "Long operation chain pressure",
    effect:
      "Mission value must be judged together with what it costs the next deployments, not only with whether it is winnable in isolation.",
  },
];

const briefingRules = [
  {
    title: "Read what the mission punishes first",
    body:
      "Objective text is less important than the failure condition hiding behind it. A mission that says elimination may really be testing contact discipline or terrain crossing.",
  },
  {
    title: "Operations should be judged as sequences, not only as nodes",
    body:
      "The right mission is not always the one with the most obvious reward. It is often the one your current roster can clear without poisoning the next several choices.",
  },
  {
    title: "This page is not a fake universal mission formula",
    body:
      "No single deployment script survives every environment, roster condition, and operation chain. The goal is to read mission pressure honestly enough to choose the right response.",
  },
];

const faqs = [
  {
    question: "What is the most common mission mistake in MENACE?",
    answer:
      "Treating familiar missions as free wins. Routine operations are often where campaign damage quietly accumulates because players stop respecting what the map is taxing.",
  },
  {
    question: "How should I compare mission choices inside an operation?",
    answer:
      "Compare them by pressure and cost together: what kind of squad they require, what attrition they risk, and what they leave the campaign able to do afterward.",
  },
  {
    question: "Why do some missions feel harder than their briefing suggests?",
    answer:
      "Because the briefing often announces the objective while hiding the real tax. Visibility, terrain, weak recovery, or roster mismatch usually explain the gap.",
  },
];

export default function MissionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Operation Reading</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          Missions &amp; <span className="text-accent">Operations</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          The useful MENACE mission page is not a catalog of fake universal answers. It should help
          you read what each operation is really taxing: contact discipline, recovery structure,
          movement, information, or specialist pressure.
        </p>
      </div>

      <section className="mb-12 space-y-4">
        {missionTypes.map((item) => (
          <div key={item.type} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-white mb-2">{item.type}</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              <span className="text-white font-medium">How to read it:</span> {item.read}
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              <span className="text-white font-medium">What solves it:</span> {item.solve}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-white font-medium">Common trap:</span> {item.trap}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Environmental Factors That Actually Change the Mission
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {environmentReads.map((row) => (
            <div key={row.factor} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-accent mb-2">{row.factor}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{row.effect}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 space-y-4">
        {briefingRules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{rule.title}</h2>
            <p className="text-sm text-text-muted leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/mission-difficulty-guide" className="text-accent hover:underline">
          Mission Difficulty →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/builds" className="text-accent hover:underline">
          Builds →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
