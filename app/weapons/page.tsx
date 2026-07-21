import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Weapons Guide — Choose Weapons by Job, Squad Fit, and Campaign Need",
  description:
    "A practical MENACE weapons guide covering mainline rifles, suppression tools, precision weapons, and anti-armor answers without fake stat tables.",
};

const weaponRoles = [
  {
    role: "Mainline rifles",
    solves:
      "General-purpose fire that keeps squads useful across mixed maps and mixed contact ranges.",
    bestWhen:
      "The roster still needs flexible answers more than specialized spikes.",
    weakWhen:
      "You expect a generalist rifle to solve suppression or anti-armor problems it was never built for.",
  },
  {
    role: "Suppression tools",
    solves:
      "Action denial, lane control, and the ability to make enemy turns less efficient even before kills happen.",
    bestWhen:
      "The squad needs to advance under pressure or protect a fragile angle from becoming uncontested.",
    weakWhen:
      "You overinvest in suppression without enough damage or finishing tools to exploit the pressure created.",
  },
  {
    role: "Precision weapons",
    solves:
      "Deleting priority targets, punishing exposed elites, and rewarding cleaner reads of where the real threat is.",
    bestWhen:
      "The squad can create sightlines and has time to capitalize on accurate finishing pressure.",
    weakWhen:
      "The fight is too messy or too short-ranged for that precision to matter consistently.",
  },
  {
    role: "Anti-armor answers",
    solves:
      "Preventing late-game stalls where the roster can see the threat but cannot actually convert damage into progress.",
    bestWhen:
      "Armor is the real bottleneck and the rest of the squad can already protect the answer long enough to matter.",
    weakWhen:
      "You load up on armor answers before the campaign even has a stable mainline.",
  },
];

const loadoutRules = [
  {
    title: "Judge a weapon by the problem it removes",
    body:
      "A gun is not strong because its numbers look large. It is strong when it gives the squad an answer it previously lacked: flexible fire, suppression, finishing pressure, or anti-armor conversion.",
  },
  {
    title: "Weapon choice is a squad decision, not a vanity decision",
    body:
      "The same weapon can be perfect in one squad and wasteful in another. Always ask what job is already covered and what the roster still cannot do.",
  },
  {
    title: "Do not confuse suppression with victory",
    body:
      "Suppression creates safer turns, but the squad still needs a way to convert those safer turns into actual progress.",
  },
  {
    title: "Anti-armor is timing-dependent",
    body:
      "Bring it when armor is the campaign bottleneck, not simply because the tool looks premium.",
  },
];

const failureChecks = [
  {
    check: "The squad keeps seeing threats but cannot finish them",
    fix: "You likely need better precision or follow-up damage, not more generalist fire.",
  },
  {
    check: "The roster survives contact but loses the angle war",
    fix: "A stronger suppression package may matter more than a marginal damage increase.",
  },
  {
    check: "Late-game armored enemies stall every mission",
    fix: "Your anti-armor answer is too weak, too rare, or too poorly protected.",
  },
  {
    check: "Every gun looks fine but the squad still feels clumsy",
    fix: "The problem may be job overlap: too many similar weapons solving the same mid-value task.",
  },
];

const faqs = [
  {
    question: "What is the best all-around weapon type in MENACE?",
    answer:
      "Usually a mainline rifle class, because flexibility matters early and mid campaign. But even a strong all-rounder is not enough if the squad still lacks suppression or anti-armor coverage.",
  },
  {
    question: "Why are fake weapon stat tables misleading?",
    answer:
      "Because they imply certainty while ignoring squad fit, terrain, pressure, and campaign timing. A weapon's real value is contextual.",
  },
  {
    question: "What is the most common weapon mistake?",
    answer:
      "Buying a strong individual gun that does not solve the squad's actual current weakness.",
  },
];

export default function WeaponsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Weapons <span className="text-accent">Guide</span>
      </h1>
      <p className="text-text-muted mb-6 max-w-3xl leading-relaxed">
        This page is not a fake weapon stat spreadsheet. MENACE weapons matter because they cover
        distinct jobs: flexible mainline fire, suppression, priority finishing, or anti-armor
        conversion. The right weapon choice depends on what the squad still cannot do, not on which
        entry looks most premium in isolation.
      </p>
      <p className="text-text-muted mb-10 max-w-3xl leading-relaxed">
        Think in terms of squad fit and campaign timing. A clean roster usually wants at least one
        reliable generalist core, one way to suppress or deny, and one answer to armored or elite
        threats. After those jobs are covered, upgrades begin to matter more than category gaps.
      </p>

      <section className="mb-10 overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-4 text-left font-semibold">Weapon Role</th>
              <th className="p-4 text-left font-semibold">What It Solves</th>
              <th className="p-4 text-left font-semibold">Best When</th>
              <th className="p-4 text-left font-semibold">Weak When</th>
            </tr>
          </thead>
          <tbody>
            {weaponRoles.map((row) => (
              <tr key={row.role} className="border-b border-border/60">
                <td className="p-4 font-semibold text-text-primary">{row.role}</td>
                <td className="p-4 text-text-muted">{row.solves}</td>
                <td className="p-4 text-accent">{row.bestWhen}</td>
                <td className="p-4 text-text-muted">{row.weakWhen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {loadoutRules.map((rule) => (
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
              <th className="p-4 text-left font-semibold">Failure Check</th>
              <th className="p-4 text-left font-semibold">What to Change</th>
            </tr>
          </thead>
          <tbody>
            {failureChecks.map((row) => (
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
