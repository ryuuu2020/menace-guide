import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for MENACE Guide.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold font-heading mb-6">Terms of <span className="text-accent">Service</span></h1>
      <div className="text-sm text-text-muted space-y-4 leading-relaxed">
        <p>Last updated: June 2026</p>

        <h2 className="text-lg font-bold font-heading text-text">Disclaimer</h2>
        <p>
          MENACE Guide is an unofficial fan resource. We are not affiliated with Overhype Studios or
          Hooded Horse. All game-related content, names, and trademarks belong to their respective owners.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Use of Content</h2>
        <p>
          Our guide content is provided for informational purposes. While we strive for accuracy, game
          mechanics may change with updates and patches. We are not responsible for any decisions made
          based on our guide content.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Intellectual Property</h2>
        <p>
          All original written content on this site is our intellectual property. Game names, character
          names, stats, and mechanics referenced are the intellectual property of Overhype Studios.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Limitation of Liability</h2>
        <p>
          This site is provided &quot;as is&quot; without warranty. We are not liable for any damages arising
          from the use of this website.
        </p>
      </div>
    </div>
  );
}
