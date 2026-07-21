export const metadata = {
  title: "MENACE Squad Tier List — Compare Campaign Fit, Not Fake Universal Rankings",
  description:
    "A practical MENACE squad tier list focused on campaign fit, mission coverage, fatigue management, and how to compare squads without fake universal ladders.",
};

const squadTiers = [
  {
    tier: "S",
    color: "text-green-400",
    squads: [
      {
        name: "Precision Overwatch",
        leader: "Jane Darby",
        identity: "Long-range control and priority target removal",
        when: "Assault, defense, and missions where losing one elite enemy early changes the whole map.",
        why:
          "This remains the cleanest squad in MENACE because it solves danger before danger gets to act. Darby gives the squad a real answer to high-value targets, while the supporting marksman and medic shell keeps the formation dependable.",
        risk:
          "The comp becomes fragile if you let the map collapse into close-range chaos. It wants angles and information, not panic brawls.",
      },
      {
        name: "Ghost Recon",
        leader: "Kody Greifinger",
        identity: "Concealment, flanking, and objective tempo",
        when: "Infiltration, recon, split-objective maps, and any mission where positioning is the real win condition.",
        why:
          "Greifinger turns movement into damage and damage into movement again. That makes this the most forgiving high-skill squad for players who want to control where fights happen rather than absorb them.",
        risk:
          "If you lose concealment discipline and start trading shots in the open, the squad gives up its biggest advantage.",
      },
    ],
  },
  {
    tier: "A",
    color: "text-[#58a6ff]",
    squads: [
      {
        name: "Suppression Grid",
        leader: "Edwin Pike",
        identity: "Fire-control squad that makes the rest of your roster safer",
        when: "Escort, defense, pirate missions, and any map where enemy volume matters more than single-target burst.",
        why:
          "Pike is not a glamour leader. He is a campaign stabilizer. Suppression immunity and discipline support prevent sloppy maps from turning into catastrophic ones.",
        risk:
          "On low-pressure maps the squad can feel slower than more aggressive options. That is a trade, not a flaw.",
      },
      {
        name: "Boss Slayer",
        leader: "J.G. Wetteroth",
        identity: "Large-target deletion",
        when: "Hive destruction, boss encounters, vehicle-heavy fights, and clearly telegraphed anti-large missions.",
        why:
          "No other squad converts a known big-target briefing into such a clear execution plan. If the mission is about one terrifying thing, Wetteroth gives you purpose-built violence.",
        risk:
          "Outside those target profiles, the squad becomes narrow and overcommitted.",
      },
      {
        name: "Adaptive Strike",
        leader: "Charles Lim",
        identity: "Growth-oriented all-round campaign squad",
        when: "Mid-campaign progression when you want a lineup that can keep scaling instead of peaking early.",
        why:
          "Charles Lim pays you back over time. This squad is not the flashiest on day one, but it grows into a very comfortable default core for players who want one roster slot to mature with the campaign.",
        risk:
          "It is weaker as an emergency answer. Early on it needs support from stronger specialist squads elsewhere in the roster.",
      },
    ],
  },
  {
    tier: "B",
    color: "text-[#3fb950]",
    squads: [
      {
        name: "Iron Wall",
        leader: "Tekko'Beo Phosa",
        identity: "Durability-first hold squad",
        when: "Static defense, blunt-force escort routes, and maps where survival matters more than tempo.",
        why:
          "When you know the campaign is going to ask you to stand and endure, Iron Wall does exactly that.",
        risk:
          "It can win slowly enough that the rest of the map starts creating problems elsewhere.",
      },
      {
        name: "Scalpel Squad",
        leader: "Jacques Vamplew",
        identity: "Gear-dependent flexible pressure",
        when: "Economically healthy campaigns that can afford premium loadouts.",
        why:
          "Vamplew scales well when your equipment quality is already high. In the right economy, the squad becomes very smooth.",
        risk:
          "Without gear support it underdelivers relative to its promise.",
      },
      {
        name: "No Mercy Blitz",
        leader: "Fedor Yazhov",
        identity: "Aggressive suppression payoff",
        when: "Short offensive maps where you can guarantee suppressed targets for the whole plan.",
        why:
          "It can snowball extremely hard once the suppression chain is online.",
        risk:
          "The squad is too conditional to be a foundation roster slot for most campaigns.",
      },
    ],
  },
];

const rosterPlan = [
  {
    slot: "First permanent squad",
    target: "Precision Overwatch or Suppression Grid",
    why:
      "Your first true keeper should reduce campaign volatility. That means either deleting threats cleanly or making the whole map safer to play.",
  },
  {
    slot: "Second permanent squad",
    target: "Ghost Recon",
    why:
      "Once you can stabilize brute-force maps, the next step is objective control and flexibility. Greifinger expands what missions you can solve elegantly.",
  },
  {
    slot: "Third specialist slot",
    target: "Boss Slayer",
    why:
      "A narrow squad is valuable when it turns specific high-risk briefings into routine work. Boss Slayer earns that slot.",
  },
];

const rotationRules = [
  {
    principle: "Cover all mission shapes with three identities",
    detail:
      "A healthy MENACE roster usually wants one ranged control squad, one mobility or infiltration squad, and one suppression or anti-large specialist.",
  },
  {
    principle: "Do not overinvest in one tempo",
    detail:
      "Three aggressive squads sound strong until the campaign hands you a defense map, fatigue pressure, or poor visibility terrain.",
  },
  {
    principle: "Leader value is campaign value",
    detail:
      "The right question is not just whether a squad wins its best mission. It is whether it keeps your wider campaign cleaner, cheaper, and easier to rotate.",
  },
];

const faqs = [
  {
    question: "What is the safest first squad to build in MENACE?",
    answer:
      "Suppression Grid is the safest if you are still learning the game because Pike lowers map volatility. Precision Overwatch is the stronger pure carry if you already understand how to preserve spacing and sightlines.",
  },
  {
    question: "Do I need a stealth squad in every campaign?",
    answer:
      "Not immediately, but Ghost Recon is one of the best ways to widen your mission coverage once the first stable squad is online. It solves maps that brute force handles poorly.",
  },
  {
    question: "Why is Boss Slayer not S-tier if it is so strong?",
    answer:
      "Because it is incredible at a narrower set of problems. S-tier squads are the ones you are happy to field often, not just the ones that dominate one dramatic mission type.",
  },
  {
    question: "What is the biggest squad-tier-list mistake?",
    answer:
      "Flattening squad value into one universal ladder. Campaign fit, mission frequency, rotation burden, and specialist demand all change what 'best' should mean.",
  },
];

export default function SquadTierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Campaign Roster Planning</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Squad Tier List</h1>
        <p className="text-gray-300 leading-relaxed">
          This page is not a fake all-squads ranking ladder. A good MENACE squad covers a mission
          shape, fits a wider roster plan, and still makes sense when fatigue, economy, and leader
          investment are taken seriously. Use the tiers as campaign-fit buckets, not as a promise
          that one squad is always correct everywhere.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">What This Tier List Is Optimizing For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Mission coverage</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Can the squad solve many campaign problems, or is it only brilliant in one very narrow
              matchup?
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Roster efficiency</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Does the squad justify a permanent slot once fatigue and investment are real constraints?
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Campaign stability</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Some squads win stylishly. Better squads also make the rest of the campaign easier to
              manage.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 mb-12">
        {squadTiers.map((group) => (
          <div key={group.tier} className="p-6 rounded-xl border border-border bg-surface">
            <h2 className={`text-2xl font-bold mb-4 ${group.color}`}>{group.tier}-Tier Squads</h2>
            <div className="space-y-5">
              {group.squads.map((squad) => (
                <div key={squad.name} className="p-5 rounded-xl border border-border bg-[#0b0f12]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{squad.name}</h3>
                      <p className="text-sm text-gray-400">{squad.leader}</p>
                    </div>
                    <p className="text-sm text-green-300 md:text-right">{squad.identity}</p>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    <span className="text-white font-medium">Field it for:</span> {squad.when}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">{squad.why}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">Main risk:</span> {squad.risk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Three-Slot Roster Plan</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Roster Slot</th>
                <th className="p-3 border border-border text-green-400">Target Squad</th>
                <th className="p-3 border border-border text-green-400">Why It Belongs</th>
              </tr>
            </thead>
            <tbody>
              {rosterPlan.map((row) => (
                <tr key={row.slot} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.slot}</td>
                  <td className="p-3 border border-border text-gray-300">{row.target}</td>
                  <td className="p-3 border border-border text-gray-300">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Rotation Rules That Keep Campaigns Healthy</h2>
        <div className="space-y-4">
          {rotationRules.map((rule) => (
            <div key={rule.principle} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{rule.principle}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{rule.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-8">Last updated: July 9, 2026</p>
      </section>
    </div>
  );
}
