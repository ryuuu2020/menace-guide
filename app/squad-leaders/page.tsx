import type { Metadata } from "next";
import Link from "next/link";
import { squadLeaders } from "@/lib/data";

export const metadata: Metadata = {
  title: "MENACE Squad Leaders Guide — Pick Leaders by Campaign Burden, Not Fake Rank Panels",
  description:
    "A practical MENACE squad leaders guide focused on campaign burden, squad identity, rotation depth, and when different leaders become worth the slot.",
};

const stabilityBands = [
  {
    band: "Primary stabilizers",
    use:
      "Leaders in this band are the safest when the campaign mostly needs cleaner openings, fewer bad turns, and more reliable follow-up deployments.",
    risk:
      "They can still be wrong if the roster now needs a narrow specialist answer rather than one more general stabilizer.",
  },
  {
    band: "Specialist pivots",
    use:
      "These leaders become valuable when the briefing, map, or squad package clearly rewards a narrower identity or stronger tempo shift.",
    risk:
      "They are easy to overrate when copied outside the conditions that make their strengths matter.",
  },
  {
    band: "Bench-development projects",
    use:
      "These are leaders you grow because they may solve a later campaign problem, not because they are the safest immediate answer today.",
    risk:
      "Forcing them too early often creates a shallow active rotation and expensive missions.",
  },
];

const selectionTable = [
  {
    signal: "Several missions are getting messy before the real plan starts",
    prioritize: "Leaders who improve contact stability and turn quality",
    avoid: "Flashier options that need already-clean openings",
  },
  {
    signal: "The roster is stable but now lacks one clear pressure answer",
    prioritize: "A specialist pivot whose identity matches the specific burden",
    avoid: "Adding one more generic safe leader just because they look broadly strong",
  },
  {
    signal: "Fatigue and mission sequencing are exposing the bench",
    prioritize: "Rotation depth and dependable second-wave leaders",
    avoid: "Overfunneling value into a single star commander",
  },
  {
    signal: "Hard fights are won, but the campaign pays too much after each win",
    prioritize: "Leaders who reduce operational tax and keep the roster reusable",
    avoid: "Peak-output picks that increase recovery burden",
  },
];

const rules = [
  {
    title: "A leader is good because they reduce campaign burden",
    body:
      "This page is not a fake all-leaders ranking panel. The right leader is the one that makes the next stretch of missions easier to pilot, easier to recover from, or easier to rotate through.",
  },
  {
    title: "Bench depth is part of leader value",
    body:
      "The best commander on paper can still weaken the run if using them means the rest of the rotation never becomes credible.",
  },
  {
    title: "Leader choice should follow squad identity",
    body:
      "Do not ask which leader is strongest in the abstract. Ask which leader makes this specific package of units, weapons, and objectives more coherent.",
  },
];

const faqs = [
  {
    question: "How should I read a squad leader guide in MENACE?",
    answer:
      "Read it as a campaign-burden guide. Leaders matter because they stabilize openings, support a specialist line, or deepen rotation quality, not because they win a beauty contest in isolation.",
  },
  {
    question: "When should I grow backup leaders?",
    answer:
      "Earlier than most players think. If the campaign already relies on one or two names too heavily, you are one fatigue cycle away from weaker deployments.",
  },
  {
    question: "What is the most common leader mistake?",
    answer:
      "Recruiting by broad reputation while ignoring what the current squad package and mission flow actually need.",
  },
];

export default function SquadLeadersPage() {
  const leaderCards = squadLeaders.slice(0, 12);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Leader Selection</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          MENACE Squad Leaders Guide
        </h1>
        <p className="text-text-muted leading-relaxed">
          A useful squad leader page should tell you what burden the leader removes from the campaign:
          unstable openings, weak specialist identity, shallow rotation, or expensive follow-up turns.
          It should not pretend one rank panel can settle every commander choice.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {stabilityBands.map((item) => (
          <div key={item.band} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{item.band}</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-2">{item.use}</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text-primary font-medium">Risk:</span> {item.risk}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> What the Campaign Is Asking For
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-hover">
              <tr>
                <th className="p-3 border border-border">Campaign Signal</th>
                <th className="p-3 border border-border">Prioritize</th>
                <th className="p-3 border border-border">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {selectionTable.map((row) => (
                <tr key={row.signal} className="align-top">
                  <td className="p-3 border border-border font-semibold">{row.signal}</td>
                  <td className="p-3 border border-border text-accent">{row.prioritize}</td>
                  <td className="p-3 border border-border text-text-muted">{row.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> Rules for Honest Leader Advice
        </h2>
        {rules.map((rule) => (
          <div key={rule.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold mb-2">{rule.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Leader Pages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leaderCards.map((leader) => (
            <Link
              key={leader.slug}
              href={`/squad-leaders/${leader.slug}`}
              className="block p-5 rounded-xl border border-border bg-surface card-hover"
              style={{ borderLeftWidth: "3px", borderLeftColor: leader.color }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{leader.name}</h3>
                <span className="text-xs text-text-muted font-mono">{leader.faction}</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Use the individual page when you already know this leader might fit the current squad
                burden and want the narrower breakdown.
              </p>
            </Link>
          ))}
        </div>
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
        <Link href="/best-team-comps" className="text-accent hover:underline">
          Best Team Comps →
        </Link>
        <Link href="/unit-guide" className="text-accent hover:underline">
          Unit Guide →
        </Link>
        <Link href="/campaign-guide" className="text-accent hover:underline">
          Campaign Guide →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 11, 2026</p>
    </div>
  );
}
