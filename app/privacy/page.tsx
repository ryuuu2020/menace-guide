import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MENACE Guide.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold font-heading mb-6">Privacy <span className="text-accent">Policy</span></h1>
      <div className="text-sm text-text-muted space-y-4 leading-relaxed">
        <p>Last updated: July 2026</p>

        <h2 className="text-lg font-bold font-heading text-text">Information We Collect</h2>
        <p>
          MENACE Guide does not require account creation, comments, or direct checkout on-site. We do
          not intentionally collect legal names, mailing addresses, or payment details through normal
          browsing. We do receive standard aggregate analytics signals such as page views, device type,
          referral source, and approximate region.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Cookies</h2>
        <p>
          We use cookies or similar technologies through Google Analytics 4 and Google AdSense to
          measure traffic and serve advertising. You can disable cookies in your browser settings at
          any time, though some analytics and ad-delivery behavior may become less accurate.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Third-Party Services</h2>
        <p>
          We use Google Analytics for traffic analysis and Google AdSense for advertising. Guide pages
          may also link to Steam, UniFans, and other GameGuideHub properties. Once you leave this site,
          those services operate under their own privacy policies.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Contact</h2>
        <p>
          We use collected data to improve guide quality, identify thin pages, and understand what
          players actually read. We do not sell personal identity data. For privacy-related inquiries,
          contact us through{" "}
          <a href="https://app.unifans.io/c/ryu2020" className="text-accent hover:underline">
            UniFans
          </a>
          .
        </p>
      </div>
    </div>
  );
}
