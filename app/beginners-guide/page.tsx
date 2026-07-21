import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENACE Beginner's Guide — Solve the First Real Failure, Not Fake Checklists",
  description:
    "A practical MENACE beginner's guide focused on the first repeated campaign failures, early reading habits, and which pages new players should actually open next.",
};

const earlyProblems = [
  {
    problem: "I start fights without understanding what will break first",
    read:
      "New players often lose because they treat every mission like a damage problem. It is usually a contact, position, or sequencing problem first.",
    next:
      "Read Combat and Missions before chasing stronger-looking equipment.",
  },
  {
    problem: "My roster seems fine until fatigue or follow-up missions expose it",
    read:
      "One good squad is not the same thing as a healthy campaign. The beginner trap is overinvesting in one package and leaving the rest too shallow.",
    next:
      "Read Squad Leaders and Resources if the campaign feels thinner after every win.",
  },
  {
    problem: "I keep buying upgrades, but the run does not feel safer",
    read:
      "That usually means the wrong burden is being upgraded. More power is not the same as more stability.",
    next:
      "Read Research Priority, Resources, and Black Market when upgrades look good but the campaign still plays badly.",
  },
  {
    problem: "I am not sure what page to read after the basics",
    read:
      "The right next page depends on the first symptom that repeats: bad contact, weak squad jobs, expensive wins, or wrong mission selection.",
    next:
      "Use this guide as a router, not as a fake all-in-one answer page.",
  },
];

const starterHabits = [
  {
    title: "Name the burden before the mission starts",
    body:
      "Ask what this operation is really taxing: safe contact, anti-armor conversion, recovery margin, or rotation depth. Good openings come from reading the problem before deployment.",
  },
  {
    title: "Protect the next mission, not just this one",
    body:
      "Beginner campaigns often die from expensive wins. Every clean choice that keeps the next deployment stronger matters more than one dramatic overextension.",
  },
  {
    title: "Treat upgrades as burden removal",
    body:
      "Do not upgrade just because the menu offers something powerful-looking. Upgrade when the new tool removes a repeated failure that the roster cannot currently solve.",
  },
];

const routingTable = [
  {
    symptom: "Battles get chaotic immediately",
    page: "Combat or Missions",
    why: "The first mistake is probably contact reading or fight shape, not roster ceiling.",
  },
  {
    symptom: "You win, but the campaign feels worse after each win",
    page: "Resources or Squad Leaders",
    why: "The issue is attrition, fatigue, or shallow rotation.",
  },
  {
    symptom: "A mission feels impossible even though the squad looks upgraded",
    page: "Mission Difficulty Guide or Research Priority",
    why: "The campaign may be solving the wrong problem with the wrong tools.",
  },
  {
    symptom: "You do not know how to structure the squad at all",
    page: "Unit Guide or Squad Composition Guide",
    why: "The roster likely lacks honest job coverage rather than raw quality.",
  },
];

const faqs = [
  {
    question: "What should a new MENACE player focus on first?",
    answer:
      "Focus on reading the first repeated failure correctly. Usually that is contact quality, mission fit, or campaign cost, not perfect builds or perfect upgrades.",
  },
  {
    question: "Is there a fixed first-five-hours checklist?",
    answer:
      "No. This page is not a fake first-five-hours checklist. Use it to identify what kind of failure is already repeating, then move to the page that addresses that failure directly.",
  },
  {
    question: "What is the most common beginner mistake?",
    answer:
      "Trying to solve every early problem with stronger-looking units or gear instead of fixing the burden that is actually making the campaign unstable.",
  },
];

export default function BeginnersGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">New Commander Routing</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-3">
          Beginner&apos;s Guide to <span className="text-accent">MENACE</span>
        </h1>
        <p className="text-text-muted leading-relaxed">
          New players improve fastest when they stop looking for a giant universal checklist and
          start reading the first thing that keeps going wrong. In MENACE, the real beginner lesson
          is usually campaign reading, not memorizing more menu details.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {earlyProblems.map((item) => (
          <div key={item.problem} className="p-5 rounded-xl border border-border bg-surface">
            <h2 className="text-lg font-bold font-heading mb-2">{item.problem}</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-2">{item.read}</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text-primary font-medium">Go next:</span> {item.next}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> Early Habits That Actually Transfer
        </h2>
        {starterHabits.map((habit) => (
          <div key={habit.title} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold mb-2">{habit.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{habit.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-heading mb-4">
          <span className="text-accent">#</span> Which Page Should You Open Next?
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-hover">
              <tr>
                <th className="p-3 border border-border">Symptom</th>
                <th className="p-3 border border-border">Best Next Page</th>
                <th className="p-3 border border-border">Why</th>
              </tr>
            </thead>
            <tbody>
              {routingTable.map((row) => (
                <tr key={row.symptom} className="align-top">
                  <td className="p-3 border border-border font-semibold">{row.symptom}</td>
                  <td className="p-3 border border-border text-accent">{row.page}</td>
                  <td className="p-3 border border-border text-text-muted">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-accent">#</span> FAQ
        </h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/combat" className="text-accent hover:underline">
          Combat →
        </Link>
        <Link href="/unit-guide" className="text-accent hover:underline">
          Unit Guide →
        </Link>
        <Link href="/squad-leaders" className="text-accent hover:underline">
          Squad Leaders →
        </Link>
        <Link href="/resources" className="text-accent hover:underline">
          Resources →
        </Link>
      </div>
      <p className="text-xs text-text-muted mt-8">Last updated: July 12, 2026</p>
    </div>
  );
}
