export default function NotFound() {
  return (
    <div className="min-h-screen bg-abyss text-text-primary flex items-center justify-center">
      <div className="text-center px-4 py-20 max-w-lg">
        <div className="text-6xl mb-6 opacity-30">🔮</div>
        <h1 className="text-3xl font-heading font-bold mb-3">
          Coming <span className="text-gold">Soon</span>
        </h1>
        <p className="text-text-secondary text-sm mb-6">
          This guide page is being crafted by our Nusantara scholars.
          We are researching, verifying, and writing in-depth content.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="/" className="px-4 py-2 border border-border-subtle rounded bg-abyss-light text-text-secondary hover:text-text-primary hover:border-gold/30 transition-colors">
            ← Back Home
          </a>
          <a href="/faq" className="px-4 py-2 border border-border-subtle rounded bg-abyss-light text-text-secondary hover:text-text-primary hover:border-gold/30 transition-colors">
            FAQ
          </a>
        </div>
        <p className="text-xs text-text-muted mt-8">
          Want to speed things up?{' '}
          <a href="https://app.unifans.io/c/ryu2020" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            Support us on UniFans
          </a>
        </p>
      </div>
    </div>
  );
}
