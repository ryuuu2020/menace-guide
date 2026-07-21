import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Research Priority Guide — Research by Bottleneck, Not Fake Node Tables",
  description:
    "A practical MENACE research-priority guide covering survivability, control, anti-armor, and OCI support based on campaign bottlenecks rather than fake node spreadsheets.",
};

const researchTracks = [
  {
    track: "Stability and survivability",
    use:
      "Start here when ordinary missions are still expensive and the roster cannot absorb average attrition cleanly.",
    delay:
      "Delay prestige branches that only matter once the campaign is already under control.",
  },
  {
    track: "Information and control",
    use:
      "Prioritize when bad reads, messy contact, or weak suppression value are costing more than missing damage.",
    delay:
      "Delay narrow payoff upgrades that assume you already own tempo and sightlines.",
  },
  {
    track: "Anti-armor and breach",
    use:
      "Move here when hard targets become a repeating tax instead of a one-off annoyance.",
    delay:
      "Delay extra generalist comfort if the campaign keeps stalling on one durable obstacle.",
  },
  {
    track: "OCI support and force projection",
    use:
      "Best when the ground plan is already coherent enough to convert ship-side support into cleaner wins.",
    delay:
      "Delay big support dreams if the roster still fails for simpler reasons on the ground.",
  },
];

const phaseDecisions = [
  {
    phase: "Early campaign",
    focus: "Stability, recovery, and one clean way to control ordinary fights",
    avoid: "Late-game prestige branches before the roster can survive normal pressure cheaply",
  },
  {
    phase: "Mid campaign",
    focus: "The exact bottleneck now repeating in briefings: armor, range, control, or mission read",
    avoid: "Researching broadly in every direction and arriving everywhere half-prepared",
  },
  {
    phase: "Late campaign",
    focus: "Tight upgrades that strengthen proven packages and support final mission demands",
    avoid: "Major experimentation that resets focus too late to pay back",
  },
];

const rules = [
  {
    title: "Research should remove the current blocker",
    body:
      "The strongest-looking node is not automatically the best node. The best research is the one that changes what the next several briefings feel like.",
  },
  {
    title: "Do not confuse late power with urgent power",
    body:
      "This page is not a fake node spreadsheet. Some branches look amazing once complete but are wrong when the roster still dies to ordinary pressure.",
  },
  {
    title: "Focused research beats polite diversification",
    body:
      "Half-funding every idea often creates a campaign that is underprepared for the exact problem already on the table.",
  },
];

const faqs = [
  {
    question: "What should I research first in MENACE?",
    answer:
      "Research the branch that makes your core squads more stable in average missions. If ordinary operations are still too expensive, bigger tech dreams are premature.",
  },
  {
    question: "When should I pivot into specialist research?",
    answer:
      "When a problem has become a repeated campaign tax rather than a one-off panic moment. Specialization should answer a pattern.",
  },
  {
    question: "What is the most common research mistake?",
    answer:
      "Buying the coolest branch instead of the branch that changes the next several decisions. Research quality is measured by campaign relief, not by headline glamour.",
  },
];

export default function ResearchPriorityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Research Routing</p>
        <h1 className="text-3xl font-bold text-gray-100 mb-3">MENACE Research Priority Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          Research priority only makes sense in relation to the campaign blocker you are actually
          facing. Survivability, control, anti-armor, and support all matter, but not at the same
          moment and not for the same reason.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Research Tracks That Matter</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
            <thead className="text-xs uppercase bg-gray-800 text-gray-400">
              <tr>
                <th className="px-4 py-3 border border-gray-700">Track</th>
                <th className="px-4 py-3 border border-gray-700">When to Move Here</th>
                <th className="px-4 py-3 border border-gray-700">What to Delay</th>
              </tr>
            </thead>
            <tbody>
              {researchTracks.map((row, i) => (
                <tr key={row.track} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="px-4 py-3 border border-gray-700 text-gray-100 font-semibold">{row.track}</td>
                  <td className="px-4 py-3 border border-gray-700 text-blue-300">{row.use}</td>
                  <td className="px-4 py-3 border border-gray-700 text-gray-400">{row.delay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Phase-Based Research Decisions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
            <thead className="text-xs uppercase bg-gray-800 text-gray-400">
              <tr>
                <th className="px-4 py-3 border border-gray-700">Campaign Phase</th>
                <th className="px-4 py-3 border border-gray-700">Focus</th>
                <th className="px-4 py-3 border border-gray-700">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {phaseDecisions.map((row, i) => (
                <tr key={row.phase} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="px-4 py-3 border border-gray-700 text-gray-100 font-semibold">{row.phase}</td>
                  <td className="px-4 py-3 border border-gray-700 text-blue-300">{row.focus}</td>
                  <td className="px-4 py-3 border border-gray-700 text-gray-400">{row.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        {rules.map((rule) => (
          <div key={rule.title} className="bg-gray-800 border border-gray-700 rounded-sm p-5">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{rule.title}</h3>
            <p className="text-gray-300 leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-gray-800 border border-gray-700 rounded-sm p-4">
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/resources" className="text-blue-400 hover:underline">
          Resources →
        </Link>
        <Link href="/oci-upgrades" className="text-blue-400 hover:underline">
          OCI Upgrades →
        </Link>
        <Link href="/builds" className="text-blue-400 hover:underline">
          Builds →
        </Link>
      </div>
      <p className="text-sm text-gray-500 mt-8 italic">Last updated: July 11, 2026.</p>
    </div>
  );
}
