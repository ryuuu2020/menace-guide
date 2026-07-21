import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Builds Guide — Choose the Build by Pressure Pattern, Not Fake Setups",
  description:
    "A practical MENACE builds guide covering breach, ranged control, recon, and sustain builds based on mission pressure, positioning demands, and campaign cost.",
};

const buildFrames = [
  {
    frame: "Breach builds",
    use:
      "Best when the map only improves after one hard point is broken and hesitation makes the next turns worse.",
    strength:
      "They compress a dangerous section of the mission into one deliberate plan instead of many small, expensive trades.",
    trap:
      "They are overrated when players use them to solve uncertainty problems that were really about bad reads, not low aggression.",
  },
  {
    frame: "Ranged control builds",
    use:
      "Best when sightlines, denial, and sequencing decide whether the fight stays orderly enough to finish cleanly.",
    strength:
      "They turn board knowledge into safer turns and make enemy movement more predictable.",
    trap:
      "They underperform if the squad can see the fight but lacks a stable way to cash that information into progress.",
  },
  {
    frame: "Recon and mobility builds",
    use:
      "Best when the mission taxes uncertainty, spread pressure, or arrival timing more than brute force.",
    strength:
      "They lower the cost of wrong assumptions and prevent the squad from taking every fight on the enemy's ideal terms.",
    trap:
      "They become fake solutions when the real campaign problem is still missing stopping power or recovery depth.",
  },
  {
    frame: "Sustain builds",
    use:
      "Best when the campaign is winning ugly and paying too much in casualties, fatigue, or follow-up instability.",
    strength:
      "They preserve roster integrity and make several medium-hard operations cleaner rather than one hard operation prettier.",
    trap:
      "Sustain becomes a crutch if it is only subsidizing sloppy engagement discipline.",
  },
];

const diagnosisTable = [
  {
    signal: "First contact becomes chaotic immediately",
    shift:
      "Bias the build toward recon, cleaner openings, and line control before adding more finishing power.",
  },
  {
    signal: "You reach the problem but cannot break it cleanly",
    shift:
      "Move toward breach or protected ranged conversion rather than piling on extra scouting or generic utility.",
  },
  {
    signal: "Victories happen, but the roster comes out damaged and thin",
    shift:
      "Treat sustain and campaign-cost reduction as part of build quality, not as optional comfort.",
  },
  {
    signal: "Maps keep stretching your squad across too many angles",
    shift:
      "Respect mobility and positional discipline more. Raw damage does not fix bad reach.",
  },
];

const rules = [
  {
    title: "Builds should answer the mission's real pressure",
    body:
      "The best MENACE build is not the one with the strongest-looking unit package. It is the one whose structure addresses the exact thing that is breaking operations right now: bad contact, hard targets, weak positioning, or campaign wear.",
  },
  {
    title: "Positioning value is part of build value",
    body:
      "A squad that cannot reach useful ground or hold clean lanes is weaker than a lower-output squad that controls where the fight happens. Build quality and board shape are inseparable.",
  },
  {
    title: "Recovery starts during construction, not after the mission",
    body:
      "This page is not a fake fixed squad setup sheet. A real build includes enough margin to survive the wrong read, the mistimed push, or the enemy turn that hit harder than expected.",
  },
];

const faqs = [
  {
    question: "What is the safest default build in MENACE?",
    answer:
      "Usually a controlled all-purpose build with one clear contact answer, one conversion role, one support margin, and one slot that can still obey the briefing. Safe does not mean passive. It means the build can survive imperfect information.",
  },
  {
    question: "Why do fixed lineup guides fail so often?",
    answer:
      "Because they pretend every mission and campaign state asks the same question. MENACE punishes using yesterday's solution on today's pressure pattern.",
  },
  {
    question: "What is the most common build mistake?",
    answer:
      "Chasing offensive punch before the squad can reliably take, read, and hold ground. Many bad builds look deadly until the first messy enemy turn arrives.",
  },
];

export default function BuildsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Build Diagnosis</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Builds Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          A useful MENACE build page should tell you what kind of pressure the squad is supposed to
          solve and what kind of pressure it is secretly weak to. Breach, ranged control, recon, and
          sustain are not styles to cosplay. They are responses to different failure patterns.
        </p>
      </div>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {buildFrames.map((item) => (
          <div key={item.frame} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-semibold text-white mb-2">{item.frame}</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">{item.use}</p>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              <span className="text-white font-medium">What it does well:</span> {item.strength}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Trap:</span> {item.trap}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Shift the Build When You See These Signals</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Mission Signal</th>
                <th className="p-3 border border-border text-white">What to Change</th>
              </tr>
            </thead>
            <tbody>
              {diagnosisTable.map((row) => (
                <tr key={row.signal} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.signal}</td>
                  <td className="p-3 border border-border text-gray-300">{row.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Rules for Honest Build Advice</h2>
        {rules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">{rule.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{rule.body}</p>
          </div>
        ))}
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
        <Link href="/best-team-comps" className="text-accent hover:underline">
          Best Team Comps →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/tactics" className="text-accent hover:underline">
          Tactics →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
