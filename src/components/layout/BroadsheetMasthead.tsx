import Link from "next/link";
import "@/styles/broadsheet.css";

const navLinks = [
  { href: "/blog/before-mca", label: "Before MCA" },
  { href: "/blog/choosing-mca", label: "If You Need One" },
  { href: "/blog/getting-out", label: "Stuck in Debt" },
  { href: "/tools", label: "Tools" },
  { href: "/guides/mca-debt-relief-2026-guide", label: "Debt Relief" },
  { href: "/guides/mca-attorney-complete-guide", label: "Attorney Guide" },
];

export default function BroadsheetMasthead() {
  return (
    <div className="broadsheet">
      <header className="masthead">
        <div className="wrap">
          <div className="masthead-bar">
            <span>Vol. I · Independent Publication</span>
            <span><span className="dot">●</span> Not a Lender · Not a Broker</span>
            <span>By Bar Alezrah</span>
          </div>
          <div className="masthead-title">
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              The MCA Guide
            </Link>
          </div>
          <div className="masthead-sub">All the funding facts that are fit to print</div>
          <nav className="mast-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
