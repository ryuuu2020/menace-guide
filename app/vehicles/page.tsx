import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Vehicles Guide — Choose Machines by Mission Burden, Not Fake Vehicle Sheets",
  description:
    "A practical MENACE vehicles guide focused on mission burden, vehicle roles, support demand, and when machines improve or distort the campaign.",
};

const vehicleRoles = [
  {
    role: "Anchor machines",
    solves:
      "They keep one dangerous part of the map from collapsing by absorbing attention and holding a contested lane long enough for infantry to work.",
    bestWhen:
      "The map rewards facing discipline and your infantry package can actually support the machine instead of trailing behind it.",
    trap:
      "Anchor value becomes fake if the roster expects one vehicle to hold multiple fights at once.",
  },
  {
    role: "Mobility and delivery platforms",
    solves:
      "They move the right unit package into the right area safely and make awkward map geometry less punishing.",
    bestWhen:
      "The squad needs cleaner repositioning or safer arrival timing more than it needs one more source of direct damage.",
    trap:
      "Players often mistake transport value for brawling value and then park these machines in direct-fire lanes.",
  },
  {
    role: "Pressure converters",
    solves:
      "These vehicles cash in after the squad already created an opening. They are at their best when the rest of the plan already shaped the fight correctly.",
    bestWhen:
      "The roster can create angles, protect the approach, and keep the machine from taking every threat at once.",
    trap:
      "Buying finishers before fixing line quality makes the whole vehicle plan look stronger in theory than in campaign reality.",
  },
  {
    role: "Attrition-efficient support",
    solves:
      "Some machines matter less for one dramatic mission and more for making several medium-hard missions cheaper to survive.",
    bestWhen:
      "The campaign is winning, but each win is still too expensive in manpower, repair pressure, or follow-up stability.",
    trap:
      "Support value disappears if it only compensates for sloppy pathing and repeated bad contact.",
  },
];

const diagnosisTable = [
  {
    signal: "The vehicle reaches the right lane and still dies too fast",
    promote: "Facing, support, and cleaner arrival timing",
    demote: "More fantasy firepower",
  },
  {
    signal: "Your line collapses when the machine moves",
    promote: "Infantry stability and better role separation",
    demote: "Any plan where one hull is carrying too much of the map",
  },
  {
    signal: "The machine looks strong but the campaign feels poorer after every win",
    promote: "Attrition-efficient use or a cheaper machine role",
    demote: "Upgrades that increase maintenance without changing outcomes",
  },
  {
    signal: "You keep buying vehicles before the squad can use them well",
    promote: "Core roster quality first",
    demote: "Vehicle-first fixes to infantry problems",
  },
];

const rules = [
  {
    title: "Vehicles should solve a mission burden, not decorate the roster",
    body:
      "This page is not a fake vehicle sheet. A machine is good because it removes a real tactical or campaign tax, not because its platform looks impressive in isolation.",
  },
  {
    title: "Support cost is part of vehicle value",
    body:
      "The useful machine is not the one with the most headline power. It is the one whose role the rest of the squad can actually sustain without breaking formation or budget.",
  },
  {
    title: "Terrain and facing are part of the machine",
    body:
      "Never evaluate a vehicle as if it lives in a vacuum. Map geometry and protection discipline decide whether its theoretical power becomes real.",
  },
];

const faqs = [
  {
    question: "What is the safest kind of vehicle in MENACE?",
    answer:
      "Usually the vehicle whose role is easiest to support with your current infantry package and mission shape. Safety comes from fit, not from category labels alone.",
  },
  {
    question: "When should I delay vehicle investment?",
    answer:
      "Delay it when the roster still lacks contact stability, proper support jobs, or enough map control to keep the machine from doing too much alone.",
  },
  {
    question: "What is the most common vehicle mistake?",
    answer:
      "Using a machine as a self-sufficient answer instead of as one piece inside a combined-arms plan with real support and real limits.",
  },
];

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Vehicle Fit</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          MENACE Vehicles Guide
        </h1>
        <p className="text-text-muted leading-relaxed">
          Vehicles are useful when they remove a real mission burden: holding a lane, delivering a
          package safely, converting a prepared opening, or making several hard fights cheaper to
          survive. They are harmful when they become expensive substitutes for missing squad quality.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {vehicleRoles.map((item) => (
          <div key={item.role} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{item.role}</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-2">{item.solves}</p>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              <span className="text-text-primary font-medium">Best when:</span> {item.bestWhen}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text-primary font-medium">Trap:</span> {item.trap}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> What the Bad Outcome Usually Means
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-hover">
              <tr>
                <th className="p-3 border border-border">Signal</th>
                <th className="p-3 border border-border">Promote</th>
                <th className="p-3 border border-border">Demote</th>
              </tr>
            </thead>
            <tbody>
              {diagnosisTable.map((row) => (
                <tr key={row.signal} className="align-top">
                  <td className="p-3 border border-border font-semibold">{row.signal}</td>
                  <td className="p-3 border border-border text-accent">{row.promote}</td>
                  <td className="p-3 border border-border text-text-muted">{row.demote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> Rules for Honest Vehicle Advice
        </h2>
        {rules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold mb-2">{rule.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/weapons" className="text-accent hover:underline">
          Weapons →
        </Link>
        <Link href="/unit-guide" className="text-accent hover:underline">
          Unit Guide →
        </Link>
        <Link href="/mission-difficulty-guide" className="text-accent hover:underline">
          Mission Difficulty →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
