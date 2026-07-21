import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Team Comps Guide — Choose Job Packages by Mission Shape, Not Fake Meta",
  description:
    "A practical MENACE team comps guide focused on squad job packages, briefing fit, campaign cost, and how to choose lineups that hold up under real mission pressure.",
};

const squadPackages = [
  {
    package: "Balanced line-holder",
    goodFor:
      "Blind deployments, medium-risk operations, and campaign states where the first priority is reaching the next mission intact.",
    core:
      "Suppression, one dependable finisher, one recovery role, and one honest flex slot that can obey the briefing instead of ignoring it.",
    failure:
      "Players ruin this package by pretending the flex slot does not exist and forcing every mission through the same fixed four jobs.",
  },
  {
    package: "Recon pressure squad",
    goodFor:
      "Wide maps, uncertain contact, and operations where one wrong read is more dangerous than one missed kill.",
    core:
      "Information gain, ranged conversion, safe retreat tools, and one anchor who keeps the squad from folding if first contact goes wrong.",
    failure:
      "It collapses when dragged into prolonged brawls without enough line stability behind the information plan.",
  },
  {
    package: "Breach and hard-target squad",
    goodFor:
      "Fortified defenders, armor pressure, and maps that only improve after one deliberate crack in the front.",
    core:
      "Anti-armor, suppression, protected closer, and one support role that keeps the breach from becoming a suicide trade.",
    failure:
      "This package gets overrated when players forget that setup-heavy squads pay a price on mobile or chase-style missions.",
  },
  {
    package: "Roster-preservation squad",
    goodFor:
      "Campaign states where another expensive win would still count as strategic damage.",
    core:
      "Durable screen, efficient damage, recovery, and low-risk utility that lowers attrition instead of raising ceiling.",
    failure:
      "It is not built to solve every hardest node. Its job is to keep the campaign healthy enough to reach those nodes correctly.",
  },
];

const briefingReads = [
  {
    shape: "Wide map with unclear contact timing",
    promote: "Information, sightline control, and one safe fallback anchor",
    demote: "Short-range stacks that require perfect early reads to stay valuable",
  },
  {
    shape: "Entrenched defenders or armor wall",
    promote: "A breach plan that includes both entry and stabilization after entry",
    demote: "Skirmish packages that win open ground but stall on hard targets",
  },
  {
    shape: "Attrition mission with real follow-up pressure",
    promote: "Ammo efficiency, recovery, and roles that reduce future campaign cost",
    demote: "Fragile peak-output squads that only look good if everything connects",
  },
  {
    shape: "Boss or spike encounter",
    promote: "One direct answer to the spike plus enough general stability to arrive there cleanly",
    demote: "Generic all-rounders with no actual pressure solution for the decisive moment",
  },
];

const rules = [
  {
    title: "This page is not a fake universal meta squad list.",
    body:
      "The useful comp question is not which lineup looked strongest once. It is which package of jobs keeps this mission, and the next one, under control when the run is imperfect.",
  },
  {
    title: "Campaign cost is part of comp strength.",
    body:
      "MENACE punishes glamorous wins that leave the roster gutted. A slightly slower squad that exits cleaner is often the better comp over a real campaign.",
  },
  {
    title: "Specialists should be invited by the briefing.",
    body:
      "Bring specialist packages because the map or enemy pressure asked for them, not because they created one memorable victory on a different mission.",
  },
];

const faqs = [
  {
    question: "What is the safest all-purpose comp in MENACE?",
    answer:
      "Usually a balanced line-holder with suppression, dependable damage, recovery, and one honest flex slot. It is not the highest-ceiling squad, but it handles the widest range of campaign states without lying about its limits.",
  },
  {
    question: "When should I field specialist comps?",
    answer:
      "When the briefing clearly shows a generic package will be taxed too hard. Specialist comps are strongest when the mission pressure is narrow enough that extra focus actually gets paid back.",
  },
  {
    question: "What is the most common team-comp mistake?",
    answer:
      "Confusing a cool lineup with a reusable package. Strong comps are built around jobs, fallback structure, and campaign cost, not around one screenshot of ideal performance.",
  },
];

export default function BestTeamCompsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Squad Packages</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Team Comps Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          The useful MENACE comp page is not a list of fake meta lineups. It should tell you which
          job package keeps this operation, and the next one, under control. Mission shape, roster
          health, and campaign cost matter more than highlight-reel firepower.
        </p>
      </div>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {squadPackages.map((item) => (
          <div key={item.package} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-semibold text-white mb-2">{item.package}</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">{item.goodFor}</p>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              <span className="text-white font-medium">Core jobs:</span> {item.core}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Failure mode:</span> {item.failure}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Match the Package to the Briefing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Mission Shape</th>
                <th className="p-3 border border-border text-white">Promote</th>
                <th className="p-3 border border-border text-white">Demote</th>
              </tr>
            </thead>
            <tbody>
              {briefingReads.map((row) => (
                <tr key={row.shape} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.shape}</td>
                  <td className="p-3 border border-border text-gray-300">{row.promote}</td>
                  <td className="p-3 border border-border text-gray-300">{row.demote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Three Rules That Keep Team Comps Honest</h2>
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
        <Link href="/squad-composition-guide" className="text-accent hover:underline">
          Squad Composition →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/mission-difficulty-guide" className="text-accent hover:underline">
          Mission Difficulty →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 12, 2026</p>
    </div>
  );
}
