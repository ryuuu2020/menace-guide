import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Unit Guide — Read Units by Job Coverage, Not Fake Stat Tables",
  description:
    "A practical MENACE unit guide focused on job coverage, briefing fit, pressure tolerance, and how to judge units without fake all-unit rankings.",
};

const roleFrames = [
  {
    role: "Contact stabilizers",
    value:
      "These are the units that keep first contact from turning into panic. Their job is to buy shape, protect the line, and stop the mission from becoming reactive immediately.",
    bestWhen:
      "The map has uncertain sightlines, fragile openings, or too many ways for the enemy to force a bad first exchange.",
    trap:
      "Players underrate them because stabilizers rarely create the dramatic finish. They create the turns that make finishing possible.",
  },
  {
    role: "Pressure converters",
    value:
      "These units cash in after the squad already created an opening. They break armor, punish exposure, or turn one clean read into actual progress.",
    bestWhen:
      "The roster already has enough control to keep the converter firing at the right target on the right turn.",
    trap:
      "Converters get fake S-tier treatment when players ignore how much support they need to matter consistently.",
  },
  {
    role: "Information and angle pieces",
    value:
      "These units lower the cost of uncertainty, improve approach routes, and prevent the squad from taking every fight on the enemy's terms.",
    bestWhen:
      "You keep losing to spread pressure, bad contact timing, or maps that punish short-range commitment.",
    trap:
      "They look weak only when the real campaign problem is missing damage conversion or line integrity, not missing information.",
  },
  {
    role: "Recovery and sustain pieces",
    value:
      "Their job is not to be flashy. Their job is to keep ugly wins from becoming strategic losses across the next three operations.",
    bestWhen:
      "The campaign is already winning some missions, but every win leaves the bench thinner, the leaders shakier, or the next deployment more expensive.",
    trap:
      "Too much sustain becomes drift if it is only subsidizing bad reads and bad positioning.",
  },
];

const unitChecks = [
  {
    signal: "The squad reaches the fight but cannot finish hard targets",
    promote: "More conversion value, not more generic survival",
    demote: "Extra utility pieces that do not actually turn openings into progress",
  },
  {
    signal: "First contact keeps going bad before the plan starts",
    promote: "Contact stabilizers and cleaner information tools",
    demote: "High-ceiling damage picks that assume the opening is already safe",
  },
  {
    signal: "You win, but the roster leaves every mission damaged or thin",
    promote: "Recovery and attrition control",
    demote: "Expensive spike units that make the next deployment harder",
  },
  {
    signal: "Maps keep stretching the squad across awkward angles",
    promote: "Mobility, scouting, and angle-holding value",
    demote: "Short-range brawlers that need the whole fight to happen in one lane",
  },
];

const rules = [
  {
    title: "Judge units by the job they make easier",
    body:
      "This page is not a fake all-units ranking table. A unit is good because it removes a real campaign bottleneck, not because it looks strong in one isolated comparison.",
  },
  {
    title: "Briefing fit matters more than broad reputation",
    body:
      "A supposedly weaker unit can be the correct pick when the mission pressure matches what it solves and the rest of the roster already supports that job.",
  },
  {
    title: "Campaign cost belongs inside unit value",
    body:
      "The useful unit is not always the one with the prettiest mission ceiling. It is often the one that helps the squad arrive at the next deployment cleaner and more flexible.",
  },
];

const faqs = [
  {
    question: "What is the safest default unit mix in MENACE?",
    answer:
      "Usually one or two contact stabilizers, one clear conversion piece, one information or angle tool, and enough recovery that the mission can survive an imperfect read. Exact names matter less than honest job coverage.",
  },
  {
    question: "Why do full unit rankings fail so often?",
    answer:
      "Because they flatten briefing fit, terrain, campaign state, and roster support into one fake certainty line. Real MENACE decisions are contextual.",
  },
  {
    question: "When should I add specialist units?",
    answer:
      "Add them when the mission or campaign is clearly taxing a narrow problem that your default package is not solving cleanly. Specialists are strongest when the reason for bringing them is obvious before deployment.",
  },
];

export default function UnitGuidePage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-light mb-3">Roster Reading</p>
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">MENACE Unit Guide</h1>
          <p className="text-ink-light leading-relaxed">
            A useful unit guide should help you read role coverage, mission fit, and campaign cost.
            It should not pretend every unit can be solved by one ranking sheet or one best-loadout
            table. In MENACE, the real question is what job the roster still cannot do cleanly.
          </p>
        </div>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {roleFrames.map((item) => (
            <div key={item.role} className="p-5 rounded-xl border border-border bg-surface">
              <h2 className="text-lg font-bold mb-2">{item.role}</h2>
              <p className="text-sm text-ink-light leading-relaxed mb-2">{item.value}</p>
              <p className="text-sm text-ink-light leading-relaxed mb-2">
                <span className="font-semibold text-ink">Best when:</span> {item.bestWhen}
              </p>
              <p className="text-sm text-ink-light leading-relaxed">
                <span className="font-semibold text-ink">Trap:</span> {item.trap}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Change the Unit Plan When These Signals Appear</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-hover">
                <tr>
                  <th className="p-3 border border-border">Campaign Signal</th>
                  <th className="p-3 border border-border">Promote</th>
                  <th className="p-3 border border-border">Demote</th>
                </tr>
              </thead>
              <tbody>
                {unitChecks.map((row) => (
                  <tr key={row.signal} className="align-top">
                    <td className="p-3 border border-border font-semibold text-ink">{row.signal}</td>
                    <td className="p-3 border border-border text-accent">{row.promote}</td>
                    <td className="p-3 border border-border text-ink-light">{row.demote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Rules for Honest Unit Advice</h2>
          {rules.map((rule) => (
            <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-ink mb-2">{rule.title}</h3>
              <p className="text-sm text-ink-light leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
                <h3 className="font-semibold text-ink mb-2">{faq.question}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/builds" className="text-accent hover:underline">
            Builds →
          </Link>
          <Link href="/best-team-comps" className="text-accent hover:underline">
            Best Team Comps →
          </Link>
          <Link href="/weapons" className="text-accent hover:underline">
            Weapons →
          </Link>
        </div>
        <p className="text-xs text-ink-light mt-8">Last updated: July 11, 2026</p>
      </div>
    </div>
  );
}
