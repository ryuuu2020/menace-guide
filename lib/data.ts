// ============================================================
// MENACE Guide — Central Data File
// All game content lives here. No CMS, no database.
// ============================================================

// --- Site Constants ---
export const SITE_TITLE = "MENACE Guide — Squad Leaders, Factions & Tactics Wiki";
export const SITE_DESCRIPTION =
  "The ultimate MENACE game guide: complete squad leader tier list with stats and perks, faction strategies, weapon breakdowns, vehicle loadouts, combat tactics, black market tips, and beginner walkthrough. From Overhype Studios, creators of Battle Brothers.";
export const SITE_URL = "https://menace-guide.com";

// ============================================================
// SQUAD LEADERS (11 total)
// ============================================================

export interface SquadLeader {
  slug: string;
  name: string;
  tagline: string;
  faction: string;
  uniquePerk: string;
  perkDescription: string;
  agi: number;
  ws: number;
  val: number;
  toug: number;
  vit: number;
  prec: number;
  pos: number;
  growthPotential: number;
  supplyCost: number;
  tier: "S" | "A" | "B" | "C";
  color: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestLoadout: string;
  bestPairings: string[];
  faq: { question: string; answer: string }[];
}

export const squadLeaders: SquadLeader[] = [
  {
    slug: "jane-darby",
    name: "Jane Darby",
    tagline: "Precision Marksman — High Value Target Specialist",
    faction: "Marines",
    uniquePerk: "High Value Target",
    perkDescription: "Deals bonus damage against elite and boss enemy units. Prioritize eliminating high-threat targets.",
    agi: 88, ws: 80, val: 70, toug: 50, vit: 40, prec: 20, pos: 75,
    growthPotential: 3, supplyCost: 0,
    tier: "S",
    color: "#F0B400",
    description:
      "Jane Darby is the premier marksman in MENACE, combining exceptional Agility (88) and Weapon Skill (80) with the highest Positioning (75) among all squad leaders. Her High Value Target perk makes her deadly against elite enemies and bosses, turning her into the go-to choice for assassination missions. With 20 Precision granting high critical hit rates, Darby consistently outperforms other leaders in long-range engagements.",
    strengths: [
      "Highest combined AGI+WS: 88/80 gives excellent action points and accuracy",
      "Top-tier Positioning (75) provides strong defense against enemy fire",
      "20 Precision enables frequent critical hits (25% max crit rate)",
      "High Value Target perk shreds bosses and elite units",
      "Zero supply cost — deploy her every mission without resource penalty",
    ],
    weaknesses: [
      "Low Vitality (40) means fragile — protect her from sustained fire",
      "Below-average Toughness (50) — no damage reduction bonus",
      "Lowest Growth Potential (3) — limited late-game scaling",
      "Cannot take hits — requires careful positioning and escort",
    ],
    bestLoadout:
      "Sniper Rifle (SR41 KASS or K-SAS DMR) with Match Grade Ammo, Smart Gun Link for +10% accuracy, and Camouflage Kit for increased concealment. Pair with SAPP Recce armor for detection boost.",
    bestPairings: ["Edwin Pike", "Tekko'Beo Phosa"],
    faq: [
      { question: "Is Jane Darby the best squad leader in MENACE?", answer: "For long-range DPS and boss killing, yes. Her 88 AGI and 80 WS are the highest in the game, and High Value Target gives massive damage against priority enemies. Combined with 20 Precision for crits, she's S-tier for all mission types." },
      { question: "How should I position Jane Darby in combat?", answer: "Always keep her at maximum range, preferably elevated terrain. Use her 75 Positioning to hold angles. Never commit her to close-quarters — she has the lowest Vitality in the game and will die quickly if focused." },
      { question: "What ammunition works best with Jane Darby?", answer: "Match Grade Ammo is ideal — it extends range and improves accuracy while Darby can absorb the accuracy-degradation penalty with her high base stats. Armor Piercing is also excellent for armored targets." },
    ],
  },
  {
    slug: "kody-greifinger",
    name: "Kody Greifinger",
    tagline: "Guerilla Tactician — Unaligned Veteran",
    faction: "Unaligned (Ex-Marine)",
    uniquePerk: "Guerilla",
    perkDescription: "Excels at hit-and-run tactics. Gains bonus AP after breaking concealment and attacking.",
    agi: 88, ws: 80, val: 75, toug: 65, vit: 60, prec: 10, pos: 60,
    growthPotential: 3, supplyCost: 0,
    tier: "S",
    color: "#00D4AA",
    description:
      "Kody Greifinger is a former Marine turned independent operator with elite stats across the board. His 88 AGI and 80 WS match Jane Darby, but he adds significantly more survivability with 65 Toughness and 60 Vitality. The Guerilla perk rewards aggressive ambush playstyles, giving AP bonuses when breaking concealment. As an unaligned leader, he fits any squad composition and can be recruited without faction commitment.",
    strengths: [
      "Elite-tier AGI (88) and WS (80) — matches the best in the game",
      "Strong survivability: 65 Toughness + 60 Vitality is excellent",
      "75 Valor gives strong discipline for resisting suppression",
      "Guerilla perk enables devastating hit-and-run ambush tactics",
      "Unaligned — no faction lock, fits any team composition",
      "Zero supply cost makes him deployment-efficient",
    ],
    weaknesses: [
      "Low Growth Potential (3) limits late-game stat scaling",
      "Only 10 Precision — lower crit rate than Darby",
      "Positioning (60) is average; needs cover positioning awareness",
      "Perk requires setup (concealment break) to maximize value",
    ],
    bestLoadout:
      "Battle Rifle (BR6A1 HaMER) or Suppressed Carbine for stealth, Armor Piercing Ammo, Motion Scanner to maintain awareness, and Jaegar Fatigues for concealment bonus. Binoculars complement his ambush style.",
    bestPairings: ["Jane Darby", "Fedor Yazhov"],
    faq: [
      { question: "How do I best use Kody's Guerilla perk?", answer: "Start missions with Kody concealed behind cover or in foliage. Break concealment by attacking priority targets — the bonus AP lets you either attack again or reposition to safety. Cycle conceal-reveal-attack for maximum efficiency." },
      { question: "Is Kody Greifinger better than Jane Darby?", answer: "They serve different roles. Darby is the better sniper with higher crit and Positioning. Kody is the better all-rounder with superior survivability and flexibility. For beginners, Kody is more forgiving; for experienced players maximizing damage, Darby edges ahead." },
      { question: "What faction should I align Kody with?", answer: "Kody starts unaligned, meaning you can use him regardless of faction choices. This flexibility makes him an excellent pick for players who want to explore multiple faction paths without committing early." },
    ],
  },
  {
    slug: "charles-lim",
    name: "Charles Lim",
    tagline: "Growth Prodigy — The Future Commander",
    faction: "Marines",
    uniquePerk: "Aspiring",
    perkDescription: "Gains bonus XP from all mission completions. Levels up faster than any other leader.",
    agi: 75, ws: 65, val: 70, toug: 55, vit: 50, prec: 0, pos: 60,
    growthPotential: 7, supplyCost: 10,
    tier: "A",
    color: "#4488FF",
    description:
      "Charles Lim is the ultimate long-term investment. With the highest Growth Potential (7) and the Aspiring perk granting bonus XP, he scales harder than any other leader as the campaign progresses. Starting stats are solid but unremarkable — 75 AGI and 65 WS put him in the mid-tier. However, by mid-game, Lim overtakes most other leaders in multiple stat categories. The 10 supply cost is a small price for his exponential growth curve.",
    strengths: [
      "Highest Growth Potential (7) in the game — insane late-game scaling",
      "Aspiring perk: bonus XP accelerates leveling significantly",
      "Balanced starting stats with no major weaknesses",
      "Good Valor (70) for discipline and morale management",
      "Solid Positioning (60) provides adequate defense",
    ],
    weaknesses: [
      "Zero Precision — cannot critical hit until promoted/perked",
      "Underwhelming early-game performance before promotions kick in",
      "Requires consistent deployment to maximize growth potential",
      "Supply cost of 10 adds up over long campaigns",
    ],
    bestLoadout:
      "Assault Rifle (R228A1 MRS) with Hollow Points for early damage. Upgrade to Battle Rifle as stats improve. SAPP Operator armor for special weapon capacity. Focus on XP-maximizing accessories early.",
    bestPairings: ["Edwin Pike", "Marta Carda"],
    faq: [
      { question: "Is Charles Lim worth the early-game struggle?", answer: "Absolutely — Lim is arguably the best long-term leader. His Growth Potential 7 combined with Aspiring means he surpasses most S-tier leaders by mid-game. If you plan a long campaign, invest in Lim early and deploy him consistently." },
      { question: "How do I speed up Charles Lim's leveling?", answer: "Deploy him on every mission possible. Complete optional objectives for bonus XP. Pair him with experienced leaders who can carry missions while Lim gains full XP. The Aspiring perk stacks multiplicatively with mission bonuses." },
      { question: "What promotions should I prioritize for Charles Lim?", answer: "Focus on Precision-boosting promotions first to enable crits, then Weapon Skill for accuracy. Toughness and Vitality are secondary since he starts with adequate survivability." },
    ],
  },
  {
    slug: "edwin-pike",
    name: "Edwin Pike",
    tagline: "Unyielding Anchor — Moral Backbone",
    faction: "Marines",
    uniquePerk: "Stalwart",
    perkDescription: "Immune to suppression effects. Squadmates within range gain bonus discipline.",
    agi: 75, ws: 70, val: 80, toug: 50, vit: 50, prec: 10, pos: 50,
    growthPotential: 2, supplyCost: 10,
    tier: "A",
    color: "#FF8844",
    description:
      "Edwin Pike is the team's morale anchor. With the highest Valor (80) among all leaders and the Stalwart perk granting complete suppression immunity, Pike's squad never wavers under fire. His aura also boosts nearby allies' discipline, making him invaluable in high-suppression missions against Pirates or Rogue Army. While his Growth Potential (2) is the lowest in the game, his immediate battlefield impact more than compensates.",
    strengths: [
      "Highest Valor (80) — elite discipline and morale",
      "Stalwart perk: complete suppression immunity for his squad",
      "Aura effect buffs nearby allies' discipline",
      "Solid WS (70) for reliable accuracy",
      "Good AGI (75) provides decent action points",
    ],
    weaknesses: [
      "Lowest Growth Potential (2) — almost no late-game scaling",
      "Average Toughness (50) — no inherent damage reduction",
      "Average Positioning (50) — mediocre defense",
      "Supply cost of 10 reduces deployment flexibility",
    ],
    bestLoadout:
      "Shotgun (Stoneclad CS185) or SMG for close-range suppression. SAPP High Intensity armor for durability. Ammo Bag for extended special weapon use. Prioritize survivability over damage.",
    bestPairings: ["Jane Darby", "Charles Lim"],
    faq: [
      { question: "Why pick Edwin Pike with only 2 Growth Potential?", answer: "Pike isn't about scaling — he's about immediate value. Complete suppression immunity is a game-changer, especially on high-difficulty missions. His Valor aura also enables riskier plays from your other squads. He's a force multiplier, not a solo carry." },
      { question: "Does Stalwart protect Pike's entire squad?", answer: "Yes — Stalwart makes Pike's squad completely immune to suppression. Additionally, any allied squad within close range receives a discipline bonus, reducing their suppression accumulation. Position Pike centrally for maximum aura coverage." },
      { question: "What missions should I always bring Edwin Pike on?", answer: "Pirate missions (high volume of fire), Rogue Army missions (heavy weapons), and any mission with explosive enemies. Suppression-heavy encounters are where Pike's Stalwart truly shines." },
    ],
  },
  {
    slug: "tekko-beo-phosa",
    name: "Tekko'Beo Phosa",
    tagline: "Juggernaut — Unstoppable Force",
    faction: "Marines",
    uniquePerk: "Rampage",
    perkDescription: "Gains stacking damage bonus for each consecutive kill. Resets at end of turn.",
    agi: 75, ws: 65, val: 70, toug: 75, vit: 70, prec: 0, pos: 40,
    growthPotential: 3, supplyCost: 10,
    tier: "A",
    color: "#FF4444",
    description:
      "Tekko'Beo Phosa is the tank of MENACE. With the highest combined Toughness (75) and Vitality (70), Phosa absorbs punishment that would destroy other leaders. The Rampage perk turns every kill into more damage, encouraging aggressive forward pushes into enemy lines. While low Positioning (40) makes Phosa easy to hit, the massive health pool and 12.5% damage reduction from Toughness mean surviving those hits is rarely an issue.",
    strengths: [
      "Highest Toughness (75): 25% damage reduction at max",
      "Highest Vitality (70): massive HP pool per element",
      "Rampage perk snowballs damage on kill streaks",
      "Good Valor (70) for morale and discipline",
      "High AGI (75) enables aggressive repositioning between kills",
    ],
    weaknesses: [
      "Lowest Positioning (40) — easiest leader to hit",
      "Zero Precision — no critical hits without promotion",
      "Rampage requires kill chains to activate; weak against single targets",
      "Supply cost of 10 limits deployment frequency",
      "Growth Potential (3) is average — limited scaling",
    ],
    bestLoadout:
      "SMG (MP11A2 HIG Oktagon) or Shotgun for close-range devastation. Heavy Armor (TCR Marine Tactical Platesuit). Armor Plates for durability. Haemocetan or Travodin for sustain. Maximize survivability.",
    bestPairings: ["Jane Darby", "Kody Greifinger"],
    faq: [
      { question: "How do I maximize Rampage stacks?", answer: "Softening targets with other squads before Phosa finishes them is key. Use suppression fire to weaken enemies, then Phosa cleans up. The damage bonus stacks additively per kill, so target the weakest enemies first to build stacks before engaging tougher ones." },
      { question: "Is Tekko'Beo Phosa's low Positioning a dealbreaker?", answer: "No — Phosa compensates with massive HP and damage reduction. He will get hit, but he can survive hits that would kill other leaders. Think of him as an HP tank: he trades active defense (Positioning) for passive durability (Toughness/Vitality)." },
      { question: "What armor should I use on Tekko'Beo Phosa?", answer: "The heaviest armor you can afford: TCR Marine Tactical Platesuit (85 armor) or Extreme Small Arms Protective Plating (110 armor). Phosa's high Toughness offsets the mobility penalty from heavy armor." },
    ],
  },
  {
    slug: "jacques-vamplew",
    name: "Jacques Yves Vamplew",
    tagline: "Versatile Operator — Veteran Mercenary",
    faction: "Mercenary",
    uniquePerk: "Partir De Rien",
    perkDescription: "Starts with zero supply cost but gains bonus stats when equipped with high-value gear.",
    agi: 82, ws: 75, val: 65, toug: 50, vit: 50, prec: 0, pos: 50,
    growthPotential: 3, supplyCost: 10,
    tier: "A",
    color: "#8888CC",
    description:
      "Jacques Yves Vamplew is the gear-dependent mercenary whose power scales with equipment quality. His Partir De Rien perk means he starts from nothing but grows stronger as you outfit him with premium weapons and armor. With 82 AGI and 75 WS, his base combat stats are already strong. The synergy between his high stats and top-tier equipment makes him one of the most flexible leaders in MENACE — he excels with whatever you give him.",
    strengths: [
      "Excellent AGI (82) — second only to Darby and Kody",
      "Strong WS (75) — reliable accuracy with any weapon type",
      "Partir De Rien scales with equipment quality",
      "Flexible loadout: effective with any weapon class",
      "Good Valor (65) for adequate discipline",
    ],
    weaknesses: [
      "Perk requires expensive gear to reach full potential",
      "Zero Precision — needs gear to enable critical hits",
      "Average Toughness and Vitality (50/50) — fragile",
      "Growth Potential (3) is average",
      "Supply cost of 10 + expensive gear = resource heavy",
    ],
    bestLoadout:
      "Best available weapon (prioritize Assault Rifles and Battle Rifles), Match Grade Ammo, Smart Gun Link, Binoculars. Scale up gear as you acquire wealth. SAPP Operator armor for extra capacity.",
    bestPairings: ["Edwin Pike", "Fedor Yazhov"],
    faq: [
      { question: "How does Partir De Rien work exactly?", answer: "Vamplew's stats receive bonus multipliers based on the total market value of equipped items. Higher quality gear = larger stat bonuses. The perk effectively turns credits into combat power, making him scale with your economy." },
      { question: "Is Vamplew worth the resource investment?", answer: "Yes, if you can afford the gear. His base 82 AGI and 75 WS are already elite. With premium equipment, he competes with S-tier leaders. Treat him as a mid-to-late-game power spike — invest in him when your economy is stable." },
      { question: "What's the best faction to recruit Vamplew?", answer: "Vamplew is a mercenary, meaning you recruit him from the Black Market. He's available regardless of faction alignment. Prioritize Zayn-Beecher Corporation reputation for better gear access to maximize his perk." },
    ],
  },
  {
    slug: "fedor-yazhov",
    name: "Fedor Yazhov",
    tagline: "Relentless Assault — No Mercy",
    faction: "Mercenary",
    uniquePerk: "No Mercy",
    perkDescription: "Deals increased damage to suppressed and shaken enemies. Finisher specialist.",
    agi: 75, ws: 65, val: 65, toug: 50, vit: 50, prec: 10, pos: 55,
    growthPotential: 6, supplyCost: 10,
    tier: "B",
    color: "#CC4444",
    description:
      "Fedor Yazhov excels at finishing what others start. His No Mercy perk amplifies damage against suppressed and shaken enemies, making him the ideal follow-up attacker in coordinated squad tactics. With Growth Potential 6, he scales effectively into late game. While his base stats are modest, Yazhov's synergy with suppression-focused allies makes him a deadly cleanup specialist who punishes enemies that have already been softened.",
    strengths: [
      "No Mercy perk: massive damage bonus against suppressed/shaken targets",
      "High Growth Potential (6) — excellent scaling",
      "Decent Precision (10) enables moderate crit rate",
      "Synergizes perfectly with suppression-heavy squad compositions",
      "Good Positioning (55) for adequate defense",
    ],
    weaknesses: [
      "Average base stats — requires setup to maximize damage",
      "Perk requires allies to suppress targets first — not self-sufficient",
      "Toughness (50) offers no damage reduction",
      "Supply cost of 10 reduces deployment flexibility",
      "Below-par Valor (65) — vulnerable to suppression himself",
    ],
    bestLoadout:
      "Assault Rifle (R228A1 MRS) or Shotgun for close cleanup. Hollow Point Ammo for raw damage. Motion Scanner to locate suppressed enemies. Can also run LMG for suppression-support hybrid role.",
    bestPairings: ["Edwin Pike", "Tekko'Beo Phosa"],
    faq: [
      { question: "How should I use Fedor Yazhov in combat?", answer: "Yazhov should always attack second. Have your other squads suppress targets first, then send Yazhov in for the kill. The No Mercy bonus stacks significantly — a fully suppressed enemy takes devastating damage. Never engage fresh targets with Yazhov." },
      { question: "Is Yazhov viable without a suppression-based team?", answer: "Not optimally. His entire kit revolves around the No Mercy perk. Without suppressed targets, he's a generic mid-tier leader. Pair him with LMG users, Edwin Pike (suppression aura), or grenade-focused squads to get full value." },
      { question: "What weapon type works best on Yazhov?", answer: "High-damage single-shot weapons (Battle Rifles, Shotguns) maximize the No Mercy bonus on each hit. Rapid-fire weapons waste ammo since the bonus is per-hit, not per-bullet." },
    ],
  },
  {
    slug: "sachin-singh",
    name: "Sachin Singh",
    tagline: "Strength in Numbers — Squad Commander",
    faction: "Planetary Jingwei",
    uniquePerk: "Strength In Numbers",
    perkDescription: "Gains bonus stats for each additional squad member deployed. Larger squads = stronger leader.",
    agi: 63, ws: 65, val: 60, toug: 50, vit: 50, prec: 0, pos: 40,
    growthPotential: 5, supplyCost: 0,
    tier: "B",
    color: "#44AA44",
    description:
      "Sachin Singh grows stronger the larger his squad. The Strength In Numbers perk grants stacking bonuses per squad member, making him unique in rewarding squad size investment. With Growth Potential 5 and zero supply cost, Singh scales well while staying resource-efficient. His Planetary Jingwei background provides access to unique faction-specific missions and upgrades.",
    strengths: [
      "Strength In Numbers: linear scaling with squad size",
      "High Growth Potential (5) for solid late-game",
      "Zero supply cost — always deployable",
      "Planetary Jingwei faction access to unique missions",
      "Decent WS (65) for reliable accuracy",
    ],
    weaknesses: [
      "Low AGI (63) — fewer action points per turn",
      "Weak Positioning (40) — easy to hit",
      "Zero Precision — cannot crit without promotions",
      "Perk requires large squads, increasing manpower drain",
      "Low Valor (60) — susceptible to morale pressure",
    ],
    bestLoadout:
      "Assault Rifle (R10A6 K-PAC) or SMG for volume of fire. Load Bearing Rig armor for extra accessory slots. Ammo Bag and Magazine Pouches for sustained fire. Maximize squad size.",
    bestPairings: ["Edwin Pike", "Charles Lim"],
    faq: [
      { question: "Is Sachin Singh viable in small squads?", answer: "He's playable but suboptimal. His perk scales directly with squad members, so running the minimum size wastes his potential. He's best in campaigns where you invest in larger squad sizes and have the manpower pool to sustain casualties." },
      { question: "How many squad members does Singh need to be effective?", answer: "Starting at 6+ members, the bonus becomes noticeable. At 8-10 members, Singh competes with A-tier leaders. The tradeoff is supply cost and manpower drain — balance your resources carefully." },
      { question: "What faction path benefits Singh most?", answer: "Planetary Jingwei naturally, since he's from that faction. The Backbone also offers good synergy through their manpower-related O.C.I. upgrades." },
    ],
  },
  {
    slug: "marta-carda",
    name: "Marta Carda",
    tagline: "Diamond in the Rough — Extreme Growth",
    faction: "Marines",
    uniquePerk: "Out Of The Craters",
    perkDescription: "Gains bonus stats when below 50% HP. Thrives under pressure.",
    agi: 57, ws: 60, val: 60, toug: 45, vit: 40, prec: 0, pos: 50,
    growthPotential: 9, supplyCost: 0,
    tier: "B",
    color: "#CC88CC",
    description:
      "Marta Carda is the ultimate underdog with the highest Growth Potential (9) in MENACE. Her starting stats are the worst in the game, but her Out Of The Craters perk activates when HP drops below 50%, granting significant combat bonuses. Combined with her extreme growth curve, Carda transforms from the weakest leader into a late-game powerhouse. She's a high-risk, high-reward pick for players who enjoy comeback mechanics.",
    strengths: [
      "Highest Growth Potential (9) in the entire game",
      "Out Of The Craters: powerful low-HP combat bonuses",
      "Zero supply cost — freely deployable",
      "Faction cost factor 0.8 makes promotions cheaper",
      "Incredible late-game ceiling if kept alive",
    ],
    weaknesses: [
      "Worst starting stats across almost all attributes",
      "Perk requires dangerous low-HP play to activate",
      "Toughness 45 means she takes MORE damage",
      "Low Vitality (40) — tiny HP pool",
      "Perk activation is inherently risky — easy to lose her",
      "Low AGI (57) — few action points per turn",
    ],
    bestLoadout:
      "SMG or Carbine for mobility. Haemocetan and Travodin for sustain at low HP. Heavier armor to survive the HP threshold. Benzofinil to remove fatigue. Play carefully and strategically.",
    bestPairings: ["Edwin Pike", "Tekko'Beo Phosa"],
    faq: [
      { question: "Is Marta Carda worth the effort?", answer: "For experienced players, yes — Growth Potential 9 is unmatched, and she becomes terrifying in late game. For beginners, the risk of losing her early is too high. She's a 'challenge run' leader who rewards mastery." },
      { question: "How do I safely trigger Out Of The Craters?", answer: "Intentionally take controlled damage early (e.g., from low-damage enemies). Never activate it against heavy hitters. Use Haemocetan to stabilize at low HP while the perk is active. Edwin Pike's suppression immunity helps keep her squad functional." },
      { question: "When does Carda become strong?", answer: "Around promotion level 4-5, her stats catch up to mid-tier leaders. By promotion 7-8, she surpasses most A-tier leaders. Her Growth Potential 9 means she continues scaling when others have plateaued." },
    ],
  },
  {
    slug: "jean-sy",
    name: "Jean Sy",
    tagline: "Resource Optimizer — Black Market Expert",
    faction: "Pirates",
    uniquePerk: "Economics",
    perkDescription: "Reduces Black Market prices by 15%. Better trade deals on all transactions.",
    agi: 63, ws: 60, val: 60, toug: 50, vit: 40, prec: 0, pos: 50,
    growthPotential: 4, supplyCost: 0,
    tier: "C",
    color: "#888888",
    description:
      "Jean Sy is a utility leader whose value lies outside direct combat. The Economics perk provides a permanent 15% discount at the Black Market, making your entire campaign more resource-efficient. In battle, Sy is unremarkable — 63 AGI and 60 WS are below average with zero Precision. However, the economic advantage of cheaper gear, vehicles, and recruits often outweighs raw combat stats over a full campaign.",
    strengths: [
      "Economics: 15% Black Market discount on all purchases",
      "Economic advantage scales with campaign length",
      "Zero supply cost for deployment",
      "Pirate faction access to unique weapons and vehicles",
      "Decent Growth Potential (4) for moderate scaling",
    ],
    weaknesses: [
      "Weak combat stats across the board",
      "Zero Precision — no critical hits",
      "Low Vitality (40) — fragile in combat",
      "Perk provides no combat benefits — a liability in tough fights",
      "Below-average WS (60) means unreliable accuracy",
    ],
    bestLoadout:
      "Cost-efficient weapons (Pirate Assault Rifle, Pipe Gun). Light armor for mobility. Focus on support role: carry Smoke Grenades, Motion Scanner, and Target Designator. Let other squads do the heavy fighting.",
    bestPairings: ["Jacques Vamplew"],
    faq: [
      { question: "Should I deploy Jean Sy in combat?", answer: "Only when the mission is easy or you specifically need the Pirate faction access. Sy's combat stats are below average and he has zero combat perks. His value is the 15% Black Market discount — keep him in reserve and deploy only when necessary." },
      { question: "How much does Jean Sy's discount actually save?", answer: "Over a full campaign, the 15% discount adds up to thousands of credits saved. Expensive purchases like vehicles (500+ trade value) and high-tier weapons (1000+) see the biggest savings. If you buy a Battle Tank, Sy saves you 67.5 trade value in one transaction." },
      { question: "Is Jean Sy worth a squad leader slot?", answer: "Only in resource-constrained campaigns or when you plan extensive Black Market usage. His combat contribution is near-zero. Consider him an economic support leader — recruit him, enjoy the discount, but keep him off the frontline." },
    ],
  },
  {
    slug: "jg-wetteroth",
    name: "J.G. Wetteroth",
    tagline: "Monster Hunter — Big Game Specialist",
    faction: "Unaligned",
    uniquePerk: "Big Game Hunter",
    perkDescription: "Deals massive bonus damage against large enemies, vehicles, and boss creatures.",
    agi: 57, ws: 75, val: 60, toug: 40, vit: 40, prec: 10, pos: 40,
    growthPotential: 3, supplyCost: 0,
    tier: "C",
    color: "#DD8844",
    description:
      "J.G. Wetteroth is a highly specialized boss-killer with exceptional Weapon Skill (75) but terrible mobility and durability. His Big Game Hunter perk deals devastating damage to large targets — MENACE constructs, vehicles, and boss monsters. Outside these specialized matchups, Wetteroth struggles with low AGI (57), Toughness (40), and Vitality (40). He's a situational pick who dominates specific missions but underperforms in general combat.",
    strengths: [
      "Excellent WS (75) — highly accurate shots",
      "Big Game Hunter: massive boss/vehicle damage bonus",
      "10 Precision for moderate crit rate against large targets",
      "Zero supply cost — freely deployable for boss missions",
      "Unaligned — no faction restrictions",
    ],
    weaknesses: [
      "Terrible Toughness (40): takes 10% MORE damage",
      "Terrible Vitality (40): tiny HP pool, dies quickly",
      "Extremely low AGI (57): very few action points",
      "Weak Positioning (40): easy to hit",
      "Niche perk — weak against standard infantry enemies",
      "Low Growth Potential (3): minimal scaling",
    ],
    bestLoadout:
      "Anti-Materiel Rifle 'Crocodile' for maximum boss damage. AT Grenades or Disposable AT-Launcher for vehicles. Heavy armor to survive long enough to land shots. Travodin for damage reduction. Sniping position is critical.",
    bestPairings: ["Jane Darby", "Edwin Pike"],
    faq: [
      { question: "When should I bring J.G. Wetteroth on a mission?", answer: "Only on missions with confirmed large enemies: MENACE constructs, boss monsters, heavy vehicles, or Alien Wildlife hives. The mission briefing usually hints at enemy types. If the mission doesn't feature large targets, leave Wetteroth at base." },
      { question: "What weapon maximizes Big Game Hunter damage?", answer: "The Anti-Materiel Rifle 'Crocodile' (80 damage, 110 AP) is purpose-built for Wetteroth. Pair with Armor Piercing Ammo for maximum penetration. Disposable AT-Launcher as backup for vehicles. His 75 WS ensures these expensive shots land." },
      { question: "How do I keep Wetteroth alive with such low Toughness?", answer: "Position extremely far back — Wetteroth has zero business near the frontline. Use other squads to screen and draw fire. Heavy armor is mandatory despite the mobility penalty. Edwin Pike's suppression immunity aura helps prevent Wetteroth from being locked down." },
    ],
  },
];

// Helper functions
export function getSquadLeaderBySlug(slug: string): SquadLeader | undefined {
  return squadLeaders.find((s) => s.slug === slug);
}

export function getAdjacentSquadLeaders(slug: string): {
  prev: SquadLeader | null;
  next: SquadLeader | null;
} {
  const idx = squadLeaders.findIndex((s) => s.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? squadLeaders[idx - 1] : null,
    next: idx < squadLeaders.length - 1 ? squadLeaders[idx + 1] : null,
  };
}

// ============================================================
// FACTIONS (7 total)
// ============================================================

export interface Faction {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  color: string;
  relationshipTips: string;
  rewards: string[];
  risks: string[];
  enemyTypes: string[];
  combatStyle: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
  faq: { question: string; answer: string }[];
}

export const factions: Faction[] = [
  {
    slug: "rogue-army",
    name: "Rogue Army",
    fullName: "Rogue Army Forces",
    description:
      "The Rogue Army is a collective term for human forces in the Wayback System that operate outside established faction control. These are mercenaries, deserters, and independent militias with no unified command structure. They possess military-grade equipment and vehicles, making them significantly more dangerous than Pirates. Each encounter with Rogue Army forces can happen on different planets for different reasons — they follow no grand scheme.",
    color: "#CC8844",
    relationshipTips: "Completing operations for planetary governments that oppose Rogue Army elements will improve relations. Ignoring distress calls from civilians under Rogue Army threat damages standing.",
    rewards: [
      "Military-grade weapon unlocks at higher reputation",
      "Access to armored vehicle purchases",
      "Unique Squad Leader recruits from defectors",
      "O.C.I. upgrades for combat intelligence",
    ],
    risks: [
      "Rogue Army missions feature heavy weapons and armor",
      "Enemies use coordinated squad tactics",
      "Vehicle support common — bring anti-tank equipment",
      "High suppression output from automatic weapons",
    ],
    enemyTypes: ["Infantry (standard weapons)", "Heavy Infantry (LMG, RPG)", "Armored Vehicles", "Support Units"],
    combatStyle: "Conventional military tactics — coordinated fire, vehicle support, suppressing fire. Heavily armored.",
    difficulty: "Hard",
    faq: [
      { question: "How do I counter Rogue Army armor?", answer: "Bring anti-tank weapons (RPG, AT Grenades, ATGM Launcher). Target vehicles from the side or rear where armor is weaker. Suppress infantry escorts first so they can't support the vehicle." },
      { question: "Should I ally with the Rogue Army?", answer: "It's situational. Rogue Army offers strong military gear but their missions are among the hardest. Good relations unlock excellent vehicle purchases, but you'll make enemies with planetary governments. Weigh the tradeoffs carefully." },
    ],
  },
  {
    slug: "alien-wildlife",
    name: "Alien Wildlife",
    fullName: "Alien Wildlife",
    description:
      "Alien Wildlife encompasses the native fauna of the Wayback System's planets — creatures large and aggressive enough to threaten human settlements. Unlike sentient factions, Alien Wildlife cannot be negotiated with. Missions typically involve hive destruction, population culling, or defensive operations protecting civilians. Most enemies are melee-focused, with notable exceptions like the Alien Bombardier that attacks from range.",
    color: "#44CC44",
    relationshipTips: "Cannot build diplomatic relationship. This faction represents environmental threats. Completing wildlife extermination missions for other factions improves standing with them.",
    rewards: [
      "Alien biomass resources for Workshop crafting",
      "Unique crafted weapons and armor from alien materials",
      "Relatively easy missions for new squads",
      "Good source of early-game experience",
    ],
    risks: [
      "Swarm tactics — large numbers can overwhelm",
      "Alien Bombardiers provide ranged threat",
      "Melee units ignore cover bonuses",
      "Hive missions feature boss-level creatures",
    ],
    enemyTypes: ["Melee Swarmers", "Alien Bombardier (ranged)", "Hive Queens (boss)", "Burrowing Ambushers"],
    combatStyle: "Overwhelming melee rushes, burrow ambushes, hive defense. Limited ranged capability.",
    difficulty: "Easy",
    faq: [
      { question: "What's the best strategy against Alien Wildlife?", answer: "Keep distance — most wildlife is melee-only. Use suppressive fire to slow advances. Focus fire on ranged units (Bombardiers) first. Bring flamethrowers for area denial against swarms. Elevated positions deny melee attacks entirely." },
      { question: "Are Alien Wildlife missions worth doing?", answer: "Yes, especially early game. They're the easiest faction to fight, provide consistent XP, and yield crafting materials. Use them to level up new squad leaders before tackling harder factions." },
    ],
  },
  {
    slug: "pirates",
    name: "Pirates",
    fullName: "Pirate Clans",
    description:
      "Pirates are scattered groups of outlaws, criminals, and looters roaming the Wayback System. Their combat style emphasizes high mobility and reckless assaults using improvised weapons with high firepower but poor accuracy. Pirate vehicles include fast transports to close distance quickly. Most Pirate equipment can be captured and used by the player — their weapons pack raw power despite low reliability.",
    color: "#CC6666",
    relationshipTips: "Good relations unlock Black Market access and unique Pirate-specific gear. Completing Pirate operations may anger lawful factions. Pirates value strength — successful combat against them can paradoxically improve standing.",
    rewards: [
      "Black Market access improvements",
      "Unique Pirate weapons and vehicles",
      "Loot-based economy — rich missions",
      "Pirate Squad Leader recruits",
    ],
    risks: [
      "High mobility — Pirates close distance quickly",
      "Rocket launchers and explosives common",
      "Suppression-heavy due to high fire rate weapons",
      "RNG-dependent weapon quality — unpredictable",
      "Vehicle-heavy — bring anti-tank",
    ],
    enemyTypes: ["Raider Infantry", "Vehicle Crews", "Rocket Teams", "Looted Armor Units"],
    combatStyle: "High mobility hit-and-run, explosives, vehicle rushes. Low accuracy, high firepower. Reckless aggression.",
    difficulty: "Medium",
    faq: [
      { question: "How do I deal with Pirate rocket launchers?", answer: "Spread your squads out — Pirate rockets have area damage. Identify and eliminate rocket teams first with sniper fire. Smoke grenades block line of sight. Edwin Pike's suppression immunity is invaluable here." },
      { question: "Can I use captured Pirate gear?", answer: "Yes! Most Pirate weapons and vehicles can be used by your squads. Pirate gear is generally high-damage but low-accuracy — pair with high WS leaders to compensate. The Pirate Truck is an excellent early vehicle." },
    ],
  },
  {
    slug: "menace",
    name: "MENACE",
    fullName: "The MENACE Threat",
    description:
      "The MENACE is the implacable alien threat at the heart of the game — an unknown force that transforms humans into biomechanical horrors. These constructs evolve constantly: primitive forms encountered early rapidly enhance into deadlier varieties, culminating in giant boss monsters. Destroying MENACE units yields rare resources for Workshop crafting, allowing you to keep pace with their relentless self-improvement.",
    color: "#8844FF",
    relationshipTips: "Cannot negotiate. The MENACE is the primary antagonist. All missions against them improve standing with other factions. Prioritize containment operations to slow their evolution.",
    rewards: [
      "Rare alien crafting materials",
      "Highest-tier Workshop recipes",
      "Significant faction reputation gains",
      "Story progression",
    ],
    risks: [
      "Constantly evolving — tactics change between missions",
      "Boss monsters with unique abilities",
      "Both melee AND ranged threats",
      "Psychological warfare — high morale pressure",
      "Hardest missions in the game",
    ],
    enemyTypes: ["Drones (scout)", "Shamblers (melee)", "Constructs (ranged)", "Boss Entities", "Biomechanical Horrors"],
    combatStyle: "Evolving tactics, mixed melee/ranged, boss mechanics, psychological pressure. Unpredictable.",
    difficulty: "Extreme",
    faq: [
      { question: "When should I fight the MENACE?", answer: "Not until your squad is well-equipped and experienced. Wait until you have at least tier-2 weapons and armor. Bring your best squad leaders — Jane Darby and J.G. Wetteroth excel here. Ensure you have adequate anti-armor capabilities." },
      { question: "How do MENACE evolve during a campaign?", answer: "The longer you ignore MENACE operations, the stronger they become. They unlock new unit types and boss variants. Containment operations slow this evolution — completing them regularly is essential to prevent being overwhelmed." },
    ],
  },
  {
    slug: "dice-of-the-gods",
    name: "Dice of the Gods",
    fullName: "DICE of the Gods",
    description:
      "A shadowy criminal syndicate that controls the ice planet Dice, transforming it into a tourist and gambling hub despite its harsh environment. Their operations are stealth-focused, with enemies that prefer ambush tactics over direct confrontation. Frankie Sallustio serves as the public face of this organization. DICE missions often involve infiltration, intelligence gathering, and counter-espionage.",
    color: "#44CCCC",
    relationshipTips: "Good relations provide intelligence bonuses and stealth equipment. Completing their missions often involves morally gray choices. High reputation unlocks Frankie Sallustio as a unique Squad Leader recruit.",
    rewards: [
      "Stealth and infiltration equipment",
      "Intelligence-gathering O.C.I. upgrades",
      "Frankie Sallustio Squad Leader (high reputation)",
      "Information on other factions' movements",
    ],
    risks: [
      "Ambush-heavy combat — hard to prepare",
      "Enemies use stealth and concealment",
      "Missions often have secondary hidden objectives",
      "Low visibility due to Dice's environment",
    ],
    enemyTypes: ["Stealth Operatives", "Ambush Teams", "Security Forces", "Enforcer Units"],
    combatStyle: "Stealth, ambush, infiltration. Avoids direct confrontation. Environmental hazards (ice planet).",
    difficulty: "Medium",
    faq: [
      { question: "How do I counter DICE stealth tactics?", answer: "Motion Scanners are essential — they reveal hidden enemies within 12 tiles. Night Vision Goggles help with Dice's low-visibility environment. Deploy in spread formation to avoid multi-squad ambushes. Thermal Imaging Device provides superior detection." },
      { question: "Is allying with DICE worth the moral cost?", answer: "From a pure gameplay perspective, yes — the stealth equipment and intelligence upgrades are excellent. The narrative choices are yours to make, but mechanically, DICE offers some of the best O.C.I. upgrades for mission preparation." },
    ],
  },
  {
    slug: "the-backbone",
    name: "The Backbone",
    fullName: "The Backbone (The Unbent)",
    description:
      "The Backbone, also known as 'The Unbent,' has transformed the most Earth-like planet in the Wayback System into an industrial and military powerhouse. Their ruling cadre openly pursues system-wide domination. Represented by Xiao Xiao, they field mutated humanoid soldiers capable at both short and long range. Their missions are among the most dangerous, pitting you against heavily industrialized military forces.",
    color: "#888888",
    relationshipTips: "The Backbone rewards strength and results. Completing their missions provides industrial and manufacturing benefits. Their path leads toward military dominance but alienates most other factions. Choose carefully.",
    rewards: [
      "Industrial manufacturing capabilities",
      "Heavy weapon and armor production",
      "Unique vehicle blueprints",
      "Xiao Xiao Squad Leader recruit (max reputation)",
      "Manpower and resource bonuses",
    ],
    risks: [
      "Extremely dangerous missions",
      "Enemy forces are well-equipped and disciplined",
      "Mutated units have unpredictable abilities",
      "Allying with Backbone angers most other factions",
      "Late-game consequences for faction relationships",
    ],
    enemyTypes: ["Mutated Infantry", "Heavy Assault Units", "Industrial Mechs", "Elite Commanders"],
    combatStyle: "Industrial warfare, heavy assault, mutated shock troops. High damage at all ranges. Relentless.",
    difficulty: "Hard",
    faq: [
      { question: "Can I stay neutral with The Backbone?", answer: "To some extent, but their system-wide ambitions mean you'll inevitably cross paths. Accepting their missions provides strong industrial benefits but damages other relationships. The safest approach is selective cooperation — take missions that benefit you without committing fully." },
      { question: "What's the best strategy against Backbone forces?", answer: "Range is your friend — Backbone units are deadly at all distances but move slowly in heavy armor. Kite with mobile squads. Energy weapons bypass their armor effectively. Focus fire on mutated units first as they have the most unpredictable abilities." },
    ],
  },
  {
    slug: "zayn-beecher-corp",
    name: "Zayn-Beecher Corporation",
    fullName: "Zayn-Beecher Corporation",
    description:
      "One of the wealthiest factions in the Wayback System, Zayn-Beecher Corporation maintained extensive business ties with the Core Worlds before the Warp Gate was damaged. Even stranded, they remain a major economic power. They offer the most frequent mission requests and provide the richest rewards. Maintaining good relations with ZBC is widely considered the optimal economic strategy.",
    color: "#FF8844",
    relationshipTips: "ZBC values consistent, reliable contract completion. They offer the most missions of any faction — completing them is the fastest path to wealth. Unlike other factions, ZBC doesn't ask you to antagonize others directly. Prioritize their missions for economic stability.",
    rewards: [
      "Highest credit and resource payouts",
      "Access to premium equipment",
      "Exclusive corporate weapons and armor",
      "Economic O.C.I. upgrades",
      "Most frequent mission availability",
    ],
    risks: [
      "Corporate security is well-equipped",
      "Some missions have time pressure",
      "High expectations — failed missions hurt reputation more",
      "Competing contracts with other factions",
    ],
    enemyTypes: ["Corporate Security", "Automated Defenses", "Rival Corporate Agents", "Hired Mercenaries"],
    combatStyle: "Professional security forces, automated defenses, well-equipped but predictable.",
    difficulty: "Medium",
    faq: [
      { question: "Should I always prioritize Zayn-Beecher missions?", answer: "For economic stability, yes. ZBC pays the most and asks the least in terms of faction conflict. However, don't neglect other factions entirely — a balanced approach yields the best overall rewards. ZBC missions should be your 'bread and butter' income source." },
      { question: "What's the optimal faction strategy for new players?", answer: "Focus on Zayn-Beecher Corporation and Alien Wildlife early. ZBC provides steady income and gear; Wildlife provides easy XP. Branch into Pirates for loot variety. Avoid MENACE and Backbone commitments until you have strong squads." },
    ],
  },
];

export function getFactionBySlug(slug: string): Faction | undefined {
  return factions.find((f) => f.slug === slug);
}

// ============================================================
// WEAPONS
// ============================================================

export interface WeaponCategory {
  name: string;
  description: string;
  weapons: Weapon[];
}

export interface Weapon {
  name: string;
  type: string;
  range: string;
  damage: string;
  armorDamage: string;
  armorPen: string;
  suppression: string;
  fireRate: string;
  supplyCost: number;
  tradeValue: number;
  notes: string;
  tier: "Standard" | "Advanced" | "Premium" | "Crafted";
}

export const weaponCategories: WeaponCategory[] = [
  {
    name: "Assault Rifles",
    description: "The backbone of any infantry squad. Assault rifles offer balanced performance with good range, damage, and armor penetration. Ideal for general-purpose combat roles.",
    weapons: [
      { name: "R10A6 K-PAC", type: "Assault Rifle", range: "8", damage: "9", armorDamage: "9", armorPen: "30", suppression: "3", fireRate: "3", supplyCost: 9, tradeValue: 150, notes: "Standard Marine issue. Reliable and cost-effective.", tier: "Standard" },
      { name: "R14A2 ARC", type: "Assault Rifle", range: "7", damage: "12", armorDamage: "13", armorPen: "20", suppression: "3", fireRate: "3", supplyCost: 9, tradeValue: 150, notes: "Higher damage, lower penetration tradeoff.", tier: "Standard" },
      { name: "R228A1 MRS", type: "Assault Rifle", range: "9", damage: "11", armorDamage: "11", armorPen: "35", suppression: "3", fireRate: "3", supplyCost: 20, tradeValue: 1200, notes: "Premium all-rounder. Best-in-class range and penetration.", tier: "Premium" },
      { name: "R10A6 K-PAC with Launcher", type: "Assault Rifle + GL", range: "8", damage: "9", armorDamage: "9", armorPen: "30", suppression: "3", fireRate: "3", supplyCost: 18, tradeValue: 650, notes: "K-PAC with underbarrel grenade launcher.", tier: "Advanced" },
    ],
  },
  {
    name: "Battle Rifles",
    description: "High-power rifles that trade fire rate for superior damage per shot and armor penetration. Best on leaders with high Weapon Skill to compensate for lower shot volume.",
    weapons: [
      { name: "BR3A3 Kr-BaR 'Crowbar'", type: "Battle Rifle", range: "9", damage: "11", armorDamage: "13", armorPen: "35", suppression: "4", fireRate: "2", supplyCost: 9, tradeValue: 150, notes: "Standard Marine battle rifle. Excellent value.", tier: "Standard" },
      { name: "BR6A1 HaMER", type: "Battle Rifle", range: "10", damage: "13", armorDamage: "15", armorPen: "40", suppression: "5", fireRate: "2", supplyCost: 20, tradeValue: 1200, notes: "Premium battle rifle. Max range and damage.", tier: "Premium" },
    ],
  },
  {
    name: "SMGs",
    description: "Close-quarters specialists. SMGs fire rapidly at short range, excelling at suppression and room clearing. Best paired with aggressive squad leaders.",
    weapons: [
      { name: "MP3A9 PPP", type: "SMG", range: "5", damage: "12", armorDamage: "9", armorPen: "15", suppression: "3", fireRate: "5", supplyCost: 9, tradeValue: 150, notes: "Basic SMG. High fire rate, low penetration.", tier: "Standard" },
      { name: "MP11A2 HIG Oktagon", type: "SMG", range: "7", damage: "14", armorDamage: "11", armorPen: "25", suppression: "5", fireRate: "5", supplyCost: 20, tradeValue: 2000, notes: "Premium SMG. Exceptional close-range performance.", tier: "Premium" },
      { name: "Griffin MK1MOD1", type: "SMG", range: "6", damage: "13", armorDamage: "10", armorPen: "20", suppression: "4", fireRate: "5", supplyCost: 13, tradeValue: 1200, notes: "High-quality SMG with good balance.", tier: "Advanced" },
    ],
  },
  {
    name: "Sniper Rifles",
    description: "Long-range precision weapons for eliminating priority targets. Low fire rate but extreme accuracy and penetration. Essential for leader-sniping and vehicle crews.",
    weapons: [
      { name: "K-SAS DMR", type: "Sniper Rifle", range: "10", damage: "25", armorDamage: "25", armorPen: "45", suppression: "8", fireRate: "2", supplyCost: 25, tradeValue: 450, notes: "Designated marksman rifle. Good fire rate for a sniper.", tier: "Standard" },
      { name: "SR31 HM SPR", type: "Sniper Rifle", range: "11", damage: "30", armorDamage: "40", armorPen: "75", suppression: "30", fireRate: "1", supplyCost: 30, tradeValue: 400, notes: "Heavy sniper. Devastating single shots.", tier: "Advanced" },
      { name: "SR41 KASS", type: "Sniper Rifle", range: "12", damage: "40", armorDamage: "50", armorPen: "85", suppression: "35", fireRate: "1", supplyCost: 35, tradeValue: 250, notes: "Top-tier sniper. Maximum range and damage.", tier: "Premium" },
      { name: "Anti-Materiel Rifle 'Crocodile'", type: "Anti-Materiel", range: "3-11", damage: "80", armorDamage: "70", armorPen: "110", suppression: "40", fireRate: "1", supplyCost: 40, tradeValue: 700, notes: "Vehicle/boss killer. Devastating penetration.", tier: "Premium" },
    ],
  },
  {
    name: "Machine Guns",
    description: "Area suppression specialists. Machine guns fire multiple projectiles per attack, stacking suppression rapidly. Essential for controlling enemy movement.",
    weapons: [
      { name: "M10E ESAW", type: "LMG", range: "7", damage: "12", armorDamage: "9", armorPen: "28", suppression: "10", fireRate: "15", supplyCost: 20, tradeValue: 30, notes: "Standard LMG. High suppression output.", tier: "Standard" },
      { name: "M320 SSW", type: "LMG", range: "8", damage: "14", armorDamage: "10", armorPen: "34", suppression: "12", fireRate: "15", supplyCost: 30, tradeValue: 120, notes: "Upgraded LMG with better range.", tier: "Advanced" },
      { name: "M80 EGPM", type: "MMG", range: "9", damage: "16", armorDamage: "14", armorPen: "40", suppression: "17", fireRate: "12", supplyCost: 45, tradeValue: 120, notes: "Heavy machine gun. Maximum suppression.", tier: "Premium" },
    ],
  },
  {
    name: "Shotguns",
    description: "Close-range devastation. Shotguns deal high damage per shot with low penetration. Ideal for breaching and clearing buildings.",
    weapons: [
      { name: "Corridor Sweeper", type: "Shotgun", range: "5", damage: "9", armorDamage: "25", armorPen: "9", suppression: "4", fireRate: "2", supplyCost: 10, tradeValue: 100, notes: "Pirate-made shotgun. High armor damage.", tier: "Standard" },
      { name: "Stoneclad CS185", type: "Shotgun", range: "5", damage: "10", armorDamage: "30", armorPen: "10", suppression: "4", fireRate: "2", supplyCost: 9, tradeValue: 150, notes: "Marine-issue combat shotgun.", tier: "Standard" },
    ],
  },
];

// ============================================================
// VEHICLES
// ============================================================

export interface Vehicle {
  name: string;
  type: string;
  hp: number;
  frontArmor: number;
  sideArmor: number;
  rearArmor: number;
  armorDurability: number;
  concealment: number;
  weaponSlots: string;
  accessorySlots: number;
  supplyCost: number;
  tradeValue: number;
  description: string;
  color: string;
}

export const vehicles: Vehicle[] = [
  {
    name: "Pirate Truck (Modular)",
    type: "Wheeled Transport",
    hp: 140, frontArmor: 90, sideArmor: 70, rearArmor: 50, armorDurability: 250, concealment: -2,
    weaponSlots: "Heavy: 0, Medium: 1, Light: 2",
    accessorySlots: 1, supplyCost: 40, tradeValue: 35,
    description: "The cheapest vehicle available. Captured Pirate truck with modular weapon mounts. Low armor but can mount a surprising variety of weapons. Ideal as a first vehicle purchase — good mobility and weapon flexibility at minimal cost.",
    color: "#CC6666",
  },
  {
    name: "A-ATV (Modular)",
    type: "Armored ATV",
    hp: 180, frontArmor: 110, sideArmor: 90, rearArmor: 80, armorDurability: 400, concealment: -2,
    weaponSlots: "Heavy: 0, Medium: 1, Light: 3",
    accessorySlots: 1, supplyCost: 60, tradeValue: 70,
    description: "Reliable armored all-terrain vehicle. Better armor than the Pirate Truck with an extra light weapon slot. The go-to mid-game transport that balances cost, protection, and firepower.",
    color: "#888888",
  },
  {
    name: "Light Troop Carrier",
    type: "APC",
    hp: 250, frontArmor: 125, sideArmor: 110, rearArmor: 90, armorDurability: 600, concealment: -3,
    weaponSlots: "Heavy: 1, Medium: 0, Light: 1",
    accessorySlots: 2, supplyCost: 220, tradeValue: 60,
    description: "Armored personnel carrier capable of transporting squads under fire. Heavy weapon mount enables mounting a tank gun or autocannon. Two accessory slots provide utility flexibility.",
    color: "#4488FF",
  },
  {
    name: "Infantry Fighting Vehicle",
    type: "IFV",
    hp: 350, frontArmor: 150, sideArmor: 140, rearArmor: 110, armorDurability: 700, concealment: -3,
    weaponSlots: "Heavy: 1, Medium: 0, Light: 1",
    accessorySlots: 2, supplyCost: 380, tradeValue: 220,
    description: "Frontline IFV with substantial armor and HP. Can mount a heavy cannon while carrying infantry. The workhorse of mid-to-late game armored operations.",
    color: "#4488FF",
  },
  {
    name: "Battle Tank",
    type: "Main Battle Tank",
    hp: 450, frontArmor: 190, sideArmor: 160, rearArmor: 120, armorDurability: 800, concealment: -3,
    weaponSlots: "Heavy: 1, Medium: 0, Light: 1",
    accessorySlots: 2, supplyCost: 450, tradeValue: 300,
    description: "The ultimate ground combat vehicle. Massive armor, HP pool, and firepower. The heavy weapon mount can equip the Long Barreled Tank Gun for armor-shattering penetration at range.",
    color: "#FF8844",
  },
  {
    name: "Captured Heavy Tank",
    type: "Super Heavy Tank",
    hp: 600, frontArmor: 220, sideArmor: 150, rearArmor: 120, armorDurability: 900, concealment: -4,
    weaponSlots: "Heavy: 15cm Howitzer, Medium: 0, Light: 1",
    accessorySlots: 1, supplyCost: 400, tradeValue: 115,
    description: "A captured enemy super-heavy tank with a fixed 15cm Assault Howitzer. Devastating firepower with 170 damage and 180 armor damage per shot. The 15cm Howitzer cannot be swapped.",
    color: "#FF4444",
  },
  {
    name: "Light Walker",
    type: "Mech",
    hp: 160, frontArmor: 110, sideArmor: 110, rearArmor: 110, armorDurability: 280, concealment: -4,
    weaponSlots: "Heavy: 0, Medium: 1, Light: 2",
    accessorySlots: 1, supplyCost: 40, tradeValue: 60,
    description: "A light mech with uniform armor on all facings. More maneuverable than wheeled vehicles and equally armored from any angle. Excellent for flanking operations.",
    color: "#44CCCC",
  },
  {
    name: "Medium Walker",
    type: "Heavy Mech",
    hp: 250, frontArmor: 140, sideArmor: 140, rearArmor: 140, armorDurability: 400, concealment: -4,
    weaponSlots: "Heavy: 0, Medium: 2, Light: 2",
    accessorySlots: 2, supplyCost: 400, tradeValue: 250,
    description: "Heavy mech with dual medium weapon mounts and uniform armor. Two medium slots enable versatile loadouts (e.g., ATGM Launcher + Autocannon). The premier late-game combat platform.",
    color: "#00D4AA",
  },
];

// ============================================================
// EQUIPMENT / ARMOR
// ============================================================

export interface ArmorPiece {
  name: string;
  armor: number;
  durability: number;
  concealment: number;
  accessorySlots: number;
  supplyCost: number;
  tradeValue: number;
  effects: string;
  tier: "Light" | "Medium" | "Heavy";
}

export const armors: ArmorPiece[] = [
  { name: "RMC Fatigues", armor: 10, durability: 25, concealment: 0, accessorySlots: 1, supplyCost: 0, tradeValue: 0, effects: "Standard issue", tier: "Light" },
  { name: "Load Bearing Rig", armor: 10, durability: 25, concealment: 0, accessorySlots: 3, supplyCost: 3, tradeValue: 15, effects: "+10% Defense", tier: "Light" },
  { name: "Soft Armor", armor: 30, durability: 40, concealment: 0, accessorySlots: 2, supplyCost: 5, tradeValue: 15, effects: "Entry-level armor", tier: "Light" },
  { name: "SIPV Standard Protective Vest", armor: 40, durability: 40, concealment: 0, accessorySlots: 2, supplyCost: 10, tradeValue: 25, effects: "Standard protection", tier: "Medium" },
  { name: "Small Arms Protective Plating", armor: 55, durability: 45, concealment: 0, accessorySlots: 2, supplyCost: 12, tradeValue: 35, effects: "Good protection vs small arms", tier: "Medium" },
  { name: "Marine Infantry Body Armor", armor: 65, durability: 55, concealment: 0, accessorySlots: 2, supplyCost: 15, tradeValue: 70, effects: "Standard Marine armor", tier: "Medium" },
  { name: "SAPP Operator", armor: 55, durability: 45, concealment: 0, accessorySlots: 3, supplyCost: 20, tradeValue: 70, effects: "Special weapon +50%, Squad weapon +50% ammo", tier: "Medium" },
  { name: "SAPP Recce", armor: 55, durability: 45, concealment: 10, accessorySlots: 2, supplyCost: 20, tradeValue: 70, effects: "Detection +1", tier: "Medium" },
  { name: "TCR Marine Tactical Platesuit", armor: 85, durability: 65, concealment: 0, accessorySlots: 2, supplyCost: 22, tradeValue: 125, effects: "Premium Marine protection", tier: "Heavy" },
  { name: "Enhanced Small Arms Protective Plating", armor: 90, durability: 80, concealment: -1, accessorySlots: 1, supplyCost: 25, tradeValue: 80, effects: "Heavy armor, +3 move cost", tier: "Heavy" },
  { name: "Extreme Small Arms Protective Plating", armor: 110, durability: 100, concealment: -2, accessorySlots: 1, supplyCost: 30, tradeValue: 120, effects: "Maximum armor, +3 move cost", tier: "Heavy" },
  { name: "TCR Navy Breaching Armor - Heavy", armor: 130, durability: 120, concealment: -4, accessorySlots: 1, supplyCost: 55, tradeValue: 250, effects: "Best armor, heavy mobility penalty", tier: "Heavy" },
];

// ============================================================
// BEGINNER TIPS
// ============================================================

export const beginnerTips = [
  { title: "Use Cover — Always", detail: "Cover is not optional in MENACE. Even one tile of cover can mean the difference between a dead squad and a victorious one. Buildings, rocks, and vehicles all provide varying cover levels — check each tile before moving." },
  { title: "Suppress, Then Destroy", detail: "The core combat loop: Suppress enemies with LMGs or grenades, then finish them with assault rifles or snipers. Suppressed enemies have reduced accuracy and AP — they're sitting ducks for your cleanup crew." },
  { title: "Rotate Squad Leaders", detail: "Leaders gain 'Fatigue' debuff (reduced AP) when deployed on too many consecutive missions. Maintain 4+ active leaders and rotate them to avoid penalties. This also spreads XP for a stronger overall roster." },
  { title: "Check the Black Market Every Operation", detail: "Black Market inventory refreshes after each operation. Always check for valuable recruit files, rare weapons, and manpower replenishment items. The 'Recruitment Drive' item is especially important for maintaining your troop pool." },
  { title: "Upgrade O.C.I. Early", detail: "Ship O.C.I. upgrades provide massive returns. Prioritize Electronics for better mission intel — knowing enemy composition before deployment is invaluable. Then Hull for sustainability, Weapons for orbital strike options." },
  { title: "Don't Overextend in Combat", detail: "The biggest beginner mistake: moving too far in one turn. MENACE has no initiative system — once a squad starts acting, it must finish before enemies respond. Move incrementally and reassess after each action." },
  { title: "Manage Supply Cost", detail: "Each mission has a supply cap. Outfitting squads with expensive gear reduces how many squads you can deploy. Balance quality vs. quantity — sometimes two medium squads beat one elite squad." },
  { title: "Prioritize Zayn-Beecher Missions", detail: "ZBC pays the most credits and resources without requiring you to antagonize other factions. Use their missions as your primary income source while selectively helping other factions for specific rewards." },
];

// ============================================================
// COMBAT MECHANICS
// ============================================================

export const combatMechanics = [
  {
    title: "Action Points (AP)",
    detail: "All actions cost AP: crouching (20 AP), standard shots (40 AP), special weapons (40-80 AP), and movement (varies by terrain and load). AGI determines max AP — higher AGI leaders can perform more actions per turn.",
  },
  {
    title: "Suppression System",
    detail: "Suppression accumulates from incoming fire. Levels: Normal → Suppressed (reduced accuracy) → Pinned (severe AP penalty). High fire-rate weapons (LMG, SMG) apply the most suppression. Leaders with high Valor resist suppression better.",
  },
  {
    title: "Directional Armor (Vehicles)",
    detail: "Vehicles have different armor ratings on front, sides, and rear. Always face front armor toward enemies. Use the X key to rotate in place. Reverse movement keeps front armor facing threats while repositioning.",
  },
  {
    title: "Cover & Concealment",
    detail: "Cover reduces incoming damage and is directional — the same building can provide full cover on one side and no cover on another. Concealment (from camouflage, smoke, night) makes units harder to detect. Fully concealed units cannot be targeted.",
  },
  {
    title: "Shaken & Routed",
    detail: "Repeated attacks or losing multiple soldiers in one turn causes Shaken (white flashing icon, no attacking this turn) and Routed (may flee battlefield). Routed enemies are defenseless — use these turns to reposition or eliminate other threats.",
  },
  {
    title: "Orbital Strikes",
    detail: "Unlocked through Weapons O.C.I. upgrades. Takes a full turn to arrive. Use suppressive fire on the target area to prevent enemies from escaping. Orbital strikes don't cost AP and have limited uses per mission.",
  },
];

// ============================================================
// O.C.I. UPGRADES
// ============================================================

export const ociUpgrades = [
  {
    category: "Electronics",
    description: "Provides mission intelligence — reveals enemy positions and unit types before deployment.",
    upgrades: [
      "Basic Scanner: Shows enemy count and general composition",
      "Advanced Scanner: Reveals specific unit types and positions",
      "Tactical Network: Full enemy deployment map + weak point analysis",
      "Faction-Specific: Double intel for certain faction missions",
    ],
    priority: "Highest — intel lets you tailor squad composition per mission",
  },
  {
    category: "Weapons",
    description: "Orbital strike capabilities — rockets, strafing runs, ion beams for battlefield support.",
    upgrades: [
      "Orbital Rocket: Single-target high damage strike",
      "Strafing Run: Linear area attack along a path",
      "Ion Beam: Area suppression with EMP effect on vehicles",
      "Faction Variants: Enhanced versions with larger areas or bonus effects",
    ],
    priority: "Medium — powerful but limited uses per mission. Unlock after Electronics",
  },
  {
    category: "Hull",
    description: "Ship sustainability — medical bay, vehicle repair, troop replenishment between missions.",
    upgrades: [
      "Medical Bay: Heals wounded soldiers between missions in an operation",
      "Vehicle Repair Bay: Repairs vehicle damage between missions",
      "Recruitment Center: Passive manpower regeneration",
      "Advanced Medbay: Faster healing, can treat severe wounds",
    ],
    priority: "High — keeps your roster healthy across multi-mission operations",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { href: "/squad-leaders", label: "Squad Leaders" },
  { href: "/factions", label: "Factions" },
  { href: "/weapons", label: "Weapons" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/beginners-guide", label: "Beginner's Guide" },
  { href: "/combat", label: "Combat" },
  { href: "/tactics", label: "Tactics" },
];

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap.xml", label: "Sitemap", external: true },
];
