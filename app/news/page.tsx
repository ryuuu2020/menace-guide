import Link from 'next/link';

const FACTS = [
      {
    date: '2026-06-27',
    title: 'MENACE Patch v0.7.6+19301 Live — Latest Stability and Balance Pass',
    content:
      'Overhype Studios shipped MENACE patch v0.7.6+19301 on June 25, continuing their aggressive post-launch update cadence — this is the 19th patch since the September 2025 demo and the 8th since Early Access launched in February 2026. Key improvements in this build include additional stability fixes for late-game saves with large unit counts, balance adjustments to several overperforming unit types, and AI behavior improvements for flanking maneuvers. The v0.7.x series has been focused on polishing the experience after the major v0.7.0 content drop in April, which added new missions, units, and systems. For new players considering picking up MENACE during the Steam Summer Sale, the current build is the most stable version yet — the team has been shipping weekly patches addressing community-reported issues with impressive consistency. The official wiki now has detailed patch breakdowns for every version, making it easy to track what has changed since you last played.',
  },
  {
    date: '2026-06-26',
    title: 'SL Update 1 Now Live — First Major MENACE Content Drop',
    content:
      'Overhype Studios and Hooded Horse released SL Update 1, the first major content expansion since MENACE entered Early Access in February 2026. Dev Diary #48 previewed the highlights: new squad leader abilities, expanded faction diplomacy trees, and rebalanced armored vehicle combat. SL Update 1 introduces Convoy Interception — a new mission type where players ambush MENACE supply lines in real-time before transitioning to turn-based tactical combat. The update also adds 3 new weapon variants (including a heavy flamethrower), 2 new mech chassis options for the O.C.I. ship upgrade tree, and a reworked Black Market economy offering rare faction-exclusive equipment at premium prices. Balance changes: light vehicles receive a 15% HP buff while heavy mechs get a slight movement range nerf. A fresh campaign start is required to access all new content — existing saves will not trigger the new mission types.',
  },
  {
    date: '2026-06-25',
    title: 'MENACE Continues to Grow in Early Access',
    content:
      'Developed by Overhype Studios (creators of Battle Brothers) and published by Hooded Horse, MENACE has been in Early Access since February 2026. The game features 14 squad leaders, 7 factions, an extensive weapon catalog with real military designations, armored vehicles including tanks and mechs, and turn-based tactical combat against the MENACE alien threat in the Wayback System.',
  },
  {
    date: '2026-02',
    title: 'Early Access Launch',
    content:
      'MENACE launched on Steam Early Access in February 2026. Available on PC via Steam, GOG, Epic Games Store, and Microsoft Store. The game features squad-based tactical combat, faction relationships, O.C.I. ship upgrades, Black Market trading, and the ongoing campaign against the MENACE threat.',
  },
];
export const metadata = {
  title: "MENACE NEWS & UPDATES — Complete Guide (2026)",
  description:
    "About MENACE — Early Access tactical RPG from Overhype Studios",
};


export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#060b10]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <Link
            href="/"
            className="text-xs font-mono text-text-muted hover:text-tactical-blue transition-colors"
          >
            &larr; Back to Command Center
          </Link>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary mt-4">
            NEWS &amp; <span className="text-tactical-blue">UPDATES</span>
          </h1>
          <p className="text-xs font-mono text-text-muted mt-2">
            About MENACE — Early Access tactical RPG from Overhype Studios
          </p>
        </div>

        <div className="space-y-6">
          {FACTS.map((item, i) => (
            <article
              key={i}
              className="border border-border-subtle bg-[#0a0e13] hover:border-tactical-blue/20 transition-colors"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${
                  i === 0 ? 'bg-tactical-blue/10 text-tactical-blue' : 'bg-terminal-green/10 text-terminal-green'
                }`}>
                  {i === 0 ? 'RELEASE' : 'LAUNCH'}
                </span>
                <span className="text-[11px] font-mono text-text-muted">{item.date}</span>
              </div>
              <div className="p-4">
                <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
                  {item.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.content}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            For official announcements and patch notes, visit the MENACE Steam page or check the{' '}
            <a href="https://wiki.hoodedhorse.com/MENACE" target="_blank" rel="noopener noreferrer" className="text-tactical-blue hover:underline">
              Official Wiki
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
