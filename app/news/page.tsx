import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE News Tracker — Follow Updates by What Changes Your Campaign",
  description:
    "A practical MENACE news tracker focused on what kinds of updates matter, how to read patch impact, and where to verify official announcements.",
  robots: {
    index: false,
    follow: true,
  },
};

const updateBuckets = [
  {
    bucket: "Campaign-structure updates",
    matters:
      "These are the notes that change route logic, roster planning, mission flow, or long-run pacing. They deserve the most attention because they can invalidate old habits.",
    check:
      "Read these first when a save suddenly feels worse or better even before combat details are visible.",
  },
  {
    bucket: "Combat and role-balance updates",
    matters:
      "These change how certain units, weapons, or support packages trade value once the fight starts.",
    check:
      "Useful when a once-stable squad now struggles to convert pressure or when a specialist pick feels much weaker than before.",
  },
  {
    bucket: "Economy and support-system updates",
    matters:
      "Changes to black market value, research, OCI support, or resource flow can shift what counts as a safe long-run plan.",
    check:
      "Review these before assuming your old spending priorities are still correct.",
  },
  {
    bucket: "Bugfix and stability updates",
    matters:
      "Not every patch changes strategy, but stability fixes can still matter if they affect campaign saves, deployment behavior, or late-run reliability.",
    check:
      "Prioritize them when deciding whether it is safe to continue a long save or restart after a rough patch.",
  },
];

const trackerRules = [
  {
    title: "Do not treat every patch note as equally strategic",
    body:
      "This page is intentionally not a fake patch archive. Cosmetic changes, hotkeys, and minor UI notes rarely deserve the same reading time as economy, mission, or roster-logic changes.",
  },
  {
    title: "Re-test the habit, not just the number",
    body:
      "If an update touches balance, the real question is which old decision rule just got weaker or stronger. Strategy shifts happen through habits, not through isolated stat lines.",
  },
  {
    title: "Use official sources for exact details",
    body:
      "A tracker page should help you decide what to verify, not pretend to replace the official patch note. For exact numbers or dates, always check the developer source directly.",
  },
];

const sourceTable = [
  {
    source: "Steam news posts",
    bestFor: "Official announcements, patch note text, event timing",
    useItWhen: "You need the primary source before updating a route, guide, or save assumption",
  },
  {
    source: "Developer diaries or wiki posts",
    bestFor: "Design intent, upcoming direction, larger system context",
    useItWhen: "A patch changed behavior and you want to know whether that shift is temporary or part of a broader direction",
  },
  {
    source: "Your own live save checks",
    bestFor: "Confirming how the change feels in a real campaign",
    useItWhen: "The note sounds small but your run plays materially differently afterward",
  },
];

const faqs = [
  {
    question: "What MENACE updates should I read first?",
    answer:
      "Start with anything that changes campaign flow, mission logic, research value, resource pacing, or the jobs your core squad package is supposed to do. Those updates usually have the biggest downstream impact.",
  },
  {
    question: "Should I rebuild guides after every patch?",
    answer:
      "No. Rebuild only when the patch changes the decision rule behind the guide. A guide should survive small number movement if its diagnosis logic is sound.",
  },
  {
    question: "How should I use this page?",
    answer:
      "Use it as a filter. It tells you what kind of update matters and where to verify it, so you spend time reading the notes that can actually change how a campaign should be played.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#060b10]">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="max-w-3xl mb-10">
          <Link
            href="/"
            className="text-xs font-mono text-text-muted hover:text-tactical-blue transition-colors"
          >
            &larr; Back to Command Center
          </Link>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mt-6 mb-3">Update Filter</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary">
            MENACE News Tracker
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed mt-3">
            A useful news page is not a dump of half-verified patch claims. It should help you spot
            which updates can change your campaign habits, which ones only matter for stability, and
            where to verify the exact official wording before you act on it.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-2 mb-12">
          {updateBuckets.map((item) => (
            <div key={item.bucket} className="border border-border-subtle bg-[#0a0e13] p-5">
              <h2 className="font-display text-lg font-semibold text-text-primary mb-3">{item.bucket}</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.matters}</p>
              <p className="text-sm text-text-muted leading-relaxed">
                <span className="text-text-primary font-medium">Check first:</span> {item.check}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">Rules for Reading Updates</h2>
          {trackerRules.map((rule) => (
            <div key={rule.title} className="border border-border-subtle bg-[#0a0e13] p-5">
              <h3 className="font-semibold text-text-primary mb-2">{rule.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">Where to Verify Exact Details</h2>
          <div className="overflow-x-auto border border-border-subtle bg-[#0a0e13]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="p-3 text-text-primary">Source</th>
                  <th className="p-3 text-text-primary">Best For</th>
                  <th className="p-3 text-text-primary">Use It When</th>
                </tr>
              </thead>
              <tbody>
                {sourceTable.map((row) => (
                  <tr key={row.source} className="align-top border-b border-border-subtle last:border-b-0">
                    <td className="p-3 font-semibold text-text-primary">{row.source}</td>
                    <td className="p-3 text-text-secondary">{row.bestFor}</td>
                    <td className="p-3 text-text-secondary">{row.useItWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-text-primary">FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="border border-border-subtle bg-[#0a0e13] p-5">
              <h3 className="font-semibold text-text-primary mb-2">{faq.question}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>

        <p className="text-[11px] font-mono text-text-muted mt-10">
          Last updated: July 11, 2026. Verify current announcements on the official MENACE channels
          before treating a patch note as confirmed strategy guidance.
        </p>
      </div>
    </div>
  );
}
