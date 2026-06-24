import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Management — Supply, Authority & Manpower",
  description: "Complete MENACE resource management guide: Supply Cost optimization, Authority management, manpower conservation, O.C.I. components, and promotion point strategy.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Resource <span className="text-accent">Management</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Master MENACE&apos;s four core resources: Supply Cost, Authority, Manpower, and O.C.I. components.
        Efficient resource management is the difference between victory and defeat.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>How do I manage Supply Cost efficiently?</summary>
          <p>Each mission has a supply cap. Better gear costs more supply, limiting how many squads you can deploy. Balance quality vs quantity — two well-equipped squads often outperform one ultra-elite squad. Use low-cost leaders (Jean Sy, Marta Carda) to free supply for other squads.</p>
        </details>
        <details>
          <summary>What happens if I run out of manpower?</summary>
          <p>Squads deploy under-strength, reducing firepower and survivability. Always maintain a healthy manpower reserve through Black Market Recruitment Drive purchases. Lost soldiers are gone permanently — protect your experienced troops.</p>
        </details>
        <details>
          <summary>How important is Authority?</summary>
          <p>Authority governs discipline across your fleet and is spent to recruit new squad leaders. Low authority = reduced squad discipline and vulnerability to suppression. Balance recruitment spending against maintaining a strong authority pool.</p>
        </details>
      </div>

      <div className="space-y-6">
        {[
          {
            title: "Supply Cost",
            desc: "Supply determines how much equipment you can bring per mission. Every weapon, armor piece, and squad member costs supply. Missions have hard supply caps — exceeding them prevents deployment.",
            strategies: [
              "Rotate between expensive elite squads and cheap support squads",
              "Use zero-supply leaders (Jane Darby, Kody Greifinger, Jean Sy) to free budget",
              "Match equipment to mission difficulty — don&apos;t over-equip for easy missions",
              "Ammo and consumables add up — only bring what you&apos;ll actually use",
            ],
          },
          {
            title: "Authority & Discipline",
            desc: "Authority is your command resource. High authority improves fleet-wide discipline (suppression resistance). Spending authority recruits new leaders — each recruitment reduces the pool.",
            strategies: [
              "Maintain Authority above 50% for optimal discipline bonuses",
              "Only recruit leaders you plan to use — each costs significant Authority",
              "Dismissing unused leaders refunds Authority — don&apos;t hoard leaders",
              "Discipline directly affects suppression resistance — high Valor leaders help compensate",
            ],
          },
          {
            title: "Manpower Pool",
            desc: "Your total available soldiers. Each squad consumes manpower based on size. Losing soldiers in combat permanently reduces the pool. Manpower replenishment comes from Black Market items and O.C.I. upgrades.",
            strategies: [
              "Buy Recruitment Drive items every Black Market refresh",
              "Prioritize Hull O.C.I. upgrades for passive manpower regeneration",
              "Protect experienced squads — veteran soldiers are irreplaceable",
              "Don&apos;t over-expand squad size early — larger squads drain manpower faster",
            ],
          },
          {
            title: "Promotion Points",
            desc: "Earned by completing primary and optional mission objectives. Spend them to promote squad leaders, unlocking new skills and stat increases. Promotion costs vary by leader (PCF stat).",
            strategies: [
              "Prioritize promotions on high-Growth-Potential leaders (Charles Lim, Marta Carda)",
              "Complete optional objectives even in easy missions — bonus promotion points add up",
              "Marta Carda has PCF 0.8 — she&apos;s 20% cheaper to promote than average",
              "Jane Darby has PCF 1.35 — promotions cost 35% more, choose wisely",
            ],
          },
          {
            title: "O.C.I. Components",
            desc: "Upgrade components for the TCRN Impetus ship. Earned through faction operations and mission rewards. Spend on Electronics (intel), Weapons (orbital strikes), or Hull (sustainability).",
            strategies: [
              "Electronics first — mission intel is the most impactful upgrade",
              "Faction-specific O.C.I. upgrades are more expensive but significantly stronger",
              "Weapons O.C.I. provides limited-use orbital strikes — use sparingly per mission",
              "Hull O.C.I. (Medical Bay, Vehicle Repair) enables longer operation chains",
            ],
          },
        ].map((res, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">
              <span className="text-accent">0{i + 1}</span> {res.title}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mb-4">{res.desc}</p>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-accent-secondary">Optimal Strategy:</h3>
              <ul className="space-y-1.5">
                {res.strategies.map((s, j) => (
                  <li key={j} className="text-xs text-text-muted flex gap-2">
                    <span className="text-accent">&rarr;</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
