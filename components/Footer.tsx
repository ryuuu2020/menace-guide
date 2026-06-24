import Link from "next/link";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            MENACE Guide &copy; {new Date().getFullYear()}. Unofficial fan guide for MENACE by Overhype Studios / Hooded Horse.
          </p>
          <div className="flex gap-4 text-sm">
            {footerLinks.filter(l => !l.external).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-text-muted mt-3">
          Available on PC via Steam, GOG, Epic Games Store, and Microsoft Store. Early Access.
        </p>
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-xs font-semibold uppercase text-text-muted tracking-wider mb-3">More Game Guides</h4>
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="https://olden-era-guide-tau.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Olden Era Guide
            </a>
            <a
              href="https://dispatch-guide-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Dispatch Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
