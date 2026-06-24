import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missions & Operations Guide",
  description: "Complete MENACE missions guide: operation types, mission objectives, deployment strategies, and how to handle weather, time of day, terrain, and enemy composition for every mission type.",
};

export default function MissionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Missions &amp; <span className="text-accent">Operations</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Understand every mission type, objective, and deployment strategy in MENACE. From
        reading mission briefings to countering environmental hazards.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4 font-heading"><span className="text-accent">#</span> FAQ</h2>
        <details>
          <summary>How do operations work?</summary>
          <p>An Operation is a set of linked missions on the Starmap. Each operation has branching paths with different objectives and rewards. You choose which missions to tackle within an operation, and completing the final objective concludes the operation and triggers Black Market refresh.</p>
        </details>
        <details>
          <summary>What should I check before deploying?</summary>
          <p>1) Time of day (night reduces visibility), 2) Weather (sandstorms/blizzards limit range), 3) Enemy composition (via Electronics O.C.I. intel), 4) Mission objectives and optional goals, 5) Supply limit for the mission. Tailor your squad composition accordingly.</p>
        </details>
        <details>
          <summary>Can I abort a mission?</summary>
          <p>Yes, but there are consequences. Aborting damages faction reputation and you lose any progress on objectives. However, it preserves your squads. If a mission is going badly, retreating is often better than losing squad leaders permanently.</p>
        </details>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { title: "Assault", desc: "Eliminate all enemy forces in the sector. The most common mission type. Bring balanced squads with anti-infantry and anti-vehicle capability.", tips: "Clear methodically — don&apos;t trigger multiple enemy groups at once. Use scouts to reveal enemy positions before committing." },
          { title: "Defense", desc: "Hold a position against waves of enemies. Enemies attack from multiple directions. Prioritize squad positioning and overlapping fields of fire.", tips: "Deploy LMG squads at choke points. Keep a mobile reserve to respond to breakthroughs. Orbital strikes excel at breaking wave rushes." },
          { title: "Extraction", desc: "Reach an extraction point with a VIP or captured asset. Speed is critical — bring mobile squads. Enemies will try to intercept.", tips: "Use vehicles to transport squads quickly. Smoke grenades cover movement. Keep one squad as rear guard to delay pursuers." },
          { title: "Hive Destruction", desc: "Destroy Alien Wildlife hives. Boss creatures guard the objective. Bring anti-large weapons (Crocodile, AT weapons, flamethrowers).", tips: "Clear surrounding wildlife before engaging the boss. J.G. Wetteroth and Jane Darby excel here. Save orbital strikes for the boss." },
          { title: "Infiltration", desc: "Stealth-focused missions often from DICE. Minimize detection. Concealment gear and suppressed weapons are essential.", tips: "Motion Scanners reveal hidden enemies. Night Vision Goggles for night missions. Spread squads to avoid multi-squad ambushes." },
          { title: "Convoy Raid", desc: "Intercept and destroy an enemy supply convoy. Vehicles are the primary targets. Bring heavy anti-tank weapons.", tips: "Set up ambush positions along the convoy route. ATGM Launchers and RPGs for vehicles. Focus fire on escort vehicles first." },
        ].map((m, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="font-bold font-heading text-sm text-accent mb-2">{m.title}</h2>
            <p className="text-xs text-text-muted leading-relaxed mb-3">{m.desc}</p>
            <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
              <p className="text-xs text-text-muted"><span className="text-accent font-semibold">Tip:</span> {m.tips}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold font-heading mb-2">
          <span className="text-accent">&#9878;</span> Environmental Factors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-muted mt-3">
          <div>
            <h3 className="font-semibold text-accent-secondary mb-1">Night Operations</h3>
            <p>Visibility is severely reduced. Night Vision Goggles are essential. Enemy detection range is shorter — use this for stealth approaches. Long-range weapons lose effectiveness.</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent-secondary mb-1">Sandstorms / Blizzards</h3>
            <p>Maximum range of all weapons is reduced. Detection and vision are impaired. Thermal Imaging Devices partially negate weather penalties. Close-range weapons (SMGs, Shotguns) gain relative value.</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent-secondary mb-1">Urban Terrain</h3>
            <p>Dense cover everywhere. Shotguns and SMGs dominate. Vehicle maneuverability is limited. Clear buildings methodically — enemies can hide in any structure.</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent-secondary mb-1">Open Terrain</h3>
            <p>Minimal cover, long sight lines. Snipers and Battle Rifles dominate. Vehicles are most effective here. Smoke grenades are essential for crossing open ground safely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
