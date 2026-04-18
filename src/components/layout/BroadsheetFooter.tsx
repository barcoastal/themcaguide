import Link from "next/link";
import "@/styles/broadsheet.css";

export default function BroadsheetFooter() {
  return (
    <div className="broadsheet">
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="title">The MCA Guide</div>
              <p
                style={{
                  maxWidth: "420px",
                  color: "var(--ink-soft)",
                  fontSize: "14.5px",
                  marginTop: "8px",
                }}
              >
                An independent publication on merchant cash advances, small-business lending, and the true cost of fast capital. From one business owner to another.
              </p>
            </div>
            <div>
              <h4>Sections</h4>
              <ul>
                <li><Link href="/blog/before-mca">Before Taking an MCA</Link></li>
                <li><Link href="/blog/choosing-mca">Choosing an MCA</Link></li>
                <li><Link href="/blog/getting-out">Getting Out of MCA Debt</Link></li>
                <li><Link href="/tools">All Tools</Link></li>
                <li><Link href="/templates">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4>Guides</h4>
              <ul>
                <li><Link href="/guides/mca-debt-relief-2026-guide">MCA Debt Relief</Link></li>
                <li><Link href="/guides/mca-attorney-complete-guide">MCA Attorney Guide</Link></li>
                <li><Link href="/guides/mca-debt-settlement">Debt Settlement</Link></li>
                <li><Link href="/mca-laws-by-state">MCA Laws by State</Link></li>
                <li><Link href="/glossary">Glossary</Link></li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li><Link href="/about">Mission</Link></li>
                <li><Link href="/editorial-policy">Editorial Standards</Link></li>
                <li><Link href="/how-we-make-money">How We Make Money</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="fine">
            <span>© 2026 The MCA Guide</span>
            <span>Not legal or financial advice · Consult a professional</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
