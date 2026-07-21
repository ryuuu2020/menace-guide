import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE OCI Upgrades Guide — Buy Ship Support for the Ground Problem You Actually Have",
  description:
    "A practical MENACE OCI upgrades guide covering electronics, weapons, and hull support, plus when each branch is actually worth funding based on your campaign state.",
};

const ociBranches = [
  {
    branch: "Electronics",
    strongestFor:
      "Campaigns losing to uncertainty, bad mission reads, or tactical openings that begin with too little information.",
    buyWhen:
      "You need cleaner deployment decisions and more reliable early control.",
    weakWhen:
      "The ground roster already sees enough, but cannot convert the information into safe wins.",
  },
  {
    branch: "Weapons",
    strongestFor:
      "Missions where one controlled burst of force can break the pressure pattern decisively.",
    buyWhen:
      "Your squads already create enough stability to turn support damage into a real swing.",
    weakWhen:
      "The campaign is still failing before support fire even matters.",
  },
  {
    branch: "Hull and sustain",
    strongestFor:
      "Runs that are winning ugly and paying too much long-term damage between operations.",
    buyWhen:
      "Attrition, repair pressure, or operational wear is becoming the strategic tax.",
    weakWhen:
      "You buy sustain before solving the mission errors that are causing the damage in the first place.",
  },
];

const upgradeRules = [
  {
    title: "Ship support should follow the ground problem",
    body:
      "The best OCI branch is the one that changes what the next few missions feel like for your actual squads. Buying a prestigious branch too early is just expensive drift.",
  },
  {
    title: "Information usually pays back first",
    body:
      "When the campaign still contains too many bad reads, electronics support improves more decisions than raw firepower does.",
  },
  {
    title: "Weapons shine after stability exists",
    body:
      "Support damage is most valuable once your squads can already survive long enough to capitalize on it. Before that, it often feels stronger on paper than in campaign impact.",
  },
  {
    title: "Sustain is not a substitute for discipline",
    body:
      "Hull-side recovery matters, but it should not become an excuse for taking sloppy, expensive engagements repeatedly.",
  },
];

const campaignStates = [
  {
    state: "Too many bad first contacts",
    prioritize: "Electronics first",
    reason: "Cleaner reads prevent the kind of early miscommitment that costs whole missions.",
  },
  {
    state: "Stable squads, one hard target keeps stalling missions",
    prioritize: "Weapons support next",
    reason: "A well-timed force spike is worth more once the ground plan can already hold.",
  },
  {
    state: "Operations are successful but too expensive",
    prioritize: "Hull and sustain",
    reason: "Campaign tempo improves when ugly wins stop damaging the next three missions.",
  },
  {
    state: "Everything still feels underbuilt",
    prioritize: "Do not split too broadly",
    reason: "Half-funding all three trees usually produces impressive menus and weak outcomes.",
  },
];

const faqs = [
  {
    question: "What should I upgrade first in OCI?",
    answer:
      "Usually electronics, because better reads improve more campaign decisions than prestige firepower does in the early and mid game.",
  },
  {
    question: "When are weapons upgrades actually worth it?",
    answer:
      "When your squads are already coherent enough to turn support damage into a decisive shift instead of into a flashy but non-saving effect.",
  },
  {
    question: "What is the most common OCI mistake?",
    answer:
      "Buying the branch that sounds coolest instead of the branch that changes the current campaign bottleneck.",
  },
];

export default function OCIUpgradesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        O.C.I. <span className="text-accent">Upgrades</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-3xl">
        This page is not a fake fixed upgrade path. OCI investment in MENACE should serve the ground
        campaign you actually have: uncertain reads, stalled breaches, or expensive attrition. The
        best branch is the one that changes the next several operations, not the one with the most
        dramatic tooltip.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="p-3 border border-border">Branch</th>
              <th className="p-3 border border-border">Strongest For</th>
              <th className="p-3 border border-border">Buy It When</th>
              <th className="p-3 border border-border">Weak It When</th>
            </tr>
          </thead>
          <tbody>
            {ociBranches.map((row) => (
              <tr key={row.branch} className="hover:bg-surface">
                <td className="p-3 border border-border font-semibold">{row.branch}</td>
                <td className="p-3 border border-border text-text-muted text-sm">{row.strongestFor}</td>
                <td className="p-3 border border-border text-accent text-sm">{row.buyWhen}</td>
                <td className="p-3 border border-border text-text-muted text-sm">{row.weakWhen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mb-8">
        {upgradeRules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{rule.title}</h2>
            <p className="text-sm text-text-muted">{rule.body}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="p-3 border border-border">Campaign State</th>
              <th className="p-3 border border-border">Prioritize</th>
              <th className="p-3 border border-border">Why</th>
            </tr>
          </thead>
          <tbody>
            {campaignStates.map((row) => (
              <tr key={row.state} className="hover:bg-surface">
                <td className="p-3 border border-border font-semibold">{row.state}</td>
                <td className="p-3 border border-border text-accent text-sm">{row.prioritize}</td>
                <td className="p-3 border border-border text-text-muted text-sm">{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
