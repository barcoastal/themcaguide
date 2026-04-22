import Link from "next/link";
import BroadsheetCalculator from "@/components/home/BroadsheetCalculator";

export default function Home() {
  return (
    <div className="broadsheet">
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="hero-kicker">Special Report · Front Page</div>
              <h1>
                What a fast&nbsp;advance<br />
                <em>actually costs you</em>.
              </h1>
              <p className="hero-dek">
                Merchant cash advances promise capital in days. They deliver debt that can compound for years. Plug in your numbers, the paper does the math, so you do not have to trust a broker&apos;s.
              </p>
              <div className="hero-byline">
                <span>By Bar Alezrah</span>
                <span>Reading time · 7 min</span>
                <span>Updated {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
              </div>
            </div>
            <BroadsheetCalculator />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="ticker">
        <div className="wrap">
          <div className="ticker-grid">
            <div className="tk">
              <div className="n">40&ndash;350%</div>
              <div className="l">Typical MCA effective APR</div>
            </div>
            <div className="tk">
              <div className="n">$17,500</div>
              <div className="l">Fees on a $50K advance</div>
            </div>
            <div className="tk">
              <div className="n">1&ndash;3 days</div>
              <div className="l">Time to funding</div>
            </div>
            <div className="tk">
              <div className="n">5&ndash;18 mo</div>
              <div className="l">Typical repayment window</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three paths */}
      <section className="paths">
        <div className="wrap">
          <div className="paths-head">
            <div className="section-label">The Three Paths</div>
            <h2>Where are you in the story?</h2>
            <p>Pick your starting point. The guide adapts to the situation.</p>
          </div>
          <div className="paths-grid">
            <div className="path">
              <div className="num">I.</div>
              <div className="stage">Before · Step 1</div>
              <h3>You&apos;re considering an MCA.</h3>
              <p>
                Cheaper alternatives exist. Here&apos;s how to fix your cash flow without signing a confession of judgment.
              </p>
              <Link href="/blog/before-mca" className="go">Explore options →</Link>
            </div>
            <div className="path">
              <div className="num">II.</div>
              <div className="stage">During · Step 2</div>
              <h3>You&apos;re about to sign.</h3>
              <p>
                How to read the contract, spot red flags, negotiate the factor rate, and avoid the traps that bury businesses.
              </p>
              <Link href="/blog/choosing-mca" className="go">Learn how →</Link>
            </div>
            <div className="path emergency">
              <div className="num">III.</div>
              <div className="stage" style={{ color: "var(--red-deep)" }}>After · Emergency</div>
              <h3>You&apos;re stuck in MCA debt.</h3>
              <p>
                Settlement, restructuring, and legal options. A playbook for getting out, written by people who have.
              </p>
              <Link href="/blog/getting-out" className="go">Find help →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how">
        <div className="wrap">
          <div className="how-head">
            <div className="kicker">The Mechanics</div>
            <h2>How an MCA really works,<br />in four acts.</h2>
            <p>The first three sound convenient. The fourth is where the trap closes.</p>
          </div>
          <div className="how-grid">
            <div className="step">
              <div className="step-no">Act I</div>
              <h3>You Apply</h3>
              <p>
                A short form. Three months of bank statements. Approval in hours. By design there is almost no friction, which is the first warning sign.
              </p>
            </div>
            <div className="step">
              <div className="step-no">Act II</div>
              <h3>You Are Funded Fast</h3>
              <p>
                One to three business days. No collateral, no covenants, no relationship. Speed is the product. You pay dearly for it.
              </p>
            </div>
            <div className="step">
              <div className="step-no">Act III</div>
              <h3>Payments Begin</h3>
              <p>
                The funder sweeps 10 to 25 percent of your daily card sales. Every weekday. Every holiday. Whether you had a good day or not.
              </p>
            </div>
            <div className="step alert">
              <div className="step-no">Act IV · The Reveal</div>
              <h3>You Pay Back Far More</h3>
              <p>
                On a $50,000 advance at 1.35 factor, you repay $67,500, a $17,500 fee. Annualized, that is an effective APR north of 60 percent. Sometimes 300.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost feature */}
      <section className="cost-feature">
        <div className="wrap">
          <div className="cost-grid">
            <div>
              <div className="section-label cost-kicker">The Real Cost</div>
              <h2>A $50,000 loan,<br />four honest prices.</h2>
              <p className="dek">
                Same principal. Same term. Very different totals. The industry rarely shows them side by side. We will.
              </p>
              <p style={{ fontFamily: "var(--serif-body)", fontSize: "16px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "24px" }}>
                The chart reads left to right, most expensive first. The most expensive product, by a wide margin, is also the one most aggressively marketed to small businesses. That is not an accident. It is a feature of the channel.
              </p>
              <Link href="/guides/mca-debt-relief-2026-guide" className="btn">Read the full report →</Link>
              <div className="fine" style={{ marginTop: "30px" }}>
                Source: Industry averages, 2026 · Total repaid over 9-month term
              </div>
            </div>

            <div className="bars">
              <div className="bars-head">
                <div className="t">$50,000 Principal · Total Repaid</div>
                <div className="s">9 mo term</div>
              </div>
              <div className="bar worst">
                <div className="bar-name">MCA</div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "100%" }} /></div>
                <div className="bar-cost">$67,500</div>
              </div>
              <div className="bar">
                <div className="bar-name">Online Lender</div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "86%" }} /></div>
                <div className="bar-cost">$58,000</div>
              </div>
              <div className="bar">
                <div className="bar-name">SBA Loan</div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "79%" }} /></div>
                <div className="bar-cost">$53,500</div>
              </div>
              <div className="bar">
                <div className="bar-name">Bank LOC</div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "78%" }} /></div>
                <div className="bar-cost">$52,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story stack */}
      <section className="stack">
        <div className="wrap">
          <h2 className="section-title">From the Editor&apos;s Desk</h2>
          <p className="section-tagline">Reported, sourced, and written for owners, not for lenders.</p>
          <div className="stack-grid">
            <article className="lead-story">
              <div className="kicker">Investigation · 12 min read</div>
              <h3>
                <Link href="/articles/ny-confession-of-judgment-ban-mca">
                  The Confession of Judgment: How a four-word clause bankrupts small businesses.
                </Link>
              </h3>
              <p className="dek">
                Tucked deep in the contract, it waives your right to a day in court. One missed payment and the funder can freeze your accounts, before you&apos;ve heard you&apos;re in default.
              </p>
              <p className="excerpt">
                When the UCC filing arrives, it is usually too late. The borrower thought they were financing a season. The funder thought they were writing a lien. Both were right, and only one had read the paper. This is the first piece in a series on the legal architecture of merchant cash advance contracts, and why a product marketed as a &quot;purchase of future receivables&quot; looks, walks, and collects like a loan.
              </p>
              <div className="byline-inline">By Bar Alezrah · Updated April 19</div>
            </article>

            <article className="side-story">
              <div className="kicker">Playbook</div>
              <h4>
                <Link href="/guides/mca-attorney-complete-guide">
                  When do you need an MCA attorney? A simple decision guide.
                </Link>
              </h4>
              <p>
                Not every MCA problem needs a lawyer. But a handful of situations, lawsuits, COJs, stacked positions, are nearly impossible without one. Here is how to tell.
              </p>
              <span className="byline">9 min · MCA Attorney Guide</span>
            </article>

            <article className="side-story">
              <div className="kicker">Reference</div>
              <h4>
                <Link href="/articles/best-mca-debt-relief-companies">
                  Best MCA debt relief companies in 2026, compared.
                </Link>
              </h4>
              <p>
                Fees, service models, public reviews, and complaints. An editorial comparison of the firms owners are being pitched, ranked against DIY and attorney paths.
              </p>
              <span className="byline">8 min · Editorial Review</span>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
