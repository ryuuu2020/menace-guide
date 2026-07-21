import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Combat Guide — Win the Turn Sequence, Not Fake Mechanic Sheets",
  description:
    "A practical MENACE combat guide covering turn sequencing, suppression, line control, conversion timing, and how to read combat without fake universal flowcharts.",
};

const combatLayers = [
  {
    layer: "Turn setup",
    meaning:
      "Good combat begins before the first shot. Position, angle ownership, and information determine whether the turn starts clean or expensive.",
    failure:
      "Many bad fights are already lost by how the squad entered them, not by what weapon fired first.",
  },
  {
    layer: "Pressure reduction",
    meaning:
      "Suppression, cover denial, and controlled contact shrink how many bad answers the enemy still has on their turn.",
    failure:
      "If you only chase kills and never reduce enemy options, the board keeps producing new danger faster than you remove it.",
  },
  {
    layer: "Conversion timing",
    meaning:
      "The best kill is the one that makes the rest of the turn safer, not the one that merely looks most dramatic right now.",
    failure:
      "Players often commit damage before the board is ready, then pay for that impatience on the next exchange.",
  },
  {
    layer: "Recovery and exit",
    meaning:
      "A strong turn ends in a shape that can survive retaliation or continue cleanly next round.",
    failure:
      "This page is not a fake exact combat flowchart. Winning one exchange and ending in a bad position is still a combat failure.",
  },
];

const mechanicReads = [
  {
    mechanic: "Suppression",
    realUse:
      "Buys decisions by shrinking enemy action quality and giving your squad cleaner movement or safer follow-up.",
  },
  {
    mechanic: "Cover and angle control",
    realUse:
      "Determine which parts of the fight are real now and which can be delayed. Good cover use is about deleting enemy lines, not just improving your own shot slightly.",
  },
  {
    mechanic: "Directional pressure and anti-armor",
    realUse:
      "Matter when the board is already shaped to let those shots be meaningful. Anti-armor tools are strongest after line control, not instead of it.",
  },
  {
    mechanic: "Morale and cascading collapse",
    realUse:
      "Reward pressure sequencing. Once one enemy body or squad is unstable, turning that instability into wider safety is often better than starting a fresh fair fight elsewhere.",
  },
];

const combatRules = [
  {
    title: "Read the next enemy turn, not only your current damage",
    body:
      "Combat improves when you stop asking 'what can I kill?' and start asking 'what enemy turn am I leaving behind if I take this line?'",
  },
  {
    title: "Mechanics are tools, not scripts",
    body:
      "Suppression, flanks, and anti-armor are powerful only inside the right board state. Treating them as mandatory combo lines creates fake certainty and bad decisions.",
  },
  {
    title: "Turn order is a strategic resource",
    body:
      "The order you move, reveal, suppress, and convert with squads often matters more than any single weapon stat. Good combat is sequencing discipline.",
  },
];

const faqs = [
  {
    question: "What is the core combat skill in MENACE?",
    answer:
      "Reading which part of the fight actually matters now, then sequencing the turn so the enemy's next answers become fewer, weaker, or later.",
  },
  {
    question: "Why do strong squads still lose clean-looking fights?",
    answer:
      "Because they won locally and lost structurally. A fight can look good in the middle and still leave the squad exposed, overcommitted, or too empty to survive the response.",
  },
  {
    question: "What is the most common combat mistake?",
    answer:
      "Treating mechanics like a fixed recipe. Good MENACE combat is about adapting pressure, not reenacting one optimal sequence every turn.",
  },
];

export default function CombatPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Turn Sequencing</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          Combat <span className="text-accent">System</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          Useful combat advice should explain how to win the turn sequence: how to enter a fight,
          reduce pressure, convert the right target, and end in a survivable shape. That is more
          valuable than any fake all-mechanics explainer sheet.
        </p>
      </div>

      <section className="mb-12 grid gap-4 md:grid-cols-2">
        {combatLayers.map((item) => (
          <div key={item.layer} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-white mb-2">{item.layer}</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-2">{item.meaning}</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-white font-medium">Failure mode:</span> {item.failure}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Read Mechanics by What They Change on the Board
        </h2>
        <div className="space-y-4">
          {mechanicReads.map((row) => (
            <div key={row.mechanic} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-accent mb-2">{row.mechanic}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{row.realUse}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 space-y-4">
        {combatRules.map((rule) => (
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
        <Link href="/tactics" className="text-accent hover:underline">
          Tactics →
        </Link>
        <Link href="/advanced-tactics" className="text-accent hover:underline">
          Advanced Tactics →
        </Link>
        <Link href="/weapons" className="text-accent hover:underline">
          Weapons →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
