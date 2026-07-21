import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for MENACE Guide.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold font-heading mb-6">Terms of <span className="text-accent">Service</span></h1>
      <div className="text-sm text-text-muted space-y-4 leading-relaxed">
        <p>Last updated: July 2026</p>

        <h2 className="text-lg font-bold font-heading text-text">Content Disclaimer</h2>
        <p>
          The content on MENACE Guide is provided for informational purposes only. We aim to publish
          decision-useful squad, faction, and mission-planning guidance, but patches and player
          discoveries can make older recommendations incomplete until a page is reviewed.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Intellectual Property</h2>
        <p>
          All game-related names, images, and trademarks are the property of their respective owners.
          Our original guide content, analysis, and editorial writing remain protected by copyright,
          while official assets remain the property of their owners.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Acceptable Use</h2>
        <p>
          You may share links to MENACE Guide and quote short passages with attribution. You may not
          republish full pages as your own commercial guide product, scrape the site in a way that
          harms availability, or present this site as official developer documentation.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Contact</h2>
        <p>
          The site may show Google AdSense advertisements, but advertising does not determine our
          recommendations. For inquiries about these terms or to report a material error, contact us
          through{" "}
          <a href="https://app.unifans.io/c/ryu2020" className="text-accent hover:underline">
            UniFans
          </a>
          .
        </p>
      </div>
    </div>
  );
}
