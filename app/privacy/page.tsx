import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MENACE Guide.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold font-heading mb-6">Privacy <span className="text-accent">Policy</span></h1>
      <div className="text-sm text-text-muted space-y-4 leading-relaxed">
        <p>Last updated: June 2026</p>

        <h2 className="text-lg font-bold font-heading text-text">Information We Collect</h2>
        <p>
          We use Google Analytics to collect anonymous usage data including page views, time on site,
          and approximate geographic location. This data helps us improve the guide and understand
          what content players find most useful.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Cookies</h2>
        <p>
          Google Analytics uses cookies to track user behavior. You can disable cookies in your
          browser settings. We do not use any other tracking mechanisms or advertising cookies.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Third-Party Services</h2>
        <p>
          This site uses Google Analytics (Google LLC) for traffic analysis. Google&apos;s privacy policy
          applies to data collected through this service. We do not share any data with other third parties.
        </p>

        <h2 className="text-lg font-bold font-heading text-text">Contact</h2>
        <p>
          For privacy-related inquiries, please reach out through the official MENACE community channels.
        </p>
      </div>
    </div>
  );
}
