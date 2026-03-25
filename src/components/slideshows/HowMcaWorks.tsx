"use client";

import Slideshow from "../content/Slideshow";
import { FileText, Banknote, TrendingDown, CircleDollarSign, AlertTriangle, Calendar, Building2, HelpCircle } from "lucide-react";

const slides = [
  {
    icon: <HelpCircle className="w-14 h-14 text-blue-600" />,
    title: "What is an MCA?",
    body: <p>A Merchant Cash Advance is <strong>not a loan</strong>. It is a company buying a portion of your future sales at a discount. You get cash now, and they take a cut of your daily revenue until they get their money back — plus a hefty fee.</p>,
  },
  {
    icon: <FileText className="w-14 h-14 text-blue-600" />,
    title: "Step 1: You Apply",
    body: <p>The application is fast — often just 1 page. They look at your <strong>bank statements</strong> (usually 3-6 months) and daily credit card sales. Bad credit? They usually don&apos;t care. That&apos;s part of the appeal.</p>,
  },
  {
    icon: <Banknote className="w-14 h-14 text-green-600" />,
    title: "Step 2: You Get Funded Fast",
    body: <p>Approved in hours, funded in <strong>1-3 business days</strong>. The money hits your bank account. It feels great — but here&apos;s where you need to pay attention to the fine print.</p>,
    highlight: { label: "Typical Funding", value: "$5,000 - $500,000", color: "green" as const },
  },
  {
    icon: <TrendingDown className="w-14 h-14 text-red-600" />,
    title: "Step 3: Daily Payments Start",
    body: <p>Starting the next business day, the MCA company <strong>automatically withdraws money from your bank account</strong>. This is called a &quot;holdback&quot; — usually 10-25% of your daily revenue. Every. Single. Day.</p>,
    highlight: { label: "Daily Holdback", value: "10-25% of daily sales", color: "red" as const },
  },
  {
    icon: <Building2 className="w-14 h-14 text-blue-600" />,
    title: "How They Pull Money",
    body: (
      <div className="text-left space-y-2">
        <p>MCA companies take payments in two ways:</p>
        <p><strong>ACH Withdrawals:</strong> They pull money directly from your business bank account via Automated Clearing House. You signed authorization for this.</p>
        <p><strong>Split Withholding:</strong> Your credit card processor automatically diverts a percentage of every card sale to the MCA company before you see it.</p>
      </div>
    ),
  },
  {
    icon: <CircleDollarSign className="w-14 h-14 text-amber-600" />,
    title: "The Factor Rate",
    body: <p>Instead of interest rates, MCAs use a <strong>factor rate</strong> — a multiplier like 1.2 to 1.5. If you borrow $50,000 with a 1.35 factor rate, you pay back $50,000 x 1.35 = <strong>$67,500 total</strong>. That extra $17,500 is their fee — and unlike a loan, paying early usually doesn&apos;t save you anything.</p>,
    highlight: { label: "Example Total Cost", value: "$50K → $67,500", color: "red" as const },
  },
  {
    icon: <AlertTriangle className="w-14 h-14 text-red-600" />,
    title: "The Real APR",
    body: <p>Because MCAs are repaid so quickly (usually 3-12 months), the effective APR is shockingly high. That $50K advance at 1.35 repaid over 90 days? The effective APR is approximately <strong>142%</strong>. Compare that to an SBA loan at 6-13% APR.</p>,
    highlight: { label: "Effective APR Range", value: "40% - 350%", color: "red" as const },
  },
  {
    icon: <Calendar className="w-14 h-14 text-blue-600" />,
    title: "When Does It End?",
    body: <p>Payments continue daily until the full amount (funding x factor rate) is paid back. If business is slow, it takes longer — but you still owe the same total amount. There is <strong>no benefit to paying early</strong> with most MCAs. The total cost is locked in from day one.</p>,
  },
];

export default function HowMcaWorks() {
  return <Slideshow title="How a Merchant Cash Advance Works" slides={slides} />;
}
