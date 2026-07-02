import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENACE Black Market Economy Guide — Best Buys & Sells | MENACE Guide",
  description: "Complete MENACE black market economy guide. Best items to buy, best items to sell, restock schedule, and reputation gates.",
};

const ITEM_BUY_TABLE = [
  { item: "Contraband Weapon Crate", cost: "200 silver", value: "350 silver", restockDays: 7, reputationReq: 0, priority: "High" },
  { item: "Stolen Medical Kit", cost: "80 silver", value: "150 silver", restockDays: 3, reputationReq: 0, priority: "High" },
  { item: "Counterfeit Credits", cost: "150 silver", value: "280 silver", restockDays: 5, reputationReq: 1, priority: "Medium" },
  { item: "Black Market Ammo", cost: "50 silver", value: "95 silver", restockDays: 2, reputationReq: 0, priority: "High" },
  { item: "Rare Circuit Board", cost: "300 silver", value: "500 silver", restockDays: 14, reputationReq: 2, priority: "High" },
  { item: "Spy Drone", cost: "400 silver", value: "700 silver", restockDays: 10, reputationReq: 2, priority: "Medium" },
  { item: "Synthetic Organs", cost: "250 silver", value: "420 silver", restockDays: 7, reputationReq: 1, priority: "Medium" },
  { item: "Encrypted Data Pad", cost: "180 silver", value: "320 silver", restockDays: 5, reputationReq: 1, priority: "Low" },
  { item: "Forged ID Chip", cost: "120 silver", value: "200 silver", restockDays: 4, reputationReq: 0, priority: "Medium" },
  { item: "Prototype Power Cell", cost: "350 silver", value: "600 silver", restockDays: 12, reputationReq: 3, priority: "High" },
];

const SELL_TABLE = [
  { item: "Looted Faction Intel", sellPrice: "400 silver", source: "Missions", buyFromBlackMarket: "Encrypted Data Pad (used to fence)", netProfit: "+220" },
  { item: "Prisoner Ransom Claim", sellPrice: "350 silver", source: "Capture missions", buyFromBlackMarket: "Not sold there, use mission reward", netProfit: "+350" },
  { item: "Stolen Cargo Manifest", sellPrice: "280 silver", source: "Boarding missions", buyFromBlackMarket: "Forged ID Chip (used to fence)", netProfit: "+160" },
  { item: "Confiscated Weapons", sellPrice: "220 silver", source: "Combat missions", buyFromBlackMarket: "Sold directly, no fence needed", netProfit: "+220" },
  { item: "Recovered Prototype", sellPrice: "600 silver", source: "Story missions only", buyFromBlackMarket: "Best fence in the game", netProfit: "+250 to +400" },
  { item: "Faction Sealed Data", sellPrice: "500 silver", source: "End-game story missions", buyFromBlackMarket: "Requires Rep 3 access", netProfit: "+200" },
];

const REPUTATION_LEVELS = [
  { level: 0, name: "Outsider", unlocks: "Basic weapons, ammo, medical", shopSize: 12, discount: "0%", buyback: "0.5x" },
  { level: 1, name: "Contact", unlocks: "Counterfeit credits, synthetic organs, encrypted data", shopSize: 18, discount: "5%", buyback: "0.6x" },
  { level: 2, name: "Regular", unlocks: "Rare circuit boards, spy drones", shopSize: 24, discount: "10%", buyback: "0.7x" },
  { level: 3, name: "Inner Circle", unlocks: "Prototype power cells, sealed data, exclusive weapons", shopSize: 32, discount: "15%", buyback: "0.8x" },
  { level: 4, name: "Black Market Kingpin", unlocks: "All items, unlimited restock, hidden quest chain", shopSize: 40, discount: "20%", buyback: "1.0x" },
];

const RESTOCK_SCHEDULE = [
  { time: "Day 1-3", bestBuys: "Ammo, Medical Kit, Forged ID Chip", reason: "Cheapest restock of common items. Stockpile ammo at 50 silver each." },
  { time: "Day 4-6", bestBuys: "Counterfeit Credits, Encrypted Data Pad", reason: "Medium-tier items restock. Discount applies at Rep 1+." },
  { time: "Day 7-9", bestBuys: "Contraband Weapons, Synthetic Organs", reason: "Weekly restock of profitable items. Best margins." },
  { time: "Day 10-14", bestBuys: "Spy Drones, Prototype Power Cells", reason: "Bi-weekly restock. Buy at least one of each before they sell out." },
  { time: "Day 15+", bestBuys: "All restocked, full inventory available", reason: "Full restock cycle complete. Best time for major purchases." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">MENACE Black Market Economy Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          The Black Market is the most profitable vendor in MENACE — but only if you understand its restock schedule, reputation gates, and item-specific margins. The market restocks every 3 to 14 days depending on the item, and your reputation level (0 to 4) determines which items you can buy and at what discount. This guide covers every item, every reputation tier, and the optimal buy schedule for maximum profit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Best Black Market Buys</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Item</th>
                <th className="p-3 border border-gray-700 text-ink">Cost</th>
                <th className="p-3 border border-gray-700 text-ink">Resale Value</th>
                <th className="p-3 border border-gray-700 text-ink">Restock</th>
                <th className="p-3 border border-gray-700 text-ink">Rep Req</th>
                <th className="p-3 border border-gray-700 text-ink">Priority</th>
              </tr>
            </thead>
            <tbody>
              {ITEM_BUY_TABLE.map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{b.item}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.cost}</td>
                  <td className="p-3 border border-gray-700 text-accent">{b.value}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.restockDays}d</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.reputationReq}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{b.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Best Items to Sell to the Black Market</h2>
        <p className="text-ink-light">
          You can also sell mission loot to the Black Market. The sell price varies with your reputation level (higher rep = higher buyback multiplier).
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Item</th>
                <th className="p-3 border border-gray-700 text-ink">Sell Price</th>
                <th className="p-3 border border-gray-700 text-ink">Source</th>
                <th className="p-3 border border-gray-700 text-ink">Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {SELL_TABLE.map((s, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{s.item}</td>
                  <td className="p-3 border border-gray-700 text-accent">{s.sellPrice}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.source}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.netProfit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Reputation Levels & Unlocks</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Level</th>
                <th className="p-3 border border-gray-700 text-ink">Name</th>
                <th className="p-3 border border-gray-700 text-ink">Shop Size</th>
                <th className="p-3 border border-gray-700 text-ink">Discount</th>
                <th className="p-3 border border-gray-700 text-ink">Buyback</th>
                <th className="p-3 border border-gray-700 text-ink">Unlocks</th>
              </tr>
            </thead>
            <tbody>
              {REPUTATION_LEVELS.map((r, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{r.level}</td>
                  <td className="p-3 border border-gray-700 text-accent">{r.name}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.shopSize}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.discount}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.buyback}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{r.unlocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Restock Schedule Strategy</h2>
        <p className="text-ink-light">
          The Black Market restocks individual items on independent timers, not all at once. The schedule below tracks the most profitable windows:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Window</th>
                <th className="p-3 border border-gray-700 text-ink">Best Buys</th>
                <th className="p-3 border border-gray-700 text-ink">Why</th>
              </tr>
            </thead>
            <tbody>
              {RESTOCK_SCHEDULE.map((s, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{s.time}</td>
                  <td className="p-3 border border-gray-700 text-accent">{s.bestBuys}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Reputation Farming</h2>
        <p className="text-ink-light">
          Reputation is gained by completing missions, selling loot, and avoiding hostile actions against Black Market NPCs. Reputation is lost by killing Black Market merchants, attacking their ships, or stealing from their warehouses. The fastest reputation gains come from high-value missions: 5-7 rep per story mission, 1-3 rep per side mission, 0.5 rep per 100 silver of loot sold.
        </p>
        <p className="text-ink-light mt-3">
          A typical play session (3 hours) gains 8 to 12 reputation. To reach Black Market Kingpin (Rep 4), you need 100 cumulative reputation. Plan for 10 to 12 play sessions to hit the top tier — the exclusive weapons and unlimited restock are worth the grind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does the Black Market ever run out of items permanently?</h3>
            <p className="text-ink-light mt-2">No. The Black Market restocks indefinitely. The only limits are the per-item restock timer (2 to 14 days) and your reputation level. At Rep 4, you have access to the full 40-item inventory with a 20 percent discount. The discount alone is worth pursuing the top reputation tier.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Should I always sell mission loot to the Black Market?</h3>
            <p className="text-ink-light mt-2">No. The Black Market buyback rate is 0.5x to 0.8x of base value depending on your rep. Faction vendors buy at 0.7x to 1.0x, and you gain faction reputation on top. For weapons and ammo, sell to factions. For unique data pads and sealed data, sell to the Black Market — factions will not buy those. The split is roughly 60 percent to factions, 40 percent to Black Market for the best long-term economy.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best single item to flip for profit?</h3>
            <p className="text-ink-light mt-2">The Prototype Power Cell is the best single flip. It costs 350 silver, restocks every 12 days, and has a resale value of 600 silver. That is 250 silver profit per flip, or 20.8 silver per day of restock cycle. The Spy Drone is the runner-up at 300 silver profit per 10-day cycle (30 silver/day). At Rep 3+, the Prototype Power Cell is the single most profitable item to flip consistently.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Build rep to 3 before spending big.</strong> The Rep 3 unlocks (Prototype Power Cells, sealed data) have the best margins in the game. Holding off on big purchases until you hit Rep 3 saves you 200 to 400 silver per major item.</li>
          <li><strong className="text-accent">Time your buy cycles.</strong> If you know a restock is in 1 day, do not buy today. Wait 24 hours and the new stock arrives, giving you a wider selection. This is most valuable for the rare items (Prototype Power Cells, Sealed Data) that have long restock timers.</li>
          <li><strong className="text-accent">Use the Black Market as your bank.</strong> Buying rare items that appreciate in value (especially as the late-game economy shifts) is a valid strategy. The Prototype Power Cell, in particular, goes from 600 silver resale mid-game to 900 silver resale in the final campaign chapter.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Prices verified against MENACE main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
