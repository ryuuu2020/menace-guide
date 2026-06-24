import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MENACE Guide",
  description: "About the MENACE Guide — unofficial fan guide and wiki for the tactical RPG MENACE by Overhype Studios and Hooded Horse.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold font-heading mb-6">About <span className="text-accent">MENACE Guide</span></h1>

      <div className="prose prose-sm text-text-muted space-y-4">
        <p>
          MENACE Guide is an unofficial fan resource dedicated to the tactical RPG MENACE, developed
          by Overhype Studios and published by Hooded Horse. We are not affiliated with, endorsed by,
          or connected to Overhype Studios or Hooded Horse in any official capacity.
        </p>
        <p>
          Our mission is to provide the most comprehensive strategy guide for MENACE players — from
          beginner tips to expert tactics. All squad leader stats, weapon data, faction information,
          and strategic analysis are based on publicly available game information and community research.
        </p>
        <p>
          MENACE is a trademark of Overhype Studios. All game content, names, and assets are the
          property of their respective owners.
        </p>
        <h2 className="text-lg font-bold font-heading text-text mt-6">Contact</h2>
        <p>
          For questions, corrections, or feedback, reach out through the official MENACE community
          channels or the Hooded Horse Discord server.
        </p>
      </div>
    </div>
  );
}
