import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold font-heading text-accent mb-4">404</h1>
      <p className="text-lg text-text-muted mb-6">This sector of the Wayback System is uncharted.</p>
      <Link
        href="/"
        className="inline-flex px-5 py-2.5 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm"
      >
        Return to Base
      </Link>
    </div>
  );
}
