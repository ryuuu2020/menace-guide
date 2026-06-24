"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-accent font-heading font-bold text-xl tracking-wider">
            MENACE
          </span>
          <span className="hidden sm:inline text-text-muted text-sm font-heading">
            GUIDE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-text-muted hover:text-accent transition-colors rounded-md hover:bg-surface-hover"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1 text-text-muted hover:text-accent"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-surface px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-text-muted hover:text-accent transition-colors rounded-md hover:bg-surface-hover"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
