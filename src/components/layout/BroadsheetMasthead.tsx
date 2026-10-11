"use client";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
const links = [{ href: "/guides/what-is-mca", label: "MCA basics" }, { href: "/guides/mca-alternatives", label: "Alternatives" }, { href: "/guides/mca-debt-relief-2026-guide", label: "Debt help" }, { href: "/guides", label: "Guides" }, { href: "/about", label: "About" }];
export default function BroadsheetMasthead() {
  return <header className="site-header"><div className="site-wrap header-row"><Link href="/" className="brand" aria-label="The MCA Guide home"><span className="brand-mark" aria-hidden="true">m<span>↗</span></span><span>The MCA<span className="brand-second">Guide.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav><Link className="header-tool" href="/tools">Free tools <ArrowUpRight size={17} /></Link><details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={25} /></summary><nav aria-label="Mobile navigation" onClick={e => { if ((e.target as HTMLElement).closest("a")) e.currentTarget.closest("details")?.removeAttribute("open"); }}>{links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}<Link href="/tools">Free tools</Link></nav></details></div></header>;
}
