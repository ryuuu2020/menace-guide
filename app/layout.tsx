import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/data";

const GA_ID = "G-ET6778V62K";

const NAV_ITEMS = [
  { label: 'Squad Leaders', href: '/squad-leaders' },
  { label: 'Beginners Guide', href: '/beginners-guide' },
  { label: 'Factions', href: '/factions' },
  { label: 'Weapons', href: '/weapons' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Combat', href: '/combat' },
  { label: 'Black Market', href: '/black-market' },
];

const STATS = [
  { label: 'ACTIVE LEADERS', value: '11' },
  { label: 'S-TIER', value: '3' },
  { label: 'FACTIONS', value: '7' },
  { label: 'PATCH', value: 'EA 1.0' },
];

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | MENACE Guide`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "google4cd6cdf221ea7b0b",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "MENACE Guide",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "MENACE Guide", "url": "https://menace-guide.vercel.app"}`
          }}
        />

      </head>
      <body className="font-body min-h-screen flex flex-col">
        {/* ── Sidebar + Main wrapper ── */}
        <div className="flex min-h-screen flex-1">
          {/* ===== Sidebar ===== */}
          <aside className="hidden lg:flex flex-col w-56 bg-[#0a0e13] border-r border-border-subtle shrink-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle hover:bg-white/5 transition-colors">
              <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
              </div>
              <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
                MENACE
              </span>
            </Link>

            {/* Navigation */}
            <nav className="py-4 flex flex-col gap-0.5 flex-1">
              <Link
                href="/"
                className="sidebar-link"
              >
                <span className="w-1.5 h-1.5 bg-current opacity-40" />
                Home
              </Link>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sidebar-link"
                >
                  <span className="w-1.5 h-1.5 bg-current opacity-40" />
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom info */}
            <div className="p-4 border-t border-border-subtle">
              <p className="text-[11px] font-mono text-text-muted">MENACE Guide</p>
              <p className="text-[10px] font-mono text-text-muted mt-0.5">v1.0.0</p>
            </div>
          </aside>

          {/* ===== Main content area ===== */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* ===== Top Stats Bar ===== */}
            <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
              {/* Stats */}
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </span>
                  <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                    {stat.value}
                  </span>
                </div>
              ))}

              {/* Spacer */}
              <div className="flex-1" />

              {/* Support Us link */}
              <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors mr-3">
                ❤️ Support Us
              </a>

              {/* ONLINE indicator */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
                <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
              </div>
            </header>

            {/* ===== Page content ===== */}
            <main className="flex-1 bg-tactical-grid">
              {children}
            </main>

            {/* ===== Footer ===== */}
            <footer className="border-t border-border-subtle bg-abyss">
              <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-text-muted">
                    <span>&copy; {new Date().getFullYear()} MENACE Guide. </span>
                    <span className="text-text-muted/50">
                      Unofficial fan guide for MENACE by Overhype Studios / Hooded Horse.
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/about"
                      className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/terms"
                      className="text-[11px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                    >
                      Terms
                    </Link>
                  </div>
                </div>

                {/* Inter-site links */}
                <div className="mt-4 pt-4 border-t border-grid-line">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                    More Game Guides
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://olden-era-guide-tau.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors"
                    >
                      Olden Era Guide
                    </a>
                    <a
                      href="https://dispatch-guide-sigma.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors"
                    >
                      Dispatch Guide
                    </a>
                    <a
                      href="https://tabletop-tavern-guide.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors"
                    >
                      Tabletop Tavern Guide
                    </a>
                  </div>
                </div>

                {/* Support links */}
                <div className="mt-4 pt-4 border-t border-grid-line">
                  <div className="flex flex-wrap gap-4 items-center">
                    <a
                      href="https://afdian.com/a/gameguidehub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                    >
                      ❤️ Support Us
                    </a>
                  </div>
                </div>

                <p className="text-center text-[10px] font-mono text-text-muted mt-4">
                  Available on PC via Steam, GOG, Epic Games Store, and Microsoft Store. Early Access.
                </p>
              </div>
            
              {/* E-E-A-T: Sources & Last Updated */}
              <div className="mt-4 pt-4 border-t border-clay/30">
                <p className="font-body text-xs text-stone text-center">
                  <strong>Sources:</strong> All guides are based on the <a href="https://store.steampowered.com/app/2432860/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Steam patch notes</a>, community testing, and gameplay experience.
                </p>
                <p className="font-body text-xs text-stone text-center mt-1">Last updated: June 2026</p>
              </div>

            </footer>
          </div>
        </div>

        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script
          strategy="lazyOnload"
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
