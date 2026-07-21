import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Resource Management — Spend to Remove the Next Bottleneck",
  description:
    "A practical MENACE resource guide covering supply, authority, manpower, promotions, and OCI spending based on campaign bottlenecks rather than fake max-value formulas.",
};

const resources = [
  {
    resource: "Supply",
    role:
      "Determines how much quality and flexibility your squads can field without starving the rest of the roster.",
    spend:
      "Spend when better equipment or cleaner deployment genuinely changes the next stretch of missions.",
    trap:
      "One showcase squad looks great while the bench quietly loses coverage and resilience.",
  },
  {
    resource: "Authority",
    role:
      "Controls how aggressively you can recruit, rotate, and absorb command strain without destabilizing the campaign structure.",
    spend:
      "Spend when a command decision solves a real roster bottleneck rather than adding one more interesting option.",
    trap:
      "You keep buying choices faster than the campaign can support disciplined use of them.",
  },
  {
    resource: "Manpower",
    role:
      "Represents whether ugly wins remain recoverable or start turning into delayed collapse.",
    spend:
      "Spend when the mission value is real and the casualty cost prevents a worse future problem.",
    trap:
      "Victories look successful on paper, but every success makes the next deployment shakier.",
  },
  {
    resource: "Promotion points",
    role:
      "Turn dependable leaders into real anchors, but only when concentrated where they change future missions.",
    spend:
      "Spend where promotions remove recurring weakness or create a stable core for several upcoming fights.",
    trap:
      "You are polishing favorites while the bench remains too shallow to carry the campaign.",
  },
  {
    resource: "OCI investment",
    role:
      "Shapes ship-side support quality: information, conversion help, or sustain across multiple operations.",
    spend:
      "Spend when support upgrades improve several upcoming missions rather than decorating one.",
    trap:
      "This page is not a fake resource-maxing spreadsheet. Ship upgrades are overrated when ground play is still failing for simpler reasons.",
  },
];

const planningRules = [
  {
    title: "Spend to remove the next bottleneck",
    body:
      "MENACE is not about maximizing every number at once. The useful question is whether the next real danger is weak coverage, shallow manpower, poor authority discipline, or lack of support quality.",
  },
  {
    title: "Bench depth is a strategic resource",
    body:
      "A run with one strong squad and no healthy follow-up path is weaker than it looks. Resource policy should protect more than one deployable future.",
  },
  {
    title: "Ugly wins still cost the campaign",
    body:
      "If success keeps draining manpower, authority, or repair margin, the resource problem is already live even before you see a dramatic defeat.",
  },
  {
    title: "Avoid split spending across every system",
    body:
      "Half-solving five problems usually means solving none. Pick the spend that most directly stabilizes the next few operations.",
  },
];

const campaignStates = [
  {
    state: "Squads feel under-equipped but the bench still matters",
    priority: "Protect supply efficiency before loading one team to the ceiling.",
  },
  {
    state: "Recruitment options look tempting but command feels stretched",
    priority: "Respect authority and role fit more than novelty.",
  },
  {
    state: "Missions are being won at painful casualty cost",
    priority: "Treat manpower preservation as urgent, not optional.",
  },
  {
    state: "The roster is coherent but hard fights still stall",
    priority: "Use promotions and OCI where they create stable conversion rather than cosmetic improvement.",
  },
];

const faqs = [
  {
    question: "What resource matters most in MENACE?",
    answer:
      "Whichever one is currently bottlenecking the campaign. Early on that is often supply or authority discipline; later it is frequently manpower depth or the ability to strengthen the right anchors.",
  },
  {
    question: "Why do campaigns collapse after several apparent wins?",
    answer:
      "Because the wins were too expensive. Resource collapse often appears first as shallow benches, strained follow-up deployments, and weak reserves before one dramatic defeat makes it obvious.",
  },
  {
    question: "What is the most common resource mistake?",
    answer:
      "Trying to maximize every category at once instead of deciding what the next stretch of missions actually needs.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Campaign Economy</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          Resource <span className="text-accent">Management</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          Resource management in MENACE is useful only when it helps you remove the next real
          campaign bottleneck. Bigger numbers do not matter by themselves. Stable follow-up
          deployments, healthy bench depth, and cleaner upcoming missions do.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Read Each Resource by What It Unlocks or Endangers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border">Resource</th>
                <th className="p-3 border border-border">What It Controls</th>
                <th className="p-3 border border-border">Spend It When</th>
                <th className="p-3 border border-border">Trap Signal</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((row) => (
                <tr key={row.resource} className="align-top hover:bg-surface">
                  <td className="p-3 border border-border font-semibold">{row.resource}</td>
                  <td className="p-3 border border-border text-text-muted">{row.role}</td>
                  <td className="p-3 border border-border text-accent">{row.spend}</td>
                  <td className="p-3 border border-border text-text-muted">{row.trap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        {planningRules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{rule.title}</h2>
            <p className="text-sm text-text-muted leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> What to Prioritize by Campaign State
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border">Campaign State</th>
                <th className="p-3 border border-border">Priority</th>
              </tr>
            </thead>
            <tbody>
              {campaignStates.map((row) => (
                <tr key={row.state} className="align-top hover:bg-surface">
                  <td className="p-3 border border-border font-semibold">{row.state}</td>
                  <td className="p-3 border border-border text-text-muted">{row.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-text-primary mb-2">{faq.question}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
        <Link href="/mission-difficulty-guide" className="text-accent hover:underline">
          Mission Difficulty →
        </Link>
        <Link href="/builds" className="text-accent hover:underline">
          Builds →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
