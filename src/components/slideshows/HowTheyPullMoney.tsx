"use client";

import Slideshow from "../content/Slideshow";
import { CreditCard, Building2, ArrowDownToLine, Lock, ShieldCheck, FileText } from "lucide-react";

const slides = [
  {
    icon: <CreditCard className="w-14 h-14 text-blue-600" />,
    title: "How MCA Companies Take Your Money",
    body: <p>When you sign an MCA agreement, you give the company <strong>legal permission to pull money from your business</strong> every day. Here&apos;s exactly how it works — and what you can and can&apos;t do about it.</p>,
  },
  {
    icon: <FileText className="w-14 h-14 text-blue-600" />,
    title: "The Authorization You Signed",
    body: <p>Buried in your MCA contract is an <strong>ACH authorization form</strong>. By signing it, you gave the MCA company permission to withdraw money directly from your business bank account. This is legally binding and very hard to reverse.</p>,
  },
  {
    icon: <ArrowDownToLine className="w-14 h-14 text-red-600" />,
    title: "Method 1: ACH Withdrawals",
    body: (
      <div className="text-left space-y-2">
        <p><strong>How it works:</strong> The MCA company sends a daily debit instruction to your bank through the ACH network.</p>
        <p><strong>When:</strong> Every business day, usually early morning.</p>
        <p><strong>Amount:</strong> A fixed dollar amount OR a percentage of yesterday&apos;s deposits.</p>
        <p><strong>You&apos;ll see it as:</strong> A daily withdrawal on your bank statement.</p>
      </div>
    ),
    highlight: { label: "Typical Daily Pull", value: "$200 - $2,000+", color: "red" as const },
  },
  {
    icon: <CreditCard className="w-14 h-14 text-amber-600" />,
    title: "Method 2: Credit Card Split",
    body: (
      <div className="text-left space-y-2">
        <p><strong>How it works:</strong> Your credit card processor is instructed to send a percentage of every card transaction directly to the MCA company.</p>
        <p><strong>When:</strong> In real time, with every card sale.</p>
        <p><strong>Amount:</strong> Usually 10-25% of each transaction.</p>
        <p><strong>You never see this money</strong> — it&apos;s diverted before it hits your account.</p>
      </div>
    ),
    highlight: { label: "Typical Split", value: "10-25% of card sales", color: "amber" as const },
  },
  {
    icon: <Building2 className="w-14 h-14 text-blue-600" />,
    title: "What If Business Is Slow?",
    body: (
      <div className="text-left space-y-2">
        <p><strong>With percentage-based holdbacks:</strong> If you make less, they take less. This sounds fair — but you still owe the full amount, it just takes longer.</p>
        <p><strong>With fixed ACH withdrawals:</strong> They take the same amount regardless of your revenue. Bad month? Doesn&apos;t matter — the withdrawal still hits.</p>
      </div>
    ),
  },
  {
    icon: <Lock className="w-14 h-14 text-red-600" />,
    title: "What Happens If You Block Payments?",
    body: (
      <div className="text-left space-y-2">
        <p><strong>Do NOT just block ACH payments</strong> without legal advice. Here&apos;s what can happen:</p>
        <p>The MCA company can claim you <strong>breached the contract</strong></p>
        <p>They may <strong>freeze your bank account</strong> through a UCC lien</p>
        <p>If you signed a <strong>Confession of Judgment</strong>, they can get a court judgment without a trial</p>
        <p>They may demand the <strong>full remaining balance immediately</strong></p>
      </div>
    ),
  },
  {
    icon: <ShieldCheck className="w-14 h-14 text-green-600" />,
    title: "How to Protect Yourself",
    body: (
      <div className="text-left space-y-2">
        <p><strong>Before signing:</strong> Understand exactly how payments will be taken.</p>
        <p><strong>Ask for percentage-based holdbacks</strong> instead of fixed ACH — it&apos;s safer when business is slow.</p>
        <p><strong>Never sign a Confession of Judgment</strong> if you can avoid it.</p>
        <p><strong>If you&apos;re struggling:</strong> Talk to the MCA company about modifying terms BEFORE you miss payments.</p>
        <p><strong>Get legal help</strong> from an attorney who specializes in MCA contracts before blocking payments.</p>
      </div>
    ),
  },
];

export default function HowTheyPullMoney() {
  return <Slideshow title="How MCA Companies Pull Money From Your Account" slides={slides} />;
}
