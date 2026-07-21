import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Black Market Guide — Buy by Bottleneck, Not by Catalog Hype",
  description:
    "A practical MENACE black market guide covering when to buy leaders, manpower, weapons, vehicles, and support items based on the campaign bottleneck you need to solve next.",
};

const marketPriorities = [
  {
    priority: "Roster expansion",
    buyFor:
      "When the campaign is losing because the bench is too shallow or too faction-locked to absorb future pressure.",
    badVersion:
      "Recruiting just because a file looks exciting when the roster still cannot support another mouth to feed.",
  },
  {
    priority: "Manpower and sustain",
    buyFor:
      "When victories are becoming expensive and the next few operations look less safe because of attrition.",
    badVersion:
      "Ignoring sustain until the pool is already visibly collapsing.",
  },
  {
    priority: "Weapon upgrades",
    buyFor:
      "When the squad already has structure and now needs a cleaner answer to suppression, armor, or finishing pressure.",
    badVersion:
      "Buying premium weapons into a roster that still lacks role clarity.",
  },
  {
    priority: "Vehicles and large support pieces",
    buyFor:
      "When the campaign truly benefits from a new role, not just from another expensive toy.",
    badVersion:
      "Using the market to compensate for unresolved infantry or line-discipline problems.",
  },
];

const marketRules = [
  {
    title: "The market should remove a bottleneck, not satisfy curiosity",
    body:
      "Every purchase should answer a question the campaign currently cannot solve: weak bench depth, fragile sustain, no armor answer, or no safe way to hold ground.",
  },
  {
    title: "Overpaying in structure is worse than overpaying in goods",
    body:
      "The real cost of a bad purchase is not only what you traded away. It is what the campaign still cannot do afterward.",
  },
  {
    title: "Permanent capacity usually beats flashy short-term power",
    body:
      "A better bench, safer sustain, or more coherent squad capability often outperforms one dramatic premium purchase.",
  },
  {
    title: "The market is a campaign tool, not a loot wishlist",
    body:
      "Think in terms of future operations, not just the excitement of the current stock page.",
  },
];

const marketChecks = [
  {
    check: "The campaign keeps failing after technically successful missions",
    fix: "You likely need sustain or manpower support more than another shiny weapon.",
  },
  {
    check: "The roster has strong items but weak coverage",
    fix: "Prioritize leaders, bench depth, or missing job coverage before chasing upgrades.",
  },
  {
    check: "Every premium listing looks tempting",
    fix: "Step back and ask which current bottleneck is actually ending runs.",
  },
  {
    check: "You are buying vehicles because fights feel messy",
    fix: "Confirm the mess is really a vehicle problem and not a positioning or suppression problem first.",
  },
];

const faqs = [
  {
    question: "What is the best thing to buy first on the black market?",
    answer:
      "Usually the purchase that removes the campaign's next bottleneck: often roster depth or sustain before premium gear.",
  },
  {
    question: "Why are precise black market formulas misleading?",
    answer:
      "Because market value is contextual. A perfect deal on the wrong item is still a bad campaign decision.",
  },
  {
    question: "What is the most common black market mistake?",
    answer:
      "Buying for excitement instead of for bottleneck removal.",
  },
];

export default function BlackMarketPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Black <span className="text-accent">Market</span> Guide
      </h1>
      <p className="text-text-muted mb-10 max-w-3xl leading-relaxed">
        This page is not a fake barter-rule spreadsheet. The black market matters because it is the
        place where you choose which campaign weakness gets fixed next: shallow bench, weak sustain,
        missing weapon role, or overpriced ambition. The right purchase is the one that changes the
        next stretch of operations, not the one that looks most exciting in the moment.
      </p>

      <section className="mb-10 overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-4 text-left font-semibold">Priority</th>
              <th className="p-4 text-left font-semibold">Buy It For</th>
              <th className="p-4 text-left font-semibold">Bad Version</th>
            </tr>
          </thead>
          <tbody>
            {marketPriorities.map((row) => (
              <tr key={row.priority} className="border-b border-border/60">
                <td className="p-4 font-semibold text-text-primary">{row.priority}</td>
                <td className="p-4 text-text-muted">{row.buyFor}</td>
                <td className="p-4 text-text-muted">{row.badVersion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {marketRules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{rule.title}</h2>
            <p className="text-sm text-text-muted leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-10 overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-4 text-left font-semibold">If This Keeps Happening</th>
              <th className="p-4 text-left font-semibold">Usually Buy or Reprioritize This</th>
            </tr>
          </thead>
          <tbody>
            {marketChecks.map((row) => (
              <tr key={row.check} className="border-b border-border/60">
                <td className="p-4 font-semibold text-text-primary">{row.check}</td>
                <td className="p-4 text-text-muted">{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
