import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE OCI Rework Guide (v0.7.8) — New Slots, Offmap Timing & Authority Cap (2026)",
  description:
    "Full breakdown of MENACE's OCI Rework update v0.7.8: renamed ship slots, base vs faction OCIs, per-operation offmap uses, orbital vs airpower timing, the 120 authority cap, and hotfixes #9-#10.",
};

const glanceChanges = [
  {
    area: "OCI slots",
    before: "Three generic OCI slots on the Impetus",
    now: "Slots renamed to Bridge, Hull, and Armament, each holding always-unlocked base OCIs that cover the essentials",
    adapt: "Fill every slot with a base OCI early — they are free progression that needs no faction trust",
  },
  {
    area: "Faction OCIs",
    before: "8 OCIs per faction, installed standalone",
    now: "12 OCIs and 12 trust levels per faction; faction OCIs install over a base OCI and replace it",
    adapt: "Non-ability faction OCIs keep the base OCI's effect, so upgrading an Intelligence Center keeps the +1 intelligence",
  },
  {
    area: "OCI upgrades",
    before: "Single version of each OCI",
    now: "Every unlocked OCI also has an upgraded version that costs more and can fundamentally change what it does",
    adapt: "Read the upgraded tooltip before paying — 'better' sometimes means 'different job'",
  },
  {
    area: "Offmap uses",
    before: "Uses refreshed per mission",
    now: "Uses are pooled per operation — spend all 3 in one mission or spread them across missions",
    adapt: "Track the pool before the final mission of an operation; leftover uses do not carry further",
  },
  {
    area: "Offmap delivery",
    before: "One shared offmap behavior",
    now: "Split into Orbital (from the Impetus, ~2-turn delay, heavier impact) and Airpower (dropship arrives after 2 turns, loiters 1 turn only)",
    adapt: "Call dropships before contact, not after — a wasted loiter window wastes the use",
  },
  {
    area: "Authority",
    before: "No explicit authority ceiling",
    now: "Maximum authority is 120, minus 4 for every squad leader or pilot on the roster",
    adapt: "Treat each hire as a 4-point authority tax; some OCIs raise the cap again",
  },
  {
    area: "Squaddie limit",
    before: "Roster grew without a hard ceiling",
    now: "The Impetus has a maximum squaddie count; no new squaddies join from any source once full",
    adapt: "Raise it with the Quarters base OCI or set it in the custom difficulty options at game start",
  },
];

const baseOcis = [
  {
    slot: "Bridge",
    oci: "Command Room",
    effect: "+1 squaddie per mission",
    note: "Stacks with the Impetus baseline of +1 squaddie per mission and a 15% squaddie rescue chance every new campaign starts with.",
  },
  {
    slot: "Bridge",
    oci: "Intelligence Center",
    effect: "+1 intelligence",
    note: "The reference case for the new rules — any faction upgrade installed over it keeps this +1 intelligence on top.",
  },
  {
    slot: "Hull",
    oci: "Quarters",
    effect: "+20 maximum squaddies, +10% squaddie rescue chance",
    note: "The main lever for the new squaddie cap; take it when your roster keeps hitting the ceiling mid-operation.",
  },
  {
    slot: "Hull",
    oci: "Garage",
    effect: "Repairs 1 defect and 10% vehicle HP after each mission",
    note: "Passive sustain that keeps armor rotating without eating your supplies between fights.",
  },
  {
    slot: "Armament",
    oci: "Main Battery",
    effect: "Unlocks the Main Battery Salvo offmap ability",
    note: "Orbital-category firepower — plan around the roughly 2-turn delivery delay.",
  },
  {
    slot: "Armament",
    oci: "Armed Dropship",
    effect: "Unlocks an MG strafing run",
    note: "Airpower-category — the dropship needs 2 turns to arrive, then must fire within its 1-turn loiter window.",
  },
  {
    slot: "Armament",
    oci: "Support Module",
    effect: "Unlocks a supply drop",
    note: "The low-risk way to learn the new per-operation use pool without betting damage on the timing.",
  },
];

const offmapRows = [
  {
    aspect: "Called in from",
    orbital: "The Impetus, from orbit",
    airpower: "A dropship flying to the battlefield",
  },
  {
    aspect: "Time to effect",
    orbital: "Long delay — usually 2 turns before impact",
    airpower: "Dropship arrives after 2 turns, but then fires the moment you pick the tiles",
  },
  {
    aspect: "Fire window",
    orbital: "Strike lands when the delay ends",
    airpower: "Dropship loiters for 1 turn only — fire in that window or the use is lost",
  },
  {
    aspect: "Impact profile",
    orbital: "Usually the heavier, more decisive payload",
    airpower: "Faster, more tactical effects once the ship is on station",
  },
  {
    aspect: "Example",
    orbital: "Ion Cannon — delay increased from 2 to 3 turns by Hotfix #9",
    airpower: "Show of Force — 5 uses per operation, delay 2, loitering time 1; reveals the area and suppresses and demoralizes enemies",
  },
];

const qualityRows = [
  { change: "Attack tooltips", detail: "Now show a range graph with the current distance curve, so you can see exactly how far you are from a weapon's ideal range before committing" },
  { change: "Ally health bars", detail: "Changed from gray to green — friendly armor reads instantly in crowded fights" },
  { change: "Enemy reinforcements", detail: "Reworked to be fairer and less frustrating; surprise spawns should feel telegraphed rather than arbitrary" },
  { change: "Civilian movement", detail: "Player vehicles can now move through some civilian units instead of being hard-blocked" },
  { change: "New models", detail: "SIPV Recce, SIPV Operator, and SIPV High Intensity armors, plus K-SAS DMR and P99A3 weapon models, with new pistol and armory idle animations" },
  { change: "Perk fixes", detail: "Nothing Personal survives counterattacks, Quick Hands works on vehicle accessories, Grind Down correctly grants +30% armor damage (not armor penetration), Run Over works diagonally, drug accessories refresh their duration" },
  { change: "Balance", detail: "Medium Walker no longer comes with a built-in minigun; Bombardier Acid Spit armor penetration reduced from 50 to 35" },
];

const hotfixRows = [
  {
    patch: "Hotfix #9 (v0.7.9)",
    date: "July 16, 2026",
    fixes: "Ion Cannon and Upgraded Ion Cannon no longer share identical stats — Ion Cannon delay rose from 2 to 3, Upgraded Ion Cannon selects 7 tiles instead of 5. Airdropped Regulars correctly has 3 uses instead of 1. Next Gen Dropship Engines can no longer push airpower delay below the minimum of 1. Autosave works again with 'Auto Save Slots' set to 1, and the AT-Wardog accessory applies armor damage properly.",
  },
  {
    patch: "Hotfix #10 (v0.7.10)",
    date: "July 17, 2026",
    fixes: "Fixed a rare but campaign-blocking bug where the system map generated no available operations — the game now always generates new ones. Also cleaned up German and Japanese translation issues.",
  },
];

const faqs = [
  {
    question: "Does the OCI Rework break my existing MENACE save?",
    answer:
      "No. Saves from before v0.7.8 still load, and every old OCI is automatically uninstalled with its full cost refunded, so you keep the OCI points you spent. That said, the update changes progression and balancing enough that starting a fresh run is the recommended way to experience the new system — continuing an old save works, but the pacing will feel different from what that save was built around.",
  },
  {
    question: "What is the difference between Orbital and Airpower offmap abilities now?",
    answer:
      "Orbital abilities are called in from the Impetus and typically land about 2 turns after you call them — slower, but heavier. Airpower abilities are delivered by a dropship: the ship takes 2 turns to reach the battlefield, then the ability fires immediately when you select target tiles, with no extra delay. The catch is fuel — a dropship can only loiter near the battlefield for 1 turn, so if you do not fire during that turn, it returns to base and the use is wasted.",
  },
  {
    question: "How does the new 120 maximum authority work?",
    answer:
      "Your authority ceiling starts at 120, and every squad leader or pilot you hire permanently lowers that maximum by 4 while they are on the roster. Ten hired leaders means a cap of 80. This is a soft cap on leader stacking — you can still field a large command staff, but each hire taxes the authority you have left for operations. Certain OCIs can raise the maximum again, which is worth planning around if you want a deep leader bench.",
  },
  {
    question: "How many OCIs does each faction have after the rework?",
    answer:
      "Each faction now offers 12 unlockable OCIs across 12 trust levels, up from 8 of each before the rework. Faction OCIs are installed over a base OCI in the matching slot and replace it — though non-ability OCIs generally retain the base OCI's effect on top of their own. Every faction OCI also comes with a more expensive upgraded version, which sometimes changes the OCI's function rather than simply improving it.",
  },
  {
    question: "What did Hotfixes #9 and #10 change after the OCI Rework?",
    answer:
      "Hotfix #9 (v0.7.9, July 16) separated the Ion Cannon from its upgraded version — the base cannon's delay went from 2 to 3 turns while the upgraded version now covers 7 selectable tiles instead of 5 — fixed Airdropped Regulars to its intended 3 uses, stopped Next Gen Dropship Engines from reducing airpower delay below 1, and repaired autosaving when save slots were set to 1. Hotfix #10 (v0.7.10, July 17) fixed a rare bug where no operations appeared on the system map, plus German and Japanese translation errors. Both are save-compatible.",
  },
];

export default function OciReworkGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Patch Breakdown · v0.7.8 + Hotfixes</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE OCI Rework Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          The OCI Rework went live on July 14, 2026 as update v0.7.8 — the largest single change
          MENACE has received since entering Early Access in February. It rebuilds the Impetus&apos;s
          upgrade system around three renamed slots, splits offmap support into Orbital and Airpower
          categories with real timing rules, pools ability uses per operation, and adds hard caps to
          both authority and squaddie count. Two follow-up hotfixes (v0.7.9 and v0.7.10) landed within
          the same week. This guide covers everything that changed and how to adapt your campaign.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Everything That Changed at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">System</th>
                <th className="p-3 border border-border text-green-400">Before v0.7.8</th>
                <th className="p-3 border border-border text-green-400">After the Rework</th>
                <th className="p-3 border border-border text-green-400">How to Adapt</th>
              </tr>
            </thead>
            <tbody>
              {glanceChanges.map((c) => (
                <tr key={c.area} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{c.area}</td>
                  <td className="p-3 border border-border text-gray-400">{c.before}</td>
                  <td className="p-3 border border-border text-gray-300">{c.now}</td>
                  <td className="p-3 border border-border text-green-300">{c.adapt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <figure className="mb-12 p-4 rounded-xl border border-border bg-surface">
        <img
          src="/images/oci-rework-guide.png"
          loading="lazy"
          alt="Two-panel chart for MENACE's OCI Rework v0.7.8. Left panel: maximum authority starts at 120 and drops by 4 for every squad leader or pilot hired, falling to 100 at 5 hires, 80 at 10, 60 at 15, and 40 at 20. Right panel: offmap timing comparison — orbital strikes land after a 2-turn delay (3 turns for the Ion Cannon after Hotfix #9), while airpower dropships arrive after 2 turns and must fire within a single 1-turn loiter window or the use is lost."
          className="w-full h-auto rounded-lg"
        />
        <figcaption className="text-xs text-text-muted mt-3 leading-relaxed">
          The two numbers that reshape campaign planning in v0.7.8: the 120-minus-4 authority soft cap
          (left), and the new offmap timing rules that separate Orbital strikes from loiter-limited
          Airpower dropships (right).
        </figcaption>
      </figure>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">The Three Renamed Slots and Their Base OCIs</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          The Impetus still has three OCI slots, but they are now named Bridge, Hull, and Armament —
          and each slot offers base OCIs that are always unlocked, no faction trust required. Base
          OCIs cover the essentials so a fresh campaign is never locked out of core ship functions.
          Faction OCIs, unlocked through trust, are installed over a base OCI and replace it — but
          non-ability faction OCIs keep the base effect, so you rarely lose ground by upgrading.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Slot</th>
                <th className="p-3 border border-border text-green-400">Base OCI</th>
                <th className="p-3 border border-border text-green-400">Effect</th>
                <th className="p-3 border border-border text-green-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {baseOcis.map((o) => (
                <tr key={o.oci} className="align-top">
                  <td className="p-3 border border-border text-gray-400">{o.slot}</td>
                  <td className="p-3 border border-border font-semibold text-white">{o.oci}</td>
                  <td className="p-3 border border-border text-green-300">{o.effect}</td>
                  <td className="p-3 border border-border text-gray-300">{o.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <svg
          viewBox="0 0 880 210"
          role="img"
          aria-label="Diagram of the new OCI installation flow in MENACE: each of the three Impetus slots (Bridge, Hull, Armament) holds an always-unlocked base OCI; a faction OCI unlocked through trust installs over it and replaces it while keeping the base effect for non-ability OCIs; every faction OCI also has an optional upgraded version that costs more and may change its behavior."
          className="w-full h-auto rounded-xl border border-border"
        >
          <rect width="880" height="210" fill="#150f23" />
          <text x="24" y="32" fill="#c2ef4e" fontSize="15" fontWeight="bold">OCI INSTALLATION FLOW (v0.7.8)</text>

          <rect x="24" y="56" width="180" height="76" rx="10" fill="#2a1d42" stroke="#6a5fc1" strokeWidth="1.5" />
          <text x="114" y="86" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">OCI SLOT</text>
          <text x="114" y="106" fill="#8882a8" fontSize="11" textAnchor="middle">Bridge · Hull · Armament</text>

          <rect x="254" y="56" width="180" height="76" rx="10" fill="#2a1d42" stroke="#6a5fc1" strokeWidth="1.5" />
          <text x="344" y="86" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">BASE OCI</text>
          <text x="344" y="106" fill="#8882a8" fontSize="11" textAnchor="middle">Always unlocked</text>

          <rect x="484" y="56" width="180" height="76" rx="10" fill="#2a1d42" stroke="#c2ef4e" strokeWidth="1.5" />
          <text x="574" y="80" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">FACTION OCI</text>
          <text x="574" y="99" fill="#8882a8" fontSize="11" textAnchor="middle">Trust unlock · replaces base</text>
          <text x="574" y="115" fill="#8882a8" fontSize="11" textAnchor="middle">keeps base effect (non-ability)</text>

          <rect x="714" y="56" width="142" height="76" rx="10" fill="#2a1d42" stroke="#c2ef4e" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x="785" y="86" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">UPGRADED</text>
          <text x="785" y="106" fill="#8882a8" fontSize="11" textAnchor="middle">Pricier · may change</text>

          <path d="M204 94 H254" stroke="#6a5fc1" strokeWidth="2" markerEnd="url(#ociArrow)" />
          <path d="M434 94 H484" stroke="#6a5fc1" strokeWidth="2" markerEnd="url(#ociArrow)" />
          <path d="M664 94 H714" stroke="#c2ef4e" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#ociArrowLime)" />

          <defs>
            <marker id="ociArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#6a5fc1" />
            </marker>
            <marker id="ociArrowLime" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#c2ef4e" />
            </marker>
          </defs>

          <rect x="24" y="162" width="12" height="12" fill="#2a1d42" stroke="#6a5fc1" />
          <text x="42" y="172" fill="#8882a8" fontSize="11">Ship-side (no trust needed)</text>
          <rect x="230" y="162" width="12" height="12" fill="#2a1d42" stroke="#c2ef4e" />
          <text x="248" y="172" fill="#8882a8" fontSize="11">Faction-side (12 OCIs + 12 trust levels per faction)</text>
          <line x1="560" y1="168" x2="584" y2="168" stroke="#c2ef4e" strokeWidth="2" strokeDasharray="5 4" />
          <text x="592" y="172" fill="#8882a8" fontSize="11">Optional upgrade path</text>
        </svg>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Offmap Abilities: Orbital vs Airpower</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Two rules now govern all offmap support. First, uses are pooled per operation instead of
          refreshing per mission — you can dump all 3 uses of an ability into one ugly mission or
          parcel them out, but the pool is all you get until the operation ends. Second, every offmap
          ability is now either Orbital or Airpower, and they behave completely differently on the
          timeline.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Aspect</th>
                <th className="p-3 border border-border text-green-400">Orbital</th>
                <th className="p-3 border border-border text-green-400">Airpower</th>
              </tr>
            </thead>
            <tbody>
              {offmapRows.map((r) => (
                <tr key={r.aspect} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{r.aspect}</td>
                  <td className="p-3 border border-border text-gray-300">{r.orbital}</td>
                  <td className="p-3 border border-border text-gray-300">{r.airpower}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Call dropships before the shooting starts</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Airpower needs 2 turns of travel time and then gives you exactly 1 turn of loiter to
              spend the shot. The worst pattern in the reworked game is calling a gun run on the turn
              you already need it — the dropship arrives after the moment has passed, circles once,
              and goes home. Call it when contact is imminent so the ship is on station when your
              squads are actually engaged.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Treat orbital strikes as scheduled artillery</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Orbital abilities land roughly 2 turns after the call — 3 for the Ion Cannon after
              Hotfix #9 — but they hit harder than airpower. Place them where the enemy will be, not
              where they are: defensive holds, chokepoints you are about to fall back through, and
              objective zones you can stall inside are the reliable targets.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Budget the operation pool, not the mission</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              With uses pooled per operation, the early missions of an operation are where restraint
              pays. Burning all 3 uses to style on a routine first mission leaves the operation finale
              — usually the hardest fight — with no support at all. A good default is to reserve at
              least one use for the final mission unless a run is genuinely about to collapse.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Authority and Squaddie Caps: The New Roster Math</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">120 authority, minus 4 per hire</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Maximum authority is now fixed at 120, and every squad leader or pilot on your roster
              reduces that maximum by 4. Stacking leaders is still viable — five hires leaves you at
              100 — but each one is now an explicit authority tax rather than a free roster slot.
              OCIs that raise the authority ceiling exist, so heavy-commander builds should plan
              their faction trust around reaching them.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">Squaddies now have a hard ceiling</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The Impetus can only house a limited number of squaddies, and once you hit the cap no
              source — rescues, rewards, recruitment — adds more. The starting limit is generous, the
              Quarters base OCI adds +20 capacity (plus +10% rescue chance), and the ceiling can also
              be adjusted in the custom difficulty options when starting a game. Big-squad strategies
              are now an intentional OCI commitment, not an accident of accumulation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Quality-of-Life and Balance Changes in v0.7.8</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Change</th>
                <th className="p-3 border border-border text-green-400">What It Means in Practice</th>
              </tr>
            </thead>
            <tbody>
              {qualityRows.map((q) => (
                <tr key={q.change} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{q.change}</td>
                  <td className="p-3 border border-border text-gray-300">{q.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">The Follow-Up Hotfixes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-green-400">Patch</th>
                <th className="p-3 border border-border text-green-400">Released</th>
                <th className="p-3 border border-border text-green-400">Key Fixes</th>
              </tr>
            </thead>
            <tbody>
              {hotfixRows.map((h) => (
                <tr key={h.patch} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{h.patch}</td>
                  <td className="p-3 border border-border text-gray-400 whitespace-nowrap">{h.date}</td>
                  <td className="p-3 border border-border text-gray-300">{h.fixes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mt-4">
          Both hotfixes are compatible with existing saves. The one balance-relevant takeaway: if you
          built an Ion Cannon plan around the v0.7.8 release values, the base version is now slower
          (delay 3) while the upgraded version covers more ground (7 tiles) — the upgrade decision for
          that OCI genuinely matters now.
        </p>
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
        <p className="text-xs text-text-muted mt-8">Last updated: July 19, 2026</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/oci-upgrades" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">OCI Upgrades Guide</h3>
            <p className="text-sm text-gray-400">How to prioritize ship support spending by campaign state.</p>
          </a>
          <a href="/squad-leaders" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Squad Leaders Guide</h3>
            <p className="text-sm text-gray-400">Leader picks now carry a -4 authority tax each — choose accordingly.</p>
          </a>
          <a href="/research-priority" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Research Priority</h3>
            <p className="text-sm text-gray-400">Sequence research around what the campaign still cannot do.</p>
          </a>
          <a href="/resources" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Resources Guide</h3>
            <p className="text-sm text-gray-400">Spend to remove the next real bottleneck, including OCI points.</p>
          </a>
          <a href="/campaign-guide" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Campaign Guide</h3>
            <p className="text-sm text-gray-400">Strategy-layer planning for operations, fatigue, and rotation.</p>
          </a>
          <a href="/missions" className="p-5 rounded-xl border border-border bg-surface hover:border-green-400 transition-colors">
            <h3 className="font-semibold text-white mb-1">Missions Guide</h3>
            <p className="text-sm text-gray-400">Pick operations by pressure, tax, and follow-up cost.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
