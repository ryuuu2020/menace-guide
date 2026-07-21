import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Black Market Economy Guide — Use It as a Pressure Valve, Not a Fantasy Arbitrage Table",
  description:
    "A practical MENACE black-market economy guide covering emergency buys, what to avoid selling, campaign budget windows, and how to use the market without hollowing out your run.",
};

const buyingWindows = [
  {
    window: "Emergency recovery",
    buy:
      "Only what stabilizes the next mission or preserves irreplaceable roster value.",
    why:
      "The black market is at its best when it saves a campaign state that normal routing cannot repair in time.",
    trap:
      "Buying speculative upgrades while the roster still has immediate survival problems.",
  },
  {
    window: "Planned spike mission",
    buy:
      "Targeted equipment, ammo, or utility that answers the known pressure in the next briefing.",
    why:
      "Focused spending is much cleaner than trying to keep every possibility covered at once.",
    trap:
      "Paying premium for broad gear just because the shop happened to offer it.",
  },
  {
    window: "Roster preservation",
    buy:
      "Medical or replacement support only when it clearly reduces future campaign damage.",
    why:
      "Saving a veteran or avoiding a weak replacement cycle often has more value than one more weapon purchase.",
    trap:
      "Treating every bruise as an emergency and burning cash on comfort instead of true protection.",
  },
  {
    window: "Late-campaign polish",
    buy:
      "Selective upgrades that tighten already-proven squads.",
    why:
      "Late buys work best when the squad identity is settled and you know exactly what is missing.",
    trap:
      "Rebuilding the roster too late and paying premium prices for experimentation.",
  },
];

const sellingRules = [
  {
    title: "Sell what the campaign does not realistically convert into strength",
    body:
      "The clean sell is loot that is unlikely to become mission-winning value before your next budget pressure arrives. Keeping everything 'just in case' often means staying poor for the turns that actually matter.",
  },
  {
    title: "Do not sell strategic flexibility too early",
    body:
      "Rare utility, specialized gear, or future-proofing pieces should not be liquidated unless the current budget problem is real enough to justify the lost option value.",
  },
  {
    title: "Preserve roster integrity before chasing perfect efficiency",
    body:
      "A slightly suboptimal sale is still correct if it protects the campaign from replacement spirals, fatigue pressure, or weak forced deployments in the next chain.",
  },
  {
    title: "Treat every black-market trade as a campaign trade, not a local trade",
    body:
      "The relevant question is not whether the item looks profitable. It is whether the trade leaves the whole campaign stronger three missions from now.",
  },
];

const budgetDecisions = [
  {
    state: "Cash is low and roster is fragile",
    priority: "Recovery, ammo discipline, and one stable squad path",
    avoid: "Luxury upgrades and broad speculative shopping",
  },
  {
    state: "Cash is moderate and next mission is known",
    priority: "Targeted buys that directly solve the next briefing",
    avoid: "Buying around hypothetical later problems before the current spike is cleared",
  },
  {
    state: "Cash is healthy but roster roles are unclear",
    priority: "Hold budget until squad identity is more settled",
    avoid: "Turning liquidity into clutter that future squads may not even want",
  },
  {
    state: "Late game with stable squads",
    priority: "Tight upgrades that improve proven packages",
    avoid: "Full rebuilds or expensive pivots that reset campaign coherence",
  },
];

const faqs = [
  {
    question: "What is the black market actually for in MENACE?",
    answer:
      "It works best as a pressure valve: fixing urgent roster problems, buying for a known mission spike, or preserving campaign stability when ordinary progression is too slow.",
  },
  {
    question: "When is a black-market purchase usually bad?",
    answer:
      "When it is driven by fear of missing out instead of by a concrete campaign problem. Expensive flexibility with no immediate use often becomes disguised poverty.",
  },
  {
    question: "What is the most common economy mistake?",
    answer:
      "Thinking in local margins instead of campaign outcomes. A trade is only good if it leaves the next several decisions stronger, not merely because it looked like value on one screen.",
  },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">MENACE Black Market Economy Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 9, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          This guide is not an arbitrage spreadsheet. The black market in MENACE matters because it
          can rescue campaign states that normal pacing cannot repair quickly enough. The useful
          question is not “what item has the best imaginary flip value?” but “what purchase or sale
          keeps the next several missions under control without draining future flexibility?”
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">
          When the Black Market Is Worth Using
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Window</th>
                <th className="p-3 border border-gray-700 text-ink">What to Buy</th>
                <th className="p-3 border border-gray-700 text-ink">Why It Works</th>
                <th className="p-3 border border-gray-700 text-ink">Common Trap</th>
              </tr>
            </thead>
            <tbody>
              {buyingWindows.map((row) => (
                <tr key={row.window} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{row.window}</td>
                  <td className="p-3 border border-gray-700 text-accent">{row.buy}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-sm">{row.why}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-sm">{row.trap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">
          How to Think About Selling
        </h2>
        <div className="space-y-4">
          {sellingRules.map((rule) => (
            <div key={rule.title} className="border border-gray-700 p-4 bg-gray-800/30">
              <h3 className="font-semibold text-accent">{rule.title}</h3>
              <p className="text-ink-light mt-2">{rule.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">
          Budget Priorities by Campaign State
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Campaign State</th>
                <th className="p-3 border border-gray-700 text-ink">Prioritize</th>
                <th className="p-3 border border-gray-700 text-ink">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {budgetDecisions.map((row) => (
                <tr key={row.state} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{row.state}</td>
                  <td className="p-3 border border-gray-700 text-accent text-sm">{row.priority}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-sm">{row.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="border border-gray-700 p-4 bg-gray-800/30">
              <h3 className="font-semibold text-accent">{faq.question}</h3>
              <p className="text-ink-light mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
