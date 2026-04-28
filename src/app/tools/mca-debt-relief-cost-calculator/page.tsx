import Calculator from "./Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCA Debt Relief Cost Calculator — Compare DIY, Company, Attorney",
  description: "Compare the real out-of-pocket cost of settling MCA debt yourself vs using a debt relief company vs hiring an attorney. Free calculator.",
  alternates: { canonical: "https://themcaguide.com/tools/mca-debt-relief-cost-calculator" },
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">MCA Debt Relief Cost Calculator</h1>
      <p className="text-lg text-slate-700 mb-8">
        Compare the true out-of-pocket cost of each MCA debt relief path: DIY, debt relief company, or attorney. Enter your debt, expected settlement percent, and path-specific fees to see who keeps more of your savings.
      </p>
      <Calculator />
      <div className="prose mt-12 max-w-none">
        <h2>How this calculator works</h2>
        <p>Settlement amount is computed as <code>totalOwed * settlementPercent</code>. Savings before fees is the difference. Each path applies fees differently:</p>
        <ul>
          <li><strong>DIY:</strong> Zero fees. You keep 100 percent of the savings.</li>
          <li><strong>Debt relief company:</strong> Fee taken as a percent of savings (typical 25 to 40 percent). Out of pocket is settlement + fee.</li>
          <li><strong>Attorney:</strong> Retainer + hourly rate * estimated hours. Out of pocket is settlement + legal fees.</li>
        </ul>
        <p>These are estimates based on typical fee structures. Your actual settlement percentage depends on your specific situation. See our related resources below.</p>
        <h2>Related resources</h2>
        <ul>
          <li><a href="/articles/can-you-negotiate-mca-debt">MCA Debt Relief vs DIY Settlement</a></li>
          <li><a href="/articles/best-mca-debt-relief-companies">Best MCA Debt Relief Companies</a></li>
          <li><a href="/guides/mca-attorney-complete-guide">MCA Attorney Complete Guide</a></li>
          <li><a href="/articles/mca-settlement-complete-guide">MCA Settlement Success Rates (Data)</a></li>
          <li><a href="/articles/can-you-negotiate-mca-debt">How to Negotiate MCA Settlement</a></li>
        </ul>
      </div>
    </div>
  );
}
