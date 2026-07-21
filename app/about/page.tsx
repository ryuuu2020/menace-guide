import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MENACE Guide — Why This Site Routes by Campaign Burden, Not Wiki Volume",
  description:
    "About MENACE Guide, an unofficial fan site focused on campaign burden, roster fit, mission pressure, and routing players toward the next useful decision instead of fake completeness.",
  robots: {
    index: false,
    follow: true,
  },
};

const standards = [
  {
    area: "Campaign pages",
    good:
      "Explain margin, attrition, squad rotation, and what the next few operations can still support.",
    bad:
      "Pretend one clean tactical win proves the whole campaign is healthy.",
  },
  {
    area: "Roster and squad pages",
    good:
      "Read units, leaders, and squads by job coverage, burden, replacement cost, and mission fit.",
    bad:
      "Rank everything in one fake ladder and hide the conditions that make the choice good or bad.",
  },
  {
    area: "Mission pages",
    good:
      "Describe what the operation is taxing: contact discipline, movement, visibility, recovery, or anti-large capacity.",
    bad:
      "Write generic victory tips that ignore terrain, map pressure, or follow-up cost.",
  },
  {
    area: "Economy and upgrade pages",
    good:
      "Judge spending by which bottleneck the purchase actually removes from the next stretch of play.",
    bad:
      "Treat every powerful-looking unlock like automatic value.",
  },
];

const workflow = [
  {
    step: "Identify the burden first",
    body:
      "We try to route players by the burden that is actually killing the run: expensive victories, weak second lines, bad contact reads, thin benches, or prestige purchases that do not change the campaign.",
  },
  {
    step: "Prefer routing over fake completeness",
    body:
      "This page is not here to defend a generic wiki model. Good coverage should shorten the path from symptom to useful page, not trap the user inside a giant catalog of weak summaries.",
  },
  {
    step: "Cut or rewrite pages that drift into filler",
    body:
      "If a page starts sounding like a fake all-answers sheet, a fake stat panel, or a fake walkthrough certainty page, we would rather trim, reroute, or rebuild it than leave it pretending to be useful.",
  },
];

const sourceRules = [
  "Official store, patch, and public game information set the hard facts.",
  "Hands-on play review decides whether a recommendation survives real mission pressure.",
  "Community testing is useful when it clarifies tradeoffs, not when it inflates fake consensus.",
  "If a conclusion becomes stale after a systems change, the page should be rewritten or narrowed instead of left as archive clutter.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Editorial Standards</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          About <span className="text-accent">MENACE Guide</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          MENACE Guide is an unofficial fan site built around one editorial idea: a useful strategy
          page should reduce campaign mistakes, not just increase reading volume. The game creates a
          lot of false choice pressure, so the site works best when it routes players toward the
          next decision that actually changes mission outcomes, roster health, or campaign margin.
        </p>
      </div>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {workflow.map((item) => (
          <div key={item.step} className="p-5 rounded-xl border border-border bg-bg-card">
            <h2 className="font-bold font-heading text-white mb-2">{item.step}</h2>
            <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-heading mb-4">What a Good MENACE Page Must Do</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-bg-card">
              <tr>
                <th className="p-3 border border-border">Page Type</th>
                <th className="p-3 border border-border">Useful Standard</th>
                <th className="p-3 border border-border">Failure Mode We Reject</th>
              </tr>
            </thead>
            <tbody>
              {standards.map((row) => (
                <tr key={row.area} className="align-top">
                  <td className="p-3 border border-border font-semibold">{row.area}</td>
                  <td className="p-3 border border-border text-text-muted">{row.good}</td>
                  <td className="p-3 border border-border text-text-muted">{row.bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border border-border bg-bg-card">
          <h2 className="text-xl font-bold font-heading mb-3">How To Use the Site</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Start with the symptom that keeps repeating. If normal missions are too expensive, do
            not open advanced tactics first. If squads look strong on paper but play weak, do not
            solve that with economy guides. The site is meant to narrow the problem class quickly.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/beginners-guide" className="text-accent hover:underline">
              Beginner&apos;s Guide →
            </Link>
            <Link href="/missions" className="text-accent hover:underline">
              Missions →
            </Link>
            <Link href="/resources" className="text-accent hover:underline">
              Resources →
            </Link>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-border bg-bg-card">
          <h2 className="text-xl font-bold font-heading mb-3">Source Discipline</h2>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            {sourceRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 p-5 rounded-xl border border-border bg-bg-card">
        <h2 className="text-xl font-bold font-heading mb-3">What This Site Is Not Trying To Be</h2>
        <p className="text-text-muted leading-relaxed mb-3">
          It is not trying to be a fake all-systems encyclopedia, a fake datamine mirror, or a fake
          certainty machine that turns every squad, mission, leader, and upgrade into a universal
          ranking. That style of page usually looks complete while hiding the only question that
          matters: what does this choice cost the campaign right now?
        </p>
        <p className="text-text-muted leading-relaxed">
          MENACE belongs to Overhype Studios and Hooded Horse. All game names, trademarks, and
          assets remain the property of their respective owners. This is an independent fan
          publication and is not affiliated with or endorsed by the rights holders.
        </p>
      </section>

      <section className="p-5 rounded-xl border border-border bg-bg-card">
        <h2 className="text-xl font-bold font-heading mb-3">Contact</h2>
        <p className="text-text-muted leading-relaxed mb-3">
          If a page still routes badly, a mission guide is hiding fake certainty, or a recommendation
          no longer survives current systems behavior, send it through UniFans so it can be trimmed
          or rebuilt instead of lingering as stale filler.
        </p>
        <a href="https://app.unifans.io/c/ryu2020" className="text-accent hover:underline">
          Support us on UniFans
        </a>
        <p className="text-xs text-text-muted mt-6">Last updated: July 12, 2026</p>
      </section>
    </div>
  );
}
