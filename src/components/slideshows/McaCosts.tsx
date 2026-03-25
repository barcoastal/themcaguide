"use client";

import Slideshow from "../content/Slideshow";
import { DollarSign, Percent, Calculator, TrendingUp, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

const slides = [
  {
    icon: <DollarSign className="w-14 h-14 text-blue-600" />,
    title: "Understanding MCA Costs",
    body: <p>MCAs don&apos;t use interest rates like regular loans. They use something called a <strong>factor rate</strong>. This makes it hard to compare to other financing — and that&apos;s by design. Let&apos;s break it down simply.</p>,
  },
  {
    icon: <Percent className="w-14 h-14 text-blue-600" />,
    title: "What is a Factor Rate?",
    body: <p>A factor rate is a <strong>decimal number</strong>, usually between 1.1 and 1.5. You multiply it by your advance amount to get the total you owe. Simple math: <strong>$50,000 x 1.35 = $67,500</strong>. You pay back $67,500 total.</p>,
    highlight: { label: "Common Factor Rates", value: "1.10 - 1.50", color: "blue" as const },
  },
  {
    icon: <Calculator className="w-14 h-14 text-amber-600" />,
    title: "Let's Do the Math",
    body: (
      <div className="text-left space-y-2">
        <p><strong>You receive:</strong> $50,000</p>
        <p><strong>Factor rate:</strong> 1.35</p>
        <p><strong>You pay back:</strong> $50,000 x 1.35 = $67,500</p>
        <p><strong>Total cost/fee:</strong> $17,500</p>
        <p><strong>Your daily revenue:</strong> $5,000</p>
        <p><strong>Holdback (15%):</strong> $750/day taken from your account</p>
        <p><strong>Payoff time:</strong> ~90 business days</p>
      </div>
    ),
    highlight: { label: "Total Fee on $50K", value: "$17,500", color: "red" as const },
  },
  {
    icon: <TrendingUp className="w-14 h-14 text-red-600" />,
    title: "The Hidden Truth: Effective APR",
    body: <p>Lenders use factor rates because they <strong>hide the true annual cost</strong>. That 1.35 factor rate on a 90-day repayment? It works out to roughly <strong>142% APR</strong>. A bank loan for the same amount might be 8-15% APR. That&apos;s 10x cheaper.</p>,
    highlight: { label: "Effective APR", value: "~142%", color: "red" as const },
  },
  {
    icon: <Scale className="w-14 h-14 text-green-600" />,
    title: "MCA vs Other Options",
    body: (
      <div className="text-left space-y-2">
        <p><strong>MCA ($50K):</strong> Pay back $67,500 → $17,500 in fees</p>
        <p><strong>SBA Loan ($50K, 10%, 3yr):</strong> Pay back ~$58,000 → $8,000 in interest</p>
        <p><strong>Business Line of Credit ($50K, 12%):</strong> Pay back ~$53,000 → $3,000 in interest</p>
        <p>The MCA costs <strong>2-6x more</strong> than traditional financing.</p>
      </div>
    ),
  },
  {
    icon: <AlertTriangle className="w-14 h-14 text-amber-600" />,
    title: "No Early Payoff Benefit",
    body: <p>With a regular loan, paying early saves you money on interest. With most MCAs, <strong>you owe the full amount no matter what</strong>. Pay it off in 30 days or 120 days — the total cost is the same. Some MCAs offer a small discount for early payoff, but this is rare.</p>,
  },
  {
    icon: <CheckCircle2 className="w-14 h-14 text-green-600" />,
    title: "How to Protect Yourself",
    body: (
      <div className="text-left space-y-2">
        <p><strong>Always calculate the effective APR</strong> before signing anything.</p>
        <p><strong>Use our free calculator</strong> to see the real cost of any MCA offer.</p>
        <p><strong>Compare with at least 2-3 other financing options</strong> before deciding.</p>
        <p><strong>Ask:</strong> &quot;What is the total amount I will pay back?&quot; — if they dodge this question, walk away.</p>
      </div>
    ),
  },
];

export default function McaCosts() {
  return <Slideshow title="The Real Cost of an MCA — Explained Simply" slides={slides} />;
}
