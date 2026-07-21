import Link from "next/link";
import Image from "next/image";

const startRoutes = [
  {
    title: "New Campaigns Collapse Early",
    description:
      "Start here when the first few operations already feel messy, expensive, or hard to read.",
    href: "/beginners-guide",
  },
  {
    title: "The Roster Looks Strong but Plays Weak",
    description:
      "Use this route when the real problem is job coverage, leader fit, or poor campaign rotation.",
    href: "/unit-guide",
  },
  {
    title: "Mid-Campaign Wins Still Feel Too Costly",
    description:
      "This route is for attrition, shallow benches, and upgrades that never seem to pay back.",
    href: "/resources",
  },
  {
    title: "Missions Fail Because the Matchup Is Wrong",
    description:
      "Go here when the issue is mission fit, pressure reading, or taking the wrong type of operation.",
    href: "/missions",
  },
];

const diagnosisCards = [
  {
    label: "First Contact",
    body:
      "If battles go bad before your real plan starts, the campaign usually needs cleaner openings, better sequencing, or more honest squad structure.",
  },
  {
    label: "Campaign Cost",
    body:
      "If every victory still leaves you poorer, thinner, or more tired, the strategic problem is already live even before you see a dramatic defeat.",
  },
  {
    label: "Wrong Fix",
    body:
      "Many MENACE campaigns fail because players buy stronger-looking tools instead of removing the burden that is actually killing the run.",
  },
];

const corePages = [
  { title: "Beginner's Guide", desc: "Read the first repeated failure correctly.", href: "/beginners-guide" },
  { title: "Squad Leaders", desc: "Pick leaders by campaign burden and rotation depth.", href: "/squad-leaders" },
  { title: "Unit Guide", desc: "Judge units by role coverage, not fake rankings.", href: "/unit-guide" },
  { title: "Resources", desc: "Spend to remove the next real bottleneck.", href: "/resources" },
  { title: "Missions", desc: "Choose operations by pressure, tax, and follow-up cost.", href: "/missions" },
  { title: "Research Priority", desc: "Read research by what the campaign still cannot do.", href: "/research-priority" },
];

export const metadata = {
  title: "MENACE Guide Hub — Read the Campaign Problem Before You Read the Fix",
  description:
    "A practical MENACE guide hub focused on routing players to the right campaign, roster, mission, and systems pages instead of pretending one page solves everything.",
};

export default function HomePage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="bg-abyss-light border border-border-subtle p-6 lg:p-8">
          <Image
            src="/hero.jpg"
            alt="MENACE"
            width={460}
            height={215}
            priority
            className="w-full h-48 lg:h-64 object-cover rounded mb-6"
          />
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-3">
              Campaign Hub
            </p>
            <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
              MENACE Guide
            </h1>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              MENACE is usually lost at the campaign layer before it is lost on the tactical board.
              Good pages should help you identify whether the real problem is first contact, squad
              structure, mission fit, leader rotation, or spending discipline.
            </p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              This site is not trying to be a fake complete strategy guide. It is meant to route you
              toward the page that matches the burden actually killing the run.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">
            Start With the Failure You Keep Repeating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startRoutes.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="stat-card hover:border-tactical-blue transition-colors group"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                  {card.title}
                </p>
                <p className="text-sm text-text-secondary group-hover:text-tactical-blue transition-colors leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {diagnosisCards.map((card) => (
            <div key={card.label} className="stat-card">
              <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                {card.label}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">{card.body}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">
            Core Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {corePages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="stat-card hover:border-tactical-blue transition-colors group"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                  {page.title}
                </p>
                <p className="text-sm text-text-secondary group-hover:text-tactical-blue transition-colors leading-relaxed">
                  {page.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> guide.hub.status
          </p>
          <p>focus: campaign reading before tactical detail</p>
          <p>default move: diagnose the repeated burden first</p>
          <p>avoid: fake complete answers and fake certainty tables</p>
          <p className="cursor-blink">ready</p>
        </div>
      </div>
    </div>
  );
}
