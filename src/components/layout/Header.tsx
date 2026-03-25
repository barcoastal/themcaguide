"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/articles", label: "Articles" },
  { href: "/tools", label: "Tools" },
  { href: "/glossary", label: "Glossary" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo-v1.png" alt="The MCA Guide" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}
