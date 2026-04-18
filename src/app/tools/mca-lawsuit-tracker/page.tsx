import Tracker from "./Tracker";
import type { Metadata } from "next";
import { lawsuits } from "./tracker-data";

export const metadata: Metadata = {
  title: "MCA Lawsuit Tracker — Public Cases and Enforcement Actions (2026)",
  description:
    "A tracker of publicly reported MCA lawsuits, regulatory actions, and appellate decisions. Sourced from NY AG, FTC, CFPB, and court records.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-lawsuit-tracker",
  },
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">MCA Lawsuit Tracker</h1>
      <p className="text-lg text-slate-700 mb-8">
        A tracker of {lawsuits.length} publicly documented MCA lawsuits,
        regulatory actions, and appellate decisions. Every case links to a
        primary source. This tracker is for educational purposes and does not
        constitute legal advice.
      </p>
      <Tracker />
      <div className="prose mt-12 max-w-none">
        <h2>How this tracker is compiled</h2>
        <p>
          Cases are compiled from public sources: NY Attorney General press
          releases, FTC enforcement announcements, CFPB enforcement actions,
          published appellate opinions, and journalism-of-record
          investigations. Every row links to a primary source URL so you can
          verify the claim.
        </p>
        <p>
          Criteria for inclusion: the case must be publicly reported, must
          involve an MCA or alleged MCA, and must have a source URL we can link
          to. We do not include cases sourced only from private attorney
          marketing or unverified social media claims.
        </p>
        <h2>Want a specific case tracked?</h2>
        <p>
          If you know of a publicly reported MCA case not listed here and want
          it added, the tracker is maintained by{" "}
          <a href="/about">The MCA Guide</a>.
        </p>
        <h2>Related resources</h2>
        <ul>
          <li>
            <a href="/articles/mca-lawsuit-being-sued-playbook">
              MCA Lawsuit Being Sued Playbook
            </a>
          </li>
          <li>
            <a href="/articles/mca-lawsuit-defense-strategies">
              MCA Lawsuit Defense Strategies
            </a>
          </li>
          <li>
            <a href="/guides/mca-attorney-complete-guide">
              MCA Attorney Complete Guide
            </a>
          </li>
          <li>
            <a href="/articles/ny-confession-of-judgment-ban-mca">
              NY Confession of Judgment Ban MCA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
