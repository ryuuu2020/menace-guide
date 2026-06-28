export const metadata = {
  title: "MENACE Campaign Walkthrough — All Missions (2026)",
  description: "Complete MENACE campaign walkthrough. Mission guides, boss strategies, and how to unlock secret objectives.",
};

export default function CampaignGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">MENACE Campaign Walkthrough</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Campaign Overview</h2>
            <p className="text-gray-300 leading-relaxed">The MENACE campaign spans 30 missions across 5 chapters, each introducing new enemy types and escalating tactical complexity. Chapters 1-2 focus on basic mechanics; Chapters 3-4 introduce environmental hazards and multi-objective missions; Chapter 5 features boss encounters requiring specific counter-strategies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Chapter 1-2 Tips</h2>
            <p className="text-gray-300 leading-relaxed">Focus on learning the core movement and attack mechanics without over-optimizing. Use the default squad compositions recommended in the mission briefing — they're tuned for teaching specific mechanics. Don't skip optional objectives; they provide resource bonuses that significantly ease Chapter 3's difficulty spike.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Chapter 3-4 Strategies</h2>
            <p className="text-gray-300 leading-relaxed">Chapter 3 introduces fog of war — always send a Scout unit ahead before committing your main squad. Chapter 4's multi-objective missions require splitting your squad; upgrade movement abilities before starting Chapter 4 to maintain coverage across multiple objectives simultaneously.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-400 mb-3">Chapter 5 Boss Guide</h2>
            <p className="text-gray-300 leading-relaxed">Boss encounters have phase transitions at 50% and 25% health. Save high-damage abilities for phase transitions — bosses are stunned for 2 turns after phase transitions, creating a window for burst damage. Keep a Medic alive at all costs; healing is more valuable than damage during boss fights.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-green-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about campaign overview in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">The MENACE campaign spans 30 missions across 5 chapters, each introducing new enemy types and escalating tactical complexity. Chapters 1-2 focus on basic mechanics; Chapters 3-4 introduce environmenta...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about chapter 1-2 tips in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">Focus on learning the core movement and attack mechanics without over-optimizing. Use the default squad compositions recommended in the mission briefing — they're tuned for teaching specific mechanics...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about chapter 3-4 strategies in Menace?</h3>
                <p className="text-gray-300 leading-relaxed">Chapter 3 introduces fog of war — always send a Scout unit ahead before committing your main squad. Chapter 4's multi-objective missions require splitting your squad; upgrade movement abilities before...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
