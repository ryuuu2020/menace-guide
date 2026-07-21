import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE FAQ — Route by Burden, Not Fake Universal Tips",
  description:
    "A practical MENACE FAQ that classifies common campaign questions by burden, mission fit, squad structure, and economy pressure instead of pretending one tip sheet solves every run.",
};

const diagnosisRows = [
  {
    symptom: "Ordinary missions feel harder than boss moments",
    realProblem: "Openings, visibility, or recovery structure are failing before the squad can stabilize.",
    firstReads: "Mission Difficulty, Missions, Combat",
  },
  {
    symptom: "Squads win but the roster gets thinner every operation",
    realProblem: "Victories are too expensive and the campaign floor is decaying under the win screen.",
    firstReads: "Campaign Guide, Resources, Best Team Comps",
  },
  {
    symptom: "Research looks good but nothing important changes",
    realProblem: "Spending is aimed at prestige instead of the current bottleneck.",
    firstReads: "Research Priority, OCI Upgrades, Resources",
  },
  {
    symptom: "The briefing feels readable but the fight still unravels",
    realProblem: "Role coverage or turn sequencing is breaking under real contact pressure.",
    firstReads: "Builds, Squad Composition, Tactics",
  },
];

const routeCards = [
  {
    title: "I keep losing ordinary missions",
    body:
      "That is usually a read or structure problem before it is a raw damage problem. Start with mission pressure and opening discipline instead of hunting for a late-game miracle answer.",
    links: [
      { label: "Mission Difficulty", href: "/mission-difficulty-guide" },
      { label: "Missions", href: "/missions" },
      { label: "Combat", href: "/combat" },
    ],
  },
  {
    title: "I win missions but the campaign still gets worse",
    body:
      "Your wins are too costly. If manpower, rotation depth, or authority strain keep worsening, the campaign is already telling you the current squad packages are not preserving the future.",
    links: [
      { label: "Campaign Guide", href: "/campaign-guide" },
      { label: "Resources", href: "/resources" },
      { label: "Best Team Comps", href: "/best-team-comps" },
    ],
  },
  {
    title: "My squads look strong on paper but play badly",
    body:
      "Paper power often hides bad job coverage, wrong leader fit, or a build that only works on calm maps. Fix structure before adding more premium gear.",
    links: [
      { label: "Squad Composition", href: "/squad-composition-guide" },
      { label: "Builds", href: "/builds" },
      { label: "Tactics", href: "/tactics" },
    ],
  },
  {
    title: "My upgrades feel impressive but not useful",
    body:
      "That usually means you bought prestige before relief. The right spend should remove the tax you keep paying in the next several briefings.",
    links: [
      { label: "Research Priority", href: "/research-priority" },
      { label: "OCI Upgrades", href: "/oci-upgrades" },
      { label: "Black Market Economy", href: "/black-market-economy" },
    ],
  },
];

const misconceptions = [
  {
    myth: "There is one universal best squad or best leader package.",
    truth:
      "MENACE changes the answer with mission shape, map tax, roster condition, and campaign timing. Stable recommendations must explain fit, not hide it.",
  },
  {
    myth: "If I lose, I probably just need more damage.",
    truth:
      "A large share of failure comes from bad reads, awkward turns, weak recovery, or expensive contact, not from missing one more premium weapon.",
  },
  {
    myth: "Winning a mission proves the plan was good.",
    truth:
      "Campaign health matters. A costly win that hollows the roster can be worse than a cleaner lower-reward route.",
  },
];

const faqs = [
  {
    question: "What should I learn first in MENACE?",
    answer:
      "Learn how to classify mission pressure, recognize when a win is too expensive, and build one honest squad package that does not collapse on average maps. Those three skills pay back faster than any isolated tip list.",
  },
  {
    question: "What is the right way to use an FAQ page?",
    answer:
      "As a routing page. This page is not a fake universal tips sheet. Use it to map the symptom to the burden behind it, then move to the guide that solves that class of problem.",
  },
  {
    question: "When should I care about advanced optimization?",
    answer:
      "After ordinary missions stop draining the campaign. If the floor is still unstable, advanced optimization usually hides the fact that the base structure is weak.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Question Routing</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          MENACE <span className="text-accent">FAQ</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          A useful FAQ should shorten the gap between the question you ask and the page that can
          actually fix the campaign. It should not trap you inside a fake all-purpose answer bank.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">Read the Symptom Before You Read the Tip</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-bg-card">
              <tr>
                <th className="p-3 border border-border">Common Symptom</th>
                <th className="p-3 border border-border">Real Problem Class</th>
                <th className="p-3 border border-border">Start Here</th>
              </tr>
            </thead>
            <tbody>
              {diagnosisRows.map((row) => (
                <tr key={row.symptom} className="align-top">
                  <td className="p-3 border border-border font-semibold">{row.symptom}</td>
                  <td className="p-3 border border-border text-text-muted">{row.realProblem}</td>
                  <td className="p-3 border border-border text-text-muted">{row.firstReads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {routeCards.map((item) => (
          <div key={item.title} className="p-5 border border-border bg-bg-card">
            <h2 className="font-semibold font-heading text-lg mb-2">{item.title}</h2>
            <p className="text-text-muted leading-relaxed mb-4">{item.body}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {item.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-accent hover:underline">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">Misconceptions This FAQ Should Stop</h2>
        <div className="space-y-4">
          {misconceptions.map((item) => (
            <div key={item.myth} className="p-5 border border-border bg-bg-card">
              <h3 className="font-semibold text-white mb-2">{item.myth}</h3>
              <p className="text-text-muted leading-relaxed">{item.truth}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 border border-border bg-bg-card">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/mission-difficulty-guide" className="text-accent hover:underline">
          Mission Difficulty →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/resources" className="text-accent hover:underline">
          Resources →
        </Link>
      </div>
      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">Last updated: July 12, 2026.</p>
    </div>
  );
}
