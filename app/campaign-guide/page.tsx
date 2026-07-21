import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Campaign Guide — Preserve Margin, Rotate Squads, and Stop Fake Clean-Run Thinking",
  description:
    "A practical MENACE campaign guide focused on campaign margin, squad rotation, mission selection, and how to keep a run healthy without fake walkthrough certainty.",
};

const campaignPhases = [
  {
    phase: "Opening operations",
    read:
      "Build one dependable deployment line first. Early campaign strength comes from repeatable safety, not from proving the roster can beat a hard mission immediately.",
  },
  {
    phase: "Mid-campaign branching",
    read:
      "Add coverage for mission types your first squad solves poorly. This is where campaign health improves through better fit, not just through more of the same power.",
  },
  {
    phase: "Late campaign preservation",
    read:
      "Stop spending leaders and supplies like the campaign is still racing for growth. The late game rewards reserves, discipline, and the ability to choose only the fights that matter.",
  },
];

const decisionChecks = [
  {
    check: "Does this mission strengthen the campaign or only my ego?",
    why:
      "A successful mission that leaves the roster tired, wounded, or misaligned for the next sequence can still be a strategic loss.",
  },
  {
    check: "Do I have a second squad identity when the first answer is wrong?",
    why:
      "Campaigns get brittle when every problem is forced through one favorite squad regardless of terrain, tempo, or anti-large needs.",
  },
  {
    check: "What is my retreat threshold before the mission starts?",
    why:
      "Retreat is not a late panic button. It is part of campaign planning if the briefing has real downside and your recovery line matters.",
  },
  {
    check: "Is the campaign still gaining margin after this choice?",
    why:
      "Winning while losing healing, reserves, or rotation depth is how a campaign looks strong one screen before it breaks.",
  },
];

const faqs = [
  {
    question: "What is the biggest campaign mistake in MENACE?",
    answer:
      "Treating the campaign like a string of isolated tactical wins. This page is not a fake clean-run walkthrough. MENACE rewards players who preserve future deployments, not only players who squeeze one hard mission.",
  },
  {
    question: "When should I retreat?",
    answer:
      "Retreat when the mission has become campaign debt you cannot absorb cleanly. Preserving leader experience and next-operation flexibility is often the more valuable win.",
  },
  {
    question: "How many squad identities should a healthy campaign support?",
    answer:
      "Usually at least two. One stable all-purpose line plus one specialist or mobility line covers far more real briefings than a pile of near-duplicate squads.",
  },
];

export default function CampaignGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Campaign Margin</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Campaign Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          The cleanest MENACE campaigns are not the ones that win the flashiest mission. They are the
          ones that keep enough margin to survive bad contacts, wrong reads, and the moment when a
          favorite squad is not the correct answer anymore.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Read The Campaign By Phase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaignPhases.map((row) => (
            <div key={row.phase} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{row.phase}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{row.read}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Four Checks Before A Major Choice</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Question</th>
                <th className="p-3 border border-border text-white">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {decisionChecks.map((row) => (
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
        <h2 className="text-2xl font-bold text-green-400 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-8">Last updated: July 12, 2026</p>
      </section>
    </div>
  );
}
