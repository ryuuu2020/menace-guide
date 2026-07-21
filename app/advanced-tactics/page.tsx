import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Advanced Tactics Guide — Build Better Turns, Not Fake Maneuver Lists",
  description:
    "A practical MENACE advanced tactics guide covering layered turn planning, terrain use, reserve discipline, and how to improve high-pressure fights without fake universal maneuver formulas.",
};

const advancedLayers = [
  {
    layer: "Board reading before commitment",
    why:
      "High-level MENACE play begins by deciding which enemy angle can be ignored, delayed, or isolated. Not every visible threat deserves equal urgency.",
    failure:
      "Advanced players still lose when they confuse visible danger with decisive danger and spend their best actions on the wrong side of the fight.",
  },
  {
    layer: "Action economy under pressure",
    why:
      "The real upgrade over basic play is not bigger damage. It is spending fewer actions on recovery because your earlier actions already simplified the map.",
    failure:
      "A turn that uses every action to look busy usually has no answer left when the enemy survives or a second angle opens.",
  },
  {
    layer: "Reserve discipline",
    why:
      "Holding one strong response in reserve is how good squads survive imperfect information and awkward contact turns.",
    failure:
      "Players who commit every tool at first contact often discover they won the exchange but lost the turn sequence.",
  },
  {
    layer: "Exit planning",
    why:
      "Many hard missions are not won when the enemy breaks. They are won when your squad can leave the dangerous shape without giving the map one last cheap punish.",
    failure:
      "Late casualties often happen because the squad stopped planning once the main target looked solved.",
  },
];

const situationTable = [
  {
    situation: "You have partial vision and two possible enemy concentrations",
    advancedResponse:
      "Use the safer angle to gain information first, then collapse only after the board tells you which side is actually decisive.",
    badHabit:
      "Picking the flashy push before the map is read turns a knowledge problem into a casualty problem.",
  },
  {
    situation: "You can kill one target now or suppress two that will act next",
    advancedResponse:
      "Favor the option that makes the next enemy turn simpler, not the option that makes your current turn look cleaner.",
    badHabit:
      "High-damage instincts often overvalue one immediate kill when the real danger is untouched enemy action economy.",
  },
  {
    situation: "Your lead element took contact early and the planned push is no longer clean",
    advancedResponse:
      "Rebuild shape first. Use terrain, smoke, or suppression to make the next exchange survivable before resuming ambition.",
    badHabit:
      "Trying to force the original plan after the board changed is one of the fastest ways to lose elite units.",
  },
  {
    situation: "The mission timer is real, but the line is unstable",
    advancedResponse:
      "Advance in one controlled slice. A smaller stable gain is usually stronger than either panic speed or total hesitation.",
    badHabit:
      "Players often oscillate between reckless push and frozen caution instead of building one defendable step forward.",
  },
];

const terrainRules = [
  {
    title: "Terrain is for denial first, efficiency second",
    body:
      "The best use of terrain is often to erase enemy lines of play, not simply to make your own shot slightly better. If a piece of cover removes an entire angle, that is more valuable than a modest accuracy gain elsewhere.",
  },
  {
    title: "Vertical or lateral movement should change the fight, not just relocate it",
    body:
      "A reposition is advanced only when it creates a new advantage: cleaner vision, better safety, or a more favorable line of contact. Movement without a changed board state is just expensive motion.",
  },
  {
    title: "Good squads plan where they will stand after the success",
    body:
      "If a strong push leaves the squad stranded in bad terrain, the push was incomplete. Winning the exchange and losing the shape is still a tactical failure.",
  },
];

const faqs = [
  {
    question: "What makes tactics in MENACE truly advanced?",
    answer:
      "Advanced play is not memorizing named maneuvers. It is consistently simplifying the next enemy turn, preserving a reserve answer, and exiting dangerous contact shapes without giving losses back.",
  },
  {
    question: "Why do difficult missions still punish experienced squads?",
    answer:
      "Because difficult maps punish impatience more than inexperience. Strong squads still collapse when they spend their turn economy on the wrong problem or refuse to rebuild shape after first contact changes the board.",
  },
  {
    question: "Should I be following a list of universal expert maneuvers?",
    answer:
      "This page is not a fake universal maneuver spreadsheet. The transferable skill is learning how to read pressure, sequence actions, and preserve recovery paths across different board states.",
  },
];

export default function AdvancedTacticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">High-Pressure Doctrine</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">MENACE Advanced Tactics Guide</h1>
        <p className="text-gray-300 leading-relaxed">
          Advanced MENACE tactics are not about collecting impressive maneuver names. They are about
          building turns that stay coherent when information is partial, contact goes early, and one
          wrong commitment can destroy the next several actions. This page is written from that angle.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Four Layers of Advanced Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advancedLayers.map((item) => (
            <div key={item.layer} className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-white mb-2">{item.layer}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-2">{item.why}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Failure mode:</span> {item.failure}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">How Advanced Players Answer Hard Situations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="p-3 border border-border text-white">Situation</th>
                <th className="p-3 border border-border text-white">Advanced Response</th>
                <th className="p-3 border border-border text-white">What Usually Goes Wrong</th>
              </tr>
            </thead>
            <tbody>
              {situationTable.map((row) => (
                <tr key={row.situation} className="align-top">
                  <td className="p-3 border border-border font-semibold text-white">{row.situation}</td>
                  <td className="p-3 border border-border text-gray-300">{row.advancedResponse}</td>
                  <td className="p-3 border border-border text-gray-300">{row.badHabit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Terrain and Movement Rules</h2>
        {terrainRules.map((item) => (
          <div key={item.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
          </div>
        ))}
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
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/tactics" className="text-accent hover:underline">
          Tactics Overview →
        </Link>
        <Link href="/combat" className="text-accent hover:underline">
          Combat →
        </Link>
        <Link href="/oci-upgrades" className="text-accent hover:underline">
          OCI Upgrades →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 10, 2026</p>
    </div>
  );
}
